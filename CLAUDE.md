# web-dev-study — 코드 컨벤션

웹 개발, 네트워크, 인프라, 알고리즘 등 CS 전반을 공부하는 Next.js 프로젝트.
Stack: Next.js (App Router) · React · TypeScript · MDX · Emotion · Jotai · Axios · TanStack Query · pnpm

코드를 작성·수정할 때 아래 규칙을 항상 유지한다. 클린 코드를 지향하고, 반복되는 것은 `common`으로 공용화·모듈화한다.

## 디렉터리 구조

```
src/
  app/            라우팅 전용 (page.tsx / layout.tsx / route.ts). 로직·스타일을 두지 않고 features를 조합만 한다.
                  MDX 콘텐츠(page.mdx)는 예외적으로 여기에 둔다.
  common/         여러 scope에서 재사용하는 모듈
    components/{name}/     공용 컴포넌트
    hooks/{use-name}/      공용 훅
    api/ query/ atoms/     공용 데이터 레이어 (아래 "데이터 레이어" 참고)
    providers/ ...
  features/       scope(관심사)별 모듈
    {scope}/
      components/{name}/
        {name}.ts
        {name}.view.tsx
        {name}.styled.ts
        {name}.utils.ts
        {name}.type.ts
        index.ts
        hooks/{use-name}/        # 컴포넌트 전용 훅이 필요할 때만 만든다
          {use-name}.ts
          {use-name}.utils.ts
          {use-name}.type.ts
          index.ts
        {하위 컴포넌트 폴더}/      # 더 쪼갤 때 같은 구조를 반복
      hooks/{use-name}/          # scope 안에서 여러 컴포넌트가 공유하는 훅
      api/ query/ atoms/
```

- 폴더·파일 이름은 kebab-case, export 이름은 PascalCase(컴포넌트·타입) / camelCase(함수)를 쓴다.
- 폴더는 관심사별로 나누고, 폴더 안에서도 같은 패턴(`{name}.*` + `index.ts`)을 재귀적으로 유지한다.
- **훅 폴더(`hooks/`)**: 훅은 `hooks/{use-name}/` 폴더에 `{use-name}.ts`(훅 본체), `.utils.ts`, `.type.ts`, `index.ts` 패턴으로 작성한다. 사용 범위에 따라 위치를 정한다.
  - 한 컴포넌트에서만 쓰면 `{component}/hooks/`
  - 한 scope 안에서 공유하면 `features/{scope}/hooks/`
  - 여러 scope에서 쓰면 `common/hooks/`
- 훅은 `index.ts`로만 import한다 (`@/common/hooks/use-toggle`). 데이터 패칭(axios/react-query)·전역 상태(jotai)는 훅 폴더가 아니라 `api/`, `query/`, `atoms/`에 둔다.

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
- 외부에서는 반드시 `index.ts`를 통해 import한다 (`@/features/home/components/home`, `@/common/components/shell`). 폴더 내부 파일을 직접 import하지 않는다.
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

## 반응형 (mobile-first)

- 주 사용 환경은 **모바일**이다. 기본 스타일을 모바일 기준으로 작성하고, `min-width` 미디어 쿼리로 tablet(≥768px) / desktop(≥1024px)에서 확장한다. `max-width` 쿼리는 쓰지 않는다.
- 미디어 쿼리는 하드코딩하지 말고 `@/common/styles/breakpoints`의 `media.tablet`, `media.desktop`을 사용한다.
  ```ts
  styled.div`
    padding: 1rem;
    ${media.tablet} { padding: 2rem; }
  `
  ```
- 터치 대상(링크·버튼)은 높이 44px 이상으로 한다. 노치 대응이 필요한 가장자리 padding에는 `env(safe-area-inset-*)`를 쓴다.
- 새 UI를 만든 뒤에는 390px(모바일) / 820px(태블릿) / 1280px(PC)에서 가로 스크롤이 생기지 않는지 확인한다.

## MDX

- 본문은 `src/app/**/page.mdx`에 쓴다. `export const metadata = { title: "..." }`로 페이지 title을 지정한다.
- `mdx-components.tsx`(루트)는 `@/common/components/mdx`의 `mdxComponents`와 글 레이아웃(`PostLayout`) wrapper를 연결한다. 본문 스타일은 `prose`, 표는 `mdx-table`(모바일 가로 스크롤), 강조 박스는 `<Callout kind="note|tip|warning">`를 쓴다.
- 새 MDX 전용 컴포넌트는 `common/components/mdx/{name}/`에 같은 파일 패턴으로 만들고 `mdx.ts`에 등록한다.
- **루트 `mdx-components.tsx`의 `MdxWrapper`는 서버 컴포넌트로 유지한다.** wrapper를 클라이언트 컴포넌트로 직접 연결하면 Next.js가 넘기는 `searchParams`가 직렬화되어 MDX 페이지가 동적 렌더링으로 바뀐다. `children`만 넘기는 서버 래퍼를 거친다.
- 플러그인은 `next.config.ts`에 문자열 이름으로 지정한다(Turbopack): `remark-gfm`(표), `rehype-slug`(헤딩 id), `rehype-highlight`(코드 하이라이트). 하이라이트 색은 `prose.styled.ts`에서 관리한다.

