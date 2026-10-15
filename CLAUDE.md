# web-dev-study — 코드 컨벤션

웹 개발, 네트워크, 인프라, 알고리즘 등 CS 전반을 공부하는 Next.js 프로젝트.
Stack: Next.js (App Router) · React · TypeScript · MDX · Emotion · Jotai · Axios · TanStack Query · pnpm

코드를 작성·수정할 때 아래 규칙을 항상 유지한다. 클린 코드를 지향하고, 반복되는 것은 `common`으로 공용화·모듈화한다.

## 디렉터리 구조

```
src/
  app/            라우팅 전용 (page.tsx / layout.tsx / route.ts). 로직·스타일을 두지 않고 features를 조합만 한다.
                  MDX 콘텐츠(page.mdx)는 예외적으로 여기에 둔다.
  common/         여러 scope에서 재사용하는 모듈 (components, providers, api, hooks, utils, types ...)
  features/       scope(관심사)별 모듈
    {scope}/
      {name}/
        {name}.ts
        {name}.view.tsx
        {name}.styled.ts
        {name}.utils.ts
        {name}.type.ts
        index.ts
        {하위 폴더}/            # 더 쪼갤 때 같은 구조를 반복
          {투 뎁스 하위 폴더}/
```

- 폴더·파일 이름은 kebab-case, export 이름은 PascalCase(컴포넌트·타입) / camelCase(함수)를 쓴다.
- 폴더는 관심사별로 나누고, 폴더 안에서도 같은 패턴(`{name}.*` + `index.ts`)을 재귀적으로 유지한다.

## 파일 역할

| 파일 | 역할 |
|---|---|
| `{name}.ts` | **container**. 상태, 데이터 패칭, 핸들러를 담은 `use{Name}()` 훅(또는 데이터). JSX를 쓰지 않는다 |
| `{name}.view.tsx` | **view**. container를 호출해 마크업을 렌더링한다. 비즈니스 로직을 넣지 않는다 |
| `{name}.styled.ts` | Emotion 스타일 (`styled`, `css`) |
| `{name}.utils.ts` | 순수 유틸 함수 |
| `{name}.type.ts` | 타입·인터페이스 |
| `index.ts` | 외부에 공개할 API만 re-export (보통 view 컴포넌트와 타입) |

- **필요한 파일만 만든다.** 빈 파일이나 의미 없는 껍데기 파일을 만들지 않는다.
- 외부에서는 반드시 `index.ts`를 통해 import한다 (`@/features/home`, `@/common/components/shell`). 폴더 내부 파일을 직접 import하지 않는다.
- 컴포넌트 폴더의 `index.ts`에는 container 훅을 re-export하지 않는다. 서버 컴포넌트가 barrel을 거쳐 클라이언트 전용 모듈(jotai, react-query 등)을 평가하면 빌드가 깨진다.
- **모든 코드는 클라이언트 컴포넌트로 작성한다.** container(`{name}.ts`), view(`{name}.view.tsx`), `page.tsx`에 `"use client"`를 선언한다. 서버 컴포넌트/SSR이 필요해지면 사용자가 요청할 때 전환한다.
  - 예외: `layout.tsx`(metadata export를 위해 서버 유지, 최소한의 html 셸만), `route.ts`(Route Handler), `page.mdx`(콘텐츠). client `page.tsx`는 `metadata`를 export할 수 없다.
- 여러 scope에서 쓰이는 것은 `common`으로 옮긴다. 한 scope에서만 쓰이면 그 scope에 둔다.
- 서버(Route Handler)와 클라이언트가 함께 쓰는 코드는 React에 의존하지 않게 만든다 (예: `features/labs/hello`).

## 데이터 레이어 (api / query / atoms)

공용은 `src/common/{api,query,atoms}/{name}/`, scope 전용은 `src/features/{scope}/{api,query,atoms}/{name}/`에 둔다.
각 `{name}/` 폴더는 `index.ts` · `types.ts` · `utils.ts` 패턴을 따르고, 하위 폴더에서도 같은 패턴을 유지한다 (필요한 파일만 만든다).

| 폴더 | 역할 | `index.ts` 규칙 |
|---|---|---|
| `api/{name}` | axios 호출 | `httpClient`(`@/common/api/http-client`)로 요청하는 함수를 export. 엔드포인트 상수는 `utils.ts` |
| `query/{name}` | TanStack Query | **반드시 `api/{name}`의 axios 함수를 `queryFn`/`mutationFn`으로 감싼** `use{Name}Query` / `use{Name}Mutation` 훅을 export. query key는 `utils.ts`, 옵션 타입은 `types.ts`. `"use client"` 필수 |
| `atoms/{name}` | Jotai | **항상 get / set / reset 세 쌍**을 export: `useGet{Name}`, `useSet{Name}`, `useReset{Name}`. atom은 `atomWithReset`으로 `utils.ts`에 정의하고 외부에 노출하지 않는다. `"use client"` 필수 |

- 컴포넌트·container에서 axios, `useQuery`, `useAtom`을 직접 쓰지 않고 위 모듈의 훅/함수만 사용한다.
- `query`, `atoms`의 `index.ts`는 클라이언트 전용이다. 서버 컴포넌트·Route Handler에서 import하지 않는다.
- 서버와 클라이언트가 함께 쓰는 응답 타입은 React/axios에 의존하지 않는 모듈에 두고 `api/{name}/types.ts`에서 re-export한다 (예: `features/labs/hello`).

## 기타

- Emotion은 `jsxImportSource`를 설정하지 않는다 (서버 컴포넌트에서 `createContext` 오류가 난다).
- 서버리스(Vercel) 환경이므로 파일시스템 저장, WebSocket에 의존하지 않는다.
- 변경 후 `pnpm typecheck`와 `pnpm build`를 통과시킨다.
- 배포는 Vercel Git 연동 (`main` → Production, 그 외 브랜치 → Preview). `vercel.json`의 `framework: nextjs`를 유지한다.
