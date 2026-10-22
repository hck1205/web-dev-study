import type { MDXComponents } from "mdx/types";
import { AlgoTrace } from "./algo-trace";
import { Callout } from "./callout";
import { CodePlayground } from "./code-playground";
import { ConceptDiagram } from "./concept-diagram";
import { EasyIntro } from "./easy-intro";
import { GeometryMorph } from "./geometry-morph";
import { LoadingDemo } from "./loading-demo";
import { MdxTable } from "./mdx-table";
import { MotionDemo } from "./motion-demo";
import { NetworkTopology } from "./network-topology";
import { SequenceDiagram } from "./sequence-diagram";
import { UrlAnatomy } from "./url-anatomy";
import { VectorSpace } from "./vector-space";

// MDX 본문에서 쓸 수 있는 컴포넌트. wrapper(글 레이아웃)는 루트 mdx-components.tsx에서 연결한다.
// 글은 텍스트보다 시각화로 설명하는 것을 우선한다: SequenceDiagram, ConceptDiagram, NetworkTopology, UrlAnatomy, AlgoTrace, VectorSpace, GeometryMorph.
// 알고리즘 글에서 독자가 직접 코드를 고쳐 돌려 보게 할 때는 CodePlayground.
export const mdxComponents: MDXComponents = {
  table: MdxTable,
  Callout,
  EasyIntro,
  SequenceDiagram,
  ConceptDiagram,
  UrlAnatomy,
  AlgoTrace,
  VectorSpace,
  CodePlayground,
  GeometryMorph,
  NetworkTopology,
  LoadingDemo,
  MotionDemo,
  // 스크롤 패턴(sticky, scroll-snap, parallax …)도 MotionDemo의 장면이다. 글에서 이름이 더 잘 읽히도록 같은 컴포넌트를 이 이름으로도 연결한다
  ScrollDemo: MotionDemo,
};
