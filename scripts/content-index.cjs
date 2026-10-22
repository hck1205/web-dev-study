/**
 * 글 지도(콘텐츠 색인)를 만든다. `pnpm content:index` (빌드 전에도 자동으로 돈다)
 *
 * - src/features/content-map/registry/relations.generated.ts : /map 페이지가 쓰는 글 사이 관계
 * - src/features/quiz/registry/counts.generated.ts : 글마다 퀴즈 문제 수 (글·토픽 페이지의 퀴즈 링크가 문제 본문 없이 개수만 읽는다)
 * - docs/content-index.md : 새 글을 쓰기 전에 읽는 색인 (토픽별 글, 소제목, 키워드 소유, 관계, 중복·긴 글 후보)
 *
 * 관계는 두 가지다.
 * - link: 본문에 직접 쓴 /posts/{slug} 링크
 * - mention: 다른 글의 키워드가 본문에 나와서 백링크가 걸리는 경우 (remark-backlinks와 같은 규칙)
 */
require("sucrase/register/ts");

const fs = require("node:fs");
const path = require("node:path");

const ROOT = path.join(__dirname, "..");
const POSTS_DIR = path.join(ROOT, "src/app/posts");
const GENERATED = path.join(ROOT, "src/features/content-map/registry/relations.generated.ts");
const QUIZ_COUNTS = path.join(ROOT, "src/features/quiz/registry/counts.generated.ts");
const INTERVIEW = path.join(ROOT, "src/features/study/registry/interview.generated.ts");
const DOC = path.join(ROOT, "docs/content-index.md");

/** 이 줄 수를 넘는 글은 쪼갤 후보로 표시한다. */
const LONG_POST_LINES = 900;

const { POSTS } = require(path.join(ROOT, "src/features/posts/registry/posts.ts"));
const { TOPICS } = require(path.join(ROOT, "src/features/topics/registry/topics.ts"));
const { QUESTION_SETS } = require(path.join(ROOT, "src/features/quiz/registry/questions/index.ts"));

const escapeRegExp = (text) => text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const keywordPattern = (keyword) =>
  new RegExp(
    /^[A-Za-z0-9]/.test(keyword) ? `(?<![A-Za-z0-9])${escapeRegExp(keyword)}(?![A-Za-z0-9])` : escapeRegExp(keyword),
  );

/** 코드 블록, 인라인 코드, import/export 줄, 제목을 뺀 본문 텍스트 (백링크가 걸릴 수 있는 곳만) */
function proseOf(source) {
  return source
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`[^`\n]*`/g, " ")
    .split("\n")
    .filter((line) => !/^\s*(import|export)\s/.test(line) && !/^\s*#{1,6}\s/.test(line))
    .join("\n")
    .replace(/\[[^\]]*\]\([^)]*\)/g, " ");
}

function readPost(slug) {
  const file = path.join(POSTS_DIR, slug, "page.mdx");
  if (!fs.existsSync(file)) return null;
  const source = fs.readFileSync(file, "utf8");
  const withoutCode = source.replace(/```[\s\S]*?```/g, "");
  const headings = [...withoutCode.matchAll(/^##\s+(.+)$/gm)].map((match) => match[1].trim());
  const links = [...new Set([...source.matchAll(/\]\(\/posts\/([a-z0-9-]+)/g)].map((match) => match[1]))].filter(
    (target) => target !== slug,
  );
  return { source, headings, links, lines: source.split("\n").length };
}

const posts = POSTS.map((post) => ({ ...post, file: readPost(post.slug) })).filter((post) => post.file);
const known = new Set(posts.map((post) => post.slug));

// 백링크 규칙: 긴 키워드부터, 대상 글마다 처음 한 번만, 직접 링크한 글은 제외
const keywordEntries = posts
  .flatMap((post) => (post.keywords ?? []).map((keyword) => ({ slug: post.slug, keyword, pattern: keywordPattern(keyword) })))
  .sort((a, b) => b.keyword.length - a.keyword.length);

const relations = {};
for (const post of posts) {
  const prose = proseOf(post.file.source);
  const links = post.file.links.filter((target) => known.has(target));
  const mentions = [];
  for (const entry of keywordEntries) {
    if (entry.slug === post.slug || links.includes(entry.slug) || mentions.includes(entry.slug)) continue;
    if (entry.pattern.test(prose)) mentions.push(entry.slug);
  }
  relations[post.slug] = { links, mentions };
}

// ---- relations.generated.ts ----
const generated = `// 자동 생성 파일이다. 직접 고치지 말고 \`pnpm content:index\`를 실행한다 (scripts/content-index.cjs).
import type { PostRelations } from "./types";

export const POST_RELATIONS: Record<string, PostRelations> = ${JSON.stringify(relations, null, 2)};
`;
fs.mkdirSync(path.dirname(GENERATED), { recursive: true });
fs.writeFileSync(GENERATED, generated);

// ---- counts.generated.ts ----
const quizCounts = {};
for (const question of QUESTION_SETS.flat()) quizCounts[question.post] = (quizCounts[question.post] ?? 0) + 1;
fs.writeFileSync(
  QUIZ_COUNTS,
  `// 자동 생성 파일이다. 직접 고치지 말고 \`pnpm content:index\`를 실행한다 (scripts/content-index.cjs).
