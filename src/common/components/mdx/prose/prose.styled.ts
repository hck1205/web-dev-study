import styled from "@emotion/styled";
import { media } from "@/common/styles/breakpoints";

// MDX 본문 전체에 적용되는 반응형 타이포그래피. 기본값은 모바일이고 tablet/desktop에서 키운다.
export const Article = styled.article`
  font-size: 1rem;
  line-height: 1.75;
  /* 한글은 단어 단위로 줄바꿈하고, 너무 긴 토큰만 강제로 끊는다 */
  word-break: keep-all;
  overflow-wrap: break-word;

  ${media.tablet} {
    font-size: 1.0625rem;
  }

  h1 {
    margin: 0 0 1rem;
    font-size: 1.625rem;
    line-height: 1.3;
  }
  h2 {
    margin: 2.25rem 0 0.75rem;
    padding-bottom: 0.3rem;
    border-bottom: 1px solid rgb(128 128 128 / 0.3);
    font-size: 1.3125rem;
    line-height: 1.35;
  }
  h3 {
    margin: 1.75rem 0 0.5rem;
    font-size: 1.125rem;
  }
  ${media.tablet} {
    h1 {
      font-size: 2rem;
    }
    h2 {
      font-size: 1.5rem;
    }
    h3 {
      font-size: 1.25rem;
    }
  }
  ${media.desktop} {
    h1 {
      font-size: 2.25rem;
    }
  }

  p,
  ul,
  ol,
  blockquote {
    margin: 0.9rem 0;
  }
  ul,
  ol {
    padding-left: 1.4rem;
  }
  li + li {
    margin-top: 0.25rem;
  }
  blockquote {
    padding: 0.1rem 1rem;
    border-left: 4px solid rgb(128 128 128 / 0.5);
    color: inherit;
    opacity: 0.85;
  }
  img,
  video {
    max-width: 100%;
    height: auto;
  }
  hr {
    margin: 2rem 0;
    border: 0;
    border-top: 1px solid rgb(128 128 128 / 0.3);
  }

  :not(pre) > code {
    padding: 0.1em 0.35em;
    border-radius: 4px;
    background: rgb(128 128 128 / 0.16);
    overflow-wrap: anywhere;
  }
  pre {
    margin: 1.1rem -1rem;
    padding: 0.9rem 1rem;
    border-radius: 0;
    font-size: 0.8125rem;
    line-height: 1.6;
    -webkit-overflow-scrolling: touch;

    code {
      overflow-wrap: normal;
      white-space: pre;
    }
  }
  ${media.tablet} {
    pre {
      margin: 1.1rem 0;
      border-radius: 8px;
      font-size: 0.875rem;
    }
  }

  /* highlight.js tokens (light) */
  .hljs-comment,
  .hljs-quote {
    color: #6a737d;
    font-style: italic;
  }
  .hljs-keyword,
  .hljs-selector-tag,
  .hljs-literal,
  .hljs-doctag {
    color: #d73a49;
  }
  .hljs-string,
  .hljs-regexp,
  .hljs-addition {
    color: #0a7a3d;
  }
  .hljs-number,
  .hljs-built_in,
  .hljs-attr,
  .hljs-meta {
    color: #005cc5;
  }
  .hljs-title,
  .hljs-section,
  .hljs-function .hljs-title {
    color: #6f42c1;
  }
  .hljs-type,
  .hljs-class .hljs-title,
  .hljs-variable,
  .hljs-template-variable {
    color: #b45309;
  }
  .hljs-deletion {
    color: #b31d28;
  }

  @media (prefers-color-scheme: dark) {
    .hljs-comment,
    .hljs-quote {
      color: #8b949e;
    }
    .hljs-keyword,
    .hljs-selector-tag,
    .hljs-literal,
    .hljs-doctag {
      color: #ff7b72;
    }
    .hljs-string,
    .hljs-regexp,
    .hljs-addition {
      color: #7ee787;
    }
    .hljs-number,
    .hljs-built_in,
    .hljs-attr,
    .hljs-meta {
      color: #79c0ff;
    }
    .hljs-title,
    .hljs-section,
    .hljs-function .hljs-title {
      color: #d2a8ff;
    }
    .hljs-type,
    .hljs-class .hljs-title,
    .hljs-variable,
    .hljs-template-variable {
      color: #ffa657;
    }
  }
`;
