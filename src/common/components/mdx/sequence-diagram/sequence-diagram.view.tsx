"use client";

import { StepControls } from "../step-controls";
import { useSequenceDiagram } from "./sequence-diagram";
import {
  ActorBox,
  ActorText,
  Arrow,
  ArrowLabel,
  Badge,
  BadgeText,
  Caption,
  Detail,
  Frame,
  Lifeline,
  MarkerPath,
  Svg,
} from "./sequence-diagram.styled";
import type { SequenceDiagramProps, StepState } from "./sequence-diagram.type";
import { stepState } from "./sequence-diagram.utils";

const STATES: StepState[] = ["ghost", "past", "active"];

/**
 * 주고받는 메시지를 위에서 아래로 그리는 시퀀스 다이어그램.
 * "다음"을 누를 때마다 한 단계씩 강조되고, 아래 설명 패널이 쉬운 말로 무슨 일이 일어나는지 알려준다.
 */
export function SequenceDiagram(props: SequenceDiagramProps) {
  const { actors, steps, caption } = props;
  const { player, uid, layout, step } = useSequenceDiagram(props);
  const { width, height, lane, headerHeight, actorX, rowY } = layout;
  const lastActor = actors[actors.length - 1].id;

  return (
    <Frame>
      {caption && <Caption>{caption}</Caption>}

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

        {actors.map((actor) => (
          <g key={actor.id}>
            <Lifeline x1={actorX[actor.id]} x2={actorX[actor.id]} y1={headerHeight - 4} y2={height - 4} />
            <ActorBox x={actorX[actor.id] - lane * 0.42} y={4} width={lane * 0.84} height={headerHeight - 12} rx={8} />
            <ActorText x={actorX[actor.id]} y={4 + (headerHeight - 12) / 2}>
              {actor.label}
            </ActorText>
          </g>
        ))}

        {steps.map((s, index) => {
          const state = stepState(index, player.index);
          const y = rowY(index);
          const x1 = actorX[s.from];
          const x2 = actorX[s.to];
          const self = s.from === s.to;
          const side = s.from === lastActor ? -1 : 1;
          const mid = (x1 + x2) / 2;
          const dir = x2 >= x1 ? 1 : -1;

          return (
            <g key={index} onClick={() => player.goTo(index)} style={{ cursor: "pointer" }}>
              {self ? (
                <>
                  <Arrow
                    state={state}
                    d={`M${x1},${y - 10} H${x1 + side * 28} V${y + 8} H${x1 + 2 * side}`}
                    markerEnd={`url(#${uid}-${state})`}
                  />
                  <ArrowLabel
                    state={state}
                    x={x1 + side * 34}
                    y={y - 1}
                    textAnchor={side === 1 ? "start" : "end"}
                  >
                    {s.label}
                  </ArrowLabel>
                  <Badge state={state} cx={x1} cy={y - 10} r={7} />
                  <BadgeText state={state} x={x1} y={y - 10}>
                    {index + 1}
                  </BadgeText>
                </>
              ) : (
                <>
                  <Arrow state={state} d={`M${x1},${y} H${x2 - dir * 2}`} markerEnd={`url(#${uid}-${state})`} />
                  <ArrowLabel state={state} x={mid} y={y - 9} textAnchor="middle">
                    {s.label}
                  </ArrowLabel>
                  <Badge state={state} cx={x1 + dir * 14} cy={y} r={7} />
                  <BadgeText state={state} x={x1 + dir * 14} y={y}>
                    {index + 1}
                  </BadgeText>
                </>
              )}
            </g>
          );
        })}
      </Svg>

      <Detail aria-live="polite">
        <h4>
          {player.index + 1}. {step.title}
        </h4>
        <p>{step.detail}</p>
        {step.payload && (
          <pre>
            <code>{step.payload}</code>
          </pre>
        )}
      </Detail>

      <StepControls player={player} />
    </Frame>
  );
}
