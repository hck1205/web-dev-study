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

- 본문은 `src/app/posts/{slug}/page.mdx`에 쓴다. title은 `getPostMetadata(slug)`로 레지스트리에서 가져온다 (아래 "글 추가").
- `mdx-components.tsx`(루트)는 `@/common/components/mdx`의 `mdxComponents`와 글 레이아웃(`PostLayout`) wrapper를 연결한다. 본문 스타일은 `prose`, 표는 `mdx-table`(모바일 가로 스크롤), 경고 박스는 `<Callout kind="note|tip|warning">`(남발 금지), 시각화는 아래 "그림과 애니메이션" 표를 따른다.
- 새 MDX 전용 컴포넌트는 `common/components/mdx/{name}/`에 같은 파일 패턴으로 만들고 `mdx.ts`에 등록한다.
- **루트 `mdx-components.tsx`의 `MdxWrapper`는 서버 컴포넌트로 유지한다.** wrapper를 클라이언트 컴포넌트로 직접 연결하면 Next.js가 넘기는 `searchParams`가 직렬화되어 MDX 페이지가 동적 렌더링으로 바뀐다. `children`만 넘기는 서버 래퍼를 거친다.
- 플러그인은 `next.config.ts`에 문자열 이름으로 지정한다(Turbopack): `remark-gfm`(표), `rehype-slug`(헤딩 id), `rehype-highlight`(코드 하이라이트). 하이라이트 색은 `prose.styled.ts`에서 관리한다.

## 디자인 시스템 (`@/common/design-system`)

UI는 반드시 디자인 시스템을 거쳐 만든다. 색상·간격·폰트 값을 직접 쓰지 않는다.

- **tokens**: `color`(CSS 변수 참조, 라이트/다크 자동. 범주형 데이터 색 `series1~3` 포함), `space`, `radius`, `font`, `shadow`, `layout`, `zIndex`, `motion`. **anim**: 공용 키프레임(`draw`, `fadeUp`, `pop`, `dropIn`, `liftOut`, `ripple`, `bounce`, `travel`, `glow`)과 `easing`. 새 색이 필요하면 `tokens/types.ts`·`palette.ts`의 라이트·다크 **양쪽**에 추가한다. hex 값을 컴포넌트에 하드코딩하지 않는다.
- **components**: `PageHeader`(페이지 제목 영역), `EmptyState`(빈 상태), `Container`, `Badge`, `Tag`(해시태그), `Button`, `Card`, `IconButton` (+ `icons`). 블로그 톤에 맞게 꼭 필요한 곳에만 쓴다. 새 공용 UI는 `design-system/components/{name}/`에 같은 파일 패턴으로 만들고 `index.ts`에 등록한다. 반복되는 UI가 두 군데 이상이면 먼저 DS 컴포넌트로 올린다.
- **테마**: 라이트/다크/시스템. `html[data-theme]`로 전환하고 `common/atoms/theme`(get/set/reset)로 상태를 다룬다. `layout.tsx`의 초기 스크립트가 FOUC를 막는다. 다크 모드에서도 가독성을 확인한다.
- **폰트**: Pretendard Variable(동적 서브셋), 코드는 `font.mono`.
- **레이아웃**: 페이지는 `Container`(`wide` 72rem / `narrow` 44rem)로 감싸고, 제목은 `PageHeader`로 만든다. `Shell`(헤더·푸터)은 폭을 제한하지 않는다.
- **사이트 이름·소개**: `@/common/config/site`의 `SITE` 하나만 고친다 (헤더·푸터·홈·`<title>`이 모두 참조).
- 글 상세는 `features/posts/components/post-layout`(토픽 경로 + 제목 + 본문 + 목차)이 담당한다. 홈·목록·토픽 페이지는 `Container size="narrow"`로 읽기 좋은 폭을 유지한다.

## 토픽 (메뉴·분류)

토픽은 `src/features/topics/registry/topics.ts`의 **트리 하나**가 단일 원천이다. 상단 메뉴(드롭다운·모바일 트리), 라우트(`/topics/...`), 홈의 주제 목록이 모두 여기서 자동으로 만들어진다.

- 최상위: `Programming`(AI, Algorithms, Backend, Common › Git, Computer Science, Database, Frontend, Network, OS, Server/Infra › {CI/CD › {ArgoCD, Jenkins}, Docker, Kubernetes}, System Design), `자기개발`(English, 아이디어, 역사, 인문학)
- 새 주제를 넣을 때는 성격이 맞는 기존 노드 아래에 둔다. 맞는 곳이 없으면 중간 분류를 새로 만든다(예: ArgoCD·Jenkins를 위해 `Server/Infra › CI/CD` 생성).
- **하위 메뉴 추가**: 원하는 노드의 `children`에 `{ id, label, description? }`를 중첩한다. 깊이 제한이 없다. 정렬은 모든 레벨에서 라벨 ABC 순으로 자동 적용되므로 순서를 신경 쓰지 않는다.
- 최상위 토픽 추가도 같은 배열에 항목을 추가하면 된다. `id`는 URL 세그먼트이므로 kebab-case로 쓴다.
- 메뉴 UI는 `common/components/nav-tree`(재귀 트리)와 `site-header`가 담당하며 features를 직접 import하지 않는다. `layout.tsx`가 `TOPIC_NAV`를 `Shell`에 props로 넘긴다.

