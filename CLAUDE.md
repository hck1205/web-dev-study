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
- 서버(`layout.tsx`, Route Handler)와 클라이언트가 함께 쓰는 코드는 React에 의존하지 않게 만든다 (예: `features/posts/registry`, `common/config/site`).

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
- 서버와 클라이언트가 함께 쓰는 응답 타입은 React/axios에 의존하지 않는 모듈에 두고 `api/{name}/types.ts`에서 re-export한다.
- 현재 예시: atoms는 `common/atoms/theme`, `features/search/atoms/search-open`. api·query는 아직 쓰는 곳이 없고, 외부 API가 필요해지면 `common/api/http-client`(axios 인스턴스)를 써서 이 패턴대로 추가한다.

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
- 글 맨 위의 `<EasyIntro>`는 "쉽게 말하면" 상자다(아래 "글 추가" 6번). 접혀 있다가 쉬운 모드에서 펼쳐진다.
- **루트 `mdx-components.tsx`의 `MdxWrapper`는 서버 컴포넌트로 유지한다.** wrapper를 클라이언트 컴포넌트로 직접 연결하면 Next.js가 넘기는 `searchParams`가 직렬화되어 MDX 페이지가 동적 렌더링으로 바뀐다. `children`만 넘기는 서버 래퍼를 거친다.
- 플러그인은 `next.config.ts`에 문자열 이름으로 지정한다(Turbopack): `remark-gfm`(표), `rehype-slug`(헤딩 id), `rehype-highlight`(코드 하이라이트). 하이라이트 색은 `prose.styled.ts`에서 관리한다.

## 디자인 시스템 (`@/common/design-system`)

UI는 반드시 디자인 시스템을 거쳐 만든다. 색상·간격·폰트 값을 직접 쓰지 않는다.

- **tokens**: `color`(CSS 변수 참조, 라이트/다크 자동. 범주형 데이터 색 `series1~3` 포함), `space`, `radius`, `font`, `shadow`, `layout`, `zIndex`, `motion`. **anim**: 공용 키프레임(`draw`, `fadeUp`, `pop`, `dropIn`, `liftOut`, `ripple`, `bounce`, `travel`, `glow`, `shake`, `slideIn`, `fillTo`)과 `easing`(`out`, `inOut`, 튀어나오는 강조에만 쓰는 `spring`). 새 색이 필요하면 `tokens/types.ts`·`palette.ts`의 라이트·다크 **양쪽**에 추가한다. hex 값을 컴포넌트에 하드코딩하지 않는다.
- **components**: `PageHeader`(페이지 제목 영역), `EmptyState`(빈 상태), `Container`, `Badge`, `Tag`(해시태그), `Button`, `Card`, `IconButton` (+ `icons`). 블로그 톤에 맞게 꼭 필요한 곳에만 쓴다. 새 공용 UI는 `design-system/components/{name}/`에 같은 파일 패턴으로 만들고 `index.ts`에 등록한다. 반복되는 UI가 두 군데 이상이면 먼저 DS 컴포넌트로 올린다.
- **테마**: 라이트/다크/시스템. `html[data-theme]`로 전환하고 `common/atoms/theme`(get/set/reset)로 상태를 다룬다. `layout.tsx`의 초기 스크립트가 FOUC를 막는다. 다크 모드에서도 가독성을 확인한다.
- **폰트**: Pretendard Variable(동적 서브셋), 코드는 `font.mono`.
- **레이아웃**: 페이지는 `Container`(`wide` 72rem / `narrow` 44rem)로 감싸고, 제목은 `PageHeader`로 만든다. `Shell`(헤더·푸터)은 폭을 제한하지 않는다.
- **사이트 이름·소개**: `@/common/config/site`의 `SITE` 하나만 고친다 (헤더·푸터·홈·`<title>`이 모두 참조).
- 글 상세는 `features/posts/components/post-layout`(토픽 경로 + 제목 + 본문 + 목차)이 담당한다. 홈·목록·토픽 페이지는 `Container size="narrow"`로 읽기 좋은 폭을 유지한다.

## 토픽 (메뉴·분류)

토픽은 `src/features/topics/registry/topics.ts`의 **트리 하나**가 단일 원천이다. 상단 메뉴(드롭다운·모바일 트리), 라우트(`/topics/...`), 홈의 주제 목록이 모두 여기서 자동으로 만들어진다.

- 최상위: `Programming`(AI › {Claude Code, RAG}, Algorithms › {Data Structures, For System Design, Techniques}, Backend › {API Design, Architecture, Auth, Frameworks, Languages, Messaging, Spring, Testing}, Common › Git, Computer Science › Computer Architecture, Data Engineering, Design Patterns › {Behavioral, Creational, Structural}, In Practice, Database › {DB Types, MySQL, PostgreSQL, Redis, SQL, SQLD}, Frontend › {Architecture, CSS, JavaScript, Performance, React, Rendering, System Design, TypeScript}, Network › {Cloud Networking, HTTP, Infrastructure, OSI · TCP/IP, Performance}, OS › Linux, Server/Infra › {CI/CD › {ArgoCD, Jenkins}, Cloud, Docker, IaC, Kubernetes › {Config & Storage, EKS, Foundation, Helm, Networking, Operations, Platform, Pod, Security, Workloads}, Nginx, Observability, SRE}, Security › Cryptography, System Design, UI/UX), `자기개발`(English › 어휘, 과학, 수학, 아이디어, 역사, 인문학)
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

