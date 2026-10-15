# Matt's Blog

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

- `src/app` — 라우팅 전용. 노트/문제는 `page.mdx`로 작성
- `src/common` — 공용 모듈 (components, providers, api ...)
- `src/features/{scope}/{name}` — scope별 모듈

폴더 구조와 파일 역할(`{name}.ts` / `.view.tsx` / `.styled.ts` / `.utils.ts` / `.type.ts` / `index.ts`)은 [CLAUDE.md](./CLAUDE.md)를 참고하세요.

배포는 Vercel(Git 연동)을 사용합니다.
