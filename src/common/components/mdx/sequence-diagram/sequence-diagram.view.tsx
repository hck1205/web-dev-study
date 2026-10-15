"use client";

import { VizFrame } from "../viz-frame";
import { StepControls } from "../step-controls";
import { useSequenceDiagram } from "./sequence-diagram";
import {
  ActorBox,
  ActorText,
  Arrow,
  ArrowLabel,
  Badge,
  BadgeText,
  Detail,
  DetailBody,
  DrawPath,
  Lifeline,
  MarkerPath,
  Packet,
  RowGlow,
  Ripple,
  Trail,
  Svg,
} from "./sequence-diagram.styled";
import type { SequenceDiagramProps, StepState } from "./sequence-diagram.type";
import { stepState } from "./sequence-diagram.utils";

const STATES: StepState[] = ["ghost", "past", "active"];

interface ActiveMotionProps {
  d: string;
  x1: number;
  x2: number;
  y: number;
  self: boolean;
  badgeX: number;
  badgeY: number;
}

/**
 * 현재 단계가 바뀔 때마다(key) 다시 재생된다:
 * 선 그리기 → 꼬리를 단 메시지가 날아감 → 번호와 도착 지점에 물결
 */
function ActiveMotion({ d, x1, x2, y, self, badgeX, badgeY }: ActiveMotionProps) {
  const travel = { ["--dx" as string]: `${x2 - x1}px`, ["--dy" as string]: "0px" };
  return (
    <g pointerEvents="none">
      <DrawPath d={d} pathLength={1} />
      {!self && (
        <>
          <Trail cx={x1} cy={y} r={3} style={{ ...travel, animationDelay: "90ms" }} />
          <Trail cx={x1} cy={y} r={3.75} style={{ ...travel, animationDelay: "45ms" }} />
          <Packet cx={x1} cy={y} r={5} style={travel} />
          <Ripple cx={x2} cy={y} r={6} style={{ animationDelay: "600ms" }} />
        </>
      )}
      <Ripple cx={badgeX} cy={badgeY} r={7} />
    </g>
  );
}

/**
 * 주고받는 메시지를 위에서 아래로 그리는 시퀀스 다이어그램.
 * "다음"을 누를 때마다 한 단계씩 강조되고, 아래 설명 패널이 쉬운 말로 무슨 일이 일어나는지 알려준다.
 */
export function SequenceDiagram(props: SequenceDiagramProps) {
  const { actors, steps, caption } = props;
  const { player, uid, ref, inView, layout, step } = useSequenceDiagram(props);
  const { width, height, lane, headerHeight, actorX, rowY } = layout;
  const lastActor = actors[actors.length - 1].id;

  // 단계 하나의 화살표 모양. 그림과 애니메이션이 같은 좌표를 쓴다.
  const geometry = (index: number) => {
    const s = steps[index];
    const y = rowY(index);
    const x1 = actorX[s.from];
    const x2 = actorX[s.to];
    const self = s.from === s.to;
    const side = s.from === lastActor ? -1 : 1;
    const dir = x2 >= x1 ? 1 : -1;
    const d = self ? `M${x1},${y - 10} H${x1 + side * 28} V${y + 8} H${x1 + 2 * side}` : `M${x1},${y} H${x2 - dir * 2}`;
    return { s, y, x1, x2, self, side, dir, d, badgeX: self ? x1 : x1 + dir * 14, badgeY: self ? y - 10 : y };
  };

  return (
    <VizFrame caption={caption}>
      <div ref={ref}>
        <Svg viewBox={`0 0 ${width} ${height}`} role="img" aria-label={caption ?? "시퀀스 다이어그램"}>
          <defs>
            {STATES.map((state) => (
              <marker
                key={state}
                id={`${uid}-${state}`}
                viewBox="0 0 8 8"
                refX="7"
                refY="4"
                markerWidth="7"
                markerHeight="7"
                orient="auto-start-reverse"
              >
                <MarkerPath state={state} d="M0,0 L8,4 L0,8 z" />
              </marker>
            ))}
          </defs>

          {inView && (
            <RowGlow key={`row-${player.index}`} x={0} y={rowY(player.index) - 20} width={width} height={34} rx={6} />
          )}

          {actors.map((actor) => (
            <g key={actor.id}>
              <Lifeline
                x1={actorX[actor.id]}
                x2={actorX[actor.id]}
                y1={headerHeight - 4}
                y2={height - 4}
                active={actor.id === step.from || actor.id === step.to}
              />
              <ActorBox
                x={actorX[actor.id] - lane * 0.42}
                y={4}
                width={lane * 0.84}
                height={headerHeight - 12}
                rx={8}
                active={actor.id === step.from || actor.id === step.to}
              />
              <ActorText x={actorX[actor.id]} y={4 + (headerHeight - 12) / 2}>
                {actor.label}
              </ActorText>
            </g>
          ))}

          {steps.map((_, index) => {
            const { s, y, x1, x2, self, side, d, badgeX, badgeY } = geometry(index);
            const state = stepState(index, player.index);

            return (
              <g key={index} onClick={() => player.goTo(index)} style={{ cursor: "pointer" }}>
                <Arrow state={state} d={d} markerEnd={`url(#${uid}-${state})`} />
                {self ? (
                  <ArrowLabel state={state} x={x1 + side * 34} y={y - 1} textAnchor={side === 1 ? "start" : "end"}>
                    {s.label}
                  </ArrowLabel>
                ) : (
                  <ArrowLabel state={state} x={(x1 + x2) / 2} y={y - 9} textAnchor="middle">
                    {s.label}
                  </ArrowLabel>
                )}
                <Badge state={state} cx={badgeX} cy={badgeY} r={7} />
                <BadgeText state={state} x={badgeX} y={badgeY}>
                  {index + 1}
                </BadgeText>
              </g>
            );
          })}

          {inView && <ActiveMotion key={player.index} {...geometry(player.index)} />}
        </Svg>
      </div>

      <Detail aria-live="polite">
        <DetailBody key={player.index}>
          <h4>
            {player.index + 1}. {step.title}
          </h4>
          <p>{step.detail}</p>
          {step.payload && (
            <pre>
              <code>{step.payload}</code>
            </pre>
          )}
        </DetailBody>
      </Detail>

      <StepControls player={player} />
    </VizFrame>
  );
}