### 깊이: 이직 면접에서 답할 수 있을 만큼
- 글 하나를 읽고 나면 그 주제로 나오는 면접 질문과 **꼬리 질문까지** 답할 수 있어야 한다. 쉬운 말로 쓰되 내용은 얕게 쓰지 않는다.
- 반드시 다룬다: 이 기술이 **왜** 생겼는지(어떤 문제를 풀려고), 동작 원리를 단계별로, **대안과 트레이드오프**(언제 무엇을 고르나), 보안·성능·장애 같은 **엣지 케이스**, 실무에서 쓰는 설정값과 **흔한 실수**.
- 글의 마지막 섹션은 `## 면접에서 나올 만한 질문`. 질문은 `###` 소제목으로 쓰고, 바로 아래에 실제 면접에서 말하듯 평서체로 **결론부터** 2~5문장 답한다. 본문에서 자세히 다룬 내용은 짧게 요약만 한다. 5~8개 정도, 기본 질문부터 꼬리 질문 순서로.
- 이 섹션은 아래 금지 목록의 "퀴즈"와 다르다. 정답을 숨기는 토글, "Q1." 번호, "정답은?" 같은 장치는 여전히 쓰지 않는다.
- 사실관계는 검증한다. 버전·브라우저별 차이처럼 단정하기 어려운 건 범위를 밝혀 쓴다("크롬 계열은 …, 모든 브라우저가 그렇지는 않다"). 예시 값(토큰, 해시, 좌표, 계산 결과)은 실제로 계산해서 넣는다.

### AI가 쓴 티가 나는 패턴 — 쓰지 않는다
- 모든 글에 같은 뼈대: "한 줄로 말하면 / 비유로 이해하기 / 헷갈리는 부분 / 정리" 같은 고정 소제목
- 학습 장치: "Q1. …" 번호 퀴즈, `<details>` 정답 토글, "12살 친구에게 설명한다면" 같은 상자 (면접 질문 섹션은 위 형식대로라면 예외)
- 콜아웃 남발. `<Callout>`은 글 하나에 0~2개, 정말 따로 떼어야 할 경고에만
- 굵은 글씨 남발. 한 문단에 많아야 하나
- 과한 친절체(~해요 연발), 감탄, 이모지, "자, 이제 ~해 볼까요?"
- 상투적인 연결 표현: "핵심은 ~입니다", "결론적으로", "요약하자면", "다음과 같습니다", "~라는 점", "~하는 것이 중요합니다"
- 번역투: "~를 가지다", "~에 대해", "~를 통해", "~함으로써"
- 스스로 묻고 답하기 반복("왜 그럴까요? 그 이유는 …")
- 항목 수와 길이가 똑같은 불릿, 습관적인 3개짜리 나열, 섹션마다 끝에 붙는 요약
- 습관적인 표. 비교가 정말 필요할 때만 쓴다
- 근거 없는 일반론("많은 개발자들이 …")

### 실무에서 쓰이는 순간 (practical)
- 개념 글에는 "이걸 알면 현장에서 무엇이 달라지나"를 담는다. 장애를 어디서부터 보는지, 어떤 명령·로그·지표로 확인하는지, 설계·설정을 어떻게 고르는지, 모르면 어떤 실수를 하는지를 실제 증상과 함께 쓴다(예: "502인데 앱 로그엔 아무것도 없다 → L4/L7 어디서 끊겼는지 본다").
- 별도 섹션 이름을 고정하지 않는다. 글 흐름에 맞는 소제목으로 쓰고(예: "현장에서 이 계층을 만나는 순간"), 명령은 실제로 돌려 본 출력과 함께 쓴다.
- 여러 글에 걸친 실무 가이드(계층별 장애 좁히기, 패킷 캡처로 보기, 운영 체크리스트처럼 이론 여러 개를 엮어 현장 문제를 푸는 글)는 `Programming › In Practice` 토픽에 둔다. 이론 글과 서로 링크한다.

### 그림과 애니메이션
- 설명의 중심은 그림이다. 글은 그림을 보기 전에 맥락을 주고, 본 뒤에 의미를 정리한다. 그림은 본문 흐름 안에서 자연스럽게 소개한다("아래 그림에서 다음을 누르면 …").
- 그림은 **움직여야** 한다. 메시지가 날아가고, 값이 쌓였다 빠지고, 선이 그려지는 것처럼 변화가 눈에 보여야 직관적으로 이해된다. 정지된 도식만 있는 글은 만들지 않는다.
- 그림 안의 단계 설명(steps의 title·detail·caption)도 본문과 같은 평서체로 짧게 쓴다.

