# web-dev-study

웹 개발, 네트워크, 인프라, 알고리즘 등 CS 전반을 공부하는 공간.

## Stack

Next.js (App Router) · React · TypeScript · MDX · Emotion · Jotai · Axios · TanStack Query

## Scripts

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm build
pnpm typecheck
```

## Layout

- `src/app` — 라우트. 노트/문제는 `page.mdx`로 작성
- `src/app/labs` — 서버 기능(Route Handler 등) 실험
- `src/lib` — 공용 유틸 (axios 인스턴스, Emotion SSR 레지스트리)

배포는 Vercel(Git 연동)을 사용합니다.
