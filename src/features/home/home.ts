"use client";

import type { HomeSection } from "./home.type";

export const HOME_SECTIONS: HomeSection[] = [
  { title: "Web", desc: "브라우저, 렌더링, React/Next.js" },
  { title: "Network", desc: "HTTP, TCP/IP, DNS, 캐시, 보안" },
  { title: "Infra", desc: "Docker, CI/CD, 배포, 관측성" },
  { title: "Algorithms", desc: "문제 풀이와 해설", href: "/algorithms/two-sum" },
  { title: "CS", desc: "OS, 자료구조, DB, 시스템 디자인" },
];

export function useHome() {
  return { sections: HOME_SECTIONS };
}