| 컴포넌트 | 언제 쓰나 | 움직임 |
|---|---|---|
| `<SequenceDiagram actors steps />` | 주체들이 메시지를 주고받는 흐름 (인증, 네트워크 요청, RAG 등) | 단계마다 화살표가 그려지고 메시지 점이 날아가며 번호에 물결이 퍼진다 |
| `<ConceptDiagram nodes edges />` | 용어·주체 사이의 관계도 | 화살표 방향으로 점이 계속 흐른다 |
| `<NetworkTopology zones nodes links steps />` | 네트워크 구성도: VPC·서브넷·존 같은 영역 안의 장비와 패킷 경로 (라우팅, 방화벽 차단, 로드 밸런서, 서비스 메시) | 단계마다 경로가 홉 단위로 그려지고 패킷이 그 길을 따라 이동한다. 도착하면 물결, 막히면(`blocked`) X가 튀어나와 흔들린다. `steps`가 없으면 연결선을 따라 점이 흐른다 |
| `<LoadingDemo patterns caption />` | UI 패턴을 작은 앱 화면에서 실제로 움직여 보여 줄 때 (로딩: spinner, skeleton, progress-bar, lazy-loading, progress-ring, blur-up, stepper, infinite-scroll, streaming-text, optimistic-ui, pull-to-refresh, loading-button) | 화면에 들어오면 장면이 반복 재생된다. 하나만 주면 큰 카드, 여러 개면 격자 |
| `<MotionDemo patterns caption />` | UI 애니메이션 패턴을 작은 앱 화면에서 실제로 움직여 보여 줄 때 (gooey, slide-in, spring-pop, stagger, shared-element, ripple, path-draw, marquee, tilt) | 화면에 보이는 동안 장면이 반복 재생되고 벗어나면 멈춘다. tilt는 마우스를 따라 기울고, 터치 기기에서는 가짜 커서로 자동 재생한다. 하나만 주면 큰 카드, 여러 개면 격자 |
| `<ScrollDemo patterns caption />` | 스크롤 패턴을 작은 화면이 스스로 스크롤되며 보여 줄 때 (sticky, scroll-snap, scroll-reveal, scroll-progress, zoom-on-scroll, parallax, horizontal-scroll, scrollytelling). `MotionDemo`와 같은 컴포넌트라 두 이름 어느 쪽으로 써도 되고 패턴을 섞어도 된다. 무한 스크롤은 `LoadingDemo`의 `infinite-scroll` | 화면에 보이는 동안 화면 속 내용이 저절로 스크롤되며 머리글이 붙고, 카드가 칸에 맞춰 서고, 배경이 느리게 따라온다. 움직임 줄이기면 그 패턴이 드러나는 중간 장면에서 멈춘다 |
| `<UrlAnatomy base params />` | 긴 URL·헤더·설정을 조각으로 나눠 읽기 | 처음 보일 때 조각이 차례로 반짝이고, 고른 조각이 튀어나온다 |
| `<AlgoTrace cells steps />` | 배열·문자열을 훑으며 스택/해시맵이 변하는 과정 | 현재 칸이 튀어나오고 값이 떨어져 쌓였다가 위로 빠진다 |
| `<VectorSpace points groups query edges steps />` | 거리·유사도·최근접 탐색·그래프 탐색 | 점이 퍼지듯 나타나고, 질문 점·이웃 선·반경·탐색 경로가 단계별로 그려진다 |
| `<GeometryMorph width height shapes steps />` | 도형을 옮기거나 바꾸는 증명, 넓이·모양 변화 | 다각형 꼭짓점이 단계 사이를 미끄러지듯 이동하고(rAF 보간), 강조 도형이 빛난다 |
| `<CodePlayground initialCode functionName tests solution />` | 독자가 코드를 직접 고쳐 실행해 볼 때 (알고리즘 글, 계산 예제) | 실행하면 테스트 결과가 차례로 튀어나오고 통과율 막대가 차오른다 |

- 새 시각화는 `common/components/mdx/{name}/`에 같은 파일 패턴으로 만들고 `mdx.ts`에 등록한다. 틀은 `viz-frame`, 단계 재생은 `common/hooks/use-step-player` + `step-controls`, 화면 진입 시 재생은 `common/hooks/use-in-view`, 움직임은 `@/common/design-system`의 `anim`(공용 키프레임)을 쓴다.
- 애니메이션은 단계가 바뀔 때 `key`를 바꿔 다시 재생한다. 화면 밖에서 끝나 버리지 않게 `useInView`로 시작 시점을 잡는다.
- 움직임 줄이기 설정(`prefers-reduced-motion`)을 켠 사용자에게는 애니메이션이 즉시 끝난 상태로 보인다(글로벌 스타일). 그래서 애니메이션이 끝난 최종 모습만으로도 의미가 통해야 한다.
- 모바일 폭(390px)에서도 읽혀야 한다: SVG는 `viewBox`로 비율 유지, 라벨은 짧게(영문 약 16자 이내), 긴 설명은 SVG 밖 HTML 패널에.
- 색은 디자인 토큰만 쓴다. 범주를 색으로 구분할 때는 `color.series1~3`을 이 순서대로 쓰고(산점도는 3개까지, dataviz 검증 통과값), 점마다 이름표와 범례를 붙여 색에만 의존하지 않는다.

