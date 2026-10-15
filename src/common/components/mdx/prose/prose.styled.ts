import styled from "@emotion/styled";
import { color, font, radius, space } from "@/common/design-system";
import { media } from "@/common/styles/breakpoints";

// 글 본문 타이포그래피. 모바일 기본값 → tablet/desktop에서 확장.
export const Article = styled.div`
  font-size: 1.0625rem;
  line-height: ${font.leading.relaxed};
  color: ${color.text};
  /* 한글은 단어 단위로 줄바꿈하고, 너무 긴 토큰만 강제로 끊는다 */
  word-break: keep-all;
  overflow-wrap: break-word;

  ${media.tablet} {
    font-size: 1.125rem;
  }

  > :first-child {
    margin-top: 0;
  }

  h2 {
    margin: ${space[12]} 0 ${space[4]};
    font-size: ${font.size["2xl"]};
    font-weight: ${font.weight.bold};
    line-height: ${font.leading.snug};
  }
  h3 {
    margin: ${space[8]} 0 ${space[3]};
    font-size: ${font.size.xl};
    font-weight: ${font.weight.bold};
    line-height: ${font.leading.snug};
  }
  ${media.tablet} {
    h2 {
      font-size: ${font.size["3xl"]};
    }
  }

  /* 헤딩 앵커(rehype-slug) */
  h2,
  h3 {
    scroll-margin-top: 5rem;
  }

  /* 시각화(figure) 컴포넌트 내부는 각자 스타일을 가지므로 본문 규칙에서 제외한다 */
  p:not(figure *),
  ul:not(figure *),
  ol:not(figure *),
  blockquote:not(figure *) {
    margin: ${space[5]} 0;
  }
  ul:not(figure *),
  ol:not(figure *) {
    padding-left: ${space[6]};
  }
  li:not(figure *) + li {
    margin-top: ${space[2]};
  }
  li > p:not(figure *) {
    margin: ${space[2]} 0;
  }
  strong {
    font-weight: ${font.weight.bold};
  }

  /* 정답 확인용 접이식 (<details>) */
  details {
    margin: ${space[3]} 0;
    border: 1px solid ${color.border};
    border-radius: ${radius.md};
    background: ${color.bgSubtle};
  }
  summary {
    display: flex;
    align-items: center;
    min-height: 3rem;
    padding: ${space[2]} ${space[4]};
    font-weight: ${font.weight.semibold};
    line-height: ${font.leading.snug};
    cursor: pointer;
  }
  details[open] > summary {
    border-bottom: 1px solid ${color.border};
    color: ${color.accent};
  }
  details > :not(summary) {
    padding: 0 ${space[4]};
  }
  details > p:not(figure *) {
    margin: ${space[3]} 0;
  }
  a {
    font-weight: ${font.weight.medium};
    text-decoration: underline;
    text-decoration-color: color-mix(in srgb, ${color.accent} 40%, transparent);
  }
  a:hover {
    text-decoration-color: currentColor;
  }
  /* 다른 글로 가는 링크(백링크 포함)는 새 창에서 열린다는 표시 */
  a[target="_blank"]::after {
    content: "↗";
    margin-left: 0.1em;
    font-size: 0.75em;
    vertical-align: 0.15em;
    text-decoration: none;
  }
  blockquote {
    padding: ${space[1]} ${space[5]};
    border-left: 3px solid ${color.borderStrong};
    color: ${color.textMuted};
  }
  hr {
    margin: ${space[10]} 0;
    border: 0;
    border-top: 1px solid ${color.border};
  }
  img,
  video {
    height: auto;
    border-radius: ${radius.md};
  }

  /* 인라인 코드 */
  :not(pre, figure *) > code {
    padding: 0.15em 0.4em;
    border: 1px solid ${color.codeBorder};
    border-radius: ${radius.sm};
    background: ${color.codeBg};
    font-family: ${font.mono};
    font-size: 0.875em;
    word-break: break-word;
  }

  /* 코드 블록: 모바일에서는 화면 양끝까지 펼친다 */
  pre:not(figure *) {
    margin: ${space[6]} calc(-1 * ${space[4]});
    padding: ${space[4]};
    overflow-x: auto;
    border: solid ${color.codeBorder};
    border-width: 1px 0;
    background: ${color.codeBg};
    font-family: ${font.mono};
    font-size: 0.8125rem;
    line-height: 1.7;
    -webkit-overflow-scrolling: touch;
    word-break: normal;

    code {
      font-family: inherit;
      white-space: pre;
    }
  }
  ${media.tablet} {
    pre:not(figure *) {
      margin: ${space[6]} 0;
      padding: ${space[5]};
      border-width: 1px;
      border-radius: ${radius.md};
      font-size: 0.875rem;
    }
  }

  /* highlight.js 토큰: 색은 테마 토큰(라이트/다크 자동)을 쓴다 */
  .hljs-comment,
  .hljs-quote {
    color: ${color.syntaxComment};
    font-style: italic;
  }
  .hljs-keyword,
  .hljs-selector-tag,
  .hljs-literal,
  .hljs-doctag {
    color: ${color.syntaxKeyword};
  }
  .hljs-string,
  .hljs-regexp,
  .hljs-addition {
    color: ${color.syntaxString};
  }
  .hljs-number,
  .hljs-built_in,
  .hljs-attr,
  .hljs-meta {
    color: ${color.syntaxNumber};
  }
  .hljs-title,
  .hljs-section {
    color: ${color.syntaxTitle};
  }
  .hljs-type,
  .hljs-class .hljs-title,
  .hljs-variable,
  .hljs-template-variable {
    color: ${color.syntaxType};
  }
  .hljs-deletion {
    color: ${color.danger};
  }
`;