// 글 slug → 퀴즈 문제 수. 문제 본문을 번들에 싣지 않고 개수만 보여 줄 때 쓴다.
export const QUESTION_COUNTS: Record<string, number> = ${JSON.stringify(quizCounts, null, 2)};
`,
);

// ---- interview.generated.ts ----
// 글 끝의 "## 면접에서 나올 만한 질문" 섹션에서 질문(###)과 답을 뽑아 복습 카드로 쓴다. /study에서만 동적으로 불러온다.
const INTERVIEW_HEADING = "면접에서 나올 만한 질문";
const plainText = (markdown) =>
  markdown
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/`([^`\n]*)`/g, "$1")
    .replace(/[*_]{1,2}([^*_]+)[*_]{1,2}/g, "$1")
    .replace(/<[^>]+>/g, "")
    .replace(/\s+\n/g, "\n")
    .trim();
const interview = {};
for (const post of posts) {
  const match = post.file.source.match(new RegExp(`^##\\s+${INTERVIEW_HEADING}\\s*$([\\s\\S]*)`, "m"));
  if (!match) continue;
  const body = match[1].split(/^##\s/m)[0].replace(/```[\s\S]*?```/g, "");
  const parts = body.split(/^###\s+/m).slice(1);
  const items = parts
    .map((part) => {
      const [first, ...rest] = part.split("\n");
      const answer = plainText(rest.join("\n")).split(/\n{2,}/).map((p) => p.replace(/\n/g, " ").trim()).filter(Boolean).join("\n\n");
      return { question: plainText(first), answer };
    })
    .filter((item) => item.question && item.answer);
  if (items.length) interview[post.slug] = items;
}
fs.mkdirSync(path.dirname(INTERVIEW), { recursive: true });
fs.writeFileSync(
  INTERVIEW,
  `// 자동 생성 파일이다. 직접 고치지 말고 \`pnpm content:index\`를 실행한다 (scripts/content-index.cjs).
// 글 slug → "면접에서 나올 만한 질문" 섹션의 질문과 답. /study 복습 카드가 쓴다.
import type { InterviewQuestion } from "./types";

export const INTERVIEW_QUESTIONS: Record<string, InterviewQuestion[]> = ${JSON.stringify(interview, null, 2)};
`,
);

// ---- docs/content-index.md ----
const flatTopics = [];
const walkTopics = (nodes, trail) => {
  for (const node of [...nodes].sort((a, b) => a.label.localeCompare(b.label))) {
    const ids = [...trail.ids, node.id];
    const labels = [...trail.labels, node.label];
    flatTopics.push({ key: ids.join("/"), label: labels.join(" › "), depth: ids.length });
    if (node.children) walkTopics(node.children, { ids, labels });
  }
};
walkTopics(TOPICS, { ids: [], labels: [] });

const incoming = {};
for (const [slug, rel] of Object.entries(relations)) {
  for (const target of [...rel.links, ...rel.mentions]) (incoming[target] ??= new Set()).add(slug);
}

const titleOf = Object.fromEntries(posts.map((post) => [post.slug, post.title]));
const lines = [];
const push = (...rows) => lines.push(...rows);

push(
  "# 글 지도 (콘텐츠 색인)",
  "",
  "> 자동 생성 문서다. 직접 고치지 말고 `pnpm content:index`로 다시 만든다.",
  "> 새 글을 쓰기 전에 이 문서를 먼저 읽는다: 같은 주제의 글이 있는지, 어느 토픽에 둘지, 어떤 글로 링크할지, 어떤 키워드가 이미 쓰였는지 확인한다.",
  "",
  `글 ${posts.length}편 · 토픽 ${flatTopics.length}개 · 생성 기준: posts.ts + src/app/posts/*/page.mdx`,
  "",
  "## 토픽별 글",
  "",
);

for (const topic of flatTopics) {
  const inTopic = posts.filter((post) => post.topic === topic.key);
  if (inTopic.length === 0) continue;
  push(`### ${topic.label} (\`${topic.key}\`)`, "");
  for (const post of inTopic.sort((a, b) => a.slug.localeCompare(b.slug))) {
    const rel = relations[post.slug];
    const inc = [...(incoming[post.slug] ?? [])].sort();
    push(`#### \`${post.slug}\` — ${post.title}`, "");
    push(`- 요약: ${post.summary}`);
    push(`- 태그: ${post.tags.join(", ")}${post.companies?.length ? ` · 회사: ${post.companies.join(", ")}` : ""}`);
    push(`- 키워드: ${(post.keywords ?? []).join(", ") || "(없음)"}`);
    push(`- 길이: ${post.file.lines}줄${post.file.lines > LONG_POST_LINES ? " (긴 글)" : ""}`);
    push(`- 소제목: ${post.file.headings.join(" / ")}`);
    if (rel.links.length) push(`- 직접 링크 →: ${rel.links.join(", ")}`);
    if (rel.mentions.length) push(`- 키워드 백링크 →: ${rel.mentions.join(", ")}`);
    if (inc.length) push(`- 이 글로 오는 글 ←: ${inc.join(", ")}`);
    push("");
  }
}

const orphanTopics = posts.filter((post) => !flatTopics.some((topic) => topic.key === post.topic));
if (orphanTopics.length) {
  push("## 토픽이 없는 글 (topics.ts와 맞지 않음)", "");
  for (const post of orphanTopics) push(`- \`${post.slug}\` → \`${post.topic}\``);
  push("");
}

push("## 키워드 소유 (백링크 대상)", "", "같은 키워드를 두 글이 가지면 긴 키워드·먼저 찾은 글로만 링크된다. 새 글의 키워드는 여기 없는 말로 고른다.", "");
for (const entry of [...keywordEntries].sort((a, b) => a.keyword.localeCompare(b.keyword, "ko"))) {
  push(`- ${entry.keyword} → \`${entry.slug}\``);
}
push("");

// 겹칠 수 있는 글: 소제목·태그 단어가 많이 겹치는 쌍
const tokens = (post) =>
  new Set(
    [...post.file.headings.filter((h) => h !== "면접에서 나올 만한 질문"), ...post.tags, post.title]
      .join(" ")
      .toLowerCase()
      .split(/[^0-9a-z가-힣+#.]+/)
      .filter((word) => word.length >= 2),
  );
// 여러 글에 흔히 나오는 단어(태그 이름, "시험", "하나" 같은 말)는 겹침 근거가 못 되니 뺀다.
const rawSets = Object.fromEntries(posts.map((post) => [post.slug, tokens(post)]));
const docFreq = new Map();
for (const set of Object.values(rawSets)) for (const word of set) docFreq.set(word, (docFreq.get(word) ?? 0) + 1);
const maxFreq = Math.max(3, Math.round(posts.length * 0.04));
const tokenSets = Object.fromEntries(
  Object.entries(rawSets).map(([slug, set]) => [slug, new Set([...set].filter((word) => docFreq.get(word) <= maxFreq))]),
);
const pairs = [];
for (let i = 0; i < posts.length; i += 1) {
  for (let j = i + 1; j < posts.length; j += 1) {
    const a = tokenSets[posts[i].slug];
    const b = tokenSets[posts[j].slug];
    const shared = [...a].filter((word) => b.has(word));
    const score = shared.length / Math.min(a.size, b.size);
    if (shared.length >= 3 && score >= 0.12) pairs.push({ a: posts[i].slug, b: posts[j].slug, score, shared });
  }
}
pairs.sort((x, y) => y.score - x.score);
push(
  "## 겹칠 수 있는 글 (자동 추정)",
  "",
  "제목·소제목·태그 단어가 많이 겹치는 쌍이다. 새 글이 이 주제를 다루면 둘 중 어느 글에 넣을지, 서로 링크로 나눌지 먼저 정한다.",
  "",
);
for (const pair of pairs.slice(0, 40)) {
  push(`- \`${pair.a}\` ↔ \`${pair.b}\` (${Math.round(pair.score * 100)}%: ${pair.shared.slice(0, 8).join(", ")})`);
}
push("");

const related = (from, to) => relations[from].links.includes(to) || relations[from].mentions.includes(to);
const mutual = [];
for (let i = 0; i < posts.length; i += 1) {
  for (let j = i + 1; j < posts.length; j += 1) {
    const [a, b] = [posts[i].slug, posts[j].slug];
    if (related(a, b) && related(b, a)) mutual.push(`\`${a}\` ↔ \`${b}\``);
  }
}
push(
  "## 서로 이어진 글",
  "",
  "양쪽이 서로를 링크하거나 키워드로 가리키는 쌍이다. 내용 경계가 맞닿아 있으니 한쪽 글을 고칠 때 다른 쪽과 겹치지 않는지 본다.",
  "",
  ...mutual.map((pair) => `- ${pair}`),
  "",
);

push(`## 긴 글 (${LONG_POST_LINES}줄 초과, 쪼갤 후보)`, "");
for (const post of posts.filter((p) => p.file.lines > LONG_POST_LINES).sort((a, b) => b.file.lines - a.file.lines)) {
  push(`- \`${post.slug}\` ${post.file.lines}줄 — ${titleOf[post.slug]}`);
}
push("");

const lonely = posts.filter((post) => !relations[post.slug].links.length && !relations[post.slug].mentions.length && !incoming[post.slug]);
if (lonely.length) {
  push("## 다른 글과 연결이 없는 글", "");
  for (const post of lonely) push(`- \`${post.slug}\` — ${post.title}`);
  push("");
}

fs.mkdirSync(path.dirname(DOC), { recursive: true });
fs.writeFileSync(DOC, lines.join("\n"));
console.log(`content index: ${posts.length} posts, ${pairs.length} overlap pairs → docs/content-index.md`);
