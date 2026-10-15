"use client";

import { color } from "@/common/design-system";
import { StepControls } from "../step-controls";
import { VizFrame } from "../viz-frame";
import { useVectorSpace } from "./vector-space";
import {
  Arrow,
  Dot,
  Edge,
  Grid,
  Head,
  Hop,
  Label,
  Legend,
  Link,
  Query,
  Range,
  Ring,
  Say,
  Svg,
  Swatch,
} from "./vector-space.styled";
import type { VectorSpaceProps } from "./vector-space.type";

const segment = (a: { x: number; y: number }, b: { x: number; y: number }) => `M${a.x},${a.y} L${b.x},${b.y}`;

/**
 * 의미가 비슷한 것끼리 가까이 놓인 "벡터 공간"을 그린다.
 * 단계마다 질문 점 등장 → 가까운 이웃 찾기 → 그래프 따라가기 같은 과정을 애니메이션으로 보여준다.
 */
export function VectorSpace(props: VectorSpaceProps) {
  const { points, groups = [], query, edges = [], caption, width = 400, height = 260 } = props;
  const { player, ref, inView, uid, step, byId, focus, colors, origin } = useVectorSpace(props);
  const showQuery = !!step.query && !!query;
  const dimOthers = focus.size > 0;
  const path = (step.path ?? []).map((id) => byId[id]).filter(Boolean);

  // 은은한 격자: 좌표 "공간"이라는 느낌을 준다.
  const grid = [
    ...Array.from({ length: Math.floor(width / 50) }, (_, i) => `M${(i + 1) * 50},0 V${height}`),
    ...Array.from({ length: Math.floor(height / 50) }, (_, i) => `M0,${(i + 1) * 50} H${width}`),
  ].join(" ");

  return (
    <VizFrame caption={caption}>
      <div ref={ref}>
        <Svg viewBox={`0 0 ${width} ${height}`} role="img" aria-label={caption ?? "벡터 공간"}>
          <defs>
            <marker id={`${uid}-head`} viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6" markerHeight="6" orient="auto">
              <Head d="M0,0 L8,4 L0,8 z" />
            </marker>
          </defs>

          <Grid d={grid} />

          {step.showEdges &&
            edges.map(([a, b]) =>
              byId[a] && byId[b] ? (
                <Edge key={`${a}-${b}`} x1={byId[a].x} y1={byId[a].y} x2={byId[b].x} y2={byId[b].y} />
              ) : null,
            )}

          {/* 원점에서 각 점까지의 화살표: 벡터는 "방향과 길이" */}
          {step.vectors && (
            <g key={`vec-${player.index}`}>
              {[...step.vectors.map((id) => byId[id]), ...(showQuery && query ? [query] : [])]
                .filter(Boolean)
                .map((target, index) => (
                  <Arrow
                    key={index}
                    d={segment(origin, target)}
                    pathLength={1}
                    markerEnd={`url(#${uid}-head)`}
                    style={{ animationDelay: `${index * 150}ms` }}
                  />
                ))}
            </g>
          )}

          {showQuery && query && step.radius && (
            <Range key={`range-${player.index}`} cx={query.x} cy={query.y} r={step.radius} />
          )}

          {/* 질문에서 가까운 이웃까지 선이 그려진다 */}
          {showQuery && query && step.neighbors && (
            <g key={`nn-${player.index}`}>
              {step.neighbors.map((id, index) =>
                byId[id] ? (
                  <Link
                    key={id}
                    d={segment(query, byId[id])}
                    pathLength={1}
                    style={{ animationDelay: `${300 + index * 200}ms` }}
                  />
                ) : null,
              )}
            </g>
          )}

          {/* 그래프 탐색: 한 칸씩 건너뛰며 질문에 가까워진다 */}
          {path.length > 1 && (
            <g key={`path-${player.index}`}>
              {path.slice(1).map((to, index) => {
                const from = path[index];
                const delay = `${index * 550}ms`;
                return (
                  <g key={`${from.id}-${to.id}`}>
                    <Link d={segment(from, to)} pathLength={1} style={{ animationDelay: delay }} />
                    <Hop
                      cx={from.x}
                      cy={from.y}
                      r={4}
                      style={{ ["--dx" as string]: `${to.x - from.x}px`, ["--dy" as string]: `${to.y - from.y}px`, animationDelay: delay }}
                    />
                  </g>
                );
              })}
            </g>
          )}

          {points.map((point, index) => {
            const isFocus = focus.has(point.id);
            const dim = dimOthers && !isFocus;
            const pathIndex = step.path?.indexOf(point.id) ?? -1;
            const anchorEnd = point.labelAt === "left" || (point.labelAt !== "right" && point.x > width - 70);
            return (
              <g key={point.id}>
                <title>{point.label}</title>
                {isFocus && (
                  <Ring
                    key={`ring-${player.index}`}
                    cx={point.x}
                    cy={point.y}
                    r={8}
                    style={{ animationDelay: pathIndex >= 0 ? `${pathIndex * 550}ms` : "500ms" }}
                  />
                )}
                <Dot
                  key={inView ? "in" : "out"}
                  cx={point.x}
                  cy={point.y}
                  r={isFocus ? 8 : 6}
                  fill={point.group ? colors[point.group] : color.textSubtle}
                  dim={dim}
                  focus={isFocus}
                  intro={inView}
                  order={index}
                />
                <Label
                  x={anchorEnd ? point.x - 10 : point.x + 10}
                  y={point.y + 4}
                  textAnchor={anchorEnd ? "end" : "start"}
                  dim={dim}
                  focus={isFocus}
                >
                  {point.label}
                </Label>
              </g>
            );
          })}

          {showQuery && query && (
            <g key={`q-${player.index}`}>
              <Ring cx={query.x} cy={query.y} r={9} />
              {/* 마름모: transform 회전은 CSS transform-origin과 겹쳐 위치가 밀리므로 좌표로 직접 그린다 */}
              <Query d={`M${query.x},${query.y - 10} L${query.x + 10},${query.y} L${query.x},${query.y + 10} L${query.x - 10},${query.y} Z`} />
              <Label
                x={query.labelAt === "left" ? query.x - 13 : query.x + 13}
                y={query.y - 8}
                textAnchor={query.labelAt === "left" ? "end" : "start"}
                dim={false}
                focus
              >
                {query.label}
              </Label>
            </g>
          )}
        </Svg>
      </div>

      {groups.length > 1 && (
        <Legend aria-label="범례">
          {groups.slice(0, 3).map((group) => (
            <li key={group.id}>
              <Swatch tone={colors[group.id]} />
              {group.label}
            </li>
          ))}
          {query && (
            <li>
              <Swatch tone={color.text} style={{ borderRadius: 2, transform: "rotate(45deg)" }} />
              질문
            </li>
          )}
        </Legend>
      )}

      <Say key={player.index} aria-live="polite">
        {step.caption}
      </Say>
      <StepControls player={player} />
    </VizFrame>
  );
}
