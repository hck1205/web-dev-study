# 글 지도 (콘텐츠 색인)

> 자동 생성 문서다. 직접 고치지 말고 `pnpm content:index`로 다시 만든다.
> 새 글을 쓰기 전에 이 문서를 먼저 읽는다: 같은 주제의 글이 있는지, 어느 토픽에 둘지, 어떤 글로 링크할지, 어떤 키워드가 이미 쓰였는지 확인한다.

글 578편 · 토픽 87개 · 생성 기준: posts.ts + src/app/posts/*/page.mdx

## 토픽별 글

### Programming › AI (`programming/ai`)

#### `rag-patterns-overview` — RAG 패턴 비교: 찾는다, 잇는다, 따져 본다

- 요약: 같은 문서와 질문 다섯 개로 기본 RAG, GraphRAG, 에이전틱 RAG를 나란히 돌려 봤다. 질문 모양과 시간 예산으로 무엇을 고를지 정리했다.
- 태그: tesla, AI, RAG, Search, System Design · 회사: tesla
- 키워드: RAG 패턴 비교, RAG 방식 선택
- 길이: 255줄
- 소제목: 찾는다, 잇는다, 따져 본다 / 같은 질문 다섯 개를 세 방식에 넣었다 / 숫자 뒤에 숨은 것 / 질문 하나가 세 길을 지나는 모습 / 질문 모양으로 고르기 / 어느 방식이든 공통으로 지키는 것 / 면접에서 나올 만한 질문
- 직접 링크 →: rag-classic-pipeline, rag-retrieval-quality, graph-rag, agentic-rag, vector-db
- 키워드 백링크 →: kafka-basics, on-call
- 이 글로 오는 글 ←: agentic-rag, graph-rag

### Programming › AI › Claude Code (`programming/ai/claude-code`)

#### `claude-code-context-window` — Claude Code 컨텍스트 창: 차고, 압축되고, 되감기

- 요약: Claude Code가 매 요청에 싣는 것과 창이 차면 요약으로 바뀌는 과정을 따라가 봤다. 압축 뒤 남는 것, CLAUDE.md를 짧게 쓰는 이유, 서브에이전트, /rewind로 되돌릴 수 있는 것과 없는 것, 플랜 모드를 정리했다.
- 태그: AI, Claude Code, LLM
- 키워드: 자동 압축, 플랜 모드
- 길이: 360줄
- 소제목: 책상 위에 올라가는 것들 / 요청마다 책상 전체를 다시 보낸다 / 창이 차면 요약이 대신한다 / 압축 뒤에 돌아오는 파일 다섯 개 / CLAUDE.md는 짧을수록 잘 지켜진다 / 조사는 서브에이전트에게 맡긴다 / Esc 두 번으로 되돌아가기 / 되돌리지 못하는 것들 / 손대기 전에 계획부터 받는다 / 현장에서 컨텍스트가 일을 망치는 순간 / 면접에서 나올 만한 질문
- 직접 링크 →: claude-code-project-structure, claude-code-extensions, claude-code-parallel-and-scheduled
- 키워드 백링크 →: postgres-architecture
- 이 글로 오는 글 ←: claude-code-extensions, claude-code-fundamentals-map, claude-code-parallel-and-scheduled, claude-code-project-structure

#### `claude-code-extensions` — Claude Code 확장: 슬래시 명령, 스킬, 서브에이전트, 훅이 일을 나누는 법

- 요약: 가끔 쓰는 절차는 스킬, 결과만 필요한 조사는 서브에이전트, 반드시 지킬 검사는 훅으로 나눈다. SKILL.md 앞머리, 서브에이전트가 물려받는 것, 종료 코드로 판정하는 훅을 직접 만든 validate-bash.sh와 Stop 훅으로 확인하고, 남의 확장을 돌릴 때의 위험을 본다.
- 태그: AI, Claude Code, LLM, Security, Linux
- 키워드: SKILL.md, PreToolUse, Claude Code 훅, 커스텀 서브에이전트
- 길이: 542줄
- 소제목: 누가 방아쇠를 당기나 / commands 폴더는 스킬로 합쳐졌다 / SKILL.md 한 장 뜯어보기 / 서브에이전트는 따로 쓰는 작업 공간 / 훅은 매번 실행된다 / 한 요청이 지나가는 길 / 남이 만든 확장을 돌리기 전에 / 무엇을 어디에 둘까 / 면접에서 나올 만한 질문
- 직접 링크 →: claude-code-project-structure, claude-code-context-window, rag-classic-pipeline
- 키워드 백링크 →: git-remote-collaboration, osi-in-practice
- 이 글로 오는 글 ←: claude-code-context-window, claude-code-fundamentals-map, claude-code-project-structure

#### `claude-code-fundamentals-map` — Claude Code 기본기 지도: 카드 열두 장을 배우는 순서로

- 요약: 돌아다니는 열두 장짜리 그림과 프로젝트 구조 그림을 공식 문서에 맞춰 보고, 배우는 순서대로 한 문단씩 정리했다. 자세한 내용은 시리즈의 네 글로 잇는다.
- 태그: AI, Claude Code, LLM
- 키워드: Claude Code 기본기, AI Engineering Fundamentals
- 길이: 303줄
- 소제목: 열두 장을 문서에 맞춰 보면 / 카드들을 한 장에 겹쳐 보기 / 배우는 순서 / 하루 작업 하나에서 카드들이 만나는 모습 / 훅 카드의 세 줄 읽기 / 내 컴퓨터에서 도는 것과 밖에서 도는 것 / 어떤 카드를 꺼낼까 / 카드를 잘못 꺼내는 순간 / 면접에서 나올 만한 질문
- 직접 링크 →: claude-code-project-structure, claude-code-extensions, claude-code-context-window, claude-code-parallel-and-scheduled
- 키워드 백링크 →: git-tips-advanced, postgres-architecture
- 이 글로 오는 글 ←: claude-code-parallel-and-scheduled, claude-code-project-structure

#### `claude-code-parallel-and-scheduled` — Claude Code 병렬 세션과 예약 작업: worktree, /loop, /goal

- 요약: 같은 폴더에서 세션 둘을 돌리면 서로의 파일을 덮는다. git worktree로 작업 폴더를 나눠 실제로 커밋·병합·충돌·포트 충돌을 확인하고, /loop, /goal, 클라우드 예약 작업, 아티팩트를 언제 쓰는지 정리했다.
- 태그: AI, Claude Code, Git, Automation
- 키워드: 병렬 세션, 클라우드 예약 작업
- 길이: 436줄
- 소제목: 한 폴더에 세션 둘을 띄우면 / 저장소 하나에 작업 폴더 셋 / 각자 커밋하고 한곳에서 합친다 / 파일은 갈라져도 포트와 DB는 하나다 / claude --worktree가 대신 해 주는 것 / 다 쓴 작업 폴더 치우기 / 세션이 열려 있는 동안 되풀이하기 / 조건이 맞을 때까지 턴을 잇는다 / 노트북을 덮어도 도는 예약 작업 / 결과를 링크 하나로 남기기 / 현장에서 병렬과 예약이 꼬이는 순간 / 면접에서 나올 만한 질문
- 직접 링크 →: git-tips-advanced, claude-code-context-window, git-merge-conflict, claude-code-fundamentals-map
- 키워드 백링크 →: github-actions-docker-ecr, docker-compose, git-branch-merge, postgres-architecture
- 이 글로 오는 글 ←: claude-code-context-window, claude-code-fundamentals-map, git-tips-advanced

#### `claude-code-project-structure` — Claude Code 프로젝트 구조: CLAUDE.md, settings.json, .mcp.json은 누가 언제 읽나

- 요약: CLAUDE.md와 rules는 모델이 참고하는 글이고 settings.json과 .mcp.json은 클라이언트가 지키는 규칙이다. 파일이 쌓이는 순서, 설정 네 겹, 권한 규칙 평가 순서, 커밋할 것과 남길 것, 남의 저장소를 열 때의 신뢰 확인을 실제 출력으로 확인한다.
- 태그: AI, Claude Code, LLM, Git, Security
- 키워드: CLAUDE.md, CLAUDE.local.md, settings.local.json, .mcp.json
- 길이: 563줄
- 소제목: 돌아다니는 구조도와 공식 문서 맞춰 보기 / 글로 부탁하는 것과 클라이언트가 막는 것 / CLAUDE.md가 쌓이는 순서 / 필요할 때만 읽히는 규칙 / settings.json은 네 겹이다 / 허용, 확인, 거부 / 팀이 함께 쓰는 MCP 서버 / 저장소에 올릴 것과 내 컴퓨터에 둘 것 / 남이 만든 저장소를 열 때 / 규칙이 안 먹을 때 증상별로 볼 곳 / 모델이 읽는 글, 클라이언트가 지키는 규칙 / 면접에서 나올 만한 질문
- 직접 링크 →: claude-code-extensions, claude-code-context-window, git-large-files-secrets, claude-code-fundamentals-map
- 키워드 백링크 →: git-ignore-config, git-tips-advanced
- 이 글로 오는 글 ←: claude-code-context-window, claude-code-extensions, claude-code-fundamentals-map

### Programming › AI › RAG (`programming/ai/rag`)

#### `agentic-rag` — 에이전틱 RAG, 찾고 채점하고 다시 찾는 검색

- 요약: 한 번 찾고 끝내지 않고, 모델이 도구와 검색어를 고르고 결과를 채점해 다시 찾는다. 스텁 에이전트로 루프, 라우터, 멈출 조건, 호출 비용, 웹 결과 인젝션을 따라가 봤다.
- 태그: tesla, AI, RAG, Search, Security, Observability · 회사: tesla
- 키워드: 에이전틱 RAG, Self-RAG, Corrective RAG, 에이전트 루프
- 길이: 368줄
- 소제목: 한 번 찾고 끝내지 않는 검색 / 스텁 에이전트로 돌려 본 네 번의 검색 / 어느 도구로 갈지 고르는 라우터 / 스스로 채점하고 고쳐 찾기 / 멈출 조건을 정해 두지 않으면 / 호출 수가 곱해진다 / 웹 결과가 지시를 내릴 때 / 한 단계씩 남기는 추적 / 에이전트가 필요 없는 질문 / 면접에서 나올 만한 질문
- 직접 링크 →: graph-rag, rag-classic-pipeline, rag-retrieval-quality, rag-patterns-overview, distributed-tracing
- 키워드 백링크 →: observability-basics, kafka-basics, vector-db, on-call
- 이 글로 오는 글 ←: graph-rag, rag-classic-pipeline, rag-patterns-overview, rag-retrieval-quality

#### `graph-rag` — GraphRAG, 흩어진 문서를 관계로 잇는 검색

- 요약: 답이 문서 세 개에 나뉘면 가까운 청크만 찾는 RAG는 중간 고리를 놓친다. 개체와 관계를 뽑아 지식 그래프를 만들고 사슬을 따라가는 과정을 직접 돌려 봤다.
- 태그: AI, RAG, Search, Database, PostgreSQL
- 키워드: GraphRAG, 지식 그래프, 커뮤니티 요약, 멀티홉 질문
- 길이: 521줄
- 소제목: 답이 세 문서에 흩어져 있다 / 문장을 점과 선으로 바꾸기 / 질문에서 출발점을 찾고 사슬을 따라간다 / PostgreSQL 재귀 CTE로 같은 탐색을 / 전체를 묻는 질문에는 커뮤니티 요약 / 그래프를 만들고 유지하는 비용 / 현장에서 GraphRAG가 틀리는 순간 / 언제 그래프까지 만들 만한가 / 면접에서 나올 만한 질문
- 직접 링크 →: rag-classic-pipeline, rag-retrieval-quality, agentic-rag, rag-patterns-overview, db-type-graph, sql-cte-recursive
- 키워드 백링크 →: ds-graph-bfs-dfs, sqld-top-n-hierarchical-pivot, db-modeling-normalization, vector-db, on-call
- 이 글로 오는 글 ←: agentic-rag, db-type-graph, rag-classic-pipeline, rag-patterns-overview, rag-retrieval-quality

#### `rag-classic-pipeline` — 기본 RAG, 질문 하나가 답이 되기까지

- 요약: 사내 위키 20편으로 RAG를 직접 만들어 문서를 자르고 벡터로 넣는 색인부터 top-k 검색, 프롬프트 조립과 출처까지 따라갔다. 잘린 청크, 낡은 문서, 멀티홉 질문, 문서에 심긴 프롬프트 인젝션처럼 실제로 틀리는 장면도 출력으로 확인한다.
- 태그: AI, RAG, LLM, Search, Embedding
- 키워드: RAG, 청크 겹침, 간접 프롬프트 인젝션, Lost in the Middle
- 길이: 421줄
- 소제목: 모델이 모르는 것을 어떻게 알려 주나 / 질문이 오기 전에 해 두는 일 / 어디서 자르느냐가 답을 바꾼다 / 질문이 들어오면 일어나는 일 / 프롬프트 한 장을 뜯어 보기 / 한 번 찾아서는 닿지 않는 질문 / 낡은 문서가 1등을 할 때 / 문서가 명령을 품고 있을 때 / 많이 붙이면 해결될까 / 답이 이상하다는 제보를 받았을 때 / 다음에 볼 것 / 면접에서 나올 만한 질문
- 직접 링크 →: vector-db, rag-retrieval-quality, graph-rag, agentic-rag
- 키워드 백링크 →: kafka-basics
- 이 글로 오는 글 ←: agentic-rag, claude-code-extensions, graph-rag, rag-patterns-overview, rag-retrieval-quality, vector-db

#### `rag-retrieval-quality` — RAG 검색 품질, 감으로 고치지 않고 재 보기

- 요약: 질문 18개로 정답지를 만들어 recall@k, MRR, nDCG를 직접 계산하고 벡터, BM25, RRF 하이브리드를 비교했다. 청크 크기 실험, 리랭킹, 쿼리 재작성과 HyDE, 권한 필터, CI 회귀 테스트까지 숫자로 따라간다.
- 태그: AI, RAG, Search, LLM
- 키워드: recall@k, RRF, 하이브리드 검색, 리랭킹, HyDE
- 길이: 358줄
- 소제목: 정답지부터 만든다 / 순위 하나에서 세 숫자 뽑기 / 같은 시험지로 세 가지 검색 비교 / 두 순위를 합치는 방법, RRF / 청크 크기를 바꾸면 무엇이 움직이나 / 넉넉히 뽑고 다시 줄 세우기 / 질문을 고쳐서 다시 묻기 / 권한 없는 조각은 검색 안에서 거른다 / 바꿀 때마다 시험을 다시 친다 / 시험지가 먼저다 / 면접에서 나올 만한 질문
- 직접 링크 →: rag-classic-pipeline, vector-db, elasticsearch-inverted-index, graph-rag, agentic-rag
- 키워드 백링크 →: db-index-design, kafka-basics, db-modeling-normalization, on-call
- 이 글로 오는 글 ←: agentic-rag, elasticsearch-inverted-index, graph-rag, rag-classic-pipeline, rag-patterns-overview, vector-db

### Programming › Algorithms (`programming/algorithms`)

#### `big-o-notation` — Big O 표기법: 입력이 커질 때 얼마나 느려지나

- 요약: 100건에서는 빠르던 코드가 10만 건에서 시간 초과가 나는 이유를 Big O로 따라간다. 자주 만나는 복잡도와 실제 숫자, 최악과 분할 상환, 공간 복잡도, 해시맵과 이진 탐색으로 줄이는 법, 자바스크립트에 숨은 반복문까지 다룬다.
- 태그: Algorithm, JavaScript, Performance
- 키워드: Big O, 시간 복잡도, 공간 복잡도, 분할 상환
- 길이: 419줄
- 소제목: 몇 초가 아니라 늘어나는 모양을 센다 / 상수와 작은 항을 버리는 이유 / 자주 만나는 모양들 / n이 백만이 되면 / 운이 좋을 때와 나쁠 때 / 가끔 비싼 연산은 나눠서 센다 / 메모리도 같은 방식으로 센다 / 이중 반복문을 해시맵 하나로 / 정렬해 두면 log n으로 찾는다 / 자바스크립트에 숨은 반복문 / 운영에서 n²은 이런 모양으로 드러난다 / 다시 주문 걸러내기로 / 면접에서 나올 만한 질문
- 직접 링크 →: sql-query-rewrite
- 키워드 백링크 →: ds-binary-tree-bst, js-execution-context, ds-hash-map, js-memoization, sql-filtering-operators, event-loop, ds-array-matrix
- 이 글로 오는 글 ←: data-structures-overview, ds-array-matrix, ds-hash-map, ds-linked-list, ds-stack-queue-deque, ds-trie, ds-union-find, js-memoization

#### `data-structures-overview` — 자료구조 한눈에 고르기: 면접 단골 13개 지도

- 요약: 배열부터 유니온 파인드까지 13개 자료구조를 필요한 연산에서 출발해 고르는 법을 정리한다. 연산별 비용표, 문제 문장에 숨은 신호, 여러 구조가 함께 일하는 LRU와 다익스트라, 대표 문제 짝짓기를 담았다.
- 태그: Algorithm, Data Structure, JavaScript, Performance
- 키워드: 자료구조 선택, 자료구조 면접
- 길이: 302줄
- 소제목: 재료는 두 가지뿐이다 / 필요한 연산에서 출발하기 / 연산별 비용 한 장 / 문제 문장에 숨은 신호 / 구조 여러 개가 함께 일하는 문제 / 세기와 고르기를 따로 하기 / 대표 문제를 구조에 짝지어 두기 / 메모리를 내주고 시간을 사는 거래 / 고른 구조가 틀렸다는 신호 / 이 지도로 공부하는 순서 / 면접에서 나올 만한 질문
- 직접 링크 →: big-o-notation, ds-trie, ds-hash-map, ds-binary-tree-bst, ds-heap, ds-stack-queue-deque, ds-array-matrix, ds-linked-list, ds-graph-bfs-dfs, ds-union-find, sd-maps-tiles-routing, bloom-filter
- 키워드 백링크 →: js-memoization, sd-autocomplete-trie
- 이 글로 오는 글 ←: ds-array-matrix, ds-binary-tree-bst, ds-graph-bfs-dfs, ds-hash-map, ds-stack-queue-deque, ds-trie, ds-union-find, system-design-study-path

### Programming › Algorithms › Data Structures (`programming/algorithms/data-structures`)

#### `ds-array-matrix` — 배열과 행렬: 칸이 붙어 있어서 생기는 일

- 요약: 반복문 순서만 바꿨는데 같은 2차원 합이 여덟 배 느려지는 데서 출발해, 연속 메모리에서 나오는 연산 비용, V8의 용량 증가와 원소 종류, 두 포인터·슬라이딩 윈도·누적 합·행렬 회전 풀이, 행 우선 배치와 캐시를 실측으로 따라간다.
- 태그: Algorithm, Data Structure, JavaScript, Performance
- 키워드: 동적 배열, 두 포인터, 누적 합 배열, 행 우선, elements kind
- 길이: 533줄
- 소제목: 칸이 붙어 있어서 인덱스가 공짜다 / 자리가 모자라면 더 큰 방으로 옮긴다 / 자바스크립트 배열은 속이 여러 가지다 / 미리 자리를 잡으면 빨라질까 / 양 끝에서 좁혀 오는 두 포인터 / 창을 밀면서 세기 / 미리 더해 두면 구간 합이 뺄셈 한 번 / 2차원도 메모리에서는 한 줄이다 / 행렬을 제자리에서 돌리기 / 배열 코드에서 반복해서 나오는 실수 / 배열이 아닌 걸 골라야 할 때 / 면접에서 나올 만한 질문
- 직접 링크 →: ds-linked-list, ds-stack-queue-deque, js-array-mutation, big-o-notation, ds-hash-map, js-primitive-vs-reference, ds-heap, ds-binary-tree-bst, data-structures-overview
- 키워드 백링크 →: js-prototype-chain, js-memoization
- 이 글로 오는 글 ←: big-o-notation, data-structures-overview, ds-hash-map, ds-linked-list, ds-stack-queue-deque

#### `ds-binary-tree-bst` — 이진 트리와 이진 탐색 트리: 순회, 지우기, 기울어진 트리

- 요약: 정렬된 id를 재귀 BST에 넣다 콜 스택이 넘치는 사고에서 출발해 노드 구조, 네 가지 순회와 반복문 구현, 찾기·넣기·지우기, 무작위와 정렬 입력의 높이 차이를 Node로 재 본다. BST 검증의 함정과 최소 공통 조상도 단계별로 푼다.
- 태그: Data Structure, Algorithm, JavaScript, Performance
- 키워드: 이진 탐색 트리, 중위 순회, 최소 공통 조상, 레드-블랙 트리
- 길이: 557줄
- 소제목: 노드 하나에 자식 두 개 / 왼쪽은 작고 오른쪽은 크다 / 네 가지 순서로 훑기 / 재귀는 깊이만큼 스택을 먹는다 / 지우기는 자식 수에 따라 세 갈래 / 정렬된 키를 넣으면 리스트가 된다 / BST가 맞는지 검증하기 / 두 노드의 가장 가까운 공통 조상 / 트리를 꺼낼 때와 넣어 둘 때 / 면접에서 나올 만한 질문
- 직접 링크 →: ds-hash-map, ds-heap, data-structures-overview, ds-graph-bfs-dfs, dom-basics, ds-stack-queue-deque, db-index, sd-leaderboard-sorted-set
- 키워드 백링크 →: ds-linked-list, redis-basics
- 이 글로 오는 글 ←: big-o-notation, data-structures-overview, ds-array-matrix, ds-hash-map, ds-heap, ds-trie

#### `ds-graph-bfs-dfs` — 그래프와 BFS·DFS: 최단 경로, 사이클, 위상 정렬

- 요약: DFS로 구한 최단 경로가 틀린 이유에서 출발해 인접 리스트와 행렬, BFS가 최단 거리를 보장하는 이유, 재귀 깊이 한계, 색 세 가지 사이클 찾기, 칸의 알고리즘, 섬 개수, 가중치가 붙을 때를 Node 22로 재 가며 따라간다.
- 태그: Algorithm, Data Structure, JavaScript
- 키워드: 너비 우선 탐색, 깊이 우선 탐색, 위상 정렬, 인접 리스트
- 길이: 403줄
- 소제목: 점과 선을 메모리에 담는 두 방법 / 가까운 것부터 한 겹씩 넓히는 BFS / 한 갈래를 끝까지 가 보는 DFS / 재귀는 수천 단계에서 끊긴다 / 방향 그래프에서 고리 찾기 / 먼저 할 일부터 줄 세우기 / 선수 과목을 다 들을 수 있나 / 격자도 그래프다 / 선에 무게가 붙으면 BFS가 틀린다 / 문제를 보고 탐색을 고르는 법 / 면접에서 나올 만한 질문
- 직접 링크 →: ds-trie, ds-union-find, data-structures-overview, ds-stack-queue-deque, ds-heap, sd-maps-tiles-routing, db-type-graph
- 키워드 백링크 →: dom-basics, js-closures
- 이 글로 오는 글 ←: data-structures-overview, db-type-graph, ds-binary-tree-bst, ds-heap, ds-stack-queue-deque, ds-trie, ds-union-find, graph-rag, modular-monolith, pattern-composite, sd-maps-tiles-routing, sd-web-crawler-architecture, sql-cte-recursive, sqld-top-n-hierarchical-pivot

#### `ds-hash-map` — 해시맵: 키를 칸 번호로 바꾸는 구조와 O(1)이 깨지는 순간

- 요약: 객체로 단어를 셌더니 constructor가 함수 문자열이 되는 버그에서 시작해 해시 함수, 체이닝과 개방 주소법, 적재율과 다시 넣기를 직접 구현하고 재 본다. JS 객체와 Map의 차이, 두 수의 합·애너그램·연속 수열 문제, 해시 플러딩 공격까지 다룬다.
- 태그: Data Structure, Algorithm, JavaScript, Performance, Security
- 키워드: 해시 테이블, 개방 주소법, 적재율, 해시 플러딩
- 길이: 603줄
- 소제목: 키를 칸 번호로 바꾸는 함수 / 같은 칸에 두 키가 떨어지면 / 얼마나 채우면 느려지나 / 객체와 Map은 같은 해시가 아니다 / 면접 단골 문제를 해시로 풀기 / 일부러 충돌을 만드는 공격 / 해시가 못 하는 일 / 면접에서 나올 만한 질문
- 직접 링크 →: ds-array-matrix, ds-stack-queue-deque, ds-binary-tree-bst, ds-heap, data-structures-overview, js-object-methods, js-memoization, ds-trie, bloom-filter, consistent-hashing
- 키워드 백링크 →: js-equality-coercion, db-index, sd-latency-numbers, db-sharding, event-loop, big-o-notation
- 이 글로 오는 글 ←: big-o-notation, bloom-filter, data-structures-overview, db-type-key-value, db-type-relational, ds-array-matrix, ds-binary-tree-bst, ds-heap, ds-trie, ds-union-find, hyperloglog, iptables-nat, k8s-kube-proxy-modes, lossy-counting, postgres-operations, redis-basics, redis-memory-eviction, sd-kv-store-partition-replication, sd-leaderboard-sorted-set, sd-news-feed-retrieval, sql-query-tuning, sqld-joins

#### `ds-heap` — 힙과 우선순위 큐: 배열 하나로 가장 작은 것 꺼내기

- 요약: 넣을 때마다 정렬하는 작업 큐가 느려지는 이유에서 시작해 배열로 만든 이진 힙의 올리기·내리기, O(n) heapify, 비교 함수 실수와 같은 우선순위의 순서를 직접 재 본다. 상위 k개, k개 리스트 합치기, 스트림의 중앙값과 Node 타이머 속 힙까지 다룬다.
- 태그: Data Structure, Algorithm, JavaScript, Performance, Node.js
- 키워드: 이진 힙, 우선순위 큐, heapify
- 길이: 528줄
- 소제목: 배열 하나에 트리를 접어 넣는다 / 넣으면 올라가고 꺼내면 내려간다 / 한꺼번에 만들면 O(n)이다 / 정렬된 배열이 아니라 힙인 이유 / 비교 함수 하나가 힙의 성격을 정한다 / 상위 k개만 남기기 / k개의 줄을 하나로 합치기 / 흐르는 숫자의 중앙값 / 힙이 일하는 곳 / 면접에서 나올 만한 질문
- 직접 링크 →: ds-binary-tree-bst, ds-hash-map, js-array-mutation, percentile-latency, event-loop, js-timers-accuracy, sd-maps-tiles-routing, ds-graph-bfs-dfs
- 키워드 백링크 →: db-type-wide-column, db-index-design
- 이 글로 오는 글 ←: data-structures-overview, ds-array-matrix, ds-binary-tree-bst, ds-graph-bfs-dfs, ds-hash-map, ds-linked-list, ds-stack-queue-deque, ds-union-find, quadtree, sd-maps-tiles-routing

#### `ds-linked-list` — 연결 리스트: 포인터 하나로 이어 붙인 노드

- 요약: 뒤집기 코드가 노드 하나만 남긴 버그에서 출발해 단일·이중 연결 리스트의 비용, 뒤집기, 빠른·느린 포인터, Floyd 순환 탐지, 병합, LRU 캐시를 직접 돌려 본다. 노드 40바이트와 캐시 미스 실측으로 자바스크립트에서 잘 안 쓰는 이유, React 훅이 연결 리스트인 이유까지 다룬다.
- 태그: Algorithm, Data Structure, JavaScript, React, Performance
- 키워드: 연결 리스트, Floyd 순환 탐지, 빠른 포인터와 느린 포인터
- 길이: 547줄
- 소제목: 노드가 다음 노드의 주소를 들고 있다 / 화살표를 돌리기 전에 다음 노드를 잡아 둔다 / 두 배로 달리는 포인터 / 고리가 있는지 메모리 없이 알아내기 / 정렬된 두 줄을 하나로 합치기 / 자바스크립트에서 연결 리스트를 잘 안 쓰는 이유 / 해시맵이 노드를 가리킬 때: LRU 캐시 / React 안에도 연결 리스트가 있다 / 연결 리스트 코드에서 자주 나는 실수 / 면접에서 나올 만한 질문
- 직접 링크 →: ds-array-matrix, ds-stack-queue-deque, thread-safety, ds-heap, garbage-collection, caching-strategies, redis-memory-eviction, react-rerender, js-memory-leak
- 키워드 백링크 →: js-memoization, big-o-notation, js-array-mutation, redis-basics
- 이 글로 오는 글 ←: caching-concepts-map, caching-strategies, data-structures-overview, ds-array-matrix, ds-binary-tree-bst, ds-stack-queue-deque, ds-union-find, js-array-mutation, pattern-chain-of-responsibility, redis-basics, redis-memory-eviction, sd-leaderboard-sorted-set, sd-stock-exchange-order-book, thread-safety

#### `ds-stack-queue-deque` — 스택, 큐, 덱: 끝에서만 넣고 빼는 구조

- 요약: 넓은 트리를 BFS로 훑었더니 shift 큐 때문에 2분이 걸리는 데서 출발해 스택·큐·덱을 배열, head 인덱스, 연결 리스트, 링 버퍼로 만들어 비교한다. 괄호 검사, 단조 스택, BFS, 슬라이딩 윈도 최댓값, Node의 nextTick 큐와 React 업데이트 큐, 큐가 쌓일 때의 대응까지 다룬다.
- 태그: Algorithm, Data Structure, JavaScript, Node.js, Performance
- 키워드: 단조 스택, 슬라이딩 윈도 최댓값, 괄호 짝 맞추기
- 길이: 443줄
- 소제목: 마지막에 넣은 것이 먼저 나온다 / 쌓인 것을 정리하며 쌓는 단조 스택 / 먼저 온 것이 먼저 나간다 / 너비 우선 탐색이 큐를 쓰는 이유 / 양쪽 끝이 다 열린 덱과 링 버퍼 / 창 안의 최댓값을 덱으로 따라가기 / React의 상태 업데이트도 큐에 쌓인다 / 큐가 쌓이기만 할 때 / 면접에서 나올 만한 질문
- 직접 링크 →: js-array-mutation, ds-array-matrix, ds-linked-list, js-execution-context, pattern-command, big-o-notation, message-queue-basics, event-loop, ds-graph-bfs-dfs, sd-stock-exchange-low-latency, react-rerender, backpressure, ds-heap, data-structures-overview
- 키워드 백링크 →: sd-latency-numbers, centralized-logging-pipeline, js-memory-leak
- 이 글로 오는 글 ←: data-structures-overview, ds-array-matrix, ds-binary-tree-bst, ds-graph-bfs-dfs, ds-hash-map, ds-linked-list

#### `ds-trie` — 트라이: 접두사를 길로 바꾸는 자료구조

- 요약: 해시 집합이 답하지 못하는 접두사 질문에서 출발해 트라이를 직접 짜고 지운다. 와일드카드 검색과 Word Search II를 풀고, 10만 단어로 Set·정렬 배열·트라이의 속도와 메모리를 재서 언제 트라이를 고르는지 정리한다.
- 태그: Algorithm, Data Structure, JavaScript
- 키워드: Word Search II, 와일드카드 단어 검색, 래딕스 트리
- 길이: 494줄
- 소제목: 해시 집합이 대답하지 못하는 질문 / 글자 하나가 길 하나 / 넣고, 찾고, 접두사 묻기 / 해시 집합도 사실 O(L)이다 / 끝 표시를 잊으면 생기는 일 / 점 하나가 길을 여러 개로 가른다 / 판 위에서 단어 여러 개를 한 번에 찾기 / 판 위에서 직접 찾아보기 / 단어를 지울 때는 빈 가지까지 치운다 / 노드 하나가 생각보다 무겁다 / 글자를 어떻게 자르느냐 / 트라이를 고를 때와 고르지 않을 때 / 면접에서 나올 만한 질문
- 직접 링크 →: sd-autocomplete-trie, data-structures-overview, layer-ip-routing-icmp, ds-binary-tree-bst, ds-graph-bfs-dfs
- 키워드 백링크 →: js-memory-leak, ds-hash-map, big-o-notation
- 이 글로 오는 글 ←: data-structures-overview, ds-graph-bfs-dfs, ds-hash-map, sd-autocomplete-trie

#### `ds-union-find` — 유니온 파인드: 같은 그룹인지 거의 상수 시간에

- 요약: 계정 묶기에서 BFS 대신 유니온 파인드를 쓰면 왜 수만 배 빨라지는지 본다. 배열 하나로 만든 숲, 크기 규칙과 경로 압축이 깊이를 묶는 이유, 재귀 find의 함정, 크루스칼과 Redundant Connection, 못 하는 일까지 다룬다.
- 태그: Algorithm, Data Structure, JavaScript
- 키워드: 유니온 파인드, Union-Find, 경로 압축, 크루스칼
- 길이: 372줄
- 소제목: 배열 하나로 숲을 만든다 / 한 줄로 늘어진 나무 / 작은 나무를 큰 나무 밑에 / 지나온 길을 대표에 바로 붙인다 / 둘을 합치면 사실상 상수 / 재귀 find가 죽는 순간 / 그룹이 몇 개 남았나 / 싼 선부터 고르는 크루스칼 / 고리를 만드는 첫 간선 / 유니온 파인드가 못 하는 일 / 면접에서 나올 만한 질문
- 직접 링크 →: ds-graph-bfs-dfs, data-structures-overview, ds-heap, ds-hash-map
- 키워드 백링크 →: ds-linked-list, big-o-notation
- 이 글로 오는 글 ←: data-structures-overview, ds-graph-bfs-dfs

### Programming › Algorithms › For System Design (`programming/algorithms/system-design`)

#### `bloom-filter` — 블룸 필터: 없다는 확실하고 있다는 가끔 틀린다

- 요약: 1억 개 URL의 방문 여부를 120MB로 묻는 크롤러에서 출발해 비트 배열과 해시, 거짓 양성 확률 공식과 실측, 크기와 해시 개수 고르기, 정원을 넘길 때 무너지는 모습, RedisBloom, 지울 수 없는 이유와 카운팅·쿠쿠 필터, LSM과 CDN, PostgreSQL bloom 인덱스를 다룬다.
- 태그: Algorithm, Data Structure, System Design, Redis, Probabilistic
- 키워드: 블룸 필터, Bloom filter, 거짓 양성, 쿠쿠 필터
- 길이: 517줄
- 소제목: 비트 배열에 도장 세 개 찍기 / 거짓 양성 확률을 계산하고 재 보기 / 크기와 해시 개수를 고르는 법 / 계획보다 많이 넣으면 무너진다 / Redis에서 쓰기 (RedisBloom) / 지울 수 없는 이유와 대안 / 디스크를 읽기 전에 묻는다 / 한 번 보고 마는 것들을 거른다 / DB 안에도 있다: PostgreSQL bloom 인덱스 / 블룸 필터가 사고를 내는 방식 / 조금 틀려도 되는 질문에만 쓴다 / 면접에서 나올 만한 질문
- 직접 링크 →: caching-strategies, db-type-wide-column, hyperloglog, count-min-sketch, lossy-counting
- 키워드 백링크 →: db-type-embedded, ds-hash-map, js-memoization, cdn-edge-anycast, redis-basics, sd-kv-store-write-read-path, dns
- 이 글로 오는 글 ←: ab-testing, caching-strategies, count-min-sketch, data-structures-overview, db-performance-map, db-transaction-isolation, db-type-wide-column, ds-hash-map, hyperloglog, lossy-counting, merkle-tree, sd-ad-click-exactly-once, sd-kv-store-failure-handling, sd-kv-store-write-read-path, sd-url-shortener-key-generation, sd-web-crawler-architecture, sd-web-crawler-politeness-dedup, system-design-study-path

#### `count-min-sketch` — Count-Min Sketch: 더 세는 쪽으로만 틀리는 고정 크기 표

- 요약: IP별 요청 횟수를 서버 스무 대에서 고정 메모리로 세는 데서 출발해 행마다 다른 해시로 더하는 구조, ε·δ로 너비와 깊이 정하기, 보수적 갱신, 행 독립성, Redis CMS 명령, 힙을 붙인 상위 k개, 캐시 승인 정책과 차단 규칙의 오탐을 다룬다.
- 태그: Algorithm, Data Structure, System Design, Redis, Probabilistic
- 키워드: Count-Min Sketch, 보수적 갱신, CMS
- 길이: 411줄
- 소제목: 행마다 다른 해시로 한 칸씩 더한다 / 너비는 ε, 깊이는 δ로 정한다 / 보수적 갱신은 필요한 만큼만 올린다 / 행끼리 독립이어야 한다 / Redis에서 쓰기 / 상위 k개는 힙을 붙여서 / Lossy Counting과 같은 데이터로 / 캐시가 CMS를 쓰는 방식 / 차단 규칙이 정상 사용자를 막을 때 / 표준 갱신과 보수적 갱신을 코드로 비교하기 / 더 세는 쪽으로만 틀리는 고정 크기 표 / 면접에서 나올 만한 질문
- 직접 링크 →: lossy-counting, rate-limiting-algorithms, redis-memory-eviction, bloom-filter, hyperloglog
- 키워드 백링크 →: redis-basics
- 이 글로 오는 글 ←: bloom-filter, hydration, hyperloglog, lossy-counting, rendering-ssg-isr, sd-ad-click-stream-windows, sd-autocomplete-data-pipeline

#### `crdt` — CRDT: 어떤 순서로 합쳐도 같아지는 자료형

- 요약: 합치기가 교환·결합·멱등이면 순서와 중복을 무시할 수 있다. G-Counter, PN-Counter, LWW-Register, OR-Set을 직접 만들어 확인하고, Yjs로 오프라인 두 기기를 합쳐 보며 시퀀스 CRDT의 id와 묘비 비용, OT와의 선택 기준을 다룬다.
- 태그: System Design, Distributed Systems, Algorithm, Data Structure, Concurrency
- 키워드: CRDT, G-Counter, OR-Set, Yjs
- 길이: 416줄
- 소제목: 마지막 저장이 이기면 한쪽이 사라진다 / 합치는 순서와 횟수를 무시해도 되는 조건 / 카운터: 기기마다 칸을 따로 쓴다 / 지웠다가 다시 넣는 원소: OR-Set / 글자마다 이름을 붙이는 시퀀스 CRDT / Yjs로 오프라인 두 기기를 합쳐 본다 / 지운 글자는 메모리에서 사라지지 않는다 / 카운터 합치기 직접 짜 보기 / 동기화가 이상할 때 보는 곳 / OT와 CRDT 사이에서 고르기 / 면접에서 나올 만한 질문
- 직접 링크 →: operational-transform, eventual-consistency, clock-skew, db-type-wide-column, network-partitions
- 키워드 백링크 →: message-delivery-semantics, js-memory-leak, db-consistency-cap, http-methods
- 이 글로 오는 글 ←: clock-skew, consistency-models, db-consistency-cap, eventual-consistency, multi-region, operational-transform, pattern-command, realtime-communication, sd-file-sync-conflicts, sd-kv-store-versioning

#### `geohash` — 지오해시: 2차원 위치를 한 줄 문자열로 접기

- 요약: 위도와 경도를 번갈아 반으로 접어 비트를 끼워 넣고 base32 글자로 바꾸는 과정, 글자 수별 칸 크기, 접두사가 가까움을 보장하지 않는 경계 문제와 이웃 8칸 검색을 실제 좌표로 따라간다. Redis GEOSEARCH의 속과 느려지는 조건, PostgreSQL B-tree 접두사 검색, S2·H3와의 차이까지 다룬다.
- 태그: Algorithm, System Design, Geospatial, Redis, PostgreSQL
- 키워드: 지오해시, Geohash, GEOSEARCH, Z-순서 곡선
- 길이: 696줄
- 소제목: 지도를 반씩 접어 가며 비트를 적는다 / 다섯 비트를 글자 하나로 / 앞자리가 같으면 가깝다, 대체로 / 10m 옆인데 접두사가 다르다 / 이웃 여덟 칸까지 같이 찾는다 / Redis GEOSEARCH 속에서 일어나는 일 / 후보가 많으면 Redis 전체가 멈춘다 / PostgreSQL에서 접두사로 찾기 / 칸 모양이 다른 S2와 H3 / 현장에서 지오해시가 말썽을 부리는 순간 / 면접에서 나올 만한 질문
- 직접 링크 →: quadtree, ray-casting
- 키워드 백링크 →: redis-cluster, db-index, db-type-wide-column, db-type-key-value, mongodb-document-model, sd-mq-storage-partitions, sd-proximity-service, db-index-design, redis-basics
- 이 글로 오는 글 ←: quadtree, ray-casting, sd-maps-location-eta, sd-nearby-friends, sd-proximity-service, system-design-study-path

#### `hyperloglog` — HyperLogLog: 12KB로 서로 다른 개수 세기

- 요약: 하루 방문자 100만 명을 Set 대신 키 하나로 세는 데서 출발해 연속 0의 길이, 레지스터 최댓값, 조화 평균, 1.04/√m 오차를 실측으로 확인한다. Redis PFADD·PFCOUNT·PFMERGE, 작은 값과 큰 값 보정, 교집합의 한계, 다른 방법과 고르는 기준까지 다룬다.
- 태그: Algorithm, Data Structure, System Design, Redis, Probabilistic
- 키워드: HyperLogLog, PFCOUNT, 카디널리티 추정
- 길이: 402줄
- 소제목: 동전을 몇 번 연속 뒷면이 나왔나 / 레지스터에 최댓값만 남긴다 / 평균은 조화 평균으로 낸다 / 오차가 정말 √m에 반비례하나 / 아주 적을 때와 아주 많을 때 / Redis에서 세기 / Set과 나란히 놓고 재 보기 / 교집합은 잘 못 센다 / 다른 방법과 고르는 기준 / 레지스터와 조화 평균을 코드로 / 숫자가 이상할 때 의심할 것 / 12KB로 세는 대신 포기하는 것 / 면접에서 나올 만한 질문
- 직접 링크 →: bloom-filter, lossy-counting, count-min-sketch
- 키워드 백링크 →: ds-hash-map, redis-basics, cookie-session-login
- 이 글로 오는 글 ←: bloom-filter, count-min-sketch, lossy-counting, sd-ad-click-exactly-once, sd-autocomplete-data-pipeline

#### `lossy-counting` — Lossy Counting: 덜 세는 대신 빠짐없이 인기 항목 찾기

- 요약: 실시간 인기 검색어를 ZINCRBY로 세다 메모리가 불어나는 상황에서 출발해 버킷마다 대청소하는 Lossy Counting, εN 오차 보장의 이유, Zipf 데이터로 잰 정확도, 시간 감쇠와 배치 보정, Space-Saving·Misra-Gries와의 비교를 다룬다.
- 태그: Algorithm, Data Structure, System Design, Probabilistic
- 키워드: Lossy Counting, 인기 검색어, heavy hitter, Space-Saving
- 길이: 375줄
- 소제목: 버킷마다 한 번 대청소를 한다 / 왜 εN보다 더 틀리지 않나 / 같은 데이터로 재 보기 / 인기 검색어는 "지금" 많은 것이다 / 정확한 답은 나중에 배치로 낸다 / 다른 방법들과 비교 / 같은 칸 수로 겨뤄 보기 / 현장에서 틀어지는 지점 / 조금 덜 세는 대신 빠짐없이 / 면접에서 나올 만한 질문
- 직접 링크 →: count-min-sketch, hyperloglog
- 키워드 백링크 →: ds-hash-map, sd-mq-storage-partitions, bloom-filter, postgres-architecture, redis-basics, db-modeling-normalization, dns
- 이 글로 오는 글 ←: bloom-filter, count-min-sketch, hyperloglog, rendering-strategies, sd-autocomplete-data-pipeline, sd-autocomplete-trie

#### `merkle-tree` — 머클 트리: 해시 하나로 아래 전체를 대신한다

- 요약: 키 1억 개짜리 복제본 두 대에서 놓친 쓰기를 찾는 문제에서 출발해 해시 트리를 쌓고, 루트부터 다른 가지만 내려가 log n번 만에 차이를 찾는 법, 형제 해시 몇 개로 하는 포함 증명을 실제 해시값으로 따라간다. Git tree 객체, Cassandra repair, 인증서 투명성 로그, 비트코인 블록과 직접 만들 때 생기는 구멍을 다룬다.
- 태그: Algorithm, Data Structure, System Design, Distributed Systems, Git
- 키워드: 머클 트리, Merkle tree, 포함 증명, 해시 트리
- 길이: 382줄
- 소제목: 해시를 쌓아 올린 나무 / 루트가 다르면 다른 가지만 따라 내려간다 / 블록 하나가 들어 있다는 짧은 증명 / Git의 tree 객체도 머클 트리다 / 복제본 수리: Cassandra repair / 인증서 투명성과 블록체인 / 직접 만들 때 생기는 구멍 / 대안과 고르는 기준 / 해시 하나가 아래 전체를 대신한다 / 면접에서 나올 만한 질문
- 직접 링크 →: eventual-consistency, git-internals-basics, rsync-algorithm, bloom-filter
- 키워드 백링크 →: db-type-wide-column, db-type-key-value, sd-kv-store-versioning, build-caching
- 이 글로 오는 글 ←: eventual-consistency, fault-tolerance, git-internals-basics, rsync-algorithm, sd-kv-store-failure-handling, sd-kv-store-write-read-path, sd-object-storage-durability, system-design-study-path

#### `operational-transform` — Operational Transformation: 동시 편집을 위치 변환으로 맞추기

- 요약: cats를 두 사람이 동시에 고치면 왜 갈라지는지에서 출발해 삽입·삭제 변환 함수, TP1과 TP2, 서버가 리비전을 매기는 Jupiter 방식을 ShareDB로 직접 돌려 본다. 메시지 순서가 섞일 때의 실패, 의도 보존의 경계 사례, 실무에서 갈라짐을 추적하는 법까지 다룬다.
- 태그: System Design, Distributed Systems, Algorithm, Concurrency, WebSocket
- 키워드: Operational Transformation, TP2, ShareDB
- 길이: 420줄
- 소제목: 위치로 말하는 편집은 동시에 오면 어긋난다 / 상대 연산을 내 문서에 맞게 고쳐 쓴다 / 네 가지 짝마다 규칙이 다르다 / 세 명이 되면 변환 순서가 결과를 바꾼다 / 서버가 순서를 정하면 TP1만 있으면 된다 / 메시지가 늦게, 뒤바뀌어 오면 / 수렴했다고 사용자가 원한 결과는 아니다 / 변환 함수를 직접 짜 보기 / 공동 편집이 이상할 때 보는 곳 / 언제 OT를 고르나 / 면접에서 나올 만한 질문
- 직접 링크 →: crdt, realtime-communication, eventual-consistency
- 이 글로 오는 글 ←: crdt, pattern-command, realtime-communication

#### `quadtree` — 쿼드트리: 붐비는 곳만 잘게 나누기

- 요약: 꽉 찬 칸만 넷으로 나누는 쿼드트리로 넣기, 사각형 범위 찾기, 거리순 대기열로 가장 가까운 k개 찾기를 직접 짜서 100만 개로 재 본다. 밀도가 고르지 않을 때와 같은 좌표가 몰릴 때의 문제, R-tree와의 차이, PostgreSQL GiST와 SP-GiST 쿼드트리 비교까지 다룬다.
- 태그: Algorithm, Data Structure, Geospatial, PostgreSQL, Index
- 키워드: 쿼드트리, Quadtree, SP-GiST, R-tree
- 길이: 524줄
- 소제목: 꽉 차면 넷으로 나눈다 / 겹치지 않는 칸은 통째로 버린다 / 가장 가까운 k개는 거리순 대기열로 / 100만 개로 재 보기 / 밀도가 고르지 않으면 트리도 기운다 / 같은 건물에 가게가 다섯 곳이면 / 쿼드트리, 지오해시, R-tree는 무엇이 다른가 / PostgreSQL에 이미 있는 쿼드트리 / 위도·경도를 그대로 평면에 놓으면 / 현장에서 쿼드트리를 의심하는 순간 / 면접에서 나올 만한 질문
- 직접 링크 →: geohash, ray-casting
- 키워드 백링크 →: js-execution-context, db-type-key-value, ds-heap, sql-filtering-operators
- 이 글로 오는 글 ←: db-index-design, geohash, ray-casting, sd-proximity-service, system-design-study-path

#### `raft-consensus` — Raft 합의: 로그 복제, 커밋, 안전한 리더 교체

- 요약: 과반을 잃은 etcd 리더가 쓰기를 거절하는 장면에서 출발해 AppendEntries와 커밋 번호, 어긋난 로그 고치기와 스냅숏, 로그가 최신인 후보만 이기는 투표 규칙, 고립된 멤버가 임기를 부풀리는 현상과 Pre-Vote, learner로 멤버 바꾸기를 etcd 3.4 실제 로그로 따라간다.
- 태그: System Design, Distributed Systems, Algorithm, Kubernetes, Resilience
- 키워드: Raft 합의, AppendEntries, 로그 복제, Pre-Vote
- 길이: 415줄
- 소제목: 같은 순서의 기록을 여러 대에 남기는 일 / 쓰기 하나가 커밋되기까지 / 과반이면 왜 충분한가 / 어긋난 팔로워의 로그를 고친다 / 너무 뒤처지면 로그 대신 스냅숏을 보낸다 / 아무나 리더가 될 수는 없다 / 고립된 멤버가 임기를 부풀린다 / 멤버를 바꾸는 일 / 리더가 자꾸 바뀌거나 쓰기가 느릴 때 / 과반이 기억하는 것만 기록이 된다 / 면접에서 나올 만한 질문
- 직접 링크 →: leader-election, db-type-newsql, db-consistency-cap
- 키워드 백링크 →: k8s-architecture, db-type-key-value, kafka-basics
- 이 글로 오는 글 ←: backend-engineer-roadmap, db-type-key-value, db-type-newsql, distributed-transactions-2pc, fault-tolerance, k8s-architecture, k8s-etcd-backup, leader-election, network-partitions, rabbitmq-basics, sd-kv-store-partition-replication, sd-mq-consumer-groups, sd-mq-replication, sd-object-storage-architecture, sd-stock-exchange-low-latency, sd-wallet-event-sourcing

#### `ray-casting` — 레이 캐스팅: 광선 하나로 안팎과 벽을 찾는다

- 요약: 배달 구역 다각형 안에 주소가 있는지 광선이 변을 넘는 횟수로 판정하고, 꼭짓점·가로 변·경계 위의 점, 짝홀 규칙과 감는 수의 차이를 실제로 돌려 본다. GPS 흔들림으로 생기는 지오펜스 알림 폭주, 구역 1만 개에서 빨리 찾기, 빠른 총알 충돌 판정과 울펜슈타인식 레이캐스터까지 다룬다.
- 태그: Algorithm, Geometry, Geospatial, PostgreSQL
- 키워드: 레이 캐스팅, PNPOLY, 지오펜싱, 감는 수, 레이캐스터
- 길이: 503줄
- 소제목: 광선을 쏘아 변을 넘은 횟수를 센다 / 코드는 짧고, 조건 하나가 전부다 / 꼭짓점을 지나면 한 번인가 두 번인가 / 변이 엇갈리는 다각형: 짝홀과 감는 수 / 지도 위의 다각형에서 조심할 것 / GPS가 흔들리면 들어왔다 나갔다를 반복한다 / 구역이 만 개면 다 검사할 수 없다 / 게임에서는 광선이 벽을 찾는다 / 격자 지도에서 3D 화면 만들기 / 면접에서 나올 만한 질문
- 직접 링크 →: geohash, quadtree
- 키워드 백링크 →: pythagorean-theorem, sql-filtering-operators, browser-rendering-pipeline, db-modeling-normalization
- 이 글로 오는 글 ←: geohash, quadtree

#### `rsync-algorithm` — rsync 알고리즘: 바뀐 블록만 보내는 굴리는 체크섬

- 요약: 46MB 로그 한 줄을 고쳐 보내며 받는 쪽이 블록 지문을 보내고 보내는 쪽이 창을 한 바이트씩 밀어 찾는 과정, 굴리는 체크섬과 강한 해시, Matched data와 Literal data 읽기, 블록 크기와 압축 파일, quick check가 파일을 놓치는 경우를 실제 출력으로 본다.
- 태그: Algorithm, Linux, Performance, Network, DevOps
- 키워드: rsync 알고리즘, 굴리는 체크섬, rolling checksum, 델타 전송
- 길이: 452줄
- 소제목: 두 쪽이 서로의 파일을 모른다 / 받는 쪽이 먼저 블록 지문을 보낸다 / 한 칸씩 미는 체크섬 / 약한 체크섬과 강한 해시를 같이 쓰는 이유 / 46MB 파일 한 줄을 고쳐 보내 보기 / 블록 크기가 정하는 것 / 델타 전송이 통하지 않는 파일 / 아예 보내지 않고 건너뛰는 판단 / 백업이 느리거나 이상할 때 보는 곳 / 다른 도구들이 고른 방법 / 굴려서 찾고 해시로 확인한다 / 면접에서 나올 만한 질문
- 직접 링크 →: merkle-tree, traffic-shaping-qos, sd-file-sync-block-upload
- 이 글로 오는 글 ←: merkle-tree, sd-file-sync-block-upload

### Programming › Backend (`programming/backend`)

#### `backend-engineer-roadmap` — 백엔드 엔지니어 로드맵: 여섯 층을 아래부터 쌓는 순서

- 요약: 느린 주문 API 하나를 쫓다 보면 HTTP부터 분산 시스템까지 여섯 층을 다 지난다. 층마다 왜 그 자리에 있는지, 먼저 읽을 글, 직접 만들어 볼 것, 다 됐다고 볼 기준을 적고 증상에서 층을 거꾸로 찾는 표를 둔다.
- 태그: Backend, HTTP, Database, DevOps, System Design
- 키워드: 백엔드 로드맵, 백엔드 학습 순서, 백엔드 엔지니어 스킬
- 길이: 403줄
- 소제목: 요청 하나가 여섯 층을 지나간다 / 아래층이 위층의 재료다 / 1층: 요청 한 줄을 읽는다 / 2층: 요청을 받는 프로그램을 쓴다 / 3층: 데이터를 오래, 빨리 꺼낸다 / 4층: 막고, 확인하고, 어디서나 똑같이 띄운다 / 5층: 요청이 끝난 뒤에도 일하는 서비스 / 6층: 서버 한 대로 안 될 때 / 위층에서 막히면 아래층을 본다 / 여섯 층을 다 지나고 나면 / 면접에서 나올 만한 질문
- 직접 링크 →: javascript-roadmap, sql-study-path, system-design-study-path, networking-essentials-map, what-happens-google-com, http-message, http-methods, http-status-codes, git-staging-area, git-branch-merge, git-remote-collaboration, git-undo, event-loop, nodejs-server-runtime, express-middleware, fastapi-basics, json-crud-http, rest-api-design, go-concurrency-basics, java-jvm-memory-gc, postgres-getting-started, db-index, db-index-pitfalls, db-transaction-isolation, connection-pool, redis-basics, caching-strategies, caching-concepts-map, cookie-session-login, token-login, authn-vs-authz, oauth, test-pyramid-unit-tests, integration-tests-real-db, docker-container-basics, dockerfile-image-layers, docker-compose, message-queue-basics, message-delivery-semantics, kafka-basics, ci-cd-basics, github-actions-docker-ecr, monitoring-basics, structured-logging, percentile-latency, system-design-concepts-map, scaling-horizontal-vertical, db-replication-sharding, eventual-consistency, resilience-patterns, consistency-models, raft-consensus, architecture-patterns-overview, k8s-learning-roadmap, devops-networking-roadmap
- 키워드 백링크 →: microservices, sd-cache-and-cdn-tier, sd-split-web-and-db, sd-start-single-server, pub-sub, db-index-design, sql-batch-timeout-pool, cqrs, postgres-architecture, dns

#### `mvc-pattern` — MVC 패턴: 웹 애플리케이션을 나누는 방법

- 요약: MVC는 화면과 입력 처리에서 업무 규칙을 떼어 내자는 약속이다. Smalltalk에서 웹 MVC, MVP·MVVM, Flux의 단방향 흐름까지 그 약속이 어떻게 바뀌었는지 따라간다.
- 태그: coupang, Architecture, MVC, Backend, Frontend · 회사: coupang
- 키워드: MVC 패턴, MVVM, 프론트 컨트롤러, 빈약한 도메인 모델, 단방향 데이터 흐름
- 길이: 384줄
- 소제목: 요청 하나가 지나가는 길 / 원래 MVC는 웹을 위한 게 아니었다 / HTTP 위로 옮기면서 생긴 변화 / 컨트롤러가 뚱뚱해지는 이유 / 업무 규칙은 서비스와 모델에 둔다 / MVP와 MVVM은 무엇을 바꿨나 / 브라우저로 옮겨 온 MVC와 양방향 바인딩의 한계 / 서비스가 커지면 계층보다 기능으로 나눈다 / 경계가 무너진 코드는 장애 문의로 돌아온다 / 다시 쿠폰 입력칸으로 / 면접에서 나올 만한 질문
- 직접 링크 →: db-locking-deadlock
- 키워드 백링크 →: client-data-cache, pattern-observer, js-pure-functions, pattern-proxy, http-status-codes, gateway
- 이 글로 오는 글 ←: design-patterns-overview, layered-architecture, pattern-adapter

#### `rest-api-design` — REST API를 설계할 때 정할 것들

- 요약: 자원 이름, 메서드와 상태 코드, 필터와 페이지, 에러 형식, 버전과 하위 호환처럼 REST API를 공개하기 전에 정해야 할 것들을 짚는다. 무한 스크롤에서 offset이 글을 중복시키는 이유와 커서 페이지네이션도 직접 따라가 본다.
- 태그: HTTP, REST, API, Backend
- 키워드: REST API, 커서 페이지네이션, API 버전 관리, HATEOAS
- 길이: 580줄
- 소제목: 주소는 자원의 이름이다 / CRUD로 안 떨어지는 동작 / 메서드와 상태 코드를 제대로 쓴다 / 목록을 거르고 줄 세우기 / 같은 글이 두 번 나온 이유 / 다음 페이지 주소를 알려 주는 방법 / 에러 응답도 모양을 정한다 / 필요한 만큼만 받기 / 버전을 올리지 않고 바꾸는 법 / 그래도 버전을 나눠야 할 때 / POST를 두 번 받아도 괜찮게 / 너무 많이 부르는 클라이언트 / 이름과 값의 모양을 통일한다 / 링크를 따라가는 API / REST가 맞지 않는 곳 / 운영 로그에서 설계 실수가 드러날 때 / 다시 무한 스크롤로 / 면접에서 나올 만한 질문
- 직접 링크 →: http-methods, http-status-codes, http-caching-cdn, resilience-patterns, gateway, rate-limiting-algorithms, rate-limiting-in-practice, microservices, nginx-reverse-proxy, network-troubleshooting-by-layer
- 키워드 백링크 →: grpc, n-plus-one-queries, api-versioning, base64, optimistic-locking, graphql-basics, loading-patterns, db-locking-deadlock, db-index-design, http-message, http-versions, redis-basics, sql-query-rewrite
- 이 글로 오는 글 ←: api-gateway-use-cases, api-pagination-sorting, api-styles-overview, api-versioning, backend-engineer-roadmap, browser-fetch, client-data-cache, cloud-cost-optimization, docker-container-basics, express-middleware, failover, graphql-basics, grpc, html-form-http, http-status-codes, idempotency-key, json-crud-http, loading-patterns, reverse-proxy-lb-api-gateway, schema-versioning, serverless-limits, sql-query-rewrite, system-design-concepts-map

### Programming › Backend › API Design (`programming/backend/api`)

#### `api-gateway-use-cases` — API 게이트웨이가 하는 열 가지 일: 요청에 실제로 하는 것과 서비스에 남기는 것

- 요약: 게이트웨이 하나에 요청 수 제한, 인증, 분배, 라우팅, TLS 종료, 캐시, XML→JSON 변환, 서킷 브레이커, 로그와 지표, 버전 라우팅을 켜고 일마다 요청이 어떻게 바뀌는지 curl로 확인했다. 서비스에 남겨야 하는 인가와 멱등성, 입구에 몰아넣은 대가, 단계마다 무엇을 켤지도 정리했다.
- 태그: API, Backend, Architecture, Gateway, System Design
- 키워드: API 게이트웨이 사용 사례, 포워드 인증, 토큰 인트로스펙션, 페이로드 변환
- 길이: 636줄
- 소제목: 열 가지를 한 프로세스에 몰아 둔 실험실 / 101번째 요청이 입구에서 끝난다 / 토큰은 인증 서비스에 묻고 답을 잠깐 기억한다 / 갈 곳을 고르고, 같은 서비스 여럿에 나눈다 / 암호는 입구에서 풀고 안쪽엔 적어서 보낸다 / 느린 상품 조회를 입구에서 받아 준다 / 옛 앱이 보내는 XML을 새 서비스의 JSON으로 / 경로의 v1과 v2가 다른 서비스로 간다 / 망가진 재고 서비스 앞에서 문을 닫는다 / 모든 요청이 한 줄씩 남긴다 / 입구가 대신 못 하는 일 / 입구에 몰아넣은 대가 / 지금 단계에서 켤 것과 미룰 것 / 열 가지를 질문 몇 개로 줄이면 / 면접에서 나올 만한 질문
- 직접 링크 →: gateway, reverse-proxy-lb-api-gateway, rate-limiting-algorithms, rate-limiting-in-practice, token-login, jwt-key-rotation, load-balancing-algorithms, https-tls, http-caching-cdn, api-versioning, circuit-breaker, structured-logging, distributed-tracing, authn-vs-authz, idempotency-key, tail-latency, high-availability
- 키워드 백링크 →: rest-api-design, proxy-reverse-proxy, http-methods, resilience-patterns, service-mesh, build-caching, vpc-basics, osi-in-practice, redis-basics, http-status-codes, what-happens-google-com, oauth

#### `api-pagination-sorting` — 페이지와 정렬: 동점, 섞인 방향, NULL, 커서

- 요약: 데이터가 그대로인데도 페이지가 겹치는 이유는 정렬에 있다. 100만 행 테이블에서 동점 처리 열, 방향이 섞인 키셋 조건, NULL 정렬, 이전 페이지, 서명한 커서를 실행 계획과 함께 확인한다.
- 태그: API, PostgreSQL, SQL, Performance, Index
- 키워드: 동점 처리 열, NULLS LAST, 커서 서명, 이전 페이지 커서
- 길이: 616줄
- 소제목: 데이터가 그대로인데 페이지가 겹친다 / 정렬 키 끝에는 유일한 열을 붙인다 / 인덱스 순서와 테이블 순서가 다르면 OFFSET은 더 비싸다 / 정렬 방향이 섞이면 행 비교를 못 쓴다 / NULL이 섞인 열로 정렬하면 행이 사라진다 / 이전 페이지로 돌아가기 / 커서에 담을 것과 지킬 것 / 직접 짜 보는 커서 비교 / 전체 개수와 페이지 번호가 꼭 필요할 때 / 목록이 이상하다는 문의가 오면 / 페이지는 정렬이 정해져야 잘린다 / 면접에서 나올 만한 질문
- 직접 링크 →: rest-api-design, sql-query-rewrite
- 키워드 백링크 →: elasticsearch-inverted-index, base64, db-index-design
- 이 글로 오는 글 ←: api-styles-overview, batch-processing, sd-news-feed-retrieval, sql-query-rewrite, system-design-concepts-map

#### `api-styles-overview` — API 스타일 한눈에 보기: REST, RPC, GraphQL과 웹훅, WebSocket, HTTP 스트리밍

- 요약: 누가 먼저 말을 거는지로 API 스타일을 요청-응답과 이벤트 기반으로 나누고, 연결 수명·결합·캐시·장애 지점을 같은 잣대로 비교한다. 공개 API, 내부 호출, 앱 화면, 결제 콜백, 채팅, AI 답변마다 무엇을 고를지 정리하고 JSON-RPC 2.0을 직접 돌려 본다.
- 태그: API, Backend, Architecture, HTTP, System Design
- 키워드: API 스타일, JSON-RPC, 요청-응답 API, 이벤트 기반 API
- 길이: 293줄
- 소제목: 누가 먼저 말을 거는가 / 묻고 답하는 세 가지 / 먼저 말하는 세 가지 / 여섯 가지를 같은 잣대로 / 한 서비스가 여섯 가지를 다 쓴다 / 상황별로 고르기 / 잘못 골랐을 때 보이는 증상 / 다시 기능 목록으로 / 면접에서 나올 만한 질문
- 직접 링크 →: event-driven-architecture, message-queue-basics, rest-api-design, api-pagination-sorting, grpc, graphql-basics, webhooks, websocket-deep-dive, http-streaming-sse, realtime-communication, api-versioning, rate-limiting-in-practice, microservices, idempotency-key, sd-chat-connections
- 키워드 백링크 →: server-sent-events, osi-in-practice, rabbitmq-basics, http-versions, kafka-basics, http-status-codes, ssrf, sql-query-rewrite, gateway
- 이 글로 오는 글 ←: graphql-basics, js-promises

#### `api-versioning` — API 버전 관리: 고칠 수 없는 클라이언트와의 약속 바꾸기

- 요약: 추가했을 뿐인데 깨지는 변경을 재현하고, 스키마 비교와 소비자 계약 테스트로 배포 전에 잡고, 날짜 버전 변환 계층과 캐시 Vary, Deprecation·Sunset과 brownout으로 옛 버전을 끝내는 과정을 직접 돌려 본다. 이벤트 스키마와 GraphQL의 진화도 다룬다.
- 태그: Backend, API, REST, HTTP, Architecture
- 키워드: 하위 호환, Sunset 헤더, 소비자 주도 계약, 깨는 변경
- 길이: 481줄
- 소제목: 추가했을 뿐인데 깨지는 이유 / 깨는 변경을 배포 전에 기계로 잡는다 / 소비자가 쓰는 것만 지킨다 / 한 서버가 여러 버전을 내는 방법 / 헤더로 버전을 고르면 캐시가 섞인다 / 옛 버전을 끝내는 순서 / 이벤트와 메시지에도 버전이 있다 / GraphQL은 버전 없이 진화한다 / 버전 때문에 장애가 났을 때 / 버전은 약속을 관리하는 도구다 / 면접에서 나올 만한 질문
- 직접 링크 →: rest-api-design, grpc, zero-downtime-migrations, http-caching-cdn, schema-versioning
- 키워드 백링크 →: graphql-basics, sd-queue-logging-automation, kafka-basics, http-status-codes, webhooks
- 이 글로 오는 글 ←: api-gateway-use-cases, api-styles-overview, db-type-embedded, enterprise-system-integration, event-driven-architecture, git-branching-strategy, graphql-basics, grpc, helm-dependencies-oci-gitops, integration-tests-real-db, json-crud-http, k8s-gateway-api, k8s-gpu-dra, rest-api-design, rolling-deployment, schema-versioning, sd-start-single-server, semantic-versioning, sit-uat-testing, system-design-concepts-map

#### `batch-processing` — 배치 처리: 묶음, 체크포인트, 다시 돌려도 같은 결과

- 요약: 대량 데이터를 묶음으로 나눠 처리하고, 결과와 같은 트랜잭션에 진행 위치를 적어 죽은 자리에서 이어 가고, 쓰기를 멱등하게 만들어 두 번 돌아도 숫자가 맞게 하는 법을 실제로 죽여 보며 확인한다. 묶음 크기별 속도, SKIP LOCKED 작업자, 중복 실행 방지도 다룬다.
- 태그: Database, PostgreSQL, Performance, Backend, System Design
- 키워드: 배치 처리, 청크 단위 처리, 배치 체크포인트, poison record
- 길이: 418줄
- 소제목: 요청을 기다리지 않고 한꺼번에 처리하는 일 / 한 번에 하지 않고 묶음으로 나눈다 / 묶음 크기는 얼마가 좋나 / 죽은 자리에서 다시 시작하기 / 두 번 돌아도 결과가 같게 쓴다 / 한 줄 때문에 전체가 멈추지 않게 / 여러 작업자로 나눠 돌리기 / 운영 DB 옆에서 조용히 돌리기 / 새벽 배치 알림을 받으면 여기부터 본다 / 나누고, 적고, 두 번 돌아도 괜찮게 / 면접에서 나올 만한 질문
- 직접 링크 →: sql-batch-timeout-pool, event-driven-architecture, api-pagination-sorting, idempotency-key, db-locking-deadlock
- 키워드 백링크 →: cron-jobs, postgres-advanced-sql, db-architecture-by-scale, postgres-mvcc-vacuum, postgres-architecture, redis-basics, resilience-patterns, http-methods
- 이 글로 오는 글 ←: cron-jobs, enterprise-system-integration, k8s-job-cronjob, k8s-pod-lifecycle, message-delivery-semantics, sd-ad-click-exactly-once, sd-ad-click-stream-windows, sd-autocomplete-data-pipeline, zero-downtime-migrations

#### `cron-jobs` — 크론 잡: 정해진 시각에 한 번만 돌게 만들기

- 요약: cron 다섯 칸의 함정과 시간대·서머타임, 겹치는 실행을 막는 flock, 레플리카가 여러 대일 때 회차당 한 번만 돌리는 법, 쿠버네티스 CronJob 설정, 안 돈 작업을 알아채는 dead man's switch까지 직접 돌려 보며 정리한다.
- 태그: Backend, Linux, Kubernetes, DevOps, Distributed Systems, Troubleshooting
- 키워드: 크론 표현식, CronJob, concurrencyPolicy, dead man's switch
- 길이: 650줄
- 소제목: 다섯 칸이 정하는 시각 / 나눠 떨어지지 않는 간격 / 서버 시계는 어느 나라 시간인가 / 서머타임에는 두 번 돌거나 건너뛴다 / 앞 실행이 안 끝났는데 다음 실행이 온다 / 레플리카가 셋이면 메일도 세 통 / 쿠버네티스 CronJob의 설정들 / 두 번 돌아도 괜찮은 작업 / 안 돈 것을 알아채는 법 / 새벽 배치가 안 돌았다는 연락을 받으면 / 시각보다 회차를 믿는다 / 면접에서 나올 만한 질문
- 직접 링크 →: batch-processing, distributed-lock, leader-election, linux-systemd-systemctl, idempotency-key
- 키워드 백링크 →: k8s-architecture, pessimistic-locking, postgres-advanced-sql, message-delivery-semantics, sd-start-single-server, autoscaling, linux-files-permissions, postgres-architecture, local-k8s-kind-minikube, redis-basics, webhooks
- 이 글로 오는 글 ←: alerting, argocd-basics, batch-processing, bullmq-job-queue, global-rollout-localization, k8s-api-aggregation-schedulers, k8s-api-objects, k8s-certifications, k8s-cluster-upgrade, k8s-crd, k8s-feature-maturity, k8s-hpa, k8s-job-cronjob, k8s-learning-roadmap, k8s-operators, k8s-secret, k8s-storageclass-snapshots, pattern-singleton, race-conditions, sd-load-balancer-stateless, sd-metrics-storage-alerting

#### `graphql-basics` — GraphQL 기초: 스키마와 리졸버, N+1, 200 속의 에러, 캐시와 보안

- 요약: 화면마다 필요한 모양을 쿼리로 받는 GraphQL을 graphql-js로 돌려 본다. 리졸버의 N+1을 작은 로더로 51번에서 3번으로 줄이고, 200에 담긴 부분 실패, persisted query로 되살리는 캐시, 깊이·비용 제한과 introspection, REST가 나은 곳까지 다룬다.
- 태그: API, Backend, Node.js, Performance, Security
- 키워드: GraphQL, persisted query, 오버페칭, 쿼리 깊이 제한
- 길이: 582줄
- 소제목: 화면 하나에 요청 다섯 번, 20KB / 스키마가 먼저 있고, 쿼리는 그 위를 걷는다 / 요청 한 번을 뜯어보면 / 필드마다 함수가 하나씩 / 바꾸기와 구독은 실행 순서가 다르다 / 에러가 나도 200이 온다 / POST에는 캐시가 붙지 않는다 / 클라이언트가 쿼리를 쓰니 서버가 막아야 할 것 / 버전 번호 없이 스키마를 바꾼다 / REST가 더 나은 곳 / 운영에서 GraphQL이 느려졌을 때 / 화면이 쿼리를 쓰고, 서버는 그 값을 치른다 / 면접에서 나올 만한 질문
- 직접 링크 →: api-styles-overview, rest-api-design, n-plus-one-queries, websocket-deep-dive, http-streaming-sse, client-data-cache, api-versioning, grpc
- 키워드 백링크 →: edge-caching, observability-basics, pattern-iterator, realtime-communication, proxy-reverse-proxy, distributed-tracing, pattern-proxy, sql-batch-timeout-pool, http-status-codes, cookie-session-login, sql-query-rewrite, db-modeling-normalization, gateway
- 이 글로 오는 글 ←: api-styles-overview, api-versioning, dependency-hell, grpc, http-methods, http-status-codes, js-template-literals, layered-architecture, n-plus-one-queries, rate-limiting-in-practice, rest-api-design, sql-query-rewrite

#### `grpc` — gRPC: Protocol Buffers와 HTTP/2 위의 RPC

- 요약: protobuf가 메시지를 바이트로 만드는 방식, HTTP/2 스트림과 trailers로 오는 상태 코드, 스트리밍과 기한 전파, 연결을 오래 쓰는 탓에 L4 로드 밸런서에서 한 Pod로 몰리는 문제와 해결책을 실제 서버로 확인한다.
- 태그: Backend, API, HTTP, Network, Performance, Kubernetes
- 키워드: gRPC, Protocol Buffers, protobuf
- 길이: 428줄
- 소제목: .proto 한 장이 계약이 된다 / 26바이트로 줄어든 주문 / 호출 하나는 스트림 하나 / 묻고 답하는 것만 있는 게 아니다 / 기한을 넘기면 끊고, 서버도 그만둔다 / 상태 코드는 HTTP 200 안에 있다 / 연결이 오래 사니 로드 밸런서가 할 일이 없다 / 브라우저에서는 바로 못 부른다 / REST, GraphQL과 고르는 기준 / 현장에서 gRPC 호출이 실패할 때 / 계약, 바이트, 연결 / 면접에서 나올 만한 질문
- 직접 링크 →: rest-api-design, http-versions, api-versioning, timeouts, retries, service-mesh, load-balancing-algorithms
- 키워드 백링크 →: k8s-service-types, iptables-nat, osi-in-practice, iptables-basics, graphql-basics, kubernetes-ingress, http-status-codes, k8s-hpa, dns, gateway
- 이 글로 오는 글 ←: api-styles-overview, api-versioning, backpressure, blue-green-deployment, curl-for-debugging, docker-container-basics, gateway, graphql-basics, hexagonal-architecture, http-streaming-sse, iptables-nat, k8s-architecture, k8s-cri-cni-csi, k8s-gateway-api, k8s-gpu-dra, k8s-learning-roadmap, k8s-secret, k8s-service-types, k8s-storageclass-snapshots, load-balancer-basics, load-balancing-algorithms, microservices, modular-monolith, observability-basics, osi-in-practice, pattern-bridge, pattern-proxy, resilience-patterns, rest-api-design, retries, reverse-proxy-lb-api-gateway, schema-versioning, sd-maps-tiles-routing, service-discovery, service-mesh, system-design-concepts-map, tail-latency, tcp-reliability-congestion, timeouts, upper-layers-session-presentation-app, yaml-for-k8s

#### `http-streaming-sse` — HTTP 스트리밍 깊게 보기: chunked 바이트, NDJSON, fetch 스트림 읽기, 배압

- 요약: 응답을 끝내지 않고 이어 쓰는 HTTP 스트리밍을 바이트부터 따라간다. chunked와 HTTP/2 DATA 프레임, NDJSON과 SSE, 줄 중간에서 잘리는 read() 조각, 200 뒤의 실패와 끝 메시지, 배압과 끊김, LLM 토큰 중지, nginx 버퍼링이 기본으로 켜진 이유를 직접 돌려 본다.
- 태그: HTTP, Network, Node.js, Browser, Performance
- 키워드: NDJSON, ReadableStream, TextDecoderStream, 스트리밍 업로드
- 길이: 555줄
- 소제목: 길이를 모르는 본문은 조각으로 간다 / 같은 바이트 줄기 위의 여러 형식 / 조각 경계는 메시지 경계가 아니다 / 200을 보낸 뒤에 실패하면 / 받는 쪽이 느리면 보내는 쪽이 멈춰야 한다 / LLM 답변을 흘려보낼 때 / 프록시는 느린 클라이언트를 대신 받아 준다 / 스트리밍이 안 될 때 좁혀 가는 순서 / 응답을 끝내지 않는 것뿐이다 / 면접에서 나올 만한 질문
- 직접 링크 →: realtime-communication, server-sent-events, http-versions, streaming-ssr-suspense, backpressure, loading-patterns, nginx-reverse-proxy, timeouts, websocket-deep-dive, long-polling
- 키워드 백링크 →: browser-fetch, elasticsearch-inverted-index, json-crud-http, rendering-strategies, http-status-codes, what-happens-google-com, grpc
- 이 글로 오는 글 ←: api-styles-overview, graphql-basics, server-sent-events

#### `idempotency-key` — 멱등성 키 구현: 동시 중복과 죽은 요청까지

- 요약: 멱등성 키를 확인부터 하면 동시에 온 중복이 둘 다 통과한다. 유니크 제약으로 키를 선점하고, 작업과 응답 기록을 한 트랜잭션으로 묶고, 처리 중 죽은 요청을 넘겨받는 저장소를 PostgreSQL로 직접 만들어 본다.
- 태그: tesla, API, HTTP, PostgreSQL, Distributed Systems, Backend · 회사: tesla
- 키워드: Idempotent-Replayed, 키 선점, 멱등성 키 저장소
- 길이: 481줄
- 소제목: 확인하고 넣으면 둘 다 통과한다 / 키 한 줄에 담는 것 / 선점하고, 작업하고, 응답을 적는다 / 키 하나가 거치는 상태 / 처리 도중에 서버가 죽으면 / 트랜잭션 하나로 묶으면 기다리게 된다 / 바깥 결제사를 부르는 단계가 끼면 / 어떤 응답을 저장할지 / 키는 누가, 언제 만드나 / 키 말고도 중복을 막는 방법 / 운영에서 이런 증상을 보면 / 키 저장소가 정확해야 재시도가 안전하다 / 면접에서 나올 만한 질문
- 직접 링크 →: resilience-patterns, http-methods, rest-api-design, distributed-lock, sql-batch-timeout-pool, message-delivery-semantics
- 키워드 백링크 →: postgres-advanced-sql, service-mesh, redis-basics, http-status-codes, db-modeling-normalization
- 이 글로 오는 글 ←: acid-transactions, acid-vs-base, api-gateway-use-cases, api-styles-overview, batch-processing, bullmq-job-queue, circuit-breaker, cron-jobs, curl-for-debugging, dead-letter-queue, distributed-lock, distributed-transactions-2pc, enterprise-system-integration, js-promise-combinators, k8s-job-cronjob, message-delivery-semantics, message-queue-basics, pattern-builder, pattern-command, pattern-decorator, pattern-facade, race-conditions, rate-limiting-in-practice, resilience-patterns, retries, rolling-deployment, saga-pattern, sd-ad-click-exactly-once, sd-chat-message-storage, sd-hotel-double-booking, sd-leaderboard-sorted-set, sd-load-balancer-stateless, sd-multi-datacenter, sd-news-feed-publishing, sd-payment-reliability, sd-video-upload-transcoding, sd-wallet-transfer, serverless-architecture, serverless-limits, service-mesh, sql-interview-problems, system-design-concepts-map, system-design-study-path, transactional-outbox, webhooks

#### `rate-limiting-in-practice` — 요청 수 제한을 API에 붙이기: 키, 429, 장애 대응

- 요약: 어느 층에서 무엇을 키로 셀지, 429와 Retry-After·RateLimit 헤더로 무엇을 알려 줄지, Redis가 멈추면 막을지 열지를 실제 서버로 확인한다. 처음 배포할 때 정상 사용자를 막지 않는 순서도 정리한다.
- 태그: API, HTTP, Redis, Backend, Troubleshooting
- 키워드: 429 Too Many Requests, fail open, RateLimit-Policy
- 길이: 430줄
- 소제목: 한 군데에서 다 막으려고 하지 않는다 / 무엇을 키로 셀지가 절반이다 / 거절할 때 돌려주는 것 / 클라이언트는 기다릴 줄 알아야 한다 / 인스턴스마다 세면 한도가 곱해진다 / Redis가 멈추면 다 막을까, 다 열까 / 요청마다 무게가 다르다 / 처음 배포할 때는 세기만 한다 / 이런 증상이면 여기부터 본다 / 알고리즘보다 오래 손대는 것 / 면접에서 나올 만한 질문
- 직접 링크 →: rate-limiting-algorithms, nginx-https-performance, gateway, resilience-patterns, idempotency-key
- 키워드 백링크 →: proxy-reverse-proxy, http-status-codes, graphql-basics, sd-start-single-server, nat-traversal, osi-in-practice, redis-basics, ipv6-basics, acid-transactions
- 이 글로 오는 글 ←: api-gateway-use-cases, api-scaling-ladder, api-styles-overview, authn-vs-authz, autoscaling, backpressure, circuit-breaker, ddos-protection, exponential-backoff-jitter, gateway, health-checks, k8s-pod-troubleshooting, linux-grep-awk-sed, pattern-singleton, rate-limiting-algorithms, rest-api-design, reverse-proxy-lb-api-gateway, sd-notification-reliability, sd-rate-limiter-design, sd-web-crawler-politeness-dedup, system-design-concepts-map, system-design-study-path, waf

#### `webhooks` — 웹훅: 남이 내 서버를 부를 때 지켜야 할 것

- 요약: HMAC 서명과 타임스탬프로 위조와 재전송을 막고, 저장 후 바로 응답해 중복 처리를 피하고, 순서가 뒤바뀐 이벤트를 다루는 법을 받는 쪽과 보내는 쪽(SSRF) 모두에서 실제 서버로 확인한다.
- 태그: tesla, Backend, API, HTTP, Security, Resilience · 회사: tesla
- 키워드: 웹훅, 웹훅 서명, 재전송 공격
- 길이: 391줄
- 소제목: 묻지 않아도 알려 주는 HTTP 요청 / 누가 보냈는지 서명으로 확인한다 / 받는 쪽 서버를 직접 띄워 공격해 본다 / 처리를 끝내고 응답하면 세 번 처리된다 / 순서는 보장되지 않는다 / 보내는 쪽이 되면 SSRF를 막는다 / 웹훅이 이상할 때 보는 순서 / 받는 쪽은 의심하고, 보내는 쪽은 조심한다 / 면접에서 나올 만한 질문
- 직접 링크 →: retries, idempotency-key, realtime-communication, clock-skew, timeouts, message-queue-basics, dead-letter-queue, ssrf, exponential-backoff-jitter
- 키워드 백링크 →: postgres-advanced-sql, resilience-patterns, layer-ip-addressing, what-happens-google-com, ipv6-basics, vpc-basics, http-methods, dns
- 이 글로 오는 글 ←: alerting, api-styles-overview, api-versioning, architecture-patterns-overview, argocd-basics, bullmq-job-queue, cold-starts, cron-jobs, db-performance-map, ddos-protection, eks-cluster-basics, enterprise-system-integration, first-page-from-power-on, gitops-argocd-vs-flux, http-versions, https-tls, jenkins-pipeline-basics, k8s-admission-control, k8s-audit-logging, k8s-batch-kueue, k8s-certifications, k8s-cluster-upgrade, k8s-controllers-reconcile, k8s-crd, k8s-deploy-pipeline-eks, k8s-feature-maturity, k8s-job-cronjob, k8s-learning-roadmap, k8s-namespace, k8s-operators, k8s-pod-security-admission, k8s-rbac, k8s-serviceaccount-tokens, kubectl-apply-ssa, kubernetes-ingress, on-call, postgres-jsonb-search, sd-metrics-collection, sd-metrics-storage-alerting, sd-notification-reliability, sd-payment-flow, sd-payment-reliability, serverless-limits, sit-uat-testing, sql-interview-problems, ssrf, system-design-study-path, transactional-outbox, vpn-ipsec-wireguard, what-happens-google-com

### Programming › Backend › Architecture (`programming/backend/architecture`)

#### `architecture-patterns-overview` — 백엔드 아키텍처 패턴 고르기: 배포, 코드, 데이터 세 축으로 나눠 보기

- 요약: 모놀리스, 헥사고날, CQRS 같은 패턴은 배포 구조, 코드 구조, 데이터 흐름이라는 서로 다른 질문에 답한다. 축을 나눠 패턴이 어떻게 겹치는지 보고, 팀 수·배포 대기·함께 바뀌는 비율·부하 편차로 다음 단계를 고르는 기준과 분산 모놀리스, CQRS 남용 같은 실수를 정리한다.
- 태그: Architecture, Backend, MSA, System Design
- 키워드: 아키텍처 패턴 선택, 아키텍처 결정 기록
- 길이: 352줄
- 소제목: 세 가지 질문을 섞어서 하고 있다 / 배포 단위를 몇 개로 둘까 / 한 배포 단위 안의 코드는 어떻게 놓을까 / 데이터와 메시지는 어떻게 흐를까 / 패턴은 겹쳐서 쓴다 / 언제 다음 단계로 넘어가나 / 신호를 함수로 적어 보면 / 함께 바뀌는 비율을 직접 재 보기 / 잘못 고르면 생기는 일 / 처음 회의로 돌아가면 / 면접에서 나올 만한 질문
- 직접 링크 →: monolith-architecture, modular-monolith, microservices, microservices-decomposition, serverless-architecture, serverless-limits, layered-architecture, hexagonal-architecture, clean-architecture, ddd-bounded-context, event-driven-architecture, cqrs, event-sourcing, transactional-outbox, saga-pattern, cold-starts
- 키워드 백링크 →: k8s-deploy-pipeline-eks, js-memory-leak, schema-versioning, db-modeling-normalization, on-call, webhooks
- 이 글로 오는 글 ←: backend-engineer-roadmap

#### `clean-architecture` — 클린 아키텍처: 의존은 안쪽으로, 원을 건널 때는 그 원의 모양으로

- 요약: 엔티티, 유스케이스, 어댑터, 프레임워크의 동심원과 의존 규칙을 주문 취소 예제로 나눠 본다. 원을 건너는 데이터, 프레젠터, 시계 주입, import 검사기로 규칙을 CI에서 지키는 법, 헥사고날·어니언과의 차이, 파일이 늘어나는 비용까지 다룬다.
- 태그: Architecture, Backend, Design Pattern, TypeScript, React
- 키워드: 클린 아키텍처, 의존 규칙, 험블 오브젝트, Screaming Architecture
- 길이: 467줄
- 소제목: 원 네 개와 규칙 하나 / 호출은 밖에서 안으로 갔다가 다시 밖으로 / 원을 건너는 데이터는 그 원의 모양으로 / 프레젠터가 따로 있는 이유 / 시간도 바깥에서 들어온다 / 의존 규칙을 사람 대신 검사기가 지킨다 / 폴더 이름이 업무를 말하게 / 헥사고날, 어니언과 나란히 놓으면 / 화면 쪽에서 원을 그리면 / 파일이 늘어나는 값을 따져 본다 / 면접에서 나올 만한 질문
- 직접 링크 →: hexagonal-architecture, layered-architecture, modular-monolith, ddd-bounded-context, js-pure-functions, cqrs
- 키워드 백링크 →: http-status-codes
- 이 글로 오는 글 ←: architecture-patterns-overview, hexagonal-architecture, layered-architecture, pattern-facade

#### `cqrs` — CQRS: 바꾸는 모델과 읽는 모델을 나누는 이유

- 요약: 느린 목록 화면 하나를 계기로 명령과 조회를 다른 모델로 나눈다. 프로젝터와 체크포인트로 읽기 모델을 채우고, 방금 바꾼 게 안 보이는 지연과 중복 반영을 다룬다.
- 태그: Architecture, System Design, Backend, PostgreSQL, React
- 키워드: CQRS, 읽기 모델, 명령 처리기
- 길이: 560줄
- 소제목: 주문 목록 하나가 870ms 걸린다 / 바꾸는 길과 읽는 길을 나눈다 / 얼마나 멀리 떼어 놓을까 / 명령 처리기는 사실을 남기고 끝난다 / 프로젝터가 읽기 모델을 채운다 / 같은 쿼리, 읽기 모델에서 / 방금 취소했는데 목록엔 결제 완료 / 두 번 반영되는 프로젝션 / 읽기 모델은 언제든 버리고 다시 만든다 / 나누지 않는 편이 나은 경우 / 읽기 화면이 이상할 때 보는 순서 / 명령과 조회가 다른 질문에 답할 때 / 면접에서 나올 만한 질문
- 직접 링크 →: event-sourcing, transactional-outbox, event-driven-architecture, db-replication-sharding, postgres-advanced-sql, optimistic-locking, eventual-consistency, client-data-cache, message-delivery-semantics
- 키워드 백링크 →: elasticsearch-inverted-index, postgres-reporting-sql, db-locking-deadlock, sql-insert-update-delete, postgres-architecture, redis-basics, resilience-patterns, db-modeling-normalization, http-methods
- 이 글로 오는 글 ←: architecture-patterns-overview, backend-engineer-roadmap, clean-architecture, db-sharding, event-driven-architecture, event-sourcing, microservices, modular-monolith, pattern-command, pattern-mediator, sd-sharding-intro, sd-wallet-event-sourcing, system-design-study-path

#### `ddd-bounded-context` — DDD 바운디드 컨텍스트와 애그리거트: 말의 경계와 규칙의 경계

- 요약: 같은 '취소'를 팀마다 다르게 세던 버그에서 출발해 유비쿼터스 언어, 컨텍스트마다 다른 상품 모델, 하위 도메인, 컨텍스트 맵 관계를 정리한다. 애그리거트 불변식이 동시 요청에 깨지는 장면과 버전으로 막는 법을 PostgreSQL 16으로 재현하고, 이벤트 스토밍으로 경계를 찾는다.
- 태그: Architecture, System Design, Backend, PostgreSQL, TypeScript
- 키워드: 바운디드 컨텍스트, 유비쿼터스 언어, 애그리거트, 이벤트 스토밍
- 길이: 483줄
- 소제목: 한 단어가 한 뜻으로 쓰이는 울타리 / 코드에 그 말을 그대로 쓴다 / 상품 하나, 모델 셋 / 문제의 지도와 해법의 지도 / 경계 사이에 놓는 관계 / 애그리거트: 한 번에 지켜야 하는 규칙의 크기 / 두 요청이 같은 주문을 동시에 고칠 때 / 경계를 넘는 건 이벤트로 / 경계를 찾는 워크숍 / 경계를 잘못 그었을 때 보이는 것 / 화면 코드의 '상품' 타입 / 직접 지켜 보는 주문 애그리거트 / 면접에서 나올 만한 질문
- 직접 링크 →: microservices, microservices-decomposition, modular-monolith, dead-letter-queue, pattern-adapter, db-transaction-isolation, pessimistic-locking, transactional-outbox, event-driven-architecture
- 키워드 백링크 →: monolith-architecture, db-locking-deadlock, http-status-codes
- 이 글로 오는 글 ←: architecture-patterns-overview, clean-architecture, enterprise-system-integration, microservices, microservices-decomposition, modular-monolith

#### `enterprise-system-integration` — 벤더·레거시 시스템 연동: 동기 API, 메시지, 파일 배치와 대사

- 요약: 바깥 시스템과의 연동은 방식을 고르는 데서 시작해 경계에서 번역하고, 타임아웃을 '모름'으로 다루고, 받은 것은 더 새 것만 덮어쓰고, 매일 밤 대사로 어긋남을 잡는 일이다. 일부러 말썽을 부리는 벤더 서버와 어댑터로 중복 접수와 대사 결과를 재현했다.
- 태그: tesla, Architecture, Backend, Distributed Systems, Resilience, Node.js · 회사: tesla
- 키워드: 벤더 어댑터, 파일 배치 연동, 마스터 데이터 매핑
- 길이: 397줄
- 소제목: 붙이는 방법은 세 가지로 갈린다 / 벤더의 말은 경계에서 우리 말로 바꾼다 / 타임아웃은 실패가 아니라 모른다는 뜻이다 / 들어오는 쪽은 버전을 보고 덮어쓴다 / 다시 보낼 것과 포기할 것 / 매일 밤 두 장부를 맞춰 본다 / 벤더가 계약을 바꿀 때 / 연동이 이상할 때 보는 순서 / 남의 시스템은 우리 말로 감싸고, 매일 맞춰 본다 / 면접에서 나올 만한 질문
- 직접 링크 →: global-rollout-localization, sit-uat-testing, release-cutover-hypercare, webhooks, batch-processing, pattern-adapter, hexagonal-architecture, ddd-bounded-context, idempotency-key, timeouts, message-delivery-semantics, exponential-backoff-jitter, circuit-breaker, dead-letter-queue, transactional-outbox, sd-payment-reliability, api-versioning
- 키워드 백링크 →: http-status-codes
- 이 글로 오는 글 ←: global-rollout-localization, release-cutover-hypercare, sit-uat-testing

#### `event-sourcing` — 이벤트 소싱 구현: decide와 evolve, 스냅숏, 업캐스팅, 크립토 셰딩

- 요약: 상태 대신 사건을 원본으로 저장할 때 실제로 짜야 하는 것들을 본다. 명령 처리와 동시성, 지난 시점 조회, 긴 스트림, 바뀌는 사건 형식, 개인정보 삭제까지 다룬다.
- 태그: Architecture, System Design, Backend, PostgreSQL, TypeScript
- 키워드: 업캐스팅, 크립토 셰딩, 이벤트 저장소
- 길이: 505줄
- 소제목: 결정하는 함수와 접는 함수 / 명령 하나가 처리되는 길 / 같은 버전을 두 요청이 노릴 때 / 지난 시점의 상태 다시 보기 / 사건에는 업무의 말로 이름을 붙인다 / 10만 건을 매번 접을 수는 없다 / 3년 전 형식의 사건을 오늘 코드로 읽기 / 지울 수 없는 기록에서 개인정보를 지우는 법 / 하나의 사건 흐름, 여러 개의 읽기 모델 / 잘못 쌓인 사건은 고치지 않고 바로잡는 사건을 쓴다 / 이벤트 소싱이 짐이 될 때 / 기록이 원본일 때 생기는 일 / 면접에서 나올 만한 질문
- 직접 링크 →: event-driven-architecture, cqrs, js-pure-functions, transactional-outbox, schema-versioning
- 키워드 백링크 →: postgres-architecture
- 이 글로 오는 글 ←: architecture-patterns-overview, cqrs, event-driven-architecture, kafka-vs-rabbitmq-replay, observability-basics, schema-versioning, sd-wallet-event-sourcing, system-design-study-path

#### `global-rollout-localization` — 새 나라에 서비스를 열 때: 시장 설정, 현지화, 로컬 갭

- 요약: 다른 나라에서 돌던 플랫폼을 한국에 열면 통화 자릿수, 날짜를 자르는 시간대, 이름·주소 모양, 한글 정규화와 정렬에서 숨은 가정이 깨진다. 이를 시장 설정으로 빼고, 현지 요구는 갭 목록으로 만들어 출시 범위와 순서를 정한다.
- 태그: tesla, Architecture, Backend, JavaScript, Feature Flag · 회사: tesla
- 키워드: 현지화, 로컬 갭, 데이터 레지던시, 초성 검색
- 길이: 379줄
- 소제목: 나라마다 다른 값은 코드 밖으로 뺀다 / 통화와 세금은 정수로 다룬다 / 같은 순간이 서울에서는 다음 날이다 / 이름, 주소, 전화번호의 모양 / 한글 검색과 정렬은 따로 챙긴다 / 데이터를 어디에 둘지가 구조를 바꾼다 / 로컬 갭은 목록으로 만들고 줄을 세운다 / 여는 순서 / 새 시장에서 처음 보는 증상들 / 미국이라는 가정을 찾아 설정으로 옮긴다 / 면접에서 나올 만한 질문
- 직접 링크 →: enterprise-system-integration, sit-uat-testing, release-cutover-hypercare, feature-flags, cron-jobs, hydration, pattern-strategy
- 키워드 백링크 →: k8s-deploy-pipeline-eks, rendering-strategies, db-modeling-normalization
- 이 글로 오는 글 ←: elasticsearch-inverted-index, enterprise-system-integration, release-cutover-hypercare, sd-autocomplete-trie, sit-uat-testing

#### `hexagonal-architecture` — 헥사고날 아키텍처: 포트를 코어가 갖고, 바깥은 어댑터로 꽂는다

- 요약: 업무 규칙이 결제사 SDK와 DB를 모르게 하려고 코어가 포트를 정의하고 바깥 기술은 어댑터로 꽂는다. 들어오는 포트와 나가는 포트, 조립하는 곳, 가짜 어댑터 테스트와 계약 테스트, 전송 실패 번역, 트랜잭션 포트, React의 API 포트까지 Node 22로 돌려 본다.
- 태그: Architecture, Backend, Design Pattern, TypeScript, Node.js
- 키워드: 헥사고날 아키텍처, 포트와 어댑터, composition root
- 길이: 653줄
- 소제목: 결제사를 바꾸려는데 업무 코드가 SDK를 안다 / 안쪽과 바깥쪽 사이에 구멍을 낸다 / 들어오는 쪽과 나가는 쪽은 주인이 다르다 / 주문 접수를 포트와 어댑터로 나눠 보기 / 어댑터는 조립하는 곳에서만 고른다 / 가짜 어댑터로 도는 업무 규칙 테스트 / 두 구현에 같은 계약 테스트를 돌린다 / 바깥의 실패를 포트의 말로 바꾼다 / 트랜잭션은 어느 쪽 일인가 / 포트가 새는 모습들 / 프런트엔드에도 포트가 있다 / 이 구조가 값을 하는 곳, 아닌 곳 / 면접에서 나올 만한 질문
- 직접 링크 →: layered-architecture, clean-architecture, pattern-adapter, js-shallow-deep-copy, resilience-patterns, client-data-cache
- 키워드 백링크 →: db-type-embedded, js-currying-partial, pattern-proxy, http-status-codes, grpc
- 이 글로 오는 글 ←: architecture-patterns-overview, clean-architecture, enterprise-system-integration, fastapi-basics, integration-tests-real-db, js-pure-functions, layered-architecture, microservices-decomposition, pattern-adapter, pattern-singleton, test-pyramid-unit-tests

#### `layered-architecture` — 레이어드 아키텍처: 층을 건널 때 해야 하는 일

- 요약: 프레젠테이션, 비즈니스, 퍼시스턴스로 층을 쌓고 위에서 아래로만 부른다. 계층과 티어의 차이, DB 에러를 층마다 번역하는 법, 트랜잭션 경계, 닫힌 계층과 싱크홀, 의존을 뒤집어 헥사고날로 넘어가는 신호까지 다룬다.
- 태그: Architecture, Backend, Design Pattern, Node.js, PostgreSQL
- 키워드: 레이어드 아키텍처, N-tier, 싱크홀 안티패턴
- 길이: 389줄
- 소제목: 위에서 아래로만 부른다 / 계층은 코드, 티어는 기계 / 에러는 층을 건널 때 번역한다 / 트랜잭션 경계는 서비스가 쥔다 / 닫힌 계층과 열린 계층 / 의존이 DB를 향할 때 생기는 일 / 프런트엔드에서 보는 같은 층 / 언제 이 구조로 충분한가 / 면접에서 나올 만한 질문
- 직접 링크 →: modular-monolith, monolith-architecture, mvc-pattern, n-plus-one-queries, hexagonal-architecture, clean-architecture, client-data-cache
- 키워드 백링크 →: sql-basics, graphql-basics, sd-start-single-server, http-caching-cdn, sql-batch-timeout-pool, http-status-codes, what-happens-google-com
- 이 글로 오는 글 ←: architecture-patterns-overview, clean-architecture, hexagonal-architecture, modular-monolith, monolith-architecture

#### `microservices-decomposition` — 마이크로서비스 분해: 어디서 자르고, 코드와 데이터를 어떤 순서로 옮기나

- 요약: 커밋 기록으로 함께 바뀌는 파일을 세고 DB 카탈로그로 테이블을 붙잡은 외래 키·뷰·트리거를 찾아 자를 곳을 정한다. 추상화 뒤에서 구현을 바꾸고 병행 실행으로 결과를 비교한 뒤, 공유 테이블을 옮기며 FULL JOIN과 구간 체크섬으로 두 저장소를 대조한다.
- 태그: tesla, Architecture, MSA, System Design, PostgreSQL, Node.js · 회사: tesla
- 키워드: 변경 결합도, 브랜치 바이 앱스트랙션, 병행 실행, 데이터 대조
- 길이: 477줄
- 소제목: 커밋 기록이 말해 주는 경계 / DB가 말해 주는 경계 / 무엇부터 떼어 낼까 / 코드는 추상화 뒤에서 갈아 끼운다 / 옛것과 새것을 함께 돌려 본다 / 공유 테이블을 가르는 순서 / 두 저장소가 어긋났는지 확인하기 / 떼어 냈는데 더 느려졌을 때 / 분해가 잘 됐는지 숫자로 본다 / 되돌아갈 길을 남겨 둔다 / 면접에서 나올 만한 질문
- 직접 링크 →: microservices, ddd-bounded-context, modular-monolith, feature-flags, hexagonal-architecture, event-driven-architecture, transactional-outbox, distributed-tracing, monolith-architecture
- 키워드 백링크 →: db-type-columnar-olap, sql-query-rewrite
- 이 글로 오는 글 ←: architecture-patterns-overview, ddd-bounded-context, microservices, modular-monolith, monolith-architecture, release-cutover-hypercare, system-design-concepts-map

#### `modular-monolith` — 모듈러 모놀리스: 배포는 하나, 경계는 도구로 지킨다

- 요약: 업무 단위로 모듈을 자르고 공개 API와 공개 뷰만 연다. dependency-cruiser와 패키지 exports로 침범과 순환을 막고, 모듈별 스키마 권한, 같은 프로세스 이벤트의 실패 처리, 떼어 낼 때 쉬워지는 이유를 다룬다.
- 태그: Architecture, Backend, System Design, TypeScript, PostgreSQL
- 키워드: 모듈러 모놀리스, dependency-cruiser, Spring Modulith
- 길이: 426줄
- 소제목: 배포는 하나, 경계는 여러 개 / 기술 계층이 아니라 업무로 자른다 / 규칙은 CI가 지킨다 / 패키지 경계로 막는 더 단단한 방법 / 데이터도 모듈이 가진다 / 모듈끼리 알리는 두 가지 방법 / 경계가 새는 흔한 모습 / 떼어 낼 때 무엇이 쉬워지나 / 면접에서 나올 만한 질문
- 직접 링크 →: monolith-architecture, microservices-decomposition, layered-architecture, ddd-bounded-context, postgres-roles-security, transactional-outbox, cqrs
- 키워드 백링크 →: ds-graph-bfs-dfs, rabbitmq-basics, microservices, pattern-proxy, kafka-basics, grpc
- 이 글로 오는 글 ←: architecture-patterns-overview, clean-architecture, ddd-bounded-context, layered-architecture, microservices, microservices-decomposition, monolith-architecture

#### `monolith-architecture` — 모놀리스 아키텍처: 한 덩어리가 함께 쓰는 것과 오래 잘 쓰는 법

- 요약: 모놀리스는 배포 단위를 하나로 묶는 대신 트랜잭션과 함수 호출의 단순함을 얻는다. 리포트 하나가 주문 API를 멈추고 예외 하나가 프로세스를 내리는 장면을 재현하고, 역할별 프로세스, 영향 범위 테스트, 분산 모놀리스까지 다룬다.
- 태그: Architecture, Backend, System Design, Node.js
- 키워드: 모놀리식 아키텍처, 분산 모놀리스, Big Ball of Mud
- 길이: 415줄
- 소제목: 하나로 빌드하고 하나로 배포한다 / 트랜잭션 하나가 지켜 주는 것 / 리포트 하나가 주문 API를 멈춘 이유 / 한 기능의 예외가 프로세스를 끝낸다 / 한 덩어리를 여러 개로 늘리는 법 / 크면서 생기는 진짜 문제는 배포다 / 진흙 덩어리가 되는 과정 / 쪼갰는데도 모놀리스인 경우 / 모놀리스를 오래 잘 쓰려면 / 면접에서 나올 만한 질문
- 직접 링크 →: microservices, modular-monolith, layered-architecture, saga-pattern, event-loop, connection-pool, js-memory-leak, scaling-horizontal-vertical, db-architecture-by-scale, feature-flags, microservices-decomposition, micro-frontends
- 키워드 백링크 →: build-caching, db-replication-sharding, osi-in-practice, sql-batch-timeout-pool, redis-basics
- 이 글로 오는 글 ←: architecture-patterns-overview, ddd-bounded-context, layered-architecture, microservices, microservices-decomposition, modular-monolith, nodejs-server-runtime

#### `serverless-architecture` — 서버리스 아키텍처: 트리거가 부르는 방식과 실패의 행방

- 요약: 서버리스 구조를 트리거 중심으로 본다. 동기·비동기·폴링 호출의 재시도, 배치 부분 실패, 재귀 고리, 팬아웃과 워크플로, 비용 계산을 다룬다.
- 태그: Architecture, AWS, Cloud, Backend, Node.js
- 키워드: 서버리스 아키텍처, ReportBatchItemFailures, Step Functions, EventBridge
- 길이: 414줄
- 소제목: 함수는 사건 하나에 반응한다 / 트리거마다 부르는 방식이 다르다 / 배치에서 하나만 실패했을 때 / 사건 하나를 여러 곳에 나눠 보낸다 / 여러 단계는 함수끼리 부르지 않는다 / 비용은 호출 수와 실행 시간으로 계산된다 / 상태는 함수 밖에 둔다 / 서버리스가 맞지 않는 일 / 사건이 사라졌다는 문의가 오면 / 트리거가 곧 구조다 / 면접에서 나올 만한 질문
- 직접 링크 →: serverless-limits, cold-starts, pub-sub, transactional-outbox, saga-pattern, cloud-cost-optimization, idempotency-key, nextjs-static-dynamic-rendering
- 키워드 백링크 →: dead-letter-queue, realtime-communication, message-queue-basics, db-type-key-value, message-delivery-semantics, kafka-basics, resilience-patterns, http-methods
- 이 글로 오는 글 ←: architecture-patterns-overview, cloud-cost-optimization, cold-starts, iam-basics, k8s-node-autoscaling-karpenter, microservices, saga-pattern, serverless-limits

#### `transactional-outbox` — 아웃박스 릴레이 운영: 깨우기, 순서, 실패, 청소

- 요약: 아웃박스의 원리 다음 단계로 릴레이를 운영할 때 고를 것들을 본다. NOTIFY로 깨우기, 주문마다 맨 앞 사건만 보내 순서 지키기, 실패하는 사건, 파티션 청소, 외부 API로 보내기를 다룬다.
- 태그: tesla, Architecture, Messaging, Backend, PostgreSQL, Transaction · 회사: tesla
- 키워드: 아웃박스 릴레이, 이중 쓰기
- 길이: 495줄
- 소제목: 두 군데에 쓰는 순간 어디서든 끊긴다 / 릴레이가 언제 깨어나나 / 릴레이를 둘 띄우면 순서가 바뀐다 / 주문마다 맨 앞 사건만 보낸다 / 계속 실패하는 사건 하나 / 아웃박스 테이블 청소 / 브로커가 아닌 곳으로 보내는 아웃박스 / 아웃박스 말고 고를 수 있는 것 / 브라우저에도 아웃박스가 있다 / 아웃박스가 밀린다는 알림이 왔을 때 / 릴레이까지가 아웃박스다 / 면접에서 나올 만한 질문
- 직접 링크 →: db-architecture-by-scale, saga-pattern, event-driven-architecture, message-delivery-semantics, postgres-functions-triggers, dead-letter-queue, idempotency-key, distributed-transactions-2pc, client-data-cache
- 키워드 백링크 →: pessimistic-locking, postgres-reporting-sql, microservices, browser-storage, sd-payment-flow, db-index-design, resilience-patterns, kafka-basics, db-replication-sharding, http-methods, webhooks
- 이 글로 오는 글 ←: acid-transactions, acid-vs-base, architecture-patterns-overview, cache-write-policies, cqrs, db-architecture-by-scale, db-sharding, ddd-bounded-context, elasticsearch-inverted-index, enterprise-system-integration, event-sourcing, kafka-vs-rabbitmq-replay, message-delivery-semantics, message-queue-basics, microservices, microservices-decomposition, modular-monolith, sd-hotel-inventory-scaling, sd-leaderboard-sorted-set, sd-notification-reliability, sd-payment-flow, serverless-architecture, system-design-concepts-map

### Programming › Backend › Auth (`programming/backend/auth`)

#### `cookie-session-login` — 쿠키와 세션으로 로그인 상태 유지하기

- 요약: HTTP는 방금 누가 왔는지 기억하지 못한다. 서버가 세션을 보관하고 쿠키로 번호표를 돌려주는 흐름과 쿠키 옵션, CSRF까지 정리했다.
- 태그: Authentication, Cookie, Session, Security
- 키워드: 쿠키 세션, 세션 쿠키, 세션 ID, Set-Cookie, CSRF
- 길이: 333줄
- 소제목: 외투 보관소 번호표 / 로그인부터 로그아웃까지 / 쿠키에 붙는 옵션들 / 자동으로 붙는다는 것의 함정, CSRF / 세션을 노리는 공격들 / 서버가 여러 대가 되면 / 배포하고 나니 로그인이 자꾸 풀릴 때 / 정리 / 면접에서 나올 만한 질문
- 직접 링크 →: proxy-reverse-proxy, cors, token-login
- 키워드 백링크 →: html-form-http, load-balancer-basics, csrf, kubernetes-ingress, redis-basics, what-happens-google-com
- 이 글로 오는 글 ←: authn-vs-authz, backend-engineer-roadmap, blue-green-deployment, browser-fetch, browser-storage, cors, csrf, edge-caching, eventual-consistency, graphql-basics, html-form-http, http-caching-cdn, http-message, http-methods, hyperloglog, load-balancing-algorithms, local-custom-domain, nginx-https-performance, oauth, rollback-strategy, scaling-horizontal-vertical, sd-load-balancer-stateless, ssrf, system-design-concepts-map, token-login, upper-layers-session-presentation-app, websocket-deep-dive, xss

#### `jwt-key-rotation` — JWT 서명 키 교체: kid, JWKS, 그리고 검증자의 캐시

- 요약: 키를 바꾼 직후 401이 쏟아진 이유를 jose로 재현하고, 게시·서명 전환·퇴역으로 키를 겹쳐 두는 교체 순서, 키가 샜을 때의 비상 교체, 교체와 회수의 차이, HS256 교체가 어려운 이유를 다룬다.
- 태그: JWT, Security, Authentication, Node.js, Troubleshooting
- 키워드: JWKS, kid 헤더, 서명 키 교체, JWKS 캐시
- 길이: 359줄
- 소제목: 키는 왜 바꾸나 / 토큰은 어느 키로 서명됐는지 헤더에 적는다 / 공개 키 목록을 내주는 주소 / 검증자는 JWKS를 얼마나 들고 있나 / 새 키로 바로 서명하면 생기는 일 / 겹치는 기간을 두고 바꾼다 / 키가 샜을 때는 기다릴 수 없다 / 키를 바꾼다고 토큰이 회수되지는 않는다 / 공유 비밀이면 교체가 왜 더 어려운가 / 교체를 사람 손에서 떼어 내기 / 401이 몰려올 때 보는 곳 / 면접에서 나올 만한 질문
- 직접 링크 →: token-login, oauth, secrets-management, clock-skew
- 키워드 백링크 →: http-caching-cdn, base64
- 이 글로 오는 글 ←: api-gateway-use-cases, authn-vs-authz, k8s-serviceaccount-tokens, token-login

#### `oauth` — OAuth 2.0, 비밀번호 대신 열쇠를 빌려주는 규칙

- 요약: '구글로 계속하기' 버튼 뒤에서 오가는 요청을 한 단계씩 따라가 봤다. 인가 코드 흐름과 PKCE까지.
- 태그: OAuth, Security, HTTP, Authorization
- 키워드: OAuth, PKCE, 인가 코드
- 길이: 359줄
- 소제목: 비밀번호를 넘기면 안 되는 이유 / 등장하는 네 주체 / 버튼을 누르면 일어나는 일 / 인가 요청 주소 뜯어보기 / 토큰은 두 개가 온다 / 비밀을 숨길 수 없는 앱: PKCE / 구현하면서 놓치기 쉬운 것 / 인가 코드 말고 다른 방식들 / 로그인까지 하려면: OpenID Connect / 콜백에서 막히는 세 가지 / 정리 / 면접에서 나올 만한 질문
- 키워드 백링크 →: token-login, cookie-session-login
- 이 글로 오는 글 ←: api-gateway-use-cases, authn-vs-authz, backend-engineer-roadmap, islands-resumability, jwt-key-rotation, local-custom-domain, react-server-components, sd-notification-system, system-design-concepts-map, token-login, zero-trust-architecture

#### `token-login` — 토큰으로 로그인하기: JWT와 리프레시 토큰

- 요약: 서버가 아무것도 기억하지 않고 서명된 토큰만 확인하는 방식. JWT를 뜯어보고, 변조가 막히는 이유와 리프레시 토큰, 쿠키 세션과의 차이를 따라가 봤다.
- 태그: Authentication, JWT, Token, Security
- 키워드: JWT, 리프레시 토큰, 액세스 토큰
- 길이: 360줄
- 소제목: 명단 대신 손목 팔찌 / 로그인하고 API를 부르기까지 / JWT 뜯어보기 / 내용을 바꾸면 어떻게 될까 / 비밀 키 하나냐, 열쇠 한 쌍이냐 / JWT에서 자주 나오는 구멍 / 한 번 준 토큰은 되돌리기 어렵다 / 토큰은 어디에 둘까 / 쿠키 세션과 나란히 놓고 보면 / 401이 쏟아지면 토큰부터 뜯어 본다 / 정리 / 면접에서 나올 만한 질문
- 직접 링크 →: cookie-session-login, oauth
- 키워드 백링크 →: browser-storage, base64, csrf, sd-start-single-server, jwt-key-rotation
- 이 글로 오는 글 ←: api-gateway-use-cases, authn-vs-authz, backend-engineer-roadmap, base64, browser-storage, clock-skew, cookie-session-login, csrf, gateway, git-remote-collaboration, github-actions-docker-ecr, http-message, http-status-codes, jwt-key-rotation, k8s-serviceaccount-tokens, kubeconfig-contexts, oauth, pattern-strategy, reverse-proxy-lb-api-gateway, sd-load-balancer-stateless, sd-notification-system, secrets-management, system-design-concepts-map, zero-trust-architecture

### Programming › Backend › Frameworks (`programming/backend/frameworks`)

#### `express-middleware` — Express 미들웨어: 요청이 지나가는 줄과 순서가 만드는 버그

- 요약: Express 앱은 등록 순서대로 선 함수의 줄이다. 순서 버그, Express 4에서 async 에러가 프로세스를 내리는 이유와 5의 변화, 본문 크기 한도와 검증, 응답을 두 번 보내는 실수, 배포 때 502를 막는 정상 종료를 실제 출력으로 본다.
- 태그: Node.js, JavaScript, Backend, API
- 키워드: Express 미들웨어, express.json, ERR_HTTP_HEADERS_SENT
- 길이: 539줄
- 소제목: 요청이 지나가는 줄 / 등록 순서가 곧 동작이다 / 라우트 한 줄 뜯어보기 / async 핸들러가 던진 에러 / 본문은 의심하면서 읽는다 / 검증은 핸들러 앞에서 한 번 / 응답은 한 번만 보낸다 / 끄는 것도 요청 처리다 / 4에서 5로 옮길 때 바뀌는 것 / 미들웨어 줄을 다시 보면 / 면접에서 나올 만한 질문
- 직접 링크 →: pattern-chain-of-responsibility, nodejs-server-runtime, fastapi-basics, cors, rest-api-design, k8s-pod-lifecycle, linux-processes-signals
- 키워드 백링크 →: js-promises, iptables-nat, k8s-architecture, event-loop, js-pure-functions, osi-in-practice, http-status-codes
- 이 글로 오는 글 ←: backend-engineer-roadmap, docker-commands-workflow, fastapi-basics, integration-tests-real-db, nodejs-server-runtime, pattern-chain-of-responsibility, pattern-strategy

#### `fastapi-basics` — FastAPI: 같은 주문 서비스를 파이썬으로 다시 만들면

- 요약: FastAPI는 타입 힌트로 검증하고 Depends로 의존성을 주입한다. 422 응답과 Pydantic의 관대한 기본값, 인자 순서가 정하는 의존성 실행 순서, async def 안의 블로킹이 서버를 세우는 이유, 40칸 스레드 풀, GIL과 uvicorn 워커를 Express와 비교한다.
- 태그: Python, Backend, API, Concurrency
- 키워드: FastAPI, Pydantic, uvicorn
- 길이: 552줄
- 소제목: 타입 힌트가 곧 검증이다 / 422는 누가 왜 보내나 / Pydantic은 기본으로 관대하다 / Depends는 함수 인자로 하는 주입이다 / async def에 블로킹을 넣으면 한 줄로 선다 / def도 무한히 동시에 돌지 않는다 / 스레드로는 계산이 빨라지지 않는다 / 기본값이 다른 곳들 / Express와 나란히 놓고 고르기 / 같은 서비스를 두 번 만들고 나서 / 면접에서 나올 만한 질문
- 직접 링크 →: express-middleware, nodejs-server-runtime, hexagonal-architecture, timeouts, connection-pool, k8s-pod-lifecycle
- 키워드 백링크 →: autoscaling, event-loop, sql-batch-timeout-pool, http-status-codes
- 이 글로 오는 글 ←: backend-engineer-roadmap, express-middleware, nodejs-server-runtime

#### `nodejs-server-runtime` — Node.js 서버 런타임: 이벤트 루프 옆의 스레드 풀, 워커, 프로세스

- 요약: Node.js는 JS를 한 스레드에서 돌리지만 파일·dns.lookup·해시는 기본 4칸짜리 libuv 스레드 풀이 맡는다. 로그인 해시가 파일 읽기를 늦추는 장면을 재현하고, UV_THREADPOOL_SIZE, Sync 호출, worker_threads 비용, cluster와 컨테이너 복제본을 고르는 법을 다룬다.
- 태그: Node.js, JavaScript, Backend, Performance, Concurrency
- 키워드: libuv 스레드 풀, UV_THREADPOOL_SIZE, cluster 모듈
- 길이: 500줄
- 소제목: 요청 하나가 Node 안에서 지나가는 길 / 스레드 풀로 가는 일은 따로 있다 / 풀에 자리가 네 개뿐이다 / 로그인 때문에 파일 읽기가 느려진다 / UV_THREADPOOL_SIZE를 올리면 생기는 일 / Sync를 붙이면 풀 대신 루프가 막힌다 / 자바스크립트 계산은 worker_threads로 / 코어를 다 쓰려면 프로세스를 늘린다 / cluster, PM2, 컨테이너 복제본 중에서 / 느려졌을 때 어디부터 보나 / 한 스레드와 그 주변 / 면접에서 나올 만한 질문
- 직접 링크 →: event-loop, js-microtask-macrotask, express-middleware, fastapi-basics, monolith-architecture, thread-safety, sd-load-balancer-stateless, websocket-deep-dive, k8s-pod-resources, connection-pool
- 키워드 백링크 →: load-balancer-basics, realtime-communication, js-memory-leak, sd-start-single-server, autoscaling, race-conditions, osi-in-practice, sql-batch-timeout-pool, redis-basics, dns
- 이 글로 오는 글 ←: api-scaling-ladder, backend-engineer-roadmap, bullmq-job-queue, express-middleware, fastapi-basics, go-concurrency-basics, sd-web-crawler-architecture, service-discovery

### Programming › Backend › Languages (`programming/backend/languages`)

#### `go-concurrency-basics` — Go 동시성 기본기: 고루틴, 채널, context, 그리고 끝나지 않는 고루틴

- 요약: 요청마다 하나씩 남는 고루틴에서 출발해 G-M-P 스케줄러, 버퍼 있는 채널과 없는 채널, select와 context 취소, 워커 풀과 errgroup, 레이스 디텍터를 직접 돌려 본다. pprof로 멈춘 고루틴을 찾는 법, 컨테이너에서 GOMAXPROCS가 CPU 한도를 따르는지, Node 이벤트 루프·자바 스레드와 무엇이 다른지도 정리한다.
- 태그: tesla, Go, Concurrency, Backend, Troubleshooting · 회사: tesla
- 키워드: 고루틴, 고루틴 누수, GOMAXPROCS, errgroup
- 길이: 597줄
- 소제목: 고루틴 수가 줄지 않는다 / 고루틴은 스레드 위에서 돌아가는 작은 일감이다 / 채널은 주고받는 순간 만나는 자리다 / select는 먼저 준비된 쪽을 고른다 / context로 취소를 아래까지 전한다 / 동시에 몇 개까지 돌릴지 정한다 / 레이스 디텍터는 실행된 경로만 본다 / 멈춘 고루틴을 운영에서 찾는 법 / Node의 이벤트 루프, 자바의 스레드와 무엇이 다른가 / 현장에서 고루틴 문제를 만나는 순간 / 다시 계단 모양 메모리로 / 면접에서 나올 만한 질문
- 직접 링크 →: race-conditions, thread-safety, deadlocks, garbage-collection, java-jvm-memory-gc, timeouts, event-loop, nodejs-server-runtime
- 키워드 백링크 →: k8s-pod-resources, abort-controller, tail-latency, sql-batch-timeout-pool, js-closures
- 이 글로 오는 글 ←: backend-engineer-roadmap, deadlocks, java-jvm-memory-gc, k8s-pod-resources, race-conditions, scaling-horizontal-vertical, thread-safety

#### `java-jvm-memory-gc` — JVM 메모리와 스레드: 힙 밖 메모리, OOM 다섯 가지, 스레드 풀과 가상 스레드

- 요약: -Xmx를 한도 바로 아래로 줬는데 로그 없이 OOMKilled가 되는 장면을 재현하고, Native Memory Tracking으로 힙 밖 메모리를 읽는다. OOM 메시지별 원인, 컨테이너에서 MaxRAMPercentage로 힙 몫 정하기, 스레드 풀 고갈과 RUNNABLE로 보이는 대기, Java 21 가상 스레드와 pinning, jcmd로 멈춘 서비스를 뜨는 순서를 다룬다.
- 태그: tesla, Java, Performance, Troubleshooting, Kubernetes, Backend · 회사: tesla
- 키워드: 메타스페이스, 가상 스레드, Native Memory Tracking, MaxRAMPercentage, jcmd
- 길이: 503줄
- 소제목: JVM 프로세스가 쓰는 메모리 지도 / 힙 안에서 객체가 늙어 가는 길 / OOM 메시지마다 다른 곳이 찼다 / 컨테이너 한도에서 힙 몫을 정한다 / 요청 스레드 네 개가 모두 결제를 기다린다 / 가상 스레드는 기다림을 싸게 만든다 / 멈춘 자바 서비스에서 뜨는 순서 / 다시 512MiB Pod로 / 면접에서 나올 만한 질문
- 직접 링크 →: garbage-collection, deadlocks, go-concurrency-basics, k8s-pod-resources, resilience-patterns
- 키워드 백링크 →: osi-in-practice, sql-batch-timeout-pool, connection-pool
- 이 글로 오는 글 ←: backend-engineer-roadmap, deadlocks, garbage-collection, go-concurrency-basics, k8s-pod-resources

### Programming › Backend › Messaging (`programming/backend/messaging`)

#### `bullmq-job-queue` — BullMQ 작업 큐: 재시도, 지연, 멈춘 작업, 두 번 실행되는 이유

- 요약: Redis 위에 작업 큐를 세우는 BullMQ를 직접 돌려 concurrency와 CPU 작업, 지수 백오프, 우선순위와 jobId 중복 방지, 요청 수 제한, 잡 스케줄러를 확인한다. 락이 만료돼 같은 작업이 두 번 실행되는 장면, 안전한 종료, 끝난 작업이 먹는 Redis 메모리, 큐가 밀릴 때 보는 순서까지 따라간다.
- 태그: Messaging, Redis, Node.js, Backend, Troubleshooting
- 키워드: BullMQ, stalled job, lockDuration, removeOnComplete
- 길이: 681줄
- 소제목: Redis 안에 큐를 세우는 라이브러리 / 작업 한 건이 Redis에 남기는 것 / concurrency는 기다리는 일에만 듣는다 / 실패한 작업은 언제 다시 오나 / 넣은 순서대로 나오지 않는 작업 / 같은 작업을 두 번 넣지 않게 / 외부 API 한도에 맞춰 꺼내기 / 정해진 시각마다 도는 작업 / 워커가 죽으면 락이 풀릴 때까지 기다린다 / 살아 있는데 죽었다고 본다 / 배포할 때 하던 일을 마치고 내려가기 / 끝난 작업이 Redis 메모리를 먹는다 / 큐가 밀린다는 알람을 받았을 때 / Kafka나 RabbitMQ 대신 BullMQ를 고를 때 / Redis 위의 상태 기계를 믿는 법 / 면접에서 나올 만한 질문
- 직접 링크 →: message-queue-basics, dead-letter-queue, api-scaling-ladder, event-loop, nodejs-server-runtime, exponential-backoff-jitter, idempotency-key, rate-limiting-algorithms, cron-jobs, distributed-lock, k8s-pod-lifecycle, redis-memory-eviction, redis-persistence-ha, redis-cluster, connection-pool, k8s-hpa, kafka-basics, rabbitmq-basics
- 키워드 백링크 →: pub-sub, js-pure-functions, redis-basics, dns, webhooks
- 이 글로 오는 글 ←: api-scaling-ladder, message-queue-basics, pattern-command

#### `dead-letter-queue` — 데드 레터 큐: 독이 든 메시지, 재시도 상한, 되돌려 보내기

- 요약: 끝없이 돌아오는 실패 메시지를 재시도 상한과 실패 분류로 격리하고, DLQ에 무엇을 남길지, 알람을 언제 울릴지, 고친 뒤 중복 없이 되돌려 보내는 법을 PostgreSQL과 Redis Streams로 직접 확인한다.
- 태그: tesla, Messaging, Backend, PostgreSQL, Redis, Troubleshooting · 회사: tesla
- 키워드: 데드 레터 큐, DLQ, 독이 든 메시지, maxReceiveCount, redrive
- 길이: 509줄
- 소제목: 같은 실패가 끝없이 돌아온다 / 몇 번 시도하고 포기할지 / 바로 포기할 실패, 기다려 볼 실패 / Redis Streams로 만드는 DLQ / DLQ에 무엇을 같이 남기나 / 알람은 DLQ에 하나라도 있으면 / 고친 뒤 되돌려 보내기 / DLQ를 두고도 메시지를 잃는 경우 / 큐에서 빠진 메시지는 누군가 봐야 한다 / 면접에서 나올 만한 질문
- 직접 링크 →: message-queue-basics, pub-sub, retries, exponential-backoff-jitter, rabbitmq-basics, kafka-basics, structured-logging, alerting, idempotency-key, message-delivery-semantics
- 키워드 백링크 →: resilience-patterns, redis-basics, sd-email-protocols, http-methods
- 이 글로 오는 글 ←: bullmq-job-queue, ddd-bounded-context, enterprise-system-integration, event-driven-architecture, kafka-vs-rabbitmq-replay, message-delivery-semantics, message-queue-basics, pattern-command, pub-sub, rabbitmq-basics, rollback-strategy, saga-pattern, schema-versioning, sd-notification-reliability, sd-payment-reliability, sd-queue-logging-automation, serverless-architecture, serverless-limits, system-design-concepts-map, transactional-outbox, webhooks

#### `kafka-basics` — Kafka 기초: 파티션, 오프셋, 소비자 그룹, 복제와 acks

- 요약: 컨슈머를 늘려도 랙이 줄지 않는 이유에서 시작해 파티션과 키별 순서, 오프셋 커밋, 리밸런싱, 랙 읽는 법, min.insync.replicas와 acks, 보관 기간과 컴팩션을 브로커 세 대의 실제 출력으로 따라간다.
- 태그: tesla, Messaging, Backend, Distributed Systems, Troubleshooting · 회사: tesla
- 키워드: Kafka, 컨슈머 랙, 리밸런싱, min.insync.replicas, 로그 컴팩션
- 길이: 519줄
- 소제목: 토픽은 파티션 여러 개로 된 로그다 / 키가 파티션을 정하고, 순서는 파티션 안에서만 지킨다 / 오프셋은 컨슈머가 남기는 책갈피다 / 소비자 그룹과 리밸런싱 / 랙은 남은 일의 양이다 / 리더 하나에 팔로워 둘, 그리고 acks / 얼마나 오래 둘까: 보관 기간과 컴팩션 / 랙 알람이 울렸을 때 보는 순서 / Kafka가 맞지 않는 곳 / 파티션 수가 병렬성의 상한이다 / 면접에서 나올 만한 질문
- 직접 링크 →: pub-sub, message-queue-basics, event-driven-architecture, message-delivery-semantics, consistent-hashing, rabbitmq-basics
- 키워드 백링크 →: sd-mq-replication, sd-mq-consumer-groups, sd-mq-storage-partitions, db-type-wide-column
- 이 글로 오는 글 ←: agentic-rag, api-scaling-ladder, api-styles-overview, api-versioning, backend-engineer-roadmap, backpressure, bullmq-job-queue, cache-invalidation, centralized-logging-pipeline, cloud-cost-optimization, db-architecture-by-scale, db-type-columnar-olap, db-type-embedded, dead-letter-queue, distributed-tracing, distributed-transactions-2pc, elasticsearch-inverted-index, encryption-in-transit, event-driven-architecture, k8s-hpa, k8s-operators, k8s-pod-disruption-budget, k8s-service-types, k8s-statefulset, kafka-vs-rabbitmq-replay, latency-bandwidth-throughput, leader-election, message-delivery-semantics, message-queue-basics, microservices, modular-monolith, pattern-iterator, pub-sub, rabbitmq-basics, raft-consensus, rag-classic-pipeline, rag-patterns-overview, rag-retrieval-quality, realtime-communication, redis-basics, saga-pattern, schema-versioning, sd-ad-click-exactly-once, sd-ad-click-stream-windows, sd-autocomplete-data-pipeline, sd-interview-framework, sd-maps-location-eta, sd-metrics-collection, sd-metrics-storage-alerting, sd-mq-consumer-groups, sd-mq-replication, sd-mq-storage-partitions, sd-music-streaming, sd-nearby-friends, sd-queue-logging-automation, sd-stock-exchange-low-latency, serverless-architecture, system-design-concepts-map, system-design-study-path, transactional-outbox

#### `kafka-vs-rabbitmq-replay` — Kafka와 RabbitMQ: 읽은 메시지는 어디로 가고, 어떻게 다시 처리하나

- 요약: Kafka는 읽어도 지우지 않고 그룹마다 오프셋만 옮기고, RabbitMQ 클래식 큐는 ack가 곧 삭제다. 버그 뒤 시각으로 되감기, 새 그룹의 처음부터 읽기, 보관 기간이 끝난 뒤의 조용한 건너뛰기, RabbitMQ 스트림과 아웃박스 재발행을 실제로 돌려 본다.
- 태그: Messaging, Kafka, Backend, Distributed Systems, Troubleshooting
- 키워드: 오프셋 되감기, auto.offset.reset, retention.ms, 스트림 큐
- 길이: 614줄
- 소제목: 같은 주문 8건을 양쪽에 보냈다 / 일을 나눠 주는 큐, 일어난 일을 적는 로그 / 버그 난 컨슈머를 배포 시각으로 되감기 / 시각으로 찾은 위치가 생각과 다를 때 / 나중에 붙은 컨슈머에게 과거를 주는 법 / 보관 기간이 끝나면 되감을 곳도 없다 / 오래 두면 디스크 값이 든다 / RabbitMQ로 다시 처리해야 한다면 / 일을 나누는가, 기록을 나누는가 / 다시 읽어야 하는 날 현장에서 보는 것 / 읽은 뒤에 남는 것 / 면접에서 나올 만한 질문
- 직접 링크 →: kafka-basics, rabbitmq-basics, sd-mq-storage-partitions, sd-mq-consumer-groups, message-delivery-semantics, event-sourcing, dead-letter-queue, transactional-outbox
- 키워드 백링크 →: sd-object-storage-architecture, pub-sub, dns, zero-downtime-migrations
- 이 글로 오는 글 ←: rabbitmq-basics

#### `message-delivery-semantics` — 메시지 전달 보장: 최대 한 번, 최소 한 번, 정확히 한 번은 어디까지

- 요약: 확인이 사라지면 보낸 쪽은 다시 보낼 수밖에 없어서, 정확히 한 번은 구간마다 받는 쪽이 중복을 알아봐서 만든다. 멱등 프로듀서의 시퀀스, Kafka 트랜잭션과 펜싱, 인박스 테이블과 중복 기록 보관 기간을 실제로 돌려 본다.
- 태그: tesla, Messaging, Backend, Distributed Systems, PostgreSQL, Transaction · 회사: tesla
- 키워드: 정확히 한 번, 멱등 프로듀서, 인박스 테이블, 트랜잭셔널 프로듀서
- 길이: 449줄
- 소제목: 확인이 사라지면 보낸 쪽은 모른다 / 프로듀서와 브로커 사이: 멱등 프로듀서 / Kafka 안에서 읽고 쓰기: 트랜잭션 / 같은 이름의 옛 인스턴스를 막는 펜싱 / 어디까지가 Kafka의 정확히 한 번인가 / 받는 쪽 DB에서 거르는 인박스 테이블 / 중복을 얼마나 오래 기억할까 / 중복 적립 문의를 받았을 때 볼 것 / 정확히 한 번은 구간마다 받는 쪽이 만든다 / 면접에서 나올 만한 질문
- 직접 링크 →: message-queue-basics, kafka-basics, event-driven-architecture, idempotency-key, batch-processing
- 키워드 백링크 →: transactional-outbox, js-pure-functions, db-transaction-isolation, resilience-patterns, dead-letter-queue, http-methods
- 이 글로 오는 글 ←: backend-engineer-roadmap, cache-write-policies, cqrs, crdt, cron-jobs, db-architecture-by-scale, dead-letter-queue, enterprise-system-integration, event-driven-architecture, idempotency-key, js-callback-hell, k8s-job-cronjob, kafka-basics, kafka-vs-rabbitmq-replay, long-polling, message-queue-basics, rabbitmq-basics, router-vs-switch, saga-pattern, schema-versioning, sd-ad-click-exactly-once, sd-ad-click-stream-windows, sd-chat-message-storage, sd-load-balancer-stateless, sd-metrics-storage-alerting, sd-mq-consumer-groups, sd-mq-replication, sd-news-feed-publishing, sd-notification-reliability, sd-payment-reliability, sd-queue-logging-automation, sd-stock-exchange-low-latency, serverless-architecture, system-design-study-path, transactional-outbox

#### `message-queue-basics` — 메시지 큐 기초: ack, 가시성 타임아웃, 재전달

- 요약: 메시지를 꺼낸 뒤 처리 전에 죽으면 사라지는 큐를 고쳐 가며 ack와 가시성 타임아웃, 최소 한 번 전달에서 생기는 중복, 워커를 늘리면 깨지는 순서, 큐 깊이로 읽는 처리 상태를 Redis와 PostgreSQL로 직접 돌려 본다.
- 태그: tesla, Messaging, Backend, Redis, PostgreSQL, Distributed Systems · 회사: tesla
- 키워드: 가시성 타임아웃, 경쟁하는 컨슈머, 큐 깊이, BLMOVE
- 길이: 540줄
- 소제목: 요청 안에서 끝내지 않아도 되는 일 / 꺼낸 순간 사라지는 큐 / 처리했다고 말해야 지운다 / 가시성 타임아웃: 죽은 워커의 몫을 되찾는 시계 / 같은 메시지를 두 번 받는 건 정상이다 / 실패를 알리는 nack / 경쟁하는 컨슈머 / 워커를 늘리면 순서가 깨진다 / 큐 깊이 그래프를 읽는 법 / 큐를 무엇으로 만드나 / 메시지가 사라지거나 쌓일 때 보는 순서 / 잃지 않는 것과 두 번 하지 않는 것 / 면접에서 나올 만한 질문
- 직접 링크 →: pub-sub, dead-letter-queue, message-delivery-semantics, kafka-basics, rabbitmq-basics, redis-basics, db-locking-deadlock, db-architecture-by-scale, idempotency-key, exponential-backoff-jitter, backpressure, microservices, postgres-mvcc-vacuum, redis-persistence-ha, redis-memory-eviction, bullmq-job-queue
- 키워드 백링크 →: transactional-outbox, autoscaling, db-index-design, resilience-patterns, sd-mq-storage-partitions, js-pure-functions, sd-email-protocols, realtime-communication, http-methods
- 이 글로 오는 글 ←: api-scaling-ladder, api-styles-overview, autoscaling, backend-engineer-roadmap, backpressure, bullmq-job-queue, dead-letter-queue, ds-stack-queue-deque, event-driven-architecture, js-pure-functions, kafka-basics, message-delivery-semantics, pattern-command, pub-sub, rabbitmq-basics, redis-basics, sd-mq-consumer-groups, sd-mq-storage-partitions, sd-notification-reliability, sd-notification-system, sd-queue-logging-automation, sd-video-upload-transcoding, sd-web-crawler-architecture, serverless-architecture, system-design-concepts-map, traffic-shaping-qos, webhooks

#### `pub-sub` — 발행·구독: 토픽, Redis Streams 소비자 그룹, SNS와 SQS 팬아웃

- 요약: 큐는 한 명에게, 토픽은 모두에게 준다. Redis PUB/SUB가 끊긴 구독자와 느린 구독자의 메시지를 버리는 모습, Streams 소비자 그룹의 lag와 pending, SNS 뒤에 SQS를 붙이는 이유와 필터 정책까지 정리한다.
- 태그: Messaging, Redis, AWS, Backend, Distributed Systems
- 키워드: 소비자 그룹, 팬아웃, XAUTOCLAIM, 필터 정책, client-output-buffer-limit
- 길이: 583줄
- 소제목: 한 명에게 주는 큐, 모두에게 주는 토픽 / Redis PUBLISH는 그 순간 듣던 사람에게만 간다 / 느린 구독자 하나는 끊긴다 / Redis Streams: 그룹마다 모두, 그룹 안에서는 나눠서 / 그룹이 얼마나 밀렸는지 보기 / 죽은 소비자의 몫 가져오기 / 스트림을 자르면 늦은 그룹은 모른 채 잃는다 / SNS 토픽 뒤에 SQS 큐를 하나씩 / 구독자가 고르게 하는 필터 / 이벤트 이름과 내용은 구독자를 위해 짓는다 / 구독자가 메시지를 못 받는다는 신고가 오면 / 복사하는 곳과 나누는 곳 / 면접에서 나올 만한 질문
- 직접 링크 →: message-queue-basics, dead-letter-queue, event-driven-architecture, redis-basics, redis-cluster, backpressure, kafka-basics
- 키워드 백링크 →: http-caching-cdn, dns
- 이 글로 오는 글 ←: backend-engineer-roadmap, bullmq-job-queue, cache-invalidation, dead-letter-queue, event-driven-architecture, kafka-basics, kafka-vs-rabbitmq-replay, message-queue-basics, microservices, pattern-observer, rabbitmq-basics, redis-basics, sd-chat-connections, sd-chat-message-storage, sd-chat-presence, sd-maps-location-eta, sd-mq-consumer-groups, sd-mq-replication, sd-mq-storage-partitions, sd-nearby-friends, sd-news-feed-publishing, sd-news-feed-retrieval, serverless-architecture, system-design-concepts-map, system-design-study-path, tail-latency, websocket-deep-dive

#### `rabbitmq-basics` — RabbitMQ 기초: 익스체인지와 바인딩, ack와 prefetch, 쿼럼 큐

- 요약: RabbitMQ는 큐가 아니라 익스체인지로 보내고 바인딩이 큐를 고른다. 익스체인지 네 종류, 갈 곳 없는 메시지, 발행 확인, prefetch, 쿼럼 큐의 배달 한도와 데드 레터 익스체인지를 실제 출력으로 확인한다.
- 태그: tesla, Messaging, Backend, Troubleshooting, Distributed Systems · 회사: tesla
- 키워드: RabbitMQ, 익스체인지, 쿼럼 큐, 데드 레터 익스체인지
- 길이: 459줄
- 소제목: 큐가 아니라 익스체인지로 보낸다 / 익스체인지 네 종류 / 갈 곳 없는 메시지를 잡는 법 / 브로커가 받았는지 확인하는 발행 확인 / ack와 prefetch: 컨슈머가 몇 개를 쥐고 있나 / 클래식 큐와 쿼럼 큐 / 실패한 메시지를 보내는 데드 레터 익스체인지 / 큐가 쌓이거나 비었을 때 보는 순서 / Kafka와 무엇이 다른가 / 익스체인지가 정하고, ack가 지우고, 쿼럼이 지킨다 / 면접에서 나올 만한 질문
- 직접 링크 →: message-queue-basics, pub-sub, dead-letter-queue, message-delivery-semantics, event-driven-architecture, kafka-basics, kafka-vs-rabbitmq-replay
- 키워드 백링크 →: raft-consensus, http-caching-cdn, dns
- 이 글로 오는 글 ←: api-styles-overview, backpressure, bullmq-job-queue, db-architecture-by-scale, dead-letter-queue, distributed-tracing, event-driven-architecture, kafka-basics, kafka-vs-rabbitmq-replay, message-queue-basics, microservices, modular-monolith, sd-mq-consumer-groups, sd-mq-storage-partitions, sd-queue-logging-automation

### Programming › Backend › Testing (`programming/backend/testing`)

#### `integration-tests-real-db` — 실제 DB로 도는 통합 테스트: 트랜잭션 롤백, 팩토리, 컨테이너

- 요약: 목으로는 안 보이던 유니크 인덱스 버그를 PostgreSQL 16에 붙여 재현하고, 테스트마다 트랜잭션을 되돌리는 법과 그 함정(시퀀스, 지연 제약, 자기 커넥션, 안쪽 COMMIT)을 본다. 팩토리, HTTP 서버 테스트, 병렬 실행과 템플릿 DB, Testcontainers와 CI 서비스 컨테이너, 계약 테스트까지 다룬다.
- 태그: Testing, PostgreSQL, Node.js, Backend, Database
- 키워드: Testcontainers, 서비스 컨테이너, 템플릿 데이터베이스
- 길이: 699줄
- 소제목: 진짜 DB에 붙이자 바로 빨간불이 떴다 / 고쳤는데 동시에 오면 또 터진다 / 테스트마다 트랜잭션을 열고 되돌린다 / 되돌려도 남는 것, 되돌려서 놓치는 것 / 코드가 자기 커넥션을 쓰면 테스트가 못 본다 / 롤백, TRUNCATE, DELETE를 재 보면 / 팩토리는 필요한 값만 드러낸다 / HTTP 서버를 띄워 요청으로 확인한다 / 파일이 동시에 돌면 같은 테이블을 두고 싸운다 / CI에서는 DB를 컨테이너로 띄운다 / 다른 서비스와의 약속은 따로 확인한다 / 직접 만들어 보는 세이브포인트 / 진짜 DB가 알려 준 것들 / 면접에서 나올 만한 질문
- 직접 링크 →: test-pyramid-unit-tests, acid-transactions, db-transaction-isolation, pattern-builder, express-middleware, hexagonal-architecture, api-versioning
- 키워드 백링크 →: github-actions-docker-ecr, postgres-connections-pg-hba, sql-insert-update-delete, event-loop, osi-in-practice, db-index-design, ports-and-sockets, http-status-codes, ipv6-basics, postgres-getting-started
- 이 글로 오는 글 ←: backend-engineer-roadmap, sit-uat-testing, test-pyramid-unit-tests

#### `sit-uat-testing` — SIT와 UAT: 시스템이 함께 맞는지, 업무에 쓸 수 있는지

- 요약: 개발자의 통합 테스트는 바깥 시스템을 가짜로 바꾸므로 진짜끼리 맞는지는 SIT가, 업무에 쓸 수 있는지는 UAT가 확인한다. 환경의 줄, 결정적 마스킹, 벤더 샌드박스 계약 확인, 결함 분류, 숫자로 쓴 종료 기준을 다룬다.
- 태그: tesla, Testing, Backend, Architecture, DevOps · 회사: tesla
- 키워드: SIT, UAT, 사용자 인수 테스트, 결정적 마스킹
- 길이: 313줄
- 소제목: 개발자의 통합 테스트와 SIT는 범위가 다르다 / 환경은 줄을 서서 올라간다 / 테스트 데이터는 운영처럼, 개인정보는 빼고 / 벤더 샌드박스에도 계약을 확인한다 / 시나리오는 업무 흐름 하나를 끝까지 / 결함은 심각도와 우선순위를 따로 매긴다 / 언제 시작하고 언제 끝났다고 말하나 / 고칠 때마다 다 돌릴 수는 없다 / SIT와 UAT가 흔들리는 순간들 / 혼자 맞는 것, 함께 맞는 것, 쓸 수 있는 것 / 면접에서 나올 만한 질문
- 직접 링크 →: enterprise-system-integration, global-rollout-localization, release-cutover-hypercare, test-pyramid-unit-tests, integration-tests-real-db, api-versioning
- 키워드 백링크 →: k8s-deploy-pipeline-eks, http-status-codes, webhooks
- 이 글로 오는 글 ←: enterprise-system-integration, global-rollout-localization, release-cutover-hypercare

#### `test-pyramid-unit-tests` — 테스트 피라미드와 단위 테스트: 목이 거짓말을 하는 순간

- 요약: 테스트를 어디에 얼마나 둘지 피라미드·트로피·벌집으로 비교하고, node:test로 단위 테스트를 쓴다. 스텁·스파이·목·가짜의 차이와 목이 운영 버그를 덮거나 리팩터링에 깨지는 순간, 시계와 난수를 테스트가 쥐는 법, 상태가 새는 테스트와 커버리지의 착시를 실제로 돌려 본다.
- 태그: Testing, Node.js, JavaScript, Backend
- 키워드: 테스트 피라미드, 테스트 대역, 변이 테스트, 가짜 타이머
- 길이: 636줄
- 소제목: 테스트가 있으면 무엇이 빨라지나 / 피라미드와 트로피가 다투는 것 / node:test로 함수 하나를 붙잡기 / 단위는 함수가 아니라 행동이다 / 진짜 대신 세우는 것들 / 목이 거짓말을 하는 두 가지 방식 / 시계와 난수를 테스트 손에 쥐여 준다 / 혼자 돌리면 통과하는 테스트 / 커버리지 100%인데 버그가 그대로다 / 직접 만들어 보는 가짜 시계 / React 컴포넌트도 같은 질문을 받는다 / 대역이 흉내 내지 못하는 것 / 면접에서 나올 만한 질문
- 직접 링크 →: integration-tests-real-db, hexagonal-architecture, js-pure-functions, js-microtask-macrotask, ci-cd-basics, client-data-cache
- 키워드 백링크 →: event-loop, microservices, db-type-embedded
- 이 글로 오는 글 ←: backend-engineer-roadmap, debounce-throttle, integration-tests-real-db, js-microtask-macrotask, js-pure-functions, pattern-abstract-factory, sit-uat-testing

### Programming › Common (`programming/common`)

#### `curl-for-debugging` — curl로 디버깅하기: 시간 재기, 서버 고르기, 재시도와 종료 코드

- 요약: 503에도 성공으로 넘어간 헬스 체크에서 출발해 -I와 -X HEAD의 차이, -w로 단계별 시간 찍기, --resolve·--connect-to·Host 헤더, -k 대신 --cacert, HTTP 버전 고르기, -L이 바꾸는 메서드와 인증 헤더, --retry가 다시 하는 것, 타임아웃과 종료 코드, Pod 안에서 curl 치기를 실제 출력으로 정리한다.
- 태그: HTTP, Network, Troubleshooting, TLS, Linux
- 키워드: curl -w, --connect-to, --retry-connrefused, curl 종료 코드
- 길이: 611줄
- 소제목: 명령 한 줄을 읽는 법 / 헤더만 볼 때 HEAD를 조심한다 / 단계별 시간을 원하는 모양으로 찍는다 / 직접 해 보기: 누적 시각을 단계 시간으로 바꾸기 / 특정 서버 한 대로 보내는 세 가지 방법 / 인증서 검사는 끄지 말고 믿을 곳을 더한다 / HTTP 버전은 묻는 방식이 셋이다 / 리다이렉트를 따라가면 메서드와 인증이 바뀐다 / 재시도는 무엇을 다시 하는가 / 한도를 안 걸면 curl은 기다린다 / 종료 코드로 스크립트를 짠다 / Pod 안에서 curl을 친다 / 기본값을 알고 쓰면 거짓말을 안 한다 / 면접에서 나올 만한 질문
- 직접 링크 →: network-troubleshooting-by-layer, http-message, https-tls, http-versions, http-status-codes, retries, idempotency-key, packet-capture-tcpdump, timeouts, k8s-pod-troubleshooting, linux-namespaces-cgroups, k8s-coredns
- 키워드 백링크 →: dockerfile-image-layers, k8s-service-types, docker-container-basics, kubernetes-ingress, sd-start-single-server, service-mesh, iptables-nat, security-groups-nacl, osi-in-practice, resilience-patterns, what-happens-google-com, local-k8s-kind-minikube, grpc, first-page-from-power-on, http-methods, dns
- 이 글로 오는 글 ←: devops-networking-roadmap, k8s-learning-roadmap, k8s-pod-lifecycle, layer-mtu-fragmentation, network-troubleshooting-by-layer

#### `dependency-hell` — 의존성 지옥: 다이아몬드, 유령 의존성, peer 충돌과 lockfile

- 요약: 같은 패키지가 두 벌 깔리는 다이아몬드, 호이스팅이 만드는 유령 의존성과 pnpm의 엄격한 구조, ERESOLVE를 읽고 고치는 순서, overrides, npm install과 npm ci의 차이를 사설 레지스트리로 재현한다. 설치 스크립트와 숙성 기간 같은 공급망 방어, Renovate·Dependabot 운영 전략까지 다룬다.
- 태그: JavaScript, Node.js, Security, CI/CD, Troubleshooting, npm
- 키워드: 유령 의존성, 다이아몬드 의존성, ERESOLVE, lockfile
- 길이: 662줄
- 소제목: 다이아몬드 모양에서 두 벌이 깔린다 / node_modules는 왜 평평한가 / 선언하지 않은 패키지를 쓰는 유령 의존성 / pnpm은 링크로 경계를 세운다 / peer dependency가 부딪히면 ERESOLVE / 남의 의존성 버전을 바꾸는 overrides / lockfile이 기록하는 것 / 설치는 남의 코드를 실행하는 일이다 / 업데이트를 봇에게 맡기는 방법 / 현장에서 의존성이 꼬였을 때 / 범위는 바람이고 lockfile은 결정이다 / 면접에서 나올 만한 질문
- 직접 링크 →: semantic-versioning, build-caching, pattern-singleton, secrets-management
- 키워드 백링크 →: graphql-basics, dockerfile-image-layers, js-hoisting-tdz
- 이 글로 오는 글 ←: build-caching, git-troubleshooting, k8s-project-structure, semantic-versioning, terraform-basics

#### `local-custom-domain` — localhost 대신 내 도메인으로 개발하기

- 요약: app.matt.test, api.matt.test처럼 배포와 같은 모양의 주소로 로컬 개발 환경을 만든다. hosts·dnsmasq로 이름을 돌리고, 리버스 프록시로 나누고, mkcert로 브라우저가 믿는 HTTPS를 붙인다.
- 태그: DNS, HTTPS, Local Dev, Browser
- 키워드: mkcert, dnsmasq, 로컬 도메인, allowedDevOrigins
- 길이: 355줄
- 소제목: localhost가 감춰 주는 것들 / 어떤 도메인을 쓸까 / 이름을 127.0.0.1로 돌리기 / 포트 대신 Host 헤더로 나누기 / 브라우저가 믿는 인증서 만들기 / 브라우저 요청이 서비스에 닿기까지 / 개발 서버가 낯선 호스트를 막는다 / 잘 연결됐는지 확인하기 / 안 될 때 의심할 곳 / 배포와 같은 모양으로 / 면접에서 나올 만한 질문
- 직접 링크 →: cors, hosts-file
- 키워드 백링크 →: proxy-reverse-proxy, nginx-basics, ssrf, csrf, http-versions, what-happens-google-com, cookie-session-login, oauth, first-page-from-power-on, dns
- 이 글로 오는 글 ←: cors, dhcp, first-page-from-power-on, hosts-file, https-tls, network-flow-logs, network-monitoring, proxy-reverse-proxy

#### `semantic-versioning` — Semantic Versioning: 세 숫자의 약속과 npm 범위 규칙

- 요약: MAJOR.MINOR.PATCH가 약속하는 것, 사전 배포 버전의 정렬 규칙, npm의 캐럿과 물결표가 실제로 여는 범위와 0.x에서 한 칸 좁아지는 이유를 직접 돌려 본다. 타입·기본값·engines 변경이 왜 깨는 변경인지, dist-tag 사고, Changesets 릴리스 흐름까지 따라간다.
- 태그: JavaScript, Node.js, TypeScript, CI/CD, Git, npm
- 키워드: Semantic Versioning, 캐럿 범위, 사전 배포 버전, dist-tag, Changesets
- 길이: 658줄
- 소제목: 세 숫자에 담긴 약속 / 버전 문자열 한 줄 뜯어보기 / 사전 배포 버전은 어떤 순서로 줄을 서나 / 캐럿과 물결표가 실제로 여는 범위 / 0.x에서 캐럿은 한 칸 더 좁아진다 / 범위 안의 사전 배포 버전은 같은 줄에서만 / npm install은 범위에서 하나를 고른다 / dist-tag가 가리키는 곳 / 무엇이 깨지는 변경인가 / 버전 번호를 사람이 고르지 않게 / 현장에서 버전 때문에 깨지는 순간 / 숫자 세 개를 믿을 수 있게 만드는 것 / 면접에서 나올 만한 질문
- 직접 링크 →: dependency-hell, git-branching-strategy, api-versioning, helm-dependencies-oci-gitops
- 키워드 백링크 →: helm-basics
- 이 글로 오는 글 ←: dependency-hell, git-branching-strategy, git-features-map, helm-dependencies-oci-gitops

#### `yaml-for-k8s` — 쿠버네티스 YAML 함정: 노르웨이 문제부터 들여쓰기 오류까지

- 요약: COUNTRY: NO가 false로 바뀌어 API 서버에서 거절되는 일에서 출발해 YAML 1.1과 1.2의 타입 규칙, 8진수 파일 권한, 블록 스칼라 |와 >, 앵커와 병합 키, ---와 사라지는 문서, 들여쓰기 오류 메시지, JSON과의 관계를 PyYAML·Node yaml·kubectl·yamllint 실제 출력으로 확인한다.
- 태그: Kubernetes, YAML, DevOps, JSON, Troubleshooting
- 키워드: 노르웨이 문제, 블록 스칼라, YAML 앵커, yamllint
- 길이: 561줄
- 소제목: 따옴표가 없으면 파서가 타입을 고른다 / 쿠버네티스는 어느 규칙으로 읽나 / 8진수가 오히려 필요한 곳 / 직접 해 보기: 같은 글자, 다른 값 / 여러 줄 문자열: 막대와 꺾쇠 / 앵커와 별칭으로 같은 블록을 재사용한다 / 대시 세 개로 문서를 나눈다 / 들여쓰기 오류는 한 줄 앞을 가리킨다 / JSON은 YAML이다, 거의 / 매니페스트를 쓰기 전에 정해 둘 것 / 글자 모양이 타입을 정한다 / 면접에서 나올 만한 질문
- 직접 링크 →: helm-chart-templates, k8s-secret, helm-basics, kubectl-apply-ssa
- 키워드 백링크 →: k8s-architecture, github-actions-docker-ecr, k8s-project-structure, k8s-configmap, helm-dependencies-oci-gitops, grpc, js-truthy-falsy-typeof, linux-files-permissions, local-k8s-kind-minikube, db-type-key-value
- 이 글로 오는 글 ←: k8s-certifications, k8s-learning-roadmap, network-config-cicd

### Programming › Common › Git (`programming/common/git`)

#### `git-branch-merge` — 브랜치와 병합: 포인터 하나가 움직일 뿐

- 요약: 같은 git merge가 어떤 때는 Fast-forward로, 어떤 때는 병합 커밋으로 끝나는 이유에서 시작해 브랜치와 HEAD, switch와 detached HEAD, fast-forward와 3-way 병합, 브랜치 정리와 upstream을 보고, --first-parent와 --ancestry-path로 커밋이 어느 PR로 들어왔는지 찾는다.
- 태그: Git, DevOps
- 키워드: fast-forward, 3-way 병합, detached HEAD, merge base, first-parent
- 길이: 578줄
- 소제목: 브랜치는 커밋에 붙은 이름표다 / switch와 checkout은 무엇이 다른가 / HEAD가 브랜치를 떠나면 / fast-forward를 막거나 강제하기 / 곧게 이어지지 않으면 세 스냅샷을 비교한다 / 다 쓴 브랜치는 지운다 / 원격 브랜치와 얼마나 차이 나는지 / 현장에서 병합 히스토리를 읽는 순간 / 다시 정리하면 / 면접에서 나올 만한 질문
- 직접 링크 →: git-merge-conflict, git-internals-basics, git-staging-area, git-stash-reflog, git-branching-strategy, git-remote-collaboration
- 이 글로 오는 글 ←: backend-engineer-roadmap, claude-code-parallel-and-scheduled, git-branching-strategy, git-features-map, git-ignore-config, git-internals-basics, git-merge-conflict, git-rebase, git-remote-collaboration, git-repo-errors, git-stacked-prs, git-tips-advanced, git-troubleshooting, git-undo, sd-file-sync-conflicts

#### `git-branching-strategy` — 브랜치 전략: Git Flow, GitHub Flow, 트렁크 기반 개발

- 요약: develop에 덜 된 기능이 쌓인 릴리스 날에 운영 핫픽스를 어디서 고칠지에서 출발해 Git Flow, GitHub Flow, GitLab Flow, 트렁크 기반 개발을 비교한다. PR 머지 방식, Conventional Commits, SemVer 태그, 브랜치 보호 규칙까지 실제 명령으로 본다.
- 태그: Git, DevOps, Feature Flag
- 키워드: Git Flow, GitHub Flow, 트렁크 기반 개발, Conventional Commits, squash 머지
- 길이: 511줄
- 소제목: 전략이 정하는 것은 통합하는 때와 곳이다 / Git Flow는 브랜치를 역할별로 나눈다 / Git Flow로 핫픽스 내보내기 / 릴리스 브랜치의 수정은 cherry-pick으로 돌려보낸다 / GitHub Flow는 main 하나로 버틴다 / GitLab Flow는 환경마다 브랜치를 둔다 / 트렁크 기반 개발은 하루에도 여러 번 합친다 / 무엇을 고를지는 배포 주기가 정한다 / PR을 합치는 세 가지 버튼 / 커밋 메시지에 규칙을 둔다 / 버전 번호와 태그 / main을 지키는 규칙은 서버에 둔다 / 모노레포에서는 브랜치보다 경로가 경계다 / 처음 질문으로 돌아가면 / 면접에서 나올 만한 질문
- 직접 링크 →: git-branch-merge, git-remote-collaboration, git-tips-advanced, semantic-versioning
- 키워드 백링크 →: k8s-deploy-pipeline-eks, ab-testing, api-versioning
- 이 글로 오는 글 ←: ci-cd-basics, git-branch-merge, git-features-map, git-internals-basics, git-rebase, git-remote-collaboration, git-stacked-prs, git-tips-advanced, github-actions-docker-ecr, semantic-versioning

#### `git-features-map` — Git 기능 10가지: 커밋부터 stacked PR까지

- 요약: 매일 쓰는 Git 기능 열 가지를 손에 익는 순서대로 실제 명령 한 줄과 출력으로 짚고, 커밋 그래프 하나 위에서 각 기능이 무엇을 바꾸는지, 상황마다 어떤 기능을 꺼낼지 정리한다.
- 태그: Git, DevOps
- 키워드: Git 기능 10가지, Git 기능 지도
- 길이: 410줄
- 소제목: 열 가지 기능이 만지는 것은 그래프 하나다 / 처음 손에 익는 셋 / 팀에 들어가면 바로 쓰는 셋 / 배포를 시작하면 / 히스토리를 다듬게 되면 / 리뷰가 밀리기 시작하면 / 이럴 땐 이 기능 / 다시 그래프로 / 면접에서 나올 만한 질문
- 직접 링크 →: git-internals-basics, git-staging-area, git-branch-merge, git-merge-conflict, git-branching-strategy, git-remote-collaboration, git-stash-reflog, semantic-versioning, git-rebase, git-tips-advanced, git-stacked-prs, git-undo, git-troubleshooting
- 이 글로 오는 글 ←: git-stacked-prs

#### `git-ignore-config` — .gitignore와 git config: 무시 규칙, 세 겹 설정, 줄바꿈

- 요약: .gitignore가 이미 추적 중인 파일에 듣지 않는 이유와 패턴 규칙, system·global·local로 쌓이는 설정과 includeIf, core.autocrlf와 .gitattributes로 줄바꿈을 고정하는 법을 실제 출력으로 정리한다.
- 태그: Git, DevOps
- 키워드: .gitignore, includeIf, core.autocrlf
- 길이: 424줄
- 소제목: 올리지 않을 파일은 .gitignore로 / 설정은 세 겹으로 쌓인다 / 줄바꿈 문자가 diff 전체를 바꿀 때 / 현장에서 이 규칙들이 문제가 되는 순간 / 다시 정리하면 / 면접에서 나올 만한 질문
- 직접 링크 →: git-staging-area, git-undo, git-troubleshooting, git-branch-merge
- 키워드 백링크 →: db-modeling-normalization
- 이 글로 오는 글 ←: claude-code-project-structure, git-internals-basics, git-large-files-secrets, git-repo-errors, git-staging-area, git-troubleshooting, k8s-project-structure

#### `git-internals-basics` — Git은 무엇을 저장하나: 스냅샷과 객체

- 요약: squash 머지한 브랜치가 왜 안 합쳐졌다고 나오는지에서 시작해 blob·tree·commit·tag 객체를 직접 열어 보고, 해시가 내용에서 나오는 방식과 .git 폴더의 구성을 본다. tree 해시 비교, CI 캐시 키, git describe처럼 해시로 같은지 확인하는 실무 방법도 정리한다.
- 태그: Git, DevOps
- 키워드: blob 객체, 내용 주소 지정, packfile, annotated tag
- 길이: 575줄
- 소제목: 서버 하나에 모든 걸 맡기지 않으려고 / 변경분이 아니라 스냅샷을 찍는다 / 객체 네 가지를 직접 열어 본다 / 해시는 내용에서 나온다 / .git 폴더가 저장소의 전부다 / 현장에서 해시로 "같은가"를 확인하는 순간 / 다시 정리하면 / 면접에서 나올 만한 질문
- 직접 링크 →: git-staging-area, git-ignore-config, git-branch-merge, merkle-tree, git-troubleshooting, git-stash-reflog
- 키워드 백링크 →: github-actions-docker-ecr, git-tips-advanced, git-branching-strategy, git-large-files-secrets, sd-object-storage-architecture, build-caching
- 이 글로 오는 글 ←: build-caching, git-branch-merge, git-features-map, git-large-files-secrets, git-remote-collaboration, git-repo-errors, git-staging-area, merkle-tree, pattern-facade, pattern-flyweight, pattern-memento

#### `git-large-files-secrets` — 커밋에 들어가면 안 되는 것: 큰 파일, 비밀 값, 줄바꿈, 권한

- 요약: 지운 덤프 파일 때문에 푸시가 계속 거절되는 이유에서 시작해 git-filter-repo로 히스토리에서 빼는 법, 비밀 값이 올라갔을 때의 대응 순서, 계속 추적되는 파일, CRLF, 실행 권한, 대소문자만 바꾼 파일 이름을 증상별로 고친다.
- 태그: Git, DevOps
- 키워드: git-filter-repo, Git LFS, push protection
- 길이: 459줄
- 소제목: 큰 파일을 커밋해서 푸시가 안 된다 / 비밀 값이 든 .env를 커밋했다 / .gitignore에 적었는데 계속 추적된다 / 줄바꿈 때문에 파일 전체가 바뀌었다고 나온다 / 권한만 바뀐 파일이 diff에 나온다 / 대소문자만 바꾼 파일 이름이 반영되지 않는다 / 들어간 뒤보다 들어가기 전에 막는 편이 싸다 / 면접에서 나올 만한 질문
- 직접 링크 →: git-internals-basics, git-troubleshooting, git-undo, git-ignore-config
- 키워드 백링크 →: secrets-management, build-caching, linux-files-permissions, git-staging-area, db-modeling-normalization
- 이 글로 오는 글 ←: claude-code-project-structure, git-internals-basics, git-troubleshooting, git-undo, k8s-project-structure, secrets-management, terraform-basics

#### `git-merge-conflict` — 병합 충돌 풀기: 마커 읽기부터 rerere까지

- 요약: 두 사람이 같은 줄을 고쳐 멈춘 병합에서 시작해 충돌 마커와 zdiff3, 충돌 중 인덱스의 세 스테이지, 푸는 순서와 mergetool, 같은 충돌을 다시 풀지 않게 하는 rerere, 충돌을 덜 만드는 습관을 실제 출력으로 따라간다.
- 태그: Git, DevOps
- 키워드: 병합 충돌, rerere, zdiff3
- 길이: 524줄
- 소제목: 같은 줄을 둘이 고쳤을 때 / 충돌 중에 Git이 들고 있는 것 / 충돌을 푸는 순서 / 같은 충돌을 두 번 풀지 않게 / 충돌을 덜 만드는 습관 / 다시 정리하면 / 면접에서 나올 만한 질문
- 직접 링크 →: git-branch-merge, git-rebase
- 키워드 백링크 →: git-staging-area
- 이 글로 오는 글 ←: claude-code-parallel-and-scheduled, git-branch-merge, git-features-map, git-rebase, git-staging-area, git-tips-advanced, sd-file-sync-conflicts

#### `git-rebase` — rebase: 커밋을 다시 쓰는 일

- 요약: rebase가 커밋을 새 받침 위에 다시 만드는 과정을 보고, merge와의 트레이드오프, 충돌 처리, interactive rebase와 autosquash, --onto와 --update-refs, 공유 브랜치를 다시 썼을 때 생기는 일과 복구법까지 다룬다.
- 태그: Git, DevOps
- 키워드: interactive rebase, git rebase, autosquash, pull.rebase
- 길이: 791줄
- 소제목: rebase는 커밋을 새로 만든다 / merge로 할지 rebase로 할지 / 다시 적용하다 충돌이 나면 / 커밋을 고르고 합치고 고쳐 쓰기 / 고칠 커밋을 미리 표시해 두기 / 브랜치 일부만 다른 곳으로 / 쌓아 올린 브랜치를 한꺼번에 / pull할 때마다 생기는 병합 커밋 / 공유한 커밋은 다시 쓰지 않는다 / rebase를 잘못했을 때 / 병합 커밋까지 옮겨야 할 때 / 다시 정리하면 / 면접에서 나올 만한 질문
- 직접 링크 →: git-branch-merge, git-branching-strategy, git-merge-conflict, git-stacked-prs, git-remote-collaboration, git-stash-reflog, git-undo
- 키워드 백링크 →: git-tips-advanced, git-staging-area
- 이 글로 오는 글 ←: git-features-map, git-merge-conflict, git-remote-collaboration, git-stacked-prs, git-troubleshooting

#### `git-remote-collaboration` — 원격 저장소와 협업: fetch, pull, push

- 요약: 동료가 먼저 푸시해서 내 push가 거절되는 장면에서 시작해 origin/main의 정체, fetch와 pull의 차이, upstream, --force-with-lease와 --force-if-includes, 태그, PR과 포크 흐름, 큰 저장소를 빨리 받는 법까지 실제 출력으로 따라간다.
- 태그: Git, DevOps
- 키워드: force-with-lease, 원격 추적 브랜치, 얕은 clone, 부분 clone
- 길이: 860줄
- 소제목: 원격은 주소록에 적힌 다른 저장소다 / SSH 키로 GitHub에 붙기 / 원격 추적 브랜치는 마지막으로 본 원격의 사진이다 / fetch는 가져오기만, pull은 가져와서 합친다 / 갈라진 브랜치를 합치는 세 가지 방법 / upstream과 ahead, behind / 강제 푸시는 남의 커밋을 지운다 / 끝난 브랜치 지우고 정리하기 / 태그는 따로 밀어야 올라간다 / PR 한 건이 머지되기까지 / 포크에서 기여하기 / 리뷰를 주고받을 때 / 비밀번호 대신 토큰과 자격 증명 도우미 / 큰 저장소를 빨리 받기 / 다시 처음의 거절로 / 면접에서 나올 만한 질문
- 직접 링크 →: git-internals-basics, git-branch-merge, git-rebase, git-branching-strategy, git-troubleshooting
- 키워드 백링크 →: github-actions-docker-ecr, git-stash-reflog, token-login, what-happens-google-com
- 이 글로 오는 글 ←: backend-engineer-roadmap, claude-code-extensions, git-branch-merge, git-branching-strategy, git-features-map, git-rebase, git-repo-errors, git-stacked-prs, git-staging-area, git-troubleshooting

#### `git-repo-errors` — Git 저장소가 명령을 거부할 때: lock, ref, index, 소유권

- 요약: index.lock, cannot lock ref, index file corrupt, dubious ownership, 비어 있는 서브모듈, Author identity unknown처럼 .git 안의 파일 때문에 생기는 오류를 재현하고, 무엇을 지워도 되고 무엇은 지우면 안 되는지 정리한다.
- 태그: Git, DevOps
- 키워드: cannot lock ref, index.lock, dubious ownership
- 길이: 294줄
- 소제목: cannot lock ref 오류가 난다 / index.lock 파일이 있다며 아무것도 안 된다 / index file corrupt / not a git repository / 서브모듈 폴더가 비어 있다 / Author identity unknown / 지워도 되는 파일과 지우면 안 되는 파일 / 면접에서 나올 만한 질문
- 직접 링크 →: git-internals-basics, git-troubleshooting, git-tips-advanced, git-ignore-config
- 키워드 백링크 →: git-branch-merge, git-remote-collaboration
- 이 글로 오는 글 ←: git-troubleshooting

#### `git-stacked-prs` — stacked PR: 큰 기능을 작은 PR로 쌓아 올리기

- 요약: 1,800줄짜리 PR이 리뷰에서 멈춘 장면에서 시작해 기능을 의존하는 브랜치 세 층으로 나누고, base를 아래 브랜치로 거는 법, rebase --update-refs로 한 번에 다시 쌓는 법, 아래 PR이 squash로 합쳐진 뒤의 충돌을 --onto로 푸는 법, 합치는 순서와 층마다 도는 CI까지 실제 출력으로 따라간다.
- 태그: Git, DevOps
- 키워드: stacked PR, restack, git range-diff
- 길이: 638줄
- 소제목: 1,800줄짜리 PR이 멈추는 이유 / 브랜치를 세 층으로 쌓는다 / PR의 base를 아래 브랜치로 건다 / 아래 층을 고치면 위층이 옛 커밋에 매달린다 / 꼭대기에서 고치고 한 번에 정리하기 / main이 앞서 나가면 꼭대기에서 한 번 / 맨 아래 PR이 squash로 합쳐지면 / 합치는 순서와 층마다 도는 CI / 도구가 대신 해 주는 것 / 쌓지 않는 편이 나을 때 / 처음의 1,800줄로 돌아가면 / 면접에서 나올 만한 질문
- 직접 링크 →: git-rebase, git-branching-strategy, git-remote-collaboration, git-features-map, git-branch-merge, git-stash-reflog, git-tips-advanced
- 키워드 백링크 →: github-actions-docker-ecr
- 이 글로 오는 글 ←: git-features-map, git-rebase

#### `git-staging-area` — 작업 트리, 인덱스, HEAD: add와 commit 사이

- 요약: add한 뒤에 고친 한 줄이 왜 커밋에 안 들어가는지에서 시작해 세 구역과 git status의 두 글자, add -p, 히스토리를 읽는 log 옵션을 실제 출력으로 따라간다. pre-commit 훅이 작업 트리가 아니라 인덱스를 검사해야 하는 이유도 본다.
- 태그: Git, DevOps
- 키워드: 스테이징 영역, 작업 트리, git add -p
- 길이: 548줄
- 소제목: 파일은 세 구역을 오간다 / 파일의 상태는 두 글자로 읽는다 / 커밋하고 히스토리를 읽는 명령 / 커밋 직전에 인덱스를 보는 습관 / 다시 정리하면 / 면접에서 나올 만한 질문
- 직접 링크 →: git-internals-basics, git-remote-collaboration, git-ignore-config, git-tips-advanced
- 키워드 백링크 →: git-stash-reflog, git-merge-conflict
- 이 글로 오는 글 ←: backend-engineer-roadmap, git-branch-merge, git-features-map, git-ignore-config, git-internals-basics, git-large-files-secrets, git-merge-conflict, git-rebase, git-stash-reflog, git-troubleshooting, git-undo, pattern-facade, secrets-management

#### `git-stash-reflog` — 치워 두고 되찾기: stash, reflog, 잘못 둔 커밋

- 요약: reset --hard로 사라진 커밋을 reflog로 되찾는 데서 시작해 stash로 변경을 치워 두는 법, add만 한 파일을 fsck로 찾는 법, 엉뚱한 브랜치에 한 커밋을 옮기는 순서, 히스토리에서 지운 파일을 꺼내는 법을 정리한다.
- 태그: Git, DevOps
- 키워드: reflog, git stash, git fsck
- 길이: 451줄
- 소제목: 잠깐 치워 두기 / reset --hard 뒤에 사라진 커밋 찾기 / 엉뚱한 브랜치에 커밋했을 때 / 지운 파일을 히스토리에서 꺼내기 / 서랍과 생명줄의 한계 / 면접에서 나올 만한 질문
- 직접 링크 →: git-undo, git-troubleshooting
- 키워드 백링크 →: git-tips-advanced, git-staging-area
- 이 글로 오는 글 ←: git-branch-merge, git-features-map, git-internals-basics, git-rebase, git-remote-collaboration, git-stacked-prs, git-staging-area, git-troubleshooting, git-undo

#### `git-tips-advanced` — 알아 두면 편한 Git 기능: bisect, cherry-pick, worktree, hooks

- 요약: 200개 커밋 중 버그가 들어온 커밋을 bisect run으로 여덟 번 만에 찾고, cherry-pick, worktree, blame과 pickaxe, commit-msg 훅, .gitattributes, 서브모듈과 subtree, 커밋 서명, 켜 두면 편한 설정까지 실제 출력으로 본다.
- 태그: Git, DevOps
- 키워드: git bisect, cherry-pick, worktree, git blame, commit-msg 훅
- 길이: 895줄
- 소제목: 200개 커밋을 여덟 번 만에 좁힌다 / 테스트 스크립트로 bisect를 자동으로 돌린다 / 커밋 하나만 가져오는 cherry-pick / 브랜치를 바꾸지 않고 다른 폴더에서 일한다 / 이 줄은 누가 왜 바꿨나 / 코드가 생기고 사라진 커밋을 찾는다 / 저장소 안을 찾고 기여를 센다 / 커밋 전에 규칙을 검사하는 훅 / 파일마다 다른 규칙을 주는 .gitattributes / 서브모듈과 subtree / 저장소를 가볍게 유지하는 gc와 maintenance / 커밋에 서명하기 / 켜 두면 편한 설정과 별칭 / 도구를 꺼낼 때를 아는 것 / 면접에서 나올 만한 질문
- 직접 링크 →: git-branching-strategy, git-troubleshooting, claude-code-parallel-and-scheduled, git-merge-conflict
- 키워드 백링크 →: git-branch-merge, dockerfile-image-layers
- 이 글로 오는 글 ←: claude-code-fundamentals-map, claude-code-parallel-and-scheduled, claude-code-project-structure, git-branching-strategy, git-features-map, git-internals-basics, git-rebase, git-repo-errors, git-stacked-prs, git-staging-area, git-stash-reflog, git-troubleshooting

#### `git-troubleshooting` — Git 문제 해결: 푸시 거절부터 잃어버린 커밋까지

- 요약: push 거절, divergent branches, unrelated histories, 브랜치를 못 바꿀 때, stash pop 충돌, detached HEAD에서 잃은 커밋, 지운 브랜치, 끝나지 않은 rebase, 락파일 충돌까지 협업과 히스토리에서 만나는 Git 오류를 실제 메시지로 재현하고 원인과 해결, 예방법을 정리한다.
- 태그: Git, DevOps
- 키워드: unrelated histories, fetch first, divergent branches
- 길이: 521줄
- 소제목: 문제가 어디서 났는지부터 가른다 / 푸시가 fetch first로 거절된다 / pull이 divergent branches라며 멈춘다 / refusing to merge unrelated histories / 바꾼 파일이 덮어써진다며 브랜치를 못 바꾼다 / stash pop에서 충돌이 났다 / detached HEAD에서 만든 커밋이 사라졌다 / 브랜치를 실수로 지웠다 / 이미 푸시한 커밋 메시지가 틀렸다 / rebase가 끝나지 않은 채로 남아 있다 / pnpm-lock.yaml에서 충돌이 났다 / 오류를 만났을 때의 순서 / 면접에서 나올 만한 질문
- 직접 링크 →: git-large-files-secrets, git-repo-errors, git-undo, git-rebase, git-remote-collaboration, git-tips-advanced
- 키워드 백링크 →: git-branch-merge, git-ignore-config, dependency-hell, git-staging-area, git-stash-reflog
- 이 글로 오는 글 ←: git-features-map, git-ignore-config, git-internals-basics, git-large-files-secrets, git-remote-collaboration, git-repo-errors, git-stash-reflog, git-tips-advanced, git-undo

#### `git-undo` — 되돌리기: restore, reset, revert와 히스토리 속 비밀 값

- 요약: 실수가 작업 트리, 인덱스, 로컬 커밋, 푸시한 커밋 중 어디에 있는지로 restore, reset, revert를 고르고, 병합 revert의 함정과 revert로도 지워지지 않는 비밀 값을 filter-repo로 히스토리에서 빼는 과정까지 실제 출력으로 따라간다.
- 태그: Git, DevOps
- 키워드: git reset, git revert, git restore, git clean
- 길이: 587줄
- 소제목: 실수가 어디에 있는지부터 본다 / 파일에서 고친 것을 버린다 / add한 것을 내린다 / 방금 한 커밋을 고친다 / reset은 무엇을 어디까지 옮기나 / 푸시한 커밋은 반대 커밋으로 되돌린다 / 병합을 revert하면 다시 합칠 때 함정이 있다 / 비밀 값을 커밋했을 때 / 다시 정리하면 / 면접에서 나올 만한 질문
- 직접 링크 →: git-stash-reflog, git-staging-area, git-troubleshooting
- 키워드 백링크 →: git-large-files-secrets, git-branch-merge, secrets-management
- 이 글로 오는 글 ←: argocd-basics, backend-engineer-roadmap, git-features-map, git-ignore-config, git-large-files-secrets, git-rebase, git-stash-reflog, git-troubleshooting, gitops-argocd-vs-flux, helm-dependencies-oci-gitops, k8s-deploy-pipeline-eks, rollback-strategy

### Programming › Computer Science (`programming/computer-science`)

#### `backpressure` — 백프레셔: 받는 쪽이 느릴 때 보내는 쪽을 늦추기

- 요약: 생산자가 소비자보다 빠를 때 쌓이는 몫을 Node 스트림의 write()와 drain, pipeline()으로 막고, 신호를 무시하면 메모리가 얼마나 늘어나는지 잰다. 같은 원리가 TCP 수신 창, 상한 있는 대기열과 503, Reactive Streams의 request(n)에서 어떻게 반복되는지도 따라간다.
- 태그: Node.js, Performance, Backend, TCP/IP, Resilience
- 키워드: 백프레셔, highWaterMark, drain 이벤트, 부하 차단
- 길이: 360줄
- 소제목: 빠른 쪽과 느린 쪽 사이에서 고를 수 있는 것 / 버퍼만 두면 시간 문제다 / Node 스트림의 신호: write()가 false를 돌려준다 / 신호를 무시하면 얼마나 쌓이나 / pipeline()이 대신 해 주는 것 / 소켓 아래에서는 TCP가 같은 일을 한다 / 서비스 사이에서는 큐 길이로 말한다 / 당겨 가는 쪽이 양을 정한다: request(n) / 백프레셔가 빠진 시스템의 증상 / 가장 느린 곳이 속도를 정하게 둔다 / 면접에서 나올 만한 질문
- 직접 링크 →: autoscaling, tcp-reliability-congestion, rate-limiting-in-practice, retries, message-queue-basics, connection-pool
- 키워드 백링크 →: tail-latency, rabbitmq-basics, latency-bandwidth-throughput, http-versions, kafka-basics, sql-batch-timeout-pool, grpc
- 이 글로 오는 글 ←: api-scaling-ladder, autoscaling, connection-pool, ds-stack-queue-deque, fault-tolerance, http-streaming-sse, message-queue-basics, production-incidents, pub-sub, rate-limiting-algorithms, realtime-communication, resilience-patterns, retries, sd-mq-consumer-groups, tail-latency, websocket-deep-dive

#### `base64` — Base64는 왜 쓰고 어떻게 바뀌나

- 요약: 바이트를 3개씩 묶어 6비트 글자 4개로 바꾸는 Base64의 규칙과 패딩, base64url, 33% 늘어나는 크기를 직접 계산하며 본다. 암호화가 아니라서 Basic 인증과 JWT 페이로드가 누구에게나 읽힌다는 점도 짚는다.
- 태그: Encoding, HTTP, Browser, Security
- 키워드: Base64, base64url, data URL, Basic 인증
- 길이: 471줄
- 소제목: 글자만 다니는 길에 바이트를 실으려면 / 3바이트가 4글자가 되는 과정 / 모자란 바이트는 등호로 채운다 / 한글은 UTF-8 바이트부터 만든다 / 인코더를 직접 짜 보기 / 3분의 4만큼 커진다 / URL에 넣으면 더하기와 슬래시가 말썽이다 / 인코딩은 자물쇠가 아니다 / 브라우저의 btoa는 한글을 받지 못한다 / 터미널에서 base64 다루기 / data URL은 요청 하나를 아끼는 대신 / 다시 JSON 속 긴 문자열로 / 면접에서 나올 만한 질문
- 직접 링크 →: token-login, https-tls
- 키워드 백링크 →: packet-encapsulation, upper-layers-session-presentation-app, http-versions, what-happens-google-com
- 이 글로 오는 글 ←: api-pagination-sorting, eks-cluster-basics, external-secrets, html-form-http, http-message, jwt-key-rotation, k8s-secret, k8s-serviceaccount-tokens, realtime-communication, rest-api-design, sd-email-protocols, sd-url-shortener-key-generation, server-sent-events, token-login, upper-layers-session-presentation-app, websocket-deep-dive

#### `deadlocks` — 데드락: 서로 쥔 것을 기다리다 멈춘 프로그램

- 요약: CPU는 0%인데 요청이 끝나지 않는 데드락을 Go, Java, Python, Node로 직접 멈춰 보고, 고루틴 덤프와 jstack, py-spy로 서로 기다리는 지점을 읽는다. Coffman 네 조건, 락 순서와 tryLock 타임아웃, 라이브락과 기아, 락 하나로 멈추는 경우와 커넥션 풀 데드락까지 다룬다.
- 태그: Concurrency, Troubleshooting, PostgreSQL, Node.js, Linux
- 키워드: Coffman 조건, 락 순서, 라이브락, 스레드 덤프
- 길이: 534줄
- 소제목: CPU는 0%인데 요청이 끝나지 않는다 / 네 가지 조건이 모두 맞아야 멈춘다 / 계좌 이체로 직접 멈춰 보기 / 서버는 멈춰도 런타임이 알려 주지 않는다 / 스레드 덤프 읽기: 자바와 파이썬 / 대기 그래프에서 고리 찾기 / 언제나 같은 순서로 잠근다 / 기다리는 시간에 끝을 둔다 / 라이브락과 기아 / 락 하나로도 멈춘다 / 락이 아닌 자원도 고리를 만든다 / 멈춘 프로세스를 들여다보는 순서 / 면접에서 나올 만한 질문
- 직접 링크 →: db-locking-deadlock, race-conditions, thread-safety, exponential-backoff-jitter, connection-pool, timeouts, pessimistic-locking
- 키워드 백링크 →: k8s-pod-probes, java-jvm-memory-gc, event-loop, osi-in-practice, sql-batch-timeout-pool, go-concurrency-basics
- 이 글로 오는 글 ←: db-locking-deadlock, go-concurrency-basics, java-jvm-memory-gc, mysql-innodb-basics, race-conditions, sd-mq-consumer-groups, thread-safety, timeouts

#### `garbage-collection` — 가비지 컬렉션 안쪽: 세대, 멈춤, 그리고 컨테이너 메모리 한도

- 요약: 참조 카운팅과 추적 GC의 차이, V8의 Scavenge와 Mark-Compact를 --trace-gc 로그로 읽고, 힙 한도와 컨테이너 한도가 어긋나면 왜 로그 없이 OOMKilled가 되는지 cgroup으로 재현한다. GC 멈춤이 꼬리 지연으로 나타나는 모습과 JVM G1·ZGC, Go의 GOGC·GOMEMLIMIT도 실제 로그로 비교한다.
- 태그: Performance, Node.js, JavaScript, Troubleshooting, Kubernetes
- 키워드: 세대별 가설, 참조 카운팅, 스캐빈지, GOMEMLIMIT, --max-old-space-size
- 길이: 484줄
- 소제목: 쓰레기를 찾는 두 가지 방법 / 참조 카운팅은 즉시 치우지만 고리를 못 본다 / 표시하고 쓸고, 필요하면 모은다 / 대부분 금방 죽는다는 내기 / --trace-gc 로그 한 줄 읽기 / 힙이 한도에 닿으면 / 힙 한도와 컨테이너 한도는 따로 논다 / 멈춤은 평균이 아니라 꼬리에 나타난다 / JVM의 G1과 ZGC / Go에는 손잡이가 둘 있다 / 메모리가 이상할 때 보는 순서 / 치우는 비용은 결국 누가 내나 / 면접에서 나올 만한 질문
- 직접 링크 →: js-memory-leak, k8s-pod-resources, tail-latency
- 키워드 백링크 →: helm-basics, java-jvm-memory-gc, event-loop, sql-batch-timeout-pool, layer-mtu-fragmentation
- 이 글로 오는 글 ←: autoscaling, ds-linked-list, go-concurrency-basics, java-jvm-memory-gc, javascript-roadmap, js-closures, js-memoization, js-memory-leak, k8s-in-place-resize, linux-namespaces-cgroups, scaling-horizontal-vertical, sd-stock-exchange-low-latency, tail-latency

#### `race-conditions` — 경쟁 상태: 확인과 행동 사이에 끼어드는 다른 요청

- 요약: 쿠폰이 두 번 쓰이고 조회수가 덜 오르는 경쟁 상태를 읽고 고치고 쓰기, 확인하고 행동하기, 파일의 TOCTOU로 나눠 직접 재현한다. 싱글 스레드 자바스크립트의 await 틈, 워커 스레드와 Atomics, DB의 갱신 손실, Go 레이스 디텍터로 찾는 법과 고치는 방법을 고르는 기준까지 정리한다.
- 태그: Concurrency, Node.js, JavaScript, PostgreSQL, Linux, Troubleshooting
- 키워드: 경쟁 상태, TOCTOU, check-then-act, read-modify-write
- 길이: 492줄
- 소제목: 쿠폰이 두 번 쓰였다 / 결과가 실행 순서에 달려 있으면 / 읽고 더하고 쓰는 세 걸음 (read-modify-write) / 확인한 사실은 행동할 때 이미 낡았다 (check-then-act) / 파일 시스템의 TOCTOU / 스레드가 하나인 자바스크립트에서도 생긴다 / 워커 스레드가 같은 메모리를 만질 때 / DB에서는 갱신 손실로 나타난다 / 경쟁 상태를 찾아내는 법 / 틈을 없애는 방법 고르기 / 현장에서 경쟁 상태를 의심하는 순간 / 면접에서 나올 만한 질문
- 직접 링크 →: deadlocks, thread-safety, pessimistic-locking, distributed-lock, cron-jobs, event-loop, browser-fetch, idempotency-key, optimistic-locking, db-transaction-isolation
- 키워드 백링크 →: postgres-advanced-sql, sd-start-single-server, db-locking-deadlock, sql-batch-timeout-pool, redis-basics, resilience-patterns, go-concurrency-basics, http-methods
- 이 글로 오는 글 ←: browser-fetch, deadlocks, go-concurrency-basics, k8s-coredns, nginx-reverse-proxy, nodejs-server-runtime, postgres-data-types, sd-hotel-double-booking, sd-interview-framework, sd-rate-limiter-design, ssrf, thread-safety

#### `thread-safety` — 스레드 안전: 같이 써도 깨지지 않는 코드

- 요약: Go 맵의 concurrent map writes, 자바 HashMap의 사라지는 키, volatile 없이 멈추지 않는 스레드, x86에서 실제로 바뀌는 메모리 순서를 직접 보고 happens-before로 정리한다. 한정·불변·원자적 연산·락 네 가지 길, 언어별 스레드 안전 컬렉션, DB 연결 객체를 요청끼리 나누면 생기는 사고까지 다룬다.
- 태그: Concurrency, JavaScript, Node.js, PostgreSQL, Troubleshooting
- 키워드: 스레드 안전, 데이터 경합, happens-before, 메모리 가시성
- 길이: 430줄
- 소제목: 혼자 돌릴 때는 멀쩡하던 세션 맵 / 스레드 안전하다는 말의 범위 / 데이터 경합과 경쟁 상태는 다르다 / 쓴 값이 다른 스레드에 안 보인다 / 순서도 바뀐다 / happens-before가 약속하는 것 / 안전하게 만드는 네 가지 길 / 스레드 안전한 컬렉션 고르기 / 자바스크립트의 스레드는 복사하거나, 나누고 Atomics로 / 연결 객체는 같이 쓰지 않는다 / 현장에서 스레드 안전 문제를 만났을 때 / 면접에서 나올 만한 질문
- 직접 링크 →: race-conditions, deadlocks, event-loop, connection-pool
- 키워드 백링크 →: ds-linked-list, consistency-models, go-concurrency-basics, acid-transactions
- 이 글로 오는 글 ←: consistency-models, deadlocks, ds-linked-list, go-concurrency-basics, nodejs-server-runtime, pattern-singleton, race-conditions

### Programming › Database (`programming/database`)

#### `acid-vs-base` — ACID와 BASE: 저장소마다 다른 트랜잭션의 약속

- 요약: Redis의 MULTI/EXEC는 롤백하지 않고, Cassandra의 조건부 쓰기는 왕복 네 번이 든다. 노드가 여러 대이거나 NoSQL로 가면 ACID의 네 글자가 각각 어떻게 바뀌는지, 비는 글자를 앱이 어떻게 메우는지 본다.
- 태그: Database, Redis, MongoDB, Transaction, System Design
- 키워드: BASE 모델, 경량 트랜잭션, EXECABORT, 다중 문서 트랜잭션
- 길이: 546줄
- 소제목: 같은 실패를 PostgreSQL에 넣으면 / Redis가 약속하는 것은 끼어들지 않는다는 것뿐 / 읽고 판단하는 일은 WATCH가 맡는다 / OK를 받았어도 디스크에는 없을 수 있다 / 노드가 여러 대면 글자마다 값이 붙는다 / BASE는 보장이 아니라 설계 태도다 / MongoDB는 문서 하나가 기본 단위다 / DynamoDB와 Cassandra는 조건을 걸고 쓴다 / 분산 SQL은 네 글자를 지키고 왕복으로 값을 치른다 / 비는 글자를 앱이 메우는 방법 / 직접 짜 보기: 두 가지 EXEC / 저장소를 옮기기 전에 확인할 것 / 트랜잭션이라는 같은 단어 / 면접에서 나올 만한 질문
- 직접 링크 →: acid-transactions, db-transaction-isolation, db-consistency-cap, eventual-consistency, redis-basics, optimistic-locking, redis-persistence-ha, distributed-transactions-2pc, mongodb-document-model, db-type-newsql, saga-pattern, transactional-outbox, idempotency-key
- 키워드 백링크 →: redis-cluster, db-type-wide-column, db-type-key-value, sd-start-single-server, db-type-relational, http-methods
- 이 글로 오는 글 ←: acid-transactions, consistency-models, db-consistency-cap, db-type-wide-column, mongodb-document-model, sql-vs-nosql

#### `db-partitioning` — 파티셔닝: 큰 테이블을 달마다 나누기

- 요약: 주문 테이블을 created_at 범위로 나누고 파티션 가지치기가 어떤 쿼리에서 되고 안 되는지 실행 계획으로 확인한다. 오래된 달을 DELETE 대신 DETACH와 DROP으로 버리고, default 파티션 함정과 LIST·HASH 파티션, 고유 제약 규칙까지 다룬다.
- 태그: Database, PostgreSQL, Scalability, Performance
- 키워드: 파티셔닝, 파티션 가지치기, default 파티션
- 길이: 462줄
- 소제목: 주문 테이블을 달마다 나눈다 / 조건에 맞는 파티션만 읽는다 / 오래된 달은 통째로 떼어 낸다 / 목록과 해시로도 나눈다 / 파티션 키가 쿼리에 들어가야 한다 / 면접에서 나올 만한 질문
- 직접 링크 →: db-replication-sharding, db-sharding
- 키워드 백링크 →: mysql-innodb-basics, sd-start-single-server, sd-mq-storage-partitions
- 이 글로 오는 글 ←: api-scaling-ladder, cache-write-policies, db-architecture-by-scale, db-keys-denormalization, db-performance-map, db-replication-sharding, db-sharding, db-type-relational, db-type-time-series, db-type-wide-column, sd-email-storage-search, sd-kv-store-partition-replication, sd-sharding-intro, system-design-study-path, tail-latency

#### `db-performance-map` — DB를 빠르게 만드는 8가지: 인덱스부터 샤딩까지 꺼내는 순서

- 요약: 주문 테이블 하나가 자라는 순서대로 인덱스, B-tree, 커넥션 풀, 캐시, 복제, 파티셔닝, 블룸 필터, 샤딩을 꺼낸다. 각각 무엇을 풀고 무엇을 새로 떠안는지 PostgreSQL 16에서 잰 숫자로 보고, 깊은 내용은 주제별 글로 넘긴다.
- 태그: Database, PostgreSQL, Performance, Index, Scalability
- 키워드: DB 성능 지도, DB 최적화 순서
- 길이: 465줄
- 소제목: 주문 200만 건에서 회원 한 명 찾기 / 1. 인덱스: 읽을 범위를 좁힌다 / 2. B-tree: 200만 건에서 세 페이지만 내려간다 / 3. 커넥션 풀: 연결을 미리 열어 두고 돌려 쓴다 / 4. 캐시: 같은 답을 다시 계산하지 않는다 / 5. 복제: 읽기를 여러 대로 나눈다 / 6. 파티셔닝: 한 DB 안에서 테이블을 범위로 쪼갠다 / 7. 블룸 필터: 없는 것은 DB에 묻지 않는다 / 8. 샤딩: 데이터를 여러 DB 서버에 나눠 담는다 / 순서를 건너뛰면 생기는 일 / 면접에서 나올 만한 질문
- 직접 링크 →: db-index, db-index-design, connection-pool, caching-strategies, db-replication-sharding, db-partitioning, bloom-filter, db-sharding, db-architecture-by-scale, db-index-pitfalls, caching-concepts-map, sd-db-replication-intro, sd-sharding-intro, sql-query-tuning, postgres-architecture
- 키워드 백링크 →: postgres-connections-pg-hba, mysql-innodb-basics, sd-payment-flow, sd-start-single-server, sd-mq-storage-partitions, sql-batch-timeout-pool, redis-basics, mongodb-document-model, dns, webhooks

#### `db-replication-sharding` — DB 한 대로 버티지 못할 때: 복제와 복제 지연

- 요약: 읽기가 몰리면 WAL을 받아 재생하는 복제본으로 나눈다. PostgreSQL 16에서 스탠바이를 붙이고, 방금 쓴 주문이 안 보이는 복제 지연을 재현해 LSN으로 막고, 동기 복제와 복제본 쿼리 취소, 장애 조치와 split-brain까지 정리한다. 파티셔닝과 샤딩으로 넘어갈 신호도 함께 본다.
- 태그: Database, PostgreSQL, Distributed Systems, Scalability, System Design
- 키워드: 읽기 복제본, 스트리밍 복제, 복제 지연, 복제 슬롯
- 길이: 553줄
- 소제목: 실험에 쓸 두 테이블 / 나누기 전에 한 대부터 키운다 / 복제본은 WAL을 받아 다시 실행한다 / 스탠바이를 하나 붙여 보기 / 방금 결제한 주문이 안 보인다 / 쓴 사람에게는 쓴 것을 보여 준다 / 동기 복제는 어디까지 기다리나 / 복제본에서 긴 쿼리가 끊긴다 / MySQL은 binlog로 복제한다 / 프라이머리가 죽으면 누가 이어받나 / 언제 다음 단계로 넘어가나 / 복제는 읽기를 나누고, 늦을 수 있다 / 면접에서 나올 만한 질문
- 직접 링크 →: db-partitioning, db-sharding, db-index, sql-query-tuning, caching-strategies, mysql-replication-online-ddl, failover
- 키워드 백링크 →: db-consistency-cap, prometheus-basics, db-architecture-by-scale, mysql-innodb-basics, sd-start-single-server, sd-mq-storage-partitions, scaling-horizontal-vertical, sql-batch-timeout-pool, db-type-key-value, disaster-recovery, postgres-architecture, dns
- 이 글로 오는 글 ←: acid-transactions, api-scaling-ladder, autoscaling, backend-engineer-roadmap, cache-invalidation, caching-strategies, connection-pool, consistency-models, cqrs, db-architecture-by-scale, db-consistency-cap, db-index-pitfalls, db-partitioning, db-performance-map, db-sharding, db-type-columnar-olap, db-type-newsql, db-type-relational, db-type-time-series, db-type-wide-column, disaster-recovery, event-driven-architecture, eventual-consistency, failover, mongodb-document-model, monolith-architecture, multi-region, mysql-replication-online-ddl, network-partitions, postgres-architecture, postgres-mvcc-vacuum, postgres-operations, saga-pattern, scaling-horizontal-vertical, sd-db-replication-intro, sd-mq-replication, sd-object-storage-architecture, sd-payment-reliability, sd-start-single-server, sd-url-shortener-api-redirect, sql-case-when, sql-vs-nosql, system-design-concepts-map, system-design-study-path, transactional-outbox, zero-downtime-migrations

#### `db-sharding` — 샤딩: 데이터를 서버 여러 대에 나눠 담기

- 요약: 쓰기와 데이터가 서버 한 대를 넘을 때 샤드 키를 고르고, 일관된 해싱과 가상 노드로 샤드를 늘려도 조금만 옮기는 법을 직접 계산해 본다. 샤드를 넘는 쿼리와 트랜잭션, 전역 ID(UUIDv7, Snowflake), 재분배, 지금 데이터로 샤드 키 분포를 미리 재 보는 방법도 정리한다.
- 태그: Database, Distributed Systems, Scalability, System Design
- 키워드: 일관된 해싱, Snowflake, UUIDv7
- 길이: 312줄
- 소제목: 서버 여러 대에 나눠 담는다 / 샤드를 늘려도 조금만 옮기는 해시 / 샤드를 넘나드는 쿼리는 비싸다 / 주문 번호는 누가 만드나 / 샤드를 다시 나누는 일 / 읽기 모양을 따로 만들어 두기 / 샤드 키를 정하기 전에 지금 데이터로 재 본다 / 샤딩은 마지막 카드다 / 면접에서 나올 만한 질문
- 직접 링크 →: db-replication-sharding, db-partitioning, microservices, mongodb-document-model, db-architecture-by-scale, db-index
- 키워드 백링크 →: sd-sharding-intro, redis-cluster, db-type-newsql, db-type-wide-column, db-type-key-value, sd-start-single-server, distributed-transactions-2pc, transactional-outbox, cqrs, scaling-horizontal-vertical, redis-basics, high-availability
- 이 글로 오는 글 ←: api-scaling-ladder, autoscaling, consistent-hashing, db-architecture-by-scale, db-index, db-keys-denormalization, db-partitioning, db-performance-map, db-replication-sharding, db-type-columnar-olap, db-type-wide-column, ds-hash-map, multi-region, scaling-horizontal-vertical, sd-chat-message-storage, sd-kv-store-partition-replication, sd-news-feed-publishing, sd-news-feed-retrieval, sd-object-storage-versioning-multipart, sd-sharding-intro, sd-unique-id-generator, sd-url-shortener-key-generation, sd-web-crawler-architecture, sql-logical-order, sql-vs-nosql, system-design-concepts-map, system-design-study-path, vpc-peering-transit-privatelink

#### `elasticsearch-inverted-index` — 검색 엔진은 왜 빠른가: Elasticsearch와 역색인

- 요약: LIKE 검색이 느린 이유에서 출발해 분석기, 역색인, BM25 점수, refresh와 세그먼트, 샤드 구성을 따라간다. 쇼핑몰 검색에서 부딪히는 동의어·오타·패싯·깊은 페이지와 DB 동기화도 다룬다.
- 태그: coupang, tesla, Elasticsearch, Search, Database · 회사: coupang, tesla
- 키워드: Elasticsearch, 역색인, BM25, 형태소 분석기, search_after
- 길이: 485줄
- 소제목: LIKE가 느린 이유 / 찾아보기에 올릴 단어 고르기: 분석기 / 찾아보기를 만드는 과정 / 무엇을 먼저 보여 줄까: BM25 / 점수가 필요 없는 조건은 filter로 / text와 keyword는 다른 필드다 / 방금 넣은 상품이 검색에 안 나온다 / 샤드와 레플리카 / 쇼핑몰 검색에서 부딪히는 것들 / 깊은 페이지는 from으로 가지 않는다 / 원본은 DB에, 검색은 Elasticsearch에 / 클러스터가 yellow나 red로 바뀌면 / 다시 찾아보기로 / 면접에서 나올 만한 질문
- 직접 링크 →: vector-db, opensearch-cluster-operations
- 키워드 백링크 →: db-index, rag-retrieval-quality, mongodb-document-model, loading-patterns, global-rollout-localization, transactional-outbox, kafka-basics, db-modeling-normalization
- 이 글로 오는 글 ←: api-pagination-sorting, centralized-logging-pipeline, cqrs, db-architecture-by-scale, db-types-overview, http-methods, http-streaming-sse, network-partitions, opensearch-cluster-operations, ports-and-sockets, postgres-jsonb-search, rag-retrieval-quality, sd-autocomplete-trie, sd-email-storage-search, sd-music-streaming, sd-queue-logging-automation, structured-logging

#### `mongodb-document-model` — MongoDB 문서 모델: 넣을까, 가리킬까

- 요약: 주문 하나를 문서 하나로 저장하는 문서 모델에서 내장과 참조를 고르는 기준을 정리했다. 스키마 검증, ESR 인덱스, 트랜잭션, write concern, 샤드 키, 집계 파이프라인까지 다룬다.
- 태그: coupang, MongoDB, NoSQL, Database · 회사: coupang
- 키워드: MongoDB, ESR 규칙, 샤드 키, write concern, 집계 파이프라인
- 길이: 471줄
- 소제목: 주문 하나가 문서 하나 / 넣을까, 가리킬까 / 스키마가 없다는 건 검사도 내가 한다는 뜻 / 인덱스 필드 순서는 ESR / 문서 하나는 원자적이다 / 쓰기가 끝났다는 건 어디까지인가 / 샤드 키 하나가 클러스터 모양을 정한다 / 모아서 계산하기: 집계 파이프라인 / 느린 쿼리 로그에 COLLSCAN이 보이면 / 결국 읽는 모양에서 출발한다 / 면접에서 나올 만한 질문
- 키워드 백링크 →: sd-sharding-intro, acid-vs-base, sd-start-single-server, distributed-transactions-2pc, db-index-design, db-type-relational, db-replication-sharding, db-modeling-normalization
- 이 글로 오는 글 ←: acid-transactions, acid-vs-base, api-scaling-ladder, consistency-models, db-architecture-by-scale, db-consistency-cap, db-performance-map, db-sharding, db-type-relational, db-types-overview, elasticsearch-inverted-index, eventual-consistency, geohash, network-partitions, optimistic-locking, pattern-interpreter, sd-hotel-inventory-scaling, sd-music-streaming, sd-split-web-and-db, sql-vs-nosql, system-design-concepts-map, system-design-study-path

#### `opensearch-cluster-operations` — OpenSearch 클러스터 운영: 샤드 배치, 롤오버, ISM, 노드 장애

- 요약: 로그를 쌓는 OpenSearch 클러스터를 3노드로 띄워 노드 역할과 과반수, 샤드 수 정하기, 매핑 폭발과 flat_object, 롤오버와 ISM, 노드가 빠졌을 때의 복구와 재시작 순서, 힙과 서킷 브레이커를 실제 출력으로 따라간다.
- 태그: tesla, Elasticsearch, Search, Database, DevOps, Troubleshooting · 회사: tesla
- 키워드: OpenSearch, ISM 정책, flat_object, dedicated cluster manager
- 길이: 659줄
- 소제목: 노드마다 맡은 역할 / 프라이머리 샤드 수는 크기로 정한다 / 매핑은 처음에 닫아 둔다 / 크기로 넘기는 롤오버와 ISM / 노드 하나가 빠졌을 때 / 로그 질의는 filter로 범위부터 / 힙과 서킷 브레이커 / 클러스터가 이상할 때 묻는 순서 / 다시 503 앞에서 / 면접에서 나올 만한 질문
- 직접 링크 →: elasticsearch-inverted-index, centralized-logging-pipeline
- 키워드 백링크 →: k8s-pod-disruption-budget, k8s-statefulset, sd-mq-storage-partitions, resilience-patterns, sd-object-storage-architecture, db-types-overview, http-status-codes
- 이 글로 오는 글 ←: centralized-logging-pipeline, cloud-cost-optimization, db-architecture-by-scale, elasticsearch-inverted-index, postgres-jsonb-search

#### `vector-db` — 벡터 DB, 뜻이 가까운 것을 찾는 데이터베이스

- 요약: 글자가 아니라 뜻으로 검색한다는 게 무슨 뜻일까. 임베딩, 코사인 유사도, HNSW 그래프 탐색, RAG까지 그림으로 따라가 봤다.
- 태그: VectorDB, Embedding, AI, Search
- 키워드: 벡터 DB, 임베딩, HNSW
- 길이: 369줄
- 소제목: 뜻을 좌표로 바꾸기 / 가깝다는 건 어떻게 재나 / 하나하나 다 재면 느리다 / 지름길이 있는 그래프, HNSW / 정확도와 속도를 맞바꾸는 손잡이 / HNSW 말고 다른 인덱스 / 실제로는 어디에 쓰나: RAG / 직접 붙여 볼 때 / pgvector를 붙였는데 결과가 이상할 때 / 정리 / 면접에서 나올 만한 질문
- 키워드 백링크 →: rag-retrieval-quality, pythagorean-theorem, db-index-design, rag-classic-pipeline, db-modeling-normalization
- 이 글로 오는 글 ←: agentic-rag, db-architecture-by-scale, db-types-overview, elasticsearch-inverted-index, graph-rag, pythagorean-theorem, rag-classic-pipeline, rag-patterns-overview, rag-retrieval-quality, sd-music-streaming

### Programming › Database › DB Types (`programming/database/db-types`)

#### `db-consistency-cap` — CAP과 PACELC로 DB 종류 비교하기

- 요약: 네트워크가 끊겼을 때와 멀쩡할 때 각각 무엇을 포기하는지 CAP과 PACELC로 정리한다. 선형화부터 최종 일관성까지의 단계, 쿼럼과 충돌 해결, DB마다 서 있는 자리와 설정으로 그 자리가 바뀌는 방법을 본다.
- 태그: Database, Distributed Systems, System Design, NoSQL
- 키워드: CAP 정리, PACELC, 선형화 가능성, 최종 일관성, read-your-writes
- 길이: 310줄
- 소제목: 끊긴 회선 앞에서 고르는 두 가지 / CAP이 말하지 않는 것 / 회선이 멀쩡해도 고르는 것 / 일관성은 켜고 끄는 게 아니라 사다리다 / 쿼럼으로 일관성을 고르는 DB / AP를 고르면 충돌을 누가 푸나 / DB 종류마다 서 있는 자리 / 데이터마다 얼마나 틀려도 되는지 정한다 / 면접에서 나올 만한 질문
- 직접 링크 →: db-types-overview, db-transaction-isolation, db-type-newsql, db-replication-sharding, consistency-models, eventual-consistency, db-type-wide-column, redis-replication-sentinel
- 키워드 백링크 →: db-type-key-value, acid-vs-base, network-partitions, mongodb-document-model, sd-kv-store-versioning, leader-election, redis-basics, acid-transactions, crdt
- 이 글로 오는 글 ←: acid-transactions, acid-vs-base, cache-write-policies, clock-skew, consistency-models, crdt, db-replication-sharding, db-type-embedded, db-type-key-value, db-type-newsql, db-type-wide-column, db-types-overview, eventual-consistency, network-partitions, raft-consensus, sd-db-replication-intro, sd-email-storage-search, sd-kv-store-partition-replication, sql-vs-nosql, system-design-concepts-map

#### `db-type-columnar-olap` — 컬럼형 분석 DB: OLTP와 OLAP을 나누는 이유

- 요약: 같은 주문 500만 건의 매출 쿼리가 PostgreSQL과 DuckDB에서 열 배 넘게 차이 나는 이유를 컬럼 저장, 압축, 벡터화 실행, 건너뛰기로 따라간다. ClickHouse와 BigQuery의 쓰임새, 운영 DB에서 CDC로 옮기는 길도 다룬다.
- 태그: Database, Performance, System Design, PostgreSQL
- 키워드: 컬럼형 저장, OLAP, ClickHouse, DuckDB, 변경 데이터 캡처
- 길이: 485줄
- 소제목: 주문을 받는 질문과 매출을 보는 질문 / 실험에 쓸 주문 500만 건 / 행으로 저장하면 안 쓰는 컬럼도 읽는다 / 같은 컬럼끼리 모이면 잘 눌린다 / 한 번에 값 하나가 아니라 묶음으로 계산한다 / 건너뛸 수 있는 덩어리는 아예 열지 않는다 / ClickHouse 테이블은 정렬 키부터 정한다 / 분석 DB가 잘 못 하는 것 / 클라우드 데이터 웨어하우스와 DuckDB / 운영 DB에서 분석 DB로 옮기는 길 / 컬럼형을 고르기 전에 / 읽는 방향에 맞춰 놓는다 / 면접에서 나올 만한 질문
- 직접 링크 →: db-types-overview, db-type-relational, db-type-time-series, db-type-embedded, db-architecture-by-scale, db-type-newsql
- 키워드 백링크 →: postgres-reporting-sql, db-sharding, mysql-innodb-basics, kafka-basics, db-replication-sharding, acid-transactions, db-index-design
- 이 글로 오는 글 ←: caching-strategies, db-architecture-by-scale, db-type-embedded, db-type-newsql, db-type-relational, db-type-time-series, db-type-wide-column, db-types-overview, microservices, microservices-decomposition, saga-pattern, sd-ad-click-stream-windows, sd-hotel-inventory-scaling, sql-logical-order, sql-vs-nosql

#### `db-type-embedded` — 임베디드 DB: SQLite, RocksDB처럼 앱 안에 들어가는 DB

- 요약: 서버 없이 앱 프로세스 안에서 파일을 직접 읽고 쓰는 임베디드 DB를 SQLite로 직접 돌려 본다. 타입과 외래 키의 함정, 쓰기 하나뿐인 규칙과 WAL 모드, 커밋 묶기, RocksDB가 다른 DB 밑에서 하는 일까지 다룬다.
- 태그: Database, SQL, Performance
- 키워드: 임베디드 DB, SQLite, RocksDB, WAL 모드
- 길이: 424줄
- 소제목: 서버 없이 라이브러리로 돈다 / 장바구니를 SQLite에 담아 보기 / 타입을 적어도 검사하지 않는다 / 쓰는 사람은 한 번에 하나 / WAL 모드에서는 변경을 옆 파일에 쌓는다 / 커밋은 모아서 한다 / 연결을 열 때마다 거는 설정 / SQLite가 들어가 있는 곳 / RocksDB는 다른 DB 밑에 들어간다 / 서버 DB와 나눠 맡기 / 서버를 빼고 남는 것 / 면접에서 나올 만한 질문
- 직접 링크 →: db-types-overview, db-type-wide-column, db-type-newsql, db-type-columnar-olap, db-consistency-cap
- 키워드 백링크 →: sql-insert-update-delete, mysql-innodb-basics, sd-start-single-server, sqld-window-functions, api-versioning, kafka-basics, db-index-pitfalls, postgres-architecture
- 이 글로 오는 글 ←: bloom-filter, db-type-columnar-olap, db-type-key-value, db-types-overview, hexagonal-architecture, local-k8s-kind-minikube, sd-ad-click-exactly-once, sd-kv-store-write-read-path, sd-object-storage-architecture, sd-object-storage-versioning-multipart, sd-wallet-event-sourcing, test-pyramid-unit-tests

#### `db-type-graph` — 그래프 DB: 관계를 따라가는 질의

- 요약: 친구의 친구가 산 책을 추천하는 질문을 Neo4j Cypher와 PostgreSQL 재귀 CTE로 나란히 풀어 본다. index-free adjacency, 단계가 늘 때 폭발하는 탐색 범위, 그래프 DB가 맞는 곳과 확장의 어려움을 정리한다.
- 태그: Database, NoSQL, Algorithm, System Design
- 키워드: 그래프 DB, Neo4j, Cypher, index-free adjacency
- 길이: 429줄
- 소제목: 친구의 친구가 산 책 / 점과 선으로 저장하기 / Cypher로 그림 그리듯 묻기 / 관계형에서 같은 질문을 하면 / 단계가 늘면 닿는 사람이 폭발한다 / 이웃을 바로 찾아가는 구조 / 너비 우선으로 따라가 보기 / 그래프 DB가 맞는 곳과 아닌 곳 / 관계형 DB와 함께 쓰기 / 관계를 저장하면 질문이 짧아진다 / 면접에서 나올 만한 질문
- 직접 링크 →: db-type-wide-column, sqld-top-n-hierarchical-pivot, db-type-time-series
- 키워드 백링크 →: db-index, ds-graph-bfs-dfs, graph-rag, sd-start-single-server, db-type-relational
- 이 글로 오는 글 ←: db-architecture-by-scale, db-type-relational, db-type-wide-column, db-types-overview, ds-graph-bfs-dfs, graph-rag, sd-maps-tiles-routing, sd-news-feed-publishing, sd-split-web-and-db, sql-vs-nosql

#### `db-type-key-value` — 키-값 저장소: Redis, DynamoDB, etcd

- 요약: 키 하나로 넣고 꺼내는 단순한 모델이 왜 빠르고 잘 늘어나는지 보고, 메모리의 Redis, 파티션으로 나누는 DynamoDB, Raft로 지키는 etcd를 같은 서점 예제로 비교한다. 핫 파티션과 단일 테이블 설계도 다룬다.
- 태그: Database, NoSQL, Redis, Distributed Systems, Scalability
- 키워드: 키-값 저장소, DynamoDB, etcd, 핫 파티션, 단일 테이블 설계
- 길이: 460줄
- 소제목: 열쇠 하나로 상자 하나 / 메모리에 두느냐, 디스크에 두느냐 / 키를 해시해서 파티션을 고른다 / 파티션 키와 정렬 키 / DynamoDB에서 알아 둘 숫자와 설정 / etcd: 작지만 틀리면 안 되는 값 / 키-값 저장소가 맞는 곳과 아닌 곳 / 관계형 DB 옆에 두는 법 / 단순한 모델, 서로 다른 약속 / 면접에서 나올 만한 질문
- 직접 링크 →: db-types-overview, postgres-jsonb-search, redis-basics, redis-memory-eviction, redis-persistence-ha, db-type-embedded, db-type-relational, db-type-newsql, db-consistency-cap, caching-strategies, db-type-wide-column
- 키워드 백링크 →: raft-consensus, ds-hash-map, sd-mq-storage-partitions, leader-election, dns
- 이 글로 오는 글 ←: acid-vs-base, cilium-ebpf, cloud-cost-optimization, consistency-models, db-architecture-by-scale, db-consistency-cap, db-replication-sharding, db-sharding, db-type-newsql, db-type-relational, db-type-wide-column, db-types-overview, distributed-lock, eks-cluster-basics, eventual-consistency, external-secrets, failover, fault-tolerance, geohash, helm-values-secrets, k8s-admission-control, k8s-api-aggregation-schedulers, k8s-api-objects, k8s-architecture, k8s-audit-logging, k8s-certificates-pki, k8s-certifications, k8s-cluster-upgrade, k8s-configmap, k8s-controllers-reconcile, k8s-crd, k8s-etcd-backup, k8s-feature-maturity, k8s-job-cronjob, k8s-learning-roadmap, k8s-namespace, k8s-operators, k8s-pod-basics, k8s-pod-disruption-budget, k8s-pod-security-admission, k8s-project-structure, k8s-rbac, k8s-secret, k8s-serviceaccount-tokens, k8s-statefulset, kubectl-apply-ssa, kubectl-essentials, leader-election, local-k8s-kind-minikube, merkle-tree, multi-region, network-flow-logs, network-partitions, optimistic-locking, quadtree, raft-consensus, sd-autocomplete-data-pipeline, sd-cache-and-cdn-tier, sd-chat-connections, sd-chat-message-storage, sd-chat-presence, sd-kv-store-partition-replication, sd-kv-store-versioning, sd-kv-store-write-read-path, sd-leaderboard-scaling, sd-load-balancer-stateless, sd-metrics-collection, sd-metrics-storage-alerting, sd-mq-consumer-groups, sd-mq-storage-partitions, sd-music-streaming, sd-nearby-friends, sd-sharding-intro, sd-split-web-and-db, sd-unique-id-generator, sd-url-shortener-api-redirect, sd-wallet-event-sourcing, sd-web-crawler-politeness-dedup, secrets-management, serverless-architecture, serverless-limits, service-discovery, sql-vs-nosql, system-design-concepts-map, system-design-study-path, terraform-basics, velero-backup, vpc-subnets-route-tables, yaml-for-k8s

#### `db-type-newsql` — 분산 SQL(NewSQL): SQL을 지키며 수평 확장

- 요약: 샤드를 넘는 트랜잭션을 DB가 대신 처리하는 Spanner, CockroachDB, TiDB의 구조를 따라간다. 키 범위 구간과 Raft 복제, 분산 트랜잭션과 시계, 재시도와 핫스팟처럼 수평 확장의 대가도 정리한다.
- 태그: Database, Distributed Systems, Scalability, SQL
- 키워드: NewSQL, 분산 SQL, CockroachDB, TrueTime, TiDB
- 길이: 404줄
- 소제목: SQL은 그대로, 저장은 여러 대에 / 행 하나가 키 하나가 된다 / 구간이 커지면 둘로 쪼갠다 / 구간마다 Raft로 과반에 적는다 / 구간 두 개에 걸친 트랜잭션 / 시계가 다르면 순서도 다르다 / 충돌하면 다시 하라고 돌려보낸다 / 멀리 있는 사용자의 데이터는 가까이 둔다 / 호환된다는 말의 범위 / 분산 SQL을 고르기 전에 / 샤딩을 DB 안으로 옮긴 값 / 면접에서 나올 만한 질문
- 직접 링크 →: db-replication-sharding, db-types-overview, db-transaction-isolation, db-consistency-cap, db-type-columnar-olap, db-type-key-value, db-type-wide-column
- 키워드 백링크 →: sql-basics, raft-consensus, sd-start-single-server, distributed-transactions-2pc, scaling-horizontal-vertical, acid-transactions, postgres-getting-started, packet-encapsulation
- 이 글로 오는 글 ←: acid-vs-base, clock-skew, db-consistency-cap, db-sharding, db-type-columnar-olap, db-type-embedded, db-type-key-value, db-type-relational, db-types-overview, distributed-transactions-2pc, raft-consensus, sd-sharding-intro, sql-vs-nosql

#### `db-type-relational` — 관계형 DB: 왜 여전히 기본값인가

- 요약: 미리 몰랐던 질문에 SQL 한 문장으로 답할 수 있는 이유를 제약 조건, 옵티마이저, WAL, 트랜잭션으로 따라간다. PostgreSQL·MySQL·Oracle·SQL Server의 자리와 한 대를 넘을 때 생기는 한계도 PostgreSQL 16 실행 계획과 함께 본다.
- 태그: Database, SQL, PostgreSQL, Transaction, Performance
- 키워드: 관계형 DB, RDBMS, 해시 조인
- 길이: 481줄
- 소제목: 미리 몰랐던 질문에 답하기 / 표와 키로 나눠 담는 이유 / 잘못된 데이터를 DB가 막는다 / 무엇을 원하는지만 쓰면 방법은 DB가 고른다 / 해시 조인을 손으로 따라가기 / 커밋이 끝났다는 건 로그가 디스크에 닿았다는 뜻 / 표 여러 개를 한 번에 바꾸는 트랜잭션 / PostgreSQL, MySQL, Oracle, SQL Server / 한 대를 넘어서면 어려워지는 것 / 다른 DB를 붙여도 원본은 여기에 둔다 / 기본값인 이유와 그 값 / 면접에서 나올 만한 질문
- 직접 링크 →: db-types-overview, db-modeling-normalization, sql-query-tuning, db-index, db-replication-sharding, db-transaction-isolation, sql-basics, db-type-newsql, db-type-columnar-olap, db-type-graph, db-type-wide-column, mongodb-document-model, caching-strategies, db-architecture-by-scale
- 키워드 백링크 →: db-type-time-series, mysql-innodb-basics, db-type-key-value, ds-hash-map, sqld-top-n-hierarchical-pivot, scaling-horizontal-vertical, postgres-architecture, postgres-jsonb-search, db-partitioning, postgres-getting-started, acid-transactions
- 이 글로 오는 글 ←: acid-vs-base, db-architecture-by-scale, db-type-columnar-olap, db-type-graph, db-type-key-value, db-type-time-series, db-type-wide-column, db-types-overview, mongodb-document-model, postgres-architecture, postgres-getting-started, postgres-operations, redis-basics, sd-chat-message-storage, sd-email-storage-search, sd-file-sync-block-upload, sd-kv-store-versioning, sd-kv-store-write-read-path, sd-maps-location-eta, sd-metrics-collection, sd-metrics-storage-alerting, sd-music-streaming, sd-news-feed-publishing, sd-object-storage-architecture, sd-split-web-and-db, sd-url-shortener-api-redirect, serverless-limits, sql-subqueries-exists-lateral, sql-vs-nosql, sqld-data-modeling

#### `db-type-time-series` — 시계열 DB: 시간 순서로 쌓이는 데이터

- 요약: 페이지 조회와 서버 지표처럼 끝에만 붙는 데이터를 PostgreSQL 16에 쌓아 보며 BRIN, 시간 단위 파티션, 다운샘플링, 압축을 따라간다. TimescaleDB와 Prometheus가 같은 문제를 어떻게 자동화하는지, 카디널리티 폭발을 어떻게 막는지도 정리한다.
- 태그: Database, PostgreSQL, Performance, System Design
- 키워드: 시계열 DB, TimescaleDB, 다운샘플링, 카디널리티 폭발
- 길이: 598줄
- 소제목: 시간이 키가 되는 데이터 / 측정값 하나를 이루는 조각 / PostgreSQL에 그대로 쌓아 보기 / 시간 순서로 쌓이면 범위만 적어 둬도 된다 / 구간으로 묶어 읽기 / 오래된 데이터는 요약으로 바꾼다 / 기간 통째로 버리기 / 같은 시계열끼리 붙이면 잘 눌린다 / TimescaleDB는 PostgreSQL 안에서 같은 일을 한다 / Prometheus는 최근 몇 시간을 메모리에 둔다 / 레이블 하나가 시계열을 수백만 개로 만든다 / 어떤 시계열 저장소를 고를까 / 시계열 DB를 고르지 않아도 되는 경우 / 끝에 붙이고, 덩어리로 버린다 / 면접에서 나올 만한 질문
- 직접 링크 →: db-types-overview, db-index, db-type-columnar-olap, db-type-relational
- 키워드 백링크 →: alerting, metrics-types, db-partitioning, sqld-group-by-having, sd-start-single-server, prometheus-basics, db-replication-sharding, http-status-codes, db-index-design
- 이 글로 오는 글 ←: db-architecture-by-scale, db-type-columnar-olap, db-type-graph, db-type-relational, db-type-wide-column, db-types-overview, metrics-types, network-monitoring, observability-basics, prometheus-basics, sd-metrics-collection, sd-metrics-storage-alerting

#### `db-type-wide-column` — 와이드 컬럼 DB: Cassandra와 쿼리 먼저 설계하기

- 요약: 쓰기가 서버 한 대를 넘는 조회 이벤트를 Cassandra에 담으며 파티션 키와 클러스터링 키, LSM 트리와 컴팩션, QUORUM 일관성, 툼스톤을 따라간다. 질문마다 테이블을 따로 만드는 이유와 맞지 않는 질문도 정리한다.
- 태그: Database, NoSQL, Distributed Systems, Scalability, Performance
- 키워드: 와이드 컬럼, Cassandra, LSM 트리, SSTable, 툼스톤
- 길이: 410줄
- 소제목: 쓰기가 한 대를 넘을 때 / 테이블보다 쿼리를 먼저 정한다 / 파티션 키는 노드를, 클러스터링 키는 순서를 / 쓰기는 덧붙이기만 한다 / 파일을 합쳐 읽기를 되찾는 컴팩션 / 몇 대가 대답해야 성공인가 / 지우는 것도 쓰기다 / Cassandra가 힘들어하는 질문 / 어디에 쓰이나 / 관계형 DB와 나눠 맡기 / 쓰기를 싸게 하고, 질문을 고정한다 / 면접에서 나올 만한 질문
- 직접 링크 →: db-type-key-value, db-type-columnar-olap, db-replication-sharding, db-consistency-cap, db-type-time-series, db-type-graph
- 키워드 백링크 →: acid-vs-base, sd-start-single-server, db-sharding, db-type-relational, sd-mq-storage-partitions, bloom-filter, db-index-pitfalls, sd-kv-store-write-read-path, db-partitioning, dns
- 이 글로 오는 글 ←: acid-transactions, acid-vs-base, bloom-filter, consistency-models, consistent-hashing, crdt, db-architecture-by-scale, db-consistency-cap, db-sharding, db-type-embedded, db-type-graph, db-type-key-value, db-type-newsql, db-type-relational, db-types-overview, ds-heap, eventual-consistency, geohash, k8s-service-types, k8s-statefulset, kafka-basics, merkle-tree, multi-region, network-partitions, sd-ad-click-stream-windows, sd-chat-message-storage, sd-email-storage-search, sd-interview-framework, sd-kv-store-failure-handling, sd-kv-store-partition-replication, sd-kv-store-versioning, sd-kv-store-write-read-path, sd-leaderboard-scaling, sd-maps-location-eta, sd-metrics-storage-alerting, sd-nearby-friends, sd-object-storage-versioning-multipart, sd-split-web-and-db, sd-wallet-event-sourcing, sql-vs-nosql, system-design-study-path

#### `db-types-overview` — DB 종류 한눈에: 데이터 모양과 읽는 방식으로 고르기

- 요약: 같은 주문 하나를 관계형, 키-값, 문서, 와이드 컬럼, 그래프, 시계열, 컬럼형으로 저장해 보면 DB마다 빠르게 답하는 질문이 다르다. 접근 패턴으로 종류를 고르는 법과 원본과 사본을 나누는 법을 정리하고 종류별 글로 이어 준다.
- 태그: Database, NoSQL, System Design, Architecture
- 키워드: DB 종류, 데이터 모델 비교, 원본과 사본
- 길이: 262줄
- 소제목: 같은 주문을 여러 모양으로 저장하기 / 무엇으로 찾는지가 먼저다 / 빠른 이유는 저마다 하나씩 / 질문 여섯 개로 서점의 저장소 고르기 / 원본에서 사본으로 흘러가는 길 / 시리즈 지도 / 모양과 질문을 먼저 적는다 / 면접에서 나올 만한 질문
- 직접 링크 →: db-architecture-by-scale, db-consistency-cap, db-type-relational, db-type-key-value, db-type-wide-column, db-type-graph, db-type-time-series, db-type-columnar-olap, db-type-newsql, db-type-embedded, mongodb-document-model, elasticsearch-inverted-index, vector-db, redis-basics, postgres-getting-started
- 키워드 백링크 →: db-index, sd-mq-storage-partitions, scaling-horizontal-vertical
- 이 글로 오는 글 ←: db-consistency-cap, db-keys-denormalization, db-type-columnar-olap, db-type-embedded, db-type-key-value, db-type-newsql, db-type-relational, db-type-time-series, distributed-transactions-2pc, js-shallow-deep-copy, opensearch-cluster-operations, pattern-prototype, sd-proximity-service, sd-sharding-intro, sd-split-web-and-db, sql-vs-nosql, system-design-concepts-map

### Programming › Database › MySQL (`programming/database/mysql`)

#### `mysql-innodb-basics` — MySQL InnoDB 기초: 클러스터드 인덱스, 버퍼 풀, redo·undo, 넥스트 키 잠금

- 요약: 다른 이메일 두 개로 가입하다 교착 상태가 나는 장면에서 출발해, InnoDB가 기본 키 B-tree로 행을 쌓고 버퍼 풀의 old 구역으로 핫 페이지를 지키며 redo와 undo로 커밋과 옛 버전을 다루는 과정을 MySQL 8.0 실제 출력으로 따라간다. 간격 잠금이 어디에 걸리는지와 잠금 대기를 좁히는 순서, PostgreSQL과의 차이도 정리한다.
- 태그: tesla, Database, MySQL, Transaction, Concurrency, Troubleshooting · 회사: tesla
- 키워드: InnoDB, 버퍼 풀, 넥스트 키 잠금, undo 로그
- 길이: 699줄
- 소제목: 없으면 넣는 코드가 서로를 죽였다 / 실험 환경과 두 테이블 / 테이블은 기본 키 순서로 줄 선 B-tree다 / 버퍼 풀은 오래된 쪽 머리에 새 페이지를 넣는다 / 커밋 한 번에 남는 기록 세 가지 / 서버가 죽어도 커밋은 남고 커밋 안 한 것은 사라진다 / 옛 버전은 undo에서 다시 만들어 읽는다 / 같은 트랜잭션 안에서 SELECT와 UPDATE가 보는 세상이 다르다 / 잠금은 행이 아니라 인덱스 위에 걸린다 / 처음 장면을 잠금으로 다시 읽기 / 잠금 대기를 현장에서 좁혀 가는 순서 / PostgreSQL과 나란히 놓고 보기 / InnoDB는 기본 키 B-tree와 undo로 움직인다 / 면접에서 나올 만한 질문
- 직접 링크 →: postgres-architecture, db-transaction-isolation, db-index, mysql-replication-online-ddl, postgres-mvcc-vacuum, db-locking-deadlock, deadlocks, pessimistic-locking
- 키워드 백링크 →: sql-basics, distributed-transactions-2pc, sd-kv-store-write-read-path, postgres-operations
- 이 글로 오는 글 ←: acid-transactions, db-index, db-index-pitfalls, db-keys-denormalization, db-locking-deadlock, db-modeling-normalization, db-partitioning, db-performance-map, db-replication-sharding, db-transaction-isolation, db-type-columnar-olap, db-type-embedded, db-type-relational, encryption-at-rest, mysql-replication-online-ddl, optimistic-locking, pessimistic-locking, postgres-architecture, postgres-getting-started, postgres-mvcc-vacuum, redis-basics, sd-url-shortener-api-redirect, sql-query-rewrite, zero-downtime-migrations

#### `mysql-replication-online-ddl` — MySQL 복제와 온라인 DDL: binlog, GTID, 반동기 복제, 메타데이터 잠금

- 요약: 프라이머리에서 9초에 끝난 ALTER가 레플리카를 17초 뒤처지게 만든 장면을 서버 두 대로 재현하고, binlog 형식, 받는 스레드와 적용 스레드, GTID와 errant 트랜잭션, 반동기 복제의 timeout 전환, Seconds_Behind_Source의 함정, GTID로 기다리는 읽기를 실제 출력으로 본다. INSTANT·INPLACE·COPY의 차이, 메타데이터 잠금 줄, gh-ost와 pt-osc도 다룬다.
- 태그: tesla, Database, MySQL, Distributed Systems, Performance, Troubleshooting · 회사: tesla
- 키워드: binlog, GTID, 반동기 복제, 온라인 DDL
- 길이: 701줄
- 소제목: 프라이머리에선 9초에 끝난 ALTER가 레플리카에선 그때부터 시작됐다 / 프라이머리와 레플리카 두 대를 띄운다 / binlog에는 바뀐 행의 전후가 적힌다 / 레플리카 안의 받는 스레드와 적용하는 스레드 / GTID는 트랜잭션마다 붙는 주소다 / 레플리카에 직접 쓴 한 줄이 복제를 멈춘다 / 반동기 복제는 기다리다 혼자 비동기로 내려간다 / Seconds_Behind_Source가 말해 주지 않는 것 / 방금 쓴 주문을 레플리카에서 읽으려면 / ALTER TABLE은 세 가지 방식으로 돈다 / 열 추가도 줄을 서서 기다린다 / 테이블을 복사해야 할 때는 gh-ost와 pt-osc / 큰 스키마 변경 전에 확인하는 순서 / 복제는 binlog를 따라 하는 일이고 DDL도 그 줄에 선다 / 면접에서 나올 만한 질문
- 직접 링크 →: mysql-innodb-basics, db-replication-sharding, zero-downtime-migrations
- 키워드 백링크 →: db-migration-tools, sql-batch-timeout-pool, sql-basics
- 이 글로 오는 글 ←: caching-strategies, db-index, db-index-pitfalls, db-replication-sharding, db-transaction-isolation, eventual-consistency, mysql-innodb-basics, sd-db-replication-intro, zero-downtime-migrations

### Programming › Database › PostgreSQL (`programming/database/postgresql`)

#### `postgres-advanced-sql` — PostgreSQL다운 SQL: RETURNING, ON CONFLICT, MERGE, CTE

- 요약: 넣고 다시 조회하던 왕복과 조회 후 삽입의 경쟁을 RETURNING과 ON CONFLICT로 없애고, MERGE, 쓰기 CTE, CTE 인라인과 MATERIALIZED의 실행 계획 차이를 본다. 중복이 쌓인 테이블에 유니크 인덱스를 붙여 upsert로 바꾸는 과정도 따라간다.
- 태그: Database, PostgreSQL, SQL, Performance
- 키워드: ON CONFLICT, 쓰기 CTE, RETURNING
- 길이: 613줄
- 소제목: 예제로 쓸 작은 서점 / 넣은 행을 바로 돌려받는 RETURNING / 있으면 더하고 없으면 넣기 / 조회하고 넣으면 생기는 틈 / 원본 데이터와 맞춰 놓는 MERGE / WITH로 긴 쿼리를 문단처럼 나누기 / 한 문장으로 행을 옮기는 쓰기 CTE / CTE가 최적화를 막던 시절 / 유니크 인덱스 없이 쌓인 중복을 정리할 때 / 문장 하나로 끝내는 습관 / 면접에서 나올 만한 질문
- 직접 링크 →: postgres-reporting-sql, sql-basics, postgres-roles-security, db-transaction-isolation, sqld-top-n-hierarchical-pivot, postgres-functions-triggers
- 키워드 백링크 →: postgres-data-types, postgres-getting-started
- 이 글로 오는 글 ←: acid-transactions, batch-processing, cqrs, cron-jobs, db-architecture-by-scale, idempotency-key, optimistic-locking, postgres-functions-triggers, postgres-reporting-sql, race-conditions, saga-pattern, sql-cte-recursive, sql-insert-update-delete, sql-interview-problems, webhooks

#### `postgres-architecture` — PostgreSQL 내부 구조: 프로세스, 공유 메모리, 페이지, WAL, 체크포인트

- 요약: 연결마다 생기는 backend 프로세스, shared_buffers와 OS 페이지 캐시, 8KB 페이지와 튜플 머리말, WAL과 체크포인트, 크래시 복구를 실제로 돌려 보며 따라간다. 램 64GB 서버에 shared_buffers 128MB가 왜 생각만큼 느리지 않은지도 숫자로 본다.
- 태그: Database, PostgreSQL, Performance, Linux
- 키워드: shared_buffers, full_page_writes, 체크포인트, TOAST, LSN
- 길이: 816줄
- 소제목: 연결 하나에 프로세스 하나 / 백그라운드에서 도는 프로세스들 / 함께 쓰는 메모리와 혼자 쓰는 메모리 / 같은 페이지가 두 번 캐시된다 / 데이터 디렉터리 들여다보기 / 8KB 페이지 한 장의 구조 / 페이지에 빈자리를 남기는 fillfactor / 큰 값은 TOAST로 따로 둔다 / 먼저 로그에 쓰고 나중에 파일에 쓴다 / LSN은 WAL 안의 바이트 주소다 / 체크포인트 직후의 첫 수정은 페이지 통째로 / 체크포인트가 하는 일 / 서버가 죽었다 다시 뜰 때 / fsync와 synchronous_commit / 다시 64GB 서버로 / 면접에서 나올 만한 질문
- 직접 링크 →: postgres-getting-started, postgres-jsonb-search, sql-query-tuning, postgres-operations, postgres-mvcc-vacuum, db-index, db-transaction-isolation, db-replication-sharding
- 키워드 백링크 →: postgres-connections-pg-hba, db-architecture-by-scale, sd-mq-storage-partitions, mysql-innodb-basics, db-type-relational, acid-transactions
- 이 글로 오는 글 ←: acid-transactions, backend-engineer-roadmap, backup-strategy, batch-processing, centralized-logging-pipeline, claude-code-context-window, claude-code-fundamentals-map, claude-code-parallel-and-scheduled, cloud-cost-optimization, cqrs, cron-jobs, db-keys-denormalization, db-performance-map, db-replication-sharding, db-type-embedded, db-type-relational, disaster-recovery, event-driven-architecture, event-sourcing, eventual-consistency, failover, k8s-batch-kueue, k8s-vpa, lossy-counting, multi-region, mysql-innodb-basics, network-partitions, postgres-data-types, postgres-jsonb-search, postgres-mvcc-vacuum, postgres-operations, sd-ad-click-exactly-once, sd-db-replication-intro, sql-query-rewrite, system-design-concepts-map, velero-backup

#### `postgres-connections-pg-hba` — PostgreSQL 접속 설정: 접속 URI, .pgpass, pg_hba.conf, 원격 접속

- 요약: 앱 서버에서 붙자 Connection refused, no pg_hba.conf entry, password authentication failed로 바뀌는 에러를 따라가며 접속 URI와 환경 변수, .pgpass, pg_hba.conf의 첫 줄 규칙, 원격 접속을 여는 순서를 정리한다. 접속 자리가 다 찼을 때 pg_stat_activity로 원인을 찾는 법도 본다.
- 태그: Database, PostgreSQL, Linux, Network, Security
- 키워드: pg_hba.conf, listen_addresses, 접속 URI
- 길이: 445줄
- 소제목: 접속 정보는 문자열 하나로 줄 수 있다 / pg_hba.conf는 위에서부터 첫 줄만 본다 / 에러 문구가 끊긴 단계를 알려 준다 / 들어오는 길은 맞는데 자리가 없을 때 / 접속 URI를 직접 나눠 보기 / 접속 하나가 지나는 문 세 개 / 면접에서 나올 만한 질문
- 직접 링크 →: postgres-getting-started, postgres-roles-security
- 키워드 백링크 →: db-architecture-by-scale, encryption-in-transit, postgres-operations, security-groups-nacl, sql-batch-timeout-pool, ipv6-basics, layer-ip-addressing
- 이 글로 오는 글 ←: connection-pool, db-performance-map, integration-tests-real-db, postgres-architecture, postgres-getting-started, postgres-roles-security, sd-split-web-and-db

#### `postgres-data-types` — 타입을 잘 고르면 절반은 끝난다: 숫자, 문자열, 시간, UUID, 배열, enum, range

- 요약: 돈을 float로 저장해 생긴 오차와 9시간 밀린 주문 시각에서 시작해, PostgreSQL 타입을 언제 무엇으로 고르는지 정리한다. identity와 serial, timestamptz, UUID v7, enum, 범위 타입과 배제 제약까지 다룬다.
- 태그: Database, PostgreSQL, SQL, Performance
- 키워드: timestamptz, UUID v7, 배제 제약, identity 컬럼, tstzrange
- 길이: 780줄
- 소제목: 0.1을 열 번 더하면 1이 아니다 / 정수는 범위를 넘으면 에러가 난다 / varchar(n)이 text보다 빠르지 않다 / 오전 9시 주문이 오후 6시로 보인다 / UUID 키는 순서가 있어야 인덱스가 편하다 / 배열은 편하지만 관계를 대신하지 않는다 / 주문 상태를 담는 세 가지 방법 / 같은 방을 두 번 예약하지 못하게 / 도메인, NULL, 기본값, 형 변환 / 타입마다 몇 바이트를 쓰나 / 컬럼을 만들 때 묻는 것들 / 면접에서 나올 만한 질문
- 직접 링크 →: postgres-getting-started, db-index, postgres-jsonb-search, sql-basics
- 키워드 백링크 →: race-conditions, sql-select-where-null, postgres-architecture
- 이 글로 오는 글 ←: acid-transactions, postgres-advanced-sql, postgres-functions-triggers, postgres-getting-started, postgres-roles-security, sd-sharding-intro, sd-unique-id-generator, sql-interview-problems, sqld-data-modeling

#### `postgres-functions-triggers` — 함수, 프로시저, 트리거: PL/pgSQL로 DB 안에 로직 두기

- 요약: 서비스 하나가 updated_at을 빠뜨린 일에서 출발해 SQL 함수와 PL/pgSQL, 변동성이 실행 계획에 주는 영향, 예외 처리, 커밋하는 프로시저, 트리거 순서와 감사 로그, 전이 테이블, SECURITY DEFINER의 search_path 함정, LISTEN/NOTIFY까지 실제로 돌려 본다.
- 태그: Database, PostgreSQL, SQL, Security, Performance
- 키워드: PL/pgSQL, SECURITY DEFINER, LISTEN/NOTIFY, 전이 테이블
- 길이: 852줄
- 소제목: updated_at이 멈춰 있는 책 / SQL로 쓰는 함수와 plpgsql로 쓰는 함수 / 함수에 붙이는 약속, 변동성 / 실패를 붙잡는 EXCEPTION 블록 / 트랜잭션을 나눠 커밋하는 프로시저 / 테이블이 바뀔 때 끼어드는 트리거 / 누가 무엇을 바꿨는지 남기는 감사 로그 / 트리거가 실행되는 순서 / 행 20만 개를 고칠 때 트리거가 치르는 값 / 커밋할 때 검사하는 제약 트리거 / 트리거가 만드는 함정 / 만든 사람 권한으로 도는 SECURITY DEFINER / 바뀌었다고 알려 주는 LISTEN과 NOTIFY / 로직을 DB에 둘까 애플리케이션에 둘까 / DB 안에 둔 코드도 코드다 / 면접에서 나올 만한 질문
- 직접 링크 →: postgres-advanced-sql, db-transaction-isolation, postgres-roles-security, db-architecture-by-scale, postgres-jsonb-search
- 키워드 백링크 →: sql-select-where-null, db-index, json-crud-http, postgres-getting-started, db-migration-tools, sql-basics, db-locking-deadlock, db-index-design, postgres-data-types
- 이 글로 오는 글 ←: postgres-advanced-sql, postgres-jsonb-search, postgres-reporting-sql, postgres-roles-security, sd-hotel-double-booking, sql-views-materialized, transactional-outbox

#### `postgres-getting-started` — PostgreSQL 설치하고 접속하기: psql, 데이터베이스, 스키마

- 요약: Ubuntu에 설치한 직후 만나는 role does not exist 에러에서 시작해 peer 인증, 클러스터·데이터베이스·스키마 구조, search_path, psql 사용법을 정리한다. 시리즈 내내 쓸 서점 DB도 이 글에서 만든다.
- 태그: Database, PostgreSQL, SQL, Linux
- 키워드: psql, search_path, peer 인증
- 길이: 624줄
- 소제목: PostgreSQL을 고르는 이유 / apt로 설치하고 서버가 떴는지 확인하기 / psql이 내 리눅스 이름을 들고 가는 이유 / 내 이름으로 역할과 데이터베이스 만들기 / 클러스터, 데이터베이스, 스키마, 테이블 / 시리즈에서 계속 쓸 서점 DB / psql에서 매일 쓰는 명령 / 현장에서 relation does not exist를 만나는 순간 / 처음 에러를 다시 읽으면 / 면접에서 나올 만한 질문
- 직접 링크 →: postgres-connections-pg-hba, sql-basics, postgres-data-types, postgres-roles-security
- 키워드 백링크 →: db-migration-tools, mysql-innodb-basics, db-type-relational
- 이 글로 오는 글 ←: acid-transactions, backend-engineer-roadmap, connection-pool, db-locking-deadlock, db-transaction-isolation, db-type-newsql, db-type-relational, db-types-overview, distributed-transactions-2pc, integration-tests-real-db, network-partitions, optimistic-locking, pessimistic-locking, ports-and-sockets, postgres-advanced-sql, postgres-architecture, postgres-connections-pg-hba, postgres-data-types, postgres-functions-triggers, postgres-operations, postgres-reporting-sql, postgres-roles-security, sd-hotel-double-booking, security-groups-nacl, sql-basics, sql-batch-timeout-pool, sql-insert-update-delete, sql-logical-order, sql-select-where-null, sql-study-path, sqld-null-functions, sqld-single-row-functions, timeouts

#### `postgres-jsonb-search` — JSONB와 전문 검색: GIN, tsvector, pg_trgm

- 요약: 카테고리마다 다른 상품 속성을 jsonb에 담고 GIN과 식 인덱스로 찾은 뒤, LIKE 검색을 tsvector 전문 검색과 pg_trgm으로 바꾼다. 한국어에서 막히는 지점과 검색 엔진으로 넘어갈 신호도 짚는다.
- 태그: Database, PostgreSQL, SQL, Search, Performance
- 키워드: JSONB, pg_trgm, tsvector, jsonb_path_ops
- 길이: 818줄
- 소제목: 카테고리마다 속성이 다른 상품 / json과 jsonb는 저장 방식이 다르다 / 화살표로 꺼내고 포함 연산자로 찾기 / 일부만 고치는 jsonb_set과 JSON 경로 / 10만 개에서 포함 검색을 빠르게 하는 GIN / jsonb_ops와 jsonb_path_ops / 자주 찾는 키는 식 인덱스로 / jsonb에 넣을 것과 컬럼으로 뺄 것 / LIKE 대신 전문 검색 / 한국어는 어디서 막히나 / 세 글자씩 잘라 비교하는 pg_trgm / 오타도 찾는 similarity / 무엇으로 찾을지 고르기 / 조각을 쪼개 두는 방식이 결국 같다 / 면접에서 나올 만한 질문
- 직접 링크 →: postgres-functions-triggers, db-index, elasticsearch-inverted-index, postgres-architecture
- 키워드 백링크 →: opensearch-cluster-operations, webhooks, db-index-design, sd-db-replication-intro
- 이 글로 오는 글 ←: db-architecture-by-scale, db-type-key-value, db-type-relational, postgres-architecture, postgres-data-types, postgres-functions-triggers, sql-filtering-operators, sql-vs-nosql

#### `postgres-mvcc-vacuum` — VACUUM과 autovacuum: 죽은 튜플, 부풀림, XID 랩어라운드

- 요약: 100만 건 UPDATE 뒤 테이블이 두 배가 되는 이유부터 VACUUM과 VACUUM FULL의 잠금 차이, HOT 업데이트, autovacuum 기준식, VACUUM을 막는 트랜잭션과 슬롯, XID 랩어라운드와 얼리기까지 실제 출력으로 본다.
- 태그: Database, PostgreSQL, Performance, SQL
- 키워드: autovacuum, VACUUM FULL, HOT 업데이트, XID 랩어라운드, visibility map
- 길이: 852줄
- 소제목: UPDATE 한 번이 남기는 것 / 읽기만 했는데 페이지를 고친다 / VACUUM은 자리를 비울 뿐 파일을 줄이지 않는다 / VACUUM FULL은 테이블을 잠근다 / 잠그지 않고 줄이는 방법 / visibility map이 하는 일 / 인덱스를 건드리지 않는 HOT 업데이트 / autovacuum은 언제 도는가 / 테이블마다 기준을 다르게 / VACUUM을 막는 것들 / 얼마나 부풀었는지 재기 / 32비트 트랜잭션 번호가 한 바퀴 돌면 / 얼리기와 랩어라운드 방지 VACUUM / 통계가 낡으면 계획이 틀린다 / 다시 처음 장면으로 / 면접에서 나올 만한 질문
- 직접 링크 →: db-transaction-isolation, postgres-architecture, db-replication-sharding, db-index, sql-query-tuning, postgres-operations
- 키워드 백링크 →: mysql-innodb-basics, db-index-design, distributed-transactions-2pc
- 이 글로 오는 글 ←: acid-transactions, batch-processing, cache-write-policies, connection-pool, db-architecture-by-scale, db-index, db-index-pitfalls, db-transaction-isolation, encryption-at-rest, message-queue-basics, mysql-innodb-basics, postgres-architecture, postgres-operations, sql-batch-timeout-pool, sql-views-materialized, zero-downtime-migrations

#### `postgres-operations` — PostgreSQL 운영: 설정 튜닝, 연결 풀, 모니터링, 백업과 PITR, 버전 업그레이드

- 요약: 처음 운영에 올리기 전에 정할 설정과 적용 시점, work_mem 예산 계산, 연결 풀, 매일 볼 지표, pg_dump와 pg_basebackup, WAL 보관으로 실수 직전 시점까지 되돌리는 PITR, 메이저 버전 업그레이드 방법을 직접 해 보며 정리한다.
- 태그: Database, PostgreSQL, Performance, Linux
- 키워드: pg_basebackup, 시점 복구, PITR, pg_upgrade, pg_dump
- 길이: 799줄
- 소제목: 설정은 어디에 쓰고 언제 적용되나 / 메모리 설정 정하기 / work_mem은 곱하기로 계산한다 / SSD라면 random_page_cost를 낮춘다 / max_connections를 올리는 대신 연결 풀 / 매일 보는 숫자들 / 느린 쿼리를 로그로 잡기 / 논리 백업과 복원 / 물리 백업과 WAL 보관 / WHERE 없는 DELETE 3초 전으로 / 백업은 복원해 봐야 백업이다 / 백업 도구와 PostgreSQL 17의 증분 백업 / 메이저 버전 올리기 / 마이너 업데이트 / 관리형 서비스를 쓴다면 / 운영에 올리기 전 점검 / 면접에서 나올 만한 질문
- 직접 링크 →: postgres-architecture, postgres-mvcc-vacuum, sql-query-tuning, db-transaction-isolation, db-replication-sharding
- 키워드 백링크 →: db-index, pessimistic-locking, db-migration-tools, db-architecture-by-scale, ds-hash-map, linux-files-permissions, db-type-relational, postgres-getting-started, disaster-recovery, sql-query-rewrite, sql-basics
- 이 글로 오는 글 ←: backup-strategy, connection-pool, db-architecture-by-scale, disaster-recovery, docker-network-volume, k8s-etcd-backup, k8s-operators, k8s-statefulset, mysql-innodb-basics, postgres-architecture, postgres-connections-pg-hba, postgres-mvcc-vacuum, rollback-strategy, sd-db-replication-intro, sql-insert-update-delete, velero-backup

#### `postgres-reporting-sql` — PostgreSQL 리포트 쿼리: DISTINCT ON, FILTER, generate_series, 머티리얼라이즈드 뷰, COPY, LATERAL

- 요약: 회원별 마지막 주문, 빈 날을 0으로 채운 일별 매출, 미리 계산해 둔 집계, 50만 건 적재, 회원별 최근 3건을 PostgreSQL 문법과 실행 계획으로 만든다. REFRESH가 대시보드를 막는 장애와 COPY가 한 줄 때문에 실패하는 경우도 재현해 본다.
- 태그: Database, PostgreSQL, SQL, Performance
- 키워드: LATERAL, DISTINCT ON, 머티리얼라이즈드 뷰, generate_series
- 길이: 579줄
- 소제목: 앞 글에서 이어지는 서점 데이터 / 그룹마다 한 줄만 남기는 DISTINCT ON / 조건별 집계와 묶어 붙이기 / 주문이 없는 날도 0으로 채우는 리포트 / 계산해서 저장하는 generated column / 이름 붙인 쿼리와 저장해 둔 결과 / 50만 건을 한 번에 넣는 COPY / 사용자마다 최근 주문 세 건 / 대시보드가 멈췄는데 DB는 한가할 때 / 읽는 양을 줄이는 쪽으로 / 면접에서 나올 만한 질문
- 직접 링크 →: postgres-advanced-sql, postgres-functions-triggers, caching-strategies, sqld-window-functions, db-index
- 키워드 백링크 →: sqld-group-by-having, postgres-getting-started, sql-query-rewrite
- 이 글로 오는 글 ←: cqrs, db-keys-denormalization, db-type-columnar-olap, postgres-advanced-sql, sql-logical-order, sql-subqueries-exists-lateral, sql-views-materialized, sql-window-functions-pg, sqld-rollup-cube-grouping-sets, transactional-outbox

#### `postgres-roles-security` — 역할과 권한: 로그인부터 행 단위 보안(RLS)까지

- 요약: 앱 계정이 운영 테이블을 DROP할 수 있는 상태에서 시작해 역할, GRANT와 기본 권한, 최소 권한 구성, SCRAM과 TLS, 행 단위 보안으로 서점마다 자기 주문만 보게 하는 방법을 정리한다.
- 태그: Database, PostgreSQL, Security, SQL
- 키워드: 행 단위 보안, Row Level Security, ALTER DEFAULT PRIVILEGES, scram-sha-256, SET ROLE
- 길이: 809줄
- 소제목: 역할 하나가 사용자이자 그룹이다 / 쿼리 하나가 지나는 검사들 / 주인, 마이그레이션, 앱, 분석 역할로 나누기 / 비밀번호는 SCRAM으로 저장한다 / pg_hba.conf와 TLS로 들어오는 길 좁히기 / 서점마다 자기 주문만 보게 하기 / 누가 언제 들어왔는지 남기기 / SQL 인젝션은 권한보다 앞에서 막는다 / pg_hba 줄 고르기를 직접 구현해 보기 / 앱 계정이 할 수 있는 일 / 면접에서 나올 만한 질문
- 직접 링크 →: postgres-getting-started, postgres-functions-triggers, postgres-connections-pg-hba
- 키워드 백링크 →: postgres-data-types, db-architecture-by-scale, sql-injection, sql-insert-update-delete, sd-start-single-server, db-index-design, sql-batch-timeout-pool, ipv6-basics, layer-ip-addressing, dns
- 이 글로 오는 글 ←: authn-vs-authz, connection-pool, modular-monolith, postgres-advanced-sql, postgres-connections-pg-hba, postgres-functions-triggers, postgres-getting-started, sql-injection, sql-views-materialized

### Programming › Database › Redis (`programming/database/redis`)

#### `redis-basics` — Redis는 왜 빠른가: 메모리, 단일 스레드, 자료구조

- 요약: Redis가 빠른 이유와 느린 명령 하나가 서버 전체를 멈추는 이유는 같은 곳에 있다. 메모리와 단일 스레드 이벤트 루프 구조를 보고, Ubuntu에 설치해 자료구조별 명령을 직접 실행해 본다.
- 태그: tesla, Redis, Database, NoSQL, Cache, Performance · 회사: tesla
- 키워드: Redis, Memcached, I/O 다중화, 분산 락
- 길이: 881줄
- 소제목: 80ms와 1ms 사이에 있는 것 / 명령은 한 줄로 서서 하나씩 실행된다 / 느린 명령 하나가 모두를 세운다 / Redis 6의 I/O 스레드는 무엇을 나눠 맡나 / Ubuntu에 설치하고 접속하기 / 밖에서 접속하게 열 때 막아야 할 것 / 키 이름은 콜론으로 나눈다 / 문자열: 값, 카운터, 락 / 해시: 객체 하나를 필드로 나눠 담기 / 리스트: 들어온 순서대로 꺼내는 큐 / 셋과 정렬된 셋: 중복 없는 모음과 순위표 / 놓치지 않는 스트림, 흘려보내는 채널 / 만료 시간을 다루는 명령 / KEYS 대신 SCAN / 여러 명령을 묶는 세 가지 방법 / 응용 로그에 Redis 타임아웃이 찍히면 / Memcached와 무엇이 다른가 / 주 저장소로 쓰기 전에 따져 볼 것 / 라이선스가 바뀐 이야기 / 빠른 이유와 멈추는 이유는 같은 곳에 있다 / 면접에서 나올 만한 질문
- 직접 링크 →: message-queue-basics, redis-memory-eviction, network-troubleshooting-by-layer, event-loop, redis-persistence-ha, caching-strategies
- 키워드 백링크 →: redis-cluster, distributed-lock, ds-hash-map, ds-linked-list, sd-leaderboard-sorted-set, sd-start-single-server, pub-sub, db-type-relational, kafka-basics, db-transaction-isolation, mysql-innodb-basics, acid-transactions, dns
- 이 글로 오는 글 ←: acid-transactions, acid-vs-base, api-gateway-use-cases, api-scaling-ladder, backend-engineer-roadmap, batch-processing, bloom-filter, blue-green-deployment, bullmq-job-queue, cache-invalidation, cache-write-policies, caching-concepts-map, caching-strategies, circuit-breaker, clock-skew, cloud-cost-optimization, consistency-models, consistent-hashing, cookie-session-login, count-min-sketch, cqrs, cron-jobs, db-architecture-by-scale, db-consistency-cap, db-performance-map, db-sharding, db-type-key-value, db-types-overview, dead-letter-queue, distributed-lock, docker-compose, docker-network-volume, ds-binary-tree-bst, ds-linked-list, encryption-in-transit, exponential-backoff-jitter, feature-flags, gateway, geohash, health-checks, helm-basics, helm-dependencies-oci-gitops, high-availability, http-caching-cdn, hyperloglog, idempotency-key, js-memoization, k8s-service-types, load-balancer-basics, long-polling, lossy-counting, message-queue-basics, monolith-architecture, multi-region, n-plus-one-queries, network-partitions, nginx-reverse-proxy, nodejs-server-runtime, optimistic-locking, pattern-command, pattern-singleton, pattern-strategy, ports-and-sockets, pub-sub, race-conditions, rate-limiting-algorithms, rate-limiting-in-practice, realtime-communication, redis-cluster, redis-memory-eviction, redis-persistence-ha, redis-replication-sentinel, rendering-ssg-isr, rest-api-design, reverse-proxy-lb-api-gateway, rollback-strategy, scaling-horizontal-vertical, sd-autocomplete-data-pipeline, sd-cache-and-cdn-tier, sd-capacity-estimation, sd-chat-connections, sd-chat-message-storage, sd-chat-presence, sd-db-replication-intro, sd-hotel-inventory-scaling, sd-interview-framework, sd-kv-store-partition-replication, sd-latency-numbers, sd-leaderboard-scaling, sd-leaderboard-sorted-set, sd-load-balancer-stateless, sd-maps-location-eta, sd-mq-consumer-groups, sd-music-streaming, sd-nearby-friends, sd-news-feed-publishing, sd-news-feed-retrieval, sd-notification-reliability, sd-proximity-service, sd-queue-logging-automation, sd-rate-limiter-design, sd-sharding-intro, sd-split-web-and-db, sd-url-shortener-api-redirect, sd-url-shortener-key-generation, sd-wallet-transfer, sd-web-crawler-architecture, service-discovery, sql-vs-nosql, system-design-concepts-map, system-design-study-path, tcp-reliability-congestion, vpc-subnets-route-tables, websocket-deep-dive

#### `redis-cluster` — Redis Cluster: 해시 슬롯, MOVED와 ASK

- 요약: 데이터가 한 서버 메모리를 넘어서는 순간에서 시작해 키가 16384개 슬롯으로 나뉘는 규칙과 해시 태그, MOVED와 ASK, 구성 고르는 기준을 보고, 레플리카 없는 클러스터의 노드 하나를 죽여 CLUSTERDOWN이 나는 과정을 확인한다.
- 태그: tesla, Redis, Database, Distributed Systems · 회사: tesla
- 키워드: Redis Cluster, 해시 슬롯, MOVED
- 길이: 358줄
- 소제목: Cluster는 키를 16384개 슬롯으로 나눈다 / MOVED와 ASK / 단일 서버부터 관리형 서비스까지 / 현장에서 노드 하나가 죽었을 때 / 데이터를 나누는 대가 / 면접에서 나올 만한 질문
- 직접 링크 →: redis-replication-sentinel, redis-basics
- 키워드 백링크 →: vpc-basics
- 이 글로 오는 글 ←: acid-vs-base, bullmq-job-queue, caching-concepts-map, caching-strategies, consistent-hashing, db-sharding, distributed-lock, geohash, pub-sub, rate-limiting-algorithms, redis-basics, redis-persistence-ha, redis-replication-sentinel, sd-cache-and-cdn-tier, sd-leaderboard-scaling, sd-nearby-friends, sd-rate-limiter-design, sd-sharding-intro

#### `redis-memory-eviction` — Redis 메모리가 가득 차면: maxmemory와 축출 정책

- 요약: maxmemory를 정하지 않으면 OOM 킬러에게 죽고, 기본 noeviction이면 가득 찬 순간 쓰기가 실패한다. INFO memory를 읽는 법부터 축출 정책 고르기, 근사 LRU와 LFU의 동작, 만료와 단편화, 리눅스 설정과 여유 메모리 계산까지 정리한다.
- 태그: tesla, Redis, Database, Cache, Performance, Linux · 회사: tesla
- 키워드: maxmemory, 축출 정책, allkeys-lru, 메모리 단편화
- 길이: 752줄
- 소제목: 키 하나가 실제로 차지하는 크기 / 작은 컬렉션은 압축된 모양으로 산다 / INFO memory를 한 줄씩 읽기 / 어떤 키가 메모리를 먹고 있나 / maxmemory를 정하지 않으면 생기는 일 / 가득 찼을 때 지울 키를 고르는 정책 / LRU를 정확하게 하지 않는 이유 / LFU 카운터는 로그로 오르고 시간이 지나면 내려간다 / 만료된 키가 바로 사라지지 않는 이유 / 단편화와 activedefrag / 리눅스 쪽에서 챙길 설정 / 서버 메모리의 몇 퍼센트를 maxmemory로 줄까 / 가득 차기 전에 정해 둘 것 / 면접에서 나올 만한 질문
- 직접 링크 →: redis-basics, caching-strategies, redis-persistence-ha
- 키워드 백링크 →: ds-hash-map, ds-linked-list, sd-leaderboard-sorted-set, layer-mtu-fragmentation, dns
- 이 글로 오는 글 ←: bullmq-job-queue, caching-concepts-map, caching-strategies, count-min-sketch, db-type-key-value, ds-linked-list, js-memory-leak, message-queue-basics, redis-basics, redis-persistence-ha, redis-replication-sentinel, sd-cache-and-cdn-tier

#### `redis-persistence-ha` — Redis 영속성: RDB, AOF, 백업과 복원

- 요약: 재부팅 한 번에 세션이 사라진 서버에서 시작해 RDB와 AOF가 각각 무엇을 지키고 무엇을 잃는지, fork와 copy-on-write, AOF 재작성, 둘을 함께 켤 때를 직접 돌려 보고, 백업 파일로 정말 복원되는지 확인하는 법까지 정리한다.
- 태그: tesla, Redis, Database, Linux · 회사: tesla
- 키워드: RDB 스냅샷, AOF, appendfsync
- 길이: 415줄
- 소제목: 재시작하면 무엇을 읽어 오나 / RDB는 특정 순간의 사진이다 / fork와 copy-on-write / AOF는 쓰기 명령을 한 줄씩 적는다 / AOF가 커지면 다시 쓴다 / RDB와 AOF를 함께 켜면 / 백업은 복원해 봐야 백업이다 / 무엇을 잃어도 되는지부터 정한다 / 면접에서 나올 만한 질문
- 직접 링크 →: redis-replication-sentinel, redis-cluster, redis-basics, redis-memory-eviction
- 키워드 백링크 →: sd-start-single-server, dns
- 이 글로 오는 글 ←: acid-vs-base, bullmq-job-queue, cache-write-policies, caching-strategies, db-type-key-value, docker-compose, message-queue-basics, redis-basics, redis-memory-eviction, redis-replication-sentinel, sd-leaderboard-sorted-set

#### `redis-replication-sentinel` — Redis 복제와 Sentinel: 비동기 복제와 자동 장애 조치

- 요약: 디스크는 살아 있는데 서버가 꺼져 40분 동안 로그인이 안 된 장면에서 시작해 전체·부분 동기화, 레플리카 읽기와 WAIT, Sentinel의 쿼럼과 리더 선출을 따라가고, backlog가 작아 전체 동기화가 반복되는 상황을 직접 재현한다.
- 태그: Redis, Database, Distributed Systems
- 키워드: Redis Sentinel, 부분 동기화, repl-backlog-size
- 길이: 345줄
- 소제목: 복제는 비동기다 / 레플리카에서 읽으면 생기는 일 / Sentinel이 장애를 판단하고 넘기는 과정 / 현장에서 레플리카가 전체 동기화를 반복하는 순간 / 얼마나 멈춰도 되는지부터 정한다 / 면접에서 나올 만한 질문
- 직접 링크 →: redis-persistence-ha, redis-basics, redis-cluster, redis-memory-eviction
- 키워드 백링크 →: leader-election
- 이 글로 오는 글 ←: db-consistency-cap, redis-cluster, redis-persistence-ha, sd-cache-and-cdn-tier, sd-db-replication-intro, sd-load-balancer-stateless

### Programming › Database › SQL (`programming/database/sql`)

#### `connection-pool` — 커넥션 풀 깊이 보기: 연결 비용, 풀 크기, 고갈과 누수, PgBouncer가 깨뜨리는 것

- 요약: 연결 하나가 얼마나 비싼지 재 보고, 리틀의 법칙과 pgbench로 풀 크기의 정점을 찾는다. 풀 고갈과 누수의 증상, PgBouncer transaction 모드에서 실제로 깨지는 SET·advisory lock·prepared statement, 서버리스와 배포 때의 max_connections 계산까지 다룬다.
- 태그: Database, PostgreSQL, Performance, SQL, Node.js
- 키워드: 커넥션 누수, 풀 고갈, max_prepared_statements
- 길이: 558줄
- 소제목: 연결 하나를 여는 데 드는 것 / 풀은 빌려주고 돌려받는 줄이다 / 풀 크기는 얼마로 / 돌려주지 않은 연결 / 앱 밖에 두는 풀, PgBouncer / transaction 모드가 깨뜨리는 것 / max_connections 계산서 / 서버리스와 장애 조치 때 몰려오는 연결 / 풀이 의심될 때 보는 순서 / 숫자를 넣어 계산해 보기 / 연결은 늘리는 게 아니라 나눠 쓰는 것 / 면접에서 나올 만한 질문
- 직접 링크 →: sql-batch-timeout-pool, postgres-operations, circuit-breaker, distributed-lock, postgres-connections-pg-hba
- 키워드 백링크 →: pessimistic-locking, postgres-roles-security, postgres-mvcc-vacuum, db-migration-tools, db-architecture-by-scale, encryption-in-transit, https-tls, autoscaling, latency-bandwidth-throughput, db-replication-sharding, rolling-deployment, backpressure, postgres-getting-started, vpc-basics
- 이 글로 오는 글 ←: api-scaling-ladder, backend-engineer-roadmap, backpressure, bullmq-job-queue, circuit-breaker, db-performance-map, deadlocks, dhcp, failover, fastapi-basics, java-jvm-memory-gc, latency-bandwidth-throughput, monolith-architecture, n-plus-one-queries, network-monitoring, nodejs-server-runtime, pessimistic-locking, production-incidents, sd-split-web-and-db, serverless-limits, sql-batch-timeout-pool, thread-safety, vpc-subnets-route-tables

#### `db-index` — 인덱스: 책 뒤의 찾아보기

- 요약: 주문 100만 건에서 느려진 조회를 PostgreSQL 16의 실행 계획으로 따라가며 B-tree 인덱스가 어떻게 찾는지, Index Scan·Bitmap Heap Scan·Index Only Scan이 언제 갈리는지, MySQL InnoDB의 클러스터드 인덱스는 무엇이 다른지 본다. 현장에서 인덱스가 필요한 테이블을 찾는 순서도 정리한다.
- 태그: tesla, Database, SQL, PostgreSQL, Index, Performance · 회사: tesla
- 키워드: Index Only Scan, B-tree 인덱스, Bitmap Heap Scan, 클러스터드 인덱스
- 길이: 615줄
- 소제목: 실험에 쓸 작은 쇼핑몰 / 100만 줄을 처음부터 끝까지 읽는 계획 / 찾아보기를 하나 만들면 / B-tree는 세 번 만에 잎에 닿는다 / 같은 인덱스를 읽는 네 가지 방법 / MySQL 8은 표 자체가 인덱스다 / 현장에서 인덱스가 필요한 곳을 찾는 순서 / 찾아보기는 정렬된 사본이다 / 면접에서 나올 만한 질문
- 직접 링크 →: db-index-pitfalls, sql-query-tuning, db-index-design
- 키워드 백링크 →: postgres-mvcc-vacuum, mysql-replication-online-ddl, mysql-innodb-basics, db-sharding, db-transaction-isolation, sql-basics
- 이 글로 오는 글 ←: api-scaling-ladder, backend-engineer-roadmap, db-architecture-by-scale, db-index-design, db-index-pitfalls, db-keys-denormalization, db-modeling-normalization, db-performance-map, db-replication-sharding, db-sharding, db-type-graph, db-type-relational, db-type-time-series, db-types-overview, distributed-tracing, ds-binary-tree-bst, ds-hash-map, elasticsearch-inverted-index, geohash, mysql-innodb-basics, postgres-architecture, postgres-data-types, postgres-functions-triggers, postgres-jsonb-search, postgres-mvcc-vacuum, postgres-operations, postgres-reporting-sql, sd-hotel-inventory-scaling, sd-kv-store-write-read-path, sd-music-streaming, sd-proximity-service, sd-unique-id-generator, sql-basics, sql-batch-timeout-pool, sql-filtering-operators, sql-query-rewrite, sql-query-tuning, sql-select-where-null, sqld-correlated-subquery, sqld-data-modeling, sqld-top-n-hierarchical-pivot, sqld-type-conversion, system-design-concepts-map

#### `db-index-design` — 인덱스 고르기: 복합, 커버링, 부분, 식 인덱스와 GIN·BRIN

- 요약: 쿼리 모양에 맞는 인덱스를 고른다. 복합 인덱스의 컬럼 순서, INCLUDE로 힙을 건너뛰는 커버링 인덱스, 일부 행만 담는 부분 인덱스, lower(email) 식 인덱스, GIN과 BRIN을 실행 계획 전후로 비교하고, 겹치는 인덱스와 값 분포를 확인하는 리뷰 순서도 정리한다.
- 태그: Database, SQL, PostgreSQL, Index, Performance
- 키워드: 복합 인덱스, 커버링 인덱스, 부분 인덱스, 식 인덱스, BRIN
- 길이: 593줄
- 소제목: 앞 글의 주문 100만 건 그대로 / 여러 컬럼 인덱스는 순서가 결과를 바꾼다 / 표까지 가지 않는 커버링 인덱스 / 일부 줄만 담는 부분 인덱스 / 함수를 씌운 컬럼과 유니크 인덱스 / B-tree가 아닌 인덱스들 / 인덱스를 하나 더 만들자는 리뷰를 받았을 때 / 쿼리 모양에 맞춰 고른다 / 면접에서 나올 만한 질문
- 직접 링크 →: db-index, db-index-pitfalls
- 키워드 백링크 →: quadtree
- 이 글로 오는 글 ←: api-pagination-sorting, api-scaling-ladder, backend-engineer-roadmap, db-index, db-index-pitfalls, db-keys-denormalization, db-modeling-normalization, db-performance-map, db-type-columnar-olap, db-type-time-series, ds-heap, geohash, integration-tests-real-db, message-queue-basics, microservices, mongodb-document-model, postgres-functions-triggers, postgres-jsonb-search, postgres-mvcc-vacuum, postgres-roles-security, rag-retrieval-quality, rest-api-design, sd-email-storage-search, sql-filtering-operators, sql-query-rewrite, system-design-concepts-map, transactional-outbox, vector-db

#### `db-index-pitfalls` — 인덱스가 안 타는 이유와 인덱스의 대가

- 요약: 인덱스가 있는데도 Seq Scan이 나오는 여섯 가지 경우(함수, 형 변환, 앞이 열린 LIKE, 너무 많은 결과, OR, 낡은 통계)를 실행 계획으로 확인한다. 쓰기 증폭과 HOT 업데이트, 안 쓰는 인덱스 찾기, 운영 중 CREATE INDEX CONCURRENTLY와 INVALID 인덱스 처리도 다룬다.
- 태그: Database, SQL, PostgreSQL, Index, Performance
- 키워드: CREATE INDEX CONCURRENTLY, 쓰기 증폭, INVALID 인덱스
- 길이: 467줄
- 소제목: 주문 100만 건과 인덱스 셋 / 인덱스가 있는데 안 타는 경우 / 인덱스는 쓰기를 느리게 한다 / 운영 중인 테이블에 인덱스 추가하기 / 인덱스를 지우고 만드는 것도 배포다 / 면접에서 나올 만한 질문
- 직접 링크 →: db-index, db-index-design, sql-query-tuning
- 키워드 백링크 →: postgres-mvcc-vacuum, db-migration-tools, mysql-replication-online-ddl, mysql-innodb-basics, db-replication-sharding, sql-basics
- 이 글로 오는 글 ←: backend-engineer-roadmap, db-index, db-index-design, db-migration-tools, db-performance-map, db-type-embedded, db-type-wide-column, sd-kv-store-write-read-path, sql-basics, sql-filtering-operators, zero-downtime-migrations

#### `db-keys-denormalization` — 키와 반정규화: 대리 키, UUID, 일부러 다시 합치기

- 요약: 정규화한 테이블에서 자연 키와 대리 키, UUIDv4와 v7을 인덱스 크기로 비교하고, 주문 당시 가격이 중복이 아닌 이유를 본다. 트리거와 머티리얼라이즈드 뷰로 하는 반정규화, jsonb 열의 경계, EAV·쉼표 목록·소프트 삭제 같은 흔한 설계 실수도 정리한다.
- 태그: Database, SQL, PostgreSQL, SQLD
- 키워드: 반정규화, 대리 키, 부분 유니크 인덱스, 자연 키
- 길이: 476줄
- 소제목: 정규화를 마친 네 테이블 / 자연 키와 대리 키, 그리고 UUID / 주문 당시 가격은 중복이 아니다 / 일부러 다시 합칠 때 (반정규화) / JSONB 열은 어디까지 괜찮나 / 자주 보는 설계 실수 / SQLD에서 묻는 식별자와 반정규화 / 중복을 어디에 둘지 고르는 일 / 면접에서 나올 만한 질문
- 직접 링크 →: db-modeling-normalization, db-transaction-isolation
- 키워드 백링크 →: postgres-architecture, postgres-reporting-sql, db-index, mysql-innodb-basics, db-sharding, db-index-design, db-types-overview, db-partitioning
- 이 글로 오는 글 ←: db-modeling-normalization, sd-email-storage-search, sd-sharding-intro, sd-unique-id-generator, sql-vs-nosql, sqld-data-modeling, sqld-entity-attribute-relationship

#### `db-locking-deadlock` — 재고 -1 막기: 조건부 UPDATE, 잠금, 교착 상태

- 요약: 읽고 판단하고 쓰는 사이의 틈을 조건부 UPDATE, SELECT FOR UPDATE, 버전 열 낙관적 잠금, SERIALIZABLE과 재시도로 막는 방법을 같은 장면에서 비교한다. 잠금이 만드는 교착 상태, 오래 열린 트랜잭션 찾기, 서비스 여러 개에 걸친 작업과 SQLD 잠금 개념도 정리한다.
- 태그: Database, SQL, PostgreSQL, SQLD, Transaction, Concurrency
- 키워드: 교착 상태, 낙관적 잠금, 비관적 잠금
- 길이: 461줄
- 소제목: 계좌, 상품, 주문 세 테이블 / 재고가 음수가 되지 않게 막는 방법들 / 서로 기다리다 멈추는 교착 상태 / 오래 열린 트랜잭션이 남기는 것 / 서비스 여러 개에 걸친 트랜잭션 / SQLD에서 묻는 잠금과 교착 상태 / 틈을 없애거나, 틈을 알아채거나 / 면접에서 나올 만한 질문
- 직접 링크 →: db-transaction-isolation, deadlocks, microservices
- 키워드 백링크 →: sql-basics, saga-pattern, mysql-innodb-basics, event-driven-architecture, distributed-transactions-2pc, sql-batch-timeout-pool, postgres-getting-started
- 이 글로 오는 글 ←: batch-processing, cqrs, db-transaction-isolation, ddd-bounded-context, deadlocks, distributed-lock, grafana-dashboards, http-status-codes, k8s-api-objects, message-queue-basics, mvc-pattern, mysql-innodb-basics, optimistic-locking, pattern-state, pessimistic-locking, postgres-functions-triggers, race-conditions, rest-api-design, saga-pattern, sd-file-sync-conflicts, sd-hotel-double-booking, sd-kv-store-versioning, system-design-study-path

#### `db-migration-tools` — 마이그레이션 도구: 기록 표, 잠금, 체크섬, 실패한 마이그레이션 되살리기

- 요약: Flyway, knex, node-pg-migrate, golang-migrate를 PostgreSQL 16에서 돌려 기록 표와 잠금이 하는 일을 본다. 파드 여러 개의 동시 실행, 중간에 죽은 마이그레이션의 잔재, 적용한 파일을 고치면 막히는 이유, down 대신 roll forward를 쓰는 이유를 다룬다.
- 태그: Database, PostgreSQL, SQL, DevOps, Troubleshooting
- 키워드: Flyway, 마이그레이션 도구, flyway_schema_history, schema_migrations
- 길이: 479줄
- 소제목: 내 DB에만 있는 컬럼 / 파일 하나가 버전 하나다 / migrate 한 번에 일어나는 일 / 파드 세 개가 동시에 migrate를 부르면 / 실행하다 죽으면 무엇이 남나 / Flyway가 스스로를 기다린 날 / 적용한 파일은 고치지 않는다 / down 파일은 운영의 되돌리기 버튼이 아니다 / 도구를 고를 때 보는 것 / 언제, 어디서 돌리나 / 스키마도 코드처럼 리뷰한다 / 면접에서 나올 만한 질문
- 직접 링크 →: zero-downtime-migrations, schema-versioning, db-architecture-by-scale, db-index-pitfalls
- 키워드 백링크 →: pessimistic-locking, k8s-pod-probes, k8s-deploy-pipeline-eks, rolling-deployment, sql-basics
- 이 글로 오는 글 ←: connection-pool, db-architecture-by-scale, db-index-pitfalls, k8s-pod-lifecycle, mysql-replication-online-ddl, postgres-functions-triggers, postgres-getting-started, postgres-operations, rollback-strategy, schema-versioning, sd-hotel-double-booking, zero-downtime-migrations

#### `db-modeling-normalization` — 테이블을 어떻게 나누나: 정규화

- 요약: 전화번호 하나 바꾸는 데 300줄을 고쳐야 하는 테이블에서 시작해, 함수 종속을 기준으로 1NF부터 BCNF까지 나눠 보고, 나눈 테이블을 제약 조건으로 지키는 법을 실제 SQL로 따라간다.
- 태그: Database, SQL, PostgreSQL, SQLD
- 키워드: 정규화, 함수 종속, BCNF
- 길이: 683줄
- 소제목: 한 테이블에 다 넣었을 때 생기는 일 / 무엇이 무엇을 정하나 (함수 종속) / 행을 하나로 집어내는 열 (키) / 제1정규형: 칸 하나에 값 하나 / 제2정규형: 키의 일부에만 기대는 열 떼어 내기 / 제3정규형: 키가 아닌 열을 거쳐 정해지는 열 / 제약 조건이 대신 막아 주는 것 / BCNF: 결정자가 모두 후보키여야 한다 / 제4정규형과 제5정규형은 짧게 / SQLD에서 묻는 정규화 / 무엇이 무엇을 정하나만 따라가면 된다 / 면접에서 나올 만한 질문
- 직접 링크 →: db-keys-denormalization, db-index, db-transaction-isolation
- 키워드 백링크 →: json-crud-http, mysql-innodb-basics, db-index-design, sqld-entity-attribute-relationship
- 이 글로 오는 글 ←: ab-testing, architecture-patterns-overview, caching-concepts-map, cqrs, db-architecture-by-scale, db-keys-denormalization, db-type-relational, edge-caching, elasticsearch-inverted-index, encryption-at-rest, git-ignore-config, git-large-files-secrets, global-rollout-localization, graph-rag, graphql-basics, http-message, idempotency-key, ids-ips, js-immutability-react, lossy-counting, mongodb-document-model, nginx-basics, rag-retrieval-quality, ray-casting, rendering-ssr, sd-autocomplete-data-pipeline, sd-autocomplete-trie, sd-email-protocols, sd-email-storage-search, sd-sharding-intro, sql-aggregation-pitfalls, sql-vs-nosql, sqld-data-modeling, sqld-entity-attribute-relationship, vector-db, waf

#### `db-transaction-isolation` — 트랜잭션과 격리 수준: 동시에 고치면 생기는 일

- 요약: 마지막 재고 1개를 두 사람이 동시에 사서 재고가 -1이 되는 장면을 두 세션으로 재현하고, ACID와 다섯 가지 동시성 현상, 격리 수준이 실제로 무엇을 막는지, MVCC가 버전을 어떻게 고르는지를 PostgreSQL과 MySQL을 나란히 놓고 본다.
- 태그: tesla, Database, SQL, PostgreSQL, SQLD, Transaction, Concurrency · 회사: tesla
- 키워드: 격리 수준, MVCC, 갱신 손실, 쓰기 왜곡
- 길이: 679줄
- 소제목: 마지막 1개를 둘이 샀다 / 트랜잭션이 약속하는 네 가지 / BEGIN, COMMIT, ROLLBACK, SAVEPOINT / 동시에 고치면 생기는 다섯 가지 일 / 격리 수준 네 단계와 실제 동작 / 버전을 남겨서 읽기와 쓰기를 떼어 놓기 (MVCC) / MySQL InnoDB는 어떻게 다른가 / SQLD에서 묻는 트랜잭션과 격리 수준 / 격리 수준은 무엇을 허용하느냐의 문제다 / 면접에서 나올 만한 질문
- 직접 링크 →: db-locking-deadlock
- 키워드 백링크 →: postgres-mvcc-vacuum, mysql-innodb-basics, sql-basics, mysql-replication-online-ddl, bloom-filter, acid-transactions, postgres-getting-started
- 이 글로 오는 글 ←: acid-transactions, acid-vs-base, backend-engineer-roadmap, cache-write-policies, consistency-models, db-architecture-by-scale, db-consistency-cap, db-index, db-keys-denormalization, db-locking-deadlock, db-modeling-normalization, db-type-newsql, db-type-relational, ddd-bounded-context, integration-tests-real-db, message-delivery-semantics, mysql-innodb-basics, optimistic-locking, pessimistic-locking, postgres-advanced-sql, postgres-architecture, postgres-functions-triggers, postgres-mvcc-vacuum, postgres-operations, race-conditions, redis-basics, saga-pattern, sd-hotel-double-booking, sql-insert-update-delete, sql-query-rewrite, system-design-concepts-map

#### `n-plus-one-queries` — N+1 쿼리 깊이 보기: ORM 지연 로딩, 즉시 로딩, DataLoader

- 요약: ORM이 언제 쿼리를 몰래 보내는지 Sequelize로 101개 쿼리를 재현하고, JOIN과 IN 중 무엇을 고를지, GraphQL 리졸버의 N+1을 DataLoader로 묶는 법, pg_stat_statements와 쿼리 수 테스트로 운영에서 찾고 막는 법을 다룬다.
- 태그: Database, SQL, PostgreSQL, Performance, Node.js
- 키워드: DataLoader, 즉시 로딩, eager loading
- 길이: 465줄
- 소제목: 화면은 그대로인데 쿼리가 101개 / ORM은 객체에 손을 댈 때 쿼리를 보낸다 / 관계가 깊어지면 숫자가 곱해진다 / 가까운 DB에서는 안 보이는 이유 / 미리 가져오는 두 가지 방법 / ORM마다 이름만 다르다 / 필드마다 함수가 도는 GraphQL / DataLoader를 잘못 쓰면 생기는 일 / 운영 중인 서비스에서 N+1 찾기 / 반복문 바깥에서 한 번에 묻기 / 면접에서 나올 만한 질문
- 직접 링크 →: sql-query-rewrite, sql-query-tuning, connection-pool, pattern-proxy, latency-bandwidth-throughput, caching-strategies, distributed-tracing
- 키워드 백링크 →: event-loop, db-architecture-by-scale, graphql-basics, vpc-basics, sql-batch-timeout-pool, redis-basics
- 이 글로 오는 글 ←: graphql-basics, layered-architecture, rest-api-design, sd-latency-numbers, sd-split-web-and-db, sql-query-rewrite

#### `optimistic-locking` — 낙관적 잠금: 버전으로 덮어쓰기를 알아채기

- 요약: 잠그지 않고 쓰는 순간에 버전을 확인해 덮어쓰기를 알아채는 방법이다. 버전으로 무엇을 쓸지, 0행이 오면 무엇을 할지, 충돌이 잦으면 왜 무너지는지, ETag와 If-Match로 브라우저까지 버전을 들고 가는 법을 실제 출력으로 본다.
- 태그: Database, PostgreSQL, SQL, Concurrency, Transaction, HTTP
- 키워드: If-Match, 버전 컬럼, @Version
- 길이: 603줄
- 소제목: 나중에 저장한 사람이 이긴다 / 버전 번호 하나로 덮어쓰기를 알아챈다 / UPDATE 0이 오면 무엇을 하나 / 잠그지 않는다더니 기다렸다 / 버전 숫자 대신 쓸 수 있는 것들 / 충돌이 잦으면 재시도가 일을 잡아먹는다 / 브라우저까지 버전을 들고 가기 / 다른 저장소에도 같은 모양이 있다 / 현장에서 덮어쓰기를 찾는 법 / 버전은 확인을 쓰기 안으로 넣는 장치다 / 면접에서 나올 만한 질문
- 직접 링크 →: db-locking-deadlock, db-transaction-isolation, resilience-patterns, pessimistic-locking, http-caching-cdn, http-status-codes
- 키워드 백링크 →: k8s-configmap, postgres-advanced-sql, db-type-key-value, sql-basics, mongodb-document-model, mysql-innodb-basics, redis-basics, local-k8s-kind-minikube, postgres-getting-started
- 이 글로 오는 글 ←: acid-transactions, acid-vs-base, cache-write-policies, cqrs, distributed-lock, encryption-at-rest, event-driven-architecture, grafana-dashboards, json-crud-http, k8s-api-objects, k8s-architecture, pattern-state, pessimistic-locking, race-conditions, rest-api-design, saga-pattern, sd-file-sync-conflicts, sd-hotel-double-booking, sd-kv-store-versioning, system-design-study-path

#### `pessimistic-locking` — 비관적 잠금: FOR UPDATE가 세우는 줄

- 요약: 읽는 순간부터 행을 붙잡는 잠금이 PostgreSQL 안에서 어디에 적히고 누가 누구를 기다리는지 본다. 행 잠금 네 가지 세기, 외래 키와의 충돌, 잠금 대기 추적, advisory lock까지 두 세션으로 재현한다.
- 태그: Database, PostgreSQL, SQL, Concurrency, Transaction, Troubleshooting
- 키워드: FOR NO KEY UPDATE, advisory lock, pg_blocking_pids
- 길이: 607줄
- 소제목: 상품과 주문 두 테이블 / 잠금은 한 행 앞에 줄을 세운다 / 행 잠금은 행 안에 적힌다 / 네 가지 세기 중 무엇을 고르나 / 공유 잠금은 줄을 새치기한다 / 기다릴지, 포기할지, 건너뛸지 / FOR UPDATE를 붙일 수 없는 쿼리 / 행이 아닌 것을 잠그는 advisory lock / MySQL InnoDB에서 달라지는 것 / 잠금 대기를 좁혀 가는 순서 / 잠금은 줄을 세우는 도구다 / 면접에서 나올 만한 질문
- 직접 링크 →: db-locking-deadlock, optimistic-locking, connection-pool, distributed-lock
- 키워드 백링크 →: zero-downtime-migrations, db-architecture-by-scale, mysql-innodb-basics, sql-batch-timeout-pool, db-transaction-isolation, postgres-getting-started
- 이 글로 오는 글 ←: acid-transactions, api-scaling-ladder, connection-pool, cron-jobs, db-architecture-by-scale, db-migration-tools, ddd-bounded-context, deadlocks, distributed-lock, mysql-innodb-basics, optimistic-locking, postgres-operations, race-conditions, sd-hotel-double-booking, sql-batch-timeout-pool, transactional-outbox, zero-downtime-migrations

#### `sql-aggregation-pitfalls` — 집계 숫자가 틀리는 이유: COUNT, AVG와 NULL, FILTER, GROUP BY

- 요약: 같은 테이블에서 평균 80점과 44점이 나온 리포트에서 출발해 count(*)와 count(컬럼), NULL을 건너뛰는 평균, 정수 나눗셈, 빈 집합, LEFT JOIN 뒤의 개수, WHERE와 FILTER의 차이, GROUP BY와 기본 키 함수 종속을 PostgreSQL 16으로 재현한다.
- 태그: Database, SQL, PostgreSQL
- 키워드: FILTER 절, any_value, ONLY_FULL_GROUP_BY, 정수 나눗셈
- 길이: 667줄
- 소제목: 아홉 줄, 점수 다섯 개 / 같은 아홉 줄을 세는 방법이 셋이다 / 평균이 둘로 갈라진 이유 / 행이 하나도 없을 때 / LEFT JOIN 뒤의 `count(*)`는 0을 세지 못한다 / 조건별로 세면 WHERE와 FILTER가 다른 행을 지운다 / ELSE 0을 붙인 count는 전부를 센다 / WHERE에 쓸지 HAVING에 쓸지는 숫자로 정한다 / GROUP BY에는 무엇을 적어야 하나 / NULL도 한 묶음이 되고, 이어 붙이기는 순서를 적어야 한다 / 리포트 숫자가 맞지 않을 때 보는 순서 / 집계 함수를 직접 만들어 보기 / 분모부터 확인한다 / 면접에서 나올 만한 질문
- 직접 링크 →: sql-logical-order, sql-filtering-operators, sqld-group-by-having, sql-joins-in-practice, sql-case-when
- 키워드 백링크 →: db-modeling-normalization
- 이 글로 오는 글 ←: linux-namespaces-cgroups, sql-case-when, sql-filtering-operators, sql-interview-problems, sql-joins-in-practice, sql-logical-order, sql-study-path

#### `sql-basics` — SQL 기본 명령어: 테이블과 제약 조건 만들기

- 요약: 빈 DB에서 테이블 세 개를 만들고 타입과 제약 조건으로 들어올 값을 정한 뒤, ALTER로 고치고 GRANT로 권한을 나눈다. 운영에서 SQLSTATE로 에러를 구분하고, 외래 키 인덱스를 점검하고, NOT VALID로 제약을 거는 법까지 실제 출력으로 본다.
- 태그: Database, SQL, PostgreSQL
- 키워드: DDL, 참조 무결성, SQLSTATE
- 길이: 665줄
- 소제목: 명령어는 네 묶음으로 나뉜다 / 빈 DB에 테이블 세 개 만들기 / 칸마다 담을 값의 종류 정하기 / 잘못된 값을 DB가 막아 주는 제약 조건 / 만든 테이블 고치기 (ALTER와 RENAME) / 권한 주고 뺏기 (GRANT와 REVOKE) / 현장에서 테이블 정의를 다시 꺼내 보는 순간 / 테이블 모양이 곧 규칙이다 / 면접에서 나올 만한 질문
- 직접 링크 →: sql-select-where-null, sql-insert-update-delete, db-index, db-index-pitfalls, sqld-data-modeling
- 키워드 백링크 →: postgres-getting-started
- 이 글로 오는 글 ←: db-architecture-by-scale, db-index, db-index-pitfalls, db-locking-deadlock, db-migration-tools, db-transaction-isolation, db-type-newsql, db-type-relational, layered-architecture, mysql-innodb-basics, mysql-replication-online-ddl, optimistic-locking, postgres-advanced-sql, postgres-data-types, postgres-functions-triggers, postgres-getting-started, postgres-operations, sd-hotel-double-booking, sql-injection, sql-insert-update-delete, sql-select-where-null, sql-study-path, sql-views-materialized, sqld-data-modeling, sqld-entity-attribute-relationship, zero-downtime-migrations

#### `sql-batch-timeout-pool` — 쿼리 밖의 비용: 쓰기 묶기, 시간 한도, 커넥션 풀

- 요약: 쿼리 하나는 빨라도 커밋 수, 문장 수, 트랜잭션 길이, 연결 수에서 시간이 샌다. 배치 INSERT와 COPY, 큰 DELETE 나누기, VACUUM을 막는 열린 트랜잭션, statement_timeout과 lock_timeout, PgBouncer transaction 모드의 주의점을 실제 출력으로 본다.
- 태그: Database, SQL, PostgreSQL, Performance
- 키워드: statement_timeout, 배치 INSERT, 커넥션 풀
- 길이: 265줄
- 소제목: 한 줄씩 넣지 말고 묶어서 넣는다 / 오래 열린 트랜잭션은 청소를 막는다 / 끝나지 않는 쿼리에 한도를 건다 / 연결은 풀로 나눠 쓴다 / 쿼리 바깥에서 새는 시간 / 면접에서 나올 만한 질문
- 직접 링크 →: sql-query-tuning, sql-query-rewrite, db-index, sql-insert-update-delete, connection-pool
- 키워드 백링크 →: pessimistic-locking, postgres-mvcc-vacuum, db-architecture-by-scale, postgres-getting-started
- 이 글로 오는 글 ←: acid-transactions, api-scaling-ladder, autoscaling, backend-engineer-roadmap, backpressure, batch-processing, blue-green-deployment, canary-release, circuit-breaker, connection-pool, db-architecture-by-scale, db-locking-deadlock, db-performance-map, db-replication-sharding, deadlocks, design-patterns-overview, dns, eventual-consistency, failover, fastapi-basics, garbage-collection, go-concurrency-basics, graphql-basics, idempotency-key, iptables-nat, java-jvm-memory-gc, latency-bandwidth-throughput, layered-architecture, long-polling, monitoring-basics, monolith-architecture, mysql-replication-online-ddl, n-plus-one-queries, nat-traversal, network-partitions, nodejs-server-runtime, pattern-abstract-factory, pattern-bridge, pattern-singleton, percentile-latency, pessimistic-locking, ports-and-sockets, postgres-connections-pg-hba, postgres-roles-security, production-incidents, race-conditions, resilience-patterns, rolling-deployment, scaling-horizontal-vertical, sd-load-balancer-stateless, sd-split-web-and-db, secrets-management, service-discovery, sql-interview-problems, sql-query-rewrite, sql-query-tuning, sql-study-path, tcp-connection-lifecycle, timeouts

#### `sql-case-when` — CASE WHEN 제대로 쓰기: 조건 순서, 타입, 조건부 집계와 피벗

- 요약: 95점이 C 등급으로 나온 쿼리에서 출발해 CASE가 조건을 읽는 순서, NULL과 단순형 CASE, THEN의 타입 맞추기, 실행되지 않을 ELSE가 에러를 내는 상수 접기를 재현한다. 조건부 집계로 행을 열로 돌리는 피벗, ORDER BY와 UPDATE 안의 CASE, WHERE의 CASE가 인덱스를 막는 모습까지 PostgreSQL 16으로 확인한다.
- 태그: Database, SQL, PostgreSQL
- 키워드: CASE WHEN, 조건부 집계, 상수 접기
- 길이: 606줄
- 소제목: 위에서 아래로, 처음 맞는 곳에서 멈춘다 / THEN마다 타입이 같아야 한다 / 실행되지 않을 ELSE가 에러를 낸다 / 조건마다 따로 더하기 / 행을 열로 돌리기 / ORDER BY와 UPDATE 안의 CASE / WHERE 안의 CASE는 인덱스를 막는다 / CASE를 리뷰할 때 보는 것 / 피벗을 직접 만들어 보기 / 순서와 타입을 먼저 정한다 / 면접에서 나올 만한 질문
- 직접 링크 →: sql-logical-order, sql-aggregation-pitfalls, sqld-null-functions, sqld-top-n-hierarchical-pivot, sql-joins-in-practice, sql-subqueries-exists-lateral
- 키워드 백링크 →: sqld-group-by-having, sql-filtering-operators, db-replication-sharding
- 이 글로 오는 글 ←: sql-aggregation-pitfalls, sql-cte-recursive, sql-study-path, sql-subqueries-exists-lateral, sql-window-functions-pg, sqld-rollup-cube-grouping-sets, sqld-top-n-hierarchical-pivot

#### `sql-cte-recursive` — 재귀 CTE 실전: 작업 테이블, 여러 길로 닿는 그래프, 고리와 CYCLE 절

- 요약: 선수 강의를 끝까지 따라가야 하는 화면에서 출발해 재귀 CTE가 작업 테이블로 반복하는 방식, 두 길로 닿은 강의가 두 번 나오는 문제, 고리 하나로 끝나지 않는 쿼리와 PostgreSQL 14의 CYCLE 절을 재현한다. 재귀 쪽에 집계나 LEFT JOIN을 못 쓰는 이유와 20만 개 트리에서 인덱스 하나로 186ms가 5.7ms가 되는 실행 계획까지 본다.
- 태그: Database, SQL, PostgreSQL, Performance
- 키워드: 작업 테이블, CYCLE 절, WorkTable Scan
- 길이: 646줄
- 소제목: 선수 강의는 몇 단계일지 모른다 / WITH 하나는 이름 붙인 중간 결과다 / 재귀 CTE는 새 행이 없을 때까지 같은 쿼리를 돈다 / 두 길로 닿은 강의는 두 번 나온다 / 고리 하나가 쿼리를 끝나지 않게 한다 / 재귀 쪽에 쓸 수 없는 문법 / 거꾸로 따라가기와 이미 들은 강의 빼기 / 20만 개 트리에서 반복마다 읽는 양 / 트리를 저장하는 다른 방법 / 재귀를 손으로 돌려 보기 / 멈추는 조건은 데이터가 정한다 / 면접에서 나올 만한 질문
- 직접 링크 →: sqld-top-n-hierarchical-pivot, postgres-advanced-sql, sql-logical-order, sql-case-when, sql-joins-in-practice, sql-window-functions-pg, sql-views-materialized
- 키워드 백링크 →: sqld-set-operators, ds-graph-bfs-dfs, js-closures
- 이 글로 오는 글 ←: graph-rag, sql-interview-problems, sql-study-path, sql-views-materialized, sql-window-functions-pg, sqld-top-n-hierarchical-pivot

#### `sql-filtering-operators` — WHERE 연산자의 함정: NOT IN과 NULL, BETWEEN과 시간대, LIKE와 인덱스

- 요약: 10월 수강 건수가 대시보드와 다르게 나온 일에서 시작해 NOT IN 목록의 NULL, = ANY와 빈 배열, timestamptz에서 BETWEEN이 놓치는 행, 세션 시간대가 바꾸는 범위, LIKE의 와일드카드 이스케이프를 따져 본다. 앞이 정해진 검색과 앞이 열린 검색이 어떤 인덱스를 타는지도 실행 계획으로 비교한다.
- 태그: Database, SQL, PostgreSQL, Index, Performance
- 키워드: ILIKE, 반열린 구간, BETWEEN 경계
- 길이: 689줄
- 소제목: 이 글에서 거르는 행들 / 목록에 NULL 하나가 섞이면 / 10월은 31일 0시에 끝난다 / 같은 쿼리, 다른 시간대 / 날짜로 잘라 비교하면 인덱스를 못 쓴다 / LIKE가 특별하게 읽는 두 글자 / 앞이 열린 검색과 인덱스 / 검색 조건을 리뷰할 때 보는 것 / LIKE를 직접 구현해 보기 / 경계와 특수 문자를 의심한다 / 면접에서 나올 만한 질문
- 직접 링크 →: sql-logical-order, sql-aggregation-pitfalls, sql-select-where-null, sql-subqueries-exists-lateral, db-index-pitfalls, sql-injection, postgres-jsonb-search
- 키워드 백링크 →: db-index, db-index-design
- 이 글로 오는 글 ←: big-o-notation, quadtree, ray-casting, sql-aggregation-pitfalls, sql-case-when, sql-interview-problems, sql-joins-in-practice, sql-logical-order, sql-study-path, sql-subqueries-exists-lateral

#### `sql-insert-update-delete` — 행 넣고 고치고 지우기: UPSERT, 트랜잭션, TRUNCATE

- 요약: INSERT와 ON CONFLICT, MERGE, WHERE 없는 UPDATE를 막는 습관, COMMIT·ROLLBACK·SAVEPOINT, DELETE·TRUNCATE·DROP의 차이를 실제로 돌려 본다. 열어 둔 트랜잭션이 다른 요청을 붙잡을 때 pg_stat_activity로 찾고 타임아웃으로 막는 법, Oracle·SQL Server와 다른 점도 모았다.
- 태그: Database, SQL, PostgreSQL, Transaction
- 키워드: UPSERT, TRUNCATE, SAVEPOINT
- 길이: 562줄
- 소제목: 이어서 쓰는 작은 쇼핑몰 / 행 넣기와 있으면 고치기 / 고치고 지우기 전에 BEGIN부터 / COMMIT, ROLLBACK, SAVEPOINT로 묶고 되돌리기 / DELETE, TRUNCATE, DROP은 지우는 범위가 다르다 / 열어 둔 트랜잭션이 다른 요청을 붙잡을 때 / Oracle과 SQL Server에서는 이렇게 다르다 / 바꾸기 전에 되돌릴 길부터 / 면접에서 나올 만한 질문
- 직접 링크 →: sql-basics, sql-select-where-null, db-transaction-isolation
- 키워드 백링크 →: postgres-advanced-sql, postgres-operations, postgres-getting-started
- 이 글로 오는 글 ←: cqrs, db-type-embedded, integration-tests-real-db, postgres-roles-security, sql-basics, sql-batch-timeout-pool, sql-select-where-null, sql-study-path

#### `sql-interview-problems` — SQL 면접 문제: 두 번째로 큰 값, 그룹별 상위 N, 중복 제거, 누적 합계, 연속 구간

- 요약: LIMIT 1 OFFSET 1이 동점에서 틀리는 두 번째로 큰 값부터 그룹별 상위 N개, 할부를 지우지 않는 중복 제거, 누적 합계, 날짜에서 순번을 빼는 연속 구간과 3일 연속 출석까지 같은 데이터로 푼다. 문제마다 흔한 오답과 동점, 빈 결과, NULL, 중복 같은 꼬리 질문을 실제 결과로 확인한다.
- 태그: Database, SQL, PostgreSQL
- 키워드: gaps and islands, 연속 출석, 두 번째로 큰 값
- 길이: 544줄
- 소제목: 문제를 풀 데이터 / 두 번째로 비싼 가격 / 카테고리마다 비싼 강의 두 개 / 같은 결제가 두 번 들어갔다 / 수강생별 누적 결제액 / 연속 출석 구간 찾기 / 3일 이상 연속으로 나온 사람 / 문제를 받으면 먼저 묻는 것 / 연속 출석을 코드로 풀어 보기 / 도구는 몇 개뿐이다 / 면접에서 나올 만한 질문
- 직접 링크 →: sql-logical-order, sql-aggregation-pitfalls, sql-subqueries-exists-lateral, sql-window-functions-pg, sqld-window-functions, sql-cte-recursive, idempotency-key, postgres-advanced-sql, sql-batch-timeout-pool, sql-filtering-operators, sql-views-materialized
- 키워드 백링크 →: postgres-data-types, sqld-correlated-subquery, sqld-group-by-having, resilience-patterns, http-methods, webhooks
- 이 글로 오는 글 ←: sql-study-path, sql-window-functions-pg

#### `sql-joins-in-practice` — 조인 실전: 행이 곱해지는 조인, WHERE가 지운 LEFT JOIN, 안티 조인

- 요약: 강의 리포트의 수강생 수와 매출이 몇 배로 불어난 일에서 출발해 조인이 행을 곱하는 자리를 찾고, 먼저 묶고 붙여서 고친다. WHERE 한 줄이 LEFT JOIN을 INNER JOIN으로 바꾸는 모습, PostgreSQL 16의 Right Anti Join, FULL JOIN 대사와 등호 조건 제약, 셀프 조인을 실행 계획으로 확인한다.
- 태그: Database, SQL, PostgreSQL, Performance
- 키워드: 행 곱하기, 안티 조인, Right Anti Join, FULL JOIN
- 길이: 697줄
- 소제목: 결제와 후기를 더한 강의 사이트 / 행이 곱해지는 자리를 숫자로 찾는다 / 묶고 나서 붙인다 / WHERE 한 줄이 LEFT JOIN을 지운다 / 짝이 없는 행을 찾는 세 가지 모양 / 결제와 수강 기록 맞춰 보기 / 같은 테이블을 두 번 읽는 조인 / 리포트 숫자가 이상할 때 조인부터 의심하는 순서 / 조인을 손으로 짜 보기 / 행 수를 먼저 센다 / 면접에서 나올 만한 질문
- 직접 링크 →: sqld-joins, sql-logical-order, sql-filtering-operators, sql-aggregation-pitfalls, sql-subqueries-exists-lateral
- 키워드 백링크 →: sql-query-tuning
- 이 글로 오는 글 ←: sql-aggregation-pitfalls, sql-case-when, sql-cte-recursive, sql-query-rewrite, sql-study-path, sql-subqueries-exists-lateral, sql-window-functions-pg, sqld-subquery-set-operators

#### `sql-logical-order` — SELECT의 논리적 처리 순서: 별칭, 윈도 함수, DISTINCT, LIMIT

- 요약: 월별 리포트가 묶음마다 1로 나온 버그에서 출발해 PostgreSQL이 SELECT를 읽는 여덟 단계를 따라간다. 별칭이 보이는 절, 윈도 함수와 DISTINCT의 자리, 동점과 WITH TIES, 집계가 CASE보다 먼저 끝나는 이유, 실제 실행 계획과의 차이를 실제 출력으로 확인한다.
- 태그: Database, SQL, PostgreSQL
- 키워드: WITH TIES, 출력 컬럼 이름, QUALIFY
- 길이: 687줄
- 소제목: 수강생 다섯, 강의 다섯, 수강 기록 아홉 / 한 문장이 여덟 단계를 지난다 / 별칭은 SELECT를 지나야 생긴다 / 같은 이름이면 GROUP BY는 원래 컬럼을 고른다 / 윈도 함수는 HAVING보다 늦다 / DISTINCT는 정렬보다 먼저 겹친 걸 뺀다 / LIMIT은 맨 끝이고, 동점은 정해 주지 않으면 운이다 / 집계는 CASE보다 먼저 끝난다 / 논리 순서와 실제 실행은 다르다 / 에러 메시지에서 단계를 거꾸로 짚기 / 단계를 직접 밟아 보기 / 순서를 알면 에러가 설명된다 / 면접에서 나올 만한 질문
- 직접 링크 →: sql-select-where-null, sqld-group-by-having, sql-filtering-operators, sql-aggregation-pitfalls, sql-window-functions-pg, postgres-reporting-sql, sql-query-rewrite
- 키워드 백링크 →: db-sharding, db-type-columnar-olap, js-short-circuit, postgres-getting-started
- 이 글로 오는 글 ←: sql-aggregation-pitfalls, sql-case-when, sql-cte-recursive, sql-filtering-operators, sql-interview-problems, sql-joins-in-practice, sql-study-path, sql-subqueries-exists-lateral, sql-views-materialized, sql-window-functions-pg

#### `sql-query-rewrite` — 쿼리 고쳐 쓰기: sargable 조건, 키셋 페이지네이션, N+1

- 요약: 찾은 느린 쿼리를 원인별로 고쳐 쓰고 전후 실행 계획을 비교한다. 필요한 컬럼만 고르기, 컬럼에 함수를 씌우지 않는 조건, OFFSET 대신 키셋, N+1 제거, 비싼 count(*), EXISTS·IN·JOIN과 NOT IN 함정, 코드 리뷰에서 먼저 걸러 낼 모양까지 다룬다.
- 태그: Database, SQL, PostgreSQL, Performance
- 키워드: N+1, 키셋 페이지네이션, sargable
- 길이: 634줄
- 소제목: 주문 100만 건과 인덱스 넷 / 필요한 컬럼만 가져온다 / 컬럼은 그대로 두고 값을 바꾼다 / 뒤 페이지로 갈수록 느려지는 OFFSET / 목록 하나에 쿼리 41개 / 전체 개수 세기는 비싸다 / EXISTS, IN, JOIN 중 무엇을 쓰나 / 코드 리뷰에서 먼저 걸러 내는 모양 / 읽는 양을 줄이는 쪽으로 / 면접에서 나올 만한 질문
- 직접 링크 →: sql-query-tuning, db-index, api-pagination-sorting, n-plus-one-queries, sql-batch-timeout-pool
- 키워드 백링크 →: rest-api-design, graphql-basics, mysql-innodb-basics, loading-patterns, db-index-design, sql-subqueries-exists-lateral, sql-joins-in-practice, pattern-proxy, postgres-architecture, db-transaction-isolation
- 이 글로 오는 글 ←: api-pagination-sorting, api-styles-overview, big-o-notation, graphql-basics, microservices-decomposition, n-plus-one-queries, pattern-proxy, postgres-operations, postgres-reporting-sql, rest-api-design, rolling-deployment, sd-latency-numbers, sd-leaderboard-sorted-set, sd-load-balancer-stateless, sd-news-feed-retrieval, sd-split-web-and-db, sql-batch-timeout-pool, sql-logical-order, sql-query-tuning, sql-study-path, sql-subqueries-exists-lateral

#### `sql-query-tuning` — 느린 쿼리 찾기: pg_stat_statements와 실행 계획 읽기

- 요약: pg_stat_statements와 느린 쿼리 로그로 범인을 찾고, EXPLAIN (ANALYZE, BUFFERS)를 안쪽부터 읽으며 틀린 예상 행 수가 조인 방법을 어떻게 틀어지게 하는지 본다. Nested Loop, Hash Join, Merge Join이 언제 나오는지도 실제 계획으로 비교한다.
- 태그: Database, SQL, PostgreSQL, Performance
- 키워드: EXPLAIN ANALYZE, pg_stat_statements, Hash Join, Nested Loop
- 길이: 364줄
- 소제목: 어떤 쿼리가 시간을 먹는지부터 찾는다 / 느린 쿼리를 로그에 남긴다 / 실행 계획은 안쪽부터 읽는다 / 조인을 처리하는 세 가지 방법 / 찾았으면 고칠 차례 / 면접에서 나올 만한 질문
- 직접 링크 →: sql-query-rewrite, sql-batch-timeout-pool, db-index
- 키워드 백링크 →: ds-hash-map
- 이 글로 오는 글 ←: db-index, db-index-pitfalls, db-performance-map, db-replication-sharding, db-type-relational, n-plus-one-queries, postgres-architecture, postgres-mvcc-vacuum, postgres-operations, sql-batch-timeout-pool, sql-joins-in-practice, sql-query-rewrite, sql-select-where-null, sql-study-path, sqld-joins

#### `sql-select-where-null` — SELECT와 NULL: 원하는 행만 골라 읽기

- 요약: SELECT의 처리 순서, WHERE와 AND·OR 우선순위, NULL과 3값 논리, NOT IN 함정, 정렬과 DISTINCT와 LIMIT를 실제 출력으로 따라간다. 리포트 숫자가 안 맞을 때 NULL부터 보는 방법도 정리한다.
- 태그: Database, SQL, PostgreSQL
- 키워드: 3값 논리, IS DISTINCT FROM, NULLS FIRST
- 길이: 624줄
- 소제목: 회원 넷, 상품 셋, 주문 다섯 / SELECT 한 문장을 조각으로 읽기 / 원하는 행만 고르는 WHERE / NULL은 값이 아니라 모른다는 표시 / 정렬하고, 겹친 것 빼고, 잘라서 보기 / 리포트 숫자가 안 맞을 때 먼저 보는 것 / 모름을 모름으로 다루기 / 면접에서 나올 만한 질문
- 직접 링크 →: sql-basics, sql-query-tuning, sql-insert-update-delete
- 키워드 백링크 →: db-index, sqld-group-by-having, postgres-getting-started
- 이 글로 오는 글 ←: postgres-data-types, postgres-functions-triggers, sql-basics, sql-filtering-operators, sql-insert-update-delete, sql-logical-order, sql-study-path, sql-subqueries-exists-lateral, sqld-null-functions, sqld-subquery-set-operators

#### `sql-study-path` — SQL 공부 순서: 쿼리 하나를 여섯 단계로 키우며 보는 SELECT부터 윈도 함수까지

- 요약: 회원 넷, 주문 일곱으로 쿼리 하나를 SELECT, WHERE, GROUP BY, JOIN, 서브쿼리, 윈도 함수 순서로 키운다. 갈래마다 자주 틀리는 자리를 실제 psql 출력으로 짚고 자세한 글로 넘긴다.
- 태그: SQL, PostgreSQL, Database
- 키워드: SQL 학습 순서, SQL 로드맵
- 길이: 449줄
- 소제목: 여섯 갈래를 배우는 순서 / 회원 넷, 주문 일곱 / 첫 단계는 그냥 읽는다 / 결제된 10월 주문만 남기기 / 회원마다 한 줄로 묶기 / 이름을 붙이면 choi가 돌아온다 / 평균보다 많이 산 회원만 / 줄은 그대로 두고 순위를 붙인다 / 완성된 쿼리를 조각으로 읽기 / 줄 수가 바뀌는 자리 / 여섯 갈래 다음에 이어 볼 글 / 같은 질문을 코드로 풀어 보기 / 한 단계씩 얹으면 읽힌다 / 면접에서 나올 만한 질문
- 직접 링크 →: sql-basics, sql-select-where-null, sql-filtering-operators, sqld-null-functions, sql-aggregation-pitfalls, sqld-group-by-having, sqld-rollup-cube-grouping-sets, sql-joins-in-practice, sqld-joins, sqld-set-operators, sql-subqueries-exists-lateral, sqld-subquery-set-operators, sqld-correlated-subquery, sql-cte-recursive, sql-window-functions-pg, sqld-window-functions, sqld-top-n-hierarchical-pivot, sql-logical-order, sql-interview-problems, sql-case-when, sql-views-materialized, sql-insert-update-delete, sql-query-tuning, sql-query-rewrite, sql-batch-timeout-pool, sql-injection
- 키워드 백링크 →: postgres-getting-started
- 이 글로 오는 글 ←: backend-engineer-roadmap

#### `sql-subqueries-exists-lateral` — 서브쿼리가 실행되는 방식: 스칼라, EXISTS, NOT IN, LATERAL

- 요약: 개발 DB에서는 돌던 스칼라 서브쿼리가 운영에서 에러를 낸 일에서 시작해, PostgreSQL 16이 서브쿼리를 InitPlan, SubPlan, 세미 조인, 안티 조인 중 무엇으로 바꾸는지 실행 계획으로 따라간다. 17초짜리 상관 서브쿼리를 94ms로 고치고, work_mem에 따라 계획이 바뀌는 NOT IN과 LEFT JOIN LATERAL을 다룬다.
- 태그: Database, SQL, PostgreSQL, Performance
- 키워드: InitPlan, SubPlan, 세미 조인, LEFT JOIN LATERAL
- 길이: 538줄
- 소제목: 값 하나 자리에는 값 하나만 / 한 번만 도는 서브쿼리, 행마다 도는 서브쿼리 / IN과 EXISTS는 조인이 된다 / NOT IN은 메모리 설정에 따라 계획이 바뀐다 / 서브쿼리가 어떤 계획이 되는지 한눈에 / FROM 안에서 바깥을 보는 LATERAL / 느린 서브쿼리를 만나면 보는 것 / NOT IN을 직접 계산해 보기 / 계획의 이름을 읽는다 / 면접에서 나올 만한 질문
- 직접 링크 →: sqld-subquery-set-operators, sqld-correlated-subquery, sql-filtering-operators, sql-joins-in-practice, sql-logical-order, sql-query-rewrite, postgres-reporting-sql, sql-case-when
- 키워드 백링크 →: sql-select-where-null, db-type-relational
- 이 글로 오는 글 ←: sql-case-when, sql-filtering-operators, sql-interview-problems, sql-joins-in-practice, sql-query-rewrite, sql-study-path, sql-window-functions-pg, sqld-subquery-set-operators

#### `sql-views-materialized` — 뷰와 머티리얼라이즈드 뷰: 의존성, WITH CHECK OPTION, security_barrier, REFRESH 잠금

- 요약: 뷰 때문에 컬럼 하나 지우는 마이그레이션이 막힌 일에서 출발해 뷰가 조회 때 원래 쿼리로 펼쳐지는 방식, SELECT *가 굳는 이유, 뷰로 쓰기와 WITH CHECK OPTION, 함수로 숨긴 행이 새는 틈을 본다. 머티리얼라이즈드 뷰의 REFRESH가 잡는 잠금을 pg_locks로 확인하고 CONCURRENTLY의 비용을 잰다.
- 태그: Database, SQL, PostgreSQL, Security, Performance
- 키워드: security_barrier, security_invoker, REFRESH MATERIALIZED VIEW
- 길이: 649줄
- 소제목: 뷰는 조회할 때 원래 쿼리로 펼쳐진다 / SELECT *는 만든 날의 컬럼 목록으로 굳는다 / 뷰를 지나 쓰기와 WITH CHECK OPTION / 뷰로 숨긴 행이 함수로 새어 나간다 / 결과를 저장하는 머티리얼라이즈드 뷰 / REFRESH가 잡는 잠금을 직접 본다 / CONCURRENTLY는 공짜가 아니다 / 뷰, 머티리얼라이즈드 뷰, 요약 테이블 고르기 / 바뀐 행만 고치는 비교를 짜 보기 / 이름은 같아도 저장하는 것이 다르다 / 면접에서 나올 만한 질문
- 직접 링크 →: postgres-reporting-sql, sql-logical-order, postgres-functions-triggers, postgres-roles-security, sql-window-functions-pg, caching-strategies, sql-cte-recursive
- 키워드 백링크 →: sqld-correlated-subquery, json-crud-http, zero-downtime-migrations, postgres-mvcc-vacuum, sqld-group-by-having, sqld-window-functions, sql-basics
- 이 글로 오는 글 ←: sql-cte-recursive, sql-interview-problems, sql-study-path

#### `sql-window-functions-pg` — PostgreSQL 윈도우 함수 실전: RANGE·GROUPS 프레임, Run Condition, 정렬 비용

- 요약: 최근 7일 합계가 7일 치가 아니었던 대시보드에서 출발해 ROWS, RANGE, GROUPS 프레임의 차이, EXCLUDE와 WINDOW 절을 본다. 실행 계획에서 WindowAgg와 정렬을 읽고, PostgreSQL 15의 Run Condition으로 상위 N개가 276ms에서 0.074ms가 되는 모습과 동점에서 ROW_NUMBER가 계획마다 다른 행을 고르는 문제를 재현한다.
- 태그: Database, SQL, PostgreSQL, Performance
- 키워드: GROUPS 프레임, Run Condition, EXCLUDE CURRENT ROW
- 길이: 512줄
- 소제목: 최근 7일 합계가 7일 치가 아니었다 / 행으로 셀지, 값으로 셀지, 동점 묶음으로 셀지 / 나를 뺀 평균과 이름 붙인 창 / 창마다 정렬이 하나씩 붙는다 / 그룹별 상위 N개는 15부터 일찍 멈춘다 / 동점에서 ROW_NUMBER는 아무나 고른다 / 리포트 쿼리가 느릴 때 계획에서 보는 곳 / 이동 합계를 직접 계산해 보기 / 정렬 한 번 위에 얹는 계산 / 면접에서 나올 만한 질문
- 직접 링크 →: sqld-window-functions, sql-logical-order, sql-joins-in-practice, postgres-reporting-sql, sql-case-when, sql-subqueries-exists-lateral, sql-cte-recursive, sql-interview-problems
- 키워드 백링크 →: sqld-group-by-having
- 이 글로 오는 글 ←: sql-cte-recursive, sql-interview-problems, sql-logical-order, sql-study-path, sql-views-materialized, sqld-window-functions

#### `zero-downtime-migrations` — 무중단 스키마 변경: ALTER TABLE의 잠금과 재작성을 재 보기

- 요약: ALTER TABLE마다 잡는 잠금과 테이블 재작성 여부를 200만 행에서 직접 재고, 잠금 줄이 서비스를 멈추는 장면과 lock_timeout의 효과, NOT VALID와 VALIDATE, 배치 백필, int 기본 키를 bigint로 바꾸는 전 과정, MySQL 온라인 DDL을 다룬다.
- 태그: Database, PostgreSQL, SQL, Performance, Troubleshooting
- 키워드: lock_timeout, NOT VALID, 백필, 무중단 스키마 변경
- 길이: 489줄
- 소제목: 열 하나 추가했는데 API가 멈췄다 / 잠금은 줄을 선다 / 문장마다 무슨 잠금을 잡고, 다시 쓰는가 / 기본값이 있는 열은 PostgreSQL 11부터 빠르다 / 타입 바꾸기는 대부분 다시 쓴다 / 기본 키를 bigint로 바꾸는 전 과정 / 옛 행 채우기는 잘게 나눈다 / 인덱스, 이름 바꾸기, 열 지우기 / MySQL은 어떻게 다른가 / 배포 전에 확인하는 순서 / 잠금은 짧게, 무거운 일은 잠금 밖에서 / 면접에서 나올 만한 질문
- 직접 링크 →: db-migration-tools, db-architecture-by-scale, db-index-pitfalls, pessimistic-locking, postgres-mvcc-vacuum, batch-processing
- 키워드 백링크 →: k8s-deploy-pipeline-eks, mysql-replication-online-ddl, mysql-innodb-basics, db-replication-sharding, sql-basics
- 이 글로 오는 글 ←: api-versioning, blue-green-deployment, canary-release, db-architecture-by-scale, db-migration-tools, distributed-transactions-2pc, error-budgets, kafka-vs-rabbitmq-replay, mysql-replication-online-ddl, pessimistic-locking, prometheus-basics, release-cutover-hypercare, rollback-strategy, rolling-deployment, schema-versioning, sql-views-materialized, sql-vs-nosql

### Programming › Database › SQLD (`programming/database/sqld`)

#### `sqld-correlated-subquery` — SQLD 상관 서브쿼리, 스칼라 서브쿼리, 뷰

- 요약: 개발 DB에서 빠르던 '자기 부서 평균' 쿼리가 운영에서 느려지는 장면에서 시작해 상관 서브쿼리가 바깥 행마다 도는 순서, 스칼라 서브쿼리의 한 행 규칙, 뷰의 쓰임과 WITH CHECK OPTION을 보고, 실행 계획의 SubPlan loops로 느린 이유를 찾아 인라인 뷰로 고친다.
- 태그: Database, SQL, SQLD
- 키워드: 상관 서브쿼리, 스칼라 서브쿼리, WITH CHECK OPTION
- 길이: 377줄
- 소제목: 예제 데이터 / 바깥 행마다 다시 도는 상관 서브쿼리 / SELECT 절에는 값 하나만 들어간다 / 자주 쓰는 서브쿼리는 뷰로 이름을 붙인다 / 현장에서 상관 서브쿼리가 느려지는 순간 / SQLD 시험 포인트 / 면접에서 나올 만한 질문
- 직접 링크 →: sqld-subquery-set-operators, sqld-single-row-functions, db-index, sqld-window-functions
- 키워드 백링크 →: sqld-group-by-having
- 이 글로 오는 글 ←: sql-interview-problems, sql-study-path, sql-subqueries-exists-lateral, sql-views-materialized, sqld-set-operators, sqld-subquery-set-operators, sqld-window-functions

#### `sqld-data-modeling` — SQLD 데이터 모델링: 개념·논리·물리와 3단계 스키마

- 요약: 학원 수강신청 요구사항 한 장을 개념, 논리, 물리 모델을 거쳐 PostgreSQL 테이블로 만든다. ERD 표기법과 작성 순서, 3단계 스키마와 데이터 독립성을 뷰와 실행 계획으로 확인한다.
- 태그: Database, SQL, PostgreSQL, SQLD
- 키워드: 3단계 스키마, 데이터 독립성, ERD, 개념적 모델링
- 길이: 519줄
- 소제목: 현실을 줄여서 그리는 일 / 무엇을 보고 그리나: 데이터, 프로세스, 그리고 둘의 관계 / 개념에서 논리로, 논리에서 물리로 / ERD는 이 순서로 그린다 / 까마귀 발과 바커 표기 읽기 / 보는 사람마다 다른 화면, 하나의 DB / 좋은 모델인지 가늠하는 여섯 가지 / SQLD 시험 포인트 / 문서에서 테이블까지 / 면접에서 나올 만한 질문
- 직접 링크 →: sqld-entity-attribute-relationship, db-modeling-normalization, db-index
- 키워드 백링크 →: postgres-data-types, db-type-relational, db-keys-denormalization, sql-basics
- 이 글로 오는 글 ←: sql-basics, sqld-entity-attribute-relationship

#### `sqld-entity-attribute-relationship` — SQLD 엔터티·속성·관계·식별자

- 요약: 출석은 학생에 붙을까, 강좌에 붙을까. 엔터티와 속성의 분류, 관계 읽는 법, 주식별자의 네 조건을 학원 예제로 정리하고, 식별 관계와 비식별 관계의 차이를 실제 테이블로 비교한다.
- 태그: Database, SQL, PostgreSQL, SQLD
- 키워드: 주식별자, 비식별 관계, 교차 엔터티
- 길이: 564줄
- 소제목: 엔터티가 되려면 갖춰야 할 것 / 엔터티를 나누는 두 가지 기준 / 속성은 더 쪼갤 수 없는 값 하나 / 관계: 엔터티끼리 맺는 연결 / 식별자: 인스턴스 하나를 집어내는 열쇠 / 식별 관계와 비식별 관계 / SQLD 시험 포인트 / 출석은 어디에 붙나 / 면접에서 나올 만한 질문
- 직접 링크 →: sqld-data-modeling, db-modeling-normalization
- 키워드 백링크 →: json-crud-http, db-keys-denormalization, http-status-codes, sql-basics
- 이 글로 오는 글 ←: db-modeling-normalization, sqld-data-modeling

#### `sqld-group-by-having` — SQLD 집계와 GROUP BY, 그리고 실행 순서

- 요약: WHERE에 SUM을 썼다가 난 에러에서 출발해 집계 함수의 NULL 처리, GROUP BY 규칙, HAVING과 WHERE의 차이를 논리적 실행 순서 위에서 정리한다. ORDER BY의 NULL 위치, 빈 집합 집계, CASE로 가로로 세기까지 EMP 데이터로 확인한다.
- 태그: Database, SQL, SQLD, Oracle
- 키워드: GROUP BY, HAVING, 집계 함수, 논리적 실행 순서
- 길이: 746줄
- 소제목: 여러 행을 하나로 줄이는 집계 함수 / 묶어서 세는 GROUP BY / 묶은 다음에 거르는 HAVING / SQL은 적은 순서대로 실행되지 않는다 / ORDER BY에서 헷갈리는 것들 / 행이 없어도 한 줄은 나온다 / CASE를 넣어 가로로 세기 / SQLD 시험 포인트 / 면접에서 나올 만한 질문
- 직접 링크 →: sqld-single-row-functions, sqld-joins
- 키워드 백링크 →: sqld-null-functions
- 이 글로 오는 글 ←: db-type-time-series, postgres-reporting-sql, sd-autocomplete-data-pipeline, sql-aggregation-pitfalls, sql-case-when, sql-interview-problems, sql-logical-order, sql-select-where-null, sql-study-path, sql-views-materialized, sql-window-functions-pg, sqld-correlated-subquery, sqld-joins, sqld-null-functions, sqld-rollup-cube-grouping-sets, sqld-single-row-functions, sqld-subquery-set-operators, sqld-top-n-hierarchical-pivot, sqld-window-functions

#### `sqld-joins` — SQLD 조인: EQUI부터 OUTER, Oracle (+)까지

- 요약: 사원이 없는 부서가 보고서에서 사라지는 장면에서 시작해 EQUI, Non-EQUI, NATURAL, USING, OUTER, CROSS, SELF JOIN을 EMP와 DEPT, SALGRADE로 실제 결과 행과 함께 본다. Oracle (+) 표기의 규칙과 한계, Nested Loop, Sort Merge, Hash Join을 언제 고르는지도 정리한다.
- 태그: Database, SQL, SQLD, Oracle
- 키워드: OUTER JOIN, NATURAL JOIN, 카티션 곱, SELF JOIN, Non-EQUI JOIN
- 길이: 771줄
- 소제목: 조인은 짝을 찾는 일이다 / 범위로 짝을 찾는 Non-EQUI JOIN / ANSI 문법으로 쓰는 INNER JOIN / 짝이 없는 행을 살리는 OUTER JOIN / Oracle 전통 문법의 OUTER JOIN 표기 / 모든 조합을 만드는 CROSS JOIN / 자기 자신과 붙이는 SELF JOIN / 세 테이블을 붙이기 / DB가 짝을 찾는 세 가지 방법 / SQLD 시험 포인트 / 면접에서 나올 만한 질문
- 직접 링크 →: sqld-single-row-functions, sqld-group-by-having, sql-query-tuning
- 키워드 백링크 →: ds-hash-map, sqld-top-n-hierarchical-pivot
- 이 글로 오는 글 ←: sql-joins-in-practice, sql-study-path, sqld-group-by-having, sqld-subquery-set-operators

#### `sqld-null-functions` — SQLD NULL 다루기: NVL, COALESCE, CASE와 DECODE

- 요약: 커미션이 NULL인 사원의 지급액이 보고서에서 사라지는 장면에서 시작해 NULL의 산술과 비교 규칙, NOT IN에 NULL이 섞이면 0행이 되는 이유, NVL·NVL2·NULLIF·COALESCE, CASE와 DECODE의 NULL 처리 차이를 Oracle과 PostgreSQL로 본다. NULL 때문에 바뀐 행을 놓치는 동기화 배치와 IS DISTINCT FROM도 다룬다.
- 태그: Database, SQL, SQLD, Oracle
- 키워드: NVL, COALESCE, DECODE, NULLIF
- 길이: 479줄
- 소제목: 이 글에서 쓸 사원 테이블 / 지급액이 빈칸이 된 이유 / NULL은 값이 아니라 빈칸이다 / NULL을 다른 값으로 바꾸는 함수 / 조건에 따라 값을 고르는 CASE와 DECODE / 현장에서 NULL이 바뀐 행을 숨기는 순간 / SQLD 시험 포인트 / 면접에서 나올 만한 질문
- 직접 링크 →: sqld-single-row-functions, sqld-type-conversion, sqld-subquery-set-operators, sqld-group-by-having, sql-select-where-null
- 키워드 백링크 →: postgres-getting-started
- 이 글로 오는 글 ←: sql-case-when, sql-study-path, sqld-group-by-having, sqld-rollup-cube-grouping-sets, sqld-single-row-functions

#### `sqld-rollup-cube-grouping-sets` — SQLD ROLLUP, CUBE, GROUPING SETS

- 요약: 부서 소계와 전체 합계가 있는 인건비 보고서를 쿼리 하나로 만들면서 ROLLUP, CUBE, GROUPING SETS가 만드는 묶음과 결과 행 수를 EMP 데이터로 센다. GROUPING 함수로 소계 줄에 이름표를 붙이고 부분 ROLLUP까지 정리한다.
- 태그: Database, SQL, SQLD
- 키워드: ROLLUP, GROUPING SETS, GROUPING_ID
- 길이: 571줄
- 소제목: 출발점은 9개의 묶음 / ROLLUP은 오른쪽부터 하나씩 지운다 / CUBE는 가능한 조합을 전부 만든다 / GROUPING SETS는 원하는 묶음만 적는다 / 소계 줄에 이름표를 붙이는 GROUPING / 일부만 굴리는 부분 ROLLUP / 결과 행 수 세기 / SQLD 시험 포인트 / 면접에서 나올 만한 질문
- 직접 링크 →: sqld-subquery-set-operators, sqld-group-by-having
- 키워드 백링크 →: json-crud-http, postgres-reporting-sql, sql-case-when, sqld-null-functions
- 이 글로 오는 글 ←: sql-study-path, sqld-window-functions

#### `sqld-set-operators` — SQLD 집합 연산자: UNION, INTERSECT, MINUS

- 요약: 두 해의 결제를 UNION으로 합쳤더니 60만 건이 3,500건이 된 장면에서 시작해 UNION과 UNION ALL의 차이와 비용, INTERSECT와 MINUS(EXCEPT), 컬럼 수·타입·ORDER BY 규칙, Oracle과 PostgreSQL의 우선순위 차이를 실행 계획과 함께 정리한다.
- 태그: Database, SQL, SQLD
- 키워드: UNION ALL, 집합 연산자, MINUS
- 길이: 439줄
- 소제목: 예제 데이터 / 결과를 위아래로 붙이는 집합 연산자 / 집합 연산자의 규칙 / 현장에서 UNION이 행을 지우고 느려지는 순간 / SQLD 시험 포인트 / 면접에서 나올 만한 질문
- 직접 링크 →: sqld-subquery-set-operators, sqld-correlated-subquery, sqld-single-row-functions
- 키워드 백링크 →: js-pure-functions
- 이 글로 오는 글 ←: sql-cte-recursive, sql-study-path, sqld-subquery-set-operators

#### `sqld-single-row-functions` — SQLD 단일행 함수: 문자, 숫자, 날짜

- 요약: Oracle에서 옮긴 쿼리가 에러 없이 다른 값을 내는 장면에서 시작해 단일행 함수와 다중행 함수의 차이, 문자·숫자·날짜 함수를 EMP 데이터로 하나씩 돌려 본다. float 반올림, SUBSTR 음수 위치, ADD_MONTHS 말일 규칙처럼 DB마다 조용히 달라지는 곳도 PostgreSQL로 확인한다.
- 태그: Database, SQL, SQLD, Oracle
- 키워드: 단일행 함수, ADD_MONTHS, SUBSTR
- 길이: 614줄
- 소제목: 이 글에서 쓸 사원 테이블 / 한 행에 하나씩 돌려주는 함수 / 문자를 다듬는 함수 / 숫자를 자르고 올리는 함수 / 날짜는 숫자처럼 더하고 뺀다 / 현장에서 함수 결과가 조용히 달라지는 순간 / SQLD 시험 포인트 / 면접에서 나올 만한 질문
- 직접 링크 →: sqld-null-functions, sqld-type-conversion, sqld-group-by-having
- 키워드 백링크 →: postgres-getting-started
- 이 글로 오는 글 ←: sqld-correlated-subquery, sqld-group-by-having, sqld-joins, sqld-null-functions, sqld-set-operators, sqld-subquery-set-operators, sqld-type-conversion, sqld-window-functions

#### `sqld-subquery-set-operators` — SQLD 서브쿼리: 세 자리와 연산자, NOT IN의 함정

- 요약: '자기 부서 평균보다 많이 받는 사람'을 쿼리 하나로 구하면서 서브쿼리를 넣는 세 자리와 단일행·다중행 연산자, ANY와 ALL, EXISTS, NOT IN에 NULL이 섞이면 0행이 되는 함정을 SCOTT 데이터로 따라간다. NOT IN이 PostgreSQL에서 안티 조인이 되지 못해 느려지는 경우도 실행 계획으로 본다.
- 태그: Database, SQL, SQLD
- 키워드: 인라인 뷰, 중첩 서브쿼리, NOT EXISTS
- 길이: 596줄
- 소제목: 예제로 쓸 EMP와 DEPT / 쿼리를 넣을 수 있는 세 자리 / 몇 줄이 돌아오느냐로 연산자가 바뀐다 / ANY와 ALL은 최솟값과 최댓값으로 바꿔 읽는다 / EXISTS는 있는지만 본다 / NOT IN에 NULL이 하나 섞이면 / 현장에서 NOT IN이 느려지는 순간 / SQLD 시험 포인트 / 면접에서 나올 만한 질문
- 직접 링크 →: sqld-correlated-subquery, sqld-set-operators, sqld-single-row-functions, sqld-joins
- 키워드 백링크 →: sqld-group-by-having, sql-subqueries-exists-lateral, sql-joins-in-practice, sql-select-where-null
- 이 글로 오는 글 ←: sql-study-path, sql-subqueries-exists-lateral, sqld-correlated-subquery, sqld-null-functions, sqld-rollup-cube-grouping-sets, sqld-set-operators, sqld-top-n-hierarchical-pivot, sqld-window-functions

#### `sqld-top-n-hierarchical-pivot` — SQLD Top-N, 계층형 쿼리, PIVOT

- 요약: 급여 상위 3명과 조직도 화면을 만들면서 ROWNUM이 정렬보다 먼저 붙는 함정, WITH TIES, CONNECT BY와 PostgreSQL의 재귀 CTE, WHERE와 CONNECT BY 조건의 차이를 SCOTT 데이터로 확인한다. PIVOT과 UNPIVOT, 정규 표현식 함수도 함께 본다.
- 태그: Database, SQL, SQLD
- 키워드: ROWNUM, 계층형 쿼리, CONNECT BY, 재귀 CTE, PIVOT
- 길이: 787줄
- 소제목: ROWNUM은 정렬보다 먼저 붙는다 / 동점자까지 보여 주는 WITH TIES / 상사를 따라 내려가는 계층형 쿼리 / 계층형 쿼리가 주는 가상 컬럼 / WHERE에 거는 조건과 CONNECT BY에 거는 조건 / PostgreSQL과 SQL Server는 재귀 CTE로 쓴다 / 행을 열로 돌리는 PIVOT / 열을 행으로 되돌리는 UNPIVOT / 패턴으로 찾는 정규 표현식 함수 / SQLD 시험 포인트 / 면접에서 나올 만한 질문
- 직접 링크 →: sqld-subquery-set-operators, sqld-window-functions
- 키워드 백링크 →: db-index, ds-graph-bfs-dfs, sqld-group-by-having, sql-cte-recursive, sql-case-when, js-closures
- 이 글로 오는 글 ←: db-type-graph, db-type-relational, graph-rag, postgres-advanced-sql, sql-case-when, sql-cte-recursive, sql-study-path, sqld-joins, sqld-window-functions

#### `sqld-type-conversion` — SQLD 형 변환: TO_CHAR 형식과 암시적 형 변환

- 요약: 문자 사번 컬럼을 숫자와 비교한 쿼리가 전체 스캔으로 바뀌는 장면에서 시작해 TO_CHAR·TO_DATE·TO_NUMBER 형식 문자열을 조각으로 읽고, 암시적 형 변환이 인덱스를 막는 과정을 PostgreSQL 실행 계획으로 확인한다. 애플리케이션이 넘긴 numeric 파라미터가 인덱스를 막는 경우도 본다.
- 태그: Database, SQL, SQLD, Oracle
- 키워드: 암시적 형 변환, TO_CHAR, 함수 기반 인덱스
- 길이: 414줄
- 소제목: 예제 테이블 / TO_CHAR 형식 문자열 읽기 / 형 변환은 직접 적는다 / 현장에서 파라미터 타입이 인덱스를 막는 순간 / SQLD 시험 포인트 / 면접에서 나올 만한 질문
- 직접 링크 →: sqld-single-row-functions, db-index
- 이 글로 오는 글 ←: sqld-null-functions, sqld-single-row-functions

#### `sqld-window-functions` — SQLD 윈도우 함수: 순위, 누적합, 앞뒤 행

- 요약: 부서별 급여 순위와 누적 급여를 셀프 조인 없이 구하면서 RANK, DENSE_RANK, ROW_NUMBER가 동점에서 갈리는 모습과 ROWS와 RANGE 프레임의 차이를 실제 숫자로 본다. LAST_VALUE의 기본 프레임 함정, LAG와 LEAD, 비율과 분위 함수, WHERE에 못 쓰는 이유까지 다룬다.
- 태그: Database, SQL, SQLD
- 키워드: 윈도우 함수, DENSE_RANK, 윈도우 프레임, ROW_NUMBER
- 길이: 624줄
- 소제목: OVER 괄호 안의 세 조각 / 동점자가 있을 때 세 순위 함수 / 행을 접지 않는 집계 / 기본 프레임은 동점을 한꺼번에 더한다 / FIRST_VALUE는 되는데 LAST_VALUE는 이상하다 / 앞 행과 뒤 행을 가져오는 LAG와 LEAD / 비율과 분위를 내는 함수 / 윈도우 함수는 WHERE에 못 쓴다 / SQLD 시험 포인트 / 면접에서 나올 만한 질문
- 직접 링크 →: sqld-subquery-set-operators, sqld-single-row-functions, sql-window-functions-pg, sqld-top-n-hierarchical-pivot, sqld-rollup-cube-grouping-sets
- 키워드 백링크 →: sqld-group-by-having, sqld-correlated-subquery
- 이 글로 오는 글 ←: db-type-embedded, postgres-reporting-sql, sql-interview-problems, sql-study-path, sql-views-materialized, sql-window-functions-pg, sqld-correlated-subquery, sqld-top-n-hierarchical-pivot

### Programming › Design Patterns (`programming/design-patterns`)

#### `design-patterns-overview` — 디자인 패턴 개요: 스물세 개의 이름과 꺼낼 때

- 요약: 디자인 패턴은 반복되는 설계 문제에 붙인 이름이다. GoF 23개를 생성·구조·행위로 나눈 기준, 상속보다 합성을 고르는 이유, Express 요청 안에 숨은 패턴, 함수가 있는 언어에서 단순해지는 패턴, 그리고 패턴을 꺼내지 말아야 할 때를 정리한다.
- 태그: Design Pattern, OOP, TypeScript, Architecture, JavaScript
- 키워드: 디자인 패턴, GoF, 상속보다 합성
- 길이: 305줄
- 소제목: 반복되는 문제에 붙인 이름 / 스물세 개를 세 갈래로 나눈 기준 / 두 문장으로 줄이면 / 이미 매일 쓰고 있는 패턴 / 함수가 있으면 사라지는 패턴도 있다 / 패턴을 꺼내기 전에 / 면접에서 나올 만한 질문
- 직접 링크 →: pattern-singleton, pattern-factory-method, pattern-abstract-factory, pattern-builder, pattern-prototype, pattern-adapter, pattern-bridge, pattern-composite, pattern-decorator, pattern-facade, pattern-flyweight, pattern-proxy, pattern-chain-of-responsibility, pattern-command, pattern-interpreter, pattern-iterator, pattern-mediator, pattern-memento, pattern-observer, pattern-state, pattern-strategy, pattern-template-method, pattern-visitor, mvc-pattern, resilience-patterns
- 키워드 백링크 →: sql-batch-timeout-pool, js-closures
- 이 글로 오는 글 ←: js-classes, pattern-abstract-factory, pattern-adapter, pattern-bridge, pattern-builder, pattern-chain-of-responsibility, pattern-command, pattern-composite, pattern-decorator, pattern-facade, pattern-factory-method, pattern-flyweight, pattern-interpreter, pattern-mediator, pattern-observer, pattern-prototype, pattern-proxy, pattern-singleton, pattern-state, pattern-strategy, pattern-template-method

### Programming › Design Patterns › Behavioral (`programming/design-patterns/behavioral`)

#### `pattern-chain-of-responsibility` — 책임 연쇄 패턴: 내 일이 아니면 다음으로 넘긴다

- 요약: 분기가 늘어난 에러 메시지 함수를 처리기 줄로 바꾸고, 순서가 곧 규칙이 되는 이유, 모두 거쳐 가는 미들웨어 사슬, next를 잊거나 두 번 부를 때의 사고, DOM 이벤트 버블링, 등록과 실행 순서가 다른 곳, 데코레이터·커맨드와의 차이를 Express와 Koa로 확인한다.
- 태그: Design Pattern, OOP, TypeScript, JavaScript, Node.js
- 키워드: 책임 연쇄 패턴, Chain of Responsibility, 미들웨어 체인
- 길이: 497줄
- 소제목: 내 일이 아니면 다음 처리기로 넘긴다 / 배열 하나와 반복문 하나로 충분하다 / 줄의 순서가 곧 규칙이다 / 모두 거쳐 가는 사슬, 미들웨어 / next를 잊거나 두 번 부르면 / 브라우저에서 위로 올라가는 사슬 / 등록 순서와 실행 순서가 다른 곳 / 데코레이터, 커맨드와 헷갈릴 때 / compose 직접 만들기 / 면접에서 나올 만한 질문
- 직접 링크 →: design-patterns-overview, pattern-decorator, pattern-command, pattern-observer, pattern-composite
- 키워드 백링크 →: express-middleware, ds-linked-list, sd-payment-flow, event-delegation, http-status-codes
- 이 글로 오는 글 ←: design-patterns-overview, express-middleware, pattern-command, pattern-composite, pattern-decorator, pattern-strategy

#### `pattern-command` — 커맨드 패턴: 요청을 값으로 만들면 되돌릴 수 있다

- 요약: 버튼·단축키·명령 팔레트가 같은 편집 동작을 부르는 편집기에서 출발해 요청을 객체로 만들고, 되돌리기와 다시 실행하기 스택, 되돌리기 어려운 명령, 큐에 쌓았다 실행하기, Redux 액션과의 관계, 클로저 한 쌍으로 쓰는 버전을 다룬다.
- 태그: Design Pattern, OOP, TypeScript, JavaScript
- 키워드: 커맨드 패턴, Command 패턴, 되돌리기 스택
- 길이: 378줄
- 소제목: 요청을 객체로 만들면 생기는 자리 / 버튼, 단축키, 팔레트가 같은 명령을 부른다 / 되돌리기 스택과 다시 실행하기 스택 / 되돌리기가 어려운 명령 / 명령을 줄 세웠다가 나중에 실행한다 / Redux 액션은 커맨드인가 / 클래스 대신 클로저 한 쌍 / 직접 만드는 되돌리기 / 면접에서 나올 만한 질문
- 직접 링크 →: pattern-composite, pattern-memento, saga-pattern, idempotency-key, dead-letter-queue, message-queue-basics, pattern-chain-of-responsibility, pattern-observer, design-patterns-overview, pattern-strategy
- 키워드 백링크 →: operational-transform, bullmq-job-queue, redis-basics, microservices, cqrs, crdt, js-closures
- 이 글로 오는 글 ←: design-patterns-overview, ds-stack-queue-deque, pattern-chain-of-responsibility, pattern-memento, pattern-strategy

#### `pattern-interpreter` — 인터프리터 패턴: 관리자가 쓴 규칙 문자열을 직접 해석하기

- 요약: 쿠폰 대상 조건을 관리자 화면에서 글로 쓰게 하려고 문법 규칙마다 노드 클래스를 두고 재귀 하강 파서로 트리를 세운다. new Function이 환경 변수를 읽어 버리는 모습, 매번 파싱하면 100배 느려지는 비용, 괄호 5000겹에 넘치는 스택, SpEL·정규식·JSON Logic·CEL 같은 작은 언어와 비지터와의 관계를 다룬다.
- 태그: Design Pattern, OOP, TypeScript, JavaScript, Security, Performance
- 키워드: 인터프리터 패턴, Interpreter 패턴, 재귀 하강 파서
- 길이: 527줄
- 소제목: 문법 한 줄이 클래스 하나가 된다 / 문자열에서 트리까지는 패턴 밖의 일 / 트리가 스스로 답을 계산한다 / eval로 끝내면 안 되는 이유 / 매번 파싱하면 백 배 느리다 / 괄호 오천 개에 서버가 넘어진다 / 이미 쓰고 있는 작은 언어들 / 노드를 더하기 쉬운 쪽, 연산을 더하기 쉬운 쪽 / 언제 직접 만들고 언제 가져다 쓰나 / 규칙 트리 계산기 만들기 / 면접에서 나올 만한 질문
- 직접 링크 →: design-patterns-overview, pattern-composite, pattern-visitor
- 키워드 백링크 →: k8s-admission-control, mongodb-document-model, js-short-circuit, js-closures
- 이 글로 오는 글 ←: design-patterns-overview, pattern-visitor

#### `pattern-iterator` — 이터레이터 패턴: 페이지를 넘기는 코드를 for await 하나로

- 요약: 세 곳에 복사된 커서 페이지네이션 반복문을 async 제너레이터 하나로 모은다. break가 부르는 return()과 finally, 게으른 이터레이터 헬퍼로 map 호출이 100만 번에서 7번으로 주는 모습, 순회 중 수정과 한 번만 도는 제너레이터의 함정, 내부·외부 반복자를 다룬다.
- 태그: Design Pattern, OOP, TypeScript, JavaScript, Node.js, Performance
- 키워드: 이터레이터 패턴, Iterator 패턴, 이터레이터 헬퍼, 비동기 이터레이터
- 길이: 410줄
- 소제목: 돌 줄 아는 것과 도는 것을 나눈다 / for await가 실제로 부르는 것 / 제너레이터가 위치를 대신 들고 있다 / 필요한 만큼만 꺼내는 게으른 반복 / 도는 중에 컬렉션이 바뀌면 / 한 번 돌면 끝나는 반복자 / 안에서 도는 반복자, 밖에서 당기는 반복자 / 반복자를 꺼내지 않아도 될 때 / 게으른 take 직접 만들기 / 면접에서 나올 만한 질문
- 직접 링크 →: pattern-factory-method
- 키워드 백링크 →: sd-cache-and-cdn-tier, kafka-basics
- 이 글로 오는 글 ←: design-patterns-overview, graphql-basics, js-array-transform, js-destructuring, pattern-composite, pattern-factory-method, pattern-observer, pattern-visitor

#### `pattern-mediator` — 중재자 패턴: 서로 부르던 부품들 사이에 규칙 하나를 두기

- 요약: 배송·주소·쿠폰·금액·결제 버튼이 서로를 직접 부르던 결제 화면을 중재자 하나로 모은다. 알림이 알림을 부르는 고리로 스택이 넘치는 사고와 막는 법, 규칙 없는 이벤트 버스의 함정, React 상태 끌어올리기·라디오 버튼·MediatR, 신 객체가 되는 신호를 다룬다.
- 태그: Design Pattern, OOP, TypeScript, React, Frontend, Architecture
- 키워드: 중재자 패턴, Mediator 패턴
- 길이: 421줄
- 소제목: 서로 아는 선이 열 개에서 다섯 개로 / 부품은 알리기만 한다 / 규칙은 중재자 한 파일에 / 알림이 다시 알림을 부를 때 / 이미 쓰고 있는 중재자 / 이벤트 버스는 규칙 없는 중재자다 / 중재자가 신 객체가 되는 길 / 부품과 중재자를 따로 테스트한다 / 결제 화면 규칙 직접 맞추기 / 면접에서 나올 만한 질문
- 직접 링크 →: event-driven-architecture, saga-pattern, pattern-observer, pattern-facade, pattern-state
- 키워드 백링크 →: js-pure-functions, cqrs, design-patterns-overview
- 이 글로 오는 글 ←: design-patterns-overview, pattern-facade, pattern-observer

#### `pattern-memento` — 메멘토 패턴: 되돌리는 공식이 없을 때 상태를 통째로 기억하기

- 요약: 역연산이 없는 자동 정렬을 되돌리려고 원조자·메멘토·관리인을 나누고, 얕은 복사로 꾸러미가 함께 바뀌는 버그, 불변 업데이트로 스냅숏 메모리를 660MB에서 40MB로 줄이는 실험, 배포를 건너 사는 저장된 초안의 버전 관리, 캔버스 save·restore와 TS private의 한계를 다룬다.
- 태그: Design Pattern, OOP, TypeScript, JavaScript, Browser, Performance
- 키워드: 메멘토 패턴, Memento 패턴
- 길이: 422줄
- 소제목: 저장은 하되 안을 들여다보지 않는다 / 꾸러미를 열 수 있는 쪽은 하나 / 얕은 복사로 떼어 둔 꾸러미는 같이 바뀐다 / 바뀐 곳만 새로 만들면 꾸러미가 싸진다 / 저장한 꾸러미를 지난 버전 코드가 열 때 / 브라우저와 도구에 들어 있는 메멘토 / TS의 private은 꾸러미를 잠그지 못한다 / 꾸러미를 남길까 명령을 남길까 / 되돌리기 직접 만들기 / 면접에서 나올 만한 질문
- 직접 링크 →: pattern-command, pattern-prototype, git-internals-basics
- 키워드 백링크 →: browser-storage, js-immutability-react, js-shallow-deep-copy
- 이 글로 오는 글 ←: design-patterns-overview, pattern-command, pattern-prototype

#### `pattern-observer` — 옵서버 패턴: 바뀌었다고 알리면 알아야 할 쪽이 듣는다

- 요약: 화면 부품마다 갱신 호출이 붙던 장바구니를 구독 구조로 바꾸고, push와 pull, useSyncExternalStore, 알리는 도중 구독 해제로 리스너가 건너뛰어지는 버그, EventEmitter의 동기 예외 전파와 async 리스너 크래시, MaxListenersExceededWarning, 글리치와 배칭, 중재자·발행 구독과의 차이를 다룬다.
- 태그: Design Pattern, OOP, TypeScript, JavaScript, Node.js, React
- 키워드: 옵서버 패턴, Observer 패턴, MaxListenersExceededWarning
- 길이: 469줄
- 소제목: 바뀌었다고 알리는 쪽, 등록해 두는 쪽 / 값을 실어 보낼까, 꺼내 가게 할까 / 클래스 대신 구독 함수 하나 / 알리는 도중에 구독을 끊으면 / 동기 알림은 예외도 동기로 돌아온다 / 리스너 열한 개째의 경고 / 하나를 바꿨는데 두 번 알린다 / 옵서버, 중재자, 발행·구독을 나란히 놓으면 / 이벤트 이미터 직접 만들기 / 면접에서 나올 만한 질문
- 직접 링크 →: react-rerender, pub-sub, js-memory-leak, event-loop, pattern-mediator, pattern-iterator
- 키워드 백링크 →: js-promises, rendering-strategies, design-patterns-overview
- 이 글로 오는 글 ←: design-patterns-overview, mvc-pattern, pattern-chain-of-responsibility, pattern-command, pattern-mediator

#### `pattern-state` — 상태 패턴: 상태마다 바뀌는 동작을 객체로 꺼내기

- 요약: 메서드마다 반복되는 상태 switch를 상태 객체와 전이표로 옮긴다. 판별 유니온으로 불가능한 화면 상태를 지우고, XState로 옮겨 보고, 서버 두 대가 같은 주문을 동시에 바꿀 때 조건부 UPDATE로 막는 법까지 본다.
- 태그: Design Pattern, OOP, TypeScript, PostgreSQL, Concurrency
- 키워드: 상태 패턴, State 패턴, 유한 상태 기계, XState
- 길이: 432줄
- 소제목: 메서드마다 같은 switch가 반복된다 / 상태를 객체로 꺼내면 / 전이는 누가 결정하나 / 갈 수 있는 길만 그려 둔다 / XState로 옮기면 / 이미 매일 쓰는 상태 기계 / 메모리 밖에서 상태가 바뀔 때 / 전략과 같은 모양, 다른 질문 / 상태 클래스가 필요 없는 때 / 직접 짜는 전이표 / 면접에서 나올 만한 질문
- 직접 링크 →: design-patterns-overview, pattern-strategy, tcp-connection-lifecycle, circuit-breaker, optimistic-locking, db-locking-deadlock
- 키워드 백링크 →: client-data-cache, js-pure-functions
- 이 글로 오는 글 ←: design-patterns-overview, pattern-mediator, pattern-strategy

#### `pattern-strategy` — 전략 패턴: 조건문 대신 갈아 끼우는 알고리즘

- 요약: 쿠폰 종류마다 늘어나는 if를 같은 모양의 할인 전략으로 나누고, 고르는 일은 가장자리 한 곳에 모은다. 정렬 비교 함수 하나로 속도가 몇 배 달라지는 측정과 Passport의 전략, 사용자 입력으로 전략 표를 찾을 때의 함정을 다룬다.
- 태그: Design Pattern, OOP, TypeScript, JavaScript, Node.js, Performance
- 키워드: 전략 패턴, Strategy 패턴, Intl.Collator
- 길이: 364줄
- 소제목: 쿠폰이 늘 때마다 커지는 함수 / 할인 계산을 갈아 끼울 수 있게 / 누가 전략을 고르나 / 함수 하나면 되는 전략 / 비교 함수 하나로 정렬이 몇 배 느려진다 / Passport는 로그인 방법을 이름으로 등록한다 / 전략마다 필요한 재료가 다를 때 / 이름이 헷갈리는 이웃들 / 직접 만드는 할인 전략 / 면접에서 나올 만한 질문
- 직접 링크 →: design-patterns-overview, pattern-chain-of-responsibility, k8s-deployment, load-balancing-algorithms, pattern-state, pattern-template-method, pattern-bridge, pattern-command
- 키워드 백링크 →: client-data-cache, express-middleware, ab-testing, redis-basics, js-closures, token-login
- 이 글로 오는 글 ←: design-patterns-overview, global-rollout-localization, pattern-bridge, pattern-command, pattern-state, pattern-template-method

#### `pattern-template-method` — 템플릿 메서드 패턴: 순서는 위에서 정하고 단계만 바꾸기

- 요약: 복사된 가져오기 흐름을 상위 클래스의 run() 하나로 모으고, 달라지는 단계는 추상 메서드와 훅으로 연다. Node.js Transform 스트림의 _transform, 생성자에서 재정의 메서드를 부를 때 생기는 버그, 합성으로 옮겨야 할 때를 본다.
- 태그: Design Pattern, OOP, TypeScript, Node.js
- 키워드: 템플릿 메서드, Template Method, 할리우드 원칙
- 길이: 483줄
- 소제목: 복사된 흐름에서 버그는 한쪽만 고쳐진다 / 순서는 위에서, 단계는 아래에서 / 부르는 쪽은 상위 클래스다 / Node.js 스트림은 _transform만 채우게 한다 / 생성자에서 단계를 부르면 생기는 일 / 상속이 무거워지는 순간 / 직접 채우는 단계 / 면접에서 나올 만한 질문
- 직접 링크 →: pattern-strategy, pattern-factory-method
- 키워드 백링크 →: json-crud-http, design-patterns-overview
- 이 글로 오는 글 ←: design-patterns-overview, pattern-factory-method, pattern-strategy

#### `pattern-visitor` — 비지터 패턴: 트리는 그대로 두고 연산만 늘리기

- 요약: 문서 트리의 노드 클래스를 고치지 않고 연산을 방문자 하나로 모은다. 더블 디스패치가 왜 필요한지, ESLint 규칙과 Babel 플러그인이 방문자를 합쳐 한 번만 걷는 이유, 노드 종류가 늘 때 치르는 값(표현 문제)을 실제 출력으로 본다.
- 태그: Design Pattern, OOP, TypeScript, JavaScript, Performance
- 키워드: 비지터 패턴, Visitor 패턴, 더블 디스패치, 표현 문제
- 길이: 426줄
- 소제목: 연산이 하나 늘 때마다 모든 노드 클래스를 연다 / 연산을 노드 밖으로 꺼낸다 / accept가 한 번 더 부르는 이유 / 트리를 누가 걷나 / ESLint 규칙 하나가 방문자 하나다 / 한 번 걸으며 여럿이 본다 / 타입스크립트라면 함수 표로 / 노드 종류가 늘면 모든 방문자가 아프다 / 이웃 패턴과의 경계 / 직접 만드는 문서 통계 / 면접에서 나올 만한 질문
- 직접 링크 →: pattern-composite, pattern-iterator, pattern-interpreter
- 이 글로 오는 글 ←: design-patterns-overview, pattern-composite, pattern-interpreter

### Programming › Design Patterns › Creational (`programming/design-patterns/creational`)

#### `pattern-abstract-factory` — 추상 팩토리 패턴: 짝이 맞는 객체를 한 벌로 고르기

- 요약: 저장소와 큐를 따로 골랐다가 파드 경계에서 끊기는 사고를 재현하고, 짝이 맞아야 하는 객체를 한 벌로 묶는 추상 팩토리로 막는다. knex의 방언별 Client, 새 제품을 더하기 어려운 트레이드오프, 팩토리 메서드와의 차이, 배포 직후 왕복 점검을 다룬다.
- 태그: Design Pattern, OOP, TypeScript, AWS, Architecture
- 키워드: 추상 팩토리, Abstract Factory, 제품군
- 길이: 430줄
- 소제목: 따로 고르면 섞인다 / 한 벌을 통째로 만드는 객체 / 시작할 때 한 번 고르고 끝까지 쓴다 / 라이브러리 속의 추상 팩토리 / 새 벌은 쉽고 새 제품은 어렵다 / 클래스 없이 한 벌 만들기 / 팩토리 메서드와 무엇이 다른가 / 배포 전에 한 벌을 확인한다 / 면접에서 나올 만한 질문
- 직접 링크 →: pattern-factory-method, pattern-singleton, pattern-builder
- 키워드 백링크 →: k8s-pod-probes, test-pyramid-unit-tests, sql-batch-timeout-pool, design-patterns-overview
- 이 글로 오는 글 ←: design-patterns-overview, pattern-bridge, pattern-builder, pattern-factory-method, pattern-prototype, vpn-ipsec-wireguard

#### `pattern-builder` — 빌더 패턴: 인자 여덟 개짜리 생성자를 단계로 나누기

- 요약: 위치로 넘기던 생성자 인자를 이름 붙은 단계로 바꾸고, 필드 사이의 규칙을 build 한곳에서 검사한다. 가변 빌더를 나눠 쓰면 설정이 섞이는 함정과 스텝 빌더, 테스트 데이터 빌더까지 본다.
- 태그: Design Pattern, OOP, TypeScript, JavaScript
- 키워드: 빌더 패턴, 플루언트 인터페이스, 테스트 데이터 빌더
- 길이: 565줄
- 소제목: false, false가 무엇인지 아무도 모른다 / 객체 리터럴로 모자라는 순간 / 한 단계씩 쌓고 build에서 검사한다 / GoF의 빌더에는 감독이 있다 / 매일 쓰는 빌더들 / 빌더를 재사용했더니 헤더가 섞였다 / 직접 만들어 보는 쿼리 빌더 / 빠뜨린 단계를 컴파일러가 잡게 하기 / 테스트 데이터를 만드는 빌더 / 빌더가 짐이 되는 경우 / 면접에서 나올 만한 질문
- 직접 링크 →: design-patterns-overview, idempotency-key, pattern-abstract-factory, pattern-factory-method, pattern-prototype, pattern-composite
- 키워드 백링크 →: js-object-methods, resilience-patterns, http-methods
- 이 글로 오는 글 ←: design-patterns-overview, integration-tests-real-db, pattern-abstract-factory, pattern-factory-method, pattern-prototype

#### `pattern-factory-method` — 팩토리 메서드 패턴: new가 박힌 자리를 바꿔 끼우기

- 요약: 흐름은 상위 클래스가 쥐고 무엇을 만들지는 하위 클래스가 정하게 하는 팩토리 메서드를 영수증 발송 코드로 리팩터링한다. 심플 팩토리·정적 팩토리 메서드와의 차이, for...of 속 Symbol.iterator, 함수 표와 satisfies, 테스트에서 가짜 끼우기까지 다룬다.
- 태그: Design Pattern, OOP, TypeScript, JavaScript
- 키워드: 팩토리 메서드, Factory Method, 정적 팩토리 메서드
- 길이: 388줄
- 소제목: new가 박힌 자리를 메서드로 바꾼다 / 이름이 비슷한 세 가지 / 매일 쓰는 팩토리 메서드 / 상속 대신 함수를 넘기면 / 채널 하나를 추가할 때 고치는 곳 / 모르는 채널은 시작할 때 막는다 / 테스트에서 가짜 채널 끼우기 / 팩토리 메서드가 과한 경우 / 면접에서 나올 만한 질문
- 직접 링크 →: design-patterns-overview, pattern-template-method, pattern-iterator, pattern-abstract-factory, pattern-builder, pattern-prototype
- 키워드 백링크 →: js-object-methods, sd-email-protocols
- 이 글로 오는 글 ←: design-patterns-overview, js-classes, pattern-abstract-factory, pattern-builder, pattern-iterator, pattern-prototype, pattern-singleton, pattern-template-method

#### `pattern-prototype` — 프로토타입 패턴: 클래스를 몰라도 복제해서 만든다

- 요약: 복제를 객체 자신의 clone()에 맡겨 구체 클래스를 몰라도 사본을 만든다. 얕은 복사 사고, JSON과 structuredClone이 잃는 것, 복제가 정말 빠른지를 직접 재 본다.
- 태그: Design Pattern, OOP, TypeScript, JavaScript, Performance
- 키워드: 프로토타입 패턴, structuredClone, 깊은 복사
- 길이: 509줄
- 소제목: 복사할 줄 아는 건 객체 자신이다 / 자바스크립트의 프로토타입과는 다른 이야기 / 얕은 복사가 기본값을 오염시킨다 / 깊은 복사 도구마다 잃어버리는 것 / 클래스 인스턴스는 스스로 복제해야 한다 / 원본을 등록해 두고 꺼내 쓰기 / 복제가 정말 빠른가 / 매일 쓰는 복제 / 직접 만드는 깊은 복사 / 복제가 맞지 않는 객체 / 면접에서 나올 만한 질문
- 직접 링크 →: design-patterns-overview, pattern-abstract-factory, browser-fetch, json-crud-http, pattern-builder, pattern-factory-method, pattern-flyweight, pattern-memento
- 키워드 백링크 →: k8s-pod-basics, js-prototype-chain, db-types-overview, js-immutability-react, js-shallow-deep-copy
- 이 글로 오는 글 ←: design-patterns-overview, js-prototype-chain, js-shallow-deep-copy, pattern-builder, pattern-factory-method, pattern-flyweight, pattern-memento

#### `pattern-singleton` — 싱글턴 패턴: 하나만 만들기보다 어려운 하나 지키기

- 요약: 인스턴스를 하나로 제한하는 싱글턴이 개발 서버 재평가, 패키지 중복 설치, 비동기 초기화 경쟁, 여러 프로세스에서 어떻게 깨지는지 실제로 돌려 보고, 테스트를 망가뜨리는 전역 상태를 의존성 주입으로 바꾸는 법을 정리한다.
- 태그: Design Pattern, OOP, TypeScript, Node.js, Concurrency
- 키워드: 싱글턴 패턴, Singleton 패턴, dual package hazard
- 길이: 447줄
- 소제목: 하나만 만들고 모두가 같이 쓴다 / 자바스크립트에서는 모듈이 이미 하나다 / 같은 모듈이 두 번 로드되는 경우 / 비동기 초기화에서는 둘이 만들어진다 / 프로세스 하나에 하나일 뿐이다 / 요청마다 달라야 할 값을 넣으면 섞인다 / 테스트가 순서에 따라 깨진다 / 다른 언어는 어떻게 막나 / 직접 만들어 보는 once / 싱글턴을 써도 되는 자리 / 면접에서 나올 만한 질문
- 직접 링크 →: design-patterns-overview, micro-frontends, rate-limiting-in-practice, redis-basics, rendering-ssr, pattern-factory-method
- 키워드 백링크 →: k8s-architecture, hexagonal-architecture, cron-jobs, thread-safety, js-es-modules, leader-election, sql-batch-timeout-pool
- 이 글로 오는 글 ←: dependency-hell, design-patterns-overview, js-es-modules, js-iife-module-pattern, pattern-abstract-factory, pattern-flyweight

### Programming › Design Patterns › Structural (`programming/design-patterns/structural`)

#### `pattern-adapter` — 어댑터 패턴: 맞지 않는 인터페이스 사이에 끼우는 변환기

- 요약: 앱이 기대하는 모양과 라이브러리의 모양 사이에 변환기를 끼워 앱 코드를 고치지 않고 교체한다. 인자 순서, 단위, 시간대처럼 이름 뒤에 숨은 차이와 계약 테스트로 확인하는 법을 다룬다.
- 태그: Design Pattern, OOP, TypeScript, Node.js
- 키워드: 어댑터 패턴, 부패 방지 계층
- 길이: 445줄
- 소제목: 모양이 다른 플러그에 끼우는 변환기 / 객체 어댑터와 클래스 어댑터 / 이름만 바꾸는 게 아니다 / 콜백을 Promise로 바꾸는 것도 어댑터다 / 매일 지나가는 어댑터 / 어댑터를 바꾸기 전에 계약 테스트부터 / 비슷한 구조 패턴과 헷갈릴 때 / 어댑터가 쌓일 때 생기는 일 / 면접에서 나올 만한 질문
- 직접 링크 →: design-patterns-overview, browser-fetch, mvc-pattern, k8s-pod-multicontainer, pattern-bridge, pattern-decorator, pattern-proxy, pattern-facade
- 키워드 백링크 →: hexagonal-architecture, js-function-forms, http-status-codes, structured-logging
- 이 글로 오는 글 ←: ddd-bounded-context, design-patterns-overview, enterprise-system-integration, hexagonal-architecture, pattern-bridge, pattern-decorator, pattern-facade, pattern-proxy

#### `pattern-bridge` — 브리지 패턴: 두 방향으로 늘어나는 클래스를 둘로 나누기

- 요약: 서로 상관없이 바뀌는 두 축을 상속 하나로 묶으면 클래스가 곱으로 는다. 무엇을 할지와 어떻게 할지를 두 계층으로 나누고, Go slog, 리액트 렌더러, database/sql에서 같은 구조를 찾아본다.
- 태그: Design Pattern, OOP, TypeScript, React
- 키워드: 브리지 패턴, pimpl
- 길이: 427줄
- 소제목: 두 방향으로 갈라지는 상속 / 무엇을 그릴지와 어떻게 그릴지를 떼어 놓는다 / 여기서 말하는 구현은 implements가 아니다 / Go의 slog가 나눠 놓은 두 쪽 / 렌더러를 바꿔 끼우는 프레임워크들 / 가짜 렌더러로 차트 로직만 테스트하기 / 직접 늘려 보는 두 축 / 전략, 어댑터와 무엇이 다른가 / 미리 나눴다가 후회하는 경우 / 면접에서 나올 만한 질문
- 직접 링크 →: design-patterns-overview, react-rerender, pattern-strategy, pattern-adapter, pattern-abstract-factory
- 키워드 백링크 →: k8s-cri-cni-csi, observability-basics, k8s-architecture, sql-batch-timeout-pool, grpc
- 이 글로 오는 글 ←: design-patterns-overview, pattern-adapter, pattern-strategy

#### `pattern-composite` — 컴포지트 패턴: 세트 안의 세트를 상품 하나처럼 계산하기

- 요약: 세트 안에 세트가 들어가면서 개수만 틀리던 장바구니를 하나와 묶음이 같은 질문에 답하는 구조로 바꾼다. 투명성과 안전성, fold로 쓰는 함수형 버전, DOM·ReactNode·Express Router 속 트리, 순환과 공유 자식과 깊은 트리 같은 운영 데이터의 함정을 다룬다.
- 태그: Design Pattern, OOP, TypeScript, JavaScript, React
- 키워드: 컴포지트 패턴, Composite 패턴
- 길이: 420줄
- 소제목: 세트 안에 세트가 들어오던 날 / 하나와 묶음이 같은 질문에 답한다 / 계산은 잎에서 시작해 위로 올라온다 / add를 어디에 둘 것인가 / 클래스 없이 트리 하나와 fold 하나 / 매일 쓰는 트리들 / 트리가 그래프가 되는 순간 / 데코레이터와 같은 모양, 다른 목적 / 직접 만들어 보는 세트 계산 / 컴포지트가 과한 경우 / 면접에서 나올 만한 질문
- 직접 링크 →: design-patterns-overview, pattern-visitor, pattern-decorator, pattern-chain-of-responsibility, pattern-iterator
- 키워드 백링크 →: js-execution-context, ds-graph-bfs-dfs
- 이 글로 오는 글 ←: design-patterns-overview, pattern-builder, pattern-chain-of-responsibility, pattern-command, pattern-decorator, pattern-interpreter, pattern-visitor

#### `pattern-decorator` — 데코레이터 패턴: 같은 모양으로 감싸 기능을 겹쳐 붙이기

- 요약: 옵션이 얽힌 fetchJson을 재시도·로그·타임아웃 겹으로 나누고, 감싸는 순서에 따라 로그 줄 수와 타임아웃 동작이 어떻게 달라지는지 직접 돌려 본다. 고차 함수 버전, TypeScript 표준 데코레이터 문법과의 차이, Java I/O·Go 핸들러·React HOC, 감쌌을 때 생기는 부작용까지 다룬다.
- 태그: Design Pattern, OOP, TypeScript, JavaScript, HTTP
- 키워드: 데코레이터 패턴, Decorator 패턴, 고차 컴포넌트
- 길이: 462줄
- 소제목: 같은 모양으로 감싸고 앞뒤에 일을 더한다 / 바깥부터 읽고 안쪽부터 실행된다 / 감싸는 순서가 결과를 바꾼다 / 클래스 대신 함수를 감싸도 된다 / 메서드 위의 @는 데코레이터 패턴인가 / 매일 감싸고 있는 것들 / 감쌌더니 달라진 것들 / 프록시, 어댑터와 갈리는 지점 / 직접 겹쳐 보는 재시도와 로그 / 면접에서 나올 만한 질문
- 직접 링크 →: design-patterns-overview, timeouts, idempotency-key, retries, react-rerender, pattern-adapter, pattern-proxy, pattern-chain-of-responsibility, pattern-composite
- 키워드 백링크 →: browser-fetch, js-first-class-callbacks, resilience-patterns, http-methods
- 이 글로 오는 글 ←: design-patterns-overview, js-first-class-callbacks, pattern-adapter, pattern-chain-of-responsibility, pattern-composite, pattern-proxy

#### `pattern-facade` — 퍼사드 패턴: 복잡한 하위 시스템 앞에 입구 하나 세우기

- 요약: 세 군데에 복사된 주문 절차 중 한 곳만 결제 실패 시 재고를 풀지 않던 버그를 퍼사드 하나로 모은다. 실패하면 거꾸로 되돌리는 보상, git commit과 배관 명령, BFF, 신 객체가 되는 과정, 어댑터·중재자와의 차이를 다룬다.
- 태그: Design Pattern, OOP, TypeScript, Architecture, Git
- 키워드: 퍼사드 패턴, Facade 패턴, 배관 명령
- 길이: 390줄
- 소제목: 세 군데에 복사된 주문 절차 / 하위 시스템 앞에 입구 하나 / placeOrder 한 번이 안에서 하는 일 / git commit도 퍼사드다 / 퍼사드는 어디에나 있다 / 서비스 앞에 선 퍼사드 / 퍼사드가 신이 되는 과정 / 테스트는 두 층으로 나뉜다 / 어댑터, 중재자와 나란히 놓으면 / 직접 만들어 보는 주문 퍼사드 / 면접에서 나올 만한 질문
- 직접 링크 →: design-patterns-overview, microservices, idempotency-key, git-internals-basics, gateway, pattern-adapter, pattern-mediator
- 키워드 백링크 →: https-tls, clean-architecture, git-staging-area, dns
- 이 글로 오는 글 ←: design-patterns-overview, pattern-adapter, pattern-mediator, pattern-proxy

#### `pattern-flyweight` — 플라이웨이트 패턴: 같은 상태는 한 벌만 두고 같이 쓰기

- 요약: 마커 20만 개가 같은 아이콘을 저마다 들고 있어 87MB이던 메모리를 고유 상태와 외부 상태로 나눠 18MB로 줄인다. 공유 객체를 고쳤을 때의 사고와 Object.freeze, 끝없이 자라는 풀과 WeakRef, Java Integer 캐시와 문자열 인터닝, 캐시와의 차이를 다룬다.
- 태그: Design Pattern, OOP, TypeScript, JavaScript, Performance
- 키워드: 플라이웨이트 패턴, Flyweight 패턴, 문자열 인터닝
- 길이: 399줄
- 소제목: 마커마다 같은 아이콘을 들고 있었다 / 바뀌지 않는 것과 바뀌는 것을 가른다 / 공장이 같은 것을 한 번만 만든다 / 줄어든 메모리를 재 본다 / 하나를 고쳤더니 전부 바뀌었다 / 풀이 끝없이 자랄 때 / 엔진과 언어 안의 플라이웨이트 / 캐시와 무엇이 다른가 / 직접 만드는 스타일 공장 / 플라이웨이트가 필요 없는 경우 / 면접에서 나올 만한 질문
- 직접 링크 →: design-patterns-overview, js-memory-leak, git-internals-basics, caching-strategies, pattern-singleton, pattern-prototype
- 키워드 백링크 →: js-object-methods, js-strict-mode, js-es-modules
- 이 글로 오는 글 ←: design-patterns-overview, pattern-prototype

#### `pattern-proxy` — 프록시 패턴: 진짜와 같은 얼굴을 한 대리인

- 요약: 생성자가 300ms를 쓰는 렌더러를 처음 불릴 때 만드는 대리인으로 감싸는 데서 출발해 가상·보호·캐시·원격 프록시, JS Proxy와 Reflect, Vue 3의 reactive, ORM 지연 로딩 엔티티, 대리인을 건너뛰는 내부 호출, 데코레이터와의 차이를 다룬다. 네트워크 프록시와 무엇이 같은지도 짚는다.
- 태그: Design Pattern, OOP, TypeScript, JavaScript
- 키워드: 프록시 패턴, Proxy 패턴, Reflect, 지연 로딩
- 길이: 502줄
- 소제목: 같은 이름의 네트워크 프록시와 무엇이 같나 / 진짜와 똑같은 얼굴을 한 대리인 / 처음 부를 때 만든다 / 들여보낼지, 저장해 둔 걸 줄지 / 멀리 있는 객체를 가까이 있는 것처럼 / 언어가 내장한 대리인, Proxy 객체 / Vue 3의 reactive는 대리인이 장부를 적는 것이다 / ORM이 건네준 가짜 엔티티 / 대리인을 건너뛰는 호출 / 데코레이터와 같은 코드, 다른 의도 / 직접 만드는 캐싱 프록시 / 면접에서 나올 만한 질문
- 직접 링크 →: proxy-reverse-proxy, pattern-decorator, code-splitting, caching-strategies, timeouts, retries, circuit-breaker, sql-query-rewrite, pattern-adapter, pattern-facade
- 키워드 백링크 →: json-crud-http, resilience-patterns, http-versions, js-immutability-react, js-destructuring, grpc, design-patterns-overview, dns
- 이 글로 오는 글 ←: browser-rendering-pipeline, core-web-vitals, debounce-throttle, design-patterns-overview, frontend-browser-cache, graphql-basics, hexagonal-architecture, http-caching-cdn, js-object-methods, loading-patterns, modular-monolith, mvc-pattern, n-plus-one-queries, pattern-adapter, pattern-decorator, react-server-components, scroll-driven-animations, scroll-triggered-intersection-observer, sd-split-web-and-db, sql-query-rewrite

### Programming › Frontend (`programming/frontend`)

#### `html-form-http` — HTML form은 어떻게 HTTP 요청이 되나

- 요약: 브라우저가 폼 입력값을 골라 urlencoded 쿼리나 multipart 본문으로 바꾸는 규칙을 따라간다. FormData와 fetch, PRG, CSRF 토큰, 서버 검증까지 폼을 보낸 뒤 생기는 문제도 함께 본다.
- 태그: HTTP, Browser, Frontend, Encoding, Security
- 키워드: HTML 폼, FormData, application/x-www-form-urlencoded, URLSearchParams
- 길이: 548줄
- 소제목: form 태그의 속성 세 개가 요청을 정한다 / 입력값이 쿼리 문자열이 되기까지 / 공백은 더하기, 나머지는 퍼센트로 / 주소에 실리면 남는다 / POST 본문의 세 가지 모양 / 파일을 올릴 때 챙길 것 / fetch로 보낼 때는 FormData를 쓴다 / 폼은 GET과 POST만 보낸다 / 새로고침하면 두 번 주문된다 / 다른 사이트도 내 서버로 폼을 보낼 수 있다 / 브라우저 검증은 친절일 뿐이다 / 자바스크립트가 없어도 폼은 동작한다 / 보낸 값과 받은 값이 다를 때 / 다시 검색창과 로그인 폼으로 / 면접에서 나올 만한 질문
- 직접 링크 →: http-methods, http-message, browser-fetch, http-status-codes, cors, cookie-session-login, nginx-reverse-proxy
- 키워드 백링크 →: serverless-limits, csrf, rest-api-design, base64, http-versions, rendering-strategies, react-server-components, client-data-cache, resilience-patterns, what-happens-google-com
- 이 글로 오는 글 ←: browser-fetch, cookie-session-login, http-message, http-status-codes, json-crud-http, waf, xss

### Programming › Frontend › Architecture (`programming/frontend/architecture`)

#### `ab-testing` — A/B 테스트와 피처 플래그

- 요약: 사용자를 해시로 일관되게 나누고, 화면을 본 사람만 세고, 정해 둔 표본을 모은 뒤 판정해야 숫자 차이를 변경의 효과라고 말할 수 있다. 플래그 종류, 깜빡임, 노출 로깅, 표본 크기와 엿보기, SRM, 실험이 싸지는 화면 설계까지 정리했다.
- 태그: coupang, Experimentation, Feature Flag, Frontend, Architecture · 회사: coupang
- 키워드: A/B 테스트, 피처 플래그, 킬 스위치, 표본 비율 불일치
- 길이: 468줄
- 소제목: 지난주와 비교하면 안 되는 이유 / 배포와 공개를 떼어 놓는 스위치 / 같은 사람에게는 항상 같은 쪽을 / 직접 버킷을 계산해 보기 / 어디서 나누느냐에 따라 화면이 깜빡인다 / 보여 준 사람만 센다 / 무엇이 나아져야 이긴 건가 / 몇 명이 필요한가 / 중간에 들여다보면 거짓 승리가 늘어난다 / 처음에만 반짝하는 효과 / 반반으로 나눴는데 반반이 아니다 / 실험이 싸지려면 화면이 설정을 받아야 한다 / 끝난 플래그는 빚이 된다 / 실험 숫자가 이상할 때 먼저 보는 곳 / 다시 4.8%와 5.3%로 / 면접에서 나올 만한 질문
- 직접 링크 →: http-caching-cdn
- 키워드 백링크 →: rendering-strategies, bloom-filter, db-modeling-normalization, core-web-vitals
- 이 글로 오는 글 ←: canary-release, ci-cd-basics, core-web-vitals, feature-flags, git-branching-strategy, pattern-strategy

#### `micro-frontends` — 마이크로 프런트엔드: 큰 웹 앱을 팀별로 나눠 배포하기

- 요약: 여러 팀이 하나의 웹 앱에 묶여 서로의 배포를 기다리는 문제를 셸과 리모트 구조로 푸는 방법을 정리했다. 합치는 방식, React 싱글턴과 버전 스큐, 독립 배포와 롤백, 그리고 모노레포로 충분한 경우까지 다룬다.
- 태그: coupang, Architecture, Frontend, React, Micro Frontends · 회사: coupang
- 키워드: 마이크로 프런트엔드, 마이크로 프론트엔드, Module Federation, 멀티 존
- 길이: 403줄
- 소제목: 같은 배포 열차에 모두 타고 있다 / 껍데기 앱과 조각 앱 / 언제 합치느냐가 갈림길이다 / 런타임에 리모트를 불러오는 과정 / 설정 한 덩어리 뜯어보기 / React가 두 개 뜨면 생기는 일 / 주소창은 셸이 쥔다 / 버튼이 팀마다 달라 보이지 않게 / 앱끼리 말을 거는 방법 / 따로 배포하면 따로 되돌린다 / 배포 다음 날 결제 영역만 비어 있을 때 / 쪼갠 만큼 무거워진다 / 대부분은 모노레포로 충분하다 / 다시 목요일 배포로 / 면접에서 나올 만한 질문
- 키워드 백링크 →: build-caching, rendering-csr-spa, k8s-deploy-pipeline-eks, microservices, js-es-modules, cors
- 이 글로 오는 글 ←: monolith-architecture, pattern-singleton

### Programming › Frontend › JavaScript (`programming/frontend/javascript`)

#### `browser-fetch` — 브라우저에서 HTTP 요청 보내기: fetch 제대로 쓰기

- 요약: fetch가 500에서도 성공하는 이유와 res.ok 확인, 한 번만 읽히는 본문, credentials·keepalive 같은 옵션을 짚는다. AbortController로 늦게 온 응답과 타임아웃을 다루고, XHR·axios와 무엇이 다른지 비교한다.
- 태그: HTTP, JavaScript, Browser, Frontend
- 키워드: AbortController, AbortSignal, sendBeacon, keepalive
- 길이: 553줄
- 소제목: 500이 와도 fetch는 성공한다 / 본문은 한 번만 읽힌다 / fetch 옵션 하나씩 / 페이지를 닫을 때 보내는 요청 / 늦게 온 응답이 화면을 덮는다 / 지난 요청은 취소한다 / 실패하면 다시 보낼까 / 에러를 한 곳에서 다룬다 / XHR, fetch, axios / 같은 요청을 두 번 보내지 않으려면 / 에러 수집기에 Failed to fetch만 쌓일 때 / 다시 처음 코드로 / 면접에서 나올 만한 질문
- 직접 링크 →: http-status-codes, cors, cookie-session-login, abort-controller, http-methods, resilience-patterns, rest-api-design, http-caching-cdn, network-troubleshooting-by-layer
- 키워드 백링크 →: html-form-http, client-data-cache, json-crud-http, frontend-browser-cache, rendering-csr-spa, race-conditions, debounce-throttle, dns
- 이 글로 오는 글 ←: abort-controller, chaos-engineering, client-data-cache, distributed-lock, event-propagation, failover, html-form-http, http-streaming-sse, http-versions, javascript-roadmap, js-async-await, js-iife-module-pattern, js-promise-combinators, js-promises, json-crud-http, leader-election, load-balancer-basics, network-partitions, nginx-reverse-proxy, pattern-adapter, pattern-decorator, pattern-prototype, race-conditions, sd-autocomplete-trie, sd-chat-presence, service-discovery, tcp-connection-lifecycle, timeouts, vpc-subnets-route-tables, vpn-ipsec-wireguard, websocket-deep-dive

#### `event-loop` — 자바스크립트 이벤트 루프: 브라우저와 Node.js

- 요약: 콜 스택, 태스크 큐, 마이크로태스크 큐가 어떤 순서로 돌고 렌더링이 어디에 끼어드는지 출력 순서 퍼즐로 따라간다. 긴 작업이 INP를 망치는 이유와 작업을 쪼개는 방법, Node.js의 단계와 process.nextTick까지 다룬다.
- 태그: coupang, JavaScript, Browser, Performance, Node.js · 회사: coupang
- 키워드: 이벤트 루프, 마이크로태스크, 태스크 큐, process.nextTick, setImmediate
- 길이: 567줄
- 소제목: 콜 스택은 하나뿐이다 / 기다리는 일은 브라우저가 대신 한다 / 출력 순서 퍼즐 풀기 / 마이크로태스크는 끝까지 비운다 / await 뒤는 then 안으로 들어간다 / 화면은 태스크 사이에서만 그려진다 / 50ms가 넘으면 긴 작업이다 / 긴 작업을 쪼개는 방법들 / 이벤트 루프를 직접 흉내 내 보기 / Node.js는 단계를 돈다 / nextTick은 Promise보다 먼저다 / 누가 메인 스레드를 붙잡았는지 운영에서 찾기 / 다시 멈춘 스피너로 / 면접에서 나올 만한 질문
- 직접 링크 →: core-web-vitals, js-execution-context, js-microtask-macrotask, js-timers-accuracy
- 키워드 백링크 →: dom-basics, js-es-modules, osi-in-practice
- 이 글로 오는 글 ←: animation-performance, api-scaling-ladder, autoscaling, backend-engineer-roadmap, big-o-notation, browser-rendering-pipeline, browser-storage, bullmq-job-queue, core-web-vitals, deadlocks, distributed-tracing, dom-basics, ds-hash-map, ds-heap, ds-stack-queue-deque, express-middleware, fastapi-basics, fault-tolerance, garbage-collection, go-concurrency-basics, health-checks, integration-tests-real-db, javascript-roadmap, js-async-await, js-callback-hell, js-execution-context, js-memory-leak, js-microtask-macrotask, js-promise-combinators, js-promises, js-timers-accuracy, k8s-pod-probes, long-polling, monitoring-basics, monolith-architecture, n-plus-one-queries, network-monitoring, nginx-basics, nodejs-server-runtime, pattern-observer, percentile-latency, race-conditions, redis-basics, rendering-performance-optimization, rendering-ssr, scroll-triggered-intersection-observer, sd-start-single-server, sd-stock-exchange-low-latency, structured-logging, test-pyramid-unit-tests, thread-safety

#### `javascript-roadmap` — 자바스크립트 로드맵: 열두 장을 글로 잇는 학습 지도

- 요약: 자바스크립트 개념 이미지 열두 장의 순서대로 이 블로그의 자바스크립트 글 마흔일곱 편을 잇고, 글마다 어떤 질문에 답하는지 적는다. 장끼리 기대는 순서, React에서 다시 만나는 자리, 버그 증상에서 먼저 펼 글을 고르는 길도 놓는다.
- 태그: JavaScript, React, Browser
- 키워드: 자바스크립트 로드맵, 자바스크립트 학습 순서
- 길이: 432줄
- 소제목: 클릭 한 번이 열두 장을 지나간다 / 장끼리 기대는 순서 / 01 변수와 스코프 / 02 데이터 타입 / 03 함수 1: 만들고 넘기고 기억하기 / 04 함수 2: 조합과 재사용 / 05 배열 / 06 객체와 구조 분해 / 07 복사와 불변성 / 08 최신 문법 / 09 this, 프로토타입, 객체 지향 / 10 비동기 / 11 자바스크립트가 실행되는 방식 / 12 브라우저, DOM, 이벤트 / React에서 다시 만나는 자리 / 이 증상이면 이 글부터 / 증상 문장에서 첫 글 고르기 / 다 읽지 않아도 된다 / 면접에서 나올 만한 질문
- 직접 링크 →: k8s-learning-roadmap, networking-essentials-map, js-var-let-const, js-scope-lexical, js-hoisting-tdz, js-primitive-vs-reference, js-equality-coercion, js-truthy-falsy-typeof, js-function-forms, js-first-class-callbacks, js-closures, js-iife-module-pattern, js-currying-partial, js-pure-functions, js-memoization, js-array-transform, js-array-mutation, js-object-methods, js-destructuring, js-spread-rest, js-shallow-deep-copy, js-immutability-react, js-template-literals, js-optional-chaining-nullish, js-short-circuit, js-es-modules, js-this-binding, js-call-apply-bind, js-prototype-chain, js-classes, js-strict-mode, js-callback-hell, js-promises, js-async-await, js-promise-combinators, js-execution-context, event-loop, js-microtask-macrotask, js-timers-accuracy, garbage-collection, js-memory-leak, dom-basics, event-propagation, event-delegation, debounce-throttle, browser-fetch, abort-controller, browser-storage, cors, react-rerender, client-data-cache
- 키워드 백링크 →: core-web-vitals
- 이 글로 오는 글 ←: backend-engineer-roadmap

#### `js-memory-leak` — 자바스크립트 메모리 누수 찾기

- 요약: GC가 무엇을 쓰레기로 보는지에서 출발해 SPA에서 참조가 새는 자리와 WeakMap·WeakRef의 쓰임을 정리한다. 크롬 힙 스냅샷 비교와 Retainers 경로로 범인을 찾는 순서, Node.js 서버의 메모리 문제를 다루는 방법도 담았다.
- 태그: coupang, JavaScript, Browser, Performance, Node.js · 회사: coupang
- 키워드: 메모리 누수, 힙 스냅샷, 가비지 컬렉션, WeakMap, detached DOM
- 길이: 436줄
- 소제목: 쓰레기의 기준은 닿을 수 있느냐다 / 루트에서 출발해 표시하고 치운다 / 대부분의 객체는 금방 죽는다 / 누수는 잊어버린 참조다 / 페이지를 떠나도 남는 리스너 / 문서에서 떨어진 DOM / 클로저는 생각보다 많이 잡는다 / 끝없이 자라는 캐시 / 약하게 잡아 두는 방법 / 크롬 개발자 도구로 범인 찾기 / Node.js 서버가 점점 무거워질 때 / 다시 느려지는 탭으로 / 면접에서 나올 만한 질문
- 키워드 백링크 →: client-data-cache, redis-memory-eviction, dom-basics, js-memoization, js-function-forms, garbage-collection, event-loop, js-strict-mode, js-closures, layer-mtu-fragmentation, dns
- 이 글로 오는 글 ←: abort-controller, architecture-patterns-overview, canary-release, client-data-cache, crdt, dom-basics, ds-linked-list, ds-stack-queue-deque, ds-trie, event-delegation, event-propagation, fault-tolerance, garbage-collection, javascript-roadmap, js-call-apply-bind, js-closures, js-first-class-callbacks, js-immutability-react, js-memoization, js-scope-lexical, k8s-vpa, microservices, monolith-architecture, nodejs-server-runtime, pattern-flyweight, pattern-observer, rendering-ssr, sd-object-storage-architecture, sd-object-storage-versioning-multipart, sd-stock-exchange-low-latency

### Programming › Frontend › JavaScript › Async (`programming/frontend/javascript/async`)

#### `js-async-await` — async/await: 멈췄다가 이어서 실행되는 함수

- 요약: forEach 안의 await가 기다리지 않는 버그에서 출발해 async 함수가 await에서 어떻게 빠졌다가 돌아오는지 본다. 차례대로와 동시 실행, 동시성 제한, 미리 시작한 Promise의 처리되지 않은 거부, try 안의 return await, 최상위 await, React effect에서 쓰는 법까지 다룬다.
- 태그: JavaScript, Node.js, React
- 키워드: async/await, return await, 최상위 await
- 길이: 466줄
- 소제목: async 함수는 부르는 즉시 Promise를 준다 / forEach는 반환값을 버린다 / 하나씩 기다릴까, 한꺼번에 보낼까 / 미리 시작해 둔 Promise가 먼저 실패하면 / return과 return await는 try 안에서 다르다 / 최상위 await는 모듈 로딩을 멈춘다 / React effect에는 async를 바로 넘기지 않는다 / 직접 해 보기: 동시성을 제한하면 몇 ms 걸리나 / 처음 코드로 돌아가면 / 면접에서 나올 만한 질문
- 직접 링크 →: js-promises, js-callback-hell, js-promise-combinators, event-loop, js-es-modules, abort-controller, client-data-cache
- 키워드 백링크 →: browser-fetch, js-function-forms, js-truthy-falsy-typeof, js-destructuring
- 이 글로 오는 글 ←: abort-controller, javascript-roadmap, js-callback-hell, js-es-modules, js-first-class-callbacks, js-microtask-macrotask, js-promise-combinators, js-promises

#### `js-callback-hell` — 콜백 지옥: 들여쓰기보다 무서운 것

- 요약: 비동기 콜백을 이어 붙일 때 생기는 진짜 문제를 응답을 두 번 보내는 서버 버그에서 출발해 본다. 제어의 역전, try/catch가 끊기는 이유, 동기와 비동기가 섞이는 콜백, util.promisify로 Promise로 옮기는 방법까지 다룬다.
- 태그: JavaScript, Node.js
- 키워드: 콜백 지옥, error-first 콜백, util.promisify
- 길이: 512줄
- 소제목: 끝나면 이걸 불러 달라는 부탁 / 순서가 있는 일은 안으로 파고든다 / 콜백을 넘기면 제어권도 넘어간다 / 바깥 try가 지나쳐 버린 예외 / 어떤 때는 바로, 어떤 때는 나중에 / 동시에 시작하고 모두 끝나면 / 펴는 방법 두 가지 / 콜백이 여전히 맞는 자리 / 직접 만들어 보는 series / 콜백 지옥을 다시 정리하면 / 면접에서 나올 만한 질문
- 직접 링크 →: js-promises, js-async-await, js-promise-combinators, js-first-class-callbacks, event-loop, saga-pattern, js-this-binding, abort-controller
- 키워드 백링크 →: json-crud-http, message-delivery-semantics, js-function-forms
- 이 글로 오는 글 ←: javascript-roadmap, js-async-await, js-first-class-callbacks, js-promise-combinators, js-promises

#### `js-execution-context` — 실행 컨텍스트와 콜 스택: 함수 호출이 쌓이고 넘치는 과정

- 요약: 함수를 부를 때마다 엔진이 만드는 실행 컨텍스트와 그것이 쌓이는 콜 스택을 본다. 스택 오버플로가 나는 이유, 깊이를 힙으로 옮겨 고치는 법, await 너머의 스택 트레이스 읽는 법까지 다룬다.
- 태그: JavaScript, Node.js, React
- 키워드: 실행 컨텍스트, 스택 오버플로, Maximum call stack size exceeded, 트램펄린
- 길이: 520줄
- 소제목: 함수를 부를 때마다 작업 공간이 하나 생긴다 / 만들어질 때 한 번, 실행할 때 한 번 / 콜 스택은 컨텍스트를 쌓는 접시 더미다 / 몇 장까지 쌓이나 / 넘치는 곳은 재귀만이 아니다 / 스택 트레이스는 콜 스택의 사진이다 / await 너머의 스택 / 깊이를 스택에서 빼내는 방법 / React에서 콜 스택을 만나는 자리 / 현장에서 스택 오버플로를 좁히는 순서 / 연습: 댓글 트리를 스택 없이 펼치기 / 다시 댓글 2만 개로 / 면접에서 나올 만한 질문
- 직접 링크 →: event-loop, js-microtask-macrotask, js-timers-accuracy, js-scope-lexical, js-hoisting-tdz, js-closures
- 키워드 백링크 →: js-function-forms, js-strict-mode
- 이 글로 오는 글 ←: big-o-notation, ds-stack-queue-deque, event-loop, javascript-roadmap, js-hoisting-tdz, js-microtask-macrotask, js-spread-rest, js-this-binding, js-timers-accuracy, pattern-composite, quadtree

#### `js-microtask-macrotask` — 마이크로태스크와 매크로태스크: 출력 순서를 장부로 푼다

- 요약: 대기열에 무엇이 어떤 순서로 들어가는지 장부를 적어 가며 then 체인과 await 순서 퍼즐을 푼다. 가짜 타이머 테스트가 깨지는 이유, 마이크로태스크 에러가 가는 곳, React가 업데이트를 묶는 자리도 본다.
- 태그: JavaScript, Node.js, React, Browser
- 키워드: 매크로태스크, queueMicrotask, MutationObserver, advanceTimersByTimeAsync
- 길이: 496줄
- 소제목: 매크로태스크라는 말은 명세에 없다 / 장부를 적으며 푸는 법 / await 하나는 한 틱이다 / 처음 테스트는 장부의 어디서 어긋났나 / Node.js 11에서 바뀐 순서 / 마이크로태스크에서 던진 에러는 어디로 가나 / DOM 변경은 마이크로태스크로 묶인다 / React가 업데이트를 묶는 자리 / 순서 버그를 현장에서 좁히는 법 / 연습: 체인 여러 개의 출력 순서 / 다시 retry 테스트로 / 면접에서 나올 만한 질문
- 직접 링크 →: event-loop, js-execution-context, js-timers-accuracy, js-promises, js-async-await, react-rerender
- 키워드 백링크 →: test-pyramid-unit-tests
- 이 글로 오는 글 ←: event-loop, javascript-roadmap, js-execution-context, js-timers-accuracy, nodejs-server-runtime, test-pyramid-unit-tests

#### `js-promise-combinators` — Promise.all, allSettled, race, any 고르기

- 요약: 위젯 하나의 실패가 대시보드 전체를 죽인 상황에서 출발해 네 조합 함수가 각각 어떤 질문에 답하는지 비교한다. race 타임아웃이 아무것도 멈추지 않는 이유, AggregateError, 빈 배열의 함정, 동시 요청이 너무 많을 때와 Promise.all 직접 구현까지 다룬다.
- 태그: JavaScript, Node.js, React
- 키워드: Promise.allSettled, Promise.any, AggregateError
- 길이: 449줄
- 소제목: 네 함수가 답하는 질문 / 하나가 실패하면 all은 바로 포기한다 / 부분 실패를 받아들이는 allSettled / race로 건 타임아웃은 아무것도 멈추지 않는다 / any는 첫 성공을 기다린다 / 빈 배열을 넣으면 생기는 일 / 한꺼번에 너무 많이 넣을 때 / Promise.all을 직접 만들어 보면 / 대시보드는 결국 어떻게 고쳤나 / 면접에서 나올 만한 질문
- 직접 링크 →: js-callback-hell, js-promises, js-async-await, idempotency-key, client-data-cache, abort-controller, timeouts
- 키워드 백링크 →: browser-fetch, streaming-ssr-suspense, rendering-strategies, sd-payment-flow, event-loop, js-destructuring
- 이 글로 오는 글 ←: javascript-roadmap, js-array-transform, js-async-await, js-callback-hell, js-promises

#### `js-promises` — Promise: 상태, then 체인, 에러 전파

- 요약: Promise가 상태를 한 번만 정하고 핸들러를 항상 나중에 부르는 상자라는 데서 출발해 then이 새 Promise를 돌려주는 규칙과 에러가 체인을 타고 내려가는 방식을 따라간다. 처리되지 않은 거부가 Node.js와 브라우저에서 어떻게 다뤄지는지, new Promise로 감쌀 때 흔한 실수와 React에서 만나는 자리도 다룬다.
- 태그: JavaScript, Node.js, React
- 키워드: unhandledRejection, thenable, 처리되지 않은 거부
- 길이: 475줄
- 소제목: 결과를 담을 상자를 먼저 받는다 / then이 돌려주는 건 새 상자다 / 실패는 다음 catch까지 미끄러진다 / 아무도 받지 않은 거부 / 상자를 하나 더 씌울 때 흔한 실수 / resolve에 Promise를 넘기면 늦어진다 / React에서 Promise를 만나는 자리 / 직접 만들어 보는 체인 판정기 / 처음 버그를 다시 보면 / 면접에서 나올 만한 질문
- 직접 링크 →: js-callback-hell, js-async-await, js-promise-combinators, event-loop, browser-fetch, abort-controller, client-data-cache
- 키워드 백링크 →: api-styles-overview, rendering-strategies, js-function-forms, http-status-codes
- 이 글로 오는 글 ←: express-middleware, javascript-roadmap, js-async-await, js-callback-hell, js-microtask-macrotask, js-promise-combinators, pattern-observer

#### `js-timers-accuracy` — 타이머는 왜 늦게 울리나: setTimeout, 스로틀링, requestAnimationFrame

- 요약: setTimeout의 지연이 하한일 뿐인 이유, 중첩 4ms 규칙과 32비트 넘침, 백그라운드 탭 스로틀링을 실측과 함께 본다. 카운트다운과 애니메이션을 끝나는 시각과 타임스탬프로 계산하는 법도 다룬다.
- 태그: JavaScript, Browser, Node.js, React, Performance
- 키워드: 백그라운드 탭 스로틀링, TimeoutOverflowWarning, requestAnimationFrame, performance.now()
- 길이: 454줄
- 소제목: 지연 시간은 약속이 아니라 하한이다 / setInterval은 밀린 호출을 몰아서 주지 않는다 / 0ms를 줘도 0ms가 아니다 / 너무 큰 값은 바로 울린다 / 탭을 떠나면 브라우저가 일부러 늦춘다 / 어느 시계로 잴 것인가 / 움직임은 프레임에 맞춘다 / React에서 카운트다운을 짤 때 / Node.js 서버의 타이머 / 연습: 남은 시간 표시하기 / 다시 인증번호 3분으로 / 면접에서 나올 만한 질문
- 직접 링크 →: event-loop, js-execution-context, js-microtask-macrotask, animation-performance, js-closures
- 키워드 백링크 →: realtime-communication, js-function-forms, clock-skew
- 이 글로 오는 글 ←: animation-performance, browser-rendering-pipeline, debounce-throttle, ds-heap, event-loop, javascript-roadmap, js-execution-context, js-microtask-macrotask

### Programming › Frontend › JavaScript › Basics (`programming/frontend/javascript/basics`)

#### `js-equality-coercion` — ==와 ===, 그리고 자바스크립트의 타입 변환

- 요약: select에서 고른 id로 상품을 못 찾는 버그에서 출발해 네 가지 같음 알고리즘, 느슨한 비교가 값을 바꾸는 순서, ToPrimitive, 더하기와 비교 연산자의 변환을 따라간다. NaN과 -0, == null 예외, 경계에서 타입을 맞추는 실무 규칙까지 다룬다.
- 태그: JavaScript, TypeScript, React
- 키워드: 느슨한 비교, IsLooselyEqual, ToPrimitive, SameValueZero
- 길이: 380줄
- 소제목: 자바스크립트에는 같음이 네 종류 있다 / 느슨한 비교가 값을 바꾸는 순서 / 객체가 원시값으로 바뀌는 길 / 더하기만 다르게 행동한다 / 크다 작다도 타입을 바꾼다 / 값이 경계를 넘을 때마다 문자열이 된다 / NaN과 -0, 엄격한 비교의 구멍 / 느슨한 비교를 써도 되는 곳은 한 군데 / 비교 하나에 담긴 결정 / 면접에서 나올 만한 질문
- 직접 링크 →: js-primitive-vs-reference, js-truthy-falsy-typeof, react-rerender, js-optional-chaining-nullish
- 키워드 백링크 →: sql-injection, js-template-literals
- 이 글로 오는 글 ←: ds-hash-map, javascript-roadmap, js-array-transform, js-primitive-vs-reference, js-template-literals, js-truthy-falsy-typeof

#### `js-es-modules` — ES 모듈: 라이브 바인딩, 평가 순서, CommonJS와 만나는 자리

- 요약: 같은 카운터가 ESM에서는 2, CommonJS에서는 0이 되는 장면에서 출발해 import가 변수를 연결하는 방식, default의 정체, 파싱·링크·평가 순서, 브라우저의 모듈 워터폴과 modulepreload를 따라간다. Node 22의 type 감지, require(esm), exports 필드, TypeScript 변환, React.lazy와 모듈 경계까지 다룬다.
- 태그: JavaScript, Node.js, TypeScript, React, Browser
- 키워드: ES 모듈, 라이브 바인딩, modulepreload, require(esm)
- 길이: 568줄
- 소제목: 내보낸 것은 값이 아니라 변수다 / default는 이름이 default인 내보내기일 뿐이다 / 실행하기 전에 연결부터 한다 / 브라우저는 import를 만날 때마다 한 번 더 요청한다 / Node에서 두 시스템이 만나는 자리 / TypeScript와 번들러가 바꿔 쓰는 코드 / React 코드에서 모듈 경계를 만나는 순간 / 모듈 오류를 만났을 때 읽는 순서 / 정적인 그래프가 주는 것 / 면접에서 나올 만한 질문
- 직접 링크 →: js-iife-module-pattern, code-splitting, pattern-singleton, js-hoisting-tdz, js-async-await, rendering-ssr
- 키워드 백링크 →: rendering-strategies, http-versions, js-strict-mode, js-destructuring, cors
- 이 글로 오는 글 ←: browser-rendering-pipeline, code-splitting, event-loop, islands-resumability, javascript-roadmap, js-async-await, js-function-forms, js-hoisting-tdz, js-iife-module-pattern, js-object-methods, js-prototype-chain, js-pure-functions, js-scope-lexical, js-strict-mode, js-this-binding, js-var-let-const, micro-frontends, pattern-flyweight, pattern-singleton

#### `js-hoisting-tdz` — 호이스팅과 TDZ: 선언 전에 이름을 쓰면 생기는 일

- 요약: 함수 선언을 const 화살표 함수로 바꾸자 Cannot access before initialization이 난 장면에서 출발해, 실행 전 등록 단계와 선언마다 다른 초기화, 시간 기준의 TDZ를 따라간다. 블록 안 함수 선언의 모드 차이, 순환 import가 부르는 TDZ와 CommonJS와의 차이, React 파일에서 만나는 경우, TypeScript와 ESLint로 미리 잡는 법까지 다룬다.
- 태그: JavaScript, TypeScript, React, Node.js
- 키워드: 호이스팅, TDZ, Temporal Dead Zone
- 길이: 510줄
- 소제목: 실행 전에 이름부터 등록한다 / 선언마다 초기화하는 시점이 다르다 / 오류 문구로 원인을 가른다 / TDZ는 위치가 아니라 시간이다 / 바깥 이름이 있어도 TDZ가 이긴다 / 블록 안의 함수 선언은 모드마다 다르다 / 순환 import가 TDZ를 부른다 / React 파일에서 만나는 경우 / 도구로 미리 잡기 / 다시 formatPrice로 / 면접에서 나올 만한 질문
- 직접 링크 →: js-var-let-const, js-scope-lexical, js-execution-context, js-strict-mode, js-es-modules
- 키워드 백링크 →: js-function-forms, code-splitting
- 이 글로 오는 글 ←: dependency-hell, javascript-roadmap, js-classes, js-es-modules, js-execution-context, js-function-forms, js-scope-lexical, js-truthy-falsy-typeof, js-var-let-const

#### `js-optional-chaining-nullish` — 옵셔널 체이닝과 ??: 어디서 멈추고 무엇을 없음으로 보나

- 요약: 픽업 주문의 shipping: null 때문에 화면이 하얘진 장면에서 출발해 ?.가 체인을 어디까지 건너뛰는지, ??와 ||가 갈리는 값, 괄호 없이 섞을 수 없는 이유, setter를 부르지 않는 ??=를 따라간다. React에서 ?? []가 effect를 계속 부르는 문제와 물음표가 버그를 숨기는 경우까지 다룬다.
- 태그: JavaScript, TypeScript, React
- 키워드: 옵셔널 체이닝, null 병합 연산자, 논리 대입 연산자
- 길이: 451줄
- 소제목: 물음표 하나가 체인을 멈춘다 / 한 번 멈추면 체인 끝까지 건너뛴다 / 대괄호와 함수 호출에도 붙는다 / 옵셔널 체이닝을 쓸 수 없는 자리 / null 병합은 null과 undefined만 없는 값으로 본다 / 괄호 없이는 섞을 수 없다 / 비어 있을 때만 대입하는 논리 대입 / 오래된 환경으로 내려가면 코드가 길어진다 / React에서 빈 배열 기본값이 effect를 계속 부른다 / 물음표가 늘어날수록 버그는 조용해진다 / 없어도 되는 값에만 물음표를 찍는다 / 면접에서 나올 만한 질문
- 직접 링크 →: js-truthy-falsy-typeof, js-short-circuit, js-destructuring, react-rerender, client-data-cache
- 이 글로 오는 글 ←: event-delegation, javascript-roadmap, js-destructuring, js-equality-coercion, js-function-forms, js-short-circuit, js-template-literals, js-truthy-falsy-typeof

#### `js-primitive-vs-reference` — 원시값과 참조: 자바스크립트는 무엇을 복사하나

- 요약: 쿠폰 미리보기를 열었을 뿐인데 장바구니 가격이 바뀐 버그에서 출발해 원시값 일곱 가지, 참조의 복사, call by sharing을 따라간다. fill로 만든 2차원 배열, 요청끼리 섞이는 모듈 스코프 객체, React가 다시 그리지 않는 이유까지 다룬다.
- 태그: JavaScript, React, Node.js
- 키워드: 원시값, 참조값, call by sharing, 공유 전달
- 길이: 473줄
- 소제목: 원시값 일곱 가지, 나머지는 전부 객체 / 변수 칸에 들어 있는 것 / 대입은 칸의 내용을 그대로 복사한다 / 함수에 넘길 때도 같은 규칙이다 / const는 객체를 얼리지 않는다 / 내용이 같아도 다른 객체다 / React가 화면을 바꾸지 않을 때 / 현장에서 이 규칙을 만나는 증상 / 복사할지 공유할지 고르는 기준 / 칸에 든 것만 복사된다 / 면접에서 나올 만한 질문
- 직접 링크 →: js-equality-coercion, js-truthy-falsy-typeof, js-pure-functions, js-shallow-deep-copy, js-var-let-const, js-object-methods, react-rerender, js-immutability-react, js-array-mutation
- 이 글로 오는 글 ←: ds-array-matrix, javascript-roadmap, js-array-mutation, js-call-apply-bind, js-destructuring, js-equality-coercion, js-first-class-callbacks, js-iife-module-pattern, js-memoization, js-object-methods, js-prototype-chain, js-shallow-deep-copy, js-strict-mode, js-this-binding, js-truthy-falsy-typeof, js-var-let-const, react-rerender

#### `js-scope-lexical` — 스코프와 렉시컬 스코프: 이름은 어디서 찾나

- 요약: 블록 안의 let 하나 때문에 로그인 상태가 비어 있던 버그에서 출발해 스코프 체인, 쓴 자리가 바깥을 정하는 렉시컬 스코프, 환경 레코드와 [[Environment]]를 따라간다. V8 바이트코드와 개발자 도구 Scope 패널로 확인하고, 가리기, 암묵적 전역, 매개변수 기본값의 범위, React에서 컴포넌트 안에 컴포넌트를 정의할 때의 문제까지 다룬다.
- 태그: JavaScript, React, Browser, Node.js
- 키워드: 렉시컬 스코프, 스코프 체인, 동적 스코프
- 길이: 427줄
- 소제목: 이름은 안쪽부터 바깥으로 찾는다 / 쓴 자리가 바깥을 정한다 / 함수는 태어난 환경을 들고 다닌다 / 엔진은 실행 전에 찾을 곳을 정해 둔다 / 같은 이름으로 가리기 / 선언 없이 대입하면 전역이 생긴다 / 매개변수 기본값에는 따로 범위가 있다 / eval과 with는 규칙을 흐린다 / 개발자 도구에서 스코프 체인 보기 / React에서 컴포넌트 안에 컴포넌트를 쓰면 / 다시 로그인 버그로 / 면접에서 나올 만한 질문
- 직접 링크 →: js-var-let-const, js-hoisting-tdz, js-this-binding, js-closures, js-memory-leak, js-strict-mode, react-rerender
- 키워드 백링크 →: js-object-methods, js-function-forms, js-es-modules
- 이 글로 오는 글 ←: javascript-roadmap, js-closures, js-execution-context, js-hoisting-tdz, js-strict-mode, js-var-let-const

#### `js-short-circuit` — 단락 평가: &&와 ||는 언제 멈추고 무엇을 돌려주나

- 요약: 검증 함수 두 개를 &&로 이었더니 오류가 하나만 쌓인 장면에서 출발해 오른쪽을 건너뛰는 규칙과 피연산자를 그대로 돌려주는 규칙을 따라간다. 우선순위, ||로 주는 기본값, 가드, some·every, JSX로 새어 나오는 값, &&로 부른 훅이 순서를 깨는 문제까지 다룬다.
- 태그: JavaScript, React
- 키워드: 단락 평가, short-circuit evaluation, jsx-no-leaked-render
- 길이: 408줄
- 소제목: 오른쪽은 필요할 때만 실행된다 / 연산자가 돌려주는 것은 불리언이 아니다 / AND가 OR보다 먼저 묶인다 / 기본값으로 쓸 때는 0을 조심한다 / 가드로 쓸 때 옵셔널 호출과 다른 점 / 배열 메서드도 중간에 멈춘다 / JSX 안에서 새어 나오는 값 / 조건 뒤에 훅을 부르면 순서가 깨진다 / 코드 리뷰에서 단락 평가를 읽는 법 / 멈추는 시점과 돌려주는 값 / 면접에서 나올 만한 질문
- 직접 링크 →: js-truthy-falsy-typeof, js-optional-chaining-nullish, js-array-transform, js-template-literals
- 키워드 백링크 →: js-pure-functions
- 이 글로 오는 글 ←: javascript-roadmap, js-array-transform, js-optional-chaining-nullish, js-template-literals, js-truthy-falsy-typeof, pattern-interpreter, sql-logical-order

#### `js-template-literals` — 템플릿 리터럴과 태그된 템플릿: 조각은 믿고 값은 의심한다

- 요약: `${user}`가 [object Object]로 찍히는 장면에서 출발해 백틱 안의 값이 문자열이 되는 규칙, 태그 함수가 조각과 값을 따로 받는 구조와 템플릿 객체 캐시, 그 구조로 SQL 인젝션과 XSS를 막는 법을 따라간다. String.raw, className에 false가 찍히는 실수, URL 인코딩까지 다룬다.
- 태그: JavaScript, React, Security, PostgreSQL
- 키워드: 템플릿 리터럴, 태그된 템플릿, String.raw
- 길이: 533줄
- 소제목: 백틱 안의 값은 문자열로 바뀐다 / 줄바꿈과 들여쓰기는 그대로 들어간다 / 태그 함수는 조각과 값을 따로 받는다 / 같은 자리의 strings는 한 번만 만들어진다 / 쿼리를 문자열로 만들면 생기는 일 / HTML에 끼워 넣을 때도 같은 원리다 / 태그가 쓰이는 다른 자리 / 이스케이프를 해석하지 않은 원본, raw / React 코드에서 템플릿 문자열을 만나는 자리 / 템플릿이 위험해지는 순간 / 조각은 믿고 값은 의심한다 / 면접에서 나올 만한 질문
- 직접 링크 →: js-short-circuit, js-optional-chaining-nullish, js-equality-coercion, xss
- 키워드 백링크 →: hydration, graphql-basics, rendering-strategies
- 이 글로 오는 글 ←: javascript-roadmap, js-equality-coercion, js-short-circuit

#### `js-truthy-falsy-typeof` — truthy·falsy와 typeof, null·undefined·NaN 가려내기

- 요약: typeof로 객체인지 확인했는데 null에서 터진 버그에서 출발해 falsy 여덟 개, typeof의 함정, 배열과 null을 정확히 가리는 방법을 다룬다. null과 undefined가 생기는 곳, JSON을 지나며 사라지는 값, 조용히 퍼지는 NaN, React에서 화면에 찍히는 0까지 따라간다.
- 태그: JavaScript, TypeScript, React
- 키워드: falsy, truthy, typeof null, Number.isNaN
- 길이: 414줄
- 소제목: 거짓으로 취급되는 값은 여덟 개뿐이다 / if 하나에 숨은 버그들 / React에서 0이 화면에 찍힌다 / typeof가 돌려주는 여덟 가지 / 종류를 정확히 가려내는 조합 / null과 undefined는 어디서 오나 / NaN은 조용히 퍼진다 / 검사 하나가 어디까지 거르는지 / 면접에서 나올 만한 질문
- 직접 링크 →: js-primitive-vs-reference, js-equality-coercion, js-optional-chaining-nullish, js-short-circuit, js-hoisting-tdz, js-prototype-chain
- 키워드 백링크 →: json-crud-http, js-destructuring
- 이 글로 오는 글 ←: javascript-roadmap, js-array-transform, js-async-await, js-equality-coercion, js-function-forms, js-optional-chaining-nullish, js-primitive-vs-reference, js-prototype-chain, js-short-circuit, yaml-for-k8s

#### `js-var-let-const` — var, let, const: 변수 상자는 언제 새로 생기나

- 요약: 반복문의 setTimeout이 모두 3을 찍는 장면에서 출발해 var의 함수 범위, let의 반복마다 새로 생기는 환경, 전역 객체에 붙는 var, 재할당만 막는 const를 따라간다. TypeScript의 리터럴 타입 추론과 React의 렌더마다 새로 생기는 const, 레거시 var를 바꿀 때의 함정까지 다룬다.
- 태그: JavaScript, TypeScript, React, Browser
- 키워드: 블록 스코프, prefer-const, 재할당
- 길이: 488줄
- 소제목: var는 함수 하나에 상자 하나다 / let은 반복마다 새 i를 만든다 / 같은 이름을 두 번 선언하면 / 전역에서 var는 window의 속성이 된다 / const가 막는 것은 재할당뿐이다 / 무엇을 기본으로 쓸까 / TypeScript에서는 타입까지 달라진다 / React 컴포넌트 안의 const / 오래된 var를 let으로 바꿀 때 / 다시 세 번의 3으로 / 면접에서 나올 만한 질문
- 직접 링크 →: js-scope-lexical, js-hoisting-tdz, js-closures, js-iife-module-pattern, js-es-modules, js-object-methods, js-primitive-vs-reference, js-immutability-react, react-rerender
- 키워드 백링크 →: js-function-forms
- 이 글로 오는 글 ←: javascript-roadmap, js-closures, js-hoisting-tdz, js-iife-module-pattern, js-primitive-vs-reference, js-scope-lexical

### Programming › Frontend › JavaScript › Browser & DOM (`programming/frontend/javascript/browser`)

#### `abort-controller` — AbortController로 취소 설계하기: 신호를 끝까지 넘긴다

- 요약: abort()를 불렀는데도 늦은 응답이 화면을 덮은 React 화면에서 출발해 컨트롤러와 신호의 규칙, AbortSignal.any, 요청의 어느 시점에 취소가 먹히는지를 실제로 확인한다. 신호를 받는 함수를 만드는 법과 리스너 누수, StrictMode의 이중 요청, 서버까지 취소를 잇는 법, 리스너를 한 번에 떼는 signal 옵션까지 다룬다.
- 태그: JavaScript, Browser, React, Node.js
- 키워드: AbortSignal.any, throwIfAborted, 취소 신호, 취소 전파
- 길이: 587줄
- 소제목: 컨트롤러는 누르는 쪽, 신호는 듣는 쪽 / 신호를 합치는 표현을 뜯어본다 / 취소는 언제 어디까지 먹히나 / 신호를 받는 함수를 직접 만든다 / React effect에서 취소가 닿지 않을 때 / 서버까지 취소를 이어 준다 / 리스너 여러 개를 한 번에 뗀다 / 현장에서 취소 문제를 만나는 순간 / 신호를 직접 만들어 본다 / 다시 사용자 상세 화면으로 / 면접에서 나올 만한 질문
- 직접 링크 →: browser-fetch, js-memory-leak, js-async-await, client-data-cache, event-propagation
- 키워드 백링크 →: js-pure-functions, http-status-codes, js-closures
- 이 글로 오는 글 ←: browser-fetch, debounce-throttle, go-concurrency-basics, javascript-roadmap, js-async-await, js-call-apply-bind, js-callback-hell, js-iife-module-pattern, js-promise-combinators, js-promises, js-strict-mode, retries

#### `browser-storage` — 브라우저 저장소: localStorage, sessionStorage, 쿠키, IndexedDB

- 요약: localStorage에 넣은 false가 참이 되는 버그에서 출발해 네 저장소의 수명과 범위, 동기 API가 메인 스레드를 잡는 시간, 글자 수로 세는 5M 한도, storage 이벤트와 탭마다 따로인 sessionStorage, 출처와 쿠키 도메인의 차이를 실제로 돌려 본다. XSS가 무엇을 읽어 가는지, IndexedDB 트랜잭션과 버전 업그레이드의 함정, React에서 useSyncExternalStore로 구독하는 법까지 다룬다.
- 태그: JavaScript, Browser, Security, Cookie, React
- 키워드: localStorage, sessionStorage, IndexedDB, storage 이벤트
- 길이: 615줄
- 소제목: 문자열만 받는 상자 / 저장소 네 가지의 자리 / 쓰는 동안 화면이 멈춘다 / 5MB는 바이트가 아니라 글자 수다 / 다른 탭이 바꾼 값을 듣는 storage 이벤트 / sessionStorage는 탭마다 따로 산다 / 출처마다 칸이 나뉘고 쿠키는 다르게 나뉜다 / 쿠키는 저장소이면서 요청 헤더다 / XSS 하나면 localStorage는 통째로 읽힌다 / 크고 구조가 있는 데이터는 IndexedDB / React에서 저장소 값을 읽을 때 / 현장에서 저장소 문제를 만나는 순간 / 저장된 값을 안전하게 꺼내기 / 다시 알림 토글로 / 면접에서 나올 만한 질문
- 직접 링크 →: frontend-browser-cache, cookie-session-login, token-login, debounce-throttle, csrf, xss, js-shallow-deep-copy, react-rerender
- 키워드 백링크 →: json-crud-http, http-versions, event-loop, what-happens-google-com
- 이 글로 오는 글 ←: client-data-cache, frontend-browser-cache, javascript-roadmap, js-shallow-deep-copy, pattern-memento, token-login, transactional-outbox

#### `debounce-throttle` — 디바운스와 스로틀: 멈춘 뒤 한 번, 움직이는 동안 일정하게

- 요약: 디바운스는 멈춘 뒤 한 번, 스로틀은 움직이는 동안 일정하게 실행한다. React에서 디바운스가 망가지는 이유와, 디바운스로 풀리지 않는 응답 순서 문제까지 다룬다.
- 태그: JavaScript, Browser, React, Performance
- 키워드: 디바운스, debounce, leading과 trailing
- 길이: 394줄
- 소제목: 조용해질 때까지 기다린다 / 일정 간격마다 한 번만 통과시킨다 / 옵션 이름으로 보는 변형들 / 스크롤에는 프레임이라는 기준이 이미 있다 / React에서 디바운스가 안 먹는 이유 / 디바운스로는 풀리지 않는 것 / 현장에서 자주 보는 증상 / 시간을 넣고 실행 시각을 받는 함수 / 다시 검색창으로 / 면접에서 나올 만한 질문
- 직접 링크 →: js-closures, js-timers-accuracy, event-propagation, code-splitting, loading-patterns, react-rerender, abort-controller, rate-limiting-algorithms
- 키워드 백링크 →: client-data-cache, sd-autocomplete-trie, test-pyramid-unit-tests, pattern-proxy
- 이 글로 오는 글 ←: browser-fetch, browser-storage, code-splitting, event-delegation, event-propagation, javascript-roadmap, js-closures, react-rerender, scroll-driven-animations, scroll-patterns-overview, scroll-triggered-intersection-observer, sd-autocomplete-trie

#### `dom-basics` — DOM 기초: 트리, 찾기, 리플로

- 요약: 브라우저는 HTML을 객체 트리로 바꿔 들고 있고, 찾는 방법마다 살아 있는 목록과 찍어 둔 목록이 갈린다. DOM을 바꾸는 것보다 바꾼 직후 크기를 읽는 것이 비싸다는 것을 레이아웃 횟수로 확인한다.
- 태그: JavaScript, Browser, DOM, Performance, React
- 키워드: DOM 트리, HTMLCollection, 강제 동기 레이아웃
- 길이: 448줄
- 소제목: HTML 문자열이 객체 트리가 된다 / 트리를 위에서부터 훑어 찾는다 / 찾는 방법마다 돌려주는 것이 다르다 / 선택자는 오른쪽 끝부터 맞춰 본다 / 속성과 프로퍼티는 다른 값이다 / textContent와 innerText, innerHTML / DOM을 바꾸면 화면은 나중에 바뀐다 / 현장에서 이 구조를 만나는 순간 / React를 쓰면 DOM을 덜 만질 뿐이다 / 직접 만들어 보는 querySelectorAll / 다시 할 일 목록으로 / 면접에서 나올 만한 질문
- 직접 링크 →: event-propagation, event-delegation, js-prototype-chain, xss, event-loop, animation-performance, core-web-vitals, js-memory-leak, react-rerender
- 이 글로 오는 글 ←: browser-rendering-pipeline, ds-binary-tree-bst, ds-graph-bfs-dfs, event-delegation, event-loop, event-propagation, javascript-roadmap, js-memory-leak, parallax-scrollytelling, rendering-performance-optimization, scroll-patterns-overview, scroll-triggered-intersection-observer

#### `event-delegation` — 이벤트 위임: 부모 하나가 자식들의 클릭을 받는다

- 요약: 자식마다 리스너를 다는 대신 부모 하나에서 버블링된 이벤트를 받아 closest로 누가 눌렸는지 찾는다. 나중에 붙은 요소도 저절로 동작하고, React는 이미 루트에서 이렇게 하고 있다.
- 태그: JavaScript, Browser, DOM, React
- 키워드: 이벤트 위임, event delegation
- 길이: 327줄
- 소제목: 리스너를 부모 하나에 단다 / target이 버튼이 아니라 아이콘일 때 / 실제로 얼마나 줄어드나 / 위임이 통하지 않는 이벤트 / React는 이미 위임하고 있다 / 위임 코드를 볼 때 확인하는 것 / 직접 만들어 보는 위임 판정 / 다시 3번 글의 삭제 버튼으로 / 면접에서 나올 만한 질문
- 직접 링크 →: event-propagation, dom-basics, js-memory-leak, react-rerender, debounce-throttle
- 키워드 백링크 →: js-optional-chaining-nullish, js-closures
- 이 글로 오는 글 ←: dom-basics, event-propagation, javascript-roadmap, js-this-binding, pattern-chain-of-responsibility

#### `event-propagation` — 이벤트 전파: 캡처, 타깃, 버블

- 요약: 클릭 하나는 window에서 내려갔다가 다시 올라온다. stopPropagation과 preventDefault가 막는 대상, passive 리스너, React가 이벤트를 받는 자리까지 실제 출력으로 따라간다.
- 태그: JavaScript, Browser, DOM, React
- 키워드: 이벤트 버블링, 이벤트 캡처링, passive 리스너
- 길이: 441줄
- 소제목: 클릭 하나가 내려갔다가 올라온다 / target과 currentTarget / 막는 방법은 세 가지이고 막는 대상이 다르다 / 거품을 타지 않는 이벤트 / passive 리스너가 스크롤을 지킨다 / React가 이벤트를 받는 자리 / 클릭이 안 먹을 때 보는 순서 / 직접 만들어 보는 디스패치 순서 / 다시 드롭다운으로 / 면접에서 나올 만한 질문
- 직접 링크 →: dom-basics, event-delegation, debounce-throttle, js-memory-leak, core-web-vitals
- 키워드 백링크 →: browser-fetch, js-function-forms
- 이 글로 오는 글 ←: abort-controller, debounce-throttle, dom-basics, event-delegation, javascript-roadmap, scroll-patterns-overview

### Programming › Frontend › JavaScript › Functions (`programming/frontend/javascript/functions`)

#### `js-closures` — 클로저: 함수가 기억하는 것

- 요약: 1에서 멈추는 React 타이머에서 출발해, 클로저가 값이 아니라 변수를 잡는다는 것과 호출마다 새 환경이 생긴다는 것을 따라간다. 상태 숨기기와 클래스 private 필드의 비용 차이, 오래된 클로저를 업데이터·의존성·useEffectEvent로 고치는 법과 현장에서 찾는 순서까지 다룬다.
- 태그: JavaScript, React, Performance
- 키워드: 클로저, 오래된 클로저, stale closure, useEffectEvent
- 길이: 482줄
- 소제목: 함수는 태어난 자리를 기억한다 / 호출이 끝나도 상자는 남는다 / 값이 아니라 변수를 잡는다 / 반복문 안에서 만든 함수 / 엔진이 실제로 남기는 것 / 클로저로 만드는 것들 / React 컴포넌트에서 오래된 값을 보는 이유 / 현장에서 오래된 값을 찾는 순서 / 연습: 숨긴 상태를 가진 카운터 / 멈춘 타이머가 알려 준 것 / 면접에서 나올 만한 질문
- 직접 링크 →: js-function-forms, js-first-class-callbacks, js-scope-lexical, garbage-collection, js-var-let-const, js-memory-leak, js-iife-module-pattern, js-currying-partial, js-memoization, debounce-throttle, js-classes, react-rerender
- 이 글로 오는 글 ←: abort-controller, debounce-throttle, design-patterns-overview, ds-graph-bfs-dfs, event-delegation, go-concurrency-basics, islands-resumability, javascript-roadmap, js-currying-partial, js-execution-context, js-first-class-callbacks, js-function-forms, js-iife-module-pattern, js-memoization, js-memory-leak, js-scope-lexical, js-this-binding, js-timers-accuracy, js-var-let-const, pattern-command, pattern-interpreter, pattern-strategy, sql-cte-recursive, sqld-top-n-hierarchical-pivot

#### `js-currying-partial` — 커링과 부분 적용: 인자는 지금, 실행은 나중에

- 요약: 인자를 지금 받고 실행은 나중에 하는 함수를 만드는 두 방법을 비교한다. 범용 curry가 fn.length와 공유 배열에서 깨지는 이유, bind와 placeholder, data-last 조합, 호출 비용, React 핸들러에서 memo가 깨지는 경우를 본다.
- 태그: JavaScript, TypeScript, React
- 키워드: 커링, 부분 적용, currying
- 길이: 564줄
- 소제목: 인자를 나눠 받는 두 가지 방법 / 범용 curry는 이렇게 동작한다 / 인자 배열을 같이 쓰면 두 번째 호출이 망가진다 / fn.length를 믿으면 생기는 일 / lodash의 placeholder로 빈자리 남기기 / bind로 하는 부분 적용과 this / 데이터를 마지막 인자에 두는 이유 / 함수가 늘어나는 만큼 드는 비용 / TypeScript에서 커링 타입 잡기 / React에서 커링한 핸들러가 memo를 깬다 / 연습: curry 직접 만들기 / 다시 버튼 목록으로 / 면접에서 나올 만한 질문
- 직접 링크 →: js-first-class-callbacks, js-closures, js-call-apply-bind, react-rerender
- 키워드 백링크 →: js-function-forms, js-spread-rest, js-destructuring
- 이 글로 오는 글 ←: hexagonal-architecture, javascript-roadmap, js-call-apply-bind, js-closures, js-first-class-callbacks, js-spread-rest

#### `js-first-class-callbacks` — 일급 함수와 콜백: 함수를 넘기면 따라가는 것들

- 요약: 로깅 래퍼로 감싼 Express 에러 처리기가 불리지 않는 장면에서 출발해, 함수가 값이자 객체라는 것과 받는 쪽이 함수의 length·name·this·참조를 본다는 점을 따라간다. 래퍼가 잃어버리는 것, 메서드를 넘길 때 사라지는 this, 떨어지지 않는 리스너, React에서 함수를 넘기는 자리를 다룬다.
- 태그: JavaScript, React, Node.js, Design Pattern
- 키워드: 일급 함수, 고차 함수, 콜백 함수, 함수 래퍼
- 길이: 498줄
- 소제목: 함수를 값처럼 다룬다는 말 / 받는 쪽은 함수의 무엇을 보나 / 함수를 감싸는 함수 / 감쌀 때 잃어버리는 것들 / 넘기는 순간 사라지는 this / 모양이 같아도 다른 함수 / React에서 함수를 넘기는 자리 / 연습: 재시도 래퍼 만들기 / 다시 에러 처리기로 / 면접에서 나올 만한 질문
- 직접 링크 →: js-function-forms, js-closures, js-callback-hell, js-primitive-vs-reference, js-array-transform, js-async-await, pattern-decorator, js-memoization, js-currying-partial, js-this-binding, js-call-apply-bind, js-memory-leak, react-rerender, retries
- 키워드 백링크 →: js-spread-rest
- 이 글로 오는 글 ←: javascript-roadmap, js-callback-hell, js-closures, js-currying-partial, js-function-forms, pattern-decorator

#### `js-function-forms` — 함수를 만드는 방법: 선언문, 표현식, 화살표 함수

- 요약: function을 화살표 함수로 기계적으로 바꿨을 때 생성자와 메서드가 깨지는 장면에서 출발해, 함수 문법마다 this·arguments·new·이름이 어떻게 다른지 짚는다. 기본값 매개변수가 평가되는 시점, arguments의 함정, React 컴포넌트와 핸들러에서 생기는 실수까지 다룬다.
- 태그: JavaScript, React, Node.js
- 키워드: 함수 선언문, 함수 표현식, 화살표 함수, 기본값 매개변수, arguments 객체
- 길이: 528줄
- 소제목: 함수를 만드는 문법들 / 정의보다 위에서 부를 수 있는 함수 / 화살표 함수가 갖지 않는 것 / 이름 있는 함수 표현식을 쓰는 자리 / 매개변수 자리에서 일어나는 일 / arguments 객체와 나머지 매개변수 / React 컴포넌트에서 만나는 함수 모양 / 어떤 모양을 고를까 / 연습: 기본값 규칙 흉내 내기 / 기계적인 변환이 깨뜨린 두 줄 / 면접에서 나올 만한 질문
- 직접 링크 →: js-first-class-callbacks, js-closures, js-hoisting-tdz, js-this-binding, js-call-apply-bind, js-optional-chaining-nullish, js-spread-rest, js-strict-mode, js-destructuring
- 키워드 백링크 →: js-classes, js-es-modules, js-truthy-falsy-typeof
- 이 글로 오는 글 ←: event-propagation, javascript-roadmap, js-array-transform, js-async-await, js-call-apply-bind, js-callback-hell, js-classes, js-closures, js-currying-partial, js-execution-context, js-first-class-callbacks, js-hoisting-tdz, js-iife-module-pattern, js-immutability-react, js-memory-leak, js-promises, js-scope-lexical, js-spread-rest, js-strict-mode, js-this-binding, js-timers-accuracy, js-var-let-const, pattern-adapter, react-rerender

#### `js-iife-module-pattern` — IIFE와 모듈 패턴: 모듈 시스템이 없던 시절의 스코프

- 요약: 모듈 시스템이 없던 시절 즉시 실행 함수로 파일마다 스코프를 만들고 공개할 것만 골라 내보냈다. 세미콜론 함정, revealing 패턴의 한계, UMD와 번들러 출력, effect 안의 async 호출, 서버에서 섞이는 모듈 상태까지 따라간다.
- 태그: JavaScript, React, Node.js, Design Pattern
- 키워드: 즉시 실행 함수, IIFE, 모듈 패턴, UMD
- 길이: 681줄
- 소제목: 만들자마자 부르는 함수 / 괄호를 빼면 문법 에러가 난다 / 세미콜론 하나가 빠졌을 때 / 숨기고 골라서 내보내는 모듈 패턴 / 공개한 값은 따라오지 않는다 / 반복문마다 새 상자가 필요했던 시절 / 파일 여러 개를 하나의 이름 아래 모으기 / 어디서나 돌아가는 래퍼, UMD / 지금은 모듈 시스템이 같은 일을 한다 / React 코드에 남은 즉시 실행 함수 / 모듈 변수는 프로세스에 하나다 / 연습: 작은 모듈 로더 / 두 위젯이 다시 따로 세기까지 / 면접에서 나올 만한 질문
- 직접 링크 →: js-closures, js-var-let-const, js-primitive-vs-reference, js-es-modules, abort-controller, pattern-singleton
- 키워드 백링크 →: browser-fetch, js-strict-mode, rendering-strategies, js-function-forms
- 이 글로 오는 글 ←: javascript-roadmap, js-closures, js-es-modules, js-strict-mode, js-var-let-const

#### `js-memoization` — 메모이제이션: 기억한 답이 틀릴 때

- 요약: 함수의 결과를 입력별로 기억하는 기법이 어디서 틀린 답을 빠르게 내는지 본다. 캐시 키 설계, 버리지 않는 캐시의 누수와 LRU, WeakMap, Promise 캐시의 실패 처리, 그리고 칸 하나짜리 캐시인 useMemo까지 다룬다.
- 태그: JavaScript, React, Performance, Cache
- 키워드: 메모이제이션, memoize, LRU 캐시
- 길이: 505줄
- 소제목: 같은 입력이면 같은 답이라는 약속 / 캐시 키가 결과를 결정한다 / 버리지 않는 캐시는 메모리 누수다 / 객체를 키로 쓸 때는 WeakMap / Promise를 기억하면 요청이 하나로 합쳐진다 / 기억하는 비용이 계산보다 클 때 / useMemo는 칸이 하나뿐인 캐시다 / 연습: 크기 제한이 있는 memoize / 빠르게 틀리지 않으려면 / 면접에서 나올 만한 질문
- 직접 링크 →: js-pure-functions, js-closures, react-rerender, big-o-notation, js-memory-leak, caching-strategies, client-data-cache, js-immutability-react, garbage-collection
- 키워드 백링크 →: json-crud-http, rendering-strategies, redis-basics, js-primitive-vs-reference, dns
- 이 글로 오는 글 ←: big-o-notation, bloom-filter, caching-concepts-map, caching-strategies, client-data-cache, data-structures-overview, ds-array-matrix, ds-hash-map, ds-linked-list, javascript-roadmap, js-array-transform, js-call-apply-bind, js-closures, js-destructuring, js-first-class-callbacks, js-immutability-react, js-memory-leak, js-pure-functions, react-rerender, sd-url-shortener-key-generation

#### `js-pure-functions` — 순수 함수와 부수 효과: 같은 입력, 같은 결과, 남지 않는 흔적

- 요약: 같은 입력에 같은 결과를 내고 흔적을 남기지 않는 함수가 왜 테스트와 캐시, React 렌더링의 전제가 되는지 본다. 숨은 입력과 숨은 출력을 찾고 부수 효과를 바깥 껍데기로 모으는 법을 실제 버그로 따라간다.
- 태그: JavaScript, React
- 키워드: 순수 함수, 부수 효과, 참조 투명성, functional core
- 길이: 470줄
- 소제목: 같은 입력에 같은 결과, 그리고 흔적 없음 / 숨은 입력은 테스트를 시간에 묶는다 / 숨은 출력은 두 번째 호출에서 드러난다 / 안에서 고치는 건 괜찮다 / 계산은 안쪽, 입출력은 바깥쪽 / 순수하면 얻는 것들 / React가 순수함을 요구하는 세 자리 / 연습: 결제 계산을 순수하게 / 배송비가 한 줄로 돌아오기까지 / 면접에서 나올 만한 질문
- 직접 링크 →: js-array-mutation, js-shallow-deep-copy, js-immutability-react, js-spread-rest, hexagonal-architecture, js-memoization, message-queue-basics, saga-pattern
- 키워드 백링크 →: json-crud-http, js-strict-mode, test-pyramid-unit-tests, js-es-modules, http-methods
- 이 글로 오는 글 ←: abort-controller, bullmq-job-queue, clean-architecture, cors, event-sourcing, express-middleware, frontend-browser-cache, http-methods, javascript-roadmap, js-array-mutation, js-array-transform, js-destructuring, js-immutability-react, js-memoization, js-primitive-vs-reference, js-short-circuit, message-delivery-semantics, message-queue-basics, mvc-pattern, pattern-mediator, pattern-state, react-rerender, schema-versioning, sqld-set-operators, test-pyramid-unit-tests

### Programming › Frontend › JavaScript › Objects & Arrays (`programming/frontend/javascript/objects`)

#### `js-array-mutation` — 배열을 고치는 메서드와 사본을 주는 메서드: sort 함정과 toSorted

- 요약: push 후 setItems를 불렀는데 화면이 안 바뀌는 버그에서 출발해, 원본을 고치는 아홉 개 메서드와 sort의 문자열 비교·비교 함수 약속·안정 정렬을 따라간다. ES2023의 toSorted, toSpliced, with, React가 참조만 비교하는 이유, shift 큐의 비용, readonly로 실수를 막는 법까지 다룬다.
- 태그: JavaScript, React, TypeScript, Performance
- 키워드: toSorted, toSpliced, 안정 정렬
- 길이: 488줄
- 소제목: 원본을 고치는 메서드는 아홉 개다 / sort가 돌려준 배열은 원본이다 / 숫자를 정렬했더니 100이 25보다 앞선다 / 사본을 돌려주는 ES2023 메서드 / React는 같은 배열이면 다시 그리지 않는다 / 렌더링 중에 sort를 부르면 / 큐로 쓴 배열이 느려지는 순간 / 원본을 고치는 실수를 도구에 맡기기 / 할 일 리듀서를 원본을 고치지 않고 만들기 / 고치는 쪽인지 먼저 본다 / 면접에서 나올 만한 질문
- 직접 링크 →: js-array-transform, js-primitive-vs-reference, js-shallow-deep-copy, js-immutability-react, js-spread-rest, js-pure-functions, js-object-methods
- 키워드 백링크 →: ds-linked-list, js-strict-mode
- 이 글로 오는 글 ←: ds-array-matrix, ds-heap, ds-linked-list, ds-stack-queue-deque, javascript-roadmap, js-array-transform, js-immutability-react, js-primitive-vs-reference, js-pure-functions, js-spread-rest

#### `js-array-transform` — 배열을 바꾸고 고르고 접는 메서드: map, filter, reduce, flatMap

- 요약: 빈 장바구니에서 터진 reduce에서 출발해 map, filter, reduce, find, some, every, flat, flatMap이 각각 무엇을 돌려주는지 따라간다. 시작값 없는 reduce, map(parseInt), 빈 배열의 every, 희소 배열, async 콜백, 체인의 비용과 이터레이터 헬퍼, React 목록 렌더링까지 다룬다.
- 태그: JavaScript, React, Performance
- 키워드: flatMap, Object.groupBy, 희소 배열, reduce 시작값
- 길이: 595줄
- 소제목: for 문이 하던 일에 이름을 붙였다 / 콜백은 인자를 세 개 받는다 / 누산기를 따라가 본다 / 답이 나오면 멈추는 메서드 / 중첩을 펴는 flat, 펴면서 바꾸는 flatMap / 빈 칸이 있는 배열 / 콜백 안의 await는 기다려 주지 않는다 / 체인이 길어지면 배열도 늘어난다 / React 컴포넌트에서 이 메서드들이 하는 일 / flat을 직접 만들어 보기 / 다시 장바구니로 / 면접에서 나올 만한 질문
- 직접 링크 →: js-array-mutation, js-equality-coercion, js-promise-combinators, react-rerender, js-memoization, js-short-circuit, js-immutability-react, js-spread-rest
- 키워드 백링크 →: pattern-iterator, js-function-forms, js-truthy-falsy-typeof, js-pure-functions
- 이 글로 오는 글 ←: javascript-roadmap, js-array-mutation, js-first-class-callbacks, js-object-methods, js-short-circuit, sd-leaderboard-scaling

#### `js-destructuring` — 구조 분해: 패턴 한 줄이 하는 일

- 요약: 옵션을 안 넘기거나 null을 넘기면 터지는 함수에서 출발해 구조 분해가 값을 꺼내는 순서를 따라간다. undefined에만 반응하는 기본값, 이터레이터를 도는 배열 패턴, 중첩 패턴과 ASI 함정, React의 useState 튜플과 props 기본값 {}가 만드는 무한 effect, TypeScript 콜론 혼동까지 다룬다.
- 태그: JavaScript, React, TypeScript
- 키워드: 구조 분해, destructuring, IteratorClose
- 길이: 542줄
- 소제목: 꺼내 담는 일을 한 줄로 / 기본값은 undefined일 때만 들어간다 / 배열 패턴은 이터레이터를 돈다 / 매개변수 자리에서 바로 꺼내기 / 이미 있는 변수에 담을 때 생기는 두 가지 함정 / React 코드 곳곳의 구조 분해 / 반복문과 콜백에서 쓰는 패턴 / TypeScript에서 콜론의 뜻이 겹친다 / 옵션 정규화 함수 만들기 / 패턴이 하는 일을 순서대로 / 면접에서 나올 만한 질문
- 직접 링크 →: js-spread-rest, js-optional-chaining-nullish, react-rerender, js-memoization, js-object-methods
- 키워드 백링크 →: client-data-cache, pattern-iterator, js-pure-functions, js-primitive-vs-reference
- 이 글로 오는 글 ←: javascript-roadmap, js-async-await, js-currying-partial, js-es-modules, js-function-forms, js-optional-chaining-nullish, js-promise-combinators, js-spread-rest, js-strict-mode, js-this-binding, js-truthy-falsy-typeof, pattern-proxy

#### `js-immutability-react` — React 상태를 불변으로 바꾸기: 중첩 업데이트와 Immer

- 요약: 바깥만 새로 만든 업데이트 때문에 memo 자식이 옛 값을 보이는 버그에서 시작해, 바뀐 길만 새로 만드는 구조 공유, StrictMode가 드러내는 업데이트 함수의 변경, 상태 정규화, Immer의 Proxy 초안과 흔한 에러를 실행 결과로 정리한다.
- 태그: JavaScript, React, Performance
- 키워드: 불변 업데이트, 구조 공유, Immer, 상태 정규화
- 길이: 445줄
- 소제목: 바깥만 새로 만들면 안쪽 컴포넌트가 놓친다 / 바뀐 길만 새로 만든다 / 업데이트 함수가 두 번 불리는 이유 / 상태를 평평하게 펴면 경로가 짧아진다 / Immer는 초안을 고치게 해 준다 / Immer를 쓰다 만나는 에러들 / 불변으로 다룰지 고르는 기준 / 경로 업데이트 함수 직접 만들기 / 면접에서 나올 만한 질문
- 직접 링크 →: js-array-mutation, js-shallow-deep-copy, react-rerender, js-pure-functions, client-data-cache, js-object-methods
- 키워드 백링크 →: js-memory-leak, js-memoization, js-function-forms, db-modeling-normalization
- 이 글로 오는 글 ←: javascript-roadmap, js-array-mutation, js-array-transform, js-memoization, js-object-methods, js-primitive-vs-reference, js-pure-functions, js-shallow-deep-copy, js-spread-rest, js-var-let-const, pattern-memento, pattern-prototype, pattern-proxy

#### `js-object-methods` — 객체 메서드: 키 순서, 속성 설명자, freeze와 seal

- 요약: Object.keys가 서버가 보낸 순서를 바꾸는 이유에서 시작해, keys·entries·for...in이 보는 속성의 차이, 속성 설명자 네 개, getter와 setter, preventExtensions·seal·freeze 세 단계 잠금을 실행 결과와 함께 정리한다. React 개발 모드가 props를 얼리는 방식과 TypeScript의 Object.keys 타입도 다룬다.
- 태그: JavaScript, React, TypeScript
- 키워드: 속성 설명자, Object.freeze, 접근자 속성, Object.hasOwn
- 길이: 658줄
- 소제목: 숫자처럼 생긴 키가 먼저 선다 / 꺼내는 함수마다 보는 속성이 다르다 / entries로 풀었다가 fromEntries로 묶는다 / 속성 하나에 스위치가 네 개 붙어 있다 / 읽고 쓸 때 함수를 부르는 속성 / 잠금은 세 단계다 / React 개발 모드는 props를 얼려 둔다 / TypeScript가 Object.keys를 string[]로 두는 이유 / 이런 증상이면 이 함수부터 의심한다 / deepFreeze를 직접 만들어 보기 / 면접에서 나올 만한 질문
- 직접 링크 →: js-primitive-vs-reference, js-spread-rest, js-prototype-chain, js-array-transform, js-strict-mode, js-classes, js-immutability-react, js-shallow-deep-copy
- 키워드 백링크 →: json-crud-http, pattern-proxy, js-es-modules
- 이 글로 오는 글 ←: ds-hash-map, javascript-roadmap, js-array-mutation, js-destructuring, js-immutability-react, js-primitive-vs-reference, js-scope-lexical, js-shallow-deep-copy, js-spread-rest, js-strict-mode, js-this-binding, js-var-let-const, pattern-builder, pattern-factory-method, pattern-flyweight

#### `js-shallow-deep-copy` — 얕은 복사와 깊은 복사: 사본은 어디까지 따로인가

- 요약: 편집 폼에서 취소했는데 원본이 바뀌는 버그에서 시작해, 복사 방법마다 몇 층을 새로 만드는지, structuredClone이 getter·심볼·설명자·에러 필드를 어떻게 바꾸는지, transfer와 깊은 복사의 실제 비용을 잰다. React에서 모듈 상수 초깃값 오염과 깊은 복사가 memo를 무력화하는 문제도 본다.
- 태그: JavaScript, React, Performance
- 키워드: 얕은 복사, Transferable, 복사 깊이
- 길이: 483줄
- 소제목: 사본의 첫 층만 따로다 / 복사 방법마다 몇 층을 새로 만드나 / structuredClone이 바꿔 놓는 것들 / 복사하지 않고 넘겨주는 transfer / 큰 데이터를 깊게 복사하면 드는 시간 / React 코드에서 복사가 문제를 만드는 곳 / 공유된 객체를 찾는 법 / 면접에서 나올 만한 질문
- 직접 링크 →: js-primitive-vs-reference, pattern-prototype, js-immutability-react, js-object-methods, react-rerender
- 키워드 백링크 →: browser-storage, db-types-overview
- 이 글로 오는 글 ←: browser-storage, hexagonal-architecture, javascript-roadmap, js-array-mutation, js-immutability-react, js-object-methods, js-primitive-vs-reference, js-pure-functions, js-spread-rest, pattern-memento, pattern-prototype

#### `js-spread-rest` — 전개와 나머지 문법: 같은 점 세 개, 반대 방향

- 요약: Math.max(...prices)가 13만 개에서 스택을 넘긴 사고에서 출발해 전개와 나머지가 각각 무엇을 하는지 따라간다. 이터레이터를 도는 배열 전개와 자기 속성만 베끼는 객체 전개, 뒤에 쓴 것이 이기는 규칙과 undefined 덮어쓰기, Object.assign과의 차이, reduce 안 전개의 n² 비용, React props 펼치기와 TypeScript 튜플까지 다룬다.
- 태그: JavaScript, React, TypeScript, Performance
- 키워드: 전개 문법, 나머지 매개변수, 나머지 패턴
- 길이: 524줄
- 소제목: 같은 점 세 개가 반대 방향으로 일한다 / 배열 전개는 이터레이터에서 꺼낸다 / 객체 전개는 자기 속성만 베낀다 / 뒤에 쓴 것이 이긴다 / Object.assign과 무엇이 다른가 / 나머지 매개변수는 진짜 배열이다 / 빼고 나머지를 넘긴다 / 펼친 만큼 값을 치른다 / React 컴포넌트에서 props를 펼칠 때 / TypeScript는 길이를 모르는 전개를 막는다 / undefined는 건너뛰는 병합 함수 / 세 점 앞에서 물어볼 것 / 면접에서 나올 만한 질문
- 직접 링크 →: js-destructuring, js-shallow-deep-copy, js-prototype-chain, js-object-methods, js-currying-partial, js-function-forms, js-immutability-react, js-array-mutation
- 키워드 백링크 →: js-execution-context
- 이 글로 오는 글 ←: javascript-roadmap, js-array-mutation, js-array-transform, js-call-apply-bind, js-currying-partial, js-destructuring, js-first-class-callbacks, js-function-forms, js-object-methods, js-prototype-chain, js-pure-functions

### Programming › Frontend › JavaScript › this & OOP (`programming/frontend/javascript/oop`)

#### `js-call-apply-bind` — call, apply, bind: this를 직접 정하기

- 요약: bind를 두 번 불러 떼어지지 않은 keydown 리스너에서 출발해, 세 메서드의 차이와 bind가 만드는 바운드 함수의 정체를 본다. apply와 전개의 인자 수 한계, 메서드 빌려 쓰기와 Object.hasOwn, 다시 묶이지 않는 bind, React에서 render 안 bind의 비용까지 다룬다.
- 태그: JavaScript, React, Browser, Node.js
- 키워드: 바운드 함수, bound function, Function.prototype.call
- 길이: 458줄
- 소제목: 세 메서드는 같은 일을 다른 때에 한다 / 배열을 펼쳐 넘기던 apply / 남의 메서드를 빌려 쓰기 / bind가 돌려주는 함수의 정체 / 한 번 묶으면 다시 묶이지 않는다 / 인자를 미리 채우는 bind / 떼지 못한 리스너를 고치는 세 가지 / React에서 bind를 쓰는 자리 / 연습: bind 직접 만들기 / 같은 참조를 들고 있는가 / 면접에서 나올 만한 질문
- 직접 링크 →: js-this-binding, js-prototype-chain, js-currying-partial, abort-controller, js-memory-leak, react-rerender, js-memoization
- 키워드 백링크 →: js-classes, js-function-forms, js-strict-mode, js-spread-rest, js-primitive-vs-reference
- 이 글로 오는 글 ←: javascript-roadmap, js-currying-partial, js-first-class-callbacks, js-function-forms, js-prototype-chain, js-this-binding

#### `js-classes` — 클래스와 상속: 문법 아래의 프로토타입

- 요약: 부모 생성자에서 부른 render가 하위 클래스 필드를 undefined로 보는 장면에서 출발해, 클래스가 만드는 함수와 프로토타입, 하위 클래스의 생성 순서, super와 HomeObject, 두 줄로 상속되는 static, #private와 TypeScript private의 차이, useDefineForClassFields 함정, 내장 객체 상속, React 에러 경계를 다룬다.
- 태그: JavaScript, TypeScript, OOP, React
- 키워드: 클래스 필드, useDefineForClassFields, HomeObject
- 길이: 538줄
- 소제목: 클래스를 벗기면 함수와 프로토타입이 나온다 / 함수 생성자와 다른 점 / 필드는 인스턴스에, 메서드는 프로토타입에 / 하위 클래스는 부모가 먼저 만든다 / super가 찾아가는 곳 / static은 클래스 쪽 체인을 탄다 / 정말로 숨기는 #private / 필드 선언은 대입이 아니다 / 내장 객체 상속하기 / React에 남은 클래스 / 연습: 계좌 클래스 만들기 / 문법 아래에서 일어나는 일 / 면접에서 나올 만한 질문
- 직접 링크 →: js-prototype-chain, js-this-binding, design-patterns-overview, js-hoisting-tdz, js-function-forms
- 키워드 백링크 →: pattern-factory-method, js-strict-mode
- 이 글로 오는 글 ←: javascript-roadmap, js-call-apply-bind, js-closures, js-function-forms, js-object-methods, js-prototype-chain, js-strict-mode, js-this-binding

#### `js-prototype-chain` — 프로토타입 체인: 없는 속성은 위로 물어본다

- 요약: constructor라는 단어에서 깨지는 단어 세기 함수에서 출발해, [[Prototype]]과 prototype 속성의 차이, 읽기는 올라가고 쓰기는 제자리에 만드는 규칙을 따라간다. in과 hasOwn, 사전 객체와 Map, 프로토타입 오염 공격, instanceof의 동작, 서버 컴포넌트 경계에서 막히는 클래스 인스턴스까지 다룬다.
- 태그: JavaScript, Security, Performance, React, Node.js
- 키워드: 프로토타입 체인, 프로토타입 오염, prototype pollution
- 길이: 527줄
- 소제목: 객체마다 숨은 연결이 하나 있다 / 함수의 prototype 속성은 따로 있다 / 읽을 때는 올라가고 쓸 때는 올라가지 않는다 / 내 것인지 물려받은 것인지 / 사전으로 쓸 객체는 체인을 끊는다 / 요청 하나가 모든 객체를 바꾸는 법 / 프로토타입에 둔 배열은 모두가 같이 쓴다 / instanceof는 체인을 훑는다 / 체인이 길면 느릴까 / 체인이 끊기는 경계들 / 연습: instanceof 직접 만들기 / 없으면 위에 물어본다 / 면접에서 나올 만한 질문
- 직접 링크 →: js-this-binding, js-classes, pattern-prototype, js-strict-mode, js-call-apply-bind, json-crud-http, js-truthy-falsy-typeof, js-spread-rest
- 키워드 백링크 →: rendering-strategies, js-es-modules, js-primitive-vs-reference
- 이 글로 오는 글 ←: dom-basics, ds-array-matrix, javascript-roadmap, js-call-apply-bind, js-classes, js-object-methods, js-spread-rest, js-strict-mode, js-this-binding, js-truthy-falsy-typeof, json-crud-http, pattern-prototype

#### `js-strict-mode` — strict 모드: 조용히 넘어가던 실수를 에러로

- 요약: 오타 하나로 합계가 0이 되고 전역 변수가 생기는 CommonJS 코드에서 출발해, 엄격 모드가 켜지는 곳과 꺼진 채 시작하는 곳, 파일을 이어 붙일 때의 사고, 에러로 바뀌는 쓰기와 막히는 문법, arguments와 eval의 변화를 본다. tsconfig의 strict와 React StrictMode가 무엇이 다른지도 정리한다.
- 태그: JavaScript, TypeScript, React, Node.js
- 키워드: 엄격 모드, strict mode, use strict
- 길이: 506줄
- 소제목: 조용한 실패를 에러로 바꾸는 모드 / 어디서 켜지고 어디서 꺼지나 / 지시어 하나가 남의 코드까지 바꾼다 / 에러로 바뀌는 조용한 실패들 / 파싱 단계에서 막히는 문법 / arguments가 매개변수를 따라 바뀌지 않는다 / 이름만 비슷한 두 strict / 오래된 코드를 엄격 모드로 옮길 때 / 연습: 엄격 모드라면 이 대입이 성공할까 / 실수를 늦게 알 이유가 없다 / 면접에서 나올 만한 질문
- 직접 링크 →: js-scope-lexical, js-iife-module-pattern, js-object-methods, js-this-binding, js-function-forms, abort-controller, js-prototype-chain
- 키워드 백링크 →: js-classes, js-es-modules, js-destructuring, js-primitive-vs-reference
- 이 글로 오는 글 ←: build-caching, javascript-roadmap, js-array-mutation, js-call-apply-bind, js-classes, js-es-modules, js-execution-context, js-function-forms, js-hoisting-tdz, js-iife-module-pattern, js-memory-leak, js-object-methods, js-prototype-chain, js-pure-functions, js-scope-lexical, js-this-binding, k8s-crd, pattern-flyweight

#### `js-this-binding` — this 바인딩: 부르는 방식이 this를 정한다

- 요약: 변수에 담거나 setTimeout에 넘기면 터지는 메서드에서 출발해, this가 함수가 아니라 호출에 붙는다는 것과 네 가지 규칙의 우선순위를 따라간다. 점이 사라지는 자리, 콜백 API가 정해 주는 this, React 클래스 컴포넌트의 에러, 스택 트레이스로 호출 자리를 찾는 법까지 다룬다.
- 태그: JavaScript, React, Node.js, Browser
- 키워드: this 바인딩, 암시적 바인딩, new 바인딩
- 길이: 556줄
- 소제목: this는 함수가 아니라 호출에 붙는다 / 네 가지 규칙 / 규칙끼리 부딪히면 / 점이 사라지는 자리들 / 받는 쪽이 this를 정해 주는 API / 파일 맨 위의 this / React 클래스 컴포넌트에서 사라지던 this / 에러 메시지에서 호출 자리까지 / 연습: 메서드를 한꺼번에 묶기 / 호출 자리를 먼저 본다 / 면접에서 나올 만한 질문
- 직접 링크 →: js-call-apply-bind, js-function-forms, js-prototype-chain, js-strict-mode, react-rerender, js-closures
- 키워드 백링크 →: js-object-methods, js-execution-context, event-delegation, js-classes, js-es-modules, js-destructuring, js-primitive-vs-reference
- 이 글로 오는 글 ←: javascript-roadmap, js-call-apply-bind, js-callback-hell, js-classes, js-first-class-callbacks, js-function-forms, js-prototype-chain, js-scope-lexical, js-strict-mode

### Programming › Frontend › Performance (`programming/frontend/performance`)

#### `client-data-cache` — 화면 데이터 캐시: TanStack Query와 SWR로 같은 요청 줄이기

- 요약: 같은 API를 여러 컴포넌트가 부를 때 요청을 하나로 합치고, staleTime과 gcTime으로 언제 다시 받고 언제 버릴지 정하는 방법을 다룬다. 뮤테이션 뒤 캐시 맞추기, 낙관적 업데이트, 흔한 실수와 LRU 메모이제이션까지 이어 간다.
- 태그: Cache, React, Performance, Frontend
- 키워드: TanStack Query, staleTime, gcTime, 낙관적 업데이트, 서버 상태
- 길이: 579줄
- 소제목: 서버에서 빌려 온 상태 / 쿼리 키 하나가 캐시 한 칸이다 / 신선한 시간과 남겨 두는 시간 / 언제 다시 받아 오나 / 옛 데이터를 먼저 보여 주고 뒤에서 바꾼다 / 바꾼 뒤에는 캐시도 바꾼다 / 누르자마자 바뀌는 화면 / 들어가기 전에 미리 받기 / 처음 값을 미리 넣어 두기 / 페이지가 여러 장인 목록 / 서버가 받아 둔 데이터를 넘겨받기 / SWR로 쓰면 / 이 블로그에서 쿼리를 두는 자리 / 캐시가 틀린 값을 보여 주는 경우 / 계산 결과를 기억하기 / 처음 세 컴포넌트로 돌아가서 / 면접에서 나올 만한 질문
- 직접 링크 →: frontend-browser-cache, browser-fetch, react-rerender, rest-api-design, rendering-strategies, js-memory-leak
- 키워드 백링크 →: http-caching-cdn, browser-storage, rendering-performance-optimization, js-memoization, loading-patterns
- 이 글로 오는 글 ←: abort-controller, browser-fetch, cqrs, debounce-throttle, exponential-backoff-jitter, frontend-browser-cache, graphql-basics, hexagonal-architecture, html-form-http, http-methods, http-status-codes, javascript-roadmap, js-async-await, js-destructuring, js-immutability-react, js-memoization, js-memory-leak, js-optional-chaining-nullish, js-promise-combinators, js-promises, json-crud-http, layered-architecture, linux-processes-signals, linux-systemd-systemctl, load-balancer-basics, loading-patterns, microservices, mvc-pattern, pattern-state, pattern-strategy, react-rerender, rendering-csr-spa, rendering-ssr, resilience-patterns, sd-web-crawler-architecture, sd-web-crawler-politeness-dedup, test-pyramid-unit-tests, transactional-outbox

#### `code-splitting` — 번들 쪼개기: 코드 스플리팅과 트리 셰이킹

- 요약: 큰 번들이 모바일에서 왜 다운로드보다 실행에서 더 비싼지 보고, 동적 import로 청크를 나누는 법과 트리 셰이킹이 안 쓰는 코드를 빼는 원리를 따라간다. sideEffects, CommonJS, 배럴 파일의 함정과 prefetch, 내용 해시 캐시, 과도한 분할로 생기는 워터폴까지 다룬다.
- 태그: coupang, Performance, JavaScript, Webpack, Bundler · 회사: coupang
- 키워드: 코드 스플리팅, 트리 셰이킹, 배럴 파일, 동적 import
- 길이: 491줄
- 소제목: 다운로드보다 비싼 것 / import()가 번들을 가르는 자리 / 라우트로 자를까, 컴포넌트로 자를까 / 청크 그래프와 공통 청크 / 안 쓰는 export를 털어 내기 / 사이드 이펙트가 있으면 지우지 못한다 / CommonJS는 흔들어도 안 떨어진다 / 배럴 파일이 끌고 오는 것들 / 번들 안을 들여다보기 / 미리 받을까, 필요할 때 받을까 / 파일 이름에 내용의 지문을 넣는다 / 너무 잘게 쪼개면 생기는 일 / 배포 직후 쏟아지는 청크 에러, 한 줄에 불어난 번들 / 덜 보내는 게 가장 빠르다 / 면접에서 나올 만한 질문
- 직접 링크 →: core-web-vitals
- 키워드 백링크 →: js-es-modules, debounce-throttle, http-versions, rendering-strategies
- 이 글로 오는 글 ←: core-web-vitals, debounce-throttle, frontend-browser-cache, http-versions, islands-resumability, js-es-modules, js-hoisting-tdz, loading-patterns, pattern-proxy, rendering-csr-spa

#### `core-web-vitals` — Core Web Vitals: LCP, INP, CLS

- 요약: LCP, INP, CLS가 각각 무엇을 재는지, Lighthouse 점수와 실제 사용자 수치가 왜 다르게 나오는지 따라간다. LCP 네 조각과 INP 세 구간, CLS 세션 창으로 원인을 쪼개 찾고 고치는 방법까지 다룬다.
- 태그: coupang, Performance, Browser, JavaScript, Core Web Vitals · 회사: coupang
- 키워드: Core Web Vitals, LCP, INP, CLS, 레이아웃 스래싱
- 길이: 514줄
- 소제목: 세 숫자가 각각 재는 것 / 실험실 점수와 사용자 점수가 다른 이유 / 가장 큰 그림이 늦게 뜨는 과정 / LCP를 네 조각으로 나눠 보기 / 히어로 이미지를 빨리 받는 법 / 눌렀는데 화면이 늦게 바뀐다 / 긴 작업을 쪼개서 양보하기 / 화면이 밀리는 양을 재는 법 / 밀림을 세션 창으로 묶어 센다 / 실제 사용자 기기에서 모으기 / 나빠진 지표를 브라우저에서 직접 재 보기 / 점수보다 분포를 본다 / 면접에서 나올 만한 질문
- 직접 링크 →: what-happens-google-com, code-splitting, event-loop
- 키워드 백링크 →: browser-rendering-pipeline, ab-testing, loading-patterns, pattern-proxy, cors, dns
- 이 글로 오는 글 ←: ab-testing, animation-performance, browser-rendering-pipeline, code-splitting, dom-basics, event-loop, event-propagation, frontend-browser-cache, hydration, javascript-roadmap, loading-patterns, react-rerender, rendering-csr-spa, rendering-performance-optimization, rendering-ssr, rendering-strategies, scroll-patterns-overview, scroll-triggered-intersection-observer, streaming-ssr-suspense

#### `frontend-browser-cache` — 프런트엔드에서 쓰는 캐시: 브라우저 캐시부터 Service Worker까지

- 요약: 요청 하나가 메모리 캐시, Service Worker, HTTP 캐시를 차례로 거치는 과정과 bfcache, Cache Storage 전략, 새 Service Worker가 기다리는 이유를 이 블로그의 sw.js로 따라간다. 데이터 저장소의 용량과 지워지는 규칙, 미리 받기 힌트까지 정리한다.
- 태그: Cache, Browser, Performance, Frontend
- 키워드: Service Worker, bfcache, Cache Storage, skipWaiting, Speculation Rules
- 길이: 645줄
- 소제목: 요청 하나가 거치는 캐시들 / HTTP 캐시는 서버가 정한 기한을 따른다 / 뒤로 가기가 즉시 뜨는 bfcache / 페이지 앞에 선 프록시, Service Worker / 설치, 활성화, 가로채기 / 캐시를 먼저 볼까 네트워크를 먼저 볼까 / 미리 담기와 쓰면서 담기 / 이 블로그의 sw.js 읽기 / 버전을 올리고 옛 캐시를 지운다 / 새 Service Worker는 기다린다 / Workbox를 쓰면 / 데이터는 어디에 저장하나 / 용량과 지워지는 순서 / 다음에 필요한 것을 미리 받기 / 개발자 도구에서 확인하기 / 사용자 브라우저의 캐시 상태를 숫자로 받기 / 처음 장면으로 돌아가서 / 면접에서 나올 만한 질문
- 직접 링크 →: http-caching-cdn, caching-strategies, client-data-cache, core-web-vitals, code-splitting
- 키워드 백링크 →: browser-storage, realtime-communication, js-pure-functions, pattern-proxy, what-happens-google-com, cors
- 이 글로 오는 글 ←: browser-fetch, browser-storage, client-data-cache, http-caching-cdn, rendering-csr-spa

### Programming › Frontend › React (`programming/frontend/react`)

#### `react-rerender` — React는 언제 다시 그리나

- 요약: 검색창 글자 하나에 목록 전체가 다시 렌더링되는 장면에서 출발해 렌더와 커밋, 리렌더링이 일어나는 이유, key와 재조정, memo·useCallback이 듣는 경우와 안 듣는 경우를 따라간다. context 분리, 상태 위치 옮기기, 자동 배칭, transition, Profiler로 원인 찾기까지 다룬다.
- 태그: coupang, React, Performance, Rendering · 회사: coupang
- 키워드: 리렌더링, 재조정, React.memo, 자동 배칭, useDeferredValue
- 길이: 642줄
- 소제목: 렌더와 커밋은 다른 일이다 / 다시 렌더링되는 이유는 따로 있다 / 이전 트리와 짝을 맞추는 규칙 / 내용이 같아도 다른 객체 / memo와 useMemo, useCallback이 듣는 경우 / 상태는 내리고 내용은 올린다 / context는 값이 바뀌면 구독자를 전부 깨운다 / 여러 번 바꿔도 렌더링은 한 번 / 급한 업데이트와 미뤄도 되는 업데이트 / 고치기 전에 잰다 / React Compiler가 대신해 주는 것 / 렌더링이 멈추지 않을 때 남는 흔적 / 처음 검색창으로 돌아가서 / 면접에서 나올 만한 질문
- 직접 링크 →: client-data-cache, rendering-strategies
- 키워드 백링크 →: core-web-vitals, js-memoization, js-function-forms, js-pure-functions, debounce-throttle, js-primitive-vs-reference
- 이 글로 오는 글 ←: browser-storage, client-data-cache, debounce-throttle, dom-basics, ds-linked-list, ds-stack-queue-deque, event-delegation, javascript-roadmap, js-array-transform, js-call-apply-bind, js-closures, js-currying-partial, js-destructuring, js-equality-coercion, js-first-class-callbacks, js-immutability-react, js-memoization, js-microtask-macrotask, js-optional-chaining-nullish, js-primitive-vs-reference, js-scope-lexical, js-shallow-deep-copy, js-this-binding, js-var-let-const, local-k8s-kind-minikube, pattern-bridge, pattern-decorator, pattern-observer, rendering-performance-optimization, rendering-strategies

### Programming › Frontend › Rendering (`programming/frontend/rendering`)

#### `browser-rendering-pipeline` — 브라우저 렌더링 파이프라인: 바이트가 픽셀이 되기까지

- 요약: HTML을 받는 대로 읽는 파서, 파서를 세우는 스크립트, 첫 화면을 막는 CSS, 멈춘 동안 앞을 훑는 프리로드 스캐너를 크로미움에서 직접 재 본다. 스타일 계산부터 레이아웃, 페인트 기록, 래스터, 합성까지 어느 스레드에서 어떤 순서로 도는지 트레이스로 따라간다.
- 태그: Browser, Performance, JavaScript, CSS
- 키워드: 프리로드 스캐너, 파서 차단 스크립트, 래스터화, 페인트 기록
- 길이: 531줄
- 소제목: 바이트가 픽셀이 되기까지 거치는 곳 / HTML은 받는 대로 읽는다 / 평범한 script를 만나면 파서가 선다 / 스크립트 태그의 속성이 순서를 바꾼다 / 파서가 멈춘 동안 앞을 훑는 프리로드 스캐너 / CSS가 올 때까지 일부러 그리지 않는다 / 스타일 계산과 레이아웃은 따로 센다 / 페인트는 아직 그림이 아니다 / 프레임 하나 안의 순서 / React 코드에서 이 순서를 만나는 곳 / 하얀 화면이 길 때 어디부터 보나 / 다시 하얀 화면으로 / 면접에서 나올 만한 질문
- 직접 링크 →: what-happens-google-com, rendering-performance-optimization, streaming-ssr-suspense, core-web-vitals, dom-basics, animation-performance, event-loop, js-timers-accuracy, rendering-csr-spa
- 키워드 백링크 →: rendering-strategies, packet-encapsulation, js-es-modules, pattern-proxy
- 이 글로 오는 글 ←: core-web-vitals, parallax-scrollytelling, ray-casting, rendering-performance-optimization, what-happens-google-com

#### `hydration` — 하이드레이션: 서버 HTML에 생명을 붙이는 일

- 요약: hydrateRoot가 서버 DOM과 짝을 맞추고 이벤트를 붙이는 과정과 그 비용을 재고, 불일치 원인별로 React 19가 실제로 내는 메시지와 대응을 재현한다. 확장 프로그램, 운영의 #418, useSyncExternalStore와 suppressHydrationWarning, 선택적 하이드레이션까지 다룬다.
- 태그: React, SSR, Rendering, Performance
- 키워드: 하이드레이션 불일치, 선택적 하이드레이션, suppressHydrationWarning
- 길이: 466줄
- 소제목: hydrateRoot가 하는 일 / 보이는데 안 눌리는 시간 / 어긋나면 React가 하는 일 / 불일치를 만드는 코드들 / 확장 프로그램은 언제 끼어드느냐가 문제다 / 개발 모드와 운영 모드의 메시지는 다르다 / 고치는 방법들 / 한꺼번에 하지 않기: 선택적 하이드레이션 / 하이드레이션을 덜 하는 방법 / 운영에서 불일치를 찾는 순서 / 다시 사라진 두 번의 클릭으로 / 면접에서 나올 만한 질문
- 직접 링크 →: rendering-strategies, rendering-ssr, core-web-vitals, streaming-ssr-suspense, islands-resumability, react-server-components
- 키워드 백링크 →: count-min-sketch
- 이 글로 오는 글 ←: global-rollout-localization, islands-resumability, js-template-literals, react-server-components, rendering-csr-spa, rendering-ssg-isr, rendering-ssr, rendering-strategies, streaming-ssr-suspense, youtube-url-to-video

#### `islands-resumability` — 아일랜드와 재개 가능성: 하이드레이션을 덜 하는 방법

- 요약: 상호작용이 필요한 조각만 섬으로 살리는 Astro의 아일랜드와, 하이드레이션 없이 서버가 멈춘 자리에서 이어 가는 Qwik의 재개 가능성을 직접 빌드해 비교한다. 섬 지시어별 JS 실행량, 섬 사이 상태 공유, React의 선택적 하이드레이션·서버 컴포넌트와의 차이를 다룬다.
- 태그: Rendering, Performance, JavaScript, Frontend, Astro, Qwik
- 키워드: 아일랜드 아키텍처, 재개 가능성, Astro, Qwik
- 길이: 387줄
- 소제목: 정적인 문단도 하이드레이션 비용을 치른다 / 바다 위에 섬 몇 개 / 언제 살릴지를 섬마다 고른다 / 섬끼리는 말을 걸기 어렵다 / 하이드레이션을 아예 하지 않는다 / 무엇을 아끼고 무엇을 내주나 / 내 페이지에 섬이 맞는지 재 보기 / 다시 1MB로 / 면접에서 나올 만한 질문
- 직접 링크 →: oauth, hydration, react-server-components, rendering-csr-spa, code-splitting
- 키워드 백링크 →: scroll-triggered-intersection-observer, js-es-modules, streaming-ssr-suspense, rendering-strategies, js-closures
- 이 글로 오는 글 ←: hydration, rendering-strategies

#### `nextjs-static-dynamic-rendering` — Next.js App Router는 언제 정적이고 언제 동적인가

- 요약: 빌드 출력의 ○ ● ƒ가 무엇을 보고 정해지는지 경우마다 빌드해서 확인한다. 요청 시점 API, 빌드 때 굳는 fetch, 세그먼트 설정의 함정, 응답 헤더로 확인하는 법, 이 블로그의 MdxWrapper가 글 134개를 동적으로 바꾼 재현, Cache Components까지 다룬다.
- 태그: Next.js, Rendering, SSR, Performance, Cache
- 키워드: 정적 렌더링, 동적 렌더링, force-static, Cache Components
- 길이: 456줄
- 소제목: 빌드 출력의 기호 세 개 / Next는 빌드 때 일단 렌더링해 본다 / 요청이 있어야 알 수 있는 값들 / fetch는 캐시하지 않는데 빌드 때 한 번은 부른다 / 직접 정해 버리는 설정 / 응답 헤더로 밖에서 확인하기 / 클라이언트 컴포넌트의 useSearchParams / 이 블로그의 MdxWrapper가 동적이 된 이유 / Cache Components를 켜면 판단 기준이 바뀐다 / 이 라우트는 어떤 기호가 될까 / 정적인 줄 알았던 페이지가 요청마다 렌더링될 때 / 다시 MdxWrapper로 / 면접에서 나올 만한 질문
- 직접 링크 →: rendering-ssg-isr, rendering-strategies, http-caching-cdn, streaming-ssr-suspense, react-server-components
- 이 글로 오는 글 ←: react-server-components, rendering-csr-spa, rendering-ssg-isr, rendering-strategies, serverless-architecture

#### `react-server-components` — React 서버 컴포넌트: SSR과 무엇이 다른가

- 요약: 서버 컴포넌트가 보내는 RSC payload를 직접 받아 뜯어보고, use client 경계가 파일 단위로 무엇을 끌고 가는지, 경계를 넘을 수 있는 값이 무엇인지 빌드 에러와 함께 본다. 서버 액션의 보안, server-only, 무거운 props가 HTML을 키우는 문제까지 다룬다.
- 태그: React, Next.js, Rendering, Performance, Security
- 키워드: RSC payload, use client, 서버 액션, server-only
- 길이: 457줄
- 소제목: SSR은 시점의 이야기, RSC는 코드의 이야기 / 서버가 보내는 것은 HTML이 아니다 / 첫 요청과 그다음 이동은 다르게 흐른다 / 경계는 파일 단위로 그어진다 / 경계를 넘을 수 있는 값 / 컴포넌트가 직접 데이터를 가져온다 / 서버 전용 코드가 브라우저로 새지 않게 / 서버 액션은 경계를 넘는 함수다 / props가 무거우면 payload도 무겁다 / 현장에서 서버 컴포넌트를 들여다보는 법 / 다시 315바이트로 / 면접에서 나올 만한 질문
- 직접 링크 →: rendering-strategies, hydration, rendering-ssr, oauth, streaming-ssr-suspense, nextjs-static-dynamic-rendering
- 키워드 백링크 →: pattern-proxy
- 이 글로 오는 글 ←: html-form-http, hydration, islands-resumability, nextjs-static-dynamic-rendering, rendering-ssg-isr, rendering-strategies, streaming-ssr-suspense

#### `rendering-csr-spa` — CSR과 SPA: 빈 HTML이 화면이 되기까지

- 요약: 빈 index.html이 상품 화면이 되기까지 요청이 어떻게 줄지어 기다리는지 실제 크롬으로 재고, 주소를 읽자마자 데이터를 출발시켜 폭포를 줄인다. History API 라우팅, 새로고침 404와 SPA 폴백이 삼키는 MIME 오류, 미리보기 봇, CSR이 맞는 자리까지 다룬다.
- 태그: React, Rendering, Performance, SEO, Browser
- 키워드: SPA 폴백, 클라이언트 라우팅, History API, pushState
- 길이: 478줄
- 소제목: 빈 HTML 한 장에서 화면이 되기까지 / 받는 시간보다 실행하는 시간 / 코드를 기다린 뒤에야 데이터를 부른다 / 주소는 바뀌는데 문서는 다시 받지 않는다 / 새로고침 404는 서버가 주소를 몰라서 난다 / 폴백이 삼켜 버리는 오류들 / 미리보기 봇은 빈 div를 본다 / CSR이 맞는 자리 / 실제 크롬으로 첫 화면을 재는 법 / 다시 새로고침 404로 / 면접에서 나올 만한 질문
- 직접 링크 →: rendering-strategies, code-splitting, rendering-ssr, client-data-cache, rendering-ssg-isr, frontend-browser-cache, core-web-vitals
- 키워드 백링크 →: hydration, nginx-basics, nextjs-static-dynamic-rendering, http-status-codes
- 이 글로 오는 글 ←: browser-fetch, browser-rendering-pipeline, dhcp, islands-resumability, micro-frontends, rendering-ssr, rendering-strategies, sd-web-crawler-architecture, youtube-url-to-video

#### `rendering-performance-optimization` — 렌더링 성능 최적화: 덜 깨우고, 좁게 번지고, 건너뛰기

- 요약: 클래스 하나가 수만 개 요소의 스타일과 레이아웃을 깨우는 과정을 재 보고, 무효화 범위 좁히기, contain, content-visibility, 가상화, 읽기·쓰기 묶기로 비용을 줄인다. 그림자·필터의 래스터 비용과 requestIdleCallback을 쓰는 자리까지 실제 측정값으로 다룬다.
- 태그: Browser, Performance, CSS, React
- 키워드: content-visibility, CSS containment, 리스트 가상화, 무효화 범위
- 길이: 460줄
- 소제목: 한 줄의 클래스가 몇 개의 요소를 깨우나 / 무효화 범위를 좁히는 습관 / 레이아웃이 번지는 걸 contain으로 막는다 / 화면 밖은 아예 그리지 않는다 / 1만 줄을 다 만들지 않는다 / 여러 컴포넌트가 각자 크기를 잴 때 / 그림 효과는 래스터에서 값을 치른다 / 급하지 않은 일은 한가할 때 / 현장에서 버벅이는 화면을 좁히는 순서 / 처음의 토글로 돌아가서 / 면접에서 나올 만한 질문
- 직접 링크 →: browser-rendering-pipeline, animation-performance, core-web-vitals, react-rerender, scroll-triggered-intersection-observer, dom-basics, event-loop
- 키워드 백링크 →: loading-patterns
- 이 글로 오는 글 ←: browser-rendering-pipeline, client-data-cache

#### `rendering-ssg-isr` — SSG와 ISR: 미리 만들어 두고 언제 다시 만드나

- 요약: 빌드 때 구운 페이지가 언제 다시 만들어지는지 Next.js 16으로 재 본다. 페이지 수에 따른 빌드 시간, 만료 뒤 첫 요청이 옛 페이지를 받는 이유, revalidatePath와 revalidateTag, 여러 인스턴스와 재생성 실패, 초안 모드, ISR이 맞지 않는 경우까지 다룬다.
- 태그: Next.js, Rendering, Cache, Performance
- 키워드: revalidatePath, revalidateTag, generateStaticParams, Draft Mode
- 길이: 420줄
- 소제목: 빌드가 HTML 파일을 남긴다 / 페이지가 늘면 빌드가 늘어난다 / 시간이 지나면 다시 만든다 / 응답 헤더에 적힌 약속 / 저장하는 순간 바로 갱신하기 / 서버가 두 대면 한 대만 갱신된다 / 다시 만들다 실패하면 / 편집자는 저장 전 모습을 봐야 한다 / 내용이 1분마다 바뀐다면 / 운영에서 지금 어떤 페이지가 나가는지 보기 / 다시 가격 89,000원으로 / 면접에서 나올 만한 질문
- 직접 링크 →: rendering-strategies, rendering-ssr, nextjs-static-dynamic-rendering, http-caching-cdn, hydration
- 키워드 백링크 →: autoscaling, react-server-components, redis-basics, count-min-sketch
- 이 글로 오는 글 ←: nextjs-static-dynamic-rendering, rendering-csr-spa, rendering-ssr, rendering-strategies

#### `rendering-ssr` — SSR: 요청마다 HTML을 만드는 서버

- 요약: 요청마다 서버가 HTML을 만들 때 생기는 문제를 직접 재현한다. renderToString과 renderToPipeableStream의 차이, 이벤트 루프를 막는 렌더링, 서버 안의 await 폭포, 사용자끼리 섞이는 모듈 변수와 공유 캐시, 메모리 누수, 상태 코드까지 정리했다.
- 태그: React, SSR, Rendering, Performance, Node.js, Cache
- 키워드: renderToString, AsyncLocalStorage, Server-Timing
- 길이: 504줄
- 소제목: 요청 하나가 HTML이 되는 순서 / renderToString과 renderToPipeableStream / 렌더링은 CPU를 쓰고, Node.js는 한 줄로 일한다 / 서버 안에도 폭포가 있다 / 모듈 변수는 모든 사용자가 같이 쓴다 / 요청이 쌓일수록 무거워지는 서버 / SSR 결과를 캐시에 올리기 / 상태 코드는 렌더링하기 전에 정한다 / 운영 중인 SSR 서버가 느려졌을 때 / 다시 다른 사람 이름으로 / 면접에서 나올 만한 질문
- 직접 링크 →: rendering-strategies, rendering-csr-spa, hydration, streaming-ssr-suspense, event-loop, js-memory-leak, http-caching-cdn, nginx-reverse-proxy, rendering-ssg-isr
- 키워드 백링크 →: client-data-cache, docker-container-basics, proxy-reverse-proxy, osi-in-practice, http-status-codes, db-modeling-normalization, core-web-vitals
- 이 글로 오는 글 ←: hydration, js-es-modules, pattern-singleton, react-server-components, rendering-csr-spa, rendering-ssg-isr, rendering-strategies, streaming-ssr-suspense

#### `rendering-strategies` — CSR, SSR, SSG, ISR, 스트리밍: HTML은 어디서 만들어지나

- 요약: 같은 상품 페이지의 HTML을 브라우저, 요청 시 서버, 빌드, 뒤늦은 재생성, 조각 전송 중 어디서 만드느냐에 따라 TTFB·LCP·서버 비용·신선도가 어떻게 달라지는지 비교한다. 하이드레이션과 불일치, ISR 갱신 방식, 스트리밍의 제약, 서버 컴포넌트, 쇼핑몰 페이지별 선택까지 다룬다.
- 태그: coupang, React, SSR, Next.js, Performance, Rendering · 회사: coupang
- 키워드: 하이드레이션, ISR, 스트리밍 SSR, 서버 컴포넌트, SSG
- 길이: 539줄
- 소제목: HTML은 어디서 언제 만들어지나 / CSR: 빈 HTML과 큰 JS / SSR: 요청마다 서버가 HTML을 만든다 / 하이드레이션은 공짜가 아니다 / SSG: 빌드할 때 미리 만든다 / ISR: 정적 페이지를 뒤에서 다시 만든다 / 스트리밍: 준비된 부분부터 보낸다 / 서버 컴포넌트는 SSR과 다른 이야기다 / 큰 쇼핑몰에서 페이지마다 고르기 / 고른 전략대로 나가는지 밖에서 확인하기 / 다시 미리보기 카드로 / 면접에서 나올 만한 질문
- 직접 링크 →: rendering-csr-spa, rendering-ssr, islands-resumability, hydration, rendering-ssg-isr, streaming-ssr-suspense, react-server-components, nextjs-static-dynamic-rendering, proxy-reverse-proxy, react-rerender
- 키워드 백링크 →: http-caching-cdn, lossy-counting, http-status-codes, core-web-vitals
- 이 글로 오는 글 ←: ab-testing, browser-rendering-pipeline, client-data-cache, code-splitting, global-rollout-localization, html-form-http, http-streaming-sse, hydration, islands-resumability, js-es-modules, js-iife-module-pattern, js-memoization, js-promise-combinators, js-promises, js-prototype-chain, js-template-literals, loading-patterns, nextjs-static-dynamic-rendering, pattern-observer, react-rerender, react-server-components, rendering-csr-spa, rendering-ssg-isr, rendering-ssr, sd-mq-replication, streaming-ssr-suspense, system-design-study-path

#### `streaming-ssr-suspense` — 스트리밍 SSR과 Suspense: 준비된 부분부터 보내기

- 요약: 응답을 열어 둔 채 셸을 먼저 보내고 Suspense 경계 안쪽을 숨긴 HTML과 교체 스크립트로 이어 붙이는 과정을 실제 조각으로 따라간다. 상태 코드가 먼저 떠나는 문제, React 19의 교체 묶음, 프록시와 압축이 흐름을 막는 경우, 봇과 loading.tsx까지 다룬다.
- 태그: React, SSR, Next.js, Rendering, Performance, Nginx
- 키워드: Suspense 경계, onShellReady, proxy_buffering, Transfer-Encoding: chunked
- 길이: 623줄
- 소제목: 응답을 끝내지 않고 열어 둔다 / 셸이 먼저 나가고 경계 안쪽이 뒤따른다 / 늦게 온 조각이 제자리를 찾는 방법 / React 19는 교체를 모아서 한다 / 셸만 기다릴까, 전부 기다릴까 / 상태 코드는 첫 조각과 함께 떠난다 / 중간에서 모아 버리는 것들 / 봇과 링크 미리보기가 보는 HTML / Next.js에서는 loading.tsx가 경계다 / 경계를 어디에 두나 / 운영에서 스트리밍이 안 될 때 보는 순서 / 다시 운영 주소로 / 면접에서 나올 만한 질문
- 직접 링크 →: rendering-strategies, rendering-ssr, hydration, nginx-reverse-proxy, react-server-components, core-web-vitals
- 키워드 백링크 →: proxy-reverse-proxy, http-versions, http-status-codes
- 이 글로 오는 글 ←: browser-rendering-pipeline, http-streaming-sse, hydration, islands-resumability, js-promise-combinators, loading-patterns, nextjs-static-dynamic-rendering, react-server-components, rendering-ssr, rendering-strategies, server-sent-events

### Programming › In Practice (`programming/in-practice`)

#### `devops-networking-roadmap` — DevOps 네트워킹 지도: 공부 순서와 증상별로 펼 글

- 요약: 블로그의 네트워크 글 쉰 편 가까이를 기본 개념부터 SDN까지 열 칸으로 나눠 읽는 순서를 정하고, 칸마다 그 글이 답하는 질문과 그 자리에 두는 이유를 붙인다. 502인데 앱 로그가 비었을 때, Pod에서만 이름이 안 풀릴 때처럼 증상에서 처음 펼 글로 가는 길도 정리한다.
- 태그: Network, DevOps, Troubleshooting, Kubernetes, Cloud
- 키워드: 네트워킹 학습 순서, 증상별로 펼 글
- 길이: 423줄
- 소제목: 요청 하나가 지나는 일곱 칸 / 열 칸은 서로 기대고 있다 / 패킷 한 장을 읽는 눈부터 / 장비 위에 그려지는 구성도 / 클라우드에서는 라우터가 표 한 장이다 / 손으로 고치던 설정을 PR로 / 주소 대신 이름으로 찾는 일 / 컨테이너와 Pod가 주소를 받는 법 / 안 보이는 것을 숫자와 로그로 / 막는 장치는 층마다 따로 선다 / 느리다는 말을 숫자 셋으로 / 마지막 칸, 물리망 위의 논리망 / 이 증상이면 이 글부터 / 증상 문장에서 첫 글 고르기 / 한 번에 다 읽지 않아도 된다 / 면접에서 나올 만한 질문
- 직접 링크 →: osi-in-practice, what-happens-google-com, network-layers-overview, layer-ip-addressing, layer-link-ethernet-arp, layer-ip-routing-icmp, ports-and-sockets, tcp-connection-lifecycle, dns, hosts-file, udp-and-quic, ipv6-basics, network-troubleshooting-by-layer, vlan-basics, proxy-reverse-proxy, load-balancer-basics, load-balancing-algorithms, vpn-ipsec-wireguard, nginx-reverse-proxy, vpc-basics, vpc-subnets-route-tables, security-groups-nacl, vpc-peering-transit-privatelink, cdn-edge-anycast, http-caching-cdn, edge-caching, iam-basics, iac-basics, terraform-basics, terraform-modules-tfvars, terraform-network-iac, ansible-network-automation, network-config-cicd, service-discovery, health-checks, k8s-service-types, k8s-coredns, linux-namespaces-cgroups, iptables-nat, docker-network-volume, docker-network-drivers, k8s-cni-pod-network, kubernetes-ingress, gateway, service-mesh, retries, eks-cluster-basics, monitoring-basics, network-monitoring, network-flow-logs, packet-capture-tcpdump, structured-logging, distributed-tracing, metrics-types, percentile-latency, iptables-basics, k8s-network-policy, ids-ips, waf, https-tls, encryption-in-transit, zero-trust-architecture, ssrf, latency-bandwidth-throughput, tcp-reliability-congestion, layer-mtu-fragmentation, traffic-shaping-qos, tail-latency, timeouts, sdn-vxlan-overlay
- 키워드 백링크 →: reverse-proxy-lb-api-gateway, curl-for-debugging, k8s-architecture, http-status-codes, resilience-patterns, dhcp, cilium-ebpf, on-call
- 이 글로 오는 글 ←: backend-engineer-roadmap, k8s-learning-roadmap, networking-essentials-map

#### `k8s-certifications` — 쿠버네티스 자격증: KCNA부터 CKS, CNPE까지 시험 형식과 준비

- 요약: 실기 시험은 보기 대신 터미널을 준다는 데서 출발해 KCNA·KCSA·CKA·CKAD·CKS와 새 플랫폼 자격증 CNPA·CNPE·CKNE의 형식과 영역 비중을 정리하고, 영역별로 읽을 글과 6주 준비 계획, 컨텍스트 전환과 dry-run 뼈대 뽑기, kubectl explain처럼 시험 시간에 점수를 지키는 습관을 실제 출력으로 보여 준다.
- 태그: Kubernetes, DevOps, Career, Troubleshooting
- 키워드: CKA, CKAD, CKS, KCNA, Kubestronaut
- 길이: 681줄
- 소제목: 다섯 개 시험이 재는 것은 서로 다르다 / 숫자로 보는 시험 형식 / 영역 비중이 공부 순서를 정한다 / 플랫폼 쪽으로 넓어진 자격증 / 시험 당일 화면 안에서 일어나는 일 / 문제마다 컨텍스트부터 바꾼다 / YAML은 쓰지 말고 뽑는다 / 필드 이름이 기억나지 않을 때 / 명령형으로 끝나는 문제들 / 연습 환경은 셋으로 나눠 쓴다 / 6주 준비 계획 / 120분을 나눠 쓰는 법 / 시험장에서 자주 잃는 점수 / 자격증이 증명하는 것과 증명하지 못하는 것 / 면접에서 나올 만한 질문
- 직접 링크 →: k8s-learning-roadmap, k8s-pod-troubleshooting, kubectl-essentials, k8s-architecture, k8s-node-maintenance, k8s-coredns, k8s-rbac, k8s-cluster-upgrade, k8s-etcd-backup, k8s-certificates-pki, helm-basics, kustomize-basics, k8s-crd, k8s-operators, k8s-service-types, k8s-network-policy, k8s-gateway-api, kubernetes-ingress, k8s-cni-pod-network, k8s-deployment, k8s-configmap, k8s-secret, k8s-hpa, k8s-pod-scheduling, k8s-pod-resources, k8s-pv-pvc, k8s-storageclass-snapshots, dockerfile-image-layers, k8s-job-cronjob, k8s-daemonset, k8s-pod-multicontainer, blue-green-deployment, canary-release, k8s-feature-maturity, k8s-pod-probes, k8s-admission-control, k8s-serviceaccount-tokens, k8s-security-context, linux-files-permissions, k8s-pod-security-admission, service-mesh, k8s-audit-logging, helm-dependencies-oci-gitops, k8s-deploy-pipeline-eks, distributed-tracing, k8s-kube-proxy-modes, packet-capture-tcpdump, kubeconfig-contexts, yaml-for-k8s, local-k8s-kind-minikube, linux-systemd-systemctl, k8s-api-objects, k8s-labels-selectors
- 키워드 백링크 →: observability-basics, k8s-statefulset, gateway, iptables-basics, cron-jobs, microservices, cilium-ebpf, ci-cd-basics, autoscaling, db-type-key-value, dns, webhooks
- 이 글로 오는 글 ←: k8s-learning-roadmap

#### `k8s-deploy-pipeline-eks` — push에서 EKS까지 배포 파이프라인

- 요약: 푸시부터 이미지 빌드, ECR, Terraform, kubectl 적용, 노드의 이미지 받기까지 이어진 길을 따라가며 단계마다 어떤 메시지로 깨지는지 본다. rollout을 기다리지 않는 CI, ImagePullBackOff의 세 가지 원인, Unauthorized와 Forbidden, 되돌리기의 함정, push와 pull(ArgoCD) 배포, deploy.sh와 cleanup.sh의 위험을 다룬다.
- 태그: Kubernetes, AWS, CI/CD, DevOps, Troubleshooting, GitOps
- 키워드: 배포 파이프라인, ProgressDeadlineExceeded, pull 방식 배포
- 길이: 653줄
- 소제목: 길 하나에 자격 증명이 넷 / 실패는 원인보다 늦게 드러난다 / 노드가 이미지를 받지 못하는 세 가지 이유 / 클러스터가 CI를 모를 때: Unauthorized와 Forbidden / Terraform은 같은 파이프라인에 넣지 않는다 / 배포 잡과 deploy.sh / 되돌리기는 어디를 되돌리느냐의 문제 / 밀어 넣는 배포와 끌어오는 배포 / cleanup.sh가 지우는 것과 남기는 것 / 로그 한 줄로 어느 단계인지 가르기 / 면접에서 나올 만한 질문
- 직접 링크 →: k8s-project-structure, github-actions-docker-ecr, eks-cluster-basics, k8s-deployment, k8s-secret, k8s-pod-troubleshooting, terraform-basics, terraform-modules-tfvars, helm-dependencies-oci-gitops, helm-release-lifecycle, k8s-pv-pvc, k8s-pod-probes, k8s-hpa, k8s-service-types, kubernetes-ingress, k8s-configmap
- 키워드 백링크 →: k8s-pod-lifecycle, k8s-storageclass-snapshots, k8s-pod-basics, git-undo, argocd-basics, k8s-architecture, helm-basics, k8s-cri-cni-csi, security-groups-nacl, local-k8s-kind-minikube, vpc-basics, webhooks
- 이 글로 오는 글 ←: architecture-patterns-overview, argocd-basics, ci-cd-basics, cold-starts, db-migration-tools, disaster-recovery, eks-cluster-basics, error-budgets, git-branching-strategy, github-actions-docker-ecr, gitops-argocd-vs-flux, global-rollout-localization, high-availability, k8s-admission-control, k8s-certifications, k8s-crd, k8s-deployment, k8s-feature-maturity, k8s-learning-roadmap, k8s-operators, k8s-pod-lifecycle, k8s-pod-probes, k8s-project-structure, k8s-statefulset, linux-systemd-systemctl, micro-frontends, network-config-cicd, rollback-strategy, sd-multi-datacenter, sd-wallet-event-sourcing, sit-uat-testing, terraform-basics, zero-downtime-migrations

#### `k8s-learning-roadmap` — 쿠버네티스 학습 지도: 로드맵 순서로 읽기와 증상별로 펼 글

- 요약: kubectl apply 한 줄이 지나는 부품에서 출발해 이 블로그의 쿠버네티스 글을 로드맵의 여덟 칸 순서로 엮고, 글마다 어떤 질문에 답하고 왜 그 자리에서 읽는지 적는다. Pending, CrashLoopBackOff, 403, drain 멈춤 같은 증상에서 처음 펼 글을 고르는 길도 놓는다.
- 태그: Kubernetes, DevOps, Troubleshooting
- 키워드: 쿠버네티스 학습 순서, 쿠버네티스 로드맵
- 길이: 444줄
- 소제목: kubectl apply 한 줄이 지나는 부품들 / 여덟 칸은 서로 기대고 있다 / 00 시작하기 전에: 리눅스, 컨테이너, 네트워크, YAML / 01 기초: API 서버에 원하는 상태를 적는 일 / 02 워크로드: Pod 하나에서 컨트롤러 여럿으로 / 03 네트워킹: 이름 하나로 Pod 여럿에 닿기 / 04 설정과 저장소: 이미지 밖에 두는 것들 / 05 신뢰성: 늘리고, 줄이고, 빼도 끊기지 않게 / 06 보안과 운영: 누가 무엇을 할 수 있고, 어떻게 올리나 / 07 플랫폼: 쿠버네티스를 늘리고, 그 위에 길을 깐다 / 이 증상이면 이 글부터 / 증상 문장에서 첫 글 고르기 / 다 읽지 않아도 된다 / 면접에서 나올 만한 질문
- 직접 링크 →: k8s-certifications, k8s-pod-troubleshooting, linux-files-permissions, linux-processes-signals, linux-systemd-systemctl, linux-grep-awk-sed, linux-namespaces-cgroups, docker-container-basics, dockerfile-image-layers, docker-network-volume, docker-network-drivers, docker-compose, devops-networking-roadmap, layer-ip-addressing, ports-and-sockets, dns, iptables-nat, yaml-for-k8s, curl-for-debugging, local-k8s-kind-minikube, k8s-architecture, k8s-api-objects, k8s-labels-selectors, k8s-controllers-reconcile, kubectl-essentials, kubectl-apply-ssa, kubeconfig-contexts, k8s-namespace, k8s-feature-maturity, kustomize-basics, k8s-pod-basics, k8s-pod-lifecycle, k8s-pod-multicontainer, k8s-pod-probes, k8s-pod-resources, k8s-pod-scheduling, k8s-deployment, rolling-deployment, blue-green-deployment, canary-release, k8s-statefulset, k8s-daemonset, k8s-job-cronjob, k8s-service-types, k8s-kube-proxy-modes, k8s-cni-pod-network, cilium-ebpf, k8s-coredns, k8s-network-policy, kubernetes-ingress, gateway, k8s-gateway-api, service-mesh, k8s-configmap, k8s-secret, secrets-management, external-secrets, k8s-pv-pvc, k8s-storageclass-snapshots, k8s-hpa, k8s-vpa, k8s-in-place-resize, k8s-node-autoscaling-karpenter, autoscaling, k8s-pod-disruption-budget, k8s-certificates-pki, k8s-serviceaccount-tokens, k8s-rbac, k8s-admission-control, k8s-audit-logging, k8s-security-context, k8s-pod-security-admission, k8s-node-maintenance, k8s-cluster-upgrade, k8s-etcd-backup, velero-backup, k8s-cri-cni-csi, k8s-gpu-dra, k8s-batch-kueue, k8s-crd, k8s-operators, k8s-api-aggregation-schedulers, helm-basics, helm-chart-templates, helm-values-secrets, helm-release-lifecycle, helm-dependencies-oci-gitops, argocd-basics, gitops-argocd-vs-flux, k8s-project-structure, k8s-deploy-pipeline-eks, eks-cluster-basics, monitoring-basics, metrics-types, structured-logging, distributed-tracing, prometheus-basics, grafana-dashboards
- 키워드 백링크 →: docker-commands-workflow, iptables-basics, cron-jobs, centralized-logging-pipeline, sd-object-storage-architecture, sdn-vxlan-overlay, grpc, db-type-key-value, https-tls, on-call, webhooks
- 이 글로 오는 글 ←: backend-engineer-roadmap, javascript-roadmap, k8s-certifications

#### `k8s-pod-troubleshooting` — Pod가 안 뜰 때 상태별로 보는 순서

- 요약: Pending, ContainerCreating, ImagePullBackOff, CreateContainerConfigError, CrashLoopBackOff, OOMKilled, Running인데 준비 안 됨, 멈춘 Terminating까지 STATUS마다 먼저 볼 곳과 명령을 정리하고, 이벤트 정렬의 함정과 kubectl debug로 셸 없는 컨테이너를 여는 법을 다룬다.
- 태그: Kubernetes, Troubleshooting, DevOps
- 키워드: ImagePullBackOff, CreateContainerConfigError, kubectl debug, 임시 컨테이너
- 길이: 403줄
- 소제목: 상태 이름이 멈춘 곳을 알려 준다 / 이벤트는 정렬부터 틀린다 / Pending: 노드를 찾지 못했다 / ContainerCreating에서 멈췄다 / ImagePullBackOff: 이미지를 받지 못했다 / CreateContainerConfigError: 설정이 비어 있다 / CrashLoopBackOff: 뜨자마자 죽는다 / OOMKilled: 메모리 한도에 걸렸다 / Running인데 트래픽을 못 받는다 / Terminating에서 안 넘어간다 / 셸이 없는 컨테이너는 kubectl debug로 연다 / 상태별로 다시 보면 / 면접에서 나올 만한 질문
- 직접 링크 →: k8s-pod-scheduling, dockerfile-image-layers, helm-basics, k8s-pod-lifecycle, k8s-pod-probes, k8s-pod-resources, kubernetes-ingress, network-troubleshooting-by-layer
- 키워드 백링크 →: rate-limiting-in-practice, k8s-secret, k8s-service-types, k8s-pv-pvc, k8s-storageclass-snapshots, k8s-statefulset, k8s-api-objects, k8s-configmap, docker-container-basics, kubectl-essentials, k8s-cni-pod-network, k8s-architecture, k8s-cri-cni-csi, local-k8s-kind-minikube, dns
- 이 글로 오는 글 ←: argocd-basics, curl-for-debugging, docker-commands-workflow, docker-network-volume, dockerfile-image-layers, github-actions-docker-ecr, k8s-certifications, k8s-daemonset, k8s-deploy-pipeline-eks, k8s-deployment, k8s-in-place-resize, k8s-job-cronjob, k8s-labels-selectors, k8s-learning-roadmap, k8s-pod-basics, k8s-pod-lifecycle, k8s-pod-multicontainer, k8s-pod-scheduling, k8s-secret, k8s-statefulset, kubectl-essentials, linux-namespaces-cgroups, packet-capture-tcpdump

#### `k8s-project-structure` — EKS 배포 프로젝트 구조: 폴더마다 누가 읽나

- 요약: .github, app, k8s, terraform, scripts로 나뉜 EKS 배포 저장소를 직접 만들어 파일마다 무엇이 들어가고 누가 읽는지 따라간다. 이름순 kubectl apply의 함정, 클라이언트 검사와 서버 검사의 차이, git에 둔 Secret, .gitignore, 환경이 늘 때 Kustomize와 Helm, 저장소를 나누는 시점까지 짚는다.
- 태그: Kubernetes, Terraform, DevOps, AWS, Git
- 키워드: kubeconform, dry-run=server, 프로젝트 폴더 구조
- 길이: 748줄
- 소제목: 트리 한 장을 위에서부터 / app: 이미지를 만드는 재료 / k8s: 리소스 종류마다 폴더 하나 / kubectl apply의 순서는 파일 이름순이다 / 클라이언트 검사만 믿으면 안 된다 / secret.yaml을 git에 두면 비밀이 아니다 / terraform: 클러스터와 네트워크를 만드는 코드 / .gitignore가 막아야 하는 것 / scripts: 손으로 치던 명령을 모은 곳 / 환경이 늘어날 때: 복사, Kustomize, Helm / 앱과 배포 설정을 한 저장소에 둘까 / 처음 받은 저장소는 이 순서로 읽는다 / 면접에서 나올 만한 질문
- 직접 링크 →: k8s-deploy-pipeline-eks, dockerfile-image-layers, k8s-namespace, k8s-deployment, k8s-configmap, k8s-hpa, k8s-pv-pvc, git-large-files-secrets, k8s-secret, helm-values-secrets, terraform-modules-tfvars, eks-cluster-basics, terraform-basics, git-ignore-config, helm-basics, helm-dependencies-oci-gitops
- 키워드 백링크 →: external-secrets, github-actions-docker-ecr, k8s-storageclass-snapshots, vpc-subnets-route-tables, docker-container-basics, k8s-cri-cni-csi, dependency-hell, db-type-key-value, layer-ip-routing-icmp, kubernetes-ingress, build-caching, security-groups-nacl, what-happens-google-com, local-k8s-kind-minikube, layer-ip-addressing, vpc-basics
- 이 글로 오는 글 ←: github-actions-docker-ecr, helm-chart-templates, k8s-deploy-pipeline-eks, k8s-learning-roadmap, k8s-namespace, kubectl-apply-ssa, kustomize-basics, terraform-modules-tfvars, yaml-for-k8s

#### `network-troubleshooting-by-layer` — 계층별로 장애 좁히기: 아래에서 위로

- 요약: 접속이 안 된다는 한 줄을 curl -v로 좁힌 뒤 링크, 경로, 이웃, 경로 끝, 이름, 포트, TLS, HTTP 순서로 확인한다. 칸마다 칠 명령과 출력에서 볼 곳, 흔한 오해를 실제 출력으로 정리한다.
- 태그: tesla, Network, Linux, Troubleshooting, TCP/IP · 회사: tesla
- 키워드: 장애 좁히기, mtr, tracepath, openssl s_client
- 길이: 696줄
- 소제목: 명령을 어디서 치는지부터 정한다 / 먼저 curl 한 번으로 어디서 멈췄는지 본다 / 링크가 살아 있는지 / 내 주소와 나갈 길 / 다음 칸의 MAC을 얻었는지 / 목적지까지 닿는지 / 이름이 맞는 주소로 풀리는지 / 포트가 열려 있는지 / TLS가 맺어지는지 / HTTP가 기대한 답을 주는지 / 갈림길을 한 장으로 / 확인하다가 흔히 하는 실수 / 처음 실패한 칸이 답이다 / 면접에서 나올 만한 질문
- 직접 링크 →: osi-in-practice, docker-network-volume, layer-link-ethernet-arp, layer-ip-addressing, layer-ip-routing-icmp, layer-mtu-fragmentation, hosts-file, ports-and-sockets, packet-capture-tcpdump, iptables-basics, https-tls, proxy-reverse-proxy
- 키워드 백링크 →: what-happens-google-com, docker-container-basics, curl-for-debugging, sd-start-single-server, security-groups-nacl, http-status-codes, first-page-from-power-on, dns
- 이 글로 오는 글 ←: browser-fetch, curl-for-debugging, devops-networking-roadmap, docker-commands-workflow, first-page-from-power-on, http-message, http-status-codes, k8s-pod-troubleshooting, kubernetes-ingress, layer-mtu-fragmentation, network-layers-overview, network-monitoring, networking-essentials-map, nginx-https-performance, osi-in-practice, packet-capture-tcpdump, ports-and-sockets, redis-basics, rest-api-design, system-design-concepts-map, tcp-reliability-congestion, upper-layers-session-presentation-app, what-happens-google-com, youtube-url-to-video

#### `osi-in-practice` — OSI 7계층을 알면 현장에서 무엇이 달라지나

- 요약: 에러 메시지가 어느 층에서 나왔는지 읽는 법과, 같은 메시지가 다른 층에서 나오는 함정을 실습 망의 실제 출력으로 본다. 로드 밸런서, 방화벽, 헬스 체크, TLS 종단, 타임아웃을 층으로 나눠 고르는 법도 다룬다.
- 태그: Network, TCP/IP, Troubleshooting, DevOps
- 키워드: L4 로드 밸런서, L7 로드 밸런서, 헬스 체크
- 길이: 499줄
- 소제목: 에러 메시지는 어느 층이 말했는지 알려 준다 / 같은 메시지가 다른 층에서 나오기도 한다 / 로드 밸런서는 어느 층에서 나누느냐로 고른다 / 방화벽도 층마다 따로 있다 / 헬스 체크는 어느 층까지 물어보나 / TLS를 어디서 풀지 정한다 / 타임아웃은 안쪽으로 갈수록 짧게 / 클라우드 제품 이름을 층으로 읽는다 / 네트워크 탓이라고 말하기 전에 모을 것 / 층 번호는 질문을 좁히는 말이다 / 면접에서 나올 만한 질문
- 직접 링크 →: network-layers-overview, http-status-codes, nginx-reverse-proxy, iptables-basics, dns, layer-link-ethernet-arp, proxy-reverse-proxy, tcp-connection-lifecycle, ports-and-sockets, resilience-patterns, https-tls, upper-layers-session-presentation-app, iptables-nat, kubernetes-ingress, gateway, network-troubleshooting-by-layer, packet-capture-tcpdump
- 키워드 백링크 →: k8s-network-policy, timeouts, docker-container-basics, realtime-communication, reverse-proxy-lb-api-gateway, sd-start-single-server, service-mesh, http-versions, security-groups-nacl, what-happens-google-com, encryption-in-transit, grpc, layer-ip-routing-icmp, first-page-from-power-on, udp-and-quic
- 이 글로 오는 글 ←: api-gateway-use-cases, api-scaling-ladder, api-styles-overview, autoscaling, caching-strategies, cdn-edge-anycast, centralized-logging-pipeline, ci-cd-basics, cilium-ebpf, circuit-breaker, claude-code-extensions, consistent-hashing, curl-for-debugging, deadlocks, devops-networking-roadmap, disaster-recovery, event-loop, express-middleware, failover, fault-tolerance, gateway, grpc, health-checks, high-availability, http-status-codes, iac-basics, integration-tests-real-db, iptables-nat, java-jvm-memory-gc, k8s-architecture, k8s-audit-logging, k8s-cri-cni-csi, k8s-kube-proxy-modes, k8s-network-policy, k8s-pod-multicontainer, k8s-service-types, kubernetes-ingress, linux-grep-awk-sed, linux-namespaces-cgroups, linux-processes-signals, load-balancer-basics, load-balancing-algorithms, long-polling, monolith-architecture, multi-region, network-flow-logs, network-layers-overview, network-troubleshooting-by-layer, networking-essentials-map, nginx-reverse-proxy, nodejs-server-runtime, on-call, packet-capture-tcpdump, postmortems, production-incidents, proxy-reverse-proxy, rate-limiting-in-practice, rendering-ssr, resilience-patterns, reverse-proxy-lb-api-gateway, rolling-deployment, sd-autocomplete-trie, sd-chat-connections, sd-load-balancer-stateless, sd-multi-datacenter, service-discovery, service-mesh, sli-slo, system-design-concepts-map, upper-layers-session-presentation-app, what-happens-google-com

#### `packet-capture-tcpdump` — tcpdump로 계층을 눈으로 보기

- 요약: curl 한 번을 찍어 ARP, DNS, TCP, HTTP가 층별로 지나가는 것을 보고, 필터와 -A·-X·-w 옵션, Wireshark, 컨테이너 안 캡처까지 다룬다. refused, timeout, reset, 502를 패킷 모양으로 가르는 법과 캡처할 때의 개인정보 주의점도 짚는다.
- 태그: Network, Linux, Troubleshooting, TCP/IP
- 키워드: tcpdump, 패킷 캡처, Wireshark, pcap
- 길이: 556줄
- 소제목: 어디서 찍을지부터 정한다 / curl 한 번을 처음부터 끝까지 / 한 줄을 읽는 법 / 필요한 패킷만 거른다 / 내용까지 본다 / 파일로 남기고 Wireshark로 연다 / 장애 장면을 패킷으로 가른다 / 컨테이너와 Pod 안에서 찍는다 / TLS 안은 보이지 않는다, 이름만 빼고 / 찍기 전에 정해 둘 것 / 패킷은 각자의 로그보다 정직하다 / 면접에서 나올 만한 질문
- 직접 링크 →: network-troubleshooting-by-layer, layer-link-ethernet-arp, tcp-connection-lifecycle, network-layers-overview, iptables-nat, https-tls, osi-in-practice
- 키워드 백링크 →: nginx-reverse-proxy, k8s-service-types, docker-container-basics, k8s-pod-troubleshooting, ports-and-sockets, what-happens-google-com, first-page-from-power-on, udp-and-quic, dns
- 이 글로 오는 글 ←: cilium-ebpf, curl-for-debugging, ddos-protection, devops-networking-roadmap, dhcp, encryption-in-transit, first-page-from-power-on, http-message, ids-ips, iptables-nat, ipv6-basics, k8s-certifications, k8s-cni-pod-network, k8s-coredns, kubernetes-ingress, layer-mtu-fragmentation, linux-namespaces-cgroups, network-flow-logs, network-layers-overview, network-monitoring, network-troubleshooting-by-layer, networking-essentials-map, osi-in-practice, packet-encapsulation, router-vs-switch, sdn-vxlan-overlay, service-mesh, tcp-connection-lifecycle, tcp-reliability-congestion, timeouts, udp-and-quic, upper-layers-session-presentation-app, vlan-basics, websocket-deep-dive, youtube-url-to-video

#### `release-cutover-hypercare` — 컷오버와 하이퍼케어: 새 시스템을 올리는 밤과 그 뒤 몇 주

- 요약: 컷오버는 시각 관리다. 리허설로 잰 시간을 런북에 적고, 되돌리기 시간에서 거꾸로 단계별 마감을 계산하고, 돌아올 수 없는 지점 앞에 숫자로 된 게이트를 둔다. 이관 데이터는 건수부터 샘플까지 좁혀 가며 검증하고, 연 뒤에는 끝나는 날이 정해진 하이퍼케어로 지킨다.
- 태그: tesla, DevOps, SRE, Troubleshooting, Database, Observability · 회사: tesla
- 키워드: 컷오버, 하이퍼케어, 돌아올 수 없는 지점, 모의 컷오버
- 길이: 400줄
- 소제목: 평소 배포와 컷오버는 무엇이 다른가 / 런북에는 시각과 이름을 적는다 / 되돌릴 수 있는 마지막 시각을 거꾸로 센다 / 데이터 이관은 리허설에서 숫자를 얻는다 / 그 밤의 순서 / 사용자보다 먼저 보려면 / 하이퍼케어는 끝나는 날을 정하고 시작한다 / 컷오버가 흔들릴 때 보는 것 / 시각을 적어 두면 새벽의 결정이 쉬워진다 / 면접에서 나올 만한 질문
- 직접 링크 →: enterprise-system-integration, global-rollout-localization, sit-uat-testing, rollback-strategy, microservices-decomposition, zero-downtime-migrations, on-call, blue-green-deployment, feature-flags, canary-release, sli-slo, alerting, distributed-tracing, structured-logging, production-incidents, postmortems
- 키워드 백링크 →: http-status-codes, dns
- 이 글로 오는 글 ←: enterprise-system-integration, global-rollout-localization, sit-uat-testing

### Programming › Network (`programming/network`)

#### `dns` — DNS는 어떻게 이름을 IP로 바꾸나

- 요약: 도메인 이름이 루트, TLD, 권한 있는 네임서버를 거쳐 IP가 되는 과정과 TTL 캐시가 만드는 시차를 따라간다. 레코드 종류, apex CNAME 제약, UDP와 TCP, DoH와 DNSSEC, dig로 장애를 찾는 법까지 다룬다.
- 태그: DNS, Network, Security
- 키워드: DNS, 재귀 리졸버, 권한 있는 네임서버, DNSSEC, CNAME, DoH, TTL
- 길이: 451줄
- 소제목: 전화번호부 한 권으로는 버틸 수 없었다 / 도메인 이름은 오른쪽부터 읽는다 / 이름 하나를 찾기까지 / 캐시와 TTL이 만드는 시차 / 레코드는 이름에 붙은 꼬리표다 / 도메인 꼭대기에는 CNAME을 걸 수 없다 / UDP로 묻다가 TCP로 넘어갈 때 / 질의를 감추는 DoT와 DoH / 답이 진짜인지 확인하는 DNSSEC / 전파된다는 말의 오해 / dig로 직접 확인하기 / 자주 만나는 장애 / 처음 질문으로 돌아가면 / 면접에서 나올 만한 질문
- 직접 링크 →: what-happens-google-com, hosts-file
- 키워드 백링크 →: http-versions, sd-email-protocols, cdn-edge-anycast, sql-batch-timeout-pool, udp-and-quic, ipv6-basics
- 이 글로 오는 글 ←: authn-vs-authz, backend-engineer-roadmap, bloom-filter, blue-green-deployment, browser-fetch, bullmq-job-queue, cache-invalidation, cache-write-policies, caching-concepts-map, caching-strategies, cdn-edge-anycast, ci-cd-basics, cilium-ebpf, circuit-breaker, clock-skew, core-web-vitals, curl-for-debugging, db-performance-map, db-replication-sharding, db-type-key-value, db-type-wide-column, ddos-protection, devops-networking-roadmap, dhcp, disaster-recovery, distributed-lock, docker-compose, docker-network-drivers, docker-network-volume, dockerfile-image-layers, eks-cluster-basics, encryption-in-transit, eventual-consistency, exponential-backoff-jitter, failover, first-page-from-power-on, gateway, grpc, high-availability, hosts-file, http-caching-cdn, http-status-codes, http-versions, https-tls, iac-basics, ids-ips, iptables-basics, iptables-nat, ipv6-basics, js-memoization, js-memory-leak, k8s-api-objects, k8s-batch-kueue, k8s-certificates-pki, k8s-certifications, k8s-coredns, k8s-gateway-api, k8s-job-cronjob, k8s-kube-proxy-modes, k8s-labels-selectors, k8s-learning-roadmap, k8s-namespace, k8s-network-policy, k8s-operators, k8s-pod-scheduling, k8s-pod-troubleshooting, k8s-service-types, k8s-statefulset, kafka-vs-rabbitmq-replay, kubectl-essentials, kubernetes-ingress, latency-bandwidth-throughput, layer-ip-addressing, layer-ip-routing-icmp, layer-mtu-fragmentation, leader-election, load-balancer-basics, local-custom-domain, lossy-counting, monitoring-basics, multi-region, network-flow-logs, network-layers-overview, network-monitoring, network-partitions, network-troubleshooting-by-layer, networking-essentials-map, nginx-https-performance, nodejs-server-runtime, osi-in-practice, packet-capture-tcpdump, packet-encapsulation, pattern-facade, pattern-proxy, percentile-latency, ports-and-sockets, postgres-roles-security, proxy-reverse-proxy, pub-sub, rabbitmq-basics, redis-basics, redis-memory-eviction, redis-persistence-ha, release-cutover-hypercare, router-vs-switch, scaling-horizontal-vertical, sd-cache-and-cdn-tier, sd-chat-presence, sd-email-protocols, sd-hotel-inventory-scaling, sd-load-balancer-stateless, sd-maps-location-eta, sd-multi-datacenter, sd-proximity-service, sd-split-web-and-db, sd-start-single-server, sd-web-crawler-architecture, sd-web-crawler-politeness-dedup, secrets-management, security-groups-nacl, service-discovery, sli-slo, ssrf, system-design-concepts-map, system-design-study-path, timeouts, udp-and-quic, upper-layers-session-presentation-app, velero-backup, vlan-basics, vpc-basics, vpc-peering-transit-privatelink, vpn-ipsec-wireguard, waf, webhooks, what-happens-google-com, youtube-url-to-video

#### `first-page-from-power-on` — Wi-Fi에 붙은 노트북이 첫 페이지를 받기까지: DHCP부터 HTTP까지 패킷으로 따라가기

- 요약: 주소도 없는 노트북이 HTTPS 페이지를 받기까지 DHCP, ARP, DNS, TCP, TLS, HTTP가 선 위에서 어떻게 보이는지 실제 캡처로 따라간다. 두 번째 접속에서 무엇이 빠지는지, 칸마다 고장 나면 캡처가 어떻게 달라지는지도 본다.
- 태그: Network, TCP/IP, DNS, TLS, HTTP
- 키워드: 웹사이트 접속 과정, TLS 세션 재개, SNI
- 길이: 653줄
- 소제목: 세 칸짜리 실습 망 / 주소가 없을 때: DHCP 네 번과 3초 / 게이트웨이의 MAC을 먼저 묻는 이유 / 이름 하나에 질의 두 번 / 공유기를 지나며 바뀌는 세 가지 / TLS: 이름만 보이고 나머지는 잠긴다 / 암호 봉투 안의 GET 한 줄 / 두 번째 접속에서 사라지는 것들 / 어느 칸에서 멈췄는지 캡처가 말해 준다 / 여섯 칸을 한 줄로 / 면접에서 나올 만한 질문
- 직접 링크 →: what-happens-google-com, networking-essentials-map, packet-capture-tcpdump, dhcp, layer-link-ethernet-arp, dns, tcp-connection-lifecycle, iptables-nat, https-tls, http-message, latency-bandwidth-throughput, http-status-codes, network-troubleshooting-by-layer
- 키워드 백링크 →: nginx-basics, iptables-basics, ipv6-basics, layer-ip-addressing, layer-ip-routing-icmp, local-custom-domain, webhooks, security-groups-nacl, udp-and-quic
- 이 글로 오는 글 ←: curl-for-debugging, encryption-in-transit, hosts-file, http-message, https-tls, ids-ips, k8s-gateway-api, k8s-service-types, kubernetes-ingress, latency-bandwidth-throughput, local-custom-domain, network-troubleshooting-by-layer, networking-essentials-map, nginx-https-performance, osi-in-practice, packet-capture-tcpdump, packet-encapsulation, proxy-reverse-proxy, reverse-proxy-lb-api-gateway, upper-layers-session-presentation-app, what-happens-google-com, youtube-url-to-video

#### `hosts-file` — hosts 파일: DNS보다 먼저 보는 한 줄

- 요약: 운영체제가 DNS보다 먼저 확인하는 hosts 파일의 형식과 조회 순서, 로컬 개발과 서버 이전 테스트에 쓰는 법을 정리한다. 고쳤는데 반영되지 않는 이유와 포트·와일드카드가 안 되는 이유, 보안 위험도 다룬다.
- 태그: DNS, Network, Browser, Security
- 키워드: hosts 파일, /etc/hosts, nsswitch.conf
- 길이: 338줄
- 소제목: DNS보다 먼저 보는 파일 / 한 줄 뜯어보기 / 이름을 찾는 순서 / 어디에 쓰나 / 고쳤는데 그대로인 이유 / 포트도, 와일드카드도 안 된다 / 악성코드가 노리는 파일 / 가장 앞에 있는 한 줄짜리 DNS / 면접에서 나올 만한 질문
- 직접 링크 →: dns
- 키워드 백링크 →: proxy-reverse-proxy, local-custom-domain, http-versions, linux-files-permissions, what-happens-google-com, ipv6-basics, first-page-from-power-on
- 이 글로 오는 글 ←: devops-networking-roadmap, dns, local-custom-domain, network-troubleshooting-by-layer, networking-essentials-map, service-discovery, what-happens-google-com

#### `http-caching-cdn` — HTTP 캐시와 CDN

- 요약: 배포했는데 옛 화면이 보이거나 흰 화면이 뜨는 이유를 HTTP 캐시 규칙으로 푼다. Cache-Control, ETag와 304, 캐시 키와 Vary, CDN 엣지와 무효화, 개인화 페이지를 캐시하면 안 되는 이유까지 다룬다.
- 태그: coupang, HTTP, Cache, CDN, Performance, Browser · 회사: coupang
- 키워드: Cache-Control, ETag, 캐시 무효화, 캐시 스탬피드, stale-while-revalidate
- 길이: 401줄
- 소제목: 응답은 여러 곳에 복사된다 / 신선한 동안은 묻지도 않는다 / Cache-Control 한 줄 뜯어 보기 / 상한 사본이 아직 맞는지 묻기 / 무엇을 같은 요청으로 보나 / 이름에 해시를 넣으면 영원히 캐시할 수 있다 / 엣지에서 기한을 정하는 쪽은 누구인가 / 한꺼번에 만료되면 오리진이 몰린다 / 지우는 데도 시간이 걸린다 / 사람마다 다른 페이지를 공유 캐시에 두면 / 응답 헤더로 확인한다 / 처음 장면을 다시 보면 / 면접에서 나올 만한 질문
- 직접 링크 →: what-happens-google-com, cdn-edge-anycast
- 키워드 백링크 →: http-message, frontend-browser-cache, http-versions, pattern-proxy, redis-basics, cookie-session-login, cors, dns
- 이 글로 오는 글 ←: ab-testing, api-gateway-use-cases, api-scaling-ladder, api-versioning, browser-fetch, cache-invalidation, caching-concepts-map, caching-strategies, cdn-edge-anycast, client-data-cache, cors, db-architecture-by-scale, devops-networking-roadmap, edge-caching, frontend-browser-cache, http-message, http-methods, http-status-codes, json-crud-http, jwt-key-rotation, layered-architecture, long-polling, networking-essentials-map, nextjs-static-dynamic-rendering, nginx-https-performance, optimistic-locking, proxy-reverse-proxy, pub-sub, rabbitmq-basics, rendering-ssg-isr, rendering-ssr, rendering-strategies, rest-api-design, sd-autocomplete-trie, sd-cache-and-cdn-tier, sd-maps-tiles-routing, sd-object-storage-versioning-multipart, sd-url-shortener-api-redirect, sd-url-shortener-key-generation, sd-video-streaming-cost, sd-web-crawler-politeness-dedup, server-sent-events, system-design-concepts-map, upper-layers-session-presentation-app, what-happens-google-com

#### `long-polling` — 롱 폴링 깊게 보기: 대기 시간, 커서, 재연결 폭주, 서버 자원

- 요약: 응답을 붙잡는 시간을 프록시 한도에 맞추는 법과, 응답 사이의 틈에서 이벤트가 사라지는 문제를 커서로 막는 법을 직접 재 본다. 배포 때 몰리는 재연결과 붙잡힌 요청 하나가 쓰는 메모리, 작업자 풀이 멈추는 사고까지 다룬다.
- 태그: HTTP, Network, Nginx, Resilience, Performance
- 키워드: hanging GET, Comet, 롱 폴링 커서
- 길이: 380줄
- 소제목: 요청 하나를 붙잡아 두는 서버 / 붙잡는 시간은 경로에서 가장 짧은 한도가 정한다 / 응답과 다음 요청 사이의 틈 / 커서와 보관 범위 설계 / 모두가 같은 순간에 다시 묻는다 / 붙잡힌 요청 하나가 쓰는 자원 / 롱 폴링 장애를 만났을 때 / 롱 폴링을 고르는 경우 / 면접에서 나올 만한 질문
- 직접 링크 →: realtime-communication, websocket-deep-dive, server-sent-events, timeouts, message-delivery-semantics, exponential-backoff-jitter
- 키워드 백링크 →: http-caching-cdn, reverse-proxy-lb-api-gateway, http-versions, event-loop, osi-in-practice, sql-batch-timeout-pool, redis-basics
- 이 글로 오는 글 ←: http-streaming-sse, realtime-communication, sd-chat-connections, sd-file-sync-conflicts, sd-mq-consumer-groups, sd-news-feed-retrieval, server-sent-events, system-design-study-path, websocket-deep-dive

#### `proxy-reverse-proxy` — 프록시와 리버스 프록시: 누구를 대신하나

- 요약: 사내망에서 curl이 막히는 이유와 앱 로그에 로드 밸런서 IP만 찍히는 이유를 프록시가 누구 편에 서 있는지로 푼다. CONNECT 터널과 TLS 가로채기, Ubuntu 프록시 설정, X-Forwarded-For를 오른쪽부터 읽는 법과 PROXY protocol까지 다룬다.
- 태그: Network, HTTP, Security, Proxy, TLS, Linux
- 키워드: 포워드 프록시, 리버스 프록시, X-Forwarded-For, CONNECT 터널, PROXY protocol
- 길이: 649줄
- 소제목: 프록시는 누구를 대신하나 / 프록시에게 보내는 HTTP 요청은 모양이 다르다 / HTTPS는 CONNECT로 터널을 판다 / 회사 프록시가 TLS를 열어 볼 때 / 설정 없이 지나가는 프록시와 PAC 파일 / HTTP를 모르는 프록시, SOCKS5 / Ubuntu에서 프록시 쓰게 하기 / 서버 앞을 지키는 리버스 프록시 / 앱에는 로드 밸런서 주소만 보인다 / X-Forwarded-For 한 줄 뜯어보기 / 진짜 클라이언트 IP 고르기 / 표준 헤더 Forwarded / 헤더를 못 붙이는 L4 로드 밸런서와 PROXY protocol / CDN에서 앱까지, 헤더가 붙는 자리 / 리버스 프록시, 로드 밸런서, API 게이트웨이 / 다시 두 장면으로 / 면접에서 나올 만한 질문
- 직접 링크 →: https-tls, nginx-reverse-proxy, http-caching-cdn, local-custom-domain, gateway, reverse-proxy-lb-api-gateway
- 키워드 백링크 →: docker-container-basics, osi-in-practice, iptables-basics, http-versions, security-groups-nacl, ports-and-sockets, layer-ip-addressing, http-status-codes, what-happens-google-com, dhcp, ipv6-basics, first-page-from-power-on, udp-and-quic, dns
- 이 글로 오는 글 ←: api-gateway-use-cases, blue-green-deployment, cdn-edge-anycast, cookie-session-login, devops-networking-roadmap, docker-compose, docker-network-volume, edge-caching, gateway, graphql-basics, hosts-file, http-status-codes, ids-ips, iptables-nat, jenkins-pipeline-basics, k8s-audit-logging, kubernetes-ingress, layer-ip-addressing, linux-grep-awk-sed, load-balancer-basics, local-custom-domain, network-layers-overview, network-troubleshooting-by-layer, networking-essentials-map, nginx-basics, nginx-reverse-proxy, osi-in-practice, pattern-proxy, rate-limiting-in-practice, realtime-communication, rendering-ssr, rendering-strategies, reverse-proxy-lb-api-gateway, sd-rate-limiter-design, streaming-ssr-suspense, system-design-concepts-map, waf, zero-trust-architecture

#### `realtime-communication` — 서버가 먼저 말하게 하기: 폴링, 롱 폴링, SSE, WebSocket

- 요약: 요청-응답뿐인 HTTP에서 서버가 먼저 소식을 보내는 네 가지 방법을 비교했다. 롱 폴링의 타임아웃, SSE의 재연결과 Last-Event-ID, WebSocket 업그레이드와 프레임, 여러 서버로 늘릴 때의 문제까지 다룬다.
- 태그: WebSocket, HTTP, Network
- 키워드: WebSocket, Server-Sent Events, 롱 폴링, EventSource
- 길이: 596줄
- 소제목: 몇 초마다 다시 묻기: 짧은 폴링 / 대답할 게 생길 때까지 붙잡아 두기: 롱 폴링 / 응답을 끝내지 않고 계속 보내기: SSE / 이벤트 스트림 한 덩어리 뜯어보기 / SSE가 걸려 넘어지는 곳 / HTTP를 벗어나 양방향으로: WebSocket / 업그레이드 요청 뜯어보기 / 서버가 여러 대가 되면 / 로컬에선 되는데 서버에 올리면 멈출 때 / 무엇을 고를까 / 다시 주문 화면으로 / 면접에서 나올 만한 질문
- 직접 링크 →: http-versions, cors, resilience-patterns, nginx-reverse-proxy, operational-transform, crdt, websocket-deep-dive, long-polling, server-sent-events
- 키워드 백링크 →: json-crud-http, reverse-proxy-lb-api-gateway, proxy-reverse-proxy, base64, kafka-basics, redis-basics, http-status-codes, backpressure
- 이 글로 오는 글 ←: api-styles-overview, blue-green-deployment, cdn-edge-anycast, frontend-browser-cache, graphql-basics, http-streaming-sse, jenkins-pipeline-basics, js-timers-accuracy, kubectl-essentials, load-balancer-basics, load-balancing-algorithms, loading-patterns, long-polling, message-queue-basics, networking-essentials-map, nginx-basics, nginx-reverse-proxy, nodejs-server-runtime, operational-transform, osi-in-practice, sd-chat-connections, sd-chat-message-storage, sd-chat-presence, sd-email-protocols, sd-file-sync-conflicts, sd-load-balancer-stateless, sd-maps-location-eta, sd-mq-consumer-groups, sd-nearby-friends, sd-news-feed-retrieval, server-sent-events, serverless-architecture, system-design-study-path, vpc-subnets-route-tables, webhooks, websocket-deep-dive

#### `server-sent-events` — Server-Sent Events 깊게 보기: 재연결, 연결 수 제한, 프록시 버퍼링

- 요약: EventSource가 Last-Event-ID를 들고 다시 붙는 과정과 영영 포기하는 응답을 Chromium으로 확인한다. HTTP/1.1의 연결 6개 제한, nginx와 압축이 이벤트를 붙잡는 곳, 하트비트, LLM 답변 스트리밍과 WebSocket 대신 SSE를 고를 때를 다룬다.
- 태그: HTTP, Network, Nginx, Browser, Performance
- 키워드: text/event-stream, Last-Event-ID, X-Accel-Buffering
- 길이: 438줄
- 소제목: 서버가 내려보내는 바이트 그대로 보기 / id와 retry는 다음 이벤트까지 남는다 / 끊기면 다시 붙고, 어떤 응답에는 포기한다 / 탭 일곱 개째에서 사이트가 멈춘다 / 프록시와 압축이 이벤트를 붙잡는 곳 / 조용한 스트림은 끊기고, 끊긴 줄도 모른다 / LLM 답변 스트리밍은 EventSource를 쓰지 않는다 / SSE를 고를 때와 WebSocket을 고를 때 / SSE 장애를 만났을 때 / 경로를 비우면 가장 가벼운 선택 / 면접에서 나올 만한 질문
- 직접 링크 →: realtime-communication, websocket-deep-dive, long-polling, http-streaming-sse, http-versions, loading-patterns
- 키워드 백링크 →: streaming-ssr-suspense, http-message, http-caching-cdn, nginx-reverse-proxy, base64, http-status-codes
- 이 글로 오는 글 ←: api-styles-overview, http-streaming-sse, long-polling, realtime-communication, websocket-deep-dive

#### `websocket-deep-dive` — WebSocket 깊게 보기: 프레임 바이트부터 하트비트, 백프레셔, 서버 확장까지

- 요약: tcpdump로 잡은 프레임을 바이트 단위로 읽고, nginx 60초 유휴 타임아웃과 ping, 죽은 연결 찾기, bufferedAmount로 보는 백프레셔를 직접 재현한다. 재연결과 이어 받기, Redis로 서버를 늘리는 법, CSWSH와 Origin 검사까지 다룬다.
- 태그: WebSocket, Network, Nginx, Redis, Security
- 키워드: WebSocket 프레임, Sec-WebSocket-Accept, bufferedAmount, CSWSH
- 길이: 582줄
- 소제목: 101 응답이 확인해 주는 것 / 루프백에서 프레임을 잡아 보기 / 길이가 125를 넘으면 헤더가 길어진다 / 마스킹은 암호화가 아니다 / 1분 만에 끊기는 채팅방 / 죽은 연결은 스스로 알려 주지 않는다 / 느린 수신자가 서버 메모리를 먹는다 / 끊긴 뒤 다시 붙고 이어 받기 / 서버가 두 대가 되면 메시지가 반만 간다 / 쿠키로 인증하면 다른 사이트도 연결을 연다 / 운영에서 WebSocket 장애를 좁히는 순서 / 연결을 오래 쥐는 대가 / 면접에서 나올 만한 질문
- 직접 링크 →: realtime-communication, long-polling, server-sent-events, packet-capture-tcpdump, timeouts, tcp-connection-lifecycle, backpressure, exponential-backoff-jitter, pub-sub, load-balancer-basics, sd-chat-connections, cors, csrf
- 키워드 백링크 →: browser-fetch, sd-queue-logging-automation, reverse-proxy-lb-api-gateway, base64, redis-basics, cookie-session-login
- 이 글로 오는 글 ←: api-styles-overview, graphql-basics, http-streaming-sse, long-polling, networking-essentials-map, nodejs-server-runtime, realtime-communication, sd-chat-connections, sd-chat-presence, sd-maps-location-eta, sd-nearby-friends, server-sent-events, system-design-study-path

#### `what-happens-google-com` — 주소창에 google.com을 치면 일어나는 일

- 요약: 엔터를 누른 순간부터 화면이 뜰 때까지. URL 해석과 HSTS, DNS 조회, TCP·TLS 핸드셰이크, HTTP/2 요청과 리다이렉트, 렌더링 파이프라인을 순서대로 따라갔다.
- 태그: DNS, TCP, TLS, HTTP, Browser
- 키워드: HTTPS, 3-way handshake, HSTS, 렌더링 파이프라인
- 길이: 404줄
- 소제목: 검색어인가, 주소인가 / 이름을 IP로 바꾸기: DNS / 서버와 연결 맺기: TCP와 TLS / 페이지를 요청하고 받기: HTTP / 받은 HTML을 화면에 그리기 / 캐시가 단계를 건너뛰게 해 준다 / 페이지가 안 뜰 때 몇 번째 단계인지 고르기 / 정리 / 면접에서 나올 만한 질문
- 직접 링크 →: browser-rendering-pipeline, network-troubleshooting-by-layer, osi-in-practice
- 키워드 백링크 →: http-caching-cdn, nginx-basics, dns, https-tls, hosts-file, webhooks, http-versions, cdn-edge-anycast, http-status-codes, ipv6-basics, first-page-from-power-on, udp-and-quic
- 이 글로 오는 글 ←: animation-performance, api-gateway-use-cases, backend-engineer-roadmap, base64, browser-rendering-pipeline, browser-storage, cookie-session-login, core-web-vitals, csrf, curl-for-debugging, devops-networking-roadmap, dns, eks-cluster-basics, encryption-in-transit, first-page-from-power-on, frontend-browser-cache, gateway, git-remote-collaboration, helm-dependencies-oci-gitops, hosts-file, html-form-http, http-caching-cdn, http-message, http-methods, http-status-codes, http-streaming-sse, http-versions, https-tls, ids-ips, iptables-basics, iptables-nat, k8s-admission-control, k8s-api-objects, k8s-certificates-pki, k8s-crd, k8s-gateway-api, k8s-pod-probes, k8s-project-structure, k8s-service-types, kubernetes-ingress, latency-bandwidth-throughput, layer-link-ethernet-arp, layered-architecture, local-custom-domain, network-layers-overview, network-monitoring, network-troubleshooting-by-layer, networking-essentials-map, nginx-basics, nginx-https-performance, nginx-reverse-proxy, osi-in-practice, packet-capture-tcpdump, packet-encapsulation, ports-and-sockets, proxy-reverse-proxy, reverse-proxy-lb-api-gateway, tcp-connection-lifecycle, timeouts, upper-layers-session-presentation-app, vpc-basics, vpn-ipsec-wireguard, waf, webhooks, youtube-url-to-video

#### `youtube-url-to-video` — youtube.com을 입력하고 영상이 나오기까지

- 요약: 같은 DNS·TLS·HTTP라도 서비스가 커지면 무엇이 달라지는지 따라간다. 가까운 엣지를 고르는 DNS, 엣지에서 끝나는 TLS와 두 번째 방문의 QUIC, 껍데기 HTML과 API, 다른 호스트에서 Range 요청으로 오는 영상 조각과 화질 선택을 로컬 데모로 재고, 영상만 안 나올 때와 페이지가 안 뜰 때를 이름별로 나눠 본다.
- 태그: Network, HTTP, Browser, CDN, System Design
- 키워드: Range 요청, 206 Partial Content, 미디어 전용 호스트
- 길이: 486줄
- 소제목: 이 글에서 직접 잰 것과 못 잰 것 / 주소창이 https 주소를 만들기까지 / 이름 하나에 답이 여러 개 / 엣지에서 TLS가 끝나고 안쪽으로 넘어간다 / 두 번째 방문은 QUIC으로 간다 / HTML은 껍데기이고 내용은 API로 온다 / 영상은 다른 이름에서 조각으로 온다 / 화질은 처리량과 버퍼가 같이 정한다 / 화질 고르는 함수 직접 짜 보기 / 영상만 안 나올 때와 페이지가 안 뜰 때 / 큰 서비스가 바꾸는 것 / 면접에서 나올 만한 질문
- 직접 링크 →: what-happens-google-com, first-page-from-power-on, cdn-edge-anycast, reverse-proxy-lb-api-gateway, http-versions, udp-and-quic, https-tls, rendering-csr-spa, hydration, sd-video-streaming-cost, cors, network-troubleshooting-by-layer, packet-capture-tcpdump
- 키워드 백링크 →: sd-video-upload-transcoding, sd-multi-datacenter, sd-start-single-server, http-status-codes, dns, authn-vs-authz, ipv6-basics
- 이 글로 오는 글 ←: sd-music-streaming, upper-layers-session-presentation-app

### Programming › Network › Cloud Networking (`programming/network/cloud`)

#### `cdn-edge-anycast` — CDN 엣지와 애니캐스트: 같은 IP가 가까운 곳에서 답하는 법

- 요약: 같은 IP가 서울과 도쿄에서 동시에 답하는 애니캐스트와, BGP가 거리 대신 경로로 엣지를 고르는 과정을 본다. 경로가 바뀔 때 TCP가 끊기는 모습, DNS 기반 선택과의 차이, 오리진 실드와 엣지 위치 확인법까지 다룬다.
- 태그: Network, CDN, DNS, Performance, Security
- 키워드: 애니캐스트, Anycast, 엣지 PoP, 오리진 실드
- 길이: 432줄
- 소제목: 같은 IP가 여러 도시에 있다 / 라우터가 고르는 "가까움" / 리눅스로 엣지 두 곳 만들기 / 경로가 바뀌면 TCP 연결은 어디로 가나 / DNS로 엣지를 골라 주는 방식 / 엣지에서 오리진까지 한 번 더 모은다 / 엣지 위치를 확인하는 법 / CDN 앞단에서 흔히 하는 실수 / 같은 번호, 가까운 지점 / 면접에서 나올 만한 질문
- 직접 링크 →: http-caching-cdn, load-balancing-algorithms, dns, security-groups-nacl, proxy-reverse-proxy
- 키워드 백링크 →: osi-in-practice, realtime-communication, http-versions, ddos-protection
- 이 글로 오는 글 ←: bloom-filter, cache-invalidation, caching-concepts-map, ddos-protection, devops-networking-roadmap, dns, edge-caching, high-availability, http-caching-cdn, latency-bandwidth-throughput, load-balancer-basics, multi-region, networking-essentials-map, sd-cache-and-cdn-tier, sd-multi-datacenter, sd-video-streaming-cost, sd-video-upload-transcoding, system-design-concepts-map, what-happens-google-com, youtube-url-to-video

#### `security-groups-nacl` — 보안 그룹과 네트워크 ACL: 기억하는 방화벽과 잊는 방화벽

- 요약: NACL에 80번만 열었더니 사이트가 막히고, 보안 그룹 규칙을 지웠는데 세션이 살아 있는 이유를 상태 기억 여부로 푼다. 임시 포트, 번호순 평가, 보안 그룹 참조, 연결 추적 한도와 흐름 로그로 막힌 곳 찾기까지 다룬다.
- 태그: Network, AWS, Security, Firewall, Linux
- 키워드: 보안 그룹, 네트워크 ACL, NACL
- 길이: 511줄
- 소제목: 두 방화벽이 서 있는 자리 / 보안 그룹은 연결을 기억한다 / NACL은 패킷 하나하나를 본다 / 응답 패킷은 포트가 다르다 / 규칙을 지웠는데 연결이 살아 있다 / 어디서 막혔는지 확인하기 / 무엇을 어디에 걸까 / 두 장면을 다시 보면 / 면접에서 나올 만한 질문
- 직접 링크 →: vpc-basics, iptables-basics, network-flow-logs, terraform-network-iac, vpc-peering-transit-privatelink
- 키워드 백링크 →: vpc-subnets-route-tables, ports-and-sockets, dhcp, layer-ip-routing-icmp, postgres-getting-started, udp-and-quic, dns
- 이 글로 오는 글 ←: ansible-network-automation, authn-vs-authz, cdn-edge-anycast, ci-cd-basics, clock-skew, curl-for-debugging, ddos-protection, devops-networking-roadmap, docker-network-drivers, eks-cluster-basics, failover, first-page-from-power-on, iac-basics, ids-ips, iptables-basics, ipv6-basics, k8s-cni-pod-network, k8s-deploy-pipeline-eks, k8s-node-autoscaling-karpenter, k8s-project-structure, k8s-service-types, kubectl-essentials, layer-ip-addressing, layer-ip-routing-icmp, layer-mtu-fragmentation, load-balancer-basics, nat-traversal, network-config-cicd, network-flow-logs, network-layers-overview, network-partitions, network-troubleshooting-by-layer, networking-essentials-map, nginx-https-performance, osi-in-practice, ports-and-sockets, postgres-connections-pg-hba, proxy-reverse-proxy, reverse-proxy-lb-api-gateway, sd-split-web-and-db, sdn-vxlan-overlay, ssrf, tcp-connection-lifecycle, terraform-basics, terraform-modules-tfvars, terraform-network-iac, udp-and-quic, vpc-basics, vpc-peering-transit-privatelink, vpc-subnets-route-tables, waf, zero-trust-architecture

#### `vpc-basics` — VPC 기본: 클라우드 안에 빌린 내 사설망

- 요약: 인스턴스 안에 공인 IP가 보이지 않는 이유와 프라이빗 서버에서 apt가 멈추는 이유를 VPC의 부품으로 푼다. 리눅스 네임스페이스로 VPC를 흉내 내 IGW의 1:1 NAT, 예약 주소, 메타데이터 보안까지 따라간다.
- 태그: Network, AWS, Cloud, Linux, DevOps
- 키워드: VPC, 인터넷 게이트웨이, 가용 영역
- 길이: 523줄
- 소제목: 남의 건물 안에 내 층을 하나 빌린다 / 리전, 가용 영역, 서브넷의 포함 관계 / VPC를 이루는 부품 / 주소 다섯 개는 처음부터 내 것이 아니다 / 공인 IP는 인스턴스 안에 없다 / 리눅스 네임스페이스로 VPC 하나 만들기 / 패킷 하나가 VPC를 지나는 길 / VPC끼리는 같은 대역을 써도 섞이지 않는다 / VPC 안의 DNS와 메타데이터 / 기본 VPC를 그대로 쓰면 생기는 일 / 현장에서 VPC 때문에 막히는 순간 / VPC를 몇 개로 나눌까 / 다시 처음 장면으로 / 면접에서 나올 만한 질문
- 직접 링크 →: vpc-subnets-route-tables, vpc-peering-transit-privatelink, security-groups-nacl, sdn-vxlan-overlay, layer-ip-addressing, iptables-nat, terraform-network-iac, network-flow-logs
- 키워드 백링크 →: layer-ip-routing-icmp, terraform-basics, iptables-basics, ipv6-basics, ssrf, layer-link-ethernet-arp, what-happens-google-com, dhcp, high-availability, eks-cluster-basics, dns
- 이 글로 오는 글 ←: ansible-network-automation, api-gateway-use-cases, autoscaling, chaos-engineering, cloud-cost-optimization, cold-starts, connection-pool, consistent-hashing, ddos-protection, devops-networking-roadmap, dhcp, docker-network-drivers, eks-cluster-basics, encryption-at-rest, encryption-in-transit, failover, health-checks, high-availability, iac-basics, ids-ips, k8s-cni-pod-network, k8s-deploy-pipeline-eks, k8s-node-autoscaling-karpenter, k8s-project-structure, k8s-pv-pvc, k8s-service-types, layer-ip-addressing, layer-link-ethernet-arp, layer-mtu-fragmentation, monitoring-basics, n-plus-one-queries, network-config-cicd, network-flow-logs, network-layers-overview, packet-encapsulation, redis-cluster, reverse-proxy-lb-api-gateway, router-vs-switch, sd-kv-store-partition-replication, sd-mq-replication, sd-multi-datacenter, sd-object-storage-durability, sd-split-web-and-db, sdn-vxlan-overlay, security-groups-nacl, ssrf, system-design-concepts-map, terraform-basics, terraform-modules-tfvars, terraform-network-iac, vlan-basics, vpc-peering-transit-privatelink, vpc-subnets-route-tables, waf, webhooks, zero-trust-architecture

#### `vpc-peering-transit-privatelink` — VPC 잇기: 피어링, Transit Gateway, PrivateLink

- 요약: 피어링이 전이되지 않는 이유와 대역이 겹치면 잇지 못하는 이유를 네임스페이스로 재현하고, Transit Gateway 라우트 테이블로 망을 나누는 법과 겹치는 VPC 사이에 서비스 하나만 내놓는 PrivateLink를 비교한다.
- 태그: Network, AWS, Cloud, Architecture, DevOps
- 키워드: VPC 피어링, Transit Gateway, PrivateLink, 인터페이스 엔드포인트
- 길이: 539줄
- 소제목: 다리 하나에 VPC 둘: 피어링 / 친구의 친구는 친구가 아니다 / 대역이 겹치면 다리를 놓을 자리가 없다 / VPC가 많아지면 다리 대신 허브: Transit Gateway / 망을 잇지 않고 서비스 하나만 내놓기: PrivateLink / 셋 중 무엇을 고르나 / 연결했는데 안 통할 때 보는 순서 / 다시 처음 장면으로 / 면접에서 나올 만한 질문
- 직접 링크 →: vpc-basics, vpc-subnets-route-tables, service-mesh, security-groups-nacl, network-flow-logs
- 키워드 백링크 →: db-sharding, ports-and-sockets, layer-ip-addressing, iptables-nat, github-actions-docker-ecr, dns
- 이 글로 오는 글 ←: cloud-cost-optimization, devops-networking-roadmap, layer-ip-addressing, layer-link-ethernet-arp, network-layers-overview, security-groups-nacl, terraform-network-iac, vpc-basics, vpc-subnets-route-tables

#### `vpc-subnets-route-tables` — VPC 서브넷과 라우트 테이블: 퍼블릭과 프라이빗을 가르는 한 줄

- 요약: 서브넷의 성격을 정하는 라우트 테이블 연결과 최장 프리픽스 일치, NAT 게이트웨이를 지나며 주소가 두 번 바뀌는 과정을 본다. blackhole 경로, AZ별 NAT, 포트 한도와 유휴 타임아웃, 게이트웨이 엔드포인트까지 다룬다.
- 태그: Network, AWS, Cloud, Linux, Troubleshooting
- 키워드: 퍼블릭 서브넷, 프라이빗 서브넷, NAT 게이트웨이, 게이트웨이 엔드포인트
- 길이: 477줄
- 소제목: 서브넷의 성격은 라우트 테이블이 정한다 / 경로 한 줄 뜯어보기 / 여러 줄이 맞으면 가장 구체적인 줄이 이긴다 / 리눅스로 서브넷마다 다른 라우트 테이블 만들기 / NAT 게이트웨이를 지나며 주소가 두 번 바뀐다 / NAT 게이트웨이는 한 AZ에만 산다 / 가리키던 대상이 사라지면 blackhole이 된다 / 프라이빗 테이블을 IGW로 바꾸면 / NAT 게이트웨이에서 터지는 것들 / 서브넷을 몇 개로, 얼마나 크게 나눌까 / 사고 두 개를 다시 보면 / 면접에서 나올 만한 질문
- 직접 링크 →: vpc-basics, layer-ip-routing-icmp, security-groups-nacl, iptables-nat, connection-pool, vpc-peering-transit-privatelink, k8s-cni-pod-network
- 키워드 백링크 →: browser-fetch, db-type-key-value, iptables-basics, redis-basics, ipv6-basics, layer-ip-addressing, realtime-communication, github-actions-docker-ecr, eks-cluster-basics
- 이 글로 오는 글 ←: cloud-cost-optimization, devops-networking-roadmap, eks-cluster-basics, ids-ips, iptables-nat, k8s-kube-proxy-modes, k8s-project-structure, layer-ip-addressing, layer-ip-routing-icmp, load-balancer-basics, nat-traversal, network-config-cicd, network-flow-logs, network-layers-overview, networking-essentials-map, ports-and-sockets, router-vs-switch, sd-split-web-and-db, security-groups-nacl, tcp-connection-lifecycle, terraform-network-iac, vpc-basics, vpc-peering-transit-privatelink

### Programming › Network › HTTP (`programming/network/http`)

#### `http-message` — HTTP 메시지는 어떻게 생겼나

- 요약: HTTP 메시지는 첫 줄, 헤더, 빈 줄, 본문으로 된 텍스트다. Host, Content-Type, Content-Length와 chunked, 콘텐츠 협상과 압축, 본문 형식까지 헤더 한 줄이 무엇을 결정하는지 curl로 뜯어본다.
- 태그: HTTP, Network, Browser
- 키워드: 콘텐츠 협상, Transfer-Encoding, Accept-Encoding, multipart/form-data, 요청 스머글링
- 길이: 564줄
- 소제목: curl로 날것의 메시지를 본다 / 텍스트 몇 줄이 전부다 / 응답도 같은 모양이다 / Host가 없으면 400이다 / 본문이 어디서 끝나는지 알려 주기 / 연결을 끊을지 말지 / 같은 주소, 다른 표현 / 압축은 Accept-Encoding으로 고른다 / 본문 형식은 Content-Type이 말한다 / 헤더 이름과 크기에 관한 규칙 / HTTP/2에서는 모양이 바뀐다 / 헤더 한 줄이 장애가 되는 순간 / 다시 415로 돌아가서 / 면접에서 나올 만한 질문
- 직접 링크 →: what-happens-google-com, http-status-codes, http-methods, http-caching-cdn, cookie-session-login, token-login, http-versions, packet-capture-tcpdump, network-troubleshooting-by-layer
- 키워드 백링크 →: https-tls, html-form-http, reverse-proxy-lb-api-gateway, kubernetes-ingress, base64, first-page-from-power-on, db-modeling-normalization
- 이 글로 오는 글 ←: backend-engineer-roadmap, curl-for-debugging, first-page-from-power-on, html-form-http, http-caching-cdn, http-methods, http-status-codes, http-versions, json-crud-http, networking-essentials-map, rest-api-design, server-sent-events, upper-layers-session-presentation-app

#### `http-methods` — HTTP 메서드와 안전성·멱등성

- 요약: GET, POST, PUT, PATCH, DELETE는 서버와 맺는 약속이다. 안전과 멱등의 정확한 뜻, PUT과 PATCH의 차이, POST를 다시 보내면 생기는 일과 GET으로 상태를 바꾸면 안 되는 이유를 정리한다.
- 태그: HTTP, REST, Network
- 키워드: 멱등성, 안전한 메서드, JSON Merge Patch, JSON Patch, PUT과 PATCH
- 길이: 522줄
- 소제목: 메서드는 서버와 맺는 약속이다 / 안전, 멱등, 캐시 가능 / 같은 요청을 두 번 보내면 / PUT은 통째로, PATCH는 일부만 / POST를 다시 보내면 주문이 두 개 / GET에 본문을 싣지 않는 이유 / HEAD와 OPTIONS는 묻기만 한다 / 405와 Allow, 대소문자 / 폼은 GET과 POST만 안다 / CONNECT와 TRACE / 스펙대로 하지 않는 서버들 / 프록시는 멱등성을 보고 재시도를 고른다 / 다시 메일 링크로 / 면접에서 나올 만한 질문
- 직접 링크 →: http-message, http-caching-cdn, resilience-patterns, cors, cookie-session-login, http-status-codes, nginx-reverse-proxy
- 키워드 백링크 →: graphql-basics, json-crud-http, elasticsearch-inverted-index, gateway, csrf, js-pure-functions, client-data-cache, what-happens-google-com
- 이 글로 오는 글 ←: acid-transactions, acid-vs-base, ansible-network-automation, api-gateway-use-cases, backend-engineer-roadmap, batch-processing, browser-fetch, cqrs, crdt, csrf, curl-for-debugging, dead-letter-queue, distributed-lock, fault-tolerance, gateway, html-form-http, http-message, http-status-codes, http-versions, https-tls, iac-basics, idempotency-key, js-pure-functions, json-crud-http, k8s-controllers-reconcile, k8s-job-cronjob, message-delivery-semantics, message-queue-basics, microservices, networking-essentials-map, nginx-reverse-proxy, pattern-builder, pattern-decorator, race-conditions, resilience-patterns, rest-api-design, retries, sd-ad-click-exactly-once, sd-hotel-double-booking, sd-hotel-inventory-scaling, sd-news-feed-publishing, sd-notification-reliability, sd-payment-flow, sd-payment-reliability, sd-video-upload-transcoding, sd-wallet-transfer, serverless-architecture, service-mesh, sql-interview-problems, system-design-concepts-map, system-design-study-path, tail-latency, transactional-outbox, webhooks

#### `http-status-codes` — HTTP 상태 코드 제대로 쓰기

- 요약: 상태 코드는 본문을 열어 보지 않는 캐시, 프록시, 모니터링, 재시도 로직이 읽는 유일한 신호다. 리다이렉트 다섯 종류의 차이, 401과 403, 502와 504를 누가 만드는지, 어떤 실패를 재시도할지, Problem Details로 에러 본문을 쓰는 법을 정리했다.
- 태그: HTTP, Network, Backend, API
- 키워드: 상태 코드, Problem Details, PRG 패턴, 308 Permanent Redirect
- 길이: 421줄
- 소제목: 첫 자리 숫자가 먼저다 / 최종 응답 전에 오는 1xx / 성공에도 종류가 있다 / 리다이렉트는 두 가지를 정한다 / POST 다음에는 303 / 리다이렉트가 이어지면 왕복이 쌓인다 / 4xx는 다시 보내도 같다 / 502와 504는 앱이 만들지 않는다 / access.log에서 5xx를 갈라 보기 / 다시 보내도 되는 실패 / 에러 본문은 Problem Details로 / 실패를 200으로 감싸면 / 면접에서 나올 만한 질문
- 직접 링크 →: http-message, http-methods, http-caching-cdn, gateway, nginx-reverse-proxy, network-troubleshooting-by-layer, resilience-patterns
- 키워드 백링크 →: html-form-http, client-data-cache, https-tls, rest-api-design, graphql-basics, proxy-reverse-proxy, token-login, sd-start-single-server, db-locking-deadlock, http-versions, osi-in-practice, what-happens-google-com, dns
- 이 글로 오는 글 ←: abort-controller, api-gateway-use-cases, api-styles-overview, api-versioning, authn-vs-authz, backend-engineer-roadmap, browser-fetch, canary-release, clean-architecture, cors, curl-for-debugging, db-type-time-series, ddd-bounded-context, devops-networking-roadmap, distributed-tracing, edge-caching, enterprise-system-integration, express-middleware, fastapi-basics, first-page-from-power-on, grafana-dashboards, graphql-basics, grpc, health-checks, hexagonal-architecture, html-form-http, http-message, http-methods, http-streaming-sse, http-versions, iam-basics, idempotency-key, integration-tests-real-db, js-promises, json-crud-http, k8s-audit-logging, k8s-gateway-api, kubernetes-ingress, layer-mtu-fragmentation, layered-architecture, linux-grep-awk-sed, mvc-pattern, network-layers-overview, network-monitoring, network-troubleshooting-by-layer, networking-essentials-map, nginx-basics, nginx-reverse-proxy, observability-basics, opensearch-cluster-operations, optimistic-locking, osi-in-practice, pattern-adapter, pattern-chain-of-responsibility, percentile-latency, production-incidents, proxy-reverse-proxy, rate-limiting-in-practice, realtime-communication, release-cutover-hypercare, rendering-csr-spa, rendering-ssr, rendering-strategies, rest-api-design, reverse-proxy-lb-api-gateway, sd-url-shortener-api-redirect, server-sent-events, service-mesh, sit-uat-testing, sli-slo, sqld-entity-attribute-relationship, streaming-ssr-suspense, system-design-concepts-map, what-happens-google-com, youtube-url-to-video

#### `http-versions` — HTTP/1.1에서 HTTP/2, HTTP/3까지

- 요약: HTTP는 버전마다 앞 버전이 남긴 기다림을 하나씩 없앴다. 파이프라이닝이 꺼진 이유부터 HTTP/2의 프레임과 HPACK, TCP 수준의 줄 막힘, QUIC의 0-RTT와 연결 이전, 개발자가 버려야 할 HTTP/1.1 시절 꼼수까지 따라간다.
- 태그: HTTP, Network, Performance, TLS
- 키워드: HTTP/2, HTTP/3, QUIC, 멀티플렉싱, HPACK, 도메인 샤딩
- 길이: 436줄
- 소제목: 요청마다 연결을 새로 맺던 HTTP/1.0 / 연결을 재사용하는 HTTP/1.1 / 텍스트를 프레임으로 쪼갠 HTTP/2 / TCP 아래에서 다시 막히는 줄 / UDP 위에 새로 만든 QUIC / 브라우저는 HTTP/3를 어떻게 알아내나 / 설정한 버전과 실제로 쓰는 버전이 다를 때 / 개발자가 바꿀 것 / 면접에서 나올 만한 질문
- 직접 링크 →: what-happens-google-com, http-message, http-status-codes, tcp-connection-lifecycle, nginx-reverse-proxy, code-splitting
- 키워드 백링크 →: https-tls, browser-fetch, http-methods, webhooks, tcp-reliability-congestion, ports-and-sockets, udp-and-quic, dns
- 이 글로 오는 글 ←: api-styles-overview, backpressure, base64, browser-storage, cdn-edge-anycast, code-splitting, curl-for-debugging, dns, grpc, hosts-file, html-form-http, http-caching-cdn, http-message, http-status-codes, http-streaming-sse, https-tls, iptables-nat, js-es-modules, k8s-service-types, latency-bandwidth-throughput, layer-mtu-fragmentation, load-balancer-basics, load-balancing-algorithms, local-custom-domain, long-polling, microservices, network-layers-overview, networking-essentials-map, nginx-https-performance, osi-in-practice, packet-encapsulation, pattern-proxy, proxy-reverse-proxy, realtime-communication, rest-api-design, reverse-proxy-lb-api-gateway, sd-notification-system, server-sent-events, streaming-ssr-suspense, tcp-reliability-congestion, udp-and-quic, upper-layers-session-presentation-app, what-happens-google-com, youtube-url-to-video

#### `json-crud-http` — JSON으로 데이터 주고받기: 조회·생성·수정·삭제 끝까지

- 요약: 할 일 자원 하나를 curl과 fetch로 만들고 읽고 고치고 지우면서 실제 요청과 응답을 본다. JSON.stringify가 바꾸는 값, 큰 정수 ID, 201과 Location, PUT과 Merge Patch, 415·422·412, 204에서 터지는 res.json()까지 다룬다.
- 태그: HTTP, REST, API, JSON, JavaScript
- 키워드: JSON.stringify, JSON.parse, reviver, 415 Unsupported Media Type
- 길이: 804줄
- 소제목: JSON은 자바스크립트 객체가 아니다 / stringify가 조용히 바꾸는 값 / 날짜는 문자열로 와서 문자열로 남는다 / 큰 숫자 ID는 문자열로 보낸다 / 할 일 하나의 일생 / 목록은 감싸서 준다 / 하나를 달라고 했는데 없으면 404 / 만들 때는 201과 Location / PUT은 빠진 필드를 기본값으로 만든다 / PATCH에서 null은 지우라는 뜻이다 / 지운 걸 또 지우면 / 형식이 다르면 415 / 문법은 400, 내용은 422 / 동시에 고치면 412 / res.json()이 터지는 응답들 / 폼으로 보낼 때와 무엇이 다른가 / 다시 빈 req.body로 / 면접에서 나올 만한 질문
- 직접 링크 →: http-methods, http-message, browser-fetch, rest-api-design, http-status-codes, html-form-http
- 키워드 백링크 →: cors, js-prototype-chain, optimistic-locking, loading-patterns, upper-layers-session-presentation-app, api-versioning, client-data-cache, resilience-patterns, http-caching-cdn
- 이 글로 오는 글 ←: backend-engineer-roadmap, browser-fetch, browser-storage, cors, db-modeling-normalization, http-methods, http-streaming-sse, js-callback-hell, js-memoization, js-object-methods, js-prototype-chain, js-pure-functions, js-truthy-falsy-typeof, k8s-serviceaccount-tokens, pattern-prototype, pattern-proxy, pattern-template-method, postgres-functions-triggers, realtime-communication, sd-unique-id-generator, sql-views-materialized, sqld-entity-attribute-relationship, sqld-rollup-cube-grouping-sets, terraform-basics, upper-layers-session-presentation-app, xss

### Programming › Network › Infrastructure (`programming/network/infrastructure`)

#### `cilium-ebpf` — Cilium과 eBPF: 규칙 대신 커널 안의 프로그램과 맵

- 요약: 검증기, 맵, XDP·tc 훅을 작은 eBPF 프로그램을 직접 커널에 올려 확인하고, 그 위에서 Cilium이 소켓 단계에서 Service를 풀어 kube-proxy를 대신하는 법, identity로 정책을 판정하는 법, Hubble로 흐름을 보는 법을 정리한다.
- 태그: Kubernetes, Network, Linux, Firewall, Performance
- 키워드: eBPF, Cilium, XDP, Hubble
- 길이: 622줄
- 소제목: 커널에 작은 프로그램을 끼워 넣는다 / 검증기가 먼저 읽는다 / 맵에 상태를 두고 바깥에서 읽는다 / 패킷이 지나는 길목: XDP, tc, 소켓 / Cilium은 이 길목들에 무엇을 거나 / kube-proxy 없이 Service를 푸는 법 / IP 대신 identity로 정책을 건다 / Hubble로 흐름을 본다 / 언제 Cilium을 고르나 / 현장에서 eBPF 데이터패스를 의심할 때 / 규칙 목록에서 프로그램과 맵으로 / 면접에서 나올 만한 질문
- 직접 링크 →: k8s-kube-proxy-modes, k8s-network-policy, service-mesh, k8s-cni-pod-network
- 키워드 백링크 →: k8s-service-types, iptables-nat, k8s-daemonset, linux-namespaces-cgroups, iptables-basics, k8s-coredns, packet-capture-tcpdump, db-type-key-value, sdn-vxlan-overlay, osi-in-practice, ddos-protection, layer-ip-routing-icmp, https-tls, udp-and-quic, layer-mtu-fragmentation, dns
- 이 글로 오는 글 ←: ddos-protection, devops-networking-roadmap, gateway, iptables-nat, k8s-architecture, k8s-certifications, k8s-cni-pod-network, k8s-cri-cni-csi, k8s-daemonset, k8s-kube-proxy-modes, k8s-learning-roadmap, k8s-namespace, k8s-network-policy, k8s-service-types, local-k8s-kind-minikube, sdn-vxlan-overlay, service-mesh

#### `load-balancer-basics` — 로드 밸런서 기본: 헬스 체크, 드레이닝, 세션 고정, 이중화

- 요약: VIP로 받은 요청을 서버로 넘기는 길(프록시·NAT·DSR), 수동·능동 헬스 체크의 판정 시간, 드레이닝으로 배포 중 502를 없애는 순서, 쿠키 세션 고정의 함정, VRRP로 로드 밸런서 자신을 이중화하는 법을 실제 출력으로 따라간다.
- 태그: Network, Load Balancer, DevOps, Linux
- 키워드: 커넥션 드레이닝, Direct Server Return, VRRP, sticky session, 능동 헬스 체크
- 길이: 554줄
- 소제목: 로드 밸런서가 맡은 네 가지 일 / DNS로 나누면 안 되나 / 패킷이 서버까지 가는 길 / 앞에서 받은 연결과 뒤로 여는 연결 / 살아 있는지 묻는 법: 수동과 능동 / 서버를 뺄 때는 드레이닝부터 / 같은 손님을 같은 서버로 / 로드 밸런서가 죽으면 / 현장에서 로드 밸런서를 의심하는 순간 / 고르는 것보다 빼고 넣는 것이 어렵다 / 면접에서 나올 만한 질문
- 직접 링크 →: load-balancing-algorithms, nginx-reverse-proxy, osi-in-practice, dns, proxy-reverse-proxy, ports-and-sockets, tcp-connection-lifecycle, health-checks, k8s-pod-probes, cdn-edge-anycast
- 키워드 백링크 →: k8s-pod-lifecycle, iptables-nat, vpc-subnets-route-tables, docker-container-basics, realtime-communication, browser-fetch, reverse-proxy-lb-api-gateway, sd-start-single-server, layer-link-ethernet-arp, http-versions, rolling-deployment, security-groups-nacl, redis-basics, client-data-cache, grpc
- 이 글로 오는 글 ←: api-scaling-ladder, circuit-breaker, cookie-session-login, devops-networking-roadmap, failover, health-checks, high-availability, layer-link-ethernet-arp, load-balancing-algorithms, networking-essentials-map, nginx-reverse-proxy, nodejs-server-runtime, reverse-proxy-lb-api-gateway, rolling-deployment, scaling-horizontal-vertical, sd-load-balancer-stateless, sd-metrics-collection, service-discovery, system-design-concepts-map, websocket-deep-dive

#### `load-balancing-algorithms` — 로드 밸런싱 알고리즘: 라운드 로빈부터 P2C, 일관 해싱까지

- 요약: 같은 요청 2만 개에 라운드 로빈, 가중치, least-conn, IP 해시, P2C를 돌려 서버별 몫과 p99를 비교했다. 느린 서버 앞에 쌓이는 줄, 여러 로드 밸런서가 한 서버로 몰리는 현상, 해시가 서버 증감에 흔들리는 정도를 숫자로 보고 언제 무엇을 고를지 정리한다.
- 태그: Network, Load Balancer, Algorithm, Performance
- 키워드: Power of Two Choices, P2C, 가중 라운드 로빈, least request
- 길이: 404줄
- 소제목: 실험 무대: 서버 셋, 요청 2만 개 / 차례대로 돌리면 느린 서버가 무너진다 / 지금 덜 바쁜 서버로 / 모두가 같은 서버를 고를 때 / 둘만 뽑아서 비교하기 / 같은 키는 같은 서버로 / 응답 시간을 보는 방법들 / 무엇을 고를까 / 분배가 이상할 때 확인하는 순서 / 같은 숫자, 다른 부하 / 면접에서 나올 만한 질문
- 직접 링크 →: load-balancer-basics, nginx-reverse-proxy, consistent-hashing, osi-in-practice
- 키워드 백링크 →: iptables-nat, realtime-communication, iptables-basics, service-mesh, http-versions, nat-traversal, cookie-session-login, grpc, caching-strategies
- 이 글로 오는 글 ←: api-gateway-use-cases, canary-release, cdn-edge-anycast, consistent-hashing, devops-networking-roadmap, grpc, latency-bandwidth-throughput, load-balancer-basics, networking-essentials-map, nginx-reverse-proxy, pattern-strategy, reverse-proxy-lb-api-gateway, sd-load-balancer-stateless, system-design-concepts-map

#### `nat-traversal` — NAT traversal: STUN, 홀 펀칭, TURN, ICE

- 요약: 화상 통화가 LTE 쪽에서만 붙지 않는 이유를 NAT의 매핑과 필터링으로 풀고, STUN으로 바깥 주소를 알아내 UDP 홀 펀칭으로 길을 뚫는 과정을 직접 재현한다. symmetric NAT에서 TURN이 중계하는 흐름, ICE 후보 우선순위, CGNAT과 NAT 포트 고갈까지 다룬다.
- 태그: Network, TCP/IP, Linux, Troubleshooting, Security
- 키워드: NAT traversal, 홀 펀칭, STUN, TURN 서버, CGNAT
- 길이: 484줄
- 소제목: NAT가 먼저 걸어오는 연결을 막는 이유 / 매핑과 필터링, 두 가지로 성격이 갈린다 / STUN으로 내 바깥 주소를 알아낸다 / 동시에 보내서 길을 뚫는다 / 길이 안 뚫리면 TURN이 대신 나른다 / ICE는 후보를 모아 되는 길을 고른다 / 주소 하나를 수천 명이 나눌 때 / 연결이 안 될 때 어디서부터 보나 / NAT를 넘는다는 것 / 면접에서 나올 만한 질문
- 직접 링크 →: iptables-nat, udp-and-quic, vpc-subnets-route-tables, router-vs-switch
- 키워드 백링크 →: iptables-basics, security-groups-nacl, sql-batch-timeout-pool
- 이 글로 오는 글 ←: iptables-nat, ipv6-basics, layer-ip-addressing, load-balancing-algorithms, networking-essentials-map, rate-limiting-in-practice, router-vs-switch

#### `reverse-proxy-lb-api-gateway` — 리버스 프록시, 로드 밸런서, API 게이트웨이를 한 줄로 세우기

- 요약: nginx, HAProxy, 직접 짠 게이트웨이를 한 컴퓨터에 겹쳐 띄우고 같은 요청이 층마다 어떻게 바뀌고 어디서 막히는지 본다. 실제 서비스에서 층을 쌓고 고르는 기준과, 502·503·504·429를 만든 층을 가려내는 법까지 다룬다.
- 태그: Network, Load Balancer, Nginx, API, Architecture
- 키워드: TLS 종료, AWS ALB, Kong
- 길이: 694줄
- 소제목: 컴퓨터 한 대에 세 겹을 쌓는다 / 앱만 있을 때 앱이 보는 것 / 리버스 프록시는 TLS를 벗기고 손님 정보를 적어 준다 / 로드 밸런서는 같은 서비스 여럿 중 하나를 고른다 / 게이트웨이는 누가 부르는지를 본다 / 요청 ID 하나로 네 층의 로그를 꿴다 / nginx 한 대로 세 역할을 다 해 보면 / TLS를 어디서 벗길지 / 실제 서비스에서는 이렇게 겹친다 / 관리형이냐 직접 띄우냐 / 상태 코드로 범인 찾기 / 한 홉에 얼마나 드나 / 게이트웨이의 판단을 손으로 따라가기 / 박스 이름보다 맡긴 일 / 면접에서 나올 만한 질문
- 직접 링크 →: proxy-reverse-proxy, gateway, nginx-reverse-proxy, load-balancer-basics, load-balancing-algorithms, rate-limiting-in-practice, https-tls, distributed-tracing, kubernetes-ingress, k8s-gateway-api, retries, tail-latency, rate-limiting-algorithms
- 키워드 백링크 →: osi-in-practice, rest-api-design, service-mesh, http-versions, security-groups-nacl, vpc-basics, redis-basics, http-status-codes, what-happens-google-com, high-availability, grpc, first-page-from-power-on, udp-and-quic, token-login
- 이 글로 오는 글 ←: api-gateway-use-cases, api-scaling-ladder, blue-green-deployment, devops-networking-roadmap, encryption-in-transit, gateway, health-checks, high-availability, http-message, https-tls, ids-ips, iptables-nat, kubernetes-ingress, load-balancer-basics, long-polling, network-layers-overview, networking-essentials-map, nginx-reverse-proxy, osi-in-practice, proxy-reverse-proxy, realtime-communication, rolling-deployment, service-discovery, tcp-connection-lifecycle, timeouts, websocket-deep-dive, youtube-url-to-video

#### `router-vs-switch` — 라우터와 스위치: 봉투를 뜯느냐 마느냐

- 요약: 같은 실습 망에 리눅스 브리지와 라우터를 세워 프레임이 지나갈 때 무엇이 바뀌고 무엇이 그대로인지 본다. L2 고리가 만드는 브로드캐스트 스톰과 TTL로 끝나는 L3 고리, STP의 차단과 수렴 시간, L3 스위치의 자리까지 다룬다.
- 태그: Network, TCP/IP, Linux, Troubleshooting
- 키워드: 브로드캐스트 스톰, STP, L3 스위치, 스패닝 트리
- 길이: 437줄
- 소제목: 실습 망 하나에 두 장비 / 스위치는 봉투를 뜯지 않는다 / 라우터는 봉투를 갈아 끼운다 / 브로드캐스트는 라우터 앞에서 멈춘다 / 고리가 생기면 갈리는 운명 / 고리를 끊어 두는 STP / L3 스위치는 어느 쪽인가 / 어느 쪽이 문제인지 가르는 순서 / 봉투를 뜯느냐 마느냐 / 면접에서 나올 만한 질문
- 직접 링크 →: layer-link-ethernet-arp, layer-ip-routing-icmp, vlan-basics, sdn-vxlan-overlay, iptables-nat, docker-network-drivers, vpc-subnets-route-tables, nat-traversal
- 키워드 백링크 →: message-delivery-semantics, packet-capture-tcpdump, sd-start-single-server, dhcp, ipv6-basics, vpc-basics, udp-and-quic, dns
- 이 글로 오는 글 ←: dhcp, layer-link-ethernet-arp, nat-traversal, network-layers-overview, networking-essentials-map, sdn-vxlan-overlay, vlan-basics

#### `sdn-vxlan-overlay` — SDN과 VXLAN 오버레이: 물리망 위에 논리망 얹기

- 요약: Pod IP가 노드 캡처에 안 보이는 이유를 VXLAN 캡슐화로 푼다. VTEP과 FDB, flood-and-learn과 EVPN, 제어 평면을 떼어 낸 SDN, 조용히 사라지는 큰 패킷과 ECMP까지 실제 캡처로 본다.
- 태그: Network, Kubernetes, Linux, Troubleshooting, VXLAN
- 키워드: VXLAN, VTEP, SDN, 언더레이
- 길이: 381줄
- 소제목: 랙을 넘어가면 VLAN이 버겁다 / 50바이트를 덧씌운다 / 직접 오버레이를 만든다 / MAC이 어느 호스트 뒤에 있는지 누가 아나 / 컨트롤러가 망을 그린다 / 오버레이가 조용히 패킷을 버릴 때 / 언더레이는 출발지 포트를 보고 길을 나눈다 / VXLAN 말고 다른 선택지 / 오버레이에서 장애를 좁히는 법 / 상자 속의 상자, 그리고 그걸 그리는 손 / 면접에서 나올 만한 질문
- 직접 링크 →: vlan-basics, layer-mtu-fragmentation, vpn-ipsec-wireguard, vpc-basics, k8s-cni-pod-network
- 키워드 백링크 →: eks-cluster-basics, packet-capture-tcpdump, layer-link-ethernet-arp, cilium-ebpf, security-groups-nacl, ipv6-basics, layer-ip-routing-icmp, router-vs-switch, udp-and-quic
- 이 글로 오는 글 ←: cilium-ebpf, devops-networking-roadmap, docker-network-drivers, docker-network-volume, k8s-cni-pod-network, k8s-cri-cni-csi, k8s-learning-roadmap, layer-mtu-fragmentation, packet-encapsulation, router-vs-switch, udp-and-quic, vlan-basics, vpc-basics, vpn-ipsec-wireguard

#### `vlan-basics` — VLAN: 스위치 하나를 여러 망으로 나누기

- 요약: 같은 대역인데 ping이 안 되는 이유를 802.1Q 태그와 액세스·트렁크 포트로 푼다. VLAN 사이 라우팅, 네이티브 VLAN과 VLAN 호핑, 리눅스 VLAN 인터페이스와 현장 점검 순서까지 다룬다.
- 태그: Network, TCP/IP, Linux, Security, Troubleshooting, VLAN
- 키워드: VLAN, 802.1Q, 트렁크 포트, 네이티브 VLAN
- 길이: 459줄
- 소제목: 스위치 하나에 망 하나면 생기는 일 / 4바이트 태그 한 장 / 액세스 포트와 트렁크 포트 / 직접 만들어 본 VLAN 스위치 / VLAN 사이를 잇는 라우터 / 태그 없는 프레임은 어느 VLAN인가 / 리눅스 서버에서 VLAN 다루기 / 4094개로 모자랄 때 / 현장에서 VLAN을 의심하는 순간 / 같은 스위치, 다른 망 / 면접에서 나올 만한 질문
- 직접 링크 →: layer-link-ethernet-arp, sdn-vxlan-overlay, vpc-basics, layer-mtu-fragmentation
- 키워드 백링크 →: packet-capture-tcpdump, router-vs-switch, dhcp, layer-ip-routing-icmp, udp-and-quic, dns
- 이 글로 오는 글 ←: ansible-network-automation, devops-networking-roadmap, dhcp, docker-network-drivers, ipv6-basics, layer-link-ethernet-arp, network-layers-overview, networking-essentials-map, packet-encapsulation, router-vs-switch, sdn-vxlan-overlay

#### `vpn-ipsec-wireguard` — VPN: IPsec과 WireGuard로 터널 만들기

- 요약: 패킷을 암호화해 다른 패킷 안에 넣는 VPN을 IPsec의 IKEv2·ESP와 WireGuard의 핸드셰이크·AllowedIPs로 따라간다. NO_PROPOSAL_CHOSEN 같은 실패 메시지, NAT-T, 스플릿 터널과 MTU 문제까지 다룬다.
- 태그: Network, Security, Linux, Troubleshooting, VPN
- 키워드: IPsec, WireGuard, IKEv2, AllowedIPs
- 길이: 523줄
- 소제목: 남의 길 위에 내 전용 통로를 낸다 / 패킷 안에 패킷을 넣는다 / IPsec은 두 단계로 나뉜다 / IPsec이 안 붙을 때 나오는 세 가지 메시지 / NAT를 지나는 법 / WireGuard는 설정할 게 거의 없다 / AllowedIPs가 라우팅과 방화벽을 겸한다 / 무엇을 터널로 보낼 것인가 / 무엇을 고를까 / 현장에서 VPN을 들여다보는 순서 / 결국 감싸고, 열쇠를 나누고, 무엇을 넣을지 정한다 / 면접에서 나올 만한 질문
- 직접 링크 →: layer-mtu-fragmentation, sdn-vxlan-overlay, udp-and-quic, layer-ip-routing-icmp, zero-trust-architecture
- 키워드 백링크 →: browser-fetch, webhooks, what-happens-google-com, ipv6-basics, pattern-abstract-factory, dns
- 이 글로 오는 글 ←: devops-networking-roadmap, dhcp, docker-network-drivers, layer-mtu-fragmentation, networking-essentials-map, packet-encapsulation, sdn-vxlan-overlay, udp-and-quic, zero-trust-architecture

### Programming › Network › OSI · TCP/IP (`programming/network/layers`)

#### `dhcp` — DHCP: 주소를 빌려주고 돌려받는 네 번의 대화

- 요약: 회의실에 꽂힌 공유기 하나가 층 전체 주소를 바꾼 장면에서 출발해, DORA 네 메시지와 임대의 두 시계(T1, T2), 라우터를 넘는 릴레이, 고정 예약과 풀 고갈을 실제 패킷으로 따라간다. 가짜 DHCP 서버가 이기는 이유와 DHCP 스누핑까지 다룬다.
- 태그: Network, TCP/IP, Linux, Troubleshooting, Security
- 키워드: DHCP, DHCP 릴레이, DHCP 스누핑, 임대 갱신
- 길이: 555줄
- 소제목: 주소가 없는데 어떻게 주소를 묻나 / 네 번 주고받으면 주소가 생긴다 / 한 패킷에 실린 칸들 / 반납 기한과 두 개의 시계 / 라우터를 넘지 못하는 브로드캐스트 / 같은 주소를 계속 주고 싶을 때 / 빌려줄 주소가 바닥나면 / 먼저 대답한 서버가 이긴다 / 주소가 이상할 때 보는 순서 / 회의실 공유기로 돌아가면 / 면접에서 나올 만한 질문
- 직접 링크 →: layer-ip-addressing, layer-link-ethernet-arp, packet-capture-tcpdump, vpn-ipsec-wireguard, k8s-cni-pod-network
- 키워드 백링크 →: rendering-csr-spa, layer-ip-routing-icmp, local-custom-domain, sd-start-single-server, router-vs-switch, connection-pool, vlan-basics, vpc-basics, udp-and-quic, dns
- 이 글로 오는 글 ←: devops-networking-roadmap, docker-network-drivers, first-page-from-power-on, iptables-nat, ipv6-basics, layer-ip-addressing, layer-ip-routing-icmp, leader-election, network-flow-logs, networking-essentials-map, proxy-reverse-proxy, router-vs-switch, security-groups-nacl, udp-and-quic, vlan-basics, vpc-basics

#### `ipv6-basics` — IPv6: 주소를 스스로 만들고 이웃을 찾는 법

- 요약: DHCP 없이 생기는 IPv6 주소의 정체를 라우터 광고와 SLAAC, 중복 검사, NDP 이웃 찾기로 따라간다. 링크 로컬 게이트웨이, 듀얼 스택과 NAT64, ICMPv6를 막으면 생기는 장애까지 다룬다.
- 태그: Network, TCP/IP, Linux, Security, IPv6
- 키워드: IPv6, SLAAC, NDP, 링크 로컬 주소, NAT64
- 길이: 454줄
- 소제목: 주소가 모자라서 생긴 일 / 한 랜카드에 주소가 여러 개인 게 정상이다 / 인터페이스 ID는 MAC에서 만들 수 있다 / DHCP 없이 주소를 받는 SLAAC / ARP 대신 이웃 요청과 이웃 광고 / 기본 게이트웨이가 링크 로컬 주소인 이유 / IPv4와 섞여 사는 법 / NAT가 없으니 방화벽이 문을 지킨다 / 현장에서 IPv6가 원인일 때 / 주소가 넉넉해지면 바뀌는 것 / 면접에서 나올 만한 질문
- 직접 링크 →: layer-ip-addressing, layer-link-ethernet-arp, iptables-nat, iptables-basics, layer-mtu-fragmentation, vlan-basics
- 키워드 백링크 →: packet-capture-tcpdump, nat-traversal, security-groups-nacl, dhcp, udp-and-quic, dns
- 이 글로 오는 글 ←: clock-skew, devops-networking-roadmap, dns, docker-network-volume, eks-cluster-basics, first-page-from-power-on, hosts-file, integration-tests-real-db, iptables-basics, iptables-nat, k8s-coredns, k8s-network-policy, layer-ip-addressing, layer-ip-routing-icmp, layer-link-ethernet-arp, layer-mtu-fragmentation, network-layers-overview, networking-essentials-map, nginx-basics, packet-encapsulation, ports-and-sockets, postgres-connections-pg-hba, postgres-roles-security, proxy-reverse-proxy, rate-limiting-in-practice, router-vs-switch, sdn-vxlan-overlay, ssrf, terraform-modules-tfvars, udp-and-quic, vpc-basics, vpc-subnets-route-tables, vpn-ipsec-wireguard, webhooks, what-happens-google-com, youtube-url-to-video

#### `layer-ip-addressing` — IP 주소와 서브넷: CIDR, 사설 대역, 게이트웨이

- 요약: IP 주소를 비트로 쪼개 서브넷 마스크와 CIDR을 읽고, 같은 망인지 게이트웨이로 보낼지 정하는 계산을 해 본다. 사설·특수 대역, 서브네팅, Docker·쿠버네티스·VPC 대역이 겹칠 때 생기는 일과 IPv6 주소까지 다룬다.
- 태그: Network, TCP/IP, Docker, Kubernetes
- 키워드: CIDR, 서브넷 마스크, 사설 대역, RFC 1918
- 길이: 387줄
- 소제목: 주소 하나에 망 번호와 기기 번호가 들어 있다 / 서브넷 마스크를 비트로 보기 / 망 하나에 몇 대를 붙일 수 있나 / 같은 망이면 직접, 아니면 게이트웨이로 / 사설 대역과 특수한 주소들 / 큰 대역을 작게 나누기 / 대역이 겹치면 길이 사라진다 / IPv6 주소 읽기 / 현장에서 주소와 마주치는 순간 / 동네와 번지 / 면접에서 나올 만한 질문
- 직접 링크 →: network-layers-overview, layer-link-ethernet-arp, layer-ip-routing-icmp, iptables-nat, ports-and-sockets, ipv6-basics, proxy-reverse-proxy
- 키워드 백링크 →: vpc-peering-transit-privatelink, k8s-network-policy, docker-container-basics, vpc-subnets-route-tables, k8s-cni-pod-network, ssrf, nat-traversal, security-groups-nacl, vpc-basics, dhcp, eks-cluster-basics, dns
- 이 글로 오는 글 ←: devops-networking-roadmap, dhcp, eks-cluster-basics, first-page-from-power-on, ids-ips, ipv6-basics, k8s-certificates-pki, k8s-cni-pod-network, k8s-etcd-backup, k8s-kube-proxy-modes, k8s-learning-roadmap, k8s-project-structure, layer-ip-routing-icmp, layer-link-ethernet-arp, network-layers-overview, network-troubleshooting-by-layer, networking-essentials-map, postgres-connections-pg-hba, postgres-roles-security, proxy-reverse-proxy, ssrf, terraform-modules-tfvars, terraform-network-iac, vpc-basics, vpc-peering-transit-privatelink, vpc-subnets-route-tables, webhooks

#### `layer-ip-routing-icmp` — 라우팅과 ICMP: 패킷이 길을 찾는 법

- 요약: 라우팅 테이블을 읽고 가장 긴 프리픽스가 이기는 규칙을 직접 계산해 본다. TTL과 ICMP, traceroute와 ping이 실제로 재는 것, 별표를 읽는 법, 비대칭 경로와 ip_forward 같은 현장의 함정까지 다룬다.
- 태그: Network, TCP/IP, Linux, Troubleshooting
- 키워드: 라우팅 테이블, 최장 접두사 일치, traceroute, ICMP
- 길이: 623줄
- 소제목: 실습 망 만들기 / 라우터는 다음 한 칸만 안다 / 가장 길게 맞는 경로가 이긴다 / 패킷 하나가 두 라우터를 건너는 길 / 라우터를 켜는 스위치, ip_forward / TTL은 길을 잃은 패킷을 끝낸다 / ICMP: IP가 보내는 오류 보고서 / traceroute는 TTL을 하나씩 늘린다 / 별표를 읽는 법 / ping이 말해 주는 것과 말해 주지 않는 것 / 현장에서 경로를 의심하는 순간 / 한 칸씩 넘기는 일 / 면접에서 나올 만한 질문
- 직접 링크 →: layer-ip-addressing, network-layers-overview, layer-mtu-fragmentation, iptables-basics, dns
- 키워드 백링크 →: vpc-subnets-route-tables, docker-container-basics, layer-link-ethernet-arp, iptables-nat, security-groups-nacl, dhcp, ipv6-basics, udp-and-quic
- 이 글로 오는 글 ←: cilium-ebpf, devops-networking-roadmap, dhcp, docker-network-drivers, ds-trie, first-page-from-power-on, ids-ips, iptables-basics, k8s-cni-pod-network, k8s-kube-proxy-modes, k8s-project-structure, k8s-service-types, layer-ip-addressing, layer-link-ethernet-arp, layer-mtu-fragmentation, linux-namespaces-cgroups, network-flow-logs, network-layers-overview, network-monitoring, network-troubleshooting-by-layer, networking-essentials-map, osi-in-practice, packet-encapsulation, ports-and-sockets, router-vs-switch, sdn-vxlan-overlay, security-groups-nacl, tcp-reliability-congestion, traffic-shaping-qos, udp-and-quic, vlan-basics, vpc-basics, vpc-subnets-route-tables, vpn-ipsec-wireguard

#### `layer-link-ethernet-arp` — 데이터 링크 계층: 이더넷 프레임, MAC 주소, 스위치, ARP

- 요약: 같은 망 안에서 프레임을 건네는 L2를 캡처로 따라간다. 이더넷 프레임과 MAC 주소 읽기, 스위치가 포트를 배우는 법, ARP와 이웃 캐시 상태, Gratuitous ARP, VLAN과 물리 계층까지 다룬다.
- 태그: Network, TCP/IP, Linux
- 키워드: ARP, MAC 주소, 이더넷 프레임, Gratuitous ARP
- 길이: 493줄
- 소제목: 선과 전파 위의 일: 물리 계층 / 이더넷 프레임 한 장 / MAC 주소 읽기 / 스위치는 보낸 주소로 길을 배운다 / IP는 아는데 MAC을 모를 때: ARP / 다른 망으로 갈 때는 게이트웨이의 MAC을 묻는다 / ARP 캐시와 이웃의 상태 / 주인이 바뀌었다고 알리는 Gratuitous ARP / VLAN: 스위치 하나를 여러 망으로 / IPv6에는 ARP가 없다 / 현장에서 L2를 만나는 순간 / 한 구간을 맡는 층 / 면접에서 나올 만한 질문
- 직접 링크 →: network-layers-overview, layer-mtu-fragmentation, docker-network-volume, layer-ip-routing-icmp, layer-ip-addressing, vlan-basics, iptables-basics, ipv6-basics
- 키워드 백링크 →: vpc-peering-transit-privatelink, docker-container-basics, router-vs-switch, what-happens-google-com, load-balancer-basics, vpc-basics
- 이 글로 오는 글 ←: ddos-protection, devops-networking-roadmap, dhcp, docker-network-drivers, docker-network-volume, encryption-in-transit, failover, first-page-from-power-on, iptables-basics, ipv6-basics, k8s-cni-pod-network, k8s-service-types, layer-ip-addressing, layer-ip-routing-icmp, layer-mtu-fragmentation, load-balancer-basics, network-layers-overview, network-troubleshooting-by-layer, networking-essentials-map, osi-in-practice, packet-capture-tcpdump, packet-encapsulation, router-vs-switch, sdn-vxlan-overlay, vlan-basics, vpc-basics

#### `layer-mtu-fragmentation` — MTU와 단편화: 큰 패킷이 사라질 때

- 요약: 작은 요청은 되고 큰 응답만 멈추는 장애를 MTU로 푼다. MTU와 MSS, IP 단편화, DF와 PMTUD, ICMP가 막힐 때 생기는 블랙홀을 재현하고 MSS 클램핑과 터널·컨테이너의 MTU 설정으로 고친다.
- 태그: Network, TCP/IP, Linux, Docker, Troubleshooting
- 키워드: MTU, MSS 클램핑, PMTUD, 단편화
- 길이: 495줄
- 소제목: 한 번에 실을 수 있는 크기, MTU / MSS는 MTU에서 헤더를 뺀 값 / 큰 패킷을 쪼개는 단편화 / DF 비트와 Path MTU Discovery / ICMP가 막히면 블랙홀이 된다 / MSS 클램핑으로 돌아가기 / 터널과 컨테이너가 MTU를 깎는다 / 현장에서 MTU를 의심하는 순간 / 작은 건 되고 큰 것만 안 될 때 / 면접에서 나올 만한 질문
- 직접 링크 →: layer-ip-routing-icmp, network-layers-overview, iptables-basics, packet-capture-tcpdump, network-troubleshooting-by-layer, tcp-connection-lifecycle
- 키워드 백링크 →: curl-for-debugging, vpn-ipsec-wireguard, vpc-basics, https-tls, k8s-cni-pod-network, layer-link-ethernet-arp, http-versions, sdn-vxlan-overlay, security-groups-nacl, http-status-codes, ipv6-basics, udp-and-quic, dns
- 이 글로 오는 글 ←: cilium-ebpf, ddos-protection, devops-networking-roadmap, docker-network-drivers, garbage-collection, iptables-basics, ipv6-basics, js-memory-leak, k8s-cni-pod-network, layer-ip-routing-icmp, layer-link-ethernet-arp, network-layers-overview, network-troubleshooting-by-layer, networking-essentials-map, packet-encapsulation, redis-memory-eviction, sdn-vxlan-overlay, tcp-connection-lifecycle, tcp-reliability-congestion, udp-and-quic, vlan-basics, vpn-ipsec-wireguard

#### `network-layers-overview` — OSI 7계층과 TCP/IP 4계층: 왜 나눠서 보나

- 요약: 통신을 층으로 나누는 이유와 데이터가 헤더를 입고 벗는 과정을 실제 프레임 한 장으로 확인한다. OSI와 TCP/IP의 대응, 장비가 읽는 깊이, 실무에서 말하는 L4와 L7의 뜻까지 정리한다.
- 태그: Network, TCP/IP
- 키워드: OSI 7계층, TCP/IP 4계층, OSI 모델
- 길이: 425줄
- 소제목: 한 덩어리로 만들면 아무것도 못 바꾼다 / 봉투 안에 봉투 / 실제 프레임 한 장을 벗겨 보면 / 층마다 데이터를 부르는 이름 / 일곱 층과 네 층 / 장비는 자기 층까지만 뜯어 본다 / L4, L7이라고 부를 때 / 현장에서 계층 번호가 쓰이는 순간 / 층이 깔끔하게 나뉘지 않는 곳 / 이 시리즈에서 이어서 볼 것 / 층을 나눠 보는 이유 / 면접에서 나올 만한 질문
- 직접 링크 →: layer-ip-routing-icmp, layer-link-ethernet-arp, layer-ip-addressing, ports-and-sockets, upper-layers-session-presentation-app, iptables-nat, osi-in-practice, http-status-codes, nginx-reverse-proxy, network-troubleshooting-by-layer, packet-capture-tcpdump, layer-mtu-fragmentation, tcp-connection-lifecycle, tcp-reliability-congestion, udp-and-quic, what-happens-google-com
- 키워드 백링크 →: proxy-reverse-proxy, vpc-subnets-route-tables, docker-container-basics, gateway, iptables-basics, reverse-proxy-lb-api-gateway, vpc-peering-transit-privatelink, router-vs-switch, http-versions, security-groups-nacl, sd-email-protocols, vlan-basics, ipv6-basics, vpc-basics, dns
- 이 글로 오는 글 ←: devops-networking-roadmap, layer-ip-addressing, layer-ip-routing-icmp, layer-link-ethernet-arp, layer-mtu-fragmentation, networking-essentials-map, osi-in-practice, packet-capture-tcpdump, packet-encapsulation, tcp-connection-lifecycle, upper-layers-session-presentation-app

#### `networking-essentials-map` — 네트워크 필수 개념 15가지: 키보드에서 서버까지

- 요약: 브라우저에 주소를 치고 화면이 뜨기까지 1초 동안 IP, 서브넷, DHCP, DNS, MAC, 스위치, 라우터, NAT, 방화벽, 포트, TCP, UDP, HTTP, HTTPS, VPN이 일하는 순서대로 늘어놓는다. 개념마다 답하는 질문과 현장에서 보이는 모양, 자세히 다룬 글을 잇는 지도다.
- 태그: Network, TCP/IP, HTTP
- 키워드: 네트워크 필수 개념, 키보드에서 서버까지
- 길이: 390줄
- 소제목: 1초를 펼쳐 놓으면 / 망에 들어서는 순간 / 이름을 주소로 / 같은 망 안의 한 칸 / 망을 건너는 일 / 가운데 서는 상자들 / 문 앞의 검문 / 프로그램까지 찾아가기 / 내용을 지키고 주고받기 / 1초는 어디에 쓰이나 / 층으로 묶어 보면 / 어디부터 읽을까 / 면접에서 나올 만한 질문
- 직접 링크 →: what-happens-google-com, devops-networking-roadmap, first-page-from-power-on, packet-encapsulation, ipv6-basics, layer-ip-addressing, dhcp, dns, hosts-file, layer-link-ethernet-arp, vlan-basics, router-vs-switch, layer-ip-routing-icmp, iptables-nat, nat-traversal, proxy-reverse-proxy, cdn-edge-anycast, http-caching-cdn, load-balancer-basics, load-balancing-algorithms, nginx-reverse-proxy, reverse-proxy-lb-api-gateway, iptables-basics, security-groups-nacl, ports-and-sockets, tcp-connection-lifecycle, tcp-reliability-congestion, udp-and-quic, https-tls, http-message, http-methods, http-status-codes, http-versions, websocket-deep-dive, realtime-communication, vpn-ipsec-wireguard, latency-bandwidth-throughput, network-layers-overview, osi-in-practice, network-troubleshooting-by-layer, packet-capture-tcpdump
- 키워드 백링크 →: vpc-subnets-route-tables, layer-mtu-fragmentation
- 이 글로 오는 글 ←: backend-engineer-roadmap, first-page-from-power-on, javascript-roadmap, packet-encapsulation, system-design-concepts-map

#### `packet-encapsulation` — 패킷 캡슐화: HTTPS 요청 하나는 선 위에서 몇 바이트인가

- 요약: 12바이트 HTML을 받는 HTTPS 요청이 프레임 17장, 3393바이트가 되는 내역을 헤더 한 칸씩 센다. TLS 레코드가 얹는 몫, 큰 전송의 94% 상한, tcpdump에 MTU보다 큰 패킷이 찍히는 TSO 착시, 터널이 줄이는 MTU까지 실제 캡처로 본다.
- 태그: Network, TCP/IP, TLS, Performance, Linux
- 키워드: 캡슐화 오버헤드, TSO, TLS 레코드, 프레임 간격
- 길이: 395줄
- 소제목: 요청 하나가 만든 17개의 프레임 / 요청 프레임 한 장을 바이트로 뜯기 / 캡처에 찍히지 않는 24바이트 / 큰 파일은 얼마나 효율적인가 / tcpdump에 MTU보다 큰 패킷이 찍힐 때 / 한 겹 더 씌우면 줄어드는 자리 / 프로토콜을 바꾸면 달라지는 몫 / 현장에서 바이트를 세야 할 때 / 3393바이트의 내역 / 면접에서 나올 만한 질문
- 직접 링크 →: network-layers-overview, packet-capture-tcpdump, https-tls, layer-mtu-fragmentation, sdn-vxlan-overlay, vpn-ipsec-wireguard, ipv6-basics, udp-and-quic, networking-essentials-map
- 키워드 백링크 →: what-happens-google-com, first-page-from-power-on, layer-link-ethernet-arp, vlan-basics, http-versions, tcp-reliability-congestion, layer-ip-routing-icmp, vpc-basics, dns
- 이 글로 오는 글 ←: base64, browser-rendering-pipeline, db-type-newsql, latency-bandwidth-throughput, network-flow-logs, networking-essentials-map, sd-video-streaming-cost, service-mesh, upper-layers-session-presentation-app

#### `ports-and-sockets` — 포트와 소켓: 프로세스까지 찾아가는 마지막 주소

- 요약: 연결을 가르는 다섯 값, 듣는 소켓과 연결된 소켓, 커널이 패킷을 소켓에 넘기는 순서를 본다. 0.0.0.0과 127.0.0.1의 차이로 생기는 '로컬에선 되는데 Docker에선 안 되는' 문제, Address already in use와 SO_REUSEADDR, 임시 포트 고갈까지 다룬다.
- 태그: Network, TCP/IP, Linux, Docker, Troubleshooting
- 키워드: 5-tuple, 임시 포트, SO_REUSEADDR, SO_REUSEPORT, Address already in use
- 길이: 494줄
- 소제목: IP가 건물 주소라면 포트는 호수다 / 연결 하나를 가르는 다섯 값 / 듣는 소켓과 연결된 소켓 / 커널이 패킷을 소켓에 넘기는 순서 / 어느 주소에서 들을 것인가 / 이미 쓰는 중인 포트 / 임시 포트가 바닥나는 순간 / 소켓도 파일이다 / 현장에서 포트를 확인하는 순서 / 마지막 주소까지 찾아가는 길 / 면접에서 나올 만한 질문
- 직접 링크 →: tcp-connection-lifecycle, docker-network-volume, iptables-nat, udp-and-quic, network-troubleshooting-by-layer, upper-layers-session-presentation-app
- 키워드 백링크 →: elasticsearch-inverted-index, vpc-subnets-route-tables, iptables-basics, postgres-getting-started, linux-systemd-systemctl, linux-files-permissions, security-groups-nacl, sql-batch-timeout-pool, redis-basics, what-happens-google-com, ipv6-basics, layer-ip-routing-icmp, dns
- 이 글로 오는 글 ←: devops-networking-roadmap, http-versions, integration-tests-real-db, k8s-learning-roadmap, layer-ip-addressing, linux-grep-awk-sed, load-balancer-basics, network-flow-logs, network-layers-overview, network-monitoring, network-troubleshooting-by-layer, networking-essentials-map, osi-in-practice, packet-capture-tcpdump, proxy-reverse-proxy, security-groups-nacl, tcp-connection-lifecycle, udp-and-quic, vpc-peering-transit-privatelink

#### `tcp-connection-lifecycle` — TCP 연결의 일생: 3-way handshake부터 TIME_WAIT까지

- 요약: TCP 연결이 맺어지고 끊기기까지 지나는 상태를 실제 캡처로 따라간다. accept 큐, TIME_WAIT가 남는 이유, CLOSE_WAIT가 쌓이는 버그, RST와 keepalive, ss로 상태를 읽어 장애를 좁히는 법까지 다룬다.
- 태그: Network, TCP, TCP/IP, Linux, Troubleshooting
- 키워드: TIME_WAIT, CLOSE_WAIT, accept 큐, SYN flood
- 길이: 589줄
- 소제목: 연결은 양쪽 커널의 메모에만 있다 / 번호를 맞추는 세 번의 인사 / 커널 안의 두 대기열 / 대답이 없을 때와 거절당할 때 / 상태 열한 개를 따라가기 / 끊을 때는 네 번 인사한다 / TIME_WAIT가 60초나 남는 이유 / CLOSE_WAIT가 쌓이면 내 코드를 본다 / RST는 대화를 끊는 비상 버튼 / 조용히 죽은 연결을 찾는 keepalive / 현장에서 상태 열을 읽는 법 / 상태 전이를 직접 따라가 보기 / 연결의 일생을 한 번에 / 면접에서 나올 만한 질문
- 직접 링크 →: network-layers-overview, ports-and-sockets, layer-mtu-fragmentation, tcp-reliability-congestion, packet-capture-tcpdump
- 키워드 백링크 →: what-happens-google-com, timeouts, vpc-subnets-route-tables, browser-fetch, iptables-basics, reverse-proxy-lb-api-gateway, ddos-protection, security-groups-nacl, sql-batch-timeout-pool
- 이 글로 오는 글 ←: ddos-protection, devops-networking-roadmap, distributed-tracing, first-page-from-power-on, http-versions, iptables-basics, k8s-kube-proxy-modes, k8s-pod-lifecycle, layer-mtu-fragmentation, load-balancer-basics, network-flow-logs, network-layers-overview, network-monitoring, networking-essentials-map, nginx-reverse-proxy, osi-in-practice, packet-capture-tcpdump, pattern-state, percentile-latency, ports-and-sockets, tcp-reliability-congestion, udp-and-quic, websocket-deep-dive

#### `tcp-reliability-congestion` — TCP는 어떻게 믿을 만한가: 재전송, 흐름 제어, 혼잡 제어

- 요약: 시퀀스 번호와 ACK, RTO 재전송과 빠른 재전송, 수신 윈도와 혼잡 윈도가 어떻게 빠짐없이, 넘치지 않게 보내는지 본다. 먼 곳일수록 느린 이유를 대역폭 지연 곱으로 계산하고, 40ms 지연을 만드는 Nagle과 지연 ACK, ss -ti로 느린 연결을 읽는 법까지 다룬다.
- 태그: Network, TCP, TCP/IP, Performance, Linux
- 키워드: 혼잡 제어, 흐름 제어, 대역폭 지연 곱, Nagle 알고리즘, BBR
- 길이: 404줄
- 소제목: 번호는 바이트마다, 확인은 다음 번호로 / 확인이 안 오면 기다렸다가 다시 보낸다 / 같은 ACK가 세 번 오면 기다리지 않는다 / 받는 쪽이 넘치지 않게 하는 흐름 제어 / 길이 넘치지 않게 하는 혼잡 제어 / CUBIC과 BBR / 멀리 갈수록 느린 이유는 대역폭과 지연의 곱이다 / 작은 패킷 두 개가 40ms를 만든다 / 현장에서 느린 연결을 들여다보기 / 믿을 만하다는 것의 값 / 면접에서 나올 만한 질문
- 직접 링크 →: tcp-connection-lifecycle, http-versions, traffic-shaping-qos, network-troubleshooting-by-layer, layer-mtu-fragmentation, udp-and-quic
- 키워드 백링크 →: iptables-basics, packet-capture-tcpdump, centralized-logging-pipeline, tail-latency, redis-basics, grpc, layer-ip-routing-icmp, disaster-recovery
- 이 글로 오는 글 ←: backpressure, devops-networking-roadmap, http-versions, latency-bandwidth-throughput, network-layers-overview, network-monitoring, networking-essentials-map, packet-encapsulation, sd-latency-numbers, tcp-connection-lifecycle, traffic-shaping-qos, udp-and-quic

#### `udp-and-quic` — UDP와 QUIC: 연결 없이 빨리 보내기

- 요약: UDP 헤더 8바이트가 무엇을 담고 연결이 없으면 무엇이 달라지는지 본다. 버퍼가 넘칠 때 조용히 사라지는 데이터그램, 반사·증폭 공격, NAT가 UDP를 금방 잊는 이유를 보고, UDP 위에 TCP를 다시 지은 QUIC을 전송 계층의 눈으로 본다.
- 태그: Network, TCP/IP, UDP, Security, Linux
- 키워드: UDP, 증폭 공격, UdpRcvbufErrors
- 길이: 408줄
- 소제목: 주소만 적어 던지는 8바이트 / 연결이 없으면 일어나는 일 / 무엇을 포기하고 무엇을 얻나 / 버퍼가 넘치면 조용히 버린다 / 질문보다 답이 큰 프로토콜은 무기가 된다 / NAT와 방화벽은 UDP를 오래 기억하지 않는다 / UDP 위에 다시 지은 TCP, QUIC / 현장에서 UDP와 QUIC을 다룰 때 / 질문 하나를 패킷 하나로 / 보장을 내려놓은 대가와 보상 / 면접에서 나올 만한 질문
- 직접 링크 →: tcp-reliability-congestion, http-versions, tcp-connection-lifecycle, dns, layer-mtu-fragmentation, iptables-nat, ports-and-sockets
- 키워드 백링크 →: vpn-ipsec-wireguard, iptables-basics, packet-capture-tcpdump, https-tls, ddos-protection, sdn-vxlan-overlay, security-groups-nacl, dhcp, network-monitoring, ipv6-basics, layer-ip-routing-icmp
- 이 글로 오는 글 ←: cilium-ebpf, clock-skew, ddos-protection, devops-networking-roadmap, dhcp, dns, docker-container-basics, docker-network-drivers, docker-network-volume, first-page-from-power-on, gateway, http-versions, https-tls, iptables-basics, iptables-nat, ipv6-basics, k8s-cni-pod-network, k8s-coredns, k8s-kube-proxy-modes, k8s-network-policy, k8s-service-types, layer-ip-routing-icmp, layer-mtu-fragmentation, nat-traversal, network-flow-logs, network-layers-overview, network-monitoring, networking-essentials-map, nginx-https-performance, osi-in-practice, packet-capture-tcpdump, packet-encapsulation, ports-and-sockets, proxy-reverse-proxy, reverse-proxy-lb-api-gateway, router-vs-switch, sd-metrics-collection, sd-stock-exchange-low-latency, sdn-vxlan-overlay, security-groups-nacl, service-discovery, tcp-reliability-congestion, upper-layers-session-presentation-app, vlan-basics, vpn-ipsec-wireguard, what-happens-google-com, youtube-url-to-video

#### `upper-layers-session-presentation-app` — 세션·표현·응용 계층은 어디로 갔나

- 요약: OSI의 세션·표현 계층이 TCP/IP에서 응용 계층으로 합쳐진 이유와, 그 일을 지금 누가 하는지 본다. 문자 인코딩·직렬화·압축, TLS가 몇 계층인지, 응용 프로토콜의 지도, wrong version number처럼 위쪽 층에서 나는 에러를 가려내는 법까지 다룬다.
- 태그: Network, TCP/IP, TLS, Encoding, HTTP
- 키워드: 세션 계층, 표현 계층, 문자 인코딩, wrong version number
- 길이: 365줄
- 소제목: 위의 세 층이 한 층이 된 사연 / 세션 계층이 하던 일은 흩어졌다 / 표현 계층이 하던 일은 라이브러리가 한다 / TLS는 몇 계층인가 / 응용 계층의 지도 / 첫 바이트로 프로토콜 알아보기 / 현장에서 위쪽 층을 가르는 법 / 층은 합쳐졌고 일은 남았다 / 면접에서 나올 만한 질문
- 직접 링크 →: network-layers-overview, https-tls, cookie-session-login, json-crud-http, base64, osi-in-practice, http-message, dns, network-troubleshooting-by-layer
- 키워드 백링크 →: youtube-url-to-video, grpc, first-page-from-power-on, packet-encapsulation, packet-capture-tcpdump, http-versions, what-happens-google-com, sd-email-protocols, http-caching-cdn, udp-and-quic
- 이 글로 오는 글 ←: base64, json-crud-http, network-layers-overview, osi-in-practice, ports-and-sockets, sql-injection

### Programming › Network › Performance (`programming/network/performance`)

#### `latency-bandwidth-throughput` — 지연, 대역폭, 처리량: 빠르다는 말의 세 가지 숫자

- 요약: 회선을 열 배로 올려도 API가 빨라지지 않는 이유를 지연·대역폭·처리량을 떼어 재 보며 푼다. 지연의 네 조각, 작은 요청을 지배하는 왕복 횟수, 창 크기가 정하는 상한, 손실이 만드는 꼬리 지연, 리틀의 법칙까지 다룬다.
- 태그: Network, Performance, TCP/IP, Linux
- 키워드: 전파 지연, 직렬화 지연, goodput, 리틀의 법칙
- 길이: 379줄
- 소제목: 실험 망: 지연과 대역폭을 따로 돌리는 장치 / 세 숫자가 가리키는 것 / 지연은 네 조각으로 나뉜다 / 작은 파일은 왕복 횟수가, 큰 파일은 대역폭이 정한다 / 창이 작으면 넓은 길도 좁게 쓴다 / 보낸 양과 받은 양이 다르다 / 평균은 꼬리를 숨긴다 / 지연이 늘면 처리량도 줄어든다 / "느리다"를 숫자 셋으로 쪼개기 / 처음 질문으로 돌아가면 / 면접에서 나올 만한 질문
- 직접 링크 →: tcp-reliability-congestion, traffic-shaping-qos, cdn-edge-anycast, http-versions, connection-pool, load-balancing-algorithms
- 키워드 백링크 →: first-page-from-power-on, docker-container-basics, https-tls, packet-encapsulation, kafka-basics, sql-batch-timeout-pool, what-happens-google-com, sli-slo, dns
- 이 글로 오는 글 ←: api-scaling-ladder, backpressure, cold-starts, connection-pool, devops-networking-roadmap, first-page-from-power-on, k8s-configmap, metrics-types, multi-region, n-plus-one-queries, networking-essentials-map, percentile-latency, resilience-patterns, sd-latency-numbers, system-design-concepts-map, tail-latency, traffic-shaping-qos

#### `traffic-shaping-qos` — 트래픽 셰이핑과 QoS: 병목에서 줄의 순서 정하기

- 요약: 백업이 돌면 SSH가 늦어지는 이유를 병목의 큐로 푼다. tc의 tbf와 HTB로 셰이핑과 폴리싱을 비교하고, 큐 깊이가 지연이 되는 bufferbloat, 클래스별 몫과 우선순위, DSCP 표시, ifb로 들어오는 트래픽을 다루는 법을 측정값과 함께 본다.
- 태그: Network, Performance, Linux, TCP/IP
- 키워드: 트래픽 셰이핑, 폴리싱, bufferbloat, HTB, DSCP
- 길이: 451줄
- 소제목: 병목에서는 누군가 기다리거나 버려진다 / 셰이핑은 기다리게 하고, 폴리싱은 버린다 / tbf 한 줄 읽기 / 큐가 깊으면 지연이 된다 / 몫을 나누는 HTB / 패킷에 표시를 붙이는 DSCP / 들어오는 트래픽은 줄 세울 수 없다 / 현장에서 셰이핑을 꺼내는 순간 / 줄의 순서를 정하는 일 / 면접에서 나올 만한 질문
- 직접 링크 →: latency-bandwidth-throughput, rate-limiting-algorithms
- 키워드 백링크 →: docker-container-basics, iptables-basics, sd-start-single-server, tcp-reliability-congestion, message-queue-basics, layer-ip-routing-icmp
- 이 글로 오는 글 ←: devops-networking-roadmap, latency-bandwidth-throughput, network-monitoring, rate-limiting-algorithms, rsync-algorithm, tcp-reliability-congestion

### Programming › OS › Linux (`programming/os/linux`)

#### `iptables-basics` — iptables로 리눅스 방화벽 이해하기

- 요약: 패킷이 netfilter의 다섯 검문소를 어떻게 지나고 규칙이 위에서부터 어떻게 맞춰지는지 보고, Ubuntu 서버에서 SSH와 웹만 여는 규칙을 잠기지 않게 만들어 저장하는 데까지 간다.
- 태그: Linux, Network, Security, Firewall
- 키워드: iptables, netfilter, conntrack, ip6tables, iptables-persistent
- 길이: 810줄
- 소제목: 방화벽 상태부터 확인한다 / 커널 안의 다섯 검문소 / 테이블은 검문소에서 하는 일의 종류 / 위에서부터, 처음 맞는 규칙에서 끝난다 / 명령어 한 줄 뜯어보기 / 연결을 기억하는 conntrack / SSH와 웹만 여는 규칙 세트 / 재부팅하면 사라진다 / IPv6는 따로 막아야 한다 / ufw, nftables, iptables는 같은 걸 만진다 / 막힌 패킷을 찾는 법 / SSH 무차별 대입 늦추기 / 결국 위에서부터 읽히는 목록 / 면접에서 나올 만한 질문
- 직접 링크 →: iptables-nat
- 키워드 백링크 →: tcp-connection-lifecycle, security-groups-nacl, layer-mtu-fragmentation, what-happens-google-com, ipv6-basics, layer-ip-routing-icmp, udp-and-quic, layer-link-ethernet-arp, dns
- 이 글로 오는 글 ←: ansible-network-automation, chaos-engineering, cilium-ebpf, ddos-protection, devops-networking-roadmap, distributed-lock, docker-compose, docker-container-basics, docker-network-drivers, docker-network-volume, first-page-from-power-on, grpc, ids-ips, iptables-nat, ipv6-basics, k8s-architecture, k8s-certifications, k8s-cni-pod-network, k8s-coredns, k8s-cri-cni-csi, k8s-daemonset, k8s-kube-proxy-modes, k8s-learning-roadmap, k8s-network-policy, k8s-service-types, layer-ip-routing-icmp, layer-link-ethernet-arp, layer-mtu-fragmentation, linux-grep-awk-sed, linux-namespaces-cgroups, load-balancing-algorithms, nat-traversal, network-config-cicd, network-flow-logs, network-layers-overview, network-monitoring, network-partitions, network-troubleshooting-by-layer, networking-essentials-map, nginx-https-performance, osi-in-practice, ports-and-sockets, proxy-reverse-proxy, security-groups-nacl, service-discovery, service-mesh, tcp-connection-lifecycle, tcp-reliability-congestion, traffic-shaping-qos, udp-and-quic, vpc-basics, vpc-subnets-route-tables, waf

#### `iptables-nat` — iptables NAT와 포트 포워딩: 사설망, Docker, Kubernetes까지

- 요약: SNAT·DNAT·MASQUERADE로 주소를 바꾸고 conntrack이 그 변환을 기억하는 원리를 보고, 게이트웨이와 포트 포워딩을 직접 구성한 뒤 Docker와 kube-proxy가 같은 규칙을 어떻게 쓰는지 따라간다.
- 태그: Linux, Network, Docker, Kubernetes, Firewall
- 키워드: MASQUERADE, 포트 포워딩, DNAT, DOCKER-USER, kube-proxy
- 길이: 663줄
- 소제목: 주소를 바꿔 쓰는 세 가지 방법 / 바꾼 주소는 conntrack이 기억한다 / 먼저 포워딩을 켠다 / 내부망을 인터넷에 내보내는 게이트웨이 / 바깥 포트를 내부 서버로 넘기는 포트 포워딩 / 같은 서버 안에서 포트만 바꾸는 REDIRECT / Docker가 만드는 규칙 / 쿠버네티스 Service는 nat 규칙 묶음이다 / NAT가 안 될 때 따라가는 순서 / 주소를 바꾸고 기억하는 일 / 면접에서 나올 만한 질문
- 직접 링크 →: iptables-basics, kubernetes-ingress, nat-traversal
- 키워드 백링크 →: k8s-kube-proxy-modes, k8s-service-types, vpc-subnets-route-tables, osi-in-practice, packet-capture-tcpdump, proxy-reverse-proxy, ds-hash-map, reverse-proxy-lb-api-gateway, cilium-ebpf, http-versions, sql-batch-timeout-pool, what-happens-google-com, dhcp, grpc, ipv6-basics, udp-and-quic, dns
- 이 글로 오는 글 ←: ansible-network-automation, blue-green-deployment, cilium-ebpf, curl-for-debugging, devops-networking-roadmap, docker-compose, docker-container-basics, docker-network-drivers, docker-network-volume, express-middleware, first-page-from-power-on, grpc, iptables-basics, ipv6-basics, k8s-architecture, k8s-audit-logging, k8s-cluster-upgrade, k8s-cni-pod-network, k8s-coredns, k8s-cri-cni-csi, k8s-daemonset, k8s-kube-proxy-modes, k8s-labels-selectors, k8s-learning-roadmap, k8s-namespace, k8s-network-policy, k8s-pod-basics, k8s-pod-lifecycle, k8s-pod-security-admission, k8s-service-types, k8s-statefulset, kubectl-essentials, kubernetes-ingress, layer-ip-addressing, layer-ip-routing-icmp, load-balancer-basics, load-balancing-algorithms, local-k8s-kind-minikube, nat-traversal, network-layers-overview, networking-essentials-map, osi-in-practice, packet-capture-tcpdump, ports-and-sockets, router-vs-switch, service-discovery, service-mesh, udp-and-quic, vpc-basics, vpc-peering-transit-privatelink, vpc-subnets-route-tables

#### `linux-files-permissions` — 리눅스 파일 권한: rwx, umask, 특수 비트, ACL, 컨테이너 UID

- 요약: 홈 디렉터리 아래에 둔 사이트가 403을 내는 이유에서 시작해, 커널이 소유자·그룹·나머지 중 한 칸을 고르고 경로의 모든 디렉터리를 검사하는 순서를 따라간다. umask, setuid·setgid·sticky, ACL의 mask 함정, 컨테이너 볼륨의 UID 불일치와 fsGroup까지 다룬다.
- 태그: Linux, Security, Troubleshooting, Kubernetes, Container
- 키워드: umask, setuid, sticky bit, namei, 파일 권한
- 길이: 616줄
- 소제목: ls -l 한 줄 읽기 / 커널은 세 칸 중 하나만 고른다 / 디렉터리의 r, w, x는 뜻이 다르다 / 경로의 모든 칸을 지나야 파일에 닿는다 / 숫자 세 자리로 쓰는 권한 / 새 파일의 권한은 umask가 깎는다 / 세 개의 특수 비트 / 한 사람만 더 허락하는 ACL / 그룹에 넣었는데 여전히 거부된다 / 컨테이너에서는 숫자가 맞아야 한다 / Permission denied를 만났을 때 보는 순서 / 칸 하나를 고르고, 경로를 다 지난다 / 면접에서 나올 만한 질문
- 직접 링크 →: docker-network-volume, dockerfile-image-layers, k8s-security-context, linux-processes-signals
- 키워드 백링크 →: k8s-pod-multicontainer, k8s-architecture, linux-systemd-systemctl
- 이 글로 오는 글 ←: authn-vs-authz, cron-jobs, encryption-at-rest, git-large-files-secrets, hosts-file, k8s-certifications, k8s-learning-roadmap, k8s-secret, k8s-security-context, kubeconfig-contexts, linux-namespaces-cgroups, linux-processes-signals, linux-systemd-systemctl, nginx-basics, ports-and-sockets, postgres-operations, yaml-for-k8s

#### `linux-grep-awk-sed` — grep, awk, sed로 로그 읽기: 접근 로그로 장애 좁히기

- 요약: nginx 접근 로그 4990줄로 502 장애를 좁혀 가며 grep으로 줄을 고르고, awk로 칸을 세고 더하고, sed로 고쳐 쓰는 법을 본다. 칸이 밀리는 User-Agent, uniq 앞의 sort, inode를 바꾸는 sed -i처럼 현장에서 틀리기 쉬운 지점을 실제 출력으로 확인한다.
- 태그: Linux, DevOps, Troubleshooting, Nginx
- 키워드: awk, sed -i, uniq -c
- 길이: 588줄
- 소제목: 로그 한 줄을 칸으로 나눠 본다 / grep은 줄을 고른다 / awk는 칸을 세고 더한다 / 파이프로 이어 붙인다 / sed는 줄을 고쳐 쓴다 / sed -i가 파일을 바꾸는 방식 / 로그 한 줄을 코드로 나눠 보기 / 장애 때 쓰는 명령 묶음 / 고르고, 세고, 고친다 / 면접에서 나올 만한 질문
- 직접 링크 →: ports-and-sockets, linux-systemd-systemctl, iptables-basics, rate-limiting-in-practice
- 키워드 백링크 →: proxy-reverse-proxy, centralized-logging-pipeline, sd-start-single-server, osi-in-practice, http-status-codes
- 이 글로 오는 글 ←: k8s-learning-roadmap, linux-systemd-systemctl, structured-logging

#### `linux-namespaces-cgroups` — 리눅스 네임스페이스와 cgroup: unshare로 만들어 보는 컨테이너

- 요약: Pod 안의 free가 노드 메모리를 보여 주는 이유에서 출발해 unshare와 nsenter로 pid·mnt·uts·ipc·net·user·cgroup·time 네임스페이스를 직접 만들고 들어가 본다. cgroup의 파일 구조와 cpu.max 스로틀링, 메모리 한도 OOM kill, pids.max를 실제로 넘겨 보고, 쿠버네티스 requests·limits가 cgroup 값으로 바뀌는 과정까지 따라간다.
- 태그: Linux, Container, Kubernetes, Docker, Troubleshooting
- 키워드: unshare, nsenter, cgroup v2, memory.events, pids.max
- 길이: 694줄
- 소제목: 컨테이너를 만드는 시스템 콜은 따로 없다 / 새 PID 공간에서는 내가 1번이 된다 / 이름과 공유 메모리는 가장 가벼운 칸막이 / 마운트 목록을 따로 갖는다 / 빈 네트워크 스택에 선을 꽂는다 / 안에서는 root, 밖에서는 nobody / 자기 cgroup을 루트로 보는 칸막이와 시간 칸막이 / 실행 중인 칸막이 안으로 들어간다: nsenter / cgroup v2는 트리 하나를 파일로 다룬다 / cpu.max는 주기마다 쓸 시간을 나눠 준다 / memory.max를 넘으면 그 cgroup 안에서 죽인다 / pids.max로 포크 폭탄을 막는다 / 쿠버네티스 숫자가 cgroup 파일이 되기까지 / 컨테이너 안에서 본 숫자가 이상할 때 / 칸막이는 보이는 것을, cgroup은 쓰는 양을 / 면접에서 나올 만한 질문
- 직접 링크 →: docker-container-basics, k8s-pod-resources, linux-processes-signals, dockerfile-image-layers, docker-network-drivers, k8s-cni-pod-network, linux-files-permissions, k8s-pod-troubleshooting, linux-systemd-systemctl, garbage-collection
- 키워드 백링크 →: k8s-pod-basics, docker-commands-workflow, k8s-cri-cni-csi, iptables-basics, k8s-security-context, k8s-architecture, packet-capture-tcpdump, sql-aggregation-pitfalls, osi-in-practice, layer-ip-routing-icmp
- 이 글로 오는 글 ←: cilium-ebpf, curl-for-debugging, devops-networking-roadmap, docker-commands-workflow, docker-container-basics, k8s-cluster-upgrade, k8s-in-place-resize, k8s-learning-roadmap, k8s-pod-resources, k8s-security-context, local-k8s-kind-minikube

#### `linux-processes-signals` — 리눅스 프로세스와 시그널: ps, 상태, 좀비, PID 1

- 요약: CPU는 노는데 load average가 높은 서버에서 출발해 프로세스 나무와 ps의 STAT 글자, /proc 읽는 법, SIGTERM·SIGKILL·SIGHUP이 프로그램에 닿는 방식을 본다. 좀비와 고아를 직접 만들고, 컨테이너의 PID 1이 좀비를 거둬야 하는 이유와 pkill -f, nice의 함정까지 정리한다.
- 태그: Linux, DevOps, Troubleshooting, Container, Nginx
- 키워드: 좀비 프로세스, 고아 프로세스, SIGHUP, tini, load average
- 길이: 595줄
- 소제목: 프로세스는 부모가 만든다 / ps 한 줄 읽기 / 상태 글자 하나가 말해 주는 것 / proc 파일 시스템에 프로세스가 다 있다 / 시그널은 커널이 전하는 번호 하나 / 핸들러를 등록한 프로그램과 안 한 프로그램 / nginx가 시그널로 일하는 법 / 좀비와 고아 / 컨테이너의 PID 1은 좀비를 거둬야 한다 / kill, pkill, killall 고르기 / nice로 CPU를 양보한다 / 현장에서 프로세스를 따라가는 순서 / 번호와 나무, 그리고 거두는 일 / 면접에서 나올 만한 질문
- 직접 링크 →: linux-files-permissions, k8s-pod-lifecycle, linux-systemd-systemctl
- 키워드 백링크 →: blue-green-deployment, k8s-pod-basics, docker-commands-workflow, k8s-pod-resources, docker-container-basics, osi-in-practice, client-data-cache
- 이 글로 오는 글 ←: blue-green-deployment, docker-commands-workflow, docker-container-basics, encryption-in-transit, express-middleware, k8s-learning-roadmap, k8s-pod-lifecycle, linux-files-permissions, linux-namespaces-cgroups, linux-systemd-systemctl, nginx-basics, scaling-horizontal-vertical

#### `linux-systemd-systemctl` — systemd와 systemctl: 서비스 등록부터 장애 추적까지

- 요약: nohup으로 띄운 앱이 재부팅 뒤 사라진 일에서 시작해 유닛 파일을 쓰고, enable과 start, daemon-reload, Restart=와 시작 한도, 멈출 때의 SIGTERM과 SIGKILL, drop-in, journalctl, cron 대신 timer를 다룬다. 서비스가 안 뜰 때는 200번대 종료 코드부터 따라간다.
- 태그: Linux, DevOps, Troubleshooting
- 키워드: systemctl, journalctl, 유닛 파일, systemd timer, daemon-reload
- 길이: 562줄
- 소제목: 유닛은 systemd가 다루는 단위 / 서비스 유닛 파일 한 장 쓰기 / enable과 start는 다른 일이다 / daemon-reload를 잊으면 / systemctl status 읽기 / 죽으면 다시 띄운다, 한도까지 / 멈출 때는 cgroup 전체를 정리한다 / 남의 유닛은 drop-in으로 고친다 / journalctl로 로그 좁히기 / cron 대신 timer / 서비스가 안 뜰 때 따라가는 순서 / 컨테이너 안에는 systemd가 없다 / nohup 대신 유닛 파일 한 장 / 면접에서 나올 만한 질문
- 직접 링크 →: linux-files-permissions, linux-processes-signals, linux-grep-awk-sed
- 키워드 백링크 →: dockerfile-image-layers, k8s-deploy-pipeline-eks, k8s-architecture, client-data-cache
- 이 글로 오는 글 ←: cron-jobs, k8s-certifications, k8s-learning-roadmap, linux-files-permissions, linux-grep-awk-sed, linux-namespaces-cgroups, linux-processes-signals, nginx-basics, ports-and-sockets

### Programming › Security (`programming/security`)

#### `cors` — CORS: 서버는 응답했는데 브라우저가 막는 이유

- 요약: 다른 출처로 보낸 요청은 서버까지 가는데, 응답을 읽을지는 브라우저가 서버의 허락 헤더를 보고 정한다. 같은 출처 정책, preflight, credentials, 흔한 설정 실수와 CSRF와의 관계까지 정리했다.
- 태그: CORS, Security, HTTP, Browser
- 키워드: CORS, Same-Origin Policy, 같은 출처 정책, preflight, Access-Control-Allow-Origin
- 길이: 513줄
- 소제목: 서버는 응답했는데 콘솔은 빨갛다 / 출처를 가르는 세 가지 / 남의 응답을 읽지 못하게 하는 이유 / 응답 헤더로 허락을 받는다 / 먼저 물어보는 요청 (preflight) / 허락 헤더 하나씩 / 쿠키까지 보내려면 / 열어 두다가 뚫리는 경우 / CORS는 브라우저가 지킨다 / CORS는 CSRF를 막지 못한다 / 개발할 때는 프록시로 돌아간다 / 평소엔 되다가 가끔만 나는 CORS 에러 / 다시 처음 장면으로 / 면접에서 나올 만한 질문
- 직접 링크 →: local-custom-domain, cookie-session-login, http-caching-cdn
- 키워드 백링크 →: json-crud-http, csrf, authn-vs-authz, js-pure-functions, http-status-codes
- 이 글로 오는 글 ←: browser-fetch, cookie-session-login, core-web-vitals, csrf, express-middleware, frontend-browser-cache, html-form-http, http-caching-cdn, http-methods, javascript-roadmap, js-es-modules, json-crud-http, k8s-gateway-api, k8s-kube-proxy-modes, kubernetes-ingress, local-custom-domain, micro-frontends, realtime-communication, websocket-deep-dive, youtube-url-to-video

#### `csrf` — CSRF: 브라우저가 쿠키를 알아서 붙여서 생기는 일

- 요약: 로그인 쿠키가 자동으로 붙는 성질을 빌린 요청 위조를 실제 크로미움으로 재현하고, SameSite Strict·Lax·None의 차이와 CSRF 토큰, Origin·Sec-Fetch-Site 검사, CORS 사전 요청과의 관계를 확인한다.
- 태그: Security, Cookie, HTTP, Browser
- 키워드: SameSite, 이중 제출 쿠키, 동기화 토큰, Sec-Fetch-Site
- 길이: 275줄
- 소제목: 쿠키가 알아서 붙는다는 것의 대가 / Set-Cookie에 붙는 옵션을 뜯어본다 / SameSite가 교차 사이트 요청을 거른다 / 브라우저만 믿지 않는다, 토큰과 Origin 검사 / JSON API와 CORS 사전 요청의 관계 / 실제로 CSRF를 만나는 순간 / 정리 / 면접에서 나올 만한 질문
- 직접 링크 →: cookie-session-login, cors, xss, http-methods, token-login
- 키워드 백링크 →: what-happens-google-com
- 이 글로 오는 글 ←: browser-storage, cookie-session-login, cors, eventual-consistency, html-form-http, http-methods, local-custom-domain, ssrf, token-login, waf, websocket-deep-dive, xss

#### `ddos-protection` — DDoS 방어: 회선, 연결 표, 비싼 요청 중 무엇이 먼저 차나

- 요약: DDoS를 바닥나는 자원으로 나눠 지표로 가려내고, 애니캐스트 스크러빙, SYN 쿠키와 conntrack, 요청 수 제한과 챌린지, WAF, 캐시, 오리진 잠금을 층별로 본다. 공격이 시작된 날 무엇부터 확인하고 누구를 부르고 무엇을 켤지도 정리한다.
- 태그: Security, Network, TCP/IP, Nginx, Troubleshooting
- 키워드: DDoS, SYN 쿠키, 스크러빙, 증폭률, RTBH
- 길이: 675줄
- 소제목: 세 가지 공격, 바닥나는 자원이 다르다 / 내 지표에서 어느 쪽인지 가른다 / 파이프가 차면 서버는 할 일이 없다 / 반쯤 열린 연결이 줄을 채운다 / SYN 쿠키는 줄 없이 기억한다 / 큐를 직접 채워 본 결과 / 쿠키가 잃어버리는 것 / conntrack 표도 같은 방식으로 찬다 / 요청은 정상처럼 생겼다 / 캐시가 오리진 대신 맞는다 / 서버를 늘리면 청구서도 같이 는다 / 오리진 IP가 새면 앞단은 소용없다 / 공격이 시작된 날의 순서 / 증폭률과 회선 용량 계산하기 / 어느 자원이 먼저 차는가 / 면접에서 나올 만한 질문
- 직접 링크 →: tcp-connection-lifecycle, udp-and-quic, waf, network-flow-logs, cdn-edge-anycast, layer-mtu-fragmentation, iptables-basics, rate-limiting-in-practice, rate-limiting-algorithms, nginx-https-performance, edge-caching, autoscaling, cloud-cost-optimization, security-groups-nacl, on-call, production-incidents, network-monitoring
- 키워드 백링크 →: layer-link-ethernet-arp, sql-injection, packet-capture-tcpdump, https-tls, cilium-ebpf, vpc-basics, dns, webhooks
- 이 글로 오는 글 ←: cdn-edge-anycast, cilium-ebpf, sd-rate-limiter-design, tcp-connection-lifecycle, udp-and-quic, waf

#### `encryption-at-rest` — 저장 데이터 암호화: 디스크, DB 컬럼, 봉투 암호화와 키 교체

- 요약: LUKS 디스크 암호화부터 PostgreSQL 컬럼 암호화, KMS 봉투 암호화와 키 교체까지 직접 돌려 보며, 저장 암호화가 막는 것과 막지 못하는 것을 키를 누가 쥐었는지로 정리한다.
- 태그: Security, Linux, PostgreSQL, AWS
- 키워드: 저장 데이터 암호화, 봉투 암호화, LUKS, 블라인드 인덱스, pgcrypto
- 길이: 647줄
- 소제목: 반납한 디스크와 SQL 인젝션은 다른 문제다 / 자물쇠를 거는 층과 키를 쥔 사람 / 디스크 통째로: LUKS와 dm-crypt / 패스프레이즈를 바꿔도 데이터는 다시 암호화되지 않는다 / 데이터베이스 안에서: TDE와 컬럼 암호화 / 암호화한 컬럼은 찾을 수 없다 / 봉투 암호화: 데이터 키와 마스터 키 / GCM에서 nonce를 다시 쓰면 / 키 교체와 재암호화 / 저장 암호화가 막지 못하는 것 / 클라우드에서 체크박스를 켜기 전에 확인할 것 / 결국 키가 어디 있느냐 / 면접에서 나올 만한 질문
- 직접 링크 →: encryption-in-transit, sql-injection, iam-basics, secrets-management, backup-strategy
- 키워드 백링크 →: postgres-mvcc-vacuum, mysql-innodb-basics, linux-files-permissions, optimistic-locking, vpc-basics, db-modeling-normalization
- 이 글로 오는 글 ←: backup-strategy, encryption-in-transit, k8s-audit-logging, k8s-etcd-backup, k8s-secret, sd-email-storage-search, sd-object-storage-durability

#### `encryption-in-transit` — 전송 구간 암호화: 내부 TLS, mTLS, 재암호화와 인증서 자동 교체

- 요약: 바깥만 HTTPS인 서비스의 내부 구간을 암호화하는 법을 다룬다. 내부 CA로 mTLS를 직접 맺어 보고, 인증서가 없을 때의 실제 오류, 프록시 재암호화의 함정, 인증서와 CA를 자동으로 교체하는 순서까지 본다.
- 태그: Security, TLS, Network, PostgreSQL
- 키워드: 전송 구간 암호화, 내부 CA, 재암호화, sslmode, 인증서 자동 갱신
- 길이: 596줄
- 소제목: 내부 구간이 평문이면 생기는 일 / DB 드라이버의 "암호화됨"은 확인이 아니다 / 내부 CA를 만들고 서비스에 신분증을 준다 / 인증서가 없을 때 실제로 나는 오류 / 인증은 통과했는데 403이 나는 이유 / 중간에서 풀고 다시 잠그기 / 인증서를 사람이 갈아 끼우지 않는다 / CA를 바꿀 때는 겹쳐서 믿는다 / 현장에서 TLS 오류를 좁히는 순서 / 내부도 바깥처럼 / 면접에서 나올 만한 질문
- 직접 링크 →: https-tls, encryption-at-rest, zero-trust-architecture, service-mesh, kubernetes-ingress
- 키워드 백링크 →: nginx-basics, nginx-reverse-proxy, k8s-configmap, k8s-architecture, packet-capture-tcpdump, reverse-proxy-lb-api-gateway, authn-vs-authz, linux-processes-signals, kafka-basics, redis-basics, what-happens-google-com, first-page-from-power-on, vpc-basics, layer-link-ethernet-arp, dns
- 이 글로 오는 글 ←: connection-pool, devops-networking-roadmap, encryption-at-rest, https-tls, k8s-certificates-pki, osi-in-practice, postgres-connections-pg-hba, sd-split-web-and-db

#### `https-tls` — HTTPS는 무엇을 지켜 주나: TLS 1.3

- 요약: 자물쇠가 보장하는 기밀성·무결성·인증과, 그래도 보이는 SNI. 인증서 체인 검증, TLS 1.3 핸드셰이크와 ECDHE, 0-RTT의 재전송 위험, TLS 종료와 mTLS, 자주 만나는 인증서 오류까지 정리했다.
- 태그: TLS, HTTPS, Security, Network
- 키워드: TLS 1.3, TLS 핸드셰이크, 인증서 체인, 중간 인증서, 전방향 안전성, mTLS
- 길이: 476줄
- 소제목: 자물쇠가 약속하는 세 가지 / 암호화해도 보이는 것 / 인증서 한 장 뜯어보기 / 믿음은 루트에서 내려온다 / 브라우저가 인증서를 검사하는 순서 / 인증서를 자동으로 받는 방법: ACME / TLS 1.3 핸드셰이크 한 단계씩 / 키를 보내지 않고 같은 키를 만든다 / 본문은 대칭키로 빠르게 / 다시 올 때는 0-RTT, 대신 재전송을 조심 / TLS를 어디서 끝낼까 / 서버끼리도 서로 확인한다: mTLS / 자주 마주치는 인증서 오류 / 자물쇠 하나에 들어 있는 것 / 면접에서 나올 만한 질문
- 직접 링크 →: dns, local-custom-domain, what-happens-google-com, resilience-patterns, gateway
- 키워드 백링크 →: kubernetes-ingress, nginx-basics, zero-trust-architecture, nginx-https-performance, reverse-proxy-lb-api-gateway, webhooks, service-mesh, http-versions, encryption-in-transit, first-page-from-power-on, udp-and-quic, http-methods
- 이 글로 오는 글 ←: api-gateway-use-cases, authn-vs-authz, base64, cilium-ebpf, cold-starts, connection-pool, curl-for-debugging, ddos-protection, devops-networking-roadmap, encryption-in-transit, first-page-from-power-on, gateway, http-message, http-status-codes, http-versions, ids-ips, k8s-certificates-pki, k8s-gateway-api, k8s-learning-roadmap, kubernetes-ingress, latency-bandwidth-throughput, layer-mtu-fragmentation, network-troubleshooting-by-layer, networking-essentials-map, nginx-https-performance, osi-in-practice, packet-capture-tcpdump, packet-encapsulation, pattern-facade, proxy-reverse-proxy, reverse-proxy-lb-api-gateway, sd-notification-system, service-mesh, udp-and-quic, upper-layers-session-presentation-app, waf, what-happens-google-com, youtube-url-to-video, zero-trust-architecture

#### `iam-basics` — IAM 기본: 거부가 이기는 정책 판정과 역할 빌리기

- 요약: 정책에 Allow가 있는데도 AccessDenied가 나는 장면에서 시작해 주체와 정책의 겹, 명시적 거부·허락·암묵적 거부 순서, AssumeRole과 STS 임시 자격 증명, RBAC와 ABAC, AccessDenied를 좁혀 가는 순서를 다룬다.
- 태그: Security, AWS, Cloud, Authorization, DevOps
- 키워드: IAM 정책, AssumeRole, 권한 경계, ABAC
- 길이: 483줄
- 소제목: 요청 하나에 담기는 것 / 사람에게는 사용자, 일에는 역할 / 정책 한 장 뜯어보기 / 거부가 언제나 이긴다 / 정책이 여러 겹일 때 / 역할을 빌리는 과정 / 서버는 자격 증명을 어디서 받나 / 역할로 묶을까, 태그로 고를까 / 최소 권한은 한 번에 정해지지 않는다 / AccessDenied가 났을 때 보는 순서 / 면접에서 나올 만한 질문
- 직접 링크 →: eks-cluster-basics, github-actions-docker-ecr, secrets-management, ssrf, k8s-rbac
- 키워드 백링크 →: serverless-architecture, http-status-codes
- 이 글로 오는 글 ←: authn-vs-authz, devops-networking-roadmap, eks-cluster-basics, encryption-at-rest, external-secrets, k8s-rbac, secrets-management, serverless-limits, system-design-concepts-map

#### `ids-ips` — IDS와 IPS: 패킷 내용을 보고 공격을 찾는 장치

- 요약: Suricata로 공격 트래픽을 탐지하고, NFQUEUE로 길목에 세워 막아 본다. 시그니처와 이상 탐지의 차이, fail-open과 fail-closed, 오탐을 줄이는 법, TLS 때문에 달라지는 배치 위치까지 다룬다.
- 태그: Security, Network, Linux, Firewall, Troubleshooting
- 키워드: Suricata, 침입 탐지 시스템, 침입 방지 시스템, 시그니처 기반 탐지
- 길이: 417줄
- 소제목: 방화벽이 못 보는 것 / 길목에 서느냐, 옆에서 보느냐 / 규칙 한 줄 뜯어보기 / 공격 트래픽을 만들어 돌려 보기 / 이름표로 찾기, 평소와 다른 것 찾기 / 길목에 세워서 막기 / 울리면 안 될 때 울린다 / 어디에 세울까 / 현장에서 IDS 경보를 받았을 때 / 경보는 시작일 뿐이다 / 면접에서 나올 만한 질문
- 직접 링크 →: iptables-basics, security-groups-nacl, packet-capture-tcpdump, network-flow-logs, service-mesh, zero-trust-architecture
- 키워드 백링크 →: proxy-reverse-proxy, waf, vpc-subnets-route-tables, reverse-proxy-lb-api-gateway, layer-ip-addressing, what-happens-google-com, layer-ip-routing-icmp, https-tls, first-page-from-power-on, vpc-basics, db-modeling-normalization, dns
- 이 글로 오는 글 ←: devops-networking-roadmap, network-flow-logs, waf, zero-trust-architecture

#### `secrets-management` — 비밀 관리: 비밀 값은 어디로 새고, 어떻게 짧게 빌려 쓰나

- 요약: 지운 커밋, 환경 변수, CI 로그, 크래시 리포트처럼 비밀 값이 새는 길을 직접 열어 보고, Vault의 동적 비밀과 lease, AWS Secrets Manager, SOPS가 각각 무엇을 막는지 정리한다.
- 태그: Security, DevOps, Git, PostgreSQL, Linux
- 키워드: gitleaks, 동적 비밀, HashiCorp Vault, secret zero
- 길이: 654줄
- 소제목: 비밀 값이 지나가는 길 / 지운 커밋에도 남아 있다 / 무작위해 보이는 문자열을 찾는 법 / 환경 변수는 생각보다 많이 보인다 / CI 로그와 이미지 / 비밀을 한곳에 모으는 저장소 / 쓸 때마다 새로 만드는 비밀번호 / 빌려준 비밀에는 기한이 있다 / 저장소에 들어가려면 무엇을 내미나 / AWS Secrets Manager와 SOPS는 어디에 서나 / 키가 샜다는 연락을 받았을 때 / 면접에서 나올 만한 질문
- 직접 링크 →: git-large-files-secrets, k8s-secret, helm-values-secrets, external-secrets, dockerfile-image-layers, github-actions-docker-ecr, iam-basics, eks-cluster-basics
- 키워드 백링크 →: k8s-architecture, git-staging-area, sql-batch-timeout-pool, high-availability, db-type-key-value, dns, token-login
- 이 글로 오는 글 ←: dependency-hell, encryption-at-rest, external-secrets, git-large-files-secrets, git-undo, gitops-argocd-vs-flux, iac-basics, iam-basics, jwt-key-rotation, k8s-learning-roadmap

#### `sql-injection` — SQL 주입: 이어 붙인 문자열이 쿼리가 될 때

- 요약: PostgreSQL 16과 node-postgres로 OR 1=1 우회, UNION 추출, pg_sleep 시간 기반 블라인드 주입을 실제로 돌려 보고, 파라미터 바인딩과 바인딩으로 못 막는 식별자(허용 목록, format %I), 최소 권한 역할로 막는다.
- 태그: Security, Database, PostgreSQL, SQL, Node.js
- 키워드: SQL 주입, 파라미터 바인딩, 블라인드 SQL 주입, 식별자 주입
- 길이: 297줄
- 소제목: 작은 쇼핑몰 테이블로 시작한다 / 이어 붙인 문자열은 코드가 된다 / UNION으로 다른 데이터를 끌어낸다 / 화면에 아무것도 안 떠도 시간으로 캔다 / 파라미터 바인딩이 코드와 데이터를 가른다 / 바인딩으로 못 막는 자리, 식별자 / 최소 권한으로 피해를 가둔다 / 실제로 SQL 주입을 만나는 순간 / 면접에서 나올 만한 질문
- 직접 링크 →: xss, sql-basics, postgres-roles-security
- 키워드 백링크 →: upper-layers-session-presentation-app
- 이 글로 오는 글 ←: ddos-protection, encryption-at-rest, js-equality-coercion, postgres-roles-security, sql-filtering-operators, sql-study-path, waf, xss

#### `ssrf` — SSRF: 서버를 시켜 내부 주소를 부르게 하는 공격

- 요약: 가짜 메타데이터 서버를 169.254.169.254에 띄워 사용자 URL을 fetch하는 서버를 공격하고, IMDSv2, 10진수·IPv6 표기 우회, 리다이렉트와 DNS 리바인딩, 해석한 IP 검사와 net.BlockList, egress 정책으로 막는다.
- 태그: Security, Network, Cloud, AWS, Node.js
- 키워드: SSRF, IMDSv2, DNS 리바인딩, 메타데이터 엔드포인트, net.BlockList
- 길이: 295줄
- 소제목: 못 가는 곳을 서버가 대신 간다 / IMDSv2는 한 겹을 더 둔다 / 문자열 차단 목록은 거의 다 뚫린다 / 해석한 IP를 검사하고 그 IP로 고정한다 / 리다이렉트와 DNS 리바인딩이라는 뒷문 / 네트워크로 한 겹 더 가둔다 / 실제로 SSRF를 만나는 순간 / 면접에서 나올 만한 질문
- 직접 링크 →: webhooks, k8s-network-policy, security-groups-nacl
- 키워드 백링크 →: csrf, race-conditions, layer-ip-addressing, ipv6-basics, cookie-session-login, vpc-basics, dns
- 이 글로 오는 글 ←: api-styles-overview, authn-vs-authz, devops-networking-roadmap, eks-cluster-basics, iam-basics, layer-ip-addressing, local-custom-domain, vpc-basics, waf, webhooks

#### `waf` — WAF는 요청의 무엇을 보고 막나

- 요약: WAF는 TLS가 풀린 HTTP 요청을 해석해 공격처럼 생긴 모양에 점수를 매겨 막는다. OWASP CRS의 이상 점수 방식, 탐지 전용 모드로 시작하는 이유, 한글 댓글이 막힌 오탐을 좁은 예외로 푸는 과정을 따라간다.
- 태그: Security, HTTP, Nginx, Firewall, WAF
- 키워드: 웹 애플리케이션 방화벽, OWASP CRS, 이상 점수, ModSecurity, 가상 패치
- 길이: 515줄
- 소제목: 443번이 열려 있으면 방화벽은 할 일이 끝난다 / 규칙은 점수를 더하고 마지막에 한 번 판정한다 / 막힌 요청과 로그 한 줄 / 막기 전에 먼저 세기만 한다 / 오탐은 규칙을 끄지 말고 과녁을 좁힌다 / 편집증 수준을 올리면 생기는 일 / JSON 본문은 따로 켜야 읽는다 / 어디에 세울까: 엣지, 프록시, 앱 안 / 관리형 WAF 규칙은 이렇게 생겼다 / 우회는 어디서 생기나 / 403 문의가 왔을 때 보는 순서 / 문자열을 보는 문지기 / 면접에서 나올 만한 질문
- 직접 링크 →: ids-ips, rate-limiting-in-practice, ddos-protection, sql-injection, xss, csrf, ssrf, iptables-basics, security-groups-nacl, proxy-reverse-proxy
- 키워드 백링크 →: html-form-http, what-happens-google-com, https-tls, vpc-basics, db-modeling-normalization, dns
- 이 글로 오는 글 ←: ddos-protection, devops-networking-roadmap, ids-ips, sd-rate-limiter-design

#### `xss` — XSS: 사용자 입력이 남의 페이지에서 코드가 될 때

- 요약: 반사형·저장형·DOM 기반 XSS를 로컬 서버와 크로미움으로 재현하고, 자리별 출력 인코딩, React 이스케이프와 dangerouslySetInnerHTML, DOMPurify, nonce 기반 CSP와 위반 보고, HttpOnly, Trusted Types로 막는 법을 본다.
- 태그: Security, Browser, JavaScript, React
- 키워드: 출력 인코딩, DOMPurify, CSP nonce, Trusted Types, dangerouslySetInnerHTML
- 길이: 273줄
- 소제목: 데이터가 코드가 되는 세 가지 길 / 나가는 자리에 맞게 이스케이프한다 / React는 왜 비교적 안전한가, 그리고 어디서 뚫리나 / HTML을 허용해야 한다면 정제한다 / CSP로 주입돼도 실행을 막는다 / 터져도 피해를 줄이는 장치들 / 실제로 XSS를 만나는 순간 / 정리 / 면접에서 나올 만한 질문
- 직접 링크 →: html-form-http, cookie-session-login, csrf
- 키워드 백링크 →: json-crud-http, sql-injection
- 이 글로 오는 글 ←: browser-storage, csrf, dom-basics, js-template-literals, sd-notification-reliability, sql-injection, waf

#### `zero-trust-architecture` — 제로 트러스트: 사내 IP 대신 요청마다 확인한다

- 요약: 사내 IP를 믿는 관리자 앱이 감염된 프린터에 열리는 장면에서 시작해, 사용자와 기기를 요청마다 확인하는 프록시를 직접 세워 본다. NIST SP 800-207의 원칙과 구성, 기기 상태, 마이크로세그멘테이션, 현실적인 전환 순서를 정리한다.
- 태그: Security, Network, Authentication, TLS, Architecture
- 키워드: 제로 트러스트, BeyondCorp, identity-aware proxy, 마이크로세그멘테이션
- 길이: 378줄
- 소제목: 성벽 안은 안전하다는 가정 / 위치 대신 요청마다 묻는다 / 정책을 정하는 곳과 지키는 곳 / 사용자 앞에 서는 프록시 / 기기도 신원이 있다 / 정책 판정 직접 짜 보기 / 서비스끼리도 같은 원칙으로 / 칸을 잘게 나누기 / 한 번에 바꾸지 않는다 / 제로 트러스트를 들일 때 생기는 문제 / 위치가 아니라 확인한 것으로 / 면접에서 나올 만한 질문
- 직접 링크 →: vpn-ipsec-wireguard, service-mesh, oauth, proxy-reverse-proxy, security-groups-nacl, k8s-network-policy, network-flow-logs, ids-ips
- 키워드 백링크 →: high-availability, authn-vs-authz, https-tls, vpc-basics, token-login
- 이 글로 오는 글 ←: authn-vs-authz, devops-networking-roadmap, encryption-in-transit, https-tls, ids-ips, network-flow-logs, service-mesh, vpn-ipsec-wireguard

### Programming › Server/Infra › CI/CD (`programming/server-infra/ci-cd`)

#### `blue-green-deployment` — 블루그린 배포: 방향 한 줄과 남겨 둔 한 벌

- 요약: 운영 환경 옆에 같은 환경을 하나 더 띄우고 트래픽 방향만 한 번에 바꾸는 배포를 nginx reload로 직접 해 본다. 부하를 건 채 전환해도 실패가 0인 이유, 잘못 바꾸면 생기는 실패, DNS TTL 지연, 한 벌뿐인 DB와 세션, 되돌리기 조건을 실측과 함께 본다.
- 태그: DevOps, CI/CD, Nginx, Load Balancer, Troubleshooting
- 키워드: 블루그린 배포, blue-green, nginx -s reload, DNS 전환
- 길이: 428줄
- 소제목: 두 벌을 띄워 두고 방향만 바꾼다 / 어디서 방향을 바꾸나 / nginx에서 upstream 한 줄을 바꿔 본다 / reload가 요청을 떨어뜨리지 않는 이유 / 바꾸는 방법을 틀리면 실패가 생긴다 / DNS로 바꾸면 TTL만큼 섞인다 / 데이터베이스는 한 벌뿐이다 / 세션과 오래 붙은 연결 / 두 배의 비용을 어디까지 줄이나 / 되돌리기가 빠른 이유와 그 조건 / 현장에서 블루그린이 흔들리는 순간 / 방향 한 줄과 남겨 둔 한 벌 / 면접에서 나올 만한 질문
- 직접 링크 →: canary-release, rolling-deployment, ci-cd-basics, k8s-deployment, zero-downtime-migrations, rollback-strategy, feature-flags
- 키워드 백링크 →: iptables-nat, docker-container-basics, realtime-communication, reverse-proxy-lb-api-gateway, proxy-reverse-proxy, autoscaling, linux-processes-signals, sql-batch-timeout-pool, redis-basics, cookie-session-login, grpc, dns
- 이 글로 오는 글 ←: canary-release, ci-cd-basics, k8s-certifications, k8s-learning-roadmap, linux-processes-signals, nginx-basics, release-cutover-hypercare, rollback-strategy, rolling-deployment

#### `build-caching` — 빌드 캐시로 CI 줄이기: 캐시 키, restore-keys, 원격 캐시와 캐시 오염

- 요약: 잡마다 빈 머신으로 시작하는 CI에서 무엇을 어떤 키로 캐시할지, actions/cache가 키를 찾는 순서와 브랜치 범위, Turborepo 작업 해시에 빠진 환경 변수가 만드는 틀린 적중, 원격 캐시 오염과 서명 검증을 직접 재 보고 정리한다.
- 태그: CI/CD, Cache, Performance, Security, DevOps
- 키워드: restore-keys, 원격 캐시, Turborepo, CI 캐시
- 길이: 519줄
- 소제목: 캐시가 기억하는 것은 입력과 결과의 짝이다 / 의존성 설치는 무엇을 캐시해야 빨라지나 / 캐시 키 한 줄 뜯어보기 / 정확히 맞지 않으면 비슷한 것이라도 / 키는 어떤 순서로 맞춰 보나 / 작업 결과까지 캐시하는 도구들 / 해시에 없는 입력이 만드는 틀린 적중 / 원격 캐시는 팀 전체의 기억이다 / 남이 올린 결과물을 믿어도 되나 / Docker 빌드의 캐시는 어디에 두나 / 캐시가 이상할 때 보는 순서 / 같은 입력이면 같은 결과라는 약속 / 면접에서 나올 만한 질문
- 직접 링크 →: dockerfile-image-layers, github-actions-docker-ecr, ci-cd-basics, feature-flags, rollback-strategy
- 키워드 백링크 →: dependency-hell, git-internals-basics, js-strict-mode
- 이 글로 오는 글 ←: api-gateway-use-cases, ci-cd-basics, dependency-hell, git-internals-basics, git-large-files-secrets, jenkins-pipeline-basics, k8s-project-structure, merkle-tree, micro-frontends, monolith-architecture, rollback-strategy

#### `canary-release` — 카나리 릴리스: 작게 겪고 지표로 넓힌다

- 요약: 새 버전에 트래픽 일부만 보내 옛 버전과 지표를 비교하며 비율을 올리는 배포를 nginx weight와 split_clients로 직접 나눠 본다. 요청 단위와 사용자 단위 분할의 차이, 지표 기반 승격과 중단, 작은 비율에서 생기는 통계 잡음, Argo Rollouts의 AnalysisTemplate까지 다룬다.
- 태그: DevOps, CI/CD, Nginx, Kubernetes, Observability
- 키워드: 카나리 릴리스, split_clients, AnalysisTemplate, Argo Rollouts
- 길이: 440줄
- 소제목: 일부만 먼저 보내고 지켜본다 / 비율로 나누는 두 가지 방법 / 요청마다 나눌까, 사람마다 나눌까 / 지표가 다음 단계를 정한다 / 작은 비율은 증거가 적다 / Argo Rollouts와 Flagger가 자동으로 하는 일 / 카나리가 거짓말하는 순간 / 작게 겪고, 증거가 쌓이면 넓힌다 / 면접에서 나올 만한 질문
- 직접 링크 →: blue-green-deployment, rolling-deployment, feature-flags, ab-testing, load-balancing-algorithms, kubernetes-ingress, gateway, service-mesh, k8s-deployment, zero-downtime-migrations, rollback-strategy
- 키워드 백링크 →: k8s-pod-basics, docker-container-basics, js-memory-leak, sql-batch-timeout-pool, http-status-codes
- 이 글로 오는 글 ←: blue-green-deployment, ci-cd-basics, feature-flags, gateway, gitops-argocd-vs-flux, k8s-certifications, k8s-deployment, k8s-learning-roadmap, release-cutover-hypercare, rollback-strategy, rolling-deployment

#### `ci-cd-basics` — CI/CD의 뼈대: 지속적 통합, 전달, 배포와 한 번 빌드한 아티팩트

- 요약: 스테이징에서 확인한 커밋을 운영에서 다시 빌드했다가 다른 프로그램이 나간 일에서 출발해, 지속적 통합·전달·배포의 차이, 한 번 빌드해 digest로 승격하는 흐름, 머지 큐, 플레이키 테스트, DORA 지표를 act로 로컬에서 돌린 파이프라인과 함께 정리한다.
- 태그: tesla, CI/CD, DevOps, Git, Troubleshooting · 회사: tesla
- 키워드: 지속적 통합, 지속적 전달, DORA 지표, 플레이키 테스트
- 길이: 447줄
- 소제목: 세 단어가 가리키는 범위 / 커밋 하나가 운영까지 가는 길 / 한 번만 빌드하고 승격한다 / 환경은 무엇을 확인하려고 두나 / 합치는 주기가 파이프라인을 정한다 / 가끔 실패하는 테스트 / 파이프라인의 속도를 재는 네 가지 숫자 / 파이프라인이 느려지는 자리 / 배포가 깨졌을 때 파이프라인에서 먼저 볼 것 / 같은 커밋이 아니라 같은 파일 / 면접에서 나올 만한 질문
- 직접 링크 →: github-actions-docker-ecr, k8s-deploy-pipeline-eks, network-config-cicd, build-caching, feature-flags, rollback-strategy, k8s-configmap, k8s-secret, canary-release, blue-green-deployment, git-branching-strategy
- 키워드 백링크 →: ab-testing, security-groups-nacl, osi-in-practice, dns
- 이 글로 오는 글 ←: backend-engineer-roadmap, blue-green-deployment, build-caching, feature-flags, jenkins-pipeline-basics, k8s-certifications, rollback-strategy, sd-queue-logging-automation, test-pyramid-unit-tests

#### `feature-flags` — 피처 플래그 운영: 평가 규칙, 설정 배달, OpenFeature, 정리까지

- 요약: 킬 스위치를 내렸는데 서버 일부만 늦게 따라온 장면에서 시작해, 규칙 평가 순서, 폴링과 스트리밍으로 설정이 닿는 길, 플래그 서비스 장애 때의 기본값, 클라이언트 평가의 노출 문제, OpenFeature, 조합 테스트와 오래된 플래그 정리를 다룬다.
- 태그: tesla, Feature Flag, CI/CD, DevOps, Resilience · 회사: tesla
- 키워드: OpenFeature, 플래그 평가, 타기팅 규칙
- 길이: 418줄
- 소제목: 네 종류의 플래그는 운영 방식이 다르다 / 규칙은 위에서부터 하나씩 / 설정은 어떻게 서버에 닿나 / 플래그 서비스가 죽으면 / 서버에서 평가할까, 브라우저에서 평가할까 / 벤더에 묶이지 않게 OpenFeature / 플래그가 늘면 테스트할 조합이 폭발한다 / 플래그를 바꾸는 것도 운영 변경이다 / 다 켠 플래그를 지우는 일 / 스위치 하나 뒤에 있는 시스템 / 면접에서 나올 만한 질문
- 직접 링크 →: ab-testing, ci-cd-basics, rollback-strategy, canary-release
- 키워드 백링크 →: observability-basics, autoscaling, distributed-tracing, redis-basics
- 이 글로 오는 글 ←: blue-green-deployment, build-caching, canary-release, ci-cd-basics, fault-tolerance, global-rollout-localization, microservices-decomposition, monolith-architecture, release-cutover-hypercare, rollback-strategy

#### `github-actions-docker-ecr` — GitHub Actions로 이미지 빌드하고 ECR에 올리기

- 요약: 워크플로 한 장을 위에서부터 읽으며 오래 사는 액세스 키 대신 OIDC로 AWS 역할을 잠깐 빌리는 법, 신뢰 정책의 sub 조건, 커밋 SHA 태그, buildx 캐시, 이미지 검사, concurrency와 environment로 운영 배포 앞에 문을 다는 법을 다룬다.
- 태그: CI/CD, AWS, Docker, DevOps, Security
- 키워드: GitHub Actions, OIDC 신뢰 정책, actionlint, ECR
- 길이: 636줄
- 소제목: 워크플로 파일 한 장의 뼈대 / 언제 돌지는 이벤트와 경로가 정한다 / 푸시하기 전에 actionlint로 걸러 낸다 / 오래 사는 키 대신 OIDC로 역할을 잠깐 빌린다 / 신뢰 정책의 sub 조건이 문을 정한다 / ECR에 로그인하고 올리기 / 태그는 커밋 SHA로 붙인다 / buildx 캐시를 Actions 캐시에 둔다 / 올린 이미지를 검사한다 / 같은 브랜치 배포가 겹칠 때 concurrency / secrets와 environment로 운영 배포 앞에 문을 단다 / matrix로 여러 조합을 한 번에 돌린다 / 이미지가 러너에서 노드까지 가는 길 / 실패한 잡 로그에서 먼저 볼 줄 / 키를 저장하지 않는 파이프라인 / 면접에서 나올 만한 질문
- 직접 링크 →: dockerfile-image-layers, k8s-deploy-pipeline-eks, git-branching-strategy, k8s-project-structure
- 키워드 백링크 →: k8s-pod-troubleshooting, eks-cluster-basics, terraform-basics, token-login
- 이 글로 오는 글 ←: backend-engineer-roadmap, build-caching, ci-cd-basics, claude-code-parallel-and-scheduled, cloud-cost-optimization, docker-commands-workflow, dockerfile-image-layers, git-internals-basics, git-remote-collaboration, git-stacked-prs, helm-dependencies-oci-gitops, iam-basics, integration-tests-real-db, jenkins-pipeline-basics, k8s-deploy-pipeline-eks, k8s-project-structure, k8s-secret, k8s-serviceaccount-tokens, kustomize-basics, network-config-cicd, secrets-management, velero-backup, vpc-peering-transit-privatelink, vpc-subnets-route-tables, yaml-for-k8s

#### `network-config-cicd` — 네트워크 설정 CI/CD: PR에서 plan, 승인, apply, drift 감지까지

- 요약: 콘솔에서 지운 경로가 사흘 뒤 엉뚱한 PR에서 되살아난 일에서 출발해 lint와 validate, 저장한 plan만 apply하는 흐름, plan과 apply의 권한 분리, 변경 창, state 분리와 단계적 배포로 폭발 반경 줄이기, refresh-only와 --check로 drift 찾기, git revert로 되돌리기를 다룬다.
- 태그: CI/CD, GitOps, Terraform, IaC, DevOps, Network
- 키워드: drift 감지, 변경 창, 폭발 반경
- 길이: 494줄
- 소제목: 네트워크 설정의 원본은 git 하나 / PR이 올라오면 기계가 먼저 본다 / plan은 한 번 만들고 그대로 apply한다 / 권한은 plan과 apply를 나눈다 / 언제 바꿀지도 코드로 정한다 / 한 번에 다 바꾸지 않는다 / 코드 밖에서 바뀐 것 찾기 / 되돌리기는 git revert부터 / 현장에서 파이프라인이 막히는 순간 / 사람은 plan을 보고, 기계는 나머지를 본다 / 면접에서 나올 만한 질문
- 직접 링크 →: terraform-network-iac, ansible-network-automation, github-actions-docker-ecr, k8s-deploy-pipeline-eks, terraform-basics
- 키워드 백링크 →: yaml-for-k8s, vpc-subnets-route-tables, iptables-basics, security-groups-nacl, vpc-basics
- 이 글로 오는 글 ←: ansible-network-automation, chaos-engineering, ci-cd-basics, devops-networking-roadmap, iac-basics, terraform-network-iac

#### `rollback-strategy` — 롤백 전략: 되돌릴 수 있는 것과 없는 것, 자동 롤백

- 요약: rollout undo로 코드는 돌아왔는데 컬럼 이름이 바뀐 DB 때문에 다시 실패한 일에서 출발해, 롤백과 롤 포워드 판단, 스키마·메시지·부작용처럼 되돌릴 수 없는 것, down 마이그레이션의 위험, burn rate 기준 자동 롤백을 실습과 함께 정리한다.
- 태그: tesla, CI/CD, Kubernetes, PostgreSQL, Resilience, DevOps · 회사: tesla
- 키워드: 롤 포워드, 자동 롤백
- 길이: 398줄
- 소제목: 롤백할까, 고쳐서 내보낼까 / 되돌릴 수 있는 것과 없는 것 / 롤백했더니 DB가 맞지 않는다 / down 마이그레이션이 지우는 것 / 큐에 남은 새 형식의 메시지 / 쿠버네티스에서 되돌리기 / 사람보다 먼저 되돌리게 하기 / 되돌리기가 실패하는 자리 / 되돌릴 수 있게 만드는 것이 먼저다 / 면접에서 나올 만한 질문
- 직접 링크 →: k8s-deployment, k8s-deploy-pipeline-eks, helm-release-lifecycle, ci-cd-basics, build-caching, feature-flags, zero-downtime-migrations, db-migration-tools, dead-letter-queue, sli-slo, error-budgets, canary-release, blue-green-deployment, production-incidents, postmortems
- 키워드 백링크 →: k8s-statefulset, git-undo, k8s-daemonset, k8s-configmap, sd-payment-flow, postgres-operations, redis-basics, cookie-session-login, local-k8s-kind-minikube
- 이 글로 오는 글 ←: argocd-basics, blue-green-deployment, build-caching, canary-release, ci-cd-basics, feature-flags, gitops-argocd-vs-flux, helm-release-lifecycle, iac-basics, k8s-cluster-upgrade, k8s-statefulset, release-cutover-hypercare

#### `rolling-deployment` — 롤링 배포: 빼고, 기다리고, 확인하고, 넣는다

- 요약: 로드 밸런서 뒤 서버 네 대를 차례로 바꾸며 실패한 요청을 센다. 기본값 max_fails 때문에 모든 서버가 빠지는 함정, GET은 재시도로 가려지고 POST는 실패하는 이유, 드레이닝과 헬스 체크 게이트, 배치 크기, 두 버전이 섞이는 동안의 호환성을 다룬다.
- 태그: DevOps, CI/CD, Nginx, Load Balancer, Troubleshooting
- 키워드: 롤링 배포, rolling deployment, max_fails, fail_timeout
- 길이: 431줄
- 소제목: 한 대씩 빼고, 바꾸고, 확인하고, 넣는다 / 그냥 내렸다 올리면 생기는 일 / 기본값 max_fails가 서버를 10초씩 가둔다 / 재시도가 GET은 숨기고 POST는 못 숨긴다 / 정상 종료만으로는 모자란 이유 / 섞여 있는 몇 초 동안 / 헬스 체크가 배포를 멈추게 한다 / 몇 대씩 바꿀까 / 롤링이 맞지 않는 경우 / 현장에서 롤링 배포를 의심하는 순간 / 빼는 순서가 전부다 / 면접에서 나올 만한 질문
- 직접 링크 →: k8s-deployment, blue-green-deployment, canary-release, load-balancer-basics, idempotency-key, api-versioning, zero-downtime-migrations, k8s-pod-probes, ansible-network-automation
- 키워드 백링크 →: retries, docker-container-basics, reverse-proxy-lb-api-gateway, sd-start-single-server, autoscaling, osi-in-practice, sql-batch-timeout-pool, sql-query-rewrite
- 이 글로 오는 글 ←: blue-green-deployment, canary-release, connection-pool, consistent-hashing, db-migration-tools, high-availability, k8s-learning-roadmap, leader-election, load-balancer-basics, nginx-reverse-proxy, sd-load-balancer-stateless, sd-mq-consumer-groups, sd-mq-replication

### Programming › Server/Infra › CI/CD › ArgoCD (`programming/server-infra/ci-cd/argocd`)

#### `argocd-basics` — ArgoCD 기본: 동기화, selfHeal, prune, sync wave, ApplicationSet

- 요약: kubectl scale이 1초 만에 되돌아가는 장면에서 출발해 ArgoCD의 refresh와 sync, Synced와 Healthy의 차이, selfHeal과 prune, sync wave와 hook, 예전 커밋만 재시도하는 함정, ignoreDifferences와 RespectIgnoreDifferences, AppProject 울타리, app-of-apps와 ApplicationSet을 실제 컨트롤러 출력으로 따라간다.
- 태그: Kubernetes, GitOps, CI/CD, DevOps, Troubleshooting
- 키워드: selfHeal, sync wave, ApplicationSet, ignoreDifferences, AppProject
- 길이: 630줄
- 소제목: ArgoCD는 세 부품이 나눠서 일한다 / Application 한 장과 AppProject 한 장 / Synced와 Healthy는 다른 질문이다 / 손으로 고친 것을 되돌리는 selfHeal / git에서 지운 것은 prune이 있어야 지워진다 / 순서가 필요할 때: sync wave와 hook / 고친 커밋을 올렸는데 예전 커밋만 재시도한다 / 남이 바꾸는 필드는 ignoreDifferences로 비켜 준다 / 앱이 많아지면: app-of-apps와 ApplicationSet / ArgoCD가 이상할 때 보는 순서 / git이 원본이라는 말의 범위 / 면접에서 나올 만한 질문
- 직접 링크 →: k8s-deploy-pipeline-eks, helm-dependencies-oci-gitops, gitops-argocd-vs-flux, k8s-rbac, k8s-pod-probes, prometheus-basics, rollback-strategy, kubectl-apply-ssa, k8s-hpa, k8s-pod-troubleshooting
- 키워드 백링크 →: k8s-crd, k8s-pv-pvc, k8s-deployment, kubernetes-ingress, k8s-statefulset, k8s-pod-basics, git-undo, k8s-daemonset, k8s-api-objects, k8s-configmap, docker-container-basics, cron-jobs, helm-basics, k8s-labels-selectors, resilience-patterns, local-k8s-kind-minikube, webhooks
- 이 글로 오는 글 ←: gitops-argocd-vs-flux, grafana-dashboards, helm-dependencies-oci-gitops, k8s-deploy-pipeline-eks, k8s-learning-roadmap

#### `gitops-argocd-vs-flux` — GitOps 도구 비교: ArgoCD와 Flux는 같은 약속을 어떻게 다르게 지키나

- 요약: GitOps의 네 가지 원칙에서 출발해 Flux의 GitRepository·Kustomization·HelmRelease 구조를 ArgoCD와 나란히 놓고, drift를 잡는 방식, UI, 멀티 테넌시, 서버 쪽 apply, Helm 릴리스 기록, 이미지 자동 갱신, GitOps에서 비밀 값을 두는 법을 비교한다.
- 태그: GitOps, Kubernetes, CI/CD, DevOps, Helm, Security
- 키워드: Flux CD, GitRepository, HelmRelease, ImageUpdateAutomation, OpenGitOps
- 길이: 557줄
- 소제목: GitOps가 약속하는 네 가지 / Flux는 컨트롤러 여러 개가 리소스로 이어진다 / 리소스 모양이 다르면 생각하는 단위가 다르다 / 화면이 필요한 팀과 필요 없는 팀 / 팀을 나눌 때: AppProject와 ServiceAccount / 클라이언트 쪽 apply와 서버 쪽 apply / Helm 차트를 다루는 방식 / 새 이미지가 나오면 누가 git을 고치나 / git에 비밀 값을 어떻게 두나 / 둘 중 하나를 고를 때 / 같은 약속, 다른 조립 / 면접에서 나올 만한 질문
- 직접 링크 →: argocd-basics, k8s-deploy-pipeline-eks, helm-dependencies-oci-gitops, k8s-rbac, k8s-serviceaccount-tokens, kubectl-apply-ssa, helm-release-lifecycle, external-secrets, secrets-management, helm-values-secrets, canary-release, kustomize-basics
- 키워드 백링크 →: helm-chart-templates, kubernetes-ingress, git-undo, k8s-configmap, docker-container-basics, rollback-strategy, local-k8s-kind-minikube, eks-cluster-basics, k8s-hpa, webhooks
- 이 글로 오는 글 ←: argocd-basics, k8s-learning-roadmap

### Programming › Server/Infra › CI/CD › Jenkins (`programming/server-infra/ci-cd/jenkins`)

#### `jenkins-pipeline-basics` — Jenkins 파이프라인: Jenkinsfile부터 multibranch와 에이전트까지

- 요약: 컨트롤러와 에이전트, 선언형 Jenkinsfile의 when·parallel·post, GitHub 웹훅과 상태 체크로 도는 multibranch pipeline, 비밀값과 shared library를 다루고 빌드가 멈췄을 때 보는 순서를 정리한다.
- 태그: tesla, CI/CD, DevOps, Git, Security, Troubleshooting · 회사: tesla
- 키워드: Jenkinsfile, multibranch pipeline, Jenkins shared library, Jenkins 에이전트
- 길이: 478줄
- 소제목: 일을 나눠 주는 쪽과 돌리는 쪽 / 선언형 Jenkinsfile 한 장 / 단계를 건너뛰는 조건 / 병렬 단계와 post가 결과를 정하는 순서 / 브랜치마다 잡이 생기는 multibranch pipeline / 비밀값은 필요한 단계에서만 꺼낸다 / 여러 저장소가 같은 단계를 쓸 때 / 결과물과 캐시를 남기는 자리 / 빌드가 안 돌거나 이상하게 돌 때 / Jenkins와 GitHub Actions 중 고르기 / 다시 잠긴 병합 버튼 앞에서 / 면접에서 나올 만한 질문
- 직접 링크 →: ci-cd-basics, github-actions-docker-ecr, build-caching, webhooks
- 키워드 백링크 →: realtime-communication, docker-container-basics, proxy-reverse-proxy, eks-cluster-basics

### Programming › Server/Infra › Cloud (`programming/server-infra/cloud`)

#### `cloud-cost-optimization` — 클라우드 비용 줄이기: 시간과 바이트에 붙는 요금

- 요약: 청구서를 큰 항목부터 읽고 NAT 처리 요금, AZ 사이 전송, 놀고 있는 볼륨과 IP, 저장 등급에서 새는 돈을 찾는다. 크기 맞추기, Savings Plans와 스팟, 서버리스와 상시 서버의 손익 계산, 태그와 쇼백까지 다룬다.
- 태그: Cloud, AWS, DevOps, Network, Scalability
- 키워드: Savings Plans, 스팟 인스턴스, Cost Explorer, 쇼백
- 길이: 449줄
- 소제목: 청구서는 위에서부터 읽는다 / 데이터가 지나가는 길에 요금소가 있다 / 아무도 쓰지 않는데 돈이 나가는 것들 / 저장소는 꺼내는 횟수로 등급을 고른다 / 크기를 맞추고 나서 약정을 건다 / 스팟은 2분 뒤에 뺏길 수 있다 / 서버리스냐 상시 서버냐는 계산으로 고른다 / 태그가 없으면 누구 돈인지 모른다 / 비용이 튀었을 때 보는 순서 / 바이트와 시간에 요금이 붙는다 / 면접에서 나올 만한 질문
- 직접 링크 →: serverless-limits, autoscaling, vpc-subnets-route-tables, vpc-peering-transit-privatelink, k8s-pod-resources, network-flow-logs
- 키워드 백링크 →: serverless-architecture, opensearch-cluster-operations, k8s-node-autoscaling-karpenter, terraform-basics, db-type-key-value, docker-container-basics, rest-api-design, centralized-logging-pipeline, sd-start-single-server, k8s-node-maintenance, kafka-basics, postgres-architecture, redis-basics, high-availability, github-actions-docker-ecr, vpc-basics
- 이 글로 오는 글 ←: cold-starts, ddos-protection, k8s-node-autoscaling-karpenter, k8s-pv-pvc, k8s-vpa, sd-file-sync-conflicts, sd-video-streaming-cost, serverless-architecture, serverless-limits

#### `cold-starts` — 콜드 스타트: 실행 환경을 새로 만드는 비용

- 요약: 서버리스 함수가 실행 환경을 새로 만들 때 microVM, 런타임 init, 핸들러 바깥 코드가 차례로 지연을 더한다. 로컬에서 import 비용과 번들링·지연 불러오기 효과를 재 보고, 프로비저닝된 동시성, SnapStart, 핑으로 데우기를 비교한다.
- 태그: Cloud, AWS, Performance, Node.js, Troubleshooting
- 키워드: 콜드 스타트, 프로비저닝된 동시성, SnapStart, Init Duration
- 길이: 442줄
- 소제목: 요청 하나가 빈 자리에 떨어지면 / 웜과 콜드는 같은 코드가 다른 길을 탄다 / 로컬에서 콜드와 웜을 재 보기 / 묶음 크기와 import가 init을 정한다 / 로그 한 줄에서 콜드 스타트 찾기 / 미리 만들어 둘까, 빨리 만들까 / SnapStart는 init이 끝난 순간을 사진으로 찍는다 / 핑으로 데우기가 기대만큼 안 되는 이유 / 콜드 스타트가 정말 문제인지부터 본다 / 결국 init을 언제, 누가 치르나 / 면접에서 나올 만한 질문
- 직접 링크 →: serverless-limits, autoscaling, percentile-latency, cloud-cost-optimization
- 키워드 백링크 →: serverless-architecture, https-tls, k8s-deploy-pipeline-eks, docker-container-basics, latency-bandwidth-throughput, vpc-basics, webhooks
- 이 글로 오는 글 ←: architecture-patterns-overview, autoscaling, caching-strategies, k8s-hpa, serverless-architecture, serverless-limits

#### `serverless-limits` — 서버리스의 한계: 시간, 크기, 동시성, DB 연결

- 요약: 15분 실행 한도와 29초 게이트웨이 한도, 6MB 페이로드와 base64, 계정 전체가 나눠 쓰는 동시성과 거절, /tmp, 동시 실행 수만큼 늘어나는 DB 연결을 실제로 재현하고, 서버리스를 쓰지 말아야 할 때를 정리한다.
- 태그: Cloud, AWS, Scalability, PostgreSQL, Troubleshooting
- 키워드: 예약 동시성, RDS Proxy, presigned URL, TooManyRequestsException
- 길이: 366줄
- 소제목: 플랫폼이 정한 숫자부터 본다 / 시간 한도는 겹겹이 걸려 있다 / 시간이 다 되면 중간에서 끊긴다 / 6MB를 넘는 파일은 함수를 지나가지 않게 한다 / 동시성은 계정 전체가 나눠 쓴다 / 메모리 칸 하나가 CPU까지 정한다 / /tmp는 환경이 바뀌면 사라진다 / 동시 실행 수만큼 DB 연결이 생긴다 / 묶이는 정도와 맞지 않는 일 / 벽에 부딪혔을 때 보는 순서 / 벽을 알고 들어가면 / 면접에서 나올 만한 질문
- 직접 링크 →: cold-starts, cloud-cost-optimization, timeouts, idempotency-key, connection-pool
- 키워드 백링크 →: serverless-architecture, db-architecture-by-scale, db-type-key-value, rest-api-design, iam-basics, db-type-relational, resilience-patterns, dead-letter-queue, webhooks
- 이 글로 오는 글 ←: architecture-patterns-overview, cloud-cost-optimization, cold-starts, html-form-http, sd-video-upload-transcoding, serverless-architecture

### Programming › Server/Infra › Docker (`programming/server-infra/docker`)

#### `docker-commands-workflow` — Docker 명령 열 개로 도는 한 바퀴: build부터 pull까지, 그리고 장애 때 보는 순서

- 요약: build, images, run, ps, logs, exec, stop, rm, push, pull이 프로젝트 폴더와 이미지, 컨테이너, 레지스트리 중 무엇을 건드리는지 따라가며 명령마다 걸려 넘어지는 지점을 재현한다. 계속 재시작하는 컨테이너와 대답하지 않는 포트를 어떤 순서로 좁히는지까지 실제 출력으로 본다.
- 태그: Docker, Container, Linux, DevOps, Troubleshooting
- 키워드: docker attach, dangling 이미지, 익명 볼륨, 종료 코드 137
- 길이: 701줄
- 소제목: 명령 열 개가 오가는 네 곳 / build: 이름표는 옮겨 가고 내용은 다이제스트가 지킨다 / images: 같은 태그로 다시 빌드하면 옛 이미지는 어디로 가나 / run과 ps: 떠 있는 것과 떠 있었던 것 / logs: stdout으로 낸 것만 남는다 / exec와 attach는 다른 문으로 들어간다 / stop: SIGTERM을 보내고 10초를 센다 / rm과 prune: 지우면 무엇이 같이 사라지나 / push와 pull: 레지스트리는 태그를 옮길 수 있다 / 계속 재시작하거나 포트가 대답하지 않을 때 / 한 바퀴를 다시 그려 보면 / 면접에서 나올 만한 질문
- 직접 링크 →: docker-container-basics, dockerfile-image-layers, docker-network-volume, structured-logging, centralized-logging-pipeline, k8s-pod-troubleshooting, linux-processes-signals, express-middleware, github-actions-docker-ecr, network-troubleshooting-by-layer, docker-compose
- 키워드 백링크 →: k8s-pod-resources, linux-namespaces-cgroups
- 이 글로 오는 글 ←: docker-compose, docker-container-basics, docker-network-volume, k8s-learning-roadmap, k8s-pod-resources, linux-namespaces-cgroups, linux-processes-signals

#### `docker-compose` — Docker Compose로 여러 컨테이너 한 번에 띄우기

- 요약: nginx, Node, Postgres, Redis를 compose.yaml 하나로 띄우면서 depends_on과 healthcheck로 정하는 시작 순서, .env 보간, down -v의 위험, 개발·운영 설정 분리까지 정리한다.
- 태그: Docker, DevOps, Linux
- 키워드: Docker Compose, compose.yaml, depends_on
- 길이: 607줄
- 소제목: docker-compose와 docker compose / 서비스 넷을 파일 하나에 / 서비스 블록 하나 뜯어보기 / .env는 컨테이너에 들어가지 않는다 / up 한 번에 일어나는 순서 / 요청 하나가 서비스를 건너가는 길 / 매일 쓰는 명령 / down과 down -v는 한 글자 차이다 / 개발과 운영을 파일로 나누기 / 비밀 값은 어디에 두나 / Compose로 버티는 데까지 / 파일 하나가 구성 전체를 말한다 / 면접에서 나올 만한 질문
- 직접 링크 →: docker-network-volume, docker-container-basics, dockerfile-image-layers, kubernetes-ingress
- 키워드 백링크 →: k8s-pod-probes, iptables-basics, proxy-reverse-proxy, docker-commands-workflow, redis-basics, iptables-nat, redis-persistence-ha, dns
- 이 글로 오는 글 ←: backend-engineer-roadmap, claude-code-parallel-and-scheduled, docker-commands-workflow, docker-network-volume, dockerfile-image-layers, k8s-learning-roadmap

#### `docker-container-basics` — 컨테이너는 무엇인가: Docker로 처음 띄워 보기

- 요약: 컨테이너가 VM과 달리 호스트 커널을 함께 쓰는 프로세스이고 namespace와 cgroups로 격리된다는 것을 직접 확인한 뒤, Ubuntu에 Docker를 설치해 컨테이너를 띄우고 들여다보고 멈추고 지우는 데까지 간다.
- 태그: Docker, Container, Linux, DevOps
- 키워드: cgroups, namespace, Docker Engine, 컨테이너 이미지
- 길이: 850줄
- 소제목: 서버마다 환경이 달라서 생기는 일 / 가상 머신은 커널까지, 컨테이너는 그 위만 / 프로세스마다 다른 세상을 보여 주는 namespace / 쓸 수 있는 양을 묶는 cgroups / 이미지는 틀, 컨테이너는 찍어 낸 것 / Ubuntu 24.04에 Docker Engine 설치하기 / docker run 한 줄이 지나가는 길 / docker run 옵션 뜯어보기 / 띄우고, 들여다보고, 멈추고, 지우기 / 재시작 정책과 PID 1 / 자원과 디스크 들여다보기 / 이미지 이름은 레지스트리부터 다이제스트까지 / 컨테이너를 다시 정리하면 / 면접에서 나올 만한 질문
- 직접 링크 →: dockerfile-image-layers, iptables-nat, docker-commands-workflow
- 키워드 백링크 →: linux-namespaces-cgroups, k8s-pod-resources, iptables-basics, rest-api-design, k8s-security-context, grpc, linux-processes-signals, udp-and-quic
- 이 글로 오는 글 ←: argocd-basics, backend-engineer-roadmap, blue-green-deployment, canary-release, centralized-logging-pipeline, chaos-engineering, cloud-cost-optimization, cold-starts, curl-for-debugging, disaster-recovery, docker-commands-workflow, docker-compose, docker-network-drivers, docker-network-volume, dockerfile-image-layers, gateway, gitops-argocd-vs-flux, grafana-dashboards, helm-basics, helm-dependencies-oci-gitops, jenkins-pipeline-basics, k8s-admission-control, k8s-api-aggregation-schedulers, k8s-api-objects, k8s-audit-logging, k8s-cri-cni-csi, k8s-etcd-backup, k8s-labels-selectors, k8s-learning-roadmap, k8s-namespace, k8s-network-policy, k8s-node-maintenance, k8s-pod-basics, k8s-pod-disruption-budget, k8s-pod-lifecycle, k8s-pod-security-admission, k8s-pod-troubleshooting, k8s-project-structure, k8s-rbac, k8s-security-context, k8s-statefulset, k8s-storageclass-snapshots, kubectl-essentials, kubernetes-ingress, latency-bandwidth-throughput, layer-ip-addressing, layer-ip-routing-icmp, layer-link-ethernet-arp, linux-namespaces-cgroups, linux-processes-signals, load-balancer-basics, network-layers-overview, network-troubleshooting-by-layer, osi-in-practice, packet-capture-tcpdump, prometheus-basics, proxy-reverse-proxy, rendering-ssr, rolling-deployment, structured-logging, terraform-modules-tfvars, traffic-shaping-qos, velero-backup

#### `docker-network-drivers` — Docker 네트워크 드라이버: bridge, host, macvlan, overlay는 커널에서 무엇인가

- 요약: macvlan 컨테이너에 호스트에서만 닿지 않는 증상에서 출발해, 드라이버마다 컨테이너 네임스페이스를 어떤 장치로 잇는지 손으로 재현한다. 브리지 사이 격리 규칙, icc와 br_netfilter, 127.0.0.1 게시를 우회하는 직접 접근, macvlan shim, overlay의 포트와 MTU, 사내망과 겹치는 기본 대역까지 다룬다.
- 태그: Docker, Network, Linux, Container, Troubleshooting, Firewall
- 키워드: macvlan, ipvlan, DOCKER-ISOLATION, default-address-pools
- 길이: 612줄
- 소제목: 드라이버는 네임스페이스를 꾸미는 방식이다 / bridge를 손으로 다시 만든다 / host, none, container 모드 / macvlan: 컨테이너가 LAN에 직접 선다 / overlay: 호스트를 넘는 브리지 / 기본 대역이 사내망과 겹칠 때 / 무엇을 고르나 / 장치 하나로 갈리는 성격 / 면접에서 나올 만한 질문
- 직접 링크 →: docker-network-volume, iptables-nat, sdn-vxlan-overlay, docker-container-basics, k8s-pod-basics, layer-mtu-fragmentation, k8s-cni-pod-network
- 키워드 백링크 →: dockerfile-image-layers, iptables-basics, eks-cluster-basics, vlan-basics, layer-link-ethernet-arp, vpn-ipsec-wireguard, security-groups-nacl, dhcp, layer-ip-routing-icmp, vpc-basics, udp-and-quic, dns
- 이 글로 오는 글 ←: devops-networking-roadmap, docker-network-volume, k8s-cni-pod-network, k8s-learning-roadmap, k8s-network-policy, linux-namespaces-cgroups, router-vs-switch

#### `docker-network-volume` — Docker 네트워크와 볼륨: 컨테이너끼리 대화하고 데이터 남기기

- 요약: 컨테이너 안의 localhost가 왜 DB에 닿지 않는지, docker rm 한 번에 데이터가 왜 사라지는지에서 출발해 사용자 정의 브리지와 내장 DNS, -p가 만드는 DNAT, named volume과 bind mount, 볼륨 백업까지 따라간다.
- 태그: Docker, Network, Linux, DevOps
- 키워드: named volume, bind mount, 사용자 정의 브리지, host.docker.internal
- 길이: 715줄
- 소제목: 컨테이너 안의 localhost는 컨테이너 자신이다 / 네트워크 드라이버 다섯 가지 / 이름으로 찾아가는 사용자 정의 브리지 / -p 한 줄이 만드는 것 / 컨테이너에서 호스트로 가는 길 / docker rm 하면 데이터가 왜 사라지나 / 데이터를 바깥에 두는 네 가지 방법 / -v와 --mount 읽기 / 볼륨을 만들고 들여다보기 / 볼륨을 tar로 백업하고 되살리기 / 바인드 마운트와 UID / Postgres와 앱을 처음부터 다시 띄우기 / 격리를 얼마나 풀어 줄지 정하는 일 / 면접에서 나올 만한 질문
- 직접 링크 →: docker-container-basics, dockerfile-image-layers, iptables-nat, docker-compose
- 키워드 백링크 →: nginx-basics, iptables-basics, k8s-cni-pod-network, docker-network-drivers, k8s-pod-troubleshooting, postgres-operations, proxy-reverse-proxy, layer-link-ethernet-arp, docker-commands-workflow, k8s-coredns, sdn-vxlan-overlay, redis-basics, ipv6-basics, udp-and-quic, dns
- 이 글로 오는 글 ←: devops-networking-roadmap, docker-commands-workflow, docker-compose, docker-network-drivers, dockerfile-image-layers, k8s-cri-cni-csi, k8s-learning-roadmap, k8s-pv-pvc, layer-link-ethernet-arp, linux-files-permissions, network-troubleshooting-by-layer, ports-and-sockets

#### `dockerfile-image-layers` — Dockerfile과 이미지 레이어: 빠르고 작은 이미지 만들기

- 요약: Dockerfile 명령이 레이어가 되고 빌드 캐시가 처음 바뀐 줄에서 끊기는 원리를 보고, 의존성 먼저 복사하기, 멀티 스테이지 빌드, 베이스 이미지 선택, BuildKit 캐시 마운트로 빌드를 빠르게, 이미지를 작게 만든다.
- 태그: Docker, Container, DevOps, Performance
- 키워드: Dockerfile, 멀티 스테이지 빌드, 빌드 캐시, BuildKit, distroless
- 길이: 727줄
- 소제목: 문제가 된 Dockerfile / 명령어 한 줄씩 읽기 / ENTRYPOINT와 CMD, exec 형식과 셸 형식 / 명령 하나가 레이어 한 장 / 캐시는 처음 바뀐 줄에서 끊긴다 / 잘 안 바뀌는 것을 위에 둔다 / .dockerignore로 보내는 것부터 줄인다 / 빌드 도구는 두고 결과만 옮기는 멀티 스테이지 빌드 / 베이스 이미지: slim, alpine, distroless / root가 아닌 사용자로, 상태는 HEALTHCHECK로 / BuildKit 캐시 마운트와 여러 아키텍처 빌드 / 태그 붙여 올리고, 올리기 전에 검사하기 / 빌드는 됐는데 서버에서 안 뜰 때 / 처음 문제로 돌아가면 / 면접에서 나올 만한 질문
- 직접 링크 →: docker-container-basics, docker-network-volume
- 키워드 백링크 →: k8s-pod-probes, github-actions-docker-ecr, docker-compose, k8s-architecture, k8s-pod-troubleshooting, dns
- 이 글로 오는 글 ←: backend-engineer-roadmap, build-caching, curl-for-debugging, dependency-hell, docker-commands-workflow, docker-compose, docker-container-basics, docker-network-drivers, docker-network-volume, git-tips-advanced, github-actions-docker-ecr, iac-basics, k8s-certifications, k8s-cri-cni-csi, k8s-learning-roadmap, k8s-pod-lifecycle, k8s-pod-troubleshooting, k8s-project-structure, kubectl-essentials, linux-files-permissions, linux-namespaces-cgroups, linux-systemd-systemctl, secrets-management

### Programming › Server/Infra › IaC (`programming/server-infra/iac`)

#### `ansible-network-automation` — Ansible로 네트워크 설정 자동화: 몇 번을 돌려도 같은 결과

- 요약: 서버마다 다른 sysctl 값과 방화벽 규칙에서 출발해 인벤토리와 group_vars, 모듈의 멱등성, --check --diff, 템플릿과 핸들러, 규칙을 한 줄씩 맞출지 파일 전체로 맞출지, serial과 rescue로 한 대씩 바꾸고 되돌리는 법, cisco.ios 리소스 모듈까지 네임스페이스 실습으로 따라간다.
- 태그: IaC, DevOps, Linux, Network, Firewall, Automation
- 키워드: Ansible, 플레이북, group_vars
- 길이: 682줄
- 소제목: Terraform이 들어가지 못하는 곳 / 인벤토리와 group_vars: 무엇을 어디에 적나 / 플레이북 한 번 돌리기 / 두 번째 실행은 아무것도 바꾸지 않아야 한다 / 바꾸기 전에 --check --diff / 설정 파일은 템플릿으로, 다시 읽기는 핸들러로 / 규칙을 한 줄씩 맞출까, 파일 전체를 맞출까 / 한 대씩 바꾸고, 틀리면 멈춘다 / 네트워크 장비도 같은 방식으로 / 현장에서 자동화가 사고를 키우는 순간 / 같은 값을 몇 번이고 / 면접에서 나올 만한 질문
- 직접 링크 →: terraform-network-iac, iptables-basics, iptables-nat, network-config-cicd
- 키워드 백링크 →: terraform-basics, security-groups-nacl, vlan-basics, vpc-basics, http-methods
- 이 글로 오는 글 ←: devops-networking-roadmap, iac-basics, k8s-operators, network-config-cicd, rolling-deployment, terraform-basics, terraform-network-iac

#### `iac-basics` — IaC 기본 개념: 선언형, state, 불변 인프라와 조정 루프

- 요약: 손으로 고친 서버가 서로 달라지는 문제에서 출발해 명령형 스크립트와 선언형 수렴의 차이, 멱등성, state가 필요한 이유, 도구가 읽지 못하는 것은 관리하지 못한다는 한계, 가변과 불변 인프라, 한 번 맞추는 도구와 계속 맞추는 조정 루프를 직접 확인한다. Terraform, Pulumi, CloudFormation, Ansible을 고르는 기준도 정리한다.
- 태그: tesla, IaC, Terraform, DevOps, GitOps, Linux · 회사: tesla
- 키워드: 선언형 인프라, 불변 인프라, 조정 루프, 구성 드리프트, Pulumi
- 길이: 570줄
- 소제목: 손으로 만든 서버는 서로 조금씩 다르다 / 스크립트도 코드인데 무엇이 다른가 / 원하는 모습을 적고 차이만 메운다 / 차이를 계산하려면 기억이 필요하다 / 도구가 읽지 못하는 것은 관리하지 못한다 / 고쳐 쓸까, 새로 갈아 끼울까 / 한 번 맞추는 도구와 계속 맞추는 도구 / 도구를 고르는 기준 / 코드로 바꾸면 리뷰할 수 있다 / IaC가 오히려 사고를 키우는 순간 / 같은 결과를 몇 번이고 만들 수 있게 / 면접에서 나올 만한 질문
- 직접 링크 →: terraform-basics, terraform-modules-tfvars, terraform-network-iac, ansible-network-automation, network-config-cicd, dockerfile-image-layers, helm-dependencies-oci-gitops, secrets-management
- 키워드 백링크 →: k8s-api-objects, disaster-recovery, rollback-strategy, security-groups-nacl, osi-in-practice, vpc-basics, http-methods, dns
- 이 글로 오는 글 ←: devops-networking-roadmap, local-k8s-kind-minikube, sd-multi-datacenter, sd-queue-logging-automation, terraform-basics

#### `terraform-basics` — Terraform 기본: plan, apply, state와 잠금

- 요약: 콘솔에서 연 규칙을 아무도 설명하지 못하는 상황에서 출발해 프로바이더와 리소스, plan이 비교하는 세 가지, 교체를 뜻하는 기호, state 파일에 든 것과 git에 넣지 않는 이유, drift, state 명령, 원격 백엔드와 잠금, force-unlock의 위험을 실제 출력으로 따라간다.
- 태그: tesla, Terraform, IaC, DevOps, AWS · 회사: tesla
- 키워드: Terraform, terraform plan, state 파일, force-unlock
- 길이: 665줄
- 소제목: 콘솔 대신 코드로 적는 이유 / 프로바이더와 리소스 / plan은 세 가지를 맞대 본다 / 기호 하나가 다운타임을 말한다 / state 파일 안에 든 것 / state를 git에 넣지 않는 이유 / 콘솔에서 고친 것은 drift가 된다 / state를 손보는 명령 / 원격 백엔드로 옮기기 / 두 사람이 동시에 apply하면 / force-unlock을 치기 전에 / 현장에서 state 때문에 막히는 순간 / 기억은 state가, 판단은 plan이 / 면접에서 나올 만한 질문
- 직접 링크 →: terraform-modules-tfvars, terraform-network-iac, iac-basics, ansible-network-automation, git-large-files-secrets, distributed-lock, k8s-deploy-pipeline-eks
- 키워드 백링크 →: json-crud-http, dependency-hell, db-type-key-value, security-groups-nacl, eks-cluster-basics, vpc-basics
- 이 글로 오는 글 ←: ansible-network-automation, cloud-cost-optimization, devops-networking-roadmap, eks-cluster-basics, github-actions-docker-ecr, grafana-dashboards, iac-basics, k8s-admission-control, k8s-deploy-pipeline-eks, k8s-namespace, k8s-pod-security-admission, k8s-project-structure, network-config-cicd, sd-queue-logging-automation, terraform-modules-tfvars, terraform-network-iac, vpc-basics

#### `terraform-modules-tfvars` — Terraform 모듈과 tfvars: 환경마다 복사하지 않기

- 요약: 디렉터리를 복사해 환경을 늘리다 어긋난 경험에서 출발해 모듈 구조, 변수 검증, locals, outputs, count와 for_each의 주소, 값이 들어오는 순서, 환경별 tfvars와 state 분리, workspace를 쓸 때, 버전 고정, 레지스트리 모듈을 감싸 쓰는 법을 정리한다.
- 태그: Terraform, IaC, DevOps, AWS
- 키워드: Terraform 모듈, tfvars, for_each, terraform workspace
- 길이: 669줄
- 소제목: 폴더 하나가 모듈 하나 / 변수에 규칙을 건다 / 계산은 locals에 모은다 / 모듈의 값은 outputs로만 나온다 / count로 만들면 순서가 주소가 된다 / 값은 어디서 들어오나 / 환경마다 tfvars와 state를 나눈다 / workspace는 언제 쓰나 / 버전을 묶는 세 군데 / 레지스트리 모듈을 감싸서 쓴다 / 모듈을 나누다 생기는 사고 / 같은 코드, 다른 값 / 면접에서 나올 만한 질문
- 직접 링크 →: terraform-basics, terraform-network-iac, eks-cluster-basics, layer-ip-addressing, k8s-project-structure
- 키워드 백링크 →: docker-container-basics, security-groups-nacl, ipv6-basics, vpc-basics
- 이 글로 오는 글 ←: devops-networking-roadmap, eks-cluster-basics, iac-basics, k8s-deploy-pipeline-eks, k8s-namespace, k8s-project-structure, terraform-basics, terraform-network-iac

#### `terraform-network-iac` — 네트워크를 Terraform으로: 주소 계획부터 끊기지 않는 변경까지

- 요약: 보안 그룹 설명 한 줄을 고쳤다가 연결이 끊긴 일에서 출발해 cidrsubnet으로 주소를 고정하는 법, 인라인과 개별 규칙을 섞을 때 생기는 흔들림, 교체 순서와 두 단계 교체, 제자리 수정으로 숨는 위험, 손으로 만든 규칙 import, tfsec·checkov·conftest 정책 검사를 실제 출력으로 따라간다.
- 태그: Terraform, IaC, AWS, Network, DevOps, Security
- 키워드: cidrsubnets, create_before_destroy, conftest
- 길이: 679줄
- 소제목: 네트워크 리소스는 서로 물려 있다 / 주소 계획을 코드에 먼저 적는다 / VPC 한 벌을 for_each로 짓는다 / 보안 그룹 규칙을 적는 세 가지 방법 / 인라인과 개별 규칙을 섞으면 plan이 끝나지 않는다 / 설명 한 줄 고쳤는데 보안 그룹이 갈아 끼워진다 / 물결표 하나가 서브넷을 인터넷에서 떼어 낸다 / 콘솔에서 연 규칙을 코드로 데려오기 / plan을 사람 눈 대신 정책으로 한 번 더 본다 / 현장에서 네트워크 plan을 읽는 순서 / 코드는 바꾸되 길은 끊지 않는다 / 면접에서 나올 만한 질문
- 직접 링크 →: terraform-basics, terraform-modules-tfvars, vpc-basics, vpc-subnets-route-tables, security-groups-nacl, vpc-peering-transit-privatelink, layer-ip-addressing, network-flow-logs, network-config-cicd, ansible-network-automation
- 이 글로 오는 글 ←: ansible-network-automation, devops-networking-roadmap, iac-basics, network-config-cicd, security-groups-nacl, terraform-basics, terraform-modules-tfvars, vpc-basics

### Programming › Server/Infra › Kubernetes (`programming/server-infra/kubernetes`)

#### `gateway` — 게이트웨이: API 게이트웨이에서 Kubernetes Gateway API까지

- 요약: 흩어진 서비스 앞에 입구를 하나 세우는 API 게이트웨이를 리버스 프록시·로드 밸런서와 비교하고, Ingress의 뒤를 잇는 Gateway API가 역할을 어떻게 나누는지 정리한다.
- 태그: coupang, Kubernetes, Gateway, Ingress, HTTP · 회사: coupang
- 키워드: API 게이트웨이, Gateway API, HTTPRoute, ReferenceGrant, BFF
- 길이: 485줄
- 소제목: 입구를 하나로 모으기 / 로드 밸런서, 리버스 프록시와 무엇이 다른가 / 게이트웨이가 너무 똑똑해지면 / 쿠버네티스의 입구, Ingress로는 부족했던 것 / 리소스를 역할별로 나눈 Gateway API / HTTPRoute 뜯어보기 / 헤더로 고르고 비율로 나누기 / 네임스페이스를 넘어 참조하기 / Ingress에서 옮겨 갈 때 / 게이트웨이를 사이에 두고 로그가 엇갈릴 때 / 입구 하나, 규칙은 여러 사람이 / 면접에서 나올 만한 질문
- 직접 링크 →: kubernetes-ingress, k8s-gateway-api, resilience-patterns
- 키워드 백링크 →: rate-limiting-in-practice, canary-release, k8s-network-policy, osi-in-practice, docker-container-basics, proxy-reverse-proxy, reverse-proxy-lb-api-gateway, cilium-ebpf, token-login, redis-basics, what-happens-google-com, grpc, https-tls, udp-and-quic, http-methods, dns
- 이 글로 오는 글 ←: api-gateway-use-cases, api-scaling-ladder, api-styles-overview, authn-vs-authz, canary-release, devops-networking-roadmap, distributed-tracing, graphql-basics, grpc, http-methods, http-status-codes, https-tls, k8s-admission-control, k8s-certifications, k8s-deployment, k8s-gateway-api, k8s-learning-roadmap, k8s-network-policy, k8s-storageclass-snapshots, kubernetes-ingress, microservices, mvc-pattern, network-layers-overview, nginx-reverse-proxy, osi-in-practice, pattern-facade, proxy-reverse-proxy, rate-limiting-in-practice, resilience-patterns, rest-api-design, reverse-proxy-lb-api-gateway, sd-hotel-double-booking, sd-interview-framework, sd-rate-limiter-design, service-mesh, system-design-concepts-map

#### `kubernetes-ingress` — Kubernetes Ingress: 로드 밸런서 하나로 여러 서비스 열기

- 요약: 서비스마다 로드 밸런서를 다는 대신 Ingress 규칙과 컨트롤러로 입구를 하나로 합친다. host·path 라우팅, TLS 종료와 cert-manager, 요청이 Pod에 닿는 경로와 흔한 에러까지 따라가 본다.
- 태그: Kubernetes, Ingress, HTTP, TLS
- 키워드: Ingress, Ingress Controller, ingress-nginx, IngressClass, cert-manager
- 길이: 433줄
- 소제목: 서비스마다 로드 밸런서를 달면 / 규칙과 규칙을 실행하는 쪽 / 매니페스트 한 줄씩 읽기 / 경로가 겹치면 누가 이기나 / 요청 하나가 Pod에 닿기까지 / HTTPS는 컨트롤러에서 끝난다 / 어노테이션이 자꾸 늘어난다 / 502, 503, 413을 만났을 때 / Ingress가 하는 일, 다시 / 면접에서 나올 만한 질문
- 직접 링크 →: gateway, network-troubleshooting-by-layer, packet-capture-tcpdump
- 키워드 백링크 →: k8s-service-types, k8s-pod-probes, proxy-reverse-proxy, iptables-nat, osi-in-practice, docker-container-basics, https-tls, k8s-admission-control, k8s-pod-lifecycle, reverse-proxy-lb-api-gateway, service-mesh, http-status-codes, what-happens-google-com, cors, first-page-from-power-on, dns, webhooks
- 이 글로 오는 글 ←: argocd-basics, canary-release, cookie-session-login, curl-for-debugging, devops-networking-roadmap, docker-compose, eks-cluster-basics, encryption-in-transit, external-secrets, gateway, gitops-argocd-vs-flux, grpc, helm-basics, helm-release-lifecycle, http-message, https-tls, iptables-nat, k8s-admission-control, k8s-api-objects, k8s-architecture, k8s-audit-logging, k8s-certificates-pki, k8s-certifications, k8s-cluster-upgrade, k8s-crd, k8s-deploy-pipeline-eks, k8s-deployment, k8s-feature-maturity, k8s-gateway-api, k8s-learning-roadmap, k8s-namespace, k8s-network-policy, k8s-operators, k8s-pod-basics, k8s-pod-lifecycle, k8s-pod-probes, k8s-pod-troubleshooting, k8s-project-structure, k8s-secret, k8s-service-types, kubectl-essentials, osi-in-practice, prometheus-basics, reverse-proxy-lb-api-gateway, service-mesh, velero-backup

#### `local-k8s-kind-minikube` — 로컬 쿠버네티스 고르기: kind, minikube, k3d, kwok

- 요약: 네 도구가 각각 무엇을 진짜로 띄우는지에서 출발해 kwok으로 2초 만에 클러스터를 만들고 노드 100개·Pod 1000개를 올려 보며 kubelet 없는 클러스터의 한계를 확인한다. kind의 노드 컨테이너와 이미지 넣기, LoadBalancer·CNI 같은 로컬 클러스터의 빈자리와 일에 맞는 선택 기준을 정리한다.
- 태그: Kubernetes, DevOps, Local Dev, Docker
- 키워드: minikube, kwok, k3d, 로컬 클러스터
- 길이: 411줄
- 소제목: 넷이 띄우는 것은 서로 다르다 / kwok은 2초 만에 클러스터를 띄운다 / Running인데 아무것도 돌지 않는다 / 노드 100개, Pod 1000개를 1분 안에 / kind는 컨테이너를 노드로 쓴다 / 로컬 클러스터에서 안 되는 것들 / 일에 맞춰 고른다 / 다 쓰고 나면 지운다 / 진짜여야 하는 것만큼 무겁게 / 면접에서 나올 만한 질문
- 직접 링크 →: k8s-architecture, kubeconfig-contexts, k8s-network-policy, k8s-cni-pod-network, linux-namespaces-cgroups, k8s-feature-maturity, kubectl-essentials
- 키워드 백링크 →: k8s-hpa, k8s-service-types, k8s-storageclass-snapshots, k8s-pod-basics, iptables-nat, helm-dependencies-oci-gitops, k8s-cri-cni-csi, helm-basics, cilium-ebpf, db-type-embedded, iac-basics, k8s-pod-scheduling, db-type-key-value, react-rerender
- 이 글로 오는 글 ←: argocd-basics, cron-jobs, curl-for-debugging, external-secrets, gitops-argocd-vs-flux, helm-basics, helm-dependencies-oci-gitops, helm-release-lifecycle, helm-values-secrets, k8s-admission-control, k8s-api-aggregation-schedulers, k8s-api-objects, k8s-architecture, k8s-audit-logging, k8s-batch-kueue, k8s-certificates-pki, k8s-certifications, k8s-cluster-upgrade, k8s-cni-pod-network, k8s-configmap, k8s-controllers-reconcile, k8s-coredns, k8s-crd, k8s-cri-cni-csi, k8s-daemonset, k8s-deploy-pipeline-eks, k8s-deployment, k8s-etcd-backup, k8s-feature-maturity, k8s-gateway-api, k8s-gpu-dra, k8s-hpa, k8s-in-place-resize, k8s-job-cronjob, k8s-labels-selectors, k8s-learning-roadmap, k8s-namespace, k8s-network-policy, k8s-node-autoscaling-karpenter, k8s-node-maintenance, k8s-operators, k8s-pod-basics, k8s-pod-disruption-budget, k8s-pod-lifecycle, k8s-pod-multicontainer, k8s-pod-probes, k8s-pod-resources, k8s-pod-scheduling, k8s-pod-security-admission, k8s-pod-troubleshooting, k8s-project-structure, k8s-pv-pvc, k8s-rbac, k8s-secret, k8s-security-context, k8s-service-types, k8s-serviceaccount-tokens, k8s-statefulset, k8s-storageclass-snapshots, k8s-vpa, kubeconfig-contexts, kubectl-apply-ssa, kubectl-essentials, kustomize-basics, leader-election, optimistic-locking, prometheus-basics, rollback-strategy, velero-backup, yaml-for-k8s

### Programming › Server/Infra › Kubernetes › Config & Storage (`programming/server-infra/kubernetes/config`)

#### `external-secrets` — External Secrets Operator: 외부 저장소의 값을 Secret으로 옮기는 동안

- 요약: SecretStore·ClusterSecretStore·ExternalSecret이 나눠 맡는 일과 컨트롤러의 동기화 주기를 따라가며, refreshInterval과 앱이 새 값을 쓰는 시점의 차이, Secret의 주인과 삭제, 저장소 장애, 팀 간 권한 구멍을 다룬다. CSI 드라이버·Sealed Secrets·SOPS와 고르는 기준도 정리한다.
- 태그: Kubernetes, Security, DevOps, AWS
- 키워드: External Secrets Operator, ExternalSecret, ClusterSecretStore, Sealed Secrets
- 길이: 396줄
- 소제목: 세 객체가 나눠 맡는 일 / 컨트롤러가 한 바퀴 도는 동안 / refreshInterval은 앱까지 걸리는 시간이 아니다 / 받은 값을 모양 바꿔 넣기 / 만들어진 Secret의 주인은 누구인가 / 저장소가 죽으면 무슨 일이 생기나 / ClusterSecretStore를 열어 두면 생기는 구멍 / CSI 드라이버, Sealed Secrets, SOPS와 나눠 보기 / 동기화가 안 될 때 보는 순서 / 복사해 주는 것까지가 ESO의 일 / 면접에서 나올 만한 질문
- 직접 링크 →: k8s-secret, secrets-management, helm-values-secrets, k8s-configmap
- 키워드 백링크 →: kubernetes-ingress, k8s-cri-cni-csi, k8s-architecture, helm-basics, iam-basics, base64, sd-object-storage-architecture, local-k8s-kind-minikube, eks-cluster-basics, db-type-key-value
- 이 글로 오는 글 ←: gitops-argocd-vs-flux, helm-values-secrets, k8s-learning-roadmap, k8s-project-structure, k8s-secret, secrets-management

#### `k8s-configmap` — ConfigMap: 설정은 언제 Pod에 닿나

- 요약: 환경 변수, 볼륨, subPath에 따라 ConfigMap 값이 언제 읽히고 언제 바뀌는지 따라가고, 해시 어노테이션과 이름 해시로 롤아웃을 일으키는 법, immutable과 1MiB 한도까지 실습 클러스터에서 확인한다.
- 태그: Kubernetes, DevOps, Troubleshooting
- 키워드: ConfigMap, subPath, configMapGenerator, immutable ConfigMap
- 길이: 594줄
- 소제목: 이미지 하나를 여러 환경에서 쓰려면 / ConfigMap을 만드는 세 가지 방법 / Pod에 넣는 두 가지 길 / 없는 ConfigMap을 가리키면 Pod가 뜨지 않는다 / 환경 변수는 컨테이너가 뜰 때 한 번만 읽힌다 / 마운트한 파일은 늦게 바뀐다 / subPath로 꽂은 파일은 끝까지 그대로다 / 설정이 바뀌면 Pod를 다시 띄우게 하기 / immutable로 잠그기 / 1MiB를 넘으면 만들어지지 않는다 / 설정이 안 먹을 때 보는 순서 / ConfigMap은 언제 무엇을 읽나 / 면접에서 나올 만한 질문
- 직접 링크 →: k8s-namespace, k8s-secret, k8s-pod-multicontainer, helm-chart-templates, k8s-pv-pvc
- 키워드 백링크 →: k8s-pod-basics, helm-dependencies-oci-gitops, k8s-architecture, helm-basics, latency-bandwidth-throughput, sd-email-protocols, local-k8s-kind-minikube, db-type-key-value
- 이 글로 오는 글 ←: argocd-basics, ci-cd-basics, eks-cluster-basics, encryption-in-transit, external-secrets, gitops-argocd-vs-flux, grafana-dashboards, helm-basics, helm-chart-templates, helm-dependencies-oci-gitops, k8s-admission-control, k8s-api-aggregation-schedulers, k8s-api-objects, k8s-audit-logging, k8s-certifications, k8s-cluster-upgrade, k8s-controllers-reconcile, k8s-crd, k8s-deploy-pipeline-eks, k8s-deployment, k8s-etcd-backup, k8s-gpu-dra, k8s-learning-roadmap, k8s-namespace, k8s-node-autoscaling-karpenter, k8s-pod-multicontainer, k8s-pod-troubleshooting, k8s-project-structure, k8s-pv-pvc, k8s-secret, k8s-storageclass-snapshots, kubectl-apply-ssa, kubectl-essentials, kustomize-basics, optimistic-locking, rollback-strategy, velero-backup, yaml-for-k8s

#### `k8s-pv-pvc` — PV와 PVC: Pod보다 오래 사는 디스크

- 요약: PVC가 PV에 묶이는 규칙, 접근 모드, StorageClass와 WaitForFirstConsumer, 존에 묶인 디스크 때문에 생기는 Pending, Retain과 Delete 회수 정책의 함정, 용량 확장, StatefulSet의 PVC, Multi-Attach 오류까지 실습 클러스터의 실제 출력으로 따라간다.
- 태그: Kubernetes, DevOps, Troubleshooting, AWS
- 키워드: PersistentVolumeClaim, PersistentVolume, WaitForFirstConsumer, ReadWriteOnce
- 길이: 627줄
- 소제목: 컨테이너 안의 파일은 Pod와 함께 사라진다 / 디스크를 요청하는 쪽과 내주는 쪽 / 미리 만든 PV에 PVC가 묶이는 과정 / 접근 모드는 Pod가 아니라 노드를 센다 / StorageClass가 디스크를 만들어 준다 / 노드가 정해진 뒤에 디스크를 만든다 / 디스크가 다른 존에 있으면 Pod가 못 간다 / PVC를 지우면 디스크는 어떻게 되나 / 쓰는 중인 PVC는 지워지지 않는다 / 용량 늘리기 / StatefulSet은 Pod마다 PVC를 만든다 / 현장에서 볼륨 때문에 Pod가 안 뜰 때 / Pod보다 오래 사는 데이터 / 면접에서 나올 만한 질문
- 직접 링크 →: k8s-configmap, docker-network-volume, k8s-pod-resources, k8s-pod-scheduling, k8s-deployment, k8s-secret
- 키워드 백링크 →: k8s-pod-security-admission, k8s-labels-selectors, k8s-storageclass-snapshots, k8s-statefulset, k8s-daemonset, k8s-cri-cni-csi, k8s-architecture, cloud-cost-optimization, centralized-logging-pipeline, k8s-node-maintenance, vpc-basics, local-k8s-kind-minikube, eks-cluster-basics
- 이 글로 오는 글 ←: argocd-basics, eks-cluster-basics, k8s-certifications, k8s-configmap, k8s-cri-cni-csi, k8s-deploy-pipeline-eks, k8s-deployment, k8s-etcd-backup, k8s-learning-roadmap, k8s-namespace, k8s-pod-troubleshooting, k8s-project-structure, k8s-secret, k8s-statefulset, k8s-storageclass-snapshots

#### `k8s-secret` — Secret: base64는 암호가 아니다

- 요약: Secret 값이 etcd에 평문으로 저장되는 것을 직접 확인하고, 저장 시 암호화와 키 교체, list 권한까지 챙기는 RBAC, 환경 변수와 파일의 차이, imagePullSecrets, 외부 저장소 연동과 값이 샜을 때의 교체 순서를 다룬다.
- 태그: Kubernetes, Security, DevOps
- 키워드: Kubernetes Secret, EncryptionConfiguration, imagePullSecrets, Secrets Store CSI Driver
- 길이: 693줄
- 소제목: base64는 암호가 아니다 / ConfigMap과 무엇이 다른가 / stringData와 last-applied에 남는 평문 / 값이 지나가고 머무는 곳 / etcd에는 평문으로 들어간다 / API 서버가 etcd에 쓰기 전에 암호화하기 / 누가 Secret을 읽을 수 있나 / 환경 변수로 넣을까, 파일로 넣을까 / 레지스트리 인증 imagePullSecrets / 클러스터 밖에 원본을 두는 방법 / 비밀 값이 새는 길과 새고 난 뒤 / Secret이 지켜 주는 것과 아닌 것 / 면접에서 나올 만한 질문
- 직접 링크 →: k8s-configmap, base64, db-type-key-value, k8s-namespace, k8s-pod-troubleshooting, helm-values-secrets, helm-basics, k8s-pv-pvc
- 키워드 백링크 →: kubectl-apply-ssa, external-secrets, k8s-cri-cni-csi, grpc, k8s-architecture, cron-jobs, kubernetes-ingress, encryption-at-rest, linux-files-permissions, local-k8s-kind-minikube, github-actions-docker-ecr, eks-cluster-basics
- 이 글로 오는 글 ←: ci-cd-basics, eks-cluster-basics, external-secrets, helm-values-secrets, k8s-architecture, k8s-audit-logging, k8s-certificates-pki, k8s-certifications, k8s-configmap, k8s-cri-cni-csi, k8s-deploy-pipeline-eks, k8s-etcd-backup, k8s-learning-roadmap, k8s-namespace, k8s-pod-troubleshooting, k8s-project-structure, k8s-pv-pvc, k8s-rbac, kubectl-apply-ssa, kustomize-basics, secrets-management, yaml-for-k8s

#### `k8s-storageclass-snapshots` — StorageClass와 VolumeSnapshot: 디스크를 고르고, 찍고, 되살리기

- 요약: 만든 뒤 고칠 수 없는 StorageClass를 등급별로 설계하는 법과 기본 class가 둘일 때의 함정을 보고, 실제 CSI 드라이버로 VolumeSnapshot을 찍고 되살린다. 다른 네임스페이스로 넘기는 법, 스냅샷이 백업이 아닌 이유, 1.36에 GA가 된 볼륨 그룹 스냅샷까지 다룬다.
- 태그: Kubernetes, DevOps, Troubleshooting, AWS, Database
- 키워드: StorageClass, VolumeSnapshot, VolumeGroupSnapshot, VolumeAttributesClass
- 길이: 597줄
- 소제목: StorageClass는 한 번 만들면 고칠 수 없다 / 프로비저너가 디스크를 만드는 길 / 스냅샷은 CRD와 컨트롤러 둘이 만든다 / 스냅샷에서 되살리기 / 스냅샷은 백업이 아니다 / 여러 볼륨을 같은 순간에 찍기 / 스냅샷이 안 찍히거나 안 되살아날 때 / 고르고, 찍고, 되살리는 순서 / 면접에서 나올 만한 질문
- 직접 링크 →: k8s-pv-pvc, backup-strategy
- 키워드 백링크 →: k8s-cri-cni-csi, gateway, k8s-statefulset, k8s-pod-scheduling, k8s-daemonset, k8s-api-objects, k8s-configmap, docker-container-basics, k8s-architecture, cron-jobs, velero-backup, local-k8s-kind-minikube, grpc
- 이 글로 오는 글 ←: k8s-certifications, k8s-cri-cni-csi, k8s-deploy-pipeline-eks, k8s-gpu-dra, k8s-learning-roadmap, k8s-namespace, k8s-pod-troubleshooting, k8s-project-structure, k8s-pv-pvc, k8s-statefulset, local-k8s-kind-minikube, velero-backup

### Programming › Server/Infra › Kubernetes › EKS (`programming/server-infra/kubernetes/eks`)

#### `eks-cluster-basics` — EKS 기본: IAM으로 들어오고 VPC에서 IP를 받는 클러스터

- 요약: 동료의 kubectl이 로그인에 실패하고 서브넷 IP가 바닥나는 두 장면에서 출발해 AWS 계정의 컨트롤 플레인, IAM 인증과 access entry, 노드 그룹·Fargate·Karpenter, VPC CNI가 Pod에 VPC IP를 주는 방식과 IP 고갈 계산, IRSA와 Pod Identity, 애드온과 버전 주기를 다룬다.
- 태그: Kubernetes, AWS, Cloud, DevOps, Network
- 키워드: EKS, access entry, VPC CNI, IRSA, EKS Pod Identity
- 길이: 559줄
- 소제목: 컨트롤 플레인은 AWS 계정에 있다 / kubectl이 IAM으로 로그인하는 길 / access entry가 aws-auth를 대신한다 / 노드를 누가 띄우나 / Pod IP가 VPC에서 나온다 / 서브넷 IP가 먼저 바닥난다 / Pod에 AWS 권한 주기 / 애드온도 버전이 있다 / 1년에 세 번 올라오는 버전 / EKS에서 막히는 순간 / IAM으로 들어오고 VPC에서 주소를 받는다 / 면접에서 나올 만한 질문
- 직접 링크 →: terraform-modules-tfvars, k8s-secret, k8s-hpa, k8s-cni-pod-network, vpc-subnets-route-tables, k8s-serviceaccount-tokens, k8s-coredns, k8s-pv-pvc, k8s-deploy-pipeline-eks
- 키워드 백링크 →: k8s-pod-disruption-budget, k8s-node-autoscaling-karpenter, kubectl-essentials, kubernetes-ingress, centralized-logging-pipeline, k8s-daemonset, network-flow-logs, terraform-basics, k8s-configmap, base64, k8s-cri-cni-csi, ipv6-basics, k8s-architecture, helm-basics, k8s-node-maintenance, iam-basics, ssrf, autoscaling, security-groups-nacl, what-happens-google-com, layer-ip-addressing, db-type-key-value, vpc-basics, dns, webhooks
- 이 글로 오는 글 ←: chaos-engineering, devops-networking-roadmap, docker-network-drivers, external-secrets, github-actions-docker-ecr, gitops-argocd-vs-flux, helm-values-secrets, iam-basics, jenkins-pipeline-basics, k8s-api-aggregation-schedulers, k8s-architecture, k8s-audit-logging, k8s-certificates-pki, k8s-cluster-upgrade, k8s-cni-pod-network, k8s-cri-cni-csi, k8s-daemonset, k8s-deploy-pipeline-eks, k8s-etcd-backup, k8s-feature-maturity, k8s-gpu-dra, k8s-hpa, k8s-learning-roadmap, k8s-namespace, k8s-node-autoscaling-karpenter, k8s-pod-disruption-budget, k8s-pod-security-admission, k8s-project-structure, k8s-pv-pvc, k8s-rbac, k8s-secret, k8s-serviceaccount-tokens, kubeconfig-contexts, layer-ip-addressing, network-flow-logs, sdn-vxlan-overlay, secrets-management, terraform-basics, terraform-modules-tfvars, velero-backup, vpc-basics, vpc-subnets-route-tables

### Programming › Server/Infra › Kubernetes › Foundation (`programming/server-infra/kubernetes/foundation`)

#### `k8s-api-objects` — 쿠버네티스 API 오브젝트: spec과 status, resourceVersion, finalizer

- 요약: 매니페스트의 다섯 칸이 각각 누구의 것인지에서 출발해 API 그룹과 버전이 URL로 이어지는 방식, generation과 observedGeneration, resourceVersion과 409, ownerReferences와 가비지 컬렉션, 삭제를 붙잡는 finalizer를 실습 클러스터에서 따라간다.
- 태그: Kubernetes, DevOps, Troubleshooting
- 키워드: resourceVersion, observedGeneration, ownerReferences, finalizer
- 길이: 679줄
- 소제목: 매니페스트의 다섯 칸 / 스무 줄을 보냈는데 여든 줄이 돌아온다 / apiVersion은 그룹과 버전이다 / 오브젝트 하나는 URL 하나다 / 필드 이름은 explain에 물어본다 / spec은 사용자가, status는 컨트롤러가 / generation과 observedGeneration / resourceVersion은 낙관적 잠금의 버전 번호다 / 누가 누구를 만들었나, ownerReferences / 주인을 지우면 자식은 / finalizer가 삭제를 붙잡는다 / 매니페스트를 보낼 때 자주 만나는 에러 / 문서 하나에 담긴 약속 / 면접에서 나올 만한 질문
- 직접 링크 →: k8s-controllers-reconcile, k8s-labels-selectors, k8s-feature-maturity, kubectl-apply-ssa, k8s-namespace, optimistic-locking, k8s-crd
- 키워드 백링크 →: k8s-network-policy, k8s-pod-basics, k8s-configmap, docker-container-basics, cron-jobs, kubernetes-ingress, db-locking-deadlock, what-happens-google-com, local-k8s-kind-minikube, db-type-key-value, k8s-hpa, dns
- 이 글로 오는 글 ←: argocd-basics, iac-basics, k8s-architecture, k8s-certifications, k8s-controllers-reconcile, k8s-crd, k8s-cri-cni-csi, k8s-etcd-backup, k8s-feature-maturity, k8s-labels-selectors, k8s-learning-roadmap, k8s-namespace, k8s-node-autoscaling-karpenter, k8s-operators, k8s-pod-lifecycle, k8s-pod-troubleshooting, k8s-storageclass-snapshots, kubectl-apply-ssa, kubectl-essentials, leader-election

#### `k8s-architecture` — 쿠버네티스 구조: kubectl apply 뒤에서 움직이는 부품들

- 요약: API 서버, etcd, 스케줄러, 컨트롤러 매니저, cloud-controller-manager와 노드의 kubelet, kube-proxy, 런타임이 각각 무엇을 맡는지 보고, Deployment 하나가 apply된 뒤의 흐름을 따라간다. 실습 클러스터에서 부품을 하나씩 멈춰 어디서 흐름이 끊기는지 확인한다.
- 태그: Kubernetes, DevOps, Distributed Systems, Troubleshooting
- 키워드: 쿠버네티스 컨트롤 플레인, kube-apiserver, kube-controller-manager, kubelet
- 길이: 574줄
- 소제목: 모든 부품은 API 서버하고만 이야기한다 / kubectl apply 한 줄이 지나가는 길 / watch 하나로 상태가 흘러간다 / etcd에는 무엇이 어떻게 들어 있나 / 부품을 하나씩 멈춰 보면 / 리더는 Lease 하나로 정한다 / cloud-controller-manager가 없으면 생기는 일 / 현장에서 어느 부품을 의심할까 / 부품은 각자 자기 오브젝트만 본다 / 면접에서 나올 만한 질문
- 직접 링크 →: k8s-api-objects, k8s-controllers-reconcile, kubectl-apply-ssa, k8s-pod-scheduling, k8s-pod-lifecycle, optimistic-locking, k8s-secret, raft-consensus, k8s-etcd-backup, leader-election, eks-cluster-basics, k8s-service-types, k8s-cni-pod-network, iptables-nat
- 키워드 백링크 →: k8s-pod-basics, local-k8s-kind-minikube, grpc, iptables-basics, health-checks, db-type-key-value, kubernetes-ingress, cilium-ebpf, osi-in-practice, high-availability
- 이 글로 오는 글 ←: autoscaling, cron-jobs, devops-networking-roadmap, dockerfile-image-layers, eks-cluster-basics, encryption-in-transit, exponential-backoff-jitter, express-middleware, external-secrets, fault-tolerance, health-checks, helm-chart-templates, k8s-admission-control, k8s-api-aggregation-schedulers, k8s-audit-logging, k8s-certificates-pki, k8s-certifications, k8s-cluster-upgrade, k8s-cni-pod-network, k8s-configmap, k8s-controllers-reconcile, k8s-coredns, k8s-crd, k8s-cri-cni-csi, k8s-daemonset, k8s-deploy-pipeline-eks, k8s-etcd-backup, k8s-feature-maturity, k8s-gpu-dra, k8s-hpa, k8s-in-place-resize, k8s-job-cronjob, k8s-kube-proxy-modes, k8s-learning-roadmap, k8s-namespace, k8s-network-policy, k8s-node-autoscaling-karpenter, k8s-node-maintenance, k8s-operators, k8s-pod-basics, k8s-pod-disruption-budget, k8s-pod-lifecycle, k8s-pod-multicontainer, k8s-pod-probes, k8s-pod-resources, k8s-pod-troubleshooting, k8s-pv-pvc, k8s-rbac, k8s-secret, k8s-security-context, k8s-service-types, k8s-serviceaccount-tokens, k8s-statefulset, k8s-storageclass-snapshots, k8s-vpa, kubeconfig-contexts, kubectl-essentials, leader-election, linux-files-permissions, linux-namespaces-cgroups, linux-systemd-systemctl, local-k8s-kind-minikube, pattern-bridge, pattern-singleton, prometheus-basics, raft-consensus, secrets-management, service-discovery, service-mesh, velero-backup, yaml-for-k8s

#### `k8s-controllers-reconcile` — 컨트롤러와 reconcile: 이벤트가 아니라 상태를 보고 움직인다

- 요약: 원하는 상태와 지금 상태를 맞추는 루프를 watch, informer, 작업 큐로 나눠 보고, level-triggered와 멱등성, 409 충돌 처리, 리더 선출을 Node로 만든 작은 컨트롤러를 실습 API 서버에 붙여 확인한다.
- 태그: Kubernetes, DevOps, Distributed Systems, Node.js
- 키워드: reconcile 루프, level-triggered, informer, 컨트롤 루프
- 길이: 550줄
- 소제목: 원하는 상태와 지금 상태 / 매번 물어보지 않고 지켜본다, watch / informer와 작업 큐 / 이벤트가 아니라 상태를 보고 움직인다 / 몇 번을 돌려도 같은 결과, 멱등성 / 409를 만나면 다시 읽는다 / Node로 만드는 작은 컨트롤러 / 돌려 보기: 만들고, 지우고, 다시 맞추기 / 하나만 일하게 하기, 리더 선출 / 컨트롤러가 일을 안 할 때 보는 순서 / 루프 하나, 세 가지 규칙 / 면접에서 나올 만한 질문
- 직접 링크 →: k8s-api-objects, k8s-labels-selectors, k8s-crd, k8s-operators, exponential-backoff-jitter, kubectl-apply-ssa, leader-election
- 키워드 백링크 →: k8s-architecture, k8s-pod-basics, k8s-configmap, resilience-patterns, local-k8s-kind-minikube, db-type-key-value, k8s-hpa, http-methods, webhooks
- 이 글로 오는 글 ←: k8s-api-objects, k8s-architecture, k8s-crd, k8s-etcd-backup, k8s-labels-selectors, k8s-learning-roadmap, k8s-operators, k8s-serviceaccount-tokens, kubectl-apply-ssa, kubectl-essentials

#### `k8s-feature-maturity` — alpha, beta, GA와 API 폐기: 업그레이드 전에 옛 API 찾기

- 요약: 기능의 feature gate와 API 버전이 따로 켜지는 방식, 폐기 정책의 기한, extensions/v1beta1과 PodSecurityPolicy가 사라진 과정을 보고, Warning 헤더·지표·감사 로그·pluto·kubectl convert로 업그레이드 전에 옛 API를 찾아 옮기는 법을 정리한다.
- 태그: Kubernetes, DevOps, Troubleshooting
- 키워드: feature gate, kubectl convert, apiserver_requested_deprecated_apis, pluto, API 폐기 정책
- 길이: 514줄
- 소제목: alpha, beta, GA가 약속하는 것 / 기능의 단계와 API의 단계는 따로 간다 / feature gate를 켜고 끄기 / 얼마나 오래 남아 있나, 폐기 정책 / 사라진 API의 역사 / 이미 돌고 있는 객체는 괜찮다 / 경고는 이미 와 있었다 / 누가 아직 옛 API를 부르나 / 매니페스트에서 미리 찾기: pluto / kubectl convert로 옮기기 / 업그레이드 전에 보는 순서 / 단계와 기한을 알면 업그레이드가 덜 무섭다 / 면접에서 나올 만한 질문
- 직접 링크 →: k8s-api-objects, k8s-cluster-upgrade, k8s-pod-security-admission, k8s-labels-selectors
- 키워드 백링크 →: k8s-admission-control, k8s-pod-disruption-budget, k8s-in-place-resize, k8s-architecture, k8s-deployment, k8s-network-policy, k8s-service-types, k8s-statefulset, k8s-api-aggregation-schedulers, k8s-pod-basics, k8s-daemonset, k8s-deploy-pipeline-eks, cron-jobs, helm-basics, kubernetes-ingress, local-k8s-kind-minikube, db-type-key-value, eks-cluster-basics, k8s-hpa, webhooks
- 이 글로 오는 글 ←: k8s-api-aggregation-schedulers, k8s-api-objects, k8s-batch-kueue, k8s-certifications, k8s-cluster-upgrade, k8s-crd, k8s-gpu-dra, k8s-learning-roadmap, local-k8s-kind-minikube

#### `k8s-labels-selectors` — 라벨과 셀렉터: 셀렉터 한 줄이 고르는 범위

- 요약: 라벨과 어노테이션의 차이, 등호·집합 셀렉터와 키가 없어도 통과하는 !=·notin의 함정, Service 엔드포인트가 넓어지는 사고, ReplicaSet과 Deployment가 남의 Pod를 입양하는 모습, 바꿀 수 없는 셀렉터와 권장 라벨, 필드 셀렉터를 실제로 재현한다.
- 태그: Kubernetes, DevOps, Troubleshooting
- 키워드: 라벨 셀렉터, matchExpressions, 필드 셀렉터, app.kubernetes.io/name
- 길이: 518줄
- 소제목: 라벨은 고르려고, 어노테이션은 적어 두려고 / 같다와 다르다로 고르기 / 집합으로 고르기 / 셀렉터는 URL 쿼리로 간다 / Service는 셀렉터로 엔드포인트를 만든다 / 셀렉터가 남의 Pod를 고르면 / Deployment 셀렉터는 왜 바꿀 수 없나 / 권장 라벨 app.kubernetes.io / 필드 셀렉터 / 라벨로 지울 때 / 라벨 한 줄이 정하는 범위 / 면접에서 나올 만한 질문
- 직접 링크 →: k8s-api-objects, k8s-controllers-reconcile, k8s-service-types, k8s-deployment, k8s-pod-scheduling, k8s-pod-troubleshooting
- 키워드 백링크 →: k8s-pod-disruption-budget, k8s-network-policy, k8s-statefulset, k8s-pod-basics, iptables-nat, k8s-daemonset, docker-container-basics, helm-basics, local-k8s-kind-minikube, dns
- 이 글로 오는 글 ←: argocd-basics, k8s-api-objects, k8s-certifications, k8s-controllers-reconcile, k8s-feature-maturity, k8s-learning-roadmap, k8s-operators, k8s-pod-basics, k8s-pv-pvc, kubectl-essentials, kustomize-basics

#### `kubeconfig-contexts` — kubeconfig와 컨텍스트: kubectl은 지금 어느 클러스터에 붙어 있나

- 요약: 한 터미널의 use-context가 다른 터미널의 delete를 운영으로 보내는 이유에서 출발해 kubeconfig의 세 목록, KUBECONFIG 병합 규칙과 이름 충돌, exec 자격 증명 플러그인, 터미널별 파일과 프롬프트, 읽기 전용 권한으로 실수를 막는 법을 정리한다.
- 태그: Kubernetes, DevOps, Security, Authentication
- 키워드: current-context, KUBECONFIG 병합, exec 플러그인, kubectx
- 길이: 582줄
- 소제목: 파일 하나에 목록 셋 / kubectl이 설정을 고르는 순서 / KUBECONFIG로 여러 파일 합치기 / 컨텍스트에 붙은 네임스페이스 / 비밀 대신 명령을 적는 exec 플러그인 / 엉뚱한 클러스터에 명령이 닿는 길 / 실수를 막는 장치들 / 클러스터 안의 Pod는 kubeconfig가 없다 / kubeconfig를 다룰 때 흔한 실수 / 파일 한 줄이 정하는 목적지 / 면접에서 나올 만한 질문
- 직접 링크 →: kubectl-essentials, kubectl-apply-ssa, kustomize-basics, k8s-namespace, eks-cluster-basics, k8s-rbac, k8s-serviceaccount-tokens
- 키워드 백링크 →: local-k8s-kind-minikube, k8s-architecture, token-login, linux-files-permissions
- 이 글로 오는 글 ←: k8s-certificates-pki, k8s-certifications, k8s-learning-roadmap, kubectl-apply-ssa, kubectl-essentials, kustomize-basics, local-k8s-kind-minikube

#### `kubectl-apply-ssa` — kubectl apply는 무엇을 비교하나: 클라이언트 apply와 서버 쪽 apply

- 요약: 손으로 늘린 replicas가 apply 한 번에 되돌아가는 장면에서 출발해 last-applied 어노테이션으로 하는 3방향 비교, 필드마다 주인을 적는 서버 쪽 apply와 충돌, kubectl diff와 서버 dry-run, --prune이 남의 객체를 지우는 경우까지 본다.
- 태그: Kubernetes, DevOps, GitOps
- 키워드: 서버 쪽 apply, Server-Side Apply, managedFields, last-applied-configuration, --force-conflicts
- 길이: 608줄
- 소제목: 명령으로 바꾸기, 파일로 맞추기 / 클라이언트 쪽 apply는 셋을 비교한다 / last-applied가 남기는 문제 / 서버 쪽 apply는 필드마다 주인을 적는다 / 남의 필드를 건드리면 충돌이 난다 / 서버 쪽 apply로 옮겨 갈 때 / 적용하기 전에 결과를 본다 / prune은 파일에 없는 것을 지운다 / 현장에서 apply 때문에 생기는 증상 / 기억이 어디 있느냐의 차이 / 면접에서 나올 만한 질문
- 직접 링크 →: k8s-api-objects, k8s-controllers-reconcile, kubectl-essentials, kubeconfig-contexts, kustomize-basics, k8s-secret, helm-release-lifecycle, k8s-project-structure
- 키워드 백링크 →: k8s-configmap, k8s-admission-control, local-k8s-kind-minikube, db-type-key-value, k8s-hpa, webhooks
- 이 글로 오는 글 ←: argocd-basics, gitops-argocd-vs-flux, k8s-admission-control, k8s-api-aggregation-schedulers, k8s-api-objects, k8s-architecture, k8s-controllers-reconcile, k8s-crd, k8s-learning-roadmap, k8s-operators, k8s-secret, kubeconfig-contexts, kubectl-essentials, kustomize-basics, yaml-for-k8s

#### `kubectl-essentials` — kubectl 기본기: 보고, 좁히고, 들어가 보기

- 요약: get 출력을 jsonpath와 custom-columns로 바꾸고 라벨과 필드로 좁히는 법, --watch가 목록과 watch로 나뉘는 방식, logs·exec·port-forward가 API 서버를 거쳐 kubelet까지 가는 길을 따라간다. port-forward와 deploy 로그가 Pod 하나만 보여 주는 함정과 장애 때 치는 순서도 정리한다.
- 태그: Kubernetes, DevOps, Troubleshooting
- 키워드: jsonpath, custom-columns, kubectl port-forward, kubectl logs
- 길이: 664줄
- 소제목: 명령 한 줄을 조각내 읽기 / get 한 줄이 API 서버에 닿기까지 / 칸을 고르는 출력 옵션 / 라벨과 필드로 좁히기 / --watch로 바뀌는 순간을 본다 / describe는 여러 객체를 모아 보여 준다 / logs, exec, port-forward는 노드까지 간다 / port-forward는 Pod 하나에 붙는다 / 들어가 보기: exec와 debug / 장애 때 치는 순서 / 기록을 읽는 명령, 노드까지 가는 명령 / 면접에서 나올 만한 질문
- 직접 링크 →: k8s-pod-troubleshooting, kubectl-apply-ssa, kubeconfig-contexts, kustomize-basics, k8s-api-objects, k8s-labels-selectors, k8s-pod-lifecycle, k8s-deployment, k8s-controllers-reconcile, k8s-pod-scheduling, k8s-service-types
- 키워드 백링크 →: k8s-pod-basics, dockerfile-image-layers, iptables-nat, k8s-configmap, docker-container-basics, realtime-communication, k8s-architecture, kubernetes-ingress, security-groups-nacl, local-k8s-kind-minikube, db-type-key-value, dns
- 이 글로 오는 글 ←: eks-cluster-basics, k8s-certificates-pki, k8s-certifications, k8s-daemonset, k8s-job-cronjob, k8s-learning-roadmap, k8s-pod-troubleshooting, kubeconfig-contexts, kubectl-apply-ssa, kustomize-basics, local-k8s-kind-minikube

#### `kustomize-basics` — Kustomize 깊게: overlay, 패치 두 가지, generator, component

- 요약: commonLabels 한 줄로 Service 엔드포인트가 빈 장면에서 출발해 이름으로 합치는 전략적 병합 패치와 위치로 바꾸는 JSON 패치, 아무 데도 안 붙는 target 패치, 해시 이름을 만드는 generator, overlay보다 먼저 끼어드는 component를 실제 렌더링 결과로 확인한다.
- 태그: Kubernetes, DevOps, GitOps
- 키워드: kustomization.yaml, 전략적 병합 패치, commonLabels, JSON 6902
- 길이: 698줄
- 소제목: kustomization.yaml이 하는 일 / base 위에 overlay를 쌓는다 / 이름으로 찾아 합치는 패치 / 위치로 찾아 바꾸는 패치 / 패치가 아무 데도 안 붙을 때 / 라벨 한 줄이 셀렉터를 바꾼다 / 내용이 바뀌면 이름이 바뀌는 generator / 이미지, replicas, 이름 앞머리 / 켜고 끄는 조각, component / 렌더링 결과를 보고 적용하기 / Kustomize와 Helm 사이 / overlay가 이상할 때 보는 순서 / base는 한 벌, 고치는 규칙은 넷 / 면접에서 나올 만한 질문
- 직접 링크 →: k8s-project-structure, helm-dependencies-oci-gitops, kubectl-essentials, kubectl-apply-ssa, kubeconfig-contexts, k8s-labels-selectors, k8s-configmap, k8s-secret, helm-values-secrets, helm-basics, helm-chart-templates
- 키워드 백링크 →: k8s-deployment, k8s-pod-basics, local-k8s-kind-minikube, github-actions-docker-ecr, k8s-hpa
- 이 글로 오는 글 ←: gitops-argocd-vs-flux, k8s-certifications, k8s-learning-roadmap, kubeconfig-contexts, kubectl-apply-ssa, kubectl-essentials

### Programming › Server/Infra › Kubernetes › Helm (`programming/server-infra/kubernetes/helm`)

#### `helm-basics` — Helm은 무엇을 풀어 주나: 차트, 릴리스, values

- 요약: 환경마다 복사한 YAML이 어긋나는 문제에서 출발해 차트·릴리스·리비전이 무엇인지, helm install 한 번에 클러스터에 무엇이 생기고 그 기록이 어느 Secret에 남는지 실습 클러스터의 실제 출력으로 따라간다.
- 태그: Kubernetes, Helm, DevOps
- 키워드: Helm 차트, helm install, 릴리스 리비전
- 길이: 567줄
- 소제목: 복사한 YAML은 환경마다 조금씩 어긋난다 / 차트, 릴리스, 리비전 / helm create가 만들어 주는 것 / install 한 번에 일어나는 일 / 설치하고, 들여다보고, 지우기 / 릴리스 기록은 클러스터 안의 Secret에 있다 / 이미 있는 리소스와 이름이 겹칠 때 / 현장에서 릴리스를 만나는 순간 / Helm 2에는 서버가 있었다 / Helm이 묶어 주는 것 / 면접에서 나올 만한 질문
- 직접 링크 →: helm-dependencies-oci-gitops, helm-chart-templates, helm-release-lifecycle, k8s-pod-lifecycle, helm-values-secrets
- 키워드 백링크 →: k8s-statefulset, k8s-pod-basics, k8s-configmap, docker-container-basics, kubernetes-ingress, redis-basics, local-k8s-kind-minikube
- 이 글로 오는 글 ←: argocd-basics, eks-cluster-basics, external-secrets, garbage-collection, helm-chart-templates, helm-dependencies-oci-gitops, helm-release-lifecycle, helm-values-secrets, k8s-certifications, k8s-cluster-upgrade, k8s-configmap, k8s-deploy-pipeline-eks, k8s-feature-maturity, k8s-gateway-api, k8s-hpa, k8s-labels-selectors, k8s-learning-roadmap, k8s-namespace, k8s-operators, k8s-pod-basics, k8s-pod-disruption-budget, k8s-pod-troubleshooting, k8s-project-structure, k8s-secret, k8s-vpa, kustomize-basics, local-k8s-kind-minikube, prometheus-basics, semantic-versioning, yaml-for-k8s

#### `helm-chart-templates` — 차트 템플릿 문법: values, _helpers.tpl, 들여쓰기

- 요약: 렌더링 결과의 줄 번호를 가리키는 YAML 오류에서 출발해 Go 템플릿이 텍스트를 찍는 방식, 점의 의미, 공백을 지우는 하이픈, include와 toYaml·nindent, default·required, tpl, 설정이 바뀌면 Pod를 다시 띄우는 법까지 helm template과 lint로 확인한다.
- 태그: Kubernetes, Helm, DevOps
- 키워드: _helpers.tpl, nindent, helm template
- 길이: 671줄
- 소제목: 템플릿은 YAML이 아니라 텍스트를 찍는다 / 점 하나가 가리키는 것 / 한 줄을 조각내 읽기 / 공백을 지우는 하이픈 / 들여쓰기가 어긋날 때 나는 오류 / 조각을 만드는 define, 가져다 쓰는 include / 값이 없을 때, 값이 틀린 타입일 때 / 조건과 반복, 그리고 바뀌는 점 / 구조를 통째로 넘기는 toYaml / 값 안의 템플릿을 실행하는 tpl / 설정이 바뀌면 Pod를 다시 띄우게 하기 / 어느 단계에서 잡히나 / 템플릿을 읽는 순서 / 면접에서 나올 만한 질문
- 직접 링크 →: helm-basics, helm-release-lifecycle, k8s-pod-resources, helm-values-secrets, k8s-configmap
- 키워드 백링크 →: k8s-project-structure, k8s-pod-basics, k8s-architecture
- 이 글로 오는 글 ←: gitops-argocd-vs-flux, helm-basics, helm-dependencies-oci-gitops, helm-values-secrets, k8s-configmap, k8s-deployment, k8s-learning-roadmap, kustomize-basics, yaml-for-k8s

#### `helm-dependencies-oci-gitops` — 차트 배포 흐름: 의존성, OCI 저장소, helmfile, ArgoCD

- 요약: ArgoCD로 배포한 앱이 helm history에 없는 이유에서 출발해 하위 차트와 values 전달, library 차트, 차트 버전과 앱 버전, OCI 레지스트리에 올리고 받기, helmfile, 렌더링만 하는 ArgoCD, Kustomize와의 차이를 정리한다.
- 태그: Kubernetes, Helm, DevOps, GitOps
- 키워드: helmfile, library 차트, OCI 레지스트리, Kustomize
- 길이: 648줄
- 소제목: 차트가 다른 차트를 품는 의존성 / 부모 values가 하위 차트로 흘러가는 길 / 템플릿만 빌려주는 library 차트 / 차트 버전과 앱 버전 / 차트를 OCI 레지스트리에 올리고 받기 / 릴리스 여러 개를 파일 하나로, helmfile / ArgoCD는 차트를 렌더링만 한다 / Kustomize와 무엇이 다른가 / 차트가 클러스터에 닿기까지 / 면접에서 나올 만한 질문
- 직접 링크 →: helm-basics, helm-chart-templates, helm-values-secrets, helm-release-lifecycle, k8s-pod-basics
- 키워드 백링크 →: k8s-statefulset, git-undo, k8s-configmap, argocd-basics, semantic-versioning, docker-container-basics, api-versioning, redis-basics, what-happens-google-com, local-k8s-kind-minikube, github-actions-docker-ecr
- 이 글로 오는 글 ←: argocd-basics, gitops-argocd-vs-flux, helm-basics, helm-release-lifecycle, helm-values-secrets, iac-basics, k8s-certifications, k8s-configmap, k8s-deploy-pipeline-eks, k8s-learning-roadmap, k8s-namespace, k8s-operators, k8s-project-structure, kustomize-basics, local-k8s-kind-minikube, semantic-versioning, yaml-for-k8s

#### `helm-release-lifecycle` — 업그레이드와 롤백: 릴리스가 꼬일 때

- 요약: another operation is in progress 오류에서 출발해 업그레이드 한 번의 흐름, 새 리비전이 되는 롤백, 손으로 고친 값과 3-way 병합, helm diff, 훅, pending 상태 풀기, 바꿀 수 없는 필드, 처음 한 번만 설치되는 CRD를 실습 클러스터에서 재현한다.
- 태그: Kubernetes, Helm, DevOps, Troubleshooting
- 키워드: helm rollback, pending-upgrade, helm diff, Helm 훅
- 길이: 619줄
- 소제목: 업그레이드 한 번에 일어나는 일 / 롤백도 새 리비전이다 / 손으로 고친 값은 다음 배포에 어떻게 되나 / 바꾸기 전에 diff로 보기 / 훅은 릴리스 밖에서 돈다 / another operation is in progress / 바꿀 수 없는 필드를 바꾸면 / CRD는 처음 한 번만 설치된다 / 릴리스가 꼬였을 때 보는 순서 / 면접에서 나올 만한 질문
- 직접 링크 →: helm-basics, k8s-pod-probes, k8s-pod-lifecycle, helm-dependencies-oci-gitops, kubernetes-ingress
- 키워드 백링크 →: k8s-crd, k8s-statefulset, k8s-pod-basics, service-mesh, rollback-strategy, local-k8s-kind-minikube, k8s-hpa
- 이 글로 오는 글 ←: gitops-argocd-vs-flux, helm-basics, helm-chart-templates, helm-dependencies-oci-gitops, k8s-crd, k8s-deploy-pipeline-eks, k8s-deployment, k8s-job-cronjob, k8s-learning-roadmap, kubectl-apply-ssa, rollback-strategy

#### `helm-values-secrets` — values를 환경별로 나누고 비밀 값 다루기

- 요약: 이미지 태그만 바꿨는데 레플리카가 돌아간 사례에서 출발해 values가 합쳐지는 순서, 목록이 통째로 바뀌는 규칙, --set의 타입 함정, 업그레이드 때 지난 값의 행방, values.schema.json, SOPS와 클러스터 안에서 Secret을 만드는 방법, lookup의 함정을 다룬다.
- 태그: Kubernetes, Helm, DevOps, Security
- 키워드: values.schema.json, --reuse-values, SOPS
- 길이: 634줄
- 소제목: 값이 들어오는 순서 / 맵은 합쳐지고 목록은 통째로 바뀐다 / --set 한 줄에 숨은 규칙 / values 파일 안의 숫자는 실수가 된다 / 업그레이드 때 지난 값은 어디로 가나 / 환경별로 파일을 나누는 방법 / 틀린 값을 미리 막는 values.schema.json / 비밀 값을 values에 평문으로 두면 / SOPS로 암호화해서 git에 두기 / 클러스터 안에서 Secret을 만드는 방법 / lookup은 helm template에서 비어 있다 / 값은 git에, 비밀은 따로 / 면접에서 나올 만한 질문
- 직접 링크 →: helm-chart-templates, helm-basics, k8s-secret, helm-dependencies-oci-gitops
- 키워드 백링크 →: external-secrets, local-k8s-kind-minikube, eks-cluster-basics, db-type-key-value
- 이 글로 오는 글 ←: external-secrets, gitops-argocd-vs-flux, helm-basics, helm-chart-templates, helm-dependencies-oci-gitops, k8s-learning-roadmap, k8s-project-structure, k8s-secret, kustomize-basics, secrets-management

### Programming › Server/Infra › Kubernetes › Networking (`programming/server-infra/kubernetes/networking`)

#### `k8s-cni-pod-network` — CNI와 Pod 네트워크: Pod IP는 누가 주고 노드는 어떻게 잇나

- 요약: kubelet이 CNI 플러그인을 실행 파일로 부르는 과정을 참조 bridge 플러그인으로 직접 실행해 보고, 노드별 Pod 대역, 경로 방식과 VXLAN 방식으로 노드를 잇는 법, 끼어든 MASQUERADE와 MTU, IP 고갈 같은 현장 에러를 재현한다.
- 태그: Kubernetes, Network, Linux, VXLAN, Troubleshooting, DevOps
- 키워드: CNI 플러그인, host-local, podCIDR, Flannel
- 길이: 562줄
- 소제목: 쿠버네티스가 네트워크에 요구하는 세 가지 / kubelet은 플러그인을 실행 파일로 부른다 / 노드마다 Pod 대역을 나눠 준다 / 노드를 넘는 첫 번째 방법: 경로를 놓는다 / 노드를 넘는 두 번째 방법: VXLAN으로 감싼다 / 어떤 CNI를 고르나 / 노드를 넘을 때만 안 되면 / 쿠버네티스는 약속만, 길은 플러그인이 / 면접에서 나올 만한 질문
- 직접 링크 →: k8s-pod-basics, docker-network-drivers, sdn-vxlan-overlay, layer-ip-addressing, layer-mtu-fragmentation, k8s-network-policy, k8s-service-types
- 키워드 백링크 →: layer-ip-routing-icmp, iptables-nat, k8s-daemonset, iptables-basics, k8s-architecture, eks-cluster-basics, packet-capture-tcpdump, layer-link-ethernet-arp, cilium-ebpf, network-flow-logs, security-groups-nacl, local-k8s-kind-minikube, vpc-basics, udp-and-quic
- 이 글로 오는 글 ←: cilium-ebpf, devops-networking-roadmap, dhcp, docker-network-drivers, docker-network-volume, eks-cluster-basics, k8s-architecture, k8s-certifications, k8s-coredns, k8s-cri-cni-csi, k8s-daemonset, k8s-kube-proxy-modes, k8s-learning-roadmap, k8s-namespace, k8s-network-policy, k8s-pod-basics, k8s-pod-troubleshooting, k8s-service-types, layer-ip-addressing, layer-mtu-fragmentation, linux-namespaces-cgroups, local-k8s-kind-minikube, network-flow-logs, sdn-vxlan-overlay, vpc-subnets-route-tables

#### `k8s-coredns` — CoreDNS와 클러스터 DNS: ndots:5가 질의를 불리는 이유

- 요약: 외부 API 호출이 가끔 5초씩 늦는 증상에서 출발해 Pod의 resolv.conf와 search·ndots가 질의 여덟 개를 만드는 과정, CoreDNS가 Service와 Pod 이름에 답하는 방식, conntrack 경쟁으로 생기는 5초 지연과 NodeLocal DNSCache, loop 플러그인 장애를 실제 캡처로 따라간다.
- 태그: Kubernetes, DNS, Network, Performance, Troubleshooting
- 키워드: CoreDNS, ndots, NodeLocal DNSCache, dnsPolicy
- 길이: 435줄
- 소제목: Pod가 받는 resolv.conf / 이름 하나에 질의 여덟 개 / CoreDNS가 답을 만드는 법 / 가끔 5초씩 늦는 이름 풀이 / 노드마다 캐시를 둔다 / CoreDNS가 스스로 죽는 경우 / 이름 하나 뒤의 질의들 / 면접에서 나올 만한 질문
- 직접 링크 →: dns, k8s-service-types, k8s-network-policy, k8s-cni-pod-network
- 키워드 백링크 →: k8s-architecture, k8s-kube-proxy-modes, k8s-statefulset, iptables-nat, k8s-daemonset, iptables-basics, ipv6-basics, packet-capture-tcpdump, race-conditions, local-k8s-kind-minikube, udp-and-quic
- 이 글로 오는 글 ←: cilium-ebpf, curl-for-debugging, devops-networking-roadmap, docker-network-volume, eks-cluster-basics, k8s-certifications, k8s-cluster-upgrade, k8s-learning-roadmap, k8s-namespace, k8s-network-policy, k8s-node-autoscaling-karpenter, k8s-service-types, k8s-statefulset, network-monitoring, service-discovery

#### `k8s-gateway-api` — Gateway API 운영: CRD 채널부터 status 조건, ingress-nginx에서 옮기기까지

- 요약: Gateway API를 실제 클러스터에 들여올 때 걸리는 것들을 다룬다. CRD 번들과 채널 관리, API 서버의 CEL 검증, status의 Accepted·ResolvedRefs 읽기, 가중치에서 비는 몫, TCPRoute·GRPCRoute의 성숙도, 은퇴한 ingress-nginx에서 경고 없이 바뀌는 동작까지 본다.
- 태그: Kubernetes, Gateway, Ingress, HTTP, DevOps, Troubleshooting
- 키워드: TCPRoute, GRPCRoute, ingress2gateway, ListenerSet
- 길이: 610줄
- 소제목: Ingress는 멈췄고 Gateway API는 따로 나온다 / CRD를 누가 설치하나 / 라우트 종류마다 성숙도가 다르다 / API 서버가 먼저 거절하는 것들 / 붙었는지는 status가 말한다 / 가중치로 나눌 때 비는 몫 / ReferenceGrant가 막는 것 / ingress-nginx에서 옮기기 / Gateway가 붙지 않을 때 보는 순서 / 입구를 바꾸는 일은 설치와 상태 읽기부터 / 면접에서 나올 만한 질문
- 직접 링크 →: kubernetes-ingress, gateway, k8s-service-types
- 키워드 백링크 →: k8s-admission-control, https-tls, helm-basics, service-mesh, api-versioning, http-status-codes, what-happens-google-com, local-k8s-kind-minikube, grpc, cors, first-page-from-power-on, dns
- 이 글로 오는 글 ←: gateway, k8s-certifications, k8s-learning-roadmap, reverse-proxy-lb-api-gateway

#### `k8s-kube-proxy-modes` — kube-proxy 모드: iptables 체인이 nftables 맵으로 바뀌는 이유

- 요약: kube-proxy가 Service를 노드의 커널 규칙으로 옮기는 방식을 iptables·nftables·IPVS로 비교한다. 2만 개 규칙에서의 첫 패킷 지연과 갱신 비용을 직접 재 보고, br_netfilter와 UDP conntrack이 모드와 상관없이 일으키는 장애를 재현한다.
- 태그: Kubernetes, Network, Linux, Firewall, Performance, Troubleshooting
- 키워드: kube-proxy 모드, nftables 모드, IPVS 모드, bridge-nf-call-iptables
- 길이: 619줄
- 소제목: kube-proxy는 패킷을 나르지 않고 규칙을 쓴다 / 실습 노드 하나 만들기 / nftables 모드가 쓰는 맵 하나 / 브리지를 지나는 응답도 netfilter를 거쳐야 한다 / 규칙이 2만 개일 때 첫 패킷 / IPVS는 왜 밀려났나 / nftables 모드로 옮길 때 달라지는 것 / conntrack이 기억하는 동안 규칙은 다시 읽히지 않는다 / kube-proxy를 아예 빼는 방식 / 모드 때문에 생기는 증상을 좁히는 순서 / 규칙을 쓰는 방식이 곧 모드다 / 면접에서 나올 만한 질문
- 직접 링크 →: iptables-nat, k8s-service-types, k8s-cni-pod-network, cilium-ebpf
- 키워드 백링크 →: k8s-network-policy, k8s-daemonset, vpc-subnets-route-tables, osi-in-practice, tcp-connection-lifecycle, iptables-basics, cors, k8s-architecture, ds-hash-map, layer-ip-addressing, layer-ip-routing-icmp, udp-and-quic, dns
- 이 글로 오는 글 ←: cilium-ebpf, iptables-nat, k8s-certifications, k8s-coredns, k8s-learning-roadmap, k8s-service-types

#### `k8s-network-policy` — NetworkPolicy: 기본 거부부터 DNS 허용, 대시 하나의 함정까지

- 요약: 기본 거부를 걸자마자 이름 풀이가 죽는 이유에서 출발해, 허용 목록이 더해지는 규칙, 양쪽 모두 허용해야 하는 연결, from 원소의 AND와 OR, policyTypes 생략의 함정, 노드에서 정책이 규칙이 되는 모습과 표준 정책의 한계를 실제로 막아 보며 정리한다.
- 태그: Kubernetes, Network, Security, Firewall, Troubleshooting
- 키워드: NetworkPolicy, 기본 거부 정책, namespaceSelector, AdminNetworkPolicy
- 길이: 512줄
- 소제목: 정책은 허용 목록이다 / 기본 거부를 걸자마자 이름이 안 풀린다 / 노드에서 정책은 규칙 묶음이 된다 / 대시 하나가 허용 범위를 바꾼다 / 판정을 코드로 따져 보기 / 표준 정책이 못 하는 것 / 정책을 걸고 무언가 안 될 때 / 허용 목록 하나하나가 길이다 / 면접에서 나올 만한 질문
- 직접 링크 →: k8s-cni-pod-network, k8s-service-types, osi-in-practice, dns, k8s-coredns, docker-network-drivers, gateway
- 키워드 백링크 →: docker-container-basics, iptables-basics, ipv6-basics, k8s-architecture, kubernetes-ingress, cilium-ebpf, service-mesh, local-k8s-kind-minikube, iptables-nat, udp-and-quic
- 이 글로 오는 글 ←: cilium-ebpf, devops-networking-roadmap, gateway, k8s-admission-control, k8s-api-objects, k8s-certifications, k8s-cni-pod-network, k8s-coredns, k8s-feature-maturity, k8s-kube-proxy-modes, k8s-labels-selectors, k8s-learning-roadmap, k8s-namespace, k8s-service-types, layer-ip-addressing, local-k8s-kind-minikube, osi-in-practice, prometheus-basics, ssrf, zero-trust-architecture

#### `k8s-service-types` — Kubernetes Service 타입: ClusterIP, NodePort, LoadBalancer, 그리고 트래픽 정책

- 요약: NodePort 뒤에서 클라이언트 IP가 노드 주소로 찍히는 이유를 따라가며 Service 타입이 층층이 쌓이는 구조와 EndpointSlice, 엔드포인트가 없을 때의 REJECT, externalTrafficPolicy의 SNAT과 헬스 체크 포트, headless와 ExternalName의 함정을 실제 객체와 손으로 만든 규칙으로 확인한다.
- 태그: Kubernetes, Network, DevOps, Troubleshooting, Linux
- 키워드: ClusterIP, NodePort, EndpointSlice, externalTrafficPolicy, headless Service
- 길이: 595줄
- 소제목: Service는 이름, 가상 IP, 엔드포인트 목록이다 / 포트 세 개가 각자 다른 곳을 가리킨다 / ClusterIP: 어느 장치에도 없는 주소 / NodePort: 모든 노드에 같은 문을 연다 / LoadBalancer: 바깥 로드 밸런서를 붙이는 약속 / headless와 ExternalName: 가상 IP 없이 이름만 / 클러스터 안에서도 가까운 Pod로 / 트래픽 정책을 직접 따져 보기 / Service에 붙는데 응답이 이상할 때 / 타입은 층, 정책은 출발지 / 면접에서 나올 만한 질문
- 직접 링크 →: iptables-nat, k8s-pod-lifecycle, kubernetes-ingress, k8s-network-policy, k8s-cni-pod-network, k8s-coredns
- 키워드 백링크 →: k8s-architecture, k8s-statefulset, k8s-daemonset, db-type-wide-column, iptables-basics, k8s-kube-proxy-modes, local-k8s-kind-minikube, centralized-logging-pipeline, http-versions, kafka-basics, security-groups-nacl, vpc-basics, osi-in-practice, redis-basics, dns, what-happens-google-com, cilium-ebpf, grpc, layer-ip-routing-icmp, first-page-from-power-on, udp-and-quic, layer-link-ethernet-arp
- 이 글로 오는 글 ←: cilium-ebpf, curl-for-debugging, devops-networking-roadmap, grpc, iptables-nat, k8s-architecture, k8s-batch-kueue, k8s-certifications, k8s-cni-pod-network, k8s-coredns, k8s-deploy-pipeline-eks, k8s-deployment, k8s-feature-maturity, k8s-gateway-api, k8s-job-cronjob, k8s-kube-proxy-modes, k8s-labels-selectors, k8s-learning-roadmap, k8s-namespace, k8s-network-policy, k8s-pod-lifecycle, k8s-pod-probes, k8s-pod-troubleshooting, k8s-statefulset, kubectl-essentials, kubernetes-ingress, local-k8s-kind-minikube, network-flow-logs, packet-capture-tcpdump, service-discovery, service-mesh, velero-backup

#### `service-mesh` — 서비스 메시: 사이드카가 가로채고, 컨트롤 플레인이 설정을 밀어 준다

- 요약: 앱 옆에 붙은 Envoy가 iptables로 트래픽을 가로채는 과정부터 xDS, SPIFFE 인증서 mTLS, 가중치 분할, 곱해지는 재시도까지 직접 만든 사이드카로 따라간다. 사이드카 두 개가 더하는 지연과 ambient 방식의 차이도 본다.
- 태그: Kubernetes, Network, TLS, Resilience, DevOps
- 키워드: 서비스 메시, xDS, SPIFFE, ambient 모드
- 길이: 545줄
- 소제목: 라이브러리 대신 옆에 프록시를 둔 이유 / 데이터 플레인과 컨트롤 플레인 / 앱 모르게 끼어드는 iptables / 인증서에 서비스 이름을 적는다 / 가중치로 트래픽을 옮긴다 / 재시도가 곱해진다 / 프록시 두 개가 더하는 시간 / 사이드카 없이 메시를 만드는 방식 / 메시가 있으면 로그를 다시 읽어야 한다 / 메시를 들일지 정하는 기준 / 면접에서 나올 만한 질문
- 직접 링크 →: k8s-pod-multicontainer, https-tls, gateway, iptables-nat, zero-trust-architecture, resilience-patterns, idempotency-key, circuit-breaker, service-discovery
- 키워드 백링크 →: k8s-service-types, iptables-basics, packet-encapsulation, k8s-architecture, packet-capture-tcpdump, kubernetes-ingress, cilium-ebpf, retries, tail-latency, osi-in-practice, http-status-codes, grpc, http-methods
- 이 글로 오는 글 ←: api-gateway-use-cases, authn-vs-authz, canary-release, cilium-ebpf, circuit-breaker, curl-for-debugging, devops-networking-roadmap, distributed-tracing, encryption-in-transit, grpc, helm-release-lifecycle, https-tls, idempotency-key, ids-ips, k8s-certificates-pki, k8s-certifications, k8s-deployment, k8s-gateway-api, k8s-learning-roadmap, k8s-network-policy, k8s-pod-multicontainer, kubernetes-ingress, load-balancing-algorithms, osi-in-practice, resilience-patterns, retries, reverse-proxy-lb-api-gateway, service-discovery, vpc-peering-transit-privatelink, zero-trust-architecture

### Programming › Server/Infra › Kubernetes › Operations (`programming/server-infra/kubernetes/operations`)

#### `k8s-certificates-pki` — 쿠버네티스 인증서: 1년 뒤 아침에 멈추는 클러스터

- 요약: 클러스터·etcd·front-proxy CA와 연결마다 따로 있는 인증서를 kubeadm이 만든 파일로 직접 읽고, check-expiration과 renew, 만료된 인증서가 내는 오류, kubelet이 CSR로 스스로 갱신하는 흐름과 사람에게 인증서를 발급하고 회수하지 못하는 문제까지 다룬다.
- 태그: Kubernetes, Security, TLS, DevOps, Troubleshooting
- 키워드: kubeadm certs, check-expiration, CertificateSigningRequest, front-proxy, certSANs
- 길이: 627줄
- 소제목: 클러스터 안의 연결은 모두 서로를 확인한다 / CA 세 개와 인증서 열 개 / 인증서 한 장 읽기 / kwok은 인증서 한 장으로 다 한다 / 만료일을 미리 보는 명령 / 1년 뒤 아침에 일어나는 일 / 갱신하기 / kubelet은 스스로 갱신한다 / 사람에게 인증서 발급하기 / Pod에 인증서를 나눠 주는 새 API / 1년짜리 신분증 열 장 / 면접에서 나올 만한 질문
- 직접 링크 →: local-k8s-kind-minikube, https-tls, encryption-in-transit, k8s-architecture, k8s-rbac, k8s-secret, k8s-serviceaccount-tokens, k8s-cluster-upgrade, k8s-etcd-backup, kubeconfig-contexts
- 키워드 백링크 →: k8s-hpa, kubectl-essentials, kubernetes-ingress, service-mesh, what-happens-google-com, layer-ip-addressing, db-type-key-value, eks-cluster-basics, dns
- 이 글로 오는 글 ←: k8s-admission-control, k8s-api-aggregation-schedulers, k8s-certifications, k8s-learning-roadmap, k8s-rbac

#### `k8s-cluster-upgrade` — 클러스터 업그레이드: 버전 차이 규칙과 올리는 순서

- 요약: 부품마다 허용되는 버전 차이에서 업그레이드 순서가 나오는 이유를 보고, kubeadm upgrade plan과 apply가 하는 일, EKS 관리형 노드 그룹이 노드를 갈아 끼우는 순서, 사라진 API, 되돌리기가 어디까지 되는지를 정리한다.
- 태그: Kubernetes, DevOps, AWS, Troubleshooting
- 키워드: version skew policy, kubeadm upgrade, 클러스터 업그레이드, 관리형 노드 그룹 업데이트
- 길이: 494줄
- 소제목: 한 번에 한 마이너씩만 올라가는 이유 / 누가 누구보다 앞서면 안 되나 / HA 클러스터에서는 범위가 더 좁아진다 / 올리는 순서는 규칙에서 나온다 / kubeadm upgrade plan이 보여 주는 것 / kubeadm upgrade apply 안에서 일어나는 일 / 관리형 클러스터는 노드를 갈아 끼운다 / 사라진 API가 업그레이드를 깨뜨린다 / 되돌리기는 생각보다 좁다 / 업그레이드 전날 보는 목록 / 정해진 범위 안에서 한 칸씩 / 면접에서 나올 만한 질문
- 직접 링크 →: k8s-node-maintenance, k8s-feature-maturity, k8s-etcd-backup, k8s-architecture, linux-namespaces-cgroups, k8s-pod-disruption-budget, eks-cluster-basics, velero-backup
- 키워드 백링크 →: k8s-pod-security-admission, k8s-deployment, kubernetes-ingress, iptables-nat, k8s-configmap, k8s-cri-cni-csi, k8s-admission-control, cron-jobs, k8s-coredns, helm-basics, rollback-strategy, k8s-pod-scheduling, local-k8s-kind-minikube, db-type-key-value, k8s-hpa, webhooks
- 이 글로 오는 글 ←: k8s-admission-control, k8s-certificates-pki, k8s-certifications, k8s-etcd-backup, k8s-feature-maturity, k8s-learning-roadmap, k8s-namespace, k8s-node-maintenance, k8s-pod-disruption-budget, k8s-pod-security-admission

#### `k8s-etcd-backup` — etcd 백업과 복원: 스냅숏 하나로 클러스터를 되돌리기

- 요약: etcdctl로 스냅숏을 뜨고 etcdutl로 확인·복원하며, status가 망가진 파일을 못 잡는 것, Secret이 평문으로 들어 있는 것, 복원 후 resourceVersion이 되감겨 watch가 조용히 틀리는 것과 --bump-revision으로 막는 법, HA 복원 순서와 관리형 클러스터의 대안을 다룬다.
- 태그: Kubernetes, DevOps, SRE, Security, Distributed Systems
- 키워드: etcd 스냅숏, etcdutl, bump-revision
- 길이: 603줄
- 소제목: 클러스터의 기억은 전부 한곳에 있다 / 키 이름으로 보는 etcd 안쪽 / 스냅숏 뜨기 / status가 괜찮다고 해도 믿지 않는다 / 스냅숏에는 Secret이 그대로 들어 있다 / 사고 하나를 되돌려 보기 / 되살린 클러스터는 과거로 돌아간다 / revision을 앞으로 밀어 두기 / 멤버가 셋일 때의 복원 순서 / 스냅숏이 맞는 사고와 아닌 사고 / 매일 밤 도는 백업 / 관리형 컨트롤 플레인에서는 / 스냅숏 하나에 담긴 것 / 면접에서 나올 만한 질문
- 직접 링크 →: raft-consensus, velero-backup, k8s-cluster-upgrade, k8s-architecture, backup-strategy, k8s-secret, encryption-at-rest, disaster-recovery
- 키워드 백링크 →: k8s-pv-pvc, k8s-api-objects, k8s-configmap, k8s-controllers-reconcile, docker-container-basics, db-type-key-value, autoscaling, leader-election, postgres-operations, local-k8s-kind-minikube, layer-ip-addressing, eks-cluster-basics
- 이 글로 오는 글 ←: backup-strategy, k8s-architecture, k8s-certificates-pki, k8s-certifications, k8s-cluster-upgrade, k8s-learning-roadmap, velero-backup

#### `k8s-node-maintenance` — 노드 점검: cordon, drain, 그리고 꺼지는 노드

- 요약: cordon과 drain이 각각 무엇을 막고 내보내는지, drain을 멈춰 세우는 세 가지 Pod와 플래그가 포기하게 하는 것, drained 뒤에도 남는 nodeName Pod와 Pending, PDB를 건너뛰는 NoExecute taint, graceful node shutdown과 out-of-service taint까지 실제 클러스터에서 확인한다.
- 태그: Kubernetes, DevOps, Troubleshooting, Linux
- 키워드: cordon, graceful node shutdown, out-of-service taint, 노드 점검
- 길이: 541줄
- 소제목: cordon은 새로 오는 Pod만 막는다 / drain 한 줄이 하는 일 / drain을 멈춰 세우는 세 가지 Pod / 플래그가 포기하게 하는 것 / drained라고 끝난 게 아닐 때 / taint로 비우면 PDB를 건너뛴다 / uncordon 뒤에도 Pod는 돌아오지 않는다 / 노드가 꺼질 때 kubelet이 하는 일 / 꺼진 노드를 사람이 선언하기 / 노드 하나를 점검하는 실제 순서 / 비우는 것과 사라지는 것 / 면접에서 나올 만한 질문
- 직접 링크 →: k8s-pod-disruption-budget, k8s-cluster-upgrade, k8s-pod-scheduling
- 키워드 백링크 →: k8s-pod-lifecycle, k8s-architecture, k8s-daemonset, k8s-statefulset, k8s-pod-basics, docker-container-basics, centralized-logging-pipeline, local-k8s-kind-minikube
- 이 글로 오는 글 ←: cloud-cost-optimization, eks-cluster-basics, k8s-batch-kueue, k8s-certifications, k8s-cluster-upgrade, k8s-daemonset, k8s-job-cronjob, k8s-learning-roadmap, k8s-pod-disruption-budget, k8s-pv-pvc, k8s-statefulset

#### `velero-backup` — Velero: 네임스페이스 단위로 뜨고 다른 이름으로 되살리기

- 요약: etcd 스냅숏과 달리 API로 객체를 묶어 두는 Velero의 BackupStorageLocation, 스케줄과 TTL, 백업 훅, 클라우드 스냅숏·CSI 데이터 이동·파일 시스템 백업의 차이, 네임스페이스를 바꾼 복원과 다른 클러스터로의 재해 복구를 다룬다.
- 태그: Kubernetes, DevOps, SRE, AWS, Resilience
- 키워드: Velero, BackupStorageLocation, 파일 시스템 백업
- 길이: 483줄
- 소제목: etcd 스냅숏과 무엇이 다른가 / 설치하면 생기는 것들 / 백업이 쌓이는 곳, BackupStorageLocation / 백업 하나, 그리고 매일 밤의 스케줄 / 백업 순간을 맞추는 훅 / 볼륨을 백업하는 세 가지 길 / 다른 이름으로 되살리기 / 다른 클러스터로 옮기기와 재해 복구 / 백업이 조용히 실패하는 자리 / API로 뜨고 API로 되살린다 / 면접에서 나올 만한 질문
- 직접 링크 →: k8s-etcd-backup, backup-strategy, disaster-recovery, k8s-storageclass-snapshots, k8s-pod-security-admission
- 키워드 백링크 →: k8s-rbac, k8s-pod-scheduling, k8s-pod-resources, k8s-daemonset, k8s-configmap, k8s-pod-multicontainer, docker-container-basics, k8s-cri-cni-csi, k8s-service-types, k8s-architecture, kubernetes-ingress, postgres-architecture, postgres-operations, local-k8s-kind-minikube, eks-cluster-basics, db-type-key-value, github-actions-docker-ecr, dns
- 이 글로 오는 글 ←: backup-strategy, k8s-cluster-upgrade, k8s-etcd-backup, k8s-learning-roadmap, k8s-storageclass-snapshots

### Programming › Server/Infra › Kubernetes › Platform (`programming/server-infra/kubernetes/platform`)

#### `k8s-api-aggregation-schedulers` — API 집계와 커스텀 스케줄러: 쿠버네티스를 넓히는 두 자리

- 요약: APIService로 API 서버 앞에 별도 서버를 붙이는 집계 API와, 스케줄링 프레임워크·프로필·두 번째 스케줄러로 배치 방식을 바꾸는 법, 그리고 워커를 묶어 배치하는 gang scheduling을 실습 클러스터에서 확인한다.
- 태그: Kubernetes, DevOps, API, Security, Troubleshooting
- 키워드: APIService, API 집계, gang scheduling, 스케줄링 프레임워크, schedulerName
- 길이: 550줄
- 소제목: API 서버 앞에 다른 API 서버를 붙인다 / 직접 만든 집계 API 서버 / 인증은 API 서버가 하고, 서버는 헤더를 믿는다 / 집계 서버가 죽으면 / 스케줄러는 플러그인을 차례로 부른다 / 두 번째 스케줄러로 배치 성향 바꾸기 / 다 같이 뜨거나 아예 안 뜨거나 / 넓히기 전에 묻는 것들 / 면접에서 나올 만한 질문
- 직접 링크 →: k8s-crd, k8s-operators, k8s-pod-scheduling, k8s-batch-kueue, k8s-hpa, k8s-namespace, k8s-feature-maturity
- 키워드 백링크 →: k8s-architecture, k8s-certificates-pki, kubectl-apply-ssa, k8s-configmap, docker-container-basics, cron-jobs, leader-election, local-k8s-kind-minikube, db-type-key-value, eks-cluster-basics
- 이 글로 오는 글 ←: k8s-batch-kueue, k8s-crd, k8s-cri-cni-csi, k8s-feature-maturity, k8s-hpa, k8s-learning-roadmap, k8s-namespace, k8s-operators

#### `k8s-batch-kueue` — Kueue와 배치 스케줄링: 대기열, 몫, 그리고 gang scheduling

- 요약: Pod를 하나씩 놓는 기본 스케줄러에서 두 학습 Job이 GPU를 반씩 잡고 멈추는 교착을 재현하고, Kueue가 Job을 멈춰 둔 채 ClusterQueue 몫과 cohort 빌리기·돌려받기로 받아들이는 과정을 실제 컨트롤러로 따라간다. PodGroup gang 정책과 JobSet까지 다룬다.
- 태그: Kubernetes, DevOps, AI, Distributed Systems
- 키워드: Kueue, ClusterQueue, cohort, JobSet
- 길이: 655줄
- 소제목: 기본 스케줄러는 Pod 하나씩 본다 / 대기열을 따로 두는 Kueue / 몫을 정하는 네 가지 객체 / 남는 몫을 빌리고 돌려받는다 / 몫은 맞았는데 Pod가 안 뜨는 경우 / 학습 Job을 한 덩어리로: JobSet / 배치 클러스터에서 막히는 순간 / 시작은 대기열이, 배치는 묶음이 / 면접에서 나올 만한 질문
- 직접 링크 →: k8s-job-cronjob, k8s-api-aggregation-schedulers, k8s-gpu-dra
- 키워드 백링크 →: k8s-service-types, k8s-pod-resources, k8s-feature-maturity, k8s-node-maintenance, postgres-architecture, local-k8s-kind-minikube, dns, webhooks
- 이 글로 오는 글 ←: k8s-api-aggregation-schedulers, k8s-gpu-dra, k8s-job-cronjob, k8s-learning-roadmap

#### `k8s-crd` — CRD 깊게: 스키마, CEL 검증, status, 버전 변환

- 요약: CustomResourceDefinition으로 새 API 종류를 만들 때 API 서버가 스키마로 잘라 내고 채우고 검사하는 순서를 따라가고, CEL 규칙, status 서브리소스, 출력 칸, 변환 웹훅과 저장 버전 옮기기까지 실습 클러스터에서 확인한다.
- 태그: Kubernetes, DevOps, API, Troubleshooting
- 키워드: CustomResourceDefinition, x-kubernetes-validations, 변환 웹훅, storedVersions
- 길이: 691줄
- 소제목: ConfigMap에 적어 둔 설정은 아무도 검사하지 않는다 / CRD 하나가 API 서버에 경로를 연다 / 스키마 한 장 읽기 / 모든 칸에 type이 있어야 한다, 구조적 스키마 / 모르는 필드는 잘려 나간다 / 필드 사이 규칙은 CEL로 / 요청 하나가 거치는 순서 / status는 따로 쓰는 문, 서브리소스 / kubectl get에 보일 칸 고르기 / 버전을 두 개 두면 / 저장 버전 옮기기, storedVersions / CRD를 지우면 CR도 모두 사라진다 / 현장에서 CRD 때문에 막히는 순간 / 설명서를 잘 쓰면 API 서버가 일을 대신한다 / 면접에서 나올 만한 질문
- 직접 링크 →: k8s-api-objects, k8s-controllers-reconcile, k8s-operators, k8s-api-aggregation-schedulers, helm-release-lifecycle, kubectl-apply-ssa, k8s-admission-control, k8s-feature-maturity
- 키워드 백링크 →: k8s-architecture, kubernetes-ingress, k8s-configmap, k8s-deploy-pipeline-eks, cron-jobs, js-strict-mode, what-happens-google-com, local-k8s-kind-minikube, db-type-key-value, k8s-hpa, webhooks
- 이 글로 오는 글 ←: argocd-basics, helm-release-lifecycle, k8s-api-aggregation-schedulers, k8s-api-objects, k8s-certifications, k8s-controllers-reconcile, k8s-cri-cni-csi, k8s-learning-roadmap, k8s-operators

#### `k8s-cri-cni-csi` — CRI, CNI, CSI: kubelet이 일을 맡기는 세 인터페이스

- 요약: kubelet이 컨테이너, 네트워크, 디스크를 직접 다루지 않고 플러그인에 맡기는 세 인터페이스를 containerd와 crictl, CNI 체인, CSI 드라이버와 사이드카로 직접 돌려 보며, 고장 나면 어디에 흔적이 남는지 본다.
- 태그: Kubernetes, DevOps, Linux, Container, Network, Troubleshooting
- 키워드: Container Runtime Interface, crictl, dockershim, CSI 드라이버, external-provisioner
- 길이: 557줄
- 소제목: kubelet은 세 곳에 일을 맡긴다 / CRI: kubelet과 런타임 사이의 gRPC / Pod 하나가 뜨는 순서 / Docker는 왜 빠졌나, dockershim / CNI: 설정 파일 하나에 플러그인 여러 개 / 설정 파일이 없으면 노드가 NotReady가 된다 / 체인 중간이 실패하면 IP가 샌다 / CSI: 컨트롤러 쪽과 노드 쪽 / 사이드카가 쿠버네티스 쪽 일을 맡는다 / GPU 같은 장치는 디바이스 플러그인으로 / 플러그인 문제를 노드에서 좁히는 순서 / 약속은 셋, 구현은 플러그인 / 면접에서 나올 만한 질문
- 직접 링크 →: k8s-cni-pod-network, k8s-pv-pvc, k8s-pod-resources, eks-cluster-basics, k8s-gpu-dra, k8s-crd, k8s-api-aggregation-schedulers
- 키워드 백링크 →: k8s-secret, k8s-storageclass-snapshots, k8s-architecture, docker-container-basics, k8s-statefulset, k8s-pod-basics, docker-network-volume, iptables-nat, k8s-daemonset, k8s-api-objects, k8s-pod-multicontainer, dockerfile-image-layers, iptables-basics, cilium-ebpf, sdn-vxlan-overlay, osi-in-practice, local-k8s-kind-minikube, grpc
- 이 글로 오는 글 ←: eks-cluster-basics, external-secrets, k8s-cluster-upgrade, k8s-deploy-pipeline-eks, k8s-learning-roadmap, k8s-pod-security-admission, k8s-pod-troubleshooting, k8s-project-structure, k8s-pv-pvc, k8s-secret, k8s-storageclass-snapshots, linux-namespaces-cgroups, local-k8s-kind-minikube, pattern-bridge, velero-backup

#### `k8s-gpu-dra` — GPU와 DRA: 쿠버네티스가 장치를 세고 나눠 주는 법

- 요약: 디바이스 플러그인이 GPU를 nvidia.com/gpu 개수로 알리는 과정과 정수·오버커밋 금지 규칙, 테인트로 나눈 GPU 노드 풀, MIG와 time-slicing을 따라간다. 개수로는 말할 수 없는 조건을 ResourceSlice·DeviceClass·ResourceClaim으로 적는 DRA를 kwok 클러스터에서 직접 할당해 본다.
- 태그: Kubernetes, DevOps, AI, Troubleshooting
- 키워드: Dynamic Resource Allocation, ResourceClaim, DeviceClass, 디바이스 플러그인, MIG
- 길이: 638줄
- 소제목: 쿠버네티스는 GPU를 모른다 / 디바이스 플러그인이 GPU를 개수로 알린다 / 정수로만, 요청과 상한은 같게 / GPU 노드는 따로 묶어 둔다 / 한 장을 나눠 쓰는 세 가지 방법 / 개수로는 말할 수 없는 것 / DRA는 장치를 설명하고 요청을 조건으로 적는다 / kwok 클러스터에서 ResourceClaim을 할당받기 / 장치가 다 나가면 claim은 pending에 머문다 / 장치 하나를 여러 Pod가 함께 쓰기 / nvidia.com/gpu 요청을 그대로 DRA로 받기 / GPU Pod가 안 뜰 때 보는 순서 / 개수에서 설명으로 / 면접에서 나올 만한 질문
- 직접 링크 →: k8s-pod-scheduling, k8s-pod-resources, k8s-batch-kueue
- 키워드 백링크 →: k8s-architecture, k8s-storageclass-snapshots, k8s-feature-maturity, k8s-daemonset, k8s-node-autoscaling-karpenter, k8s-configmap, api-versioning, local-k8s-kind-minikube, grpc, eks-cluster-basics
- 이 글로 오는 글 ←: k8s-batch-kueue, k8s-cri-cni-csi, k8s-daemonset, k8s-learning-roadmap

#### `k8s-operators` — 오퍼레이터: 운영 절차를 컨트롤러로 옮기기

- 요약: CRD와 컨트롤러에 운영 지식을 담은 오퍼레이터를 능력 단계, 만드는 도구, finalizer와 status 조건으로 나눠 보고, Backup을 CronJob으로 바꾸는 작은 Node 오퍼레이터를 직접 돌려 본다. 오퍼레이터를 만들지 말아야 할 때도 짚는다.
- 태그: Kubernetes, DevOps, Node.js, Distributed Systems
- 키워드: 오퍼레이터 패턴, kubebuilder, Operator SDK, kopf
- 길이: 594줄
- 소제목: 운영 지식을 코드로 옮긴 컨트롤러 / 어디까지 해 주나, 다섯 단계 / 만드는 도구들 / Node로 만드는 Backup 오퍼레이터 / 돌려 보기: 만들고, 바꾸고, 되돌리기 / status.conditions는 기계와 사람이 함께 읽는다 / 지울 때는 바깥부터 치운다, finalizer / 오퍼레이터가 멈춘 채로 지우면 / 클러스터에 올릴 때 챙길 것 / 오퍼레이터를 만들지 말아야 할 때 / 오퍼레이터 때문에 막히는 순간 / 오퍼레이터는 CRD, 컨트롤러, 그리고 절차다 / 면접에서 나올 만한 질문
- 직접 링크 →: k8s-controllers-reconcile, k8s-crd, k8s-api-objects, kubectl-apply-ssa, k8s-namespace, k8s-rbac, k8s-api-aggregation-schedulers
- 키워드 백링크 →: k8s-architecture, kubernetes-ingress, k8s-pod-basics, helm-dependencies-oci-gitops, k8s-deploy-pipeline-eks, ansible-network-automation, cron-jobs, helm-basics, postgres-operations, k8s-labels-selectors, kafka-basics, leader-election, local-k8s-kind-minikube, db-type-key-value, dns, on-call, webhooks
- 이 글로 오는 글 ←: k8s-api-aggregation-schedulers, k8s-certifications, k8s-controllers-reconcile, k8s-crd, k8s-learning-roadmap, k8s-statefulset

### Programming › Server/Infra › Kubernetes › Pod (`programming/server-infra/kubernetes/pod`)

#### `k8s-pod-basics` — Pod는 왜 컨테이너가 아니라 Pod인가

- 요약: 함께 떠야 하는 컨테이너 묶음인 Pod가 IP와 볼륨을 어떻게 나눠 갖는지, pause 컨테이너가 무엇을 붙잡고 있는지 보고, kubectl로 만들고 들여다보고 지운 뒤 Pod를 직접 만들지 않고 Deployment에 맡기는 이유까지 따라간다.
- 태그: Kubernetes, Container, DevOps
- 키워드: pause 컨테이너, ReplicaSet, 멀티 컨테이너 Pod
- 길이: 491줄
- 소제목: 컨테이너 대신 Pod를 만드는 이유 / 한 Pod 안에서 나눠 갖는 것 / pause 컨테이너가 붙잡고 있는 것 / kubectl run 한 줄이 지나가는 길 / 매니페스트 한 줄씩 읽기 / 띄우고, 들여다보고, 지우기 / 직접 만든 Pod는 아무도 다시 살려 주지 않는다 / 한 Pod에 무엇을 같이 넣나 / Pod를 다시 정리하면 / 면접에서 나올 만한 질문
- 직접 링크 →: k8s-pod-resources, k8s-pod-troubleshooting, k8s-pod-lifecycle, iptables-nat, helm-basics, k8s-pod-multicontainer, docker-container-basics
- 키워드 백링크 →: k8s-statefulset, k8s-pod-scheduling, k8s-daemonset, k8s-cni-pod-network, k8s-architecture, kubernetes-ingress, centralized-logging-pipeline, k8s-labels-selectors, local-k8s-kind-minikube, db-type-key-value
- 이 글로 오는 글 ←: argocd-basics, canary-release, docker-network-drivers, helm-basics, helm-chart-templates, helm-dependencies-oci-gitops, helm-release-lifecycle, k8s-admission-control, k8s-api-objects, k8s-architecture, k8s-audit-logging, k8s-cni-pod-network, k8s-configmap, k8s-controllers-reconcile, k8s-cri-cni-csi, k8s-deploy-pipeline-eks, k8s-deployment, k8s-feature-maturity, k8s-hpa, k8s-in-place-resize, k8s-labels-selectors, k8s-learning-roadmap, k8s-namespace, k8s-node-autoscaling-karpenter, k8s-node-maintenance, k8s-operators, k8s-pod-disruption-budget, k8s-pod-lifecycle, k8s-pod-multicontainer, k8s-pod-probes, k8s-pod-resources, k8s-pod-scheduling, k8s-pod-security-admission, k8s-statefulset, k8s-vpa, kubectl-essentials, kustomize-basics, linux-namespaces-cgroups, linux-processes-signals, local-k8s-kind-minikube, pattern-prototype

#### `k8s-pod-lifecycle` — Pod의 일생: Pending부터 종료까지

- 요약: STATUS 칸의 말이 phase가 아니라는 데서 출발해 컨테이너 상태와 조건, restartPolicy, 10초에서 5분까지 늘어나는 CrashLoopBackOff, preStop과 SIGTERM·SIGKILL로 이어지는 종료 순서, PID 1과 종료 코드 137·143을 실제로 재현하며 정리한다.
- 태그: Kubernetes, Linux, DevOps, Troubleshooting
- 키워드: CrashLoopBackOff, preStop, terminationGracePeriodSeconds, Pod phase
- 길이: 539줄
- 소제목: STATUS 칸은 phase가 아니다 / 컨테이너 상태와 조건 / init 컨테이너가 먼저 끝나야 한다 / 컨테이너가 죽으면 kubelet이 다시 띄운다 / CrashLoopBackOff는 기다리는 중이라는 뜻 / Pod가 끝나는 순서 / preStop에 sleep을 두는 이유 / PID 1은 SIGTERM을 그냥 넘긴다 / 종료 코드로 읽는 마지막 순간 / Pod의 일생을 다시 보면 / 면접에서 나올 만한 질문
- 직접 링크 →: k8s-pod-probes, k8s-pod-multicontainer, k8s-pod-resources, tcp-connection-lifecycle, dockerfile-image-layers
- 키워드 백링크 →: k8s-pod-troubleshooting, k8s-service-types, k8s-statefulset, curl-for-debugging, k8s-pod-basics, iptables-nat, k8s-daemonset, k8s-api-objects, db-migration-tools, docker-container-basics, k8s-deploy-pipeline-eks, k8s-architecture, linux-processes-signals, kubernetes-ingress, batch-processing, local-k8s-kind-minikube
- 이 글로 오는 글 ←: autoscaling, bullmq-job-queue, cache-write-policies, exponential-backoff-jitter, express-middleware, fastapi-basics, fault-tolerance, helm-basics, helm-release-lifecycle, k8s-architecture, k8s-deploy-pipeline-eks, k8s-deployment, k8s-job-cronjob, k8s-learning-roadmap, k8s-node-maintenance, k8s-pod-basics, k8s-pod-disruption-budget, k8s-pod-multicontainer, k8s-pod-probes, k8s-pod-resources, k8s-pod-troubleshooting, k8s-service-types, k8s-statefulset, kubectl-essentials, kubernetes-ingress, linux-processes-signals, load-balancer-basics, service-discovery

#### `k8s-pod-multicontainer` — 한 Pod에 컨테이너 여럿: init, 사이드카, 어댑터

- 요약: 사이드카·어댑터·앰배서더 패턴과 일반 컨테이너의 순서 문제를 보고, init 자리의 restartPolicy: Always로 만드는 네이티브 사이드카가 시작·종료 순서와 끝나지 않는 Job 문제를 어떻게 푸는지, 사이드카가 Pod의 자원 요구량을 어떻게 바꾸는지 따라간다.
- 태그: Kubernetes, Container, DevOps
- 키워드: 네이티브 사이드카, init 컨테이너, 사이드카 컨테이너
- 길이: 361줄
- 소제목: 한 Pod에 함께 두는 세 가지 모양 / 로그 사이드카를 붙일 때 챙길 것 / 일반 컨테이너끼리는 순서가 없다 / init 컨테이너는 끝나야 다음으로 간다 / 네이티브 사이드카는 init 자리에서 계속 돈다 / Job이 끝나지 않는 이유 / 사이드카도 자리를 차지한다 / 컨테이너를 골라서 들여다본다 / 언제 컨테이너를 더 붙이나 / 여러 컨테이너를 다시 정리하면 / 면접에서 나올 만한 질문
- 직접 링크 →: k8s-pod-basics, k8s-pod-resources, k8s-pod-lifecycle, k8s-pod-probes, k8s-pod-troubleshooting
- 키워드 백링크 →: k8s-daemonset, k8s-configmap, k8s-architecture, centralized-logging-pipeline, service-mesh, osi-in-practice, local-k8s-kind-minikube
- 이 글로 오는 글 ←: k8s-certifications, k8s-configmap, k8s-cri-cni-csi, k8s-hpa, k8s-in-place-resize, k8s-job-cronjob, k8s-learning-roadmap, k8s-pod-basics, k8s-pod-lifecycle, linux-files-permissions, pattern-adapter, service-mesh, velero-backup

#### `k8s-pod-probes` — liveness·readiness·startup 프로브: 잘못 걸면 장애가 된다

- 요약: 세 프로브가 각각 무엇을 묻고 실패하면 무엇을 하는지, 숫자 다섯 개가 판정 시간을 어떻게 정하는지 보고, DB를 확인하는 liveness가 전체 재시작을 부르는 이유와 배포 중 readiness가 새 버전을 막는 모습을 따라간다.
- 태그: Kubernetes, DevOps, Troubleshooting
- 키워드: liveness probe, readiness probe, startupProbe
- 길이: 395줄
- 소제목: 세 프로브는 묻는 것이 다르다 / 확인하는 방법 네 가지 / 숫자 다섯 개가 판정 시간을 정한다 / liveness가 DB를 보면 생기는 일 / 엔드포인트를 둘로 나눈다 / 배포 중에 readiness가 하는 일 / 느리게 뜨는 앱에는 startupProbe / 프로브를 걸 때 흔한 실수 / 프로브를 다시 정리하면 / 면접에서 나올 만한 질문
- 직접 링크 →: resilience-patterns, k8s-pod-resources, k8s-pod-lifecycle
- 키워드 백링크 →: k8s-deploy-pipeline-eks, k8s-deployment, k8s-service-types, k8s-pod-basics, k8s-architecture, kubernetes-ingress, event-loop, what-happens-google-com, local-k8s-kind-minikube
- 이 글로 오는 글 ←: argocd-basics, db-migration-tools, deadlocks, docker-compose, dockerfile-image-layers, health-checks, helm-release-lifecycle, k8s-certifications, k8s-deploy-pipeline-eks, k8s-deployment, k8s-learning-roadmap, k8s-pod-disruption-budget, k8s-pod-lifecycle, k8s-pod-multicontainer, k8s-pod-troubleshooting, kubernetes-ingress, load-balancer-basics, pattern-abstract-factory, rolling-deployment

#### `k8s-pod-resources` — requests와 limits: OOMKilled와 CPU 스로틀링

- 요약: requests는 스케줄러가, limits는 커널이 읽는다는 데서 출발해 QoS 클래스, CFS 스로틀링과 OOM kill을 cgroup으로 직접 재현하고, 런타임 힙 설정, 노드 압박 때의 eviction, LimitRange와 ResourceQuota까지 정리한다.
- 태그: Kubernetes, Linux, Performance, DevOps
- 키워드: QoS 클래스, OOMKilled, CPU 스로틀링, ResourceQuota, LimitRange
- 길이: 399줄
- 소제목: 두 숫자를 읽는 쪽이 다르다 / 자리가 없으면 Pending이다 / QoS 클래스는 두 숫자의 관계로 정해진다 / CPU limits를 넘으면 멈춰 세운다 / 메모리 limits를 넘으면 죽인다 / 런타임은 limits를 모를 수 있다 / 노드가 모자라면 kubelet이 쫓아낸다 / 네임스페이스 단위로 기본값과 한도 걸기 / requests와 limits를 다시 정리하면 / 면접에서 나올 만한 질문
- 직접 링크 →: k8s-pod-scheduling, k8s-pod-lifecycle
- 키워드 백링크 →: java-jvm-memory-gc, go-concurrency-basics, k8s-pod-basics, docker-commands-workflow, linux-namespaces-cgroups, k8s-architecture, local-k8s-kind-minikube
- 이 글로 오는 글 ←: centralized-logging-pipeline, cloud-cost-optimization, distributed-lock, docker-commands-workflow, docker-container-basics, garbage-collection, go-concurrency-basics, helm-chart-templates, java-jvm-memory-gc, k8s-admission-control, k8s-batch-kueue, k8s-certifications, k8s-cri-cni-csi, k8s-daemonset, k8s-deployment, k8s-gpu-dra, k8s-hpa, k8s-in-place-resize, k8s-job-cronjob, k8s-learning-roadmap, k8s-namespace, k8s-node-autoscaling-karpenter, k8s-pod-basics, k8s-pod-disruption-budget, k8s-pod-lifecycle, k8s-pod-multicontainer, k8s-pod-probes, k8s-pod-scheduling, k8s-pod-troubleshooting, k8s-pv-pvc, k8s-vpa, linux-namespaces-cgroups, linux-processes-signals, nodejs-server-runtime, prometheus-basics, velero-backup

#### `k8s-pod-scheduling` — Pod는 어느 노드로 가나: 스케줄러와 Pending

- 요약: 스케줄러가 노드를 거르고 점수를 매기는 과정을 보고, nodeSelector와 node affinity, taint와 toleration, pod anti-affinity, topologySpreadConstraints, PriorityClass와 preemption을 실제로 걸어 보며 FailedScheduling 메시지를 읽는 법을 정리한다.
- 태그: Kubernetes, DevOps, Troubleshooting
- 키워드: taint, toleration, node affinity, topologySpreadConstraints, PriorityClass
- 길이: 406줄
- 소제목: 스케줄러는 거르고 나서 고른다 / FailedScheduling 한 줄 읽기 / 라벨로 노드를 고른다 / taint는 노드가 Pod를 가려 받는 표시다 / Pod끼리 붙이고 떼어 놓기 / 존마다 고르게 나눈다 / 자리가 없으면 덜 중요한 Pod를 밀어낸다 / 스케줄링을 다시 정리하면 / 면접에서 나올 만한 질문
- 직접 링크 →: k8s-pod-resources, k8s-pod-troubleshooting
- 키워드 백링크 →: k8s-pod-disruption-budget, k8s-pod-basics, k8s-daemonset, k8s-deployment, centralized-logging-pipeline, local-k8s-kind-minikube, dns
- 이 글로 오는 글 ←: high-availability, k8s-api-aggregation-schedulers, k8s-architecture, k8s-certifications, k8s-cluster-upgrade, k8s-daemonset, k8s-deployment, k8s-gpu-dra, k8s-labels-selectors, k8s-learning-roadmap, k8s-namespace, k8s-node-autoscaling-karpenter, k8s-node-maintenance, k8s-pod-basics, k8s-pod-disruption-budget, k8s-pod-resources, k8s-pod-troubleshooting, k8s-pv-pvc, k8s-statefulset, k8s-storageclass-snapshots, kubectl-essentials, local-k8s-kind-minikube, velero-backup

### Programming › Server/Infra › Kubernetes › Security (`programming/server-infra/kubernetes/security`)

#### `k8s-admission-control` — 어드미션 컨트롤: etcd에 저장되기 직전의 관문

- 요약: 인증과 인가를 지난 쓰기 요청이 변경과 검증 단계를 거쳐 저장되는 순서를 따라가고, CEL로 거는 ValidatingAdmissionPolicy와 MutatingAdmissionPolicy, 외부 서버를 부르는 웹훅의 failurePolicy·타임아웃이 만드는 장애, Kyverno와 OPA Gatekeeper의 선택 기준을 실습 클러스터에서 확인한다.
- 태그: Kubernetes, Security, DevOps, Troubleshooting
- 키워드: ValidatingAdmissionPolicy, MutatingAdmissionPolicy, 어드미션 웹훅, failurePolicy, OPA Gatekeeper
- 길이: 697줄
- 소제목: 요청이 etcd에 닿기 전에 지나는 관문 / 기본으로 켜져 있는 어드미션 플러그인 / CEL 한 줄로 막기 / 없는 필드를 읽으면 에러가 난다 / 바로 막지 않고 경고부터 / MutatingAdmissionPolicy로 기본값 채우기 / 웹훅은 API 서버가 거는 HTTPS 호출이다 / 웹훅이 죽으면 요청이 같이 죽는다 / 자기 Pod도 못 띄우는 웹훅 / 웹훅을 안전하게 거는 설정 / Kyverno와 OPA Gatekeeper / kubelet API 권한도 잘게 나뉘었다 / 어드미션 때문에 막혔을 때 보는 순서 / 저장 직전의 마지막 관문 / 면접에서 나올 만한 질문
- 직접 링크 →: local-k8s-kind-minikube, k8s-rbac, k8s-pod-security-admission, k8s-audit-logging, kubectl-apply-ssa, webhooks, k8s-certificates-pki
- 키워드 백링크 →: k8s-pod-disruption-budget, k8s-network-policy, k8s-pod-resources, kubernetes-ingress, k8s-cluster-upgrade, k8s-pod-basics, terraform-basics, k8s-configmap, docker-container-basics, gateway, k8s-deploy-pipeline-eks, k8s-architecture, authn-vs-authz, what-happens-google-com, high-availability, db-type-key-value
- 이 글로 오는 글 ←: authn-vs-authz, k8s-audit-logging, k8s-certifications, k8s-cluster-upgrade, k8s-crd, k8s-feature-maturity, k8s-gateway-api, k8s-learning-roadmap, k8s-pod-security-admission, k8s-rbac, k8s-vpa, kubectl-apply-ssa, kubernetes-ingress, pattern-interpreter

#### `k8s-audit-logging` — 쿠버네티스 감사 로그: 누가 지웠는지 답하는 기록

- 요약: 감사 정책의 네 가지 수준과 단계, 위에서부터 처음 맞는 규칙을 고르는 방식, 파일과 웹훅 백엔드를 보고, 실제 로그에서 jq로 삭제한 사람을 찾는다. RequestResponse가 Secret 값을 남기는 문제와 아무것도 안 해도 쌓이는 로그 양도 직접 잰다.
- 태그: Kubernetes, Security, Observability, DevOps
- 키워드: 쿠버네티스 감사 로그, audit-policy-file, omitStages, impersonatedUser
- 길이: 538줄
- 소제목: 감사 이벤트 한 줄 읽기 / 네 가지 기록 수준 / 요청 하나가 남기는 단계 / 위에서부터 처음 맞는 규칙 하나 / Secret을 RequestResponse로 남기면 / 아무것도 안 해도 쌓이는 로그 / 파일로 남길까, 웹훅으로 보낼까 / 지운 사람을 jq로 찾기 / 어드미션과 지연도 어노테이션으로 남는다 / 관리형 클러스터에서 감사 로그를 켜는 곳 / 사고가 나기 전에 켜 두는 기록 / 면접에서 나올 만한 질문
- 직접 링크 →: local-k8s-kind-minikube, k8s-rbac, k8s-admission-control, structured-logging, k8s-secret, encryption-at-rest, k8s-pod-security-admission
- 키워드 백링크 →: proxy-reverse-proxy, kubernetes-ingress, k8s-pod-basics, iptables-nat, k8s-configmap, docker-container-basics, centralized-logging-pipeline, k8s-architecture, osi-in-practice, http-status-codes, db-type-key-value, eks-cluster-basics, webhooks
- 이 글로 오는 글 ←: k8s-admission-control, k8s-certifications, k8s-learning-roadmap, k8s-pod-security-admission, k8s-rbac

#### `k8s-pod-security-admission` — Pod Security Admission: 네임스페이스 라벨로 거는 보안 수준

- 요약: dry-run 라벨 두 줄로 네임스페이스의 위반을 미리 보는 데서 출발해 privileged·baseline·restricted의 검사 항목, enforce·warn·audit와 버전 고정, Deployment는 통과하고 Pod만 막히는 이유, 클러스터 기본값과 예외, 감사 로그로 위반 모으기, PodSecurityPolicy에서 옮기는 순서를 실습 클러스터에서 따라간다.
- 태그: Kubernetes, Security, DevOps, Troubleshooting
- 키워드: Pod Security Admission, Pod Security Standards, PodSecurityPolicy
- 길이: 468줄
- 소제목: 세 수준은 겹겹이 좁아진다 / 라벨 다섯 개를 읽는 법 / 판정은 한 번에 하나씩 쌓인다 / 버전을 고정하는 이유 / 경고는 Deployment에, 거절은 Pod에 / 클러스터 기본값과 예외 / 감사 로그로 위반을 모은다 / 판정을 직접 짜 보기 / PodSecurityPolicy에서 넘어오기 / 현장에서 수준을 올리는 순서 / 라벨 한 줄, 수준 셋, 모드 셋 / 면접에서 나올 만한 질문
- 직접 링크 →: k8s-namespace, k8s-security-context, k8s-rbac, k8s-serviceaccount-tokens, k8s-admission-control, k8s-audit-logging
- 키워드 백링크 →: k8s-statefulset, k8s-cluster-upgrade, k8s-pod-basics, iptables-nat, terraform-basics, docker-container-basics, k8s-cri-cni-csi, centralized-logging-pipeline, local-k8s-kind-minikube, db-type-key-value, eks-cluster-basics, webhooks
- 이 글로 오는 글 ←: k8s-admission-control, k8s-audit-logging, k8s-certifications, k8s-cluster-upgrade, k8s-feature-maturity, k8s-learning-roadmap, k8s-namespace, k8s-pv-pvc, k8s-rbac, k8s-security-context, k8s-serviceaccount-tokens, velero-backup

#### `k8s-rbac` — 쿠버네티스 RBAC: 403 한 줄을 읽고 권한을 좁히는 법

- 요약: scale 권한을 줬는데 kubectl scale이 403을 맞는 장면에서 출발해 401과 403의 차이, 요청이 동사·그룹·리소스·서브리소스로 쪼개지는 방식, Role과 바인딩의 조합, aggregated ClusterRole, escalate·bind·impersonate와 edit의 ServiceAccount 행세로 권한이 넓어지는 길, can-i --list로 하는 감사를 실습 클러스터에서 따라간다.
- 태그: Kubernetes, Security, Authorization, DevOps
- 키워드: ClusterRoleBinding, kubectl auth can-i, aggregated ClusterRole, 권한 상승 검사
- 길이: 642줄
- 소제목: 401과 403은 다른 문에서 막힌다 / 쿠버네티스에는 사용자 오브젝트가 없다 / 요청 하나는 동사, 그룹, 리소스, 이름으로 바뀐다 / Role 한 장 읽기 / 네 가지 오브젝트를 짝지으면 / 내장 역할은 라벨로 합쳐진다 / 권한을 만드는 권한이 가장 위험하다 / edit만 있어도 ServiceAccount가 될 수 있다 / 별표 하나가 여는 것들 / 누가 무엇을 할 수 있는지 훑기 / IAM 정책과 무엇이 다른가 / 규칙 맞추기를 직접 짜 보기 / 403을 받았을 때 보는 순서 / 더하기만 있는 권한 / 면접에서 나올 만한 질문
- 직접 링크 →: k8s-namespace, k8s-secret, k8s-serviceaccount-tokens, k8s-security-context, k8s-pod-security-admission, k8s-certificates-pki, k8s-audit-logging, iam-basics, k8s-admission-control, eks-cluster-basics
- 키워드 백링크 →: k8s-architecture, docker-container-basics, local-k8s-kind-minikube, db-type-key-value, webhooks
- 이 글로 오는 글 ←: argocd-basics, authn-vs-authz, gitops-argocd-vs-flux, iam-basics, k8s-admission-control, k8s-audit-logging, k8s-certificates-pki, k8s-certifications, k8s-learning-roadmap, k8s-namespace, k8s-operators, k8s-pod-security-admission, k8s-security-context, k8s-serviceaccount-tokens, kubeconfig-contexts, system-design-concepts-map, velero-backup

#### `k8s-security-context` — securityContext: 한 줄마다 켜지는 커널 기능

- 요약: 보안 점검 경고를 고치다 readOnlyRootFilesystem 한 줄에 nginx가 죽는 장면에서 출발해 capability, no_new_privs, 읽기 전용 루트, seccomp, AppArmor, runAsNonRoot와 fsGroup이 커널에서 무엇을 막는지 setpriv·capsh·unshare와 작은 C 프로그램으로 재현하고, 설정 뒤 앱이 깨질 때 증상별로 원인을 찾는 법을 정리한다.
- 태그: Kubernetes, Security, Linux, Container
- 키워드: securityContext, seccomp, readOnlyRootFilesystem, allowPrivilegeEscalation
- 길이: 519줄
- 소제목: 한 줄마다 커널 기능 하나 / root를 조각낸 것이 capability다 / non-root에게 capability를 더해도 안 되는 경우 / exec로 권한을 올리지 못하게: allowPrivilegeEscalation / 쓰기를 막고 쓸 곳만 연다: readOnlyRootFilesystem / 시스템 콜을 거르는 seccomp / 누구로 돌고 어떤 그룹으로 쓰나: runAsNonRoot와 fsGroup / 다 넣은 매니페스트 / 설정을 넣었더니 앱이 깨질 때 / 커널에게 덜 요청하는 프로세스 / 면접에서 나올 만한 질문
- 직접 링크 →: linux-namespaces-cgroups, linux-files-permissions, k8s-rbac, k8s-serviceaccount-tokens, k8s-pod-security-admission
- 키워드 백링크 →: docker-container-basics, k8s-architecture, local-k8s-kind-minikube
- 이 글로 오는 글 ←: docker-container-basics, k8s-certifications, k8s-learning-roadmap, k8s-pod-security-admission, k8s-rbac, k8s-serviceaccount-tokens, linux-files-permissions, linux-namespaces-cgroups

#### `k8s-serviceaccount-tokens` — ServiceAccount 토큰: 만료 없는 Secret에서 Pod에 묶인 토큰으로

- 요약: Secret에 든 옛 토큰에 exp가 없다는 데서 출발해 TokenRequest와 projected 볼륨, 토큰 클레임 읽기, 3607초 토큰이 1년으로 늘어나는 이유와 kubelet 갱신, Pod를 지우면 무효가 되는 바인딩, audience 분리, automountServiceAccountToken, OIDC 디스커버리와 IRSA를 실습 클러스터에서 확인한다.
- 태그: Kubernetes, Security, Authentication, JWT
- 키워드: TokenRequest, 바운드 서비스 어카운트 토큰, automountServiceAccountToken, projected 토큰
- 길이: 575줄
- 소제목: ServiceAccount는 Pod의 신분증이다 / Pod 안의 토큰은 어디서 오나 / 토큰을 열어 보면 / 1시간짜리 토큰이 1년을 사는 이유 / Pod가 지워지면 토큰도 죽는다 / audience로 받는 쪽을 정한다 / 옛 방식: Secret에 든 영구 토큰 / 필요 없으면 마운트하지 않는다 / 클러스터 밖에서 이 토큰을 믿게 하기 / 클레임을 읽는 함수 짜 보기 / 토큰 때문에 생기는 장애 / 신분증은 짧게, 받는 쪽을 정해서 / 면접에서 나올 만한 질문
- 직접 링크 →: k8s-rbac, jwt-key-rotation, k8s-security-context, k8s-pod-security-admission, eks-cluster-basics, github-actions-docker-ecr
- 키워드 백링크 →: json-crud-http, base64, k8s-controllers-reconcile, k8s-architecture, local-k8s-kind-minikube, db-type-key-value, token-login, webhooks
- 이 글로 오는 글 ←: eks-cluster-basics, gitops-argocd-vs-flux, k8s-certificates-pki, k8s-certifications, k8s-learning-roadmap, k8s-pod-security-admission, k8s-rbac, k8s-security-context, kubeconfig-contexts

### Programming › Server/Infra › Kubernetes › Workloads (`programming/server-infra/kubernetes/workloads`)

#### `k8s-daemonset` — DaemonSet: 노드마다 하나씩 띄우는 에이전트

- 요약: 노드 수가 곧 replicas인 DaemonSet이 Pod를 놓는 방식과 자동으로 붙는 toleration, control-plane 노드와 나중에 건 taint 때문에 에이전트가 사라지는 일, hostNetwork에서 maxSurge가 멈추는 이유, 노드마다 빠지는 requests와 system-node-critical 선점, drain과 임시 컨테이너 디버깅까지 실습 클러스터에서 확인한다.
- 태그: Kubernetes, DevOps, Observability, Troubleshooting
- 키워드: DaemonSet, 노드 에이전트, system-node-critical, 임시 컨테이너 디버깅
- 길이: 580줄
- 소제목: 노드 수가 곧 replicas다 / DaemonSet Pod도 스케줄러가 놓는다 / control-plane 노드에도 띄우려면 / 라벨로 노드를 고른다 / taint를 나중에 걸면 에이전트가 사라진다 / 업데이트: 하나 빼고 넣기, 하나 더 넣고 빼기 / 노드 자원을 먼저 떼어 간다 / drain과 cordon 앞에서 / 노드 에이전트를 들여다볼 때 / 어디에 DaemonSet을 쓰나 / 노드마다 하나, 그 대가 / 면접에서 나올 만한 질문
- 직접 링크 →: k8s-pod-scheduling, k8s-pod-resources, k8s-statefulset, k8s-job-cronjob, k8s-gpu-dra, prometheus-basics, k8s-node-autoscaling-karpenter, k8s-node-maintenance, k8s-pod-troubleshooting, kubectl-essentials, k8s-cni-pod-network, k8s-architecture
- 키워드 백링크 →: k8s-deployment, centralized-logging-pipeline, iptables-nat, iptables-basics, cilium-ebpf, local-k8s-kind-minikube, eks-cluster-basics
- 이 글로 오는 글 ←: argocd-basics, centralized-logging-pipeline, cilium-ebpf, eks-cluster-basics, k8s-certifications, k8s-cni-pod-network, k8s-coredns, k8s-cri-cni-csi, k8s-feature-maturity, k8s-gpu-dra, k8s-job-cronjob, k8s-kube-proxy-modes, k8s-labels-selectors, k8s-learning-roadmap, k8s-node-autoscaling-karpenter, k8s-node-maintenance, k8s-pod-basics, k8s-pod-disruption-budget, k8s-pod-lifecycle, k8s-pod-multicontainer, k8s-pod-scheduling, k8s-pv-pvc, k8s-service-types, k8s-statefulset, k8s-storageclass-snapshots, rollback-strategy, sd-metrics-collection, structured-logging, velero-backup

#### `k8s-deployment` — Deployment와 롤링 업데이트: maxSurge, maxUnavailable, 되돌리기

- 요약: 배포 중 이름이 다른 Pod 두 무리가 섞이는 모습에서 출발해 리비전마다 ReplicaSet을 두는 이유, maxSurge와 maxUnavailable이 정하는 두 선, Recreate와 minReadySeconds, progressDeadlineSeconds, rollout undo·pause와 리비전 번호를 실제 이벤트로 따라간다.
- 태그: Kubernetes, DevOps, Troubleshooting
- 키워드: maxSurge, maxUnavailable, rollout undo, minReadySeconds
- 길이: 593줄
- 소제목: 이름 가운데가 다른 Pod 두 무리 / 템플릿이 바뀌어야 새 리비전이 생긴다 / maxSurge와 maxUnavailable이 정하는 두 줄 / 더 띄울 것인가, 잠깐 덜 쓸 것인가 / 한꺼번에 내리고 올리는 Recreate / Ready와 Available 사이, minReadySeconds / 끝나지 않는 배포와 progressDeadlineSeconds / 리비전 기록과 되돌리기 / 여러 군데를 고칠 때 pause와 resume / 배포 중에 replicas를 바꾸면 / 셀렉터는 바꿀 수 없다 / 배포가 이상할 때 보는 순서 / 숫자 두 개와 ReplicaSet 두 개 / 면접에서 나올 만한 질문
- 직접 링크 →: k8s-pod-basics, k8s-configmap, helm-chart-templates, k8s-pod-resources, k8s-pod-probes, k8s-pod-lifecycle, k8s-pod-scheduling, k8s-pod-troubleshooting, helm-release-lifecycle, k8s-hpa, gateway
- 키워드 백링크 →: k8s-deploy-pipeline-eks, k8s-pod-disruption-budget, canary-release, k8s-service-types, k8s-pv-pvc, kubernetes-ingress, service-mesh, local-k8s-kind-minikube
- 이 글로 오는 글 ←: argocd-basics, blue-green-deployment, canary-release, k8s-certifications, k8s-cluster-upgrade, k8s-daemonset, k8s-deploy-pipeline-eks, k8s-feature-maturity, k8s-hpa, k8s-labels-selectors, k8s-learning-roadmap, k8s-namespace, k8s-pod-disruption-budget, k8s-pod-probes, k8s-pod-scheduling, k8s-project-structure, k8s-pv-pvc, k8s-statefulset, kubectl-essentials, kustomize-basics, pattern-strategy, rollback-strategy, rolling-deployment

#### `k8s-hpa` — HPA: 공식 한 줄과 브레이크 셋

- 요약: TARGETS가 unknown으로 남는 HPA에서 출발해 desired = ceil(현재 × 현재값/목표) 공식과 10% 허용 오차, 줄일 때만 걸리는 5분 안정화 창, behavior 정책, requests가 없으면 계산이 안 되는 이유, 0개까지 줄이기의 현재 상태를 metrics-server가 붙은 실습 클러스터에서 재현한다.
- 태그: Kubernetes, DevOps, Performance, Scalability
- 키워드: HPA, Horizontal Pod Autoscaler, metrics-server, 안정화 창
- 길이: 450줄
- 소제목: 15초마다 재고 replicas를 고친다 / 메트릭이 오는 길 / 공식은 한 줄이다 / 부하를 올려 보면 / 줄일 때는 5분을 기다린다 / behavior로 속도를 정한다 / requests가 없으면 계산할 수 없다 / 갓 뜬 Pod와 준비 안 된 Pod는 어떻게 세나 / 메트릭 여러 개와 앱이 내는 메트릭 / 0개까지 줄일 수 있나 / 함께 쓰면 부딪히는 것들 / HPA가 안 움직일 때 보는 순서 / 공식 하나, 브레이크 셋 / 면접에서 나올 만한 질문
- 직접 링크 →: k8s-deployment, k8s-namespace, k8s-pod-resources, k8s-pod-multicontainer, k8s-node-autoscaling-karpenter, eks-cluster-basics, k8s-vpa
- 키워드 백링크 →: k8s-architecture, k8s-statefulset, k8s-api-aggregation-schedulers, k8s-pod-basics, cron-jobs, helm-basics, cold-starts, kafka-basics, local-k8s-kind-minikube
- 이 글로 오는 글 ←: argocd-basics, autoscaling, bullmq-job-queue, eks-cluster-basics, gitops-argocd-vs-flux, grpc, helm-release-lifecycle, k8s-api-aggregation-schedulers, k8s-api-objects, k8s-certificates-pki, k8s-certifications, k8s-cluster-upgrade, k8s-controllers-reconcile, k8s-crd, k8s-deploy-pipeline-eks, k8s-deployment, k8s-feature-maturity, k8s-in-place-resize, k8s-learning-roadmap, k8s-node-autoscaling-karpenter, k8s-pod-disruption-budget, k8s-project-structure, k8s-statefulset, k8s-vpa, kubectl-apply-ssa, kustomize-basics, local-k8s-kind-minikube

#### `k8s-in-place-resize` — 재시작 없는 Pod 리소스 변경: resize 하위 리소스와 resizePolicy

- 요약: Deployment를 고치면 Pod가 모두 새로 뜨는 문제에서 출발해 1.35에 GA가 된 in-place resize를 resize 하위 리소스로 요청하고, 원하는 값과 실제 값이 갈리는 과정, resizePolicy로 재시작을 고르는 법, 바꿀 수 없는 것들, 스케줄러와 쿼터가 이를 세는 방식을 본다.
- 태그: Kubernetes, DevOps, Linux, Performance
- 키워드: in-place resize, resizePolicy, resize 하위 리소스, PodResizePending
- 길이: 388줄
- 소제목: resize 하위 리소스로 요청한다 / 원하는 값, 배정된 값, 실제 값 / 메모리는 재시작이 필요할 수 있다 / 바꿀 수 없는 것들 / 노드에 자리가 없을 때 / Deployment와는 따로 논다 / 현장에서 쓰는 순간 / 숫자는 spec에서, 적용은 kubelet에서 / 면접에서 나올 만한 질문
- 직접 링크 →: k8s-vpa, k8s-pod-resources, k8s-node-autoscaling-karpenter, k8s-hpa
- 키워드 백링크 →: garbage-collection, k8s-pod-basics, linux-namespaces-cgroups, k8s-pod-multicontainer, k8s-architecture, k8s-pod-troubleshooting, local-k8s-kind-minikube
- 이 글로 오는 글 ←: k8s-feature-maturity, k8s-learning-roadmap, k8s-node-autoscaling-karpenter, k8s-pod-disruption-budget, k8s-vpa

#### `k8s-job-cronjob` — Job과 CronJob: 실패를 세는 법과 놓친 회차

- 요약: completions와 parallelism, 10초부터 두 배로 늘어나는 backoffLimit 재시도, activeDeadlineSeconds와 ttlSecondsAfterFinished, Indexed Job과 번호별 재시도, podFailurePolicy로 실패 종류 가르기를 실제 Job 컨트롤러로 따라가고, CronJob이 놓친 회차 중 마지막 하나만 돌린다는 것을 확인한다.
- 태그: Kubernetes, DevOps, Backend, Troubleshooting
- 키워드: Indexed Job, podFailurePolicy, backoffLimitPerIndex, JOB_COMPLETION_INDEX
- 길이: 638줄
- 소제목: 끝나야 성공인 Pod / 실패를 몇 번까지 참나: backoffLimit / 시간 한도와 뒷정리 / 번호를 받아 일을 나누는 Indexed Job / 실패의 종류를 가르는 podFailurePolicy / 멈춰 두고, 손으로 돌리고 / CronJob은 놓친 회차를 몰아서 돌리지 않는다 / 두 번 돌아도 괜찮게 만들기 / Job이 이상할 때 보는 순서 / 끝나는 작업의 숫자들 / 면접에서 나올 만한 질문
- 직접 링크 →: cron-jobs, batch-processing, k8s-batch-kueue, k8s-pod-lifecycle, k8s-pod-disruption-budget, helm-release-lifecycle, idempotency-key, k8s-pod-multicontainer, k8s-pod-troubleshooting, kubectl-essentials, k8s-statefulset, k8s-daemonset
- 키워드 백링크 →: k8s-service-types, db-architecture-by-scale, k8s-pod-resources, k8s-architecture, message-delivery-semantics, k8s-node-maintenance, resilience-patterns, local-k8s-kind-minikube, db-type-key-value, http-methods, dns, webhooks
- 이 글로 오는 글 ←: k8s-batch-kueue, k8s-certifications, k8s-daemonset, k8s-learning-roadmap, k8s-statefulset

#### `k8s-namespace` — 네임스페이스: 이름을 나누는 칸과 그 위에 거는 정책

- 요약: 네임스페이스는 이름만 나누고 네트워크와 노드는 그대로 공유한다는 데서 출발해, 클러스터 단위 리소스, 다른 네임스페이스를 부르는 DNS 이름, RBAC·ResourceQuota·Pod Security를 네임스페이스에 거는 법, Terminating에서 멈춘 네임스페이스를 푸는 법을 실습 클러스터에서 따라간다.
- 태그: Kubernetes, DevOps, Security, Troubleshooting
- 키워드: 쿠버네티스 네임스페이스, Terminating 네임스페이스
- 길이: 587줄
- 소제목: 이름을 나누는 칸, 벽은 아니다 / 처음부터 있는 네 개 / 네임스페이스에 들어가는 것과 안 들어가는 것 / 이름을 지을 때 걸리는 규칙 / kubectl이 어느 칸을 보고 있나 / 다른 네임스페이스의 Service를 부르는 이름 / 네트워크는 기본으로 열려 있다 / 권한, 한도, 보안 수준은 네임스페이스에 건다 / 지웠는데 Terminating에서 멈출 때 / 네임스페이스를 어떻게 나누나 / 칸을 나누는 것과 벽을 세우는 것 / 면접에서 나올 만한 질문
- 직접 링크 →: k8s-pod-basics, k8s-secret, k8s-project-structure, k8s-coredns, k8s-network-policy, k8s-pod-resources, k8s-rbac, k8s-pod-security-admission, eks-cluster-basics, k8s-deployment
- 키워드 백링크 →: k8s-pv-pvc, k8s-pod-scheduling, k8s-storageclass-snapshots, terraform-modules-tfvars, kubernetes-ingress, k8s-statefulset, k8s-api-aggregation-schedulers, k8s-cluster-upgrade, iptables-nat, k8s-api-objects, terraform-basics, k8s-service-types, k8s-configmap, helm-dependencies-oci-gitops, docker-container-basics, leader-election, k8s-cni-pod-network, k8s-architecture, helm-basics, cilium-ebpf, local-k8s-kind-minikube, db-type-key-value, dns, webhooks
- 이 글로 오는 글 ←: k8s-api-aggregation-schedulers, k8s-api-objects, k8s-configmap, k8s-hpa, k8s-learning-roadmap, k8s-operators, k8s-pod-security-admission, k8s-project-structure, k8s-rbac, k8s-secret, kubeconfig-contexts

#### `k8s-node-autoscaling-karpenter` — 노드 오토스케일링: Cluster Autoscaler와 Karpenter

- 요약: HPA가 늘린 Pod가 Pending으로 남는 장면에서 출발해 Cluster Autoscaler가 노드 그룹을 고르는 expander와 Karpenter가 Pod 묶음에 맞는 인스턴스를 고르는 bin-packing을 비교한다. 빈자리를 모아 노드를 바꾸는 consolidation, 축소를 막는 것들, 스팟 회수, 노드가 붙기까지의 시간, 0까지 줄이기를 실제 Karpenter 로그로 따라간다.
- 태그: Kubernetes, AWS, Scalability, Cloud, DevOps
- 키워드: Karpenter, Cluster Autoscaler, NodePool, expander
- 길이: 405줄
- 소제목: Pending Pod가 노드를 부른다 / Cluster Autoscaler는 노드 그룹을 늘린다 / Karpenter는 Pod를 보고 인스턴스를 고른다 / 빈자리를 모아 노드를 줄인다 / 줄이지 못하게 막는 것들 / 스팟은 2분 전에 알려 준다 / 노드가 붙기까지 걸리는 시간 / 0개까지 내리는 이야기 / 어느 쪽을 고르나 / Pending이 노드를 부르고, 빈자리가 노드를 지운다 / 면접에서 나올 만한 질문
- 직접 링크 →: autoscaling, k8s-hpa, eks-cluster-basics, k8s-pod-disruption-budget, k8s-pod-resources, cloud-cost-optimization, k8s-pod-scheduling, k8s-vpa, k8s-in-place-resize
- 키워드 백링크 →: serverless-architecture, k8s-pod-basics, k8s-daemonset, k8s-api-objects, k8s-configmap, k8s-architecture, k8s-coredns, security-groups-nacl, local-k8s-kind-minikube, vpc-basics
- 이 글로 오는 글 ←: autoscaling, cloud-cost-optimization, eks-cluster-basics, k8s-daemonset, k8s-gpu-dra, k8s-hpa, k8s-in-place-resize, k8s-learning-roadmap, k8s-pod-disruption-budget, k8s-vpa

#### `k8s-pod-disruption-budget` — PodDisruptionBudget: drain이 멈추는 이유와 eviction 429

- 요약: 노드를 비우다 drain이 끝없이 재시도하는 장면에서 출발해 PDB가 막는 중단과 못 막는 중단, eviction API가 429를 돌려주는 과정, ALLOWED DISRUPTIONS 계산과 퍼센트 올림을 본다. minAvailable과 maxUnavailable 선택, unhealthyPodEvictionPolicy, HPA와 노드 오토스케일러와 함께 쓸 때의 함정까지 실습 클러스터에서 재현한다.
- 태그: Kubernetes, DevOps, SRE, Troubleshooting
- 키워드: PodDisruptionBudget, unhealthyPodEvictionPolicy, 자발적 중단, ALLOWED DISRUPTIONS
- 길이: 446줄
- 소제목: 누가 내리느냐에 따라 규칙이 다르다 / eviction 한 번이 지나가는 길 / ALLOWED DISRUPTIONS는 이렇게 센다 / minAvailable이냐 maxUnavailable이냐 / drain이 끝나지 않는 설정 / 준비 안 된 Pod가 drain을 막을 때 / HPA와 함께 쓸 때 생기는 일 / PDB를 걸기 전에 확인하는 것 / 숫자 하나로 맺는 약속 / 면접에서 나올 만한 질문
- 직접 링크 →: k8s-vpa, k8s-in-place-resize, k8s-node-autoscaling-karpenter, k8s-pod-resources, k8s-deployment, k8s-pod-probes, eks-cluster-basics, k8s-hpa, k8s-pod-scheduling, k8s-node-maintenance
- 키워드 백링크 →: k8s-architecture, k8s-pod-lifecycle, k8s-cluster-upgrade, k8s-statefulset, k8s-pod-basics, k8s-daemonset, docker-container-basics, helm-basics, kafka-basics, local-k8s-kind-minikube, db-type-key-value
- 이 글로 오는 글 ←: eks-cluster-basics, high-availability, k8s-admission-control, k8s-cluster-upgrade, k8s-deployment, k8s-feature-maturity, k8s-job-cronjob, k8s-labels-selectors, k8s-learning-roadmap, k8s-node-autoscaling-karpenter, k8s-node-maintenance, k8s-pod-scheduling, k8s-statefulset, k8s-vpa, opensearch-cluster-operations

#### `k8s-statefulset` — StatefulSet: 번호, 이름, 디스크를 고정하는 컨트롤러

- 요약: Pod마다 고정 번호와 DNS 이름, 디스크를 주는 StatefulSet을 headless Service, volumeClaimTemplates, OrderedReady와 Parallel, partition 롤링 업데이트로 따라간다. 줄인 뒤 남는 PVC와 retention 정책, undo로 풀리지 않는 롤아웃, 노드가 죽었을 때 기다리는 이유, DB를 올릴지 판단하는 기준까지 실제 출력으로 확인한다.
- 태그: Kubernetes, DevOps, Database, Troubleshooting
- 키워드: StatefulSet, volumeClaimTemplates, persistentVolumeClaimRetentionPolicy, partition 롤링 업데이트
- 길이: 650줄
- 소제목: 이름이 바뀌면 안 되는 앱 / 매니페스트에서 다른 세 줄 / 하나가 Ready가 돼야 다음을 만든다 / Pod마다 붙는 DNS 이름 / 줄일 때는 큰 번호부터, 디스크는 남는다 / Parallel로 바꾸면 순서가 사라진다 / 업데이트는 큰 번호부터 하나씩, partition으로 끊어서 / 롤아웃이 멈췄을 때 / 노드가 죽으면 StatefulSet은 기다린다 / DB를 쿠버네티스에 올릴까 / StatefulSet이 이상할 때 보는 순서 / 번호, 이름, 디스크 / 면접에서 나올 만한 질문
- 직접 링크 →: k8s-deployment, k8s-pv-pvc, k8s-storageclass-snapshots, k8s-service-types, k8s-coredns, k8s-node-maintenance, k8s-pod-disruption-budget, k8s-operators, k8s-pod-troubleshooting, k8s-daemonset, k8s-job-cronjob
- 키워드 백링크 →: k8s-pod-lifecycle, k8s-pod-scheduling, k8s-pod-basics, iptables-nat, db-type-wide-column, docker-container-basics, k8s-deploy-pipeline-eks, k8s-architecture, rollback-strategy, kafka-basics, postgres-operations, local-k8s-kind-minikube, db-type-key-value, k8s-hpa, dns
- 이 글로 오는 글 ←: argocd-basics, helm-basics, helm-dependencies-oci-gitops, helm-release-lifecycle, k8s-certifications, k8s-coredns, k8s-cri-cni-csi, k8s-daemonset, k8s-feature-maturity, k8s-hpa, k8s-job-cronjob, k8s-labels-selectors, k8s-learning-roadmap, k8s-namespace, k8s-node-maintenance, k8s-pod-basics, k8s-pod-disruption-budget, k8s-pod-lifecycle, k8s-pod-security-admission, k8s-pod-troubleshooting, k8s-pv-pvc, k8s-service-types, k8s-storageclass-snapshots, network-partitions, opensearch-cluster-operations, rollback-strategy, sd-unique-id-generator

#### `k8s-vpa` — VPA: 사용 기록으로 requests를 정하는 세 부품

- 요약: requests를 얼마로 잡을지 모르는 상황에서 출발해 VPA의 recommender, updater, admission controller가 나눠 맡는 일과 추천값이 히스토그램에서 나오는 방식을 실제로 돌려 본다. updateMode별 동작, 기록이 얇을 때의 함정, HPA와 같은 CPU에 걸면 생기는 일, 운영에서 마주치는 문제를 정리한다.
- 태그: Kubernetes, DevOps, Performance, Scalability
- 키워드: VPA, Vertical Pod Autoscaler, VPA recommender, updateMode
- 길이: 382줄
- 소제목: 세 부품이 나눠 맡는다 / 추천값은 히스토그램에서 나온다 / 기록이 쌓이는 방식 / updateMode마다 적용 시점이 다르다 / Recreate가 Pod를 갈아 끼우는 순서 / 처음 몇 분의 추천은 얇다 / HPA와 같은 CPU에 걸면 서로를 흔든다 / 운영에서 VPA가 일으키는 일 / 추천은 기록에서, 적용은 새 Pod에서 / 면접에서 나올 만한 질문
- 직접 링크 →: k8s-pod-resources, k8s-in-place-resize, k8s-pod-disruption-budget, k8s-hpa, k8s-node-autoscaling-karpenter, cloud-cost-optimization
- 키워드 백링크 →: k8s-admission-control, k8s-pod-basics, k8s-architecture, helm-basics, js-memory-leak, leader-election, postgres-architecture, local-k8s-kind-minikube
- 이 글로 오는 글 ←: autoscaling, k8s-hpa, k8s-in-place-resize, k8s-learning-roadmap, k8s-node-autoscaling-karpenter, k8s-pod-disruption-budget

### Programming › Server/Infra › Nginx (`programming/server-infra/nginx`)

#### `nginx-basics` — Nginx 기본: 설정 파일을 읽는 법

- 요약: 설치했는데 기본 페이지나 403만 보이는 상황에서 출발해 master·worker 구조, Ubuntu의 sites-enabled 배치, server와 location이 골라지는 순서, root와 alias, try_files를 따라간다. nginx -t와 reload로 안전하게 바꾸고 로그로 원인을 찾는 법까지 정리한다.
- 태그: Nginx, Linux, HTTP, DevOps
- 키워드: nginx.conf, server_name, try_files, sites-enabled, location 블록
- 길이: 792줄
- 소제목: 설치하고 떠 있는지 확인하기 / master 하나와 worker 몇 개 / Ubuntu의 설정 파일 배치 / 블록은 안쪽으로 상속된다 / 요청 하나를 받을 server 고르기 / location은 이 순서로 고른다 / root와 alias는 경로를 다르게 만든다 / index와 try_files / 403이 나는 이유 / 바꾸기 전에 -t, 적용은 reload / 로그를 읽는 법 / 설정은 nginx가 읽는 순서대로 읽는다 / 면접에서 나올 만한 질문
- 직접 링크 →: nginx-reverse-proxy, nginx-https-performance
- 키워드 백링크 →: blue-green-deployment, linux-systemd-systemctl, realtime-communication, proxy-reverse-proxy, linux-processes-signals, event-loop, linux-files-permissions, http-status-codes, what-happens-google-com, ipv6-basics, db-modeling-normalization
- 이 글로 오는 글 ←: docker-network-volume, encryption-in-transit, first-page-from-power-on, https-tls, local-custom-domain, nginx-https-performance, nginx-reverse-proxy, rendering-csr-spa, what-happens-google-com

#### `nginx-https-performance` — Nginx HTTPS·성능·보안 설정

- 요약: certbot으로 인증서를 받아 자동 갱신하고 HTTPS 리다이렉트, TLS와 HTTP/2, HSTS를 붙인다. gzip과 정적 파일 캐시 헤더, proxy_cache, limit_req 속도 제한, 보안 헤더를 설정한 뒤 curl과 openssl로 바깥에서 확인한다.
- 태그: Nginx, HTTPS, TLS, Performance, Security
- 키워드: certbot, proxy_cache, limit_req, gzip_types
- 길이: 864줄
- 소제목: 인증서는 certbot에게 맡긴다 / HTTP는 HTTPS로 돌려보낸다 / TLS 버전과 암호, HTTP2 켜기 / 압축은 텍스트에만 / 정적 파일 캐시 헤더 / 업스트림 응답을 nginx에 저장하기 / 요청 수를 제한한다 / 보안 헤더와 숨길 것 / 바깥에서 확인하기 / HTTPS를 붙인 뒤에 걸려 오는 전화 / 앞단에서 한 번에 처리한다 / 면접에서 나올 만한 질문
- 직접 링크 →: nginx-reverse-proxy, https-tls, http-caching-cdn, nginx-basics, http-versions, iptables-basics, network-troubleshooting-by-layer
- 키워드 백링크 →: edge-caching, cookie-session-login, security-groups-nacl, what-happens-google-com, first-page-from-power-on, udp-and-quic, dns
- 이 글로 오는 글 ←: ddos-protection, edge-caching, https-tls, nginx-basics, nginx-reverse-proxy, rate-limiting-algorithms, rate-limiting-in-practice

#### `nginx-reverse-proxy` — Nginx 리버스 프록시와 로드 밸런싱

- 요약: proxy_pass의 끝 슬래시 규칙, 앱에 넘겨야 할 Host·X-Forwarded-* 헤더, upstream과 로드 밸런싱 방식, 실패한 서버를 빼는 법과 keepalive를 설정으로 따라간다. 502와 504가 생기는 자리, WebSocket, 버퍼링, 413까지 로그와 함께 본다.
- 태그: Nginx, HTTP, Network, DevOps
- 키워드: proxy_pass, upstream 블록, least_conn, proxy_set_header
- 길이: 621줄
- 소제목: proxy_pass 한 줄로 넘기기 / 끝 슬래시 하나가 경로를 바꾼다 / 앱에게 진짜 손님 정보를 넘긴다 / upstream으로 서버 여럿에 나누기 / 502와 504가 나는 자리 / WebSocket은 연결을 바꿔 달라고 요청한다 / 버퍼링은 켜 두고, 흘려보낼 때만 끈다 / 업로드는 1MB에서 막힌다 / 앞에 서서 대신 받아 주는 자리 / 면접에서 나올 만한 질문
- 직접 링크 →: proxy-reverse-proxy, nginx-basics, load-balancing-algorithms, http-status-codes, realtime-communication, nginx-https-performance, gateway
- 키워드 백링크 →: retries, rolling-deployment, tcp-connection-lifecycle, browser-fetch, load-balancer-basics, reverse-proxy-lb-api-gateway, consistent-hashing, race-conditions, osi-in-practice, redis-basics, resilience-patterns, what-happens-google-com, http-methods
- 이 글로 오는 글 ←: api-scaling-ladder, devops-networking-roadmap, encryption-in-transit, html-form-http, http-methods, http-status-codes, http-streaming-sse, http-versions, load-balancer-basics, load-balancing-algorithms, network-layers-overview, networking-essentials-map, nginx-basics, nginx-https-performance, osi-in-practice, packet-capture-tcpdump, proxy-reverse-proxy, realtime-communication, rendering-ssr, rest-api-design, reverse-proxy-lb-api-gateway, server-sent-events, streaming-ssr-suspense, timeouts

### Programming › Server/Infra › Observability (`programming/server-infra/observability`)

#### `alerting` — 알림 설계: 증상에 걸고, 묶고, 누르고, 런북을 단다

- 요약: 사람을 깨울 알림과 대시보드에 둘 숫자를 가르는 기준을 세우고, Prometheus 규칙의 for가 창과 더해져 울리는 시점을 promtool로 재 본다. Alertmanager의 묶기, 누르기, 잠재우기와 페이지·티켓 라우팅, 알림 피로를 세는 법까지 실제 출력으로 따라간다.
- 태그: tesla, Observability, DevOps, Troubleshooting, Linux · 회사: tesla
- 키워드: Alertmanager, inhibit_rules, keep_firing_for, 알림 피로, runbook_url
- 길이: 593줄
- 소제목: 알림 하나가 사람을 깨우는 값 / 증상에 걸고 원인은 대시보드로 / 알림 규칙 한 줄씩 읽기 / for는 조건이 버텨야 하는 시간이다 / Prometheus가 울리고 Alertmanager가 전한다 / 묶고, 누르고, 잠재운다 / 페이지와 티켓을 가르는 기준 / 알림 피로는 세어 보면 보인다 / 런북 링크가 없는 알림은 반쪽이다 / 알림이 울리지 않는 장애 / 다시 새벽 세 시로 / 면접에서 나올 만한 질문
- 직접 링크 →: monitoring-basics, sli-slo, error-budgets, health-checks, on-call, network-monitoring
- 키워드 백링크 →: cron-jobs, service-discovery, webhooks
- 이 글로 오는 글 ←: centralized-logging-pipeline, db-type-time-series, dead-letter-queue, distributed-tracing, error-budgets, grafana-dashboards, health-checks, monitoring-basics, network-monitoring, on-call, production-incidents, prometheus-basics, release-cutover-hypercare, sd-metrics-storage-alerting, sd-notification-reliability, sd-queue-logging-automation, sli-slo

#### `centralized-logging-pipeline` — 중앙 로그 파이프라인: 수집기에서 검색 가능한 저장소까지

- 요약: 앱의 표준 출력이 수집기, 가공, 버퍼를 거쳐 저장소에 들어가기까지를 Vector와 OpenSearch로 직접 돌려 보고, 여러 줄 로그 묶기, 저장소 장애 때의 유실, 색인형과 레이블형 저장소, 보관 비용, 로그 알림을 다룬다.
- 태그: tesla, Observability, DevOps, Elasticsearch, Troubleshooting · 회사: tesla
- 키워드: Fluent Bit, 로그 수집기, 디스크 버퍼, 로그 보관 기간
- 길이: 475줄
- 소제목: 로그가 지나가는 다섯 칸 / 수집기는 노드마다 하나 / 여러 줄짜리 오류를 한 건으로 묶기 / 수집기에서 다듬기 / 저장소가 멈추면 로그는 어디에 쌓이나 / 찾아보기를 만들까, 묶어서 압축할까 / 보관 기간이 비용을 정한다 / 같은 질문을 세 저장소에 묻기 / 로그로 알림을 걸 때 / 로그가 안 보인다는 문의를 받았을 때 / 다시 열두 개의 파드 앞에서 / 면접에서 나올 만한 질문
- 직접 링크 →: structured-logging, opensearch-cluster-operations, distributed-tracing, observability-basics, elasticsearch-inverted-index, alerting
- 키워드 백링크 →: k8s-daemonset, k8s-pod-resources, docker-container-basics, sd-payment-flow, sd-object-storage-architecture, sd-metrics-storage-alerting, kafka-basics, osi-in-practice, postgres-architecture
- 이 글로 오는 글 ←: cloud-cost-optimization, docker-commands-workflow, ds-stack-queue-deque, eks-cluster-basics, k8s-audit-logging, k8s-daemonset, k8s-learning-roadmap, k8s-node-maintenance, k8s-pod-basics, k8s-pod-multicontainer, k8s-pod-scheduling, k8s-pod-security-admission, k8s-pv-pvc, k8s-service-types, linux-grep-awk-sed, opensearch-cluster-operations, structured-logging, tcp-reliability-congestion

#### `distributed-tracing` — 분산 추적: 요청 하나를 서비스 셋에 걸쳐 따라가기

- 요약: Node.js 서비스 셋에 OpenTelemetry를 붙이고 Jaeger에 모인 trace에서 느린 구간을 찾아 고친다. traceparent 헤더로 문맥을 잇는 법, 전파가 조용히 끊기는 자리, 헤드와 꼬리 샘플링의 차이, 로그와 trace를 trace_id로 잇는 법까지 다룬다.
- 태그: tesla, Observability, Distributed Systems, MSA, Node.js, PostgreSQL, Performance · 회사: tesla
- 키워드: 분산 추적, traceparent, 꼬리 샘플링, W3C Trace Context
- 길이: 617줄
- 소제목: trace는 나무, span은 가지 하나 / traceparent 한 줄 뜯어보기 / 세 서비스에 OpenTelemetry 붙이기 / 폭포 그림에서 느린 칸 찾기 / 병렬로 바꿔도 느린 칸은 그대로였다 / 헤더가 한 번 끊기면 추적도 끊긴다 / 다 저장할 수 없어서 고른다 / 로그와 trace를 trace_id로 잇는다 / 추적을 들일 때 정할 것 / 다시 주문 버튼으로 / 면접에서 나올 만한 질문
- 직접 링크 →: observability-basics, structured-logging, db-index, event-driven-architecture, service-mesh, alerting, network-flow-logs, network-monitoring, timeouts
- 키워드 백링크 →: gateway, rabbitmq-basics, tcp-connection-lifecycle, event-loop, kafka-basics, http-status-codes
- 이 글로 오는 글 ←: agentic-rag, api-gateway-use-cases, centralized-logging-pipeline, db-architecture-by-scale, devops-networking-roadmap, event-driven-architecture, feature-flags, grafana-dashboards, graphql-basics, k8s-certifications, k8s-learning-roadmap, microservices, microservices-decomposition, multi-region, n-plus-one-queries, network-flow-logs, observability-basics, release-cutover-hypercare, reverse-proxy-lb-api-gateway, saga-pattern, sd-latency-numbers, sd-metrics-collection, structured-logging, tail-latency

#### `error-budgets` — 에러 예산과 소진 속도: 남은 실패로 배포를 정한다

- 요약: 에러 예산과 소진 속도를 계산하고, 여러 창 여러 속도 알림을 기록 규칙으로 만들어 promtool로 언제 울리는지 잰다. 28일 이력을 백필한 Prometheus에 남은 예산을 묻는 배포 게이트와 예산 정책까지 다룬다.
- 태그: Observability, DevOps, Resilience
- 키워드: 에러 예산, 소진 속도, burn rate, multiwindow multi-burn-rate
- 길이: 432줄
- 소제목: 실패해도 되는 몫을 미리 정한다 / 얼마나 빨리 쓰고 있나: 소진 속도 / 창 하나로는 늦거나 시끄럽다 / 기록 규칙으로 창마다 오류율을 미리 계산한다 / 언제 울리는지 promtool로 재 본다 / 낮은 트래픽과 예산 계산의 함정 / 남은 예산을 묻고 배포를 막는다 / 예산 정책: 숫자가 결정을 바꾸는 규칙 / 예산이 엉뚱하게 움직일 때 / 다시 금요일 오후로 / 면접에서 나올 만한 질문
- 직접 링크 →: sli-slo, alerting, postmortems
- 키워드 백링크 →: k8s-deploy-pipeline-eks, zero-downtime-migrations
- 이 글로 오는 글 ←: alerting, on-call, postmortems, production-incidents, rollback-strategy, sli-slo

#### `grafana-dashboards` — Grafana 대시보드: 데이터 소스, 변수, 코드로 관리하기, 알림

- 요약: 덮어써서 사라진 대시보드와 All을 고르면 비는 패널에서 출발해 패널 쿼리가 지나는 길, $__interval과 $__rate_interval, 변수 치환과 =~, API·프로비저닝·Foundation SDK로 대시보드를 코드로 두는 법, Grafana 알림과 Alertmanager의 차이, Loki·Tempo로 건너가는 연결을 Grafana 12.2로 직접 확인한다.
- 태그: tesla, Observability, DevOps, Troubleshooting, Performance · 회사: tesla
- 키워드: $__rate_interval, 대시보드 프로비저닝, Foundation SDK, grafonnet, Grafana 알림
- 길이: 499줄
- 소제목: 패널 한 칸이 그려지기까지 / $__interval과 $__rate_interval / 변수는 쿼리 문자열을 바꾸는 치환이다 / 질문 하나에 패널 하나를 화면에 옮기기 / 대시보드를 코드로 두는 세 가지 방법 / Grafana 알림과 Alertmanager / 지표에서 로그와 trace로 건너가기 / 대시보드가 말을 안 들을 때 / 그리는 도구, 묻는 쪽, 답하는 쪽 / 면접에서 나올 만한 질문
- 직접 링크 →: prometheus-basics, monitoring-basics, metrics-types, alerting, optimistic-locking, argocd-basics, observability-basics, structured-logging, distributed-tracing
- 키워드 백링크 →: terraform-basics, k8s-configmap, docker-container-basics, db-locking-deadlock, http-status-codes
- 이 글로 오는 글 ←: k8s-learning-roadmap, prometheus-basics, sd-metrics-storage-alerting

#### `health-checks` — 헬스 체크 설계: 얕은 검사, 깊은 검사, 그리고 연쇄 장애

- 요약: 공유 Redis를 확인하는 깊은 검사 때문에 HAProxy 뒤의 서버 세 대가 함께 빠지는 장면을 재현하고, 얕은 검사와 요청 단위 실패로 장애를 줄이는 법, 검사 부하와 타임아웃, 뜰 때 하는 검사, /livez·/readyz 설계를 다룬다.
- 태그: Observability, Load Balancer, DevOps, Resilience, Troubleshooting
- 키워드: 깊은 헬스 체크, 얕은 헬스 체크, /readyz
- 길이: 427줄
- 소제목: 묻는 쪽이 하는 행동이 질문을 정한다 / 얕은 검사와 깊은 검사 / 공유 의존성을 물으면 전부 같이 빠진다 / 빼지 말고 그 요청만 실패시킨다 / 헬스 체크도 트래픽이다 / 느린 의존성은 검사도 느리게 만든다 / 뜰 때 한 번 하는 검사 / 검사 엔드포인트를 만들 때 정할 것들 / 헬스 체크가 장애를 만드는 순간 / 다시 상품 목록 503 앞에서 / 면접에서 나올 만한 질문
- 직접 링크 →: load-balancer-basics, k8s-pod-probes, alerting, circuit-breaker, sli-slo
- 키워드 백링크 →: rate-limiting-in-practice, reverse-proxy-lb-api-gateway, k8s-architecture, resilience-patterns, sd-start-single-server, event-loop, vpc-basics, osi-in-practice, redis-basics, http-status-codes
- 이 글로 오는 글 ←: alerting, devops-networking-roadmap, high-availability, k8s-architecture, load-balancer-basics, postmortems, production-incidents

#### `metrics-types` — 지표 타입: 카운터, 게이지, 히스토그램, 서머리

- 요약: 같은 요청도 어떤 그릇에 담느냐에 따라 다른 숫자가 된다. rate와 increase가 카운터 리셋을 이어 붙이는 방식과 처음 나타난 시계열이 잃는 값, 히스토그램 칸 경계가 p90을 23% 틀리게 만든 측정, 서머리를 합칠 수 없는 이유, 평균이 숨기는 것, 레이블 하나로 scrape가 35배 커진 실험까지 다룬다.
- 태그: Observability, Performance, DevOps, Node.js
- 키워드: histogram_quantile, 카운터 리셋, 히스토그램 버킷, 서머리 지표
- 길이: 448줄
- 소제목: 그릇은 넷, 고르는 기준은 하나 / rate는 카운터를 어떻게 읽나 / 히스토그램은 칸으로 센다 / 서머리는 정확하지만 더할 수 없다 / 평균은 왜 거짓말을 하나 / 레이블 하나가 scrape를 서른 배로 / 처음 질문으로 돌아가면 / 면접에서 나올 만한 질문
- 직접 링크 →: monitoring-basics, observability-basics, percentile-latency, db-type-time-series, network-monitoring, sli-slo, tail-latency, structured-logging
- 키워드 백링크 →: latency-bandwidth-throughput
- 이 글로 오는 글 ←: db-type-time-series, devops-networking-roadmap, grafana-dashboards, k8s-learning-roadmap, monitoring-basics, network-monitoring, observability-basics, percentile-latency, prometheus-basics, sd-metrics-collection, sd-metrics-storage-alerting, sd-notification-reliability, sd-queue-logging-automation, sli-slo, structured-logging, system-design-study-path

#### `monitoring-basics` — 모니터링 기본: 무엇을 지켜보고 어떻게 모으나

- 요약: 네 가지 황금 신호, 서비스를 보는 RED와 자원을 보는 USE로 무엇을 잴지 정하고 Prometheus 쿼리로 직접 뽑는다. 프로세스가 멈췄을 때 앱 지표는 비고 바깥 탐침만 실패를 잡는 장면, Prometheus의 pull 방식과 Pushgateway, 질문 하나에 패널 하나인 대시보드 설계까지 다룬다.
- 태그: Observability, DevOps, Linux, Troubleshooting, Performance
- 키워드: 황금 신호, RED 방법, USE 방법, 블랙박스 모니터링
- 길이: 394줄
- 소제목: 사용자 쪽에서 보는 네 가지 숫자 / 요청을 받는 쪽은 RED로 / 자원은 USE로 / 안에서 세기와 밖에서 두드리기 / Prometheus는 가지러 간다 / 대시보드는 질문 하나에 패널 하나 / 모니터링을 들일 때 자주 하는 실수 / 다시 조용한 그래프 앞에서 / 면접에서 나올 만한 질문
- 직접 링크 →: observability-basics, metrics-types, structured-logging, network-monitoring, alerting, sli-slo
- 키워드 백링크 →: prometheus-basics, service-discovery, microservices, event-loop, sql-batch-timeout-pool, vpc-basics, dns
- 이 글로 오는 글 ←: alerting, api-scaling-ladder, backend-engineer-roadmap, devops-networking-roadmap, grafana-dashboards, k8s-learning-roadmap, metrics-types, observability-basics, prometheus-basics, sd-metrics-collection, sli-slo, structured-logging

#### `network-flow-logs` — 흐름 로그: 누가 누구와 이야기하는지 남기기

- 요약: 5-튜플로 패킷을 묶어 대화마다 한 줄을 남기는 흐름 레코드를 softflowd와 conntrack으로 직접 만들고, VPC 흐름 로그 한 줄을 필드별로 읽는다. NAT 뒤의 원래 출발지 찾기, 많이 통신하는 쌍과 스캔 찾기, 샘플링이 무엇을 잃는지와 비용 조절까지 다룬다.
- 태그: Observability, Network, AWS, Security, Linux, Troubleshooting
- 키워드: VPC 흐름 로그, 흐름 로그, NetFlow, 5-튜플
- 길이: 457줄
- 소제목: 패킷 대신 대화의 요약을 남긴다 / 리눅스에서 흐름 레코드 만들어 보기 / VPC 흐름 로그 한 줄 읽기 / NAT 게이트웨이 뒤에서는 주소가 바뀐다 / 누가 누구와 이야기하나 / 다 기록하면 비싸고, 덜 기록하면 놓친다 / 흐름 로그를 들고 현장에 갈 때 / 다시 보안 그룹 앞에서 / 면접에서 나올 만한 질문
- 직접 링크 →: security-groups-nacl, network-monitoring, iptables-basics, vpc-subnets-route-tables, k8s-cni-pod-network, ids-ips, zero-trust-architecture, packet-capture-tcpdump, distributed-tracing
- 키워드 백링크 →: vpc-basics, osi-in-practice, tcp-connection-lifecycle, k8s-service-types, db-type-key-value, eks-cluster-basics, ports-and-sockets, local-custom-domain, dhcp, layer-ip-routing-icmp, packet-encapsulation, udp-and-quic, dns
- 이 글로 오는 글 ←: cloud-cost-optimization, ddos-protection, devops-networking-roadmap, distributed-tracing, eks-cluster-basics, ids-ips, k8s-cni-pod-network, network-monitoring, security-groups-nacl, terraform-network-iac, vpc-basics, vpc-peering-transit-privatelink, zero-trust-architecture

#### `network-monitoring` — 네트워크 모니터링: 바이트 그래프 뒤에서 무엇을 볼까

- 요약: 대역폭 그래프에 드러나지 않는 손실과 대기를 인터페이스·qdisc 카운터, 재전송 비율, accept 큐 넘침, conntrack, DNS 지연으로 직접 읽는다. node_exporter와 blackbox_exporter를 Prometheus로 모아 rate로 바꾸고 알림을 걸며, SNMP로 장비 카운터를 묻는 법까지 다룬다.
- 태그: Observability, Network, Linux, DevOps, Troubleshooting, TCP/IP
- 키워드: node_exporter, blackbox_exporter, ListenOverflows, SNMP, 재전송 비율
- 길이: 660줄
- 소제목: 바이트 그래프 뒤에 숨은 숫자들 / 인터페이스 카운터는 부팅 후 누적값이다 / 인터페이스가 0이어도 큐에서 버려진다 / 재전송은 잃어버린 패킷의 영수증 / accept 큐가 넘치면 SYN이 소리 없이 사라진다 / TIME_WAIT와 conntrack은 개수를 한도와 같이 본다 / DNS 지연은 요청 시간 속에 숨는다 / node_exporter는 안을, blackbox_exporter는 밖을 본다 / 누적값을 속도로 바꾸는 rate / 알림은 손실과 실패에 건다 / 스위치와 라우터는 SNMP로 묻는다 / 현장에서 그래프를 펼치는 순서 / 처음 장면을 다시 보면 / 면접에서 나올 만한 질문
- 직접 링크 →: observability-basics, metrics-types, network-troubleshooting-by-layer, traffic-shaping-qos, tcp-reliability-congestion, tcp-connection-lifecycle, connection-pool, iptables-basics, k8s-coredns, alerting, sli-slo, packet-capture-tcpdump, network-flow-logs, db-type-time-series
- 키워드 백링크 →: what-happens-google-com, local-custom-domain, event-loop, ports-and-sockets, http-status-codes, layer-ip-routing-icmp, disaster-recovery, udp-and-quic, dns
- 이 글로 오는 글 ←: alerting, clock-skew, ddos-protection, devops-networking-roadmap, distributed-tracing, metrics-types, monitoring-basics, network-flow-logs, udp-and-quic

#### `observability-basics` — 관측 가능성: 대시보드가 답하지 못하는 질문에 답하기

- 요약: 미리 정한 질문에 답하는 모니터링과 처음 보는 질문에 답하는 관측 가능성의 차이를, 쿠폰 주문만 느린 장면으로 따라간다. 지표·로그·trace가 각자 잘하는 일과 비용, exemplar와 trace_id로 셋을 잇는 법, 레이블로 둘 것과 필드로 둘 것, OpenTelemetry와 Collector가 맡는 역할까지 다룬다.
- 태그: tesla, Observability, DevOps, Distributed Systems, Node.js, Performance · 회사: tesla
- 키워드: 관측 가능성, OpenTelemetry, exemplar, OTel Collector
- 길이: 454줄
- 소제목: 아는 질문과 모르는 질문 / 세 가지 신호는 서로 다른 질문에 답한다 / 쿠폰 하나가 p99를 끌어올렸다 / 지표의 튄 점에서 trace와 로그로 건너가기 / 무엇이든 레이블로 만들 수는 없다 / OpenTelemetry는 계측과 저장소 사이의 약속 / 어디서부터 들일까 / "가끔 느리다"는 문의를 받았을 때 / 다시 쿠폰 문의 앞에서 / 면접에서 나올 만한 질문
- 직접 링크 →: monitoring-basics, metrics-types, structured-logging, distributed-tracing, db-type-time-series
- 키워드 백링크 →: event-sourcing, http-status-codes, grpc
- 이 글로 오는 글 ←: agentic-rag, centralized-logging-pipeline, distributed-tracing, feature-flags, grafana-dashboards, graphql-basics, k8s-certifications, metrics-types, microservices, monitoring-basics, network-monitoring, pattern-bridge, sd-queue-logging-automation, structured-logging

#### `prometheus-basics` — Prometheus 내부 구조: 서비스 디스커버리, relabel, ServiceMonitor, TSDB, remote_write

- 요약: ServiceMonitor 라벨 하나로 대상이 조용히 빠지는 장면에서 출발해 쿠버네티스 서비스 디스커버리와 relabel 규칙, operator가 만드는 설정, WAL과 2시간 블록·보존, federation과 remote_write, Thanos와 Mimir까지 Prometheus 3.5로 직접 확인한다.
- 태그: tesla, Observability, Kubernetes, DevOps, Troubleshooting, Performance · 회사: tesla
- 키워드: relabel_configs, ServiceMonitor, kube-prometheus-stack, remote_write, Thanos
- 길이: 656줄
- 소제목: 대상 찾기부터 저장까지 다섯 단계 / 쿠버네티스에서 대상을 찾는 법 / relabel은 라벨 묶음을 한 줄씩 고친다 / ServiceMonitor는 설정 파일을 만드는 재료다 / TSDB는 2시간 단위로 잘라 쌓는다 / 한 대를 넘어설 때: federation, remote_write, Thanos, Mimir / PromQL은 세 줄만 손에 익히면 된다 / 현장에서 Prometheus가 아플 때 / 찾고, 고치고, 쌓고, 넘긴다 / 면접에서 나올 만한 질문
- 직접 링크 →: monitoring-basics, metrics-types, alerting, db-type-time-series, grafana-dashboards
- 키워드 백링크 →: k8s-network-policy, service-discovery, k8s-pod-resources, docker-container-basics, k8s-architecture, helm-basics, kubernetes-ingress, sd-object-storage-architecture, scaling-horizontal-vertical, local-k8s-kind-minikube, zero-downtime-migrations
- 이 글로 오는 글 ←: argocd-basics, db-replication-sharding, db-type-time-series, grafana-dashboards, k8s-daemonset, k8s-learning-roadmap, monitoring-basics, sd-metrics-collection, sd-metrics-storage-alerting, sd-queue-logging-automation, system-design-study-path

#### `sli-slo` — SLI와 SLO: 사용자가 겪은 일을 숫자 하나로

- 요약: nginx 로그에서 가용성과 지연 SLI를 직접 계산해 서버 안에서 잰 숫자와 비교하고, 문턱 안 비율로 재는 지연 SLI, 아홉별 허용 장애 시간, 28일 굴러가는 창, SLA와 SLO의 차이를 정리한다.
- 태그: tesla, Observability, DevOps, Nginx, Performance · 회사: tesla
- 키워드: SLI, SLO, 지연 SLI, 굴러가는 창
- 길이: 367줄
- 소제목: 사용자가 겪은 일을 비율 하나로 / 좋은 요청과 유효한 요청을 정한다 / 어디서 재느냐가 숫자를 바꾼다 / 평균은 느린 사용자를 숨긴다 / 목표는 100%가 아니다 / 며칠 동안 재나: 굴러가는 창과 달력 월 / SLA는 바깥과의 약속, SLO는 안쪽의 목표 / SLO는 한 장의 문서로 남긴다 / SLO가 사용자와 어긋나는 순간 / 다시 99.57% 앞에서 / 면접에서 나올 만한 질문
- 직접 링크 →: alerting, error-budgets, monitoring-basics, metrics-types, failover
- 키워드 백링크 →: osi-in-practice, http-status-codes, dns
- 이 글로 오는 글 ←: alerting, chaos-engineering, error-budgets, health-checks, high-availability, latency-bandwidth-throughput, metrics-types, monitoring-basics, network-monitoring, on-call, percentile-latency, postmortems, production-incidents, release-cutover-hypercare, rollback-strategy, sd-latency-numbers

#### `structured-logging` — 구조화 로그: JSON 한 줄로 남기고 묻기

- 요약: 로그를 문장이 아니라 필드가 있는 JSON 한 줄로 남기고, pino로 레벨·trace_id·개인정보 가리기를 다룬다. redact를 해 뒀는데 URL로 이메일이 샌 사례, 오류는 지키고 나머지만 trace_id로 고르는 샘플링, 갑자기 죽을 때 사라지는 버퍼, jq와 Loki LogQL로 묻는 법까지 따라간다.
- 태그: tesla, Observability, Node.js, Security, DevOps, Troubleshooting · 회사: tesla
- 키워드: 구조화 로그, LogQL, pino, 로그 샘플링
- 길이: 468줄
- 소제목: 한 줄에 담을 것 / 레벨은 누가 깨어나야 하는지로 정한다 / 요청 하나에서 나온 줄을 모두 찾는다 / 개인정보는 남기기 전에 가린다 / 다 남길 수 없을 때 고르는 법 / 로그가 저장소까지 가는 길 / jq와 LogQL로 묻기 / 로그를 다듬을 때 자주 하는 실수 / 처음 그 줄을 다시 쓰면 / 면접에서 나올 만한 질문
- 직접 링크 →: observability-basics, distributed-tracing, monitoring-basics, metrics-types
- 키워드 백링크 →: elasticsearch-inverted-index, centralized-logging-pipeline, k8s-daemonset, docker-container-basics, event-loop, linux-grep-awk-sed
- 이 글로 오는 글 ←: api-gateway-use-cases, backend-engineer-roadmap, centralized-logging-pipeline, dead-letter-queue, devops-networking-roadmap, distributed-tracing, docker-commands-workflow, grafana-dashboards, k8s-audit-logging, k8s-learning-roadmap, metrics-types, monitoring-basics, observability-basics, pattern-adapter, postmortems, release-cutover-hypercare, sd-metrics-collection, sd-queue-logging-automation

### Programming › Server/Infra › SRE (`programming/server-infra/sre`)

#### `backup-strategy` — 백업 전략: 3-2-1, 증분과 차등, 불변 백업, 복원 테스트

- 요약: 몇 벌을 어디에 두고, 매번 전부 뜰지 바뀐 것만 뜰지, 얼마나 오래 둘지, 랜섬웨어가 못 지우게 하는 법을 정한다. tar로 증분과 차등을 비교하고, 복원 지점 이름으로 PITR을 해 보고, 깨진 백업을 pg_verifybackup으로 잡는다.
- 태그: SRE, DevOps, Database, PostgreSQL, Security, Linux
- 키워드: 3-2-1 백업, 차등 백업, Object Lock, 복원 테스트
- 길이: 422줄
- 소제목: 백업이 있었는데도 못 살린 이유 / 세 벌, 두 매체, 한 곳은 밖 / 전체, 증분, 차등 / 실수 직전에 이름을 붙여 둔다 / 얼마나 오래 두나 / 랜섬웨어는 백업부터 노린다 / 복원해 보지 않은 백업은 기대일 뿐이다 / 백업이 조용히 망가지는 순간 / 정리: 사고마다 다른 사본 / 면접에서 나올 만한 질문
- 직접 링크 →: disaster-recovery, failover, postgres-operations, k8s-etcd-backup, velero-backup, encryption-at-rest, multi-region
- 키워드 백링크 →: sd-object-storage-architecture, postgres-architecture, on-call
- 이 글로 오는 글 ←: disaster-recovery, encryption-at-rest, failover, k8s-etcd-backup, k8s-storageclass-snapshots, multi-region, sd-db-replication-intro, sd-object-storage-durability, sd-object-storage-versioning-multipart, sd-start-single-server, velero-backup

#### `chaos-engineering` — 카오스 엔지니어링: 정상 상태를 재고, 고장 하나를 넣고, 벗어나면 멈춘다

- 요약: 평소 지표를 숫자로 적고 가설을 세운 뒤 작은 범위에서 지연·손실·프로세스 종료를 넣어 본다. 네임스페이스 실험에서 연결 단계를 재지 않는 타임아웃을 찾고 고친 과정으로 폭발 반경, 멈춤 조건, 게임 데이, 도구 선택까지 다룬다.
- 태그: SRE, DevOps, Resilience, Linux, Node.js, Troubleshooting
- 키워드: 카오스 엔지니어링, 정상 상태 가설, 게임 데이, Toxiproxy
- 길이: 563줄
- 소제목: 평소 모습부터 숫자로 적는다 / 가설은 숫자와 고장 하나로 쓴다 / 실험실: 네임스페이스 두 개와 고장 내는 프록시 / 느려진 연결 30% / 패킷을 버렸더니 타임아웃이 안 걸렸다 / 프로세스가 죽었을 때와 응답이 사라졌을 때 / 폭발 반경은 작게 시작해 넓힌다 / 멈춤 조건이 없는 실험은 장애다 / 게임 데이에는 사람과 절차도 실험한다 / 도구가 대신 해 주는 일: Chaos Mesh, Litmus, AWS FIS / 실험이 사고가 되는 실수들 / 판정을 코드로 해 보기 / 다시 그 타임아웃으로 / 면접에서 나올 만한 질문
- 직접 링크 →: production-incidents, postmortems, on-call, resilience-patterns, circuit-breaker, sli-slo, retries, timeouts
- 키워드 백링크 →: browser-fetch, docker-container-basics, iptables-basics, tail-latency, network-config-cicd, vpc-basics, eks-cluster-basics
- 이 글로 오는 글 ←: disaster-recovery, fault-tolerance, high-availability, on-call, postmortems, production-incidents, sd-multi-datacenter, timeouts

#### `disaster-recovery` — 재해 복구: RPO와 RTO를 숫자로 재고 DR 단계 고르기

- 요약: 디스크가 사라진 DB를 백업과 WAL로 되살리며 잃은 주문 수와 복원 시간을 직접 잰다. archive_timeout과 실시간 WAL 수신이 RPO를, 복사와 재생 시간이 RTO를 정하는 과정, 백업 후 복원부터 액티브-액티브까지 DR 네 단계와 비용, DR 훈련에서 터지는 것들을 정리한다.
- 태그: SRE, DevOps, Resilience, Database, PostgreSQL, Cloud
- 키워드: RPO, RTO, 재해 복구, 웜 스탠바이, 파일럿 라이트
- 길이: 429줄
- 소제목: 디스크가 사라진 날 잃은 39건 / 얼마나 잃고 얼마나 멈추나 / 마지막으로 바깥에 나간 기록이 RPO를 정한다 / RTO는 복원 단계를 더한 값이다 / 네 단계의 DR 구성 / 비용과 RTO를 함께 놓고 고르기 / DR 훈련: 문서대로 되살아나는지 / 훈련에서 자주 터지는 것들 / 두 질문에 숫자로 답하기 / 면접에서 나올 만한 질문
- 직접 링크 →: backup-strategy, failover, multi-region, postgres-operations, chaos-engineering
- 키워드 백링크 →: k8s-deploy-pipeline-eks, docker-container-basics, db-replication-sharding, sd-object-storage-architecture, sd-start-single-server, osi-in-practice, postgres-architecture, dns, on-call
- 이 글로 오는 글 ←: backup-strategy, db-replication-sharding, failover, high-availability, iac-basics, k8s-etcd-backup, multi-region, network-monitoring, postgres-operations, sd-multi-datacenter, tcp-reliability-congestion, velero-backup

#### `failover` — 장애 조치: 감지, 펜싱, 클라이언트 전환과 멈춘 시간 재기

- 요약: PostgreSQL 프라이머리를 죽이고 스탠바이를 승격하며 쓰기가 멈춘 9.6초를 감지, 승격, 전환으로 나눠 잰다. 비동기 복제에서 응답받은 주문이 사라지는 장면, 옛 프라이머리가 살아 있을 때의 스플릿 브레인, DNS·VIP·프록시·드라이버 전환과 Patroni 설정을 다룬다.
- 태그: SRE, DevOps, Resilience, Distributed Systems, PostgreSQL, Troubleshooting
- 키워드: Patroni, STONITH, 장애 조치 시간
- 길이: 387줄
- 소제목: 주문이 9.6초 동안 멈췄다 / 멈춘 시간은 세 토막이다 / 감지: 빨리 알아채면 잘못 알아챈다 / 비동기 복제는 응답한 주문을 잃는다 / 옛 프라이머리가 살아 있으면 / 클라이언트를 새 프라이머리로 데려가는 길 / Patroni는 이 토막들을 어떻게 맡나 / 장애 조치가 오히려 장애가 되는 순간 / 넘어갔다는 말의 내용 / 면접에서 나올 만한 질문
- 직접 링크 →: disaster-recovery, multi-region, db-replication-sharding, network-partitions, leader-election, load-balancer-basics, connection-pool, exponential-backoff-jitter, backup-strategy
- 키워드 백링크 →: db-architecture-by-scale, browser-fetch, rest-api-design, distributed-lock, security-groups-nacl, osi-in-practice, sql-batch-timeout-pool, postgres-architecture, db-type-key-value, vpc-basics, layer-link-ethernet-arp, dns
- 이 글로 오는 글 ←: backup-strategy, db-replication-sharding, disaster-recovery, high-availability, leader-election, multi-region, network-partitions, sd-db-replication-intro, sd-multi-datacenter, sli-slo, system-design-concepts-map

#### `multi-region` — 멀티 리전: 지연 계산, 액티브-패시브와 액티브-액티브, 충돌, 셀 구조

- 요약: 빛의 속도로 리전 간 지연의 바닥을 계산하고, 리전 사이 동기 복제가 커밋을 얼마나 늦추는지 직접 잰다. 쓰기 주인을 정하는 액티브-패시브와 홈 리전, LWW가 조용히 쓰기를 잃는 장면, 가까운 리전 라우팅, 데이터 거주 요건, 셀 기반 구조를 다룬다.
- 태그: System Design, Distributed Systems, Cloud, DNS, Scalability
- 키워드: 멀티 리전, 홈 리전, 셀 기반 구조, 데이터 거주
- 길이: 352줄
- 소제목: 빛이 정하는 바닥 / 커밋 하나가 바다를 건너면 / 쓰기는 한 리전에서: 액티브-패시브 / 양쪽에서 쓰면 부딪친다: 액티브-액티브 / 두 리전이 같은 번호를 만들지 않게 / 사용자를 가까운 리전으로 / 리전을 계획대로 비우는 순서 / 데이터가 국경을 넘으면 / 셀 기반 구조: 리전 안에서도 쪼갠다 / 멀티 리전이 아픈 순간 / 거리와 충돌을 먼저 정한다 / 면접에서 나올 만한 질문
- 직접 링크 →: disaster-recovery, failover, backup-strategy, eventual-consistency, crdt, cdn-edge-anycast, latency-bandwidth-throughput, clock-skew, db-sharding, consistent-hashing
- 키워드 백링크 →: db-type-wide-column, db-type-key-value, sd-multi-datacenter, db-replication-sharding, distributed-tracing, osi-in-practice, redis-basics, postgres-architecture, dns
- 이 글로 오는 글 ←: backup-strategy, consistency-models, disaster-recovery, failover, fault-tolerance, high-availability, sd-capacity-estimation, sd-multi-datacenter

#### `on-call` — 온콜: 교대표, 에스컬레이션, 런북, 인수인계

- 요약: 알림을 받는 사람의 구조를 설계한다. 주간 교대와 해를 따라 넘기는 교대, 에스컬레이션 대기 시간, 페이지 기록으로 재는 알림 피로, 스크립트로 시작하는 런북, 교대 기록을 다룬다.
- 태그: SRE, DevOps, Observability, Troubleshooting
- 키워드: 온콜, 에스컬레이션 정책, 해를 따라 넘기는 교대, 런북
- 길이: 378줄
- 소제목: 온콜이 맡는 일은 알림 응답만이 아니다 / 교대표를 짜는 기준 / 해를 따라 넘기는 교대 / 응답이 없으면 다음 사람에게 / 몇 번 깨우면 지속할 수 없나 / 런북의 첫 줄은 사람이 아니라 스크립트가 친다 / 교대할 때 넘기는 것 / 온콜을 오래 버티게 하는 장치들 / 온콜을 망가뜨리는 실수 / 교대표 계산해 보기 / 다시 그 석 달 뒤로 / 면접에서 나올 만한 질문
- 직접 링크 →: alerting, sli-slo, error-budgets, production-incidents, postmortems, chaos-engineering
- 키워드 백링크 →: osi-in-practice, webhooks
- 이 글로 오는 글 ←: agentic-rag, alerting, architecture-patterns-overview, backup-strategy, chaos-engineering, ddos-protection, devops-networking-roadmap, disaster-recovery, graph-rag, k8s-learning-roadmap, k8s-operators, microservices, postmortems, production-incidents, rag-patterns-overview, rag-retrieval-quality, release-cutover-hypercare

#### `postmortems` — 포스트모템: 비난 없이 쓰고, 닫히는 후속 조치로 끝낸다

- 요약: 장애 뒤에 무엇을 남기고 어떻게 바꿀지 정하는 문서와 과정이다. 비난 없는 문장, 로그로 뽑는 타임라인, 다섯 번의 왜가 놓치는 가지와 기여 요인, 담당자와 날짜가 있는 후속 조치, 템플릿 한 장을 다룬다.
- 태그: tesla, SRE, DevOps, Troubleshooting · 회사: tesla
- 키워드: 포스트모템, 비난 없는 포스트모템, 기여 요인, 다섯 번의 왜
- 길이: 400줄
- 소제목: 포스트모템이 남겨야 하는 것 / 누구도 탓하지 않는다는 말의 실제 뜻 / 언제 쓰고 언제까지 쓰나 / 타임라인은 로그에서 뽑는다 / 다섯 번의 왜가 놓치는 가지 / 기여 요인으로 다시 보기 / 닫히는 후속 조치와 안 닫히는 후속 조치 / 템플릿 한 장 / 초안을 기계로 먼저 걸러 본다 / 검토 회의에서 하는 일 / 후속 조치가 닫혔는지 세어 보기 / 포스트모템이 형식만 남는 순간 / 다시 석 달 뒤의 그 장애로 / 면접에서 나올 만한 질문
- 직접 링크 →: production-incidents, on-call, chaos-engineering, structured-logging, error-budgets
- 키워드 백링크 →: health-checks, osi-in-practice, sli-slo
- 이 글로 오는 글 ←: chaos-engineering, error-budgets, high-availability, on-call, production-incidents, release-cutover-hypercare, rollback-strategy

#### `production-incidents` — 프로덕션 장애 대응: 감지, 분류, 완화, 해결

- 요약: 알림이 울린 순간부터 종료까지의 순서를 재현한 장애의 실제 로그로 따라간다. 등급, 지휘자와 역할, 원인보다 먼저 하는 완화, 상황 공유 간격, 로그로 만든 타임라인을 다룬다.
- 태그: tesla, SRE, DevOps, Troubleshooting, Observability, Node.js · 회사: tesla
- 키워드: 장애 지휘자, 장애 등급, 장애 선언
- 길이: 373줄
- 소제목: 장애 하나가 지나가는 네 단계 / 재현한 장애: 재고 서비스가 느려지자 상품 API가 멈췄다 / 분류: 얼마나 나쁜지 정하고 지휘자를 세운다 / 역할을 나누면 손이 덜 겹친다 / 원인보다 완화가 먼저다 / 해결과 종료 선언 / 로그에서 타임라인을 만든다 / 상황 공유는 정해진 간격으로, 다음 시각을 적어서 / 장애 대응에서 흔히 하는 실수 / 타임라인에서 숫자 뽑기 / 서버 숫자가 멀쩡하던 그 알림으로 / 면접에서 나올 만한 질문
- 직접 링크 →: chaos-engineering, on-call, postmortems, alerting, sli-slo, timeouts, error-budgets, health-checks
- 키워드 백링크 →: backpressure, osi-in-practice, sql-batch-timeout-pool, http-status-codes, connection-pool
- 이 글로 오는 글 ←: chaos-engineering, ddos-protection, on-call, postmortems, release-cutover-hypercare, rollback-strategy

### Programming › System Design (`programming/system-design`)

#### `acid-transactions` — ACID 트랜잭션: 약속이 끝나는 곳을 직접 깨 보기

- 요약: 커밋 기록 한 줄이 원자성을 가르는 모습을 크래시와 pg_waldump로 보고, 풀에서 BEGIN이 흩어지는 버그, 트랜잭션 안의 외부 호출, 지연 제약과 배제 제약, synchronous_commit=off로 커밋을 잃는 장면, 응답을 못 받은 커밋과 멱등성까지 PostgreSQL 16에서 재현한다.
- 태그: Database, PostgreSQL, Transaction, System Design, Node.js
- 키워드: ACID, 원자성, 지속성, 커밋 결과 불명
- 길이: 617줄
- 소제목: 네 글자를 누가 지키나 / 커밋 기록이 없으면 없던 일이다 / 원자성은 연결 하나 안에서만 성립한다 / 데이터베이스 밖에서 한 일은 되돌려지지 않는다 / 일관성은 적어 둔 규칙만큼 지켜진다 / 커밋 응답과 디스크 사이 / 응답을 받지 못한 커밋 / 직접 짜 보기: 커밋된 것만 남기기 / 트랜잭션이 의심될 때 보는 순서 / 약속이 끝나는 곳을 아는 것 / 면접에서 나올 만한 질문
- 직접 링크 →: db-transaction-isolation, postgres-architecture, postgres-mvcc-vacuum, sql-batch-timeout-pool, transactional-outbox, distributed-transactions-2pc, saga-pattern, postgres-data-types, consistency-models, db-consistency-cap, db-replication-sharding, high-availability, idempotency-key, fault-tolerance, optimistic-locking, acid-vs-base
- 키워드 백링크 →: pessimistic-locking, postgres-advanced-sql, db-type-wide-column, db-architecture-by-scale, mysql-innodb-basics, mongodb-document-model, sd-start-single-server, redis-basics, resilience-patterns, postgres-getting-started, http-methods
- 이 글로 오는 글 ←: acid-vs-base, db-consistency-cap, db-transaction-isolation, db-type-columnar-olap, db-type-newsql, db-type-relational, distributed-transactions-2pc, integration-tests-real-db, microservices, postgres-architecture, rate-limiting-in-practice, redis-basics, saga-pattern, sd-hotel-inventory-scaling, sd-payment-flow, sd-wallet-transfer, sql-vs-nosql, system-design-concepts-map, thread-safety

#### `api-scaling-ladder` — API 확장 사다리: 1K에서 1M까지, 칸을 옮기라는 신호

- 요약: 한 대, 풀과 캐시, 여러 대와 로드 밸런서, 인덱스와 복제본, 비동기 큐, 게이트웨이와 샤딩으로 오르는 사다리를 칸마다 넘어갈 신호와 새로 생기는 장애로 정리한다. 사용자 수를 가정과 함께 RPS로 바꾸고, Fastify 한 대의 한계와 지연이 무릎처럼 꺾이는 지점을 직접 잰다.
- 태그: System Design, Scalability, Performance, Backend, Node.js
- 키워드: API 확장 사다리, 동시 사용자 수, 지연 무릎
- 길이: 367줄
- 소제목: 그림 속 1K는 어떤 사용자인가 / 한 대가 버티는 양은 요청 하나의 무게가 정한다 / 지연은 CPU 100%보다 먼저 무너진다 / 사다리 여섯 칸을 한 그림으로 / 연결이 먼저 바닥난다 / 한 대로는 배포조차 못 할 때 / 복제본보다 인덱스가 먼저다 / 요청 안에서 기다리는 일을 뺀다 / 쓰기와 입구가 한계에 닿을 때 / 사다리를 순서대로 오르지 않아도 된다 / p99가 오르면 어디부터 보나 / 칸은 숫자가 아니라 줄이 정한다 / 면접에서 나올 만한 질문
- 직접 링크 →: sd-start-single-server, sd-sharding-intro, db-architecture-by-scale, bullmq-job-queue, sd-capacity-estimation, latency-bandwidth-throughput, nodejs-server-runtime, percentile-latency, connection-pool, caching-strategies, sd-cache-and-cdn-tier, sd-load-balancer-stateless, load-balancer-basics, nginx-reverse-proxy, scaling-horizontal-vertical, db-index, db-index-design, sd-db-replication-intro, db-replication-sharding, kafka-basics, message-queue-basics, backpressure, db-sharding, reverse-proxy-lb-api-gateway, gateway, rate-limiting-in-practice, sd-multi-datacenter, monitoring-basics, autoscaling, system-design-study-path
- 키워드 백링크 →: pessimistic-locking, http-caching-cdn, sd-object-storage-architecture, event-loop, osi-in-practice, sql-batch-timeout-pool, redis-basics, db-partitioning, mongodb-document-model
- 이 글로 오는 글 ←: bullmq-job-queue, sd-nearby-friends

#### `authn-vs-authz` — 인증과 인가: 누구냐와 해도 되냐는 다른 질문이다

- 요약: 로그인한 사용자가 주문 번호만 바꿔 남의 주문을 본 IDOR에서 출발해 401·403·404, ACL·RBAC·ABAC·ReBAC(Zanzibar), OPA 정책과 테스트, 게이트웨이와 서비스의 검사 분담, 토큰 속 역할이 낡는 문제, 목록 API의 인가를 Node와 OPA로 재현한다.
- 태그: Security, Authentication, Authorization, System Design, Backend
- 키워드: 인증과 인가, 객체 수준 인가, BOLA, ReBAC, Zanzibar
- 길이: 475줄
- 소제목: 누구냐와 해도 되냐는 다른 질문이다 / 주소의 숫자만 바꿨을 뿐인데 / 권한을 표현하는 네 가지 방식 / 관계를 따라가는 인가 / 직접 짜 보기: 관계 튜플로 판정하기 / 판정을 코드 밖으로 꺼내기 / 검사는 어디에 두나 / 토큰에 적힌 역할은 언제 낡나 / 목록과 검색에도 인가가 필요하다 / 인가 구멍을 찾는 순서 / 두 번째 질문을 매번 묻는다 / 면접에서 나올 만한 질문
- 직접 링크 →: cookie-session-login, token-login, oauth, http-status-codes, iam-basics, k8s-rbac, zero-trust-architecture, high-availability, fault-tolerance, k8s-admission-control, postgres-roles-security, jwt-key-rotation
- 키워드 백링크 →: rate-limiting-in-practice, gateway, clock-skew, service-mesh, linux-files-permissions, security-groups-nacl, ssrf, https-tls, dns
- 이 글로 오는 글 ←: api-gateway-use-cases, backend-engineer-roadmap, cors, encryption-in-transit, k8s-admission-control, system-design-concepts-map, youtube-url-to-video, zero-trust-architecture

#### `autoscaling` — 오토스케일링: 언제, 무엇을 보고, 얼마나 빨리 늘리나

- 요약: 새 인스턴스가 요청을 받기까지의 반응 시간에서 출발해 반응형·예약형·예측형의 차이, CPU·요청 수·큐 깊이 중 무엇을 볼지, 쿨다운으로 플래핑을 막는 법을 시뮬레이션으로 비교한다. AWS Auto Scaling 그룹 정책과 쿠버네티스에서 Pod와 노드가 따로 늘어나는 구조도 정리한다.
- 태그: Scalability, System Design, DevOps, AWS, Cloud
- 키워드: 오토스케일링, 대상 추적 정책, 예측 스케일링, 웜 풀
- 길이: 351줄
- 소제목: 늘리는 데 걸리는 시간이 먼저다 / 반응형, 예약형, 예측형 / 스파이크와 늘어나는 속도의 경주 / 무엇을 보고 늘리나 / 줄일 때는 천천히 / AWS Auto Scaling 그룹에 걸어 보면 / 쿠버네티스에서는 두 층이 따로 늘어난다 / 0까지 줄이면 첫 요청이 기다린다 / 오토스케일링이 도와주지 못할 때 / 정책보다 반응 시간 / 면접에서 나올 만한 질문
- 직접 링크 →: scaling-horizontal-vertical, k8s-hpa, k8s-node-autoscaling-karpenter, garbage-collection, k8s-vpa, cold-starts, db-replication-sharding, db-sharding, rate-limiting-in-practice, backpressure
- 키워드 백링크 →: k8s-architecture, k8s-pod-lifecycle, event-loop, vpc-basics, osi-in-practice, sql-batch-timeout-pool, message-queue-basics
- 이 글로 오는 글 ←: api-scaling-ladder, backpressure, blue-green-deployment, cloud-cost-optimization, cold-starts, connection-pool, cron-jobs, ddos-protection, eks-cluster-basics, fastapi-basics, feature-flags, high-availability, k8s-certifications, k8s-etcd-backup, k8s-learning-roadmap, k8s-node-autoscaling-karpenter, message-queue-basics, nodejs-server-runtime, rendering-ssg-isr, rolling-deployment, scaling-horizontal-vertical, sd-capacity-estimation, sd-load-balancer-stateless, sd-metrics-collection, sd-multi-datacenter, sd-queue-logging-automation, sd-rate-limiter-design, service-discovery, system-design-concepts-map

#### `cache-invalidation` — 캐시 무효화: 퍼지, ban, 태그, 그리고 지운 뒤 다시 들어오는 옛 값

- 요약: 가격 하나가 CDN, 앱 서버 로컬 캐시, Redis에 사본으로 퍼져 있을 때 변경을 모두에게 전하는 법을 다룬다. Varnish로 퍼지와 ban과 태그 무효화를 비교하고, pub/sub 무효화가 빠지는 순간, 삭제 뒤 옛 값이 다시 채워지는 경쟁과 리스, 복제본보다 빠른 CDN 퍼지를 직접 재현한다.
- 태그: Cache, Redis, Distributed Systems, System Design, PostgreSQL
- 키워드: Surrogate-Key, 태그 무효화, Varnish ban, 캐시 리스
- 길이: 473줄
- 소제목: 가격 하나가 몇 군데에 있나 / 주소 하나를 지우는 퍼지 / 조건으로 지우는 ban / 데이터에 붙인 태그로 지우기 / 지울 필요를 없애는 버전 / TTL에 맡길까, 변경을 알릴까 / 지운 직후 옛 값이 다시 들어온다 / CDN 퍼지가 복제본보다 빠를 때 / "고쳤는데 안 바뀐다"를 층별로 좁히기 / 어려운 건 지우는 일이 아니다 / 면접에서 나올 만한 질문
- 직접 링크 →: caching-strategies, edge-caching, http-caching-cdn, pub-sub
- 키워드 백링크 →: cdn-edge-anycast, db-replication-sharding, kafka-basics, redis-basics, dns
- 이 글로 오는 글 ←: cache-write-policies, caching-concepts-map, edge-caching, sd-cache-and-cdn-tier, sd-hotel-inventory-scaling, sd-proximity-service, sd-url-shortener-key-generation, system-design-concepts-map

#### `cache-write-policies` — 캐시 쓰기 방식: write-through, write-back, write-around를 직접 재 보기

- 요약: 세 쓰기 방식을 같은 상품 테이블에 붙여 쓰기 지연을 재고, write-back 프로세스와 Redis를 죽여 잃는 양을 센다. 쓰기 합치기, 버퍼를 비울 때 사라지는 증가분, 두 번 반영, 운영자 수정이 덮이는 순서 문제, write-around의 쓰고 바로 읽기까지 다룬다.
- 태그: Cache, Redis, PostgreSQL, System Design, Performance
- 키워드: write-back, write-around, write coalescing
- 길이: 523줄
- 소제목: 세 방식은 성공을 돌려주는 시점이 다르다 / 쓰기 한 번에 걸리는 시간 / 쓰기 2만 번이 UPDATE 9번이 된다 / 더티 표시를 지우는 사이에 사라지는 조회 / 내려 보내다 죽으면 두 번 더해진다 / 어디가 죽느냐에 따라 잃는 양이 다르다 / 운영자가 고친 가격이 되돌아간다 / write-around로 쓰고 바로 읽으면 / write-through도 순서를 틀리면 없는 값을 보여 준다 / 데이터의 성격으로 고른다 / 운영 중에 보이는 신호 / 직접 짜 보는 write-back 버퍼 / 빠른 쓰기의 값은 잃는 창으로 치른다 / 면접에서 나올 만한 질문
- 직접 링크 →: caching-strategies, cache-invalidation, caching-concepts-map, postgres-mvcc-vacuum, k8s-pod-lifecycle, redis-persistence-ha, transactional-outbox, optimistic-locking, db-consistency-cap
- 키워드 백링크 →: message-delivery-semantics, consistency-models, redis-basics, db-partitioning, db-transaction-isolation, dns
- 이 글로 오는 글 ←: caching-concepts-map, caching-strategies

#### `caching-concepts-map` — 캐시 개념 지도: 히트부터 핫 키까지 12가지

- 요약: 상품 페이지 하나를 따라가며 히트와 미스, TTL과 상한 데이터, LRU 축출, cache-aside, 쓰기 방식, 무효화, CDN, 스탬피드, 핫 키를 배우는 순서대로 잇는다. 증상에서 개념과 해결책을 거꾸로 찾는 표와 깊게 다룬 글로 가는 길도 함께 둔다.
- 태그: Cache, Redis, CDN, System Design, Performance
- 키워드: 캐시 개념 지도, 콜드 미스, 평균 메모리 접근 시간
- 길이: 319줄
- 소제목: 상품 페이지 하나에 캐시가 네 겹이다 / 1. 히트와 2. 미스 / 3. TTL과 4. 상한 데이터 / 5. 꽉 차면 LRU로 버린다 / 6. 누가 채우나: cache-aside / 7. write-through와 8. write-back / 9. 바뀐 값을 알리는 무효화 / 10. 사용자 가까이에 두는 CDN / 11. 만료 순간의 스탬피드와 12. 핫 키 / 12개가 서로 묶이는 모양 / 증상으로 거꾸로 찾기 / 히트율과 평균 응답 시간을 직접 계산하기 / 처음 질문에 답하려면 / 면접에서 나올 만한 질문
- 직접 링크 →: sd-cache-and-cdn-tier, caching-strategies, http-caching-cdn, redis-memory-eviction, cache-write-policies, cache-invalidation, edge-caching, cdn-edge-anycast, resilience-patterns
- 키워드 백링크 →: exponential-backoff-jitter, redis-cluster, ds-linked-list, js-memoization, redis-basics, db-modeling-normalization, dns
- 이 글로 오는 글 ←: backend-engineer-roadmap, cache-write-policies, db-performance-map

#### `caching-strategies` — 캐시 전략: 언제 넣고 언제 지우나

- 요약: cache-aside부터 write-behind까지 캐시를 채우고 지우는 패턴을 비교하고, DB와 캐시 사이의 경쟁, 스탬피드, 관통, 눈사태, 핫 키를 막는 방법을 정리한다.
- 태그: Cache, Redis, System Design, Performance
- 키워드: cache-aside, write-through, write-behind, 캐시 관통, 핫 키
- 길이: 657줄
- 소제목: 캐시를 먼저 보고 없으면 DB에서: cache-aside / 캐시가 대신 읽어 오는 read-through / 쓰기는 어디로 먼저 보내나 / TTL은 얼마나 낡아도 되는지로 정한다 / 고칠 때 캐시를 지울까, 같이 고칠까 / 지웠는데 옛 값이 다시 들어가는 경우 / 만료 순간 같은 키로 몰리는 요청 / 키 하나에만 몰리는 트래픽 / 없는 데이터를 계속 물어볼 때 / 여러 키가 한꺼번에 만료될 때 / 로컬 캐시와 Redis를 겹쳐 쓰기 / LRU 캐시를 직접 짜 보기 / 캐시가 일하는지 숫자로 본다 / 고친 값이 안 바뀐다는 문의가 오면 / 캐시는 지우는 일까지가 설계다 / 면접에서 나올 만한 질문
- 직접 링크 →: redis-basics, resilience-patterns, http-caching-cdn, redis-persistence-ha, redis-memory-eviction, osi-in-practice
- 키워드 백링크 →: exponential-backoff-jitter, redis-cluster, cache-write-policies, bloom-filter, db-type-columnar-olap, ds-linked-list, mysql-replication-online-ddl, sd-start-single-server, js-memoization, cold-starts, tail-latency, db-replication-sharding, high-availability, dns
- 이 글로 오는 글 ←: api-scaling-ladder, backend-engineer-roadmap, bloom-filter, cache-invalidation, cache-write-policies, caching-concepts-map, consistent-hashing, db-architecture-by-scale, db-performance-map, db-replication-sharding, db-type-key-value, db-type-relational, ds-linked-list, eventual-consistency, exponential-backoff-jitter, frontend-browser-cache, js-memoization, load-balancing-algorithms, n-plus-one-queries, pattern-flyweight, pattern-proxy, postgres-reporting-sql, redis-basics, redis-memory-eviction, scaling-horizontal-vertical, sd-cache-and-cdn-tier, sd-hotel-inventory-scaling, sd-kv-store-partition-replication, sd-music-streaming, sd-news-feed-publishing, sd-news-feed-retrieval, sd-proximity-service, sd-sharding-intro, sd-url-shortener-key-generation, sql-views-materialized, system-design-concepts-map

#### `circuit-breaker` — 서킷 브레이커 안쪽: 창, 느린 호출, 반열림, 그리고 재시도와의 순서

- 요약: 서킷 브레이커가 무엇을 세고 언제 판정하는지 직접 짠 상태 기계를 망가지는 서버 앞에 세워 따라간다. 건수 창과 시간 창, 느린 호출 비율, 반열림 시험 수, 의존성별 배치, 아웃라이어 감지·재시도와의 관계를 Resilience4j와 opossum 기본값과 함께 본다.
- 태그: tesla, Resilience, Distributed Systems, System Design, Node.js · 회사: tesla
- 키워드: 반열림, 느린 호출 비율, 아웃라이어 감지, 건수 기반 창
- 길이: 536줄
- 소제목: 세 상태와 두 개의 질문 / 몇 건 중의 실패율인가: 건수 창과 시간 창 / 실패보다 느림을 먼저 센다 / 반열림에서는 몇 개를 보내 보나 / 일부러 망가지는 서버 앞에 세워 보기 / 브레이커는 의존성마다 따로 둔다 / 헬스 체크, 아웃라이어 감지와 무엇이 다른가 / 재시도와 타임아웃 사이 어디에 끼우나 / 폴백은 무엇을 돌려주나 / 열린 회로를 현장에서 알아채는 법 / 상태 기계를 직접 짜 보기 / 숫자를 고르기 전에 트래픽부터 본다 / 면접에서 나올 만한 질문
- 직접 링크 →: resilience-patterns, load-balancer-basics, service-mesh, idempotency-key, connection-pool, rate-limiting-in-practice
- 키워드 백링크 →: retries, osi-in-practice, sql-batch-timeout-pool, redis-basics, dns
- 이 글로 오는 글 ←: api-gateway-use-cases, chaos-engineering, connection-pool, enterprise-system-integration, fault-tolerance, health-checks, pattern-proxy, pattern-state, resilience-patterns, sd-notification-reliability, service-mesh, tail-latency

#### `clock-skew` — 시계 어긋남: 벽시계, 단조 시계, 그리고 시계 없이 순서 정하기

- 요약: 발급 서버 시계가 40초 빠르면 방금 받은 JWT가 거절되고, 벽시계가 2초 되돌아가면 Date.now()로 잰 시간이 음수가 된다. NTP와 chrony의 스텝·슬루, 윤초와 번지기, 램포트 시계와 벡터 시계, HLC까지 직접 재현하며 어떤 시계를 언제 쓰는지 정리한다.
- 태그: System Design, Distributed Systems, Linux, Node.js, Authentication, Troubleshooting
- 키워드: 시계 어긋남, 단조 시계, 램포트 시계, 벡터 시계, 윤초
- 길이: 393줄
- 소제목: 서버마다 시계가 다르게 가는 이유 / chrony가 시계를 맞추는 두 가지 방법 / 시간을 잴 때는 단조 시계로 / 토큰이 일찍 죽고 늦게 산다 / 윤초와 번지기 / 시계 없이 순서를 정한다 / 시계가 의심될 때 보는 순서 / 시계는 순서를 증명하지 못한다 / 면접에서 나올 만한 질문
- 직접 링크 →: db-consistency-cap, distributed-lock, eventual-consistency, network-partitions, event-driven-architecture, crdt, db-type-newsql
- 키워드 백링크 →: network-monitoring, ipv6-basics, sd-latency-numbers, sd-kv-store-versioning, security-groups-nacl, redis-basics, udp-and-quic, dns, token-login
- 이 글로 오는 글 ←: authn-vs-authz, consistency-models, crdt, eventual-consistency, js-timers-accuracy, jwt-key-rotation, multi-region, sd-ad-click-stream-windows, sd-file-sync-conflicts, sd-kv-store-versioning, sd-kv-store-write-read-path, sd-unique-id-generator, system-design-study-path, webhooks

#### `consistency-models` — 일관성 모델: 선형화, 순차, 인과를 실행 기록으로 판정하기

- 요약: 답장이 질문보다 먼저 보이는 복제본 시뮬레이션에서 출발해, 일관성 모델을 허용되는 히스토리의 규칙으로 정의하고 작은 검사기로 선형화와 순차 일관성을 판정한다. 쿼럼을 맞춰도 선형화가 깨지는 장면과 동기 읽기 복구, 벡터 시계로 인과 순서를 지키는 법, 직렬화 가능성과의 차이를 다룬다.
- 태그: System Design, Distributed Systems, Database, Node.js
- 키워드: 일관성 모델, 순차 일관성, 인과 일관성, 선형화 검사기
- 길이: 464줄
- 소제목: 답장이 질문보다 먼저 보였다 / 모델은 허용되는 결과의 목록이다 / 선형화: 끝난 쓰기는 모두에게 끝났다 / 순차 일관성: 줄은 하나, 시계는 없다 / 쿼럼을 맞춰도 선형화가 안 되는 순간 / 직접 짜 보기: 선형화 검사기 / 인과 일관성: 원인이 먼저 보이기만 하면 된다 / 직렬화 가능성과 헷갈리지 않기 / 옛 값이 보인다는 문의를 모델로 번역하기 / 줄 하나로 설명할 수 있나 / 면접에서 나올 만한 질문
- 직접 링크 →: db-consistency-cap, eventual-consistency, leader-election, distributed-lock, thread-safety, clock-skew, multi-region, crdt, db-transaction-isolation
- 키워드 백링크 →: mongodb-document-model, db-type-wide-column, db-type-key-value, acid-vs-base, db-replication-sharding, redis-basics
- 이 글로 오는 글 ←: acid-transactions, backend-engineer-roadmap, cache-write-policies, db-consistency-cap, eventual-consistency, sd-kv-store-partition-replication, sql-vs-nosql, system-design-concepts-map, thread-safety

#### `consistent-hashing` — 일관된 해싱: 가상 노드, 점프 해시, 랑데부

- 요약: 서버를 늘릴 때 옮기는 키를 최소로 만드는 방법들을 직접 재서 비교한다. 가상 노드 수에 따른 편차, 점프 해시와 랑데부 해싱, Nginx의 hash consistent, 운영에서 링이 어긋나는 경우를 다룬다.
- 태그: System Design, Distributed Systems, Scalability, Cache, Algorithm, Nginx
- 키워드: 점프 해시, 랑데부 해싱, ketama
- 길이: 367줄
- 소제목: 나머지 연산이 키를 흩어 버린다 / 가상 노드는 몇 개를 찍나 / 복제본은 링을 따라 다음 서버에 둔다 / 링 말고 다른 방법들 / 로드 밸런서에서 같은 요청을 같은 서버로 / 해시가 고르게 나눠도 남는 문제 / 옮길 키를 최소로 / 면접에서 나올 만한 질문
- 직접 링크 →: db-sharding, load-balancing-algorithms, redis-cluster
- 키워드 백링크 →: rolling-deployment, osi-in-practice, db-type-wide-column, sd-start-single-server, vpc-basics, redis-basics, caching-strategies
- 이 글로 오는 글 ←: ds-hash-map, kafka-basics, load-balancing-algorithms, multi-region, nginx-reverse-proxy, scaling-horizontal-vertical, sd-autocomplete-data-pipeline, sd-cache-and-cdn-tier, sd-kv-store-partition-replication, sd-metrics-collection, sd-mq-storage-partitions, sd-nearby-friends, sd-object-storage-architecture, sd-sharding-intro, sd-web-crawler-architecture, system-design-concepts-map, system-design-study-path

#### `db-architecture-by-scale` — 서비스 규모별 DB 설계: 한 대에서 여러 저장소까지

- 요약: 새 서비스는 PostgreSQL 한 대에서 시작해, 연결 수, CPU, p99, 복제 지연 같은 숫자가 보일 때 캐시와 복제본, 분석과 검색 저장소, 서비스별 DB로 넘어간다. 아웃박스, 무중단 스키마 변경, 권한 분리처럼 각 단계에서 필요한 실무 장치도 SQL로 함께 본다.
- 태그: Database, PostgreSQL, System Design, Architecture, Scalability
- 키워드: 폴리글랏 퍼시스턴스, database per service, expand/contract, SKIP LOCKED, PgBouncer
- 길이: 727줄
- 소제목: 처음엔 PostgreSQL 한 대면 된다 / 연결은 풀로 묶어서 쓴다 / 백업은 복원해 봐야 안다 / 읽기가 몰리면 캐시와 복제본 / 분석 쿼리는 다른 곳에서 돌린다 / 검색과 작업 큐도 따로 떼어 낸다 / 서비스마다 DB를 따로 둔다 / DB에 쓰고 이벤트를 보내는 사이 / 저장소는 접근 패턴으로 고른다 / 열 이름 하나를 다섯 단계로 바꾼다 / 앱 계정에는 필요한 권한만 준다 / 매일 볼 숫자들 / 단계를 넘어가는 신호 / 자주 보는 실수 / 규모보다 읽는 방식이 먼저다 / 면접에서 나올 만한 질문
- 직접 링크 →: db-replication-sharding, db-modeling-normalization, db-transaction-isolation, db-index, caching-strategies, redis-basics, elasticsearch-inverted-index, microservices, event-driven-architecture, mongodb-document-model, vector-db, zero-downtime-migrations
- 키워드 백링크 →: pessimistic-locking, db-type-time-series, postgres-advanced-sql, opensearch-cluster-operations, db-type-columnar-olap, postgres-mvcc-vacuum, db-migration-tools, db-sharding, db-type-wide-column, transactional-outbox, rabbitmq-basics, db-type-key-value, message-delivery-semantics, db-type-relational, db-type-graph, http-caching-cdn, sd-mq-storage-partitions, distributed-tracing, kafka-basics, sql-batch-timeout-pool, postgres-operations, postgres-jsonb-search, db-partitioning, sql-basics
- 이 글로 오는 글 ←: acid-transactions, api-scaling-ladder, batch-processing, connection-pool, db-migration-tools, db-performance-map, db-replication-sharding, db-sharding, db-type-columnar-olap, db-type-relational, db-types-overview, event-driven-architecture, failover, k8s-job-cronjob, message-queue-basics, microservices, monolith-architecture, n-plus-one-queries, pessimistic-locking, postgres-architecture, postgres-connections-pg-hba, postgres-functions-triggers, postgres-operations, postgres-roles-security, saga-pattern, schema-versioning, sd-db-replication-intro, sd-split-web-and-db, serverless-limits, sql-batch-timeout-pool, sql-vs-nosql, system-design-concepts-map, transactional-outbox, zero-downtime-migrations

#### `distributed-lock` — 분산 락: 만료되는 락과 펜싱 토큰

- 요약: 만료 시간이 있는 분산 락이 프로세스 멈춤과 장애 조치로 둘이 되는 장면을 재현하고, 펜싱 토큰으로 저장소가 늦은 쓰기를 거절하게 만든다. Redlock 논쟁과 etcd, ZooKeeper 락까지 비교한다.
- 태그: System Design, Distributed Systems, Redis, Concurrency, PostgreSQL
- 키워드: 펜싱 토큰, Redlock, 락 임대
- 길이: 382줄
- 소제목: 락을 쥔 줄 알았던 워커 / 락이 지키려는 것이 효율인가 정확성인가 / 만료 시간은 짧아도 길어도 문제다 / 늦게 온 쓰기를 저장소가 거절하게 / 장애 조치 한 번에 락이 사라진다 / 다수결로 잡는 Redlock과 그 논쟁 / 합의 시스템 위의 락 / 무엇으로 락을 잡을까 / 현장에서 중복 실행을 추적하는 법 / 락은 시간을 빌리는 것이다 / 면접에서 나올 만한 질문
- 직접 링크 →: redis-basics, idempotency-key, optimistic-locking, pessimistic-locking, leader-election
- 키워드 백링크 →: redis-cluster, browser-fetch, k8s-pod-resources, iptables-basics, db-locking-deadlock, tail-latency, resilience-patterns, db-type-key-value, http-methods, dns
- 이 글로 오는 글 ←: bullmq-job-queue, clock-skew, connection-pool, consistency-models, cron-jobs, failover, idempotency-key, leader-election, network-partitions, pessimistic-locking, race-conditions, redis-basics, scaling-horizontal-vertical, sd-mq-consumer-groups, service-discovery, terraform-basics

#### `distributed-transactions-2pc` — 분산 트랜잭션과 2단계 커밋: 준비하고 기다리는 대가

- 요약: DB가 두 대가 되면 커밋 두 번 사이에 틈이 생긴다. PostgreSQL 두 대로 PREPARE TRANSACTION과 COMMIT PREPARED를 직접 돌려 보고, 코디네이터가 결정 직전에 죽었을 때 잠금과 VACUUM이 묶이는 모습, 결정 기록과 추정 롤백으로 복구하는 법, XA와 3PC, 마이크로서비스가 2PC를 피하는 이유를 다룬다.
- 태그: System Design, Distributed Systems, Transaction, PostgreSQL, MSA
- 키워드: 2단계 커밋, PREPARE TRANSACTION, pg_prepared_xacts, 추정 롤백
- 길이: 516줄
- 소제목: 커밋 두 번 사이에 생기는 틈 / 먼저 묻고, 모두 된다고 하면 그때 커밋한다 / PostgreSQL 두 대로 직접 해 보기 / 한 곳이 아니라고 답하면 / 결정 직전에 코디네이터가 죽으면 / 결정을 먼저 적어 두는 코디네이터 / XA는 이 약속을 표준으로 만든 것 / 3PC가 블로킹을 풀지 못하는 이유 / 마이크로서비스가 2PC를 피하는 이유 / 준비된 채 버려진 트랜잭션을 만났을 때 / 2PC가 남기는 것 / 면접에서 나올 만한 질문
- 직접 링크 →: microservices, saga-pattern, db-type-newsql, raft-consensus, idempotency-key, leader-election
- 키워드 백링크 →: zero-downtime-migrations, network-partitions, kafka-basics, db-types-overview, postgres-getting-started, acid-transactions
- 이 글로 오는 글 ←: acid-transactions, acid-vs-base, db-locking-deadlock, db-sharding, db-type-newsql, leader-election, microservices, mongodb-document-model, mysql-innodb-basics, postgres-mvcc-vacuum, saga-pattern, sd-hotel-inventory-scaling, sd-payment-flow, sd-payment-reliability, sd-sharding-intro, sd-wallet-transfer, system-design-study-path, transactional-outbox

#### `edge-caching` — 엣지 캐싱: 캐시 키, 상한 사본, 히트율, 그리고 개인화

- 요약: CDN을 붙였는데 히트율이 50%대에 머무는 이유를 nginx proxy_cache로 직접 띄운 엣지에서 찾는다. 캐시 키 정규화, stale-while-revalidate와 stale-if-error의 실제 동작, 로그로 히트율과 오리진 오프로드를 나눠 세는 법, 개인 응답을 공유 캐시에서 떼어 내는 법을 다룬다.
- 태그: Cache, HTTP, Nginx, Performance, Network
- 키워드: 캐시 키 정규화, X-Cache-Status, 오리진 오프로드
- 길이: 469줄
- 소제목: 엣지 하나를 직접 띄운다 / 캐시 키에 무엇을 넣을까 / 히트율은 로그에서 센다 / 상한 사본을 내주면 오리진이 쉰다 / 같은 키의 미스를 하나로 모은다 / 사람마다 다른 응답과 공유 캐시 / 엣지에서 코드를 돌린다 / 히트율이 낮을 때 보는 순서 / 키, 수명, 사람 / 면접에서 나올 만한 질문
- 직접 링크 →: http-caching-cdn, cdn-edge-anycast, cache-invalidation
- 키워드 백링크 →: nginx-https-performance, cookie-session-login, proxy-reverse-proxy, sd-cache-and-cdn-tier, http-status-codes, db-modeling-normalization
- 이 글로 오는 글 ←: cache-invalidation, caching-concepts-map, ddos-protection, devops-networking-roadmap, graphql-basics, nginx-https-performance, sd-cache-and-cdn-tier, sd-video-streaming-cost, system-design-concepts-map

#### `event-driven-architecture` — 이벤트 기반 아키텍처: 명령과 이벤트, 이벤트에 담을 것, 아웃박스의 틈

- 요약: 명령과 이벤트를 가르고, 이벤트에 ID만 담을지 상태를 실을지, 이벤트 소싱은 언제 쓰는지, 흐름을 코레오그래피와 오케스트레이션 중 누가 쥘지 정한다. 아웃박스를 id 순서로 읽으면 늦게 커밋된 이벤트가 빠지는 문제와 WAL을 읽는 CDC, 슬롯이 디스크를 채우는 장면을 PostgreSQL 16으로 재현한다.
- 태그: Messaging, System Design, Distributed Systems, PostgreSQL, Architecture
- 키워드: 이벤트 기반 아키텍처, 이벤트 소싱, Event-Carried State Transfer, 논리 디코딩, 코레오그래피
- 길이: 608줄
- 소제목: 주문 API가 알림 서버를 기다리는 이유 / 명령은 부탁하고 이벤트는 알린다 / 이벤트 하나에 무엇을 담을까 / 상태 대신 사건을 저장하는 이벤트 소싱 / 흐름을 누가 쥐나 / 아웃박스를 id 순서로 읽으면 이벤트가 빠진다 / WAL에서 바로 읽는 아웃박스 / 잠깐 어긋나는 데이터를 받아 내는 법 / 이벤트가 어디서 사라졌는지 따라가기 / 이벤트로 가지 않는 편이 나을 때 / 처음의 주문 API로 돌아가면 / 면접에서 나올 만한 질문
- 직접 링크 →: microservices, db-architecture-by-scale, message-queue-basics, pub-sub, saga-pattern, optimistic-locking, event-sourcing, cqrs, db-replication-sharding, message-delivery-semantics, schema-versioning, kafka-basics, rabbitmq-basics, dead-letter-queue, distributed-tracing
- 키워드 백링크 →: api-versioning, postgres-architecture
- 이 글로 오는 글 ←: api-styles-overview, architecture-patterns-overview, batch-processing, clock-skew, cqrs, db-architecture-by-scale, db-locking-deadlock, ddd-bounded-context, distributed-tracing, event-sourcing, kafka-basics, message-delivery-semantics, microservices, microservices-decomposition, pattern-mediator, pub-sub, rabbitmq-basics, saga-pattern, schema-versioning, sd-wallet-event-sourcing, sd-wallet-transfer, system-design-concepts-map, system-design-study-path, transactional-outbox

#### `eventual-consistency` — 최종 일관성과 세션 보장: 방금 바꾼 닉네임이 왜 다시 옛 이름으로 보이나

- 요약: PostgreSQL 16 복제본 하나를 일부러 3초 늦춰 놓고, 내 쓰기 읽기와 단조 읽기가 깨지는 장면을 재현한 뒤 커밋 뒤 LSN을 세션 토큰으로 들고 다녀 막는다. 리더 없는 저장소의 R·W와 옛 값 확률, 힌트 핸드오프, 읽기 복구, 안티 엔트로피까지 결국 같아지게 만드는 장치를 따라간다.
- 태그: System Design, Distributed Systems, Database, PostgreSQL, Node.js
- 키워드: 세션 보장, writes-follow-reads, 읽기 복구, 힌트 핸드오프, 안티 엔트로피
- 길이: 485줄
- 소제목: 언젠가는 얼마나 걸리나 / 복제본 하나를 일부러 3초 늦춰 보기 / 사용자 한 명이 기대하는 네 가지 / 세션에 위치를 들고 다니게 한다 / 여러 대가 쓰기를 받는 저장소에서는 / 결국 같아지게 만드는 장치 / 화면이 먼저 덜 헷갈리게 / 가끔 옛 값이 보인다는 문의가 오면 / 결국이 오기 전까지를 설계한다 / 면접에서 나올 만한 질문
- 직접 링크 →: db-consistency-cap, db-replication-sharding, network-partitions, clock-skew, merkle-tree, crdt, caching-strategies
- 키워드 백링크 →: cookie-session-login, db-type-wide-column, csrf, db-type-key-value, mongodb-document-model, sd-kv-store-failure-handling, consistency-models, sd-kv-store-versioning, sql-batch-timeout-pool, mysql-replication-online-ddl, postgres-architecture, dns
- 이 글로 오는 글 ←: acid-vs-base, backend-engineer-roadmap, clock-skew, consistency-models, cqrs, crdt, db-consistency-cap, merkle-tree, multi-region, network-partitions, operational-transform, sd-db-replication-intro, sd-kv-store-failure-handling, sd-kv-store-partition-replication, sd-kv-store-versioning, sd-maps-location-eta, sd-multi-datacenter, sql-vs-nosql, system-design-concepts-map

#### `exponential-backoff-jitter` — 지수 백오프와 지터: 같은 순간 실패한 클라이언트를 흩어 보내기

- 요약: 지터 없는 지수 백오프가 같은 순간 실패한 클라이언트들을 같은 박자로 되돌려 보내는 thundering herd를 클라이언트 1000개 시뮬레이션으로 재 보고, full, equal, decorrelated jitter를 비교한다. Retry-After를 따르는 법과 cron, 캐시 만료, 재시작처럼 같은 시각에 몰리는 다른 경우도 다룬다.
- 태그: Resilience, Distributed Systems, System Design, Algorithm
- 키워드: full jitter, equal jitter, decorrelated jitter, thundering herd
- 길이: 355줄
- 소제목: 두 배씩 늘리고 상한에서 멈춘다 / 같은 순간 실패하면 같은 순간 돌아온다 / 무작위를 섞는 세 가지 방법 / 클라이언트 천 개로 재 본다 / 서버가 기다릴 시간을 알려 줄 때: Retry-After / 재시도 말고도 같은 시각에 몰리는 것들 / 지터와 Retry-After를 함께 다루는 재시도 함수 / 값 고르기와 흔한 실수 / 빗살 모양 그래프를 만났을 때 / 면접에서 나올 만한 질문
- 직접 링크 →: resilience-patterns, retries, timeouts, rate-limiting-in-practice, caching-strategies
- 키워드 백링크 →: k8s-pod-lifecycle, client-data-cache, k8s-architecture, sd-split-web-and-db, redis-basics, dns
- 이 글로 오는 글 ←: bullmq-job-queue, caching-concepts-map, caching-strategies, dead-letter-queue, deadlocks, enterprise-system-integration, failover, fault-tolerance, k8s-controllers-reconcile, long-polling, message-queue-basics, resilience-patterns, retries, sd-hotel-double-booking, sd-notification-reliability, sd-payment-reliability, sd-web-crawler-politeness-dedup, tail-latency, timeouts, webhooks, websocket-deep-dive

#### `fault-tolerance` — 내결함성: 결함을 가리고, 빨리 멈추게 하고, 작은 칸에 가둔다

- 요약: 검색어 하나가 재시도를 타고 서버 세 대를 차례로 죽이는 장면을 재현하고, 결함·오류·장애의 구분과 장애 모델별 필요한 노드 수, 체크섬과 다수결, 재시작 한도가 있는 슈퍼바이저, 요청 단위 격리와 셔플 샤딩, 독이 든 요청 격리로 피해 반경을 줄이는 법을 다룬다.
- 태그: System Design, Resilience, Distributed Systems, Node.js, Troubleshooting
- 키워드: 내결함성, 장애 모델, 비잔틴 장애, 셔플 샤딩, 우아한 성능 저하
- 길이: 533줄
- 소제목: 검색어 하나가 서버 세 대를 차례로 죽였다 / 결함이 장애가 되기까지 / 무엇이 어떻게 고장 나는지 먼저 정한다 / 같은 것을 여러 벌 두는 세 가지 방법 / 고장 난 것은 빨리, 조용히 멈추게 / 직접 짜 보기: 언제 재시작을 포기하나 / 결함을 가두는 칸 / 다시 보내는 것이 결함을 퍼뜨릴 때 / 다 못 하면 덜 한다 / 서버들이 줄줄이 재시작할 때 보는 순서 / 결함은 막는 게 아니라 가둔다 / 면접에서 나올 만한 질문
- 직접 링크 →: high-availability, resilience-patterns, circuit-breaker, chaos-engineering, raft-consensus, network-partitions, merkle-tree, k8s-pod-lifecycle, multi-region, retries, exponential-backoff-jitter, feature-flags, backpressure, js-memory-leak
- 키워드 백링크 →: timeouts, k8s-architecture, event-loop, osi-in-practice, db-type-key-value, http-methods
- 이 글로 오는 글 ←: acid-transactions, authn-vs-authz, high-availability, system-design-concepts-map

#### `high-availability` — 고가용성: 아홉을 곱하고, 단일 장애 지점을 찾고, 빼는 시간을 잰다

- 요약: 부품 가용성을 직렬은 곱하고 병렬은 실패 확률을 곱해 계산한 뒤, 같은 AZ와 같은 배포 같은 공통 원인이 그 계산을 어떻게 무너뜨리는지 100년 시뮬레이션으로 본다. HAProxy 앞뒤에서 서버와 로드 밸런서를 죽여 빼기까지의 시간과 잃은 요청을 재고, 액티브-액티브의 여유 용량을 계산한다.
- 태그: System Design, Resilience, Distributed Systems, Load Balancer, SRE
- 키워드: 고가용성, 단일 장애 지점, SPOF, 공통 원인 고장
- 길이: 515줄
- 소제목: 가용성은 두 시간의 비율이다 / 줄로 이으면 곱해진다 / 나란히 두면 실패 확률이 곱해진다 / 독립이라는 가정이 깨질 때 / 요청 길을 따라 단일 장애 지점 찾기 / 실험실: 서버 둘, 로드 밸런서 하나 / 서버 한 대가 죽었을 때 실제로 잃는 것 / 로드 밸런서를 이중화한다는 것 / 둘 다 일하기, 하나는 기다리기 / 직접 계산해 보기: 직렬과 병렬을 섞은 구성 / 가용성이 계산보다 낮게 나올 때 / 더 많이가 아니라 덜 함께 / 면접에서 나올 만한 질문
- 직접 링크 →: sli-slo, failover, multi-region, disaster-recovery, fault-tolerance, rolling-deployment, retries, health-checks, load-balancer-basics, dns, cdn-edge-anycast, autoscaling, postmortems, chaos-engineering, k8s-pod-scheduling, k8s-pod-disruption-budget
- 키워드 백링크 →: timeouts, k8s-deploy-pipeline-eks, reverse-proxy-lb-api-gateway, vpc-basics, osi-in-practice, redis-basics
- 이 글로 오는 글 ←: acid-transactions, api-gateway-use-cases, authn-vs-authz, caching-strategies, cloud-cost-optimization, db-sharding, fault-tolerance, k8s-admission-control, k8s-architecture, leader-election, reverse-proxy-lb-api-gateway, sd-cache-and-cdn-tier, sd-latency-numbers, sd-load-balancer-stateless, sd-split-web-and-db, sd-start-single-server, sd-unique-id-generator, secrets-management, sql-vs-nosql, system-design-concepts-map, system-design-study-path, vpc-basics, zero-trust-architecture

#### `leader-election` — 리더 선출: 임대, 스플릿 브레인, 쿠버네티스 Lease

- 요약: 여러 대 중 한 대만 일하게 하는 리더 선출을 etcd의 임대와 쿠버네티스 Lease로 직접 돌려 본다. 멈췄던 옛 리더가 깨어나 새 리더와 함께 쓰는 스플릿 브레인을 재현하고, 조건부 쓰기와 펜싱으로 막는 법, Raft 임기와 과반, 타이밍 값 고르기, 불리·링 알고리즘의 한계를 다룬다.
- 태그: System Design, Distributed Systems, Kubernetes, Concurrency, Resilience
- 키워드: 리더 선출, 스플릿 브레인, Lease 객체, etcdctl elect
- 길이: 476줄
- 소제목: 리더가 하나여야 하는 일 / 임대를 쥔 쪽이 리더다 / 잠깐 멈춘 리더가 깨어나면 / 리더 자격을 쓰기와 함께 검사한다 / etcd 자신은 어떻게 리더를 뽑나 / 쿠버네티스에서는 Lease 객체로 / 세 숫자 사이의 관계 / 합의 저장소 없이 뽑는 고전적인 방법 / 리더가 자꾸 바뀌거나 아예 없을 때 / 리더는 시간을 빌린 사람이다 / 면접에서 나올 만한 질문
- 직접 링크 →: distributed-lock, raft-consensus, distributed-transactions-2pc
- 키워드 백링크 →: k8s-architecture, k8s-api-objects, browser-fetch, failover, network-partitions, dhcp, rolling-deployment, kafka-basics, high-availability, local-k8s-kind-minikube, db-type-key-value, dns
- 이 글로 오는 글 ←: consistency-models, cron-jobs, db-consistency-cap, db-type-key-value, distributed-lock, distributed-transactions-2pc, failover, k8s-api-aggregation-schedulers, k8s-architecture, k8s-controllers-reconcile, k8s-etcd-backup, k8s-namespace, k8s-operators, k8s-vpa, network-partitions, pattern-singleton, raft-consensus, redis-replication-sentinel, scaling-horizontal-vertical, sd-db-replication-intro, sd-kv-store-failure-handling, sd-mq-consumer-groups, sd-mq-replication, sd-stock-exchange-low-latency, system-design-concepts-map

#### `microservices` — 모놀리스에서 마이크로서비스로

- 요약: 서비스를 쪼개면 독립 배포와 팀 자율성을 얻는 대신 네트워크 호출, 분산 트랜잭션, 데이터 소유권 문제가 생긴다. 바운디드 컨텍스트로 경계를 긋는 법, 동기와 비동기 통신, 사가와 아웃박스, 모듈러 모놀리스와 스트랭글러 피그 이전까지 다룬다.
- 태그: coupang, tesla, MSA, Distributed Systems, System Design · 회사: coupang, tesla
- 키워드: 마이크로서비스, 모놀리스, 사가 패턴, 트랜잭셔널 아웃박스, 스트랭글러 피그
- 길이: 390줄
- 소제목: 한 덩어리가 버거워지는 순간 / 쪼개면 공짜가 아닌 것들 / 어디서 자를 것인가 / 데이터베이스도 서비스마다 / 부를 것인가, 알릴 것인가 / 트랜잭션이 서비스 경계를 넘을 때 / 결국에는 맞춰지는 데이터 / 입구는 게이트웨이와 BFF에 맡긴다 / 쪼개지 않는 편이 나은 경우 / 조금씩 옮기기, 스트랭글러 피그 / 쪼갠 뒤 처음 받는 장애 문의 / 쪼개는 건 결국 경계를 정하는 일 / 면접에서 나올 만한 질문
- 직접 링크 →: resilience-patterns, distributed-tracing, distributed-transactions-2pc, saga-pattern, gateway, microservices-decomposition
- 키워드 백링크 →: db-architecture-by-scale, grpc, modular-monolith, serverless-architecture, observability-basics, ddd-bounded-context, db-type-columnar-olap, rabbitmq-basics, client-data-cache, monolith-architecture, event-driven-architecture, pub-sub, db-index-design, http-versions, js-memory-leak, transactional-outbox, kafka-basics, cqrs, acid-transactions, http-methods, on-call
- 이 글로 오는 글 ←: api-styles-overview, architecture-patterns-overview, backend-engineer-roadmap, db-architecture-by-scale, db-locking-deadlock, db-sharding, ddd-bounded-context, distributed-transactions-2pc, event-driven-architecture, k8s-certifications, message-queue-basics, micro-frontends, microservices-decomposition, modular-monolith, monitoring-basics, monolith-architecture, pattern-command, pattern-facade, rest-api-design, saga-pattern, sd-hotel-inventory-scaling, sd-notification-reliability, sd-sharding-intro, system-design-concepts-map, test-pyramid-unit-tests, transactional-outbox

#### `network-partitions` — 네트워크 분할: 끊긴 회선이 두 프라이머리를 만드는 과정

- 요약: 네트워크 네임스페이스와 iptables DROP으로 분할을 직접 만들고, PostgreSQL 16 두 대 위에서 순진한 장애 조치 스크립트가 스플릿 브레인을 만들고 pg_rewind로 쓰기를 잃는 과정을 재현한다. 죽음과 끊김을 구별할 수 없는 이유, 과반 쿼럼, 홀수 노드, 임대와 펜싱, 동기 복제의 한계, Jepsen이 남긴 교훈을 다룬다.
- 태그: System Design, Distributed Systems, Network, PostgreSQL, Linux, Troubleshooting
- 키워드: 네트워크 분할, 부분 분할, pg_rewind, 과반 쿼럼
- 길이: 508줄
- 소제목: 끊긴 회선은 어떻게 생겼나 / 응답이 없다는 것만 안다 / 세 번 실패하면 승격하는 스크립트 / 과반만 쓸 수 있게 한다 / 과반이 뽑아도 옛 리더는 계속 쓴다 / 분할 실험이 남긴 교훈 / 현장에서 분할을 의심하는 순간 / 끊겼다는 판단을 믿지 않는 설계 / 면접에서 나올 만한 질문
- 직접 링크 →: db-consistency-cap, eventual-consistency, leader-election, distributed-lock, iptables-basics, timeouts, raft-consensus, db-replication-sharding
- 키워드 백링크 →: sql-batch-timeout-pool, elasticsearch-inverted-index, k8s-statefulset, db-type-wide-column, browser-fetch, failover, mongodb-document-model, security-groups-nacl, postgres-architecture, redis-basics, db-type-key-value, postgres-getting-started, dns
- 이 글로 오는 글 ←: clock-skew, crdt, db-consistency-cap, distributed-transactions-2pc, eventual-consistency, failover, fault-tolerance, leader-election, scaling-horizontal-vertical, sd-kv-store-failure-handling, system-design-concepts-map

#### `percentile-latency` — 응답 시간은 백분위로 읽는다: p99, 히스토그램, coordinated omission

- 요약: 평균 9ms인 API가 왜 가끔 1초씩 걸리는지 실제 요청 2만 건으로 재 본다. p50부터 p99.9까지 읽는 법, 서버별 p99를 평균 내면 틀리는 이유, 더할 수 있는 히스토그램과 HdrHistogram, 부하 생성기가 느린 구간을 빼먹는 coordinated omission을 다룬다.
- 태그: Performance, Observability, System Design, Node.js, Troubleshooting
- 키워드: coordinated omission, HdrHistogram, 열린 부하 모델
- 길이: 422줄
- 소제목: 평균 9ms 뒤에 숨은 1초 / 줄 세워 몇 번째 값을 읽는다 / 꼬리 백분위는 표본이 많아야 흔들리지 않는다 / 서버별 p99를 평균 내면 안 된다 / 히스토그램은 더할 수 있다 / HDR 히스토그램: 넓은 범위를 같은 정밀도로 / 부하 생성기가 꼬리를 지울 때 / 어디서 재느냐에 따라 숫자가 다르다 / 버킷을 더해 전체 p99 구하기 / 응답 시간 지표를 읽고 고르는 법 / 분포를 숫자 몇 개로 줄일 때 / 면접에서 나올 만한 질문
- 직접 링크 →: latency-bandwidth-throughput, tail-latency, metrics-types, sli-slo
- 키워드 백링크 →: tcp-connection-lifecycle, sd-latency-numbers, sd-start-single-server, event-loop, sql-batch-timeout-pool, http-status-codes, dns
- 이 글로 오는 글 ←: api-scaling-ladder, backend-engineer-roadmap, cold-starts, devops-networking-roadmap, ds-heap, metrics-types, sd-latency-numbers, sd-maps-location-eta, sd-stock-exchange-order-book, system-design-concepts-map, tail-latency

#### `rate-limiting-algorithms` — 요청 수 제한 알고리즘: 고정 윈도부터 토큰 버킷까지

- 요약: 같은 요청 기록을 고정 윈도, 슬라이딩 로그, 슬라이딩 윈도 카운터, 토큰 버킷, 리키 버킷에 흘려 보며 무엇이 통과하고 왜 다른지 비교한다. 서버가 여러 대일 때 Redis Lua로 원자적으로 세는 방법도 직접 돌려 본다.
- 태그: System Design, Redis, Distributed Systems, Algorithm, API
- 키워드: 슬라이딩 윈도 카운터, 슬라이딩 로그, 고정 윈도, GCRA
- 길이: 417줄
- 소제목: 한도를 거는 이유부터 / 같은 요청 열다섯 개를 다섯 방식에 흘려 본다 / 창을 고정하면 경계에서 두 배가 샌다 / 요청 시각을 다 적어 두는 슬라이딩 로그 / 두 칸을 섞어 어림하는 슬라이딩 윈도 카운터 / 토큰 버킷은 몰림을 얼마나 봐줄지 정한다 / 새는 양동이는 내보내는 속도를 고르게 만든다 / 다섯 가지를 놓고 고르기 / 서버가 여러 대면 세는 일이 경쟁이 된다 / 직접 짜 보는 토큰 버킷 / 숫자를 고를 때 자주 하는 실수 / 다섯 가지는 결국 두 질문이다 / 면접에서 나올 만한 질문
- 직접 링크 →: rate-limiting-in-practice, resilience-patterns, nginx-https-performance, traffic-shaping-qos
- 키워드 백링크 →: tail-latency, redis-cluster, backpressure, redis-basics
- 이 글로 오는 글 ←: api-gateway-use-cases, bullmq-job-queue, count-min-sketch, ddos-protection, debounce-throttle, rate-limiting-in-practice, rest-api-design, reverse-proxy-lb-api-gateway, sd-rate-limiter-design, sd-url-shortener-api-redirect, system-design-concepts-map, system-design-study-path, tail-latency, traffic-shaping-qos

#### `resilience-patterns` — 장애가 번지지 않게: 타임아웃, 재시도, 서킷 브레이커

- 요약: 느린 의존성 하나가 스레드 풀을 바닥내며 번지는 연쇄 장애를 따라가고, 타임아웃과 데드라인 전파, 지터 섞인 백오프와 재시도 예산, 멱등성 키, 서킷 브레이커, 벌크헤드, 폴백, 부하 차단으로 막는 법을 정리한다. 프런트엔드의 AbortSignal 타임아웃과 기능 축소 화면도 다룬다.
- 태그: coupang, Resilience, Distributed Systems, System Design · 회사: coupang
- 키워드: 서킷 브레이커, 지수 백오프, 멱등성 키, 벌크헤드, 연쇄 장애
- 길이: 414줄
- 소제목: 느린 서비스 하나가 전부를 멈추는 과정 / 기다림에 끝을 정한다: 타임아웃 / 다시 보내기: 지수 백오프와 지터 / 두 번 보내도 한 번만 처리되게 / 회로를 끊어 두는 서킷 브레이커 / 칸막이로 피해를 가두기 / 안 되면 덜 보여 주기 / 들어오는 양 자체를 줄이기 / 프런트엔드에서 본 장애 대응 / 실패를 예상하고 짜는 코드 / 면접에서 나올 만한 질문
- 직접 링크 →: timeouts, retries, exponential-backoff-jitter, idempotency-key, circuit-breaker, gateway
- 키워드 백링크 →: client-data-cache, tail-latency, service-mesh, latency-bandwidth-throughput, backpressure, osi-in-practice, sql-batch-timeout-pool, grpc, http-methods
- 이 글로 오는 글 ←: acid-transactions, api-gateway-use-cases, argocd-basics, backend-engineer-roadmap, batch-processing, browser-fetch, caching-concepts-map, caching-strategies, chaos-engineering, circuit-breaker, cqrs, curl-for-debugging, dead-letter-queue, design-patterns-overview, devops-networking-roadmap, distributed-lock, exponential-backoff-jitter, fault-tolerance, gateway, health-checks, hexagonal-architecture, html-form-http, http-methods, http-status-codes, https-tls, idempotency-key, java-jvm-memory-gc, json-crud-http, k8s-controllers-reconcile, k8s-job-cronjob, k8s-pod-probes, message-delivery-semantics, message-queue-basics, microservices, nginx-reverse-proxy, opensearch-cluster-operations, optimistic-locking, osi-in-practice, pattern-builder, pattern-decorator, pattern-proxy, race-conditions, rate-limiting-algorithms, rate-limiting-in-practice, realtime-communication, rest-api-design, retries, sd-hotel-inventory-scaling, sd-notification-reliability, sd-payment-flow, sd-payment-reliability, serverless-architecture, serverless-limits, service-mesh, sql-interview-problems, system-design-concepts-map, tail-latency, timeouts, transactional-outbox, webhooks

#### `retries` — 재시도는 공짜가 아니다: 무엇을, 몇 번, 어디서 다시 보내나

- 요약: 다시 보내도 되는 실패와 안 되는 실패를 가르고, 계층마다 세 번씩 재시도하면 맨 아래가 27번 맞는 증폭을 직접 잰다. 재시도 예산, nginx proxy_next_upstream이 POST를 넘기지 않는 이유, 꼬리 지연을 자르는 요청 헤징까지 다룬다.
- 태그: Resilience, Distributed Systems, System Design, HTTP, Nginx
- 키워드: 재시도 증폭, 재시도 예산, 요청 헤징, proxy_next_upstream
- 길이: 368줄
- 소제목: 실패했다는 말에는 세 가지 뜻이 있다 / 다시 보내도 되는 실패 고르기 / 타임아웃 난 POST를 다시 보내면 / 계층마다 세 번이면 맨 아래는 스물일곱 번 / 재시도 예산으로 폭주를 막는다 / 프록시가 대신 다시 보낼 때 / 느린 요청 하나를 두 번 보내는 헤징 / 재시도 설정을 한 줄씩 읽기 / 재시도가 장애를 키우고 있다는 신호 / 면접에서 나올 만한 질문
- 직접 링크 →: resilience-patterns, timeouts, exponential-backoff-jitter, http-methods, idempotency-key
- 키워드 백링크 →: service-mesh, abort-controller, tail-latency, backpressure, grpc
- 이 글로 오는 글 ←: backpressure, chaos-engineering, circuit-breaker, curl-for-debugging, dead-letter-queue, devops-networking-roadmap, exponential-backoff-jitter, fault-tolerance, grpc, high-availability, js-first-class-callbacks, nginx-reverse-proxy, pattern-decorator, pattern-proxy, resilience-patterns, reverse-proxy-lb-api-gateway, rolling-deployment, sd-notification-reliability, service-mesh, system-design-study-path, tail-latency, timeouts, webhooks

#### `saga-pattern` — 사가 패턴 안쪽: 보상, 피벗, 재시작, 그리고 아웃박스

- 요약: 사가는 단계마다 로컬 트랜잭션을 커밋하고 실패하면 반대 작업으로 상쇄한다. DB 세 개를 서비스 셋으로 두고 Node로 짠 오케스트레이터를 보상 도중에 죽여 보며 멱등한 보상, 피벗 단계 배치, 코레오그래피와의 차이, 의미상 잠금, 아웃박스 릴레이의 중복까지 따라간다.
- 태그: tesla, System Design, Distributed Systems, MSA, Transaction, PostgreSQL, Node.js · 회사: tesla
- 키워드: 보상 트랜잭션, 피벗 단계, 의미상 잠금
- 길이: 437줄
- 소제목: 되돌리지 않고 반대로 한다 / 단계는 세 종류로 나뉜다 / 지휘하는 쪽이 순서를 쥐는 오케스트레이션 / 보상 도중에 오케스트레이터가 죽으면 / 지휘자 없이 이벤트로 잇는 코레오그래피 / 중간 상태가 남에게 보인다 / 상태를 바꾸고 알리는 일을 한 번에: 아웃박스 / 워크플로 엔진에 맡길 때 / 사가가 꼬였을 때 현장에서 보는 것 / 사가가 약속하는 것과 하지 않는 것 / 면접에서 나올 만한 질문
- 직접 링크 →: microservices, distributed-transactions-2pc, event-driven-architecture, optimistic-locking, message-delivery-semantics, idempotency-key
- 키워드 백링크 →: serverless-architecture, postgres-advanced-sql, db-architecture-by-scale, db-type-columnar-olap, db-locking-deadlock, distributed-tracing, kafka-basics, db-transaction-isolation, db-replication-sharding, acid-transactions, dead-letter-queue
- 이 글로 오는 글 ←: acid-transactions, acid-vs-base, architecture-patterns-overview, db-locking-deadlock, distributed-transactions-2pc, event-driven-architecture, js-callback-hell, js-pure-functions, microservices, monolith-architecture, pattern-command, pattern-mediator, sd-hotel-inventory-scaling, sd-payment-flow, sd-payment-reliability, sd-sharding-intro, sd-wallet-transfer, serverless-architecture, system-design-concepts-map, system-design-study-path, transactional-outbox

#### `scaling-horizontal-vertical` — 수평 확장과 수직 확장: 더 큰 서버냐, 더 많은 서버냐

- 요약: 서버를 키워도 앱이 늘어난 코어를 못 쓰는 경우와, 서버를 늘리면 메모리 세션 때문에 로그인이 풀리는 경우를 직접 재현한다. 늘린 만큼 빨라지지 않는 이유를 암달의 법칙과 보편 확장성 법칙으로 계산하고, 언제 무엇을 고를지 정리한다.
- 태그: Scalability, System Design, Architecture, Performance, Session
- 키워드: 수평 확장, 수직 확장, 암달의 법칙, 보편 확장성 법칙
- 길이: 351줄
- 소제목: 키우기와 늘리기 / 키워도 쓰지 못하는 자원 / 늘리려면 상태를 밖으로 빼야 한다 / 늘린 만큼 빨라지지 않는다: 암달의 법칙 / 맞추는 비용까지 세면: 보편 확장성 법칙 / 층마다 늘리기 쉬운 정도가 다르다 / 언제 무엇을 고르나 / 더 큰 서버의 끝, 더 많은 서버의 조건 / 면접에서 나올 만한 질문
- 직접 링크 →: autoscaling, db-replication-sharding, db-sharding, garbage-collection, cookie-session-login, caching-strategies, distributed-lock, leader-election, load-balancer-basics, consistent-hashing
- 키워드 백링크 →: linux-processes-signals, network-partitions, sd-object-storage-architecture, sd-start-single-server, sql-batch-timeout-pool, redis-basics, go-concurrency-basics, dns
- 이 글로 오는 글 ←: api-scaling-ladder, autoscaling, backend-engineer-roadmap, db-replication-sharding, db-sharding, db-type-newsql, db-type-relational, db-types-overview, monolith-architecture, prometheus-basics, sd-chat-message-storage, sd-sharding-intro, sd-split-web-and-db, sql-vs-nosql, system-design-concepts-map

#### `schema-versioning` — 스키마 버전 관리: Avro, 스키마 레지스트리, 옛 이벤트 읽기

- 요약: 로그에 남는 이벤트는 코드보다 오래 산다. Avro가 쓴 쪽과 읽는 쪽 스키마를 맞춰 읽는 방식, 스키마 레지스트리와 호환성 규칙, TRANSITIVE가 필요한 이유, protobuf와 JSON Schema에서 조용히 깨지는 변경, 옛 이벤트를 올리는 업캐스터를 직접 돌려 본다.
- 태그: System Design, Messaging, Architecture, Distributed Systems, API
- 키워드: 스키마 레지스트리, Avro, 업캐스터, BACKWARD_TRANSITIVE
- 길이: 361줄
- 소제목: 석 달 전 이벤트를 다시 읽는 날 / Avro는 스키마 없이는 한 바이트도 못 읽는다 / 메시지에는 스키마 번호만 붙는다 / 레지스트리가 거절하는 변경 / 최신 버전 하나와만 비교하면 놓치는 것 / 배포 순서가 규칙을 정한다 / Protobuf와 JSON Schema에서 조용히 깨지는 것 / 이미 저장된 이벤트는 읽을 때 올린다 / 현장에서 스키마 문제를 만나는 순간 / 데이터가 코드보다 오래 산다 / 면접에서 나올 만한 질문
- 직접 링크 →: api-versioning, grpc, kafka-basics, event-driven-architecture, db-migration-tools, zero-downtime-migrations, message-delivery-semantics
- 키워드 백링크 →: db-architecture-by-scale, sd-queue-logging-automation, rest-api-design, event-sourcing, js-pure-functions, dead-letter-queue
- 이 글로 오는 글 ←: api-versioning, architecture-patterns-overview, db-migration-tools, event-driven-architecture, event-sourcing

#### `service-discovery` — 서비스 디스커버리: 목록은 누가 쓰고, 어디서 낡아지나

- 요약: 클라이언트 측과 서버 측 디스커버리, 임대와 헬스 체크로 하는 등록을 etcd와 Consul로 돌려 본다. 레지스트리는 바뀌었는데 JVM DNS 캐시와 연결 풀 때문에 옛 주소로 가는 이유도 짚는다.
- 태그: System Design, Distributed Systems, DNS, Kubernetes, Network
- 키워드: 서비스 디스커버리, 서비스 레지스트리, 클라이언트 측 디스커버리, networkaddress.cache.ttl
- 길이: 392줄
- 소제목: 목록을 누가 들고 있나 / 등록은 누가 하나 / 살아 있는 동안만 남는 등록 / 살아 있다는 것과 일할 수 있다는 것 / DNS로 찾으면 캐시가 끼어든다 / 목록에서 고르는 규칙 짜 보기 / 목록이 틀렸을 때 생기는 증상 / 어떤 방식을 고를까 / 면접에서 나올 만한 질문
- 직접 링크 →: k8s-service-types, k8s-coredns, dns, service-mesh, distributed-lock, k8s-pod-lifecycle, load-balancer-basics
- 키워드 백링크 →: nodejs-server-runtime, iptables-nat, browser-fetch, iptables-basics, hosts-file, reverse-proxy-lb-api-gateway, k8s-architecture, autoscaling, osi-in-practice, sql-batch-timeout-pool, grpc, db-type-key-value, redis-basics, udp-and-quic
- 이 글로 오는 글 ←: alerting, devops-networking-roadmap, monitoring-basics, prometheus-basics, sd-chat-connections, sd-metrics-collection, sd-nearby-friends, service-mesh

#### `sql-vs-nosql` — SQL vs NoSQL: 조인을 언제 하느냐의 선택

- 요약: 같은 주문을 정규화 테이블과 JSONB 문서로 저장해 두고 상세 조회, 새 집계 질문, 상품 이름 변경, 스키마 어긋남, 파티션 키와 핫 파티션을 실행 결과로 비교한다. 접근 패턴에서 출발해 저장소를 고르는 순서와 잘못 골랐을 때의 신호를 정리한다.
- 태그: Database, NoSQL, SQL, PostgreSQL, System Design
- 키워드: SQL vs NoSQL, 스키마 온 리드
- 길이: 532줄
- 소제목: NoSQL은 한 종류가 아니다 / 같은 주문을 두 모양으로 / 정해 둔 질문에는 한 덩어리가 빠르다 / 미리 몰랐던 질문이 오면 / 복사해 둔 값은 함께 고쳐야 한다 / 스키마가 없다는 건 읽을 때 검사한다는 뜻 / 수평 확장은 키를 하나 고르는 대가다 / 트랜잭션과 일관성은 어디까지 되나 / 직접 짜 보기: 주문을 문서로 접기 / 고르는 순서 / 잘못 골랐을 때 보이는 신호 / 질문 목록이 먼저다 / 면접에서 나올 만한 질문
- 직접 링크 →: db-types-overview, db-type-relational, mongodb-document-model, db-type-key-value, db-type-wide-column, db-type-graph, db-keys-denormalization, zero-downtime-migrations, db-sharding, db-type-newsql, high-availability, db-architecture-by-scale, acid-transactions, db-consistency-cap, eventual-consistency, consistency-models, postgres-jsonb-search
- 키워드 백링크 →: sd-sharding-intro, acid-vs-base, db-type-columnar-olap, db-replication-sharding, sd-mq-storage-partitions, scaling-horizontal-vertical, redis-basics, db-modeling-normalization
- 이 글로 오는 글 ←: system-design-concepts-map

#### `system-design-concepts-map` — 시스템 설계 25가지 개념 지도: 공부 순서와 읽을 글

- 요약: Scalability부터 Authorization까지 시스템 설계 25가지 개념을 주문 요청 하나 위에 놓고 재는 말, 앞단, 데이터, 일관성, 비동기, 서비스 경계, 보안의 일곱 묶음으로 공부 순서를 정한다. 개념마다 답하는 질문과 그 자리에 두는 이유, 읽을 글을 잇고, 면접 질문별로 펼칠 글을 정리한다.
- 태그: System Design, Architecture, Backend, Distributed Systems, Database
- 키워드: 시스템 설계 개념 지도, 시스템 설계 공부 순서
- 길이: 473줄
- 소제목: 스물다섯 단어는 요청 하나 위에 있다 / 일곱 묶음을 이 순서로 읽는 이유 / 재는 말부터 익힌다 / 요청이 서버에 닿기 전 / 데이터를 어디에 어떻게 두나 / 사본이 여럿이면 무엇을 약속하나 / 지금 안 해도 되는 일은 미룬다 / 서비스 사이의 약속과 입구 / 누가, 무엇을, 얼마나 / 면접관이 이렇게 물으면 / 증상을 개념으로 옮겨 보기 / 한 장으로 보는 스물다섯 개 / 면접에서 나올 만한 질문
- 직접 링크 →: networking-essentials-map, db-architecture-by-scale, latency-bandwidth-throughput, percentile-latency, tail-latency, sd-capacity-estimation, scaling-horizontal-vertical, autoscaling, high-availability, failover, fault-tolerance, resilience-patterns, dns, cdn-edge-anycast, http-caching-cdn, edge-caching, load-balancer-basics, load-balancing-algorithms, caching-strategies, cache-invalidation, sql-vs-nosql, db-types-overview, db-index, db-index-design, db-replication-sharding, db-sharding, consistent-hashing, db-consistency-cap, network-partitions, consistency-models, eventual-consistency, acid-transactions, db-transaction-isolation, message-queue-basics, dead-letter-queue, pub-sub, kafka-basics, api-versioning, api-pagination-sorting, idempotency-key, rest-api-design, grpc, microservices, microservices-decomposition, saga-pattern, gateway, rate-limiting-algorithms, rate-limiting-in-practice, cookie-session-login, token-login, oauth, authn-vs-authz, iam-basics, k8s-rbac, transactional-outbox, event-driven-architecture, network-troubleshooting-by-layer
- 키워드 백링크 →: sd-interview-framework, sd-url-shortener-api-redirect, leader-election, db-type-key-value, proxy-reverse-proxy, osi-in-practice, redis-basics, http-status-codes, mongodb-document-model, vpc-basics, postgres-architecture, http-methods
- 이 글로 오는 글 ←: backend-engineer-roadmap, system-design-study-path

#### `system-design-study-path` — 시스템 디자인 공부 순서: 서버 한 대에서 증권 거래소까지 60편 읽는 법

- 요약: System Design Notes 시리즈 60편을 읽는 순서를 정리한다. 서버 한 대에 부품을 하나씩 붙이는 기초 12편을 먼저 읽고, 설계 사례는 일관된 해싱, 고유 ID, 큐와 팬아웃, WebSocket, 지리 색인, 멱등 키처럼 사례마다 다시 나오는 부품으로 묶어 읽는다.
- 태그: System Design, Distributed Systems, Architecture, Scalability
- 키워드: System Design Notes, 설계 사례 읽는 순서, 시스템 설계 학습 경로
- 길이: 358줄
- 소제목: 개념 지도와 이 글은 무엇이 다른가 / 서버 한 대가 지도 전체로 자라는 과정 / 기초 12편: 무엇이 먼저 무너지나 / 사례 글을 읽을 때 따라가는 순서 / 숫자 하나는 손으로 뽑아 본다 / 같은 부품이 여러 사례에 다시 나온다 / 한 대에 안 들어가는 데이터: 키-값 저장소 / 겹치지 않는 번호와 짧은 키 / 큐에 넣고 여러 곳으로 퍼뜨린다 / 연결을 붙잡는 서버와 미리 계산해 둔 답 / 큰 파일을 쪼개서 올리고 나눠서 보낸다 / 위치로 찾고 위치를 밀어 준다 / 흘러가는 데이터를 잃지 않고 센다 / 같은 방은 한 번만 팔린다 / 오래, 안전하게 보관한다 / 순위표를 실시간으로 / 돈은 정확히 한 번 움직인다 / 몇 주에 걸쳐 읽는다면 / 읽는 방법이 결과를 바꾼다 / 면접에서 나올 만한 질문
- 직접 링크 →: system-design-concepts-map, sd-start-single-server, sd-split-web-and-db, sd-load-balancer-stateless, sd-db-replication-intro, sd-cache-and-cdn-tier, sd-multi-datacenter, sd-queue-logging-automation, sd-sharding-intro, sd-latency-numbers, sd-capacity-estimation, sd-interview-framework, sd-rate-limiter-design, rate-limiting-algorithms, rate-limiting-in-practice, sd-url-shortener-api-redirect, sd-url-shortener-key-generation, consistent-hashing, db-replication-sharding, optimistic-locking, merkle-tree, bloom-filter, clock-skew, kafka-basics, message-delivery-semantics, websocket-deep-dive, pub-sub, long-polling, geohash, quadtree, idempotency-key, retries, distributed-transactions-2pc, saga-pattern, event-sourcing, cqrs, sd-kv-store-partition-replication, sd-kv-store-versioning, sd-kv-store-failure-handling, sd-kv-store-write-read-path, sd-unique-id-generator, sd-web-crawler-architecture, sd-web-crawler-politeness-dedup, sd-notification-system, sd-notification-reliability, sd-news-feed-publishing, sd-news-feed-retrieval, sd-chat-connections, sd-chat-message-storage, sd-chat-presence, sd-autocomplete-trie, sd-autocomplete-data-pipeline, sd-video-upload-transcoding, sd-video-streaming-cost, sd-file-sync-block-upload, sd-file-sync-conflicts, sd-music-streaming, sd-proximity-service, sd-nearby-friends, sd-maps-tiles-routing, sd-maps-location-eta, sd-mq-storage-partitions, sd-mq-consumer-groups, sd-mq-replication, sd-metrics-collection, sd-metrics-storage-alerting, sd-ad-click-stream-windows, sd-ad-click-exactly-once, metrics-types, prometheus-basics, sd-hotel-double-booking, sd-hotel-inventory-scaling, sd-email-protocols, sd-email-storage-search, sd-object-storage-architecture, sd-object-storage-durability, sd-object-storage-versioning-multipart, sd-leaderboard-sorted-set, sd-leaderboard-scaling, sd-payment-flow, sd-payment-reliability, sd-wallet-transfer, sd-wallet-event-sourcing, sd-stock-exchange-order-book, sd-stock-exchange-low-latency
- 키워드 백링크 →: db-sharding, realtime-communication, high-availability, data-structures-overview, db-type-key-value, db-type-wide-column, event-driven-architecture, db-locking-deadlock, redis-basics, db-partitioning, mongodb-document-model, http-methods, rendering-strategies, dns, webhooks
- 이 글로 오는 글 ←: api-scaling-ladder, backend-engineer-roadmap, sd-music-streaming, sd-stock-exchange-low-latency, sd-stock-exchange-order-book

#### `tail-latency` — 꼬리 지연: 서버 하나의 드문 느림이 팬아웃에서 흔해지는 이유

- 요약: 잎 서버 100개에 묻는 요청은 각 서버의 1% 느림을 63%로 키운다. 증폭을 직접 재 보고, 꼬리가 생기는 원인과 load shedding, 헤징, 묶인 요청, 일부만 기다리기로 꼬리를 자르는 법을 실험과 함께 정리한다.
- 태그: Performance, Distributed Systems, System Design, Resilience, Scalability
- 키워드: 꼬리 지연, tied request, 팬아웃 증폭, load shedding
- 길이: 346줄
- 소제목: 하나일 때 드문 일이 백 개면 흔해진다 / 느린 잎이 몇 개까지 괜찮은가 직접 계산하기 / 꼬리는 어디서 생기나 / 넘치는 요청은 빨리 거절한다 / 다른 서버에 한 번 더 묻기: 헤징과 묶인 요청 / 다 기다리지 않는다 / 현장에서 꼬리를 쫓는 순서 / 드문 느림을 드물게 남기려면 / 면접에서 나올 만한 질문
- 직접 링크 →: percentile-latency, retries, timeouts, garbage-collection, latency-bandwidth-throughput, exponential-backoff-jitter, rate-limiting-algorithms, backpressure, circuit-breaker, distributed-tracing
- 키워드 백링크 →: sd-start-single-server, resilience-patterns, grpc, db-partitioning, pub-sub, http-methods
- 이 글로 오는 글 ←: api-gateway-use-cases, backpressure, caching-strategies, chaos-engineering, devops-networking-roadmap, distributed-lock, garbage-collection, go-concurrency-basics, metrics-types, percentile-latency, rate-limiting-algorithms, resilience-patterns, retries, reverse-proxy-lb-api-gateway, sd-kv-store-partition-replication, sd-object-storage-durability, sd-stock-exchange-low-latency, service-mesh, system-design-concepts-map, tcp-reliability-congestion

#### `timeouts` — 타임아웃은 계층마다 따로 있다: connect부터 데드라인까지

- 요약: 요청 하나가 지나는 DNS, 연결, TLS, 첫 바이트, 본문 구간과 LB·nginx·앱·풀·DB마다 걸린 타임아웃을 직접 재 본다. 유휴 한도와 전체 한도의 차이, 바깥이 포기해도 안쪽이 계속 일하는 문제, 데드라인 전파로 모든 계층을 같은 시각에 정리하는 법을 다룬다.
- 태그: Resilience, Distributed Systems, System Design, Network, Nginx, PostgreSQL
- 키워드: 데드라인 전파, connect 타임아웃, client_connection_check_interval
- 길이: 612줄
- 소제목: 요청 하나에 기다림이 여섯 번 있다 / 연결이 안 될 때는 커널이 2분 넘게 기다린다 / 읽기 타임아웃은 전체 시간이 아니다 / 계층마다 걸려 있는 한도 / 앞에서 포기해도 뒤에서는 계속 일한다 / 바깥이 안쪽보다 길어야 한다 / 남은 시간을 넘겨주는 데드라인 전파 / keep-alive 유휴 시간이 어긋나면 생기는 502 / 값을 고르는 순서 / 504와 끝나지 않는 요청을 만났을 때 / 면접에서 나올 만한 질문
- 직접 링크 →: resilience-patterns, retries, exponential-backoff-jitter, nginx-reverse-proxy, chaos-engineering, sql-batch-timeout-pool
- 키워드 백링크 →: browser-fetch, reverse-proxy-lb-api-gateway, packet-capture-tcpdump, deadlocks, what-happens-google-com, grpc, postgres-getting-started, dns
- 이 글로 오는 글 ←: chaos-engineering, curl-for-debugging, deadlocks, devops-networking-roadmap, distributed-tracing, enterprise-system-integration, exponential-backoff-jitter, fastapi-basics, fault-tolerance, go-concurrency-basics, grpc, high-availability, http-streaming-sse, js-promise-combinators, long-polling, network-partitions, osi-in-practice, pattern-decorator, pattern-proxy, production-incidents, resilience-patterns, retries, sd-split-web-and-db, sd-web-crawler-architecture, serverless-limits, tail-latency, tcp-connection-lifecycle, webhooks, websocket-deep-dive

### Programming › System Design › 기초부터 차근차근 (`programming/system-design/fundamentals`)

#### `sd-cache-and-cdn-tier` — 수백만 사용자로 키우기 ⑤: 캐시 계층과 CDN

- 요약: 같은 인기 목록을 초당 2,000번 계산하던 DB 앞에 Redis 캐시를 두고, 캐시에 없을 때와 있을 때의 길, TTL과 옛 값, LRU 축출, 캐시가 죽는 날의 DB 부하를 직접 재 본다. 정적 파일은 CDN 엣지로 보내고 파일 이름 해시와 CDN 장애 우회까지 정리한다.
- 태그: System Design, Cache, CDN, Redis, Scalability
- 키워드: 캐시 계층, 캐시 히트율
- 길이: 412줄
- 소제목: 같은 답을 초당 2,000번 계산한다 / 캐시에 없을 때와 있을 때 / 어떤 데이터를 캐시에 둘까 / 캐시는 언제까지 믿을까: TTL / 메모리가 차면 무엇을 버리나 / 캐시 서버가 멈추는 날 / 사진과 JS 파일은 사용자 가까이에: CDN / CDN에 맡기기 전에 정할 것 / 지금까지 쌓은 구조 / 다음 글 / 면접에서 나올 만한 질문
- 직접 링크 →: sd-db-replication-intro, sd-multi-datacenter, sd-start-single-server, sd-split-web-and-db, sd-load-balancer-stateless, sd-queue-logging-automation, sd-sharding-intro, caching-strategies, cache-invalidation, redis-memory-eviction, consistent-hashing, redis-replication-sentinel, redis-cluster, edge-caching, cdn-edge-anycast, http-caching-cdn
- 키워드 백링크 →: redis-basics, high-availability, db-type-key-value, dns
- 이 글로 오는 글 ←: api-scaling-ladder, backend-engineer-roadmap, caching-concepts-map, edge-caching, pattern-iterator, sd-capacity-estimation, sd-db-replication-intro, sd-latency-numbers, sd-load-balancer-stateless, sd-multi-datacenter, sd-music-streaming, sd-queue-logging-automation, sd-sharding-intro, sd-split-web-and-db, sd-start-single-server, sd-url-shortener-key-generation, system-design-study-path

#### `sd-capacity-estimation` — 수백만 사용자로 키우기 ⑩: 사용자 수에서 QPS, 저장 공간, 서버 대수까지 어림하기

- 요약: 월간 사용자 1,000만 명이라는 숫자 하나에서 가정을 적고, 평균과 피크 QPS, 읽기와 쓰기 비율, 저장 공간, 전송량, 캐시 메모리, 서버 대수를 계산한다. 리뷰 한 줄의 크기는 PostgreSQL에서 직접 잰다.
- 태그: System Design, PostgreSQL, Performance, Cache, Backend
- 키워드: 봉투 뒷면 계산, 피크 QPS, 용량 어림
- 길이: 386줄
- 소제목: 가정부터 적는다 / 하루를 86,400초로 나누면 초당 요청 수 / 평균으로 서버를 고르면 저녁에 무너진다 / 읽기와 쓰기를 따로 센다 / 한 줄이 몇 바이트인지는 재 보면 된다 / 사진이 저장 공간의 거의 전부다 / 밖으로 나가는 바이트 / 캐시에 올릴 몫과 서버 대수 / 숫자가 설계를 바꾸는 지점 / 직접 계산해 보기 / 어림셈에서 자주 하는 실수 / 다음에 읽을 글 / 면접에서 나올 만한 질문
- 직접 링크 →: sd-latency-numbers, sd-interview-framework, sd-rate-limiter-design, sd-start-single-server, sd-sharding-intro, autoscaling, sd-db-replication-intro, sd-cache-and-cdn-tier
- 키워드 백링크 →: multi-region, redis-basics
- 이 글로 오는 글 ←: api-scaling-ladder, sd-ad-click-stream-windows, sd-chat-connections, sd-db-replication-intro, sd-email-storage-search, sd-interview-framework, sd-kv-store-partition-replication, sd-latency-numbers, sd-maps-location-eta, sd-metrics-collection, sd-mq-storage-partitions, sd-music-streaming, sd-notification-system, sd-proximity-service, sd-rate-limiter-design, sd-start-single-server, sd-url-shortener-api-redirect, sd-video-upload-transcoding, sd-web-crawler-architecture, system-design-concepts-map, system-design-study-path

#### `sd-db-replication-intro` — 수백만 사용자로 키우기 ④: DB 복제로 읽기 나누기

- 요약: 쓰기는 주 DB 한 대가 받고 복제본들이 그 기록을 따라 써서 읽기를 나눈다. 복제본에서 방금 쓴 리뷰가 안 보이는 지연, 복제본과 주 DB가 죽었을 때의 전환, 가장 앞선 복제본을 고르는 이유를 Redis 세 대로 직접 확인한다.
- 태그: System Design, Scalability, Database, Distributed Systems, Redis
- 키워드: 주 DB, 복제본 승격
- 길이: 438줄
- 소제목: 읽기는 많고 쓰기는 적다 / 복제본은 주 DB의 기록을 따라 쓴다 / 세 대로 복제를 걸어 보기 / 웹 앱이 읽을 곳과 쓸 곳을 고른다 / 방금 쓴 리뷰가 안 보인다 / 주 DB가 죽으면 누가 이어받나 / 장애 조치를 사람이 하면 늦다 / 복제는 백업이 아니다 / 복제본은 몇 대가 필요할까 / 현장에서 복제를 의심하는 순간 / 이어서 읽을 글 / 면접에서 나올 만한 질문
- 직접 링크 →: sd-load-balancer-stateless, sd-cache-and-cdn-tier, sd-start-single-server, sd-split-web-and-db, sd-multi-datacenter, sd-queue-logging-automation, sd-sharding-intro, db-replication-sharding, sd-capacity-estimation, eventual-consistency, db-consistency-cap, failover, redis-replication-sentinel, backup-strategy
- 키워드 백링크 →: db-architecture-by-scale, leader-election, mysql-replication-online-ddl, postgres-operations, redis-basics, postgres-architecture
- 이 글로 오는 글 ←: api-scaling-ladder, db-performance-map, postgres-jsonb-search, sd-cache-and-cdn-tier, sd-capacity-estimation, sd-file-sync-block-upload, sd-hotel-double-booking, sd-load-balancer-stateless, sd-multi-datacenter, sd-music-streaming, sd-object-storage-architecture, sd-payment-reliability, sd-proximity-service, sd-queue-logging-automation, sd-sharding-intro, sd-split-web-and-db, sd-start-single-server, sd-url-shortener-api-redirect, system-design-study-path

#### `sd-interview-framework` — 수백만 사용자로 키우기 ⑪: 설계 면접 45분을 네 토막으로 나누기

- 요약: 같은 조회수 세기 문제도 규모와 정확도 요구에 따라 답이 달라진다. 범위를 좁히고, 단순한 그림으로 끝까지 그리고, 숫자가 가리키는 병목을 깊이 파고, 약점을 먼저 말하는 순서를 실제 측정과 함께 따라간다.
- 태그: System Design, Redis, PostgreSQL, Backend
- 키워드: 시스템 설계 면접, 설계 면접 네 단계
- 길이: 312줄
- 소제목: 45분을 네 토막으로 나눈다 / 첫 토막: 무엇을 만들지 좁힌다 / 둘째 토막: 상자 몇 개로 끝까지 그린다 / 셋째 토막: 숫자가 가리키는 곳을 판다 / 마지막 토막: 약점을 먼저 말한다 / 면접관이 보는 것 / 혼자 연습하는 법 / 다음에 읽을 글 / 면접에서 나올 만한 질문
- 직접 링크 →: sd-capacity-estimation, sd-rate-limiter-design, sd-start-single-server, sd-latency-numbers
- 키워드 백링크 →: db-type-wide-column, gateway, race-conditions, kafka-basics, redis-basics
- 이 글로 오는 글 ←: sd-capacity-estimation, sd-kv-store-partition-replication, sd-latency-numbers, sd-load-balancer-stateless, sd-rate-limiter-design, sd-start-single-server, system-design-concepts-map, system-design-study-path

#### `sd-latency-numbers` — 수백만 사용자로 키우기 ⑨: 2의 거듭제곱, 지연 시간, 가용성의 아홉

- 요약: 느린 API의 원인을 숫자로 좁히려면 동작마다 걸리는 시간의 자릿수를 알아야 한다. 2의 거듭제곱과 비트·바이트, 메모리부터 대륙 왕복까지의 지연 사다리, 가용성 목표별 허용 멈춤 시간을 직접 재고 계산해 본다.
- 태그: System Design, Performance, Network, Redis, SRE
- 키워드: 지연 시간 숫자, 2의 거듭제곱, 가용성의 아홉
- 길이: 378줄
- 소제목: 바이트를 세는 두 가지 자 / 나노초부터 수백 밀리초까지, 지연의 사다리 / 이 컴퓨터에서 직접 재 보기 / 거리는 빛의 속도가 정한다 / 왕복 횟수가 응답 시간을 정한다 / 아홉 개수와 멈춰도 되는 시간 / 숫자를 외울 때 자주 하는 실수 / 직접 계산해 보기 / 다음에 읽을 글 / 면접에서 나올 만한 질문
- 직접 링크 →: sd-sharding-intro, sd-capacity-estimation, sd-interview-framework, sd-rate-limiter-design, sd-cache-and-cdn-tier, sd-multi-datacenter, n-plus-one-queries, high-availability, sli-slo, percentile-latency, latency-bandwidth-throughput
- 키워드 백링크 →: sd-start-single-server, distributed-tracing, tcp-reliability-congestion, redis-basics, sql-query-rewrite
- 이 글로 오는 글 ←: clock-skew, ds-hash-map, ds-stack-queue-deque, percentile-latency, sd-capacity-estimation, sd-interview-framework, sd-news-feed-retrieval, sd-sharding-intro, sd-split-web-and-db, sd-stock-exchange-low-latency, system-design-study-path

#### `sd-load-balancer-stateless` — 수백만 사용자로 키우기 ③: 로드 밸런서와 무상태 웹 서버

- 요약: 웹 서버를 두 대로 늘리고 로드 밸런서를 붙이자 로그인이 한 번 걸러 한 번씩 풀린다. 세션을 Redis로 옮겨 무상태로 만들고, 서버 하나를 꺼서 헬스 체크가 빼기까지의 502와 재시도 효과를 잰다.
- 태그: System Design, Scalability, Load Balancer, Redis, Backend
- 키워드: 무상태 서버, 웹 계층
- 길이: 369줄
- 소제목: 서버가 두 대면 누가 나눠 주나 / 로그인했는데 한 번씩 풀린다 / 상태를 빼내는 세 가지 방법 / 세션을 Redis로 옮겨 보기 / 세션 말고도 숨은 상태가 있다 / 서버 하나가 죽는 순간 / 배포와 자동 확장이 쉬워진다 / 새로 생긴 약점들 / 몇 대에 어떻게 나뉘나 직접 돌려 보기 / 현장에서 이 구조가 아플 때 / 이어서 읽을 글 / 면접에서 나올 만한 질문
- 직접 링크 →: sd-split-web-and-db, sd-db-replication-intro, sd-start-single-server, sd-cache-and-cdn-tier, sd-multi-datacenter, sd-queue-logging-automation, sd-sharding-intro, load-balancer-basics, load-balancing-algorithms, token-login, cookie-session-login, cron-jobs, idempotency-key, rolling-deployment, autoscaling, redis-replication-sentinel
- 키워드 백링크 →: sd-interview-framework, realtime-communication, high-availability, message-delivery-semantics, db-type-key-value, sd-object-storage-architecture, osi-in-practice, sql-batch-timeout-pool, redis-basics, sql-query-rewrite, dns
- 이 글로 오는 글 ←: api-scaling-ladder, nodejs-server-runtime, sd-cache-and-cdn-tier, sd-chat-connections, sd-db-replication-intro, sd-file-sync-block-upload, sd-hotel-inventory-scaling, sd-multi-datacenter, sd-object-storage-architecture, sd-proximity-service, sd-queue-logging-automation, sd-sharding-intro, sd-split-web-and-db, sd-start-single-server, sd-url-shortener-api-redirect, system-design-study-path

#### `sd-multi-datacenter` — 수백만 사용자로 키우기 ⑥: 데이터 센터를 여러 곳에

- 요약: 서울 한 곳에 있던 구조를 버지니아에 하나 더 두고, GeoDNS로 사용자를 가까운 곳에 보내고, 한쪽이 멈췄을 때 넘어가는 시간과 남은 쪽의 여유, 비동기 복제로 잃는 쓰기, 세션과 캐시, 되돌아오는 순서까지 따라간다.
- 태그: System Design, DNS, Distributed Systems, Resilience, Scalability
- 키워드: GeoDNS, 멀티 데이터 센터, 데이터 센터 장애 조치
- 길이: 344줄
- 소제목: 건물 하나에 모든 것을 두면 / 같은 이름에 위치별로 다른 답: GeoDNS / 한쪽이 통째로 멈추면 넘어가기까지 / 넘어간 쪽이 다 받을 수 있나 / 두 곳의 데이터를 맞추는 일 / 양쪽에서 쓰게 하면 생기는 일 / 넘기는 연습과 되돌아오는 길 / 다음 글 / 면접에서 나올 만한 질문
- 직접 링크 →: sd-cache-and-cdn-tier, sd-queue-logging-automation, sd-start-single-server, sd-split-web-and-db, sd-load-balancer-stateless, sd-db-replication-intro, sd-sharding-intro, cdn-edge-anycast, failover, disaster-recovery, idempotency-key, multi-region, eventual-consistency, iac-basics, chaos-engineering
- 키워드 백링크 →: k8s-deploy-pipeline-eks, autoscaling, vpc-basics, osi-in-practice, dns
- 이 글로 오는 글 ←: api-scaling-ladder, multi-region, sd-cache-and-cdn-tier, sd-db-replication-intro, sd-email-storage-search, sd-kv-store-failure-handling, sd-kv-store-partition-replication, sd-latency-numbers, sd-load-balancer-stateless, sd-proximity-service, sd-queue-logging-automation, sd-rate-limiter-design, sd-sharding-intro, sd-split-web-and-db, sd-start-single-server, system-design-study-path, youtube-url-to-video

#### `sd-queue-logging-automation` — 수백만 사용자로 키우기 ⑦: 메시지 큐, 로그와 지표, 자동화

- 요약: 사진 썸네일 작업을 Redis 큐와 워커로 요청 밖으로 빼고, 큐가 몰리는 순간을 흡수하는 모습을 숫자로 본다. 수십 대의 로그를 요청 ID로 한곳에 모으고, 서버·서비스·비즈니스 지표를 내보내고, 빌드부터 두 데이터 센터 배포까지 자동화하는 흐름을 정리한다.
- 태그: System Design, Messaging, Observability, CI/CD, Redis
- 키워드: 비즈니스 지표, 로그 중앙 수집, 생산자와 소비자
- 길이: 396줄
- 소제목: 사용자가 기다리지 않아도 되는 일 / 큐는 몰리는 순간을 흡수한다 / 웹과 워커를 따로 늘린다 / 수십 대의 로그를 한곳으로 / 숫자로 미리 알아채기 / 사람 손을 덜 타게 / 여기까지 쌓은 구조 / 다음 글 / 면접에서 나올 만한 질문
- 직접 링크 →: sd-multi-datacenter, sd-sharding-intro, sd-start-single-server, sd-split-web-and-db, sd-load-balancer-stateless, sd-db-replication-intro, sd-cache-and-cdn-tier, message-queue-basics, dead-letter-queue, message-delivery-semantics, kafka-basics, rabbitmq-basics, structured-logging, metrics-types, prometheus-basics, alerting, observability-basics, iac-basics, terraform-basics, autoscaling, ci-cd-basics
- 키워드 백링크 →: elasticsearch-inverted-index, redis-basics
- 이 글로 오는 글 ←: api-versioning, schema-versioning, sd-autocomplete-data-pipeline, sd-cache-and-cdn-tier, sd-db-replication-intro, sd-load-balancer-stateless, sd-metrics-collection, sd-mq-storage-partitions, sd-multi-datacenter, sd-nearby-friends, sd-news-feed-publishing, sd-notification-system, sd-sharding-intro, sd-split-web-and-db, sd-start-single-server, sd-url-shortener-key-generation, system-design-study-path, websocket-deep-dive

#### `sd-sharding-intro` — 수백만 사용자로 키우기 ⑧: 샤딩 입문

- 요약: 복제로는 줄지 않는 쓰기를 PGlite 네 개로 나눠 담아 보며 샤딩 키를 고르는 기준, 키 없는 질문의 scatter-gather, 반정규화, 샤드를 늘릴 때 80%가 옮겨 가는 리샤딩과 논리 샤드, 유명한 키 하나가 샤드를 태우는 문제, 샤딩 전에 해 볼 것을 다룬다.
- 태그: System Design, Database, Scalability, Distributed Systems, PostgreSQL
- 키워드: 리샤딩, 논리 샤드, scatter-gather
- 길이: 368줄
- 소제목: 복제본을 늘려도 쓰기는 줄지 않는다 / 같은 테이블을 네 DB에 나눠 담기 / 샤딩 키를 고르는 두 가지 기준 / 샤딩 키가 없는 질문은 모든 샤드에 묻는다 / 샤드를 넘는 조인 대신 반정규화 / 샤드를 늘리는 일: 리샤딩 / 유명한 식당 하나가 샤드 하나를 태운다 / 샤드마다 번호가 겹치지 않게 / 샤딩 전에 먼저 해 볼 것 / 다음 글 / 면접에서 나올 만한 질문
- 직접 링크 →: sd-queue-logging-automation, sd-latency-numbers, sd-start-single-server, sd-split-web-and-db, sd-load-balancer-stateless, sd-db-replication-intro, sd-cache-and-cdn-tier, sd-multi-datacenter, db-sharding, cqrs, db-keys-denormalization, distributed-transactions-2pc, saga-pattern, consistent-hashing, redis-cluster, caching-strategies, sd-unique-id-generator, db-partitioning, db-types-overview
- 키워드 백링크 →: db-type-key-value, postgres-data-types, sd-news-feed-publishing, db-type-newsql, scaling-horizontal-vertical, redis-basics, microservices, db-modeling-normalization
- 이 글로 오는 글 ←: api-scaling-ladder, db-performance-map, db-sharding, mongodb-document-model, sd-autocomplete-data-pipeline, sd-cache-and-cdn-tier, sd-capacity-estimation, sd-db-replication-intro, sd-file-sync-block-upload, sd-hotel-inventory-scaling, sd-kv-store-partition-replication, sd-latency-numbers, sd-leaderboard-scaling, sd-load-balancer-stateless, sd-metrics-collection, sd-multi-datacenter, sd-music-streaming, sd-news-feed-publishing, sd-object-storage-architecture, sd-proximity-service, sd-queue-logging-automation, sd-split-web-and-db, sd-start-single-server, sd-unique-id-generator, sd-url-shortener-api-redirect, sd-wallet-transfer, sql-vs-nosql, system-design-study-path

#### `sd-split-web-and-db` — 수백만 사용자로 키우기 ②: 웹 서버와 DB 나누기

- 요약: 웹 앱과 DB가 한 서버의 자원을 다투는 문제를 DB 분리로 푼다. 분리 뒤 쿼리마다 붙는 왕복 시간을 직접 재고, 관계형과 NoSQL을 고르는 기준, 더 큰 서버와 더 많은 서버의 차이를 정리한다.
- 태그: System Design, Scalability, Database, PostgreSQL, Performance
- 키워드: 데이터 계층, DB 서버 분리
- 길이: 375줄
- 소제목: 같은 집에 살면 생기는 다툼 / 웹 계층과 데이터 계층으로 나눈다 / 옮기는 일은 주소 한 줄이다 / 대신 쿼리마다 길을 건넌다 / 연결도 이제 세어야 한다 / DB를 옮기는 김에 종류도 고른다 / 더 큰 서버냐, 더 많은 서버냐 / 나눈 뒤에 자주 하는 실수 / 이어서 읽을 글 / 면접에서 나올 만한 질문
- 직접 링크 →: sd-start-single-server, sd-load-balancer-stateless, sd-db-replication-intro, sd-cache-and-cdn-tier, sd-multi-datacenter, sd-queue-logging-automation, sd-sharding-intro, vpc-subnets-route-tables, security-groups-nacl, postgres-connections-pg-hba, sd-latency-numbers, n-plus-one-queries, connection-pool, db-types-overview, db-type-relational, db-type-key-value, mongodb-document-model, scaling-horizontal-vertical, timeouts
- 키워드 백링크 →: db-type-wide-column, db-architecture-by-scale, high-availability, encryption-in-transit, db-type-graph, pattern-proxy, vpc-basics, sql-batch-timeout-pool, redis-basics, sql-query-rewrite, dns
- 이 글로 오는 글 ←: backend-engineer-roadmap, exponential-backoff-jitter, sd-cache-and-cdn-tier, sd-db-replication-intro, sd-load-balancer-stateless, sd-multi-datacenter, sd-queue-logging-automation, sd-sharding-intro, sd-start-single-server, system-design-study-path

#### `sd-start-single-server` — 수백만 사용자로 키우기 ①: 서버 한 대로 시작하기

- 요약: 맛집 리뷰 앱을 서버 한 대로 띄우고 주소가 DNS를 거쳐 서버에 닿는 길을 따라간다. 무거운 요청 하나, 배포 재시작, 디스크 한 장이 각각 어떻게 서비스를 무너뜨리는지 직접 재현하고 언제 한 대를 넘어서야 하는지 계산한다.
- 태그: System Design, Scalability, Architecture, DNS, Backend
- 키워드: 단일 서버 구성, 서버 한 대
- 길이: 426줄
- 소제목: 주소를 치면 어디로 가나 / 실제로 요청을 보내 보면 / 웹과 앱은 받는 모양이 다르다 / 한 대에 다 있으면 편한 것들 / 가장 먼저 무너지는 곳 1: 무거운 요청 하나 / 가장 먼저 무너지는 곳 2: 서버가 꺼지는 순간 / 가장 먼저 무너지는 곳 3: 디스크 한 장에 모든 데이터 / 한 대로 얼마나 버틸까 계산해 보기 / 처음부터 크게 만들면 안 되나 / 현장에서 한 대짜리 서버가 아플 때 / 이어서 읽을 글 / 면접에서 나올 만한 질문
- 직접 링크 →: sd-split-web-and-db, sd-load-balancer-stateless, sd-db-replication-intro, sd-cache-and-cdn-tier, sd-multi-datacenter, sd-queue-logging-automation, sd-sharding-intro, dns, api-versioning, sd-capacity-estimation, event-loop, backup-strategy
- 키워드 백링크 →: sd-interview-framework, high-availability, sd-object-storage-architecture, db-replication-sharding
- 이 글로 오는 글 ←: acid-transactions, acid-vs-base, api-scaling-ladder, backend-engineer-roadmap, caching-strategies, cloud-cost-optimization, consistent-hashing, cron-jobs, curl-for-debugging, db-partitioning, db-performance-map, db-replication-sharding, db-sharding, db-type-embedded, db-type-graph, db-type-newsql, db-type-time-series, db-type-wide-column, dhcp, disaster-recovery, health-checks, http-status-codes, layered-architecture, linux-grep-awk-sed, load-balancer-basics, mongodb-document-model, network-troubleshooting-by-layer, nodejs-server-runtime, osi-in-practice, percentile-latency, postgres-roles-security, race-conditions, rate-limiting-in-practice, redis-basics, redis-persistence-ha, rolling-deployment, router-vs-switch, scaling-horizontal-vertical, sd-autocomplete-trie, sd-cache-and-cdn-tier, sd-capacity-estimation, sd-chat-connections, sd-chat-message-storage, sd-db-replication-intro, sd-email-storage-search, sd-file-sync-block-upload, sd-hotel-inventory-scaling, sd-interview-framework, sd-kv-store-partition-replication, sd-latency-numbers, sd-leaderboard-scaling, sd-leaderboard-sorted-set, sd-load-balancer-stateless, sd-metrics-collection, sd-mq-consumer-groups, sd-mq-storage-partitions, sd-multi-datacenter, sd-music-streaming, sd-news-feed-publishing, sd-notification-system, sd-object-storage-architecture, sd-proximity-service, sd-queue-logging-automation, sd-sharding-intro, sd-split-web-and-db, sd-stock-exchange-low-latency, sd-url-shortener-api-redirect, sd-video-upload-transcoding, sd-web-crawler-architecture, system-design-study-path, tail-latency, token-login, traffic-shaping-qos, youtube-url-to-video

### Programming › System Design › 설계 사례 (`programming/system-design/case-studies`)

#### `sd-ad-click-exactly-once` — 광고 클릭 집계 설계 ②: 중복 없이 한 번만 세기와 대사

- 요약: 같은 클릭이 두 번 들어오는 두 길을 실제로 프로세스를 죽여 재현하고, click_id 거르기와 결과·오프셋 한 트랜잭션, 덮어쓰기로 막는다. 스냅샷 복구, 원본으로 다시 세는 대사, 카파 아키텍처의 재계산, 몰리는 광고의 키 쪼개기까지 다룬다.
- 태그: System Design, Messaging, Distributed Systems, Transaction, Node.js
- 키워드: 카파 아키텍처, 람다 아키텍처
- 길이: 376줄
- 소제목: 노드 하나가 죽었다 살아나면 / 같은 클릭이 두 번 오는 길은 둘이다 / 클릭마다 번호를 붙여 거른다 / 오프셋을 언제 저장하나 / 결과와 책갈피를 한 곳에 둔다 / 더하지 말고 덮어쓰면 / 메모리에 있던 칸은 스냅샷으로 지킨다 / 하루가 끝나면 원본으로 다시 센다 / 다시 계산하는 길을 하나로 둔다 / 광고 하나에 클릭이 몰리면 / 집계가 맞는지 지켜보는 숫자 / 다음에 읽을 글 / 면접에서 나올 만한 질문
- 직접 링크 →: sd-ad-click-stream-windows, sd-hotel-double-booking, message-delivery-semantics, idempotency-key, kafka-basics, bloom-filter, batch-processing, hyperloglog, sd-payment-reliability
- 키워드 백링크 →: db-type-embedded, postgres-architecture, http-methods
- 이 글로 오는 글 ←: sd-ad-click-stream-windows, sd-hotel-double-booking, sd-music-streaming, system-design-study-path

#### `sd-ad-click-stream-windows` — 광고 클릭 집계 설계 ①: 이벤트 시간, 워터마크, 윈도

- 요약: 하루 10억 클릭을 1분 단위로 미리 세는 스트림 집계를 설계한다. 처리 시간으로 세면 늦은 클릭이 다음 칸으로 밀리는 것을 확인하고, 워터마크와 허용 지연으로 정확성과 지연 사이를 숫자로 고르며, 텀블링과 미끄러지는 창으로 상위 N개를 만든다.
- 태그: System Design, Messaging, Distributed Systems, Node.js
- 키워드: 이벤트 시간, 텀블링 윈도, 허용 지연, 광고 클릭 집계
- 길이: 368줄
- 소제목: 클릭 한 번에 행 하나로 시작하면 / 무엇을 얼마나 세나 / 원본과 집계본을 둘 다 남긴다 / 흐르는 데이터를 흐르는 채로 센다 / 나눠 세고 다시 모은다 / 클릭한 시각과 받은 시각은 다르다 / 워터마크는 이만큼 기다렸으면 닫는다는 약속이다 / 얼마나 기다릴지는 숫자로 고른다 / 늦게 온 이벤트를 버리지 않는 법 / 창의 모양은 넷이다 / 현장에서 시간 문제가 드러나는 순간 / 다음에 읽을 글 / 면접에서 나올 만한 질문
- 직접 링크 →: sd-metrics-storage-alerting, sd-ad-click-exactly-once, sd-hotel-double-booking, sd-capacity-estimation, db-type-columnar-olap, sd-metrics-collection, kafka-basics, clock-skew, count-min-sketch, message-delivery-semantics
- 키워드 백링크 →: db-type-wide-column, sd-object-storage-architecture, sd-mq-storage-partitions, batch-processing
- 이 글로 오는 글 ←: sd-ad-click-exactly-once, sd-hotel-double-booking, sd-metrics-collection, sd-metrics-storage-alerting, system-design-study-path

#### `sd-autocomplete-data-pipeline` — 검색어 자동완성 설계 ②: 검색 기록을 모아 트라이로 굽기

- 요약: 검색 로그 100만 줄을 정규화하고 사람 수로 세어 접두사 표로 만들고, 새 버전으로 올린 뒤 포인터 하나로 바꿔 끼운다. 봇과 개인 정보 거르기, 해시로 나눠 세기, 접두사 샤딩의 치우침까지 다룬다.
- 태그: System Design, Redis, Search, Backend
- 키워드: 검색 로그 집계, 트라이 DB, 접두사 샤딩
- 길이: 358줄
- 소제목: 검색할 때마다 트라이를 고치면 / 검색 로그는 덧붙이기만 한다 / 같은 검색어를 하나로 센다 / 몇 번이 아니라 몇 명이 찾았나 / 한 대로 안 되면 조각으로 나눠 센다 / 얼마나 자주 굽나 / 트라이를 어디에 두나 / 새 버전으로 한 번에 바꾼다 / 접두사로 나눠 여러 서버에 / 파이프라인이 고장 나면 보이는 것 / 검색 로그 집계하기 / 다음에 읽을 글 / 면접에서 나올 만한 질문
- 직접 링크 →: sd-autocomplete-trie, sd-video-upload-transcoding, sd-queue-logging-automation, kafka-basics, batch-processing, lossy-counting, count-min-sketch, consistent-hashing, sd-sharding-intro
- 키워드 백링크 →: hyperloglog, db-type-key-value, sd-object-storage-architecture, sqld-group-by-having, redis-basics, db-modeling-normalization
- 이 글로 오는 글 ←: sd-autocomplete-trie, sd-music-streaming, sd-video-upload-transcoding, system-design-study-path

#### `sd-autocomplete-trie` — 검색어 자동완성 설계 ①: 트라이와 노드마다 미리 고른 상위 5개

- 요약: LIKE 접두사 검색이 짧은 접두사에서 비싼 이유에서 출발해 트라이, 노드마다 상위 k개를 적어 두는 최적화, 한글 입력 중 자모 처리, 디바운스와 늦게 온 응답 버리기까지 직접 재 본다.
- 태그: System Design, Algorithm, Data Structure, Search, Backend
- 키워드: Trie, 트라이 자료구조, 검색어 자동완성, 노드별 상위 k개
- 길이: 375줄
- 소제목: 빈도표 하나와 LIKE 하나로 시작하기 / 접두사를 길로 바꾸는 트라이 / 접두사 아래를 전부 뒤지면 / 노드마다 상위 5개를 적어 둔다 / 한글은 치는 동안 글자가 바뀐다 / 키를 누를 때마다 요청을 보내지 않는다 / 서버 쪽 경로와 거르는 단계 / 추천이 이상하다는 문의가 오면 / 트라이로 상위 k개 찾기 / 다음에 읽을 글 / 면접에서 나올 만한 질문
- 직접 링크 →: sd-chat-presence, sd-autocomplete-data-pipeline, sd-video-upload-transcoding, http-caching-cdn, debounce-throttle, browser-fetch, elasticsearch-inverted-index, ds-trie
- 키워드 백링크 →: sd-start-single-server, lossy-counting, global-rollout-localization, osi-in-practice, db-modeling-normalization
- 이 글로 오는 글 ←: data-structures-overview, debounce-throttle, ds-trie, sd-autocomplete-data-pipeline, sd-chat-connections, sd-chat-message-storage, sd-chat-presence, sd-music-streaming, sd-video-upload-transcoding, system-design-study-path

#### `sd-chat-connections` — 채팅 시스템 설계 ①: 폴링에서 WebSocket까지, 연결을 붙잡는 채팅 서버

- 요약: 같은 10초를 짧은 폴링, 롱 폴링, WebSocket으로 받아 요청 수와 지연을 재 보고, 연결을 쥔 채팅 서버가 상태를 갖게 되는 이유를 따라간다. 서비스 디스커버리로 서버를 배정하고, 다른 서버의 친구에게 넘기고, 서버 한 대가 죽었을 때까지 다룬다.
- 태그: System Design, WebSocket, Backend, Network
- 키워드: 상태 있는 채팅 서버, 채팅 서버 배정, 접속 위치 표
- 길이: 407줄
- 소제목: 서버 한 대로 만든 단체방 / 묻기만 하는 앱과 붙잡아 두는 응답 / 같은 10초를 세 방법으로 받아 보기 / 한 번 열고 계속 쓰는 WebSocket / 연결을 쥔 서버는 상태를 가진다 / 어느 채팅 서버에 붙을지 정하기 / 다른 서버에 있는 친구에게 보내기 / 채팅 서버 한 대가 죽으면 / 연결 수에서 서버 수까지 어림하기 / 현장에서 연결 문제를 좁히는 순서 / 다음에 읽을 글 / 면접에서 나올 만한 질문
- 직접 링크 →: sd-news-feed-retrieval, sd-chat-message-storage, sd-chat-presence, sd-autocomplete-trie, realtime-communication, long-polling, websocket-deep-dive, sd-load-balancer-stateless, sd-notification-system, service-discovery, pub-sub, sd-capacity-estimation
- 키워드 백링크 →: osi-in-practice, sd-start-single-server, redis-basics, db-type-key-value
- 이 글로 오는 글 ←: api-styles-overview, sd-chat-message-storage, sd-chat-presence, sd-maps-location-eta, sd-nearby-friends, sd-news-feed-publishing, sd-news-feed-retrieval, system-design-study-path, websocket-deep-dive

#### `sd-chat-message-storage` — 채팅 시스템 설계 ②: 메시지 저장소, 방마다 매기는 번호, 기기별 동기화

- 요약: 전체 일련번호 테이블에서 조용한 방이 144ms 걸리던 쿼리를 (방, 방 안 번호) 키로 0.1ms로 줄이고, 그 키를 그대로 키-값 저장소로 옮긴다. 시계 대신 방마다 번호를 매기는 이유, 단체방 복사와 한 곳 읽기, clientMsgId 중복 제거, 기기마다 커서로 따라잡는 법까지 정리한다.
- 태그: System Design, NoSQL, Redis, PostgreSQL, Database
- 키워드: 방마다 매기는 번호, 채팅 기록 저장소, 기기별 커서
- 길이: 458줄
- 소제목: 표 하나에 다 쌓던 첫 버전 / 채팅 기록이 읽히는 모양 / 조용한 방이 느려지는 이유 / 키-값 저장소로 옮길 때 / 메시지 번호가 지켜야 할 것 / 단체방은 복사할까, 한 곳에서 읽을까 / 메시지 하나가 저장되고 전달되기까지 / 휴대폰과 노트북이 각자 따라잡기 / 커서를 함부로 올리면 빠진다 / 현장에서 만나는 증상 / 다음에 읽을 글 / 면접에서 나올 만한 질문
- 직접 링크 →: sd-chat-connections, sd-chat-presence, sd-autocomplete-trie, db-type-wide-column, sd-kv-store-partition-replication, sd-unique-id-generator, sd-news-feed-publishing, idempotency-key, message-delivery-semantics, sd-kv-store-failure-handling
- 키워드 백링크 →: db-sharding, realtime-communication, db-type-key-value, sd-start-single-server, db-type-relational, sd-mq-storage-partitions, scaling-horizontal-vertical, redis-basics, pub-sub
- 이 글로 오는 글 ←: sd-chat-connections, sd-chat-presence, system-design-study-path

#### `sd-chat-presence` — 채팅 시스템 설계 ③: 접속 상태 표시, 하트비트와 상태 팬아웃

- 요약: 연결이 닫힐 때만 오프라인으로 바꾸면 터널에 들어간 친구가 한참 초록 점으로 남는다. 하트비트와 기준 시간으로 상태를 정하고, Redis 만료 키와 발행·구독으로 친구에게 알리며, 친구가 수천 명일 때 팬아웃을 줄이는 법까지 다룬다.
- 태그: System Design, Redis, WebSocket, Backend
- 키워드: 접속 상태 표시, 하트비트 기준 시간, 상태 팬아웃
- 길이: 313줄
- 소제목: 연결이 있으면 온라인이라는 규칙 / 살아 있다고 주기적으로 알리기 / 간격과 기준 시간을 고르는 법 / 상태를 어디에 적어 두나 / 친구들에게 바뀐 상태 알리기 / 친구가 5,000명이거나 방이 10만 명이면 / 여러 기기와 마지막 접속 시각 / 접속 상태가 틀리게 보일 때 / 다음에 읽을 글 / 면접에서 나올 만한 질문
- 직접 링크 →: sd-chat-connections, sd-chat-message-storage, sd-autocomplete-trie, websocket-deep-dive, pub-sub, sd-nearby-friends
- 키워드 백링크 →: realtime-communication, browser-fetch, db-type-key-value, redis-basics, dns
- 이 글로 오는 글 ←: sd-autocomplete-trie, sd-chat-connections, sd-chat-message-storage, sd-nearby-friends, system-design-study-path

#### `sd-email-protocols` — 이메일 서비스 설계 ①: SMTP, IMAP, MX 레코드와 발신자 인증

- 요약: 메일이 SMTP로 서버 사이를 오가고 받는 서버를 DNS의 MX로 찾는 과정을 로컬 SMTP 서버와 직접 대화하며 본다. 봉투와 편지의 차이, 4xx와 5xx, POP3와 IMAP, 사칭을 막는 SPF·DKIM·DMARC, 스팸함에 가지 않기 위한 발송 운영을 다룬다.
- 태그: System Design, Network, DNS, Security, Messaging
- 키워드: SMTP, MX 레코드, SPF, DKIM, DMARC
- 길이: 404줄
- 소제목: 메일 한 통이 지나는 길 / 받는 서버는 DNS의 MX가 알려 준다 / SMTP 대화 한 번 / 첨부 파일은 글자로 바뀌어 실린다 / 꺼내 읽기: POP3, IMAP, 그리고 HTTP / 아무나 남의 주소를 적을 수 있다 / 스팸함으로 가지 않으려면 / 서비스로 키우면: 보내는 쪽의 줄 / 메일이 안 간다는 문의가 오면 / 다음 글에서 메일을 저장한다 / 면접에서 나올 만한 질문
- 직접 링크 →: sd-hotel-inventory-scaling, sd-email-storage-search, sd-object-storage-architecture, dns, base64, realtime-communication, sd-notification-reliability
- 키워드 백링크 →: db-modeling-normalization
- 이 글로 오는 글 ←: dead-letter-queue, dns, k8s-configmap, message-queue-basics, network-layers-overview, pattern-factory-method, sd-email-storage-search, sd-hotel-double-booking, sd-hotel-inventory-scaling, sd-notification-system, system-design-study-path, upper-layers-session-presentation-app

#### `sd-email-storage-search` — 이메일 서비스 설계 ②: 메일 저장소와 검색 색인

- 요약: 받은 메일을 메타데이터와 본문·첨부로 나누고 user_id로 파티션한다. 안 읽은 메일은 부분 인덱스로, 대화는 References 헤더로 묶고, 첨부는 내용 해시로 한 번만 저장한다. 사용자별 역색인으로 검색하면서 한국어 조사 문제와 비동기 색인 갱신을 다룬다.
- 태그: System Design, Database, PostgreSQL, Search, NoSQL
- 키워드: 메일 메타데이터, 메일 검색 색인, 첨부 파일 중복 제거
- 길이: 422줄
- 소제목: 메일 한 통을 성격대로 나눠 담는다 / 사용자 한 명의 메일은 한곳에 / 안 읽은 메일만 보여 달라 / 답장끼리 대화로 묶는다 / 첨부 파일은 객체 저장소로 / 내 메일함 안에서 찾기 / 색인은 쓰기 때 비용을 낸다 / 메일은 잃으면 안 된다 / 다음 장: 객체 저장소를 직접 만든다 / 면접에서 나올 만한 질문
- 직접 링크 →: sd-email-protocols, sd-object-storage-architecture, sd-capacity-estimation, sd-unique-id-generator, db-type-wide-column, db-index-design, db-keys-denormalization, encryption-at-rest, elasticsearch-inverted-index, sd-kv-store-write-read-path, sd-multi-datacenter, db-consistency-cap
- 키워드 백링크 →: sd-start-single-server, db-type-relational, sd-mq-storage-partitions, db-partitioning, db-modeling-normalization
- 이 글로 오는 글 ←: sd-email-protocols, sd-object-storage-architecture, system-design-study-path

#### `sd-file-sync-block-upload` — 파일 동기화 설계 ①: 블록으로 나눠 바뀐 곳만 올리기

- 요약: 파일을 블록으로 자르고 내용 해시를 이름으로 써서 서버에 없는 블록만 보낸다. 끼워 넣기에 약한 고정 블록의 한계와 내용 기반 나누기, 압축과 암호화 순서, 메타데이터 DB를 다룬다.
- 태그: System Design, Distributed Systems, PostgreSQL, Performance
- 키워드: 델타 동기화, 내용 기반 나누기, 블록 서버
- 길이: 474줄
- 소제목: 폴더 하나와 서버 한 대로 시작하기 / 파일을 4MiB 블록으로 자른다 / 고친 곳만 다시 올린다 / 앞에 한 글자를 넣으면 전부 밀린다 / 압축은 블록 종류를 보고, 암호화는 그다음에 / 메타데이터 DB에 적는 것들 / 올리기 한 번의 순서 / 다른 기기가 새 버전을 받아 조립한다 / 서버가 죽으면 무엇이 남나 / 다음 글: 두 기기가 같은 파일을 고치면 / 면접에서 나올 만한 질문
- 직접 링크 →: sd-video-streaming-cost, sd-file-sync-conflicts, sd-proximity-service, sd-video-upload-transcoding, sd-load-balancer-stateless, sd-sharding-intro, rsync-algorithm, sd-db-replication-intro
- 키워드 백링크 →: sd-start-single-server, db-type-relational
- 이 글로 오는 글 ←: rsync-algorithm, sd-file-sync-conflicts, sd-object-storage-architecture, sd-object-storage-durability, sd-video-streaming-cost, sd-video-upload-transcoding, system-design-study-path

#### `sd-file-sync-conflicts` — 파일 동기화 설계 ②: 충돌, 변경 알림, 저장 공간 아끼기

- 요약: 기준 버전을 들고 확정해서 충돌을 알아채고, 아무것도 버리지 않도록 충돌 사본을 남긴다. 변경은 커서가 붙은 기록과 롱 폴링으로 알리고, 블록은 참조 수를 세어 안전하게 지운다.
- 태그: System Design, Distributed Systems, Concurrency, PostgreSQL
- 키워드: 충돌 사본, 블록 참조 수, 전체 재동기화
- 길이: 369줄
- 소제목: 같은 파일을 두 곳에서 고쳤다 / 기준 버전을 들고 확정한다 / 같은 순간에 도착한 두 확정 / 충돌을 사람에게 어떻게 내미나 / 데스크톱이 저장한 걸 노트북이 바로 알려면 / 알림 서버가 죽으면 / 버전이 쌓이면 블록도 쌓인다 / 버전을 몇 개나 남길까 / 같은 블록은 한 번만, 다만 범위를 정해서 / 다음 장: 파일에서 위치로 / 면접에서 나올 만한 질문
- 직접 링크 →: sd-file-sync-block-upload, sd-proximity-service, clock-skew, optimistic-locking, sd-kv-store-versioning, git-merge-conflict, crdt, realtime-communication, long-polling, cloud-cost-optimization
- 키워드 백링크 →: git-branch-merge, db-locking-deadlock
- 이 글로 오는 글 ←: sd-file-sync-block-upload, sd-proximity-service, system-design-study-path

#### `sd-hotel-double-booking` — 호텔 예약 시스템 설계 ①: 같은 방이 두 번 팔리지 않게

- 요약: 같은 손님의 두 번 누르기는 주문서를 열 때 발급한 예약 id를 기본 키로 두어 막는다. 서로 다른 손님이 마지막 방을 동시에 잡는 경합은 PostgreSQL에서 재현하고, FOR UPDATE, 버전 검사, CHECK 제약을 같은 조건에서 돌려 결과와 응답 시간을 비교한다.
- 태그: System Design, Database, PostgreSQL, Concurrency, Transaction
- 키워드: 이중 예약, 더블 부킹
- 길이: 507줄
- 소제목: 가장 작은 예약 시스템 / 같은 손님이 두 번 누른다 / 마지막 세 방을 열 명이 노린다 / 줄을 세운다: SELECT FOR UPDATE / 버전을 보고 다시 한다: 낙관적 잠금 / 넘치면 DB가 거절한다: CHECK 제약 / 같은 조건에서 네 가지를 돌려 보면 / 이미 넘친 예약을 찾는 법 / 다음 글에서 재고 테이블을 키운다 / 면접에서 나올 만한 질문
- 직접 링크 →: sd-ad-click-exactly-once, sd-hotel-inventory-scaling, sd-email-protocols, idempotency-key, race-conditions, db-transaction-isolation, pessimistic-locking, db-locking-deadlock, optimistic-locking, exponential-backoff-jitter, sd-db-replication-intro
- 키워드 백링크 →: db-migration-tools, gateway, sd-ad-click-stream-windows, postgres-functions-triggers, sql-basics, postgres-getting-started, http-methods
- 이 글로 오는 글 ←: sd-ad-click-exactly-once, sd-ad-click-stream-windows, sd-hotel-inventory-scaling, system-design-study-path

#### `sd-hotel-inventory-scaling` — 호텔 예약 시스템 설계 ②: 객실 유형 재고, 캐시, 서비스 사이의 일관성

- 요약: 방이 아니라 객실 유형을 날짜별로 세는 재고 테이블을 미리 채우고, 10% 초과 예약을 CHECK 제약으로 넣는다. 결제를 기다리다 만료된 예약 풀기, 사가로 결제 엮기, hotel_id 샤딩, CDC로 따라가는 재고 캐시의 지연까지 다룬다.
- 태그: System Design, Database, PostgreSQL, Redis, Cache, MSA
- 키워드: 객실 유형 재고, 오버부킹, 초과 예약
- 길이: 471줄
- 소제목: 방이 아니라 객실 유형을 판다 / 날짜마다 한 줄씩 미리 만든다 / 3박 예약은 세 밤을 모두 본다 / 방을 잡아 두고 결제를 기다린다 / 서비스를 나누면 트랜잭션이 끊긴다 / 트래픽이 1,000배가 되면 / 남은 방 수를 캐시에 올린다 / 다음 장: 예약에서 이메일로 / 면접에서 나올 만한 질문
- 직접 링크 →: sd-hotel-double-booking, sd-email-protocols, db-index, microservices, saga-pattern, distributed-transactions-2pc, transactional-outbox, sd-load-balancer-stateless, sd-sharding-intro, caching-strategies, cache-invalidation
- 키워드 백링크 →: db-type-columnar-olap, sd-start-single-server, redis-basics, resilience-patterns, mongodb-document-model, acid-transactions, http-methods, dns
- 이 글로 오는 글 ←: sd-email-protocols, sd-hotel-double-booking, system-design-study-path

#### `sd-kv-store-failure-handling` — 키-값 저장소 설계 ③: 죽은 노드 알아채기와 대신 받아 두기

- 요약: 가십 프로토콜로 노드의 생사를 퍼뜨리고, 담당이 죽으면 느슨한 쿼럼과 힌트로 쓰기를 대신 받아 둔다. 느슨한 쿼럼이 W + R > N의 약속을 깨는 장면과 머클 트리 repair, 운영에서 보는 순서까지 다룬다.
- 태그: System Design, Distributed Systems, Database, NoSQL, Resilience
- 키워드: 가십 프로토콜, 느슨한 쿼럼, 하트비트 카운터
- 길이: 383줄
- 소제목: 한 노드의 말만 믿으면 안 된다 / 모두가 모두를 확인하면 메시지가 폭발한다 / 소문처럼 퍼뜨리는 가십 프로토콜 / 카운터가 멈춘 노드를 표시한다 / 담당이 죽었을 때 쓰기를 대신 받아 두기 / 느슨한 쿼럼이 깨뜨리는 약속 / 오래 죽어 있던 노드 따라잡기 / 데이터 센터 하나가 통째로 멈추면 / 노드 하나가 이상할 때 보는 순서 / 다음에 읽을 글 / 면접에서 나올 만한 질문
- 직접 링크 →: sd-kv-store-versioning, sd-kv-store-write-read-path, sd-kv-store-partition-replication, network-partitions, eventual-consistency, merkle-tree, sd-multi-datacenter, leader-election
- 키워드 백링크 →: db-type-wide-column, bloom-filter
- 이 글로 오는 글 ←: eventual-consistency, sd-chat-message-storage, sd-kv-store-partition-replication, sd-kv-store-versioning, sd-kv-store-write-read-path, system-design-study-path

#### `sd-kv-store-partition-replication` — 키-값 저장소 설계 ①: 링으로 나누고 쿼럼으로 복제하기

- 요약: 서버 한 대짜리 해시 테이블에서 출발해, 키를 링으로 나누고 서로 다른 서버 N대에 복제하는 선호 목록을 만든다. W와 R을 고르면 일관성뿐 아니라 꼬리 지연과 견디는 고장 수가 함께 정해지는 것을 시뮬레이션으로 확인한다.
- 태그: System Design, Distributed Systems, Database, NoSQL, Node.js
- 키워드: 선호 목록, 코디네이터 노드, 쓰기 쿼럼
- 길이: 440줄
- 소제목: 서버 한 대, 해시 테이블 하나로 시작하면 / 무엇을 만들지 먼저 좁힌다 / 키를 서버에 나눠 주는 규칙 / 같은 키를 세 대에 둔다 / 세 대 모두 기다려야 하나: N, W, R / W를 정하면 기다리는 시간도 정해진다 / 실제 저장소에서는 이 숫자를 어디서 고르나 / 몇 대가 필요한지 직접 세 보기 / 쿼럼을 맞춰도 남는 틈 / 다음에 읽을 글 / 면접에서 나올 만한 질문
- 직접 링크 →: sd-rate-limiter-design, sd-kv-store-versioning, sd-kv-store-failure-handling, sd-kv-store-write-read-path, db-type-key-value, sd-interview-framework, sd-object-storage-architecture, db-consistency-cap, raft-consensus, consistent-hashing, sd-multi-datacenter, eventual-consistency, db-type-wide-column, sd-capacity-estimation, consistency-models, sd-sharding-intro, db-sharding
- 키워드 백링크 →: ds-hash-map, sd-start-single-server, tail-latency, vpc-basics, redis-basics, db-partitioning, caching-strategies
- 이 글로 오는 글 ←: sd-chat-message-storage, sd-kv-store-failure-handling, sd-kv-store-versioning, sd-kv-store-write-read-path, sd-mq-replication, sd-object-storage-architecture, sd-object-storage-durability, sd-rate-limiter-design, sd-url-shortener-api-redirect, system-design-study-path

#### `sd-kv-store-versioning` — 키-값 저장소 설계 ②: 동시에 고친 값과 벡터 시계

- 요약: 장바구니 하나를 두 기기에서 동시에 고치면 마지막 쓰기 승리는 한쪽을 조용히 잃는다. 벡터 시계로 앞뒤와 동시를 가려 형제 버전을 남기고, 합치는 규칙과 시계 크기, Dotted Version Vector까지 직접 돌려 본다.
- 태그: System Design, Distributed Systems, Database, NoSQL, Node.js
- 키워드: 형제 버전, Dotted Version Vector, 버전 벡터
- 길이: 387줄
- 소제목: 같은 키에 쓰기 두 개가 엇갈리면 / 시각을 붙여 늦은 쪽을 남기면 / 값마다 어디서 왔는지 적어 둔다 / 서버마다 칸을 하나씩 둔 시계 / 형제를 합치는 일은 누가 하나 / 칸에 누구 이름을 적을까 / 시계가 길어지면 잘라야 한다 / 어떤 방법을 고르나 / 형제 정리 직접 짜 보기 / 현장에서 버전 문제가 드러나는 모양 / 다음에 읽을 글 / 면접에서 나올 만한 질문
- 직접 링크 →: sd-kv-store-partition-replication, sd-kv-store-failure-handling, sd-kv-store-write-read-path, clock-skew, optimistic-locking, crdt, eventual-consistency
- 키워드 백링크 →: db-type-wide-column, db-type-key-value, db-locking-deadlock, db-type-relational
- 이 글로 오는 글 ←: clock-skew, db-consistency-cap, eventual-consistency, merkle-tree, sd-file-sync-conflicts, sd-kv-store-failure-handling, sd-kv-store-partition-replication, sd-kv-store-write-read-path, system-design-study-path

#### `sd-kv-store-write-read-path` — 키-값 저장소 설계 ④: 커밋 로그, 멤테이블, SSTable로 쓰고 읽기

- 요약: 노드 한 대 안에서 쓰기가 커밋 로그와 멤테이블을 거쳐 SSTable이 되고, 읽기가 블룸 필터로 열 파일을 고르는 과정을 80줄짜리 LSM으로 직접 만든다. fsync 비용과 그룹 커밋, SIGKILL 뒤 복구, 컴팩션의 증폭 비용을 실제 출력으로 본다.
- 태그: System Design, Database, NoSQL, Data Structure, Node.js
- 키워드: 멤테이블, 그룹 커밋, 읽기 증폭
- 길이: 403줄
- 소제목: 파일 가운데를 고치는 쓰기는 느리다 / 먼저 로그 끝에 한 줄 적는다 / 메모리에서는 정렬해 둔다: 멤테이블 / 가득 차면 정렬된 파일로 내린다: SSTable / 직접 만든 작은 LSM / 읽기는 새것부터 뒤진다 / 프로세스가 죽어도 로그가 남는다 / 파일이 쌓이면 합친다 / 읽기가 느려졌다는 신고가 오면 / 네 편을 한 장에 모으면 / 다음에 읽을 글 / 면접에서 나올 만한 질문
- 직접 링크 →: sd-kv-store-failure-handling, sd-unique-id-generator, sd-kv-store-partition-replication, sd-kv-store-versioning, db-type-wide-column, db-index, bloom-filter, db-type-key-value
- 키워드 백링크 →: db-type-embedded, sd-leaderboard-sorted-set, db-type-relational, merkle-tree, clock-skew, db-index-pitfalls
- 이 글로 오는 글 ←: bloom-filter, db-type-wide-column, mysql-innodb-basics, sd-email-storage-search, sd-kv-store-failure-handling, sd-kv-store-partition-replication, sd-kv-store-versioning, sd-maps-location-eta, sd-object-storage-versioning-multipart, sd-unique-id-generator, sd-wallet-event-sourcing, system-design-study-path

#### `sd-leaderboard-scaling` — 게임 리더보드 설계 ②: 샤드로 나누기, 동점 깨기, 다시 만들기

- 요약: 순위표 키 하나는 Redis Cluster가 나눠 주지 않는다. 점수 구간 샤드와 해시 샤드의 스캐터-개더를 Redis 네 대로 비교하고, 합성 점수로 동점을 깨고, 원본에서 순위표를 다시 만든다.
- 태그: System Design, Redis, Scalability, Distributed Systems, Backend
- 키워드: 점수 구간 샤딩, 스캐터-개더, 동점 깨기, 백분위 순위
- 길이: 400줄
- 소제목: 키 하나는 나눠지지 않는다 / 점수 구간으로 나누기 / 점수가 경계를 넘을 때 / 사용자 ID로 나누기 / 나눈 대가를 재 본다 / 먼저 도달한 사람이 위에 서게 / Redis 없이 NoSQL로 만든다면 / 다 잃었을 때 다시 만들기 / 나눈 뒤에 생기는 문의 / 샤드 결과를 직접 합쳐 보기 / 다음에 읽을 글 / 면접에서 나올 만한 질문
- 직접 링크 →: sd-leaderboard-sorted-set, sd-payment-flow, redis-cluster, sd-sharding-intro, sd-news-feed-retrieval
- 키워드 백링크 →: db-type-wide-column, db-type-key-value, js-array-transform, sd-start-single-server, sd-mq-storage-partitions, redis-basics
- 이 글로 오는 글 ←: sd-leaderboard-sorted-set, sd-payment-flow, system-design-study-path

#### `sd-leaderboard-sorted-set` — 게임 리더보드 설계 ①: Redis 정렬된 셋으로 상위 10명과 내 순위 구하기

- 요약: 테이블로 순위를 구하면 내 앞사람을 하나씩 세야 해서 하위권일수록 느려진다. Redis 정렬된 셋으로 옮겨 100만 명에서 상위 10명, 내 순위, 공동 순위, 중복 반영 막기를 직접 재 본다.
- 태그: System Design, Redis, Backend
- 키워드: 게임 리더보드, 스킵 리스트, 주변 순위
- 길이: 496줄
- 소제목: 테이블 하나로 만든 순위표 / 내 순위는 내 위에 몇 명이 있는지 세는 일 / 요구 사항을 숫자로 적는다 / 점수는 게임 서버만 올린다 / 정렬된 셋이 늘 줄 서 있는 이유 / 명령 네 개로 끝나는 순위표 / 0부터 세는 순위와 공동 순위 / 한 번에 다 꺼내면 모두가 멈춘다 / 화면에 이름을 붙이는 쪽 / 같은 판 결과가 두 번 오면 / 달이 바뀌고 Redis가 죽을 때 / 순위가 이상하다는 문의가 오면 / 숫자를 직접 어림해 보기 / 다음에 읽을 글 / 면접에서 나올 만한 질문
- 직접 링크 →: sd-object-storage-versioning-multipart, sd-leaderboard-scaling, sd-payment-flow, redis-basics, sd-news-feed-retrieval, idempotency-key, transactional-outbox, redis-persistence-ha
- 키워드 백링크 →: ds-hash-map, ds-linked-list, sd-start-single-server, sql-query-rewrite
- 이 글로 오는 글 ←: ds-binary-tree-bst, redis-basics, redis-memory-eviction, sd-kv-store-write-read-path, sd-leaderboard-scaling, sd-object-storage-architecture, sd-object-storage-durability, sd-object-storage-versioning-multipart, system-design-study-path

#### `sd-maps-location-eta` — 지도 서비스 설계 ②: 위치를 모으고 도착 시간을 고치기

- 요약: 위치를 묶어 보낼 때 줄어드는 요청과 전송량을 재고, 쓰기 중심 저장소와 Kafka 팬아웃, 맵 매칭, 조각별 중앙값 속도로 간선 무게를 바꿔 ETA와 경로를 다시 구한다. 사고 칸을 지날 사용자를 찾는 색인과 새 경로를 밀어 주는 길까지 다룬다.
- 태그: System Design, Geospatial, Kafka, Distributed Systems, Backend
- 키워드: 맵 매칭, 도착 예정 시간, 재경로, ETA 예측
- 길이: 371줄
- 소제목: 위치를 한 점씩 보내면 / 하루에 들어오는 점의 수 / 쓰기가 몰리는 저장소 / 한 번 받아 여러 곳으로 / GPS 점을 도로 위에 올린다 / 도로 조각마다 지금 속도를 구한다 / 길 안내 요청 하나가 거치는 곳 / 도착 시간은 조각 시간의 합에 예측을 더한다 / 막힌 길을 지나는 사람 찾기 / 새 경로를 앱까지 밀어 주는 길 / 다음 글 / 면접에서 나올 만한 질문
- 직접 링크 →: sd-maps-tiles-routing, sd-mq-storage-partitions, sd-proximity-service, sd-nearby-friends, sd-capacity-estimation, sd-kv-store-write-read-path, db-type-wide-column, eventual-consistency, kafka-basics, percentile-latency, sd-chat-connections, websocket-deep-dive
- 키워드 백링크 →: realtime-communication, pub-sub, db-type-relational, redis-basics, geohash, dns
- 이 글로 오는 글 ←: sd-maps-tiles-routing, sd-mq-storage-partitions, sd-nearby-friends, sd-proximity-service, system-design-study-path

#### `sd-maps-tiles-routing` — 지도 서비스 설계 ①: 타일로 그리고 그래프로 길 찾기

- 요약: 웹 메르카토르로 편 세계를 줌마다 넷으로 쪼개는 z/x/y 타일 계산, 버전을 붙여 CDN에 두는 정적 타일, 벡터 타일을 본다. 도로를 그래프로 보고 다익스트라와 A*를 직접 돌려 비교하고, 라우팅 타일과 단계별 타일로 큰 도로망을 다루는 법까지 다룬다.
- 태그: System Design, Algorithm, Geospatial, CDN
- 키워드: 지도 타일, 웹 메르카토르, 라우팅 타일, 다익스트라
- 길이: 421줄
- 소제목: 세계 지도를 그림 한 장으로 보내면 / 둥근 지구를 네모로 펴기 / 확대 단계마다 넷으로 쪼갠다 / 타일은 미리 그려 CDN에 둔다 / 저장 공간과 비어 있는 바다 / 그림 대신 도형을 보내는 벡터 타일 / 교차로는 점, 도로는 선 / 가까운 곳부터 확정하는 다익스트라 / 목적지 쪽으로 기울이는 A* / 그래프가 크면 타일로 자른다 / 먼 길은 굵은 도로만 본다 / 현장에서 길 찾기가 틀리는 순간 / 다음 글 / 면접에서 나올 만한 질문
- 직접 링크 →: sd-nearby-friends, sd-maps-location-eta, sd-proximity-service, http-caching-cdn, db-type-graph
- 키워드 백링크 →: grpc, ds-graph-bfs-dfs, sd-object-storage-architecture, ds-heap
- 이 글로 오는 글 ←: data-structures-overview, ds-graph-bfs-dfs, ds-heap, sd-maps-location-eta, sd-nearby-friends, sd-proximity-service, system-design-study-path

#### `sd-metrics-collection` — 지표 모니터링 시스템 설계 ①: pull과 push로 모으고 큐로 나르기

- 요약: 서버 1만 대, 시계열 1,000만 개의 지표를 모으는 쪽을 설계한다. pull과 push가 각각 어떻게 깨지는지 직접 돌려 보고, 수집기를 해시 링으로 나누고, 저장소가 멈춰도 잃지 않게 큐를 두고 파티션 키를 고른다.
- 태그: System Design, Observability, Messaging, Distributed Systems, Node.js
- 키워드: 지표 수집기, push 수집기, 지표 모니터링 시스템
- 길이: 427줄
- 소제목: 서버 한 대를 지켜볼 때는 스크립트 하나면 된다 / 무엇을 모으고 무엇은 안 모으나 / 점 하나에 담기는 것 / 다섯 부품으로 나눠 그린다 / 가지러 가거나, 보내 오거나 / 수집 목록은 서비스 디스커버리가 들고 있다 / 수집기 한 대가 다 못 읽는다 / push는 수집기를 로드 밸런서 뒤에 둔다 / 둘 중 하나를 고르는 기준 / 저장소가 멈추면 수집한 것도 사라진다 / 파티션 키를 이름으로만 고르면 / 어디서 미리 합칠까 / 현장에서 수집이 새는 자리 / 다음에 읽을 글 / 면접에서 나올 만한 질문
- 직접 링크 →: sd-mq-replication, sd-metrics-storage-alerting, sd-ad-click-stream-windows, metrics-types, monitoring-basics, prometheus-basics, structured-logging, distributed-tracing, db-type-time-series, sd-capacity-estimation, service-discovery, consistent-hashing, load-balancer-basics, k8s-daemonset, udp-and-quic, kafka-basics, sd-sharding-intro
- 키워드 백링크 →: sd-queue-logging-automation, db-type-key-value, sd-start-single-server, autoscaling, db-type-relational, sd-mq-storage-partitions, webhooks
- 이 글로 오는 글 ←: sd-ad-click-stream-windows, sd-metrics-storage-alerting, sd-mq-consumer-groups, sd-mq-replication, system-design-study-path

#### `sd-metrics-storage-alerting` — 지표 모니터링 시스템 설계 ②: 1년치를 줄여 담고, 묻고, 알림 보내기

- 요약: 1년치 지표를 원본·1분·1시간 세 해상도로 나눠 담는 작은 저장소를 만들고, 패널 폭에 맞춰 읽을 단계를 고르는 조회와 칸 단위 캐시를 재 본다. 알림 상태를 바깥에 두고 같은 사건 키로 중복을 거르는 법, 알림 시스템 자체를 지켜보는 법까지 다룬다.
- 태그: System Design, Observability, Database, Cache, Node.js
- 키워드: 알림 저장소, 알림 평가기, 보관 단계
- 길이: 396줄
- 소제목: 원본을 1년 동안 다 두면 / 쓰기는 쉬지 않고 읽기는 몰려서 온다 / 1년을 세 해상도로 나눠 담는다 / 스파이크는 평균 속에 묻힌다 / 패널 폭이 읽을 해상도를 정한다 / 조회 서비스 앞에 캐시를 둔다 / 알림은 규칙을 주기적으로 묻는 일이다 / 알림 상태를 어디에 두나 / 알림 시스템이 죽으면 누가 알려 주나 / 만들지, 가져다 쓸지 / 현장에서 이 구조가 드러나는 순간 / 다음에 읽을 글 / 면접에서 나올 만한 질문
- 직접 링크 →: sd-metrics-collection, sd-ad-click-stream-windows, db-type-time-series, alerting, metrics-types, prometheus-basics, message-delivery-semantics, grafana-dashboards
- 키워드 백링크 →: cron-jobs, db-type-wide-column, db-type-key-value, sd-object-storage-architecture, db-type-relational, kafka-basics, webhooks
- 이 글로 오는 글 ←: centralized-logging-pipeline, sd-ad-click-stream-windows, sd-metrics-collection, system-design-study-path

#### `sd-mq-consumer-groups` — 분산 메시지 큐 설계 ②: 소비자 그룹과 리밸런싱

- 요약: 컨슈머가 자기 속도로 가져가는 pull을 고르고, 소비자 그룹이 파티션 단위로 나눠 읽게 한다. 그룹 코디네이터가 하트비트로 멤버를 지켜보다 바뀌면 다시 나누는 과정을 시뮬레이션으로 따라간다.
- 태그: System Design, Messaging, Distributed Systems, Kafka
- 키워드: 그룹 코디네이터, 파티션 배정 전략, 세션 타임아웃
- 길이: 393줄
- 소제목: 브로커가 밀어줄까, 컨슈머가 가져갈까 / 같이 나눠 읽는 묶음, 소비자 그룹 / 책갈피는 어디에 두나 / 그룹을 맡는 브로커, 코디네이터 / 누가 무엇을 맡을지 다시 정하는 순간 / 말없이 죽은 컨슈머를 알아채기까지 / 커밋을 언제 하느냐가 전달 보장을 정한다 / 배포할 때 랙이 톱니처럼 튄다면 / 다음에 읽을 글 / 면접에서 나올 만한 질문
- 직접 링크 →: sd-mq-storage-partitions, sd-mq-replication, sd-metrics-collection, kafka-basics, backpressure, long-polling, rabbitmq-basics, raft-consensus, leader-election, message-delivery-semantics, pub-sub, message-queue-basics
- 키워드 백링크 →: sd-start-single-server, deadlocks, rolling-deployment, distributed-lock, redis-basics, db-type-key-value, realtime-communication
- 이 글로 오는 글 ←: kafka-basics, kafka-vs-rabbitmq-replay, sd-mq-replication, sd-mq-storage-partitions, system-design-study-path

#### `sd-mq-replication` — 분산 메시지 큐 설계 ③: 복제, ISR, acks

- 요약: 파티션마다 리더 하나와 팔로워를 두고, 동기화 복제본 전원이 받은 메시지만 확정한다. acks와 min.insync.replicas가 지연과 내구성을 함께 정하고, 리더가 죽을 때 무엇을 잃는지 재현한다.
- 태그: System Design, Messaging, Distributed Systems, Kafka
- 키워드: 하이 워터마크, 동기화 복제본, unclean 리더 선출, leader epoch
- 길이: 344줄
- 소제목: 파티션마다 리더 하나, 나머지는 따라 쓴다 / 누가 제대로 따라오고 있나 / 성공 응답은 언제 주나: acks / 전원이 받아도 끝이 아니다: 동기화 복제본이 줄어들 때 / 리더를 정하는 쪽은 누구인가 / 브로커를 늘리거나 고칠 때 / 복제가 흔들릴 때 보는 지표 / 다음에 읽을 글 / 면접에서 나올 만한 질문
- 직접 링크 →: sd-mq-storage-partitions, sd-mq-consumer-groups, sd-metrics-collection, kafka-basics, sd-kv-store-partition-replication, raft-consensus, leader-election, message-delivery-semantics, db-replication-sharding
- 키워드 백링크 →: pub-sub, rolling-deployment, vpc-basics, rendering-strategies
- 이 글로 오는 글 ←: kafka-basics, sd-metrics-collection, sd-mq-consumer-groups, sd-mq-storage-partitions, system-design-study-path

#### `sd-mq-storage-partitions` — 분산 메시지 큐 설계 ①: 지우지 않는 로그와 파티션

- 요약: 메시지를 꺼낼 때 지우지 않고 세그먼트 파일로 나눈 로그에 붙이기만 한다. 희소 인덱스로 오프셋을 찾고, 키 해시로 파티션에 나눠 같은 키의 순서를 지키는 구조를 Node로 직접 만들어 본다.
- 태그: System Design, Messaging, Distributed Systems, Kafka
- 키워드: 세그먼트 파일, 희소 오프셋 인덱스, 파티션 키
- 길이: 398줄
- 소제목: 테이블 하나로 큐를 만들면 / 만들 것의 크기를 먼저 정한다 / 지우지 않고 뒤에 붙이기만 한다 / 메시지 한 건이 디스크에 놓이는 모양 / 파일 하나가 끝없이 커지면 / 오프셋 7번을 찾아가는 길 / 디스크는 느리다는 말이 반만 맞는 이유 / 한 파일로는 못 받는 양 / 파티션 수는 나중에 바꾸기 어렵다 / 몇 대, 몇 파티션이 필요한지 세어 본다 / 현장에서 이 구조가 드러나는 순간 / 다음에 읽을 글 / 면접에서 나올 만한 질문
- 직접 링크 →: sd-maps-location-eta, sd-mq-consumer-groups, sd-mq-replication, sd-queue-logging-automation, kafka-basics, message-queue-basics, pub-sub, consistent-hashing, sd-capacity-estimation, rabbitmq-basics
- 키워드 백링크 →: db-type-key-value, sd-start-single-server
- 이 글로 오는 글 ←: db-architecture-by-scale, db-partitioning, db-performance-map, db-replication-sharding, db-type-key-value, db-type-wide-column, db-types-overview, geohash, kafka-basics, kafka-vs-rabbitmq-replay, lossy-counting, message-queue-basics, opensearch-cluster-operations, postgres-architecture, sd-ad-click-stream-windows, sd-chat-message-storage, sd-email-storage-search, sd-leaderboard-scaling, sd-maps-location-eta, sd-metrics-collection, sd-mq-consumer-groups, sd-mq-replication, sd-nearby-friends, sd-stock-exchange-low-latency, sql-vs-nosql, system-design-study-path

#### `sd-music-streaming` — 음악 스트리밍 서비스 설계: 음원 600TB와 메타데이터 70GB를 따로 다루기

- 요약: 곡 파일은 객체 저장소와 CDN에서 Range 요청으로 조각내 받고, 곡 정보와 재생목록은 리더와 팔로워로 나눈 SQL에 둔다. 재생 기록은 큐로 빼서 실시간 집계와 정산을 다른 길로 만들고, 중복과 30초 미만 재생을 걸러 정확히 센다.
- 태그: System Design, CDN, Cache, Database, Messaging
- 키워드: 음악 스트리밍, 재생 수 정산, 오프라인 재생, DRM
- 길이: 525줄
- 소제목: 노래 파일을 서버 한 대에 올려 두면 / 만들 것과 만들지 않을 것 / 600TB와 70GB는 어디서 나왔나 / 음원은 객체 저장소에, 가까운 곳은 CDN에 / 재생 버튼부터 첫 소리까지 / 곡을 조각으로 받는다 / 곡 정보와 재생목록은 SQL에 둔다 / 검색은 따로 만든 색인에 묻는다 / 많이 듣는 곡은 캐시에 둔다 / 지하철에서도 들리게: 내려받기와 DRM / 재생 한 번이 정산서의 한 줄이 되기까지 / 추천은 밤사이 만들어 둔다 / 어디부터 터지나 / 다음에 읽을 글 / 면접에서 나올 만한 질문
- 직접 링크 →: sd-video-upload-transcoding, sd-video-streaming-cost, system-design-study-path, sd-capacity-estimation, sd-object-storage-architecture, sd-object-storage-durability, sd-cache-and-cdn-tier, sd-db-replication-intro, sd-sharding-intro, elasticsearch-inverted-index, sd-autocomplete-trie, sd-autocomplete-data-pipeline, kafka-basics, sd-ad-click-exactly-once, vector-db, sd-object-storage-versioning-multipart, youtube-url-to-video
- 키워드 백링크 →: caching-strategies, db-index, mongodb-document-model, db-type-key-value, sd-start-single-server, db-type-relational, redis-basics
- 이 글로 오는 글 ←: sd-video-streaming-cost, system-design-study-path

#### `sd-nearby-friends` — 주변 친구 설계: 움직이는 위치를 친구에게 밀어 주기

- 요약: 30초 폴링이 깨지는 지점에서 출발해 WebSocket 서버, 만료가 걸린 위치 캐시, 사용자마다 채널을 두는 Redis Pub/Sub 팬아웃을 실제로 돌려 본다. 받는 쪽 거리 거르기, 구독 수 세기, 안정 해시로 채널 나누기, 서버 비우기와 지오해시 채널까지 다룬다.
- 태그: System Design, WebSocket, Redis, Messaging, Geospatial
- 키워드: 주변 친구, 사용자별 채널, 위치 캐시
- 길이: 440줄
- 소제목: 친구 위치를 30초마다 물어보면 / 가게와 달리 계속 움직인다 / 서버가 먼저 밀어 준다 / 구성 요소를 한 바퀴 돈다 / 사용자마다 채널을 하나씩 둔다 / 실제로 퍼뜨려 보기 / 거리는 받는 쪽에서 거른다 / 처음 붙을 때 할 일 / 마지막 위치는 만료와 함께, 이력은 따로 / 친구가 들어오고 나갈 때 / 발행·구독 서버 한 대로는 모자라다 / 채널을 노드에 나누고, 노드를 늘릴 때 / WebSocket 서버를 내릴 때 / 친구가 많은 사람, 모르는 사람 / Redis 말고 다른 선택지 / 다음 글 / 면접에서 나올 만한 질문
- 직접 링크 →: sd-proximity-service, sd-maps-tiles-routing, sd-maps-location-eta, sd-chat-connections, sd-chat-presence, realtime-communication, websocket-deep-dive, db-type-wide-column, sd-queue-logging-automation, pub-sub, redis-cluster, service-discovery, consistent-hashing, sd-news-feed-publishing, geohash
- 키워드 백링크 →: api-scaling-ladder, sd-mq-storage-partitions, kafka-basics, redis-basics, db-type-key-value
- 이 글로 오는 글 ←: sd-chat-presence, sd-maps-location-eta, sd-maps-tiles-routing, sd-proximity-service, system-design-study-path

#### `sd-news-feed-publishing` — 뉴스 피드 설계 ①: 글 하나를 팔로워 피드에 나눠 넣기

- 요약: 글을 쓸 때 팔로워 피드에 미리 넣는 방식과 읽을 때 모아 오는 방식을 같은 가짜 SNS와 Redis에서 돌려 비교한다. 팔로워 100만 명인 계정이 글을 쓰면 무엇이 무너지는지, 둘을 섞는 방법과 팬아웃 작업자의 재시도까지 다룬다.
- 태그: System Design, Redis, Cache, Messaging, Backend
- 키워드: 쓰기 시점 팬아웃, 읽기 시점 팬아웃, 혼합 팬아웃, 유명인 문제
- 길이: 418줄
- 소제목: 표 하나와 쿼리 하나로 만든 피드 / 글을 쓸 때 미리 나눠 넣는다 / 읽을 때 모아 온다 / 같은 가짜 SNS에서 둘을 돌려 보기 / 팔로워 100만 명이 글을 쓰는 순간 / 대부분은 밀고, 유명인만 당긴다 / 팬아웃 서비스 안을 들여다보기 / 작업자가 같은 글을 두 번 넣으면 / 친구 글이 몇 분 늦게 뜬다는 문의가 오면 / 팬아웃 쓰기량 어림하기 / 다음에 읽을 글 / 면접에서 나올 만한 질문
- 직접 링크 →: sd-notification-reliability, sd-news-feed-retrieval, sd-chat-connections, redis-basics, sd-sharding-intro, sd-queue-logging-automation, db-type-graph, pub-sub, message-delivery-semantics, idempotency-key, sd-unique-id-generator, caching-strategies
- 키워드 백링크 →: db-sharding, sd-start-single-server, db-type-relational, http-methods
- 이 글로 오는 글 ←: sd-chat-message-storage, sd-nearby-friends, sd-news-feed-retrieval, sd-notification-reliability, sd-notification-system, sd-sharding-intro, system-design-study-path

#### `sd-news-feed-retrieval` — 뉴스 피드 설계 ②: 피드 캐시와 페이지 넘기기

- 요약: 피드 캐시의 글 ID를 화면에 보일 글로 바꾸는 캐시 구성과 묶음 요청, 스크롤 중 새 글이 들어와도 겹치지 않는 커서 페이지를 직접 재 본다. Redis 점수에 64비트 ID를 넣으면 글이 사라지는 함정과 빈 피드 재구성도 다룬다.
- 태그: System Design, Redis, Cache, API, Backend
- 키워드: 피드 캐시, 피드 커서, 콘텐츠 캐시
- 길이: 384줄
- 소제목: ID 20개가 화면이 되기까지 / 캐시를 바뀌는 속도로 나눈다 / 하나씩 물으면 왕복이 스물한 번 / 피드 하나가 쓰는 메모리 / 스크롤하는 동안 새 글이 들어오면 / Redis 점수에 64비트 ID를 넣으면 / 500개 너머로 내려가면 / 맨 위로 당겨 새 글을 볼 때 / 피드가 이상하다는 문의가 오면 / 커서로 페이지 넘기기 / 다음에 읽을 글 / 면접에서 나올 만한 질문
- 직접 링크 →: sd-news-feed-publishing, sd-chat-connections, caching-strategies, sd-latency-numbers, api-pagination-sorting, realtime-communication, long-polling
- 키워드 백링크 →: db-sharding, ds-hash-map, redis-basics, pub-sub, sql-query-rewrite
- 이 글로 오는 글 ←: sd-chat-connections, sd-leaderboard-scaling, sd-leaderboard-sorted-set, sd-news-feed-publishing, system-design-study-path

#### `sd-notification-reliability` — 알림 시스템 설계 ②: 잃지 않고 두 번 보내지 않기

- 요약: 알림 로그와 아웃박스로 유실을 막고, 알림 id로 중복을 거르고, 실패를 나눠 백오프로 재시도하다 DLQ로 보내는 워커를 Redis와 함께 돌려 본다. 템플릿, 수신 설정, 사용자별 상한, 단계별 지표도 다룬다.
- 태그: System Design, Backend, Messaging, Redis, Resilience
- 키워드: 알림 로그, 수신 거부, collapse id
- 길이: 390줄
- 소제목: 알림이 사라지는 세 자리 / 다시 보내는 순간 겹친다 / 워커가 실패를 가르는 법 / 본문은 템플릿에서 만든다 / 사용자가 끄면 보내지 않는다 / 한 사람에게 너무 많이 보내지 않기 / 잘 가고 있는지 지켜보기 / 다음에 읽을 글 / 면접에서 나올 만한 질문
- 직접 링크 →: sd-notification-system, sd-news-feed-publishing, transactional-outbox, message-queue-basics, message-delivery-semantics, exponential-backoff-jitter, dead-letter-queue, circuit-breaker, retries, xss, sd-rate-limiter-design, rate-limiting-in-practice, alerting, metrics-types
- 키워드 백링크 →: microservices, resilience-patterns, redis-basics, http-methods, webhooks
- 이 글로 오는 글 ←: sd-email-protocols, sd-news-feed-publishing, sd-notification-system, system-design-study-path

#### `sd-notification-system` — 알림 시스템 설계 ①: 푸시, SMS, 이메일을 보내는 구조

- 요약: 주문 API 안에서 업체를 바로 부르면 생기는 문제에서 출발해 APNs·FCM·문자·메일 업체, 디바이스 토큰 테이블, 알림 서버와 채널별 큐·워커로 이루어진 구조를 만든다.
- 태그: System Design, Backend, Messaging, PostgreSQL
- 키워드: 디바이스 토큰, APNs, FCM
- 길이: 354줄
- 소제목: 주문 API 안에서 바로 보내 보기 / 알림 한 통이 거치는 바깥 업체 / 연락처를 어디에 두나 / 얼마나 보내야 하나 / 첫 설계: 알림 서버 하나 / 큐로 떼어 내고 채널마다 나눈다 / 알림 서버가 요청 하나에 하는 일 / 워커는 업체와 씨름한다 / 다음에 읽을 글 / 면접에서 나올 만한 질문
- 직접 링크 →: sd-web-crawler-politeness-dedup, sd-notification-reliability, sd-news-feed-publishing, sd-email-protocols, sd-capacity-estimation, message-queue-basics, sd-queue-logging-automation
- 키워드 백링크 →: https-tls, sd-start-single-server, http-versions, token-login, oauth
- 이 글로 오는 글 ←: sd-chat-connections, sd-notification-reliability, sd-web-crawler-architecture, sd-web-crawler-politeness-dedup, system-design-study-path

#### `sd-object-storage-architecture` — 객체 저장소 설계 ①: 본문과 이름표 나누기, 볼륨 파일과 메타데이터

- 요약: 웹 서버 디스크에 쌓던 사진을 객체 저장소로 옮긴다. 본문은 데이터 노드의 볼륨 파일에 이어 쓰고, 이름표는 샤딩한 메타데이터 저장소에 적는 구조를 직접 만들어 본다.
- 태그: System Design, Distributed Systems, Backend, Database, AWS
- 키워드: 객체 저장소, 메타데이터 저장소, 데이터 라우팅 서비스, 볼륨 파일
- 길이: 477줄
- 소제목: 웹 서버 디스크에 사진을 쌓으면 / 블록, 파일, 객체는 쌓는 층이 다르다 / 버킷, 객체, 키 / 무엇을 얼마나 담을지 숫자로 정한다 / 본문과 이름표를 따로 둔다 / 사진 한 장을 올리는 길 / 창고 안을 들여다보면 / 사진 한 장을 파일 하나로 두면 / 큰 파일에 이어 쓰고 위치를 적는다 / 장부는 무엇을 담고 어떻게 나누나 / 폴더 안 보기가 느려지는 이유 / 장애가 나면 어디부터 보나 / 다음에 읽을 글 / 면접에서 나올 만한 질문
- 직접 링크 →: sd-email-storage-search, sd-object-storage-durability, sd-object-storage-versioning-multipart, sd-leaderboard-sorted-set, sd-load-balancer-stateless, raft-consensus, consistent-hashing, sd-kv-store-partition-replication, sd-db-replication-intro, sd-sharding-intro, sd-video-upload-transcoding, sd-file-sync-block-upload
- 키워드 백링크 →: js-memory-leak, sd-start-single-server, db-type-embedded, db-type-relational, db-replication-sharding
- 이 글로 오는 글 ←: api-scaling-ladder, backup-strategy, centralized-logging-pipeline, disaster-recovery, external-secrets, git-internals-basics, k8s-learning-roadmap, kafka-vs-rabbitmq-replay, opensearch-cluster-operations, prometheus-basics, scaling-horizontal-vertical, sd-ad-click-stream-windows, sd-autocomplete-data-pipeline, sd-email-protocols, sd-email-storage-search, sd-kv-store-partition-replication, sd-load-balancer-stateless, sd-maps-tiles-routing, sd-metrics-storage-alerting, sd-music-streaming, sd-object-storage-durability, sd-object-storage-versioning-multipart, sd-start-single-server, sd-web-crawler-architecture, system-design-study-path

#### `sd-object-storage-durability` — 객체 저장소 설계 ②: 복제와 이레이저 코딩, 체크섬

- 요약: 디스크가 매주 죽어도 데이터를 잃지 않으려면 몇 벌을 어디에 두어야 하는지 계산한다. XOR과 P+Q 패리티로 잃은 조각을 되살려 보고, 체크섬과 스크럽으로 조용히 뒤집힌 비트를 잡는다.
- 태그: System Design, Distributed Systems, Backend, SRE, AWS
- 키워드: 이레이저 코딩, 리드-솔로몬, 비트 부패, 장애 도메인, 스크럽
- 길이: 391줄
- 소제목: 세 벌을 두면 몇 개의 9가 나오나 / 같은 랙에 세 벌을 두면 / 몇 벌이 확인해야 성공인가 / 세 벌은 비싸다 / 둘을 잃어도 되살리려면 / 조각을 AZ에 나눠 두면 / 무엇을 고를지 숫자로 비교한다 / 디스크가 조용히 틀린 값을 줄 때 / 어떤 체크섬을 쓰나 / 현장에서 내구성이 깨지는 순간 / 다음에 읽을 글 / 면접에서 나올 만한 질문
- 직접 링크 →: sd-object-storage-architecture, sd-object-storage-versioning-multipart, sd-leaderboard-sorted-set, sd-kv-store-partition-replication, sd-file-sync-block-upload, encryption-at-rest, backup-strategy, merkle-tree
- 키워드 백링크 →: tail-latency, vpc-basics
- 이 글로 오는 글 ←: sd-music-streaming, sd-object-storage-architecture, sd-object-storage-versioning-multipart, system-design-study-path

#### `sd-object-storage-versioning-multipart` — 객체 저장소 설계 ③: 버전, 멀티파트 업로드, 가비지 컬렉션

- 요약: 덮어쓴 객체를 되돌리는 버전 관리와 삭제 마커, 큰 파일을 조각으로 받아 합치는 멀티파트 업로드를 만든다. 그 과정에서 생긴 고아 조각과 지운 객체를 컴팩션으로 안전하게 치운다.
- 태그: System Design, Distributed Systems, Backend, AWS, Node.js
- 키워드: 삭제 마커, 합친 ETag, 고아 조각, 볼륨 컴팩션
- 길이: 425줄
- 소제목: 덮어쓰면 옛 본문은 어디로 가나 / 지우기도 새 버전 하나다 / 버전이 쌓이면 요금도 쌓인다 / 5GB 파일은 한 번에 받지 않는다 / 조각 ETag와 합친 ETag / 조각을 이어 붙일까, 목록만 적을까 / 끝나지 않은 업로드가 남기는 것 / 쓰레기는 여러 군데서 생긴다 / 컴팩션을 직접 돌려 본다 / 청소하다 살아 있는 것을 버리지 않으려면 / 다음에 읽을 글 / 면접에서 나올 만한 질문
- 직접 링크 →: sd-object-storage-architecture, sd-object-storage-durability, sd-leaderboard-sorted-set, sd-unique-id-generator, backup-strategy, sd-video-upload-transcoding, sd-kv-store-write-read-path
- 키워드 백링크 →: db-sharding, db-type-wide-column, js-memory-leak, db-type-embedded, http-caching-cdn
- 이 글로 오는 글 ←: sd-leaderboard-sorted-set, sd-music-streaming, sd-object-storage-architecture, sd-object-storage-durability, system-design-study-path

#### `sd-payment-flow` — 결제 시스템 설계 ①: 돈이 움직이는 길과 복식부기 원장

- 요약: 카드 번호는 결제 대행사의 결제 화면이 받고, 결과는 웹훅으로 확정한다. 금액을 정수로 적고, 모든 돈의 움직임을 합이 0인 복식부기 거래로 PostgreSQL 원장에 남긴다.
- 태그: System Design, Backend, PostgreSQL, Transaction
- 키워드: 결제 대행사, 복식부기, 호스티드 결제 페이지, 페이아웃
- 길이: 471줄
- 소제목: 돈은 누구에게서 누구에게 가나 / 카드 번호를 만지지 않는 결제 페이지 / 결제 하나를 두 개의 표로 / 금액은 정수로 적는다 / 돈은 생기지도 사라지지도 않는다 / 하루가 지나 돈이 실제로 움직일 때 / 지갑은 원장에서 나온 숫자다 / 결제 서비스 안의 역할 나누기 / 결제가 몇 시간 걸릴 때 / 결제 문의가 들어오면 / 할인 금액을 판매자별로 나누기 / 다음에 읽을 글 / 면접에서 나올 만한 질문
- 직접 링크 →: sd-leaderboard-scaling, sd-payment-reliability, sd-wallet-transfer, webhooks, acid-transactions, distributed-transactions-2pc, saga-pattern, transactional-outbox
- 키워드 백링크 →: resilience-patterns, http-methods
- 이 글로 오는 글 ←: centralized-logging-pipeline, db-performance-map, js-promise-combinators, pattern-chain-of-responsibility, rollback-strategy, sd-leaderboard-scaling, sd-leaderboard-sorted-set, sd-payment-reliability, sd-wallet-transfer, system-design-study-path, transactional-outbox

#### `sd-payment-reliability` — 결제 시스템 설계 ②: 재시도, 웹훅, 대사로 한 번만 청구하기

- 요약: 시간 초과는 실패가 아니라 모르는 상태다. 가짜 PSP로 이중 청구, 중복·위조·분실 웹훅을 재현해 멱등성 키, 상태 규칙, 스위퍼로 막고, 정산 파일과 원장을 대사해 남은 어긋남을 잡는다.
- 태그: System Design, Backend, Transaction, Distributed Systems
- 키워드: 결제 대사, 정산 파일, 이중 청구
- 길이: 403줄
- 소제목: 시간 초과는 실패가 아니다 / 같은 키로 다시 보내면 PSP가 알아본다 / 다시 보낼 실패, 멈출 실패, 모르는 실패 / 한 번만 청구하려면 구간마다 거른다 / 웹훅은 두 번 오고, 가짜가 오고, 안 온다 / 오래 멈춘 결제를 직접 물어본다 / 우리 기록과 PSP 기록을 맞춰 본다 / 어긋난 줄을 처리하는 순서 / 결제 DB의 복제와 읽기 / 결제에서 빠뜨리기 쉬운 보안 / 결제 장애가 났을 때 보는 순서 / 대사를 직접 짜 보기 / 다음에 읽을 글 / 면접에서 나올 만한 질문
- 직접 링크 →: sd-payment-flow, sd-wallet-transfer, idempotency-key, exponential-backoff-jitter, dead-letter-queue, message-delivery-semantics, webhooks, sd-db-replication-intro, distributed-transactions-2pc, saga-pattern
- 키워드 백링크 →: db-replication-sharding, resilience-patterns, http-methods
- 이 글로 오는 글 ←: enterprise-system-integration, sd-ad-click-exactly-once, sd-payment-flow, sd-wallet-transfer, system-design-study-path

#### `sd-proximity-service` — 주변 검색 설계: 반경 안의 가게를 칸으로 찾기

- 요약: 가게 테이블 하나로 시작해 위도·경도 인덱스가 따로 노는 문제를 재 보고, 지오해시 9칸 검색, 반경에 맞춘 칸 길이, 작아서 나누지 않는 색인과 복제본, 좌표 대신 칸 번호를 쓰는 캐시, 밤에 반영하는 가게 변경까지 한 단계씩 키운다.
- 태그: System Design, Geospatial, Redis, Cache, Backend
- 키워드: 주변 검색, 위치 기반 서비스, 반경 검색
- 길이: 447줄
- 소제목: 반경 500m 식당을 테이블 하나로 찾으면 / 위도 인덱스와 경도 인덱스는 따로 논다 / 요구 사항과 숫자부터 / 검색 API와 두 서비스 / 칸 색인은 무엇으로 고를까 / 아홉 칸에서 후보를 모아 거리로 거른다 / 칸 길이는 반경으로 정한다 / 색인 테이블은 작아서 나누지 않는다 / 좌표 대신 칸 번호를 캐시 키로 / 가게 정보가 바뀌면 다음 날 반영한다 / 결과가 비거나 너무 많을 때 / 여러 리전에 두고, 위치를 조심해서 다룬다 / 다음 글 / 면접에서 나올 만한 질문
- 직접 링크 →: sd-file-sync-conflicts, sd-nearby-friends, sd-maps-tiles-routing, sd-maps-location-eta, geohash, quadtree, sd-capacity-estimation, sd-load-balancer-stateless, sd-db-replication-intro, sd-sharding-intro, caching-strategies, cache-invalidation, sd-multi-datacenter
- 키워드 백링크 →: db-index, sd-start-single-server, db-types-overview, redis-basics, dns
- 이 글로 오는 글 ←: geohash, sd-file-sync-block-upload, sd-file-sync-conflicts, sd-maps-location-eta, sd-maps-tiles-routing, sd-nearby-friends, system-design-study-path

#### `sd-rate-limiter-design` — 요청 수 제한기 설계: 어디에 두고, 여러 서버가 어떻게 함께 세나

- 요약: 리뷰 테러와 로그인 대입 공격을 막는 요청 수 제한기를 처음부터 설계한다. 무엇으로 셀지와 고장 나면 어떻게 할지를 먼저 정하고, 규칙과 카운터의 자리, INCR로 경쟁 상태를 없애는 법, Redis가 멈출 때와 지역이 여럿일 때의 선택을 직접 돌려 보며 정한다.
- 태그: System Design, Redis, API, Distributed Systems, Backend
- 키워드: 요청 수 제한기, 처리율 제한기
- 길이: 450줄
- 소제목: 무엇을 막을지부터 묻는다 / 문지기를 어디에 세울까 / 규칙은 코드 밖에 둔다 / 서버 세 대가 따로 세면 / INCR과 수명 사이의 틈 / 창이 열리고 닫히는 시점 / 거절할 때 알려 줄 것 / Redis가 멈추면 요청도 멈춘다 / 데이터 센터가 여러 곳이면 / 마무리에서 꺼낼 것들 / 직접 짜 보기 / 다음에 읽을 글 / 면접에서 나올 만한 질문
- 직접 링크 →: sd-interview-framework, sd-capacity-estimation, sd-kv-store-partition-replication, rate-limiting-algorithms, rate-limiting-in-practice, gateway, race-conditions, sd-multi-datacenter, redis-cluster, ddos-protection, waf
- 키워드 백링크 →: proxy-reverse-proxy, autoscaling, redis-basics
- 이 글로 오는 글 ←: sd-capacity-estimation, sd-interview-framework, sd-kv-store-partition-replication, sd-latency-numbers, sd-notification-reliability, sd-stock-exchange-low-latency, sd-video-upload-transcoding, system-design-study-path

#### `sd-stock-exchange-low-latency` — 증권 거래소 설계 ②: 시퀀서와 단일 스레드 루프, 결정적 재생

- 요약: 도착 순서만 달라도 체결 결과가 바뀌고, 주 엔진이 죽으면 호가창을 똑같이 되살려야 한다. 시퀀서와 일지로 결정적 재생과 대기 엔진 인계, 순번 빈자리 재전송을 직접 돌려 보고, 링 버퍼와 postMessage의 지연, GC 멈춤, /dev/shm 일지, 멀티캐스트 시장 데이터를 다룬다.
- 태그: System Design, Distributed Systems, Performance, Node.js, Concurrency
- 키워드: 시퀀서, 결정적 재생, 바쁜 대기
- 길이: 401줄
- 소제목: 서비스를 건널 때마다 밀리초가 쌓인다 / 모든 입력에 번호를 찍는 단 하나의 작성자 / 같은 일지면 같은 호가창 / 순번이 비면 멈추고 다시 달라고 한다 / 한 스레드가 쉬지 않고 도는 루프 / 스레드 사이는 링 버퍼로 잇는다 / 디스크 대신 메모리에 쓰는 일지 / 주 엔진이 죽으면 / 시장 데이터를 모두에게 같은 순간에 / 마지막 사례를 닫으며 / 면접에서 나올 만한 질문
- 직접 링크 →: sd-stock-exchange-order-book, system-design-study-path, sd-wallet-event-sourcing, sd-latency-numbers, sd-mq-storage-partitions, tail-latency, message-delivery-semantics, garbage-collection, leader-election, raft-consensus, udp-and-quic, sd-rate-limiter-design
- 키워드 백링크 →: js-memory-leak, sd-start-single-server, event-loop, kafka-basics
- 이 글로 오는 글 ←: ds-stack-queue-deque, sd-stock-exchange-order-book, sd-wallet-event-sourcing, system-design-study-path

#### `sd-stock-exchange-order-book` — 증권 거래소 설계 ①: 호가창과 매칭 엔진, 가격-시간 우선으로 체결하기

- 요약: 같은 가격인데 남의 주문이 먼저 체결되는 이유에서 시작한다. 매수·매도 호가와 메이커·테이커 같은 용어부터 풀고, 가격 단계마다 FIFO 줄을 둔 호가창과 매칭 엔진을 Node로 만들어 체결 기록, 취소 경합, 큰 주문의 호가 훑기, 지갑 정산, 봉 차트를 직접 뽑아 본다.
- 태그: System Design, Node.js, Performance, Backend
- 키워드: 호가창, 매칭 엔진, 가격-시간 우선
- 길이: 408줄
- 소제목: 사는 사람, 파는 사람, 그리고 호가창 / 같은 가격이면 먼저 온 주문부터 / 주문 하나가 거래소를 지나는 길 / 호가창을 담을 자료 구조 / 체결 기록을 따라가 본다 / 가격 단계를 훑고 지나가는 큰 주문 / 얼마나 빨라야 하나 / 체결 기록에서 나오는 것들 / 다음 글에서 엔진을 빠르고 죽지 않게 만든다 / 면접에서 나올 만한 질문
- 직접 링크 →: sd-wallet-event-sourcing, sd-stock-exchange-low-latency, system-design-study-path, percentile-latency
- 키워드 백링크 →: ds-linked-list
- 이 글로 오는 글 ←: sd-stock-exchange-low-latency, sd-wallet-event-sourcing, sd-wallet-transfer, system-design-study-path

#### `sd-unique-id-generator` — 고유 ID 생성기 설계: 여러 서버가 겹치지 않는 번호를 만드는 법

- 요약: 샤드마다 1부터 세면 번호가 겹친다. 홀짝 나눠 세기, 티켓 서버, UUID, Snowflake를 차례로 만들어 보며 시간 순서, 64비트, 시계와 기계 번호 문제를 따진다.
- 태그: System Design, Distributed Systems, Database, Backend
- 키워드: 고유 ID 생성기, 티켓 서버, 커스텀 에포크
- 길이: 444줄
- 소제목: 어떤 번호가 필요한지부터 정한다 / 샤드마다 홀짝으로 나눠 세기 / 번호표를 한 곳에서 나눠 주기 / 아무에게도 묻지 않는 UUID / 64비트를 칸으로 나눠 담기 / 1밀리초에 4,096개를 넘으면 / 시계가 뒤로 가는 순간 / 기계 번호는 누가 나눠 주나 / 자바스크립트가 번호 끝자리를 바꾼다 / 칸 크기는 서비스에 맞춘다 / 네 가지를 나란히 놓고 고르기 / 다음에 읽을 글 / 면접에서 나올 만한 질문
- 직접 링크 →: sd-kv-store-write-read-path, sd-url-shortener-api-redirect, sd-sharding-intro, db-keys-denormalization, postgres-data-types, clock-skew, json-crud-http, sd-url-shortener-key-generation
- 키워드 백링크 →: k8s-statefulset, db-index, db-sharding, db-type-key-value, high-availability
- 이 글로 오는 글 ←: sd-chat-message-storage, sd-email-storage-search, sd-kv-store-write-read-path, sd-news-feed-publishing, sd-object-storage-versioning-multipart, sd-sharding-intro, sd-url-shortener-api-redirect, sd-url-shortener-key-generation, system-design-study-path

#### `sd-url-shortener-api-redirect` — URL 단축기 설계 ①: API, 301과 302, 데이터 모델

- 요약: 서버 한 대와 표 하나로 URL 단축기를 만들고, 단축 API와 리다이렉트 응답을 정한다. 실제 브라우저로 301과 302가 몇 번 서버에 오는지 재 보고, 규모 어림과 테이블 인덱스, 악용 방어까지 설계한다.
- 태그: System Design, HTTP, Database, Backend
- 키워드: URL 단축기, 단축 URL
- 길이: 416줄
- 소제목: 서버 한 대와 표 하나로 시작하기 / API 모양을 먼저 못 박는다 / 301을 줄까, 302를 줄까 / 하루 864만 개를 만든다면 / 테이블은 키 하나로 찾게 만든다 / 읽기가 쏟아질 때 리다이렉트 경로 / 남의 피싱 링크를 대신 보내 주지 않으려면 / 다음 글 / 면접에서 나올 만한 질문
- 직접 링크 →: sd-unique-id-generator, sd-url-shortener-key-generation, sd-web-crawler-architecture, http-status-codes, http-caching-cdn, sd-sharding-intro, sd-capacity-estimation, sd-kv-store-partition-replication, sd-load-balancer-stateless, sd-db-replication-intro, rate-limiting-algorithms
- 키워드 백링크 →: db-type-key-value, mysql-innodb-basics, sd-start-single-server, db-type-relational, db-replication-sharding, redis-basics
- 이 글로 오는 글 ←: sd-unique-id-generator, sd-url-shortener-key-generation, sd-web-crawler-architecture, system-design-concepts-map, system-design-study-path

#### `sd-url-shortener-key-generation` — URL 단축기 설계 ②: 단축 키 만들기와 인기 링크 캐시

- 요약: 긴 주소를 해시해 자르는 방법, 번호를 Base62로 바꾸는 방법, 키를 미리 만들어 두는 방법을 직접 돌려 비교한다. 충돌률과 재시도 비용을 재 보고, 인기 링크와 없는 키를 캐시로 막는다.
- 태그: System Design, Cache, Redis, Backend
- 키워드: Base62, 62진수, 키 생성 서버
- 길이: 395줄
- 소제목: 해시를 잘라 쓰면 생기는 일 / 겹치면 다시 해시하고, 다시 묻는다 / 번호를 62진수로 바꾸기 / 다음 키가 보이는 문제 / 키를 미리 만들어 두는 서버 / 세 방법을 고르는 기준 / 인기 링크는 캐시가 받는다 / 다음 글 / 면접에서 나올 만한 질문
- 직접 링크 →: sd-url-shortener-api-redirect, sd-unique-id-generator, sd-web-crawler-architecture, bloom-filter, base64, caching-strategies, cache-invalidation, sd-cache-and-cdn-tier, sd-queue-logging-automation
- 키워드 백링크 →: db-sharding, http-caching-cdn, js-memoization, redis-basics
- 이 글로 오는 글 ←: sd-unique-id-generator, sd-url-shortener-api-redirect, sd-web-crawler-architecture, system-design-study-path

#### `sd-video-streaming-cost` — 동영상 서비스 설계 ②: HLS로 나눠 보내기와 CDN 비용

- 요약: 영상을 몇 초짜리 조각과 두 겹의 목록으로 나눠 플레이어가 회선에 맞는 화질을 고르게 한다. 전송량은 재생 수 × 시청 시간 × 비트레이트라서, 인기 쏠림을 이용해 CDN 비용을 줄인다.
- 태그: System Design, CDN, Cache, HTTP, Performance
- 키워드: HLS, 적응형 스트리밍, ABR
- 길이: 438줄
- 소제목: 파일 하나를 통째로 보내면 생기는 일 / 목록 두 겹과 4초짜리 조각 / 회선에 맞춰 화질을 바꾸는 플레이어 / 엣지가 조각을 들고 있으면 / 하루 수 페타바이트를 내보내는 값 / 인기 없는 영상까지 CDN에 둘 필요는 없다 / 남이 퍼 가지 못하게 / 재생 중에 터지는 오류들 / 다음 장: 동영상에서 파일 동기화로 / 면접에서 나올 만한 질문
- 직접 링크 →: sd-video-upload-transcoding, sd-file-sync-block-upload, http-caching-cdn, cdn-edge-anycast, edge-caching, cloud-cost-optimization
- 키워드 백링크 →: packet-encapsulation, sd-music-streaming
- 이 글로 오는 글 ←: sd-file-sync-block-upload, sd-music-streaming, sd-video-upload-transcoding, system-design-study-path, youtube-url-to-video

#### `sd-video-upload-transcoding` — 동영상 서비스 설계 ①: 서명된 업로드와 트랜스코딩 DAG

- 요약: 큰 동영상을 서명된 주소로 저장소에 바로 올리고, 끊기면 빠진 조각만 이어 올린다. 원본을 여러 화질로 바꾸는 일은 작업 그래프로 나눠 돌리고 가장 긴 줄을 쪼갠다.
- 태그: System Design, Distributed Systems, Performance, Messaging
- 키워드: 서명된 업로드 주소, 트랜스코딩, 임계 경로, 비트레이트 사다리
- 길이: 583줄
- 소제목: 서버 한 대가 동영상을 받으면 / 파일은 저장소로 바로 보낸다 / 서명이 하는 일 / 끊기면 처음부터 다시 올려야 할까 / 원본을 그대로 틀면 안 되는 이유 / 일을 그래프로 적는다 / 가장 긴 줄이 전체 시간을 정한다 / 작업자에게 일을 나눠 주는 쪽 / 실패를 두 종류로 나눈다 / 다음 글: 만든 파일을 보는 사람에게 / 면접에서 나올 만한 질문
- 직접 링크 →: sd-autocomplete-data-pipeline, sd-video-streaming-cost, sd-file-sync-block-upload, sd-capacity-estimation, serverless-limits, sd-rate-limiter-design, idempotency-key, cdn-edge-anycast, message-queue-basics
- 키워드 백링크 →: sd-autocomplete-trie, sd-start-single-server, http-methods
- 이 글로 오는 글 ←: sd-autocomplete-data-pipeline, sd-autocomplete-trie, sd-file-sync-block-upload, sd-music-streaming, sd-object-storage-architecture, sd-object-storage-versioning-multipart, sd-video-streaming-cost, system-design-study-path, youtube-url-to-video

#### `sd-wallet-event-sourcing` — 디지털 지갑 설계 ②: 잔액 대신 사건을 남기고, 재생과 스냅숏으로 되살리기

- 요약: 잔액 칸을 덮어쓰면 그때 잔액도, 코드가 바뀐 뒤의 계산도 증명할 수 없다. 사건 35만 건을 결정적으로 재생해 지난 시점 잔액을 다시 계산하고, 두 버전 코드를 같은 기록에 돌려 처음 어긋나는 사건을 찾고, 스냅숏과 그룹 커밋, Raft 복제로 한 노드를 빠르고 안전하게 만든다.
- 태그: System Design, Distributed Systems, Architecture, Node.js, Backend
- 키워드: 결정적 상태 기계, 재생 검증
- 길이: 411줄
- 소제목: 잔액 칸을 덮어쓰면 남지 않는 것 / 명령 하나가 사건 두 개가 되기까지 / 그 시점의 잔액을 다시 계산한다 / 다시 재생했더니 잔액이 다르다 / 코드를 바꾼 뒤 같은 답을 내는지 확인한다 / 35만 건을 매번 처음부터 읽지 않는다 / 한 노드를 빠르게, 그리고 잃지 않게 / 잔액 조회는 다른 길로 간다 / 다음은 같은 원리로 움직이는 거래소 / 면접에서 나올 만한 질문
- 직접 링크 →: sd-wallet-transfer, sd-stock-exchange-order-book, event-sourcing, raft-consensus, cqrs, sd-stock-exchange-low-latency
- 키워드 백링크 →: k8s-deploy-pipeline-eks, db-type-embedded, db-type-key-value, event-driven-architecture, db-type-wide-column, sd-kv-store-write-read-path
- 이 글로 오는 글 ←: sd-stock-exchange-low-latency, sd-stock-exchange-order-book, sd-wallet-transfer, system-design-study-path

#### `sd-wallet-transfer` — 디지털 지갑 설계 ①: 샤드가 갈린 두 지갑 사이의 송금, 2PC와 TC/C와 사가

- 요약: 두 지갑이 서로 다른 DB에 있으면 커밋 두 번 사이에서 돈이 사라지거나 생긴다. PostgreSQL에서 그 틈을 직접 만들어 보고, 2PC와 TC/C의 묶어 두는 돈(hold)과 빈 취소, 사가의 보상 단계를 같은 지갑에 붙여 비교한다.
- 태그: System Design, Distributed Systems, Transaction, PostgreSQL, Backend
- 키워드: TC/C, Try-Confirm-Cancel, 빈 취소, 매달린 Try
- 길이: 534줄
- 소제목: 지갑 하나, 테이블 하나일 때 / 초당 2만 건이면 DB 한 대로 모자란다 / 커밋 두 번 사이에서 돈이 사라진다 / 2PC: 둘 다 준비시키고 한 번에 커밋한다 / Try-Confirm-Cancel: 먼저 묶어 두고 나중에 확정한다 / 코디네이터가 Try 도중에 죽으면 / 취소가 Try보다 먼저 도착하면 / 사가: 차례로 하고, 실패하면 반대로 되돌린다 / 무엇을 고르나 / 같은 지갑을 다음 글에서 다시 쌓는다 / 면접에서 나올 만한 질문
- 직접 링크 →: sd-payment-reliability, sd-payment-flow, sd-wallet-event-sourcing, sd-stock-exchange-order-book, acid-transactions, idempotency-key, sd-sharding-intro, distributed-transactions-2pc, saga-pattern
- 키워드 백링크 →: event-driven-architecture, redis-basics, http-methods
- 이 글로 오는 글 ←: sd-payment-flow, sd-payment-reliability, sd-wallet-event-sourcing, system-design-study-path

#### `sd-web-crawler-architecture` — 웹 크롤러 설계 ①: 시드에서 프런티어까지, 한 바퀴 도는 구조

- 요약: 링크를 따라가는 반복문 하나짜리 BFS 크롤러를 로컬 사이트에 돌려 보고, 프런티어·다운로더·파서·중복 확인·필터로 나눈 뒤 호스트 단위로 서버를 나누고 죽은 서버의 일을 이어받는 구조까지 키운다.
- 태그: System Design, Distributed Systems, Backend, Algorithm
- 키워드: 웹 크롤러, URL 프런티어, 시드 URL
- 길이: 393줄
- 소제목: 무엇을 얼마나 모을지부터 정한다 / 서버 한 대, 반복문 하나로 만든 크롤러 / 넓게 먼저 도는 이유 / 부품으로 나눠 보기 / 다운로더는 느리고 이상한 서버를 만난다 / 파서와 저장소 / 몇 대가 필요한지 계산해 보기 / 서버 여러 대로 나누는 기준은 호스트다 / 서버가 죽어도 처음부터 다시 하지 않게 / 새 형식을 끼워 넣을 자리 / 다음에 읽을 글 / 면접에서 나올 만한 질문
- 직접 링크 →: sd-url-shortener-key-generation, sd-web-crawler-politeness-dedup, sd-notification-system, timeouts, dns, rendering-csr-spa, sd-capacity-estimation, consistent-hashing, message-queue-basics
- 키워드 백링크 →: nodejs-server-runtime, ds-graph-bfs-dfs, sd-url-shortener-api-redirect, sd-object-storage-architecture, sd-start-single-server, db-sharding, bloom-filter, redis-basics, client-data-cache
- 이 글로 오는 글 ←: sd-url-shortener-api-redirect, sd-url-shortener-key-generation, sd-web-crawler-politeness-dedup, system-design-study-path

#### `sd-web-crawler-politeness-dedup` — 웹 크롤러 설계 ②: 예의, 우선순위, 중복 거르기

- 요약: 호스트별 뒤쪽 큐와 우선순위 앞쪽 큐로 한 사이트에 몰리지 않게 하고, robots.txt 해석, URL 모양 맞추기, 블룸 필터 방문 기록, SimHash, 스파이더 트랩, 조건부 요청으로 다시 찾아가기를 직접 돌려 본다.
- 태그: System Design, Distributed Systems, Algorithm, HTTP
- 키워드: robots.txt, SimHash, 스파이더 트랩, 뒤쪽 큐
- 길이: 392줄
- 소제목: 같은 사이트에 요청이 몰리는 모습 / 호스트마다 줄을 하나씩 두는 구조 / 중요한 페이지를 먼저 꺼내는 앞쪽 큐 / robots.txt를 먼저 읽는다 / 같은 페이지, 다른 주소 / 수십억 개 URL을 봤는지 기억하기 / 내용이 거의 같은 페이지 / 끝없이 새 주소를 만드는 페이지 / 바뀐 페이지만 다시 내려받기 / 다음에 읽을 글 / 면접에서 나올 만한 질문
- 직접 링크 →: sd-web-crawler-architecture, sd-notification-system, rate-limiting-in-practice, exponential-backoff-jitter, bloom-filter
- 키워드 백링크 →: db-type-key-value, client-data-cache, http-caching-cdn, dns
- 이 글로 오는 글 ←: sd-notification-system, sd-web-crawler-architecture, system-design-study-path

### Programming › UI/UX (`programming/ui-ux`)

#### `animation-patterns` — 애니메이션 패턴: 이름을 알면 부탁이 정확해진다

- 요약: Gooey, Slide in, Spring pop, Stagger, Shared element, Ripple, Path draw, Marquee, Tilt까지 아홉 가지 UI 애니메이션을 피드백, 방향 안내, 연속성, 즐거움 중 무슨 일을 하는지로 나눠 본다. 언제 돕고 언제 방해하는지, 부탁할 때 쓸 이름과 최소한의 CSS·JS를 함께 정리한다.
- 태그: UX, Frontend, Animation, CSS, Accessibility
- 키워드: 애니메이션 패턴, Gooey 효과, 스태거 애니메이션, 리플 효과
- 길이: 411줄
- 소제목: 움직임이 화면에서 맡는 일 / 누른 자리에서 대답하기 / 어디서 왔는지 보여 주기 / 하나씩 차례로 들어오기 / 선이 그려지는 동안 읽게 하기 / 눈길을 끄는 장식 셋 / 부탁 한 문장에 넣을 것 / 넣기 전에 걸러 보는 질문 / 면접에서 나올 만한 질문
- 직접 링크 →: loading-patterns, spring-animation, view-transitions-shared-element, animation-performance
- 이 글로 오는 글 ←: animation-performance, loading-patterns, scroll-patterns-overview, spring-animation, view-transitions-shared-element

#### `animation-performance` — 애니메이션 성능과 접근성: 합성 단계에서 끝내고, 움직임을 줄여 주기

- 요약: left와 transform의 차이를 성능 트레이스로 재서 레이아웃, 페인트, 합성 단계와 프레임 예산을 따라간다. will-change가 만드는 층, 끊김을 재는 방법, 전정 장애와 prefers-reduced-motion, WCAG 2.3.3까지 다룬다.
- 태그: UX, Frontend, Performance, Animation, Accessibility, Browser
- 키워드: 합성 스레드, will-change, prefers-reduced-motion, 프레임 예산
- 길이: 398줄
- 소제목: 한 프레임에 쓸 수 있는 시간 / 속성마다 깨우는 단계가 다르다 / 합성 단계에서 끝나는 애니메이션 / will-change는 층을 미리 만든다 / 끊김을 재는 방법 / 움직임이 불편한 사람들 / 현장에서 버벅임을 좁히는 순서 / 면접에서 나올 만한 질문
- 직접 링크 →: animation-patterns, spring-animation, view-transitions-shared-element, what-happens-google-com, event-loop, core-web-vitals
- 키워드 백링크 →: js-timers-accuracy, parallax-scrollytelling
- 이 글로 오는 글 ←: animation-patterns, browser-rendering-pipeline, css-sticky-scroll-snap, dom-basics, js-timers-accuracy, parallax-scrollytelling, rendering-performance-optimization, scroll-driven-animations, scroll-patterns-overview, scroll-triggered-intersection-observer, spring-animation, view-transitions-shared-element

#### `css-sticky-scroll-snap` — sticky와 scroll-snap: 스크롤에 맞춰 자리를 정하는 CSS

- 요약: 가로 스크롤 상자로 감싼 표의 머리글이 붙지 않는 버그에서 출발해, sticky가 스크롤 컨테이너와 포함 블록 사이에서 움직이는 규칙을 크로미움에서 재 본다. overflow와 flex stretch 함정, 머리글 쌓기와 scroll-state, mandatory와 proximity, scroll-padding, snap-stop, 마지막 칸 문제까지 다룬다.
- 태그: CSS, Frontend, UX, Browser
- 키워드: sticky 헤더, 스크롤 스냅, scroll-snap-type, 스크롤 컨테이너
- 길이: 390줄
- 소제목: sticky는 두 상자 사이에서 움직인다 / 붙지 않는 경우를 하나씩 재 보면 / 붙는 기준을 거슬러 올라가 찾기 / 머리글을 여러 겹 쌓을 때 / 손을 놓은 뒤 멈출 자리 / mandatory와 proximity를 재 보면 / 칸 맞춤을 직접 계산해 보기 / 현장에서 자주 만나는 증상 / 두 속성을 고르는 기준 / 면접에서 나올 만한 질문
- 직접 링크 →: scroll-patterns-overview, parallax-scrollytelling
- 키워드 백링크 →: scroll-triggered-intersection-observer, animation-performance
- 이 글로 오는 글 ←: parallax-scrollytelling, scroll-driven-animations, scroll-patterns-overview, scroll-triggered-intersection-observer

#### `loading-patterns` — 로딩 패턴: 기다리는 화면을 고르는 법

- 요약: 스피너, 스켈레톤, 프로그레스 바, 낙관적 UI, 무한 스크롤까지 로딩 패턴 열두 가지를 기다리는 시간, 진행률을 아는지, 모양을 아는지, 누가 시작했는지에 따라 고른다. 스피너 깜빡임, 가짜 진행률, 접근성 같은 실수도 짚는다.
- 태그: UX, Frontend, Performance, React, Accessibility
- 키워드: 스켈레톤 UI, 무한 스크롤, Optimistic UI
- 길이: 412줄
- 소제목: 기다리는 시간이 표시를 정한다 / 얼마나 남았는지 아는가 / 무엇이 올지 모양을 아는가 / 스피너가 깜빡이면 더 느려 보인다 / 버튼을 누른 사람에게 먼저 답한다 / 내용이 조각으로 도착할 때 / 손가락으로 당겨서 새로고침 / 모든 로딩 표시에 같이 챙길 것 / 이름을 알면 부탁이 짧아진다 / 면접에서 나올 만한 질문
- 직접 링크 →: core-web-vitals, streaming-ssr-suspense, rendering-strategies, client-data-cache, realtime-communication, rest-api-design, code-splitting, animation-patterns
- 키워드 백링크 →: pattern-proxy
- 이 글로 오는 글 ←: animation-patterns, client-data-cache, core-web-vitals, debounce-throttle, elasticsearch-inverted-index, http-streaming-sse, json-crud-http, rendering-performance-optimization, rest-api-design, scroll-patterns-overview, scroll-triggered-intersection-observer, server-sent-events, sql-query-rewrite

#### `parallax-scrollytelling` — 패럴랙스와 스크롤리텔링: sticky 무대 위에서 장면 움직이기

- 요약: 패럴랙스, 확대되는 장면, 가로 스크롤 섹션, 스크롤리텔링을 sticky 무대와 스크롤 진행률, IntersectionObserver의 조합으로 만든다. top과 transform의 비용 차이, overflow: hidden이 타임라인을 끄는 함정, 모바일의 100vh와 svh, 움직임 줄이기까지 다룬다.
- 태그: UX, Frontend, Animation, CSS, Accessibility
- 키워드: 패럴랙스, 스크롤리텔링, 가로 스크롤 섹션, svh
- 길이: 339줄
- 소제목: 배경이 글보다 느리면 깊이가 생긴다 / top으로 밀면 레이아웃을 2400번 한다 / 확대되며 다가오는 장면 / 세로로 내렸는데 가로로 흐른다 / 그림은 붙어 있고 글이 지나간다 / 휴대폰에서 화면 높이가 흔들린다 / 움직임이 불편한 사람에게서 장면을 거둔다 / 면접에서 나올 만한 질문
- 직접 링크 →: scroll-driven-animations, scroll-triggered-intersection-observer, css-sticky-scroll-snap, scroll-patterns-overview, animation-performance
- 키워드 백링크 →: dom-basics, browser-rendering-pipeline
- 이 글로 오는 글 ←: animation-performance, css-sticky-scroll-snap, scroll-driven-animations, scroll-patterns-overview, scroll-triggered-intersection-observer

#### `scroll-driven-animations` — 스크롤 기반 애니메이션: 시계 대신 스크롤 위치로 움직이기

- 요약: 읽기 진행 막대와 들어오면서 나타나는 카드를 animation-timeline의 scroll()과 view(), animation-range로 자바스크립트 없이 만든다. 구간 경계 계산, scroll 리스너와의 비용 차이, 막대가 처음부터 꽉 차 보이는 실수, @supports 대비까지 크로미움에서 재 본다.
- 태그: UX, Frontend, Animation, CSS, Performance
- 키워드: 스크롤 기반 애니메이션, animation-timeline, animation-range, ScrollTimeline
- 길이: 433줄
- 소제목: 시계 대신 스크롤 위치를 넣는다 / 타임라인, 키프레임, 구간이 만나는 자리 / 요소가 지나가는 구간을 잘라 쓰는 view() / 구간 경계를 직접 계산해 보기 / 자바스크립트로 같은 타임라인 만들기 / 메인 스레드가 바빠도 움직이는 이유 / 막대가 처음부터 꽉 차 있다 / 지원하지 않는 브라우저를 위한 바닥 / 스크롤 타임라인을 고를 때와 피할 때 / 면접에서 나올 만한 질문
- 직접 링크 →: scroll-patterns-overview, css-sticky-scroll-snap, scroll-triggered-intersection-observer, parallax-scrollytelling, animation-performance, debounce-throttle
- 키워드 백링크 →: pattern-proxy
- 이 글로 오는 글 ←: parallax-scrollytelling, scroll-patterns-overview, scroll-triggered-intersection-observer

#### `scroll-patterns-overview` — 스크롤 패턴 훑어보기: 스크롤이 화면에 시키는 세 가지 일

- 요약: sticky, scroll snap, reveal, 무한 스크롤, 진행 막대, 확대, 패럴랙스, 가로 스크롤, 스크롤리텔링을 자리를 정하는 것, 경계를 넘는 순간, 위치를 시계로 쓰는 것으로 나눠 본다. 패턴마다 쓰는 API, 스크롤 리스너가 무거워지는 길, 멀미와 스크롤 재킹, 숨긴 내용이 포커스와 찾기에 걸리는 문제까지 크로미움에서 확인한다.
- 태그: UX, Frontend, CSS, Animation, Accessibility
- 키워드: 스크롤 패턴, 스크롤 재킹
- 길이: 423줄
- 소제목: 스크롤이 무엇을 움직이는지로 나눈다 / 레이아웃에 맡기는 둘 / 선을 넘는 순간 한 번 / 스크롤 위치를 시계로 쓴다 / 두 가지를 섞은 패턴 / 스크롤 이벤트가 무거워지는 길 / 스크롤이 사람을 괴롭힐 때 / 패턴마다 고르는 도구 / 증상에서 거꾸로 찾아가기 / 다시 기획서의 한 줄로 / 면접에서 나올 만한 질문
- 직접 링크 →: css-sticky-scroll-snap, scroll-triggered-intersection-observer, scroll-driven-animations, parallax-scrollytelling, animation-patterns, loading-patterns, dom-basics, event-propagation, animation-performance, debounce-throttle, core-web-vitals
- 이 글로 오는 글 ←: css-sticky-scroll-snap, parallax-scrollytelling, scroll-driven-animations, scroll-triggered-intersection-observer

#### `scroll-triggered-intersection-observer` — IntersectionObserver: 화면에 들어온 순간을 브라우저에게 묻기

- 요약: scroll 리스너로 카드 300개를 매번 재던 코드를 관찰자로 바꾸고, 콜백이 언제 어떤 값으로 불리는지 크로미움에서 기록한다. threshold가 정확히 오지 않는 이유, rootMargin, 한 번 불리고 멈추는 무한 스크롤 센티널, React에서의 정리까지 다룬다.
- 태그: UX, Frontend, Performance, Browser, JavaScript
- 키워드: IntersectionObserver, rootMargin, 무한 스크롤 센티널
- 길이: 353줄
- 소제목: 스크롤마다 300개를 재고 있었다 / 관찰자에게 맡기면 프레임마다 브라우저가 계산한다 / 처음 한 번은 무조건 불린다 / threshold는 넘어간 다음에 알려 준다 / 미리 당겨 오는 rootMargin / 무한 스크롤의 센티널이 한 번만 불린다 / React에서는 정리까지 한 묶음이다 / 관찰자가 안 불릴 때 보는 순서 / 면접에서 나올 만한 질문
- 직접 링크 →: scroll-patterns-overview, scroll-driven-animations, parallax-scrollytelling, dom-basics, core-web-vitals, debounce-throttle, loading-patterns
- 키워드 백링크 →: css-sticky-scroll-snap, animation-performance, pattern-proxy, event-loop
- 이 글로 오는 글 ←: css-sticky-scroll-snap, islands-resumability, parallax-scrollytelling, rendering-performance-optimization, scroll-driven-animations, scroll-patterns-overview

#### `spring-animation` — 스프링 애니메이션: 시간 대신 힘으로 움직이기

- 요약: 열다가 바로 닫으면 끊기는 메뉴에서 출발해 stiffness, damping, mass가 감쇠비 하나로 묶이는 과정과 넘침 계산, 목표가 바뀔 때 속도가 이어지는 이유를 직접 적분해 본다. cubic-bezier와 linear()로 흉내 내는 법과 그 한계도 다룬다.
- 태그: UX, Frontend, Animation, CSS, JavaScript
- 키워드: 스프링 애니메이션, 감쇠비, linear() 이징, overshoot
- 길이: 350줄
- 소제목: 매 프레임 힘을 다시 계산한다 / 세 숫자가 정하는 성격 / 얼마나 넘치나 / 중간에 목표가 바뀌는 순간 / CSS만으로 흉내 내기 / 라이브러리마다 부르는 이름 / 스프링이 맞지 않는 자리 / 시간표를 쓸지 힘을 쓸지 / 면접에서 나올 만한 질문
- 직접 링크 →: animation-patterns, view-transitions-shared-element, animation-performance
- 이 글로 오는 글 ←: animation-patterns, animation-performance, view-transitions-shared-element

#### `view-transitions-shared-element` — View Transitions와 FLIP: 카드가 상세 화면으로 이어지게

- 요약: 목록 카드가 상세의 큰 사진이 되는 공유 요소 전환을 FLIP으로 직접 계산하고, View Transitions API로 브라우저에 맡겨 본다. 이름이 겹칠 때의 오류, 문서 간 전환, 지원 범위, React의 ViewTransition과 Next.js, 움직임 줄이기까지 크로미움에서 확인한다.
- 태그: UX, Frontend, Animation, Browser, React, Next.js
- 키워드: View Transitions API, 공유 요소 전환, FLIP 기법, view-transition-name
- 길이: 472줄
- 소제목: 두 화면에 같은 물체가 있다는 착각 / FLIP: 처음과 끝만 재고 사이를 transform으로 메운다 / FLIP이 어려워지는 곳 / 브라우저가 찍어서 이어 주는 View Transitions / 이름이 겹치면 전환은 통째로 건너뛴다 / 페이지 이동에도 붙는 문서 간 전환 / 어디까지 지원하나 / React와 Next.js에서 쓰기 / 움직임 줄이기 설정은 저절로 반영되지 않는다 / 전환이 안 보일 때 보는 순서 / 면접에서 나올 만한 질문
- 직접 링크 →: animation-patterns, spring-animation, animation-performance
- 이 글로 오는 글 ←: animation-patterns, animation-performance, spring-animation

### 자기개발 › 수학 (`self-development/math`)

#### `pythagorean-theorem` — 피타고라스 정리, 삼각형 네 개를 옮겨 보면

- 요약: 거리 계산 코드마다 들어 있는 a² + b² = c². 삼각형 네 개의 자리만 바꾸는 증명과 피타고라스 수, 역, 그리고 n차원 거리 공식까지 이어 봤다.
- 태그: Math, Geometry, Algorithm
- 키워드: 피타고라스 정리, 유클리드 거리, 피타고라스 수
- 길이: 267줄
- 소제목: 직각삼각형의 세 변 사이에 있는 규칙 / 삼각형 네 개를 옮겨 보면 / 3, 4, 5 같은 숫자들 / 거꾸로도 성립한다 / 거리 공식이 되기까지 / 이름은 피타고라스지만 / 정리 / 면접에서 나올 만한 질문
- 키워드 백링크 →: vector-db
- 이 글로 오는 글 ←: ray-casting, vector-db

## 키워드 소유 (백링크 대상)

같은 키워드를 두 글이 가지면 긴 키워드·먼저 찾은 글로만 링크된다. 새 글의 키워드는 여기 없는 말로 고른다.

- _helpers.tpl → `helm-chart-templates`
- --connect-to → `curl-for-debugging`
- --force-conflicts → `kubectl-apply-ssa`
- --max-old-space-size → `garbage-collection`
- --retry-connrefused → `curl-for-debugging`
- --reuse-values → `helm-values-secrets`
- .gitignore → `git-ignore-config`
- .mcp.json → `claude-code-project-structure`
- @Version → `optimistic-locking`
- /etc/hosts → `hosts-file`
- /readyz → `health-checks`
- $__rate_interval → `grafana-dashboards`
- 206 Partial Content → `youtube-url-to-video`
- 2단계 커밋 → `distributed-transactions-2pc`
- 2의 거듭제곱 → `sd-latency-numbers`
- 3-2-1 백업 → `backup-strategy`
- 3-way 병합 → `git-branch-merge`
- 3-way handshake → `what-happens-google-com`
- 308 Permanent Redirect → `http-status-codes`
- 3값 논리 → `sql-select-where-null`
- 3단계 스키마 → `sqld-data-modeling`
- 415 Unsupported Media Type → `json-crud-http`
- 429 Too Many Requests → `rate-limiting-in-practice`
- 5-튜플 → `network-flow-logs`
- 5-tuple → `ports-and-sockets`
- 62진수 → `sd-url-shortener-key-generation`
- 802.1Q → `vlan-basics`
- 가격-시간 우선 → `sd-stock-exchange-order-book`
- 가로 스크롤 섹션 → `parallax-scrollytelling`
- 가비지 컬렉션 → `js-memory-leak`
- 가상 스레드 → `java-jvm-memory-gc`
- 가상 패치 → `waf`
- 가시성 타임아웃 → `message-queue-basics`
- 가십 프로토콜 → `sd-kv-store-failure-handling`
- 가용 영역 → `vpc-basics`
- 가용성의 아홉 → `sd-latency-numbers`
- 가중 라운드 로빈 → `load-balancing-algorithms`
- 가짜 타이머 → `test-pyramid-unit-tests`
- 간접 프롬프트 인젝션 → `rag-classic-pipeline`
- 감는 수 → `ray-casting`
- 감쇠비 → `spring-animation`
- 강제 동기 레이아웃 → `dom-basics`
- 같은 출처 정책 → `cors`
- 개념적 모델링 → `sqld-data-modeling`
- 개방 주소법 → `ds-hash-map`
- 객실 유형 재고 → `sd-hotel-inventory-scaling`
- 객체 수준 인가 → `authn-vs-authz`
- 객체 저장소 → `sd-object-storage-architecture`
- 갱신 손실 → `db-transaction-isolation`
- 거짓 양성 → `bloom-filter`
- 건수 기반 창 → `circuit-breaker`
- 검색 로그 집계 → `sd-autocomplete-data-pipeline`
- 검색어 자동완성 → `sd-autocomplete-trie`
- 게이트웨이 엔드포인트 → `vpc-subnets-route-tables`
- 게임 데이 → `chaos-engineering`
- 게임 리더보드 → `sd-leaderboard-sorted-set`
- 격리 수준 → `db-transaction-isolation`
- 결정적 마스킹 → `sit-uat-testing`
- 결정적 상태 기계 → `sd-wallet-event-sourcing`
- 결정적 재생 → `sd-stock-exchange-low-latency`
- 결제 대사 → `sd-payment-reliability`
- 결제 대행사 → `sd-payment-flow`
- 경량 트랜잭션 → `acid-vs-base`
- 경로 압축 → `ds-union-find`
- 경쟁 상태 → `race-conditions`
- 경쟁하는 컨슈머 → `message-queue-basics`
- 계층형 쿼리 → `sqld-top-n-hierarchical-pivot`
- 고가용성 → `high-availability`
- 고루틴 → `go-concurrency-basics`
- 고루틴 누수 → `go-concurrency-basics`
- 고아 조각 → `sd-object-storage-versioning-multipart`
- 고아 프로세스 → `linux-processes-signals`
- 고유 ID 생성기 → `sd-unique-id-generator`
- 고정 윈도 → `rate-limiting-algorithms`
- 고차 컴포넌트 → `pattern-decorator`
- 고차 함수 → `js-first-class-callbacks`
- 공간 복잡도 → `big-o-notation`
- 공유 요소 전환 → `view-transitions-shared-element`
- 공유 전달 → `js-primitive-vs-reference`
- 공통 원인 고장 → `high-availability`
- 과반 쿼럼 → `network-partitions`
- 관계형 DB → `db-type-relational`
- 관리형 노드 그룹 업데이트 → `k8s-cluster-upgrade`
- 관측 가능성 → `observability-basics`
- 괄호 짝 맞추기 → `ds-stack-queue-deque`
- 광고 클릭 집계 → `sd-ad-click-stream-windows`
- 교차 엔터티 → `sqld-entity-attribute-relationship`
- 교착 상태 → `db-locking-deadlock`
- 구성 드리프트 → `iac-basics`
- 구조 공유 → `js-immutability-react`
- 구조 분해 → `js-destructuring`
- 구조화 로그 → `structured-logging`
- 굴러가는 창 → `sli-slo`
- 굴리는 체크섬 → `rsync-algorithm`
- 권한 경계 → `iam-basics`
- 권한 상승 검사 → `k8s-rbac`
- 권한 있는 네임서버 → `dns`
- 그래프 DB → `db-type-graph`
- 그룹 커밋 → `sd-kv-store-write-read-path`
- 그룹 코디네이터 → `sd-mq-consumer-groups`
- 기기별 커서 → `sd-chat-message-storage`
- 기본 거부 정책 → `k8s-network-policy`
- 기본값 매개변수 → `js-function-forms`
- 기여 요인 → `postmortems`
- 깊은 복사 → `pattern-prototype`
- 깊은 헬스 체크 → `health-checks`
- 깊이 우선 탐색 → `ds-graph-bfs-dfs`
- 깨는 변경 → `api-versioning`
- 꼬리 샘플링 → `distributed-tracing`
- 꼬리 지연 → `tail-latency`
- 나머지 매개변수 → `js-spread-rest`
- 나머지 패턴 → `js-spread-rest`
- 낙관적 업데이트 → `client-data-cache`
- 낙관적 잠금 → `db-locking-deadlock`
- 내결함성 → `fault-tolerance`
- 내부 CA → `encryption-in-transit`
- 내용 기반 나누기 → `sd-file-sync-block-upload`
- 내용 주소 지정 → `git-internals-basics`
- 너비 우선 탐색 → `ds-graph-bfs-dfs`
- 네이티브 사이드카 → `k8s-pod-multicontainer`
- 네이티브 VLAN → `vlan-basics`
- 네트워크 분할 → `network-partitions`
- 네트워크 필수 개념 → `networking-essentials-map`
- 네트워크 ACL → `security-groups-nacl`
- 네트워킹 학습 순서 → `devops-networking-roadmap`
- 넥스트 키 잠금 → `mysql-innodb-basics`
- 노드 에이전트 → `k8s-daemonset`
- 노드 점검 → `k8s-node-maintenance`
- 노드별 상위 k개 → `sd-autocomplete-trie`
- 노르웨이 문제 → `yaml-for-k8s`
- 논리 대입 연산자 → `js-optional-chaining-nullish`
- 논리 디코딩 → `event-driven-architecture`
- 논리 샤드 → `sd-sharding-intro`
- 논리적 실행 순서 → `sqld-group-by-having`
- 누적 합 배열 → `ds-array-matrix`
- 느린 호출 비율 → `circuit-breaker`
- 느슨한 비교 → `js-equality-coercion`
- 느슨한 쿼럼 → `sd-kv-store-failure-handling`
- 능동 헬스 체크 → `load-balancer-basics`
- 다섯 번의 왜 → `postmortems`
- 다운샘플링 → `db-type-time-series`
- 다이아몬드 의존성 → `dependency-hell`
- 다익스트라 → `sd-maps-tiles-routing`
- 다중 문서 트랜잭션 → `acid-vs-base`
- 단락 평가 → `js-short-circuit`
- 단방향 데이터 흐름 → `mvc-pattern`
- 단일 서버 구성 → `sd-start-single-server`
- 단일 장애 지점 → `high-availability`
- 단일 테이블 설계 → `db-type-key-value`
- 단일행 함수 → `sqld-single-row-functions`
- 단조 스택 → `ds-stack-queue-deque`
- 단조 시계 → `clock-skew`
- 단축 URL → `sd-url-shortener-api-redirect`
- 단편화 → `layer-mtu-fragmentation`
- 대리 키 → `db-keys-denormalization`
- 대상 추적 정책 → `autoscaling`
- 대시보드 프로비저닝 → `grafana-dashboards`
- 대역폭 지연 곱 → `tcp-reliability-congestion`
- 더블 디스패치 → `pattern-visitor`
- 더블 부킹 → `sd-hotel-double-booking`
- 데드 레터 익스체인지 → `rabbitmq-basics`
- 데드 레터 큐 → `dead-letter-queue`
- 데드라인 전파 → `timeouts`
- 데이터 거주 → `multi-region`
- 데이터 경합 → `thread-safety`
- 데이터 계층 → `sd-split-web-and-db`
- 데이터 대조 → `microservices-decomposition`
- 데이터 독립성 → `sqld-data-modeling`
- 데이터 라우팅 서비스 → `sd-object-storage-architecture`
- 데이터 레지던시 → `global-rollout-localization`
- 데이터 모델 비교 → `db-types-overview`
- 데이터 센터 장애 조치 → `sd-multi-datacenter`
- 데코레이터 패턴 → `pattern-decorator`
- 델타 동기화 → `sd-file-sync-block-upload`
- 델타 전송 → `rsync-algorithm`
- 도메인 샤딩 → `http-versions`
- 도착 예정 시간 → `sd-maps-location-eta`
- 독이 든 메시지 → `dead-letter-queue`
- 돌아올 수 없는 지점 → `release-cutover-hypercare`
- 동기화 복제본 → `sd-mq-replication`
- 동기화 토큰 → `csrf`
- 동시 사용자 수 → `api-scaling-ladder`
- 동적 렌더링 → `nextjs-static-dynamic-rendering`
- 동적 배열 → `ds-array-matrix`
- 동적 비밀 → `secrets-management`
- 동적 스코프 → `js-scope-lexical`
- 동적 import → `code-splitting`
- 동점 깨기 → `sd-leaderboard-scaling`
- 동점 처리 열 → `api-pagination-sorting`
- 되돌리기 스택 → `pattern-command`
- 두 번째로 큰 값 → `sql-interview-problems`
- 두 포인터 → `ds-array-matrix`
- 뒤쪽 큐 → `sd-web-crawler-politeness-dedup`
- 디바운스 → `debounce-throttle`
- 디바이스 토큰 → `sd-notification-system`
- 디바이스 플러그인 → `k8s-gpu-dra`
- 디스크 버퍼 → `centralized-logging-pipeline`
- 디자인 패턴 → `design-patterns-overview`
- 라벨 셀렉터 → `k8s-labels-selectors`
- 라우팅 타일 → `sd-maps-tiles-routing`
- 라우팅 테이블 → `layer-ip-routing-icmp`
- 라이브 바인딩 → `js-es-modules`
- 라이브락 → `deadlocks`
- 락 순서 → `deadlocks`
- 락 임대 → `distributed-lock`
- 람다 아키텍처 → `sd-ad-click-exactly-once`
- 랑데부 해싱 → `consistent-hashing`
- 래딕스 트리 → `ds-trie`
- 래스터화 → `browser-rendering-pipeline`
- 램포트 시계 → `clock-skew`
- 런북 → `on-call`
- 레드-블랙 트리 → `ds-binary-tree-bst`
- 레이 캐스팅 → `ray-casting`
- 레이아웃 스래싱 → `core-web-vitals`
- 레이어드 아키텍처 → `layered-architecture`
- 레이캐스터 → `ray-casting`
- 렉시컬 스코프 → `js-scope-lexical`
- 렌더링 파이프라인 → `what-happens-google-com`
- 로그 보관 기간 → `centralized-logging-pipeline`
- 로그 복제 → `raft-consensus`
- 로그 샘플링 → `structured-logging`
- 로그 수집기 → `centralized-logging-pipeline`
- 로그 중앙 수집 → `sd-queue-logging-automation`
- 로그 컴팩션 → `kafka-basics`
- 로컬 갭 → `global-rollout-localization`
- 로컬 도메인 → `local-custom-domain`
- 로컬 클러스터 → `local-k8s-kind-minikube`
- 롤 포워드 → `rollback-strategy`
- 롤링 배포 → `rolling-deployment`
- 롱 폴링 → `realtime-communication`
- 롱 폴링 커서 → `long-polling`
- 리더 선출 → `leader-election`
- 리드-솔로몬 → `sd-object-storage-durability`
- 리랭킹 → `rag-retrieval-quality`
- 리렌더링 → `react-rerender`
- 리밸런싱 → `kafka-basics`
- 리버스 프록시 → `proxy-reverse-proxy`
- 리샤딩 → `sd-sharding-intro`
- 리스트 가상화 → `rendering-performance-optimization`
- 리틀의 법칙 → `latency-bandwidth-throughput`
- 리프레시 토큰 → `token-login`
- 리플 효과 → `animation-patterns`
- 릴리스 리비전 → `helm-basics`
- 링크 로컬 주소 → `ipv6-basics`
- 마스터 데이터 매핑 → `enterprise-system-integration`
- 마이그레이션 도구 → `db-migration-tools`
- 마이크로 프런트엔드 → `micro-frontends`
- 마이크로 프론트엔드 → `micro-frontends`
- 마이크로서비스 → `microservices`
- 마이크로세그멘테이션 → `zero-trust-architecture`
- 마이크로태스크 → `event-loop`
- 매달린 Try → `sd-wallet-transfer`
- 매칭 엔진 → `sd-stock-exchange-order-book`
- 매크로태스크 → `js-microtask-macrotask`
- 맵 매칭 → `sd-maps-location-eta`
- 머클 트리 → `merkle-tree`
- 머티리얼라이즈드 뷰 → `postgres-reporting-sql`
- 멀티 데이터 센터 → `sd-multi-datacenter`
- 멀티 리전 → `multi-region`
- 멀티 스테이지 빌드 → `dockerfile-image-layers`
- 멀티 존 → `micro-frontends`
- 멀티 컨테이너 Pod → `k8s-pod-basics`
- 멀티플렉싱 → `http-versions`
- 멀티홉 질문 → `graph-rag`
- 메멘토 패턴 → `pattern-memento`
- 메모리 가시성 → `thread-safety`
- 메모리 누수 → `js-memory-leak`
- 메모리 단편화 → `redis-memory-eviction`
- 메모이제이션 → `js-memoization`
- 메일 검색 색인 → `sd-email-storage-search`
- 메일 메타데이터 → `sd-email-storage-search`
- 메타데이터 엔드포인트 → `ssrf`
- 메타데이터 저장소 → `sd-object-storage-architecture`
- 메타스페이스 → `java-jvm-memory-gc`
- 멤테이블 → `sd-kv-store-write-read-path`
- 멱등 프로듀서 → `message-delivery-semantics`
- 멱등성 → `http-methods`
- 멱등성 키 → `resilience-patterns`
- 멱등성 키 저장소 → `idempotency-key`
- 명령 처리기 → `cqrs`
- 모놀리스 → `microservices`
- 모놀리식 아키텍처 → `monolith-architecture`
- 모듈 패턴 → `js-iife-module-pattern`
- 모듈러 모놀리스 → `modular-monolith`
- 모의 컷오버 → `release-cutover-hypercare`
- 무상태 서버 → `sd-load-balancer-stateless`
- 무중단 스키마 변경 → `zero-downtime-migrations`
- 무한 스크롤 → `loading-patterns`
- 무한 스크롤 센티널 → `scroll-triggered-intersection-observer`
- 무효화 범위 → `rendering-performance-optimization`
- 문자 인코딩 → `upper-layers-session-presentation-app`
- 문자열 인터닝 → `pattern-flyweight`
- 미들웨어 체인 → `pattern-chain-of-responsibility`
- 미디어 전용 호스트 → `youtube-url-to-video`
- 바쁜 대기 → `sd-stock-exchange-low-latency`
- 바운드 서비스 어카운트 토큰 → `k8s-serviceaccount-tokens`
- 바운드 함수 → `js-call-apply-bind`
- 바운디드 컨텍스트 → `ddd-bounded-context`
- 반경 검색 → `sd-proximity-service`
- 반동기 복제 → `mysql-replication-online-ddl`
- 반열린 구간 → `sql-filtering-operators`
- 반열림 → `circuit-breaker`
- 반정규화 → `db-keys-denormalization`
- 방마다 매기는 번호 → `sd-chat-message-storage`
- 배관 명령 → `pattern-facade`
- 배럴 파일 → `code-splitting`
- 배제 제약 → `postgres-data-types`
- 배치 처리 → `batch-processing`
- 배치 체크포인트 → `batch-processing`
- 배치 INSERT → `sql-batch-timeout-pool`
- 배포 파이프라인 → `k8s-deploy-pipeline-eks`
- 백그라운드 탭 스로틀링 → `js-timers-accuracy`
- 백분위 순위 → `sd-leaderboard-scaling`
- 백엔드 로드맵 → `backend-engineer-roadmap`
- 백엔드 엔지니어 스킬 → `backend-engineer-roadmap`
- 백엔드 학습 순서 → `backend-engineer-roadmap`
- 백프레셔 → `backpressure`
- 백필 → `zero-downtime-migrations`
- 버전 벡터 → `sd-kv-store-versioning`
- 버전 컬럼 → `optimistic-locking`
- 버퍼 풀 → `mysql-innodb-basics`
- 벌크헤드 → `resilience-patterns`
- 벡터 시계 → `clock-skew`
- 벡터 DB → `vector-db`
- 벤더 어댑터 → `enterprise-system-integration`
- 변경 결합도 → `microservices-decomposition`
- 변경 데이터 캡처 → `db-type-columnar-olap`
- 변경 창 → `network-config-cicd`
- 변이 테스트 → `test-pyramid-unit-tests`
- 변환 웹훅 → `k8s-crd`
- 병렬 세션 → `claude-code-parallel-and-scheduled`
- 병합 충돌 → `git-merge-conflict`
- 병행 실행 → `microservices-decomposition`
- 보관 단계 → `sd-metrics-storage-alerting`
- 보상 트랜잭션 → `saga-pattern`
- 보수적 갱신 → `count-min-sketch`
- 보안 그룹 → `security-groups-nacl`
- 보편 확장성 법칙 → `scaling-horizontal-vertical`
- 복사 깊이 → `js-shallow-deep-copy`
- 복식부기 → `sd-payment-flow`
- 복원 테스트 → `backup-strategy`
- 복제 슬롯 → `db-replication-sharding`
- 복제 지연 → `db-replication-sharding`
- 복제본 승격 → `sd-db-replication-intro`
- 복합 인덱스 → `db-index-design`
- 볼륨 컴팩션 → `sd-object-storage-versioning-multipart`
- 볼륨 파일 → `sd-object-storage-architecture`
- 봉투 뒷면 계산 → `sd-capacity-estimation`
- 봉투 암호화 → `encryption-at-rest`
- 부분 동기화 → `redis-replication-sentinel`
- 부분 분할 → `network-partitions`
- 부분 유니크 인덱스 → `db-keys-denormalization`
- 부분 인덱스 → `db-index-design`
- 부분 적용 → `js-currying-partial`
- 부분 clone → `git-remote-collaboration`
- 부수 효과 → `js-pure-functions`
- 부패 방지 계층 → `pattern-adapter`
- 부하 차단 → `backpressure`
- 분산 락 → `redis-basics`
- 분산 모놀리스 → `monolith-architecture`
- 분산 추적 → `distributed-tracing`
- 분산 SQL → `db-type-newsql`
- 분할 상환 → `big-o-notation`
- 불변 업데이트 → `js-immutability-react`
- 불변 인프라 → `iac-basics`
- 브랜치 바이 앱스트랙션 → `microservices-decomposition`
- 브로드캐스트 스톰 → `router-vs-switch`
- 브리지 패턴 → `pattern-bridge`
- 블라인드 인덱스 → `encryption-at-rest`
- 블라인드 SQL 주입 → `sql-injection`
- 블랙박스 모니터링 → `monitoring-basics`
- 블록 서버 → `sd-file-sync-block-upload`
- 블록 스칼라 → `yaml-for-k8s`
- 블록 스코프 → `js-var-let-const`
- 블록 참조 수 → `sd-file-sync-conflicts`
- 블루그린 배포 → `blue-green-deployment`
- 블룸 필터 → `bloom-filter`
- 비관적 잠금 → `db-locking-deadlock`
- 비난 없는 포스트모템 → `postmortems`
- 비동기 이터레이터 → `pattern-iterator`
- 비식별 관계 → `sqld-entity-attribute-relationship`
- 비잔틴 장애 → `fault-tolerance`
- 비즈니스 지표 → `sd-queue-logging-automation`
- 비지터 패턴 → `pattern-visitor`
- 비트 부패 → `sd-object-storage-durability`
- 비트레이트 사다리 → `sd-video-upload-transcoding`
- 빈 취소 → `sd-wallet-transfer`
- 빈약한 도메인 모델 → `mvc-pattern`
- 빌더 패턴 → `pattern-builder`
- 빌드 캐시 → `dockerfile-image-layers`
- 빠른 포인터와 느린 포인터 → `ds-linked-list`
- 사가 패턴 → `microservices`
- 사설 대역 → `layer-ip-addressing`
- 사용자 인수 테스트 → `sit-uat-testing`
- 사용자 정의 브리지 → `docker-network-volume`
- 사용자별 채널 → `sd-nearby-friends`
- 사이드카 컨테이너 → `k8s-pod-multicontainer`
- 사전 배포 버전 → `semantic-versioning`
- 삭제 마커 → `sd-object-storage-versioning-multipart`
- 상관 서브쿼리 → `sqld-correlated-subquery`
- 상속보다 합성 → `design-patterns-overview`
- 상수 접기 → `sql-case-when`
- 상태 있는 채팅 서버 → `sd-chat-connections`
- 상태 정규화 → `js-immutability-react`
- 상태 코드 → `http-status-codes`
- 상태 패턴 → `pattern-state`
- 상태 팬아웃 → `sd-chat-presence`
- 생산자와 소비자 → `sd-queue-logging-automation`
- 샤드 키 → `mongodb-document-model`
- 서머리 지표 → `metrics-types`
- 서명 키 교체 → `jwt-key-rotation`
- 서명된 업로드 주소 → `sd-video-upload-transcoding`
- 서버 상태 → `client-data-cache`
- 서버 액션 → `react-server-components`
- 서버 쪽 apply → `kubectl-apply-ssa`
- 서버 컴포넌트 → `rendering-strategies`
- 서버 한 대 → `sd-start-single-server`
- 서버리스 아키텍처 → `serverless-architecture`
- 서브넷 마스크 → `layer-ip-addressing`
- 서비스 디스커버리 → `service-discovery`
- 서비스 레지스트리 → `service-discovery`
- 서비스 메시 → `service-mesh`
- 서비스 컨테이너 → `integration-tests-real-db`
- 서킷 브레이커 → `resilience-patterns`
- 선언형 인프라 → `iac-basics`
- 선택적 하이드레이션 → `hydration`
- 선형화 가능성 → `db-consistency-cap`
- 선형화 검사기 → `consistency-models`
- 선호 목록 → `sd-kv-store-partition-replication`
- 설계 면접 네 단계 → `sd-interview-framework`
- 설계 사례 읽는 순서 → `system-design-study-path`
- 세그먼트 파일 → `sd-mq-storage-partitions`
- 세대별 가설 → `garbage-collection`
- 세미 조인 → `sql-subqueries-exists-lateral`
- 세션 계층 → `upper-layers-session-presentation-app`
- 세션 보장 → `eventual-consistency`
- 세션 쿠키 → `cookie-session-login`
- 세션 타임아웃 → `sd-mq-consumer-groups`
- 세션 ID → `cookie-session-login`
- 셀 기반 구조 → `multi-region`
- 셔플 샤딩 → `fault-tolerance`
- 소비자 그룹 → `pub-sub`
- 소비자 주도 계약 → `api-versioning`
- 소진 속도 → `error-budgets`
- 속성 설명자 → `js-object-methods`
- 쇼백 → `cloud-cost-optimization`
- 수신 거부 → `sd-notification-reliability`
- 수직 확장 → `scaling-horizontal-vertical`
- 수평 확장 → `scaling-horizontal-vertical`
- 순수 함수 → `js-pure-functions`
- 순차 일관성 → `consistency-models`
- 스레드 덤프 → `deadlocks`
- 스레드 안전 → `thread-safety`
- 스칼라 서브쿼리 → `sqld-correlated-subquery`
- 스캐빈지 → `garbage-collection`
- 스캐터-개더 → `sd-leaderboard-scaling`
- 스케줄링 프레임워크 → `k8s-api-aggregation-schedulers`
- 스켈레톤 UI → `loading-patterns`
- 스코프 체인 → `js-scope-lexical`
- 스크러빙 → `ddos-protection`
- 스크럽 → `sd-object-storage-durability`
- 스크롤 기반 애니메이션 → `scroll-driven-animations`
- 스크롤 스냅 → `css-sticky-scroll-snap`
- 스크롤 재킹 → `scroll-patterns-overview`
- 스크롤 컨테이너 → `css-sticky-scroll-snap`
- 스크롤 패턴 → `scroll-patterns-overview`
- 스크롤리텔링 → `parallax-scrollytelling`
- 스키마 레지스트리 → `schema-versioning`
- 스키마 온 리드 → `sql-vs-nosql`
- 스킵 리스트 → `sd-leaderboard-sorted-set`
- 스태거 애니메이션 → `animation-patterns`
- 스택 오버플로 → `js-execution-context`
- 스테이징 영역 → `git-staging-area`
- 스트랭글러 피그 → `microservices`
- 스트리밍 복제 → `db-replication-sharding`
- 스트리밍 업로드 → `http-streaming-sse`
- 스트리밍 SSR → `rendering-strategies`
- 스트림 큐 → `kafka-vs-rabbitmq-replay`
- 스파이더 트랩 → `sd-web-crawler-politeness-dedup`
- 스팟 인스턴스 → `cloud-cost-optimization`
- 스패닝 트리 → `router-vs-switch`
- 스프링 애니메이션 → `spring-animation`
- 스플릿 브레인 → `leader-election`
- 슬라이딩 로그 → `rate-limiting-algorithms`
- 슬라이딩 윈도 최댓값 → `ds-stack-queue-deque`
- 슬라이딩 윈도 카운터 → `rate-limiting-algorithms`
- 시간 복잡도 → `big-o-notation`
- 시계 어긋남 → `clock-skew`
- 시계열 DB → `db-type-time-series`
- 시그니처 기반 탐지 → `ids-ips`
- 시드 URL → `sd-web-crawler-architecture`
- 시스템 설계 개념 지도 → `system-design-concepts-map`
- 시스템 설계 공부 순서 → `system-design-concepts-map`
- 시스템 설계 면접 → `sd-interview-framework`
- 시스템 설계 학습 경로 → `system-design-study-path`
- 시점 복구 → `postgres-operations`
- 시퀀서 → `sd-stock-exchange-low-latency`
- 식 인덱스 → `db-index-design`
- 식별자 주입 → `sql-injection`
- 실행 컨텍스트 → `js-execution-context`
- 싱글턴 패턴 → `pattern-singleton`
- 싱크홀 안티패턴 → `layered-architecture`
- 쓰기 시점 팬아웃 → `sd-news-feed-publishing`
- 쓰기 왜곡 → `db-transaction-isolation`
- 쓰기 증폭 → `db-index-pitfalls`
- 쓰기 쿼럼 → `sd-kv-store-partition-replication`
- 쓰기 CTE → `postgres-advanced-sql`
- 아웃라이어 감지 → `circuit-breaker`
- 아웃박스 릴레이 → `transactional-outbox`
- 아일랜드 아키텍처 → `islands-resumability`
- 아키텍처 결정 기록 → `architecture-patterns-overview`
- 아키텍처 패턴 선택 → `architecture-patterns-overview`
- 안전한 메서드 → `http-methods`
- 안정 정렬 → `js-array-mutation`
- 안정화 창 → `k8s-hpa`
- 안티 엔트로피 → `eventual-consistency`
- 안티 조인 → `sql-joins-in-practice`
- 알림 로그 → `sd-notification-reliability`
- 알림 저장소 → `sd-metrics-storage-alerting`
- 알림 평가기 → `sd-metrics-storage-alerting`
- 알림 피로 → `alerting`
- 암달의 법칙 → `scaling-horizontal-vertical`
- 암시적 바인딩 → `js-this-binding`
- 암시적 형 변환 → `sqld-type-conversion`
- 애그리거트 → `ddd-bounded-context`
- 애니메이션 패턴 → `animation-patterns`
- 애니캐스트 → `cdn-edge-anycast`
- 액세스 토큰 → `token-login`
- 얕은 복사 → `js-shallow-deep-copy`
- 얕은 헬스 체크 → `health-checks`
- 얕은 clone → `git-remote-collaboration`
- 어댑터 패턴 → `pattern-adapter`
- 어드미션 웹훅 → `k8s-admission-control`
- 언더레이 → `sdn-vxlan-overlay`
- 엄격 모드 → `js-strict-mode`
- 업캐스터 → `schema-versioning`
- 업캐스팅 → `event-sourcing`
- 에러 예산 → `error-budgets`
- 에스컬레이션 정책 → `on-call`
- 에이전트 루프 → `agentic-rag`
- 에이전틱 RAG → `agentic-rag`
- 엣지 PoP → `cdn-edge-anycast`
- 역색인 → `elasticsearch-inverted-index`
- 연결 리스트 → `ds-linked-list`
- 연속 출석 → `sql-interview-problems`
- 연쇄 장애 → `resilience-patterns`
- 열린 부하 모델 → `percentile-latency`
- 예약 동시성 → `serverless-limits`
- 예측 스케일링 → `autoscaling`
- 오래된 클로저 → `js-closures`
- 오리진 실드 → `cdn-edge-anycast`
- 오리진 오프로드 → `edge-caching`
- 오버부킹 → `sd-hotel-inventory-scaling`
- 오버페칭 → `graphql-basics`
- 오토스케일링 → `autoscaling`
- 오퍼레이터 패턴 → `k8s-operators`
- 오프라인 재생 → `sd-music-streaming`
- 오프셋 되감기 → `kafka-vs-rabbitmq-replay`
- 온라인 DDL → `mysql-replication-online-ddl`
- 온콜 → `on-call`
- 옵서버 패턴 → `pattern-observer`
- 옵셔널 체이닝 → `js-optional-chaining-nullish`
- 와이드 컬럼 → `db-type-wide-column`
- 와일드카드 단어 검색 → `ds-trie`
- 요청 수 제한기 → `sd-rate-limiter-design`
- 요청 스머글링 → `http-message`
- 요청 헤징 → `retries`
- 요청-응답 API → `api-styles-overview`
- 용량 어림 → `sd-capacity-estimation`
- 우선순위 큐 → `ds-heap`
- 우아한 성능 저하 → `fault-tolerance`
- 원격 추적 브랜치 → `git-remote-collaboration`
- 원격 캐시 → `build-caching`
- 원본과 사본 → `db-types-overview`
- 원시값 → `js-primitive-vs-reference`
- 원자성 → `acid-transactions`
- 웜 스탠바이 → `disaster-recovery`
- 웜 풀 → `autoscaling`
- 웹 계층 → `sd-load-balancer-stateless`
- 웹 메르카토르 → `sd-maps-tiles-routing`
- 웹 애플리케이션 방화벽 → `waf`
- 웹 크롤러 → `sd-web-crawler-architecture`
- 웹사이트 접속 과정 → `first-page-from-power-on`
- 웹훅 → `webhooks`
- 웹훅 서명 → `webhooks`
- 위상 정렬 → `ds-graph-bfs-dfs`
- 위치 기반 서비스 → `sd-proximity-service`
- 위치 캐시 → `sd-nearby-friends`
- 윈도우 프레임 → `sqld-window-functions`
- 윈도우 함수 → `sqld-window-functions`
- 유니온 파인드 → `ds-union-find`
- 유닛 파일 → `linux-systemd-systemctl`
- 유령 의존성 → `dependency-hell`
- 유명인 문제 → `sd-news-feed-publishing`
- 유비쿼터스 언어 → `ddd-bounded-context`
- 유클리드 거리 → `pythagorean-theorem`
- 유한 상태 기계 → `pattern-state`
- 윤초 → `clock-skew`
- 음악 스트리밍 → `sd-music-streaming`
- 의미상 잠금 → `saga-pattern`
- 의존 규칙 → `clean-architecture`
- 이더넷 프레임 → `layer-link-ethernet-arp`
- 이레이저 코딩 → `sd-object-storage-durability`
- 이벤트 기반 아키텍처 → `event-driven-architecture`
- 이벤트 기반 API → `api-styles-overview`
- 이벤트 루프 → `event-loop`
- 이벤트 버블링 → `event-propagation`
- 이벤트 소싱 → `event-driven-architecture`
- 이벤트 스토밍 → `ddd-bounded-context`
- 이벤트 시간 → `sd-ad-click-stream-windows`
- 이벤트 위임 → `event-delegation`
- 이벤트 저장소 → `event-sourcing`
- 이벤트 캡처링 → `event-propagation`
- 이상 점수 → `waf`
- 이전 페이지 커서 → `api-pagination-sorting`
- 이중 쓰기 → `transactional-outbox`
- 이중 예약 → `sd-hotel-double-booking`
- 이중 제출 쿠키 → `csrf`
- 이중 청구 → `sd-payment-reliability`
- 이진 탐색 트리 → `ds-binary-tree-bst`
- 이진 힙 → `ds-heap`
- 이터레이터 패턴 → `pattern-iterator`
- 이터레이터 헬퍼 → `pattern-iterator`
- 익명 볼륨 → `docker-commands-workflow`
- 익스체인지 → `rabbitmq-basics`
- 인가 코드 → `oauth`
- 인과 일관성 → `consistency-models`
- 인기 검색어 → `lossy-counting`
- 인라인 뷰 → `sqld-subquery-set-operators`
- 인박스 테이블 → `message-delivery-semantics`
- 인접 리스트 → `ds-graph-bfs-dfs`
- 인증과 인가 → `authn-vs-authz`
- 인증서 자동 갱신 → `encryption-in-transit`
- 인증서 체인 → `https-tls`
- 인터넷 게이트웨이 → `vpc-basics`
- 인터페이스 엔드포인트 → `vpc-peering-transit-privatelink`
- 인터프리터 패턴 → `pattern-interpreter`
- 일관된 해싱 → `db-sharding`
- 일관성 모델 → `consistency-models`
- 일급 함수 → `js-first-class-callbacks`
- 읽기 모델 → `cqrs`
- 읽기 복구 → `eventual-consistency`
- 읽기 복제본 → `db-replication-sharding`
- 읽기 시점 팬아웃 → `sd-news-feed-publishing`
- 읽기 증폭 → `sd-kv-store-write-read-path`
- 임계 경로 → `sd-video-upload-transcoding`
- 임대 갱신 → `dhcp`
- 임베디드 DB → `db-type-embedded`
- 임베딩 → `vector-db`
- 임시 컨테이너 → `k8s-pod-troubleshooting`
- 임시 컨테이너 디버깅 → `k8s-daemonset`
- 임시 포트 → `ports-and-sockets`
- 자동 롤백 → `rollback-strategy`
- 자동 배칭 → `react-rerender`
- 자동 압축 → `claude-code-context-window`
- 자료구조 면접 → `data-structures-overview`
- 자료구조 선택 → `data-structures-overview`
- 자바스크립트 로드맵 → `javascript-roadmap`
- 자바스크립트 학습 순서 → `javascript-roadmap`
- 자발적 중단 → `k8s-pod-disruption-budget`
- 자연 키 → `db-keys-denormalization`
- 작업 테이블 → `sql-cte-recursive`
- 작업 트리 → `git-staging-area`
- 장애 도메인 → `sd-object-storage-durability`
- 장애 등급 → `production-incidents`
- 장애 모델 → `fault-tolerance`
- 장애 선언 → `production-incidents`
- 장애 조치 시간 → `failover`
- 장애 좁히기 → `network-troubleshooting-by-layer`
- 장애 지휘자 → `production-incidents`
- 재개 가능성 → `islands-resumability`
- 재경로 → `sd-maps-location-eta`
- 재귀 리졸버 → `dns`
- 재귀 하강 파서 → `pattern-interpreter`
- 재귀 CTE → `sqld-top-n-hierarchical-pivot`
- 재생 검증 → `sd-wallet-event-sourcing`
- 재생 수 정산 → `sd-music-streaming`
- 재시도 예산 → `retries`
- 재시도 증폭 → `retries`
- 재암호화 → `encryption-in-transit`
- 재전송 공격 → `webhooks`
- 재전송 비율 → `network-monitoring`
- 재조정 → `react-rerender`
- 재할당 → `js-var-let-const`
- 재해 복구 → `disaster-recovery`
- 저장 데이터 암호화 → `encryption-at-rest`
- 적응형 스트리밍 → `sd-video-streaming-cost`
- 적재율 → `ds-hash-map`
- 전개 문법 → `js-spread-rest`
- 전략 패턴 → `pattern-strategy`
- 전략적 병합 패치 → `kustomize-basics`
- 전방향 안전성 → `https-tls`
- 전송 구간 암호화 → `encryption-in-transit`
- 전이 테이블 → `postgres-functions-triggers`
- 전체 재동기화 → `sd-file-sync-conflicts`
- 전파 지연 → `latency-bandwidth-throughput`
- 점수 구간 샤딩 → `sd-leaderboard-scaling`
- 점프 해시 → `consistent-hashing`
- 접근자 속성 → `js-object-methods`
- 접두사 샤딩 → `sd-autocomplete-data-pipeline`
- 접속 상태 표시 → `sd-chat-presence`
- 접속 위치 표 → `sd-chat-connections`
- 접속 URI → `postgres-connections-pg-hba`
- 정규화 → `db-modeling-normalization`
- 정산 파일 → `sd-payment-reliability`
- 정상 상태 가설 → `chaos-engineering`
- 정수 나눗셈 → `sql-aggregation-pitfalls`
- 정적 렌더링 → `nextjs-static-dynamic-rendering`
- 정적 팩토리 메서드 → `pattern-factory-method`
- 정확히 한 번 → `message-delivery-semantics`
- 제로 트러스트 → `zero-trust-architecture`
- 제품군 → `pattern-abstract-factory`
- 조건부 집계 → `sql-case-when`
- 조정 루프 → `iac-basics`
- 좀비 프로세스 → `linux-processes-signals`
- 종료 코드 137 → `docker-commands-workflow`
- 주 DB → `sd-db-replication-intro`
- 주변 검색 → `sd-proximity-service`
- 주변 순위 → `sd-leaderboard-sorted-set`
- 주변 친구 → `sd-nearby-friends`
- 주식별자 → `sqld-entity-attribute-relationship`
- 중간 인증서 → `https-tls`
- 중위 순회 → `ds-binary-tree-bst`
- 중재자 패턴 → `pattern-mediator`
- 중첩 서브쿼리 → `sqld-subquery-set-operators`
- 즉시 로딩 → `n-plus-one-queries`
- 즉시 실행 함수 → `js-iife-module-pattern`
- 증상별로 펼 글 → `devops-networking-roadmap`
- 증폭 공격 → `udp-and-quic`
- 증폭률 → `ddos-protection`
- 지도 타일 → `sd-maps-tiles-routing`
- 지속성 → `acid-transactions`
- 지속적 전달 → `ci-cd-basics`
- 지속적 통합 → `ci-cd-basics`
- 지수 백오프 → `resilience-patterns`
- 지식 그래프 → `graph-rag`
- 지연 로딩 → `pattern-proxy`
- 지연 무릎 → `api-scaling-ladder`
- 지연 시간 숫자 → `sd-latency-numbers`
- 지연 SLI → `sli-slo`
- 지오펜싱 → `ray-casting`
- 지오해시 → `geohash`
- 지표 모니터링 시스템 → `sd-metrics-collection`
- 지표 수집기 → `sd-metrics-collection`
- 직렬화 지연 → `latency-bandwidth-throughput`
- 집계 파이프라인 → `mongodb-document-model`
- 집계 함수 → `sqld-group-by-having`
- 집합 연산자 → `sqld-set-operators`
- 차등 백업 → `backup-strategy`
- 참조 무결성 → `sql-basics`
- 참조 카운팅 → `garbage-collection`
- 참조 투명성 → `js-pure-functions`
- 참조값 → `js-primitive-vs-reference`
- 채팅 기록 저장소 → `sd-chat-message-storage`
- 채팅 서버 배정 → `sd-chat-connections`
- 책임 연쇄 패턴 → `pattern-chain-of-responsibility`
- 처리되지 않은 거부 → `js-promises`
- 처리율 제한기 → `sd-rate-limiter-design`
- 첨부 파일 중복 제거 → `sd-email-storage-search`
- 청크 겹침 → `rag-classic-pipeline`
- 청크 단위 처리 → `batch-processing`
- 체크포인트 → `postgres-architecture`
- 초과 예약 → `sd-hotel-inventory-scaling`
- 초성 검색 → `global-rollout-localization`
- 최상위 await → `js-async-await`
- 최소 공통 조상 → `ds-binary-tree-bst`
- 최장 접두사 일치 → `layer-ip-routing-icmp`
- 최종 일관성 → `db-consistency-cap`
- 추상 팩토리 → `pattern-abstract-factory`
- 추정 롤백 → `distributed-transactions-2pc`
- 축출 정책 → `redis-memory-eviction`
- 출력 인코딩 → `xss`
- 출력 컬럼 이름 → `sql-logical-order`
- 충돌 사본 → `sd-file-sync-conflicts`
- 취소 신호 → `abort-controller`
- 취소 전파 → `abort-controller`
- 침입 방지 시스템 → `ids-ips`
- 침입 탐지 시스템 → `ids-ips`
- 카나리 릴리스 → `canary-release`
- 카디널리티 추정 → `hyperloglog`
- 카디널리티 폭발 → `db-type-time-series`
- 카오스 엔지니어링 → `chaos-engineering`
- 카운터 리셋 → `metrics-types`
- 카티션 곱 → `sqld-joins`
- 카파 아키텍처 → `sd-ad-click-exactly-once`
- 캐럿 범위 → `semantic-versioning`
- 캐시 개념 지도 → `caching-concepts-map`
- 캐시 계층 → `sd-cache-and-cdn-tier`
- 캐시 관통 → `caching-strategies`
- 캐시 리스 → `cache-invalidation`
- 캐시 무효화 → `http-caching-cdn`
- 캐시 스탬피드 → `http-caching-cdn`
- 캐시 키 정규화 → `edge-caching`
- 캐시 히트율 → `sd-cache-and-cdn-tier`
- 캡슐화 오버헤드 → `packet-encapsulation`
- 커넥션 누수 → `connection-pool`
- 커넥션 드레이닝 → `load-balancer-basics`
- 커넥션 풀 → `sql-batch-timeout-pool`
- 커링 → `js-currying-partial`
- 커맨드 패턴 → `pattern-command`
- 커뮤니티 요약 → `graph-rag`
- 커밋 결과 불명 → `acid-transactions`
- 커버링 인덱스 → `db-index-design`
- 커서 서명 → `api-pagination-sorting`
- 커서 페이지네이션 → `rest-api-design`
- 커스텀 서브에이전트 → `claude-code-extensions`
- 커스텀 에포크 → `sd-unique-id-generator`
- 컨슈머 랙 → `kafka-basics`
- 컨테이너 이미지 → `docker-container-basics`
- 컨트롤 루프 → `k8s-controllers-reconcile`
- 컬럼형 저장 → `db-type-columnar-olap`
- 컴포지트 패턴 → `pattern-composite`
- 컷오버 → `release-cutover-hypercare`
- 코드 스플리팅 → `code-splitting`
- 코디네이터 노드 → `sd-kv-store-partition-replication`
- 코레오그래피 → `event-driven-architecture`
- 콘텐츠 캐시 → `sd-news-feed-retrieval`
- 콘텐츠 협상 → `http-message`
- 콜드 미스 → `caching-concepts-map`
- 콜드 스타트 → `cold-starts`
- 콜백 지옥 → `js-callback-hell`
- 콜백 함수 → `js-first-class-callbacks`
- 쿠버네티스 감사 로그 → `k8s-audit-logging`
- 쿠버네티스 네임스페이스 → `k8s-namespace`
- 쿠버네티스 로드맵 → `k8s-learning-roadmap`
- 쿠버네티스 컨트롤 플레인 → `k8s-architecture`
- 쿠버네티스 학습 순서 → `k8s-learning-roadmap`
- 쿠쿠 필터 → `bloom-filter`
- 쿠키 세션 → `cookie-session-login`
- 쿼드트리 → `quadtree`
- 쿼럼 큐 → `rabbitmq-basics`
- 쿼리 깊이 제한 → `graphql-basics`
- 큐 깊이 → `message-queue-basics`
- 크론 표현식 → `cron-jobs`
- 크루스칼 → `ds-union-find`
- 크립토 셰딩 → `event-sourcing`
- 클라우드 예약 작업 → `claude-code-parallel-and-scheduled`
- 클라이언트 라우팅 → `rendering-csr-spa`
- 클라이언트 측 디스커버리 → `service-discovery`
- 클래스 필드 → `js-classes`
- 클러스터 업그레이드 → `k8s-cluster-upgrade`
- 클러스터드 인덱스 → `db-index`
- 클로저 → `js-closures`
- 클린 아키텍처 → `clean-architecture`
- 키 생성 서버 → `sd-url-shortener-key-generation`
- 키 선점 → `idempotency-key`
- 키-값 저장소 → `db-type-key-value`
- 키보드에서 서버까지 → `networking-essentials-map`
- 키셋 페이지네이션 → `sql-query-rewrite`
- 킬 스위치 → `ab-testing`
- 타기팅 규칙 → `feature-flags`
- 태그 무효화 → `cache-invalidation`
- 태그된 템플릿 → `js-template-literals`
- 태스크 큐 → `event-loop`
- 텀블링 윈도 → `sd-ad-click-stream-windows`
- 테스트 대역 → `test-pyramid-unit-tests`
- 테스트 데이터 빌더 → `pattern-builder`
- 테스트 피라미드 → `test-pyramid-unit-tests`
- 템플릿 데이터베이스 → `integration-tests-real-db`
- 템플릿 리터럴 → `js-template-literals`
- 템플릿 메서드 → `pattern-template-method`
- 토큰 인트로스펙션 → `api-gateway-use-cases`
- 툼스톤 → `db-type-wide-column`
- 트라이 자료구조 → `sd-autocomplete-trie`
- 트라이 DB → `sd-autocomplete-data-pipeline`
- 트래픽 셰이핑 → `traffic-shaping-qos`
- 트랜스코딩 → `sd-video-upload-transcoding`
- 트랜잭셔널 아웃박스 → `microservices`
- 트랜잭셔널 프로듀서 → `message-delivery-semantics`
- 트램펄린 → `js-execution-context`
- 트렁크 기반 개발 → `git-branching-strategy`
- 트렁크 포트 → `vlan-basics`
- 트리 셰이킹 → `code-splitting`
- 티켓 서버 → `sd-unique-id-generator`
- 파라미터 바인딩 → `sql-injection`
- 파서 차단 스크립트 → `browser-rendering-pipeline`
- 파일 권한 → `linux-files-permissions`
- 파일 배치 연동 → `enterprise-system-integration`
- 파일 시스템 백업 → `velero-backup`
- 파일럿 라이트 → `disaster-recovery`
- 파티셔닝 → `db-partitioning`
- 파티션 가지치기 → `db-partitioning`
- 파티션 배정 전략 → `sd-mq-consumer-groups`
- 파티션 키 → `sd-mq-storage-partitions`
- 패럴랙스 → `parallax-scrollytelling`
- 패킷 캡처 → `packet-capture-tcpdump`
- 팩토리 메서드 → `pattern-factory-method`
- 팬아웃 → `pub-sub`
- 팬아웃 증폭 → `tail-latency`
- 퍼블릭 서브넷 → `vpc-subnets-route-tables`
- 퍼사드 패턴 → `pattern-facade`
- 페이로드 변환 → `api-gateway-use-cases`
- 페이아웃 → `sd-payment-flow`
- 페인트 기록 → `browser-rendering-pipeline`
- 펜싱 토큰 → `distributed-lock`
- 평균 메모리 접근 시간 → `caching-concepts-map`
- 포스트모템 → `postmortems`
- 포워드 인증 → `api-gateway-use-cases`
- 포워드 프록시 → `proxy-reverse-proxy`
- 포트 포워딩 → `iptables-nat`
- 포트와 어댑터 → `hexagonal-architecture`
- 포함 증명 → `merkle-tree`
- 폭발 반경 → `network-config-cicd`
- 폴리글랏 퍼시스턴스 → `db-architecture-by-scale`
- 폴리싱 → `traffic-shaping-qos`
- 표본 비율 불일치 → `ab-testing`
- 표현 계층 → `upper-layers-session-presentation-app`
- 표현 문제 → `pattern-visitor`
- 풀 고갈 → `connection-pool`
- 프라이빗 서브넷 → `vpc-subnets-route-tables`
- 프레임 간격 → `packet-encapsulation`
- 프레임 예산 → `animation-performance`
- 프로비저닝된 동시성 → `cold-starts`
- 프로젝트 폴더 구조 → `k8s-project-structure`
- 프로토타입 오염 → `js-prototype-chain`
- 프로토타입 체인 → `js-prototype-chain`
- 프로토타입 패턴 → `pattern-prototype`
- 프록시 패턴 → `pattern-proxy`
- 프론트 컨트롤러 → `mvc-pattern`
- 프리로드 스캐너 → `browser-rendering-pipeline`
- 플라이웨이트 패턴 → `pattern-flyweight`
- 플래그 평가 → `feature-flags`
- 플랜 모드 → `claude-code-context-window`
- 플레이북 → `ansible-network-automation`
- 플레이키 테스트 → `ci-cd-basics`
- 플루언트 인터페이스 → `pattern-builder`
- 피드 캐시 → `sd-news-feed-retrieval`
- 피드 커서 → `sd-news-feed-retrieval`
- 피벗 단계 → `saga-pattern`
- 피처 플래그 → `ab-testing`
- 피크 QPS → `sd-capacity-estimation`
- 피타고라스 수 → `pythagorean-theorem`
- 피타고라스 정리 → `pythagorean-theorem`
- 필드 셀렉터 → `k8s-labels-selectors`
- 필터 정책 → `pub-sub`
- 하위 호환 → `api-versioning`
- 하이 워터마크 → `sd-mq-replication`
- 하이드레이션 → `rendering-strategies`
- 하이드레이션 불일치 → `hydration`
- 하이브리드 검색 → `rag-retrieval-quality`
- 하이퍼케어 → `release-cutover-hypercare`
- 하트비트 기준 시간 → `sd-chat-presence`
- 하트비트 카운터 → `sd-kv-store-failure-handling`
- 할리우드 원칙 → `pattern-template-method`
- 함수 기반 인덱스 → `sqld-type-conversion`
- 함수 래퍼 → `js-first-class-callbacks`
- 함수 선언문 → `js-function-forms`
- 함수 종속 → `db-modeling-normalization`
- 함수 표현식 → `js-function-forms`
- 합성 스레드 → `animation-performance`
- 합친 ETag → `sd-object-storage-versioning-multipart`
- 핫 키 → `caching-strategies`
- 핫 파티션 → `db-type-key-value`
- 해를 따라 넘기는 교대 → `on-call`
- 해시 슬롯 → `redis-cluster`
- 해시 조인 → `db-type-relational`
- 해시 테이블 → `ds-hash-map`
- 해시 트리 → `merkle-tree`
- 해시 플러딩 → `ds-hash-map`
- 행 곱하기 → `sql-joins-in-practice`
- 행 단위 보안 → `postgres-roles-security`
- 행 우선 → `ds-array-matrix`
- 허용 지연 → `sd-ad-click-stream-windows`
- 험블 오브젝트 → `clean-architecture`
- 헥사고날 아키텍처 → `hexagonal-architecture`
- 헬스 체크 → `osi-in-practice`
- 현지화 → `global-rollout-localization`
- 형제 버전 → `sd-kv-store-versioning`
- 형태소 분석기 → `elasticsearch-inverted-index`
- 호가창 → `sd-stock-exchange-order-book`
- 호스티드 결제 페이지 → `sd-payment-flow`
- 호이스팅 → `js-hoisting-tdz`
- 혼잡 제어 → `tcp-reliability-congestion`
- 혼합 팬아웃 → `sd-news-feed-publishing`
- 홀 펀칭 → `nat-traversal`
- 홈 리전 → `multi-region`
- 화살표 함수 → `js-function-forms`
- 황금 신호 → `monitoring-basics`
- 흐름 로그 → `network-flow-logs`
- 흐름 제어 → `tcp-reliability-congestion`
- 희소 배열 → `js-array-transform`
- 희소 오프셋 인덱스 → `sd-mq-storage-partitions`
- 히스토그램 버킷 → `metrics-types`
- 힌트 핸드오프 → `eventual-consistency`
- 힙 스냅샷 → `js-memory-leak`
- A/B 테스트 → `ab-testing`
- ABAC → `iam-basics`
- AbortController → `browser-fetch`
- AbortSignal → `browser-fetch`
- AbortSignal.any → `abort-controller`
- ABR → `sd-video-streaming-cost`
- Abstract Factory → `pattern-abstract-factory`
- accept 큐 → `tcp-connection-lifecycle`
- Accept-Encoding → `http-message`
- access entry → `eks-cluster-basics`
- Access-Control-Allow-Origin → `cors`
- ACID → `acid-transactions`
- actionlint → `github-actions-docker-ecr`
- ADD_MONTHS → `sqld-single-row-functions`
- Address already in use → `ports-and-sockets`
- AdminNetworkPolicy → `k8s-network-policy`
- advanceTimersByTimeAsync → `js-microtask-macrotask`
- advisory lock → `pessimistic-locking`
- aggregated ClusterRole → `k8s-rbac`
- AggregateError → `js-promise-combinators`
- AI Engineering Fundamentals → `claude-code-fundamentals-map`
- Alertmanager → `alerting`
- allkeys-lru → `redis-memory-eviction`
- ALLOWED DISRUPTIONS → `k8s-pod-disruption-budget`
- allowedDevOrigins → `local-custom-domain`
- AllowedIPs → `vpn-ipsec-wireguard`
- allowPrivilegeEscalation → `k8s-security-context`
- ALTER DEFAULT PRIVILEGES → `postgres-roles-security`
- ambient 모드 → `service-mesh`
- AnalysisTemplate → `canary-release`
- animation-range → `scroll-driven-animations`
- animation-timeline → `scroll-driven-animations`
- annotated tag → `git-internals-basics`
- Ansible → `ansible-network-automation`
- any_value → `sql-aggregation-pitfalls`
- Anycast → `cdn-edge-anycast`
- AOF → `redis-persistence-ha`
- API 게이트웨이 → `gateway`
- API 게이트웨이 사용 사례 → `api-gateway-use-cases`
- API 버전 관리 → `rest-api-design`
- API 스타일 → `api-styles-overview`
- API 집계 → `k8s-api-aggregation-schedulers`
- API 폐기 정책 → `k8s-feature-maturity`
- API 확장 사다리 → `api-scaling-ladder`
- apiserver_requested_deprecated_apis → `k8s-feature-maturity`
- APIService → `k8s-api-aggregation-schedulers`
- APNs → `sd-notification-system`
- app.kubernetes.io/name → `k8s-labels-selectors`
- AppendEntries → `raft-consensus`
- appendfsync → `redis-persistence-ha`
- application/x-www-form-urlencoded → `html-form-http`
- ApplicationSet → `argocd-basics`
- AppProject → `argocd-basics`
- Argo Rollouts → `canary-release`
- arguments 객체 → `js-function-forms`
- ARP → `layer-link-ethernet-arp`
- AssumeRole → `iam-basics`
- Astro → `islands-resumability`
- async/await → `js-async-await`
- AsyncLocalStorage → `rendering-ssr`
- audit-policy-file → `k8s-audit-logging`
- auto.offset.reset → `kafka-vs-rabbitmq-replay`
- automountServiceAccountToken → `k8s-serviceaccount-tokens`
- autosquash → `git-rebase`
- autovacuum → `postgres-mvcc-vacuum`
- Avro → `schema-versioning`
- awk → `linux-grep-awk-sed`
- AWS ALB → `reverse-proxy-lb-api-gateway`
- B-tree 인덱스 → `db-index`
- backoffLimitPerIndex → `k8s-job-cronjob`
- BackupStorageLocation → `velero-backup`
- BACKWARD_TRANSITIVE → `schema-versioning`
- BASE 모델 → `acid-vs-base`
- Base62 → `sd-url-shortener-key-generation`
- Base64 → `base64`
- base64url → `base64`
- Basic 인증 → `base64`
- BBR → `tcp-reliability-congestion`
- BCNF → `db-modeling-normalization`
- BETWEEN 경계 → `sql-filtering-operators`
- BeyondCorp → `zero-trust-architecture`
- bfcache → `frontend-browser-cache`
- BFF → `gateway`
- Big Ball of Mud → `monolith-architecture`
- Big O → `big-o-notation`
- bind mount → `docker-network-volume`
- binlog → `mysql-replication-online-ddl`
- Bitmap Heap Scan → `db-index`
- blackbox_exporter → `network-monitoring`
- BLMOVE → `message-queue-basics`
- blob 객체 → `git-internals-basics`
- Bloom filter → `bloom-filter`
- blue-green → `blue-green-deployment`
- BM25 → `elasticsearch-inverted-index`
- BOLA → `authn-vs-authz`
- bound function → `js-call-apply-bind`
- bridge-nf-call-iptables → `k8s-kube-proxy-modes`
- BRIN → `db-index-design`
- bufferbloat → `traffic-shaping-qos`
- bufferedAmount → `websocket-deep-dive`
- BuildKit → `dockerfile-image-layers`
- BullMQ → `bullmq-job-queue`
- bump-revision → `k8s-etcd-backup`
- burn rate → `error-budgets`
- Cache Components → `nextjs-static-dynamic-rendering`
- Cache Storage → `frontend-browser-cache`
- cache-aside → `caching-strategies`
- Cache-Control → `http-caching-cdn`
- call by sharing → `js-primitive-vs-reference`
- cannot lock ref → `git-repo-errors`
- CAP 정리 → `db-consistency-cap`
- CASE WHEN → `sql-case-when`
- Cassandra → `db-type-wide-column`
- cert-manager → `kubernetes-ingress`
- certbot → `nginx-https-performance`
- CertificateSigningRequest → `k8s-certificates-pki`
- certSANs → `k8s-certificates-pki`
- CGNAT → `nat-traversal`
- cgroup v2 → `linux-namespaces-cgroups`
- cgroups → `docker-container-basics`
- Chain of Responsibility → `pattern-chain-of-responsibility`
- Changesets → `semantic-versioning`
- check-expiration → `k8s-certificates-pki`
- check-then-act → `race-conditions`
- cherry-pick → `git-tips-advanced`
- CI 캐시 → `build-caching`
- CIDR → `layer-ip-addressing`
- cidrsubnets → `terraform-network-iac`
- Cilium → `cilium-ebpf`
- CKA → `k8s-certifications`
- CKAD → `k8s-certifications`
- CKS → `k8s-certifications`
- Claude Code 기본기 → `claude-code-fundamentals-map`
- Claude Code 훅 → `claude-code-extensions`
- CLAUDE.local.md → `claude-code-project-structure`
- CLAUDE.md → `claude-code-project-structure`
- ClickHouse → `db-type-columnar-olap`
- client_connection_check_interval → `timeouts`
- client-output-buffer-limit → `pub-sub`
- CLOSE_WAIT → `tcp-connection-lifecycle`
- CLS → `core-web-vitals`
- cluster 모듈 → `nodejs-server-runtime`
- Cluster Autoscaler → `k8s-node-autoscaling-karpenter`
- ClusterIP → `k8s-service-types`
- ClusterQueue → `k8s-batch-kueue`
- ClusterRoleBinding → `k8s-rbac`
- ClusterSecretStore → `external-secrets`
- CMS → `count-min-sketch`
- CNAME → `dns`
- CNI 플러그인 → `k8s-cni-pod-network`
- COALESCE → `sqld-null-functions`
- CockroachDB → `db-type-newsql`
- Coffman 조건 → `deadlocks`
- cohort → `k8s-batch-kueue`
- collapse id → `sd-notification-reliability`
- Comet → `long-polling`
- Command 패턴 → `pattern-command`
- commit-msg 훅 → `git-tips-advanced`
- commonLabels → `kustomize-basics`
- compose.yaml → `docker-compose`
- Composite 패턴 → `pattern-composite`
- composition root → `hexagonal-architecture`
- concurrencyPolicy → `cron-jobs`
- ConfigMap → `k8s-configmap`
- configMapGenerator → `k8s-configmap`
- conftest → `terraform-network-iac`
- connect 타임아웃 → `timeouts`
- CONNECT 터널 → `proxy-reverse-proxy`
- CONNECT BY → `sqld-top-n-hierarchical-pivot`
- conntrack → `iptables-basics`
- Container Runtime Interface → `k8s-cri-cni-csi`
- content-visibility → `rendering-performance-optimization`
- Conventional Commits → `git-branching-strategy`
- coordinated omission → `percentile-latency`
- cordon → `k8s-node-maintenance`
- Core Web Vitals → `core-web-vitals`
- core.autocrlf → `git-ignore-config`
- CoreDNS → `k8s-coredns`
- Corrective RAG → `agentic-rag`
- CORS → `cors`
- Cost Explorer → `cloud-cost-optimization`
- Count-Min Sketch → `count-min-sketch`
- CPU 스로틀링 → `k8s-pod-resources`
- CQRS → `cqrs`
- CrashLoopBackOff → `k8s-pod-lifecycle`
- CRDT → `crdt`
- CREATE INDEX CONCURRENTLY → `db-index-pitfalls`
- create_before_destroy → `terraform-network-iac`
- CreateContainerConfigError → `k8s-pod-troubleshooting`
- crictl → `k8s-cri-cni-csi`
- CronJob → `cron-jobs`
- CSI 드라이버 → `k8s-cri-cni-csi`
- CSP nonce → `xss`
- CSRF → `cookie-session-login`
- CSS containment → `rendering-performance-optimization`
- CSWSH → `websocket-deep-dive`
- curl -w → `curl-for-debugging`
- curl 종료 코드 → `curl-for-debugging`
- current-context → `kubeconfig-contexts`
- currying → `js-currying-partial`
- custom-columns → `kubectl-essentials`
- CustomResourceDefinition → `k8s-crd`
- CYCLE 절 → `sql-cte-recursive`
- Cypher → `db-type-graph`
- daemon-reload → `linux-systemd-systemctl`
- DaemonSet → `k8s-daemonset`
- dangerouslySetInnerHTML → `xss`
- dangling 이미지 → `docker-commands-workflow`
- data URL → `base64`
- database per service → `db-architecture-by-scale`
- DataLoader → `n-plus-one-queries`
- DB 서버 분리 → `sd-split-web-and-db`
- DB 성능 지도 → `db-performance-map`
- DB 종류 → `db-types-overview`
- DB 최적화 순서 → `db-performance-map`
- DDL → `sql-basics`
- DDoS → `ddos-protection`
- dead man's switch → `cron-jobs`
- debounce → `debounce-throttle`
- DECODE → `sqld-null-functions`
- Decorator 패턴 → `pattern-decorator`
- decorrelated jitter → `exponential-backoff-jitter`
- dedicated cluster manager → `opensearch-cluster-operations`
- default 파티션 → `db-partitioning`
- default-address-pools → `docker-network-drivers`
- DENSE_RANK → `sqld-window-functions`
- dependency-cruiser → `modular-monolith`
- depends_on → `docker-compose`
- destructuring → `js-destructuring`
- detached DOM → `js-memory-leak`
- detached HEAD → `git-branch-merge`
- DeviceClass → `k8s-gpu-dra`
- DHCP → `dhcp`
- DHCP 릴레이 → `dhcp`
- DHCP 스누핑 → `dhcp`
- Direct Server Return → `load-balancer-basics`
- dist-tag → `semantic-versioning`
- DISTINCT ON → `postgres-reporting-sql`
- distroless → `dockerfile-image-layers`
- divergent branches → `git-troubleshooting`
- DKIM → `sd-email-protocols`
- DLQ → `dead-letter-queue`
- DMARC → `sd-email-protocols`
- DNAT → `iptables-nat`
- DNS → `dns`
- DNS 리바인딩 → `ssrf`
- DNS 전환 → `blue-green-deployment`
- dnsmasq → `local-custom-domain`
- dnsPolicy → `k8s-coredns`
- DNSSEC → `dns`
- docker attach → `docker-commands-workflow`
- Docker Compose → `docker-compose`
- Docker Engine → `docker-container-basics`
- DOCKER-ISOLATION → `docker-network-drivers`
- DOCKER-USER → `iptables-nat`
- Dockerfile → `dockerfile-image-layers`
- dockershim → `k8s-cri-cni-csi`
- DoH → `dns`
- DOM 트리 → `dom-basics`
- DOMPurify → `xss`
- DORA 지표 → `ci-cd-basics`
- Dotted Version Vector → `sd-kv-store-versioning`
- Draft Mode → `rendering-ssg-isr`
- drain 이벤트 → `backpressure`
- drift 감지 → `network-config-cicd`
- DRM → `sd-music-streaming`
- dry-run=server → `k8s-project-structure`
- DSCP → `traffic-shaping-qos`
- dual package hazard → `pattern-singleton`
- dubious ownership → `git-repo-errors`
- DuckDB → `db-type-columnar-olap`
- Dynamic Resource Allocation → `k8s-gpu-dra`
- DynamoDB → `db-type-key-value`
- eager loading → `n-plus-one-queries`
- eBPF → `cilium-ebpf`
- ECR → `github-actions-docker-ecr`
- EKS → `eks-cluster-basics`
- EKS Pod Identity → `eks-cluster-basics`
- Elasticsearch → `elasticsearch-inverted-index`
- elements kind → `ds-array-matrix`
- EncryptionConfiguration → `k8s-secret`
- EndpointSlice → `k8s-service-types`
- equal jitter → `exponential-backoff-jitter`
- ERD → `sqld-data-modeling`
- ERESOLVE → `dependency-hell`
- ERR_HTTP_HEADERS_SENT → `express-middleware`
- errgroup → `go-concurrency-basics`
- error-first 콜백 → `js-callback-hell`
- ES 모듈 → `js-es-modules`
- ESR 규칙 → `mongodb-document-model`
- ETA 예측 → `sd-maps-location-eta`
- ETag → `http-caching-cdn`
- etcd → `db-type-key-value`
- etcd 스냅숏 → `k8s-etcd-backup`
- etcdctl elect → `leader-election`
- etcdutl → `k8s-etcd-backup`
- event delegation → `event-delegation`
- Event-Carried State Transfer → `event-driven-architecture`
- EventBridge → `serverless-architecture`
- EventSource → `realtime-communication`
- EXCLUDE CURRENT ROW → `sql-window-functions-pg`
- exec 플러그인 → `kubeconfig-contexts`
- EXECABORT → `acid-vs-base`
- exemplar → `observability-basics`
- expand/contract → `db-architecture-by-scale`
- expander → `k8s-node-autoscaling-karpenter`
- EXPLAIN ANALYZE → `sql-query-tuning`
- Express 미들웨어 → `express-middleware`
- express.json → `express-middleware`
- External Secrets Operator → `external-secrets`
- external-provisioner → `k8s-cri-cni-csi`
- ExternalSecret → `external-secrets`
- externalTrafficPolicy → `k8s-service-types`
- Facade 패턴 → `pattern-facade`
- Factory Method → `pattern-factory-method`
- fail open → `rate-limiting-in-practice`
- fail_timeout → `rolling-deployment`
- failurePolicy → `k8s-admission-control`
- falsy → `js-truthy-falsy-typeof`
- fast-forward → `git-branch-merge`
- FastAPI → `fastapi-basics`
- FCM → `sd-notification-system`
- feature gate → `k8s-feature-maturity`
- fetch first → `git-troubleshooting`
- FILTER 절 → `sql-aggregation-pitfalls`
- finalizer → `k8s-api-objects`
- first-parent → `git-branch-merge`
- Flannel → `k8s-cni-pod-network`
- flat_object → `opensearch-cluster-operations`
- flatMap → `js-array-transform`
- FLIP 기법 → `view-transitions-shared-element`
- Floyd 순환 탐지 → `ds-linked-list`
- Fluent Bit → `centralized-logging-pipeline`
- Flux CD → `gitops-argocd-vs-flux`
- Flyway → `db-migration-tools`
- flyway_schema_history → `db-migration-tools`
- Flyweight 패턴 → `pattern-flyweight`
- FOR NO KEY UPDATE → `pessimistic-locking`
- for_each → `terraform-modules-tfvars`
- force-static → `nextjs-static-dynamic-rendering`
- force-unlock → `terraform-basics`
- force-with-lease → `git-remote-collaboration`
- FormData → `html-form-http`
- Foundation SDK → `grafana-dashboards`
- front-proxy → `k8s-certificates-pki`
- full jitter → `exponential-backoff-jitter`
- FULL JOIN → `sql-joins-in-practice`
- full_page_writes → `postgres-architecture`
- Function.prototype.call → `js-call-apply-bind`
- functional core → `js-pure-functions`
- G-Counter → `crdt`
- gang scheduling → `k8s-api-aggregation-schedulers`
- gaps and islands → `sql-interview-problems`
- Gateway API → `gateway`
- GCRA → `rate-limiting-algorithms`
- gcTime → `client-data-cache`
- generate_series → `postgres-reporting-sql`
- generateStaticParams → `rendering-ssg-isr`
- GeoDNS → `sd-multi-datacenter`
- Geohash → `geohash`
- GEOSEARCH → `geohash`
- Git 기능 10가지 → `git-features-map`
- Git 기능 지도 → `git-features-map`
- git add -p → `git-staging-area`
- git bisect → `git-tips-advanced`
- git blame → `git-tips-advanced`
- git clean → `git-undo`
- Git Flow → `git-branching-strategy`
- git fsck → `git-stash-reflog`
- Git LFS → `git-large-files-secrets`
- git range-diff → `git-stacked-prs`
- git rebase → `git-rebase`
- git reset → `git-undo`
- git restore → `git-undo`
- git revert → `git-undo`
- git stash → `git-stash-reflog`
- git-filter-repo → `git-large-files-secrets`
- GitHub Actions → `github-actions-docker-ecr`
- GitHub Flow → `git-branching-strategy`
- gitleaks → `secrets-management`
- GitRepository → `gitops-argocd-vs-flux`
- GoF → `design-patterns-overview`
- GOMAXPROCS → `go-concurrency-basics`
- GOMEMLIMIT → `garbage-collection`
- goodput → `latency-bandwidth-throughput`
- Gooey 효과 → `animation-patterns`
- graceful node shutdown → `k8s-node-maintenance`
- Grafana 알림 → `grafana-dashboards`
- grafonnet → `grafana-dashboards`
- GraphQL → `graphql-basics`
- GraphRAG → `graph-rag`
- Gratuitous ARP → `layer-link-ethernet-arp`
- GROUP BY → `sqld-group-by-having`
- group_vars → `ansible-network-automation`
- GROUPING SETS → `sqld-rollup-cube-grouping-sets`
- GROUPING_ID → `sqld-rollup-cube-grouping-sets`
- GROUPS 프레임 → `sql-window-functions-pg`
- gRPC → `grpc`
- GRPCRoute → `k8s-gateway-api`
- GTID → `mysql-replication-online-ddl`
- gzip_types → `nginx-https-performance`
- hanging GET → `long-polling`
- happens-before → `thread-safety`
- Hash Join → `sql-query-tuning`
- HashiCorp Vault → `secrets-management`
- HATEOAS → `rest-api-design`
- HAVING → `sqld-group-by-having`
- HdrHistogram → `percentile-latency`
- headless Service → `k8s-service-types`
- heapify → `ds-heap`
- heavy hitter → `lossy-counting`
- Helm 차트 → `helm-basics`
- Helm 훅 → `helm-release-lifecycle`
- helm diff → `helm-release-lifecycle`
- helm install → `helm-basics`
- helm rollback → `helm-release-lifecycle`
- helm template → `helm-chart-templates`
- helmfile → `helm-dependencies-oci-gitops`
- HelmRelease → `gitops-argocd-vs-flux`
- highWaterMark → `backpressure`
- histogram_quantile → `metrics-types`
- History API → `rendering-csr-spa`
- HLS → `sd-video-streaming-cost`
- HNSW → `vector-db`
- HomeObject → `js-classes`
- Horizontal Pod Autoscaler → `k8s-hpa`
- host-local → `k8s-cni-pod-network`
- host.docker.internal → `docker-network-volume`
- hosts 파일 → `hosts-file`
- HOT 업데이트 → `postgres-mvcc-vacuum`
- HPA → `k8s-hpa`
- HPACK → `http-versions`
- HSTS → `what-happens-google-com`
- HTB → `traffic-shaping-qos`
- HTML 폼 → `html-form-http`
- HTMLCollection → `dom-basics`
- HTTP/2 → `http-versions`
- HTTP/3 → `http-versions`
- HTTPRoute → `gateway`
- HTTPS → `what-happens-google-com`
- Hubble → `cilium-ebpf`
- HyDE → `rag-retrieval-quality`
- HyperLogLog → `hyperloglog`
- I/O 다중화 → `redis-basics`
- IAM 정책 → `iam-basics`
- ICMP → `layer-ip-routing-icmp`
- Idempotent-Replayed → `idempotency-key`
- identity 컬럼 → `postgres-data-types`
- identity-aware proxy → `zero-trust-architecture`
- If-Match → `optimistic-locking`
- ignoreDifferences → `argocd-basics`
- IIFE → `js-iife-module-pattern`
- IKEv2 → `vpn-ipsec-wireguard`
- ILIKE → `sql-filtering-operators`
- ImagePullBackOff → `k8s-pod-troubleshooting`
- imagePullSecrets → `k8s-secret`
- ImageUpdateAutomation → `gitops-argocd-vs-flux`
- IMDSv2 → `ssrf`
- Immer → `js-immutability-react`
- immutable ConfigMap → `k8s-configmap`
- impersonatedUser → `k8s-audit-logging`
- in-place resize → `k8s-in-place-resize`
- includeIf → `git-ignore-config`
- Index Only Scan → `db-index`
- index-free adjacency → `db-type-graph`
- index.lock → `git-repo-errors`
- Indexed Job → `k8s-job-cronjob`
- IndexedDB → `browser-storage`
- informer → `k8s-controllers-reconcile`
- Ingress → `kubernetes-ingress`
- Ingress Controller → `kubernetes-ingress`
- ingress-nginx → `kubernetes-ingress`
- ingress2gateway → `k8s-gateway-api`
- IngressClass → `kubernetes-ingress`
- inhibit_rules → `alerting`
- init 컨테이너 → `k8s-pod-multicontainer`
- Init Duration → `cold-starts`
- InitPlan → `sql-subqueries-exists-lateral`
- InnoDB → `mysql-innodb-basics`
- INP → `core-web-vitals`
- interactive rebase → `git-rebase`
- Interpreter 패턴 → `pattern-interpreter`
- IntersectionObserver → `scroll-triggered-intersection-observer`
- Intl.Collator → `pattern-strategy`
- INVALID 인덱스 → `db-index-pitfalls`
- ip6tables → `iptables-basics`
- IPsec → `vpn-ipsec-wireguard`
- iptables → `iptables-basics`
- iptables-persistent → `iptables-basics`
- IPv6 → `ipv6-basics`
- ipvlan → `docker-network-drivers`
- IPVS 모드 → `k8s-kube-proxy-modes`
- IRSA → `eks-cluster-basics`
- IS DISTINCT FROM → `sql-select-where-null`
- IsLooselyEqual → `js-equality-coercion`
- ISM 정책 → `opensearch-cluster-operations`
- ISR → `rendering-strategies`
- Iterator 패턴 → `pattern-iterator`
- IteratorClose → `js-destructuring`
- jcmd → `java-jvm-memory-gc`
- Jenkins 에이전트 → `jenkins-pipeline-basics`
- Jenkins shared library → `jenkins-pipeline-basics`
- Jenkinsfile → `jenkins-pipeline-basics`
- JOB_COMPLETION_INDEX → `k8s-job-cronjob`
- JobSet → `k8s-batch-kueue`
- journalctl → `linux-systemd-systemctl`
- JSON 6902 → `kustomize-basics`
- JSON Merge Patch → `http-methods`
- JSON Patch → `http-methods`
- JSON-RPC → `api-styles-overview`
- JSON.parse → `json-crud-http`
- JSON.stringify → `json-crud-http`
- JSONB → `postgres-jsonb-search`
- jsonb_path_ops → `postgres-jsonb-search`
- jsonpath → `kubectl-essentials`
- jsx-no-leaked-render → `js-short-circuit`
- JWKS → `jwt-key-rotation`
- JWKS 캐시 → `jwt-key-rotation`
- JWT → `token-login`
- k3d → `local-k8s-kind-minikube`
- Kafka → `kafka-basics`
- Karpenter → `k8s-node-autoscaling-karpenter`
- KCNA → `k8s-certifications`
- keep_firing_for → `alerting`
- keepalive → `browser-fetch`
- ketama → `consistent-hashing`
- kid 헤더 → `jwt-key-rotation`
- Kong → `reverse-proxy-lb-api-gateway`
- kopf → `k8s-operators`
- kube-apiserver → `k8s-architecture`
- kube-controller-manager → `k8s-architecture`
- kube-prometheus-stack → `prometheus-basics`
- kube-proxy → `iptables-nat`
- kube-proxy 모드 → `k8s-kube-proxy-modes`
- kubeadm certs → `k8s-certificates-pki`
- kubeadm upgrade → `k8s-cluster-upgrade`
- kubebuilder → `k8s-operators`
- KUBECONFIG 병합 → `kubeconfig-contexts`
- kubeconform → `k8s-project-structure`
- kubectl auth can-i → `k8s-rbac`
- kubectl convert → `k8s-feature-maturity`
- kubectl debug → `k8s-pod-troubleshooting`
- kubectl logs → `kubectl-essentials`
- kubectl port-forward → `kubectl-essentials`
- kubectx → `kubeconfig-contexts`
- kubelet → `k8s-architecture`
- Kubernetes Secret → `k8s-secret`
- Kubestronaut → `k8s-certifications`
- Kueue → `k8s-batch-kueue`
- kustomization.yaml → `kustomize-basics`
- Kustomize → `helm-dependencies-oci-gitops`
- kwok → `local-k8s-kind-minikube`
- L3 스위치 → `router-vs-switch`
- L4 로드 밸런서 → `osi-in-practice`
- L7 로드 밸런서 → `osi-in-practice`
- last-applied-configuration → `kubectl-apply-ssa`
- Last-Event-ID → `server-sent-events`
- LATERAL → `postgres-reporting-sql`
- LCP → `core-web-vitals`
- leader epoch → `sd-mq-replication`
- leading과 trailing → `debounce-throttle`
- Lease 객체 → `leader-election`
- least request → `load-balancing-algorithms`
- least_conn → `nginx-reverse-proxy`
- LEFT JOIN LATERAL → `sql-subqueries-exists-lateral`
- level-triggered → `k8s-controllers-reconcile`
- library 차트 → `helm-dependencies-oci-gitops`
- libuv 스레드 풀 → `nodejs-server-runtime`
- limit_req → `nginx-https-performance`
- LimitRange → `k8s-pod-resources`
- linear() 이징 → `spring-animation`
- listen_addresses → `postgres-connections-pg-hba`
- LISTEN/NOTIFY → `postgres-functions-triggers`
- ListenerSet → `k8s-gateway-api`
- ListenOverflows → `network-monitoring`
- liveness probe → `k8s-pod-probes`
- load average → `linux-processes-signals`
- load shedding → `tail-latency`
- localStorage → `browser-storage`
- location 블록 → `nginx-basics`
- lock_timeout → `zero-downtime-migrations`
- lockDuration → `bullmq-job-queue`
- lockfile → `dependency-hell`
- LogQL → `structured-logging`
- Lossy Counting → `lossy-counting`
- Lost in the Middle → `rag-classic-pipeline`
- LRU 캐시 → `js-memoization`
- LSM 트리 → `db-type-wide-column`
- LSN → `postgres-architecture`
- LUKS → `encryption-at-rest`
- MAC 주소 → `layer-link-ethernet-arp`
- macvlan → `docker-network-drivers`
- managedFields → `kubectl-apply-ssa`
- MASQUERADE → `iptables-nat`
- matchExpressions → `k8s-labels-selectors`
- max_fails → `rolling-deployment`
- max_prepared_statements → `connection-pool`
- Maximum call stack size exceeded → `js-execution-context`
- MaxListenersExceededWarning → `pattern-observer`
- maxmemory → `redis-memory-eviction`
- MaxRAMPercentage → `java-jvm-memory-gc`
- maxReceiveCount → `dead-letter-queue`
- maxSurge → `k8s-deployment`
- maxUnavailable → `k8s-deployment`
- Mediator 패턴 → `pattern-mediator`
- Memcached → `redis-basics`
- Memento 패턴 → `pattern-memento`
- memoize → `js-memoization`
- memory.events → `linux-namespaces-cgroups`
- merge base → `git-branch-merge`
- Merkle tree → `merkle-tree`
- metrics-server → `k8s-hpa`
- MIG → `k8s-gpu-dra`
- min.insync.replicas → `kafka-basics`
- minikube → `local-k8s-kind-minikube`
- minReadySeconds → `k8s-deployment`
- MINUS → `sqld-set-operators`
- mkcert → `local-custom-domain`
- ModSecurity → `waf`
- Module Federation → `micro-frontends`
- modulepreload → `js-es-modules`
- MongoDB → `mongodb-document-model`
- MOVED → `redis-cluster`
- MSS 클램핑 → `layer-mtu-fragmentation`
- mTLS → `https-tls`
- mtr → `network-troubleshooting-by-layer`
- MTU → `layer-mtu-fragmentation`
- multibranch pipeline → `jenkins-pipeline-basics`
- multipart/form-data → `http-message`
- multiwindow multi-burn-rate → `error-budgets`
- MutatingAdmissionPolicy → `k8s-admission-control`
- MutationObserver → `js-microtask-macrotask`
- MVC 패턴 → `mvc-pattern`
- MVCC → `db-transaction-isolation`
- MVVM → `mvc-pattern`
- MX 레코드 → `sd-email-protocols`
- N-tier → `layered-architecture`
- N+1 → `sql-query-rewrite`
- NACL → `security-groups-nacl`
- Nagle 알고리즘 → `tcp-reliability-congestion`
- named volume → `docker-network-volume`
- namei → `linux-files-permissions`
- namespace → `docker-container-basics`
- namespaceSelector → `k8s-network-policy`
- NAT 게이트웨이 → `vpc-subnets-route-tables`
- NAT traversal → `nat-traversal`
- NAT64 → `ipv6-basics`
- Native Memory Tracking → `java-jvm-memory-gc`
- NATURAL JOIN → `sqld-joins`
- NDJSON → `http-streaming-sse`
- ndots → `k8s-coredns`
- NDP → `ipv6-basics`
- Neo4j → `db-type-graph`
- Nested Loop → `sql-query-tuning`
- net.BlockList → `ssrf`
- netfilter → `iptables-basics`
- NetFlow → `network-flow-logs`
- networkaddress.cache.ttl → `service-discovery`
- NetworkPolicy → `k8s-network-policy`
- new 바인딩 → `js-this-binding`
- NewSQL → `db-type-newsql`
- nftables 모드 → `k8s-kube-proxy-modes`
- nginx -s reload → `blue-green-deployment`
- nginx.conf → `nginx-basics`
- nindent → `helm-chart-templates`
- node affinity → `k8s-pod-scheduling`
- node_exporter → `network-monitoring`
- NodeLocal DNSCache → `k8s-coredns`
- NodePool → `k8s-node-autoscaling-karpenter`
- NodePort → `k8s-service-types`
- Non-EQUI JOIN → `sqld-joins`
- NOT EXISTS → `sqld-subquery-set-operators`
- NOT VALID → `zero-downtime-migrations`
- nsenter → `linux-namespaces-cgroups`
- nsswitch.conf → `hosts-file`
- null 병합 연산자 → `js-optional-chaining-nullish`
- NULLIF → `sqld-null-functions`
- NULLS FIRST → `sql-select-where-null`
- NULLS LAST → `api-pagination-sorting`
- Number.isNaN → `js-truthy-falsy-typeof`
- NVL → `sqld-null-functions`
- OAuth → `oauth`
- Object Lock → `backup-strategy`
- Object.freeze → `js-object-methods`
- Object.groupBy → `js-array-transform`
- Object.hasOwn → `js-object-methods`
- observedGeneration → `k8s-api-objects`
- Observer 패턴 → `pattern-observer`
- OCI 레지스트리 → `helm-dependencies-oci-gitops`
- OIDC 신뢰 정책 → `github-actions-docker-ecr`
- OLAP → `db-type-columnar-olap`
- omitStages → `k8s-audit-logging`
- ON CONFLICT → `postgres-advanced-sql`
- ONLY_FULL_GROUP_BY → `sql-aggregation-pitfalls`
- onShellReady → `streaming-ssr-suspense`
- OOMKilled → `k8s-pod-resources`
- OPA Gatekeeper → `k8s-admission-control`
- OpenFeature → `feature-flags`
- OpenGitOps → `gitops-argocd-vs-flux`
- OpenSearch → `opensearch-cluster-operations`
- openssl s_client → `network-troubleshooting-by-layer`
- OpenTelemetry → `observability-basics`
- Operational Transformation → `operational-transform`
- Operator SDK → `k8s-operators`
- Optimistic UI → `loading-patterns`
- OR-Set → `crdt`
- OSI 7계층 → `network-layers-overview`
- OSI 모델 → `network-layers-overview`
- OTel Collector → `observability-basics`
- out-of-service taint → `k8s-node-maintenance`
- OUTER JOIN → `sqld-joins`
- overshoot → `spring-animation`
- OWASP CRS → `waf`
- ownerReferences → `k8s-api-objects`
- P2C → `load-balancing-algorithms`
- PACELC → `db-consistency-cap`
- packfile → `git-internals-basics`
- partition 롤링 업데이트 → `k8s-statefulset`
- passive 리스너 → `event-propagation`
- Patroni → `failover`
- pause 컨테이너 → `k8s-pod-basics`
- pcap → `packet-capture-tcpdump`
- peer 인증 → `postgres-getting-started`
- pending-upgrade → `helm-release-lifecycle`
- performance.now() → `js-timers-accuracy`
- persisted query → `graphql-basics`
- PersistentVolume → `k8s-pv-pvc`
- PersistentVolumeClaim → `k8s-pv-pvc`
- persistentVolumeClaimRetentionPolicy → `k8s-statefulset`
- PFCOUNT → `hyperloglog`
- pg_basebackup → `postgres-operations`
- pg_blocking_pids → `pessimistic-locking`
- pg_dump → `postgres-operations`
- pg_hba.conf → `postgres-connections-pg-hba`
- pg_prepared_xacts → `distributed-transactions-2pc`
- pg_rewind → `network-partitions`
- pg_stat_statements → `sql-query-tuning`
- pg_trgm → `postgres-jsonb-search`
- pg_upgrade → `postgres-operations`
- PgBouncer → `db-architecture-by-scale`
- pgcrypto → `encryption-at-rest`
- pids.max → `linux-namespaces-cgroups`
- pimpl → `pattern-bridge`
- pino → `structured-logging`
- PITR → `postgres-operations`
- PIVOT → `sqld-top-n-hierarchical-pivot`
- PKCE → `oauth`
- PL/pgSQL → `postgres-functions-triggers`
- pluto → `k8s-feature-maturity`
- PMTUD → `layer-mtu-fragmentation`
- PNPOLY → `ray-casting`
- Pod phase → `k8s-pod-lifecycle`
- Pod Security Admission → `k8s-pod-security-admission`
- Pod Security Standards → `k8s-pod-security-admission`
- podCIDR → `k8s-cni-pod-network`
- PodDisruptionBudget → `k8s-pod-disruption-budget`
- podFailurePolicy → `k8s-job-cronjob`
- PodResizePending → `k8s-in-place-resize`
- PodSecurityPolicy → `k8s-pod-security-admission`
- poison record → `batch-processing`
- Power of Two Choices → `load-balancing-algorithms`
- Pre-Vote → `raft-consensus`
- prefer-const → `js-var-let-const`
- prefers-reduced-motion → `animation-performance`
- preflight → `cors`
- PREPARE TRANSACTION → `distributed-transactions-2pc`
- presigned URL → `serverless-limits`
- preStop → `k8s-pod-lifecycle`
- PreToolUse → `claude-code-extensions`
- PRG 패턴 → `http-status-codes`
- PriorityClass → `k8s-pod-scheduling`
- PrivateLink → `vpc-peering-transit-privatelink`
- Problem Details → `http-status-codes`
- process.nextTick → `event-loop`
- ProgressDeadlineExceeded → `k8s-deploy-pipeline-eks`
- projected 토큰 → `k8s-serviceaccount-tokens`
- Promise.allSettled → `js-promise-combinators`
- Promise.any → `js-promise-combinators`
- protobuf → `grpc`
- Protocol Buffers → `grpc`
- prototype pollution → `js-prototype-chain`
- Proxy 패턴 → `pattern-proxy`
- PROXY protocol → `proxy-reverse-proxy`
- proxy_buffering → `streaming-ssr-suspense`
- proxy_cache → `nginx-https-performance`
- proxy_next_upstream → `retries`
- proxy_pass → `nginx-reverse-proxy`
- proxy_set_header → `nginx-reverse-proxy`
- psql → `postgres-getting-started`
- pull 방식 배포 → `k8s-deploy-pipeline-eks`
- pull.rebase → `git-rebase`
- Pulumi → `iac-basics`
- push 수집기 → `sd-metrics-collection`
- push protection → `git-large-files-secrets`
- pushState → `rendering-csr-spa`
- PUT과 PATCH → `http-methods`
- Pydantic → `fastapi-basics`
- QoS 클래스 → `k8s-pod-resources`
- Quadtree → `quadtree`
- QUALIFY → `sql-logical-order`
- queueMicrotask → `js-microtask-macrotask`
- QUIC → `http-versions`
- Qwik → `islands-resumability`
- R-tree → `quadtree`
- RabbitMQ → `rabbitmq-basics`
- Raft 합의 → `raft-consensus`
- RAG → `rag-classic-pipeline`
- RAG 방식 선택 → `rag-patterns-overview`
- RAG 패턴 비교 → `rag-patterns-overview`
- Range 요청 → `youtube-url-to-video`
- RateLimit-Policy → `rate-limiting-in-practice`
- RDB 스냅샷 → `redis-persistence-ha`
- RDBMS → `db-type-relational`
- RDS Proxy → `serverless-limits`
- React.memo → `react-rerender`
- read-modify-write → `race-conditions`
- read-your-writes → `db-consistency-cap`
- ReadableStream → `http-streaming-sse`
- readiness probe → `k8s-pod-probes`
- readOnlyRootFilesystem → `k8s-security-context`
- ReadWriteOnce → `k8s-pv-pvc`
- ReBAC → `authn-vs-authz`
- recall@k → `rag-retrieval-quality`
- reconcile 루프 → `k8s-controllers-reconcile`
- RED 방법 → `monitoring-basics`
- Redis → `redis-basics`
- Redis Cluster → `redis-cluster`
- Redis Sentinel → `redis-replication-sentinel`
- Redlock → `distributed-lock`
- redrive → `dead-letter-queue`
- reduce 시작값 → `js-array-transform`
- ReferenceGrant → `gateway`
- Reflect → `pattern-proxy`
- reflog → `git-stash-reflog`
- REFRESH MATERIALIZED VIEW → `sql-views-materialized`
- relabel_configs → `prometheus-basics`
- remote_write → `prometheus-basics`
- removeOnComplete → `bullmq-job-queue`
- renderToString → `rendering-ssr`
- repl-backlog-size → `redis-replication-sentinel`
- ReplicaSet → `k8s-pod-basics`
- ReportBatchItemFailures → `serverless-architecture`
- requestAnimationFrame → `js-timers-accuracy`
- require(esm) → `js-es-modules`
- rerere → `git-merge-conflict`
- resize 하위 리소스 → `k8s-in-place-resize`
- resizePolicy → `k8s-in-place-resize`
- ResourceClaim → `k8s-gpu-dra`
- ResourceQuota → `k8s-pod-resources`
- resourceVersion → `k8s-api-objects`
- REST API → `rest-api-design`
- restack → `git-stacked-prs`
- restore-keys → `build-caching`
- retention.ms → `kafka-vs-rabbitmq-replay`
- return await → `js-async-await`
- RETURNING → `postgres-advanced-sql`
- revalidatePath → `rendering-ssg-isr`
- revalidateTag → `rendering-ssg-isr`
- reviver → `json-crud-http`
- RFC 1918 → `layer-ip-addressing`
- Right Anti Join → `sql-joins-in-practice`
- robots.txt → `sd-web-crawler-politeness-dedup`
- RocksDB → `db-type-embedded`
- rolling checksum → `rsync-algorithm`
- rolling deployment → `rolling-deployment`
- rollout undo → `k8s-deployment`
- ROLLUP → `sqld-rollup-cube-grouping-sets`
- rootMargin → `scroll-triggered-intersection-observer`
- Row Level Security → `postgres-roles-security`
- ROW_NUMBER → `sqld-window-functions`
- ROWNUM → `sqld-top-n-hierarchical-pivot`
- RPO → `disaster-recovery`
- RRF → `rag-retrieval-quality`
- RSC payload → `react-server-components`
- rsync 알고리즘 → `rsync-algorithm`
- RTBH → `ddos-protection`
- RTO → `disaster-recovery`
- Run Condition → `sql-window-functions-pg`
- runbook_url → `alerting`
- Same-Origin Policy → `cors`
- SameSite → `csrf`
- SameValueZero → `js-equality-coercion`
- sargable → `sql-query-rewrite`
- SAVEPOINT → `sql-insert-update-delete`
- Savings Plans → `cloud-cost-optimization`
- scatter-gather → `sd-sharding-intro`
- schedulerName → `k8s-api-aggregation-schedulers`
- schema_migrations → `db-migration-tools`
- scram-sha-256 → `postgres-roles-security`
- Screaming Architecture → `clean-architecture`
- scroll-snap-type → `css-sticky-scroll-snap`
- ScrollTimeline → `scroll-driven-animations`
- SDN → `sdn-vxlan-overlay`
- Sealed Secrets → `external-secrets`
- search_after → `elasticsearch-inverted-index`
- search_path → `postgres-getting-started`
- Sec-Fetch-Site → `csrf`
- Sec-WebSocket-Accept → `websocket-deep-dive`
- seccomp → `k8s-security-context`
- secret zero → `secrets-management`
- Secrets Store CSI Driver → `k8s-secret`
- SECURITY DEFINER → `postgres-functions-triggers`
- security_barrier → `sql-views-materialized`
- security_invoker → `sql-views-materialized`
- securityContext → `k8s-security-context`
- sed -i → `linux-grep-awk-sed`
- SELF JOIN → `sqld-joins`
- Self-RAG → `agentic-rag`
- selfHeal → `argocd-basics`
- Semantic Versioning → `semantic-versioning`
- sendBeacon → `browser-fetch`
- server_name → `nginx-basics`
- server-only → `react-server-components`
- Server-Sent Events → `realtime-communication`
- Server-Side Apply → `kubectl-apply-ssa`
- Server-Timing → `rendering-ssr`
- Service Worker → `frontend-browser-cache`
- ServiceMonitor → `prometheus-basics`
- sessionStorage → `browser-storage`
- SET ROLE → `postgres-roles-security`
- Set-Cookie → `cookie-session-login`
- setImmediate → `event-loop`
- settings.local.json → `claude-code-project-structure`
- setuid → `linux-files-permissions`
- shared_buffers → `postgres-architecture`
- ShareDB → `operational-transform`
- short-circuit evaluation → `js-short-circuit`
- SIGHUP → `linux-processes-signals`
- SimHash → `sd-web-crawler-politeness-dedup`
- Singleton 패턴 → `pattern-singleton`
- SIT → `sit-uat-testing`
- sites-enabled → `nginx-basics`
- SKILL.md → `claude-code-extensions`
- SKIP LOCKED → `db-architecture-by-scale`
- skipWaiting → `frontend-browser-cache`
- SLAAC → `ipv6-basics`
- SLI → `sli-slo`
- SLO → `sli-slo`
- SMTP → `sd-email-protocols`
- SnapStart → `cold-starts`
- SNI → `first-page-from-power-on`
- SNMP → `network-monitoring`
- Snowflake → `db-sharding`
- SO_REUSEADDR → `ports-and-sockets`
- SO_REUSEPORT → `ports-and-sockets`
- SOPS → `helm-values-secrets`
- SP-GiST → `quadtree`
- SPA 폴백 → `rendering-csr-spa`
- Space-Saving → `lossy-counting`
- Speculation Rules → `frontend-browser-cache`
- SPF → `sd-email-protocols`
- SPIFFE → `service-mesh`
- split_clients → `canary-release`
- SPOF → `high-availability`
- Spring Modulith → `modular-monolith`
- SQL 로드맵 → `sql-study-path`
- SQL 주입 → `sql-injection`
- SQL 학습 순서 → `sql-study-path`
- SQL vs NoSQL → `sql-vs-nosql`
- SQLite → `db-type-embedded`
- SQLSTATE → `sql-basics`
- squash 머지 → `git-branching-strategy`
- SSG → `rendering-strategies`
- sslmode → `encryption-in-transit`
- SSRF → `ssrf`
- SSTable → `db-type-wide-column`
- stacked PR → `git-stacked-prs`
- stale closure → `js-closures`
- stale-while-revalidate → `http-caching-cdn`
- staleTime → `client-data-cache`
- stalled job → `bullmq-job-queue`
- startupProbe → `k8s-pod-probes`
- state 파일 → `terraform-basics`
- State 패턴 → `pattern-state`
- StatefulSet → `k8s-statefulset`
- statement_timeout → `sql-batch-timeout-pool`
- Step Functions → `serverless-architecture`
- sticky 헤더 → `css-sticky-scroll-snap`
- sticky bit → `linux-files-permissions`
- sticky session → `load-balancer-basics`
- STONITH → `failover`
- storage 이벤트 → `browser-storage`
- StorageClass → `k8s-storageclass-snapshots`
- storedVersions → `k8s-crd`
- STP → `router-vs-switch`
- Strategy 패턴 → `pattern-strategy`
- strict mode → `js-strict-mode`
- String.raw → `js-template-literals`
- structuredClone → `pattern-prototype`
- STUN → `nat-traversal`
- subPath → `k8s-configmap`
- SubPlan → `sql-subqueries-exists-lateral`
- SUBSTR → `sqld-single-row-functions`
- Sunset 헤더 → `api-versioning`
- suppressHydrationWarning → `hydration`
- Suricata → `ids-ips`
- Surrogate-Key → `cache-invalidation`
- Suspense 경계 → `streaming-ssr-suspense`
- svh → `parallax-scrollytelling`
- SYN 쿠키 → `ddos-protection`
- SYN flood → `tcp-connection-lifecycle`
- sync wave → `argocd-basics`
- System Design Notes → `system-design-study-path`
- system-node-critical → `k8s-daemonset`
- systemctl → `linux-systemd-systemctl`
- systemd timer → `linux-systemd-systemctl`
- taint → `k8s-pod-scheduling`
- TanStack Query → `client-data-cache`
- TC/C → `sd-wallet-transfer`
- TCP/IP 4계층 → `network-layers-overview`
- tcpdump → `packet-capture-tcpdump`
- TCPRoute → `k8s-gateway-api`
- TDZ → `js-hoisting-tdz`
- Template Method → `pattern-template-method`
- Temporal Dead Zone → `js-hoisting-tdz`
- Terminating 네임스페이스 → `k8s-namespace`
- terminationGracePeriodSeconds → `k8s-pod-lifecycle`
- Terraform → `terraform-basics`
- Terraform 모듈 → `terraform-modules-tfvars`
- terraform plan → `terraform-basics`
- terraform workspace → `terraform-modules-tfvars`
- Testcontainers → `integration-tests-real-db`
- text/event-stream → `server-sent-events`
- TextDecoderStream → `http-streaming-sse`
- tfvars → `terraform-modules-tfvars`
- Thanos → `prometheus-basics`
- thenable → `js-promises`
- this 바인딩 → `js-this-binding`
- throwIfAborted → `abort-controller`
- thundering herd → `exponential-backoff-jitter`
- TiDB → `db-type-newsql`
- tied request → `tail-latency`
- TIME_WAIT → `tcp-connection-lifecycle`
- TimeoutOverflowWarning → `js-timers-accuracy`
- TimescaleDB → `db-type-time-series`
- timestamptz → `postgres-data-types`
- tini → `linux-processes-signals`
- TLS 1.3 → `https-tls`
- TLS 레코드 → `packet-encapsulation`
- TLS 세션 재개 → `first-page-from-power-on`
- TLS 종료 → `reverse-proxy-lb-api-gateway`
- TLS 핸드셰이크 → `https-tls`
- TO_CHAR → `sqld-type-conversion`
- TOAST → `postgres-architecture`
- TOCTOU → `race-conditions`
- TokenRequest → `k8s-serviceaccount-tokens`
- toleration → `k8s-pod-scheduling`
- TooManyRequestsException → `serverless-limits`
- topologySpreadConstraints → `k8s-pod-scheduling`
- ToPrimitive → `js-equality-coercion`
- toSorted → `js-array-mutation`
- toSpliced → `js-array-mutation`
- Toxiproxy → `chaos-engineering`
- TP2 → `operational-transform`
- traceparent → `distributed-tracing`
- tracepath → `network-troubleshooting-by-layer`
- traceroute → `layer-ip-routing-icmp`
- Transfer-Encoding → `http-message`
- Transfer-Encoding: chunked → `streaming-ssr-suspense`
- Transferable → `js-shallow-deep-copy`
- Transit Gateway → `vpc-peering-transit-privatelink`
- Trie → `sd-autocomplete-trie`
- TrueTime → `db-type-newsql`
- TRUNCATE → `sql-insert-update-delete`
- Trusted Types → `xss`
- truthy → `js-truthy-falsy-typeof`
- try_files → `nginx-basics`
- Try-Confirm-Cancel → `sd-wallet-transfer`
- TSO → `packet-encapsulation`
- tstzrange → `postgres-data-types`
- tsvector → `postgres-jsonb-search`
- TTL → `dns`
- Turborepo → `build-caching`
- TURN 서버 → `nat-traversal`
- typeof null → `js-truthy-falsy-typeof`
- UAT → `sit-uat-testing`
- UDP → `udp-and-quic`
- UdpRcvbufErrors → `udp-and-quic`
- umask → `linux-files-permissions`
- UMD → `js-iife-module-pattern`
- unclean 리더 선출 → `sd-mq-replication`
- undo 로그 → `mysql-innodb-basics`
- unhandledRejection → `js-promises`
- unhealthyPodEvictionPolicy → `k8s-pod-disruption-budget`
- UNION ALL → `sqld-set-operators`
- Union-Find → `ds-union-find`
- uniq -c → `linux-grep-awk-sed`
- unrelated histories → `git-troubleshooting`
- unshare → `linux-namespaces-cgroups`
- updateMode → `k8s-vpa`
- UPSERT → `sql-insert-update-delete`
- upstream 블록 → `nginx-reverse-proxy`
- URL 단축기 → `sd-url-shortener-api-redirect`
- URL 프런티어 → `sd-web-crawler-architecture`
- URLSearchParams → `html-form-http`
- USE 방법 → `monitoring-basics`
- use client → `react-server-components`
- use strict → `js-strict-mode`
- useDeferredValue → `react-rerender`
- useDefineForClassFields → `js-classes`
- useEffectEvent → `js-closures`
- util.promisify → `js-callback-hell`
- UUID v7 → `postgres-data-types`
- UUIDv7 → `db-sharding`
- UV_THREADPOOL_SIZE → `nodejs-server-runtime`
- uvicorn → `fastapi-basics`
- VACUUM FULL → `postgres-mvcc-vacuum`
- ValidatingAdmissionPolicy → `k8s-admission-control`
- values.schema.json → `helm-values-secrets`
- Varnish ban → `cache-invalidation`
- Velero → `velero-backup`
- version skew policy → `k8s-cluster-upgrade`
- Vertical Pod Autoscaler → `k8s-vpa`
- View Transitions API → `view-transitions-shared-element`
- view-transition-name → `view-transitions-shared-element`
- visibility map → `postgres-mvcc-vacuum`
- Visitor 패턴 → `pattern-visitor`
- VLAN → `vlan-basics`
- VolumeAttributesClass → `k8s-storageclass-snapshots`
- volumeClaimTemplates → `k8s-statefulset`
- VolumeGroupSnapshot → `k8s-storageclass-snapshots`
- VolumeSnapshot → `k8s-storageclass-snapshots`
- VPA → `k8s-vpa`
- VPA recommender → `k8s-vpa`
- VPC → `vpc-basics`
- VPC 피어링 → `vpc-peering-transit-privatelink`
- VPC 흐름 로그 → `network-flow-logs`
- VPC CNI → `eks-cluster-basics`
- VRRP → `load-balancer-basics`
- VTEP → `sdn-vxlan-overlay`
- VXLAN → `sdn-vxlan-overlay`
- W3C Trace Context → `distributed-tracing`
- WaitForFirstConsumer → `k8s-pv-pvc`
- WAL 모드 → `db-type-embedded`
- WeakMap → `js-memory-leak`
- WebSocket → `realtime-communication`
- WebSocket 프레임 → `websocket-deep-dive`
- will-change → `animation-performance`
- WireGuard → `vpn-ipsec-wireguard`
- Wireshark → `packet-capture-tcpdump`
- WITH CHECK OPTION → `sqld-correlated-subquery`
- WITH TIES → `sql-logical-order`
- Word Search II → `ds-trie`
- WorkTable Scan → `sql-cte-recursive`
- worktree → `git-tips-advanced`
- write coalescing → `cache-write-policies`
- write concern → `mongodb-document-model`
- write-around → `cache-write-policies`
- write-back → `cache-write-policies`
- write-behind → `caching-strategies`
- write-through → `caching-strategies`
- writes-follow-reads → `eventual-consistency`
- wrong version number → `upper-layers-session-presentation-app`
- X-Accel-Buffering → `server-sent-events`
- X-Cache-Status → `edge-caching`
- X-Forwarded-For → `proxy-reverse-proxy`
- x-kubernetes-validations → `k8s-crd`
- XAUTOCLAIM → `pub-sub`
- XDP → `cilium-ebpf`
- xDS → `service-mesh`
- XID 랩어라운드 → `postgres-mvcc-vacuum`
- XState → `pattern-state`
- YAML 앵커 → `yaml-for-k8s`
- yamllint → `yaml-for-k8s`
- Yjs → `crdt`
- Z-순서 곡선 → `geohash`
- Zanzibar → `authn-vs-authz`
- zdiff3 → `git-merge-conflict`

## 겹칠 수 있는 글 (자동 추정)

제목·소제목·태그 단어가 많이 겹치는 쌍이다. 새 글이 이 주제를 다루면 둘 중 어느 글에 넣을지, 서로 링크로 나눌지 먼저 정한다.

- `sql-subqueries-exists-lateral` ↔ `sqld-correlated-subquery` (33%: 하나만, 도는, 서브쿼리, 행마다, 서브쿼리가, 이름을, 스칼라)
- `mysql-innodb-basics` ↔ `pessimistic-locking` (30%: 테이블, update가, 잠금은, 행이, 잠금, 대기를, 좁혀, 가는)
- `k8s-pod-basics` ↔ `docker-container-basics` (30%: run, 줄이, 지나가는, 띄우고, 들여다보고, 지우기, 정리하면, container)
- `sqld-set-operators` ↔ `sqld-correlated-subquery` (29%: 예제, 느려지는, sqld, 시험, 포인트)
- `sqld-set-operators` ↔ `sqld-subquery-set-operators` (29%: 연산자, 느려지는, sqld, 시험, 포인트)
- `sqld-set-operators` ↔ `sqld-joins` (29%: 붙이는, 행을, sqld, 시험, 포인트)
- `javascript-roadmap` ↔ `k8s-learning-roadmap` (27%: 01, 02, 03, 04, 05, 06, 07, 증상이면)
- `k8s-learning-roadmap` ↔ `devops-networking-roadmap` (27%: 지나는, 칸은, 서로, 기대고, 네트워킹, 위에, 증상이면, 글부터)
- `sqld-null-functions` ↔ `sqld-single-row-functions` (27%: 글에서, 사원, 테이블, sqld, 시험, 포인트, oracle)
- `sqld-null-functions` ↔ `sqld-type-conversion` (26%: 테이블, sqld, 시험, 포인트, oracle)
- `sqld-type-conversion` ↔ `sqld-single-row-functions` (26%: 테이블, sqld, 시험, 포인트, oracle)
- `animation-performance` ↔ `animation-patterns` (25%: 애니메이션, 움직임이, ux, frontend, animation, accessibility, 주기)
- `server-sent-events` ↔ `long-polling` (25%: 붙잡는, 장애를, 만났을, 가장, nginx, 깊게, 재연결)
- `sd-sharding-intro` ↔ `db-sharding` (24%: 늘려도, 담기, 샤딩, 키를, 샤드를, 샤드)
- `sqld-correlated-subquery` ↔ `sqld-subquery-set-operators` (24%: 서브쿼리, 느려지는, sqld, 시험, 포인트)
- `sqld-set-operators` ↔ `sqld-null-functions` (24%: 행을, sqld, 시험, 포인트)
- `sqld-set-operators` ↔ `sqld-type-conversion` (24%: 예제, sqld, 시험, 포인트)
- `sqld-set-operators` ↔ `sqld-window-functions` (24%: 행을, sqld, 시험, 포인트)
- `sqld-set-operators` ↔ `sqld-rollup-cube-grouping-sets` (24%: 붙이는, sqld, 시험, 포인트)
- `sqld-set-operators` ↔ `sqld-top-n-hierarchical-pivot` (24%: 행을, sqld, 시험, 포인트)
- `sqld-set-operators` ↔ `sqld-group-by-having` (24%: 행을, sqld, 시험, 포인트)
- `rag-patterns-overview` ↔ `agentic-rag` (23%: 질문, 어느, ai, rag, search)
- `rag-patterns-overview` ↔ `rag-retrieval-quality` (23%: 숫자, ai, rag, search, 비교)
- `db-index-pitfalls` ↔ `db-index-design` (23%: 100만, 인덱스, 인덱스는, 인덱스를, index)
- `db-index-pitfalls` ↔ `db-index` (23%: 100만, 인덱스, 인덱스가, 인덱스를, index)
- `csrf` ↔ `cookie-session-login` (23%: 붙는다는, 것의, 대가, 붙는, 정리, cookie, csrf)
- `sql-joins-in-practice` ↔ `sql-aggregation-pitfalls` (23%: 행이, 숫자로, left, 지운다, 행을, 리포트, 숫자가, 센다)
- `sd-db-replication-intro` ↔ `db-replication-sharding` (22%: 복제본은, 대로, 방금, 보인다, 죽으면, 이어받나, 복제는, 나누기)
- `data-structures-overview` ↔ `ds-hash-map` (22%: 문제를, data, structure, 면접, 단골)
- `parallax-scrollytelling` ↔ `animation-performance` (21%: 움직임이, 불편한, ux, frontend, animation, accessibility)
- `scroll-driven-animations` ↔ `spring-animation` (21%: ux, frontend, animation, css, 애니메이션, 움직이기)
- `ansible-network-automation` ↔ `git-ignore-config` (21%: diff, 설정, 파일은, 전체를)
- `sqld-correlated-subquery` ↔ `sqld-type-conversion` (21%: 예제, sqld, 시험, 포인트)
- `sqld-type-conversion` ↔ `sqld-rollup-cube-grouping-sets` (21%: 적는다, sqld, 시험, 포인트)
- `sqld-type-conversion` ↔ `sqld-group-by-having` (21%: sqld, 시험, 포인트, oracle)
- `sqld-type-conversion` ↔ `sqld-joins` (21%: sqld, 시험, 포인트, oracle)
- `api-styles-overview` ↔ `grpc` (21%: 묻고, 답하는, rest, rpc, graphql과)
- `animation-patterns` ↔ `loading-patterns` (21%: 누른, ux, frontend, accessibility, 이름을, 알면, 부탁이)
- `claude-code-fundamentals-map` ↔ `claude-code-project-structure` (20%: 맞춰, 것과, ai, claude, code, llm)
- `scroll-driven-animations` ↔ `scroll-patterns-overview` (20%: 스크롤, 위치를, ux, frontend, animation, css)

## 서로 이어진 글

양쪽이 서로를 링크하거나 키워드로 가리키는 쌍이다. 내용 경계가 맞닿아 있으니 한쪽 글을 고칠 때 다른 쪽과 겹치지 않는지 본다.

- `rendering-performance-optimization` ↔ `browser-rendering-pipeline`
- `browser-rendering-pipeline` ↔ `core-web-vitals`
- `browser-rendering-pipeline` ↔ `what-happens-google-com`
- `git-features-map` ↔ `git-stacked-prs`
- `git-stacked-prs` ↔ `git-rebase`
- `api-scaling-ladder` ↔ `bullmq-job-queue`
- `bullmq-job-queue` ↔ `message-queue-basics`
- `data-structures-overview` ↔ `ds-union-find`
- `data-structures-overview` ↔ `ds-graph-bfs-dfs`
- `data-structures-overview` ↔ `ds-trie`
- `data-structures-overview` ↔ `ds-binary-tree-bst`
- `data-structures-overview` ↔ `ds-hash-map`
- `data-structures-overview` ↔ `ds-stack-queue-deque`
- `data-structures-overview` ↔ `ds-array-matrix`
- `ds-union-find` ↔ `ds-graph-bfs-dfs`
- `ds-graph-bfs-dfs` ↔ `ds-trie`
- `ds-graph-bfs-dfs` ↔ `ds-heap`
- `ds-graph-bfs-dfs` ↔ `ds-stack-queue-deque`
- `ds-graph-bfs-dfs` ↔ `sd-maps-tiles-routing`
- `ds-graph-bfs-dfs` ↔ `db-type-graph`
- `ds-trie` ↔ `ds-hash-map`
- `ds-trie` ↔ `sd-autocomplete-trie`
- `ds-heap` ↔ `ds-binary-tree-bst`
- `ds-heap` ↔ `ds-hash-map`
- `ds-heap` ↔ `sd-maps-tiles-routing`
- `ds-binary-tree-bst` ↔ `ds-hash-map`
- `ds-hash-map` ↔ `ds-array-matrix`
- `ds-hash-map` ↔ `bloom-filter`
- `ds-hash-map` ↔ `big-o-notation`
- `ds-stack-queue-deque` ↔ `ds-linked-list`
- `ds-stack-queue-deque` ↔ `ds-array-matrix`
- `ds-linked-list` ↔ `ds-array-matrix`
- `ds-linked-list` ↔ `js-array-mutation`
- `ds-linked-list` ↔ `thread-safety`
- `ds-linked-list` ↔ `redis-memory-eviction`
- `ds-linked-list` ↔ `redis-basics`
- `ds-linked-list` ↔ `caching-strategies`
- `ds-array-matrix` ↔ `big-o-notation`
- `api-styles-overview` ↔ `graphql-basics`
- `http-streaming-sse` ↔ `server-sent-events`
- `graphql-basics` ↔ `n-plus-one-queries`
- `graphql-basics` ↔ `api-versioning`
- `graphql-basics` ↔ `grpc`
- `graphql-basics` ↔ `sql-query-rewrite`
- `graphql-basics` ↔ `rest-api-design`
- `graphql-basics` ↔ `http-status-codes`
- `docker-commands-workflow` ↔ `linux-namespaces-cgroups`
- `docker-commands-workflow` ↔ `linux-processes-signals`
- `docker-commands-workflow` ↔ `k8s-pod-resources`
- `docker-commands-workflow` ↔ `docker-network-volume`
- `docker-commands-workflow` ↔ `docker-compose`
- `docker-commands-workflow` ↔ `docker-container-basics`
- `claude-code-fundamentals-map` ↔ `claude-code-parallel-and-scheduled`
- `claude-code-fundamentals-map` ↔ `claude-code-project-structure`
- `claude-code-parallel-and-scheduled` ↔ `claude-code-context-window`
- `claude-code-parallel-and-scheduled` ↔ `git-tips-advanced`
- `claude-code-context-window` ↔ `claude-code-extensions`
- `claude-code-context-window` ↔ `claude-code-project-structure`
- `claude-code-extensions` ↔ `claude-code-project-structure`
- `kafka-vs-rabbitmq-replay` ↔ `rabbitmq-basics`
- `sd-music-streaming` ↔ `system-design-study-path`
- `sd-music-streaming` ↔ `sd-video-streaming-cost`
- `acid-vs-base` ↔ `acid-transactions`
- `acid-vs-base` ↔ `db-consistency-cap`
- `acid-vs-base` ↔ `db-type-wide-column`
- `acid-vs-base` ↔ `mongodb-document-model`
- `centralized-logging-pipeline` ↔ `opensearch-cluster-operations`
- `centralized-logging-pipeline` ↔ `k8s-daemonset`
- `centralized-logging-pipeline` ↔ `structured-logging`
- `opensearch-cluster-operations` ↔ `elasticsearch-inverted-index`
- `mysql-replication-online-ddl` ↔ `mysql-innodb-basics`
- `mysql-replication-online-ddl` ↔ `zero-downtime-migrations`
- `mysql-replication-online-ddl` ↔ `db-replication-sharding`
- `mysql-innodb-basics` ↔ `pessimistic-locking`
- `mysql-innodb-basics` ↔ `db-locking-deadlock`
- `mysql-innodb-basics` ↔ `postgres-architecture`
- `mysql-innodb-basics` ↔ `postgres-mvcc-vacuum`
- `mysql-innodb-basics` ↔ `db-transaction-isolation`
- `mysql-innodb-basics` ↔ `db-index`
- `java-jvm-memory-gc` ↔ `go-concurrency-basics`
- `java-jvm-memory-gc` ↔ `garbage-collection`
- `java-jvm-memory-gc` ↔ `deadlocks`
- `java-jvm-memory-gc` ↔ `k8s-pod-resources`
- `go-concurrency-basics` ↔ `thread-safety`
- `go-concurrency-basics` ↔ `deadlocks`
- `go-concurrency-basics` ↔ `race-conditions`
- `go-concurrency-basics` ↔ `k8s-pod-resources`
- `release-cutover-hypercare` ↔ `sit-uat-testing`
- `release-cutover-hypercare` ↔ `global-rollout-localization`
- `release-cutover-hypercare` ↔ `enterprise-system-integration`
- `sit-uat-testing` ↔ `global-rollout-localization`
- `sit-uat-testing` ↔ `enterprise-system-integration`
- `global-rollout-localization` ↔ `enterprise-system-integration`
- `parallax-scrollytelling` ↔ `scroll-triggered-intersection-observer`
- `parallax-scrollytelling` ↔ `scroll-driven-animations`
- `parallax-scrollytelling` ↔ `css-sticky-scroll-snap`
- `parallax-scrollytelling` ↔ `scroll-patterns-overview`
- `parallax-scrollytelling` ↔ `animation-performance`
- `scroll-triggered-intersection-observer` ↔ `scroll-driven-animations`
- `scroll-triggered-intersection-observer` ↔ `css-sticky-scroll-snap`
- `scroll-triggered-intersection-observer` ↔ `scroll-patterns-overview`
- `scroll-driven-animations` ↔ `scroll-patterns-overview`
- `css-sticky-scroll-snap` ↔ `scroll-patterns-overview`
- `fastapi-basics` ↔ `express-middleware`
- `fastapi-basics` ↔ `nodejs-server-runtime`
- `express-middleware` ↔ `nodejs-server-runtime`
- `express-middleware` ↔ `pattern-chain-of-responsibility`
- `rag-patterns-overview` ↔ `agentic-rag`
- `rag-patterns-overview` ↔ `graph-rag`
- `agentic-rag` ↔ `graph-rag`
- `agentic-rag` ↔ `rag-retrieval-quality`
- `agentic-rag` ↔ `rag-classic-pipeline`
- `graph-rag` ↔ `rag-retrieval-quality`
- `graph-rag` ↔ `rag-classic-pipeline`
- `graph-rag` ↔ `db-type-graph`
- `integration-tests-real-db` ↔ `test-pyramid-unit-tests`
- `test-pyramid-unit-tests` ↔ `js-microtask-macrotask`
- `test-pyramid-unit-tests` ↔ `js-pure-functions`
- `first-page-from-power-on` ↔ `networking-essentials-map`
- `first-page-from-power-on` ↔ `latency-bandwidth-throughput`
- `first-page-from-power-on` ↔ `packet-capture-tcpdump`
- `first-page-from-power-on` ↔ `network-troubleshooting-by-layer`
- `first-page-from-power-on` ↔ `http-message`
- `first-page-from-power-on` ↔ `https-tls`
- `first-page-from-power-on` ↔ `local-custom-domain`
- `first-page-from-power-on` ↔ `what-happens-google-com`
- `rag-retrieval-quality` ↔ `rag-classic-pipeline`
- `rag-retrieval-quality` ↔ `elasticsearch-inverted-index`
- `rag-retrieval-quality` ↔ `vector-db`
- `rag-classic-pipeline` ↔ `vector-db`
- `caching-concepts-map` ↔ `cache-write-policies`
- `cache-write-policies` ↔ `caching-strategies`
- `reverse-proxy-lb-api-gateway` ↔ `high-availability`
- `reverse-proxy-lb-api-gateway` ↔ `load-balancer-basics`
- `reverse-proxy-lb-api-gateway` ↔ `osi-in-practice`
- `reverse-proxy-lb-api-gateway` ↔ `nginx-reverse-proxy`
- `reverse-proxy-lb-api-gateway` ↔ `proxy-reverse-proxy`
- `reverse-proxy-lb-api-gateway` ↔ `https-tls`
- `reverse-proxy-lb-api-gateway` ↔ `kubernetes-ingress`
- `reverse-proxy-lb-api-gateway` ↔ `gateway`
- `system-design-study-path` ↔ `sd-stock-exchange-low-latency`
- `system-design-study-path` ↔ `sd-stock-exchange-order-book`
- `sd-payment-reliability` ↔ `sd-payment-flow`
- `sd-payment-reliability` ↔ `sd-wallet-transfer`
- `sd-payment-flow` ↔ `sd-leaderboard-scaling`
- `sd-payment-flow` ↔ `sd-wallet-transfer`
- `sd-payment-flow` ↔ `transactional-outbox`
- `sd-leaderboard-scaling` ↔ `sd-leaderboard-sorted-set`
- `sd-leaderboard-sorted-set` ↔ `sd-object-storage-versioning-multipart`
- `sd-leaderboard-sorted-set` ↔ `redis-basics`
- `sd-stock-exchange-low-latency` ↔ `sd-stock-exchange-order-book`
- `sd-stock-exchange-low-latency` ↔ `sd-wallet-event-sourcing`
- `sd-stock-exchange-order-book` ↔ `sd-wallet-event-sourcing`
- `sd-wallet-event-sourcing` ↔ `sd-wallet-transfer`
- `sd-email-storage-search` ↔ `sd-email-protocols`
- `sd-email-storage-search` ↔ `sd-object-storage-architecture`
- `sd-email-protocols` ↔ `sd-hotel-inventory-scaling`
- `sd-email-protocols` ↔ `dns`
- `sd-hotel-inventory-scaling` ↔ `sd-hotel-double-booking`
- `sd-hotel-double-booking` ↔ `sd-ad-click-exactly-once`
- `sd-hotel-double-booking` ↔ `sd-ad-click-stream-windows`
- `sd-ad-click-exactly-once` ↔ `sd-ad-click-stream-windows`
- `sd-ad-click-stream-windows` ↔ `sd-metrics-storage-alerting`
- `sd-ad-click-stream-windows` ↔ `sd-metrics-collection`
- `sd-metrics-storage-alerting` ↔ `sd-metrics-collection`
- `sd-metrics-collection` ↔ `sd-mq-replication`
- `sd-object-storage-versioning-multipart` ↔ `sd-object-storage-durability`
- `sd-object-storage-versioning-multipart` ↔ `sd-object-storage-architecture`
- `sd-object-storage-durability` ↔ `sd-object-storage-architecture`
- `sd-object-storage-architecture` ↔ `sd-kv-store-partition-replication`
- `sd-object-storage-architecture` ↔ `sd-load-balancer-stateless`
- `sd-object-storage-architecture` ↔ `sd-start-single-server`
- `sd-mq-replication` ↔ `sd-mq-consumer-groups`
- `sd-mq-replication` ↔ `sd-mq-storage-partitions`
- `sd-mq-replication` ↔ `kafka-basics`
- `sd-mq-consumer-groups` ↔ `sd-mq-storage-partitions`
- `sd-mq-consumer-groups` ↔ `kafka-basics`
- `sd-mq-storage-partitions` ↔ `sd-maps-location-eta`
- `sd-mq-storage-partitions` ↔ `kafka-basics`
- `sd-mq-storage-partitions` ↔ `message-queue-basics`
- `sd-mq-storage-partitions` ↔ `db-type-key-value`
- `sd-maps-location-eta` ↔ `sd-maps-tiles-routing`
- `sd-maps-location-eta` ↔ `sd-nearby-friends`
- `sd-maps-location-eta` ↔ `sd-proximity-service`
- `sd-maps-tiles-routing` ↔ `sd-nearby-friends`
- `sd-maps-tiles-routing` ↔ `sd-proximity-service`
- `sd-nearby-friends` ↔ `sd-proximity-service`
- `sd-nearby-friends` ↔ `sd-chat-presence`
- `sd-proximity-service` ↔ `sd-file-sync-conflicts`
- `sd-proximity-service` ↔ `geohash`
- `abort-controller` ↔ `js-async-await`
- `abort-controller` ↔ `browser-fetch`
- `browser-storage` ↔ `js-shallow-deep-copy`
- `browser-storage` ↔ `frontend-browser-cache`
- `browser-storage` ↔ `token-login`
- `sd-file-sync-conflicts` ↔ `sd-file-sync-block-upload`
- `sd-file-sync-block-upload` ↔ `sd-video-streaming-cost`
- `sd-file-sync-block-upload` ↔ `sd-video-upload-transcoding`
- `sd-file-sync-block-upload` ↔ `rsync-algorithm`
- `sd-video-streaming-cost` ↔ `sd-video-upload-transcoding`
- `sd-video-upload-transcoding` ↔ `sd-autocomplete-data-pipeline`
- `sd-video-upload-transcoding` ↔ `sd-autocomplete-trie`
- `sd-chat-presence` ↔ `sd-chat-message-storage`
- `sd-chat-presence` ↔ `sd-chat-connections`
- `sd-chat-presence` ↔ `sd-autocomplete-trie`
- `sd-chat-message-storage` ↔ `sd-chat-connections`
- `sd-chat-connections` ↔ `sd-news-feed-retrieval`
- `sd-chat-connections` ↔ `websocket-deep-dive`
- `sd-autocomplete-data-pipeline` ↔ `sd-autocomplete-trie`
- `sd-autocomplete-trie` ↔ `debounce-throttle`
- `sd-news-feed-retrieval` ↔ `sd-news-feed-publishing`
- `sd-news-feed-publishing` ↔ `sd-notification-reliability`
- `sd-news-feed-publishing` ↔ `sd-sharding-intro`
- `sd-notification-reliability` ↔ `sd-notification-system`
- `sd-notification-system` ↔ `sd-web-crawler-politeness-dedup`
- `sd-web-crawler-politeness-dedup` ↔ `sd-web-crawler-architecture`
- `sd-web-crawler-architecture` ↔ `sd-url-shortener-key-generation`
- `sd-web-crawler-architecture` ↔ `sd-url-shortener-api-redirect`
- `sd-url-shortener-key-generation` ↔ `sd-url-shortener-api-redirect`
- `sd-url-shortener-key-generation` ↔ `sd-unique-id-generator`
- `sd-url-shortener-api-redirect` ↔ `sd-unique-id-generator`
- `sd-unique-id-generator` ↔ `sd-kv-store-write-read-path`
- `sd-unique-id-generator` ↔ `sd-sharding-intro`
- `sd-kv-store-write-read-path` ↔ `sd-kv-store-failure-handling`
- `sd-kv-store-write-read-path` ↔ `sd-kv-store-versioning`
- `sd-kv-store-write-read-path` ↔ `sd-kv-store-partition-replication`
- `sd-kv-store-write-read-path` ↔ `bloom-filter`
- `sd-kv-store-write-read-path` ↔ `db-type-wide-column`
- `sd-kv-store-failure-handling` ↔ `sd-kv-store-versioning`
- `sd-kv-store-failure-handling` ↔ `sd-kv-store-partition-replication`
- `sd-kv-store-failure-handling` ↔ `eventual-consistency`
- `sd-kv-store-versioning` ↔ `sd-kv-store-partition-replication`
- `sd-kv-store-versioning` ↔ `clock-skew`
- `sd-kv-store-versioning` ↔ `eventual-consistency`
- `sd-kv-store-partition-replication` ↔ `sd-rate-limiter-design`
- `sd-rate-limiter-design` ↔ `sd-interview-framework`
- `sd-rate-limiter-design` ↔ `sd-capacity-estimation`
- `sd-interview-framework` ↔ `sd-capacity-estimation`
- `sd-interview-framework` ↔ `sd-latency-numbers`
- `sd-interview-framework` ↔ `sd-start-single-server`
- `sd-capacity-estimation` ↔ `sd-latency-numbers`
- `sd-capacity-estimation` ↔ `sd-db-replication-intro`
- `sd-capacity-estimation` ↔ `sd-start-single-server`
- `sd-latency-numbers` ↔ `sd-sharding-intro`
- `sd-latency-numbers` ↔ `percentile-latency`
- `sd-sharding-intro` ↔ `sd-queue-logging-automation`
- `sd-sharding-intro` ↔ `sd-multi-datacenter`
- `sd-sharding-intro` ↔ `sd-cache-and-cdn-tier`
- `sd-sharding-intro` ↔ `sd-db-replication-intro`
- `sd-sharding-intro` ↔ `sd-load-balancer-stateless`
- `sd-sharding-intro` ↔ `sd-split-web-and-db`
- `sd-sharding-intro` ↔ `sd-start-single-server`
- `sd-sharding-intro` ↔ `db-sharding`
- `sd-queue-logging-automation` ↔ `sd-multi-datacenter`
- `sd-queue-logging-automation` ↔ `sd-cache-and-cdn-tier`
- `sd-queue-logging-automation` ↔ `sd-db-replication-intro`
- `sd-queue-logging-automation` ↔ `sd-load-balancer-stateless`
- `sd-queue-logging-automation` ↔ `sd-split-web-and-db`
- `sd-queue-logging-automation` ↔ `sd-start-single-server`
- `sd-multi-datacenter` ↔ `sd-cache-and-cdn-tier`
- `sd-multi-datacenter` ↔ `sd-db-replication-intro`
- `sd-multi-datacenter` ↔ `sd-load-balancer-stateless`
- `sd-multi-datacenter` ↔ `sd-split-web-and-db`
- `sd-multi-datacenter` ↔ `sd-start-single-server`
- `sd-multi-datacenter` ↔ `multi-region`
- `sd-cache-and-cdn-tier` ↔ `sd-db-replication-intro`
- `sd-cache-and-cdn-tier` ↔ `sd-load-balancer-stateless`
- `sd-cache-and-cdn-tier` ↔ `sd-split-web-and-db`
- `sd-cache-and-cdn-tier` ↔ `sd-start-single-server`
- `sd-cache-and-cdn-tier` ↔ `edge-caching`
- `sd-db-replication-intro` ↔ `sd-load-balancer-stateless`
- `sd-db-replication-intro` ↔ `sd-split-web-and-db`
- `sd-db-replication-intro` ↔ `sd-start-single-server`
- `sd-load-balancer-stateless` ↔ `sd-split-web-and-db`
- `sd-load-balancer-stateless` ↔ `sd-start-single-server`
- `sd-split-web-and-db` ↔ `sd-start-single-server`
- `sd-start-single-server` ↔ `db-replication-sharding`
- `sql-interview-problems` ↔ `sql-window-functions-pg`
- `sql-views-materialized` ↔ `sql-cte-recursive`
- `sql-window-functions-pg` ↔ `sql-cte-recursive`
- `sql-window-functions-pg` ↔ `sql-logical-order`
- `sql-window-functions-pg` ↔ `sqld-window-functions`
- `sql-cte-recursive` ↔ `sqld-top-n-hierarchical-pivot`
- `debounce-throttle` ↔ `event-propagation`
- `debounce-throttle` ↔ `js-closures`
- `debounce-throttle` ↔ `code-splitting`
- `debounce-throttle` ↔ `react-rerender`
- `event-delegation` ↔ `event-propagation`
- `event-delegation` ↔ `dom-basics`
- `event-propagation` ↔ `dom-basics`
- `dom-basics` ↔ `event-loop`
- `dom-basics` ↔ `js-memory-leak`
- `js-timers-accuracy` ↔ `js-microtask-macrotask`
- `js-timers-accuracy` ↔ `js-execution-context`
- `js-timers-accuracy` ↔ `animation-performance`
- `js-timers-accuracy` ↔ `event-loop`
- `js-microtask-macrotask` ↔ `js-execution-context`
- `js-microtask-macrotask` ↔ `event-loop`
- `js-execution-context` ↔ `js-hoisting-tdz`
- `js-execution-context` ↔ `event-loop`
- `authn-vs-authz` ↔ `k8s-admission-control`
- `authn-vs-authz` ↔ `zero-trust-architecture`
- `acid-transactions` ↔ `saga-pattern`
- `acid-transactions` ↔ `distributed-transactions-2pc`
- `acid-transactions` ↔ `db-consistency-cap`
- `acid-transactions` ↔ `postgres-architecture`
- `acid-transactions` ↔ `db-transaction-isolation`
- `acid-transactions` ↔ `redis-basics`
- `sql-case-when` ↔ `sql-subqueries-exists-lateral`
- `sql-case-when` ↔ `sql-aggregation-pitfalls`
- `sql-case-when` ↔ `sqld-top-n-hierarchical-pivot`
- `sql-subqueries-exists-lateral` ↔ `sql-joins-in-practice`
- `sql-subqueries-exists-lateral` ↔ `sql-filtering-operators`
- `sql-subqueries-exists-lateral` ↔ `sql-query-rewrite`
- `sql-subqueries-exists-lateral` ↔ `sqld-subquery-set-operators`
- `sql-joins-in-practice` ↔ `sql-aggregation-pitfalls`
- `js-strict-mode` ↔ `js-classes`
- `js-strict-mode` ↔ `js-prototype-chain`
- `js-strict-mode` ↔ `js-this-binding`
- `js-strict-mode` ↔ `js-es-modules`
- `js-strict-mode` ↔ `js-iife-module-pattern`
- `js-strict-mode` ↔ `js-object-methods`
- `js-strict-mode` ↔ `js-function-forms`
- `js-strict-mode` ↔ `js-scope-lexical`
- `js-classes` ↔ `js-prototype-chain`
- `js-classes` ↔ `js-this-binding`
- `js-classes` ↔ `js-function-forms`
- `js-prototype-chain` ↔ `js-call-apply-bind`
- `js-prototype-chain` ↔ `js-this-binding`
- `js-prototype-chain` ↔ `js-spread-rest`
- `js-prototype-chain` ↔ `js-truthy-falsy-typeof`
- `js-prototype-chain` ↔ `pattern-prototype`
- `js-prototype-chain` ↔ `json-crud-http`
- `js-call-apply-bind` ↔ `js-this-binding`
- `js-call-apply-bind` ↔ `js-currying-partial`
- `js-call-apply-bind` ↔ `js-function-forms`
- `js-this-binding` ↔ `js-function-forms`
- `networking-essentials-map` ↔ `packet-encapsulation`
- `nat-traversal` ↔ `router-vs-switch`
- `nat-traversal` ↔ `iptables-nat`
- `router-vs-switch` ↔ `dhcp`
- `router-vs-switch` ↔ `sdn-vxlan-overlay`
- `router-vs-switch` ↔ `vlan-basics`
- `router-vs-switch` ↔ `layer-link-ethernet-arp`
- `dhcp` ↔ `vlan-basics`
- `dhcp` ↔ `vpc-basics`
- `dhcp` ↔ `udp-and-quic`
- `dhcp` ↔ `layer-ip-addressing`
- `dhcp` ↔ `layer-ip-routing-icmp`
- `microservices-decomposition` ↔ `ddd-bounded-context`
- `microservices-decomposition` ↔ `modular-monolith`
- `microservices-decomposition` ↔ `monolith-architecture`
- `microservices-decomposition` ↔ `microservices`
- `ddd-bounded-context` ↔ `modular-monolith`
- `ddd-bounded-context` ↔ `microservices`
- `clean-architecture` ↔ `hexagonal-architecture`
- `clean-architecture` ↔ `layered-architecture`
- `hexagonal-architecture` ↔ `layered-architecture`
- `hexagonal-architecture` ↔ `pattern-adapter`
- `js-es-modules` ↔ `js-iife-module-pattern`
- `js-es-modules` ↔ `js-async-await`
- `js-es-modules` ↔ `js-hoisting-tdz`
- `js-es-modules` ↔ `pattern-singleton`
- `js-es-modules` ↔ `code-splitting`
- `js-short-circuit` ↔ `js-optional-chaining-nullish`
- `js-short-circuit` ↔ `js-template-literals`
- `js-short-circuit` ↔ `js-array-transform`
- `js-short-circuit` ↔ `js-truthy-falsy-typeof`
- `js-optional-chaining-nullish` ↔ `js-destructuring`
- `js-optional-chaining-nullish` ↔ `js-truthy-falsy-typeof`
- `js-template-literals` ↔ `js-equality-coercion`
- `js-memoization` ↔ `js-pure-functions`
- `js-memoization` ↔ `js-immutability-react`
- `js-memoization` ↔ `js-closures`
- `js-memoization` ↔ `caching-strategies`
- `js-memoization` ↔ `client-data-cache`
- `js-memoization` ↔ `big-o-notation`
- `js-memoization` ↔ `js-memory-leak`
- `js-memoization` ↔ `react-rerender`
- `js-pure-functions` ↔ `js-immutability-react`
- `js-pure-functions` ↔ `js-array-mutation`
- `js-pure-functions` ↔ `message-queue-basics`
- `js-pure-functions` ↔ `http-methods`
- `js-currying-partial` ↔ `js-closures`
- `js-currying-partial` ↔ `js-first-class-callbacks`
- `js-currying-partial` ↔ `js-spread-rest`
- `js-iife-module-pattern` ↔ `js-closures`
- `js-iife-module-pattern` ↔ `js-var-let-const`
- `js-immutability-react` ↔ `js-shallow-deep-copy`
- `js-immutability-react` ↔ `js-object-methods`
- `js-immutability-react` ↔ `js-array-mutation`
- `js-shallow-deep-copy` ↔ `js-object-methods`
- `js-shallow-deep-copy` ↔ `js-primitive-vs-reference`
- `js-shallow-deep-copy` ↔ `pattern-prototype`
- `js-object-methods` ↔ `js-spread-rest`
- `js-object-methods` ↔ `js-primitive-vs-reference`
- `animation-performance` ↔ `view-transitions-shared-element`
- `animation-performance` ↔ `spring-animation`
- `animation-performance` ↔ `animation-patterns`
- `view-transitions-shared-element` ↔ `spring-animation`
- `view-transitions-shared-element` ↔ `animation-patterns`
- `spring-animation` ↔ `animation-patterns`
- `animation-patterns` ↔ `loading-patterns`
- `serverless-architecture` ↔ `cloud-cost-optimization`
- `serverless-architecture` ↔ `serverless-limits`
- `serverless-architecture` ↔ `cold-starts`
- `serverless-architecture` ↔ `saga-pattern`
- `transactional-outbox` ↔ `message-delivery-semantics`
- `transactional-outbox` ↔ `db-architecture-by-scale`
- `transactional-outbox` ↔ `microservices`
- `event-sourcing` ↔ `cqrs`
- `event-sourcing` ↔ `schema-versioning`
- `event-sourcing` ↔ `event-driven-architecture`
- `cqrs` ↔ `event-driven-architecture`
- `consistency-models` ↔ `thread-safety`
- `consistency-models` ↔ `eventual-consistency`
- `consistency-models` ↔ `db-consistency-cap`
- `fault-tolerance` ↔ `high-availability`
- `high-availability` ↔ `vpc-basics`
- `js-closures` ↔ `js-first-class-callbacks`
- `js-closures` ↔ `js-function-forms`
- `js-closures` ↔ `js-scope-lexical`
- `js-closures` ↔ `js-var-let-const`
- `js-closures` ↔ `js-memory-leak`
- `js-first-class-callbacks` ↔ `js-function-forms`
- `js-first-class-callbacks` ↔ `js-callback-hell`
- `js-first-class-callbacks` ↔ `pattern-decorator`
- `js-function-forms` ↔ `js-spread-rest`
- `js-function-forms` ↔ `js-hoisting-tdz`
- `sql-aggregation-pitfalls` ↔ `sql-filtering-operators`
- `sql-aggregation-pitfalls` ↔ `sql-logical-order`
- `sql-filtering-operators` ↔ `sql-logical-order`
- `js-spread-rest` ↔ `js-destructuring`
- `js-spread-rest` ↔ `js-array-mutation`
- `js-array-mutation` ↔ `js-array-transform`
- `js-array-mutation` ↔ `js-primitive-vs-reference`
- `js-promise-combinators` ↔ `js-async-await`
- `js-promise-combinators` ↔ `js-promises`
- `js-promise-combinators` ↔ `js-callback-hell`
- `js-async-await` ↔ `js-promises`
- `js-async-await` ↔ `js-callback-hell`
- `js-promises` ↔ `js-callback-hell`
- `layered-architecture` ↔ `modular-monolith`
- `layered-architecture` ↔ `monolith-architecture`
- `modular-monolith` ↔ `monolith-architecture`
- `modular-monolith` ↔ `microservices`
- `monolith-architecture` ↔ `microservices`
- `js-hoisting-tdz` ↔ `js-scope-lexical`
- `js-hoisting-tdz` ↔ `js-var-let-const`
- `js-scope-lexical` ↔ `js-var-let-const`
- `js-var-let-const` ↔ `js-primitive-vs-reference`
- `js-truthy-falsy-typeof` ↔ `js-equality-coercion`
- `js-truthy-falsy-typeof` ↔ `js-primitive-vs-reference`
- `js-equality-coercion` ↔ `js-primitive-vs-reference`
- `js-primitive-vs-reference` ↔ `react-rerender`
- `ddos-protection` ↔ `cilium-ebpf`
- `ddos-protection` ↔ `waf`
- `ddos-protection` ↔ `cdn-edge-anycast`
- `ddos-protection` ↔ `tcp-connection-lifecycle`
- `ddos-protection` ↔ `udp-and-quic`
- `k8s-learning-roadmap` ↔ `k8s-certifications`
- `grafana-dashboards` ↔ `prometheus-basics`
- `prometheus-basics` ↔ `monitoring-basics`
- `prometheus-basics` ↔ `db-type-time-series`
- `gitops-argocd-vs-flux` ↔ `argocd-basics`
- `argocd-basics` ↔ `k8s-deploy-pipeline-eks`
- `argocd-basics` ↔ `helm-dependencies-oci-gitops`
- `external-secrets` ↔ `secrets-management`
- `external-secrets` ↔ `k8s-secret`
- `external-secrets` ↔ `helm-values-secrets`
- `cilium-ebpf` ↔ `k8s-daemonset`
- `cilium-ebpf` ↔ `k8s-kube-proxy-modes`
- `cilium-ebpf` ↔ `service-mesh`
- `cilium-ebpf` ↔ `k8s-network-policy`
- `cilium-ebpf` ↔ `k8s-cni-pod-network`
- `cilium-ebpf` ↔ `k8s-service-types`
- `cilium-ebpf` ↔ `sdn-vxlan-overlay`
- `cilium-ebpf` ↔ `iptables-nat`
- `k8s-batch-kueue` ↔ `k8s-gpu-dra`
- `k8s-batch-kueue` ↔ `k8s-api-aggregation-schedulers`
- `k8s-batch-kueue` ↔ `k8s-job-cronjob`
- `k8s-gpu-dra` ↔ `k8s-daemonset`
- `k8s-api-aggregation-schedulers` ↔ `k8s-operators`
- `k8s-api-aggregation-schedulers` ↔ `k8s-crd`
- `k8s-api-aggregation-schedulers` ↔ `k8s-feature-maturity`
- `k8s-api-aggregation-schedulers` ↔ `k8s-hpa`
- `k8s-api-aggregation-schedulers` ↔ `k8s-namespace`
- `k8s-cri-cni-csi` ↔ `k8s-storageclass-snapshots`
- `k8s-cri-cni-csi` ↔ `local-k8s-kind-minikube`
- `k8s-cri-cni-csi` ↔ `eks-cluster-basics`
- `k8s-cri-cni-csi` ↔ `k8s-pv-pvc`
- `k8s-cri-cni-csi` ↔ `k8s-secret`
- `k8s-operators` ↔ `k8s-crd`
- `k8s-operators` ↔ `k8s-controllers-reconcile`
- `k8s-crd` ↔ `k8s-controllers-reconcile`
- `k8s-crd` ↔ `k8s-api-objects`
- `k8s-crd` ↔ `helm-release-lifecycle`
- `k8s-certificates-pki` ↔ `k8s-rbac`
- `k8s-audit-logging` ↔ `k8s-admission-control`
- `k8s-audit-logging` ↔ `k8s-pod-security-admission`
- `k8s-audit-logging` ↔ `k8s-rbac`
- `k8s-admission-control` ↔ `k8s-cluster-upgrade`
- `k8s-admission-control` ↔ `k8s-pod-security-admission`
- `k8s-admission-control` ↔ `k8s-rbac`
- `k8s-admission-control` ↔ `kubectl-apply-ssa`
- `k8s-admission-control` ↔ `kubernetes-ingress`
- `velero-backup` ↔ `k8s-etcd-backup`
- `velero-backup` ↔ `k8s-storageclass-snapshots`
- `velero-backup` ↔ `backup-strategy`
- `k8s-etcd-backup` ↔ `k8s-cluster-upgrade`
- `k8s-etcd-backup` ↔ `k8s-architecture`
- `k8s-etcd-backup` ↔ `backup-strategy`
- `k8s-cluster-upgrade` ↔ `k8s-node-maintenance`
- `k8s-cluster-upgrade` ↔ `k8s-pod-disruption-budget`
- `k8s-cluster-upgrade` ↔ `k8s-pod-security-admission`
- `k8s-cluster-upgrade` ↔ `k8s-feature-maturity`
- `k8s-node-maintenance` ↔ `k8s-daemonset`
- `k8s-node-maintenance` ↔ `k8s-statefulset`
- `k8s-node-maintenance` ↔ `k8s-pod-disruption-budget`
- `k8s-job-cronjob` ↔ `k8s-daemonset`
- `k8s-job-cronjob` ↔ `k8s-statefulset`
- `k8s-daemonset` ↔ `k8s-statefulset`
- `k8s-daemonset` ↔ `k8s-node-autoscaling-karpenter`
- `k8s-daemonset` ↔ `eks-cluster-basics`
- `k8s-daemonset` ↔ `k8s-cni-pod-network`
- `k8s-daemonset` ↔ `k8s-pod-scheduling`
- `k8s-statefulset` ↔ `k8s-storageclass-snapshots`
- `k8s-statefulset` ↔ `k8s-pod-disruption-budget`
- `k8s-statefulset` ↔ `rollback-strategy`
- `k8s-statefulset` ↔ `k8s-hpa`
- `k8s-statefulset` ↔ `k8s-coredns`
- `k8s-statefulset` ↔ `k8s-service-types`
- `k8s-statefulset` ↔ `k8s-pv-pvc`
- `k8s-statefulset` ↔ `k8s-pod-troubleshooting`
- `k8s-statefulset` ↔ `k8s-pod-lifecycle`
- `k8s-statefulset` ↔ `k8s-pod-basics`
- `k8s-storageclass-snapshots` ↔ `local-k8s-kind-minikube`
- `k8s-storageclass-snapshots` ↔ `k8s-pv-pvc`
- `k8s-gateway-api` ↔ `gateway`
- `k8s-kube-proxy-modes` ↔ `k8s-service-types`
- `k8s-kube-proxy-modes` ↔ `iptables-nat`
- `k8s-in-place-resize` ↔ `k8s-node-autoscaling-karpenter`
- `k8s-in-place-resize` ↔ `k8s-vpa`
- `k8s-node-autoscaling-karpenter` ↔ `k8s-vpa`
- `k8s-node-autoscaling-karpenter` ↔ `k8s-pod-disruption-budget`
- `k8s-node-autoscaling-karpenter` ↔ `cloud-cost-optimization`
- `k8s-node-autoscaling-karpenter` ↔ `autoscaling`
- `k8s-node-autoscaling-karpenter` ↔ `eks-cluster-basics`
- `k8s-node-autoscaling-karpenter` ↔ `k8s-hpa`
- `k8s-vpa` ↔ `k8s-pod-disruption-budget`
- `k8s-vpa` ↔ `k8s-hpa`
- `k8s-pod-disruption-budget` ↔ `eks-cluster-basics`
- `k8s-pod-disruption-budget` ↔ `k8s-deployment`
- `k8s-pod-disruption-budget` ↔ `k8s-pod-scheduling`
- `k8s-pod-security-admission` ↔ `k8s-security-context`
- `k8s-pod-security-admission` ↔ `k8s-serviceaccount-tokens`
- `k8s-pod-security-admission` ↔ `k8s-rbac`
- `k8s-pod-security-admission` ↔ `k8s-namespace`
- `k8s-security-context` ↔ `k8s-serviceaccount-tokens`
- `k8s-security-context` ↔ `k8s-rbac`
- `k8s-security-context` ↔ `linux-namespaces-cgroups`
- `k8s-security-context` ↔ `linux-files-permissions`
- `k8s-security-context` ↔ `docker-container-basics`
- `k8s-serviceaccount-tokens` ↔ `k8s-rbac`
- `k8s-serviceaccount-tokens` ↔ `eks-cluster-basics`
- `k8s-rbac` ↔ `iam-basics`
- `k8s-rbac` ↔ `k8s-namespace`
- `kustomize-basics` ↔ `kubeconfig-contexts`
- `kustomize-basics` ↔ `kubectl-apply-ssa`
- `kustomize-basics` ↔ `kubectl-essentials`
- `kubeconfig-contexts` ↔ `kubectl-apply-ssa`
- `kubeconfig-contexts` ↔ `kubectl-essentials`
- `kubeconfig-contexts` ↔ `local-k8s-kind-minikube`
- `kubectl-apply-ssa` ↔ `kubectl-essentials`
- `kubectl-apply-ssa` ↔ `k8s-controllers-reconcile`
- `kubectl-apply-ssa` ↔ `k8s-api-objects`
- `kubectl-apply-ssa` ↔ `k8s-secret`
- `kubectl-essentials` ↔ `local-k8s-kind-minikube`
- `kubectl-essentials` ↔ `k8s-pod-troubleshooting`
- `k8s-feature-maturity` ↔ `k8s-api-objects`
- `k8s-feature-maturity` ↔ `local-k8s-kind-minikube`
- `k8s-controllers-reconcile` ↔ `k8s-labels-selectors`
- `k8s-controllers-reconcile` ↔ `k8s-api-objects`
- `k8s-controllers-reconcile` ↔ `k8s-architecture`
- `k8s-labels-selectors` ↔ `k8s-api-objects`
- `k8s-labels-selectors` ↔ `k8s-pod-basics`
- `k8s-api-objects` ↔ `k8s-namespace`
- `local-k8s-kind-minikube` ↔ `k8s-architecture`
- `local-k8s-kind-minikube` ↔ `k8s-hpa`
- `local-k8s-kind-minikube` ↔ `k8s-network-policy`
- `local-k8s-kind-minikube` ↔ `k8s-cni-pod-network`
- `local-k8s-kind-minikube` ↔ `k8s-service-types`
- `local-k8s-kind-minikube` ↔ `helm-dependencies-oci-gitops`
- `local-k8s-kind-minikube` ↔ `helm-basics`
- `local-k8s-kind-minikube` ↔ `k8s-pod-scheduling`
- `local-k8s-kind-minikube` ↔ `k8s-pod-basics`
- `curl-for-debugging` ↔ `network-troubleshooting-by-layer`
- `linux-namespaces-cgroups` ↔ `k8s-pod-resources`
- `linux-namespaces-cgroups` ↔ `docker-container-basics`
- `iac-basics` ↔ `terraform-basics`
- `dependency-hell` ↔ `semantic-versioning`
- `dependency-hell` ↔ `build-caching`
- `semantic-versioning` ↔ `helm-dependencies-oci-gitops`
- `semantic-versioning` ↔ `git-branching-strategy`
- `k8s-architecture` ↔ `health-checks`
- `k8s-architecture` ↔ `raft-consensus`
- `k8s-architecture` ↔ `eks-cluster-basics`
- `k8s-architecture` ↔ `leader-election`
- `k8s-architecture` ↔ `k8s-cni-pod-network`
- `k8s-architecture` ↔ `k8s-service-types`
- `k8s-architecture` ↔ `k8s-secret`
- `k8s-architecture` ↔ `k8s-pod-lifecycle`
- `k8s-architecture` ↔ `k8s-pod-basics`
- `cloud-cost-optimization` ↔ `serverless-limits`
- `serverless-limits` ↔ `cold-starts`
- `cold-starts` ↔ `autoscaling`
- `postmortems` ↔ `on-call`
- `postmortems` ↔ `production-incidents`
- `postmortems` ↔ `chaos-engineering`
- `postmortems` ↔ `error-budgets`
- `on-call` ↔ `production-incidents`
- `on-call` ↔ `chaos-engineering`
- `on-call` ↔ `alerting`
- `production-incidents` ↔ `chaos-engineering`
- `chaos-engineering` ↔ `timeouts`
- `multi-region` ↔ `failover`
- `multi-region` ↔ `backup-strategy`
- `multi-region` ↔ `disaster-recovery`
- `failover` ↔ `backup-strategy`
- `failover` ↔ `disaster-recovery`
- `failover` ↔ `network-partitions`
- `failover` ↔ `leader-election`
- `failover` ↔ `db-replication-sharding`
- `backup-strategy` ↔ `disaster-recovery`
- `backup-strategy` ↔ `encryption-at-rest`
- `disaster-recovery` ↔ `postgres-operations`
- `disaster-recovery` ↔ `db-replication-sharding`
- `jwt-key-rotation` ↔ `token-login`
- `iam-basics` ↔ `secrets-management`
- `iam-basics` ↔ `eks-cluster-basics`
- `secrets-management` ↔ `git-large-files-secrets`
- `health-checks` ↔ `alerting`
- `health-checks` ↔ `load-balancer-basics`
- `error-budgets` ↔ `sli-slo`
- `error-budgets` ↔ `alerting`
- `sli-slo` ↔ `alerting`
- `sli-slo` ↔ `metrics-types`
- `sli-slo` ↔ `monitoring-basics`
- `alerting` ↔ `monitoring-basics`
- `alerting` ↔ `network-monitoring`
- `cache-invalidation` ↔ `edge-caching`
- `edge-caching` ↔ `nginx-https-performance`
- `tail-latency` ↔ `percentile-latency`
- `tail-latency` ↔ `backpressure`
- `tail-latency` ↔ `garbage-collection`
- `tail-latency` ↔ `retries`
- `tail-latency` ↔ `rate-limiting-algorithms`
- `tail-latency` ↔ `resilience-patterns`
- `percentile-latency` ↔ `metrics-types`
- `ssrf` ↔ `webhooks`
- `ssrf` ↔ `vpc-basics`
- `ssrf` ↔ `layer-ip-addressing`
- `sql-injection` ↔ `xss`
- `sql-injection` ↔ `postgres-roles-security`
- `xss` ↔ `csrf`
- `csrf` ↔ `http-methods`
- `csrf` ↔ `cors`
- `csrf` ↔ `cookie-session-login`
- `csrf` ↔ `token-login`
- `waf` ↔ `ids-ips`
- `encryption-in-transit` ↔ `encryption-at-rest`
- `encryption-in-transit` ↔ `https-tls`
- `rolling-deployment` ↔ `canary-release`
- `rolling-deployment` ↔ `blue-green-deployment`
- `rolling-deployment` ↔ `load-balancer-basics`
- `canary-release` ↔ `blue-green-deployment`
- `canary-release` ↔ `rollback-strategy`
- `canary-release` ↔ `feature-flags`
- `canary-release` ↔ `k8s-deployment`
- `canary-release` ↔ `gateway`
- `blue-green-deployment` ↔ `rollback-strategy`
- `blue-green-deployment` ↔ `ci-cd-basics`
- `blue-green-deployment` ↔ `linux-processes-signals`
- `rollback-strategy` ↔ `feature-flags`
- `rollback-strategy` ↔ `build-caching`
- `rollback-strategy` ↔ `ci-cd-basics`
- `rollback-strategy` ↔ `helm-release-lifecycle`
- `feature-flags` ↔ `ci-cd-basics`
- `build-caching` ↔ `ci-cd-basics`
- `build-caching` ↔ `git-internals-basics`
- `structured-logging` ↔ `metrics-types`
- `structured-logging` ↔ `monitoring-basics`
- `structured-logging` ↔ `observability-basics`
- `structured-logging` ↔ `distributed-tracing`
- `metrics-types` ↔ `monitoring-basics`
- `metrics-types` ↔ `observability-basics`
- `metrics-types` ↔ `network-monitoring`
- `metrics-types` ↔ `db-type-time-series`
- `monitoring-basics` ↔ `observability-basics`
- `observability-basics` ↔ `distributed-tracing`
- `scaling-horizontal-vertical` ↔ `autoscaling`
- `scaling-horizontal-vertical` ↔ `db-sharding`
- `scaling-horizontal-vertical` ↔ `db-replication-sharding`
- `autoscaling` ↔ `backpressure`
- `autoscaling` ↔ `message-queue-basics`
- `backpressure` ↔ `message-queue-basics`
- `backpressure` ↔ `retries`
- `backpressure` ↔ `connection-pool`
- `garbage-collection` ↔ `js-memory-leak`
- `schema-versioning` ↔ `db-migration-tools`
- `schema-versioning` ↔ `api-versioning`
- `schema-versioning` ↔ `event-driven-architecture`
- `zero-downtime-migrations` ↔ `db-migration-tools`
- `zero-downtime-migrations` ↔ `pessimistic-locking`
- `zero-downtime-migrations` ↔ `db-architecture-by-scale`
- `db-migration-tools` ↔ `db-index-pitfalls`
- `db-migration-tools` ↔ `db-architecture-by-scale`
- `n-plus-one-queries` ↔ `sql-query-rewrite`
- `thread-safety` ↔ `deadlocks`
- `thread-safety` ↔ `race-conditions`
- `deadlocks` ↔ `race-conditions`
- `deadlocks` ↔ `timeouts`
- `deadlocks` ↔ `db-locking-deadlock`
- `race-conditions` ↔ `browser-fetch`
- `server-sent-events` ↔ `long-polling`
- `server-sent-events` ↔ `websocket-deep-dive`
- `server-sent-events` ↔ `realtime-communication`
- `long-polling` ↔ `websocket-deep-dive`
- `long-polling` ↔ `realtime-communication`
- `websocket-deep-dive` ↔ `realtime-communication`
- `network-config-cicd` ↔ `ansible-network-automation`
- `network-config-cicd` ↔ `terraform-network-iac`
- `ansible-network-automation` ↔ `terraform-network-iac`
- `ansible-network-automation` ↔ `terraform-basics`
- `terraform-network-iac` ↔ `terraform-modules-tfvars`
- `terraform-network-iac` ↔ `terraform-basics`
- `terraform-network-iac` ↔ `security-groups-nacl`
- `terraform-network-iac` ↔ `vpc-basics`
- `api-versioning` ↔ `grpc`
- `api-versioning` ↔ `rest-api-design`
- `grpc` ↔ `service-mesh`
- `grpc` ↔ `k8s-service-types`
- `grpc` ↔ `retries`
- `grpc` ↔ `timeouts`
- `grpc` ↔ `load-balancing-algorithms`
- `grpc` ↔ `osi-in-practice`
- `grpc` ↔ `iptables-nat`
- `grpc` ↔ `rest-api-design`
- `grpc` ↔ `gateway`
- `webhooks` ↔ `what-happens-google-com`
- `cron-jobs` ↔ `batch-processing`
- `ray-casting` ↔ `quadtree`
- `ray-casting` ↔ `geohash`
- `quadtree` ↔ `geohash`
- `distributed-tracing` ↔ `network-flow-logs`
- `distributed-tracing` ↔ `event-driven-architecture`
- `network-flow-logs` ↔ `network-monitoring`
- `network-flow-logs` ↔ `eks-cluster-basics`
- `network-flow-logs` ↔ `zero-trust-architecture`
- `network-flow-logs` ↔ `ids-ips`
- `network-flow-logs` ↔ `k8s-cni-pod-network`
- `network-flow-logs` ↔ `security-groups-nacl`
- `network-flow-logs` ↔ `vpc-basics`
- `network-monitoring` ↔ `udp-and-quic`
- `raft-consensus` ↔ `leader-election`
- `raft-consensus` ↔ `db-type-newsql`
- `raft-consensus` ↔ `db-type-key-value`
- `rsync-algorithm` ↔ `merkle-tree`
- `merkle-tree` ↔ `eventual-consistency`
- `merkle-tree` ↔ `git-internals-basics`
- `crdt` ↔ `operational-transform`
- `crdt` ↔ `clock-skew`
- `crdt` ↔ `eventual-consistency`
- `crdt` ↔ `db-consistency-cap`
- `operational-transform` ↔ `realtime-communication`
- `clock-skew` ↔ `eventual-consistency`
- `network-partitions` ↔ `eventual-consistency`
- `network-partitions` ↔ `leader-election`
- `network-partitions` ↔ `db-consistency-cap`
- `eventual-consistency` ↔ `db-consistency-cap`
- `pattern-observer` ↔ `pattern-mediator`
- `pattern-observer` ↔ `design-patterns-overview`
- `pattern-memento` ↔ `pattern-command`
- `pattern-memento` ↔ `pattern-prototype`
- `pattern-mediator` ↔ `pattern-facade`
- `pattern-mediator` ↔ `design-patterns-overview`
- `pattern-iterator` ↔ `pattern-factory-method`
- `pattern-interpreter` ↔ `pattern-visitor`
- `pattern-interpreter` ↔ `design-patterns-overview`
- `pattern-visitor` ↔ `pattern-composite`
- `pattern-template-method` ↔ `pattern-strategy`
- `pattern-template-method` ↔ `pattern-factory-method`
- `pattern-template-method` ↔ `design-patterns-overview`
- `pattern-strategy` ↔ `pattern-state`
- `pattern-strategy` ↔ `pattern-command`
- `pattern-strategy` ↔ `pattern-bridge`
- `pattern-strategy` ↔ `design-patterns-overview`
- `pattern-state` ↔ `design-patterns-overview`
- `k8s-deploy-pipeline-eks` ↔ `k8s-project-structure`
- `k8s-deploy-pipeline-eks` ↔ `github-actions-docker-ecr`
- `k8s-deploy-pipeline-eks` ↔ `eks-cluster-basics`
- `k8s-deploy-pipeline-eks` ↔ `terraform-basics`
- `k8s-deploy-pipeline-eks` ↔ `k8s-deployment`
- `k8s-deploy-pipeline-eks` ↔ `k8s-pod-probes`
- `k8s-deploy-pipeline-eks` ↔ `k8s-pod-lifecycle`
- `k8s-project-structure` ↔ `github-actions-docker-ecr`
- `k8s-project-structure` ↔ `terraform-modules-tfvars`
- `k8s-project-structure` ↔ `k8s-namespace`
- `github-actions-docker-ecr` ↔ `dockerfile-image-layers`
- `count-min-sketch` ↔ `lossy-counting`
- `count-min-sketch` ↔ `hyperloglog`
- `count-min-sketch` ↔ `bloom-filter`
- `lossy-counting` ↔ `hyperloglog`
- `lossy-counting` ↔ `bloom-filter`
- `hyperloglog` ↔ `bloom-filter`
- `bloom-filter` ↔ `db-type-wide-column`
- `bloom-filter` ↔ `caching-strategies`
- `pattern-command` ↔ `pattern-chain-of-responsibility`
- `pattern-command` ↔ `design-patterns-overview`
- `pattern-chain-of-responsibility` ↔ `pattern-decorator`
- `pattern-chain-of-responsibility` ↔ `pattern-composite`
- `pattern-chain-of-responsibility` ↔ `design-patterns-overview`
- `pattern-proxy` ↔ `pattern-decorator`
- `pattern-proxy` ↔ `pattern-adapter`
- `pattern-proxy` ↔ `design-patterns-overview`
- `pattern-proxy` ↔ `sql-query-rewrite`
- `eks-cluster-basics` ↔ `terraform-modules-tfvars`
- `eks-cluster-basics` ↔ `terraform-basics`
- `eks-cluster-basics` ↔ `k8s-hpa`
- `eks-cluster-basics` ↔ `k8s-cni-pod-network`
- `eks-cluster-basics` ↔ `k8s-pv-pvc`
- `eks-cluster-basics` ↔ `k8s-secret`
- `eks-cluster-basics` ↔ `vpc-subnets-route-tables`
- `eks-cluster-basics` ↔ `vpc-basics`
- `eks-cluster-basics` ↔ `layer-ip-addressing`
- `terraform-modules-tfvars` ↔ `terraform-basics`
- `terraform-basics` ↔ `vpc-basics`
- `linux-grep-awk-sed` ↔ `linux-systemd-systemctl`
- `linux-systemd-systemctl` ↔ `linux-processes-signals`
- `linux-systemd-systemctl` ↔ `linux-files-permissions`
- `linux-processes-signals` ↔ `linux-files-permissions`
- `linux-processes-signals` ↔ `k8s-pod-lifecycle`
- `linux-processes-signals` ↔ `docker-container-basics`
- `zero-trust-architecture` ↔ `ids-ips`
- `zero-trust-architecture` ↔ `service-mesh`
- `zero-trust-architecture` ↔ `vpn-ipsec-wireguard`
- `zero-trust-architecture` ↔ `https-tls`
- `service-discovery` ↔ `service-mesh`
- `service-mesh` ↔ `retries`
- `service-mesh` ↔ `circuit-breaker`
- `service-mesh` ↔ `idempotency-key`
- `service-mesh` ↔ `k8s-pod-multicontainer`
- `service-mesh` ↔ `osi-in-practice`
- `service-mesh` ↔ `https-tls`
- `service-mesh` ↔ `resilience-patterns`
- `service-mesh` ↔ `kubernetes-ingress`
- `message-delivery-semantics` ↔ `kafka-basics`
- `message-delivery-semantics` ↔ `event-driven-architecture`
- `message-delivery-semantics` ↔ `dead-letter-queue`
- `message-delivery-semantics` ↔ `message-queue-basics`
- `message-delivery-semantics` ↔ `idempotency-key`
- `rabbitmq-basics` ↔ `kafka-basics`
- `rabbitmq-basics` ↔ `event-driven-architecture`
- `rabbitmq-basics` ↔ `dead-letter-queue`
- `rabbitmq-basics` ↔ `message-queue-basics`
- `kafka-basics` ↔ `event-driven-architecture`
- `kafka-basics` ↔ `pub-sub`
- `kafka-basics` ↔ `message-queue-basics`
- `event-driven-architecture` ↔ `saga-pattern`
- `event-driven-architecture` ↔ `pub-sub`
- `event-driven-architecture` ↔ `db-architecture-by-scale`
- `event-driven-architecture` ↔ `microservices`
- `leader-election` ↔ `distributed-transactions-2pc`
- `leader-election` ↔ `distributed-lock`
- `leader-election` ↔ `db-type-key-value`
- `saga-pattern` ↔ `distributed-transactions-2pc`
- `saga-pattern` ↔ `db-locking-deadlock`
- `saga-pattern` ↔ `microservices`
- `distributed-transactions-2pc` ↔ `db-type-newsql`
- `distributed-transactions-2pc` ↔ `microservices`
- `k8s-hpa` ↔ `k8s-deployment`
- `k8s-deployment` ↔ `k8s-pv-pvc`
- `k8s-deployment` ↔ `k8s-pod-scheduling`
- `k8s-deployment` ↔ `k8s-pod-probes`
- `k8s-namespace` ↔ `k8s-secret`
- `k8s-namespace` ↔ `k8s-configmap`
- `k8s-coredns` ↔ `k8s-network-policy`
- `k8s-coredns` ↔ `k8s-service-types`
- `k8s-network-policy` ↔ `k8s-cni-pod-network`
- `k8s-network-policy` ↔ `k8s-service-types`
- `k8s-network-policy` ↔ `osi-in-practice`
- `k8s-network-policy` ↔ `gateway`
- `k8s-cni-pod-network` ↔ `k8s-service-types`
- `k8s-cni-pod-network` ↔ `docker-network-drivers`
- `k8s-cni-pod-network` ↔ `sdn-vxlan-overlay`
- `k8s-cni-pod-network` ↔ `k8s-pod-basics`
- `k8s-cni-pod-network` ↔ `layer-ip-addressing`
- `k8s-cni-pod-network` ↔ `layer-mtu-fragmentation`
- `k8s-service-types` ↔ `k8s-pod-lifecycle`
- `k8s-service-types` ↔ `iptables-nat`
- `k8s-service-types` ↔ `kubernetes-ingress`
- `docker-network-drivers` ↔ `docker-network-volume`
- `pattern-flyweight` ↔ `pattern-prototype`
- `pattern-flyweight` ↔ `design-patterns-overview`
- `pattern-facade` ↔ `pattern-adapter`
- `pattern-facade` ↔ `design-patterns-overview`
- `pattern-decorator` ↔ `pattern-composite`
- `pattern-decorator` ↔ `pattern-adapter`
- `pattern-decorator` ↔ `design-patterns-overview`
- `pattern-composite` ↔ `design-patterns-overview`
- `dead-letter-queue` ↔ `pub-sub`
- `dead-letter-queue` ↔ `message-queue-basics`
- `pub-sub` ↔ `message-queue-basics`
- `pub-sub` ↔ `redis-basics`
- `message-queue-basics` ↔ `redis-basics`
- `k8s-pv-pvc` ↔ `k8s-secret`
- `k8s-pv-pvc` ↔ `k8s-configmap`
- `k8s-secret` ↔ `k8s-configmap`
- `k8s-secret` ↔ `helm-values-secrets`
- `k8s-secret` ↔ `k8s-pod-troubleshooting`
- `k8s-configmap` ↔ `helm-dependencies-oci-gitops`
- `k8s-configmap` ↔ `helm-chart-templates`
- `k8s-configmap` ↔ `helm-basics`
- `k8s-configmap` ↔ `k8s-pod-multicontainer`
- `pattern-bridge` ↔ `pattern-adapter`
- `pattern-bridge` ↔ `design-patterns-overview`
- `pattern-adapter` ↔ `design-patterns-overview`
- `pattern-prototype` ↔ `pattern-builder`
- `pattern-prototype` ↔ `pattern-factory-method`
- `pattern-prototype` ↔ `design-patterns-overview`
- `pattern-builder` ↔ `pattern-abstract-factory`
- `pattern-builder` ↔ `pattern-factory-method`
- `pattern-builder` ↔ `design-patterns-overview`
- `exponential-backoff-jitter` ↔ `retries`
- `exponential-backoff-jitter` ↔ `timeouts`
- `exponential-backoff-jitter` ↔ `caching-strategies`
- `exponential-backoff-jitter` ↔ `resilience-patterns`
- `retries` ↔ `timeouts`
- `retries` ↔ `resilience-patterns`
- `timeouts` ↔ `resilience-patterns`
- `connection-pool` ↔ `circuit-breaker`
- `connection-pool` ↔ `latency-bandwidth-throughput`
- `connection-pool` ↔ `pessimistic-locking`
- `connection-pool` ↔ `sql-batch-timeout-pool`
- `circuit-breaker` ↔ `resilience-patterns`
- `traffic-shaping-qos` ↔ `latency-bandwidth-throughput`
- `traffic-shaping-qos` ↔ `rate-limiting-algorithms`
- `traffic-shaping-qos` ↔ `tcp-reliability-congestion`
- `load-balancing-algorithms` ↔ `load-balancer-basics`
- `load-balancing-algorithms` ↔ `consistent-hashing`
- `load-balancing-algorithms` ↔ `nginx-reverse-proxy`
- `load-balancer-basics` ↔ `layer-link-ethernet-arp`
- `load-balancer-basics` ↔ `nginx-reverse-proxy`
- `pattern-abstract-factory` ↔ `pattern-factory-method`
- `pattern-abstract-factory` ↔ `design-patterns-overview`
- `pattern-factory-method` ↔ `design-patterns-overview`
- `pattern-singleton` ↔ `design-patterns-overview`
- `distributed-lock` ↔ `pessimistic-locking`
- `distributed-lock` ↔ `idempotency-key`
- `distributed-lock` ↔ `redis-basics`
- `pessimistic-locking` ↔ `optimistic-locking`
- `pessimistic-locking` ↔ `sql-batch-timeout-pool`
- `pessimistic-locking` ↔ `db-architecture-by-scale`
- `sdn-vxlan-overlay` ↔ `vpn-ipsec-wireguard`
- `sdn-vxlan-overlay` ↔ `vlan-basics`
- `sdn-vxlan-overlay` ↔ `vpc-basics`
- `sdn-vxlan-overlay` ↔ `udp-and-quic`
- `sdn-vxlan-overlay` ↔ `layer-mtu-fragmentation`
- `vpn-ipsec-wireguard` ↔ `udp-and-quic`
- `vpn-ipsec-wireguard` ↔ `layer-mtu-fragmentation`
- `vlan-basics` ↔ `layer-link-ethernet-arp`
- `ipv6-basics` ↔ `udp-and-quic`
- `ipv6-basics` ↔ `layer-link-ethernet-arp`
- `ipv6-basics` ↔ `layer-ip-addressing`
- `ipv6-basics` ↔ `layer-mtu-fragmentation`
- `ipv6-basics` ↔ `iptables-basics`
- `ipv6-basics` ↔ `iptables-nat`
- `ipv6-basics` ↔ `dns`
- `api-pagination-sorting` ↔ `sql-query-rewrite`
- `idempotency-key` ↔ `resilience-patterns`
- `rate-limiting-in-practice` ↔ `rate-limiting-algorithms`
- `rate-limiting-in-practice` ↔ `gateway`
- `cdn-edge-anycast` ↔ `http-caching-cdn`
- `cdn-edge-anycast` ↔ `dns`
- `security-groups-nacl` ↔ `vpc-peering-transit-privatelink`
- `security-groups-nacl` ↔ `vpc-subnets-route-tables`
- `security-groups-nacl` ↔ `vpc-basics`
- `security-groups-nacl` ↔ `udp-and-quic`
- `security-groups-nacl` ↔ `ports-and-sockets`
- `security-groups-nacl` ↔ `layer-ip-routing-icmp`
- `security-groups-nacl` ↔ `iptables-basics`
- `vpc-peering-transit-privatelink` ↔ `vpc-subnets-route-tables`
- `vpc-peering-transit-privatelink` ↔ `vpc-basics`
- `vpc-peering-transit-privatelink` ↔ `layer-ip-addressing`
- `vpc-subnets-route-tables` ↔ `vpc-basics`
- `vpc-subnets-route-tables` ↔ `layer-ip-addressing`
- `vpc-subnets-route-tables` ↔ `layer-ip-routing-icmp`
- `vpc-subnets-route-tables` ↔ `iptables-nat`
- `vpc-basics` ↔ `layer-link-ethernet-arp`
- `vpc-basics` ↔ `layer-ip-addressing`
- `loading-patterns` ↔ `client-data-cache`
- `loading-patterns` ↔ `rest-api-design`
- `loading-patterns` ↔ `core-web-vitals`
- `helm-dependencies-oci-gitops` ↔ `helm-release-lifecycle`
- `helm-dependencies-oci-gitops` ↔ `helm-values-secrets`
- `helm-dependencies-oci-gitops` ↔ `helm-basics`
- `helm-release-lifecycle` ↔ `helm-basics`
- `helm-values-secrets` ↔ `helm-chart-templates`
- `helm-values-secrets` ↔ `helm-basics`
- `helm-chart-templates` ↔ `helm-basics`
- `helm-basics` ↔ `k8s-pod-basics`
- `k8s-pod-troubleshooting` ↔ `k8s-pod-scheduling`
- `k8s-pod-troubleshooting` ↔ `k8s-pod-lifecycle`
- `k8s-pod-troubleshooting` ↔ `dockerfile-image-layers`
- `k8s-pod-multicontainer` ↔ `k8s-pod-lifecycle`
- `k8s-pod-multicontainer` ↔ `k8s-pod-basics`
- `k8s-pod-scheduling` ↔ `k8s-pod-resources`
- `k8s-pod-scheduling` ↔ `k8s-pod-basics`
- `k8s-pod-resources` ↔ `k8s-pod-lifecycle`
- `k8s-pod-resources` ↔ `k8s-pod-basics`
- `k8s-pod-probes` ↔ `k8s-pod-lifecycle`
- `k8s-pod-probes` ↔ `kubernetes-ingress`
- `k8s-pod-lifecycle` ↔ `k8s-pod-basics`
- `k8s-pod-lifecycle` ↔ `kubernetes-ingress`
- `nextjs-static-dynamic-rendering` ↔ `react-server-components`
- `nextjs-static-dynamic-rendering` ↔ `rendering-ssg-isr`
- `nextjs-static-dynamic-rendering` ↔ `rendering-strategies`
- `islands-resumability` ↔ `hydration`
- `islands-resumability` ↔ `rendering-strategies`
- `react-server-components` ↔ `streaming-ssr-suspense`
- `react-server-components` ↔ `hydration`
- `react-server-components` ↔ `rendering-strategies`
- `streaming-ssr-suspense` ↔ `hydration`
- `streaming-ssr-suspense` ↔ `rendering-ssr`
- `streaming-ssr-suspense` ↔ `rendering-strategies`
- `hydration` ↔ `rendering-ssr`
- `hydration` ↔ `rendering-strategies`
- `rendering-ssg-isr` ↔ `rendering-ssr`
- `rendering-ssg-isr` ↔ `rendering-strategies`
- `rendering-ssr` ↔ `rendering-csr-spa`
- `rendering-ssr` ↔ `rendering-strategies`
- `rendering-csr-spa` ↔ `rendering-strategies`
- `postgres-reporting-sql` ↔ `postgres-advanced-sql`
- `postgres-connections-pg-hba` ↔ `postgres-getting-started`
- `postgres-connections-pg-hba` ↔ `postgres-roles-security`
- `redis-cluster` ↔ `redis-replication-sentinel`
- `redis-cluster` ↔ `redis-basics`
- `redis-replication-sentinel` ↔ `redis-persistence-ha`
- `sqld-set-operators` ↔ `sqld-subquery-set-operators`
- `sqld-correlated-subquery` ↔ `sqld-subquery-set-operators`
- `sqld-correlated-subquery` ↔ `sqld-window-functions`
- `sqld-null-functions` ↔ `sqld-single-row-functions`
- `sqld-null-functions` ↔ `sqld-group-by-having`
- `sqld-type-conversion` ↔ `sqld-single-row-functions`
- `git-merge-conflict` ↔ `git-staging-area`
- `git-merge-conflict` ↔ `git-branch-merge`
- `git-merge-conflict` ↔ `git-rebase`
- `git-stash-reflog` ↔ `git-staging-area`
- `git-stash-reflog` ↔ `git-undo`
- `git-stash-reflog` ↔ `git-troubleshooting`
- `git-repo-errors` ↔ `git-troubleshooting`
- `git-large-files-secrets` ↔ `git-internals-basics`
- `git-large-files-secrets` ↔ `git-undo`
- `git-large-files-secrets` ↔ `git-troubleshooting`
- `git-ignore-config` ↔ `git-staging-area`
- `git-ignore-config` ↔ `git-troubleshooting`
- `git-staging-area` ↔ `git-internals-basics`
- `packet-capture-tcpdump` ↔ `network-troubleshooting-by-layer`
- `packet-capture-tcpdump` ↔ `osi-in-practice`
- `packet-capture-tcpdump` ↔ `tcp-connection-lifecycle`
- `packet-capture-tcpdump` ↔ `udp-and-quic`
- `packet-capture-tcpdump` ↔ `network-layers-overview`
- `packet-capture-tcpdump` ↔ `iptables-nat`
- `network-troubleshooting-by-layer` ↔ `osi-in-practice`
- `network-troubleshooting-by-layer` ↔ `ports-and-sockets`
- `network-troubleshooting-by-layer` ↔ `layer-mtu-fragmentation`
- `network-troubleshooting-by-layer` ↔ `http-status-codes`
- `network-troubleshooting-by-layer` ↔ `what-happens-google-com`
- `osi-in-practice` ↔ `upper-layers-session-presentation-app`
- `osi-in-practice` ↔ `network-layers-overview`
- `osi-in-practice` ↔ `nginx-reverse-proxy`
- `osi-in-practice` ↔ `proxy-reverse-proxy`
- `osi-in-practice` ↔ `iptables-nat`
- `osi-in-practice` ↔ `http-status-codes`
- `osi-in-practice` ↔ `resilience-patterns`
- `osi-in-practice` ↔ `kubernetes-ingress`
- `osi-in-practice` ↔ `gateway`
- `osi-in-practice` ↔ `what-happens-google-com`
- `db-keys-denormalization` ↔ `db-modeling-normalization`
- `db-locking-deadlock` ↔ `db-transaction-isolation`
- `sql-batch-timeout-pool` ↔ `sql-query-rewrite`
- `sql-batch-timeout-pool` ↔ `db-architecture-by-scale`
- `sql-batch-timeout-pool` ↔ `sql-query-tuning`
- `sql-query-rewrite` ↔ `sql-query-tuning`
- `sql-query-rewrite` ↔ `rest-api-design`
- `db-sharding` ↔ `db-partitioning`
- `db-sharding` ↔ `db-type-wide-column`
- `db-sharding` ↔ `db-replication-sharding`
- `db-sharding` ↔ `db-architecture-by-scale`
- `db-sharding` ↔ `db-index`
- `db-partitioning` ↔ `db-replication-sharding`
- `db-index-pitfalls` ↔ `db-index-design`
- `db-index-pitfalls` ↔ `sql-basics`
- `db-index-pitfalls` ↔ `db-index`
- `db-index-design` ↔ `db-index`
- `sql-insert-update-delete` ↔ `sql-select-where-null`
- `sql-insert-update-delete` ↔ `sql-basics`
- `sql-select-where-null` ↔ `sql-basics`
- `tcp-connection-lifecycle` ↔ `tcp-reliability-congestion`
- `tcp-connection-lifecycle` ↔ `ports-and-sockets`
- `tcp-connection-lifecycle` ↔ `network-layers-overview`
- `tcp-connection-lifecycle` ↔ `layer-mtu-fragmentation`
- `tcp-connection-lifecycle` ↔ `iptables-basics`
- `tcp-reliability-congestion` ↔ `udp-and-quic`
- `tcp-reliability-congestion` ↔ `http-versions`
- `udp-and-quic` ↔ `ports-and-sockets`
- `udp-and-quic` ↔ `layer-ip-routing-icmp`
- `udp-and-quic` ↔ `layer-mtu-fragmentation`
- `udp-and-quic` ↔ `iptables-basics`
- `udp-and-quic` ↔ `iptables-nat`
- `udp-and-quic` ↔ `https-tls`
- `udp-and-quic` ↔ `http-versions`
- `udp-and-quic` ↔ `dns`
- `upper-layers-session-presentation-app` ↔ `network-layers-overview`
- `upper-layers-session-presentation-app` ↔ `json-crud-http`
- `upper-layers-session-presentation-app` ↔ `base64`
- `network-layers-overview` ↔ `layer-link-ethernet-arp`
- `network-layers-overview` ↔ `layer-ip-addressing`
- `network-layers-overview` ↔ `layer-ip-routing-icmp`
- `network-layers-overview` ↔ `layer-mtu-fragmentation`
- `layer-link-ethernet-arp` ↔ `layer-ip-addressing`
- `layer-link-ethernet-arp` ↔ `layer-ip-routing-icmp`
- `layer-link-ethernet-arp` ↔ `layer-mtu-fragmentation`
- `layer-link-ethernet-arp` ↔ `docker-network-volume`
- `layer-link-ethernet-arp` ↔ `iptables-basics`
- `layer-ip-addressing` ↔ `layer-ip-routing-icmp`
- `layer-ip-addressing` ↔ `proxy-reverse-proxy`
- `layer-ip-routing-icmp` ↔ `layer-mtu-fragmentation`
- `layer-ip-routing-icmp` ↔ `iptables-basics`
- `layer-mtu-fragmentation` ↔ `iptables-basics`
- `db-type-time-series` ↔ `db-type-columnar-olap`
- `db-type-time-series` ↔ `db-types-overview`
- `db-type-time-series` ↔ `db-type-relational`
- `db-type-columnar-olap` ↔ `db-type-newsql`
- `db-type-columnar-olap` ↔ `db-type-embedded`
- `db-type-columnar-olap` ↔ `db-types-overview`
- `db-type-columnar-olap` ↔ `db-type-relational`
- `db-type-columnar-olap` ↔ `db-architecture-by-scale`
- `db-type-newsql` ↔ `db-consistency-cap`
- `db-type-newsql` ↔ `db-types-overview`
- `db-type-newsql` ↔ `db-type-key-value`
- `db-type-embedded` ↔ `db-types-overview`
- `db-consistency-cap` ↔ `db-types-overview`
- `db-consistency-cap` ↔ `db-type-key-value`
- `db-consistency-cap` ↔ `db-type-wide-column`
- `db-consistency-cap` ↔ `db-replication-sharding`
- `db-types-overview` ↔ `db-type-relational`
- `db-types-overview` ↔ `db-type-key-value`
- `db-type-relational` ↔ `db-type-key-value`
- `db-type-relational` ↔ `db-type-wide-column`
- `db-type-relational` ↔ `db-type-graph`
- `db-type-relational` ↔ `postgres-architecture`
- `db-type-relational` ↔ `postgres-getting-started`
- `db-type-relational` ↔ `db-architecture-by-scale`
- `db-type-relational` ↔ `mongodb-document-model`
- `db-type-key-value` ↔ `db-type-wide-column`
- `db-type-wide-column` ↔ `db-type-graph`
- `postgres-architecture` ↔ `postgres-mvcc-vacuum`
- `postgres-architecture` ↔ `postgres-operations`
- `postgres-architecture` ↔ `postgres-jsonb-search`
- `postgres-architecture` ↔ `db-replication-sharding`
- `postgres-mvcc-vacuum` ↔ `postgres-operations`
- `postgres-mvcc-vacuum` ↔ `db-transaction-isolation`
- `postgres-mvcc-vacuum` ↔ `db-index`
- `postgres-operations` ↔ `db-architecture-by-scale`
- `postgres-advanced-sql` ↔ `postgres-functions-triggers`
- `postgres-functions-triggers` ↔ `postgres-jsonb-search`
- `postgres-functions-triggers` ↔ `postgres-roles-security`
- `postgres-getting-started` ↔ `postgres-data-types`
- `postgres-getting-started` ↔ `postgres-roles-security`
- `postgres-getting-started` ↔ `sql-basics`
- `git-internals-basics` ↔ `git-branch-merge`
- `git-branch-merge` ↔ `git-remote-collaboration`
- `git-branch-merge` ↔ `git-branching-strategy`
- `git-rebase` ↔ `git-remote-collaboration`
- `git-undo` ↔ `git-troubleshooting`
- `git-remote-collaboration` ↔ `git-branching-strategy`
- `git-remote-collaboration` ↔ `git-troubleshooting`
- `git-branching-strategy` ↔ `git-tips-advanced`
- `git-troubleshooting` ↔ `git-tips-advanced`
- `sqld-window-functions` ↔ `sqld-top-n-hierarchical-pivot`
- `sql-basics` ↔ `sqld-data-modeling`
- `sql-basics` ↔ `db-index`
- `sqld-data-modeling` ↔ `sqld-entity-attribute-relationship`
- `sqld-entity-attribute-relationship` ↔ `db-modeling-normalization`
- `sqld-single-row-functions` ↔ `sqld-group-by-having`
- `sqld-group-by-having` ↔ `sqld-joins`
- `db-replication-sharding` ↔ `db-architecture-by-scale`
- `db-replication-sharding` ↔ `caching-strategies`
- `db-architecture-by-scale` ↔ `microservices`
- `db-index` ↔ `sql-query-tuning`
- `nginx-basics` ↔ `nginx-reverse-proxy`
- `nginx-basics` ↔ `nginx-https-performance`
- `nginx-basics` ↔ `what-happens-google-com`
- `nginx-reverse-proxy` ↔ `nginx-https-performance`
- `nginx-reverse-proxy` ↔ `proxy-reverse-proxy`
- `nginx-reverse-proxy` ↔ `http-methods`
- `nginx-reverse-proxy` ↔ `realtime-communication`
- `nginx-reverse-proxy` ↔ `http-status-codes`
- `nginx-https-performance` ↔ `https-tls`
- `redis-memory-eviction` ↔ `redis-persistence-ha`
- `redis-memory-eviction` ↔ `redis-basics`
- `redis-memory-eviction` ↔ `caching-strategies`
- `redis-persistence-ha` ↔ `redis-basics`
- `proxy-reverse-proxy` ↔ `http-status-codes`
- `proxy-reverse-proxy` ↔ `gateway`
- `proxy-reverse-proxy` ↔ `local-custom-domain`
- `redis-basics` ↔ `caching-strategies`
- `frontend-browser-cache` ↔ `client-data-cache`
- `frontend-browser-cache` ↔ `http-caching-cdn`
- `client-data-cache` ↔ `browser-fetch`
- `client-data-cache` ↔ `js-memory-leak`
- `client-data-cache` ↔ `react-rerender`
- `json-crud-http` ↔ `http-methods`
- `json-crud-http` ↔ `browser-fetch`
- `json-crud-http` ↔ `cors`
- `docker-network-volume` ↔ `docker-compose`
- `docker-network-volume` ↔ `dockerfile-image-layers`
- `docker-compose` ↔ `dockerfile-image-layers`
- `docker-container-basics` ↔ `dockerfile-image-layers`
- `base64` ↔ `token-login`
- `html-form-http` ↔ `http-message`
- `html-form-http` ↔ `browser-fetch`
- `html-form-http` ↔ `http-status-codes`
- `html-form-http` ↔ `cookie-session-login`
- `iptables-basics` ↔ `iptables-nat`
- `iptables-nat` ↔ `kubernetes-ingress`
- `http-message` ↔ `http-methods`
- `http-message` ↔ `http-status-codes`
- `http-message` ↔ `http-versions`
- `http-message` ↔ `http-caching-cdn`
- `http-methods` ↔ `http-status-codes`
- `http-methods` ↔ `resilience-patterns`
- `http-methods` ↔ `gateway`
- `https-tls` ↔ `http-versions`
- `https-tls` ↔ `kubernetes-ingress`
- `https-tls` ↔ `gateway`
- `https-tls` ↔ `what-happens-google-com`
- `rest-api-design` ↔ `http-status-codes`
- `http-status-codes` ↔ `http-versions`
- `http-status-codes` ↔ `what-happens-google-com`
- `http-versions` ↔ `code-splitting`
- `http-versions` ↔ `dns`
- `http-versions` ↔ `what-happens-google-com`
- `event-loop` ↔ `core-web-vitals`
- `ab-testing` ↔ `core-web-vitals`
- `core-web-vitals` ↔ `code-splitting`
- `http-caching-cdn` ↔ `cors`
- `http-caching-cdn` ↔ `what-happens-google-com`
- `react-rerender` ↔ `rendering-strategies`
- `resilience-patterns` ↔ `gateway`
- `dns` ↔ `hosts-file`
- `dns` ↔ `what-happens-google-com`
- `hosts-file` ↔ `local-custom-domain`
- `hosts-file` ↔ `what-happens-google-com`
- `kubernetes-ingress` ↔ `gateway`
- `cors` ↔ `local-custom-domain`
- `cors` ↔ `cookie-session-login`
- `pythagorean-theorem` ↔ `vector-db`
- `cookie-session-login` ↔ `token-login`
- `token-login` ↔ `oauth`

## 긴 글 (900줄 초과, 쪼갤 후보)

