"use client";

import { VizFrame } from "../viz-frame";
import { useLoadingDemo } from "./loading-demo";
import { Grid } from "./loading-demo.styled";
import type { LoadingDemoProps } from "./loading-demo.type";
import { PatternCard } from "./pattern-card";

/** 로딩 패턴을 작은 앱 화면 안에서 실제로 움직여 보여 준다. 화면에 들어오면 반복 재생된다. */
export function LoadingDemo({ patterns, caption }: LoadingDemoProps) {
  const { ref, inView } = useLoadingDemo();
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