### 애니메이션 품질 기준

그림은 "움직이기만" 해서는 부족하다. 무엇이 바뀌었는지 눈이 먼저 따라가게 만든다.

- **인과 순서대로 움직인다.** 원인 → 결과 순으로 시차를 둔다(선이 그려지고 → 메시지가 날아가고 → 도착 지점에 물결). 한꺼번에 다 움직이면 눈이 어디를 봐야 할지 모른다.
- **지금 단계의 주인공을 밝힌다.** 참여하는 주체·행·도형을 강조색과 옅은 띠(`accentSoft`), 은은한 빛(`drop-shadow`)으로 띄우고 나머지는 흐리게 둔다.
- **연속성을 지킨다.** 같은 물체는 사라졌다 나타나지 말고 제자리에서 이동한다(`GeometryMorph`의 보간, `travel`). 새로 생긴 것만 `pop`/`dropIn`, 사라지는 것은 `liftOut`이나 투명도로.
- **이징**: 들어오고 멈추는 움직임은 `easing.out`, 오가는 이동은 `easing.inOut`, 튀어나오는 강조만 `easing.spring`. 길이는 강조 300~500ms, 이동 600~900ms. 1초를 넘기지 않는다(자동 재생 간격은 `useStepPlayer`의 두 번째 인자).
- **여러 개는 엇갈려 등장한다**(stagger 40~90ms). 목록, 테스트 결과, 점 무리에 쓴다.
- 단계형 그림은 모두 `StepControls`를 쓴다. 진행 막대를 눌러 원하는 단계로 바로 갈 수 있고, 자동 재생 중에는 현재 칸이 남은 시간만큼 차오른다.
- 새 시각화를 만들면 390px에서 단계를 끝까지 넘겨 보며 스크린샷으로 중간 프레임과 마지막 프레임을 확인한다.

### 리눅스·명령어가 나오는 글

- 기준 OS는 서버에서 가장 많이 쓰는 **Ubuntu LTS**(현재 24.04, 22.04도 고려)로 잡고 글 앞부분에 밝힌다. 배포판마다 다른 부분(RHEL 계열의 firewalld·dnf 등)은 차이만 짧게 덧붙인다.
- 개념을 설명하면 바로 아래에 그대로 따라 칠 수 있는 명령어를 ```bash 코드 블록으로 함께 쓴다. `sudo`가 필요한 명령은 붙여 쓰고, 명령마다 주석으로 무엇을 하는지 적는다.
- 명령의 출력 예시도 ```text 블록으로 보여 주고, 출력의 어느 부분을 봐야 하는지 본문에서 짚는다. 출력은 실제 형식대로 쓴다(지어낸 형식 금지).
- 위험한 명령(원격 서버에서 방화벽 정책을 DROP으로 바꾸기, 규칙 전체 삭제 등)은 `<Callout kind="warning">`으로 경고하고, 되돌리는 방법이나 안전장치를 함께 적는다.
- 확인·되돌리기 순서까지 쓴다: 바꾸기 전 상태 확인 → 변경 → 동작 확인 → 영구 저장 → 되돌리는 법.

### DB가 나오는 글

- **최대한 쉽게** 쓴다. 테이블·인덱스·트랜잭션 같은 개념은 처음 보는 사람도 따라오도록 작은 예제 테이블(예: `users`, `orders`, `products` 몇 줄)을 먼저 보여 주고 그 위에서 설명한다. 같은 예제 테이블을 글 끝까지 이어서 쓴다.
- 설명마다 실제로 실행할 수 있는 SQL을 ```sql 블록으로 함께 쓴다. 기준은 PostgreSQL(현재 16)이고, MySQL 8과 문법·동작이 다르면 그 차이를 짧게 덧붙인다.
- 쿼리는 한 줄씩 무엇을 하는지 주석(`-- ...`)이나 본문으로 풀어 준다. 결과도 ```text 블록에 표 형태로 보여 준다(실제로 나올 결과만).
- 성능 이야기는 반드시 `EXPLAIN`(필요하면 `EXPLAIN ANALYZE`) 출력과 함께 쓰고, 출력의 어느 줄(Seq Scan / Index Scan, rows, cost, actual time)을 봐야 하는지 짚는다. 고치기 전과 후를 나란히 보여 준다.
- 설계 이야기는 "작은 서비스 → 커지는 서비스" 순서로, 언제 그 설계로 넘어가야 하는지(신호와 숫자)를 함께 쓴다. 정답 하나를 내세우지 말고 트레이드오프를 보여 준다.

### 직접 실행해 보는 코드 (CodePlayground)

- 알고리즘 글, 계산이 있는 글에는 독자가 고쳐서 돌려 볼 수 있는 `<CodePlayground>`를 넣는다. 빈 함수 틀(`initialCode`)과 테스트(`tests`), 풀이(`solution`)를 함께 준다.
  ```mdx
  <CodePlayground
    caption="Two Sum"
    functionName="twoSum"
    initialCode={`function twoSum(nums, target) {\n  return [];\n}`}
    solution={`...`}
    tests={[{ args: [[2, 7, 11, 15], 9], expected: [0, 1] }, { args: [[3, 2, 4], 6], expected: [1, 2], compare: "unordered" }]}
  />
  ```
