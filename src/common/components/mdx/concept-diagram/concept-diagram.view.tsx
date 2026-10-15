"use client";

import { VizFrame } from "../viz-frame";
import { useConceptDiagram } from "./concept-diagram";
import { Box, EdgeLabel, Flow, Head, Line, NodeLabel, NodeSub, Svg } from "./concept-diagram.styled";
import type { ConceptDiagramProps } from "./concept-diagram.type";
import { nodeSize } from "./concept-diagram.utils";

/** 좌표를 직접 지정해 그리는 개념도. 용어들의 관계를 한눈에 보여줄 때 쓴다. */
export function ConceptDiagram(props: ConceptDiagramProps) {
  const { nodes, width = 400, height = 240, caption } = props;
  const { uid, ref, inView, lines } = useConceptDiagram(props);

  return (
    <VizFrame caption={caption} captionAt="bottom">
      <div ref={ref}>
        <Svg viewBox={`0 0 ${width} ${height}`} role="img" aria-label={caption ?? "개념도"}>
          <defs>
            <marker id={`${uid}-head`} viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
              <Head d="M0,0 L8,4 L0,8 z" />
            </marker>
          </defs>

          {lines.map(({ key, edge, start, end, mid }) => {
            const arrow = edge.arrow ?? "end";
            return (
              <g key={key}>
                <Line
                  dashed={edge.dashed}
                  d={`M${start.x},${start.y} L${end.x},${end.y}`}
                  markerEnd={arrow !== "none" ? `url(#${uid}-head)` : undefined}
                  markerStart={arrow === "both" ? `url(#${uid}-head)` : undefined}
                />
                {edge.label && (
                  <EdgeLabel x={mid.x} y={mid.y}>
                    {edge.label}
                  </EdgeLabel>
                )}
              </g>
            );
          })}

          {nodes.map((node) => {
            const { w, h } = nodeSize(node);
            return (
              <g key={node.id}>
                <Box x={node.x - w / 2} y={node.y - h / 2} width={w} height={h} rx={10} />
                <NodeLabel x={node.x} y={node.sub ? node.y - 3 : node.y + 4}>
                  {node.label}
                </NodeLabel>
                {node.sub && (
                  <NodeSub x={node.x} y={node.y + 11}>
                    {node.sub}
                  </NodeSub>
                )}
              </g>
            );
          })}
          {/* 화면에 들어오면 화살표 방향으로 점이 흘러간다 (dashed/none 연결은 관계만 표시하므로 제외) */}
          {inView &&
            lines.map(({ key, edge, start, end }, index) => {
              const arrow = edge.arrow ?? "end";
              if (edge.dashed || arrow === "none") return null;
              const delay = `${(index * 400) % 2400}ms`;
              const forward = { ["--dx" as string]: `${end.x - start.x}px`, ["--dy" as string]: `${end.y - start.y}px`, animationDelay: delay };
              const backward = { ["--dx" as string]: `${start.x - end.x}px`, ["--dy" as string]: `${start.y - end.y}px`, animationDelay: `calc(${delay} + 1200ms)` };
              return (
                <g key={`flow-${key}`} pointerEvents="none">
                  <Flow cx={start.x} cy={start.y} r={3.5} style={forward} />
                  {arrow === "both" && <Flow cx={end.x} cy={end.y} r={3.5} style={backward} />}
                </g>
              );
            })}
        </Svg>
      </div>
    </VizFrame>
  );
}
