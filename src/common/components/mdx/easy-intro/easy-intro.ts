"use client";

import { useEffect, useState } from "react";
import { useGetEasyMode } from "@/common/atoms/easy-mode";

/** 쉬운 모드가 켜져 있으면 펼친 채로 시작하고, 아니면 접힌 채로 둔다. 손으로 연 상태는 그대로 둔다 */
export function useEasyIntro() {
  const easy = useGetEasyMode();
  const [open, setOpen] = useState(false);

  // localStorage는 첫 렌더 뒤에 읽히므로 값이 오면 따라간다
  useEffect(() => {
    setOpen(easy);
  }, [easy]);

  return { open, toggle: (next: boolean) => setOpen(next) };
}