- `language="typescript"`면 타입만 지우고 실행한다(타입 검사는 하지 않는다). `functionName`이 없으면 코드를 그대로 실행하고 console 출력만 보여 준다.
- 코드는 Web Worker에서 돌아서 페이지를 멈추지 않고, `timeoutMs`(기본 2초)를 넘기면 끊는다. 결과 비교는 값 비교(JSON 직렬화)이고, 순서가 상관없으면 `compare: "unordered"`.
- 테스트의 `expected`는 직접 실행해서 확인한 값만 적는다. 짐작으로 쓰지 않는다.

## 글 추가

1. `src/app/posts/{slug}/page.mdx` 를 만든다. 첫 줄에 `export const metadata = getPostMetadata("{slug}")`.
2. `src/features/posts/registry/posts.ts`에 메타데이터(slug, title, summary, **topic**, **tags**, date)를 추가한다. `topic`은 토픽 id를 `/`로 이은 경로다 (예: `"programming/algorithms"`). 없는 경로면 토픽이 표시되지 않으니 `topics.ts`와 맞춘다.
3. 제목(h1)·요약은 레이아웃이 렌더링하므로 MDX 본문에서 `#` 제목을 쓰지 않는다. 본문은 `##`부터 시작한다. 요약(summary)도 본문과 같은 평서체로 쓴다.
4. **퀴즈**: `src/features/quiz/registry/questions/{slug}.ts`에 글 내용으로 4지선다 문제를 5~7개 쓰고, `questions/index.ts`의 `QUESTION_SETS`에 추가한다(아래 "퀴즈" 참고).
5. **로드맵 자리**: `src/features/roadmap/registry/roadmaps.ts`에서 글이 들어갈 로드맵의 `items`에 slug를 공부 순서에 맞게 넣는다. 모든 글은 정확히 한 로드맵에 있어야 하며, 빠지거나 두 번 들어가면 빌드가 멈춘다(아래 "학습 로드맵" 참고).
6. **쉽게 말하면**: 본문 맨 위(metadata 줄 다음 빈 줄 뒤)에 `<EasyIntro>` 블록을 넣는다. 초·중학생도 따라올 수 있는 말로 6~8문장, 비유는 하나, 일반 문단만(목록·코드·링크·`{}` 금지). 헤더의 "쉽게" 토글이 켜져 있으면 펼친 채로 보인다.
7. **해시태그**: `tags`에 단어를 적으면 글 카드·글 상단에 `#태그` 링크로 표시되고 `/tags/{slug}` 페이지가 자동 생성된다. 공백은 제거해 표시하고(`Hash Table` → `#HashTable`), 슬러그는 소문자-하이픈이다(공백과 `/`는 하이픈, `TCP/IP` → `tcp-ip`). 대소문자만 다른 태그는 하나로 합쳐진다. 기존 태그를 재사용해 분류를 일관되게 유지한다 (`/tags` 참고).

## 채용 공고로 글 만들기 (회사 라벨)

채용 공고를 받으면 그 공고가 요구하는 지식을 가장 작은 주제 단위로 쪼개서 글을 하나씩 쓴다.

- 자격 요건·우대 사항·직무 소개의 문장마다 "면접에서 실제로 물어볼 수 있는 하나의 개념"으로 나눈다(예: "JS/Web 성능 최적화" → Core Web Vitals, 코드 스플리팅, 메모리 누수, 이벤트 루프). 이미 같은 주제의 글이 있으면 새로 쓰지 않고 그 글에 회사를 추가한다.
- 각 글은 토픽 트리의 가장 구체적인 노드에 둔다. 맞는 노드가 없으면 하위 토픽을 만든다(예: `Frontend › Performance`).
- `posts.ts`에 `companies: ["coupang"]`처럼 회사 이름(소문자)을 적는다. 그러면 글 목록과 글 상단에 회사 라벨이 붙고, 같은 이름의 해시태그(`#coupang`)가 자동으로 추가된다. `/tags/coupang`에서 그 회사 글만 모아 보고, 검색창에서 회사 이름으로 찾을 수 있다. `/tags` 맨 위에 회사 목록이 따로 나온다.
- 본문에는 회사 이야기를 쓰지 않는다. 글은 주제 자체를 설명하고, 회사와의 연결은 라벨이 맡는다. 퀴즈 문제도 다른 글과 똑같이 쓴다.

## 어휘 사전 (English › 어휘)

고급(C1~C2) 영어 어휘를 공부하는 사전이다. 토픽 `self-development/english/vocabulary`는 `href: "/vocabulary"`로 사전 페이지에 바로 연결된다(토픽에 `href`를 주면 메뉴·토픽 링크가 그 주소로 간다).