## 글 작성 원칙: 사람이 쓴 블로그 글 + 움직이는 그림

이 블로그의 글은 **개인 개발 블로그에 사람이 직접 쓴 글**처럼 읽혀야 한다. 쉽게 설명하는 것(파인만 기법)은 유지하되, 틀에 맞춘 학습 자료처럼 보이면 안 된다.

### 문체
- **평서체(~다)** 로 쓴다. 담백하게, 설명하듯 말한다. 필요하면 1인칭("나도 처음엔 헷갈렸다")을 가볍게 쓴다. 단, 겪지 않은 구체적인 경험을 지어내지 않는다.
- 문장은 짧게, 문단 길이는 내용에 따라 자연스럽게 다르게. 한 문단에 한 생각.
- 전문 용어는 처음 나올 때 쉬운 말로 풀어 쓴다. 비유는 글 전체에서 한두 개만 쓰고, 정했으면 끝까지 같은 비유로 간다.
- 글은 계기나 실제 상황으로 시작한다("검색창에 ~를 쳤는데 ~가 안 나온다"). 정의부터 늘어놓지 않는다.
- 소제목은 그 글의 내용을 담은 말로 짓는다("버튼을 누르면 일어나는 일", "하나하나 다 재면 느리다"). 글마다 같은 소제목을 반복하지 않는다.
- 마무리는 짧게. 한 문단으로 핵심을 다시 짚거나, 다음에 볼 것을 적는다. 읽고 나서 독자가 자기 말로 설명할 수 있을 만큼 핵심이 분명해야 한다(파인만 기법의 목표).

### AI가 쓴 티가 나는 패턴 — 쓰지 않는다
- 모든 글에 같은 뼈대: "한 줄로 말하면 / 비유로 이해하기 / 헷갈리는 부분 / 정리" 같은 고정 소제목
- 학습 장치: "Q1. …" 퀴즈, `<details>` 정답 토글, "12살 친구에게 설명한다면" 같은 상자
- 콜아웃 남발. `<Callout>`은 글 하나에 0~2개, 정말 따로 떼어야 할 경고에만
- 굵은 글씨 남발. 한 문단에 많아야 하나
- 과한 친절체(~해요 연발), 감탄, 이모지, "자, 이제 ~해 볼까요?"
- 상투적인 연결 표현: "핵심은 ~입니다", "결론적으로", "요약하자면", "다음과 같습니다", "~라는 점", "~하는 것이 중요합니다"
- 번역투: "~를 가지다", "~에 대해", "~를 통해", "~함으로써"
- 스스로 묻고 답하기 반복("왜 그럴까요? 그 이유는 …")
- 항목 수와 길이가 똑같은 불릿, 습관적인 3개짜리 나열, 섹션마다 끝에 붙는 요약
- 습관적인 표. 비교가 정말 필요할 때만 쓴다
- 근거 없는 일반론("많은 개발자들이 …")

### 그림과 애니메이션
- 설명의 중심은 그림이다. 글은 그림을 보기 전에 맥락을 주고, 본 뒤에 의미를 정리한다. 그림은 본문 흐름 안에서 자연스럽게 소개한다("아래 그림에서 다음을 누르면 …").
- 그림은 **움직여야** 한다. 메시지가 날아가고, 값이 쌓였다 빠지고, 선이 그려지는 것처럼 변화가 눈에 보여야 직관적으로 이해된다. 정지된 도식만 있는 글은 만들지 않는다.
- 그림 안의 단계 설명(steps의 title·detail·caption)도 본문과 같은 평서체로 짧게 쓴다.

| 컴포넌트 | 언제 쓰나 | 움직임 |
|---|---|---|
| `<SequenceDiagram actors steps />` | 주체들이 메시지를 주고받는 흐름 (인증, 네트워크 요청, RAG 등) | 단계마다 화살표가 그려지고 메시지 점이 날아가며 번호에 물결이 퍼진다 |
| `<ConceptDiagram nodes edges />` | 용어·주체 사이의 관계도 | 화살표 방향으로 점이 계속 흐른다 |
| `<UrlAnatomy base params />` | 긴 URL·헤더·설정을 조각으로 나눠 읽기 | 처음 보일 때 조각이 차례로 반짝이고, 고른 조각이 튀어나온다 |
| `<AlgoTrace cells steps />` | 배열·문자열을 훑으며 스택/해시맵이 변하는 과정 | 현재 칸이 튀어나오고 값이 떨어져 쌓였다가 위로 빠진다 |
| `<VectorSpace points groups query edges steps />` | 거리·유사도·최근접 탐색·그래프 탐색 | 점이 퍼지듯 나타나고, 질문 점·이웃 선·반경·탐색 경로가 단계별로 그려진다 |

