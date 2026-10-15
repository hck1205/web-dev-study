"use client";

import { useState } from "react";
import { useInView } from "@/common/hooks/use-in-view";
import type { UrlAnatomyProps } from "./url-anatomy.type";

export function useUrlAnatomy({ params }: UrlAnatomyProps) {
  const [selected, setSelected] = useState(0);
  const [touched, setTouched] = useState(false);
  const { ref, inView } = useInView<HTMLDivElement>(0.5);

  return {
    ref,
    // 처음 화면에 들어왔을 때, 아직 아무것도 누르지 않았다면 조각들이 차례로 반짝인다.
    intro: inView && !touched,
    selected,
    select: (index: number) => {
      setTouched(true);
      setSelected(index);
    },
    param: params[selected],
  };
}