- 데이터: `features/vocabulary/registry/words/{첫 글자}.ts`에 `VocabEntry`를 추가한다. 필드 설명은 `registry/types.ts` 주석이 기준이다. 새 글자 파일을 만들면 `registry/index.ts`의 import와 배열에도 넣는다.
- **중복 방지**: 추가하기 전에 `grep -rn 'word: "단어"' src/features/vocabulary/registry/words`로 찾아본다. 빌드 시 `validateVocabulary`가 대소문자를 무시하고 같은 표제어를 찾으면 빌드를 멈춘다. 표제어는 소문자 원형으로 쓴다.
- 항목 기준: 한국어 핵심 뜻 + 영영 정의 + 한국어 상세 설명(뉘앙스, 격식, 비슷한 말과의 차이, 흔한 실수 3~5문장) + 예문 7개(6개 미만이면 빌드가 멈춘다. 기술·업무·학술·일상·감정·논증 중 4가지 이상 상황을 `context`로 표시, 변화형·수동태·질문·대화체·부정문처럼 문장 형태를 섞는다. 번역, 3개 이상에 쓰임 메모) + 연어 + 동의어·반의어 + 파생어 + 헷갈리는 말 + 어원 + 주제.
- 예문에는 표제어나 그 변화형이 꼭 들어간다(빈칸 퀴즈가 그 자리를 가린다). 어간이 바뀌는 변화형(viable → viability)은 `forms`에 적는다. 없으면 빌드가 멈춘다.
- 화면: `/vocabulary`(검색·난이도·주제·학습 상태 필터, ABC 순/무작위 순서와 다시 섞기, ABC 순일 때 A~Z 이동), `/vocabulary/{word}`(상세: 발음·예문 듣기, 상황별 예문 필터, 번역 가리기), `/vocabulary/study`(학습).
- 학습: 카드(뒤집기, 스스로 판정), 뜻 고르기, 빈칸 채우기, 듣고 고르기(Web Speech API, 지원하는 브라우저만). 라이트너 상자 방식으로 맞히면 다음 복습 간격이 1→2→4→7→15일로 늘고, 틀리면 다음 날 다시 나온다. 학습 기록은 `features/vocabulary/atoms/vocab-progress`(get/set/reset, localStorage `vocab-progress`)에 저장된다.

## 글 지도 (콘텐츠 색인) — 새 글을 쓰기 전에 먼저 읽는다

글이 많아져서 중복과 관계를 한곳에서 본다. `scripts/content-index.cjs`가 `posts.ts`와 모든 `page.mdx`를 읽어 두 가지를 만든다(`pnpm content:index`, `pnpm build` 전에도 자동 실행).

- `docs/content-index.md`: 작업용 색인. 토픽별 글(요약·태그·키워드·줄 수·`##` 소제목), 직접 링크 →, 키워드 백링크 →, 이 글로 오는 글 ←, 키워드 소유 목록, 겹칠 수 있는 글, 서로 이어진 글, 긴 글(900줄 초과), 연결 없는 글.
- `src/features/content-map/registry/relations.generated.ts`: `/map`(글 지도 페이지, 푸터 링크)이 쓰는 글 사이 관계. 직접 고치지 않는다.

새 글을 쓰거나 글을 쪼갤 때 순서:
1. `pnpm content:index` 후 `docs/content-index.md`를 읽는다. 같은 주제를 다룬 글이 있으면 셋 중 하나를 고른다.
   - **건너뛴다**: 기존 글이 이미 충분히 깊으면 새로 쓰지 않고 링크만 건다.
   - **보충한다**: 기존 글에 빠진 내용(실무 사례, 엣지 케이스, 새 버전 변화)을 그 글에 더한다.
   - **시리즈로 넓힌다**: 같은 주제라도 다른 각도(개념 → 내부 동작 → 실무 장애 → 설계 판단)로 글을 하나 더 써서 시리즈처럼 풍부하게 만든다. 이때 각 글은 서로 다른 질문에 답해야 하고, 글 앞뒤에서 "이 주제의 다른 글"을 서로 링크하며, 같은 설명을 반복하지 않고 링크로 넘긴다. 키워드도 글마다 다르게 둔다.
2. 토픽은 색인의 토픽 목록에서 고르고, 키워드는 "키워드 소유"에 없는 말로 정한다.
3. 본문에서 이어지는 글은 직접 링크한다. 앞뒤 글(시리즈)도 서로 링크한다.
4. 글 하나는 한 주제만 다룬다. 900줄을 넘기면 주제별로 나눈다(나눈 글끼리 링크하고, 퀴즈 `anchor`·`post`도 옮긴 글에 맞춘다).
5. 글을 등록한 뒤 다시 `pnpm content:index`를 돌려 생성 파일을 함께 커밋한다.

## 백링크 (글 사이 자동 링크)