- 새 시각화는 `common/components/mdx/{name}/`에 같은 파일 패턴으로 만들고 `mdx.ts`에 등록한다. 틀은 `viz-frame`, 단계 재생은 `common/hooks/use-step-player` + `step-controls`, 화면 진입 시 재생은 `common/hooks/use-in-view`, 움직임은 `@/common/design-system`의 `anim`(공용 키프레임)을 쓴다.
- 애니메이션은 단계가 바뀔 때 `key`를 바꿔 다시 재생한다. 화면 밖에서 끝나 버리지 않게 `useInView`로 시작 시점을 잡는다.
- 움직임 줄이기 설정(`prefers-reduced-motion`)을 켠 사용자에게는 애니메이션이 즉시 끝난 상태로 보인다(글로벌 스타일). 그래서 애니메이션이 끝난 최종 모습만으로도 의미가 통해야 한다.
- 모바일 폭(390px)에서도 읽혀야 한다: SVG는 `viewBox`로 비율 유지, 라벨은 짧게(영문 약 16자 이내), 긴 설명은 SVG 밖 HTML 패널에.
- 색은 디자인 토큰만 쓴다. 범주를 색으로 구분할 때는 `color.series1~3`을 이 순서대로 쓰고(산점도는 3개까지, dataviz 검증 통과값), 점마다 이름표와 범례를 붙여 색에만 의존하지 않는다.

## 글 추가

1. `src/app/posts/{slug}/page.mdx` 를 만든다. 첫 줄에 `export const metadata = getPostMetadata("{slug}")`.
2. `src/features/posts/registry/posts.ts`에 메타데이터(slug, title, summary, **topic**, **tags**, date)를 추가한다. `topic`은 토픽 id를 `/`로 이은 경로다 (예: `"programming/algorithms"`). 없는 경로면 토픽이 표시되지 않으니 `topics.ts`와 맞춘다.
3. 제목(h1)·요약은 레이아웃이 렌더링하므로 MDX 본문에서 `#` 제목을 쓰지 않는다. 본문은 `##`부터 시작한다. 요약(summary)도 본문과 같은 평서체로 쓴다.
4. **해시태그**: `tags`에 단어를 적으면 글 카드·글 상단에 `#태그` 링크로 표시되고 `/tags/{slug}` 페이지가 자동 생성된다. 공백은 제거해 표시하고(`Hash Table` → `#HashTable`), 슬러그는 소문자-하이픈이다. 대소문자만 다른 태그는 하나로 합쳐진다. 기존 태그를 재사용해 분류를 일관되게 유지한다 (`/tags` 참고).

## 검색

- 헤더의 검색 아이콘, `/` 키, `Ctrl/⌘ + K`로 연다. 정적 사이트라 브라우저에서 글 메타데이터(제목 > 태그 > 토픽 > 요약 순 가중치, 모든 단어 AND 매칭)를 검색한다. 엔진은 `features/search/engine`, UI는 `features/search/components/search-launcher`다.
- 검색 버튼은 `common`이 features를 import하지 않도록 `layout.tsx`가 `Shell`의 `headerActions`로 주입한다.
- 본문 전문 검색은 아직 없다. 필요해지면 빌드 시 본문 텍스트 색인을 만드는 방식으로 확장한다.

## 블로그 톤

이 사이트는 서비스나 제품이 아니라 **개인 블로그**다. 글이 중심이고 장식은 최소화한다.

- 마케팅 문구, 히어로, CTA 버튼("시작하기", "둘러보기" 등), 로고 마크, 기능 소개 카드, 안내성 문구를 넣지 않는다.
- 글 목록은 카드 그리드가 아니라 날짜·제목·요약·태그로 이루어진 **목록**으로 보여준다. 어디서든 `features/posts/components/post-item-list`(`PostItemList`)를 쓴다. 난이도는 `DifficultyBadge`, 태그는 `PostTags`를 재사용한다.
- 문구는 담백하게 쓴다. 홈은 사이트 이름과 한 줄 소개, 최근 글, 주제 링크만 둔다.

## 기타

- Emotion은 `jsxImportSource`를 설정하지 않는다 (서버 컴포넌트에서 `createContext` 오류가 난다).
- 서버리스(Vercel) 환경이므로 파일시스템 저장, WebSocket에 의존하지 않는다.
- 변경 후 `pnpm typecheck`와 `pnpm build`를 통과시킨다.
- 배포는 Vercel Git 연동 (`main` → Production, 그 외 브랜치 → Preview). `vercel.json`의 `framework: nextjs`를 유지한다.
