"use client";

import { useState } from "react";
import type { UrlAnatomyProps } from "./url-anatomy.type";

export function useUrlAnatomy({ params }: UrlAnatomyProps) {
  const [selected, setSelected] = useState(0);

  return { selected, select: setSelected, param: params[selected] };
}
