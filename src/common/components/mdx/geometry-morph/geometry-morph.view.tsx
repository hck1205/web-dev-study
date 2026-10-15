"use client";

import { StepControls } from "../step-controls";
import { StepDetail } from "../step-detail";
import { VizFrame } from "../viz-frame";
import { useGeometryMorph } from "./geometry-morph";
import { Label, Shape, Stage, Svg } from "./geometry-morph.styled";
import type { GeometryMorphProps } from "./geometry-morph.type";
import { toPoints } from "./geometry-morph.utils";

/** 도형 조각이 단계마다 미끄러지듯 자리를 옮긴다. 넓이 보존 증명, 도형 변환 설명에 쓴다. */
export function GeometryMorph(props: GeometryMorphProps) {
  const { width, height, shapes, caption } = props;
  const { player, ref, index, step, frame } = useGeometryMorph(props);

  return (
    <VizFrame caption={caption}>
      <Stage ref={ref}>
        <Svg viewBox={`0 0 ${width} ${height}`} role="img" aria-label={step.title}>
          {shapes.map(({ id, tone = "muted" }) => (
            <Shape
              key={id}
              points={toPoints(frame[id] ?? [])}
              tone={tone}
              visible={id in step.shapes}
              focused={step.focus?.includes(id) ?? false}
            />
          ))}
          <g key={index}>
            {step.labels?.map((label, i) => (
              <Label
                key={`${label.text}-${i}`}
                x={label.x}
                y={label.y}
                tone={label.tone ?? "text"}
                size={label.size ?? "md"}
                style={{ animationDelay: `${450 + i * 90}ms` }}
              >
                {label.text}
              </Label>
            ))}
          </g>
        </Svg>
      </Stage>
      <StepDetail index={index} title={step.title} detail={step.detail} />
      <StepControls player={player} />
    </VizFrame>
  );
}
