/**
 * remark 플러그인: 본문에서 용어집의 용어가 처음 나오는 곳을 <Term plain="…">용어</Term>로 감싼다.
 * - 쉬운 모드에서만 풀이가 보인다(Term 컴포넌트가 정한다). 꺼져 있으면 그냥 글자다.
 * - 제목, 코드, 링크 안은 건드리지 않는다. 용어마다 글 하나에서 처음 한 번만.
 * - 백링크 플러그인 뒤에 돈다. 링크가 된 글자는 건너뛴다.
 *
 * Turbopack은 플러그인을 함수로 받지 못하므로 next.config.ts에서 이 파일 경로(문자열)와
 * 직렬화 가능한 옵션 { terms: [{ term, aliases, plain }] } 으로 등록한다.
 */

const SKIP_PARENTS = new Set(["link", "linkReference", "heading", "inlineCode", "code", "definition", "mdxJsxTextElement"]);

const escapeRegExp = (text) => text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

/** 영문은 단어 경계, 한글은 그대로 찾는다 (한글 뒤에 조사가 붙으므로 뒤 경계를 두지 않는다) */
const pattern = (key) =>
  /^[A-Za-z0-9]/.test(key) ? `(?<![A-Za-z0-9])${escapeRegExp(key)}(?![A-Za-z0-9])` : escapeRegExp(key);

export default function remarkGlossary(options = {}) {
  const terms = options.terms ?? [];
  // 긴 표기부터 찾아야 "리버스 프록시"보다 "프록시"가 먼저 잡히지 않는다
  const entries = terms
    .flatMap((entry) => [entry.term, ...(entry.aliases ?? [])].map((key) => ({ key, entry })))
    .sort((a, b) => b.key.length - a.key.length);

  return (tree) => {
    const used = new Set();

    const walk = (node) => {
      if (!Array.isArray(node.children)) return;
      if (SKIP_PARENTS.has(node.type)) return;
      for (let i = 0; i < node.children.length; i += 1) {
        const child = node.children[i];
        if (child.type !== "text") {
          walk(child);
          continue;
        }
        const replaced = wrapText(child.value);
        if (replaced) {
          node.children.splice(i, 1, ...replaced);
          i += replaced.length - 1;
        }
      }
    };

    const wrapText = (value) => {
      for (const { key, entry } of entries) {
        if (used.has(entry.term)) continue;
        const match = new RegExp(pattern(key)).exec(value);
        if (!match) continue;
        used.add(entry.term);
        const before = value.slice(0, match.index);
        const after = value.slice(match.index + match[0].length);
        const element = {
          type: "mdxJsxTextElement",
          name: "Term",
          attributes: [{ type: "mdxJsxAttribute", name: "plain", value: entry.plain }],
          children: [{ type: "text", value: match[0] }],
        };
        const rest = after ? (wrapText(after) ?? [{ type: "text", value: after }]) : [];
        return [...(before ? [{ type: "text", value: before }] : []), element, ...rest];
      }
      return null;
    };

    walk(tree);
  };
}
