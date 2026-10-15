/**
 * remark 플러그인: 글 본문에서 다른 글의 키워드가 처음 나오는 곳에 그 글로 가는 링크를 건다.
 * - 빌드 시점에 동작하므로 정적 HTML에 링크가 그대로 들어간다.
 * - 제목, 코드, 이미 링크인 곳은 건드리지 않는다. 자기 자신은 링크하지 않는다.
 * - 대상 글마다 글 하나에서 처음 한 번만 링크한다.
 * - 다른 글로 가는 링크(직접 쓴 링크 포함)는 새 창에서 열린다.
 *
 * Turbopack은 플러그인을 함수로 받지 못하므로 next.config.ts에서 이 파일 경로(문자열)와
 * 직렬화 가능한 옵션 { posts: [{ slug, title, keywords }] } 으로 등록한다.
 */

const SKIP_PARENTS = new Set(["link", "linkReference", "heading", "inlineCode", "code", "definition"]);
const NEW_TAB = { target: "_blank", rel: "noopener noreferrer" };

const escapeRegExp = (text) => text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

/** 영문 키워드는 단어 중간(예: IndexedDB 안의 DB)에 걸리지 않게 앞뒤가 영숫자가 아니어야 한다. */
const keywordPattern = (keyword) =>
  /^[A-Za-z0-9]/.test(keyword) ? `(?<![A-Za-z0-9])${escapeRegExp(keyword)}(?![A-Za-z0-9])` : escapeRegExp(keyword);

/** 현재 파일 경로(.../posts/{slug}/page.mdx)에서 slug를 꺼낸다. */
const slugFromPath = (path = "") => path.replace(/\\/g, "/").match(/\/posts\/([^/]+)\/page\.mdx$/)?.[1];

export default function remarkBacklinks(options = {}) {
  const posts = options.posts ?? [];

  return (tree, file) => {
    const self = slugFromPath(file.path ?? file.history?.[0]);
    const linked = new Set();

    // 긴 키워드부터 찾아야 "리프레시 토큰"보다 "토큰"이 먼저 잡히는 일이 없다.
    const entries = posts
      .filter((post) => post.slug !== self)
      .flatMap((post) => (post.keywords ?? []).map((keyword) => ({ post, keyword })))
      .sort((a, b) => b.keyword.length - a.keyword.length);

    const walk = (node, parents) => {
      if (node.type === "link" && typeof node.url === "string" && node.url.startsWith("/posts/")) {
        node.data = { ...node.data, hProperties: { ...node.data?.hProperties, ...NEW_TAB } };
        const target = node.url.replace(/^\/posts\//, "").replace(/[#?/].*$/, "");
        linked.add(target); // 직접 링크한 글은 자동으로 다시 링크하지 않는다.
      }
      if (!Array.isArray(node.children)) return;
      if (SKIP_PARENTS.has(node.type)) return;

      for (let i = 0; i < node.children.length; i += 1) {
        const child = node.children[i];
        if (child.type !== "text") {
          walk(child, [...parents, node]);
          continue;
        }
        const replaced = linkText(child.value);
        if (replaced) {
          node.children.splice(i, 1, ...replaced);
          i += replaced.length - 1;
        }
      }
    };

    /** 텍스트 하나에서 아직 링크하지 않은 글의 키워드를 찾아 [text, link, text] 로 나눈다. */
    const linkText = (value) => {
      for (const { post, keyword } of entries) {
        if (linked.has(post.slug)) continue;
        const match = new RegExp(keywordPattern(keyword)).exec(value);
        if (!match) continue;

        linked.add(post.slug);
        const before = value.slice(0, match.index);
        const after = value.slice(match.index + match[0].length);
        const link = {
          type: "link",
          url: `/posts/${post.slug}`,
          title: post.title,
          children: [{ type: "text", value: match[0] }],
          data: { hProperties: { ...NEW_TAB, className: ["backlink"] } },
        };
        // 남은 뒷부분에서도 다른 글의 키워드를 이어서 찾는다.
        const rest = after ? (linkText(after) ?? [{ type: "text", value: after }]) : [];
        return [...(before ? [{ type: "text", value: before }] : []), link, ...rest];
      }
      return null;
    };

    walk(tree, []);
  };
}
