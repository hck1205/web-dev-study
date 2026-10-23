"use client";

import { color } from "@/common/design-system";
import { useRoadmapGraph } from "./roadmap-graph";
import { EdgeFlow, EdgeLine, Edges, Layer, Legend, NextBadge, NodeBar, NodeLabel, NodeLink, NodeSub, Root } from "./roadmap-graph.styled";
import type { RoadmapGraphProps } from "./roadmap-graph.type";

const STATE_TEXT = { done: "다 적용함", progress: "진행 중", next: "지금 할 차례", todo: "앞 단계가 남았다" } as const;

/**
 * 로드맵을 노드와 연결선으로 그린다. 위에서 아래로 공부 순서대로 층이 내려가고,
 * 화살표는 "이걸 먼저 읽으면 저게 쉬워진다"는 방향이다. 열린 길(앞 노드를 다 읽음)은 초록 점선이 흐른다.
 */
export function RoadmapGraph(props: RoadmapGraphProps) {
  const graph = useRoadmapGraph(props);
  let order = 0;

  return (
    <>
      <Legend aria-label="그래프 읽는 법">
        <li>
          <svg width="28" height="8" aria-hidden>
            <path d="M0 4 H28" stroke={color.success} strokeWidth="2.5" strokeDasharray="2 6" />
          </svg>
          열린 길
        </li>
        <li>
          <svg width="28" height="8" aria-hidden>
            <path d="M0 4 H28" stroke={color.borderStrong} strokeWidth="1.75" />
          </svg>
          아직 앞 단계가 남은 길
        </li>
        <li>
          <svg width="14" height="14" aria-hidden>
            <rect x="1" y="1" width="12" height="12" rx="3" fill="none" stroke={color.accent} strokeWidth="2" />
          </svg>
          지금 할 차례
        </li>
      </Legend>

      <Root ref={graph.rootRef} role="group" aria-label={props.label}>
        <Edges width={graph.size.width} height={graph.size.height} aria-hidden>
          <defs>
            {(["met", "todo", "lit"] as const).map((kind) => (
              <marker key={kind} id={`arrow-${kind}`} viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                <path d="M0 0 L10 5 L0 10 z" fill={kind === "lit" ? color.accent : kind === "met" ? color.success : color.borderStrong} />
              </marker>
            ))}
          </defs>
          {graph.paths.map((path, index) => {
            const lit = Boolean(graph.related && (path.from === graph.focusId || path.to === graph.focusId));
            const dim = Boolean(graph.related && !lit);
            return (
              <g key={path.key}>
                <EdgeLine
                  d={path.d}
                  pathLength={1}
                  met={path.met}
                  lit={lit}
                  dim={dim}
                  kind={path.kind}
                  markerEnd={`url(#arrow-${lit ? "lit" : path.met ? "met" : "todo"})`}
                  style={{ animationDelay: `${120 + index * 60}ms` }}
                />
                {path.met && <EdgeFlow d={path.d} dim={dim} />}
              </g>
            );
          })}
        </Edges>

        {graph.layers.map((layer, layerIndex) => (
          <Layer key={layerIndex}>
            {layer.map((node) => {
              order += 1;
              return (
                <NodeLink
                  key={node.id}
                  ref={graph.registerNode(node.id)}
                  href={node.href}
                  state={node.state}
                  dim={Boolean(graph.related && !graph.related.has(node.id))}
                  onMouseEnter={() => graph.setFocusId(node.id)}
                  onMouseLeave={() => graph.setFocusId(null)}
                  onFocus={() => graph.setFocusId(node.id)}
                  onBlur={() => graph.setFocusId(null)}
                  aria-label={`${node.label}, ${STATE_TEXT[node.state]}, ${node.percent}% 적용`}
                  style={{ animationDelay: `${order * 50}ms` }}
                >
                  {node.state === "next" && <NextBadge aria-hidden>다음</NextBadge>}
                  <NodeLabel>{node.label}</NodeLabel>
                  {node.sub && <NodeSub>{node.sub}</NodeSub>}
                  <NodeBar aria-hidden>
                    <i style={{ width: `${node.percent}%` }} />
                  </NodeBar>
                </NodeLink>
              );
            })}
          </Layer>
        ))}
      </Root>
    </>
  );
}