## 디자인 시스템 (`@/common/design-system`)

UI는 반드시 디자인 시스템을 거쳐 만든다. 색상·간격·폰트 값을 직접 쓰지 않는다.

- **tokens**: `color`(CSS 변수 참조, 라이트/다크 자동), `space`, `radius`, `font`, `shadow`, `layout`, `zIndex`, `motion`. 새 색이 필요하면 `tokens/types.ts`·`palette.ts`의 라이트·다크 **양쪽**에 추가한다. hex 값을 컴포넌트에 하드코딩하지 않는다.
- **components**: `Button`, `Badge`, `Card`, `Container`, `IconButton` (+ `icons`). 블로그 톤에 맞게 꼭 필요한 곳에만 쓴다. 새 공용 UI는 `design-system/components/{name}/`에 같은 파일 패턴으로 만들고 `index.ts`에 등록한다. 반복되는 UI가 두 군데 이상이면 먼저 DS 컴포넌트로 올린다.
- **테마**: 라이트/다크/시스템. `html[data-theme]`로 전환하고 `common/atoms/theme`(get/set/reset)로 상태를 다룬다. `layout.tsx`의 초기 스크립트가 FOUC를 막는다. 다크 모드에서도 가독성을 확인한다.
- **폰트**: Pretendard Variable(동적 서브셋), 코드는 `font.mono`.
- **레이아웃**: 페이지는 `Container`(`wide` 72rem / `narrow` 44rem)로 감싼다. `Shell`(헤더·푸터)은 폭을 제한하지 않는다.
- 글 상세는 `features/posts/components/post-layout`(토픽 경로 + 제목 + 본문 + 목차)이 담당한다. 홈·목록·토픽 페이지는 `Container size="narrow"`로 읽기 좋은 폭을 유지한다.

## 토픽 (메뉴·분류)

토픽은 `src/features/topics/registry/topics.ts`의 **트리 하나**가 단일 원천이다. 상단 메뉴(드롭다운·모바일 트리), 라우트(`/topics/...`), 홈의 주제 목록이 모두 여기서 자동으로 만들어진다.

- 최상위: `Programming`(AI, Algorithms, Backend, Common, Computer Science, Database, Frontend, Network, OS, Server/Infra, System Design), `자기개발`(English, 아이디어, 역사, 인문학)
- **하위 메뉴 추가**: 원하는 노드의 `children`에 `{ id, label, description? }`를 중첩한다. 깊이 제한이 없다. 정렬은 모든 레벨에서 라벨 ABC 순으로 자동 적용되므로 순서를 신경 쓰지 않는다.
- 최상위 토픽 추가도 같은 배열에 항목을 추가하면 된다. `id`는 URL 세그먼트이므로 kebab-case로 쓴다.
- 메뉴 UI는 `common/components/nav-tree`(재귀 트리)와 `site-header`가 담당하며 features를 직접 import하지 않는다. `layout.tsx`가 `TOPIC_NAV`를 `Shell`에 props로 넘긴다.

## 글 작성 원칙: 파인만 기법 + 시각화

이 블로그의 글은 **아주 쉬운 말**로, **텍스트보다 시각화**로 설명한다. 독자는 해당 분야를 모른다고 가정하고, 12살에게 설명한다는 마음으로 쓴다.

**말투·문장**
- 전문 용어는 처음 나올 때 쉬운 말로 풀거나 비유로 먼저 설명한다. 정의는 비유 뒤에 둔다.
- 짧은 문장, 한 문단에 한 가지 생각. 존댓말(~해요)로 부드럽게 쓴다.
- 모르는 척하고 질문하며 끌고 간다("왜 쿠폰을 먼저 줄까요?"). 이해를 막는 지점을 미리 찾아 풀어 준다.

**글의 뼈대 (파인만 기법의 4단계)**: 아래 순서를 기본으로 한다. 주제에 맞게 조절하되 1, 2, 마지막은 반드시 넣는다.
1. `## 한 줄로 말하면` — 핵심을 한 문장으로.
2. `## 비유로 이해하기` — 일상 속 비유 (호텔 키, 냉장고, 접시 쌓기 …).
3. `## 그림으로 보기` — 시각화 컴포넌트. 가능한 한 직접 눌러서 따라가게 한다.
4. 단계별 설명, 비교 표, 코드.
5. `## 헷갈리는 부분` — 흔한 오해와 막히는 곳. `<Callout kind="warning">` 사용.
6. `## 내 말로 다시 설명해보기` — `<details><summary>Q…</summary>` 질문 2~3개와, `<Callout kind="tip" title="12살 친구에게 설명한다면">`로 마무리.