- `posts.ts`의 각 글에 `keywords`를 적는다. 다른 글 본문에 그 단어가 나오면 빌드 시점에 이 글로 가는 링크가 자동으로 걸린다. 글 하나에서 대상 글마다 **처음 한 번만** 걸리고, 자기 자신은 링크하지 않는다.
- 구현은 remark 플러그인 `src/common/mdx-plugins/remark-backlinks/index.mjs`. Turbopack은 플러그인을 함수로 받지 못해 `next.config.ts`에서 **절대 경로 문자열**과 직렬화 가능한 옵션(`{ posts: [{ slug, title, keywords }] }`)으로 등록한다.
- 제목, 코드(인라인 포함), 이미 링크인 텍스트는 건너뛴다. 영문 키워드는 단어 경계를 지킨다(`IndexedDB` 안의 `DB`에 걸리지 않음). 긴 키워드부터 찾는다.
- `/posts/...`로 가는 링크는 직접 쓴 것까지 모두 새 창(`target="_blank"`, `rel="noopener noreferrer"`)으로 열리고, 본문에서 ↗ 표시가 붙는다. 직접 링크한 글은 자동으로 한 번 더 링크하지 않는다.
- 키워드는 그 글을 대표하는 말만 2~5개 적는다. "토큰", "서버"처럼 너무 흔한 단어는 엉뚱한 곳에 링크가 걸리니 피한다(대신 "액세스 토큰", "세션 쿠키"처럼 구체적으로).

## 학습 로드맵 (`/roadmap`) · 오늘 할 일 (`/study`)

글 661편을 "완벽히 이해하고 응용할 수 있는 사람"이 되기 위한 학습 시스템이다. 로그인 없이 이 브라우저의 localStorage(`study-progress`)에 기록하고, JSON으로 내보내고 가져온다.

- **로드맵 데이터**: `features/roadmap/registry/roadmaps.ts`의 트리 하나가 단일 원천이다. 노드의 `items`에 글(slug), 관문(`{ checkpoint }`), 또 다른 로드맵이 **순서대로** 들어간다(로드맵 안의 로드맵, 깊이 제한 없음). 순서가 곧 공부 순서다. `tier`(1 핵심 / 2 실무·면접 / 3 참고)는 로드맵 단위로 주고 글마다 `{ post, tier }`로 덮어쓴다. `requires`는 "먼저 읽어 두면 좋은" 로드맵의 절대 경로(안내용 잠금, 강제 아님). 빌드 시 `validateRoadmaps`가 없는 글·중복·빠진 글·없는 requires를 검사한다.
- **마스터 4단계**(글마다): 1 읽음(손으로 체크) → 2 설명함(글 끝 "내 말로 설명하기"에 20자 이상 저장) → 3 적용함(그 글 퀴즈 또는 관문에서 80% 이상) → 4 응용함(손으로 체크). 상태는 `features/roadmap/atoms/study-progress`(get/set/reset)로 다룬다.
- **지도**: `/roadmap`의 "지도" 보기(`features/roadmap/components/roadmap-graph`)는 최상위 로드맵을 노드로, `requires`를 화살표로 그린다(하위 경로 requires는 최상위로 올려 긋는다). 층은 가장 긴 선행 경로로 정하고 층 안 순서는 앞 노드 평균 위치로 맞춘다. 앞 로드맵을 다 읽은 길은 초록 점선이 흐르고, 노드에 올리면 이어진 선만 밝아진다. 로드맵 상세는 글·관문·하위 로드맵을 세로선 하나로 잇는다(읽은 칸까지 초록). 새 최상위 로드맵을 만들면 `requires`를 줘서 지도에서 떠 있지 않게 한다.
- **관문**: 로드맵 `items`의 `{ checkpoint: "이름" }`. 그 앞에 놓인 글들(하위 로드맵 포함)의 퀴즈를 모아 풀고 80% 이상이면 통과, 한 문제도 틀리지 않은 글은 적용함으로 올라간다. 경로는 `/roadmap/{로드맵 경로}/cp-{번호}`.
- **복습**: 읽은 글은 라이트너 상자(1→2→4→7→15일, 어휘 사전과 같은 간격)로 `/study`에 돌아온다. 카드는 글 끝의 면접 질문(`features/study/registry/interview.generated.ts`, `pnpm content:index`가 "## 면접에서 나올 만한 질문" 섹션에서 뽑는다), 한 줄 요약, 4지선다를 섞어 낸다. 알았다/몰랐다로 자기 채점한다. 면접 질문 파일(약 2.5MB)과 문제 본문은 복습을 시작할 때만 동적으로 불러온다.
- **글 페이지 패널**(`features/roadmap/components/study-panel`): 로드맵 위치와 앞뒤 글, 단계 버튼, 설명 쓰기, 그 글 퀴즈(`features/quiz/components/post-quiz`, 문제는 눌렀을 때 내려받는다).
- **퀴즈 엔진 재사용**: 문제 묶음을 푸는 상태 기계는 `features/quiz/hooks/use-quiz-runner`, 화면은 `features/quiz/components/quiz-player`(시작 → 문제 카드 → 결과). 토픽 퀴즈·관문·글 퀴즈·복습 카드가 모두 이걸 쓴다.
- **쉬운 모드**: 헤더의 "쉽게" 토글(`common/atoms/easy-mode`). 켜면 글마다 `<EasyIntro>`가 펼쳐진 채로 시작한다.

## 퀴즈 (토픽별 Flash 퀴즈)

