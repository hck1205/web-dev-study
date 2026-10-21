"use client";

import { VizFrame } from "../viz-frame";
import { useMotionDemo } from "./motion-demo";
import { Grid } from "./motion-demo.styled";
import type { MotionDemoProps } from "./motion-demo.type";
import { PatternCard } from "./pattern-card";

/** UI 애니메이션 패턴을 작은 앱 화면 안에서 실제로 움직여 보여 준다. 화면에 보이는 동안 반복 재생된다. */
export function MotionDemo({ patterns, caption }: MotionDemoProps) {
  const { ref, inView } = useMotionDemo();
  const single = patterns.length === 1;

  return (
    <VizFrame caption={caption} captionAt="bottom">
      <Grid ref={ref} single={single}>
        {patterns.map((pattern) => (
          <PatternCard key={pattern} pattern={pattern} running={inView} large={single} />
        ))}
      </Grid>
    </VizFrame>
  );
}
