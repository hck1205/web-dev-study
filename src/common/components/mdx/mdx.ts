import type { MDXComponents } from "mdx/types";
import { AlgoTrace } from "./algo-trace";
import { Callout } from "./callout";
import { ConceptDiagram } from "./concept-diagram";
import { MdxTable } from "./mdx-table";
import { SequenceDiagram } from "./sequence-diagram";
import { UrlAnatomy } from "./url-anatomy";
import { VectorSpace } from "./vector-space";

// MDX 본문에서 쓸 수 있는 컴포넌트. wrapper(글 레이아웃)는 루트 mdx-components.tsx에서 연결한다.
// 글은 텍스트보다 시각화로 설명하는 것을 우선한다: SequenceDiagram, ConceptDiagram, UrlAnatomy, AlgoTrace, VectorSpace.
export const mdxComponents: MDXComponents = {
  table: MdxTable,
  Callout,
  SequenceDiagram,
  ConceptDiagram,
  UrlAnatomy,
  AlgoTrace,
  VectorSpace,
};
