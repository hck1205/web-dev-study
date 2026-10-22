"use client";

import { useGetEasyMode, useSetEasyMode } from "@/common/atoms/easy-mode";

export function useEasyModeToggle() {
  const easy = useGetEasyMode();
  const setEasy = useSetEasyMode();
  return {
    easy,
    label: easy ? "쉬운 모드 끄기: 쉬운 설명을 접고 용어 풀이를 숨긴다" : "쉬운 모드 켜기: 글마다 쉬운 설명을 펼치고 용어 풀이를 보여 준다",
    toggle: () => setEasy(!easy),
  };
}