글을 쓸 때마다 문제가 쌓이고, 토픽별로 묶여서 풀린다. 문제는 글이 속한 토픽과 그 상위 토픽 퀴즈에 모두 자동으로 들어간다(예: `programming/backend/auth` 글의 문제는 Auth, Backend, Programming 퀴즈에 나온다).

- 데이터: `features/quiz/registry/questions/{slug}.ts`에 `QuizQuestion[]`을 export한다. 필드는 `id`(`{slug}-{번호}`), `post`(slug), `question`, `choices`(보기 4개), `answer`(정답 인덱스), `explanation`, `anchor`.
- 문제는 글에 실제로 나온 내용으로만 낸다. 외워서 맞히는 문제보다 이유를 알아야 맞히는 문제("왜 ~할까", "~하면 어떻게 되나")를 우선한다. 오답 보기도 그럴듯하게(흔한 오해, 비슷한 옵션 이름) 만든다. 정답 위치는 문제마다 섞는다(풀 때 보기 순서도 무작위로 섞인다).
- `explanation`은 본문과 같은 평서체로 2~3문장. 왜 정답인지, 오답이 왜 틀렸는지 하나쯤 짚는다.
- `anchor`는 근거가 되는 `##` 소제목의 id(rehype-slug 규칙: 소문자, 공백 → `-`, 괄호·쉼표·마침표 등 제거, 한글 유지. 예: "## 이름을 IP로 바꾸기 (DNS)" → `이름을-ip로-바꾸기-dns`). 해설의 "관련 글" 링크가 그 위치로 새 창에서 열린다. 추가한 뒤 실제 페이지에 그 id가 있는지 확인한다.
- 빌드 시 `validateQuestions`가 중복 id, 없는 글, 보기 개수(2~5), 정답 범위를 검사해 틀리면 빌드를 멈춘다.
- 글·토픽 페이지의 `QuizLink`는 문제 본문을 import하지 않고 `registry/summary.ts`(문제 수는 `counts.generated.ts`)만 읽는다. 그래야 페이지마다 문제 전체가 번들에 실리지 않는다. `counts.generated.ts`는 `pnpm content:index`(빌드 전 자동)가 만들고, 실제 문제 수와 다르면 빌드가 멈춘다. 문제 본문(`registry/index.ts`)은 `/quiz` 화면에서만 쓴다.
- UI: `/quiz`(문제가 있는 토픽 목록), `/quiz/{토픽 경로}`(풀기). 숫자 키로 고르고 Enter로 넘어간다. 결과 화면에서 틀린 문제만 다시 풀 수 있다. 토픽 페이지와 글 끝에 `QuizLink`가 자동으로 붙는다.

## 즐겨찾기 (로컬)

- 로그인 없이 이 브라우저의 localStorage(`bookmarks` 키)에만 저장한다. 상태는 `features/bookmarks/atoms/bookmarks`(get/set/reset, `atomWithStorage`)로 다룬다.
- 별 버튼 `BookmarkButton`은 글 목록 줄(`PostItem`)과 글 상단(`PostLayout`, `withLabel`)에 있다. 목록 줄에서는 제목 링크가 줄 전체를 덮으므로 버튼을 `position: relative; z-index: 1`로 올려 둔다.
- `/bookmarks`는 최근에 추가한 순서로 보여 주고, 레지스트리에서 사라진 글의 slug는 건너뛴다.

## 검색

- 헤더의 검색 아이콘, `/` 키, `Ctrl/⌘ + K`로 연다. 정적 사이트라 브라우저에서 글 메타데이터(제목 > 태그 > 토픽 > 요약 순 가중치, 모든 단어 AND 매칭)를 검색한다. 엔진은 `features/search/engine`, UI는 `features/search/components/search-launcher`다.
- 검색 버튼은 `common`이 features를 import하지 않도록 `layout.tsx`가 `Shell`의 `headerActions`로 주입한다.
- 본문 전문 검색은 아직 없다. 필요해지면 빌드 시 본문 텍스트 색인을 만드는 방식으로 확장한다.

## 앱 설치 (PWA)

- `src/app/manifest.ts`(웹 앱 매니페스트), `public/icons/*`(192·512, maskable 겸용), `src/app/icon.svg`·`apple-icon.png`가 설치 아이콘이다. 아이콘을 바꾸면 세 곳을 함께 바꾼다.
- `public/sw.js` 서비스 워커는 프로덕션에서만 등록된다(`common/hooks/use-service-worker`). 빌드 산출물·아이콘은 캐시 우선, 페이지는 네트워크 우선이고 오프라인이면 마지막으로 본 페이지를 보여 준다. 캐시 버전은 등록 주소의 `?v=<빌드 ID>`(`next.config.ts`의 `NEXT_PUBLIC_BUILD_ID`, Vercel은 커밋 SHA)라서 배포마다 새 워커가 설치되고 이전 배포의 캐시는 `activate`에서 지워진다. 손으로 올릴 버전은 없다.
- 설치 버튼(`common/components/install-app`)은 푸터에 있고, 브라우저가 설치를 허락할 때(`beforeinstallprompt`)만 보인다. iOS 사파리에는 "홈 화면에 추가" 안내 문구를 보여 준다.

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