**시각화 컴포넌트** (`common/components/mdx`, MDX에서 import 없이 바로 사용)

| 컴포넌트 | 언제 쓰나 |
|---|---|
| `<SequenceDiagram actors steps />` | 주체들이 메시지를 주고받는 흐름 (인증, 네트워크 요청 등). 단계별 설명·payload 표시, 자기 자신에게 하는 동작 지원 |
| `<ConceptDiagram nodes edges />` | 용어들의 관계도. 좌표를 직접 지정 |
| `<UrlAnatomy base params />` | 긴 URL·헤더·설정을 조각으로 나눠 눌러서 읽기 |
| `<AlgoTrace cells steps />` | 배열·문자열을 훑으며 스택/해시맵 같은 "기억 장소"가 변하는 과정 |
| `<Callout kind>` / 표 | 보조 설명, 비교 |

- 새 시각화가 필요하면 `common/components/mdx/{name}/`에 같은 파일 패턴으로 만들고 `mdx.ts`에 등록한다. 단계 재생이 필요하면 `common/hooks/use-step-player`와 `step-controls`를 재사용한다.
- 시각화는 모바일 폭(390px)에서도 읽히게 한다: SVG는 `viewBox`로 비율 유지, 라벨은 짧게(영문 약 16자 이내), 설명은 SVG 밖 HTML 패널에 쓴다. 색은 디자인 토큰만 쓴다.
- 글 안에 직접 눌러보는 요소가 있다면 안내 문구로 알려준다("**다음**을 눌러 따라가 보세요").

## 글 추가

1. `src/app/posts/{slug}/page.mdx` 를 만든다. 첫 줄에 `export const metadata = getPostMetadata("{slug}")`.
2. `src/features/posts/registry/posts.ts`에 메타데이터(slug, title, summary, **topic**, **tags**, date)를 추가한다. `topic`은 토픽 id를 `/`로 이은 경로다 (예: `"programming/algorithms"`). 없는 경로면 토픽이 표시되지 않으니 `topics.ts`와 맞춘다. 요약(summary)도 쉬운 말로 쓴다.
3. 제목(h1)·요약은 레이아웃이 렌더링하므로 MDX 본문에서 `#` 제목을 쓰지 않는다. 본문은 `##`부터 시작한다.
4. **해시태그**: `tags`에 단어를 적으면 글 카드·글 상단에 `#태그` 링크로 표시되고 `/tags/{slug}` 페이지가 자동 생성된다. 공백은 제거해 표시하고(`Hash Table` → `#HashTable`), 슬러그는 소문자-하이픈이다. 대소문자만 다른 태그는 하나로 합쳐진다. 기존 태그를 재사용해 분류를 일관되게 유지한다 (`/tags` 참고).

## 검색

- 헤더의 검색 아이콘, `/` 키, `Ctrl/⌘ + K`로 연다. 정적 사이트라 브라우저에서 글 메타데이터(제목 > 태그 > 토픽 > 요약 순 가중치, 모든 단어 AND 매칭)를 검색한다. 엔진은 `features/search/engine`, UI는 `features/search/components/search-launcher`다.
- 검색 버튼은 `common`이 features를 import하지 않도록 `layout.tsx`가 `Shell`의 `headerActions`로 주입한다.
- 본문 전문 검색은 아직 없다. 필요해지면 빌드 시 본문 텍스트 색인을 만드는 방식으로 확장한다.

## 블로그 톤

이 사이트는 서비스나 제품이 아니라 **개인 블로그**다. 글이 중심이고 장식은 최소화한다.

- 마케팅 문구, 히어로, CTA 버튼("시작하기", "둘러보기" 등), 로고 마크, 기능 소개 카드, 안내성 문구를 넣지 않는다.
- 글 목록은 카드 그리드가 아니라 날짜·제목·요약·태그로 이루어진 **목록(`PostItem`)** 으로 보여준다.
- 문구는 담백하게 쓴다. 홈은 사이트 이름과 한 줄 소개, 최근 글, 주제 링크만 둔다.

## 기타

- Emotion은 `jsxImportSource`를 설정하지 않는다 (서버 컴포넌트에서 `createContext` 오류가 난다).
- 서버리스(Vercel) 환경이므로 파일시스템 저장, WebSocket에 의존하지 않는다.
- 변경 후 `pnpm typecheck`와 `pnpm build`를 통과시킨다.
- 배포는 Vercel Git 연동 (`main` → Production, 그 외 브랜치 → Preview). `vercel.json`의 `framework: nextjs`를 유지한다.
