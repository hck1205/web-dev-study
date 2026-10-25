/** 사이트 이름·소개. 헤더·푸터·홈·<title>이 모두 여기를 쓴다. React에 의존하지 않아 서버(layout.tsx)에서도 import할 수 있다. */
export const SITE = {
  name: "Matt's Blog",
  description: "개발하며 공부한 것들을 기록하는 블로그",
} as const;

/**
 * 절대 주소가 필요한 곳(sitemap, robots, metadataBase)에서 쓰는 사이트 원점.
 * NEXT_PUBLIC_SITE_URL이 있으면 그걸, 없으면 Vercel이 넣어 주는 프로덕션 도메인을, 둘 다 없으면 로컬 주소를 쓴다.
 */
export function siteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/$/, "");
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercel) return `https://${vercel}`;
  return "http://localhost:3000";
}
