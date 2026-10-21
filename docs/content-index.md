# 글 지도 (콘텐츠 색인)

> 자동 생성 문서다. 직접 고치지 말고 `pnpm content:index`로 다시 만든다.
> 새 글을 쓰기 전에 이 문서를 먼저 읽는다: 같은 주제의 글이 있는지, 어느 토픽에 둘지, 어떤 글로 링크할지, 어떤 키워드가 이미 쓰였는지 확인한다.

글 294편 · 토픽 68개 · 생성 기준: posts.ts + src/app/posts/*/page.mdx

## 토픽별 글

### Programming › Algorithms (`programming/algorithms`)

#### `big-o-notation` — Big O 표기법: 입력이 커질 때 얼마나 느려지나

- 요약: 100건에서는 빠르던 코드가 10만 건에서 시간 초과가 나는 이유를 Big O로 따라간다. 자주 만나는 복잡도와 실제 숫자, 최악과 분할 상환, 공간 복잡도, 해시맵과 이진 탐색으로 줄이는 법, 자바스크립트에 숨은 반복문까지 다룬다.
- 태그: Algorithm, JavaScript, Performance
- 키워드: Big O, 시간 복잡도, 공간 복잡도, 분할 상환
- 길이: 419줄
- 소제목: 몇 초가 아니라 늘어나는 모양을 센다 / 상수와 작은 항을 버리는 이유 / 자주 만나는 모양들 / n이 백만이 되면 / 운이 좋을 때와 나쁠 때 / 가끔 비싼 연산은 나눠서 센다 / 메모리도 같은 방식으로 센다 / 이중 반복문을 해시맵 하나로 / 정렬해 두면 log n으로 찾는다 / 자바스크립트에 숨은 반복문 / 운영에서 n²은 이런 모양으로 드러난다 / 다시 주문 걸러내기로 / 면접에서 나올 만한 질문
- 직접 링크 →: sql-query-rewrite
- 키워드 백링크 →: event-loop

### Programming › Algorithms › For System Design (`programming/algorithms/system-design`)

#### `bloom-filter` — 블룸 필터: 없다는 확실하고 있다는 가끔 틀린다

- 요약: 1억 개 URL의 방문 여부를 120MB로 묻는 크롤러에서 출발해 비트 배열과 해시, 거짓 양성 확률 공식과 실측, 크기와 해시 개수 고르기, 정원을 넘길 때 무너지는 모습, RedisBloom, 지울 수 없는 이유와 카운팅·쿠쿠 필터, LSM과 CDN, PostgreSQL bloom 인덱스를 다룬다.
- 태그: Algorithm, Data Structure, System Design, Redis, Probabilistic
- 키워드: 블룸 필터, Bloom filter, 거짓 양성, 쿠쿠 필터
- 길이: 517줄
- 소제목: 비트 배열에 도장 세 개 찍기 / 거짓 양성 확률을 계산하고 재 보기 / 크기와 해시 개수를 고르는 법 / 계획보다 많이 넣으면 무너진다 / Redis에서 쓰기 (RedisBloom) / 지울 수 없는 이유와 대안 / 디스크를 읽기 전에 묻는다 / 한 번 보고 마는 것들을 거른다 / DB 안에도 있다: PostgreSQL bloom 인덱스 / 블룸 필터가 사고를 내는 방식 / 조금 틀려도 되는 질문에만 쓴다 / 면접에서 나올 만한 질문
- 직접 링크 →: caching-strategies, db-type-wide-column, hyperloglog, count-min-sketch, lossy-counting
- 키워드 백링크 →: db-type-embedded, cdn-edge-anycast, redis-basics, dns
- 이 글로 오는 글 ←: ab-testing, caching-strategies, count-min-sketch, db-transaction-isolation, db-type-wide-column, hyperloglog, lossy-counting, merkle-tree

#### `count-min-sketch` — Count-Min Sketch: 더 세는 쪽으로만 틀리는 고정 크기 표

- 요약: IP별 요청 횟수를 서버 스무 대에서 고정 메모리로 세는 데서 출발해 행마다 다른 해시로 더하는 구조, ε·δ로 너비와 깊이 정하기, 보수적 갱신, 행 독립성, Redis CMS 명령, 힙을 붙인 상위 k개, 캐시 승인 정책과 차단 규칙의 오탐을 다룬다.
- 태그: Algorithm, Data Structure, System Design, Redis, Probabilistic
- 키워드: Count-Min Sketch, 보수적 갱신, CMS
- 길이: 411줄
- 소제목: 행마다 다른 해시로 한 칸씩 더한다 / 너비는 ε, 깊이는 δ로 정한다 / 보수적 갱신은 필요한 만큼만 올린다 / 행끼리 독립이어야 한다 / Redis에서 쓰기 / 상위 k개는 힙을 붙여서 / Lossy Counting과 같은 데이터로 / 캐시가 CMS를 쓰는 방식 / 차단 규칙이 정상 사용자를 막을 때 / 표준 갱신과 보수적 갱신을 코드로 비교하기 / 더 세는 쪽으로만 틀리는 고정 크기 표 / 면접에서 나올 만한 질문
- 직접 링크 →: lossy-counting, rate-limiting-algorithms, redis-memory-eviction, bloom-filter, hyperloglog
- 키워드 백링크 →: redis-basics
- 이 글로 오는 글 ←: bloom-filter, hydration, hyperloglog, lossy-counting, rendering-ssg-isr

#### `crdt` — CRDT: 어떤 순서로 합쳐도 같아지는 자료형

- 요약: 합치기가 교환·결합·멱등이면 순서와 중복을 무시할 수 있다. G-Counter, PN-Counter, LWW-Register, OR-Set을 직접 만들어 확인하고, Yjs로 오프라인 두 기기를 합쳐 보며 시퀀스 CRDT의 id와 묘비 비용, OT와의 선택 기준을 다룬다.
- 태그: System Design, Distributed Systems, Algorithm, Data Structure, Concurrency
- 키워드: CRDT, G-Counter, OR-Set, Yjs
- 길이: 416줄
- 소제목: 마지막 저장이 이기면 한쪽이 사라진다 / 합치는 순서와 횟수를 무시해도 되는 조건 / 카운터: 기기마다 칸을 따로 쓴다 / 지웠다가 다시 넣는 원소: OR-Set / 글자마다 이름을 붙이는 시퀀스 CRDT / Yjs로 오프라인 두 기기를 합쳐 본다 / 지운 글자는 메모리에서 사라지지 않는다 / 카운터 합치기 직접 짜 보기 / 동기화가 이상할 때 보는 곳 / OT와 CRDT 사이에서 고르기 / 면접에서 나올 만한 질문
- 직접 링크 →: operational-transform, eventual-consistency, clock-skew, db-type-wide-column, network-partitions
- 키워드 백링크 →: message-delivery-semantics, js-memory-leak, db-consistency-cap, http-methods
- 이 글로 오는 글 ←: clock-skew, db-consistency-cap, eventual-consistency, operational-transform, pattern-command, realtime-communication

#### `geohash` — 지오해시: 2차원 위치를 한 줄 문자열로 접기

- 요약: 위도와 경도를 번갈아 반으로 접어 비트를 끼워 넣고 base32 글자로 바꾸는 과정, 글자 수별 칸 크기, 접두사가 가까움을 보장하지 않는 경계 문제와 이웃 8칸 검색을 실제 좌표로 따라간다. Redis GEOSEARCH의 속과 느려지는 조건, PostgreSQL B-tree 접두사 검색, S2·H3와의 차이까지 다룬다.
- 태그: Algorithm, System Design, Geospatial, Redis, PostgreSQL
- 키워드: 지오해시, Geohash, GEOSEARCH, Z-순서 곡선
- 길이: 696줄
- 소제목: 지도를 반씩 접어 가며 비트를 적는다 / 다섯 비트를 글자 하나로 / 앞자리가 같으면 가깝다, 대체로 / 10m 옆인데 접두사가 다르다 / 이웃 여덟 칸까지 같이 찾는다 / Redis GEOSEARCH 속에서 일어나는 일 / 후보가 많으면 Redis 전체가 멈춘다 / PostgreSQL에서 접두사로 찾기 / 칸 모양이 다른 S2와 H3 / 현장에서 지오해시가 말썽을 부리는 순간 / 면접에서 나올 만한 질문
- 직접 링크 →: quadtree, ray-casting
- 키워드 백링크 →: redis-cluster, db-index, db-type-wide-column, db-type-key-value, mongodb-document-model, db-index-design, redis-basics
- 이 글로 오는 글 ←: quadtree, ray-casting

#### `hyperloglog` — HyperLogLog: 12KB로 서로 다른 개수 세기

- 요약: 하루 방문자 100만 명을 Set 대신 키 하나로 세는 데서 출발해 연속 0의 길이, 레지스터 최댓값, 조화 평균, 1.04/√m 오차를 실측으로 확인한다. Redis PFADD·PFCOUNT·PFMERGE, 작은 값과 큰 값 보정, 교집합의 한계, 다른 방법과 고르는 기준까지 다룬다.
- 태그: Algorithm, Data Structure, System Design, Redis, Probabilistic
- 키워드: HyperLogLog, PFCOUNT, 카디널리티 추정
- 길이: 402줄
- 소제목: 동전을 몇 번 연속 뒷면이 나왔나 / 레지스터에 최댓값만 남긴다 / 평균은 조화 평균으로 낸다 / 오차가 정말 √m에 반비례하나 / 아주 적을 때와 아주 많을 때 / Redis에서 세기 / Set과 나란히 놓고 재 보기 / 교집합은 잘 못 센다 / 다른 방법과 고르는 기준 / 레지스터와 조화 평균을 코드로 / 숫자가 이상할 때 의심할 것 / 12KB로 세는 대신 포기하는 것 / 면접에서 나올 만한 질문
- 직접 링크 →: bloom-filter, lossy-counting, count-min-sketch
- 키워드 백링크 →: redis-basics, cookie-session-login
- 이 글로 오는 글 ←: bloom-filter, count-min-sketch, lossy-counting

#### `lossy-counting` — Lossy Counting: 덜 세는 대신 빠짐없이 인기 항목 찾기

- 요약: 실시간 인기 검색어를 ZINCRBY로 세다 메모리가 불어나는 상황에서 출발해 버킷마다 대청소하는 Lossy Counting, εN 오차 보장의 이유, Zipf 데이터로 잰 정확도, 시간 감쇠와 배치 보정, Space-Saving·Misra-Gries와의 비교를 다룬다.
- 태그: Algorithm, Data Structure, System Design, Probabilistic
- 키워드: Lossy Counting, 인기 검색어, heavy hitter, Space-Saving
- 길이: 375줄
- 소제목: 버킷마다 한 번 대청소를 한다 / 왜 εN보다 더 틀리지 않나 / 같은 데이터로 재 보기 / 인기 검색어는 "지금" 많은 것이다 / 정확한 답은 나중에 배치로 낸다 / 다른 방법들과 비교 / 같은 칸 수로 겨뤄 보기 / 현장에서 틀어지는 지점 / 조금 덜 세는 대신 빠짐없이 / 면접에서 나올 만한 질문
- 직접 링크 →: count-min-sketch, hyperloglog
- 키워드 백링크 →: bloom-filter, postgres-architecture, redis-basics, db-modeling-normalization, dns
- 이 글로 오는 글 ←: bloom-filter, count-min-sketch, hyperloglog, rendering-strategies

#### `merkle-tree` — 머클 트리: 해시 하나로 아래 전체를 대신한다

- 요약: 키 1억 개짜리 복제본 두 대에서 놓친 쓰기를 찾는 문제에서 출발해 해시 트리를 쌓고, 루트부터 다른 가지만 내려가 log n번 만에 차이를 찾는 법, 형제 해시 몇 개로 하는 포함 증명을 실제 해시값으로 따라간다. Git tree 객체, Cassandra repair, 인증서 투명성 로그, 비트코인 블록과 직접 만들 때 생기는 구멍을 다룬다.
- 태그: Algorithm, Data Structure, System Design, Distributed Systems, Git
- 키워드: 머클 트리, Merkle tree, 포함 증명, 해시 트리
- 길이: 382줄
- 소제목: 해시를 쌓아 올린 나무 / 루트가 다르면 다른 가지만 따라 내려간다 / 블록 하나가 들어 있다는 짧은 증명 / Git의 tree 객체도 머클 트리다 / 복제본 수리: Cassandra repair / 인증서 투명성과 블록체인 / 직접 만들 때 생기는 구멍 / 대안과 고르는 기준 / 해시 하나가 아래 전체를 대신한다 / 면접에서 나올 만한 질문
- 직접 링크 →: eventual-consistency, git-internals-basics, rsync-algorithm, bloom-filter
- 키워드 백링크 →: db-type-wide-column, db-type-key-value, build-caching
- 이 글로 오는 글 ←: eventual-consistency, git-internals-basics, rsync-algorithm

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
- 키워드 백링크 →: db-type-key-value
- 이 글로 오는 글 ←: db-index-design, geohash, ray-casting

#### `raft-consensus` — Raft 합의: 로그 복제, 커밋, 안전한 리더 교체

- 요약: 과반을 잃은 etcd 리더가 쓰기를 거절하는 장면에서 출발해 AppendEntries와 커밋 번호, 어긋난 로그 고치기와 스냅숏, 로그가 최신인 후보만 이기는 투표 규칙, 고립된 멤버가 임기를 부풀리는 현상과 Pre-Vote, learner로 멤버 바꾸기를 etcd 3.4 실제 로그로 따라간다.
- 태그: System Design, Distributed Systems, Algorithm, Kubernetes, Resilience
- 키워드: Raft 합의, AppendEntries, 로그 복제, Pre-Vote
- 길이: 415줄
- 소제목: 같은 순서의 기록을 여러 대에 남기는 일 / 쓰기 하나가 커밋되기까지 / 과반이면 왜 충분한가 / 어긋난 팔로워의 로그를 고친다 / 너무 뒤처지면 로그 대신 스냅숏을 보낸다 / 아무나 리더가 될 수는 없다 / 고립된 멤버가 임기를 부풀린다 / 멤버를 바꾸는 일 / 리더가 자꾸 바뀌거나 쓰기가 느릴 때 / 과반이 기억하는 것만 기록이 된다 / 면접에서 나올 만한 질문
- 직접 링크 →: leader-election, db-type-newsql, db-consistency-cap
- 키워드 백링크 →: db-type-key-value, kafka-basics
- 이 글로 오는 글 ←: db-type-key-value, db-type-newsql, distributed-transactions-2pc, leader-election, network-partitions, rabbitmq-basics

#### `ray-casting` — 레이 캐스팅: 광선 하나로 안팎과 벽을 찾는다

- 요약: 배달 구역 다각형 안에 주소가 있는지 광선이 변을 넘는 횟수로 판정하고, 꼭짓점·가로 변·경계 위의 점, 짝홀 규칙과 감는 수의 차이를 실제로 돌려 본다. GPS 흔들림으로 생기는 지오펜스 알림 폭주, 구역 1만 개에서 빨리 찾기, 빠른 총알 충돌 판정과 울펜슈타인식 레이캐스터까지 다룬다.
- 태그: Algorithm, Geometry, Geospatial, PostgreSQL
- 키워드: 레이 캐스팅, PNPOLY, 지오펜싱, 감는 수, 레이캐스터
- 길이: 503줄
- 소제목: 광선을 쏘아 변을 넘은 횟수를 센다 / 코드는 짧고, 조건 하나가 전부다 / 꼭짓점을 지나면 한 번인가 두 번인가 / 변이 엇갈리는 다각형: 짝홀과 감는 수 / 지도 위의 다각형에서 조심할 것 / GPS가 흔들리면 들어왔다 나갔다를 반복한다 / 구역이 만 개면 다 검사할 수 없다 / 게임에서는 광선이 벽을 찾는다 / 격자 지도에서 3D 화면 만들기 / 면접에서 나올 만한 질문
- 직접 링크 →: geohash, quadtree
- 키워드 백링크 →: pythagorean-theorem, db-modeling-normalization
- 이 글로 오는 글 ←: geohash, quadtree

#### `rsync-algorithm` — rsync 알고리즘: 바뀐 블록만 보내는 굴리는 체크섬

- 요약: 46MB 로그 한 줄을 고쳐 보내며 받는 쪽이 블록 지문을 보내고 보내는 쪽이 창을 한 바이트씩 밀어 찾는 과정, 굴리는 체크섬과 강한 해시, Matched data와 Literal data 읽기, 블록 크기와 압축 파일, quick check가 파일을 놓치는 경우를 실제 출력으로 본다.
- 태그: Algorithm, Linux, Performance, Network, DevOps
- 키워드: rsync 알고리즘, 굴리는 체크섬, rolling checksum, 델타 전송
- 길이: 452줄
- 소제목: 두 쪽이 서로의 파일을 모른다 / 받는 쪽이 먼저 블록 지문을 보낸다 / 한 칸씩 미는 체크섬 / 약한 체크섬과 강한 해시를 같이 쓰는 이유 / 46MB 파일 한 줄을 고쳐 보내 보기 / 블록 크기가 정하는 것 / 델타 전송이 통하지 않는 파일 / 아예 보내지 않고 건너뛰는 판단 / 백업이 느리거나 이상할 때 보는 곳 / 다른 도구들이 고른 방법 / 굴려서 찾고 해시로 확인한다 / 면접에서 나올 만한 질문
- 직접 링크 →: merkle-tree, traffic-shaping-qos
- 이 글로 오는 글 ←: merkle-tree

### Programming › Backend (`programming/backend`)

#### `mvc-pattern` — MVC 패턴: 웹 애플리케이션을 나누는 방법

- 요약: MVC는 화면과 입력 처리에서 업무 규칙을 떼어 내자는 약속이다. Smalltalk에서 웹 MVC, MVP·MVVM, Flux의 단방향 흐름까지 그 약속이 어떻게 바뀌었는지 따라간다.
- 태그: coupang, Architecture, MVC, Backend, Frontend · 회사: coupang
- 키워드: MVC 패턴, MVVM, 프론트 컨트롤러, 빈약한 도메인 모델, 단방향 데이터 흐름
- 길이: 384줄
- 소제목: 요청 하나가 지나가는 길 / 원래 MVC는 웹을 위한 게 아니었다 / HTTP 위로 옮기면서 생긴 변화 / 컨트롤러가 뚱뚱해지는 이유 / 업무 규칙은 서비스와 모델에 둔다 / MVP와 MVVM은 무엇을 바꿨나 / 브라우저로 옮겨 온 MVC와 양방향 바인딩의 한계 / 서비스가 커지면 계층보다 기능으로 나눈다 / 경계가 무너진 코드는 장애 문의로 돌아온다 / 다시 쿠폰 입력칸으로 / 면접에서 나올 만한 질문
- 직접 링크 →: db-locking-deadlock
- 키워드 백링크 →: client-data-cache, pattern-observer, pattern-proxy, loading-patterns, http-status-codes, gateway
- 이 글로 오는 글 ←: design-patterns-overview, pattern-adapter

#### `rest-api-design` — REST API를 설계할 때 정할 것들

- 요약: 자원 이름, 메서드와 상태 코드, 필터와 페이지, 에러 형식, 버전과 하위 호환처럼 REST API를 공개하기 전에 정해야 할 것들을 짚는다. 무한 스크롤에서 offset이 글을 중복시키는 이유와 커서 페이지네이션도 직접 따라가 본다.
- 태그: HTTP, REST, API, Backend
- 키워드: REST API, 커서 페이지네이션, API 버전 관리, HATEOAS
- 길이: 580줄
- 소제목: 주소는 자원의 이름이다 / CRUD로 안 떨어지는 동작 / 메서드와 상태 코드를 제대로 쓴다 / 목록을 거르고 줄 세우기 / 같은 글이 두 번 나온 이유 / 다음 페이지 주소를 알려 주는 방법 / 에러 응답도 모양을 정한다 / 필요한 만큼만 받기 / 버전을 올리지 않고 바꾸는 법 / 그래도 버전을 나눠야 할 때 / POST를 두 번 받아도 괜찮게 / 너무 많이 부르는 클라이언트 / 이름과 값의 모양을 통일한다 / 링크를 따라가는 API / REST가 맞지 않는 곳 / 운영 로그에서 설계 실수가 드러날 때 / 다시 무한 스크롤로 / 면접에서 나올 만한 질문
- 직접 링크 →: http-methods, http-status-codes, http-caching-cdn, resilience-patterns, gateway, rate-limiting-algorithms, rate-limiting-in-practice, microservices, nginx-reverse-proxy, network-troubleshooting-by-layer
- 키워드 백링크 →: grpc, n-plus-one-queries, api-versioning, base64, optimistic-locking, loading-patterns, db-locking-deadlock, db-index-design, http-message, http-versions, redis-basics, sql-query-rewrite
- 이 글로 오는 글 ←: api-pagination-sorting, api-versioning, browser-fetch, client-data-cache, docker-container-basics, grpc, html-form-http, http-status-codes, idempotency-key, json-crud-http, loading-patterns, schema-versioning, sql-query-rewrite

### Programming › Backend › API Design (`programming/backend/api`)

#### `api-pagination-sorting` — 페이지와 정렬: 동점, 섞인 방향, NULL, 커서

- 요약: 데이터가 그대로인데도 페이지가 겹치는 이유는 정렬에 있다. 100만 행 테이블에서 동점 처리 열, 방향이 섞인 키셋 조건, NULL 정렬, 이전 페이지, 서명한 커서를 실행 계획과 함께 확인한다.
- 태그: API, PostgreSQL, SQL, Performance, Index
- 키워드: 동점 처리 열, NULLS LAST, 커서 서명, 이전 페이지 커서
- 길이: 616줄
- 소제목: 데이터가 그대로인데 페이지가 겹친다 / 정렬 키 끝에는 유일한 열을 붙인다 / 인덱스 순서와 테이블 순서가 다르면 OFFSET은 더 비싸다 / 정렬 방향이 섞이면 행 비교를 못 쓴다 / NULL이 섞인 열로 정렬하면 행이 사라진다 / 이전 페이지로 돌아가기 / 커서에 담을 것과 지킬 것 / 직접 짜 보는 커서 비교 / 전체 개수와 페이지 번호가 꼭 필요할 때 / 목록이 이상하다는 문의가 오면 / 페이지는 정렬이 정해져야 잘린다 / 면접에서 나올 만한 질문
- 직접 링크 →: rest-api-design, sql-query-rewrite
- 키워드 백링크 →: elasticsearch-inverted-index, base64, db-index-design
- 이 글로 오는 글 ←: batch-processing, sql-query-rewrite

#### `api-versioning` — API 버전 관리: 고칠 수 없는 클라이언트와의 약속 바꾸기

- 요약: 추가했을 뿐인데 깨지는 변경을 재현하고, 스키마 비교와 소비자 계약 테스트로 배포 전에 잡고, 날짜 버전 변환 계층과 캐시 Vary, Deprecation·Sunset과 brownout으로 옛 버전을 끝내는 과정을 직접 돌려 본다. 이벤트 스키마와 GraphQL의 진화도 다룬다.
- 태그: Backend, API, REST, HTTP, Architecture
- 키워드: 하위 호환, Sunset 헤더, 소비자 주도 계약, 깨는 변경
- 길이: 481줄
- 소제목: 추가했을 뿐인데 깨지는 이유 / 깨는 변경을 배포 전에 기계로 잡는다 / 소비자가 쓰는 것만 지킨다 / 한 서버가 여러 버전을 내는 방법 / 헤더로 버전을 고르면 캐시가 섞인다 / 옛 버전을 끝내는 순서 / 이벤트와 메시지에도 버전이 있다 / GraphQL은 버전 없이 진화한다 / 버전 때문에 장애가 났을 때 / 버전은 약속을 관리하는 도구다 / 면접에서 나올 만한 질문
- 직접 링크 →: rest-api-design, grpc, zero-downtime-migrations, http-caching-cdn, schema-versioning
- 키워드 백링크 →: kafka-basics, http-status-codes, webhooks
- 이 글로 오는 글 ←: db-type-embedded, event-driven-architecture, git-branching-strategy, grpc, helm-dependencies-oci-gitops, json-crud-http, rest-api-design, rolling-deployment, schema-versioning

#### `batch-processing` — 배치 처리: 묶음, 체크포인트, 다시 돌려도 같은 결과

- 요약: 대량 데이터를 묶음으로 나눠 처리하고, 결과와 같은 트랜잭션에 진행 위치를 적어 죽은 자리에서 이어 가고, 쓰기를 멱등하게 만들어 두 번 돌아도 숫자가 맞게 하는 법을 실제로 죽여 보며 확인한다. 묶음 크기별 속도, SKIP LOCKED 작업자, 중복 실행 방지도 다룬다.
- 태그: Database, PostgreSQL, Performance, Backend, System Design
- 키워드: 배치 처리, 청크 단위 처리, 배치 체크포인트, poison record
- 길이: 418줄
- 소제목: 요청을 기다리지 않고 한꺼번에 처리하는 일 / 한 번에 하지 않고 묶음으로 나눈다 / 묶음 크기는 얼마가 좋나 / 죽은 자리에서 다시 시작하기 / 두 번 돌아도 결과가 같게 쓴다 / 한 줄 때문에 전체가 멈추지 않게 / 여러 작업자로 나눠 돌리기 / 운영 DB 옆에서 조용히 돌리기 / 새벽 배치 알림을 받으면 여기부터 본다 / 나누고, 적고, 두 번 돌아도 괜찮게 / 면접에서 나올 만한 질문
- 직접 링크 →: sql-batch-timeout-pool, event-driven-architecture, api-pagination-sorting, idempotency-key, db-locking-deadlock
- 키워드 백링크 →: cron-jobs, postgres-advanced-sql, db-architecture-by-scale, postgres-mvcc-vacuum, postgres-architecture, redis-basics, resilience-patterns, http-methods
- 이 글로 오는 글 ←: cron-jobs, k8s-pod-lifecycle, message-delivery-semantics, zero-downtime-migrations

#### `cron-jobs` — 크론 잡: 정해진 시각에 한 번만 돌게 만들기

- 요약: cron 다섯 칸의 함정과 시간대·서머타임, 겹치는 실행을 막는 flock, 레플리카가 여러 대일 때 회차당 한 번만 돌리는 법, 쿠버네티스 CronJob 설정, 안 돈 작업을 알아채는 dead man's switch까지 직접 돌려 보며 정리한다.
- 태그: Backend, Linux, Kubernetes, DevOps, Distributed Systems, Troubleshooting
- 키워드: 크론 표현식, CronJob, concurrencyPolicy, dead man's switch
- 길이: 650줄
- 소제목: 다섯 칸이 정하는 시각 / 나눠 떨어지지 않는 간격 / 서버 시계는 어느 나라 시간인가 / 서머타임에는 두 번 돌거나 건너뛴다 / 앞 실행이 안 끝났는데 다음 실행이 온다 / 레플리카가 셋이면 메일도 세 통 / 쿠버네티스 CronJob의 설정들 / 두 번 돌아도 괜찮은 작업 / 안 돈 것을 알아채는 법 / 새벽 배치가 안 돌았다는 연락을 받으면 / 시각보다 회차를 믿는다 / 면접에서 나올 만한 질문
- 직접 링크 →: batch-processing, distributed-lock, leader-election, linux-systemd-systemctl, idempotency-key
- 키워드 백링크 →: pessimistic-locking, postgres-advanced-sql, message-delivery-semantics, autoscaling, linux-files-permissions, postgres-architecture, redis-basics, webhooks
- 이 글로 오는 글 ←: batch-processing, k8s-hpa, k8s-secret, pattern-singleton, race-conditions

#### `grpc` — gRPC: Protocol Buffers와 HTTP/2 위의 RPC

- 요약: protobuf가 메시지를 바이트로 만드는 방식, HTTP/2 스트림과 trailers로 오는 상태 코드, 스트리밍과 기한 전파, 연결을 오래 쓰는 탓에 L4 로드 밸런서에서 한 Pod로 몰리는 문제와 해결책을 실제 서버로 확인한다.
- 태그: Backend, API, HTTP, Network, Performance, Kubernetes
- 키워드: gRPC, Protocol Buffers, protobuf
- 길이: 428줄
- 소제목: .proto 한 장이 계약이 된다 / 26바이트로 줄어든 주문 / 호출 하나는 스트림 하나 / 묻고 답하는 것만 있는 게 아니다 / 기한을 넘기면 끊고, 서버도 그만둔다 / 상태 코드는 HTTP 200 안에 있다 / 연결이 오래 사니 로드 밸런서가 할 일이 없다 / 브라우저에서는 바로 못 부른다 / REST, GraphQL과 고르는 기준 / 현장에서 gRPC 호출이 실패할 때 / 계약, 바이트, 연결 / 면접에서 나올 만한 질문
- 직접 링크 →: rest-api-design, http-versions, api-versioning, timeouts, retries, service-mesh, load-balancing-algorithms
- 키워드 백링크 →: k8s-service-types, iptables-nat, osi-in-practice, iptables-basics, kubernetes-ingress, http-status-codes, k8s-hpa, dns, gateway
- 이 글로 오는 글 ←: api-versioning, backpressure, blue-green-deployment, docker-container-basics, gateway, iptables-nat, k8s-secret, k8s-service-types, load-balancer-basics, load-balancing-algorithms, microservices, observability-basics, osi-in-practice, pattern-bridge, pattern-proxy, resilience-patterns, rest-api-design, retries, schema-versioning, service-discovery, service-mesh, tcp-reliability-congestion, timeouts, upper-layers-session-presentation-app

#### `idempotency-key` — 멱등성 키 구현: 동시 중복과 죽은 요청까지

- 요약: 멱등성 키를 확인부터 하면 동시에 온 중복이 둘 다 통과한다. 유니크 제약으로 키를 선점하고, 작업과 응답 기록을 한 트랜잭션으로 묶고, 처리 중 죽은 요청을 넘겨받는 저장소를 PostgreSQL로 직접 만들어 본다.
- 태그: API, HTTP, PostgreSQL, Distributed Systems, Backend
- 키워드: Idempotent-Replayed, 키 선점, 멱등성 키 저장소
- 길이: 481줄
- 소제목: 확인하고 넣으면 둘 다 통과한다 / 키 한 줄에 담는 것 / 선점하고, 작업하고, 응답을 적는다 / 키 하나가 거치는 상태 / 처리 도중에 서버가 죽으면 / 트랜잭션 하나로 묶으면 기다리게 된다 / 바깥 결제사를 부르는 단계가 끼면 / 어떤 응답을 저장할지 / 키는 누가, 언제 만드나 / 키 말고도 중복을 막는 방법 / 운영에서 이런 증상을 보면 / 키 저장소가 정확해야 재시도가 안전하다 / 면접에서 나올 만한 질문
- 직접 링크 →: resilience-patterns, http-methods, rest-api-design, distributed-lock, sql-batch-timeout-pool, message-delivery-semantics
- 키워드 백링크 →: postgres-advanced-sql, service-mesh, redis-basics, http-status-codes, db-modeling-normalization
- 이 글로 오는 글 ←: batch-processing, circuit-breaker, cron-jobs, dead-letter-queue, distributed-lock, distributed-transactions-2pc, message-delivery-semantics, message-queue-basics, pattern-builder, pattern-command, pattern-decorator, pattern-facade, race-conditions, rate-limiting-in-practice, resilience-patterns, retries, rolling-deployment, saga-pattern, service-mesh, webhooks

#### `rate-limiting-in-practice` — 요청 수 제한을 API에 붙이기: 키, 429, 장애 대응

- 요약: 어느 층에서 무엇을 키로 셀지, 429와 Retry-After·RateLimit 헤더로 무엇을 알려 줄지, Redis가 멈추면 막을지 열지를 실제 서버로 확인한다. 처음 배포할 때 정상 사용자를 막지 않는 순서도 정리한다.
- 태그: API, HTTP, Redis, Backend, Troubleshooting
- 키워드: 429 Too Many Requests, fail open, RateLimit-Policy
- 길이: 430줄
- 소제목: 한 군데에서 다 막으려고 하지 않는다 / 무엇을 키로 셀지가 절반이다 / 거절할 때 돌려주는 것 / 클라이언트는 기다릴 줄 알아야 한다 / 인스턴스마다 세면 한도가 곱해진다 / Redis가 멈추면 다 막을까, 다 열까 / 요청마다 무게가 다르다 / 처음 배포할 때는 세기만 한다 / 이런 증상이면 여기부터 본다 / 알고리즘보다 오래 손대는 것 / 면접에서 나올 만한 질문
- 직접 링크 →: rate-limiting-algorithms, nginx-https-performance, gateway, resilience-patterns, idempotency-key
- 키워드 백링크 →: proxy-reverse-proxy, http-status-codes, osi-in-practice, redis-basics, ipv6-basics
- 이 글로 오는 글 ←: autoscaling, backpressure, circuit-breaker, exponential-backoff-jitter, gateway, k8s-pod-troubleshooting, linux-grep-awk-sed, pattern-singleton, rate-limiting-algorithms, rest-api-design, waf

#### `webhooks` — 웹훅: 남이 내 서버를 부를 때 지켜야 할 것

- 요약: HMAC 서명과 타임스탬프로 위조와 재전송을 막고, 저장 후 바로 응답해 중복 처리를 피하고, 순서가 뒤바뀐 이벤트를 다루는 법을 받는 쪽과 보내는 쪽(SSRF) 모두에서 실제 서버로 확인한다.
- 태그: Backend, API, HTTP, Security, Resilience
- 키워드: 웹훅, 웹훅 서명, 재전송 공격
- 길이: 391줄
- 소제목: 묻지 않아도 알려 주는 HTTP 요청 / 누가 보냈는지 서명으로 확인한다 / 받는 쪽 서버를 직접 띄워 공격해 본다 / 처리를 끝내고 응답하면 세 번 처리된다 / 순서는 보장되지 않는다 / 보내는 쪽이 되면 SSRF를 막는다 / 웹훅이 이상할 때 보는 순서 / 받는 쪽은 의심하고, 보내는 쪽은 조심한다 / 면접에서 나올 만한 질문
- 직접 링크 →: retries, idempotency-key, realtime-communication, clock-skew, timeouts, message-queue-basics, dead-letter-queue, exponential-backoff-jitter
- 키워드 백링크 →: postgres-advanced-sql, resilience-patterns, layer-ip-addressing, what-happens-google-com, ipv6-basics, vpc-basics, http-methods, dns
- 이 글로 오는 글 ←: api-versioning, cron-jobs, eks-cluster-basics, http-versions, https-tls, k8s-deploy-pipeline-eks, k8s-namespace, kubernetes-ingress, postgres-jsonb-search, vpn-ipsec-wireguard, what-happens-google-com

### Programming › Backend › Auth (`programming/backend/auth`)

#### `cookie-session-login` — 쿠키와 세션으로 로그인 상태 유지하기

- 요약: HTTP는 방금 누가 왔는지 기억하지 못한다. 서버가 세션을 보관하고 쿠키로 번호표를 돌려주는 흐름과 쿠키 옵션, CSRF까지 정리했다.
- 태그: Authentication, Cookie, Session, Security
- 키워드: 쿠키 세션, 세션 쿠키, 세션 ID, Set-Cookie, CSRF
- 길이: 333줄
- 소제목: 외투 보관소 번호표 / 로그인부터 로그아웃까지 / 쿠키에 붙는 옵션들 / 자동으로 붙는다는 것의 함정, CSRF / 세션을 노리는 공격들 / 서버가 여러 대가 되면 / 배포하고 나니 로그인이 자꾸 풀릴 때 / 정리 / 면접에서 나올 만한 질문
- 직접 링크 →: proxy-reverse-proxy, cors, token-login
- 키워드 백링크 →: html-form-http, load-balancer-basics, kubernetes-ingress, redis-basics, what-happens-google-com
- 이 글로 오는 글 ←: blue-green-deployment, browser-fetch, cors, eventual-consistency, html-form-http, http-caching-cdn, http-message, http-methods, hyperloglog, load-balancing-algorithms, local-custom-domain, nginx-https-performance, oauth, rollback-strategy, scaling-horizontal-vertical, token-login, upper-layers-session-presentation-app, websocket-deep-dive

#### `oauth` — OAuth 2.0, 비밀번호 대신 열쇠를 빌려주는 규칙

- 요약: '구글로 계속하기' 버튼 뒤에서 오가는 요청을 한 단계씩 따라가 봤다. 인가 코드 흐름과 PKCE까지.
- 태그: OAuth, Security, HTTP, Authorization
- 키워드: OAuth, PKCE, 인가 코드
- 길이: 359줄
- 소제목: 비밀번호를 넘기면 안 되는 이유 / 등장하는 네 주체 / 버튼을 누르면 일어나는 일 / 인가 요청 주소 뜯어보기 / 토큰은 두 개가 온다 / 비밀을 숨길 수 없는 앱: PKCE / 구현하면서 놓치기 쉬운 것 / 인가 코드 말고 다른 방식들 / 로그인까지 하려면: OpenID Connect / 콜백에서 막히는 세 가지 / 정리 / 면접에서 나올 만한 질문
- 키워드 백링크 →: token-login, cookie-session-login
- 이 글로 오는 글 ←: islands-resumability, local-custom-domain, react-server-components, token-login, zero-trust-architecture

#### `token-login` — 토큰으로 로그인하기: JWT와 리프레시 토큰

- 요약: 서버가 아무것도 기억하지 않고 서명된 토큰만 확인하는 방식. JWT를 뜯어보고, 변조가 막히는 이유와 리프레시 토큰, 쿠키 세션과의 차이를 따라가 봤다.
- 태그: Authentication, JWT, Token, Security
- 키워드: JWT, 리프레시 토큰, 액세스 토큰
- 길이: 360줄
- 소제목: 명단 대신 손목 팔찌 / 로그인하고 API를 부르기까지 / JWT 뜯어보기 / 내용을 바꾸면 어떻게 될까 / 비밀 키 하나냐, 열쇠 한 쌍이냐 / JWT에서 자주 나오는 구멍 / 한 번 준 토큰은 되돌리기 어렵다 / 토큰은 어디에 둘까 / 쿠키 세션과 나란히 놓고 보면 / 401이 쏟아지면 토큰부터 뜯어 본다 / 정리 / 면접에서 나올 만한 질문
- 직접 링크 →: cookie-session-login, oauth
- 키워드 백링크 →: base64
- 이 글로 오는 글 ←: base64, clock-skew, cookie-session-login, gateway, git-remote-collaboration, github-actions-docker-ecr, http-message, http-status-codes, oauth, pattern-strategy, zero-trust-architecture

### Programming › Backend › Messaging (`programming/backend/messaging`)

#### `dead-letter-queue` — 데드 레터 큐: 독이 든 메시지, 재시도 상한, 되돌려 보내기

- 요약: 끝없이 돌아오는 실패 메시지를 재시도 상한과 실패 분류로 격리하고, DLQ에 무엇을 남길지, 알람을 언제 울릴지, 고친 뒤 중복 없이 되돌려 보내는 법을 PostgreSQL과 Redis Streams로 직접 확인한다.
- 태그: Messaging, Backend, PostgreSQL, Redis, Troubleshooting
- 키워드: 데드 레터 큐, DLQ, 독이 든 메시지, maxReceiveCount, redrive
- 길이: 509줄
- 소제목: 같은 실패가 끝없이 돌아온다 / 몇 번 시도하고 포기할지 / 바로 포기할 실패, 기다려 볼 실패 / Redis Streams로 만드는 DLQ / DLQ에 무엇을 같이 남기나 / 알람은 DLQ에 하나라도 있으면 / 고친 뒤 되돌려 보내기 / DLQ를 두고도 메시지를 잃는 경우 / 큐에서 빠진 메시지는 누군가 봐야 한다 / 면접에서 나올 만한 질문
- 직접 링크 →: message-queue-basics, pub-sub, retries, exponential-backoff-jitter, rabbitmq-basics, kafka-basics, structured-logging, idempotency-key, message-delivery-semantics
- 키워드 백링크 →: resilience-patterns, redis-basics, http-methods
- 이 글로 오는 글 ←: event-driven-architecture, message-delivery-semantics, message-queue-basics, pattern-command, pub-sub, rabbitmq-basics, rollback-strategy, saga-pattern, schema-versioning, webhooks

#### `kafka-basics` — Kafka 기초: 파티션, 오프셋, 소비자 그룹, 복제와 acks

- 요약: 컨슈머를 늘려도 랙이 줄지 않는 이유에서 시작해 파티션과 키별 순서, 오프셋 커밋, 리밸런싱, 랙 읽는 법, min.insync.replicas와 acks, 보관 기간과 컴팩션을 브로커 세 대의 실제 출력으로 따라간다.
- 태그: Messaging, Backend, Distributed Systems, Troubleshooting
- 키워드: Kafka, 컨슈머 랙, 리밸런싱, min.insync.replicas, 로그 컴팩션
- 길이: 519줄
- 소제목: 토픽은 파티션 여러 개로 된 로그다 / 키가 파티션을 정하고, 순서는 파티션 안에서만 지킨다 / 오프셋은 컨슈머가 남기는 책갈피다 / 소비자 그룹과 리밸런싱 / 랙은 남은 일의 양이다 / 리더 하나에 팔로워 둘, 그리고 acks / 얼마나 오래 둘까: 보관 기간과 컴팩션 / 랙 알람이 울렸을 때 보는 순서 / Kafka가 맞지 않는 곳 / 파티션 수가 병렬성의 상한이다 / 면접에서 나올 만한 질문
- 직접 링크 →: pub-sub, message-queue-basics, event-driven-architecture, message-delivery-semantics, consistent-hashing, rabbitmq-basics
- 키워드 백링크 →: db-type-wide-column
- 이 글로 오는 글 ←: api-versioning, backpressure, db-architecture-by-scale, db-type-columnar-olap, db-type-embedded, dead-letter-queue, distributed-tracing, distributed-transactions-2pc, elasticsearch-inverted-index, encryption-in-transit, event-driven-architecture, k8s-hpa, k8s-service-types, latency-bandwidth-throughput, leader-election, message-delivery-semantics, message-queue-basics, microservices, pattern-iterator, pub-sub, rabbitmq-basics, raft-consensus, realtime-communication, redis-basics, saga-pattern, schema-versioning

#### `message-delivery-semantics` — 메시지 전달 보장: 최대 한 번, 최소 한 번, 정확히 한 번은 어디까지

- 요약: 확인이 사라지면 보낸 쪽은 다시 보낼 수밖에 없어서, 정확히 한 번은 구간마다 받는 쪽이 중복을 알아봐서 만든다. 멱등 프로듀서의 시퀀스, Kafka 트랜잭션과 펜싱, 인박스 테이블과 중복 기록 보관 기간을 실제로 돌려 본다.
- 태그: Messaging, Backend, Distributed Systems, PostgreSQL, Transaction
- 키워드: 정확히 한 번, 멱등 프로듀서, 인박스 테이블, 트랜잭셔널 프로듀서
- 길이: 449줄
- 소제목: 확인이 사라지면 보낸 쪽은 모른다 / 프로듀서와 브로커 사이: 멱등 프로듀서 / Kafka 안에서 읽고 쓰기: 트랜잭션 / 같은 이름의 옛 인스턴스를 막는 펜싱 / 어디까지가 Kafka의 정확히 한 번인가 / 받는 쪽 DB에서 거르는 인박스 테이블 / 중복을 얼마나 오래 기억할까 / 중복 적립 문의를 받았을 때 볼 것 / 정확히 한 번은 구간마다 받는 쪽이 만든다 / 면접에서 나올 만한 질문
- 직접 링크 →: message-queue-basics, kafka-basics, event-driven-architecture, idempotency-key, batch-processing
- 키워드 백링크 →: db-transaction-isolation, resilience-patterns, dead-letter-queue, http-methods
- 이 글로 오는 글 ←: crdt, cron-jobs, db-architecture-by-scale, dead-letter-queue, event-driven-architecture, idempotency-key, kafka-basics, long-polling, message-queue-basics, rabbitmq-basics, saga-pattern, schema-versioning

#### `message-queue-basics` — 메시지 큐 기초: ack, 가시성 타임아웃, 재전달

- 요약: 메시지를 꺼낸 뒤 처리 전에 죽으면 사라지는 큐를 고쳐 가며 ack와 가시성 타임아웃, 최소 한 번 전달에서 생기는 중복, 워커를 늘리면 깨지는 순서, 큐 깊이로 읽는 처리 상태를 Redis와 PostgreSQL로 직접 돌려 본다.
- 태그: Messaging, Backend, Redis, PostgreSQL, Distributed Systems
- 키워드: 가시성 타임아웃, 경쟁하는 컨슈머, 큐 깊이, BLMOVE
- 길이: 540줄
- 소제목: 요청 안에서 끝내지 않아도 되는 일 / 꺼낸 순간 사라지는 큐 / 처리했다고 말해야 지운다 / 가시성 타임아웃: 죽은 워커의 몫을 되찾는 시계 / 같은 메시지를 두 번 받는 건 정상이다 / 실패를 알리는 nack / 경쟁하는 컨슈머 / 워커를 늘리면 순서가 깨진다 / 큐 깊이 그래프를 읽는 법 / 큐를 무엇으로 만드나 / 메시지가 사라지거나 쌓일 때 보는 순서 / 잃지 않는 것과 두 번 하지 않는 것 / 면접에서 나올 만한 질문
- 직접 링크 →: pub-sub, dead-letter-queue, message-delivery-semantics, kafka-basics, rabbitmq-basics, redis-basics, db-locking-deadlock, db-architecture-by-scale, idempotency-key, exponential-backoff-jitter, backpressure, microservices, postgres-mvcc-vacuum, redis-persistence-ha, redis-memory-eviction
- 키워드 백링크 →: autoscaling, db-index-design, resilience-patterns, realtime-communication, http-methods
- 이 글로 오는 글 ←: autoscaling, backpressure, dead-letter-queue, event-driven-architecture, kafka-basics, message-delivery-semantics, pattern-command, pub-sub, rabbitmq-basics, redis-basics, traffic-shaping-qos, webhooks

#### `pub-sub` — 발행·구독: 토픽, Redis Streams 소비자 그룹, SNS와 SQS 팬아웃

- 요약: 큐는 한 명에게, 토픽은 모두에게 준다. Redis PUB/SUB가 끊긴 구독자와 느린 구독자의 메시지를 버리는 모습, Streams 소비자 그룹의 lag와 pending, SNS 뒤에 SQS를 붙이는 이유와 필터 정책까지 정리한다.
- 태그: Messaging, Redis, AWS, Backend, Distributed Systems
- 키워드: 소비자 그룹, 팬아웃, XAUTOCLAIM, 필터 정책, client-output-buffer-limit
- 길이: 583줄
- 소제목: 한 명에게 주는 큐, 모두에게 주는 토픽 / Redis PUBLISH는 그 순간 듣던 사람에게만 간다 / 느린 구독자 하나는 끊긴다 / Redis Streams: 그룹마다 모두, 그룹 안에서는 나눠서 / 그룹이 얼마나 밀렸는지 보기 / 죽은 소비자의 몫 가져오기 / 스트림을 자르면 늦은 그룹은 모른 채 잃는다 / SNS 토픽 뒤에 SQS 큐를 하나씩 / 구독자가 고르게 하는 필터 / 이벤트 이름과 내용은 구독자를 위해 짓는다 / 구독자가 메시지를 못 받는다는 신고가 오면 / 복사하는 곳과 나누는 곳 / 면접에서 나올 만한 질문
- 직접 링크 →: message-queue-basics, dead-letter-queue, event-driven-architecture, redis-basics, redis-cluster, backpressure, kafka-basics
- 키워드 백링크 →: http-caching-cdn, dns
- 이 글로 오는 글 ←: dead-letter-queue, event-driven-architecture, kafka-basics, message-queue-basics, microservices, pattern-observer, rabbitmq-basics, redis-basics, websocket-deep-dive

#### `rabbitmq-basics` — RabbitMQ 기초: 익스체인지와 바인딩, ack와 prefetch, 쿼럼 큐

- 요약: RabbitMQ는 큐가 아니라 익스체인지로 보내고 바인딩이 큐를 고른다. 익스체인지 네 종류, 갈 곳 없는 메시지, 발행 확인, prefetch, 쿼럼 큐의 배달 한도와 데드 레터 익스체인지를 실제 출력으로 확인한다.
- 태그: Messaging, Backend, Troubleshooting, Distributed Systems
- 키워드: RabbitMQ, 익스체인지, 쿼럼 큐, 데드 레터 익스체인지
- 길이: 459줄
- 소제목: 큐가 아니라 익스체인지로 보낸다 / 익스체인지 네 종류 / 갈 곳 없는 메시지를 잡는 법 / 브로커가 받았는지 확인하는 발행 확인 / ack와 prefetch: 컨슈머가 몇 개를 쥐고 있나 / 클래식 큐와 쿼럼 큐 / 실패한 메시지를 보내는 데드 레터 익스체인지 / 큐가 쌓이거나 비었을 때 보는 순서 / Kafka와 무엇이 다른가 / 익스체인지가 정하고, ack가 지우고, 쿼럼이 지킨다 / 면접에서 나올 만한 질문
- 직접 링크 →: message-queue-basics, pub-sub, dead-letter-queue, message-delivery-semantics, event-driven-architecture, kafka-basics
- 키워드 백링크 →: raft-consensus, http-caching-cdn, dns
- 이 글로 오는 글 ←: backpressure, db-architecture-by-scale, dead-letter-queue, distributed-tracing, event-driven-architecture, kafka-basics, message-queue-basics, microservices

### Programming › Common (`programming/common`)

#### `local-custom-domain` — localhost 대신 내 도메인으로 개발하기

- 요약: app.matt.test, api.matt.test처럼 배포와 같은 모양의 주소로 로컬 개발 환경을 만든다. hosts·dnsmasq로 이름을 돌리고, 리버스 프록시로 나누고, mkcert로 브라우저가 믿는 HTTPS를 붙인다.
- 태그: DNS, HTTPS, Local Dev, Browser
- 키워드: mkcert, dnsmasq, 로컬 도메인, allowedDevOrigins
- 길이: 355줄
- 소제목: localhost가 감춰 주는 것들 / 어떤 도메인을 쓸까 / 이름을 127.0.0.1로 돌리기 / 포트 대신 Host 헤더로 나누기 / 브라우저가 믿는 인증서 만들기 / 브라우저 요청이 서비스에 닿기까지 / 개발 서버가 낯선 호스트를 막는다 / 잘 연결됐는지 확인하기 / 안 될 때 의심할 곳 / 배포와 같은 모양으로 / 면접에서 나올 만한 질문
- 직접 링크 →: cors, hosts-file
- 키워드 백링크 →: proxy-reverse-proxy, nginx-basics, http-versions, what-happens-google-com, cookie-session-login, oauth, dns
- 이 글로 오는 글 ←: cors, hosts-file, https-tls, network-flow-logs, network-monitoring, proxy-reverse-proxy

### Programming › Common › Git (`programming/common/git`)

#### `git-branch-merge` — 브랜치와 병합: 포인터 하나가 움직일 뿐

- 요약: 같은 git merge가 어떤 때는 Fast-forward로, 어떤 때는 병합 커밋으로 끝나는 이유에서 시작해 브랜치와 HEAD, switch와 detached HEAD, fast-forward와 3-way 병합, 브랜치 정리와 upstream을 보고, --first-parent와 --ancestry-path로 커밋이 어느 PR로 들어왔는지 찾는다.
- 태그: Git, DevOps
- 키워드: fast-forward, 3-way 병합, detached HEAD, merge base, first-parent
- 길이: 578줄
- 소제목: 브랜치는 커밋에 붙은 이름표다 / switch와 checkout은 무엇이 다른가 / HEAD가 브랜치를 떠나면 / fast-forward를 막거나 강제하기 / 곧게 이어지지 않으면 세 스냅샷을 비교한다 / 다 쓴 브랜치는 지운다 / 원격 브랜치와 얼마나 차이 나는지 / 현장에서 병합 히스토리를 읽는 순간 / 다시 정리하면 / 면접에서 나올 만한 질문
- 직접 링크 →: git-merge-conflict, git-internals-basics, git-staging-area, git-stash-reflog, git-branching-strategy, git-remote-collaboration
- 이 글로 오는 글 ←: git-branching-strategy, git-ignore-config, git-internals-basics, git-merge-conflict, git-rebase, git-remote-collaboration, git-repo-errors, git-tips-advanced, git-troubleshooting, git-undo

#### `git-branching-strategy` — 브랜치 전략: Git Flow, GitHub Flow, 트렁크 기반 개발

- 요약: develop에 덜 된 기능이 쌓인 릴리스 날에 운영 핫픽스를 어디서 고칠지에서 출발해 Git Flow, GitHub Flow, GitLab Flow, 트렁크 기반 개발을 비교한다. PR 머지 방식, Conventional Commits, SemVer 태그, 브랜치 보호 규칙까지 실제 명령으로 본다.
- 태그: Git, DevOps, Feature Flag
- 키워드: Git Flow, GitHub Flow, 트렁크 기반 개발, Conventional Commits, squash 머지
- 길이: 511줄
- 소제목: 전략이 정하는 것은 통합하는 때와 곳이다 / Git Flow는 브랜치를 역할별로 나눈다 / Git Flow로 핫픽스 내보내기 / 릴리스 브랜치의 수정은 cherry-pick으로 돌려보낸다 / GitHub Flow는 main 하나로 버틴다 / GitLab Flow는 환경마다 브랜치를 둔다 / 트렁크 기반 개발은 하루에도 여러 번 합친다 / 무엇을 고를지는 배포 주기가 정한다 / PR을 합치는 세 가지 버튼 / 커밋 메시지에 규칙을 둔다 / 버전 번호와 태그 / main을 지키는 규칙은 서버에 둔다 / 모노레포에서는 브랜치보다 경로가 경계다 / 처음 질문으로 돌아가면 / 면접에서 나올 만한 질문
- 직접 링크 →: git-branch-merge, git-remote-collaboration, git-tips-advanced
- 키워드 백링크 →: k8s-deploy-pipeline-eks, ab-testing, api-versioning
- 이 글로 오는 글 ←: ci-cd-basics, git-branch-merge, git-internals-basics, git-rebase, git-remote-collaboration, git-tips-advanced, github-actions-docker-ecr

#### `git-ignore-config` — .gitignore와 git config: 무시 규칙, 세 겹 설정, 줄바꿈

- 요약: .gitignore가 이미 추적 중인 파일에 듣지 않는 이유와 패턴 규칙, system·global·local로 쌓이는 설정과 includeIf, core.autocrlf와 .gitattributes로 줄바꿈을 고정하는 법을 실제 출력으로 정리한다.
- 태그: Git, DevOps
- 키워드: .gitignore, includeIf, core.autocrlf
- 길이: 424줄
- 소제목: 올리지 않을 파일은 .gitignore로 / 설정은 세 겹으로 쌓인다 / 줄바꿈 문자가 diff 전체를 바꿀 때 / 현장에서 이 규칙들이 문제가 되는 순간 / 다시 정리하면 / 면접에서 나올 만한 질문
- 직접 링크 →: git-staging-area, git-undo, git-troubleshooting, git-branch-merge
- 키워드 백링크 →: db-modeling-normalization
- 이 글로 오는 글 ←: git-internals-basics, git-large-files-secrets, git-repo-errors, git-staging-area, git-troubleshooting, k8s-project-structure

#### `git-internals-basics` — Git은 무엇을 저장하나: 스냅샷과 객체

- 요약: squash 머지한 브랜치가 왜 안 합쳐졌다고 나오는지에서 시작해 blob·tree·commit·tag 객체를 직접 열어 보고, 해시가 내용에서 나오는 방식과 .git 폴더의 구성을 본다. tree 해시 비교, CI 캐시 키, git describe처럼 해시로 같은지 확인하는 실무 방법도 정리한다.
- 태그: Git, DevOps
- 키워드: blob 객체, 내용 주소 지정, packfile, annotated tag
- 길이: 575줄
- 소제목: 서버 하나에 모든 걸 맡기지 않으려고 / 변경분이 아니라 스냅샷을 찍는다 / 객체 네 가지를 직접 열어 본다 / 해시는 내용에서 나온다 / .git 폴더가 저장소의 전부다 / 현장에서 해시로 "같은가"를 확인하는 순간 / 다시 정리하면 / 면접에서 나올 만한 질문
- 직접 링크 →: git-staging-area, git-ignore-config, git-branch-merge, merkle-tree, git-troubleshooting, git-stash-reflog
- 키워드 백링크 →: github-actions-docker-ecr, git-tips-advanced, git-branching-strategy, git-large-files-secrets, build-caching
- 이 글로 오는 글 ←: build-caching, git-branch-merge, git-large-files-secrets, git-remote-collaboration, git-repo-errors, git-staging-area, merkle-tree, pattern-facade, pattern-flyweight, pattern-memento

#### `git-large-files-secrets` — 커밋에 들어가면 안 되는 것: 큰 파일, 비밀 값, 줄바꿈, 권한

- 요약: 지운 덤프 파일 때문에 푸시가 계속 거절되는 이유에서 시작해 git-filter-repo로 히스토리에서 빼는 법, 비밀 값이 올라갔을 때의 대응 순서, 계속 추적되는 파일, CRLF, 실행 권한, 대소문자만 바꾼 파일 이름을 증상별로 고친다.
- 태그: Git, DevOps
- 키워드: git-filter-repo, Git LFS, push protection
- 길이: 459줄
- 소제목: 큰 파일을 커밋해서 푸시가 안 된다 / 비밀 값이 든 .env를 커밋했다 / .gitignore에 적었는데 계속 추적된다 / 줄바꿈 때문에 파일 전체가 바뀌었다고 나온다 / 권한만 바뀐 파일이 diff에 나온다 / 대소문자만 바꾼 파일 이름이 반영되지 않는다 / 들어간 뒤보다 들어가기 전에 막는 편이 싸다 / 면접에서 나올 만한 질문
- 직접 링크 →: git-internals-basics, git-troubleshooting, git-undo, git-ignore-config
- 키워드 백링크 →: build-caching, linux-files-permissions, git-staging-area, db-modeling-normalization
- 이 글로 오는 글 ←: git-internals-basics, git-troubleshooting, git-undo, k8s-project-structure, terraform-basics

#### `git-merge-conflict` — 병합 충돌 풀기: 마커 읽기부터 rerere까지

- 요약: 두 사람이 같은 줄을 고쳐 멈춘 병합에서 시작해 충돌 마커와 zdiff3, 충돌 중 인덱스의 세 스테이지, 푸는 순서와 mergetool, 같은 충돌을 다시 풀지 않게 하는 rerere, 충돌을 덜 만드는 습관을 실제 출력으로 따라간다.
- 태그: Git, DevOps
- 키워드: 병합 충돌, rerere, zdiff3
- 길이: 524줄
- 소제목: 같은 줄을 둘이 고쳤을 때 / 충돌 중에 Git이 들고 있는 것 / 충돌을 푸는 순서 / 같은 충돌을 두 번 풀지 않게 / 충돌을 덜 만드는 습관 / 다시 정리하면 / 면접에서 나올 만한 질문
- 직접 링크 →: git-branch-merge, git-rebase
- 키워드 백링크 →: git-staging-area
- 이 글로 오는 글 ←: git-branch-merge, git-rebase, git-staging-area, git-tips-advanced

#### `git-rebase` — rebase: 커밋을 다시 쓰는 일

- 요약: rebase가 커밋을 새 받침 위에 다시 만드는 과정을 보고, merge와의 트레이드오프, 충돌 처리, interactive rebase와 autosquash, --onto와 --update-refs, 공유 브랜치를 다시 썼을 때 생기는 일과 복구법까지 다룬다.
- 태그: Git, DevOps
- 키워드: interactive rebase, git rebase, autosquash, pull.rebase
- 길이: 791줄
- 소제목: rebase는 커밋을 새로 만든다 / merge로 할지 rebase로 할지 / 다시 적용하다 충돌이 나면 / 커밋을 고르고 합치고 고쳐 쓰기 / 고칠 커밋을 미리 표시해 두기 / 브랜치 일부만 다른 곳으로 / 쌓아 올린 브랜치를 한꺼번에 / pull할 때마다 생기는 병합 커밋 / 공유한 커밋은 다시 쓰지 않는다 / rebase를 잘못했을 때 / 병합 커밋까지 옮겨야 할 때 / 다시 정리하면 / 면접에서 나올 만한 질문
- 직접 링크 →: git-branch-merge, git-branching-strategy, git-merge-conflict, git-remote-collaboration, git-stash-reflog, git-undo
- 키워드 백링크 →: git-tips-advanced, git-staging-area
- 이 글로 오는 글 ←: git-merge-conflict, git-remote-collaboration, git-troubleshooting

#### `git-remote-collaboration` — 원격 저장소와 협업: fetch, pull, push

- 요약: 동료가 먼저 푸시해서 내 push가 거절되는 장면에서 시작해 origin/main의 정체, fetch와 pull의 차이, upstream, --force-with-lease와 --force-if-includes, 태그, PR과 포크 흐름, 큰 저장소를 빨리 받는 법까지 실제 출력으로 따라간다.
- 태그: Git, DevOps
- 키워드: force-with-lease, 원격 추적 브랜치, 얕은 clone, 부분 clone
- 길이: 860줄
- 소제목: 원격은 주소록에 적힌 다른 저장소다 / SSH 키로 GitHub에 붙기 / 원격 추적 브랜치는 마지막으로 본 원격의 사진이다 / fetch는 가져오기만, pull은 가져와서 합친다 / 갈라진 브랜치를 합치는 세 가지 방법 / upstream과 ahead, behind / 강제 푸시는 남의 커밋을 지운다 / 끝난 브랜치 지우고 정리하기 / 태그는 따로 밀어야 올라간다 / PR 한 건이 머지되기까지 / 포크에서 기여하기 / 리뷰를 주고받을 때 / 비밀번호 대신 토큰과 자격 증명 도우미 / 큰 저장소를 빨리 받기 / 다시 처음의 거절로 / 면접에서 나올 만한 질문
- 직접 링크 →: git-internals-basics, git-branch-merge, git-rebase, git-branching-strategy, git-troubleshooting
- 키워드 백링크 →: github-actions-docker-ecr, git-stash-reflog, token-login, what-happens-google-com
- 이 글로 오는 글 ←: git-branch-merge, git-branching-strategy, git-rebase, git-repo-errors, git-staging-area, git-troubleshooting

#### `git-repo-errors` — Git 저장소가 명령을 거부할 때: lock, ref, index, 소유권

- 요약: index.lock, cannot lock ref, index file corrupt, dubious ownership, 비어 있는 서브모듈, Author identity unknown처럼 .git 안의 파일 때문에 생기는 오류를 재현하고, 무엇을 지워도 되고 무엇은 지우면 안 되는지 정리한다.
- 태그: Git, DevOps
- 키워드: cannot lock ref, index.lock, dubious ownership
- 길이: 294줄
- 소제목: cannot lock ref 오류가 난다 / index.lock 파일이 있다며 아무것도 안 된다 / index file corrupt / not a git repository / 서브모듈 폴더가 비어 있다 / Author identity unknown / 지워도 되는 파일과 지우면 안 되는 파일 / 면접에서 나올 만한 질문
- 직접 링크 →: git-internals-basics, git-troubleshooting, git-tips-advanced, git-ignore-config
- 키워드 백링크 →: git-branch-merge, git-remote-collaboration
- 이 글로 오는 글 ←: git-troubleshooting

#### `git-staging-area` — 작업 트리, 인덱스, HEAD: add와 commit 사이

- 요약: add한 뒤에 고친 한 줄이 왜 커밋에 안 들어가는지에서 시작해 세 구역과 git status의 두 글자, add -p, 히스토리를 읽는 log 옵션을 실제 출력으로 따라간다. pre-commit 훅이 작업 트리가 아니라 인덱스를 검사해야 하는 이유도 본다.
- 태그: Git, DevOps
- 키워드: 스테이징 영역, 작업 트리, git add -p
- 길이: 548줄
- 소제목: 파일은 세 구역을 오간다 / 파일의 상태는 두 글자로 읽는다 / 커밋하고 히스토리를 읽는 명령 / 커밋 직전에 인덱스를 보는 습관 / 다시 정리하면 / 면접에서 나올 만한 질문
- 직접 링크 →: git-internals-basics, git-remote-collaboration, git-ignore-config, git-tips-advanced
- 키워드 백링크 →: git-stash-reflog, git-merge-conflict
- 이 글로 오는 글 ←: git-branch-merge, git-ignore-config, git-internals-basics, git-large-files-secrets, git-merge-conflict, git-rebase, git-stash-reflog, git-troubleshooting, git-undo, pattern-facade

#### `git-stash-reflog` — 치워 두고 되찾기: stash, reflog, 잘못 둔 커밋

- 요약: reset --hard로 사라진 커밋을 reflog로 되찾는 데서 시작해 stash로 변경을 치워 두는 법, add만 한 파일을 fsck로 찾는 법, 엉뚱한 브랜치에 한 커밋을 옮기는 순서, 히스토리에서 지운 파일을 꺼내는 법을 정리한다.
- 태그: Git, DevOps
- 키워드: reflog, git stash, git fsck
- 길이: 451줄
- 소제목: 잠깐 치워 두기 / reset --hard 뒤에 사라진 커밋 찾기 / 엉뚱한 브랜치에 커밋했을 때 / 지운 파일을 히스토리에서 꺼내기 / 서랍과 생명줄의 한계 / 면접에서 나올 만한 질문
- 직접 링크 →: git-undo, git-troubleshooting
- 키워드 백링크 →: git-tips-advanced, git-staging-area
- 이 글로 오는 글 ←: git-branch-merge, git-internals-basics, git-rebase, git-remote-collaboration, git-staging-area, git-troubleshooting, git-undo

#### `git-tips-advanced` — 알아 두면 편한 Git 기능: bisect, cherry-pick, worktree, hooks

- 요약: 200개 커밋 중 버그가 들어온 커밋을 bisect run으로 여덟 번 만에 찾고, cherry-pick, worktree, blame과 pickaxe, commit-msg 훅, .gitattributes, 서브모듈과 subtree, 커밋 서명, 켜 두면 편한 설정까지 실제 출력으로 본다.
- 태그: Git, DevOps
- 키워드: git bisect, cherry-pick, worktree, git blame, commit-msg 훅
- 길이: 895줄
- 소제목: 200개 커밋을 여덟 번 만에 좁힌다 / 테스트 스크립트로 bisect를 자동으로 돌린다 / 커밋 하나만 가져오는 cherry-pick / 브랜치를 바꾸지 않고 다른 폴더에서 일한다 / 이 줄은 누가 왜 바꿨나 / 코드가 생기고 사라진 커밋을 찾는다 / 저장소 안을 찾고 기여를 센다 / 커밋 전에 규칙을 검사하는 훅 / 파일마다 다른 규칙을 주는 .gitattributes / 서브모듈과 subtree / 저장소를 가볍게 유지하는 gc와 maintenance / 커밋에 서명하기 / 켜 두면 편한 설정과 별칭 / 도구를 꺼낼 때를 아는 것 / 면접에서 나올 만한 질문
- 직접 링크 →: git-branching-strategy, git-troubleshooting, git-merge-conflict
- 키워드 백링크 →: git-branch-merge, dockerfile-image-layers
- 이 글로 오는 글 ←: git-branching-strategy, git-internals-basics, git-rebase, git-repo-errors, git-staging-area, git-stash-reflog, git-troubleshooting

#### `git-troubleshooting` — Git 문제 해결: 푸시 거절부터 잃어버린 커밋까지

- 요약: push 거절, divergent branches, unrelated histories, 브랜치를 못 바꿀 때, stash pop 충돌, detached HEAD에서 잃은 커밋, 지운 브랜치, 끝나지 않은 rebase, 락파일 충돌까지 협업과 히스토리에서 만나는 Git 오류를 실제 메시지로 재현하고 원인과 해결, 예방법을 정리한다.
- 태그: Git, DevOps
- 키워드: unrelated histories, fetch first, divergent branches
- 길이: 521줄
- 소제목: 문제가 어디서 났는지부터 가른다 / 푸시가 fetch first로 거절된다 / pull이 divergent branches라며 멈춘다 / refusing to merge unrelated histories / 바꾼 파일이 덮어써진다며 브랜치를 못 바꾼다 / stash pop에서 충돌이 났다 / detached HEAD에서 만든 커밋이 사라졌다 / 브랜치를 실수로 지웠다 / 이미 푸시한 커밋 메시지가 틀렸다 / rebase가 끝나지 않은 채로 남아 있다 / pnpm-lock.yaml에서 충돌이 났다 / 오류를 만났을 때의 순서 / 면접에서 나올 만한 질문
- 직접 링크 →: git-large-files-secrets, git-repo-errors, git-undo, git-rebase, git-remote-collaboration, git-tips-advanced
- 키워드 백링크 →: git-branch-merge, git-ignore-config, git-staging-area, git-stash-reflog
- 이 글로 오는 글 ←: git-ignore-config, git-internals-basics, git-large-files-secrets, git-remote-collaboration, git-repo-errors, git-stash-reflog, git-tips-advanced, git-undo

#### `git-undo` — 되돌리기: restore, reset, revert와 히스토리 속 비밀 값

- 요약: 실수가 작업 트리, 인덱스, 로컬 커밋, 푸시한 커밋 중 어디에 있는지로 restore, reset, revert를 고르고, 병합 revert의 함정과 revert로도 지워지지 않는 비밀 값을 filter-repo로 히스토리에서 빼는 과정까지 실제 출력으로 따라간다.
- 태그: Git, DevOps
- 키워드: git reset, git revert, git restore, git clean
- 길이: 587줄
- 소제목: 실수가 어디에 있는지부터 본다 / 파일에서 고친 것을 버린다 / add한 것을 내린다 / 방금 한 커밋을 고친다 / reset은 무엇을 어디까지 옮기나 / 푸시한 커밋은 반대 커밋으로 되돌린다 / 병합을 revert하면 다시 합칠 때 함정이 있다 / 비밀 값을 커밋했을 때 / 다시 정리하면 / 면접에서 나올 만한 질문
- 직접 링크 →: git-stash-reflog, git-staging-area, git-troubleshooting
- 키워드 백링크 →: git-large-files-secrets, git-branch-merge
- 이 글로 오는 글 ←: git-ignore-config, git-large-files-secrets, git-rebase, git-stash-reflog, git-troubleshooting, helm-dependencies-oci-gitops, k8s-deploy-pipeline-eks, rollback-strategy

### Programming › Computer Science (`programming/computer-science`)

#### `backpressure` — 백프레셔: 받는 쪽이 느릴 때 보내는 쪽을 늦추기

- 요약: 생산자가 소비자보다 빠를 때 쌓이는 몫을 Node 스트림의 write()와 drain, pipeline()으로 막고, 신호를 무시하면 메모리가 얼마나 늘어나는지 잰다. 같은 원리가 TCP 수신 창, 상한 있는 대기열과 503, Reactive Streams의 request(n)에서 어떻게 반복되는지도 따라간다.
- 태그: Node.js, Performance, Backend, TCP/IP, Resilience
- 키워드: 백프레셔, highWaterMark, drain 이벤트, 부하 차단
- 길이: 360줄
- 소제목: 빠른 쪽과 느린 쪽 사이에서 고를 수 있는 것 / 버퍼만 두면 시간 문제다 / Node 스트림의 신호: write()가 false를 돌려준다 / 신호를 무시하면 얼마나 쌓이나 / pipeline()이 대신 해 주는 것 / 소켓 아래에서는 TCP가 같은 일을 한다 / 서비스 사이에서는 큐 길이로 말한다 / 당겨 가는 쪽이 양을 정한다: request(n) / 백프레셔가 빠진 시스템의 증상 / 가장 느린 곳이 속도를 정하게 둔다 / 면접에서 나올 만한 질문
- 직접 링크 →: autoscaling, tcp-reliability-congestion, rate-limiting-in-practice, retries, message-queue-basics, connection-pool
- 키워드 백링크 →: rabbitmq-basics, latency-bandwidth-throughput, http-versions, kafka-basics, sql-batch-timeout-pool, grpc
- 이 글로 오는 글 ←: autoscaling, connection-pool, message-queue-basics, pub-sub, rate-limiting-algorithms, realtime-communication, resilience-patterns, retries, websocket-deep-dive

#### `base64` — Base64는 왜 쓰고 어떻게 바뀌나

- 요약: 바이트를 3개씩 묶어 6비트 글자 4개로 바꾸는 Base64의 규칙과 패딩, base64url, 33% 늘어나는 크기를 직접 계산하며 본다. 암호화가 아니라서 Basic 인증과 JWT 페이로드가 누구에게나 읽힌다는 점도 짚는다.
- 태그: Encoding, HTTP, Browser, Security
- 키워드: Base64, base64url, data URL, Basic 인증
- 길이: 471줄
- 소제목: 글자만 다니는 길에 바이트를 실으려면 / 3바이트가 4글자가 되는 과정 / 모자란 바이트는 등호로 채운다 / 한글은 UTF-8 바이트부터 만든다 / 인코더를 직접 짜 보기 / 3분의 4만큼 커진다 / URL에 넣으면 더하기와 슬래시가 말썽이다 / 인코딩은 자물쇠가 아니다 / 브라우저의 btoa는 한글을 받지 못한다 / 터미널에서 base64 다루기 / data URL은 요청 하나를 아끼는 대신 / 다시 JSON 속 긴 문자열로 / 면접에서 나올 만한 질문
- 직접 링크 →: token-login, https-tls
- 키워드 백링크 →: upper-layers-session-presentation-app, http-versions, what-happens-google-com
- 이 글로 오는 글 ←: api-pagination-sorting, eks-cluster-basics, html-form-http, http-message, k8s-secret, realtime-communication, rest-api-design, server-sent-events, token-login, upper-layers-session-presentation-app, websocket-deep-dive

#### `deadlocks` — 데드락: 서로 쥔 것을 기다리다 멈춘 프로그램

- 요약: CPU는 0%인데 요청이 끝나지 않는 데드락을 Go, Java, Python, Node로 직접 멈춰 보고, 고루틴 덤프와 jstack, py-spy로 서로 기다리는 지점을 읽는다. Coffman 네 조건, 락 순서와 tryLock 타임아웃, 라이브락과 기아, 락 하나로 멈추는 경우와 커넥션 풀 데드락까지 다룬다.
- 태그: Concurrency, Troubleshooting, PostgreSQL, Node.js, Linux
- 키워드: Coffman 조건, 락 순서, 라이브락, 스레드 덤프
- 길이: 534줄
- 소제목: CPU는 0%인데 요청이 끝나지 않는다 / 네 가지 조건이 모두 맞아야 멈춘다 / 계좌 이체로 직접 멈춰 보기 / 서버는 멈춰도 런타임이 알려 주지 않는다 / 스레드 덤프 읽기: 자바와 파이썬 / 대기 그래프에서 고리 찾기 / 언제나 같은 순서로 잠근다 / 기다리는 시간에 끝을 둔다 / 라이브락과 기아 / 락 하나로도 멈춘다 / 락이 아닌 자원도 고리를 만든다 / 멈춘 프로세스를 들여다보는 순서 / 면접에서 나올 만한 질문
- 직접 링크 →: db-locking-deadlock, race-conditions, thread-safety, exponential-backoff-jitter, connection-pool, timeouts, pessimistic-locking
- 키워드 백링크 →: k8s-pod-probes, event-loop, osi-in-practice, sql-batch-timeout-pool
- 이 글로 오는 글 ←: db-locking-deadlock, race-conditions, thread-safety, timeouts

#### `garbage-collection` — 가비지 컬렉션 안쪽: 세대, 멈춤, 그리고 컨테이너 메모리 한도

- 요약: 참조 카운팅과 추적 GC의 차이, V8의 Scavenge와 Mark-Compact를 --trace-gc 로그로 읽고, 힙 한도와 컨테이너 한도가 어긋나면 왜 로그 없이 OOMKilled가 되는지 cgroup으로 재현한다. GC 멈춤이 꼬리 지연으로 나타나는 모습과 JVM G1·ZGC, Go의 GOGC·GOMEMLIMIT도 실제 로그로 비교한다.
- 태그: Performance, Node.js, JavaScript, Troubleshooting, Kubernetes
- 키워드: 세대별 가설, 참조 카운팅, 스캐빈지, GOMEMLIMIT, --max-old-space-size
- 길이: 484줄
- 소제목: 쓰레기를 찾는 두 가지 방법 / 참조 카운팅은 즉시 치우지만 고리를 못 본다 / 표시하고 쓸고, 필요하면 모은다 / 대부분 금방 죽는다는 내기 / --trace-gc 로그 한 줄 읽기 / 힙이 한도에 닿으면 / 힙 한도와 컨테이너 한도는 따로 논다 / 멈춤은 평균이 아니라 꼬리에 나타난다 / JVM의 G1과 ZGC / Go에는 손잡이가 둘 있다 / 메모리가 이상할 때 보는 순서 / 치우는 비용은 결국 누가 내나 / 면접에서 나올 만한 질문
- 직접 링크 →: js-memory-leak, k8s-pod-resources
- 키워드 백링크 →: helm-basics, event-loop, sql-batch-timeout-pool, layer-mtu-fragmentation
- 이 글로 오는 글 ←: autoscaling, js-memory-leak, scaling-horizontal-vertical

#### `race-conditions` — 경쟁 상태: 확인과 행동 사이에 끼어드는 다른 요청

- 요약: 쿠폰이 두 번 쓰이고 조회수가 덜 오르는 경쟁 상태를 읽고 고치고 쓰기, 확인하고 행동하기, 파일의 TOCTOU로 나눠 직접 재현한다. 싱글 스레드 자바스크립트의 await 틈, 워커 스레드와 Atomics, DB의 갱신 손실, Go 레이스 디텍터로 찾는 법과 고치는 방법을 고르는 기준까지 정리한다.
- 태그: Concurrency, Node.js, JavaScript, PostgreSQL, Linux, Troubleshooting
- 키워드: 경쟁 상태, TOCTOU, check-then-act, read-modify-write
- 길이: 492줄
- 소제목: 쿠폰이 두 번 쓰였다 / 결과가 실행 순서에 달려 있으면 / 읽고 더하고 쓰는 세 걸음 (read-modify-write) / 확인한 사실은 행동할 때 이미 낡았다 (check-then-act) / 파일 시스템의 TOCTOU / 스레드가 하나인 자바스크립트에서도 생긴다 / 워커 스레드가 같은 메모리를 만질 때 / DB에서는 갱신 손실로 나타난다 / 경쟁 상태를 찾아내는 법 / 틈을 없애는 방법 고르기 / 현장에서 경쟁 상태를 의심하는 순간 / 면접에서 나올 만한 질문
- 직접 링크 →: deadlocks, thread-safety, pessimistic-locking, distributed-lock, cron-jobs, event-loop, browser-fetch, idempotency-key, optimistic-locking, db-transaction-isolation
- 키워드 백링크 →: postgres-advanced-sql, db-locking-deadlock, sql-batch-timeout-pool, redis-basics, resilience-patterns, http-methods
- 이 글로 오는 글 ←: browser-fetch, deadlocks, k8s-coredns, nginx-reverse-proxy, postgres-data-types, thread-safety

#### `thread-safety` — 스레드 안전: 같이 써도 깨지지 않는 코드

- 요약: Go 맵의 concurrent map writes, 자바 HashMap의 사라지는 키, volatile 없이 멈추지 않는 스레드, x86에서 실제로 바뀌는 메모리 순서를 직접 보고 happens-before로 정리한다. 한정·불변·원자적 연산·락 네 가지 길, 언어별 스레드 안전 컬렉션, DB 연결 객체를 요청끼리 나누면 생기는 사고까지 다룬다.
- 태그: Concurrency, JavaScript, Node.js, PostgreSQL, Troubleshooting
- 키워드: 스레드 안전, 데이터 경합, happens-before, 메모리 가시성
- 길이: 430줄
- 소제목: 혼자 돌릴 때는 멀쩡하던 세션 맵 / 스레드 안전하다는 말의 범위 / 데이터 경합과 경쟁 상태는 다르다 / 쓴 값이 다른 스레드에 안 보인다 / 순서도 바뀐다 / happens-before가 약속하는 것 / 안전하게 만드는 네 가지 길 / 스레드 안전한 컬렉션 고르기 / 자바스크립트의 스레드는 복사하거나, 나누고 Atomics로 / 연결 객체는 같이 쓰지 않는다 / 현장에서 스레드 안전 문제를 만났을 때 / 면접에서 나올 만한 질문
- 직접 링크 →: race-conditions, deadlocks, event-loop, connection-pool
- 이 글로 오는 글 ←: deadlocks, pattern-singleton, race-conditions

### Programming › Database (`programming/database`)

#### `db-partitioning` — 파티셔닝: 큰 테이블을 달마다 나누기

- 요약: 주문 테이블을 created_at 범위로 나누고 파티션 가지치기가 어떤 쿼리에서 되고 안 되는지 실행 계획으로 확인한다. 오래된 달을 DELETE 대신 DETACH와 DROP으로 버리고, default 파티션 함정과 LIST·HASH 파티션, 고유 제약 규칙까지 다룬다.
- 태그: Database, PostgreSQL, Scalability, Performance
- 키워드: 파티셔닝, 파티션 가지치기, default 파티션
- 길이: 462줄
- 소제목: 주문 테이블을 달마다 나눈다 / 조건에 맞는 파티션만 읽는다 / 오래된 달은 통째로 떼어 낸다 / 목록과 해시로도 나눈다 / 파티션 키가 쿼리에 들어가야 한다 / 면접에서 나올 만한 질문
- 직접 링크 →: db-replication-sharding, db-sharding
- 이 글로 오는 글 ←: db-architecture-by-scale, db-keys-denormalization, db-replication-sharding, db-sharding, db-type-relational, db-type-time-series, db-type-wide-column

#### `db-replication-sharding` — DB 한 대로 버티지 못할 때: 복제와 복제 지연

- 요약: 읽기가 몰리면 WAL을 받아 재생하는 복제본으로 나눈다. PostgreSQL 16에서 스탠바이를 붙이고, 방금 쓴 주문이 안 보이는 복제 지연을 재현해 LSN으로 막고, 동기 복제와 복제본 쿼리 취소, 장애 조치와 split-brain까지 정리한다. 파티셔닝과 샤딩으로 넘어갈 신호도 함께 본다.
- 태그: Database, PostgreSQL, Distributed Systems, Scalability, System Design
- 키워드: 읽기 복제본, 스트리밍 복제, 복제 지연, 복제 슬롯
- 길이: 553줄
- 소제목: 실험에 쓸 두 테이블 / 나누기 전에 한 대부터 키운다 / 복제본은 WAL을 받아 다시 실행한다 / 스탠바이를 하나 붙여 보기 / 방금 결제한 주문이 안 보인다 / 쓴 사람에게는 쓴 것을 보여 준다 / 동기 복제는 어디까지 기다리나 / 복제본에서 긴 쿼리가 끊긴다 / MySQL은 binlog로 복제한다 / 프라이머리가 죽으면 누가 이어받나 / 언제 다음 단계로 넘어가나 / 복제는 읽기를 나누고, 늦을 수 있다 / 면접에서 나올 만한 질문
- 직접 링크 →: db-partitioning, db-sharding, db-index, sql-query-tuning, caching-strategies
- 키워드 백링크 →: db-consistency-cap, db-architecture-by-scale, scaling-horizontal-vertical, sql-batch-timeout-pool, db-type-key-value, postgres-architecture, dns
- 이 글로 오는 글 ←: autoscaling, caching-strategies, connection-pool, db-architecture-by-scale, db-consistency-cap, db-index-pitfalls, db-partitioning, db-sharding, db-type-columnar-olap, db-type-newsql, db-type-relational, db-type-time-series, db-type-wide-column, event-driven-architecture, eventual-consistency, mongodb-document-model, network-partitions, postgres-architecture, postgres-mvcc-vacuum, postgres-operations, saga-pattern, scaling-horizontal-vertical, zero-downtime-migrations

#### `db-sharding` — 샤딩: 데이터를 서버 여러 대에 나눠 담기

- 요약: 쓰기와 데이터가 서버 한 대를 넘을 때 샤드 키를 고르고, 일관된 해싱과 가상 노드로 샤드를 늘려도 조금만 옮기는 법을 직접 계산해 본다. 샤드를 넘는 쿼리와 트랜잭션, 전역 ID(UUIDv7, Snowflake), 재분배, 지금 데이터로 샤드 키 분포를 미리 재 보는 방법도 정리한다.
- 태그: Database, Distributed Systems, Scalability, System Design
- 키워드: 일관된 해싱, Snowflake, UUIDv7
- 길이: 312줄
- 소제목: 서버 여러 대에 나눠 담는다 / 샤드를 늘려도 조금만 옮기는 해시 / 샤드를 넘나드는 쿼리는 비싸다 / 주문 번호는 누가 만드나 / 샤드를 다시 나누는 일 / 읽기 모양을 따로 만들어 두기 / 샤드 키를 정하기 전에 지금 데이터로 재 본다 / 샤딩은 마지막 카드다 / 면접에서 나올 만한 질문
- 직접 링크 →: db-replication-sharding, db-partitioning, microservices, mongodb-document-model, db-architecture-by-scale, db-index
- 키워드 백링크 →: redis-cluster, db-type-newsql, db-type-wide-column, db-type-key-value, distributed-transactions-2pc, scaling-horizontal-vertical, redis-basics
- 이 글로 오는 글 ←: autoscaling, consistent-hashing, db-architecture-by-scale, db-index, db-keys-denormalization, db-partitioning, db-replication-sharding, db-type-columnar-olap, db-type-wide-column, scaling-horizontal-vertical, vpc-peering-transit-privatelink

#### `elasticsearch-inverted-index` — 검색 엔진은 왜 빠른가: Elasticsearch와 역색인

- 요약: LIKE 검색이 느린 이유에서 출발해 분석기, 역색인, BM25 점수, refresh와 세그먼트, 샤드 구성을 따라간다. 쇼핑몰 검색에서 부딪히는 동의어·오타·패싯·깊은 페이지와 DB 동기화도 다룬다.
- 태그: coupang, Elasticsearch, Search, Database · 회사: coupang
- 키워드: Elasticsearch, 역색인, BM25, 형태소 분석기, search_after
- 길이: 485줄
- 소제목: LIKE가 느린 이유 / 찾아보기에 올릴 단어 고르기: 분석기 / 찾아보기를 만드는 과정 / 무엇을 먼저 보여 줄까: BM25 / 점수가 필요 없는 조건은 filter로 / text와 keyword는 다른 필드다 / 방금 넣은 상품이 검색에 안 나온다 / 샤드와 레플리카 / 쇼핑몰 검색에서 부딪히는 것들 / 깊은 페이지는 from으로 가지 않는다 / 원본은 DB에, 검색은 Elasticsearch에 / 클러스터가 yellow나 red로 바뀌면 / 다시 찾아보기로 / 면접에서 나올 만한 질문
- 직접 링크 →: vector-db
- 키워드 백링크 →: db-index, mongodb-document-model, loading-patterns, kafka-basics, db-modeling-normalization
- 이 글로 오는 글 ←: api-pagination-sorting, db-architecture-by-scale, db-types-overview, http-methods, network-partitions, ports-and-sockets, postgres-jsonb-search, structured-logging

#### `mongodb-document-model` — MongoDB 문서 모델: 넣을까, 가리킬까

- 요약: 주문 하나를 문서 하나로 저장하는 문서 모델에서 내장과 참조를 고르는 기준을 정리했다. 스키마 검증, ESR 인덱스, 트랜잭션, write concern, 샤드 키, 집계 파이프라인까지 다룬다.
- 태그: coupang, MongoDB, NoSQL, Database · 회사: coupang
- 키워드: MongoDB, ESR 규칙, 샤드 키, write concern, 집계 파이프라인
- 길이: 471줄
- 소제목: 주문 하나가 문서 하나 / 넣을까, 가리킬까 / 스키마가 없다는 건 검사도 내가 한다는 뜻 / 인덱스 필드 순서는 ESR / 문서 하나는 원자적이다 / 쓰기가 끝났다는 건 어디까지인가 / 샤드 키 하나가 클러스터 모양을 정한다 / 모아서 계산하기: 집계 파이프라인 / 느린 쿼리 로그에 COLLSCAN이 보이면 / 결국 읽는 모양에서 출발한다 / 면접에서 나올 만한 질문
- 키워드 백링크 →: distributed-transactions-2pc, db-index-design, db-type-relational, db-replication-sharding, db-modeling-normalization
- 이 글로 오는 글 ←: db-architecture-by-scale, db-consistency-cap, db-sharding, db-type-relational, db-types-overview, elasticsearch-inverted-index, eventual-consistency, geohash, network-partitions, optimistic-locking, pattern-interpreter

#### `vector-db` — 벡터 DB, 뜻이 가까운 것을 찾는 데이터베이스

- 요약: 글자가 아니라 뜻으로 검색한다는 게 무슨 뜻일까. 임베딩, 코사인 유사도, HNSW 그래프 탐색, RAG까지 그림으로 따라가 봤다.
- 태그: VectorDB, Embedding, AI, Search
- 키워드: 벡터 DB, 임베딩, HNSW, RAG
- 길이: 369줄
- 소제목: 뜻을 좌표로 바꾸기 / 가깝다는 건 어떻게 재나 / 하나하나 다 재면 느리다 / 지름길이 있는 그래프, HNSW / 정확도와 속도를 맞바꾸는 손잡이 / HNSW 말고 다른 인덱스 / 실제로는 어디에 쓰나: RAG / 직접 붙여 볼 때 / pgvector를 붙였는데 결과가 이상할 때 / 정리 / 면접에서 나올 만한 질문
- 키워드 백링크 →: pythagorean-theorem, db-index-design, db-modeling-normalization
- 이 글로 오는 글 ←: db-architecture-by-scale, db-types-overview, elasticsearch-inverted-index, pythagorean-theorem

### Programming › Database › DB Types (`programming/database/db-types`)

#### `db-consistency-cap` — CAP과 PACELC로 DB 종류 비교하기

- 요약: 네트워크가 끊겼을 때와 멀쩡할 때 각각 무엇을 포기하는지 CAP과 PACELC로 정리한다. 선형화부터 최종 일관성까지의 단계, 쿼럼과 충돌 해결, DB마다 서 있는 자리와 설정으로 그 자리가 바뀌는 방법을 본다.
- 태그: Database, Distributed Systems, System Design, NoSQL
- 키워드: CAP 정리, PACELC, 선형화 가능성, 최종 일관성, read-your-writes
- 길이: 310줄
- 소제목: 끊긴 회선 앞에서 고르는 두 가지 / CAP이 말하지 않는 것 / 회선이 멀쩡해도 고르는 것 / 일관성은 켜고 끄는 게 아니라 사다리다 / 쿼럼으로 일관성을 고르는 DB / AP를 고르면 충돌을 누가 푸나 / DB 종류마다 서 있는 자리 / 데이터마다 얼마나 틀려도 되는지 정한다 / 면접에서 나올 만한 질문
- 직접 링크 →: db-types-overview, db-transaction-isolation, db-type-newsql, db-replication-sharding, eventual-consistency, db-type-wide-column, redis-replication-sentinel
- 키워드 백링크 →: db-type-key-value, network-partitions, mongodb-document-model, leader-election, redis-basics, crdt
- 이 글로 오는 글 ←: clock-skew, crdt, db-replication-sharding, db-type-embedded, db-type-key-value, db-type-newsql, db-type-wide-column, db-types-overview, eventual-consistency, network-partitions, raft-consensus

#### `db-type-columnar-olap` — 컬럼형 분석 DB: OLTP와 OLAP을 나누는 이유

- 요약: 같은 주문 500만 건의 매출 쿼리가 PostgreSQL과 DuckDB에서 열 배 넘게 차이 나는 이유를 컬럼 저장, 압축, 벡터화 실행, 건너뛰기로 따라간다. ClickHouse와 BigQuery의 쓰임새, 운영 DB에서 CDC로 옮기는 길도 다룬다.
- 태그: Database, Performance, System Design, PostgreSQL
- 키워드: 컬럼형 저장, OLAP, ClickHouse, DuckDB, 변경 데이터 캡처
- 길이: 485줄
- 소제목: 주문을 받는 질문과 매출을 보는 질문 / 실험에 쓸 주문 500만 건 / 행으로 저장하면 안 쓰는 컬럼도 읽는다 / 같은 컬럼끼리 모이면 잘 눌린다 / 한 번에 값 하나가 아니라 묶음으로 계산한다 / 건너뛸 수 있는 덩어리는 아예 열지 않는다 / ClickHouse 테이블은 정렬 키부터 정한다 / 분석 DB가 잘 못 하는 것 / 클라우드 데이터 웨어하우스와 DuckDB / 운영 DB에서 분석 DB로 옮기는 길 / 컬럼형을 고르기 전에 / 읽는 방향에 맞춰 놓는다 / 면접에서 나올 만한 질문
- 직접 링크 →: db-types-overview, db-type-relational, db-type-time-series, db-type-embedded, db-architecture-by-scale, db-type-newsql
- 키워드 백링크 →: postgres-reporting-sql, db-sharding, kafka-basics, db-replication-sharding, db-index-design
- 이 글로 오는 글 ←: caching-strategies, db-architecture-by-scale, db-type-embedded, db-type-newsql, db-type-relational, db-type-time-series, db-type-wide-column, db-types-overview, microservices, saga-pattern

#### `db-type-embedded` — 임베디드 DB: SQLite, RocksDB처럼 앱 안에 들어가는 DB

- 요약: 서버 없이 앱 프로세스 안에서 파일을 직접 읽고 쓰는 임베디드 DB를 SQLite로 직접 돌려 본다. 타입과 외래 키의 함정, 쓰기 하나뿐인 규칙과 WAL 모드, 커밋 묶기, RocksDB가 다른 DB 밑에서 하는 일까지 다룬다.
- 태그: Database, SQL, Performance
- 키워드: 임베디드 DB, SQLite, RocksDB, WAL 모드
- 길이: 424줄
- 소제목: 서버 없이 라이브러리로 돈다 / 장바구니를 SQLite에 담아 보기 / 타입을 적어도 검사하지 않는다 / 쓰는 사람은 한 번에 하나 / WAL 모드에서는 변경을 옆 파일에 쌓는다 / 커밋은 모아서 한다 / 연결을 열 때마다 거는 설정 / SQLite가 들어가 있는 곳 / RocksDB는 다른 DB 밑에 들어간다 / 서버 DB와 나눠 맡기 / 서버를 빼고 남는 것 / 면접에서 나올 만한 질문
- 직접 링크 →: db-types-overview, db-type-wide-column, db-type-newsql, db-type-columnar-olap, db-consistency-cap
- 키워드 백링크 →: sql-insert-update-delete, sqld-window-functions, api-versioning, kafka-basics, db-index-pitfalls, postgres-architecture
- 이 글로 오는 글 ←: bloom-filter, db-type-columnar-olap, db-type-key-value, db-types-overview

#### `db-type-graph` — 그래프 DB: 관계를 따라가는 질의

- 요약: 친구의 친구가 산 책을 추천하는 질문을 Neo4j Cypher와 PostgreSQL 재귀 CTE로 나란히 풀어 본다. index-free adjacency, 단계가 늘 때 폭발하는 탐색 범위, 그래프 DB가 맞는 곳과 확장의 어려움을 정리한다.
- 태그: Database, NoSQL, Algorithm, System Design
- 키워드: 그래프 DB, Neo4j, Cypher, index-free adjacency
- 길이: 429줄
- 소제목: 친구의 친구가 산 책 / 점과 선으로 저장하기 / Cypher로 그림 그리듯 묻기 / 관계형에서 같은 질문을 하면 / 단계가 늘면 닿는 사람이 폭발한다 / 이웃을 바로 찾아가는 구조 / 너비 우선으로 따라가 보기 / 그래프 DB가 맞는 곳과 아닌 곳 / 관계형 DB와 함께 쓰기 / 관계를 저장하면 질문이 짧아진다 / 면접에서 나올 만한 질문
- 직접 링크 →: db-type-wide-column, sqld-top-n-hierarchical-pivot, db-type-time-series
- 키워드 백링크 →: db-index, db-type-relational
- 이 글로 오는 글 ←: db-architecture-by-scale, db-type-relational, db-type-wide-column, db-types-overview

#### `db-type-key-value` — 키-값 저장소: Redis, DynamoDB, etcd

- 요약: 키 하나로 넣고 꺼내는 단순한 모델이 왜 빠르고 잘 늘어나는지 보고, 메모리의 Redis, 파티션으로 나누는 DynamoDB, Raft로 지키는 etcd를 같은 서점 예제로 비교한다. 핫 파티션과 단일 테이블 설계도 다룬다.
- 태그: Database, NoSQL, Redis, Distributed Systems, Scalability
- 키워드: 키-값 저장소, DynamoDB, etcd, 핫 파티션, 단일 테이블 설계
- 길이: 460줄
- 소제목: 열쇠 하나로 상자 하나 / 메모리에 두느냐, 디스크에 두느냐 / 키를 해시해서 파티션을 고른다 / 파티션 키와 정렬 키 / DynamoDB에서 알아 둘 숫자와 설정 / etcd: 작지만 틀리면 안 되는 값 / 키-값 저장소가 맞는 곳과 아닌 곳 / 관계형 DB 옆에 두는 법 / 단순한 모델, 서로 다른 약속 / 면접에서 나올 만한 질문
- 직접 링크 →: db-types-overview, postgres-jsonb-search, redis-basics, redis-memory-eviction, redis-persistence-ha, db-type-embedded, db-type-relational, db-type-newsql, db-consistency-cap, caching-strategies, db-type-wide-column
- 키워드 백링크 →: raft-consensus, leader-election, dns
- 이 글로 오는 글 ←: db-architecture-by-scale, db-consistency-cap, db-replication-sharding, db-sharding, db-type-newsql, db-type-relational, db-type-wide-column, db-types-overview, distributed-lock, eks-cluster-basics, eventual-consistency, geohash, helm-values-secrets, k8s-configmap, k8s-namespace, k8s-pod-basics, k8s-project-structure, k8s-secret, leader-election, merkle-tree, network-flow-logs, network-partitions, optimistic-locking, quadtree, raft-consensus, service-discovery, terraform-basics, vpc-subnets-route-tables

#### `db-type-newsql` — 분산 SQL(NewSQL): SQL을 지키며 수평 확장

- 요약: 샤드를 넘는 트랜잭션을 DB가 대신 처리하는 Spanner, CockroachDB, TiDB의 구조를 따라간다. 키 범위 구간과 Raft 복제, 분산 트랜잭션과 시계, 재시도와 핫스팟처럼 수평 확장의 대가도 정리한다.
- 태그: Database, Distributed Systems, Scalability, SQL
- 키워드: NewSQL, 분산 SQL, CockroachDB, TrueTime, TiDB
- 길이: 404줄
- 소제목: SQL은 그대로, 저장은 여러 대에 / 행 하나가 키 하나가 된다 / 구간이 커지면 둘로 쪼갠다 / 구간마다 Raft로 과반에 적는다 / 구간 두 개에 걸친 트랜잭션 / 시계가 다르면 순서도 다르다 / 충돌하면 다시 하라고 돌려보낸다 / 멀리 있는 사용자의 데이터는 가까이 둔다 / 호환된다는 말의 범위 / 분산 SQL을 고르기 전에 / 샤딩을 DB 안으로 옮긴 값 / 면접에서 나올 만한 질문
- 직접 링크 →: db-replication-sharding, db-types-overview, db-transaction-isolation, db-consistency-cap, db-type-columnar-olap, db-type-key-value, db-type-wide-column
- 키워드 백링크 →: sql-basics, raft-consensus, distributed-transactions-2pc, scaling-horizontal-vertical, postgres-getting-started
- 이 글로 오는 글 ←: clock-skew, db-consistency-cap, db-sharding, db-type-columnar-olap, db-type-embedded, db-type-key-value, db-type-relational, db-types-overview, distributed-transactions-2pc, raft-consensus

#### `db-type-relational` — 관계형 DB: 왜 여전히 기본값인가

- 요약: 미리 몰랐던 질문에 SQL 한 문장으로 답할 수 있는 이유를 제약 조건, 옵티마이저, WAL, 트랜잭션으로 따라간다. PostgreSQL·MySQL·Oracle·SQL Server의 자리와 한 대를 넘을 때 생기는 한계도 PostgreSQL 16 실행 계획과 함께 본다.
- 태그: Database, SQL, PostgreSQL, Transaction, Performance
- 키워드: 관계형 DB, RDBMS, 해시 조인
- 길이: 481줄
- 소제목: 미리 몰랐던 질문에 답하기 / 표와 키로 나눠 담는 이유 / 잘못된 데이터를 DB가 막는다 / 무엇을 원하는지만 쓰면 방법은 DB가 고른다 / 해시 조인을 손으로 따라가기 / 커밋이 끝났다는 건 로그가 디스크에 닿았다는 뜻 / 표 여러 개를 한 번에 바꾸는 트랜잭션 / PostgreSQL, MySQL, Oracle, SQL Server / 한 대를 넘어서면 어려워지는 것 / 다른 DB를 붙여도 원본은 여기에 둔다 / 기본값인 이유와 그 값 / 면접에서 나올 만한 질문
- 직접 링크 →: db-types-overview, db-modeling-normalization, sql-query-tuning, db-index, db-replication-sharding, db-transaction-isolation, sql-basics, db-type-newsql, db-type-columnar-olap, db-type-graph, db-type-wide-column, mongodb-document-model, caching-strategies, db-architecture-by-scale
- 키워드 백링크 →: db-type-time-series, db-type-key-value, sqld-top-n-hierarchical-pivot, scaling-horizontal-vertical, postgres-architecture, postgres-jsonb-search, db-partitioning, postgres-getting-started
- 이 글로 오는 글 ←: db-architecture-by-scale, db-type-columnar-olap, db-type-graph, db-type-key-value, db-type-time-series, db-type-wide-column, db-types-overview, mongodb-document-model, postgres-architecture, postgres-getting-started, postgres-operations, redis-basics, sqld-data-modeling

#### `db-type-time-series` — 시계열 DB: 시간 순서로 쌓이는 데이터

- 요약: 페이지 조회와 서버 지표처럼 끝에만 붙는 데이터를 PostgreSQL 16에 쌓아 보며 BRIN, 시간 단위 파티션, 다운샘플링, 압축을 따라간다. TimescaleDB와 Prometheus가 같은 문제를 어떻게 자동화하는지, 카디널리티 폭발을 어떻게 막는지도 정리한다.
- 태그: Database, PostgreSQL, Performance, System Design
- 키워드: 시계열 DB, TimescaleDB, 다운샘플링, 카디널리티 폭발
- 길이: 598줄
- 소제목: 시간이 키가 되는 데이터 / 측정값 하나를 이루는 조각 / PostgreSQL에 그대로 쌓아 보기 / 시간 순서로 쌓이면 범위만 적어 둬도 된다 / 구간으로 묶어 읽기 / 오래된 데이터는 요약으로 바꾼다 / 기간 통째로 버리기 / 같은 시계열끼리 붙이면 잘 눌린다 / TimescaleDB는 PostgreSQL 안에서 같은 일을 한다 / Prometheus는 최근 몇 시간을 메모리에 둔다 / 레이블 하나가 시계열을 수백만 개로 만든다 / 어떤 시계열 저장소를 고를까 / 시계열 DB를 고르지 않아도 되는 경우 / 끝에 붙이고, 덩어리로 버린다 / 면접에서 나올 만한 질문
- 직접 링크 →: db-types-overview, db-index, db-type-columnar-olap, db-type-relational
- 키워드 백링크 →: metrics-types, db-partitioning, sqld-group-by-having, db-replication-sharding, http-status-codes, db-index-design
- 이 글로 오는 글 ←: db-architecture-by-scale, db-type-columnar-olap, db-type-graph, db-type-relational, db-type-wide-column, db-types-overview, metrics-types, network-monitoring, observability-basics

#### `db-type-wide-column` — 와이드 컬럼 DB: Cassandra와 쿼리 먼저 설계하기

- 요약: 쓰기가 서버 한 대를 넘는 조회 이벤트를 Cassandra에 담으며 파티션 키와 클러스터링 키, LSM 트리와 컴팩션, QUORUM 일관성, 툼스톤을 따라간다. 질문마다 테이블을 따로 만드는 이유와 맞지 않는 질문도 정리한다.
- 태그: Database, NoSQL, Distributed Systems, Scalability, Performance
- 키워드: 와이드 컬럼, Cassandra, LSM 트리, SSTable, 툼스톤
- 길이: 410줄
- 소제목: 쓰기가 한 대를 넘을 때 / 테이블보다 쿼리를 먼저 정한다 / 파티션 키는 노드를, 클러스터링 키는 순서를 / 쓰기는 덧붙이기만 한다 / 파일을 합쳐 읽기를 되찾는 컴팩션 / 몇 대가 대답해야 성공인가 / 지우는 것도 쓰기다 / Cassandra가 힘들어하는 질문 / 어디에 쓰이나 / 관계형 DB와 나눠 맡기 / 쓰기를 싸게 하고, 질문을 고정한다 / 면접에서 나올 만한 질문
- 직접 링크 →: db-type-key-value, db-type-columnar-olap, db-replication-sharding, db-consistency-cap, db-type-time-series, db-type-graph
- 키워드 백링크 →: db-sharding, db-type-relational, bloom-filter, db-index-pitfalls, db-partitioning, dns
- 이 글로 오는 글 ←: bloom-filter, consistent-hashing, crdt, db-architecture-by-scale, db-consistency-cap, db-sharding, db-type-embedded, db-type-graph, db-type-key-value, db-type-newsql, db-type-relational, db-types-overview, eventual-consistency, geohash, k8s-service-types, kafka-basics, merkle-tree, network-partitions

#### `db-types-overview` — DB 종류 한눈에: 데이터 모양과 읽는 방식으로 고르기

- 요약: 같은 주문 하나를 관계형, 키-값, 문서, 와이드 컬럼, 그래프, 시계열, 컬럼형으로 저장해 보면 DB마다 빠르게 답하는 질문이 다르다. 접근 패턴으로 종류를 고르는 법과 원본과 사본을 나누는 법을 정리하고 종류별 글로 이어 준다.
- 태그: Database, NoSQL, System Design, Architecture
- 키워드: DB 종류, 데이터 모델 비교, 원본과 사본
- 길이: 262줄
- 소제목: 같은 주문을 여러 모양으로 저장하기 / 무엇으로 찾는지가 먼저다 / 빠른 이유는 저마다 하나씩 / 질문 여섯 개로 서점의 저장소 고르기 / 원본에서 사본으로 흘러가는 길 / 시리즈 지도 / 모양과 질문을 먼저 적는다 / 면접에서 나올 만한 질문
- 직접 링크 →: db-architecture-by-scale, db-consistency-cap, db-type-relational, db-type-key-value, db-type-wide-column, db-type-graph, db-type-time-series, db-type-columnar-olap, db-type-newsql, db-type-embedded, mongodb-document-model, elasticsearch-inverted-index, vector-db, redis-basics, postgres-getting-started
- 키워드 백링크 →: db-index, scaling-horizontal-vertical
- 이 글로 오는 글 ←: db-consistency-cap, db-keys-denormalization, db-type-columnar-olap, db-type-embedded, db-type-key-value, db-type-newsql, db-type-relational, db-type-time-series, distributed-transactions-2pc, pattern-prototype

### Programming › Database › PostgreSQL (`programming/database/postgresql`)

#### `postgres-advanced-sql` — PostgreSQL다운 SQL: RETURNING, ON CONFLICT, MERGE, CTE

- 요약: 넣고 다시 조회하던 왕복과 조회 후 삽입의 경쟁을 RETURNING과 ON CONFLICT로 없애고, MERGE, 쓰기 CTE, CTE 인라인과 MATERIALIZED의 실행 계획 차이를 본다. 중복이 쌓인 테이블에 유니크 인덱스를 붙여 upsert로 바꾸는 과정도 따라간다.
- 태그: Database, PostgreSQL, SQL, Performance
- 키워드: ON CONFLICT, 쓰기 CTE, RETURNING
- 길이: 613줄
- 소제목: 예제로 쓸 작은 서점 / 넣은 행을 바로 돌려받는 RETURNING / 있으면 더하고 없으면 넣기 / 조회하고 넣으면 생기는 틈 / 원본 데이터와 맞춰 놓는 MERGE / WITH로 긴 쿼리를 문단처럼 나누기 / 한 문장으로 행을 옮기는 쓰기 CTE / CTE가 최적화를 막던 시절 / 유니크 인덱스 없이 쌓인 중복을 정리할 때 / 문장 하나로 끝내는 습관 / 면접에서 나올 만한 질문
- 직접 링크 →: postgres-reporting-sql, sql-basics, postgres-roles-security, db-transaction-isolation, sqld-top-n-hierarchical-pivot, postgres-functions-triggers
- 키워드 백링크 →: postgres-data-types, postgres-getting-started
- 이 글로 오는 글 ←: batch-processing, cron-jobs, db-architecture-by-scale, idempotency-key, optimistic-locking, postgres-functions-triggers, postgres-reporting-sql, race-conditions, saga-pattern, sql-insert-update-delete, webhooks

#### `postgres-architecture` — PostgreSQL 내부 구조: 프로세스, 공유 메모리, 페이지, WAL, 체크포인트

- 요약: 연결마다 생기는 backend 프로세스, shared_buffers와 OS 페이지 캐시, 8KB 페이지와 튜플 머리말, WAL과 체크포인트, 크래시 복구를 실제로 돌려 보며 따라간다. 램 64GB 서버에 shared_buffers 128MB가 왜 생각만큼 느리지 않은지도 숫자로 본다.
- 태그: Database, PostgreSQL, Performance, Linux
- 키워드: shared_buffers, full_page_writes, 체크포인트, TOAST, LSN
- 길이: 816줄
- 소제목: 연결 하나에 프로세스 하나 / 백그라운드에서 도는 프로세스들 / 함께 쓰는 메모리와 혼자 쓰는 메모리 / 같은 페이지가 두 번 캐시된다 / 데이터 디렉터리 들여다보기 / 8KB 페이지 한 장의 구조 / 페이지에 빈자리를 남기는 fillfactor / 큰 값은 TOAST로 따로 둔다 / 먼저 로그에 쓰고 나중에 파일에 쓴다 / LSN은 WAL 안의 바이트 주소다 / 체크포인트 직후의 첫 수정은 페이지 통째로 / 체크포인트가 하는 일 / 서버가 죽었다 다시 뜰 때 / fsync와 synchronous_commit / 다시 64GB 서버로 / 면접에서 나올 만한 질문
- 직접 링크 →: postgres-getting-started, postgres-jsonb-search, sql-query-tuning, postgres-operations, postgres-mvcc-vacuum, db-index, db-transaction-isolation, db-replication-sharding
- 키워드 백링크 →: postgres-connections-pg-hba, db-architecture-by-scale, db-type-relational
- 이 글로 오는 글 ←: batch-processing, cron-jobs, db-keys-denormalization, db-replication-sharding, db-type-embedded, db-type-relational, event-driven-architecture, eventual-consistency, lossy-counting, network-partitions, postgres-data-types, postgres-jsonb-search, postgres-mvcc-vacuum, postgres-operations, sql-query-rewrite

#### `postgres-connections-pg-hba` — PostgreSQL 접속 설정: 접속 URI, .pgpass, pg_hba.conf, 원격 접속

- 요약: 앱 서버에서 붙자 Connection refused, no pg_hba.conf entry, password authentication failed로 바뀌는 에러를 따라가며 접속 URI와 환경 변수, .pgpass, pg_hba.conf의 첫 줄 규칙, 원격 접속을 여는 순서를 정리한다. 접속 자리가 다 찼을 때 pg_stat_activity로 원인을 찾는 법도 본다.
- 태그: Database, PostgreSQL, Linux, Network, Security
- 키워드: pg_hba.conf, listen_addresses, 접속 URI
- 길이: 445줄
- 소제목: 접속 정보는 문자열 하나로 줄 수 있다 / pg_hba.conf는 위에서부터 첫 줄만 본다 / 에러 문구가 끊긴 단계를 알려 준다 / 들어오는 길은 맞는데 자리가 없을 때 / 접속 URI를 직접 나눠 보기 / 접속 하나가 지나는 문 세 개 / 면접에서 나올 만한 질문
- 직접 링크 →: postgres-getting-started, postgres-roles-security
- 키워드 백링크 →: db-architecture-by-scale, encryption-in-transit, postgres-operations, security-groups-nacl, sql-batch-timeout-pool, ipv6-basics, layer-ip-addressing
- 이 글로 오는 글 ←: connection-pool, postgres-architecture, postgres-getting-started, postgres-roles-security

#### `postgres-data-types` — 타입을 잘 고르면 절반은 끝난다: 숫자, 문자열, 시간, UUID, 배열, enum, range

- 요약: 돈을 float로 저장해 생긴 오차와 9시간 밀린 주문 시각에서 시작해, PostgreSQL 타입을 언제 무엇으로 고르는지 정리한다. identity와 serial, timestamptz, UUID v7, enum, 범위 타입과 배제 제약까지 다룬다.
- 태그: Database, PostgreSQL, SQL, Performance
- 키워드: timestamptz, UUID v7, 배제 제약, identity 컬럼, tstzrange
- 길이: 780줄
- 소제목: 0.1을 열 번 더하면 1이 아니다 / 정수는 범위를 넘으면 에러가 난다 / varchar(n)이 text보다 빠르지 않다 / 오전 9시 주문이 오후 6시로 보인다 / UUID 키는 순서가 있어야 인덱스가 편하다 / 배열은 편하지만 관계를 대신하지 않는다 / 주문 상태를 담는 세 가지 방법 / 같은 방을 두 번 예약하지 못하게 / 도메인, NULL, 기본값, 형 변환 / 타입마다 몇 바이트를 쓰나 / 컬럼을 만들 때 묻는 것들 / 면접에서 나올 만한 질문
- 직접 링크 →: postgres-getting-started, db-index, postgres-jsonb-search, sql-basics
- 키워드 백링크 →: race-conditions, sql-select-where-null, postgres-architecture
- 이 글로 오는 글 ←: postgres-advanced-sql, postgres-functions-triggers, postgres-getting-started, postgres-roles-security, sqld-data-modeling

#### `postgres-functions-triggers` — 함수, 프로시저, 트리거: PL/pgSQL로 DB 안에 로직 두기

- 요약: 서비스 하나가 updated_at을 빠뜨린 일에서 출발해 SQL 함수와 PL/pgSQL, 변동성이 실행 계획에 주는 영향, 예외 처리, 커밋하는 프로시저, 트리거 순서와 감사 로그, 전이 테이블, SECURITY DEFINER의 search_path 함정, LISTEN/NOTIFY까지 실제로 돌려 본다.
- 태그: Database, PostgreSQL, SQL, Security, Performance
- 키워드: PL/pgSQL, SECURITY DEFINER, LISTEN/NOTIFY, 전이 테이블
- 길이: 852줄
- 소제목: updated_at이 멈춰 있는 책 / SQL로 쓰는 함수와 plpgsql로 쓰는 함수 / 함수에 붙이는 약속, 변동성 / 실패를 붙잡는 EXCEPTION 블록 / 트랜잭션을 나눠 커밋하는 프로시저 / 테이블이 바뀔 때 끼어드는 트리거 / 누가 무엇을 바꿨는지 남기는 감사 로그 / 트리거가 실행되는 순서 / 행 20만 개를 고칠 때 트리거가 치르는 값 / 커밋할 때 검사하는 제약 트리거 / 트리거가 만드는 함정 / 만든 사람 권한으로 도는 SECURITY DEFINER / 바뀌었다고 알려 주는 LISTEN과 NOTIFY / 로직을 DB에 둘까 애플리케이션에 둘까 / DB 안에 둔 코드도 코드다 / 면접에서 나올 만한 질문
- 직접 링크 →: postgres-advanced-sql, db-transaction-isolation, postgres-roles-security, db-architecture-by-scale, postgres-jsonb-search
- 키워드 백링크 →: sql-select-where-null, db-index, json-crud-http, postgres-getting-started, db-migration-tools, sql-basics, db-locking-deadlock, db-index-design, postgres-data-types
- 이 글로 오는 글 ←: postgres-advanced-sql, postgres-jsonb-search, postgres-reporting-sql, postgres-roles-security

#### `postgres-getting-started` — PostgreSQL 설치하고 접속하기: psql, 데이터베이스, 스키마

- 요약: Ubuntu에 설치한 직후 만나는 role does not exist 에러에서 시작해 peer 인증, 클러스터·데이터베이스·스키마 구조, search_path, psql 사용법을 정리한다. 시리즈 내내 쓸 서점 DB도 이 글에서 만든다.
- 태그: Database, PostgreSQL, SQL, Linux
- 키워드: psql, search_path, peer 인증
- 길이: 624줄
- 소제목: PostgreSQL을 고르는 이유 / apt로 설치하고 서버가 떴는지 확인하기 / psql이 내 리눅스 이름을 들고 가는 이유 / 내 이름으로 역할과 데이터베이스 만들기 / 클러스터, 데이터베이스, 스키마, 테이블 / 시리즈에서 계속 쓸 서점 DB / psql에서 매일 쓰는 명령 / 현장에서 relation does not exist를 만나는 순간 / 처음 에러를 다시 읽으면 / 면접에서 나올 만한 질문
- 직접 링크 →: postgres-connections-pg-hba, sql-basics, postgres-data-types, postgres-roles-security
- 키워드 백링크 →: db-migration-tools, db-type-relational
- 이 글로 오는 글 ←: connection-pool, db-locking-deadlock, db-transaction-isolation, db-type-newsql, db-type-relational, db-types-overview, distributed-transactions-2pc, network-partitions, optimistic-locking, pessimistic-locking, ports-and-sockets, postgres-advanced-sql, postgres-architecture, postgres-connections-pg-hba, postgres-data-types, postgres-functions-triggers, postgres-operations, postgres-reporting-sql, postgres-roles-security, security-groups-nacl, sql-basics, sql-batch-timeout-pool, sql-insert-update-delete, sql-select-where-null, sqld-null-functions, sqld-single-row-functions, timeouts

#### `postgres-jsonb-search` — JSONB와 전문 검색: GIN, tsvector, pg_trgm

- 요약: 카테고리마다 다른 상품 속성을 jsonb에 담고 GIN과 식 인덱스로 찾은 뒤, LIKE 검색을 tsvector 전문 검색과 pg_trgm으로 바꾼다. 한국어에서 막히는 지점과 검색 엔진으로 넘어갈 신호도 짚는다.
- 태그: Database, PostgreSQL, SQL, Search, Performance
- 키워드: JSONB, pg_trgm, tsvector, jsonb_path_ops
- 길이: 818줄
- 소제목: 카테고리마다 속성이 다른 상품 / json과 jsonb는 저장 방식이 다르다 / 화살표로 꺼내고 포함 연산자로 찾기 / 일부만 고치는 jsonb_set과 JSON 경로 / 10만 개에서 포함 검색을 빠르게 하는 GIN / jsonb_ops와 jsonb_path_ops / 자주 찾는 키는 식 인덱스로 / jsonb에 넣을 것과 컬럼으로 뺄 것 / LIKE 대신 전문 검색 / 한국어는 어디서 막히나 / 세 글자씩 잘라 비교하는 pg_trgm / 오타도 찾는 similarity / 무엇으로 찾을지 고르기 / 조각을 쪼개 두는 방식이 결국 같다 / 면접에서 나올 만한 질문
- 직접 링크 →: postgres-functions-triggers, db-index, elasticsearch-inverted-index, postgres-architecture
- 키워드 백링크 →: webhooks, db-index-design
- 이 글로 오는 글 ←: db-architecture-by-scale, db-type-key-value, db-type-relational, postgres-architecture, postgres-data-types, postgres-functions-triggers

#### `postgres-mvcc-vacuum` — VACUUM과 autovacuum: 죽은 튜플, 부풀림, XID 랩어라운드

- 요약: 100만 건 UPDATE 뒤 테이블이 두 배가 되는 이유부터 VACUUM과 VACUUM FULL의 잠금 차이, HOT 업데이트, autovacuum 기준식, VACUUM을 막는 트랜잭션과 슬롯, XID 랩어라운드와 얼리기까지 실제 출력으로 본다.
- 태그: Database, PostgreSQL, Performance, SQL
- 키워드: autovacuum, VACUUM FULL, HOT 업데이트, XID 랩어라운드, visibility map
- 길이: 852줄
- 소제목: UPDATE 한 번이 남기는 것 / 읽기만 했는데 페이지를 고친다 / VACUUM은 자리를 비울 뿐 파일을 줄이지 않는다 / VACUUM FULL은 테이블을 잠근다 / 잠그지 않고 줄이는 방법 / visibility map이 하는 일 / 인덱스를 건드리지 않는 HOT 업데이트 / autovacuum은 언제 도는가 / 테이블마다 기준을 다르게 / VACUUM을 막는 것들 / 얼마나 부풀었는지 재기 / 32비트 트랜잭션 번호가 한 바퀴 돌면 / 얼리기와 랩어라운드 방지 VACUUM / 통계가 낡으면 계획이 틀린다 / 다시 처음 장면으로 / 면접에서 나올 만한 질문
- 직접 링크 →: db-transaction-isolation, postgres-architecture, db-replication-sharding, db-index, sql-query-tuning, postgres-operations
- 키워드 백링크 →: db-index-design, distributed-transactions-2pc
- 이 글로 오는 글 ←: batch-processing, connection-pool, db-architecture-by-scale, db-index, db-index-pitfalls, db-transaction-isolation, encryption-at-rest, message-queue-basics, postgres-architecture, postgres-operations, sql-batch-timeout-pool, zero-downtime-migrations

#### `postgres-operations` — PostgreSQL 운영: 설정 튜닝, 연결 풀, 모니터링, 백업과 PITR, 버전 업그레이드

- 요약: 처음 운영에 올리기 전에 정할 설정과 적용 시점, work_mem 예산 계산, 연결 풀, 매일 볼 지표, pg_dump와 pg_basebackup, WAL 보관으로 실수 직전 시점까지 되돌리는 PITR, 메이저 버전 업그레이드 방법을 직접 해 보며 정리한다.
- 태그: Database, PostgreSQL, Performance, Linux
- 키워드: pg_basebackup, 시점 복구, PITR, pg_upgrade, pg_dump
- 길이: 799줄
- 소제목: 설정은 어디에 쓰고 언제 적용되나 / 메모리 설정 정하기 / work_mem은 곱하기로 계산한다 / SSD라면 random_page_cost를 낮춘다 / max_connections를 올리는 대신 연결 풀 / 매일 보는 숫자들 / 느린 쿼리를 로그로 잡기 / 논리 백업과 복원 / 물리 백업과 WAL 보관 / WHERE 없는 DELETE 3초 전으로 / 백업은 복원해 봐야 백업이다 / 백업 도구와 PostgreSQL 17의 증분 백업 / 메이저 버전 올리기 / 마이너 업데이트 / 관리형 서비스를 쓴다면 / 운영에 올리기 전 점검 / 면접에서 나올 만한 질문
- 직접 링크 →: postgres-architecture, postgres-mvcc-vacuum, sql-query-tuning, db-transaction-isolation, db-replication-sharding
- 키워드 백링크 →: db-index, pessimistic-locking, db-migration-tools, db-architecture-by-scale, linux-files-permissions, db-type-relational, postgres-getting-started, sql-query-rewrite, sql-basics
- 이 글로 오는 글 ←: connection-pool, db-architecture-by-scale, docker-network-volume, postgres-architecture, postgres-connections-pg-hba, postgres-mvcc-vacuum, rollback-strategy, sql-insert-update-delete

#### `postgres-reporting-sql` — PostgreSQL 리포트 쿼리: DISTINCT ON, FILTER, generate_series, 머티리얼라이즈드 뷰, COPY, LATERAL

- 요약: 회원별 마지막 주문, 빈 날을 0으로 채운 일별 매출, 미리 계산해 둔 집계, 50만 건 적재, 회원별 최근 3건을 PostgreSQL 문법과 실행 계획으로 만든다. REFRESH가 대시보드를 막는 장애와 COPY가 한 줄 때문에 실패하는 경우도 재현해 본다.
- 태그: Database, PostgreSQL, SQL, Performance
- 키워드: LATERAL, DISTINCT ON, 머티리얼라이즈드 뷰, generate_series
- 길이: 579줄
- 소제목: 앞 글에서 이어지는 서점 데이터 / 그룹마다 한 줄만 남기는 DISTINCT ON / 조건별 집계와 묶어 붙이기 / 주문이 없는 날도 0으로 채우는 리포트 / 계산해서 저장하는 generated column / 이름 붙인 쿼리와 저장해 둔 결과 / 50만 건을 한 번에 넣는 COPY / 사용자마다 최근 주문 세 건 / 대시보드가 멈췄는데 DB는 한가할 때 / 읽는 양을 줄이는 쪽으로 / 면접에서 나올 만한 질문
- 직접 링크 →: postgres-advanced-sql, postgres-functions-triggers, caching-strategies, sqld-window-functions, db-index
- 키워드 백링크 →: sqld-group-by-having, postgres-getting-started, sql-query-rewrite
- 이 글로 오는 글 ←: db-keys-denormalization, db-type-columnar-olap, postgres-advanced-sql, sqld-rollup-cube-grouping-sets

#### `postgres-roles-security` — 역할과 권한: 로그인부터 행 단위 보안(RLS)까지

- 요약: 앱 계정이 운영 테이블을 DROP할 수 있는 상태에서 시작해 역할, GRANT와 기본 권한, 최소 권한 구성, SCRAM과 TLS, 행 단위 보안으로 서점마다 자기 주문만 보게 하는 방법을 정리한다.
- 태그: Database, PostgreSQL, Security, SQL
- 키워드: 행 단위 보안, Row Level Security, ALTER DEFAULT PRIVILEGES, scram-sha-256, SET ROLE
- 길이: 809줄
- 소제목: 역할 하나가 사용자이자 그룹이다 / 쿼리 하나가 지나는 검사들 / 주인, 마이그레이션, 앱, 분석 역할로 나누기 / 비밀번호는 SCRAM으로 저장한다 / pg_hba.conf와 TLS로 들어오는 길 좁히기 / 서점마다 자기 주문만 보게 하기 / 누가 언제 들어왔는지 남기기 / SQL 인젝션은 권한보다 앞에서 막는다 / pg_hba 줄 고르기를 직접 구현해 보기 / 앱 계정이 할 수 있는 일 / 면접에서 나올 만한 질문
- 직접 링크 →: postgres-getting-started, postgres-functions-triggers, postgres-connections-pg-hba
- 키워드 백링크 →: postgres-data-types, db-architecture-by-scale, sql-insert-update-delete, db-index-design, sql-batch-timeout-pool, ipv6-basics, layer-ip-addressing, dns
- 이 글로 오는 글 ←: connection-pool, postgres-advanced-sql, postgres-connections-pg-hba, postgres-functions-triggers, postgres-getting-started

### Programming › Database › Redis (`programming/database/redis`)

#### `redis-basics` — Redis는 왜 빠른가: 메모리, 단일 스레드, 자료구조

- 요약: Redis가 빠른 이유와 느린 명령 하나가 서버 전체를 멈추는 이유는 같은 곳에 있다. 메모리와 단일 스레드 이벤트 루프 구조를 보고, Ubuntu에 설치해 자료구조별 명령을 직접 실행해 본다.
- 태그: Redis, Database, NoSQL, Cache, Performance
- 키워드: Redis, Memcached, I/O 다중화, 분산 락
- 길이: 881줄
- 소제목: 80ms와 1ms 사이에 있는 것 / 명령은 한 줄로 서서 하나씩 실행된다 / 느린 명령 하나가 모두를 세운다 / Redis 6의 I/O 스레드는 무엇을 나눠 맡나 / Ubuntu에 설치하고 접속하기 / 밖에서 접속하게 열 때 막아야 할 것 / 키 이름은 콜론으로 나눈다 / 문자열: 값, 카운터, 락 / 해시: 객체 하나를 필드로 나눠 담기 / 리스트: 들어온 순서대로 꺼내는 큐 / 셋과 정렬된 셋: 중복 없는 모음과 순위표 / 놓치지 않는 스트림, 흘려보내는 채널 / 만료 시간을 다루는 명령 / KEYS 대신 SCAN / 여러 명령을 묶는 세 가지 방법 / 응용 로그에 Redis 타임아웃이 찍히면 / Memcached와 무엇이 다른가 / 주 저장소로 쓰기 전에 따져 볼 것 / 라이선스가 바뀐 이야기 / 빠른 이유와 멈추는 이유는 같은 곳에 있다 / 면접에서 나올 만한 질문
- 직접 링크 →: message-queue-basics, redis-memory-eviction, network-troubleshooting-by-layer, event-loop, redis-persistence-ha, caching-strategies
- 키워드 백링크 →: redis-cluster, distributed-lock, pub-sub, db-type-relational, kafka-basics, db-transaction-isolation, dns
- 이 글로 오는 글 ←: batch-processing, bloom-filter, blue-green-deployment, caching-strategies, circuit-breaker, clock-skew, consistent-hashing, cookie-session-login, count-min-sketch, cron-jobs, db-architecture-by-scale, db-consistency-cap, db-sharding, db-type-key-value, db-types-overview, dead-letter-queue, distributed-lock, docker-compose, docker-network-volume, encryption-in-transit, exponential-backoff-jitter, feature-flags, gateway, geohash, helm-basics, helm-dependencies-oci-gitops, http-caching-cdn, hyperloglog, idempotency-key, k8s-service-types, load-balancer-basics, long-polling, lossy-counting, message-queue-basics, n-plus-one-queries, network-partitions, nginx-reverse-proxy, optimistic-locking, pattern-command, pattern-singleton, pattern-strategy, ports-and-sockets, pub-sub, race-conditions, rate-limiting-algorithms, rate-limiting-in-practice, realtime-communication, redis-cluster, redis-memory-eviction, redis-persistence-ha, redis-replication-sentinel, rendering-ssg-isr, rest-api-design, rollback-strategy, scaling-horizontal-vertical, service-discovery, tcp-reliability-congestion, vpc-subnets-route-tables, websocket-deep-dive

#### `redis-cluster` — Redis Cluster: 해시 슬롯, MOVED와 ASK

- 요약: 데이터가 한 서버 메모리를 넘어서는 순간에서 시작해 키가 16384개 슬롯으로 나뉘는 규칙과 해시 태그, MOVED와 ASK, 구성 고르는 기준을 보고, 레플리카 없는 클러스터의 노드 하나를 죽여 CLUSTERDOWN이 나는 과정을 확인한다.
- 태그: Redis, Database, Distributed Systems
- 키워드: Redis Cluster, 해시 슬롯, MOVED
- 길이: 358줄
- 소제목: Cluster는 키를 16384개 슬롯으로 나눈다 / MOVED와 ASK / 단일 서버부터 관리형 서비스까지 / 현장에서 노드 하나가 죽었을 때 / 데이터를 나누는 대가 / 면접에서 나올 만한 질문
- 직접 링크 →: redis-replication-sentinel, redis-basics
- 키워드 백링크 →: vpc-basics
- 이 글로 오는 글 ←: caching-strategies, consistent-hashing, db-sharding, distributed-lock, geohash, pub-sub, rate-limiting-algorithms, redis-basics, redis-persistence-ha, redis-replication-sentinel

#### `redis-memory-eviction` — Redis 메모리가 가득 차면: maxmemory와 축출 정책

- 요약: maxmemory를 정하지 않으면 OOM 킬러에게 죽고, 기본 noeviction이면 가득 찬 순간 쓰기가 실패한다. INFO memory를 읽는 법부터 축출 정책 고르기, 근사 LRU와 LFU의 동작, 만료와 단편화, 리눅스 설정과 여유 메모리 계산까지 정리한다.
- 태그: Redis, Database, Cache, Performance, Linux
- 키워드: maxmemory, 축출 정책, allkeys-lru, 메모리 단편화
- 길이: 752줄
- 소제목: 키 하나가 실제로 차지하는 크기 / 작은 컬렉션은 압축된 모양으로 산다 / INFO memory를 한 줄씩 읽기 / 어떤 키가 메모리를 먹고 있나 / maxmemory를 정하지 않으면 생기는 일 / 가득 찼을 때 지울 키를 고르는 정책 / LRU를 정확하게 하지 않는 이유 / LFU 카운터는 로그로 오르고 시간이 지나면 내려간다 / 만료된 키가 바로 사라지지 않는 이유 / 단편화와 activedefrag / 리눅스 쪽에서 챙길 설정 / 서버 메모리의 몇 퍼센트를 maxmemory로 줄까 / 가득 차기 전에 정해 둘 것 / 면접에서 나올 만한 질문
- 직접 링크 →: redis-basics, caching-strategies, redis-persistence-ha
- 키워드 백링크 →: layer-mtu-fragmentation, dns
- 이 글로 오는 글 ←: caching-strategies, count-min-sketch, db-type-key-value, js-memory-leak, message-queue-basics, redis-basics, redis-persistence-ha, redis-replication-sentinel

#### `redis-persistence-ha` — Redis 영속성: RDB, AOF, 백업과 복원

- 요약: 재부팅 한 번에 세션이 사라진 서버에서 시작해 RDB와 AOF가 각각 무엇을 지키고 무엇을 잃는지, fork와 copy-on-write, AOF 재작성, 둘을 함께 켤 때를 직접 돌려 보고, 백업 파일로 정말 복원되는지 확인하는 법까지 정리한다.
- 태그: Redis, Database, Linux
- 키워드: RDB 스냅샷, AOF, appendfsync
- 길이: 415줄
- 소제목: 재시작하면 무엇을 읽어 오나 / RDB는 특정 순간의 사진이다 / fork와 copy-on-write / AOF는 쓰기 명령을 한 줄씩 적는다 / AOF가 커지면 다시 쓴다 / RDB와 AOF를 함께 켜면 / 백업은 복원해 봐야 백업이다 / 무엇을 잃어도 되는지부터 정한다 / 면접에서 나올 만한 질문
- 직접 링크 →: redis-replication-sentinel, redis-cluster, redis-basics, redis-memory-eviction
- 키워드 백링크 →: dns
- 이 글로 오는 글 ←: caching-strategies, db-type-key-value, docker-compose, message-queue-basics, redis-basics, redis-memory-eviction, redis-replication-sentinel

#### `redis-replication-sentinel` — Redis 복제와 Sentinel: 비동기 복제와 자동 장애 조치

- 요약: 디스크는 살아 있는데 서버가 꺼져 40분 동안 로그인이 안 된 장면에서 시작해 전체·부분 동기화, 레플리카 읽기와 WAIT, Sentinel의 쿼럼과 리더 선출을 따라가고, backlog가 작아 전체 동기화가 반복되는 상황을 직접 재현한다.
- 태그: Redis, Database, Distributed Systems
- 키워드: Redis Sentinel, 부분 동기화, repl-backlog-size
- 길이: 345줄
- 소제목: 복제는 비동기다 / 레플리카에서 읽으면 생기는 일 / Sentinel이 장애를 판단하고 넘기는 과정 / 현장에서 레플리카가 전체 동기화를 반복하는 순간 / 얼마나 멈춰도 되는지부터 정한다 / 면접에서 나올 만한 질문
- 직접 링크 →: redis-persistence-ha, redis-basics, redis-cluster, redis-memory-eviction
- 키워드 백링크 →: leader-election
- 이 글로 오는 글 ←: db-consistency-cap, redis-cluster, redis-persistence-ha

### Programming › Database › SQL (`programming/database/sql`)

#### `connection-pool` — 커넥션 풀 깊이 보기: 연결 비용, 풀 크기, 고갈과 누수, PgBouncer가 깨뜨리는 것

- 요약: 연결 하나가 얼마나 비싼지 재 보고, 리틀의 법칙과 pgbench로 풀 크기의 정점을 찾는다. 풀 고갈과 누수의 증상, PgBouncer transaction 모드에서 실제로 깨지는 SET·advisory lock·prepared statement, 서버리스와 배포 때의 max_connections 계산까지 다룬다.
- 태그: Database, PostgreSQL, Performance, SQL, Node.js
- 키워드: 커넥션 누수, 풀 고갈, max_prepared_statements
- 길이: 558줄
- 소제목: 연결 하나를 여는 데 드는 것 / 풀은 빌려주고 돌려받는 줄이다 / 풀 크기는 얼마로 / 돌려주지 않은 연결 / 앱 밖에 두는 풀, PgBouncer / transaction 모드가 깨뜨리는 것 / max_connections 계산서 / 서버리스와 장애 조치 때 몰려오는 연결 / 풀이 의심될 때 보는 순서 / 숫자를 넣어 계산해 보기 / 연결은 늘리는 게 아니라 나눠 쓰는 것 / 면접에서 나올 만한 질문
- 직접 링크 →: sql-batch-timeout-pool, postgres-operations, circuit-breaker, distributed-lock, postgres-connections-pg-hba
- 키워드 백링크 →: pessimistic-locking, postgres-roles-security, postgres-mvcc-vacuum, db-migration-tools, db-architecture-by-scale, encryption-in-transit, https-tls, autoscaling, latency-bandwidth-throughput, db-replication-sharding, rolling-deployment, backpressure, postgres-getting-started, vpc-basics
- 이 글로 오는 글 ←: backpressure, circuit-breaker, deadlocks, latency-bandwidth-throughput, n-plus-one-queries, network-monitoring, pessimistic-locking, sql-batch-timeout-pool, thread-safety, vpc-subnets-route-tables

#### `db-index` — 인덱스: 책 뒤의 찾아보기

- 요약: 주문 100만 건에서 느려진 조회를 PostgreSQL 16의 실행 계획으로 따라가며 B-tree 인덱스가 어떻게 찾는지, Index Scan·Bitmap Heap Scan·Index Only Scan이 언제 갈리는지, MySQL InnoDB의 클러스터드 인덱스는 무엇이 다른지 본다. 현장에서 인덱스가 필요한 테이블을 찾는 순서도 정리한다.
- 태그: Database, SQL, PostgreSQL, Index, Performance
- 키워드: Index Only Scan, B-tree 인덱스, Bitmap Heap Scan, 클러스터드 인덱스
- 길이: 615줄
- 소제목: 실험에 쓸 작은 쇼핑몰 / 100만 줄을 처음부터 끝까지 읽는 계획 / 찾아보기를 하나 만들면 / B-tree는 세 번 만에 잎에 닿는다 / 같은 인덱스를 읽는 네 가지 방법 / MySQL 8은 표 자체가 인덱스다 / 현장에서 인덱스가 필요한 곳을 찾는 순서 / 찾아보기는 정렬된 사본이다 / 면접에서 나올 만한 질문
- 직접 링크 →: db-index-pitfalls, sql-query-tuning, db-index-design
- 키워드 백링크 →: postgres-mvcc-vacuum, db-sharding, db-transaction-isolation, sql-basics
- 이 글로 오는 글 ←: db-architecture-by-scale, db-index-design, db-index-pitfalls, db-keys-denormalization, db-modeling-normalization, db-replication-sharding, db-sharding, db-type-graph, db-type-relational, db-type-time-series, db-types-overview, distributed-tracing, elasticsearch-inverted-index, geohash, postgres-architecture, postgres-data-types, postgres-functions-triggers, postgres-jsonb-search, postgres-mvcc-vacuum, postgres-operations, postgres-reporting-sql, sql-basics, sql-batch-timeout-pool, sql-query-rewrite, sql-query-tuning, sql-select-where-null, sqld-correlated-subquery, sqld-data-modeling, sqld-top-n-hierarchical-pivot, sqld-type-conversion

#### `db-index-design` — 인덱스 고르기: 복합, 커버링, 부분, 식 인덱스와 GIN·BRIN

- 요약: 쿼리 모양에 맞는 인덱스를 고른다. 복합 인덱스의 컬럼 순서, INCLUDE로 힙을 건너뛰는 커버링 인덱스, 일부 행만 담는 부분 인덱스, lower(email) 식 인덱스, GIN과 BRIN을 실행 계획 전후로 비교하고, 겹치는 인덱스와 값 분포를 확인하는 리뷰 순서도 정리한다.
- 태그: Database, SQL, PostgreSQL, Index, Performance
- 키워드: 복합 인덱스, 커버링 인덱스, 부분 인덱스, 식 인덱스, BRIN
- 길이: 593줄
- 소제목: 앞 글의 주문 100만 건 그대로 / 여러 컬럼 인덱스는 순서가 결과를 바꾼다 / 표까지 가지 않는 커버링 인덱스 / 일부 줄만 담는 부분 인덱스 / 함수를 씌운 컬럼과 유니크 인덱스 / B-tree가 아닌 인덱스들 / 인덱스를 하나 더 만들자는 리뷰를 받았을 때 / 쿼리 모양에 맞춰 고른다 / 면접에서 나올 만한 질문
- 직접 링크 →: db-index, db-index-pitfalls
- 키워드 백링크 →: quadtree
- 이 글로 오는 글 ←: api-pagination-sorting, db-index, db-index-pitfalls, db-keys-denormalization, db-modeling-normalization, db-type-columnar-olap, db-type-time-series, geohash, message-queue-basics, microservices, mongodb-document-model, postgres-functions-triggers, postgres-jsonb-search, postgres-mvcc-vacuum, postgres-roles-security, rest-api-design, sql-query-rewrite, vector-db

#### `db-index-pitfalls` — 인덱스가 안 타는 이유와 인덱스의 대가

- 요약: 인덱스가 있는데도 Seq Scan이 나오는 여섯 가지 경우(함수, 형 변환, 앞이 열린 LIKE, 너무 많은 결과, OR, 낡은 통계)를 실행 계획으로 확인한다. 쓰기 증폭과 HOT 업데이트, 안 쓰는 인덱스 찾기, 운영 중 CREATE INDEX CONCURRENTLY와 INVALID 인덱스 처리도 다룬다.
- 태그: Database, SQL, PostgreSQL, Index, Performance
- 키워드: CREATE INDEX CONCURRENTLY, 쓰기 증폭, INVALID 인덱스
- 길이: 467줄
- 소제목: 주문 100만 건과 인덱스 셋 / 인덱스가 있는데 안 타는 경우 / 인덱스는 쓰기를 느리게 한다 / 운영 중인 테이블에 인덱스 추가하기 / 인덱스를 지우고 만드는 것도 배포다 / 면접에서 나올 만한 질문
- 직접 링크 →: db-index, db-index-design, sql-query-tuning
- 키워드 백링크 →: postgres-mvcc-vacuum, db-migration-tools, db-replication-sharding, sql-basics
- 이 글로 오는 글 ←: db-index, db-index-design, db-migration-tools, db-type-embedded, db-type-wide-column, sql-basics, zero-downtime-migrations

#### `db-keys-denormalization` — 키와 반정규화: 대리 키, UUID, 일부러 다시 합치기

- 요약: 정규화한 테이블에서 자연 키와 대리 키, UUIDv4와 v7을 인덱스 크기로 비교하고, 주문 당시 가격이 중복이 아닌 이유를 본다. 트리거와 머티리얼라이즈드 뷰로 하는 반정규화, jsonb 열의 경계, EAV·쉼표 목록·소프트 삭제 같은 흔한 설계 실수도 정리한다.
- 태그: Database, SQL, PostgreSQL, SQLD
- 키워드: 반정규화, 대리 키, 부분 유니크 인덱스, 자연 키
- 길이: 476줄
- 소제목: 정규화를 마친 네 테이블 / 자연 키와 대리 키, 그리고 UUID / 주문 당시 가격은 중복이 아니다 / 일부러 다시 합칠 때 (반정규화) / JSONB 열은 어디까지 괜찮나 / 자주 보는 설계 실수 / SQLD에서 묻는 식별자와 반정규화 / 중복을 어디에 둘지 고르는 일 / 면접에서 나올 만한 질문
- 직접 링크 →: db-modeling-normalization, db-transaction-isolation
- 키워드 백링크 →: postgres-architecture, postgres-reporting-sql, db-index, db-sharding, db-index-design, db-types-overview, db-partitioning
- 이 글로 오는 글 ←: db-modeling-normalization, sqld-data-modeling, sqld-entity-attribute-relationship

#### `db-locking-deadlock` — 재고 -1 막기: 조건부 UPDATE, 잠금, 교착 상태

- 요약: 읽고 판단하고 쓰는 사이의 틈을 조건부 UPDATE, SELECT FOR UPDATE, 버전 열 낙관적 잠금, SERIALIZABLE과 재시도로 막는 방법을 같은 장면에서 비교한다. 잠금이 만드는 교착 상태, 오래 열린 트랜잭션 찾기, 서비스 여러 개에 걸친 작업과 SQLD 잠금 개념도 정리한다.
- 태그: Database, SQL, PostgreSQL, SQLD, Transaction, Concurrency
- 키워드: 교착 상태, 낙관적 잠금, 비관적 잠금
- 길이: 461줄
- 소제목: 계좌, 상품, 주문 세 테이블 / 재고가 음수가 되지 않게 막는 방법들 / 서로 기다리다 멈추는 교착 상태 / 오래 열린 트랜잭션이 남기는 것 / 서비스 여러 개에 걸친 트랜잭션 / SQLD에서 묻는 잠금과 교착 상태 / 틈을 없애거나, 틈을 알아채거나 / 면접에서 나올 만한 질문
- 직접 링크 →: db-transaction-isolation, deadlocks, microservices
- 키워드 백링크 →: sql-basics, saga-pattern, event-driven-architecture, distributed-transactions-2pc, sql-batch-timeout-pool, postgres-getting-started
- 이 글로 오는 글 ←: batch-processing, db-transaction-isolation, deadlocks, distributed-lock, http-status-codes, message-queue-basics, mvc-pattern, optimistic-locking, pattern-state, pessimistic-locking, postgres-functions-triggers, race-conditions, rest-api-design, saga-pattern

#### `db-migration-tools` — 마이그레이션 도구: 기록 표, 잠금, 체크섬, 실패한 마이그레이션 되살리기

- 요약: Flyway, knex, node-pg-migrate, golang-migrate를 PostgreSQL 16에서 돌려 기록 표와 잠금이 하는 일을 본다. 파드 여러 개의 동시 실행, 중간에 죽은 마이그레이션의 잔재, 적용한 파일을 고치면 막히는 이유, down 대신 roll forward를 쓰는 이유를 다룬다.
- 태그: Database, PostgreSQL, SQL, DevOps, Troubleshooting
- 키워드: Flyway, 마이그레이션 도구, flyway_schema_history, schema_migrations
- 길이: 479줄
- 소제목: 내 DB에만 있는 컬럼 / 파일 하나가 버전 하나다 / migrate 한 번에 일어나는 일 / 파드 세 개가 동시에 migrate를 부르면 / 실행하다 죽으면 무엇이 남나 / Flyway가 스스로를 기다린 날 / 적용한 파일은 고치지 않는다 / down 파일은 운영의 되돌리기 버튼이 아니다 / 도구를 고를 때 보는 것 / 언제, 어디서 돌리나 / 스키마도 코드처럼 리뷰한다 / 면접에서 나올 만한 질문
- 직접 링크 →: zero-downtime-migrations, schema-versioning, db-architecture-by-scale, db-index-pitfalls
- 키워드 백링크 →: pessimistic-locking, k8s-pod-probes, k8s-deploy-pipeline-eks, rolling-deployment, sql-basics
- 이 글로 오는 글 ←: connection-pool, db-architecture-by-scale, db-index-pitfalls, k8s-pod-lifecycle, postgres-functions-triggers, postgres-getting-started, postgres-operations, rollback-strategy, schema-versioning, zero-downtime-migrations

#### `db-modeling-normalization` — 테이블을 어떻게 나누나: 정규화

- 요약: 전화번호 하나 바꾸는 데 300줄을 고쳐야 하는 테이블에서 시작해, 함수 종속을 기준으로 1NF부터 BCNF까지 나눠 보고, 나눈 테이블을 제약 조건으로 지키는 법을 실제 SQL로 따라간다.
- 태그: Database, SQL, PostgreSQL, SQLD
- 키워드: 정규화, 함수 종속, BCNF
- 길이: 683줄
- 소제목: 한 테이블에 다 넣었을 때 생기는 일 / 무엇이 무엇을 정하나 (함수 종속) / 행을 하나로 집어내는 열 (키) / 제1정규형: 칸 하나에 값 하나 / 제2정규형: 키의 일부에만 기대는 열 떼어 내기 / 제3정규형: 키가 아닌 열을 거쳐 정해지는 열 / 제약 조건이 대신 막아 주는 것 / BCNF: 결정자가 모두 후보키여야 한다 / 제4정규형과 제5정규형은 짧게 / SQLD에서 묻는 정규화 / 무엇이 무엇을 정하나만 따라가면 된다 / 면접에서 나올 만한 질문
- 직접 링크 →: db-keys-denormalization, db-index, db-transaction-isolation
- 키워드 백링크 →: json-crud-http, db-index-design, sqld-entity-attribute-relationship
- 이 글로 오는 글 ←: ab-testing, db-architecture-by-scale, db-keys-denormalization, db-type-relational, elasticsearch-inverted-index, encryption-at-rest, git-ignore-config, git-large-files-secrets, http-message, idempotency-key, ids-ips, lossy-counting, mongodb-document-model, nginx-basics, ray-casting, rendering-ssr, sqld-data-modeling, sqld-entity-attribute-relationship, vector-db, waf

#### `db-transaction-isolation` — 트랜잭션과 격리 수준: 동시에 고치면 생기는 일

- 요약: 마지막 재고 1개를 두 사람이 동시에 사서 재고가 -1이 되는 장면을 두 세션으로 재현하고, ACID와 다섯 가지 동시성 현상, 격리 수준이 실제로 무엇을 막는지, MVCC가 버전을 어떻게 고르는지를 PostgreSQL과 MySQL을 나란히 놓고 본다.
- 태그: Database, SQL, PostgreSQL, SQLD, Transaction, Concurrency
- 키워드: 격리 수준, MVCC, 갱신 손실, 쓰기 왜곡
- 길이: 679줄
- 소제목: 마지막 1개를 둘이 샀다 / 트랜잭션이 약속하는 네 가지 / BEGIN, COMMIT, ROLLBACK, SAVEPOINT / 동시에 고치면 생기는 다섯 가지 일 / 격리 수준 네 단계와 실제 동작 / 버전을 남겨서 읽기와 쓰기를 떼어 놓기 (MVCC) / MySQL InnoDB는 어떻게 다른가 / SQLD에서 묻는 트랜잭션과 격리 수준 / 격리 수준은 무엇을 허용하느냐의 문제다 / 면접에서 나올 만한 질문
- 직접 링크 →: db-locking-deadlock
- 키워드 백링크 →: postgres-mvcc-vacuum, sql-basics, bloom-filter, postgres-getting-started
- 이 글로 오는 글 ←: db-architecture-by-scale, db-consistency-cap, db-index, db-keys-denormalization, db-locking-deadlock, db-modeling-normalization, db-type-newsql, db-type-relational, message-delivery-semantics, optimistic-locking, pessimistic-locking, postgres-advanced-sql, postgres-architecture, postgres-functions-triggers, postgres-mvcc-vacuum, postgres-operations, race-conditions, redis-basics, saga-pattern, sql-insert-update-delete, sql-query-rewrite

#### `n-plus-one-queries` — N+1 쿼리 깊이 보기: ORM 지연 로딩, 즉시 로딩, DataLoader

- 요약: ORM이 언제 쿼리를 몰래 보내는지 Sequelize로 101개 쿼리를 재현하고, JOIN과 IN 중 무엇을 고를지, GraphQL 리졸버의 N+1을 DataLoader로 묶는 법, pg_stat_statements와 쿼리 수 테스트로 운영에서 찾고 막는 법을 다룬다.
- 태그: Database, SQL, PostgreSQL, Performance, Node.js
- 키워드: DataLoader, 즉시 로딩, eager loading
- 길이: 465줄
- 소제목: 화면은 그대로인데 쿼리가 101개 / ORM은 객체에 손을 댈 때 쿼리를 보낸다 / 관계가 깊어지면 숫자가 곱해진다 / 가까운 DB에서는 안 보이는 이유 / 미리 가져오는 두 가지 방법 / ORM마다 이름만 다르다 / 필드마다 함수가 도는 GraphQL / DataLoader를 잘못 쓰면 생기는 일 / 운영 중인 서비스에서 N+1 찾기 / 반복문 바깥에서 한 번에 묻기 / 면접에서 나올 만한 질문
- 직접 링크 →: sql-query-rewrite, sql-query-tuning, connection-pool, pattern-proxy, latency-bandwidth-throughput, caching-strategies, distributed-tracing
- 키워드 백링크 →: event-loop, db-architecture-by-scale, vpc-basics, loading-patterns, sql-batch-timeout-pool, redis-basics
- 이 글로 오는 글 ←: rest-api-design, sql-query-rewrite

#### `optimistic-locking` — 낙관적 잠금: 버전으로 덮어쓰기를 알아채기

- 요약: 잠그지 않고 쓰는 순간에 버전을 확인해 덮어쓰기를 알아채는 방법이다. 버전으로 무엇을 쓸지, 0행이 오면 무엇을 할지, 충돌이 잦으면 왜 무너지는지, ETag와 If-Match로 브라우저까지 버전을 들고 가는 법을 실제 출력으로 본다.
- 태그: Database, PostgreSQL, SQL, Concurrency, Transaction, HTTP
- 키워드: If-Match, 버전 컬럼, @Version
- 길이: 603줄
- 소제목: 나중에 저장한 사람이 이긴다 / 버전 번호 하나로 덮어쓰기를 알아챈다 / UPDATE 0이 오면 무엇을 하나 / 잠그지 않는다더니 기다렸다 / 버전 숫자 대신 쓸 수 있는 것들 / 충돌이 잦으면 재시도가 일을 잡아먹는다 / 브라우저까지 버전을 들고 가기 / 다른 저장소에도 같은 모양이 있다 / 현장에서 덮어쓰기를 찾는 법 / 버전은 확인을 쓰기 안으로 넣는 장치다 / 면접에서 나올 만한 질문
- 직접 링크 →: db-locking-deadlock, db-transaction-isolation, resilience-patterns, pessimistic-locking, http-caching-cdn, http-status-codes
- 키워드 백링크 →: k8s-configmap, postgres-advanced-sql, db-type-key-value, sql-basics, mongodb-document-model, redis-basics, postgres-getting-started
- 이 글로 오는 글 ←: distributed-lock, encryption-at-rest, event-driven-architecture, json-crud-http, pattern-state, pessimistic-locking, race-conditions, rest-api-design, saga-pattern

#### `pessimistic-locking` — 비관적 잠금: FOR UPDATE가 세우는 줄

- 요약: 읽는 순간부터 행을 붙잡는 잠금이 PostgreSQL 안에서 어디에 적히고 누가 누구를 기다리는지 본다. 행 잠금 네 가지 세기, 외래 키와의 충돌, 잠금 대기 추적, advisory lock까지 두 세션으로 재현한다.
- 태그: Database, PostgreSQL, SQL, Concurrency, Transaction, Troubleshooting
- 키워드: FOR NO KEY UPDATE, advisory lock, pg_blocking_pids
- 길이: 607줄
- 소제목: 상품과 주문 두 테이블 / 잠금은 한 행 앞에 줄을 세운다 / 행 잠금은 행 안에 적힌다 / 네 가지 세기 중 무엇을 고르나 / 공유 잠금은 줄을 새치기한다 / 기다릴지, 포기할지, 건너뛸지 / FOR UPDATE를 붙일 수 없는 쿼리 / 행이 아닌 것을 잠그는 advisory lock / MySQL InnoDB에서 달라지는 것 / 잠금 대기를 좁혀 가는 순서 / 잠금은 줄을 세우는 도구다 / 면접에서 나올 만한 질문
- 직접 링크 →: db-locking-deadlock, optimistic-locking, connection-pool, distributed-lock
- 키워드 백링크 →: zero-downtime-migrations, db-architecture-by-scale, sql-batch-timeout-pool, db-transaction-isolation, postgres-getting-started
- 이 글로 오는 글 ←: connection-pool, cron-jobs, db-architecture-by-scale, db-migration-tools, deadlocks, distributed-lock, optimistic-locking, postgres-operations, race-conditions, sql-batch-timeout-pool, zero-downtime-migrations

#### `sql-basics` — SQL 기본 명령어: 테이블과 제약 조건 만들기

- 요약: 빈 DB에서 테이블 세 개를 만들고 타입과 제약 조건으로 들어올 값을 정한 뒤, ALTER로 고치고 GRANT로 권한을 나눈다. 운영에서 SQLSTATE로 에러를 구분하고, 외래 키 인덱스를 점검하고, NOT VALID로 제약을 거는 법까지 실제 출력으로 본다.
- 태그: Database, SQL, PostgreSQL
- 키워드: DDL, 참조 무결성, SQLSTATE
- 길이: 665줄
- 소제목: 명령어는 네 묶음으로 나뉜다 / 빈 DB에 테이블 세 개 만들기 / 칸마다 담을 값의 종류 정하기 / 잘못된 값을 DB가 막아 주는 제약 조건 / 만든 테이블 고치기 (ALTER와 RENAME) / 권한 주고 뺏기 (GRANT와 REVOKE) / 현장에서 테이블 정의를 다시 꺼내 보는 순간 / 테이블 모양이 곧 규칙이다 / 면접에서 나올 만한 질문
- 직접 링크 →: sql-select-where-null, sql-insert-update-delete, db-index, db-index-pitfalls, sqld-data-modeling
- 키워드 백링크 →: postgres-getting-started
- 이 글로 오는 글 ←: db-architecture-by-scale, db-index, db-index-pitfalls, db-locking-deadlock, db-migration-tools, db-transaction-isolation, db-type-newsql, db-type-relational, optimistic-locking, postgres-advanced-sql, postgres-data-types, postgres-functions-triggers, postgres-getting-started, postgres-operations, sql-insert-update-delete, sql-select-where-null, sqld-data-modeling, sqld-entity-attribute-relationship, zero-downtime-migrations

#### `sql-batch-timeout-pool` — 쿼리 밖의 비용: 쓰기 묶기, 시간 한도, 커넥션 풀

- 요약: 쿼리 하나는 빨라도 커밋 수, 문장 수, 트랜잭션 길이, 연결 수에서 시간이 샌다. 배치 INSERT와 COPY, 큰 DELETE 나누기, VACUUM을 막는 열린 트랜잭션, statement_timeout과 lock_timeout, PgBouncer transaction 모드의 주의점을 실제 출력으로 본다.
- 태그: Database, SQL, PostgreSQL, Performance
- 키워드: statement_timeout, 배치 INSERT, 커넥션 풀
- 길이: 265줄
- 소제목: 한 줄씩 넣지 말고 묶어서 넣는다 / 오래 열린 트랜잭션은 청소를 막는다 / 끝나지 않는 쿼리에 한도를 건다 / 연결은 풀로 나눠 쓴다 / 쿼리 바깥에서 새는 시간 / 면접에서 나올 만한 질문
- 직접 링크 →: sql-query-tuning, sql-query-rewrite, db-index, sql-insert-update-delete, connection-pool
- 키워드 백링크 →: pessimistic-locking, postgres-mvcc-vacuum, db-architecture-by-scale, postgres-getting-started
- 이 글로 오는 글 ←: autoscaling, backpressure, batch-processing, blue-green-deployment, canary-release, circuit-breaker, connection-pool, db-architecture-by-scale, db-locking-deadlock, db-replication-sharding, deadlocks, design-patterns-overview, dns, eventual-consistency, garbage-collection, idempotency-key, iptables-nat, latency-bandwidth-throughput, long-polling, monitoring-basics, n-plus-one-queries, network-partitions, pattern-abstract-factory, pattern-bridge, pattern-singleton, pessimistic-locking, ports-and-sockets, postgres-connections-pg-hba, postgres-roles-security, race-conditions, resilience-patterns, rolling-deployment, scaling-horizontal-vertical, service-discovery, sql-query-rewrite, sql-query-tuning, tcp-connection-lifecycle, timeouts

#### `sql-insert-update-delete` — 행 넣고 고치고 지우기: UPSERT, 트랜잭션, TRUNCATE

- 요약: INSERT와 ON CONFLICT, MERGE, WHERE 없는 UPDATE를 막는 습관, COMMIT·ROLLBACK·SAVEPOINT, DELETE·TRUNCATE·DROP의 차이를 실제로 돌려 본다. 열어 둔 트랜잭션이 다른 요청을 붙잡을 때 pg_stat_activity로 찾고 타임아웃으로 막는 법, Oracle·SQL Server와 다른 점도 모았다.
- 태그: Database, SQL, PostgreSQL, Transaction
- 키워드: UPSERT, TRUNCATE, SAVEPOINT
- 길이: 562줄
- 소제목: 이어서 쓰는 작은 쇼핑몰 / 행 넣기와 있으면 고치기 / 고치고 지우기 전에 BEGIN부터 / COMMIT, ROLLBACK, SAVEPOINT로 묶고 되돌리기 / DELETE, TRUNCATE, DROP은 지우는 범위가 다르다 / 열어 둔 트랜잭션이 다른 요청을 붙잡을 때 / Oracle과 SQL Server에서는 이렇게 다르다 / 바꾸기 전에 되돌릴 길부터 / 면접에서 나올 만한 질문
- 직접 링크 →: sql-basics, sql-select-where-null, db-transaction-isolation
- 키워드 백링크 →: postgres-advanced-sql, postgres-operations, postgres-getting-started
- 이 글로 오는 글 ←: db-type-embedded, postgres-roles-security, sql-basics, sql-batch-timeout-pool, sql-select-where-null

#### `sql-query-rewrite` — 쿼리 고쳐 쓰기: sargable 조건, 키셋 페이지네이션, N+1

- 요약: 찾은 느린 쿼리를 원인별로 고쳐 쓰고 전후 실행 계획을 비교한다. 필요한 컬럼만 고르기, 컬럼에 함수를 씌우지 않는 조건, OFFSET 대신 키셋, N+1 제거, 비싼 count(*), EXISTS·IN·JOIN과 NOT IN 함정, 코드 리뷰에서 먼저 걸러 낼 모양까지 다룬다.
- 태그: Database, SQL, PostgreSQL, Performance
- 키워드: N+1, 키셋 페이지네이션, sargable
- 길이: 634줄
- 소제목: 주문 100만 건과 인덱스 넷 / 필요한 컬럼만 가져온다 / 컬럼은 그대로 두고 값을 바꾼다 / 뒤 페이지로 갈수록 느려지는 OFFSET / 목록 하나에 쿼리 41개 / 전체 개수 세기는 비싸다 / EXISTS, IN, JOIN 중 무엇을 쓰나 / 코드 리뷰에서 먼저 걸러 내는 모양 / 읽는 양을 줄이는 쪽으로 / 면접에서 나올 만한 질문
- 직접 링크 →: sql-query-tuning, db-index, api-pagination-sorting, n-plus-one-queries, sql-batch-timeout-pool
- 키워드 백링크 →: rest-api-design, loading-patterns, db-index-design, pattern-proxy, postgres-architecture, db-transaction-isolation
- 이 글로 오는 글 ←: api-pagination-sorting, big-o-notation, n-plus-one-queries, pattern-proxy, postgres-operations, postgres-reporting-sql, rest-api-design, rolling-deployment, sql-batch-timeout-pool, sql-query-tuning

#### `sql-query-tuning` — 느린 쿼리 찾기: pg_stat_statements와 실행 계획 읽기

- 요약: pg_stat_statements와 느린 쿼리 로그로 범인을 찾고, EXPLAIN (ANALYZE, BUFFERS)를 안쪽부터 읽으며 틀린 예상 행 수가 조인 방법을 어떻게 틀어지게 하는지 본다. Nested Loop, Hash Join, Merge Join이 언제 나오는지도 실제 계획으로 비교한다.
- 태그: Database, SQL, PostgreSQL, Performance
- 키워드: EXPLAIN ANALYZE, pg_stat_statements, Hash Join, Nested Loop
- 길이: 364줄
- 소제목: 어떤 쿼리가 시간을 먹는지부터 찾는다 / 느린 쿼리를 로그에 남긴다 / 실행 계획은 안쪽부터 읽는다 / 조인을 처리하는 세 가지 방법 / 찾았으면 고칠 차례 / 면접에서 나올 만한 질문
- 직접 링크 →: sql-query-rewrite, sql-batch-timeout-pool, db-index
- 이 글로 오는 글 ←: db-index, db-index-pitfalls, db-replication-sharding, db-type-relational, n-plus-one-queries, postgres-architecture, postgres-mvcc-vacuum, postgres-operations, sql-batch-timeout-pool, sql-query-rewrite, sql-select-where-null, sqld-joins

#### `sql-select-where-null` — SELECT와 NULL: 원하는 행만 골라 읽기

- 요약: SELECT의 처리 순서, WHERE와 AND·OR 우선순위, NULL과 3값 논리, NOT IN 함정, 정렬과 DISTINCT와 LIMIT를 실제 출력으로 따라간다. 리포트 숫자가 안 맞을 때 NULL부터 보는 방법도 정리한다.
- 태그: Database, SQL, PostgreSQL
- 키워드: 3값 논리, IS DISTINCT FROM, NULLS FIRST
- 길이: 624줄
- 소제목: 회원 넷, 상품 셋, 주문 다섯 / SELECT 한 문장을 조각으로 읽기 / 원하는 행만 고르는 WHERE / NULL은 값이 아니라 모른다는 표시 / 정렬하고, 겹친 것 빼고, 잘라서 보기 / 리포트 숫자가 안 맞을 때 먼저 보는 것 / 모름을 모름으로 다루기 / 면접에서 나올 만한 질문
- 직접 링크 →: sql-basics, sql-query-tuning, sql-insert-update-delete
- 키워드 백링크 →: db-index, sqld-group-by-having, postgres-getting-started
- 이 글로 오는 글 ←: postgres-data-types, postgres-functions-triggers, sql-basics, sql-insert-update-delete, sqld-null-functions, sqld-subquery-set-operators

#### `zero-downtime-migrations` — 무중단 스키마 변경: ALTER TABLE의 잠금과 재작성을 재 보기

- 요약: ALTER TABLE마다 잡는 잠금과 테이블 재작성 여부를 200만 행에서 직접 재고, 잠금 줄이 서비스를 멈추는 장면과 lock_timeout의 효과, NOT VALID와 VALIDATE, 배치 백필, int 기본 키를 bigint로 바꾸는 전 과정, MySQL 온라인 DDL을 다룬다.
- 태그: Database, PostgreSQL, SQL, Performance, Troubleshooting
- 키워드: lock_timeout, NOT VALID, 백필, 무중단 스키마 변경
- 길이: 489줄
- 소제목: 열 하나 추가했는데 API가 멈췄다 / 잠금은 줄을 선다 / 문장마다 무슨 잠금을 잡고, 다시 쓰는가 / 기본값이 있는 열은 PostgreSQL 11부터 빠르다 / 타입 바꾸기는 대부분 다시 쓴다 / 기본 키를 bigint로 바꾸는 전 과정 / 옛 행 채우기는 잘게 나눈다 / 인덱스, 이름 바꾸기, 열 지우기 / MySQL은 어떻게 다른가 / 배포 전에 확인하는 순서 / 잠금은 짧게, 무거운 일은 잠금 밖에서 / 면접에서 나올 만한 질문
- 직접 링크 →: db-migration-tools, db-architecture-by-scale, db-index-pitfalls, pessimistic-locking, postgres-mvcc-vacuum, batch-processing
- 키워드 백링크 →: k8s-deploy-pipeline-eks, db-replication-sharding, sql-basics
- 이 글로 오는 글 ←: api-versioning, blue-green-deployment, canary-release, db-architecture-by-scale, db-migration-tools, distributed-transactions-2pc, pessimistic-locking, rollback-strategy, rolling-deployment, schema-versioning

### Programming › Database › SQLD (`programming/database/sqld`)

#### `sqld-correlated-subquery` — SQLD 상관 서브쿼리, 스칼라 서브쿼리, 뷰

- 요약: 개발 DB에서 빠르던 '자기 부서 평균' 쿼리가 운영에서 느려지는 장면에서 시작해 상관 서브쿼리가 바깥 행마다 도는 순서, 스칼라 서브쿼리의 한 행 규칙, 뷰의 쓰임과 WITH CHECK OPTION을 보고, 실행 계획의 SubPlan loops로 느린 이유를 찾아 인라인 뷰로 고친다.
- 태그: Database, SQL, SQLD
- 키워드: 상관 서브쿼리, 스칼라 서브쿼리, WITH CHECK OPTION
- 길이: 377줄
- 소제목: 예제 데이터 / 바깥 행마다 다시 도는 상관 서브쿼리 / SELECT 절에는 값 하나만 들어간다 / 자주 쓰는 서브쿼리는 뷰로 이름을 붙인다 / 현장에서 상관 서브쿼리가 느려지는 순간 / SQLD 시험 포인트 / 면접에서 나올 만한 질문
- 직접 링크 →: sqld-subquery-set-operators, sqld-single-row-functions, db-index, sqld-window-functions
- 키워드 백링크 →: sqld-group-by-having
- 이 글로 오는 글 ←: sqld-set-operators, sqld-subquery-set-operators, sqld-window-functions

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
- 이 글로 오는 글 ←: db-type-time-series, postgres-reporting-sql, sql-select-where-null, sqld-correlated-subquery, sqld-joins, sqld-null-functions, sqld-rollup-cube-grouping-sets, sqld-single-row-functions, sqld-subquery-set-operators, sqld-top-n-hierarchical-pivot, sqld-window-functions

#### `sqld-joins` — SQLD 조인: EQUI부터 OUTER, Oracle (+)까지

- 요약: 사원이 없는 부서가 보고서에서 사라지는 장면에서 시작해 EQUI, Non-EQUI, NATURAL, USING, OUTER, CROSS, SELF JOIN을 EMP와 DEPT, SALGRADE로 실제 결과 행과 함께 본다. Oracle (+) 표기의 규칙과 한계, Nested Loop, Sort Merge, Hash Join을 언제 고르는지도 정리한다.
- 태그: Database, SQL, SQLD, Oracle
- 키워드: OUTER JOIN, NATURAL JOIN, 카티션 곱, SELF JOIN, Non-EQUI JOIN
- 길이: 771줄
- 소제목: 조인은 짝을 찾는 일이다 / 범위로 짝을 찾는 Non-EQUI JOIN / ANSI 문법으로 쓰는 INNER JOIN / 짝이 없는 행을 살리는 OUTER JOIN / Oracle 전통 문법의 OUTER JOIN 표기 / 모든 조합을 만드는 CROSS JOIN / 자기 자신과 붙이는 SELF JOIN / 세 테이블을 붙이기 / DB가 짝을 찾는 세 가지 방법 / SQLD 시험 포인트 / 면접에서 나올 만한 질문
- 직접 링크 →: sqld-single-row-functions, sqld-group-by-having, sql-query-tuning
- 키워드 백링크 →: sqld-top-n-hierarchical-pivot
- 이 글로 오는 글 ←: sqld-group-by-having, sqld-subquery-set-operators

#### `sqld-null-functions` — SQLD NULL 다루기: NVL, COALESCE, CASE와 DECODE

- 요약: 커미션이 NULL인 사원의 지급액이 보고서에서 사라지는 장면에서 시작해 NULL의 산술과 비교 규칙, NOT IN에 NULL이 섞이면 0행이 되는 이유, NVL·NVL2·NULLIF·COALESCE, CASE와 DECODE의 NULL 처리 차이를 Oracle과 PostgreSQL로 본다. NULL 때문에 바뀐 행을 놓치는 동기화 배치와 IS DISTINCT FROM도 다룬다.
- 태그: Database, SQL, SQLD, Oracle
- 키워드: NVL, COALESCE, DECODE, NULLIF
- 길이: 479줄
- 소제목: 이 글에서 쓸 사원 테이블 / 지급액이 빈칸이 된 이유 / NULL은 값이 아니라 빈칸이다 / NULL을 다른 값으로 바꾸는 함수 / 조건에 따라 값을 고르는 CASE와 DECODE / 현장에서 NULL이 바뀐 행을 숨기는 순간 / SQLD 시험 포인트 / 면접에서 나올 만한 질문
- 직접 링크 →: sqld-single-row-functions, sqld-type-conversion, sqld-subquery-set-operators, sqld-group-by-having, sql-select-where-null
- 키워드 백링크 →: postgres-getting-started
- 이 글로 오는 글 ←: sqld-group-by-having, sqld-rollup-cube-grouping-sets, sqld-single-row-functions

#### `sqld-rollup-cube-grouping-sets` — SQLD ROLLUP, CUBE, GROUPING SETS

- 요약: 부서 소계와 전체 합계가 있는 인건비 보고서를 쿼리 하나로 만들면서 ROLLUP, CUBE, GROUPING SETS가 만드는 묶음과 결과 행 수를 EMP 데이터로 센다. GROUPING 함수로 소계 줄에 이름표를 붙이고 부분 ROLLUP까지 정리한다.
- 태그: Database, SQL, SQLD
- 키워드: ROLLUP, GROUPING SETS, GROUPING_ID
- 길이: 571줄
- 소제목: 출발점은 9개의 묶음 / ROLLUP은 오른쪽부터 하나씩 지운다 / CUBE는 가능한 조합을 전부 만든다 / GROUPING SETS는 원하는 묶음만 적는다 / 소계 줄에 이름표를 붙이는 GROUPING / 일부만 굴리는 부분 ROLLUP / 결과 행 수 세기 / SQLD 시험 포인트 / 면접에서 나올 만한 질문
- 직접 링크 →: sqld-subquery-set-operators, sqld-group-by-having
- 키워드 백링크 →: json-crud-http, postgres-reporting-sql, sqld-null-functions
- 이 글로 오는 글 ←: sqld-window-functions

#### `sqld-set-operators` — SQLD 집합 연산자: UNION, INTERSECT, MINUS

- 요약: 두 해의 결제를 UNION으로 합쳤더니 60만 건이 3,500건이 된 장면에서 시작해 UNION과 UNION ALL의 차이와 비용, INTERSECT와 MINUS(EXCEPT), 컬럼 수·타입·ORDER BY 규칙, Oracle과 PostgreSQL의 우선순위 차이를 실행 계획과 함께 정리한다.
- 태그: Database, SQL, SQLD
- 키워드: UNION ALL, 집합 연산자, MINUS
- 길이: 439줄
- 소제목: 예제 데이터 / 결과를 위아래로 붙이는 집합 연산자 / 집합 연산자의 규칙 / 현장에서 UNION이 행을 지우고 느려지는 순간 / SQLD 시험 포인트 / 면접에서 나올 만한 질문
- 직접 링크 →: sqld-subquery-set-operators, sqld-correlated-subquery, sqld-single-row-functions
- 이 글로 오는 글 ←: sqld-subquery-set-operators

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
- 키워드 백링크 →: sqld-group-by-having, sql-select-where-null
- 이 글로 오는 글 ←: sqld-correlated-subquery, sqld-null-functions, sqld-rollup-cube-grouping-sets, sqld-set-operators, sqld-top-n-hierarchical-pivot, sqld-window-functions

#### `sqld-top-n-hierarchical-pivot` — SQLD Top-N, 계층형 쿼리, PIVOT

- 요약: 급여 상위 3명과 조직도 화면을 만들면서 ROWNUM이 정렬보다 먼저 붙는 함정, WITH TIES, CONNECT BY와 PostgreSQL의 재귀 CTE, WHERE와 CONNECT BY 조건의 차이를 SCOTT 데이터로 확인한다. PIVOT과 UNPIVOT, 정규 표현식 함수도 함께 본다.
- 태그: Database, SQL, SQLD
- 키워드: ROWNUM, 계층형 쿼리, CONNECT BY, 재귀 CTE, PIVOT
- 길이: 787줄
- 소제목: ROWNUM은 정렬보다 먼저 붙는다 / 동점자까지 보여 주는 WITH TIES / 상사를 따라 내려가는 계층형 쿼리 / 계층형 쿼리가 주는 가상 컬럼 / WHERE에 거는 조건과 CONNECT BY에 거는 조건 / PostgreSQL과 SQL Server는 재귀 CTE로 쓴다 / 행을 열로 돌리는 PIVOT / 열을 행으로 되돌리는 UNPIVOT / 패턴으로 찾는 정규 표현식 함수 / SQLD 시험 포인트 / 면접에서 나올 만한 질문
- 직접 링크 →: sqld-subquery-set-operators, sqld-window-functions
- 키워드 백링크 →: db-index, sqld-group-by-having
- 이 글로 오는 글 ←: db-type-graph, db-type-relational, postgres-advanced-sql, sqld-joins, sqld-window-functions

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
- 직접 링크 →: sqld-subquery-set-operators, sqld-single-row-functions, sqld-top-n-hierarchical-pivot, sqld-rollup-cube-grouping-sets
- 키워드 백링크 →: sqld-group-by-having, sqld-correlated-subquery
- 이 글로 오는 글 ←: db-type-embedded, postgres-reporting-sql, sqld-correlated-subquery, sqld-top-n-hierarchical-pivot

### Programming › Design Patterns (`programming/design-patterns`)

#### `design-patterns-overview` — 디자인 패턴 개요: 스물세 개의 이름과 꺼낼 때

- 요약: 디자인 패턴은 반복되는 설계 문제에 붙인 이름이다. GoF 23개를 생성·구조·행위로 나눈 기준, 상속보다 합성을 고르는 이유, Express 요청 안에 숨은 패턴, 함수가 있는 언어에서 단순해지는 패턴, 그리고 패턴을 꺼내지 말아야 할 때를 정리한다.
- 태그: Design Pattern, OOP, TypeScript, Architecture, JavaScript
- 키워드: 디자인 패턴, GoF, 상속보다 합성
- 길이: 305줄
- 소제목: 반복되는 문제에 붙인 이름 / 스물세 개를 세 갈래로 나눈 기준 / 두 문장으로 줄이면 / 이미 매일 쓰고 있는 패턴 / 함수가 있으면 사라지는 패턴도 있다 / 패턴을 꺼내기 전에 / 면접에서 나올 만한 질문
- 직접 링크 →: pattern-singleton, pattern-factory-method, pattern-abstract-factory, pattern-builder, pattern-prototype, pattern-adapter, pattern-bridge, pattern-composite, pattern-decorator, pattern-facade, pattern-flyweight, pattern-proxy, pattern-chain-of-responsibility, pattern-command, pattern-interpreter, pattern-iterator, pattern-mediator, pattern-memento, pattern-observer, pattern-state, pattern-strategy, pattern-template-method, pattern-visitor, mvc-pattern, resilience-patterns
- 키워드 백링크 →: loading-patterns, sql-batch-timeout-pool
- 이 글로 오는 글 ←: pattern-abstract-factory, pattern-adapter, pattern-bridge, pattern-builder, pattern-chain-of-responsibility, pattern-command, pattern-composite, pattern-decorator, pattern-facade, pattern-factory-method, pattern-flyweight, pattern-interpreter, pattern-mediator, pattern-observer, pattern-prototype, pattern-proxy, pattern-singleton, pattern-state, pattern-strategy, pattern-template-method

### Programming › Design Patterns › Behavioral (`programming/design-patterns/behavioral`)

#### `pattern-chain-of-responsibility` — 책임 연쇄 패턴: 내 일이 아니면 다음으로 넘긴다

- 요약: 분기가 늘어난 에러 메시지 함수를 처리기 줄로 바꾸고, 순서가 곧 규칙이 되는 이유, 모두 거쳐 가는 미들웨어 사슬, next를 잊거나 두 번 부를 때의 사고, DOM 이벤트 버블링, 등록과 실행 순서가 다른 곳, 데코레이터·커맨드와의 차이를 Express와 Koa로 확인한다.
- 태그: Design Pattern, OOP, TypeScript, JavaScript, Node.js
- 키워드: 책임 연쇄 패턴, Chain of Responsibility, 미들웨어 체인
- 길이: 497줄
- 소제목: 내 일이 아니면 다음 처리기로 넘긴다 / 배열 하나와 반복문 하나로 충분하다 / 줄의 순서가 곧 규칙이다 / 모두 거쳐 가는 사슬, 미들웨어 / next를 잊거나 두 번 부르면 / 브라우저에서 위로 올라가는 사슬 / 등록 순서와 실행 순서가 다른 곳 / 데코레이터, 커맨드와 헷갈릴 때 / compose 직접 만들기 / 면접에서 나올 만한 질문
- 직접 링크 →: design-patterns-overview, pattern-decorator, pattern-command, pattern-observer, pattern-composite
- 키워드 백링크 →: http-status-codes
- 이 글로 오는 글 ←: design-patterns-overview, pattern-command, pattern-composite, pattern-decorator, pattern-strategy

#### `pattern-command` — 커맨드 패턴: 요청을 값으로 만들면 되돌릴 수 있다

- 요약: 버튼·단축키·명령 팔레트가 같은 편집 동작을 부르는 편집기에서 출발해 요청을 객체로 만들고, 되돌리기와 다시 실행하기 스택, 되돌리기 어려운 명령, 큐에 쌓았다 실행하기, Redux 액션과의 관계, 클로저 한 쌍으로 쓰는 버전을 다룬다.
- 태그: Design Pattern, OOP, TypeScript, JavaScript
- 키워드: 커맨드 패턴, Command 패턴, 되돌리기 스택
- 길이: 378줄
- 소제목: 요청을 객체로 만들면 생기는 자리 / 버튼, 단축키, 팔레트가 같은 명령을 부른다 / 되돌리기 스택과 다시 실행하기 스택 / 되돌리기가 어려운 명령 / 명령을 줄 세웠다가 나중에 실행한다 / Redux 액션은 커맨드인가 / 클래스 대신 클로저 한 쌍 / 직접 만드는 되돌리기 / 면접에서 나올 만한 질문
- 직접 링크 →: pattern-composite, pattern-memento, saga-pattern, idempotency-key, dead-letter-queue, message-queue-basics, pattern-chain-of-responsibility, pattern-observer, design-patterns-overview, pattern-strategy
- 키워드 백링크 →: operational-transform, redis-basics, microservices, crdt
- 이 글로 오는 글 ←: design-patterns-overview, pattern-chain-of-responsibility, pattern-memento, pattern-strategy

#### `pattern-interpreter` — 인터프리터 패턴: 관리자가 쓴 규칙 문자열을 직접 해석하기

- 요약: 쿠폰 대상 조건을 관리자 화면에서 글로 쓰게 하려고 문법 규칙마다 노드 클래스를 두고 재귀 하강 파서로 트리를 세운다. new Function이 환경 변수를 읽어 버리는 모습, 매번 파싱하면 100배 느려지는 비용, 괄호 5000겹에 넘치는 스택, SpEL·정규식·JSON Logic·CEL 같은 작은 언어와 비지터와의 관계를 다룬다.
- 태그: Design Pattern, OOP, TypeScript, JavaScript, Security, Performance
- 키워드: 인터프리터 패턴, Interpreter 패턴, 재귀 하강 파서
- 길이: 527줄
- 소제목: 문법 한 줄이 클래스 하나가 된다 / 문자열에서 트리까지는 패턴 밖의 일 / 트리가 스스로 답을 계산한다 / eval로 끝내면 안 되는 이유 / 매번 파싱하면 백 배 느리다 / 괄호 오천 개에 서버가 넘어진다 / 이미 쓰고 있는 작은 언어들 / 노드를 더하기 쉬운 쪽, 연산을 더하기 쉬운 쪽 / 언제 직접 만들고 언제 가져다 쓰나 / 규칙 트리 계산기 만들기 / 면접에서 나올 만한 질문
- 직접 링크 →: design-patterns-overview, pattern-composite, pattern-visitor
- 키워드 백링크 →: mongodb-document-model
- 이 글로 오는 글 ←: design-patterns-overview, pattern-visitor

#### `pattern-iterator` — 이터레이터 패턴: 페이지를 넘기는 코드를 for await 하나로

- 요약: 세 곳에 복사된 커서 페이지네이션 반복문을 async 제너레이터 하나로 모은다. break가 부르는 return()과 finally, 게으른 이터레이터 헬퍼로 map 호출이 100만 번에서 7번으로 주는 모습, 순회 중 수정과 한 번만 도는 제너레이터의 함정, 내부·외부 반복자를 다룬다.
- 태그: Design Pattern, OOP, TypeScript, JavaScript, Node.js, Performance
- 키워드: 이터레이터 패턴, Iterator 패턴, 이터레이터 헬퍼, 비동기 이터레이터
- 길이: 410줄
- 소제목: 돌 줄 아는 것과 도는 것을 나눈다 / for await가 실제로 부르는 것 / 제너레이터가 위치를 대신 들고 있다 / 필요한 만큼만 꺼내는 게으른 반복 / 도는 중에 컬렉션이 바뀌면 / 한 번 돌면 끝나는 반복자 / 안에서 도는 반복자, 밖에서 당기는 반복자 / 반복자를 꺼내지 않아도 될 때 / 게으른 take 직접 만들기 / 면접에서 나올 만한 질문
- 직접 링크 →: pattern-factory-method
- 키워드 백링크 →: kafka-basics
- 이 글로 오는 글 ←: design-patterns-overview, pattern-composite, pattern-factory-method, pattern-observer, pattern-visitor

#### `pattern-mediator` — 중재자 패턴: 서로 부르던 부품들 사이에 규칙 하나를 두기

- 요약: 배송·주소·쿠폰·금액·결제 버튼이 서로를 직접 부르던 결제 화면을 중재자 하나로 모은다. 알림이 알림을 부르는 고리로 스택이 넘치는 사고와 막는 법, 규칙 없는 이벤트 버스의 함정, React 상태 끌어올리기·라디오 버튼·MediatR, 신 객체가 되는 신호를 다룬다.
- 태그: Design Pattern, OOP, TypeScript, React, Frontend, Architecture
- 키워드: 중재자 패턴, Mediator 패턴
- 길이: 421줄
- 소제목: 서로 아는 선이 열 개에서 다섯 개로 / 부품은 알리기만 한다 / 규칙은 중재자 한 파일에 / 알림이 다시 알림을 부를 때 / 이미 쓰고 있는 중재자 / 이벤트 버스는 규칙 없는 중재자다 / 중재자가 신 객체가 되는 길 / 부품과 중재자를 따로 테스트한다 / 결제 화면 규칙 직접 맞추기 / 면접에서 나올 만한 질문
- 직접 링크 →: event-driven-architecture, saga-pattern, pattern-observer, pattern-facade, pattern-state
- 키워드 백링크 →: design-patterns-overview
- 이 글로 오는 글 ←: design-patterns-overview, pattern-facade, pattern-observer

#### `pattern-memento` — 메멘토 패턴: 되돌리는 공식이 없을 때 상태를 통째로 기억하기

- 요약: 역연산이 없는 자동 정렬을 되돌리려고 원조자·메멘토·관리인을 나누고, 얕은 복사로 꾸러미가 함께 바뀌는 버그, 불변 업데이트로 스냅숏 메모리를 660MB에서 40MB로 줄이는 실험, 배포를 건너 사는 저장된 초안의 버전 관리, 캔버스 save·restore와 TS private의 한계를 다룬다.
- 태그: Design Pattern, OOP, TypeScript, JavaScript, Browser, Performance
- 키워드: 메멘토 패턴, Memento 패턴
- 길이: 422줄
- 소제목: 저장은 하되 안을 들여다보지 않는다 / 꾸러미를 열 수 있는 쪽은 하나 / 얕은 복사로 떼어 둔 꾸러미는 같이 바뀐다 / 바뀐 곳만 새로 만들면 꾸러미가 싸진다 / 저장한 꾸러미를 지난 버전 코드가 열 때 / 브라우저와 도구에 들어 있는 메멘토 / TS의 private은 꾸러미를 잠그지 못한다 / 꾸러미를 남길까 명령을 남길까 / 되돌리기 직접 만들기 / 면접에서 나올 만한 질문
- 직접 링크 →: pattern-command, pattern-prototype, git-internals-basics
- 이 글로 오는 글 ←: design-patterns-overview, pattern-command, pattern-prototype

#### `pattern-observer` — 옵서버 패턴: 바뀌었다고 알리면 알아야 할 쪽이 듣는다

- 요약: 화면 부품마다 갱신 호출이 붙던 장바구니를 구독 구조로 바꾸고, push와 pull, useSyncExternalStore, 알리는 도중 구독 해제로 리스너가 건너뛰어지는 버그, EventEmitter의 동기 예외 전파와 async 리스너 크래시, MaxListenersExceededWarning, 글리치와 배칭, 중재자·발행 구독과의 차이를 다룬다.
- 태그: Design Pattern, OOP, TypeScript, JavaScript, Node.js, React
- 키워드: 옵서버 패턴, Observer 패턴, MaxListenersExceededWarning
- 길이: 469줄
- 소제목: 바뀌었다고 알리는 쪽, 등록해 두는 쪽 / 값을 실어 보낼까, 꺼내 가게 할까 / 클래스 대신 구독 함수 하나 / 알리는 도중에 구독을 끊으면 / 동기 알림은 예외도 동기로 돌아온다 / 리스너 열한 개째의 경고 / 하나를 바꿨는데 두 번 알린다 / 옵서버, 중재자, 발행·구독을 나란히 놓으면 / 이벤트 이미터 직접 만들기 / 면접에서 나올 만한 질문
- 직접 링크 →: react-rerender, pub-sub, js-memory-leak, event-loop, pattern-mediator, pattern-iterator
- 키워드 백링크 →: rendering-strategies, design-patterns-overview
- 이 글로 오는 글 ←: design-patterns-overview, mvc-pattern, pattern-chain-of-responsibility, pattern-command, pattern-mediator

#### `pattern-state` — 상태 패턴: 상태마다 바뀌는 동작을 객체로 꺼내기

- 요약: 메서드마다 반복되는 상태 switch를 상태 객체와 전이표로 옮긴다. 판별 유니온으로 불가능한 화면 상태를 지우고, XState로 옮겨 보고, 서버 두 대가 같은 주문을 동시에 바꿀 때 조건부 UPDATE로 막는 법까지 본다.
- 태그: Design Pattern, OOP, TypeScript, PostgreSQL, Concurrency
- 키워드: 상태 패턴, State 패턴, 유한 상태 기계, XState
- 길이: 432줄
- 소제목: 메서드마다 같은 switch가 반복된다 / 상태를 객체로 꺼내면 / 전이는 누가 결정하나 / 갈 수 있는 길만 그려 둔다 / XState로 옮기면 / 이미 매일 쓰는 상태 기계 / 메모리 밖에서 상태가 바뀔 때 / 전략과 같은 모양, 다른 질문 / 상태 클래스가 필요 없는 때 / 직접 짜는 전이표 / 면접에서 나올 만한 질문
- 직접 링크 →: design-patterns-overview, pattern-strategy, tcp-connection-lifecycle, circuit-breaker, optimistic-locking, db-locking-deadlock
- 키워드 백링크 →: client-data-cache
- 이 글로 오는 글 ←: design-patterns-overview, pattern-mediator, pattern-strategy

#### `pattern-strategy` — 전략 패턴: 조건문 대신 갈아 끼우는 알고리즘

- 요약: 쿠폰 종류마다 늘어나는 if를 같은 모양의 할인 전략으로 나누고, 고르는 일은 가장자리 한 곳에 모은다. 정렬 비교 함수 하나로 속도가 몇 배 달라지는 측정과 Passport의 전략, 사용자 입력으로 전략 표를 찾을 때의 함정을 다룬다.
- 태그: Design Pattern, OOP, TypeScript, JavaScript, Node.js, Performance
- 키워드: 전략 패턴, Strategy 패턴, Intl.Collator
- 길이: 364줄
- 소제목: 쿠폰이 늘 때마다 커지는 함수 / 할인 계산을 갈아 끼울 수 있게 / 누가 전략을 고르나 / 함수 하나면 되는 전략 / 비교 함수 하나로 정렬이 몇 배 느려진다 / Passport는 로그인 방법을 이름으로 등록한다 / 전략마다 필요한 재료가 다를 때 / 이름이 헷갈리는 이웃들 / 직접 만드는 할인 전략 / 면접에서 나올 만한 질문
- 직접 링크 →: design-patterns-overview, pattern-chain-of-responsibility, k8s-deployment, load-balancing-algorithms, pattern-state, pattern-template-method, pattern-bridge, pattern-command
- 키워드 백링크 →: client-data-cache, ab-testing, redis-basics, token-login
- 이 글로 오는 글 ←: design-patterns-overview, pattern-bridge, pattern-command, pattern-state, pattern-template-method

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
- 키워드 백링크 →: k8s-pod-probes, sql-batch-timeout-pool, design-patterns-overview
- 이 글로 오는 글 ←: design-patterns-overview, pattern-bridge, pattern-builder, pattern-factory-method, pattern-prototype, vpn-ipsec-wireguard

#### `pattern-builder` — 빌더 패턴: 인자 여덟 개짜리 생성자를 단계로 나누기

- 요약: 위치로 넘기던 생성자 인자를 이름 붙은 단계로 바꾸고, 필드 사이의 규칙을 build 한곳에서 검사한다. 가변 빌더를 나눠 쓰면 설정이 섞이는 함정과 스텝 빌더, 테스트 데이터 빌더까지 본다.
- 태그: Design Pattern, OOP, TypeScript, JavaScript
- 키워드: 빌더 패턴, 플루언트 인터페이스, 테스트 데이터 빌더
- 길이: 565줄
- 소제목: false, false가 무엇인지 아무도 모른다 / 객체 리터럴로 모자라는 순간 / 한 단계씩 쌓고 build에서 검사한다 / GoF의 빌더에는 감독이 있다 / 매일 쓰는 빌더들 / 빌더를 재사용했더니 헤더가 섞였다 / 직접 만들어 보는 쿼리 빌더 / 빠뜨린 단계를 컴파일러가 잡게 하기 / 테스트 데이터를 만드는 빌더 / 빌더가 짐이 되는 경우 / 면접에서 나올 만한 질문
- 직접 링크 →: design-patterns-overview, idempotency-key, pattern-abstract-factory, pattern-factory-method, pattern-prototype, pattern-composite
- 키워드 백링크 →: resilience-patterns, http-methods
- 이 글로 오는 글 ←: design-patterns-overview, pattern-abstract-factory, pattern-factory-method, pattern-prototype

#### `pattern-factory-method` — 팩토리 메서드 패턴: new가 박힌 자리를 바꿔 끼우기

- 요약: 흐름은 상위 클래스가 쥐고 무엇을 만들지는 하위 클래스가 정하게 하는 팩토리 메서드를 영수증 발송 코드로 리팩터링한다. 심플 팩토리·정적 팩토리 메서드와의 차이, for...of 속 Symbol.iterator, 함수 표와 satisfies, 테스트에서 가짜 끼우기까지 다룬다.
- 태그: Design Pattern, OOP, TypeScript, JavaScript
- 키워드: 팩토리 메서드, Factory Method, 정적 팩토리 메서드
- 길이: 388줄
- 소제목: new가 박힌 자리를 메서드로 바꾼다 / 이름이 비슷한 세 가지 / 매일 쓰는 팩토리 메서드 / 상속 대신 함수를 넘기면 / 채널 하나를 추가할 때 고치는 곳 / 모르는 채널은 시작할 때 막는다 / 테스트에서 가짜 채널 끼우기 / 팩토리 메서드가 과한 경우 / 면접에서 나올 만한 질문
- 직접 링크 →: design-patterns-overview, pattern-template-method, pattern-iterator, pattern-abstract-factory, pattern-builder, pattern-prototype
- 이 글로 오는 글 ←: design-patterns-overview, pattern-abstract-factory, pattern-builder, pattern-iterator, pattern-prototype, pattern-singleton, pattern-template-method

#### `pattern-prototype` — 프로토타입 패턴: 클래스를 몰라도 복제해서 만든다

- 요약: 복제를 객체 자신의 clone()에 맡겨 구체 클래스를 몰라도 사본을 만든다. 얕은 복사 사고, JSON과 structuredClone이 잃는 것, 복제가 정말 빠른지를 직접 재 본다.
- 태그: Design Pattern, OOP, TypeScript, JavaScript, Performance
- 키워드: 프로토타입 패턴, structuredClone, 깊은 복사
- 길이: 509줄
- 소제목: 복사할 줄 아는 건 객체 자신이다 / 자바스크립트의 프로토타입과는 다른 이야기 / 얕은 복사가 기본값을 오염시킨다 / 깊은 복사 도구마다 잃어버리는 것 / 클래스 인스턴스는 스스로 복제해야 한다 / 원본을 등록해 두고 꺼내 쓰기 / 복제가 정말 빠른가 / 매일 쓰는 복제 / 직접 만드는 깊은 복사 / 복제가 맞지 않는 객체 / 면접에서 나올 만한 질문
- 직접 링크 →: design-patterns-overview, pattern-abstract-factory, browser-fetch, json-crud-http, pattern-builder, pattern-factory-method, pattern-flyweight, pattern-memento
- 키워드 백링크 →: k8s-pod-basics, db-types-overview
- 이 글로 오는 글 ←: design-patterns-overview, pattern-builder, pattern-factory-method, pattern-flyweight, pattern-memento

#### `pattern-singleton` — 싱글턴 패턴: 하나만 만들기보다 어려운 하나 지키기

- 요약: 인스턴스를 하나로 제한하는 싱글턴이 개발 서버 재평가, 패키지 중복 설치, 비동기 초기화 경쟁, 여러 프로세스에서 어떻게 깨지는지 실제로 돌려 보고, 테스트를 망가뜨리는 전역 상태를 의존성 주입으로 바꾸는 법을 정리한다.
- 태그: Design Pattern, OOP, TypeScript, Node.js, Concurrency
- 키워드: 싱글턴 패턴, Singleton 패턴, dual package hazard
- 길이: 447줄
- 소제목: 하나만 만들고 모두가 같이 쓴다 / 자바스크립트에서는 모듈이 이미 하나다 / 같은 모듈이 두 번 로드되는 경우 / 비동기 초기화에서는 둘이 만들어진다 / 프로세스 하나에 하나일 뿐이다 / 요청마다 달라야 할 값을 넣으면 섞인다 / 테스트가 순서에 따라 깨진다 / 다른 언어는 어떻게 막나 / 직접 만들어 보는 once / 싱글턴을 써도 되는 자리 / 면접에서 나올 만한 질문
- 직접 링크 →: design-patterns-overview, micro-frontends, rate-limiting-in-practice, redis-basics, rendering-ssr, pattern-factory-method
- 키워드 백링크 →: cron-jobs, thread-safety, leader-election, sql-batch-timeout-pool
- 이 글로 오는 글 ←: design-patterns-overview, pattern-abstract-factory, pattern-flyweight

### Programming › Design Patterns › Structural (`programming/design-patterns/structural`)

#### `pattern-adapter` — 어댑터 패턴: 맞지 않는 인터페이스 사이에 끼우는 변환기

- 요약: 앱이 기대하는 모양과 라이브러리의 모양 사이에 변환기를 끼워 앱 코드를 고치지 않고 교체한다. 인자 순서, 단위, 시간대처럼 이름 뒤에 숨은 차이와 계약 테스트로 확인하는 법을 다룬다.
- 태그: Design Pattern, OOP, TypeScript, Node.js
- 키워드: 어댑터 패턴, 부패 방지 계층
- 길이: 445줄
- 소제목: 모양이 다른 플러그에 끼우는 변환기 / 객체 어댑터와 클래스 어댑터 / 이름만 바꾸는 게 아니다 / 콜백을 Promise로 바꾸는 것도 어댑터다 / 매일 지나가는 어댑터 / 어댑터를 바꾸기 전에 계약 테스트부터 / 비슷한 구조 패턴과 헷갈릴 때 / 어댑터가 쌓일 때 생기는 일 / 면접에서 나올 만한 질문
- 직접 링크 →: design-patterns-overview, browser-fetch, mvc-pattern, k8s-pod-multicontainer, pattern-bridge, pattern-decorator, pattern-proxy, pattern-facade
- 키워드 백링크 →: http-status-codes, structured-logging
- 이 글로 오는 글 ←: design-patterns-overview, pattern-bridge, pattern-decorator, pattern-facade, pattern-proxy

#### `pattern-bridge` — 브리지 패턴: 두 방향으로 늘어나는 클래스를 둘로 나누기

- 요약: 서로 상관없이 바뀌는 두 축을 상속 하나로 묶으면 클래스가 곱으로 는다. 무엇을 할지와 어떻게 할지를 두 계층으로 나누고, Go slog, 리액트 렌더러, database/sql에서 같은 구조를 찾아본다.
- 태그: Design Pattern, OOP, TypeScript, React
- 키워드: 브리지 패턴, pimpl
- 길이: 427줄
- 소제목: 두 방향으로 갈라지는 상속 / 무엇을 그릴지와 어떻게 그릴지를 떼어 놓는다 / 여기서 말하는 구현은 implements가 아니다 / Go의 slog가 나눠 놓은 두 쪽 / 렌더러를 바꿔 끼우는 프레임워크들 / 가짜 렌더러로 차트 로직만 테스트하기 / 직접 늘려 보는 두 축 / 전략, 어댑터와 무엇이 다른가 / 미리 나눴다가 후회하는 경우 / 면접에서 나올 만한 질문
- 직접 링크 →: design-patterns-overview, react-rerender, pattern-strategy, pattern-adapter, pattern-abstract-factory
- 키워드 백링크 →: observability-basics, sql-batch-timeout-pool, grpc
- 이 글로 오는 글 ←: design-patterns-overview, pattern-adapter, pattern-strategy

#### `pattern-composite` — 컴포지트 패턴: 세트 안의 세트를 상품 하나처럼 계산하기

- 요약: 세트 안에 세트가 들어가면서 개수만 틀리던 장바구니를 하나와 묶음이 같은 질문에 답하는 구조로 바꾼다. 투명성과 안전성, fold로 쓰는 함수형 버전, DOM·ReactNode·Express Router 속 트리, 순환과 공유 자식과 깊은 트리 같은 운영 데이터의 함정을 다룬다.
- 태그: Design Pattern, OOP, TypeScript, JavaScript, React
- 키워드: 컴포지트 패턴, Composite 패턴
- 길이: 420줄
- 소제목: 세트 안에 세트가 들어오던 날 / 하나와 묶음이 같은 질문에 답한다 / 계산은 잎에서 시작해 위로 올라온다 / add를 어디에 둘 것인가 / 클래스 없이 트리 하나와 fold 하나 / 매일 쓰는 트리들 / 트리가 그래프가 되는 순간 / 데코레이터와 같은 모양, 다른 목적 / 직접 만들어 보는 세트 계산 / 컴포지트가 과한 경우 / 면접에서 나올 만한 질문
- 직접 링크 →: design-patterns-overview, pattern-visitor, pattern-decorator, pattern-chain-of-responsibility, pattern-iterator
- 이 글로 오는 글 ←: design-patterns-overview, pattern-builder, pattern-chain-of-responsibility, pattern-command, pattern-decorator, pattern-interpreter, pattern-visitor

#### `pattern-decorator` — 데코레이터 패턴: 같은 모양으로 감싸 기능을 겹쳐 붙이기

- 요약: 옵션이 얽힌 fetchJson을 재시도·로그·타임아웃 겹으로 나누고, 감싸는 순서에 따라 로그 줄 수와 타임아웃 동작이 어떻게 달라지는지 직접 돌려 본다. 고차 함수 버전, TypeScript 표준 데코레이터 문법과의 차이, Java I/O·Go 핸들러·React HOC, 감쌌을 때 생기는 부작용까지 다룬다.
- 태그: Design Pattern, OOP, TypeScript, JavaScript, HTTP
- 키워드: 데코레이터 패턴, Decorator 패턴, 고차 컴포넌트
- 길이: 462줄
- 소제목: 같은 모양으로 감싸고 앞뒤에 일을 더한다 / 바깥부터 읽고 안쪽부터 실행된다 / 감싸는 순서가 결과를 바꾼다 / 클래스 대신 함수를 감싸도 된다 / 메서드 위의 @는 데코레이터 패턴인가 / 매일 감싸고 있는 것들 / 감쌌더니 달라진 것들 / 프록시, 어댑터와 갈리는 지점 / 직접 겹쳐 보는 재시도와 로그 / 면접에서 나올 만한 질문
- 직접 링크 →: design-patterns-overview, timeouts, idempotency-key, retries, react-rerender, pattern-adapter, pattern-proxy, pattern-chain-of-responsibility, pattern-composite
- 키워드 백링크 →: browser-fetch, resilience-patterns, http-methods
- 이 글로 오는 글 ←: design-patterns-overview, pattern-adapter, pattern-chain-of-responsibility, pattern-composite, pattern-proxy

#### `pattern-facade` — 퍼사드 패턴: 복잡한 하위 시스템 앞에 입구 하나 세우기

- 요약: 세 군데에 복사된 주문 절차 중 한 곳만 결제 실패 시 재고를 풀지 않던 버그를 퍼사드 하나로 모은다. 실패하면 거꾸로 되돌리는 보상, git commit과 배관 명령, BFF, 신 객체가 되는 과정, 어댑터·중재자와의 차이를 다룬다.
- 태그: Design Pattern, OOP, TypeScript, Architecture, Git
- 키워드: 퍼사드 패턴, Facade 패턴, 배관 명령
- 길이: 390줄
- 소제목: 세 군데에 복사된 주문 절차 / 하위 시스템 앞에 입구 하나 / placeOrder 한 번이 안에서 하는 일 / git commit도 퍼사드다 / 퍼사드는 어디에나 있다 / 서비스 앞에 선 퍼사드 / 퍼사드가 신이 되는 과정 / 테스트는 두 층으로 나뉜다 / 어댑터, 중재자와 나란히 놓으면 / 직접 만들어 보는 주문 퍼사드 / 면접에서 나올 만한 질문
- 직접 링크 →: design-patterns-overview, microservices, idempotency-key, git-internals-basics, gateway, pattern-adapter, pattern-mediator
- 키워드 백링크 →: https-tls, git-staging-area, dns
- 이 글로 오는 글 ←: design-patterns-overview, pattern-adapter, pattern-mediator, pattern-proxy

#### `pattern-flyweight` — 플라이웨이트 패턴: 같은 상태는 한 벌만 두고 같이 쓰기

- 요약: 마커 20만 개가 같은 아이콘을 저마다 들고 있어 87MB이던 메모리를 고유 상태와 외부 상태로 나눠 18MB로 줄인다. 공유 객체를 고쳤을 때의 사고와 Object.freeze, 끝없이 자라는 풀과 WeakRef, Java Integer 캐시와 문자열 인터닝, 캐시와의 차이를 다룬다.
- 태그: Design Pattern, OOP, TypeScript, JavaScript, Performance
- 키워드: 플라이웨이트 패턴, Flyweight 패턴, 문자열 인터닝
- 길이: 399줄
- 소제목: 마커마다 같은 아이콘을 들고 있었다 / 바뀌지 않는 것과 바뀌는 것을 가른다 / 공장이 같은 것을 한 번만 만든다 / 줄어든 메모리를 재 본다 / 하나를 고쳤더니 전부 바뀌었다 / 풀이 끝없이 자랄 때 / 엔진과 언어 안의 플라이웨이트 / 캐시와 무엇이 다른가 / 직접 만드는 스타일 공장 / 플라이웨이트가 필요 없는 경우 / 면접에서 나올 만한 질문
- 직접 링크 →: design-patterns-overview, js-memory-leak, git-internals-basics, caching-strategies, pattern-singleton, pattern-prototype
- 이 글로 오는 글 ←: design-patterns-overview, pattern-prototype

#### `pattern-proxy` — 프록시 패턴: 진짜와 같은 얼굴을 한 대리인

- 요약: 생성자가 300ms를 쓰는 렌더러를 처음 불릴 때 만드는 대리인으로 감싸는 데서 출발해 가상·보호·캐시·원격 프록시, JS Proxy와 Reflect, Vue 3의 reactive, ORM 지연 로딩 엔티티, 대리인을 건너뛰는 내부 호출, 데코레이터와의 차이를 다룬다. 네트워크 프록시와 무엇이 같은지도 짚는다.
- 태그: Design Pattern, OOP, TypeScript, JavaScript
- 키워드: 프록시 패턴, Proxy 패턴, Reflect, 지연 로딩
- 길이: 502줄
- 소제목: 같은 이름의 네트워크 프록시와 무엇이 같나 / 진짜와 똑같은 얼굴을 한 대리인 / 처음 부를 때 만든다 / 들여보낼지, 저장해 둔 걸 줄지 / 멀리 있는 객체를 가까이 있는 것처럼 / 언어가 내장한 대리인, Proxy 객체 / Vue 3의 reactive는 대리인이 장부를 적는 것이다 / ORM이 건네준 가짜 엔티티 / 대리인을 건너뛰는 호출 / 데코레이터와 같은 코드, 다른 의도 / 직접 만드는 캐싱 프록시 / 면접에서 나올 만한 질문
- 직접 링크 →: proxy-reverse-proxy, pattern-decorator, code-splitting, caching-strategies, timeouts, retries, circuit-breaker, sql-query-rewrite, pattern-adapter, pattern-facade
- 키워드 백링크 →: json-crud-http, resilience-patterns, http-versions, loading-patterns, grpc, design-patterns-overview, dns
- 이 글로 오는 글 ←: core-web-vitals, design-patterns-overview, frontend-browser-cache, http-caching-cdn, loading-patterns, mvc-pattern, n-plus-one-queries, pattern-adapter, pattern-decorator, react-server-components, sql-query-rewrite

### Programming › Frontend (`programming/frontend`)

#### `html-form-http` — HTML form은 어떻게 HTTP 요청이 되나

- 요약: 브라우저가 폼 입력값을 골라 urlencoded 쿼리나 multipart 본문으로 바꾸는 규칙을 따라간다. FormData와 fetch, PRG, CSRF 토큰, 서버 검증까지 폼을 보낸 뒤 생기는 문제도 함께 본다.
- 태그: HTTP, Browser, Frontend, Encoding, Security
- 키워드: HTML 폼, FormData, application/x-www-form-urlencoded, URLSearchParams
- 길이: 548줄
- 소제목: form 태그의 속성 세 개가 요청을 정한다 / 입력값이 쿼리 문자열이 되기까지 / 공백은 더하기, 나머지는 퍼센트로 / 주소에 실리면 남는다 / POST 본문의 세 가지 모양 / 파일을 올릴 때 챙길 것 / fetch로 보낼 때는 FormData를 쓴다 / 폼은 GET과 POST만 보낸다 / 새로고침하면 두 번 주문된다 / 다른 사이트도 내 서버로 폼을 보낼 수 있다 / 브라우저 검증은 친절일 뿐이다 / 자바스크립트가 없어도 폼은 동작한다 / 보낸 값과 받은 값이 다를 때 / 다시 검색창과 로그인 폼으로 / 면접에서 나올 만한 질문
- 직접 링크 →: http-methods, http-message, browser-fetch, http-status-codes, cors, cookie-session-login, nginx-reverse-proxy
- 키워드 백링크 →: rest-api-design, base64, http-versions, rendering-strategies, react-server-components, client-data-cache, resilience-patterns, what-happens-google-com
- 이 글로 오는 글 ←: browser-fetch, cookie-session-login, http-message, http-status-codes, json-crud-http, waf

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
- 키워드 백링크 →: build-caching, rendering-csr-spa, k8s-deploy-pipeline-eks, microservices, cors
- 이 글로 오는 글 ←: pattern-singleton

### Programming › Frontend › JavaScript (`programming/frontend/javascript`)

#### `browser-fetch` — 브라우저에서 HTTP 요청 보내기: fetch 제대로 쓰기

- 요약: fetch가 500에서도 성공하는 이유와 res.ok 확인, 한 번만 읽히는 본문, credentials·keepalive 같은 옵션을 짚는다. AbortController로 늦게 온 응답과 타임아웃을 다루고, XHR·axios와 무엇이 다른지 비교한다.
- 태그: HTTP, JavaScript, Browser, Frontend
- 키워드: AbortController, AbortSignal, sendBeacon, keepalive
- 길이: 553줄
- 소제목: 500이 와도 fetch는 성공한다 / 본문은 한 번만 읽힌다 / fetch 옵션 하나씩 / 페이지를 닫을 때 보내는 요청 / 늦게 온 응답이 화면을 덮는다 / 지난 요청은 취소한다 / 실패하면 다시 보낼까 / 에러를 한 곳에서 다룬다 / XHR, fetch, axios / 같은 요청을 두 번 보내지 않으려면 / 에러 수집기에 Failed to fetch만 쌓일 때 / 다시 처음 코드로 / 면접에서 나올 만한 질문
- 직접 링크 →: http-status-codes, cors, cookie-session-login, http-methods, resilience-patterns, rest-api-design, http-caching-cdn, network-troubleshooting-by-layer
- 키워드 백링크 →: html-form-http, client-data-cache, json-crud-http, frontend-browser-cache, rendering-csr-spa, race-conditions, dns
- 이 글로 오는 글 ←: client-data-cache, distributed-lock, html-form-http, http-versions, json-crud-http, leader-election, load-balancer-basics, network-partitions, nginx-reverse-proxy, pattern-adapter, pattern-decorator, pattern-prototype, race-conditions, service-discovery, tcp-connection-lifecycle, timeouts, vpc-subnets-route-tables, vpn-ipsec-wireguard, websocket-deep-dive

#### `event-loop` — 자바스크립트 이벤트 루프: 브라우저와 Node.js

- 요약: 콜 스택, 태스크 큐, 마이크로태스크 큐가 어떤 순서로 돌고 렌더링이 어디에 끼어드는지 출력 순서 퍼즐로 따라간다. 긴 작업이 INP를 망치는 이유와 작업을 쪼개는 방법, Node.js의 단계와 process.nextTick까지 다룬다.
- 태그: coupang, JavaScript, Browser, Performance, Node.js · 회사: coupang
- 키워드: 이벤트 루프, 마이크로태스크, 태스크 큐, process.nextTick, setImmediate
- 길이: 567줄
- 소제목: 콜 스택은 하나뿐이다 / 기다리는 일은 브라우저가 대신 한다 / 출력 순서 퍼즐 풀기 / 마이크로태스크는 끝까지 비운다 / await 뒤는 then 안으로 들어간다 / 화면은 태스크 사이에서만 그려진다 / 50ms가 넘으면 긴 작업이다 / 긴 작업을 쪼개는 방법들 / 이벤트 루프를 직접 흉내 내 보기 / Node.js는 단계를 돈다 / nextTick은 Promise보다 먼저다 / 누가 메인 스레드를 붙잡았는지 운영에서 찾기 / 다시 멈춘 스피너로 / 면접에서 나올 만한 질문
- 직접 링크 →: core-web-vitals
- 키워드 백링크 →: osi-in-practice
- 이 글로 오는 글 ←: autoscaling, big-o-notation, core-web-vitals, deadlocks, distributed-tracing, garbage-collection, js-memory-leak, k8s-pod-probes, long-polling, monitoring-basics, n-plus-one-queries, network-monitoring, nginx-basics, pattern-observer, race-conditions, redis-basics, rendering-ssr, structured-logging, thread-safety

#### `js-memory-leak` — 자바스크립트 메모리 누수 찾기

- 요약: GC가 무엇을 쓰레기로 보는지에서 출발해 SPA에서 참조가 새는 자리와 WeakMap·WeakRef의 쓰임을 정리한다. 크롬 힙 스냅샷 비교와 Retainers 경로로 범인을 찾는 순서, Node.js 서버의 메모리 문제를 다루는 방법도 담았다.
- 태그: coupang, JavaScript, Browser, Performance, Node.js · 회사: coupang
- 키워드: 메모리 누수, 힙 스냅샷, 가비지 컬렉션, WeakMap, detached DOM
- 길이: 436줄
- 소제목: 쓰레기의 기준은 닿을 수 있느냐다 / 루트에서 출발해 표시하고 치운다 / 대부분의 객체는 금방 죽는다 / 누수는 잊어버린 참조다 / 페이지를 떠나도 남는 리스너 / 문서에서 떨어진 DOM / 클로저는 생각보다 많이 잡는다 / 끝없이 자라는 캐시 / 약하게 잡아 두는 방법 / 크롬 개발자 도구로 범인 찾기 / Node.js 서버가 점점 무거워질 때 / 다시 느려지는 탭으로 / 면접에서 나올 만한 질문
- 키워드 백링크 →: client-data-cache, redis-memory-eviction, garbage-collection, event-loop, layer-mtu-fragmentation, dns
- 이 글로 오는 글 ←: canary-release, client-data-cache, crdt, garbage-collection, microservices, pattern-flyweight, pattern-observer, rendering-ssr

### Programming › Frontend › Performance (`programming/frontend/performance`)

#### `client-data-cache` — 화면 데이터 캐시: TanStack Query와 SWR로 같은 요청 줄이기

- 요약: 같은 API를 여러 컴포넌트가 부를 때 요청을 하나로 합치고, staleTime과 gcTime으로 언제 다시 받고 언제 버릴지 정하는 방법을 다룬다. 뮤테이션 뒤 캐시 맞추기, 낙관적 업데이트, 흔한 실수와 LRU 메모이제이션까지 이어 간다.
- 태그: Cache, React, Performance, Frontend
- 키워드: TanStack Query, staleTime, gcTime, 낙관적 업데이트, 서버 상태
- 길이: 579줄
- 소제목: 서버에서 빌려 온 상태 / 쿼리 키 하나가 캐시 한 칸이다 / 신선한 시간과 남겨 두는 시간 / 언제 다시 받아 오나 / 옛 데이터를 먼저 보여 주고 뒤에서 바꾼다 / 바꾼 뒤에는 캐시도 바꾼다 / 누르자마자 바뀌는 화면 / 들어가기 전에 미리 받기 / 처음 값을 미리 넣어 두기 / 페이지가 여러 장인 목록 / 서버가 받아 둔 데이터를 넘겨받기 / SWR로 쓰면 / 이 블로그에서 쿼리를 두는 자리 / 캐시가 틀린 값을 보여 주는 경우 / 계산 결과를 기억하기 / 처음 세 컴포넌트로 돌아가서 / 면접에서 나올 만한 질문
- 직접 링크 →: frontend-browser-cache, browser-fetch, react-rerender, rest-api-design, rendering-strategies, js-memory-leak
- 키워드 백링크 →: http-caching-cdn, loading-patterns
- 이 글로 오는 글 ←: browser-fetch, exponential-backoff-jitter, frontend-browser-cache, html-form-http, http-methods, http-status-codes, js-memory-leak, json-crud-http, linux-processes-signals, linux-systemd-systemctl, load-balancer-basics, loading-patterns, microservices, mvc-pattern, pattern-state, pattern-strategy, react-rerender, rendering-csr-spa, rendering-ssr, resilience-patterns

#### `code-splitting` — 번들 쪼개기: 코드 스플리팅과 트리 셰이킹

- 요약: 큰 번들이 모바일에서 왜 다운로드보다 실행에서 더 비싼지 보고, 동적 import로 청크를 나누는 법과 트리 셰이킹이 안 쓰는 코드를 빼는 원리를 따라간다. sideEffects, CommonJS, 배럴 파일의 함정과 prefetch, 내용 해시 캐시, 과도한 분할로 생기는 워터폴까지 다룬다.
- 태그: coupang, Performance, JavaScript, Webpack, Bundler · 회사: coupang
- 키워드: 코드 스플리팅, 트리 셰이킹, 배럴 파일, 동적 import
- 길이: 491줄
- 소제목: 다운로드보다 비싼 것 / import()가 번들을 가르는 자리 / 라우트로 자를까, 컴포넌트로 자를까 / 청크 그래프와 공통 청크 / 안 쓰는 export를 털어 내기 / 사이드 이펙트가 있으면 지우지 못한다 / CommonJS는 흔들어도 안 떨어진다 / 배럴 파일이 끌고 오는 것들 / 번들 안을 들여다보기 / 미리 받을까, 필요할 때 받을까 / 파일 이름에 내용의 지문을 넣는다 / 너무 잘게 쪼개면 생기는 일 / 배포 직후 쏟아지는 청크 에러, 한 줄에 불어난 번들 / 덜 보내는 게 가장 빠르다 / 면접에서 나올 만한 질문
- 직접 링크 →: core-web-vitals
- 키워드 백링크 →: http-versions, rendering-strategies
- 이 글로 오는 글 ←: core-web-vitals, frontend-browser-cache, http-versions, islands-resumability, loading-patterns, pattern-proxy, rendering-csr-spa

#### `core-web-vitals` — Core Web Vitals: LCP, INP, CLS

- 요약: LCP, INP, CLS가 각각 무엇을 재는지, Lighthouse 점수와 실제 사용자 수치가 왜 다르게 나오는지 따라간다. LCP 네 조각과 INP 세 구간, CLS 세션 창으로 원인을 쪼개 찾고 고치는 방법까지 다룬다.
- 태그: coupang, Performance, Browser, JavaScript, Core Web Vitals · 회사: coupang
- 키워드: Core Web Vitals, LCP, INP, CLS, 레이아웃 스래싱
- 길이: 514줄
- 소제목: 세 숫자가 각각 재는 것 / 실험실 점수와 사용자 점수가 다른 이유 / 가장 큰 그림이 늦게 뜨는 과정 / LCP를 네 조각으로 나눠 보기 / 히어로 이미지를 빨리 받는 법 / 눌렀는데 화면이 늦게 바뀐다 / 긴 작업을 쪼개서 양보하기 / 화면이 밀리는 양을 재는 법 / 밀림을 세션 창으로 묶어 센다 / 실제 사용자 기기에서 모으기 / 나빠진 지표를 브라우저에서 직접 재 보기 / 점수보다 분포를 본다 / 면접에서 나올 만한 질문
- 직접 링크 →: what-happens-google-com, code-splitting, event-loop
- 키워드 백링크 →: ab-testing, loading-patterns, pattern-proxy, cors, dns
- 이 글로 오는 글 ←: ab-testing, code-splitting, event-loop, frontend-browser-cache, hydration, loading-patterns, react-rerender, rendering-csr-spa, rendering-ssr, rendering-strategies, streaming-ssr-suspense

#### `frontend-browser-cache` — 프런트엔드에서 쓰는 캐시: 브라우저 캐시부터 Service Worker까지

- 요약: 요청 하나가 메모리 캐시, Service Worker, HTTP 캐시를 차례로 거치는 과정과 bfcache, Cache Storage 전략, 새 Service Worker가 기다리는 이유를 이 블로그의 sw.js로 따라간다. 데이터 저장소의 용량과 지워지는 규칙, 미리 받기 힌트까지 정리한다.
- 태그: Cache, Browser, Performance, Frontend
- 키워드: Service Worker, bfcache, Cache Storage, skipWaiting, Speculation Rules
- 길이: 645줄
- 소제목: 요청 하나가 거치는 캐시들 / HTTP 캐시는 서버가 정한 기한을 따른다 / 뒤로 가기가 즉시 뜨는 bfcache / 페이지 앞에 선 프록시, Service Worker / 설치, 활성화, 가로채기 / 캐시를 먼저 볼까 네트워크를 먼저 볼까 / 미리 담기와 쓰면서 담기 / 이 블로그의 sw.js 읽기 / 버전을 올리고 옛 캐시를 지운다 / 새 Service Worker는 기다린다 / Workbox를 쓰면 / 데이터는 어디에 저장하나 / 용량과 지워지는 순서 / 다음에 필요한 것을 미리 받기 / 개발자 도구에서 확인하기 / 사용자 브라우저의 캐시 상태를 숫자로 받기 / 처음 장면으로 돌아가서 / 면접에서 나올 만한 질문
- 직접 링크 →: http-caching-cdn, caching-strategies, client-data-cache, core-web-vitals, code-splitting
- 키워드 백링크 →: realtime-communication, pattern-proxy, loading-patterns, what-happens-google-com, cors
- 이 글로 오는 글 ←: browser-fetch, client-data-cache, http-caching-cdn, rendering-csr-spa

### Programming › Frontend › React (`programming/frontend/react`)

#### `react-rerender` — React는 언제 다시 그리나

- 요약: 검색창 글자 하나에 목록 전체가 다시 렌더링되는 장면에서 출발해 렌더와 커밋, 리렌더링이 일어나는 이유, key와 재조정, memo·useCallback이 듣는 경우와 안 듣는 경우를 따라간다. context 분리, 상태 위치 옮기기, 자동 배칭, transition, Profiler로 원인 찾기까지 다룬다.
- 태그: coupang, React, Performance, Rendering · 회사: coupang
- 키워드: 리렌더링, 재조정, React.memo, 자동 배칭, useDeferredValue
- 길이: 642줄
- 소제목: 렌더와 커밋은 다른 일이다 / 다시 렌더링되는 이유는 따로 있다 / 이전 트리와 짝을 맞추는 규칙 / 내용이 같아도 다른 객체 / memo와 useMemo, useCallback이 듣는 경우 / 상태는 내리고 내용은 올린다 / context는 값이 바뀌면 구독자를 전부 깨운다 / 여러 번 바꿔도 렌더링은 한 번 / 급한 업데이트와 미뤄도 되는 업데이트 / 고치기 전에 잰다 / React Compiler가 대신해 주는 것 / 렌더링이 멈추지 않을 때 남는 흔적 / 처음 검색창으로 돌아가서 / 면접에서 나올 만한 질문
- 직접 링크 →: client-data-cache, rendering-strategies
- 키워드 백링크 →: core-web-vitals
- 이 글로 오는 글 ←: client-data-cache, pattern-bridge, pattern-decorator, pattern-observer, rendering-strategies

### Programming › Frontend › Rendering (`programming/frontend/rendering`)

#### `hydration` — 하이드레이션: 서버 HTML에 생명을 붙이는 일

- 요약: hydrateRoot가 서버 DOM과 짝을 맞추고 이벤트를 붙이는 과정과 그 비용을 재고, 불일치 원인별로 React 19가 실제로 내는 메시지와 대응을 재현한다. 확장 프로그램, 운영의 #418, useSyncExternalStore와 suppressHydrationWarning, 선택적 하이드레이션까지 다룬다.
- 태그: React, SSR, Rendering, Performance
- 키워드: 하이드레이션 불일치, 선택적 하이드레이션, suppressHydrationWarning
- 길이: 466줄
- 소제목: hydrateRoot가 하는 일 / 보이는데 안 눌리는 시간 / 어긋나면 React가 하는 일 / 불일치를 만드는 코드들 / 확장 프로그램은 언제 끼어드느냐가 문제다 / 개발 모드와 운영 모드의 메시지는 다르다 / 고치는 방법들 / 한꺼번에 하지 않기: 선택적 하이드레이션 / 하이드레이션을 덜 하는 방법 / 운영에서 불일치를 찾는 순서 / 다시 사라진 두 번의 클릭으로 / 면접에서 나올 만한 질문
- 직접 링크 →: rendering-strategies, rendering-ssr, core-web-vitals, streaming-ssr-suspense, islands-resumability, react-server-components
- 키워드 백링크 →: count-min-sketch
- 이 글로 오는 글 ←: islands-resumability, react-server-components, rendering-csr-spa, rendering-ssg-isr, rendering-ssr, rendering-strategies, streaming-ssr-suspense

#### `islands-resumability` — 아일랜드와 재개 가능성: 하이드레이션을 덜 하는 방법

- 요약: 상호작용이 필요한 조각만 섬으로 살리는 Astro의 아일랜드와, 하이드레이션 없이 서버가 멈춘 자리에서 이어 가는 Qwik의 재개 가능성을 직접 빌드해 비교한다. 섬 지시어별 JS 실행량, 섬 사이 상태 공유, React의 선택적 하이드레이션·서버 컴포넌트와의 차이를 다룬다.
- 태그: Rendering, Performance, JavaScript, Frontend, Astro, Qwik
- 키워드: 아일랜드 아키텍처, 재개 가능성, Astro, Qwik
- 길이: 387줄
- 소제목: 정적인 문단도 하이드레이션 비용을 치른다 / 바다 위에 섬 몇 개 / 언제 살릴지를 섬마다 고른다 / 섬끼리는 말을 걸기 어렵다 / 하이드레이션을 아예 하지 않는다 / 무엇을 아끼고 무엇을 내주나 / 내 페이지에 섬이 맞는지 재 보기 / 다시 1MB로 / 면접에서 나올 만한 질문
- 직접 링크 →: oauth, hydration, react-server-components, rendering-csr-spa, code-splitting
- 키워드 백링크 →: streaming-ssr-suspense, rendering-strategies
- 이 글로 오는 글 ←: hydration, rendering-strategies

#### `nextjs-static-dynamic-rendering` — Next.js App Router는 언제 정적이고 언제 동적인가

- 요약: 빌드 출력의 ○ ● ƒ가 무엇을 보고 정해지는지 경우마다 빌드해서 확인한다. 요청 시점 API, 빌드 때 굳는 fetch, 세그먼트 설정의 함정, 응답 헤더로 확인하는 법, 이 블로그의 MdxWrapper가 글 134개를 동적으로 바꾼 재현, Cache Components까지 다룬다.
- 태그: Next.js, Rendering, SSR, Performance, Cache
- 키워드: 정적 렌더링, 동적 렌더링, force-static, Cache Components
- 길이: 456줄
- 소제목: 빌드 출력의 기호 세 개 / Next는 빌드 때 일단 렌더링해 본다 / 요청이 있어야 알 수 있는 값들 / fetch는 캐시하지 않는데 빌드 때 한 번은 부른다 / 직접 정해 버리는 설정 / 응답 헤더로 밖에서 확인하기 / 클라이언트 컴포넌트의 useSearchParams / 이 블로그의 MdxWrapper가 동적이 된 이유 / Cache Components를 켜면 판단 기준이 바뀐다 / 이 라우트는 어떤 기호가 될까 / 정적인 줄 알았던 페이지가 요청마다 렌더링될 때 / 다시 MdxWrapper로 / 면접에서 나올 만한 질문
- 직접 링크 →: rendering-ssg-isr, rendering-strategies, http-caching-cdn, streaming-ssr-suspense, react-server-components
- 이 글로 오는 글 ←: react-server-components, rendering-csr-spa, rendering-ssg-isr, rendering-strategies

#### `react-server-components` — React 서버 컴포넌트: SSR과 무엇이 다른가

- 요약: 서버 컴포넌트가 보내는 RSC payload를 직접 받아 뜯어보고, use client 경계가 파일 단위로 무엇을 끌고 가는지, 경계를 넘을 수 있는 값이 무엇인지 빌드 에러와 함께 본다. 서버 액션의 보안, server-only, 무거운 props가 HTML을 키우는 문제까지 다룬다.
- 태그: React, Next.js, Rendering, Performance, Security
- 키워드: RSC payload, use client, 서버 액션, server-only
- 길이: 457줄
- 소제목: SSR은 시점의 이야기, RSC는 코드의 이야기 / 서버가 보내는 것은 HTML이 아니다 / 첫 요청과 그다음 이동은 다르게 흐른다 / 경계는 파일 단위로 그어진다 / 경계를 넘을 수 있는 값 / 컴포넌트가 직접 데이터를 가져온다 / 서버 전용 코드가 브라우저로 새지 않게 / 서버 액션은 경계를 넘는 함수다 / props가 무거우면 payload도 무겁다 / 현장에서 서버 컴포넌트를 들여다보는 법 / 다시 315바이트로 / 면접에서 나올 만한 질문
- 직접 링크 →: rendering-strategies, hydration, rendering-ssr, oauth, streaming-ssr-suspense, nextjs-static-dynamic-rendering
- 키워드 백링크 →: pattern-proxy, loading-patterns
- 이 글로 오는 글 ←: html-form-http, hydration, islands-resumability, nextjs-static-dynamic-rendering, rendering-ssg-isr, rendering-strategies, streaming-ssr-suspense

#### `rendering-csr-spa` — CSR과 SPA: 빈 HTML이 화면이 되기까지

- 요약: 빈 index.html이 상품 화면이 되기까지 요청이 어떻게 줄지어 기다리는지 실제 크롬으로 재고, 주소를 읽자마자 데이터를 출발시켜 폭포를 줄인다. History API 라우팅, 새로고침 404와 SPA 폴백이 삼키는 MIME 오류, 미리보기 봇, CSR이 맞는 자리까지 다룬다.
- 태그: React, Rendering, Performance, SEO, Browser
- 키워드: SPA 폴백, 클라이언트 라우팅, History API, pushState
- 길이: 478줄
- 소제목: 빈 HTML 한 장에서 화면이 되기까지 / 받는 시간보다 실행하는 시간 / 코드를 기다린 뒤에야 데이터를 부른다 / 주소는 바뀌는데 문서는 다시 받지 않는다 / 새로고침 404는 서버가 주소를 몰라서 난다 / 폴백이 삼켜 버리는 오류들 / 미리보기 봇은 빈 div를 본다 / CSR이 맞는 자리 / 실제 크롬으로 첫 화면을 재는 법 / 다시 새로고침 404로 / 면접에서 나올 만한 질문
- 직접 링크 →: rendering-strategies, code-splitting, rendering-ssr, client-data-cache, rendering-ssg-isr, frontend-browser-cache, core-web-vitals
- 키워드 백링크 →: hydration, nginx-basics, nextjs-static-dynamic-rendering, http-status-codes
- 이 글로 오는 글 ←: browser-fetch, islands-resumability, micro-frontends, rendering-ssr, rendering-strategies

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
- 이 글로 오는 글 ←: hydration, pattern-singleton, react-server-components, rendering-csr-spa, rendering-ssg-isr, rendering-strategies, streaming-ssr-suspense

#### `rendering-strategies` — CSR, SSR, SSG, ISR, 스트리밍: HTML은 어디서 만들어지나

- 요약: 같은 상품 페이지의 HTML을 브라우저, 요청 시 서버, 빌드, 뒤늦은 재생성, 조각 전송 중 어디서 만드느냐에 따라 TTFB·LCP·서버 비용·신선도가 어떻게 달라지는지 비교한다. 하이드레이션과 불일치, ISR 갱신 방식, 스트리밍의 제약, 서버 컴포넌트, 쇼핑몰 페이지별 선택까지 다룬다.
- 태그: coupang, React, SSR, Next.js, Performance, Rendering · 회사: coupang
- 키워드: 하이드레이션, ISR, 스트리밍 SSR, 서버 컴포넌트, SSG
- 길이: 539줄
- 소제목: HTML은 어디서 언제 만들어지나 / CSR: 빈 HTML과 큰 JS / SSR: 요청마다 서버가 HTML을 만든다 / 하이드레이션은 공짜가 아니다 / SSG: 빌드할 때 미리 만든다 / ISR: 정적 페이지를 뒤에서 다시 만든다 / 스트리밍: 준비된 부분부터 보낸다 / 서버 컴포넌트는 SSR과 다른 이야기다 / 큰 쇼핑몰에서 페이지마다 고르기 / 고른 전략대로 나가는지 밖에서 확인하기 / 다시 미리보기 카드로 / 면접에서 나올 만한 질문
- 직접 링크 →: rendering-csr-spa, rendering-ssr, islands-resumability, hydration, rendering-ssg-isr, streaming-ssr-suspense, react-server-components, nextjs-static-dynamic-rendering, proxy-reverse-proxy, react-rerender
- 키워드 백링크 →: http-caching-cdn, lossy-counting, http-status-codes, core-web-vitals
- 이 글로 오는 글 ←: ab-testing, client-data-cache, code-splitting, html-form-http, hydration, islands-resumability, loading-patterns, nextjs-static-dynamic-rendering, pattern-observer, react-rerender, react-server-components, rendering-csr-spa, rendering-ssg-isr, rendering-ssr, streaming-ssr-suspense

#### `streaming-ssr-suspense` — 스트리밍 SSR과 Suspense: 준비된 부분부터 보내기

- 요약: 응답을 열어 둔 채 셸을 먼저 보내고 Suspense 경계 안쪽을 숨긴 HTML과 교체 스크립트로 이어 붙이는 과정을 실제 조각으로 따라간다. 상태 코드가 먼저 떠나는 문제, React 19의 교체 묶음, 프록시와 압축이 흐름을 막는 경우, 봇과 loading.tsx까지 다룬다.
- 태그: React, SSR, Next.js, Rendering, Performance, Nginx
- 키워드: Suspense 경계, onShellReady, proxy_buffering, Transfer-Encoding: chunked
- 길이: 623줄
- 소제목: 응답을 끝내지 않고 열어 둔다 / 셸이 먼저 나가고 경계 안쪽이 뒤따른다 / 늦게 온 조각이 제자리를 찾는 방법 / React 19는 교체를 모아서 한다 / 셸만 기다릴까, 전부 기다릴까 / 상태 코드는 첫 조각과 함께 떠난다 / 중간에서 모아 버리는 것들 / 봇과 링크 미리보기가 보는 HTML / Next.js에서는 loading.tsx가 경계다 / 경계를 어디에 두나 / 운영에서 스트리밍이 안 될 때 보는 순서 / 다시 운영 주소로 / 면접에서 나올 만한 질문
- 직접 링크 →: rendering-strategies, rendering-ssr, hydration, nginx-reverse-proxy, react-server-components, core-web-vitals
- 키워드 백링크 →: proxy-reverse-proxy, http-versions, http-status-codes
- 이 글로 오는 글 ←: hydration, islands-resumability, loading-patterns, nextjs-static-dynamic-rendering, react-server-components, rendering-ssr, rendering-strategies, server-sent-events

### Programming › In Practice (`programming/in-practice`)

#### `k8s-deploy-pipeline-eks` — push에서 EKS까지 배포 파이프라인

- 요약: 푸시부터 이미지 빌드, ECR, Terraform, kubectl 적용, 노드의 이미지 받기까지 이어진 길을 따라가며 단계마다 어떤 메시지로 깨지는지 본다. rollout을 기다리지 않는 CI, ImagePullBackOff의 세 가지 원인, Unauthorized와 Forbidden, 되돌리기의 함정, push와 pull(ArgoCD) 배포, deploy.sh와 cleanup.sh의 위험을 다룬다.
- 태그: Kubernetes, AWS, CI/CD, DevOps, Troubleshooting, GitOps
- 키워드: 배포 파이프라인, ProgressDeadlineExceeded, pull 방식 배포
- 길이: 653줄
- 소제목: 길 하나에 자격 증명이 넷 / 실패는 원인보다 늦게 드러난다 / 노드가 이미지를 받지 못하는 세 가지 이유 / 클러스터가 CI를 모를 때: Unauthorized와 Forbidden / Terraform은 같은 파이프라인에 넣지 않는다 / 배포 잡과 deploy.sh / 되돌리기는 어디를 되돌리느냐의 문제 / 밀어 넣는 배포와 끌어오는 배포 / cleanup.sh가 지우는 것과 남기는 것 / 로그 한 줄로 어느 단계인지 가르기 / 면접에서 나올 만한 질문
- 직접 링크 →: k8s-project-structure, github-actions-docker-ecr, eks-cluster-basics, k8s-deployment, k8s-secret, k8s-pod-troubleshooting, terraform-basics, terraform-modules-tfvars, helm-dependencies-oci-gitops, helm-release-lifecycle, k8s-pv-pvc, k8s-pod-probes, k8s-hpa, k8s-service-types, kubernetes-ingress, k8s-configmap
- 키워드 백링크 →: k8s-pod-lifecycle, k8s-pod-basics, git-undo, helm-basics, security-groups-nacl, vpc-basics, webhooks
- 이 글로 오는 글 ←: ci-cd-basics, db-migration-tools, eks-cluster-basics, git-branching-strategy, github-actions-docker-ecr, k8s-deployment, k8s-pod-lifecycle, k8s-pod-probes, k8s-project-structure, linux-systemd-systemctl, micro-frontends, network-config-cicd, rollback-strategy, terraform-basics, zero-downtime-migrations

#### `k8s-pod-troubleshooting` — Pod가 안 뜰 때 상태별로 보는 순서

- 요약: Pending, ContainerCreating, ImagePullBackOff, CreateContainerConfigError, CrashLoopBackOff, OOMKilled, Running인데 준비 안 됨, 멈춘 Terminating까지 STATUS마다 먼저 볼 곳과 명령을 정리하고, 이벤트 정렬의 함정과 kubectl debug로 셸 없는 컨테이너를 여는 법을 다룬다.
- 태그: Kubernetes, Troubleshooting, DevOps
- 키워드: ImagePullBackOff, CreateContainerConfigError, kubectl debug, 임시 컨테이너
- 길이: 403줄
- 소제목: 상태 이름이 멈춘 곳을 알려 준다 / 이벤트는 정렬부터 틀린다 / Pending: 노드를 찾지 못했다 / ContainerCreating에서 멈췄다 / ImagePullBackOff: 이미지를 받지 못했다 / CreateContainerConfigError: 설정이 비어 있다 / CrashLoopBackOff: 뜨자마자 죽는다 / OOMKilled: 메모리 한도에 걸렸다 / Running인데 트래픽을 못 받는다 / Terminating에서 안 넘어간다 / 셸이 없는 컨테이너는 kubectl debug로 연다 / 상태별로 다시 보면 / 면접에서 나올 만한 질문
- 직접 링크 →: k8s-pod-scheduling, dockerfile-image-layers, helm-basics, k8s-pod-lifecycle, k8s-pod-probes, k8s-pod-resources, kubernetes-ingress, network-troubleshooting-by-layer
- 키워드 백링크 →: rate-limiting-in-practice, k8s-secret, k8s-service-types, k8s-pv-pvc, k8s-configmap, docker-container-basics, k8s-cni-pod-network, dns
- 이 글로 오는 글 ←: docker-network-volume, dockerfile-image-layers, github-actions-docker-ecr, k8s-deploy-pipeline-eks, k8s-deployment, k8s-pod-basics, k8s-pod-lifecycle, k8s-pod-multicontainer, k8s-pod-scheduling, k8s-secret, packet-capture-tcpdump

#### `k8s-project-structure` — EKS 배포 프로젝트 구조: 폴더마다 누가 읽나

- 요약: .github, app, k8s, terraform, scripts로 나뉜 EKS 배포 저장소를 직접 만들어 파일마다 무엇이 들어가고 누가 읽는지 따라간다. 이름순 kubectl apply의 함정, 클라이언트 검사와 서버 검사의 차이, git에 둔 Secret, .gitignore, 환경이 늘 때 Kustomize와 Helm, 저장소를 나누는 시점까지 짚는다.
- 태그: Kubernetes, Terraform, DevOps, AWS, Git
- 키워드: kubeconform, dry-run=server, 프로젝트 폴더 구조
- 길이: 748줄
- 소제목: 트리 한 장을 위에서부터 / app: 이미지를 만드는 재료 / k8s: 리소스 종류마다 폴더 하나 / kubectl apply의 순서는 파일 이름순이다 / 클라이언트 검사만 믿으면 안 된다 / secret.yaml을 git에 두면 비밀이 아니다 / terraform: 클러스터와 네트워크를 만드는 코드 / .gitignore가 막아야 하는 것 / scripts: 손으로 치던 명령을 모은 곳 / 환경이 늘어날 때: 복사, Kustomize, Helm / 앱과 배포 설정을 한 저장소에 둘까 / 처음 받은 저장소는 이 순서로 읽는다 / 면접에서 나올 만한 질문
- 직접 링크 →: k8s-deploy-pipeline-eks, dockerfile-image-layers, k8s-namespace, k8s-deployment, k8s-configmap, k8s-hpa, k8s-pv-pvc, git-large-files-secrets, k8s-secret, helm-values-secrets, terraform-modules-tfvars, eks-cluster-basics, terraform-basics, git-ignore-config, helm-basics, helm-dependencies-oci-gitops
- 키워드 백링크 →: github-actions-docker-ecr, vpc-subnets-route-tables, docker-container-basics, db-type-key-value, layer-ip-routing-icmp, kubernetes-ingress, build-caching, security-groups-nacl, what-happens-google-com, layer-ip-addressing, vpc-basics
- 이 글로 오는 글 ←: github-actions-docker-ecr, helm-chart-templates, k8s-deploy-pipeline-eks, k8s-namespace, terraform-modules-tfvars

#### `network-troubleshooting-by-layer` — 계층별로 장애 좁히기: 아래에서 위로

- 요약: 접속이 안 된다는 한 줄을 curl -v로 좁힌 뒤 링크, 경로, 이웃, 경로 끝, 이름, 포트, TLS, HTTP 순서로 확인한다. 칸마다 칠 명령과 출력에서 볼 곳, 흔한 오해를 실제 출력으로 정리한다.
- 태그: Network, Linux, Troubleshooting, TCP/IP
- 키워드: 장애 좁히기, mtr, tracepath, openssl s_client
- 길이: 696줄
- 소제목: 명령을 어디서 치는지부터 정한다 / 먼저 curl 한 번으로 어디서 멈췄는지 본다 / 링크가 살아 있는지 / 내 주소와 나갈 길 / 다음 칸의 MAC을 얻었는지 / 목적지까지 닿는지 / 이름이 맞는 주소로 풀리는지 / 포트가 열려 있는지 / TLS가 맺어지는지 / HTTP가 기대한 답을 주는지 / 갈림길을 한 장으로 / 확인하다가 흔히 하는 실수 / 처음 실패한 칸이 답이다 / 면접에서 나올 만한 질문
- 직접 링크 →: osi-in-practice, docker-network-volume, layer-link-ethernet-arp, layer-ip-addressing, layer-ip-routing-icmp, layer-mtu-fragmentation, hosts-file, ports-and-sockets, packet-capture-tcpdump, iptables-basics, https-tls, proxy-reverse-proxy
- 키워드 백링크 →: what-happens-google-com, docker-container-basics, security-groups-nacl, http-status-codes, dns
- 이 글로 오는 글 ←: browser-fetch, http-message, http-status-codes, k8s-pod-troubleshooting, kubernetes-ingress, layer-mtu-fragmentation, network-layers-overview, network-monitoring, nginx-https-performance, osi-in-practice, packet-capture-tcpdump, ports-and-sockets, redis-basics, rest-api-design, tcp-reliability-congestion, upper-layers-session-presentation-app, what-happens-google-com

#### `osi-in-practice` — OSI 7계층을 알면 현장에서 무엇이 달라지나

- 요약: 에러 메시지가 어느 층에서 나왔는지 읽는 법과, 같은 메시지가 다른 층에서 나오는 함정을 실습 망의 실제 출력으로 본다. 로드 밸런서, 방화벽, 헬스 체크, TLS 종단, 타임아웃을 층으로 나눠 고르는 법도 다룬다.
- 태그: Network, TCP/IP, Troubleshooting, DevOps
- 키워드: L4 로드 밸런서, L7 로드 밸런서, 헬스 체크
- 길이: 499줄
- 소제목: 에러 메시지는 어느 층이 말했는지 알려 준다 / 같은 메시지가 다른 층에서 나오기도 한다 / 로드 밸런서는 어느 층에서 나누느냐로 고른다 / 방화벽도 층마다 따로 있다 / 헬스 체크는 어느 층까지 물어보나 / TLS를 어디서 풀지 정한다 / 타임아웃은 안쪽으로 갈수록 짧게 / 클라우드 제품 이름을 층으로 읽는다 / 네트워크 탓이라고 말하기 전에 모을 것 / 층 번호는 질문을 좁히는 말이다 / 면접에서 나올 만한 질문
- 직접 링크 →: network-layers-overview, http-status-codes, nginx-reverse-proxy, iptables-basics, dns, layer-link-ethernet-arp, proxy-reverse-proxy, tcp-connection-lifecycle, ports-and-sockets, resilience-patterns, https-tls, upper-layers-session-presentation-app, iptables-nat, kubernetes-ingress, gateway, network-troubleshooting-by-layer, packet-capture-tcpdump
- 키워드 백링크 →: k8s-network-policy, timeouts, docker-container-basics, realtime-communication, service-mesh, http-versions, security-groups-nacl, what-happens-google-com, encryption-in-transit, grpc, layer-ip-routing-icmp, udp-and-quic
- 이 글로 오는 글 ←: autoscaling, caching-strategies, cdn-edge-anycast, ci-cd-basics, circuit-breaker, consistent-hashing, deadlocks, event-loop, gateway, grpc, http-status-codes, iptables-nat, k8s-network-policy, k8s-pod-multicontainer, k8s-service-types, kubernetes-ingress, linux-grep-awk-sed, linux-processes-signals, load-balancer-basics, load-balancing-algorithms, long-polling, network-flow-logs, network-layers-overview, network-troubleshooting-by-layer, nginx-reverse-proxy, packet-capture-tcpdump, proxy-reverse-proxy, rate-limiting-in-practice, rendering-ssr, resilience-patterns, rolling-deployment, service-discovery, service-mesh, upper-layers-session-presentation-app, what-happens-google-com

#### `packet-capture-tcpdump` — tcpdump로 계층을 눈으로 보기

- 요약: curl 한 번을 찍어 ARP, DNS, TCP, HTTP가 층별로 지나가는 것을 보고, 필터와 -A·-X·-w 옵션, Wireshark, 컨테이너 안 캡처까지 다룬다. refused, timeout, reset, 502를 패킷 모양으로 가르는 법과 캡처할 때의 개인정보 주의점도 짚는다.
- 태그: Network, Linux, Troubleshooting, TCP/IP
- 키워드: tcpdump, 패킷 캡처, Wireshark, pcap
- 길이: 556줄
- 소제목: 어디서 찍을지부터 정한다 / curl 한 번을 처음부터 끝까지 / 한 줄을 읽는 법 / 필요한 패킷만 거른다 / 내용까지 본다 / 파일로 남기고 Wireshark로 연다 / 장애 장면을 패킷으로 가른다 / 컨테이너와 Pod 안에서 찍는다 / TLS 안은 보이지 않는다, 이름만 빼고 / 찍기 전에 정해 둘 것 / 패킷은 각자의 로그보다 정직하다 / 면접에서 나올 만한 질문
- 직접 링크 →: network-troubleshooting-by-layer, layer-link-ethernet-arp, tcp-connection-lifecycle, network-layers-overview, iptables-nat, https-tls, osi-in-practice
- 키워드 백링크 →: nginx-reverse-proxy, k8s-service-types, docker-container-basics, k8s-pod-troubleshooting, ports-and-sockets, what-happens-google-com, udp-and-quic, dns
- 이 글로 오는 글 ←: encryption-in-transit, http-message, ids-ips, iptables-nat, ipv6-basics, k8s-cni-pod-network, k8s-coredns, kubernetes-ingress, layer-mtu-fragmentation, network-flow-logs, network-layers-overview, network-monitoring, network-troubleshooting-by-layer, osi-in-practice, sdn-vxlan-overlay, service-mesh, tcp-connection-lifecycle, tcp-reliability-congestion, timeouts, udp-and-quic, upper-layers-session-presentation-app, vlan-basics, websocket-deep-dive

### Programming › Network (`programming/network`)

#### `dns` — DNS는 어떻게 이름을 IP로 바꾸나

- 요약: 도메인 이름이 루트, TLD, 권한 있는 네임서버를 거쳐 IP가 되는 과정과 TTL 캐시가 만드는 시차를 따라간다. 레코드 종류, apex CNAME 제약, UDP와 TCP, DoH와 DNSSEC, dig로 장애를 찾는 법까지 다룬다.
- 태그: DNS, Network, Security
- 키워드: DNS, 재귀 리졸버, 권한 있는 네임서버, DNSSEC, CNAME, DoH, TTL
- 길이: 451줄
- 소제목: 전화번호부 한 권으로는 버틸 수 없었다 / 도메인 이름은 오른쪽부터 읽는다 / 이름 하나를 찾기까지 / 캐시와 TTL이 만드는 시차 / 레코드는 이름에 붙은 꼬리표다 / 도메인 꼭대기에는 CNAME을 걸 수 없다 / UDP로 묻다가 TCP로 넘어갈 때 / 질의를 감추는 DoT와 DoH / 답이 진짜인지 확인하는 DNSSEC / 전파된다는 말의 오해 / dig로 직접 확인하기 / 자주 만나는 장애 / 처음 질문으로 돌아가면 / 면접에서 나올 만한 질문
- 직접 링크 →: what-happens-google-com, hosts-file
- 키워드 백링크 →: http-versions, cdn-edge-anycast, sql-batch-timeout-pool, udp-and-quic, ipv6-basics
- 이 글로 오는 글 ←: bloom-filter, blue-green-deployment, browser-fetch, caching-strategies, cdn-edge-anycast, ci-cd-basics, circuit-breaker, clock-skew, core-web-vitals, db-replication-sharding, db-type-key-value, db-type-wide-column, distributed-lock, docker-compose, docker-network-drivers, docker-network-volume, dockerfile-image-layers, eks-cluster-basics, encryption-in-transit, eventual-consistency, exponential-backoff-jitter, gateway, grpc, hosts-file, http-caching-cdn, http-status-codes, http-versions, https-tls, ids-ips, iptables-basics, iptables-nat, ipv6-basics, js-memory-leak, k8s-coredns, k8s-namespace, k8s-network-policy, k8s-pod-scheduling, k8s-pod-troubleshooting, k8s-service-types, kubernetes-ingress, latency-bandwidth-throughput, layer-ip-addressing, layer-ip-routing-icmp, layer-mtu-fragmentation, leader-election, load-balancer-basics, local-custom-domain, lossy-counting, monitoring-basics, network-flow-logs, network-layers-overview, network-monitoring, network-partitions, network-troubleshooting-by-layer, nginx-https-performance, osi-in-practice, packet-capture-tcpdump, pattern-facade, pattern-proxy, ports-and-sockets, postgres-roles-security, proxy-reverse-proxy, pub-sub, rabbitmq-basics, redis-basics, redis-memory-eviction, redis-persistence-ha, scaling-horizontal-vertical, security-groups-nacl, service-discovery, timeouts, udp-and-quic, upper-layers-session-presentation-app, vlan-basics, vpc-basics, vpc-peering-transit-privatelink, vpn-ipsec-wireguard, waf, webhooks, what-happens-google-com

#### `hosts-file` — hosts 파일: DNS보다 먼저 보는 한 줄

- 요약: 운영체제가 DNS보다 먼저 확인하는 hosts 파일의 형식과 조회 순서, 로컬 개발과 서버 이전 테스트에 쓰는 법을 정리한다. 고쳤는데 반영되지 않는 이유와 포트·와일드카드가 안 되는 이유, 보안 위험도 다룬다.
- 태그: DNS, Network, Browser, Security
- 키워드: hosts 파일, /etc/hosts, nsswitch.conf
- 길이: 338줄
- 소제목: DNS보다 먼저 보는 파일 / 한 줄 뜯어보기 / 이름을 찾는 순서 / 어디에 쓰나 / 고쳤는데 그대로인 이유 / 포트도, 와일드카드도 안 된다 / 악성코드가 노리는 파일 / 가장 앞에 있는 한 줄짜리 DNS / 면접에서 나올 만한 질문
- 직접 링크 →: dns
- 키워드 백링크 →: proxy-reverse-proxy, local-custom-domain, http-versions, linux-files-permissions, what-happens-google-com, ipv6-basics
- 이 글로 오는 글 ←: dns, local-custom-domain, network-troubleshooting-by-layer, service-discovery, what-happens-google-com

#### `http-caching-cdn` — HTTP 캐시와 CDN

- 요약: 배포했는데 옛 화면이 보이거나 흰 화면이 뜨는 이유를 HTTP 캐시 규칙으로 푼다. Cache-Control, ETag와 304, 캐시 키와 Vary, CDN 엣지와 무효화, 개인화 페이지를 캐시하면 안 되는 이유까지 다룬다.
- 태그: coupang, HTTP, Cache, CDN, Performance, Browser · 회사: coupang
- 키워드: Cache-Control, ETag, 캐시 무효화, 캐시 스탬피드, stale-while-revalidate
- 길이: 401줄
- 소제목: 응답은 여러 곳에 복사된다 / 신선한 동안은 묻지도 않는다 / Cache-Control 한 줄 뜯어 보기 / 상한 사본이 아직 맞는지 묻기 / 무엇을 같은 요청으로 보나 / 이름에 해시를 넣으면 영원히 캐시할 수 있다 / 엣지에서 기한을 정하는 쪽은 누구인가 / 한꺼번에 만료되면 오리진이 몰린다 / 지우는 데도 시간이 걸린다 / 사람마다 다른 페이지를 공유 캐시에 두면 / 응답 헤더로 확인한다 / 처음 장면을 다시 보면 / 면접에서 나올 만한 질문
- 직접 링크 →: what-happens-google-com, cdn-edge-anycast
- 키워드 백링크 →: http-message, frontend-browser-cache, http-versions, pattern-proxy, loading-patterns, redis-basics, cookie-session-login, cors, dns
- 이 글로 오는 글 ←: ab-testing, api-versioning, browser-fetch, caching-strategies, cdn-edge-anycast, client-data-cache, cors, db-architecture-by-scale, frontend-browser-cache, http-message, http-methods, http-status-codes, json-crud-http, long-polling, nextjs-static-dynamic-rendering, nginx-https-performance, optimistic-locking, proxy-reverse-proxy, pub-sub, rabbitmq-basics, rendering-ssg-isr, rendering-ssr, rendering-strategies, rest-api-design, server-sent-events, upper-layers-session-presentation-app, what-happens-google-com

#### `long-polling` — 롱 폴링 깊게 보기: 대기 시간, 커서, 재연결 폭주, 서버 자원

- 요약: 응답을 붙잡는 시간을 프록시 한도에 맞추는 법과, 응답 사이의 틈에서 이벤트가 사라지는 문제를 커서로 막는 법을 직접 재 본다. 배포 때 몰리는 재연결과 붙잡힌 요청 하나가 쓰는 메모리, 작업자 풀이 멈추는 사고까지 다룬다.
- 태그: HTTP, Network, Nginx, Resilience, Performance
- 키워드: hanging GET, Comet, 롱 폴링 커서
- 길이: 380줄
- 소제목: 요청 하나를 붙잡아 두는 서버 / 붙잡는 시간은 경로에서 가장 짧은 한도가 정한다 / 응답과 다음 요청 사이의 틈 / 커서와 보관 범위 설계 / 모두가 같은 순간에 다시 묻는다 / 붙잡힌 요청 하나가 쓰는 자원 / 롱 폴링 장애를 만났을 때 / 롱 폴링을 고르는 경우 / 면접에서 나올 만한 질문
- 직접 링크 →: realtime-communication, websocket-deep-dive, server-sent-events, timeouts, message-delivery-semantics, exponential-backoff-jitter
- 키워드 백링크 →: http-caching-cdn, http-versions, event-loop, osi-in-practice, sql-batch-timeout-pool, redis-basics
- 이 글로 오는 글 ←: realtime-communication, server-sent-events, websocket-deep-dive

#### `proxy-reverse-proxy` — 프록시와 리버스 프록시: 누구를 대신하나

- 요약: 사내망에서 curl이 막히는 이유와 앱 로그에 로드 밸런서 IP만 찍히는 이유를 프록시가 누구 편에 서 있는지로 푼다. CONNECT 터널과 TLS 가로채기, Ubuntu 프록시 설정, X-Forwarded-For를 오른쪽부터 읽는 법과 PROXY protocol까지 다룬다.
- 태그: Network, HTTP, Security, Proxy, TLS, Linux
- 키워드: 포워드 프록시, 리버스 프록시, X-Forwarded-For, CONNECT 터널, PROXY protocol
- 길이: 649줄
- 소제목: 프록시는 누구를 대신하나 / 프록시에게 보내는 HTTP 요청은 모양이 다르다 / HTTPS는 CONNECT로 터널을 판다 / 회사 프록시가 TLS를 열어 볼 때 / 설정 없이 지나가는 프록시와 PAC 파일 / HTTP를 모르는 프록시, SOCKS5 / Ubuntu에서 프록시 쓰게 하기 / 서버 앞을 지키는 리버스 프록시 / 앱에는 로드 밸런서 주소만 보인다 / X-Forwarded-For 한 줄 뜯어보기 / 진짜 클라이언트 IP 고르기 / 표준 헤더 Forwarded / 헤더를 못 붙이는 L4 로드 밸런서와 PROXY protocol / CDN에서 앱까지, 헤더가 붙는 자리 / 리버스 프록시, 로드 밸런서, API 게이트웨이 / 다시 두 장면으로 / 면접에서 나올 만한 질문
- 직접 링크 →: https-tls, nginx-reverse-proxy, http-caching-cdn, local-custom-domain, gateway
- 키워드 백링크 →: docker-container-basics, osi-in-practice, iptables-basics, http-versions, security-groups-nacl, ports-and-sockets, layer-ip-addressing, http-status-codes, what-happens-google-com, ipv6-basics, udp-and-quic, dns
- 이 글로 오는 글 ←: blue-green-deployment, cdn-edge-anycast, cookie-session-login, docker-compose, docker-network-volume, gateway, hosts-file, http-status-codes, ids-ips, iptables-nat, kubernetes-ingress, layer-ip-addressing, linux-grep-awk-sed, load-balancer-basics, local-custom-domain, network-layers-overview, network-troubleshooting-by-layer, nginx-basics, nginx-reverse-proxy, osi-in-practice, pattern-proxy, rate-limiting-in-practice, realtime-communication, rendering-ssr, rendering-strategies, streaming-ssr-suspense, waf, zero-trust-architecture

#### `realtime-communication` — 서버가 먼저 말하게 하기: 폴링, 롱 폴링, SSE, WebSocket

- 요약: 요청-응답뿐인 HTTP에서 서버가 먼저 소식을 보내는 네 가지 방법을 비교했다. 롱 폴링의 타임아웃, SSE의 재연결과 Last-Event-ID, WebSocket 업그레이드와 프레임, 여러 서버로 늘릴 때의 문제까지 다룬다.
- 태그: WebSocket, HTTP, Network
- 키워드: WebSocket, Server-Sent Events, 롱 폴링, EventSource
- 길이: 596줄
- 소제목: 몇 초마다 다시 묻기: 짧은 폴링 / 대답할 게 생길 때까지 붙잡아 두기: 롱 폴링 / 응답을 끝내지 않고 계속 보내기: SSE / 이벤트 스트림 한 덩어리 뜯어보기 / SSE가 걸려 넘어지는 곳 / HTTP를 벗어나 양방향으로: WebSocket / 업그레이드 요청 뜯어보기 / 서버가 여러 대가 되면 / 로컬에선 되는데 서버에 올리면 멈출 때 / 무엇을 고를까 / 다시 주문 화면으로 / 면접에서 나올 만한 질문
- 직접 링크 →: http-versions, cors, resilience-patterns, nginx-reverse-proxy, operational-transform, crdt, websocket-deep-dive, long-polling, server-sent-events
- 키워드 백링크 →: json-crud-http, proxy-reverse-proxy, base64, kafka-basics, redis-basics, http-status-codes, backpressure
- 이 글로 오는 글 ←: blue-green-deployment, cdn-edge-anycast, frontend-browser-cache, load-balancer-basics, load-balancing-algorithms, loading-patterns, long-polling, message-queue-basics, nginx-basics, nginx-reverse-proxy, operational-transform, osi-in-practice, server-sent-events, vpc-subnets-route-tables, webhooks, websocket-deep-dive

#### `server-sent-events` — Server-Sent Events 깊게 보기: 재연결, 연결 수 제한, 프록시 버퍼링

- 요약: EventSource가 Last-Event-ID를 들고 다시 붙는 과정과 영영 포기하는 응답을 Chromium으로 확인한다. HTTP/1.1의 연결 6개 제한, nginx와 압축이 이벤트를 붙잡는 곳, 하트비트, LLM 답변 스트리밍과 WebSocket 대신 SSE를 고를 때를 다룬다.
- 태그: HTTP, Network, Nginx, Browser, Performance
- 키워드: text/event-stream, Last-Event-ID, X-Accel-Buffering
- 길이: 438줄
- 소제목: 서버가 내려보내는 바이트 그대로 보기 / id와 retry는 다음 이벤트까지 남는다 / 끊기면 다시 붙고, 어떤 응답에는 포기한다 / 탭 일곱 개째에서 사이트가 멈춘다 / 프록시와 압축이 이벤트를 붙잡는 곳 / 조용한 스트림은 끊기고, 끊긴 줄도 모른다 / LLM 답변 스트리밍은 EventSource를 쓰지 않는다 / SSE를 고를 때와 WebSocket을 고를 때 / SSE 장애를 만났을 때 / 경로를 비우면 가장 가벼운 선택 / 면접에서 나올 만한 질문
- 직접 링크 →: realtime-communication, websocket-deep-dive, long-polling, http-versions, loading-patterns
- 키워드 백링크 →: streaming-ssr-suspense, http-message, http-caching-cdn, nginx-reverse-proxy, base64, http-status-codes
- 이 글로 오는 글 ←: long-polling, realtime-communication, websocket-deep-dive

#### `websocket-deep-dive` — WebSocket 깊게 보기: 프레임 바이트부터 하트비트, 백프레셔, 서버 확장까지

- 요약: tcpdump로 잡은 프레임을 바이트 단위로 읽고, nginx 60초 유휴 타임아웃과 ping, 죽은 연결 찾기, bufferedAmount로 보는 백프레셔를 직접 재현한다. 재연결과 이어 받기, Redis로 서버를 늘리는 법, CSWSH와 Origin 검사까지 다룬다.
- 태그: WebSocket, Network, Nginx, Redis, Security
- 키워드: WebSocket 프레임, Sec-WebSocket-Accept, bufferedAmount, CSWSH
- 길이: 582줄
- 소제목: 101 응답이 확인해 주는 것 / 루프백에서 프레임을 잡아 보기 / 길이가 125를 넘으면 헤더가 길어진다 / 마스킹은 암호화가 아니다 / 1분 만에 끊기는 채팅방 / 죽은 연결은 스스로 알려 주지 않는다 / 느린 수신자가 서버 메모리를 먹는다 / 끊긴 뒤 다시 붙고 이어 받기 / 서버가 두 대가 되면 메시지가 반만 간다 / 쿠키로 인증하면 다른 사이트도 연결을 연다 / 운영에서 WebSocket 장애를 좁히는 순서 / 연결을 오래 쥐는 대가 / 면접에서 나올 만한 질문
- 직접 링크 →: realtime-communication, long-polling, server-sent-events, packet-capture-tcpdump, timeouts, tcp-connection-lifecycle, backpressure, exponential-backoff-jitter, pub-sub, load-balancer-basics, cors
- 키워드 백링크 →: browser-fetch, base64, redis-basics, cookie-session-login
- 이 글로 오는 글 ←: long-polling, realtime-communication, server-sent-events

#### `what-happens-google-com` — 주소창에 google.com을 치면 일어나는 일

- 요약: 엔터를 누른 순간부터 화면이 뜰 때까지. URL 해석과 HSTS, DNS 조회, TCP·TLS 핸드셰이크, HTTP/2 요청과 리다이렉트, 렌더링 파이프라인을 순서대로 따라갔다.
- 태그: DNS, TCP, TLS, HTTP, Browser
- 키워드: HTTPS, 3-way handshake, HSTS, 렌더링 파이프라인
- 길이: 404줄
- 소제목: 검색어인가, 주소인가 / 이름을 IP로 바꾸기: DNS / 서버와 연결 맺기: TCP와 TLS / 페이지를 요청하고 받기: HTTP / 받은 HTML을 화면에 그리기 / 캐시가 단계를 건너뛰게 해 준다 / 페이지가 안 뜰 때 몇 번째 단계인지 고르기 / 정리 / 면접에서 나올 만한 질문
- 직접 링크 →: network-troubleshooting-by-layer, osi-in-practice
- 키워드 백링크 →: http-caching-cdn, nginx-basics, dns, https-tls, hosts-file, webhooks, http-versions, cdn-edge-anycast, http-status-codes, ipv6-basics, udp-and-quic
- 이 글로 오는 글 ←: base64, cookie-session-login, core-web-vitals, dns, eks-cluster-basics, encryption-in-transit, frontend-browser-cache, gateway, git-remote-collaboration, helm-dependencies-oci-gitops, hosts-file, html-form-http, http-caching-cdn, http-message, http-methods, http-status-codes, http-versions, https-tls, ids-ips, iptables-basics, iptables-nat, k8s-pod-probes, k8s-project-structure, k8s-service-types, kubernetes-ingress, latency-bandwidth-throughput, layer-link-ethernet-arp, local-custom-domain, network-layers-overview, network-monitoring, network-troubleshooting-by-layer, nginx-basics, nginx-https-performance, nginx-reverse-proxy, osi-in-practice, packet-capture-tcpdump, ports-and-sockets, proxy-reverse-proxy, tcp-connection-lifecycle, timeouts, upper-layers-session-presentation-app, vpc-basics, vpn-ipsec-wireguard, waf, webhooks

### Programming › Network › Cloud Networking (`programming/network/cloud`)

#### `cdn-edge-anycast` — CDN 엣지와 애니캐스트: 같은 IP가 가까운 곳에서 답하는 법

- 요약: 같은 IP가 서울과 도쿄에서 동시에 답하는 애니캐스트와, BGP가 거리 대신 경로로 엣지를 고르는 과정을 본다. 경로가 바뀔 때 TCP가 끊기는 모습, DNS 기반 선택과의 차이, 오리진 실드와 엣지 위치 확인법까지 다룬다.
- 태그: Network, CDN, DNS, Performance, Security
- 키워드: 애니캐스트, Anycast, 엣지 PoP, 오리진 실드
- 길이: 432줄
- 소제목: 같은 IP가 여러 도시에 있다 / 라우터가 고르는 "가까움" / 리눅스로 엣지 두 곳 만들기 / 경로가 바뀌면 TCP 연결은 어디로 가나 / DNS로 엣지를 골라 주는 방식 / 엣지에서 오리진까지 한 번 더 모은다 / 엣지 위치를 확인하는 법 / CDN 앞단에서 흔히 하는 실수 / 같은 번호, 가까운 지점 / 면접에서 나올 만한 질문
- 직접 링크 →: http-caching-cdn, load-balancing-algorithms, dns, security-groups-nacl, proxy-reverse-proxy
- 키워드 백링크 →: osi-in-practice, realtime-communication, http-versions
- 이 글로 오는 글 ←: bloom-filter, dns, http-caching-cdn, latency-bandwidth-throughput, load-balancer-basics, what-happens-google-com

#### `security-groups-nacl` — 보안 그룹과 네트워크 ACL: 기억하는 방화벽과 잊는 방화벽

- 요약: NACL에 80번만 열었더니 사이트가 막히고, 보안 그룹 규칙을 지웠는데 세션이 살아 있는 이유를 상태 기억 여부로 푼다. 임시 포트, 번호순 평가, 보안 그룹 참조, 연결 추적 한도와 흐름 로그로 막힌 곳 찾기까지 다룬다.
- 태그: Network, AWS, Security, Firewall, Linux
- 키워드: 보안 그룹, 네트워크 ACL, NACL
- 길이: 511줄
- 소제목: 두 방화벽이 서 있는 자리 / 보안 그룹은 연결을 기억한다 / NACL은 패킷 하나하나를 본다 / 응답 패킷은 포트가 다르다 / 규칙을 지웠는데 연결이 살아 있다 / 어디서 막혔는지 확인하기 / 무엇을 어디에 걸까 / 두 장면을 다시 보면 / 면접에서 나올 만한 질문
- 직접 링크 →: vpc-basics, iptables-basics, network-flow-logs, terraform-network-iac, vpc-peering-transit-privatelink
- 키워드 백링크 →: vpc-subnets-route-tables, ports-and-sockets, layer-ip-routing-icmp, postgres-getting-started, udp-and-quic, dns
- 이 글로 오는 글 ←: ansible-network-automation, cdn-edge-anycast, ci-cd-basics, clock-skew, docker-network-drivers, eks-cluster-basics, ids-ips, iptables-basics, ipv6-basics, k8s-cni-pod-network, k8s-deploy-pipeline-eks, k8s-project-structure, k8s-service-types, layer-ip-addressing, layer-ip-routing-icmp, layer-mtu-fragmentation, load-balancer-basics, network-config-cicd, network-flow-logs, network-layers-overview, network-partitions, network-troubleshooting-by-layer, nginx-https-performance, osi-in-practice, ports-and-sockets, postgres-connections-pg-hba, proxy-reverse-proxy, sdn-vxlan-overlay, tcp-connection-lifecycle, terraform-basics, terraform-modules-tfvars, terraform-network-iac, udp-and-quic, vpc-basics, vpc-peering-transit-privatelink, vpc-subnets-route-tables, waf, zero-trust-architecture

#### `vpc-basics` — VPC 기본: 클라우드 안에 빌린 내 사설망

- 요약: 인스턴스 안에 공인 IP가 보이지 않는 이유와 프라이빗 서버에서 apt가 멈추는 이유를 VPC의 부품으로 푼다. 리눅스 네임스페이스로 VPC를 흉내 내 IGW의 1:1 NAT, 예약 주소, 메타데이터 보안까지 따라간다.
- 태그: Network, AWS, Cloud, Linux, DevOps
- 키워드: VPC, 인터넷 게이트웨이, 가용 영역
- 길이: 523줄
- 소제목: 남의 건물 안에 내 층을 하나 빌린다 / 리전, 가용 영역, 서브넷의 포함 관계 / VPC를 이루는 부품 / 주소 다섯 개는 처음부터 내 것이 아니다 / 공인 IP는 인스턴스 안에 없다 / 리눅스 네임스페이스로 VPC 하나 만들기 / 패킷 하나가 VPC를 지나는 길 / VPC끼리는 같은 대역을 써도 섞이지 않는다 / VPC 안의 DNS와 메타데이터 / 기본 VPC를 그대로 쓰면 생기는 일 / 현장에서 VPC 때문에 막히는 순간 / VPC를 몇 개로 나눌까 / 다시 처음 장면으로 / 면접에서 나올 만한 질문
- 직접 링크 →: vpc-subnets-route-tables, vpc-peering-transit-privatelink, security-groups-nacl, sdn-vxlan-overlay, layer-ip-addressing, iptables-nat, terraform-network-iac, network-flow-logs
- 키워드 백링크 →: layer-ip-routing-icmp, terraform-basics, iptables-basics, ipv6-basics, layer-link-ethernet-arp, what-happens-google-com, eks-cluster-basics, dns
- 이 글로 오는 글 ←: ansible-network-automation, autoscaling, connection-pool, consistent-hashing, docker-network-drivers, eks-cluster-basics, encryption-at-rest, encryption-in-transit, ids-ips, k8s-cni-pod-network, k8s-deploy-pipeline-eks, k8s-project-structure, k8s-pv-pvc, k8s-service-types, layer-ip-addressing, layer-link-ethernet-arp, layer-mtu-fragmentation, monitoring-basics, n-plus-one-queries, network-config-cicd, network-flow-logs, network-layers-overview, redis-cluster, sdn-vxlan-overlay, security-groups-nacl, terraform-basics, terraform-modules-tfvars, terraform-network-iac, vlan-basics, vpc-peering-transit-privatelink, vpc-subnets-route-tables, waf, webhooks, zero-trust-architecture

#### `vpc-peering-transit-privatelink` — VPC 잇기: 피어링, Transit Gateway, PrivateLink

- 요약: 피어링이 전이되지 않는 이유와 대역이 겹치면 잇지 못하는 이유를 네임스페이스로 재현하고, Transit Gateway 라우트 테이블로 망을 나누는 법과 겹치는 VPC 사이에 서비스 하나만 내놓는 PrivateLink를 비교한다.
- 태그: Network, AWS, Cloud, Architecture, DevOps
- 키워드: VPC 피어링, Transit Gateway, PrivateLink, 인터페이스 엔드포인트
- 길이: 539줄
- 소제목: 다리 하나에 VPC 둘: 피어링 / 친구의 친구는 친구가 아니다 / 대역이 겹치면 다리를 놓을 자리가 없다 / VPC가 많아지면 다리 대신 허브: Transit Gateway / 망을 잇지 않고 서비스 하나만 내놓기: PrivateLink / 셋 중 무엇을 고르나 / 연결했는데 안 통할 때 보는 순서 / 다시 처음 장면으로 / 면접에서 나올 만한 질문
- 직접 링크 →: vpc-basics, vpc-subnets-route-tables, service-mesh, security-groups-nacl, network-flow-logs
- 키워드 백링크 →: db-sharding, ports-and-sockets, layer-ip-addressing, iptables-nat, github-actions-docker-ecr, dns
- 이 글로 오는 글 ←: layer-ip-addressing, layer-link-ethernet-arp, network-layers-overview, security-groups-nacl, terraform-network-iac, vpc-basics, vpc-subnets-route-tables

#### `vpc-subnets-route-tables` — VPC 서브넷과 라우트 테이블: 퍼블릭과 프라이빗을 가르는 한 줄

- 요약: 서브넷의 성격을 정하는 라우트 테이블 연결과 최장 프리픽스 일치, NAT 게이트웨이를 지나며 주소가 두 번 바뀌는 과정을 본다. blackhole 경로, AZ별 NAT, 포트 한도와 유휴 타임아웃, 게이트웨이 엔드포인트까지 다룬다.
- 태그: Network, AWS, Cloud, Linux, Troubleshooting
- 키워드: 퍼블릭 서브넷, 프라이빗 서브넷, NAT 게이트웨이, 게이트웨이 엔드포인트
- 길이: 477줄
- 소제목: 서브넷의 성격은 라우트 테이블이 정한다 / 경로 한 줄 뜯어보기 / 여러 줄이 맞으면 가장 구체적인 줄이 이긴다 / 리눅스로 서브넷마다 다른 라우트 테이블 만들기 / NAT 게이트웨이를 지나며 주소가 두 번 바뀐다 / NAT 게이트웨이는 한 AZ에만 산다 / 가리키던 대상이 사라지면 blackhole이 된다 / 프라이빗 테이블을 IGW로 바꾸면 / NAT 게이트웨이에서 터지는 것들 / 서브넷을 몇 개로, 얼마나 크게 나눌까 / 사고 두 개를 다시 보면 / 면접에서 나올 만한 질문
- 직접 링크 →: vpc-basics, layer-ip-routing-icmp, security-groups-nacl, iptables-nat, connection-pool, vpc-peering-transit-privatelink, k8s-cni-pod-network
- 키워드 백링크 →: browser-fetch, db-type-key-value, iptables-basics, redis-basics, ipv6-basics, layer-ip-addressing, realtime-communication, github-actions-docker-ecr, eks-cluster-basics
- 이 글로 오는 글 ←: eks-cluster-basics, ids-ips, iptables-nat, k8s-project-structure, layer-ip-addressing, layer-ip-routing-icmp, load-balancer-basics, network-config-cicd, network-flow-logs, network-layers-overview, ports-and-sockets, security-groups-nacl, tcp-connection-lifecycle, terraform-network-iac, vpc-basics, vpc-peering-transit-privatelink

### Programming › Network › HTTP (`programming/network/http`)

#### `http-message` — HTTP 메시지는 어떻게 생겼나

- 요약: HTTP 메시지는 첫 줄, 헤더, 빈 줄, 본문으로 된 텍스트다. Host, Content-Type, Content-Length와 chunked, 콘텐츠 협상과 압축, 본문 형식까지 헤더 한 줄이 무엇을 결정하는지 curl로 뜯어본다.
- 태그: HTTP, Network, Browser
- 키워드: 콘텐츠 협상, Transfer-Encoding, Accept-Encoding, multipart/form-data, 요청 스머글링
- 길이: 564줄
- 소제목: curl로 날것의 메시지를 본다 / 텍스트 몇 줄이 전부다 / 응답도 같은 모양이다 / Host가 없으면 400이다 / 본문이 어디서 끝나는지 알려 주기 / 연결을 끊을지 말지 / 같은 주소, 다른 표현 / 압축은 Accept-Encoding으로 고른다 / 본문 형식은 Content-Type이 말한다 / 헤더 이름과 크기에 관한 규칙 / HTTP/2에서는 모양이 바뀐다 / 헤더 한 줄이 장애가 되는 순간 / 다시 415로 돌아가서 / 면접에서 나올 만한 질문
- 직접 링크 →: what-happens-google-com, http-status-codes, http-methods, http-caching-cdn, cookie-session-login, token-login, http-versions, packet-capture-tcpdump, network-troubleshooting-by-layer
- 키워드 백링크 →: https-tls, html-form-http, kubernetes-ingress, base64, db-modeling-normalization
- 이 글로 오는 글 ←: html-form-http, http-caching-cdn, http-methods, http-status-codes, http-versions, json-crud-http, rest-api-design, server-sent-events, upper-layers-session-presentation-app

#### `http-methods` — HTTP 메서드와 안전성·멱등성

- 요약: GET, POST, PUT, PATCH, DELETE는 서버와 맺는 약속이다. 안전과 멱등의 정확한 뜻, PUT과 PATCH의 차이, POST를 다시 보내면 생기는 일과 GET으로 상태를 바꾸면 안 되는 이유를 정리한다.
- 태그: HTTP, REST, Network
- 키워드: 멱등성, 안전한 메서드, JSON Merge Patch, JSON Patch, PUT과 PATCH
- 길이: 522줄
- 소제목: 메서드는 서버와 맺는 약속이다 / 안전, 멱등, 캐시 가능 / 같은 요청을 두 번 보내면 / PUT은 통째로, PATCH는 일부만 / POST를 다시 보내면 주문이 두 개 / GET에 본문을 싣지 않는 이유 / HEAD와 OPTIONS는 묻기만 한다 / 405와 Allow, 대소문자 / 폼은 GET과 POST만 안다 / CONNECT와 TRACE / 스펙대로 하지 않는 서버들 / 프록시는 멱등성을 보고 재시도를 고른다 / 다시 메일 링크로 / 면접에서 나올 만한 질문
- 직접 링크 →: http-message, http-caching-cdn, resilience-patterns, cors, cookie-session-login, http-status-codes, nginx-reverse-proxy
- 키워드 백링크 →: json-crud-http, elasticsearch-inverted-index, gateway, client-data-cache, what-happens-google-com
- 이 글로 오는 글 ←: ansible-network-automation, batch-processing, browser-fetch, crdt, dead-letter-queue, distributed-lock, gateway, html-form-http, http-message, http-status-codes, http-versions, https-tls, idempotency-key, json-crud-http, message-delivery-semantics, message-queue-basics, microservices, nginx-reverse-proxy, pattern-builder, pattern-decorator, race-conditions, resilience-patterns, rest-api-design, retries, service-mesh, webhooks

#### `http-status-codes` — HTTP 상태 코드 제대로 쓰기

- 요약: 상태 코드는 본문을 열어 보지 않는 캐시, 프록시, 모니터링, 재시도 로직이 읽는 유일한 신호다. 리다이렉트 다섯 종류의 차이, 401과 403, 502와 504를 누가 만드는지, 어떤 실패를 재시도할지, Problem Details로 에러 본문을 쓰는 법을 정리했다.
- 태그: HTTP, Network, Backend, API
- 키워드: 상태 코드, Problem Details, PRG 패턴, 308 Permanent Redirect
- 길이: 421줄
- 소제목: 첫 자리 숫자가 먼저다 / 최종 응답 전에 오는 1xx / 성공에도 종류가 있다 / 리다이렉트는 두 가지를 정한다 / POST 다음에는 303 / 리다이렉트가 이어지면 왕복이 쌓인다 / 4xx는 다시 보내도 같다 / 502와 504는 앱이 만들지 않는다 / access.log에서 5xx를 갈라 보기 / 다시 보내도 되는 실패 / 에러 본문은 Problem Details로 / 실패를 200으로 감싸면 / 면접에서 나올 만한 질문
- 직접 링크 →: http-message, http-methods, http-caching-cdn, gateway, nginx-reverse-proxy, network-troubleshooting-by-layer, resilience-patterns
- 키워드 백링크 →: html-form-http, client-data-cache, https-tls, rest-api-design, proxy-reverse-proxy, token-login, db-locking-deadlock, http-versions, osi-in-practice, what-happens-google-com, dns
- 이 글로 오는 글 ←: api-versioning, browser-fetch, canary-release, cors, db-type-time-series, distributed-tracing, grpc, html-form-http, http-message, http-methods, http-versions, idempotency-key, json-crud-http, kubernetes-ingress, layer-mtu-fragmentation, linux-grep-awk-sed, mvc-pattern, network-layers-overview, network-monitoring, network-troubleshooting-by-layer, nginx-basics, nginx-reverse-proxy, observability-basics, optimistic-locking, osi-in-practice, pattern-adapter, pattern-chain-of-responsibility, proxy-reverse-proxy, rate-limiting-in-practice, realtime-communication, rendering-csr-spa, rendering-ssr, rendering-strategies, rest-api-design, server-sent-events, service-mesh, sqld-entity-attribute-relationship, streaming-ssr-suspense, what-happens-google-com

#### `http-versions` — HTTP/1.1에서 HTTP/2, HTTP/3까지

- 요약: HTTP는 버전마다 앞 버전이 남긴 기다림을 하나씩 없앴다. 파이프라이닝이 꺼진 이유부터 HTTP/2의 프레임과 HPACK, TCP 수준의 줄 막힘, QUIC의 0-RTT와 연결 이전, 개발자가 버려야 할 HTTP/1.1 시절 꼼수까지 따라간다.
- 태그: HTTP, Network, Performance, TLS
- 키워드: HTTP/2, HTTP/3, QUIC, 멀티플렉싱, HPACK, 도메인 샤딩
- 길이: 436줄
- 소제목: 요청마다 연결을 새로 맺던 HTTP/1.0 / 연결을 재사용하는 HTTP/1.1 / 텍스트를 프레임으로 쪼갠 HTTP/2 / TCP 아래에서 다시 막히는 줄 / UDP 위에 새로 만든 QUIC / 브라우저는 HTTP/3를 어떻게 알아내나 / 설정한 버전과 실제로 쓰는 버전이 다를 때 / 개발자가 바꿀 것 / 면접에서 나올 만한 질문
- 직접 링크 →: what-happens-google-com, http-message, http-status-codes, tcp-connection-lifecycle, nginx-reverse-proxy, code-splitting
- 키워드 백링크 →: https-tls, browser-fetch, http-methods, webhooks, tcp-reliability-congestion, ports-and-sockets, udp-and-quic, dns
- 이 글로 오는 글 ←: backpressure, base64, cdn-edge-anycast, code-splitting, dns, grpc, hosts-file, html-form-http, http-caching-cdn, http-message, http-status-codes, https-tls, iptables-nat, k8s-service-types, latency-bandwidth-throughput, layer-mtu-fragmentation, load-balancer-basics, load-balancing-algorithms, local-custom-domain, long-polling, microservices, network-layers-overview, nginx-https-performance, osi-in-practice, pattern-proxy, proxy-reverse-proxy, realtime-communication, rest-api-design, server-sent-events, streaming-ssr-suspense, tcp-reliability-congestion, udp-and-quic, upper-layers-session-presentation-app, what-happens-google-com

#### `json-crud-http` — JSON으로 데이터 주고받기: 조회·생성·수정·삭제 끝까지

- 요약: 할 일 자원 하나를 curl과 fetch로 만들고 읽고 고치고 지우면서 실제 요청과 응답을 본다. JSON.stringify가 바꾸는 값, 큰 정수 ID, 201과 Location, PUT과 Merge Patch, 415·422·412, 204에서 터지는 res.json()까지 다룬다.
- 태그: HTTP, REST, API, JSON, JavaScript
- 키워드: JSON.stringify, JSON.parse, reviver, 415 Unsupported Media Type
- 길이: 804줄
- 소제목: JSON은 자바스크립트 객체가 아니다 / stringify가 조용히 바꾸는 값 / 날짜는 문자열로 와서 문자열로 남는다 / 큰 숫자 ID는 문자열로 보낸다 / 할 일 하나의 일생 / 목록은 감싸서 준다 / 하나를 달라고 했는데 없으면 404 / 만들 때는 201과 Location / PUT은 빠진 필드를 기본값으로 만든다 / PATCH에서 null은 지우라는 뜻이다 / 지운 걸 또 지우면 / 형식이 다르면 415 / 문법은 400, 내용은 422 / 동시에 고치면 412 / res.json()이 터지는 응답들 / 폼으로 보낼 때와 무엇이 다른가 / 다시 빈 req.body로 / 면접에서 나올 만한 질문
- 직접 링크 →: http-methods, http-message, browser-fetch, rest-api-design, http-status-codes, html-form-http
- 키워드 백링크 →: cors, optimistic-locking, loading-patterns, upper-layers-session-presentation-app, api-versioning, client-data-cache, resilience-patterns, http-caching-cdn
- 이 글로 오는 글 ←: browser-fetch, cors, db-modeling-normalization, http-methods, pattern-prototype, pattern-proxy, pattern-template-method, postgres-functions-triggers, realtime-communication, sqld-entity-attribute-relationship, sqld-rollup-cube-grouping-sets, terraform-basics, upper-layers-session-presentation-app

### Programming › Network › Infrastructure (`programming/network/infrastructure`)

#### `load-balancer-basics` — 로드 밸런서 기본: 헬스 체크, 드레이닝, 세션 고정, 이중화

- 요약: VIP로 받은 요청을 서버로 넘기는 길(프록시·NAT·DSR), 수동·능동 헬스 체크의 판정 시간, 드레이닝으로 배포 중 502를 없애는 순서, 쿠키 세션 고정의 함정, VRRP로 로드 밸런서 자신을 이중화하는 법을 실제 출력으로 따라간다.
- 태그: Network, Load Balancer, DevOps, Linux
- 키워드: 커넥션 드레이닝, Direct Server Return, VRRP, sticky session, 능동 헬스 체크
- 길이: 554줄
- 소제목: 로드 밸런서가 맡은 네 가지 일 / DNS로 나누면 안 되나 / 패킷이 서버까지 가는 길 / 앞에서 받은 연결과 뒤로 여는 연결 / 살아 있는지 묻는 법: 수동과 능동 / 서버를 뺄 때는 드레이닝부터 / 같은 손님을 같은 서버로 / 로드 밸런서가 죽으면 / 현장에서 로드 밸런서를 의심하는 순간 / 고르는 것보다 빼고 넣는 것이 어렵다 / 면접에서 나올 만한 질문
- 직접 링크 →: load-balancing-algorithms, nginx-reverse-proxy, osi-in-practice, dns, proxy-reverse-proxy, ports-and-sockets, tcp-connection-lifecycle, k8s-pod-probes, cdn-edge-anycast
- 키워드 백링크 →: k8s-pod-lifecycle, iptables-nat, vpc-subnets-route-tables, docker-container-basics, realtime-communication, browser-fetch, layer-link-ethernet-arp, http-versions, rolling-deployment, security-groups-nacl, redis-basics, client-data-cache, grpc
- 이 글로 오는 글 ←: circuit-breaker, cookie-session-login, layer-link-ethernet-arp, load-balancing-algorithms, nginx-reverse-proxy, rolling-deployment, scaling-horizontal-vertical, service-discovery, websocket-deep-dive

#### `load-balancing-algorithms` — 로드 밸런싱 알고리즘: 라운드 로빈부터 P2C, 일관 해싱까지

- 요약: 같은 요청 2만 개에 라운드 로빈, 가중치, least-conn, IP 해시, P2C를 돌려 서버별 몫과 p99를 비교했다. 느린 서버 앞에 쌓이는 줄, 여러 로드 밸런서가 한 서버로 몰리는 현상, 해시가 서버 증감에 흔들리는 정도를 숫자로 보고 언제 무엇을 고를지 정리한다.
- 태그: Network, Load Balancer, Algorithm, Performance
- 키워드: Power of Two Choices, P2C, 가중 라운드 로빈, least request
- 길이: 404줄
- 소제목: 실험 무대: 서버 셋, 요청 2만 개 / 차례대로 돌리면 느린 서버가 무너진다 / 지금 덜 바쁜 서버로 / 모두가 같은 서버를 고를 때 / 둘만 뽑아서 비교하기 / 같은 키는 같은 서버로 / 응답 시간을 보는 방법들 / 무엇을 고를까 / 분배가 이상할 때 확인하는 순서 / 같은 숫자, 다른 부하 / 면접에서 나올 만한 질문
- 직접 링크 →: load-balancer-basics, nginx-reverse-proxy, consistent-hashing, osi-in-practice
- 키워드 백링크 →: iptables-nat, realtime-communication, iptables-basics, service-mesh, http-versions, cookie-session-login, grpc, caching-strategies
- 이 글로 오는 글 ←: canary-release, cdn-edge-anycast, consistent-hashing, grpc, latency-bandwidth-throughput, load-balancer-basics, nginx-reverse-proxy, pattern-strategy

#### `sdn-vxlan-overlay` — SDN과 VXLAN 오버레이: 물리망 위에 논리망 얹기

- 요약: Pod IP가 노드 캡처에 안 보이는 이유를 VXLAN 캡슐화로 푼다. VTEP과 FDB, flood-and-learn과 EVPN, 제어 평면을 떼어 낸 SDN, 조용히 사라지는 큰 패킷과 ECMP까지 실제 캡처로 본다.
- 태그: Network, Kubernetes, Linux, Troubleshooting, VXLAN
- 키워드: VXLAN, VTEP, SDN, 언더레이
- 길이: 381줄
- 소제목: 랙을 넘어가면 VLAN이 버겁다 / 50바이트를 덧씌운다 / 직접 오버레이를 만든다 / MAC이 어느 호스트 뒤에 있는지 누가 아나 / 컨트롤러가 망을 그린다 / 오버레이가 조용히 패킷을 버릴 때 / 언더레이는 출발지 포트를 보고 길을 나눈다 / VXLAN 말고 다른 선택지 / 오버레이에서 장애를 좁히는 법 / 상자 속의 상자, 그리고 그걸 그리는 손 / 면접에서 나올 만한 질문
- 직접 링크 →: vlan-basics, layer-mtu-fragmentation, vpn-ipsec-wireguard, vpc-basics, k8s-cni-pod-network
- 키워드 백링크 →: eks-cluster-basics, packet-capture-tcpdump, layer-link-ethernet-arp, security-groups-nacl, ipv6-basics, layer-ip-routing-icmp, udp-and-quic
- 이 글로 오는 글 ←: docker-network-drivers, docker-network-volume, k8s-cni-pod-network, layer-mtu-fragmentation, udp-and-quic, vlan-basics, vpc-basics, vpn-ipsec-wireguard

#### `vlan-basics` — VLAN: 스위치 하나를 여러 망으로 나누기

- 요약: 같은 대역인데 ping이 안 되는 이유를 802.1Q 태그와 액세스·트렁크 포트로 푼다. VLAN 사이 라우팅, 네이티브 VLAN과 VLAN 호핑, 리눅스 VLAN 인터페이스와 현장 점검 순서까지 다룬다.
- 태그: Network, TCP/IP, Linux, Security, Troubleshooting, VLAN
- 키워드: VLAN, 802.1Q, 트렁크 포트, 네이티브 VLAN
- 길이: 459줄
- 소제목: 스위치 하나에 망 하나면 생기는 일 / 4바이트 태그 한 장 / 액세스 포트와 트렁크 포트 / 직접 만들어 본 VLAN 스위치 / VLAN 사이를 잇는 라우터 / 태그 없는 프레임은 어느 VLAN인가 / 리눅스 서버에서 VLAN 다루기 / 4094개로 모자랄 때 / 현장에서 VLAN을 의심하는 순간 / 같은 스위치, 다른 망 / 면접에서 나올 만한 질문
- 직접 링크 →: layer-link-ethernet-arp, sdn-vxlan-overlay, vpc-basics, layer-mtu-fragmentation
- 키워드 백링크 →: packet-capture-tcpdump, layer-ip-routing-icmp, udp-and-quic, dns
- 이 글로 오는 글 ←: ansible-network-automation, docker-network-drivers, ipv6-basics, layer-link-ethernet-arp, network-layers-overview, sdn-vxlan-overlay

#### `vpn-ipsec-wireguard` — VPN: IPsec과 WireGuard로 터널 만들기

- 요약: 패킷을 암호화해 다른 패킷 안에 넣는 VPN을 IPsec의 IKEv2·ESP와 WireGuard의 핸드셰이크·AllowedIPs로 따라간다. NO_PROPOSAL_CHOSEN 같은 실패 메시지, NAT-T, 스플릿 터널과 MTU 문제까지 다룬다.
- 태그: Network, Security, Linux, Troubleshooting, VPN
- 키워드: IPsec, WireGuard, IKEv2, AllowedIPs
- 길이: 523줄
- 소제목: 남의 길 위에 내 전용 통로를 낸다 / 패킷 안에 패킷을 넣는다 / IPsec은 두 단계로 나뉜다 / IPsec이 안 붙을 때 나오는 세 가지 메시지 / NAT를 지나는 법 / WireGuard는 설정할 게 거의 없다 / AllowedIPs가 라우팅과 방화벽을 겸한다 / 무엇을 터널로 보낼 것인가 / 무엇을 고를까 / 현장에서 VPN을 들여다보는 순서 / 결국 감싸고, 열쇠를 나누고, 무엇을 넣을지 정한다 / 면접에서 나올 만한 질문
- 직접 링크 →: layer-mtu-fragmentation, sdn-vxlan-overlay, udp-and-quic, layer-ip-routing-icmp, zero-trust-architecture
- 키워드 백링크 →: browser-fetch, webhooks, what-happens-google-com, ipv6-basics, pattern-abstract-factory, dns
- 이 글로 오는 글 ←: docker-network-drivers, layer-mtu-fragmentation, sdn-vxlan-overlay, udp-and-quic, zero-trust-architecture

### Programming › Network › OSI · TCP/IP (`programming/network/layers`)

#### `ipv6-basics` — IPv6: 주소를 스스로 만들고 이웃을 찾는 법

- 요약: DHCP 없이 생기는 IPv6 주소의 정체를 라우터 광고와 SLAAC, 중복 검사, NDP 이웃 찾기로 따라간다. 링크 로컬 게이트웨이, 듀얼 스택과 NAT64, ICMPv6를 막으면 생기는 장애까지 다룬다.
- 태그: Network, TCP/IP, Linux, Security, IPv6
- 키워드: IPv6, SLAAC, NDP, 링크 로컬 주소, NAT64
- 길이: 454줄
- 소제목: 주소가 모자라서 생긴 일 / 한 랜카드에 주소가 여러 개인 게 정상이다 / 인터페이스 ID는 MAC에서 만들 수 있다 / DHCP 없이 주소를 받는 SLAAC / ARP 대신 이웃 요청과 이웃 광고 / 기본 게이트웨이가 링크 로컬 주소인 이유 / IPv4와 섞여 사는 법 / NAT가 없으니 방화벽이 문을 지킨다 / 현장에서 IPv6가 원인일 때 / 주소가 넉넉해지면 바뀌는 것 / 면접에서 나올 만한 질문
- 직접 링크 →: layer-ip-addressing, layer-link-ethernet-arp, iptables-nat, iptables-basics, layer-mtu-fragmentation, vlan-basics
- 키워드 백링크 →: packet-capture-tcpdump, security-groups-nacl, udp-and-quic, dns
- 이 글로 오는 글 ←: clock-skew, dns, docker-network-volume, eks-cluster-basics, hosts-file, iptables-basics, iptables-nat, k8s-coredns, k8s-network-policy, layer-ip-addressing, layer-ip-routing-icmp, layer-link-ethernet-arp, layer-mtu-fragmentation, network-layers-overview, nginx-basics, ports-and-sockets, postgres-connections-pg-hba, postgres-roles-security, proxy-reverse-proxy, rate-limiting-in-practice, sdn-vxlan-overlay, terraform-modules-tfvars, udp-and-quic, vpc-basics, vpc-subnets-route-tables, vpn-ipsec-wireguard, webhooks, what-happens-google-com

#### `layer-ip-addressing` — IP 주소와 서브넷: CIDR, 사설 대역, 게이트웨이

- 요약: IP 주소를 비트로 쪼개 서브넷 마스크와 CIDR을 읽고, 같은 망인지 게이트웨이로 보낼지 정하는 계산을 해 본다. 사설·특수 대역, 서브네팅, Docker·쿠버네티스·VPC 대역이 겹칠 때 생기는 일과 IPv6 주소까지 다룬다.
- 태그: Network, TCP/IP, Docker, Kubernetes
- 키워드: CIDR, 서브넷 마스크, 사설 대역, RFC 1918
- 길이: 387줄
- 소제목: 주소 하나에 망 번호와 기기 번호가 들어 있다 / 서브넷 마스크를 비트로 보기 / 망 하나에 몇 대를 붙일 수 있나 / 같은 망이면 직접, 아니면 게이트웨이로 / 사설 대역과 특수한 주소들 / 큰 대역을 작게 나누기 / 대역이 겹치면 길이 사라진다 / IPv6 주소 읽기 / 현장에서 주소와 마주치는 순간 / 동네와 번지 / 면접에서 나올 만한 질문
- 직접 링크 →: network-layers-overview, layer-link-ethernet-arp, layer-ip-routing-icmp, iptables-nat, ports-and-sockets, ipv6-basics, proxy-reverse-proxy
- 키워드 백링크 →: vpc-peering-transit-privatelink, k8s-network-policy, docker-container-basics, vpc-subnets-route-tables, k8s-cni-pod-network, security-groups-nacl, vpc-basics, eks-cluster-basics, dns
- 이 글로 오는 글 ←: eks-cluster-basics, ids-ips, ipv6-basics, k8s-cni-pod-network, k8s-project-structure, layer-ip-routing-icmp, layer-link-ethernet-arp, network-layers-overview, network-troubleshooting-by-layer, postgres-connections-pg-hba, postgres-roles-security, proxy-reverse-proxy, terraform-modules-tfvars, terraform-network-iac, vpc-basics, vpc-peering-transit-privatelink, vpc-subnets-route-tables, webhooks

#### `layer-ip-routing-icmp` — 라우팅과 ICMP: 패킷이 길을 찾는 법

- 요약: 라우팅 테이블을 읽고 가장 긴 프리픽스가 이기는 규칙을 직접 계산해 본다. TTL과 ICMP, traceroute와 ping이 실제로 재는 것, 별표를 읽는 법, 비대칭 경로와 ip_forward 같은 현장의 함정까지 다룬다.
- 태그: Network, TCP/IP, Linux, Troubleshooting
- 키워드: 라우팅 테이블, 최장 접두사 일치, traceroute, ICMP
- 길이: 623줄
- 소제목: 실습 망 만들기 / 라우터는 다음 한 칸만 안다 / 가장 길게 맞는 경로가 이긴다 / 패킷 하나가 두 라우터를 건너는 길 / 라우터를 켜는 스위치, ip_forward / TTL은 길을 잃은 패킷을 끝낸다 / ICMP: IP가 보내는 오류 보고서 / traceroute는 TTL을 하나씩 늘린다 / 별표를 읽는 법 / ping이 말해 주는 것과 말해 주지 않는 것 / 현장에서 경로를 의심하는 순간 / 한 칸씩 넘기는 일 / 면접에서 나올 만한 질문
- 직접 링크 →: layer-ip-addressing, network-layers-overview, layer-mtu-fragmentation, iptables-basics, dns
- 키워드 백링크 →: vpc-subnets-route-tables, docker-container-basics, layer-link-ethernet-arp, iptables-nat, security-groups-nacl, ipv6-basics, udp-and-quic
- 이 글로 오는 글 ←: docker-network-drivers, ids-ips, iptables-basics, k8s-cni-pod-network, k8s-project-structure, k8s-service-types, layer-ip-addressing, layer-link-ethernet-arp, layer-mtu-fragmentation, network-flow-logs, network-layers-overview, network-monitoring, network-troubleshooting-by-layer, osi-in-practice, ports-and-sockets, sdn-vxlan-overlay, security-groups-nacl, tcp-reliability-congestion, traffic-shaping-qos, udp-and-quic, vlan-basics, vpc-basics, vpc-subnets-route-tables, vpn-ipsec-wireguard

#### `layer-link-ethernet-arp` — 데이터 링크 계층: 이더넷 프레임, MAC 주소, 스위치, ARP

- 요약: 같은 망 안에서 프레임을 건네는 L2를 캡처로 따라간다. 이더넷 프레임과 MAC 주소 읽기, 스위치가 포트를 배우는 법, ARP와 이웃 캐시 상태, Gratuitous ARP, VLAN과 물리 계층까지 다룬다.
- 태그: Network, TCP/IP, Linux
- 키워드: ARP, MAC 주소, 이더넷 프레임, Gratuitous ARP
- 길이: 493줄
- 소제목: 선과 전파 위의 일: 물리 계층 / 이더넷 프레임 한 장 / MAC 주소 읽기 / 스위치는 보낸 주소로 길을 배운다 / IP는 아는데 MAC을 모를 때: ARP / 다른 망으로 갈 때는 게이트웨이의 MAC을 묻는다 / ARP 캐시와 이웃의 상태 / 주인이 바뀌었다고 알리는 Gratuitous ARP / VLAN: 스위치 하나를 여러 망으로 / IPv6에는 ARP가 없다 / 현장에서 L2를 만나는 순간 / 한 구간을 맡는 층 / 면접에서 나올 만한 질문
- 직접 링크 →: network-layers-overview, layer-mtu-fragmentation, docker-network-volume, layer-ip-routing-icmp, layer-ip-addressing, vlan-basics, iptables-basics, ipv6-basics
- 키워드 백링크 →: vpc-peering-transit-privatelink, docker-container-basics, what-happens-google-com, load-balancer-basics, vpc-basics
- 이 글로 오는 글 ←: docker-network-drivers, docker-network-volume, encryption-in-transit, iptables-basics, ipv6-basics, k8s-cni-pod-network, k8s-service-types, layer-ip-addressing, layer-ip-routing-icmp, layer-mtu-fragmentation, load-balancer-basics, network-layers-overview, network-troubleshooting-by-layer, osi-in-practice, packet-capture-tcpdump, sdn-vxlan-overlay, vlan-basics, vpc-basics

#### `layer-mtu-fragmentation` — MTU와 단편화: 큰 패킷이 사라질 때

- 요약: 작은 요청은 되고 큰 응답만 멈추는 장애를 MTU로 푼다. MTU와 MSS, IP 단편화, DF와 PMTUD, ICMP가 막힐 때 생기는 블랙홀을 재현하고 MSS 클램핑과 터널·컨테이너의 MTU 설정으로 고친다.
- 태그: Network, TCP/IP, Linux, Docker, Troubleshooting
- 키워드: MTU, MSS 클램핑, PMTUD, 단편화
- 길이: 495줄
- 소제목: 한 번에 실을 수 있는 크기, MTU / MSS는 MTU에서 헤더를 뺀 값 / 큰 패킷을 쪼개는 단편화 / DF 비트와 Path MTU Discovery / ICMP가 막히면 블랙홀이 된다 / MSS 클램핑으로 돌아가기 / 터널과 컨테이너가 MTU를 깎는다 / 현장에서 MTU를 의심하는 순간 / 작은 건 되고 큰 것만 안 될 때 / 면접에서 나올 만한 질문
- 직접 링크 →: layer-ip-routing-icmp, network-layers-overview, iptables-basics, packet-capture-tcpdump, network-troubleshooting-by-layer, tcp-connection-lifecycle
- 키워드 백링크 →: vpn-ipsec-wireguard, vpc-basics, https-tls, k8s-cni-pod-network, layer-link-ethernet-arp, http-versions, sdn-vxlan-overlay, security-groups-nacl, http-status-codes, ipv6-basics, udp-and-quic, dns
- 이 글로 오는 글 ←: docker-network-drivers, garbage-collection, iptables-basics, ipv6-basics, js-memory-leak, k8s-cni-pod-network, layer-ip-routing-icmp, layer-link-ethernet-arp, network-layers-overview, network-troubleshooting-by-layer, redis-memory-eviction, sdn-vxlan-overlay, tcp-connection-lifecycle, tcp-reliability-congestion, udp-and-quic, vlan-basics, vpn-ipsec-wireguard

#### `network-layers-overview` — OSI 7계층과 TCP/IP 4계층: 왜 나눠서 보나

- 요약: 통신을 층으로 나누는 이유와 데이터가 헤더를 입고 벗는 과정을 실제 프레임 한 장으로 확인한다. OSI와 TCP/IP의 대응, 장비가 읽는 깊이, 실무에서 말하는 L4와 L7의 뜻까지 정리한다.
- 태그: Network, TCP/IP
- 키워드: OSI 7계층, TCP/IP 4계층, OSI 모델
- 길이: 425줄
- 소제목: 한 덩어리로 만들면 아무것도 못 바꾼다 / 봉투 안에 봉투 / 실제 프레임 한 장을 벗겨 보면 / 층마다 데이터를 부르는 이름 / 일곱 층과 네 층 / 장비는 자기 층까지만 뜯어 본다 / L4, L7이라고 부를 때 / 현장에서 계층 번호가 쓰이는 순간 / 층이 깔끔하게 나뉘지 않는 곳 / 이 시리즈에서 이어서 볼 것 / 층을 나눠 보는 이유 / 면접에서 나올 만한 질문
- 직접 링크 →: layer-ip-routing-icmp, layer-link-ethernet-arp, layer-ip-addressing, ports-and-sockets, upper-layers-session-presentation-app, iptables-nat, osi-in-practice, http-status-codes, nginx-reverse-proxy, network-troubleshooting-by-layer, packet-capture-tcpdump, layer-mtu-fragmentation, tcp-connection-lifecycle, tcp-reliability-congestion, udp-and-quic, what-happens-google-com
- 키워드 백링크 →: proxy-reverse-proxy, vpc-subnets-route-tables, docker-container-basics, gateway, iptables-basics, vpc-peering-transit-privatelink, http-versions, security-groups-nacl, vlan-basics, ipv6-basics, vpc-basics, dns
- 이 글로 오는 글 ←: layer-ip-addressing, layer-ip-routing-icmp, layer-link-ethernet-arp, layer-mtu-fragmentation, osi-in-practice, packet-capture-tcpdump, tcp-connection-lifecycle, upper-layers-session-presentation-app

#### `ports-and-sockets` — 포트와 소켓: 프로세스까지 찾아가는 마지막 주소

- 요약: 연결을 가르는 다섯 값, 듣는 소켓과 연결된 소켓, 커널이 패킷을 소켓에 넘기는 순서를 본다. 0.0.0.0과 127.0.0.1의 차이로 생기는 '로컬에선 되는데 Docker에선 안 되는' 문제, Address already in use와 SO_REUSEADDR, 임시 포트 고갈까지 다룬다.
- 태그: Network, TCP/IP, Linux, Docker, Troubleshooting
- 키워드: 5-tuple, 임시 포트, SO_REUSEADDR, SO_REUSEPORT, Address already in use
- 길이: 494줄
- 소제목: IP가 건물 주소라면 포트는 호수다 / 연결 하나를 가르는 다섯 값 / 듣는 소켓과 연결된 소켓 / 커널이 패킷을 소켓에 넘기는 순서 / 어느 주소에서 들을 것인가 / 이미 쓰는 중인 포트 / 임시 포트가 바닥나는 순간 / 소켓도 파일이다 / 현장에서 포트를 확인하는 순서 / 마지막 주소까지 찾아가는 길 / 면접에서 나올 만한 질문
- 직접 링크 →: tcp-connection-lifecycle, docker-network-volume, iptables-nat, udp-and-quic, network-troubleshooting-by-layer, upper-layers-session-presentation-app
- 키워드 백링크 →: elasticsearch-inverted-index, vpc-subnets-route-tables, iptables-basics, postgres-getting-started, linux-systemd-systemctl, linux-files-permissions, security-groups-nacl, sql-batch-timeout-pool, redis-basics, what-happens-google-com, ipv6-basics, layer-ip-routing-icmp, dns
- 이 글로 오는 글 ←: http-versions, layer-ip-addressing, linux-grep-awk-sed, load-balancer-basics, network-flow-logs, network-layers-overview, network-monitoring, network-troubleshooting-by-layer, osi-in-practice, packet-capture-tcpdump, proxy-reverse-proxy, security-groups-nacl, tcp-connection-lifecycle, udp-and-quic, vpc-peering-transit-privatelink

#### `tcp-connection-lifecycle` — TCP 연결의 일생: 3-way handshake부터 TIME_WAIT까지

- 요약: TCP 연결이 맺어지고 끊기기까지 지나는 상태를 실제 캡처로 따라간다. accept 큐, TIME_WAIT가 남는 이유, CLOSE_WAIT가 쌓이는 버그, RST와 keepalive, ss로 상태를 읽어 장애를 좁히는 법까지 다룬다.
- 태그: Network, TCP, TCP/IP, Linux, Troubleshooting
- 키워드: TIME_WAIT, CLOSE_WAIT, accept 큐, SYN flood
- 길이: 589줄
- 소제목: 연결은 양쪽 커널의 메모에만 있다 / 번호를 맞추는 세 번의 인사 / 커널 안의 두 대기열 / 대답이 없을 때와 거절당할 때 / 상태 열한 개를 따라가기 / 끊을 때는 네 번 인사한다 / TIME_WAIT가 60초나 남는 이유 / CLOSE_WAIT가 쌓이면 내 코드를 본다 / RST는 대화를 끊는 비상 버튼 / 조용히 죽은 연결을 찾는 keepalive / 현장에서 상태 열을 읽는 법 / 상태 전이를 직접 따라가 보기 / 연결의 일생을 한 번에 / 면접에서 나올 만한 질문
- 직접 링크 →: network-layers-overview, ports-and-sockets, layer-mtu-fragmentation, tcp-reliability-congestion, packet-capture-tcpdump
- 키워드 백링크 →: what-happens-google-com, timeouts, vpc-subnets-route-tables, browser-fetch, iptables-basics, security-groups-nacl, sql-batch-timeout-pool
- 이 글로 오는 글 ←: distributed-tracing, http-versions, iptables-basics, k8s-pod-lifecycle, layer-mtu-fragmentation, load-balancer-basics, network-flow-logs, network-layers-overview, network-monitoring, nginx-reverse-proxy, osi-in-practice, packet-capture-tcpdump, pattern-state, ports-and-sockets, tcp-reliability-congestion, udp-and-quic, websocket-deep-dive

#### `tcp-reliability-congestion` — TCP는 어떻게 믿을 만한가: 재전송, 흐름 제어, 혼잡 제어

- 요약: 시퀀스 번호와 ACK, RTO 재전송과 빠른 재전송, 수신 윈도와 혼잡 윈도가 어떻게 빠짐없이, 넘치지 않게 보내는지 본다. 먼 곳일수록 느린 이유를 대역폭 지연 곱으로 계산하고, 40ms 지연을 만드는 Nagle과 지연 ACK, ss -ti로 느린 연결을 읽는 법까지 다룬다.
- 태그: Network, TCP, TCP/IP, Performance, Linux
- 키워드: 혼잡 제어, 흐름 제어, 대역폭 지연 곱, Nagle 알고리즘, BBR
- 길이: 404줄
- 소제목: 번호는 바이트마다, 확인은 다음 번호로 / 확인이 안 오면 기다렸다가 다시 보낸다 / 같은 ACK가 세 번 오면 기다리지 않는다 / 받는 쪽이 넘치지 않게 하는 흐름 제어 / 길이 넘치지 않게 하는 혼잡 제어 / CUBIC과 BBR / 멀리 갈수록 느린 이유는 대역폭과 지연의 곱이다 / 작은 패킷 두 개가 40ms를 만든다 / 현장에서 느린 연결을 들여다보기 / 믿을 만하다는 것의 값 / 면접에서 나올 만한 질문
- 직접 링크 →: tcp-connection-lifecycle, http-versions, traffic-shaping-qos, network-troubleshooting-by-layer, layer-mtu-fragmentation, udp-and-quic
- 키워드 백링크 →: iptables-basics, packet-capture-tcpdump, redis-basics, grpc, layer-ip-routing-icmp
- 이 글로 오는 글 ←: backpressure, http-versions, latency-bandwidth-throughput, network-layers-overview, network-monitoring, tcp-connection-lifecycle, traffic-shaping-qos, udp-and-quic

#### `udp-and-quic` — UDP와 QUIC: 연결 없이 빨리 보내기

- 요약: UDP 헤더 8바이트가 무엇을 담고 연결이 없으면 무엇이 달라지는지 본다. 버퍼가 넘칠 때 조용히 사라지는 데이터그램, 반사·증폭 공격, NAT가 UDP를 금방 잊는 이유를 보고, UDP 위에 TCP를 다시 지은 QUIC을 전송 계층의 눈으로 본다.
- 태그: Network, TCP/IP, UDP, Security, Linux
- 키워드: UDP, 증폭 공격, UdpRcvbufErrors
- 길이: 408줄
- 소제목: 주소만 적어 던지는 8바이트 / 연결이 없으면 일어나는 일 / 무엇을 포기하고 무엇을 얻나 / 버퍼가 넘치면 조용히 버린다 / 질문보다 답이 큰 프로토콜은 무기가 된다 / NAT와 방화벽은 UDP를 오래 기억하지 않는다 / UDP 위에 다시 지은 TCP, QUIC / 현장에서 UDP와 QUIC을 다룰 때 / 질문 하나를 패킷 하나로 / 보장을 내려놓은 대가와 보상 / 면접에서 나올 만한 질문
- 직접 링크 →: tcp-reliability-congestion, http-versions, tcp-connection-lifecycle, dns, layer-mtu-fragmentation, iptables-nat, ports-and-sockets
- 키워드 백링크 →: vpn-ipsec-wireguard, iptables-basics, packet-capture-tcpdump, https-tls, sdn-vxlan-overlay, security-groups-nacl, network-monitoring, ipv6-basics, layer-ip-routing-icmp
- 이 글로 오는 글 ←: clock-skew, dns, docker-container-basics, docker-network-drivers, docker-network-volume, gateway, http-versions, https-tls, iptables-basics, iptables-nat, ipv6-basics, k8s-cni-pod-network, k8s-coredns, k8s-network-policy, k8s-service-types, layer-ip-routing-icmp, layer-mtu-fragmentation, network-flow-logs, network-layers-overview, network-monitoring, nginx-https-performance, osi-in-practice, packet-capture-tcpdump, ports-and-sockets, proxy-reverse-proxy, sdn-vxlan-overlay, security-groups-nacl, service-discovery, tcp-reliability-congestion, upper-layers-session-presentation-app, vlan-basics, vpn-ipsec-wireguard, what-happens-google-com

#### `upper-layers-session-presentation-app` — 세션·표현·응용 계층은 어디로 갔나

- 요약: OSI의 세션·표현 계층이 TCP/IP에서 응용 계층으로 합쳐진 이유와, 그 일을 지금 누가 하는지 본다. 문자 인코딩·직렬화·압축, TLS가 몇 계층인지, 응용 프로토콜의 지도, wrong version number처럼 위쪽 층에서 나는 에러를 가려내는 법까지 다룬다.
- 태그: Network, TCP/IP, TLS, Encoding, HTTP
- 키워드: 세션 계층, 표현 계층, 문자 인코딩, wrong version number
- 길이: 365줄
- 소제목: 위의 세 층이 한 층이 된 사연 / 세션 계층이 하던 일은 흩어졌다 / 표현 계층이 하던 일은 라이브러리가 한다 / TLS는 몇 계층인가 / 응용 계층의 지도 / 첫 바이트로 프로토콜 알아보기 / 현장에서 위쪽 층을 가르는 법 / 층은 합쳐졌고 일은 남았다 / 면접에서 나올 만한 질문
- 직접 링크 →: network-layers-overview, https-tls, cookie-session-login, json-crud-http, base64, osi-in-practice, http-message, dns, network-troubleshooting-by-layer
- 키워드 백링크 →: grpc, packet-capture-tcpdump, http-versions, what-happens-google-com, http-caching-cdn, udp-and-quic
- 이 글로 오는 글 ←: base64, json-crud-http, network-layers-overview, osi-in-practice, ports-and-sockets

### Programming › Network › Performance (`programming/network/performance`)

#### `latency-bandwidth-throughput` — 지연, 대역폭, 처리량: 빠르다는 말의 세 가지 숫자

- 요약: 회선을 열 배로 올려도 API가 빨라지지 않는 이유를 지연·대역폭·처리량을 떼어 재 보며 푼다. 지연의 네 조각, 작은 요청을 지배하는 왕복 횟수, 창 크기가 정하는 상한, 손실이 만드는 꼬리 지연, 리틀의 법칙까지 다룬다.
- 태그: Network, Performance, TCP/IP, Linux
- 키워드: 전파 지연, 직렬화 지연, goodput, 리틀의 법칙
- 길이: 379줄
- 소제목: 실험 망: 지연과 대역폭을 따로 돌리는 장치 / 세 숫자가 가리키는 것 / 지연은 네 조각으로 나뉜다 / 작은 파일은 왕복 횟수가, 큰 파일은 대역폭이 정한다 / 창이 작으면 넓은 길도 좁게 쓴다 / 보낸 양과 받은 양이 다르다 / 평균은 꼬리를 숨긴다 / 지연이 늘면 처리량도 줄어든다 / "느리다"를 숫자 셋으로 쪼개기 / 처음 질문으로 돌아가면 / 면접에서 나올 만한 질문
- 직접 링크 →: tcp-reliability-congestion, traffic-shaping-qos, cdn-edge-anycast, http-versions, connection-pool, load-balancing-algorithms
- 키워드 백링크 →: docker-container-basics, https-tls, kafka-basics, sql-batch-timeout-pool, what-happens-google-com, dns
- 이 글로 오는 글 ←: backpressure, connection-pool, k8s-configmap, metrics-types, n-plus-one-queries, resilience-patterns, traffic-shaping-qos

#### `traffic-shaping-qos` — 트래픽 셰이핑과 QoS: 병목에서 줄의 순서 정하기

- 요약: 백업이 돌면 SSH가 늦어지는 이유를 병목의 큐로 푼다. tc의 tbf와 HTB로 셰이핑과 폴리싱을 비교하고, 큐 깊이가 지연이 되는 bufferbloat, 클래스별 몫과 우선순위, DSCP 표시, ifb로 들어오는 트래픽을 다루는 법을 측정값과 함께 본다.
- 태그: Network, Performance, Linux, TCP/IP
- 키워드: 트래픽 셰이핑, 폴리싱, bufferbloat, HTB, DSCP
- 길이: 451줄
- 소제목: 병목에서는 누군가 기다리거나 버려진다 / 셰이핑은 기다리게 하고, 폴리싱은 버린다 / tbf 한 줄 읽기 / 큐가 깊으면 지연이 된다 / 몫을 나누는 HTB / 패킷에 표시를 붙이는 DSCP / 들어오는 트래픽은 줄 세울 수 없다 / 현장에서 셰이핑을 꺼내는 순간 / 줄의 순서를 정하는 일 / 면접에서 나올 만한 질문
- 직접 링크 →: latency-bandwidth-throughput, rate-limiting-algorithms
- 키워드 백링크 →: docker-container-basics, iptables-basics, tcp-reliability-congestion, message-queue-basics, layer-ip-routing-icmp
- 이 글로 오는 글 ←: latency-bandwidth-throughput, network-monitoring, rate-limiting-algorithms, rsync-algorithm, tcp-reliability-congestion

### Programming › OS › Linux (`programming/os/linux`)

#### `iptables-basics` — iptables로 리눅스 방화벽 이해하기

- 요약: 패킷이 netfilter의 다섯 검문소를 어떻게 지나고 규칙이 위에서부터 어떻게 맞춰지는지 보고, Ubuntu 서버에서 SSH와 웹만 여는 규칙을 잠기지 않게 만들어 저장하는 데까지 간다.
- 태그: Linux, Network, Security, Firewall
- 키워드: iptables, netfilter, conntrack, ip6tables, iptables-persistent
- 길이: 810줄
- 소제목: 방화벽 상태부터 확인한다 / 커널 안의 다섯 검문소 / 테이블은 검문소에서 하는 일의 종류 / 위에서부터, 처음 맞는 규칙에서 끝난다 / 명령어 한 줄 뜯어보기 / 연결을 기억하는 conntrack / SSH와 웹만 여는 규칙 세트 / 재부팅하면 사라진다 / IPv6는 따로 막아야 한다 / ufw, nftables, iptables는 같은 걸 만진다 / 막힌 패킷을 찾는 법 / SSH 무차별 대입 늦추기 / 결국 위에서부터 읽히는 목록 / 면접에서 나올 만한 질문
- 직접 링크 →: iptables-nat
- 키워드 백링크 →: tcp-connection-lifecycle, security-groups-nacl, layer-mtu-fragmentation, what-happens-google-com, ipv6-basics, layer-ip-routing-icmp, udp-and-quic, layer-link-ethernet-arp, dns
- 이 글로 오는 글 ←: ansible-network-automation, distributed-lock, docker-compose, docker-container-basics, docker-network-drivers, docker-network-volume, grpc, ids-ips, iptables-nat, ipv6-basics, k8s-cni-pod-network, k8s-coredns, k8s-network-policy, k8s-service-types, layer-ip-routing-icmp, layer-link-ethernet-arp, layer-mtu-fragmentation, linux-grep-awk-sed, load-balancing-algorithms, network-config-cicd, network-flow-logs, network-layers-overview, network-monitoring, network-partitions, network-troubleshooting-by-layer, nginx-https-performance, osi-in-practice, ports-and-sockets, proxy-reverse-proxy, security-groups-nacl, service-discovery, service-mesh, tcp-connection-lifecycle, tcp-reliability-congestion, traffic-shaping-qos, udp-and-quic, vpc-basics, vpc-subnets-route-tables, waf

#### `iptables-nat` — iptables NAT와 포트 포워딩: 사설망, Docker, Kubernetes까지

- 요약: SNAT·DNAT·MASQUERADE로 주소를 바꾸고 conntrack이 그 변환을 기억하는 원리를 보고, 게이트웨이와 포트 포워딩을 직접 구성한 뒤 Docker와 kube-proxy가 같은 규칙을 어떻게 쓰는지 따라간다.
- 태그: Linux, Network, Docker, Kubernetes, Firewall
- 키워드: MASQUERADE, 포트 포워딩, DNAT, DOCKER-USER, kube-proxy
- 길이: 663줄
- 소제목: 주소를 바꿔 쓰는 세 가지 방법 / 바꾼 주소는 conntrack이 기억한다 / 먼저 포워딩을 켠다 / 내부망을 인터넷에 내보내는 게이트웨이 / 바깥 포트를 내부 서버로 넘기는 포트 포워딩 / 같은 서버 안에서 포트만 바꾸는 REDIRECT / Docker가 만드는 규칙 / 쿠버네티스 Service는 nat 규칙 묶음이다 / NAT가 안 될 때 따라가는 순서 / 주소를 바꾸고 기억하는 일 / 면접에서 나올 만한 질문
- 직접 링크 →: iptables-basics, kubernetes-ingress
- 키워드 백링크 →: k8s-service-types, vpc-subnets-route-tables, osi-in-practice, packet-capture-tcpdump, proxy-reverse-proxy, http-versions, sql-batch-timeout-pool, what-happens-google-com, grpc, ipv6-basics, udp-and-quic, dns
- 이 글로 오는 글 ←: ansible-network-automation, blue-green-deployment, docker-compose, docker-container-basics, docker-network-drivers, docker-network-volume, grpc, iptables-basics, ipv6-basics, k8s-cni-pod-network, k8s-coredns, k8s-namespace, k8s-network-policy, k8s-pod-basics, k8s-pod-lifecycle, k8s-service-types, kubernetes-ingress, layer-ip-addressing, layer-ip-routing-icmp, load-balancer-basics, load-balancing-algorithms, network-layers-overview, osi-in-practice, packet-capture-tcpdump, ports-and-sockets, service-discovery, service-mesh, udp-and-quic, vpc-basics, vpc-peering-transit-privatelink, vpc-subnets-route-tables

#### `linux-files-permissions` — 리눅스 파일 권한: rwx, umask, 특수 비트, ACL, 컨테이너 UID

- 요약: 홈 디렉터리 아래에 둔 사이트가 403을 내는 이유에서 시작해, 커널이 소유자·그룹·나머지 중 한 칸을 고르고 경로의 모든 디렉터리를 검사하는 순서를 따라간다. umask, setuid·setgid·sticky, ACL의 mask 함정, 컨테이너 볼륨의 UID 불일치와 fsGroup까지 다룬다.
- 태그: Linux, Security, Troubleshooting, Kubernetes, Container
- 키워드: umask, setuid, sticky bit, namei, 파일 권한
- 길이: 616줄
- 소제목: ls -l 한 줄 읽기 / 커널은 세 칸 중 하나만 고른다 / 디렉터리의 r, w, x는 뜻이 다르다 / 경로의 모든 칸을 지나야 파일에 닿는다 / 숫자 세 자리로 쓰는 권한 / 새 파일의 권한은 umask가 깎는다 / 세 개의 특수 비트 / 한 사람만 더 허락하는 ACL / 그룹에 넣었는데 여전히 거부된다 / 컨테이너에서는 숫자가 맞아야 한다 / Permission denied를 만났을 때 보는 순서 / 칸 하나를 고르고, 경로를 다 지난다 / 면접에서 나올 만한 질문
- 직접 링크 →: docker-network-volume, dockerfile-image-layers, linux-processes-signals
- 키워드 백링크 →: k8s-pod-multicontainer, linux-systemd-systemctl
- 이 글로 오는 글 ←: cron-jobs, encryption-at-rest, git-large-files-secrets, hosts-file, k8s-secret, linux-processes-signals, linux-systemd-systemctl, nginx-basics, ports-and-sockets, postgres-operations

#### `linux-grep-awk-sed` — grep, awk, sed로 로그 읽기: 접근 로그로 장애 좁히기

- 요약: nginx 접근 로그 4990줄로 502 장애를 좁혀 가며 grep으로 줄을 고르고, awk로 칸을 세고 더하고, sed로 고쳐 쓰는 법을 본다. 칸이 밀리는 User-Agent, uniq 앞의 sort, inode를 바꾸는 sed -i처럼 현장에서 틀리기 쉬운 지점을 실제 출력으로 확인한다.
- 태그: Linux, DevOps, Troubleshooting, Nginx
- 키워드: awk, sed -i, uniq -c
- 길이: 588줄
- 소제목: 로그 한 줄을 칸으로 나눠 본다 / grep은 줄을 고른다 / awk는 칸을 세고 더한다 / 파이프로 이어 붙인다 / sed는 줄을 고쳐 쓴다 / sed -i가 파일을 바꾸는 방식 / 로그 한 줄을 코드로 나눠 보기 / 장애 때 쓰는 명령 묶음 / 고르고, 세고, 고친다 / 면접에서 나올 만한 질문
- 직접 링크 →: ports-and-sockets, linux-systemd-systemctl, iptables-basics, rate-limiting-in-practice
- 키워드 백링크 →: proxy-reverse-proxy, osi-in-practice, http-status-codes
- 이 글로 오는 글 ←: linux-systemd-systemctl, structured-logging

#### `linux-processes-signals` — 리눅스 프로세스와 시그널: ps, 상태, 좀비, PID 1

- 요약: CPU는 노는데 load average가 높은 서버에서 출발해 프로세스 나무와 ps의 STAT 글자, /proc 읽는 법, SIGTERM·SIGKILL·SIGHUP이 프로그램에 닿는 방식을 본다. 좀비와 고아를 직접 만들고, 컨테이너의 PID 1이 좀비를 거둬야 하는 이유와 pkill -f, nice의 함정까지 정리한다.
- 태그: Linux, DevOps, Troubleshooting, Container, Nginx
- 키워드: 좀비 프로세스, 고아 프로세스, SIGHUP, tini, load average
- 길이: 595줄
- 소제목: 프로세스는 부모가 만든다 / ps 한 줄 읽기 / 상태 글자 하나가 말해 주는 것 / proc 파일 시스템에 프로세스가 다 있다 / 시그널은 커널이 전하는 번호 하나 / 핸들러를 등록한 프로그램과 안 한 프로그램 / nginx가 시그널로 일하는 법 / 좀비와 고아 / 컨테이너의 PID 1은 좀비를 거둬야 한다 / kill, pkill, killall 고르기 / nice로 CPU를 양보한다 / 현장에서 프로세스를 따라가는 순서 / 번호와 나무, 그리고 거두는 일 / 면접에서 나올 만한 질문
- 직접 링크 →: linux-files-permissions, k8s-pod-lifecycle, linux-systemd-systemctl
- 키워드 백링크 →: blue-green-deployment, k8s-pod-basics, k8s-pod-resources, docker-container-basics, osi-in-practice, client-data-cache
- 이 글로 오는 글 ←: blue-green-deployment, docker-container-basics, encryption-in-transit, k8s-pod-lifecycle, linux-files-permissions, linux-systemd-systemctl, nginx-basics, scaling-horizontal-vertical

#### `linux-systemd-systemctl` — systemd와 systemctl: 서비스 등록부터 장애 추적까지

- 요약: nohup으로 띄운 앱이 재부팅 뒤 사라진 일에서 시작해 유닛 파일을 쓰고, enable과 start, daemon-reload, Restart=와 시작 한도, 멈출 때의 SIGTERM과 SIGKILL, drop-in, journalctl, cron 대신 timer를 다룬다. 서비스가 안 뜰 때는 200번대 종료 코드부터 따라간다.
- 태그: Linux, DevOps, Troubleshooting
- 키워드: systemctl, journalctl, 유닛 파일, systemd timer, daemon-reload
- 길이: 562줄
- 소제목: 유닛은 systemd가 다루는 단위 / 서비스 유닛 파일 한 장 쓰기 / enable과 start는 다른 일이다 / daemon-reload를 잊으면 / systemctl status 읽기 / 죽으면 다시 띄운다, 한도까지 / 멈출 때는 cgroup 전체를 정리한다 / 남의 유닛은 drop-in으로 고친다 / journalctl로 로그 좁히기 / cron 대신 timer / 서비스가 안 뜰 때 따라가는 순서 / 컨테이너 안에는 systemd가 없다 / nohup 대신 유닛 파일 한 장 / 면접에서 나올 만한 질문
- 직접 링크 →: linux-files-permissions, linux-processes-signals, linux-grep-awk-sed
- 키워드 백링크 →: dockerfile-image-layers, k8s-deploy-pipeline-eks, client-data-cache
- 이 글로 오는 글 ←: cron-jobs, linux-files-permissions, linux-grep-awk-sed, linux-processes-signals, nginx-basics, ports-and-sockets

### Programming › Security (`programming/security`)

#### `cors` — CORS: 서버는 응답했는데 브라우저가 막는 이유

- 요약: 다른 출처로 보낸 요청은 서버까지 가는데, 응답을 읽을지는 브라우저가 서버의 허락 헤더를 보고 정한다. 같은 출처 정책, preflight, credentials, 흔한 설정 실수와 CSRF와의 관계까지 정리했다.
- 태그: CORS, Security, HTTP, Browser
- 키워드: CORS, Same-Origin Policy, 같은 출처 정책, preflight, Access-Control-Allow-Origin
- 길이: 513줄
- 소제목: 서버는 응답했는데 콘솔은 빨갛다 / 출처를 가르는 세 가지 / 남의 응답을 읽지 못하게 하는 이유 / 응답 헤더로 허락을 받는다 / 먼저 물어보는 요청 (preflight) / 허락 헤더 하나씩 / 쿠키까지 보내려면 / 열어 두다가 뚫리는 경우 / CORS는 브라우저가 지킨다 / CORS는 CSRF를 막지 못한다 / 개발할 때는 프록시로 돌아간다 / 평소엔 되다가 가끔만 나는 CORS 에러 / 다시 처음 장면으로 / 면접에서 나올 만한 질문
- 직접 링크 →: local-custom-domain, cookie-session-login, http-caching-cdn
- 키워드 백링크 →: json-crud-http, http-status-codes
- 이 글로 오는 글 ←: browser-fetch, cookie-session-login, core-web-vitals, frontend-browser-cache, html-form-http, http-caching-cdn, http-methods, json-crud-http, kubernetes-ingress, local-custom-domain, micro-frontends, realtime-communication, websocket-deep-dive

#### `encryption-at-rest` — 저장 데이터 암호화: 디스크, DB 컬럼, 봉투 암호화와 키 교체

- 요약: LUKS 디스크 암호화부터 PostgreSQL 컬럼 암호화, KMS 봉투 암호화와 키 교체까지 직접 돌려 보며, 저장 암호화가 막는 것과 막지 못하는 것을 키를 누가 쥐었는지로 정리한다.
- 태그: Security, Linux, PostgreSQL, AWS
- 키워드: 저장 데이터 암호화, 봉투 암호화, LUKS, 블라인드 인덱스, pgcrypto
- 길이: 647줄
- 소제목: 반납한 디스크와 SQL 인젝션은 다른 문제다 / 자물쇠를 거는 층과 키를 쥔 사람 / 디스크 통째로: LUKS와 dm-crypt / 패스프레이즈를 바꿔도 데이터는 다시 암호화되지 않는다 / 데이터베이스 안에서: TDE와 컬럼 암호화 / 암호화한 컬럼은 찾을 수 없다 / 봉투 암호화: 데이터 키와 마스터 키 / GCM에서 nonce를 다시 쓰면 / 키 교체와 재암호화 / 저장 암호화가 막지 못하는 것 / 클라우드에서 체크박스를 켜기 전에 확인할 것 / 결국 키가 어디 있느냐 / 면접에서 나올 만한 질문
- 직접 링크 →: encryption-in-transit
- 키워드 백링크 →: postgres-mvcc-vacuum, linux-files-permissions, optimistic-locking, vpc-basics, db-modeling-normalization
- 이 글로 오는 글 ←: encryption-in-transit, k8s-secret

#### `encryption-in-transit` — 전송 구간 암호화: 내부 TLS, mTLS, 재암호화와 인증서 자동 교체

- 요약: 바깥만 HTTPS인 서비스의 내부 구간을 암호화하는 법을 다룬다. 내부 CA로 mTLS를 직접 맺어 보고, 인증서가 없을 때의 실제 오류, 프록시 재암호화의 함정, 인증서와 CA를 자동으로 교체하는 순서까지 본다.
- 태그: Security, TLS, Network, PostgreSQL
- 키워드: 전송 구간 암호화, 내부 CA, 재암호화, sslmode, 인증서 자동 갱신
- 길이: 596줄
- 소제목: 내부 구간이 평문이면 생기는 일 / DB 드라이버의 "암호화됨"은 확인이 아니다 / 내부 CA를 만들고 서비스에 신분증을 준다 / 인증서가 없을 때 실제로 나는 오류 / 인증은 통과했는데 403이 나는 이유 / 중간에서 풀고 다시 잠그기 / 인증서를 사람이 갈아 끼우지 않는다 / CA를 바꿀 때는 겹쳐서 믿는다 / 현장에서 TLS 오류를 좁히는 순서 / 내부도 바깥처럼 / 면접에서 나올 만한 질문
- 직접 링크 →: https-tls, encryption-at-rest, zero-trust-architecture, service-mesh, kubernetes-ingress
- 키워드 백링크 →: nginx-basics, nginx-reverse-proxy, k8s-configmap, packet-capture-tcpdump, linux-processes-signals, kafka-basics, redis-basics, what-happens-google-com, vpc-basics, layer-link-ethernet-arp, dns
- 이 글로 오는 글 ←: connection-pool, encryption-at-rest, https-tls, osi-in-practice, postgres-connections-pg-hba

#### `https-tls` — HTTPS는 무엇을 지켜 주나: TLS 1.3

- 요약: 자물쇠가 보장하는 기밀성·무결성·인증과, 그래도 보이는 SNI. 인증서 체인 검증, TLS 1.3 핸드셰이크와 ECDHE, 0-RTT의 재전송 위험, TLS 종료와 mTLS, 자주 만나는 인증서 오류까지 정리했다.
- 태그: TLS, HTTPS, Security, Network
- 키워드: TLS 1.3, TLS 핸드셰이크, 인증서 체인, 중간 인증서, 전방향 안전성, mTLS
- 길이: 476줄
- 소제목: 자물쇠가 약속하는 세 가지 / 암호화해도 보이는 것 / 인증서 한 장 뜯어보기 / 믿음은 루트에서 내려온다 / 브라우저가 인증서를 검사하는 순서 / 인증서를 자동으로 받는 방법: ACME / TLS 1.3 핸드셰이크 한 단계씩 / 키를 보내지 않고 같은 키를 만든다 / 본문은 대칭키로 빠르게 / 다시 올 때는 0-RTT, 대신 재전송을 조심 / TLS를 어디서 끝낼까 / 서버끼리도 서로 확인한다: mTLS / 자주 마주치는 인증서 오류 / 자물쇠 하나에 들어 있는 것 / 면접에서 나올 만한 질문
- 직접 링크 →: dns, local-custom-domain, what-happens-google-com, resilience-patterns, gateway
- 키워드 백링크 →: kubernetes-ingress, nginx-basics, zero-trust-architecture, nginx-https-performance, webhooks, service-mesh, http-versions, encryption-in-transit, udp-and-quic, http-methods
- 이 글로 오는 글 ←: base64, connection-pool, encryption-in-transit, gateway, http-message, http-status-codes, http-versions, ids-ips, kubernetes-ingress, latency-bandwidth-throughput, layer-mtu-fragmentation, network-troubleshooting-by-layer, nginx-https-performance, osi-in-practice, packet-capture-tcpdump, pattern-facade, proxy-reverse-proxy, service-mesh, udp-and-quic, upper-layers-session-presentation-app, waf, what-happens-google-com, zero-trust-architecture

#### `ids-ips` — IDS와 IPS: 패킷 내용을 보고 공격을 찾는 장치

- 요약: Suricata로 공격 트래픽을 탐지하고, NFQUEUE로 길목에 세워 막아 본다. 시그니처와 이상 탐지의 차이, fail-open과 fail-closed, 오탐을 줄이는 법, TLS 때문에 달라지는 배치 위치까지 다룬다.
- 태그: Security, Network, Linux, Firewall, Troubleshooting
- 키워드: Suricata, 침입 탐지 시스템, 침입 방지 시스템, 시그니처 기반 탐지
- 길이: 417줄
- 소제목: 방화벽이 못 보는 것 / 길목에 서느냐, 옆에서 보느냐 / 규칙 한 줄 뜯어보기 / 공격 트래픽을 만들어 돌려 보기 / 이름표로 찾기, 평소와 다른 것 찾기 / 길목에 세워서 막기 / 울리면 안 될 때 울린다 / 어디에 세울까 / 현장에서 IDS 경보를 받았을 때 / 경보는 시작일 뿐이다 / 면접에서 나올 만한 질문
- 직접 링크 →: iptables-basics, security-groups-nacl, packet-capture-tcpdump, network-flow-logs, service-mesh, zero-trust-architecture
- 키워드 백링크 →: proxy-reverse-proxy, waf, vpc-subnets-route-tables, layer-ip-addressing, what-happens-google-com, layer-ip-routing-icmp, https-tls, vpc-basics, db-modeling-normalization, dns
- 이 글로 오는 글 ←: network-flow-logs, waf, zero-trust-architecture

#### `waf` — WAF는 요청의 무엇을 보고 막나

- 요약: WAF는 TLS가 풀린 HTTP 요청을 해석해 공격처럼 생긴 모양에 점수를 매겨 막는다. OWASP CRS의 이상 점수 방식, 탐지 전용 모드로 시작하는 이유, 한글 댓글이 막힌 오탐을 좁은 예외로 푸는 과정을 따라간다.
- 태그: Security, HTTP, Nginx, Firewall, WAF
- 키워드: 웹 애플리케이션 방화벽, OWASP CRS, 이상 점수, ModSecurity, 가상 패치
- 길이: 515줄
- 소제목: 443번이 열려 있으면 방화벽은 할 일이 끝난다 / 규칙은 점수를 더하고 마지막에 한 번 판정한다 / 막힌 요청과 로그 한 줄 / 막기 전에 먼저 세기만 한다 / 오탐은 규칙을 끄지 말고 과녁을 좁힌다 / 편집증 수준을 올리면 생기는 일 / JSON 본문은 따로 켜야 읽는다 / 어디에 세울까: 엣지, 프록시, 앱 안 / 관리형 WAF 규칙은 이렇게 생겼다 / 우회는 어디서 생기나 / 403 문의가 왔을 때 보는 순서 / 문자열을 보는 문지기 / 면접에서 나올 만한 질문
- 직접 링크 →: ids-ips, rate-limiting-in-practice, iptables-basics, security-groups-nacl, proxy-reverse-proxy
- 키워드 백링크 →: html-form-http, what-happens-google-com, https-tls, vpc-basics, db-modeling-normalization, dns
- 이 글로 오는 글 ←: ids-ips

#### `zero-trust-architecture` — 제로 트러스트: 사내 IP 대신 요청마다 확인한다

- 요약: 사내 IP를 믿는 관리자 앱이 감염된 프린터에 열리는 장면에서 시작해, 사용자와 기기를 요청마다 확인하는 프록시를 직접 세워 본다. NIST SP 800-207의 원칙과 구성, 기기 상태, 마이크로세그멘테이션, 현실적인 전환 순서를 정리한다.
- 태그: Security, Network, Authentication, TLS, Architecture
- 키워드: 제로 트러스트, BeyondCorp, identity-aware proxy, 마이크로세그멘테이션
- 길이: 378줄
- 소제목: 성벽 안은 안전하다는 가정 / 위치 대신 요청마다 묻는다 / 정책을 정하는 곳과 지키는 곳 / 사용자 앞에 서는 프록시 / 기기도 신원이 있다 / 정책 판정 직접 짜 보기 / 서비스끼리도 같은 원칙으로 / 칸을 잘게 나누기 / 한 번에 바꾸지 않는다 / 제로 트러스트를 들일 때 생기는 문제 / 위치가 아니라 확인한 것으로 / 면접에서 나올 만한 질문
- 직접 링크 →: vpn-ipsec-wireguard, service-mesh, oauth, proxy-reverse-proxy, security-groups-nacl, k8s-network-policy, network-flow-logs, ids-ips
- 키워드 백링크 →: https-tls, vpc-basics, token-login
- 이 글로 오는 글 ←: encryption-in-transit, https-tls, ids-ips, network-flow-logs, service-mesh, vpn-ipsec-wireguard

### Programming › Server/Infra › CI/CD (`programming/server-infra/ci-cd`)

#### `blue-green-deployment` — 블루그린 배포: 방향 한 줄과 남겨 둔 한 벌

- 요약: 운영 환경 옆에 같은 환경을 하나 더 띄우고 트래픽 방향만 한 번에 바꾸는 배포를 nginx reload로 직접 해 본다. 부하를 건 채 전환해도 실패가 0인 이유, 잘못 바꾸면 생기는 실패, DNS TTL 지연, 한 벌뿐인 DB와 세션, 되돌리기 조건을 실측과 함께 본다.
- 태그: DevOps, CI/CD, Nginx, Load Balancer, Troubleshooting
- 키워드: 블루그린 배포, blue-green, nginx -s reload, DNS 전환
- 길이: 428줄
- 소제목: 두 벌을 띄워 두고 방향만 바꾼다 / 어디서 방향을 바꾸나 / nginx에서 upstream 한 줄을 바꿔 본다 / reload가 요청을 떨어뜨리지 않는 이유 / 바꾸는 방법을 틀리면 실패가 생긴다 / DNS로 바꾸면 TTL만큼 섞인다 / 데이터베이스는 한 벌뿐이다 / 세션과 오래 붙은 연결 / 두 배의 비용을 어디까지 줄이나 / 되돌리기가 빠른 이유와 그 조건 / 현장에서 블루그린이 흔들리는 순간 / 방향 한 줄과 남겨 둔 한 벌 / 면접에서 나올 만한 질문
- 직접 링크 →: canary-release, rolling-deployment, ci-cd-basics, k8s-deployment, zero-downtime-migrations, rollback-strategy, feature-flags
- 키워드 백링크 →: iptables-nat, docker-container-basics, realtime-communication, proxy-reverse-proxy, autoscaling, linux-processes-signals, sql-batch-timeout-pool, redis-basics, cookie-session-login, grpc, dns
- 이 글로 오는 글 ←: canary-release, ci-cd-basics, linux-processes-signals, nginx-basics, rollback-strategy, rolling-deployment

#### `build-caching` — 빌드 캐시로 CI 줄이기: 캐시 키, restore-keys, 원격 캐시와 캐시 오염

- 요약: 잡마다 빈 머신으로 시작하는 CI에서 무엇을 어떤 키로 캐시할지, actions/cache가 키를 찾는 순서와 브랜치 범위, Turborepo 작업 해시에 빠진 환경 변수가 만드는 틀린 적중, 원격 캐시 오염과 서명 검증을 직접 재 보고 정리한다.
- 태그: CI/CD, Cache, Performance, Security, DevOps
- 키워드: restore-keys, 원격 캐시, Turborepo, CI 캐시
- 길이: 519줄
- 소제목: 캐시가 기억하는 것은 입력과 결과의 짝이다 / 의존성 설치는 무엇을 캐시해야 빨라지나 / 캐시 키 한 줄 뜯어보기 / 정확히 맞지 않으면 비슷한 것이라도 / 키는 어떤 순서로 맞춰 보나 / 작업 결과까지 캐시하는 도구들 / 해시에 없는 입력이 만드는 틀린 적중 / 원격 캐시는 팀 전체의 기억이다 / 남이 올린 결과물을 믿어도 되나 / Docker 빌드의 캐시는 어디에 두나 / 캐시가 이상할 때 보는 순서 / 같은 입력이면 같은 결과라는 약속 / 면접에서 나올 만한 질문
- 직접 링크 →: dockerfile-image-layers, github-actions-docker-ecr, ci-cd-basics, feature-flags, rollback-strategy
- 키워드 백링크 →: git-internals-basics
- 이 글로 오는 글 ←: ci-cd-basics, git-internals-basics, git-large-files-secrets, k8s-project-structure, merkle-tree, micro-frontends, rollback-strategy

#### `canary-release` — 카나리 릴리스: 작게 겪고 지표로 넓힌다

- 요약: 새 버전에 트래픽 일부만 보내 옛 버전과 지표를 비교하며 비율을 올리는 배포를 nginx weight와 split_clients로 직접 나눠 본다. 요청 단위와 사용자 단위 분할의 차이, 지표 기반 승격과 중단, 작은 비율에서 생기는 통계 잡음, Argo Rollouts의 AnalysisTemplate까지 다룬다.
- 태그: DevOps, CI/CD, Nginx, Kubernetes, Observability
- 키워드: 카나리 릴리스, split_clients, AnalysisTemplate, Argo Rollouts
- 길이: 440줄
- 소제목: 일부만 먼저 보내고 지켜본다 / 비율로 나누는 두 가지 방법 / 요청마다 나눌까, 사람마다 나눌까 / 지표가 다음 단계를 정한다 / 작은 비율은 증거가 적다 / Argo Rollouts와 Flagger가 자동으로 하는 일 / 카나리가 거짓말하는 순간 / 작게 겪고, 증거가 쌓이면 넓힌다 / 면접에서 나올 만한 질문
- 직접 링크 →: blue-green-deployment, rolling-deployment, feature-flags, ab-testing, load-balancing-algorithms, kubernetes-ingress, gateway, service-mesh, k8s-deployment, zero-downtime-migrations, rollback-strategy
- 키워드 백링크 →: k8s-pod-basics, docker-container-basics, js-memory-leak, sql-batch-timeout-pool, http-status-codes
- 이 글로 오는 글 ←: blue-green-deployment, ci-cd-basics, feature-flags, gateway, k8s-deployment, rollback-strategy, rolling-deployment

#### `ci-cd-basics` — CI/CD의 뼈대: 지속적 통합, 전달, 배포와 한 번 빌드한 아티팩트

- 요약: 스테이징에서 확인한 커밋을 운영에서 다시 빌드했다가 다른 프로그램이 나간 일에서 출발해, 지속적 통합·전달·배포의 차이, 한 번 빌드해 digest로 승격하는 흐름, 머지 큐, 플레이키 테스트, DORA 지표를 act로 로컬에서 돌린 파이프라인과 함께 정리한다.
- 태그: CI/CD, DevOps, Git, Troubleshooting
- 키워드: 지속적 통합, 지속적 전달, DORA 지표, 플레이키 테스트
- 길이: 447줄
- 소제목: 세 단어가 가리키는 범위 / 커밋 하나가 운영까지 가는 길 / 한 번만 빌드하고 승격한다 / 환경은 무엇을 확인하려고 두나 / 합치는 주기가 파이프라인을 정한다 / 가끔 실패하는 테스트 / 파이프라인의 속도를 재는 네 가지 숫자 / 파이프라인이 느려지는 자리 / 배포가 깨졌을 때 파이프라인에서 먼저 볼 것 / 같은 커밋이 아니라 같은 파일 / 면접에서 나올 만한 질문
- 직접 링크 →: github-actions-docker-ecr, k8s-deploy-pipeline-eks, network-config-cicd, build-caching, feature-flags, rollback-strategy, k8s-configmap, k8s-secret, canary-release, blue-green-deployment, git-branching-strategy
- 키워드 백링크 →: ab-testing, security-groups-nacl, osi-in-practice, dns
- 이 글로 오는 글 ←: blue-green-deployment, build-caching, feature-flags, rollback-strategy

#### `feature-flags` — 피처 플래그 운영: 평가 규칙, 설정 배달, OpenFeature, 정리까지

- 요약: 킬 스위치를 내렸는데 서버 일부만 늦게 따라온 장면에서 시작해, 규칙 평가 순서, 폴링과 스트리밍으로 설정이 닿는 길, 플래그 서비스 장애 때의 기본값, 클라이언트 평가의 노출 문제, OpenFeature, 조합 테스트와 오래된 플래그 정리를 다룬다.
- 태그: Feature Flag, CI/CD, DevOps, Resilience
- 키워드: OpenFeature, 플래그 평가, 타기팅 규칙
- 길이: 418줄
- 소제목: 네 종류의 플래그는 운영 방식이 다르다 / 규칙은 위에서부터 하나씩 / 설정은 어떻게 서버에 닿나 / 플래그 서비스가 죽으면 / 서버에서 평가할까, 브라우저에서 평가할까 / 벤더에 묶이지 않게 OpenFeature / 플래그가 늘면 테스트할 조합이 폭발한다 / 플래그를 바꾸는 것도 운영 변경이다 / 다 켠 플래그를 지우는 일 / 스위치 하나 뒤에 있는 시스템 / 면접에서 나올 만한 질문
- 직접 링크 →: ab-testing, ci-cd-basics, rollback-strategy, canary-release
- 키워드 백링크 →: observability-basics, autoscaling, distributed-tracing, redis-basics
- 이 글로 오는 글 ←: blue-green-deployment, build-caching, canary-release, ci-cd-basics, rollback-strategy

#### `github-actions-docker-ecr` — GitHub Actions로 이미지 빌드하고 ECR에 올리기

- 요약: 워크플로 한 장을 위에서부터 읽으며 오래 사는 액세스 키 대신 OIDC로 AWS 역할을 잠깐 빌리는 법, 신뢰 정책의 sub 조건, 커밋 SHA 태그, buildx 캐시, 이미지 검사, concurrency와 environment로 운영 배포 앞에 문을 다는 법을 다룬다.
- 태그: CI/CD, AWS, Docker, DevOps, Security
- 키워드: GitHub Actions, OIDC 신뢰 정책, actionlint, ECR
- 길이: 636줄
- 소제목: 워크플로 파일 한 장의 뼈대 / 언제 돌지는 이벤트와 경로가 정한다 / 푸시하기 전에 actionlint로 걸러 낸다 / 오래 사는 키 대신 OIDC로 역할을 잠깐 빌린다 / 신뢰 정책의 sub 조건이 문을 정한다 / ECR에 로그인하고 올리기 / 태그는 커밋 SHA로 붙인다 / buildx 캐시를 Actions 캐시에 둔다 / 올린 이미지를 검사한다 / 같은 브랜치 배포가 겹칠 때 concurrency / secrets와 environment로 운영 배포 앞에 문을 단다 / matrix로 여러 조합을 한 번에 돌린다 / 이미지가 러너에서 노드까지 가는 길 / 실패한 잡 로그에서 먼저 볼 줄 / 키를 저장하지 않는 파이프라인 / 면접에서 나올 만한 질문
- 직접 링크 →: dockerfile-image-layers, k8s-deploy-pipeline-eks, git-branching-strategy, k8s-project-structure
- 키워드 백링크 →: k8s-pod-troubleshooting, eks-cluster-basics, terraform-basics, token-login
- 이 글로 오는 글 ←: build-caching, ci-cd-basics, dockerfile-image-layers, git-internals-basics, git-remote-collaboration, helm-dependencies-oci-gitops, k8s-deploy-pipeline-eks, k8s-project-structure, k8s-secret, network-config-cicd, vpc-peering-transit-privatelink, vpc-subnets-route-tables

#### `network-config-cicd` — 네트워크 설정 CI/CD: PR에서 plan, 승인, apply, drift 감지까지

- 요약: 콘솔에서 지운 경로가 사흘 뒤 엉뚱한 PR에서 되살아난 일에서 출발해 lint와 validate, 저장한 plan만 apply하는 흐름, plan과 apply의 권한 분리, 변경 창, state 분리와 단계적 배포로 폭발 반경 줄이기, refresh-only와 --check로 drift 찾기, git revert로 되돌리기를 다룬다.
- 태그: CI/CD, GitOps, Terraform, IaC, DevOps, Network
- 키워드: drift 감지, 변경 창, 폭발 반경
- 길이: 494줄
- 소제목: 네트워크 설정의 원본은 git 하나 / PR이 올라오면 기계가 먼저 본다 / plan은 한 번 만들고 그대로 apply한다 / 권한은 plan과 apply를 나눈다 / 언제 바꿀지도 코드로 정한다 / 한 번에 다 바꾸지 않는다 / 코드 밖에서 바뀐 것 찾기 / 되돌리기는 git revert부터 / 현장에서 파이프라인이 막히는 순간 / 사람은 plan을 보고, 기계는 나머지를 본다 / 면접에서 나올 만한 질문
- 직접 링크 →: terraform-network-iac, ansible-network-automation, github-actions-docker-ecr, k8s-deploy-pipeline-eks, terraform-basics
- 키워드 백링크 →: vpc-subnets-route-tables, iptables-basics, security-groups-nacl, vpc-basics
- 이 글로 오는 글 ←: ansible-network-automation, ci-cd-basics, terraform-network-iac

#### `rollback-strategy` — 롤백 전략: 되돌릴 수 있는 것과 없는 것, 자동 롤백

- 요약: rollout undo로 코드는 돌아왔는데 컬럼 이름이 바뀐 DB 때문에 다시 실패한 일에서 출발해, 롤백과 롤 포워드 판단, 스키마·메시지·부작용처럼 되돌릴 수 없는 것, down 마이그레이션의 위험, burn rate 기준 자동 롤백을 실습과 함께 정리한다.
- 태그: CI/CD, Kubernetes, PostgreSQL, Resilience, DevOps
- 키워드: 롤 포워드, 자동 롤백
- 길이: 398줄
- 소제목: 롤백할까, 고쳐서 내보낼까 / 되돌릴 수 있는 것과 없는 것 / 롤백했더니 DB가 맞지 않는다 / down 마이그레이션이 지우는 것 / 큐에 남은 새 형식의 메시지 / 쿠버네티스에서 되돌리기 / 사람보다 먼저 되돌리게 하기 / 되돌리기가 실패하는 자리 / 되돌릴 수 있게 만드는 것이 먼저다 / 면접에서 나올 만한 질문
- 직접 링크 →: k8s-deployment, k8s-deploy-pipeline-eks, helm-release-lifecycle, ci-cd-basics, build-caching, feature-flags, zero-downtime-migrations, db-migration-tools, dead-letter-queue, canary-release, blue-green-deployment
- 키워드 백링크 →: git-undo, k8s-configmap, postgres-operations, redis-basics, cookie-session-login
- 이 글로 오는 글 ←: blue-green-deployment, build-caching, canary-release, ci-cd-basics, feature-flags, helm-release-lifecycle

#### `rolling-deployment` — 롤링 배포: 빼고, 기다리고, 확인하고, 넣는다

- 요약: 로드 밸런서 뒤 서버 네 대를 차례로 바꾸며 실패한 요청을 센다. 기본값 max_fails 때문에 모든 서버가 빠지는 함정, GET은 재시도로 가려지고 POST는 실패하는 이유, 드레이닝과 헬스 체크 게이트, 배치 크기, 두 버전이 섞이는 동안의 호환성을 다룬다.
- 태그: DevOps, CI/CD, Nginx, Load Balancer, Troubleshooting
- 키워드: 롤링 배포, rolling deployment, max_fails, fail_timeout
- 길이: 431줄
- 소제목: 한 대씩 빼고, 바꾸고, 확인하고, 넣는다 / 그냥 내렸다 올리면 생기는 일 / 기본값 max_fails가 서버를 10초씩 가둔다 / 재시도가 GET은 숨기고 POST는 못 숨긴다 / 정상 종료만으로는 모자란 이유 / 섞여 있는 몇 초 동안 / 헬스 체크가 배포를 멈추게 한다 / 몇 대씩 바꿀까 / 롤링이 맞지 않는 경우 / 현장에서 롤링 배포를 의심하는 순간 / 빼는 순서가 전부다 / 면접에서 나올 만한 질문
- 직접 링크 →: k8s-deployment, blue-green-deployment, canary-release, load-balancer-basics, idempotency-key, api-versioning, zero-downtime-migrations, k8s-pod-probes, ansible-network-automation
- 키워드 백링크 →: retries, docker-container-basics, autoscaling, osi-in-practice, sql-batch-timeout-pool, sql-query-rewrite
- 이 글로 오는 글 ←: blue-green-deployment, canary-release, connection-pool, consistent-hashing, db-migration-tools, leader-election, load-balancer-basics, nginx-reverse-proxy

### Programming › Server/Infra › Docker (`programming/server-infra/docker`)

#### `docker-compose` — Docker Compose로 여러 컨테이너 한 번에 띄우기

- 요약: nginx, Node, Postgres, Redis를 compose.yaml 하나로 띄우면서 depends_on과 healthcheck로 정하는 시작 순서, .env 보간, down -v의 위험, 개발·운영 설정 분리까지 정리한다.
- 태그: Docker, DevOps, Linux
- 키워드: Docker Compose, compose.yaml, depends_on
- 길이: 607줄
- 소제목: docker-compose와 docker compose / 서비스 넷을 파일 하나에 / 서비스 블록 하나 뜯어보기 / .env는 컨테이너에 들어가지 않는다 / up 한 번에 일어나는 순서 / 요청 하나가 서비스를 건너가는 길 / 매일 쓰는 명령 / down과 down -v는 한 글자 차이다 / 개발과 운영을 파일로 나누기 / 비밀 값은 어디에 두나 / Compose로 버티는 데까지 / 파일 하나가 구성 전체를 말한다 / 면접에서 나올 만한 질문
- 직접 링크 →: docker-network-volume, docker-container-basics, dockerfile-image-layers, kubernetes-ingress
- 키워드 백링크 →: k8s-pod-probes, iptables-basics, proxy-reverse-proxy, redis-basics, iptables-nat, redis-persistence-ha, dns
- 이 글로 오는 글 ←: docker-network-volume, dockerfile-image-layers

#### `docker-container-basics` — 컨테이너는 무엇인가: Docker로 처음 띄워 보기

- 요약: 컨테이너가 VM과 달리 호스트 커널을 함께 쓰는 프로세스이고 namespace와 cgroups로 격리된다는 것을 직접 확인한 뒤, Ubuntu에 Docker를 설치해 컨테이너를 띄우고 들여다보고 멈추고 지우는 데까지 간다.
- 태그: Docker, Container, Linux, DevOps
- 키워드: cgroups, namespace, Docker Engine, 컨테이너 이미지
- 길이: 850줄
- 소제목: 서버마다 환경이 달라서 생기는 일 / 가상 머신은 커널까지, 컨테이너는 그 위만 / 프로세스마다 다른 세상을 보여 주는 namespace / 쓸 수 있는 양을 묶는 cgroups / 이미지는 틀, 컨테이너는 찍어 낸 것 / Ubuntu 24.04에 Docker Engine 설치하기 / docker run 한 줄이 지나가는 길 / docker run 옵션 뜯어보기 / 띄우고, 들여다보고, 멈추고, 지우기 / 재시작 정책과 PID 1 / 자원과 디스크 들여다보기 / 이미지 이름은 레지스트리부터 다이제스트까지 / 컨테이너를 다시 정리하면 / 면접에서 나올 만한 질문
- 직접 링크 →: dockerfile-image-layers, iptables-nat
- 키워드 백링크 →: k8s-pod-resources, iptables-basics, rest-api-design, grpc, linux-processes-signals, udp-and-quic
- 이 글로 오는 글 ←: blue-green-deployment, canary-release, docker-compose, docker-network-drivers, docker-network-volume, dockerfile-image-layers, gateway, helm-basics, helm-dependencies-oci-gitops, k8s-namespace, k8s-network-policy, k8s-pod-basics, k8s-pod-lifecycle, k8s-pod-troubleshooting, k8s-project-structure, kubernetes-ingress, latency-bandwidth-throughput, layer-ip-addressing, layer-ip-routing-icmp, layer-link-ethernet-arp, linux-processes-signals, load-balancer-basics, network-layers-overview, network-troubleshooting-by-layer, osi-in-practice, packet-capture-tcpdump, proxy-reverse-proxy, rendering-ssr, rolling-deployment, structured-logging, terraform-modules-tfvars, traffic-shaping-qos

#### `docker-network-drivers` — Docker 네트워크 드라이버: bridge, host, macvlan, overlay는 커널에서 무엇인가

- 요약: macvlan 컨테이너에 호스트에서만 닿지 않는 증상에서 출발해, 드라이버마다 컨테이너 네임스페이스를 어떤 장치로 잇는지 손으로 재현한다. 브리지 사이 격리 규칙, icc와 br_netfilter, 127.0.0.1 게시를 우회하는 직접 접근, macvlan shim, overlay의 포트와 MTU, 사내망과 겹치는 기본 대역까지 다룬다.
- 태그: Docker, Network, Linux, Container, Troubleshooting, Firewall
- 키워드: macvlan, ipvlan, DOCKER-ISOLATION, default-address-pools
- 길이: 612줄
- 소제목: 드라이버는 네임스페이스를 꾸미는 방식이다 / bridge를 손으로 다시 만든다 / host, none, container 모드 / macvlan: 컨테이너가 LAN에 직접 선다 / overlay: 호스트를 넘는 브리지 / 기본 대역이 사내망과 겹칠 때 / 무엇을 고르나 / 장치 하나로 갈리는 성격 / 면접에서 나올 만한 질문
- 직접 링크 →: docker-network-volume, iptables-nat, sdn-vxlan-overlay, docker-container-basics, k8s-pod-basics, layer-mtu-fragmentation, k8s-cni-pod-network
- 키워드 백링크 →: dockerfile-image-layers, iptables-basics, eks-cluster-basics, vlan-basics, layer-link-ethernet-arp, vpn-ipsec-wireguard, security-groups-nacl, layer-ip-routing-icmp, vpc-basics, udp-and-quic, dns
- 이 글로 오는 글 ←: docker-network-volume, k8s-cni-pod-network, k8s-network-policy

#### `docker-network-volume` — Docker 네트워크와 볼륨: 컨테이너끼리 대화하고 데이터 남기기

- 요약: 컨테이너 안의 localhost가 왜 DB에 닿지 않는지, docker rm 한 번에 데이터가 왜 사라지는지에서 출발해 사용자 정의 브리지와 내장 DNS, -p가 만드는 DNAT, named volume과 bind mount, 볼륨 백업까지 따라간다.
- 태그: Docker, Network, Linux, DevOps
- 키워드: named volume, bind mount, 사용자 정의 브리지, host.docker.internal
- 길이: 715줄
- 소제목: 컨테이너 안의 localhost는 컨테이너 자신이다 / 네트워크 드라이버 다섯 가지 / 이름으로 찾아가는 사용자 정의 브리지 / -p 한 줄이 만드는 것 / 컨테이너에서 호스트로 가는 길 / docker rm 하면 데이터가 왜 사라지나 / 데이터를 바깥에 두는 네 가지 방법 / -v와 --mount 읽기 / 볼륨을 만들고 들여다보기 / 볼륨을 tar로 백업하고 되살리기 / 바인드 마운트와 UID / Postgres와 앱을 처음부터 다시 띄우기 / 격리를 얼마나 풀어 줄지 정하는 일 / 면접에서 나올 만한 질문
- 직접 링크 →: docker-container-basics, dockerfile-image-layers, iptables-nat, docker-compose
- 키워드 백링크 →: nginx-basics, iptables-basics, k8s-cni-pod-network, docker-network-drivers, k8s-pod-troubleshooting, postgres-operations, proxy-reverse-proxy, layer-link-ethernet-arp, k8s-coredns, sdn-vxlan-overlay, redis-basics, ipv6-basics, udp-and-quic, dns
- 이 글로 오는 글 ←: docker-compose, docker-network-drivers, dockerfile-image-layers, k8s-pv-pvc, layer-link-ethernet-arp, linux-files-permissions, network-troubleshooting-by-layer, ports-and-sockets

#### `dockerfile-image-layers` — Dockerfile과 이미지 레이어: 빠르고 작은 이미지 만들기

- 요약: Dockerfile 명령이 레이어가 되고 빌드 캐시가 처음 바뀐 줄에서 끊기는 원리를 보고, 의존성 먼저 복사하기, 멀티 스테이지 빌드, 베이스 이미지 선택, BuildKit 캐시 마운트로 빌드를 빠르게, 이미지를 작게 만든다.
- 태그: Docker, Container, DevOps, Performance
- 키워드: Dockerfile, 멀티 스테이지 빌드, 빌드 캐시, BuildKit, distroless
- 길이: 727줄
- 소제목: 문제가 된 Dockerfile / 명령어 한 줄씩 읽기 / ENTRYPOINT와 CMD, exec 형식과 셸 형식 / 명령 하나가 레이어 한 장 / 캐시는 처음 바뀐 줄에서 끊긴다 / 잘 안 바뀌는 것을 위에 둔다 / .dockerignore로 보내는 것부터 줄인다 / 빌드 도구는 두고 결과만 옮기는 멀티 스테이지 빌드 / 베이스 이미지: slim, alpine, distroless / root가 아닌 사용자로, 상태는 HEALTHCHECK로 / BuildKit 캐시 마운트와 여러 아키텍처 빌드 / 태그 붙여 올리고, 올리기 전에 검사하기 / 빌드는 됐는데 서버에서 안 뜰 때 / 처음 문제로 돌아가면 / 면접에서 나올 만한 질문
- 직접 링크 →: docker-container-basics, docker-network-volume
- 키워드 백링크 →: k8s-pod-probes, github-actions-docker-ecr, docker-compose, k8s-pod-troubleshooting, dns
- 이 글로 오는 글 ←: build-caching, docker-compose, docker-container-basics, docker-network-drivers, docker-network-volume, git-tips-advanced, github-actions-docker-ecr, k8s-pod-lifecycle, k8s-pod-troubleshooting, k8s-project-structure, linux-files-permissions, linux-systemd-systemctl

### Programming › Server/Infra › IaC (`programming/server-infra/iac`)

#### `ansible-network-automation` — Ansible로 네트워크 설정 자동화: 몇 번을 돌려도 같은 결과

- 요약: 서버마다 다른 sysctl 값과 방화벽 규칙에서 출발해 인벤토리와 group_vars, 모듈의 멱등성, --check --diff, 템플릿과 핸들러, 규칙을 한 줄씩 맞출지 파일 전체로 맞출지, serial과 rescue로 한 대씩 바꾸고 되돌리는 법, cisco.ios 리소스 모듈까지 네임스페이스 실습으로 따라간다.
- 태그: IaC, DevOps, Linux, Network, Firewall, Automation
- 키워드: Ansible, 플레이북, group_vars
- 길이: 682줄
- 소제목: Terraform이 들어가지 못하는 곳 / 인벤토리와 group_vars: 무엇을 어디에 적나 / 플레이북 한 번 돌리기 / 두 번째 실행은 아무것도 바꾸지 않아야 한다 / 바꾸기 전에 --check --diff / 설정 파일은 템플릿으로, 다시 읽기는 핸들러로 / 규칙을 한 줄씩 맞출까, 파일 전체를 맞출까 / 한 대씩 바꾸고, 틀리면 멈춘다 / 네트워크 장비도 같은 방식으로 / 현장에서 자동화가 사고를 키우는 순간 / 같은 값을 몇 번이고 / 면접에서 나올 만한 질문
- 직접 링크 →: terraform-network-iac, iptables-basics, iptables-nat, network-config-cicd
- 키워드 백링크 →: terraform-basics, security-groups-nacl, vlan-basics, vpc-basics, http-methods
- 이 글로 오는 글 ←: network-config-cicd, rolling-deployment, terraform-basics, terraform-network-iac

#### `terraform-basics` — Terraform 기본: plan, apply, state와 잠금

- 요약: 콘솔에서 연 규칙을 아무도 설명하지 못하는 상황에서 출발해 프로바이더와 리소스, plan이 비교하는 세 가지, 교체를 뜻하는 기호, state 파일에 든 것과 git에 넣지 않는 이유, drift, state 명령, 원격 백엔드와 잠금, force-unlock의 위험을 실제 출력으로 따라간다.
- 태그: Terraform, IaC, DevOps, AWS
- 키워드: Terraform, terraform plan, state 파일, force-unlock
- 길이: 665줄
- 소제목: 콘솔 대신 코드로 적는 이유 / 프로바이더와 리소스 / plan은 세 가지를 맞대 본다 / 기호 하나가 다운타임을 말한다 / state 파일 안에 든 것 / state를 git에 넣지 않는 이유 / 콘솔에서 고친 것은 drift가 된다 / state를 손보는 명령 / 원격 백엔드로 옮기기 / 두 사람이 동시에 apply하면 / force-unlock을 치기 전에 / 현장에서 state 때문에 막히는 순간 / 기억은 state가, 판단은 plan이 / 면접에서 나올 만한 질문
- 직접 링크 →: terraform-modules-tfvars, terraform-network-iac, ansible-network-automation, git-large-files-secrets, distributed-lock, k8s-deploy-pipeline-eks
- 키워드 백링크 →: json-crud-http, db-type-key-value, security-groups-nacl, eks-cluster-basics, vpc-basics
- 이 글로 오는 글 ←: ansible-network-automation, eks-cluster-basics, github-actions-docker-ecr, k8s-deploy-pipeline-eks, k8s-namespace, k8s-project-structure, network-config-cicd, terraform-modules-tfvars, terraform-network-iac, vpc-basics

#### `terraform-modules-tfvars` — Terraform 모듈과 tfvars: 환경마다 복사하지 않기

- 요약: 디렉터리를 복사해 환경을 늘리다 어긋난 경험에서 출발해 모듈 구조, 변수 검증, locals, outputs, count와 for_each의 주소, 값이 들어오는 순서, 환경별 tfvars와 state 분리, workspace를 쓸 때, 버전 고정, 레지스트리 모듈을 감싸 쓰는 법을 정리한다.
- 태그: Terraform, IaC, DevOps, AWS
- 키워드: Terraform 모듈, tfvars, for_each, terraform workspace
- 길이: 669줄
- 소제목: 폴더 하나가 모듈 하나 / 변수에 규칙을 건다 / 계산은 locals에 모은다 / 모듈의 값은 outputs로만 나온다 / count로 만들면 순서가 주소가 된다 / 값은 어디서 들어오나 / 환경마다 tfvars와 state를 나눈다 / workspace는 언제 쓰나 / 버전을 묶는 세 군데 / 레지스트리 모듈을 감싸서 쓴다 / 모듈을 나누다 생기는 사고 / 같은 코드, 다른 값 / 면접에서 나올 만한 질문
- 직접 링크 →: terraform-basics, terraform-network-iac, eks-cluster-basics, layer-ip-addressing, k8s-project-structure
- 키워드 백링크 →: docker-container-basics, security-groups-nacl, ipv6-basics, vpc-basics
- 이 글로 오는 글 ←: eks-cluster-basics, k8s-deploy-pipeline-eks, k8s-namespace, k8s-project-structure, terraform-basics, terraform-network-iac

#### `terraform-network-iac` — 네트워크를 Terraform으로: 주소 계획부터 끊기지 않는 변경까지

- 요약: 보안 그룹 설명 한 줄을 고쳤다가 연결이 끊긴 일에서 출발해 cidrsubnet으로 주소를 고정하는 법, 인라인과 개별 규칙을 섞을 때 생기는 흔들림, 교체 순서와 두 단계 교체, 제자리 수정으로 숨는 위험, 손으로 만든 규칙 import, tfsec·checkov·conftest 정책 검사를 실제 출력으로 따라간다.
- 태그: Terraform, IaC, AWS, Network, DevOps, Security
- 키워드: cidrsubnets, create_before_destroy, conftest
- 길이: 679줄
- 소제목: 네트워크 리소스는 서로 물려 있다 / 주소 계획을 코드에 먼저 적는다 / VPC 한 벌을 for_each로 짓는다 / 보안 그룹 규칙을 적는 세 가지 방법 / 인라인과 개별 규칙을 섞으면 plan이 끝나지 않는다 / 설명 한 줄 고쳤는데 보안 그룹이 갈아 끼워진다 / 물결표 하나가 서브넷을 인터넷에서 떼어 낸다 / 콘솔에서 연 규칙을 코드로 데려오기 / plan을 사람 눈 대신 정책으로 한 번 더 본다 / 현장에서 네트워크 plan을 읽는 순서 / 코드는 바꾸되 길은 끊지 않는다 / 면접에서 나올 만한 질문
- 직접 링크 →: terraform-basics, terraform-modules-tfvars, vpc-basics, vpc-subnets-route-tables, security-groups-nacl, vpc-peering-transit-privatelink, layer-ip-addressing, network-flow-logs, network-config-cicd, ansible-network-automation
- 이 글로 오는 글 ←: ansible-network-automation, network-config-cicd, security-groups-nacl, terraform-basics, terraform-modules-tfvars, vpc-basics

### Programming › Server/Infra › Kubernetes (`programming/server-infra/kubernetes`)

#### `gateway` — 게이트웨이: API 게이트웨이에서 Kubernetes Gateway API까지

- 요약: 흩어진 서비스 앞에 입구를 하나 세우는 API 게이트웨이를 리버스 프록시·로드 밸런서와 비교하고, Ingress의 뒤를 잇는 Gateway API가 역할을 어떻게 나누는지 정리한다.
- 태그: coupang, Kubernetes, Gateway, Ingress, HTTP · 회사: coupang
- 키워드: API 게이트웨이, Gateway API, HTTPRoute, ReferenceGrant, BFF
- 길이: 485줄
- 소제목: 입구를 하나로 모으기 / 로드 밸런서, 리버스 프록시와 무엇이 다른가 / 게이트웨이가 너무 똑똑해지면 / 쿠버네티스의 입구, Ingress로는 부족했던 것 / 리소스를 역할별로 나눈 Gateway API / HTTPRoute 뜯어보기 / 헤더로 고르고 비율로 나누기 / 네임스페이스를 넘어 참조하기 / Ingress에서 옮겨 갈 때 / 게이트웨이를 사이에 두고 로그가 엇갈릴 때 / 입구 하나, 규칙은 여러 사람이 / 면접에서 나올 만한 질문
- 직접 링크 →: kubernetes-ingress, resilience-patterns
- 키워드 백링크 →: rate-limiting-in-practice, canary-release, k8s-network-policy, osi-in-practice, docker-container-basics, proxy-reverse-proxy, token-login, redis-basics, what-happens-google-com, grpc, https-tls, udp-and-quic, http-methods, dns
- 이 글로 오는 글 ←: canary-release, distributed-tracing, grpc, http-methods, http-status-codes, https-tls, k8s-deployment, k8s-network-policy, kubernetes-ingress, microservices, mvc-pattern, network-layers-overview, nginx-reverse-proxy, osi-in-practice, pattern-facade, proxy-reverse-proxy, rate-limiting-in-practice, resilience-patterns, rest-api-design, service-mesh

#### `kubernetes-ingress` — Kubernetes Ingress: 로드 밸런서 하나로 여러 서비스 열기

- 요약: 서비스마다 로드 밸런서를 다는 대신 Ingress 규칙과 컨트롤러로 입구를 하나로 합친다. host·path 라우팅, TLS 종료와 cert-manager, 요청이 Pod에 닿는 경로와 흔한 에러까지 따라가 본다.
- 태그: Kubernetes, Ingress, HTTP, TLS
- 키워드: Ingress, Ingress Controller, ingress-nginx, IngressClass, cert-manager
- 길이: 433줄
- 소제목: 서비스마다 로드 밸런서를 달면 / 규칙과 규칙을 실행하는 쪽 / 매니페스트 한 줄씩 읽기 / 경로가 겹치면 누가 이기나 / 요청 하나가 Pod에 닿기까지 / HTTPS는 컨트롤러에서 끝난다 / 어노테이션이 자꾸 늘어난다 / 502, 503, 413을 만났을 때 / Ingress가 하는 일, 다시 / 면접에서 나올 만한 질문
- 직접 링크 →: gateway, network-troubleshooting-by-layer, packet-capture-tcpdump
- 키워드 백링크 →: k8s-service-types, k8s-pod-probes, proxy-reverse-proxy, iptables-nat, osi-in-practice, docker-container-basics, https-tls, k8s-pod-lifecycle, service-mesh, http-status-codes, what-happens-google-com, cors, dns, webhooks
- 이 글로 오는 글 ←: canary-release, cookie-session-login, docker-compose, eks-cluster-basics, encryption-in-transit, gateway, grpc, helm-basics, helm-release-lifecycle, http-message, https-tls, iptables-nat, k8s-deploy-pipeline-eks, k8s-deployment, k8s-namespace, k8s-network-policy, k8s-pod-basics, k8s-pod-lifecycle, k8s-pod-probes, k8s-pod-troubleshooting, k8s-project-structure, k8s-secret, k8s-service-types, osi-in-practice, service-mesh

### Programming › Server/Infra › Kubernetes › Config & Storage (`programming/server-infra/kubernetes/config`)

#### `k8s-configmap` — ConfigMap: 설정은 언제 Pod에 닿나

- 요약: 환경 변수, 볼륨, subPath에 따라 ConfigMap 값이 언제 읽히고 언제 바뀌는지 따라가고, 해시 어노테이션과 이름 해시로 롤아웃을 일으키는 법, immutable과 1MiB 한도까지 실습 클러스터에서 확인한다.
- 태그: Kubernetes, DevOps, Troubleshooting
- 키워드: ConfigMap, subPath, configMapGenerator, immutable ConfigMap
- 길이: 594줄
- 소제목: 이미지 하나를 여러 환경에서 쓰려면 / ConfigMap을 만드는 세 가지 방법 / Pod에 넣는 두 가지 길 / 없는 ConfigMap을 가리키면 Pod가 뜨지 않는다 / 환경 변수는 컨테이너가 뜰 때 한 번만 읽힌다 / 마운트한 파일은 늦게 바뀐다 / subPath로 꽂은 파일은 끝까지 그대로다 / 설정이 바뀌면 Pod를 다시 띄우게 하기 / immutable로 잠그기 / 1MiB를 넘으면 만들어지지 않는다 / 설정이 안 먹을 때 보는 순서 / ConfigMap은 언제 무엇을 읽나 / 면접에서 나올 만한 질문
- 직접 링크 →: k8s-namespace, k8s-secret, k8s-pod-multicontainer, helm-chart-templates, k8s-pv-pvc
- 키워드 백링크 →: k8s-pod-basics, helm-dependencies-oci-gitops, helm-basics, latency-bandwidth-throughput, db-type-key-value
- 이 글로 오는 글 ←: ci-cd-basics, eks-cluster-basics, encryption-in-transit, helm-basics, helm-chart-templates, helm-dependencies-oci-gitops, k8s-deploy-pipeline-eks, k8s-deployment, k8s-namespace, k8s-pod-multicontainer, k8s-pod-troubleshooting, k8s-project-structure, k8s-pv-pvc, k8s-secret, optimistic-locking, rollback-strategy

#### `k8s-pv-pvc` — PV와 PVC: Pod보다 오래 사는 디스크

- 요약: PVC가 PV에 묶이는 규칙, 접근 모드, StorageClass와 WaitForFirstConsumer, 존에 묶인 디스크 때문에 생기는 Pending, Retain과 Delete 회수 정책의 함정, 용량 확장, StatefulSet의 PVC, Multi-Attach 오류까지 실습 클러스터의 실제 출력으로 따라간다.
- 태그: Kubernetes, DevOps, Troubleshooting, AWS
- 키워드: PersistentVolumeClaim, PersistentVolume, WaitForFirstConsumer, ReadWriteOnce
- 길이: 627줄
- 소제목: 컨테이너 안의 파일은 Pod와 함께 사라진다 / 디스크를 요청하는 쪽과 내주는 쪽 / 미리 만든 PV에 PVC가 묶이는 과정 / 접근 모드는 Pod가 아니라 노드를 센다 / StorageClass가 디스크를 만들어 준다 / 노드가 정해진 뒤에 디스크를 만든다 / 디스크가 다른 존에 있으면 Pod가 못 간다 / PVC를 지우면 디스크는 어떻게 되나 / 쓰는 중인 PVC는 지워지지 않는다 / 용량 늘리기 / StatefulSet은 Pod마다 PVC를 만든다 / 현장에서 볼륨 때문에 Pod가 안 뜰 때 / Pod보다 오래 사는 데이터 / 면접에서 나올 만한 질문
- 직접 링크 →: k8s-configmap, docker-network-volume, k8s-pod-resources, k8s-pod-scheduling, k8s-deployment, k8s-secret
- 키워드 백링크 →: vpc-basics, eks-cluster-basics
- 이 글로 오는 글 ←: eks-cluster-basics, k8s-configmap, k8s-deploy-pipeline-eks, k8s-deployment, k8s-namespace, k8s-pod-troubleshooting, k8s-project-structure, k8s-secret

#### `k8s-secret` — Secret: base64는 암호가 아니다

- 요약: Secret 값이 etcd에 평문으로 저장되는 것을 직접 확인하고, 저장 시 암호화와 키 교체, list 권한까지 챙기는 RBAC, 환경 변수와 파일의 차이, imagePullSecrets, 외부 저장소 연동과 값이 샜을 때의 교체 순서를 다룬다.
- 태그: Kubernetes, Security, DevOps
- 키워드: Kubernetes Secret, EncryptionConfiguration, imagePullSecrets, Secrets Store CSI Driver
- 길이: 693줄
- 소제목: base64는 암호가 아니다 / ConfigMap과 무엇이 다른가 / stringData와 last-applied에 남는 평문 / 값이 지나가고 머무는 곳 / etcd에는 평문으로 들어간다 / API 서버가 etcd에 쓰기 전에 암호화하기 / 누가 Secret을 읽을 수 있나 / 환경 변수로 넣을까, 파일로 넣을까 / 레지스트리 인증 imagePullSecrets / 클러스터 밖에 원본을 두는 방법 / 비밀 값이 새는 길과 새고 난 뒤 / Secret이 지켜 주는 것과 아닌 것 / 면접에서 나올 만한 질문
- 직접 링크 →: k8s-configmap, base64, db-type-key-value, k8s-namespace, k8s-pod-troubleshooting, helm-values-secrets, helm-basics, k8s-pv-pvc
- 키워드 백링크 →: grpc, cron-jobs, kubernetes-ingress, encryption-at-rest, linux-files-permissions, github-actions-docker-ecr, eks-cluster-basics
- 이 글로 오는 글 ←: ci-cd-basics, eks-cluster-basics, helm-values-secrets, k8s-configmap, k8s-deploy-pipeline-eks, k8s-namespace, k8s-pod-troubleshooting, k8s-project-structure, k8s-pv-pvc

### Programming › Server/Infra › Kubernetes › EKS (`programming/server-infra/kubernetes/eks`)

#### `eks-cluster-basics` — EKS 기본: IAM으로 들어오고 VPC에서 IP를 받는 클러스터

- 요약: 동료의 kubectl이 로그인에 실패하고 서브넷 IP가 바닥나는 두 장면에서 출발해 AWS 계정의 컨트롤 플레인, IAM 인증과 access entry, 노드 그룹·Fargate·Karpenter, VPC CNI가 Pod에 VPC IP를 주는 방식과 IP 고갈 계산, IRSA와 Pod Identity, 애드온과 버전 주기를 다룬다.
- 태그: Kubernetes, AWS, Cloud, DevOps, Network
- 키워드: EKS, access entry, VPC CNI, IRSA, EKS Pod Identity
- 길이: 559줄
- 소제목: 컨트롤 플레인은 AWS 계정에 있다 / kubectl이 IAM으로 로그인하는 길 / access entry가 aws-auth를 대신한다 / 노드를 누가 띄우나 / Pod IP가 VPC에서 나온다 / 서브넷 IP가 먼저 바닥난다 / Pod에 AWS 권한 주기 / 애드온도 버전이 있다 / 1년에 세 번 올라오는 버전 / EKS에서 막히는 순간 / IAM으로 들어오고 VPC에서 주소를 받는다 / 면접에서 나올 만한 질문
- 직접 링크 →: terraform-modules-tfvars, k8s-secret, k8s-hpa, k8s-cni-pod-network, vpc-subnets-route-tables, k8s-coredns, k8s-pv-pvc, k8s-deploy-pipeline-eks
- 키워드 백링크 →: kubernetes-ingress, network-flow-logs, terraform-basics, k8s-configmap, base64, ipv6-basics, helm-basics, autoscaling, security-groups-nacl, what-happens-google-com, layer-ip-addressing, db-type-key-value, vpc-basics, dns, webhooks
- 이 글로 오는 글 ←: docker-network-drivers, github-actions-docker-ecr, helm-values-secrets, k8s-cni-pod-network, k8s-deploy-pipeline-eks, k8s-hpa, k8s-namespace, k8s-project-structure, k8s-pv-pvc, k8s-secret, layer-ip-addressing, network-flow-logs, sdn-vxlan-overlay, terraform-basics, terraform-modules-tfvars, vpc-basics, vpc-subnets-route-tables

### Programming › Server/Infra › Kubernetes › Helm (`programming/server-infra/kubernetes/helm`)

#### `helm-basics` — Helm은 무엇을 풀어 주나: 차트, 릴리스, values

- 요약: 환경마다 복사한 YAML이 어긋나는 문제에서 출발해 차트·릴리스·리비전이 무엇인지, helm install 한 번에 클러스터에 무엇이 생기고 그 기록이 어느 Secret에 남는지 실습 클러스터의 실제 출력으로 따라간다.
- 태그: Kubernetes, Helm, DevOps
- 키워드: Helm 차트, helm install, 릴리스 리비전
- 길이: 567줄
- 소제목: 복사한 YAML은 환경마다 조금씩 어긋난다 / 차트, 릴리스, 리비전 / helm create가 만들어 주는 것 / install 한 번에 일어나는 일 / 설치하고, 들여다보고, 지우기 / 릴리스 기록은 클러스터 안의 Secret에 있다 / 이미 있는 리소스와 이름이 겹칠 때 / 현장에서 릴리스를 만나는 순간 / Helm 2에는 서버가 있었다 / Helm이 묶어 주는 것 / 면접에서 나올 만한 질문
- 직접 링크 →: helm-dependencies-oci-gitops, helm-chart-templates, helm-release-lifecycle, k8s-pod-lifecycle, helm-values-secrets
- 키워드 백링크 →: k8s-pod-basics, k8s-configmap, docker-container-basics, kubernetes-ingress, redis-basics
- 이 글로 오는 글 ←: eks-cluster-basics, garbage-collection, helm-chart-templates, helm-dependencies-oci-gitops, helm-release-lifecycle, helm-values-secrets, k8s-configmap, k8s-deploy-pipeline-eks, k8s-hpa, k8s-namespace, k8s-pod-basics, k8s-pod-troubleshooting, k8s-project-structure, k8s-secret

#### `helm-chart-templates` — 차트 템플릿 문법: values, _helpers.tpl, 들여쓰기

- 요약: 렌더링 결과의 줄 번호를 가리키는 YAML 오류에서 출발해 Go 템플릿이 텍스트를 찍는 방식, 점의 의미, 공백을 지우는 하이픈, include와 toYaml·nindent, default·required, tpl, 설정이 바뀌면 Pod를 다시 띄우는 법까지 helm template과 lint로 확인한다.
- 태그: Kubernetes, Helm, DevOps
- 키워드: _helpers.tpl, nindent, helm template
- 길이: 671줄
- 소제목: 템플릿은 YAML이 아니라 텍스트를 찍는다 / 점 하나가 가리키는 것 / 한 줄을 조각내 읽기 / 공백을 지우는 하이픈 / 들여쓰기가 어긋날 때 나는 오류 / 조각을 만드는 define, 가져다 쓰는 include / 값이 없을 때, 값이 틀린 타입일 때 / 조건과 반복, 그리고 바뀌는 점 / 구조를 통째로 넘기는 toYaml / 값 안의 템플릿을 실행하는 tpl / 설정이 바뀌면 Pod를 다시 띄우게 하기 / 어느 단계에서 잡히나 / 템플릿을 읽는 순서 / 면접에서 나올 만한 질문
- 직접 링크 →: helm-basics, helm-release-lifecycle, k8s-pod-resources, helm-values-secrets, k8s-configmap
- 키워드 백링크 →: k8s-project-structure, k8s-pod-basics
- 이 글로 오는 글 ←: helm-basics, helm-dependencies-oci-gitops, helm-values-secrets, k8s-configmap, k8s-deployment

#### `helm-dependencies-oci-gitops` — 차트 배포 흐름: 의존성, OCI 저장소, helmfile, ArgoCD

- 요약: ArgoCD로 배포한 앱이 helm history에 없는 이유에서 출발해 하위 차트와 values 전달, library 차트, 차트 버전과 앱 버전, OCI 레지스트리에 올리고 받기, helmfile, 렌더링만 하는 ArgoCD, Kustomize와의 차이를 정리한다.
- 태그: Kubernetes, Helm, DevOps, GitOps
- 키워드: helmfile, library 차트, OCI 레지스트리, Kustomize
- 길이: 648줄
- 소제목: 차트가 다른 차트를 품는 의존성 / 부모 values가 하위 차트로 흘러가는 길 / 템플릿만 빌려주는 library 차트 / 차트 버전과 앱 버전 / 차트를 OCI 레지스트리에 올리고 받기 / 릴리스 여러 개를 파일 하나로, helmfile / ArgoCD는 차트를 렌더링만 한다 / Kustomize와 무엇이 다른가 / 차트가 클러스터에 닿기까지 / 면접에서 나올 만한 질문
- 직접 링크 →: helm-basics, helm-chart-templates, helm-values-secrets, helm-release-lifecycle, k8s-pod-basics
- 키워드 백링크 →: git-undo, k8s-configmap, docker-container-basics, api-versioning, redis-basics, what-happens-google-com, github-actions-docker-ecr
- 이 글로 오는 글 ←: helm-basics, helm-release-lifecycle, helm-values-secrets, k8s-configmap, k8s-deploy-pipeline-eks, k8s-namespace, k8s-project-structure

#### `helm-release-lifecycle` — 업그레이드와 롤백: 릴리스가 꼬일 때

- 요약: another operation is in progress 오류에서 출발해 업그레이드 한 번의 흐름, 새 리비전이 되는 롤백, 손으로 고친 값과 3-way 병합, helm diff, 훅, pending 상태 풀기, 바꿀 수 없는 필드, 처음 한 번만 설치되는 CRD를 실습 클러스터에서 재현한다.
- 태그: Kubernetes, Helm, DevOps, Troubleshooting
- 키워드: helm rollback, pending-upgrade, helm diff, Helm 훅
- 길이: 619줄
- 소제목: 업그레이드 한 번에 일어나는 일 / 롤백도 새 리비전이다 / 손으로 고친 값은 다음 배포에 어떻게 되나 / 바꾸기 전에 diff로 보기 / 훅은 릴리스 밖에서 돈다 / another operation is in progress / 바꿀 수 없는 필드를 바꾸면 / CRD는 처음 한 번만 설치된다 / 릴리스가 꼬였을 때 보는 순서 / 면접에서 나올 만한 질문
- 직접 링크 →: helm-basics, k8s-pod-probes, k8s-pod-lifecycle, helm-dependencies-oci-gitops, kubernetes-ingress
- 키워드 백링크 →: k8s-pod-basics, service-mesh, rollback-strategy, k8s-hpa
- 이 글로 오는 글 ←: helm-basics, helm-chart-templates, helm-dependencies-oci-gitops, k8s-deploy-pipeline-eks, k8s-deployment, rollback-strategy

#### `helm-values-secrets` — values를 환경별로 나누고 비밀 값 다루기

- 요약: 이미지 태그만 바꿨는데 레플리카가 돌아간 사례에서 출발해 values가 합쳐지는 순서, 목록이 통째로 바뀌는 규칙, --set의 타입 함정, 업그레이드 때 지난 값의 행방, values.schema.json, SOPS와 클러스터 안에서 Secret을 만드는 방법, lookup의 함정을 다룬다.
- 태그: Kubernetes, Helm, DevOps, Security
- 키워드: values.schema.json, --reuse-values, SOPS
- 길이: 634줄
- 소제목: 값이 들어오는 순서 / 맵은 합쳐지고 목록은 통째로 바뀐다 / --set 한 줄에 숨은 규칙 / values 파일 안의 숫자는 실수가 된다 / 업그레이드 때 지난 값은 어디로 가나 / 환경별로 파일을 나누는 방법 / 틀린 값을 미리 막는 values.schema.json / 비밀 값을 values에 평문으로 두면 / SOPS로 암호화해서 git에 두기 / 클러스터 안에서 Secret을 만드는 방법 / lookup은 helm template에서 비어 있다 / 값은 git에, 비밀은 따로 / 면접에서 나올 만한 질문
- 직접 링크 →: helm-chart-templates, helm-basics, k8s-secret, helm-dependencies-oci-gitops
- 키워드 백링크 →: eks-cluster-basics, db-type-key-value
- 이 글로 오는 글 ←: helm-basics, helm-chart-templates, helm-dependencies-oci-gitops, k8s-project-structure, k8s-secret

### Programming › Server/Infra › Kubernetes › Networking (`programming/server-infra/kubernetes/networking`)

#### `k8s-cni-pod-network` — CNI와 Pod 네트워크: Pod IP는 누가 주고 노드는 어떻게 잇나

- 요약: kubelet이 CNI 플러그인을 실행 파일로 부르는 과정을 참조 bridge 플러그인으로 직접 실행해 보고, 노드별 Pod 대역, 경로 방식과 VXLAN 방식으로 노드를 잇는 법, 끼어든 MASQUERADE와 MTU, IP 고갈 같은 현장 에러를 재현한다.
- 태그: Kubernetes, Network, Linux, VXLAN, Troubleshooting, DevOps
- 키워드: CNI 플러그인, host-local, podCIDR, Flannel
- 길이: 562줄
- 소제목: 쿠버네티스가 네트워크에 요구하는 세 가지 / kubelet은 플러그인을 실행 파일로 부른다 / 노드마다 Pod 대역을 나눠 준다 / 노드를 넘는 첫 번째 방법: 경로를 놓는다 / 노드를 넘는 두 번째 방법: VXLAN으로 감싼다 / 어떤 CNI를 고르나 / 노드를 넘을 때만 안 되면 / 쿠버네티스는 약속만, 길은 플러그인이 / 면접에서 나올 만한 질문
- 직접 링크 →: k8s-pod-basics, docker-network-drivers, sdn-vxlan-overlay, layer-ip-addressing, layer-mtu-fragmentation, k8s-network-policy, k8s-service-types
- 키워드 백링크 →: layer-ip-routing-icmp, iptables-nat, iptables-basics, eks-cluster-basics, packet-capture-tcpdump, layer-link-ethernet-arp, network-flow-logs, security-groups-nacl, vpc-basics, udp-and-quic
- 이 글로 오는 글 ←: docker-network-drivers, docker-network-volume, eks-cluster-basics, k8s-coredns, k8s-namespace, k8s-network-policy, k8s-pod-basics, k8s-pod-troubleshooting, k8s-service-types, layer-ip-addressing, layer-mtu-fragmentation, network-flow-logs, sdn-vxlan-overlay, vpc-subnets-route-tables

#### `k8s-coredns` — CoreDNS와 클러스터 DNS: ndots:5가 질의를 불리는 이유

- 요약: 외부 API 호출이 가끔 5초씩 늦는 증상에서 출발해 Pod의 resolv.conf와 search·ndots가 질의 여덟 개를 만드는 과정, CoreDNS가 Service와 Pod 이름에 답하는 방식, conntrack 경쟁으로 생기는 5초 지연과 NodeLocal DNSCache, loop 플러그인 장애를 실제 캡처로 따라간다.
- 태그: Kubernetes, DNS, Network, Performance, Troubleshooting
- 키워드: CoreDNS, ndots, NodeLocal DNSCache, dnsPolicy
- 길이: 435줄
- 소제목: Pod가 받는 resolv.conf / 이름 하나에 질의 여덟 개 / CoreDNS가 답을 만드는 법 / 가끔 5초씩 늦는 이름 풀이 / 노드마다 캐시를 둔다 / CoreDNS가 스스로 죽는 경우 / 이름 하나 뒤의 질의들 / 면접에서 나올 만한 질문
- 직접 링크 →: dns, k8s-service-types, k8s-network-policy, k8s-cni-pod-network
- 키워드 백링크 →: iptables-nat, iptables-basics, ipv6-basics, packet-capture-tcpdump, race-conditions, udp-and-quic
- 이 글로 오는 글 ←: docker-network-volume, eks-cluster-basics, k8s-namespace, k8s-network-policy, k8s-service-types, network-monitoring, service-discovery

#### `k8s-network-policy` — NetworkPolicy: 기본 거부부터 DNS 허용, 대시 하나의 함정까지

- 요약: 기본 거부를 걸자마자 이름 풀이가 죽는 이유에서 출발해, 허용 목록이 더해지는 규칙, 양쪽 모두 허용해야 하는 연결, from 원소의 AND와 OR, policyTypes 생략의 함정, 노드에서 정책이 규칙이 되는 모습과 표준 정책의 한계를 실제로 막아 보며 정리한다.
- 태그: Kubernetes, Network, Security, Firewall, Troubleshooting
- 키워드: NetworkPolicy, 기본 거부 정책, namespaceSelector, AdminNetworkPolicy
- 길이: 512줄
- 소제목: 정책은 허용 목록이다 / 기본 거부를 걸자마자 이름이 안 풀린다 / 노드에서 정책은 규칙 묶음이 된다 / 대시 하나가 허용 범위를 바꾼다 / 판정을 코드로 따져 보기 / 표준 정책이 못 하는 것 / 정책을 걸고 무언가 안 될 때 / 허용 목록 하나하나가 길이다 / 면접에서 나올 만한 질문
- 직접 링크 →: k8s-cni-pod-network, k8s-service-types, osi-in-practice, dns, k8s-coredns, docker-network-drivers, gateway
- 키워드 백링크 →: docker-container-basics, iptables-basics, ipv6-basics, kubernetes-ingress, service-mesh, iptables-nat, udp-and-quic
- 이 글로 오는 글 ←: gateway, k8s-cni-pod-network, k8s-coredns, k8s-namespace, k8s-service-types, layer-ip-addressing, osi-in-practice, zero-trust-architecture

#### `k8s-service-types` — Kubernetes Service 타입: ClusterIP, NodePort, LoadBalancer, 그리고 트래픽 정책

- 요약: NodePort 뒤에서 클라이언트 IP가 노드 주소로 찍히는 이유를 따라가며 Service 타입이 층층이 쌓이는 구조와 EndpointSlice, 엔드포인트가 없을 때의 REJECT, externalTrafficPolicy의 SNAT과 헬스 체크 포트, headless와 ExternalName의 함정을 실제 객체와 손으로 만든 규칙으로 확인한다.
- 태그: Kubernetes, Network, DevOps, Troubleshooting, Linux
- 키워드: ClusterIP, NodePort, EndpointSlice, externalTrafficPolicy, headless Service
- 길이: 595줄
- 소제목: Service는 이름, 가상 IP, 엔드포인트 목록이다 / 포트 세 개가 각자 다른 곳을 가리킨다 / ClusterIP: 어느 장치에도 없는 주소 / NodePort: 모든 노드에 같은 문을 연다 / LoadBalancer: 바깥 로드 밸런서를 붙이는 약속 / headless와 ExternalName: 가상 IP 없이 이름만 / 클러스터 안에서도 가까운 Pod로 / 트래픽 정책을 직접 따져 보기 / Service에 붙는데 응답이 이상할 때 / 타입은 층, 정책은 출발지 / 면접에서 나올 만한 질문
- 직접 링크 →: iptables-nat, k8s-pod-lifecycle, kubernetes-ingress, k8s-network-policy, k8s-cni-pod-network, k8s-coredns
- 키워드 백링크 →: db-type-wide-column, iptables-basics, http-versions, kafka-basics, security-groups-nacl, vpc-basics, osi-in-practice, redis-basics, dns, what-happens-google-com, grpc, layer-ip-routing-icmp, udp-and-quic, layer-link-ethernet-arp
- 이 글로 오는 글 ←: grpc, iptables-nat, k8s-cni-pod-network, k8s-coredns, k8s-deploy-pipeline-eks, k8s-deployment, k8s-namespace, k8s-network-policy, k8s-pod-lifecycle, k8s-pod-probes, k8s-pod-troubleshooting, kubernetes-ingress, network-flow-logs, packet-capture-tcpdump, service-discovery, service-mesh

#### `service-mesh` — 서비스 메시: 사이드카가 가로채고, 컨트롤 플레인이 설정을 밀어 준다

- 요약: 앱 옆에 붙은 Envoy가 iptables로 트래픽을 가로채는 과정부터 xDS, SPIFFE 인증서 mTLS, 가중치 분할, 곱해지는 재시도까지 직접 만든 사이드카로 따라간다. 사이드카 두 개가 더하는 지연과 ambient 방식의 차이도 본다.
- 태그: Kubernetes, Network, TLS, Resilience, DevOps
- 키워드: 서비스 메시, xDS, SPIFFE, ambient 모드
- 길이: 545줄
- 소제목: 라이브러리 대신 옆에 프록시를 둔 이유 / 데이터 플레인과 컨트롤 플레인 / 앱 모르게 끼어드는 iptables / 인증서에 서비스 이름을 적는다 / 가중치로 트래픽을 옮긴다 / 재시도가 곱해진다 / 프록시 두 개가 더하는 시간 / 사이드카 없이 메시를 만드는 방식 / 메시가 있으면 로그를 다시 읽어야 한다 / 메시를 들일지 정하는 기준 / 면접에서 나올 만한 질문
- 직접 링크 →: k8s-pod-multicontainer, https-tls, gateway, iptables-nat, zero-trust-architecture, resilience-patterns, idempotency-key, circuit-breaker, service-discovery
- 키워드 백링크 →: k8s-service-types, iptables-basics, packet-capture-tcpdump, kubernetes-ingress, retries, osi-in-practice, http-status-codes, grpc, http-methods
- 이 글로 오는 글 ←: canary-release, circuit-breaker, distributed-tracing, encryption-in-transit, grpc, helm-release-lifecycle, https-tls, idempotency-key, ids-ips, k8s-deployment, k8s-network-policy, k8s-pod-multicontainer, kubernetes-ingress, load-balancing-algorithms, osi-in-practice, resilience-patterns, retries, service-discovery, vpc-peering-transit-privatelink, zero-trust-architecture

### Programming › Server/Infra › Kubernetes › Pod (`programming/server-infra/kubernetes/pod`)

#### `k8s-pod-basics` — Pod는 왜 컨테이너가 아니라 Pod인가

- 요약: 함께 떠야 하는 컨테이너 묶음인 Pod가 IP와 볼륨을 어떻게 나눠 갖는지, pause 컨테이너가 무엇을 붙잡고 있는지 보고, kubectl로 만들고 들여다보고 지운 뒤 Pod를 직접 만들지 않고 Deployment에 맡기는 이유까지 따라간다.
- 태그: Kubernetes, Container, DevOps
- 키워드: pause 컨테이너, ReplicaSet, 멀티 컨테이너 Pod
- 길이: 491줄
- 소제목: 컨테이너 대신 Pod를 만드는 이유 / 한 Pod 안에서 나눠 갖는 것 / pause 컨테이너가 붙잡고 있는 것 / kubectl run 한 줄이 지나가는 길 / 매니페스트 한 줄씩 읽기 / 띄우고, 들여다보고, 지우기 / 직접 만든 Pod는 아무도 다시 살려 주지 않는다 / 한 Pod에 무엇을 같이 넣나 / Pod를 다시 정리하면 / 면접에서 나올 만한 질문
- 직접 링크 →: k8s-pod-resources, k8s-pod-troubleshooting, k8s-pod-lifecycle, iptables-nat, helm-basics, k8s-pod-multicontainer, docker-container-basics
- 키워드 백링크 →: k8s-pod-scheduling, k8s-cni-pod-network, kubernetes-ingress, db-type-key-value
- 이 글로 오는 글 ←: canary-release, docker-network-drivers, helm-basics, helm-chart-templates, helm-dependencies-oci-gitops, helm-release-lifecycle, k8s-cni-pod-network, k8s-configmap, k8s-deploy-pipeline-eks, k8s-deployment, k8s-hpa, k8s-namespace, k8s-pod-lifecycle, k8s-pod-multicontainer, k8s-pod-probes, k8s-pod-resources, k8s-pod-scheduling, linux-processes-signals, pattern-prototype

#### `k8s-pod-lifecycle` — Pod의 일생: Pending부터 종료까지

- 요약: STATUS 칸의 말이 phase가 아니라는 데서 출발해 컨테이너 상태와 조건, restartPolicy, 10초에서 5분까지 늘어나는 CrashLoopBackOff, preStop과 SIGTERM·SIGKILL로 이어지는 종료 순서, PID 1과 종료 코드 137·143을 실제로 재현하며 정리한다.
- 태그: Kubernetes, Linux, DevOps, Troubleshooting
- 키워드: CrashLoopBackOff, preStop, terminationGracePeriodSeconds, Pod phase
- 길이: 539줄
- 소제목: STATUS 칸은 phase가 아니다 / 컨테이너 상태와 조건 / init 컨테이너가 먼저 끝나야 한다 / 컨테이너가 죽으면 kubelet이 다시 띄운다 / CrashLoopBackOff는 기다리는 중이라는 뜻 / Pod가 끝나는 순서 / preStop에 sleep을 두는 이유 / PID 1은 SIGTERM을 그냥 넘긴다 / 종료 코드로 읽는 마지막 순간 / Pod의 일생을 다시 보면 / 면접에서 나올 만한 질문
- 직접 링크 →: k8s-pod-probes, k8s-pod-multicontainer, k8s-pod-resources, tcp-connection-lifecycle, dockerfile-image-layers
- 키워드 백링크 →: k8s-pod-troubleshooting, k8s-service-types, k8s-pod-basics, iptables-nat, db-migration-tools, docker-container-basics, k8s-deploy-pipeline-eks, linux-processes-signals, kubernetes-ingress, batch-processing
- 이 글로 오는 글 ←: autoscaling, exponential-backoff-jitter, helm-basics, helm-release-lifecycle, k8s-deploy-pipeline-eks, k8s-deployment, k8s-pod-basics, k8s-pod-multicontainer, k8s-pod-probes, k8s-pod-resources, k8s-pod-troubleshooting, k8s-service-types, kubernetes-ingress, linux-processes-signals, load-balancer-basics, service-discovery

#### `k8s-pod-multicontainer` — 한 Pod에 컨테이너 여럿: init, 사이드카, 어댑터

- 요약: 사이드카·어댑터·앰배서더 패턴과 일반 컨테이너의 순서 문제를 보고, init 자리의 restartPolicy: Always로 만드는 네이티브 사이드카가 시작·종료 순서와 끝나지 않는 Job 문제를 어떻게 푸는지, 사이드카가 Pod의 자원 요구량을 어떻게 바꾸는지 따라간다.
- 태그: Kubernetes, Container, DevOps
- 키워드: 네이티브 사이드카, init 컨테이너, 사이드카 컨테이너
- 길이: 361줄
- 소제목: 한 Pod에 함께 두는 세 가지 모양 / 로그 사이드카를 붙일 때 챙길 것 / 일반 컨테이너끼리는 순서가 없다 / init 컨테이너는 끝나야 다음으로 간다 / 네이티브 사이드카는 init 자리에서 계속 돈다 / Job이 끝나지 않는 이유 / 사이드카도 자리를 차지한다 / 컨테이너를 골라서 들여다본다 / 언제 컨테이너를 더 붙이나 / 여러 컨테이너를 다시 정리하면 / 면접에서 나올 만한 질문
- 직접 링크 →: k8s-pod-basics, k8s-pod-resources, k8s-pod-lifecycle, k8s-pod-probes, k8s-pod-troubleshooting
- 키워드 백링크 →: k8s-configmap, service-mesh, osi-in-practice
- 이 글로 오는 글 ←: k8s-configmap, k8s-hpa, k8s-pod-basics, k8s-pod-lifecycle, linux-files-permissions, pattern-adapter, service-mesh

#### `k8s-pod-probes` — liveness·readiness·startup 프로브: 잘못 걸면 장애가 된다

- 요약: 세 프로브가 각각 무엇을 묻고 실패하면 무엇을 하는지, 숫자 다섯 개가 판정 시간을 어떻게 정하는지 보고, DB를 확인하는 liveness가 전체 재시작을 부르는 이유와 배포 중 readiness가 새 버전을 막는 모습을 따라간다.
- 태그: Kubernetes, DevOps, Troubleshooting
- 키워드: liveness probe, readiness probe, startupProbe
- 길이: 395줄
- 소제목: 세 프로브는 묻는 것이 다르다 / 확인하는 방법 네 가지 / 숫자 다섯 개가 판정 시간을 정한다 / liveness가 DB를 보면 생기는 일 / 엔드포인트를 둘로 나눈다 / 배포 중에 readiness가 하는 일 / 느리게 뜨는 앱에는 startupProbe / 프로브를 걸 때 흔한 실수 / 프로브를 다시 정리하면 / 면접에서 나올 만한 질문
- 직접 링크 →: resilience-patterns, k8s-pod-resources, k8s-pod-lifecycle
- 키워드 백링크 →: k8s-deploy-pipeline-eks, k8s-deployment, k8s-service-types, k8s-pod-basics, kubernetes-ingress, event-loop, what-happens-google-com
- 이 글로 오는 글 ←: db-migration-tools, deadlocks, docker-compose, dockerfile-image-layers, helm-release-lifecycle, k8s-deploy-pipeline-eks, k8s-deployment, k8s-pod-lifecycle, k8s-pod-multicontainer, k8s-pod-troubleshooting, kubernetes-ingress, load-balancer-basics, pattern-abstract-factory, rolling-deployment

#### `k8s-pod-resources` — requests와 limits: OOMKilled와 CPU 스로틀링

- 요약: requests는 스케줄러가, limits는 커널이 읽는다는 데서 출발해 QoS 클래스, CFS 스로틀링과 OOM kill을 cgroup으로 직접 재현하고, 런타임 힙 설정, 노드 압박 때의 eviction, LimitRange와 ResourceQuota까지 정리한다.
- 태그: Kubernetes, Linux, Performance, DevOps
- 키워드: QoS 클래스, OOMKilled, CPU 스로틀링, ResourceQuota, LimitRange
- 길이: 399줄
- 소제목: 두 숫자를 읽는 쪽이 다르다 / 자리가 없으면 Pending이다 / QoS 클래스는 두 숫자의 관계로 정해진다 / CPU limits를 넘으면 멈춰 세운다 / 메모리 limits를 넘으면 죽인다 / 런타임은 limits를 모를 수 있다 / 노드가 모자라면 kubelet이 쫓아낸다 / 네임스페이스 단위로 기본값과 한도 걸기 / requests와 limits를 다시 정리하면 / 면접에서 나올 만한 질문
- 직접 링크 →: k8s-pod-scheduling, k8s-pod-lifecycle
- 키워드 백링크 →: k8s-pod-basics
- 이 글로 오는 글 ←: distributed-lock, docker-container-basics, garbage-collection, helm-chart-templates, k8s-deployment, k8s-hpa, k8s-namespace, k8s-pod-basics, k8s-pod-lifecycle, k8s-pod-multicontainer, k8s-pod-probes, k8s-pod-scheduling, k8s-pod-troubleshooting, k8s-pv-pvc, linux-processes-signals

#### `k8s-pod-scheduling` — Pod는 어느 노드로 가나: 스케줄러와 Pending

- 요약: 스케줄러가 노드를 거르고 점수를 매기는 과정을 보고, nodeSelector와 node affinity, taint와 toleration, pod anti-affinity, topologySpreadConstraints, PriorityClass와 preemption을 실제로 걸어 보며 FailedScheduling 메시지를 읽는 법을 정리한다.
- 태그: Kubernetes, DevOps, Troubleshooting
- 키워드: taint, toleration, node affinity, topologySpreadConstraints, PriorityClass
- 길이: 406줄
- 소제목: 스케줄러는 거르고 나서 고른다 / FailedScheduling 한 줄 읽기 / 라벨로 노드를 고른다 / taint는 노드가 Pod를 가려 받는 표시다 / Pod끼리 붙이고 떼어 놓기 / 존마다 고르게 나눈다 / 자리가 없으면 덜 중요한 Pod를 밀어낸다 / 스케줄링을 다시 정리하면 / 면접에서 나올 만한 질문
- 직접 링크 →: k8s-pod-resources, k8s-pod-troubleshooting
- 키워드 백링크 →: k8s-pod-basics, k8s-deployment, dns
- 이 글로 오는 글 ←: k8s-deployment, k8s-namespace, k8s-pod-basics, k8s-pod-resources, k8s-pod-troubleshooting, k8s-pv-pvc

### Programming › Server/Infra › Kubernetes › Workloads (`programming/server-infra/kubernetes/workloads`)

#### `k8s-deployment` — Deployment와 롤링 업데이트: maxSurge, maxUnavailable, 되돌리기

- 요약: 배포 중 이름이 다른 Pod 두 무리가 섞이는 모습에서 출발해 리비전마다 ReplicaSet을 두는 이유, maxSurge와 maxUnavailable이 정하는 두 선, Recreate와 minReadySeconds, progressDeadlineSeconds, rollout undo·pause와 리비전 번호를 실제 이벤트로 따라간다.
- 태그: Kubernetes, DevOps, Troubleshooting
- 키워드: maxSurge, maxUnavailable, rollout undo, minReadySeconds
- 길이: 593줄
- 소제목: 이름 가운데가 다른 Pod 두 무리 / 템플릿이 바뀌어야 새 리비전이 생긴다 / maxSurge와 maxUnavailable이 정하는 두 줄 / 더 띄울 것인가, 잠깐 덜 쓸 것인가 / 한꺼번에 내리고 올리는 Recreate / Ready와 Available 사이, minReadySeconds / 끝나지 않는 배포와 progressDeadlineSeconds / 리비전 기록과 되돌리기 / 여러 군데를 고칠 때 pause와 resume / 배포 중에 replicas를 바꾸면 / 셀렉터는 바꿀 수 없다 / 배포가 이상할 때 보는 순서 / 숫자 두 개와 ReplicaSet 두 개 / 면접에서 나올 만한 질문
- 직접 링크 →: k8s-pod-basics, k8s-configmap, helm-chart-templates, k8s-pod-resources, k8s-pod-probes, k8s-pod-lifecycle, k8s-pod-scheduling, k8s-pod-troubleshooting, helm-release-lifecycle, k8s-hpa, gateway
- 키워드 백링크 →: k8s-deploy-pipeline-eks, canary-release, k8s-service-types, k8s-pv-pvc, kubernetes-ingress, service-mesh
- 이 글로 오는 글 ←: blue-green-deployment, canary-release, k8s-deploy-pipeline-eks, k8s-hpa, k8s-namespace, k8s-pod-probes, k8s-pod-scheduling, k8s-project-structure, k8s-pv-pvc, pattern-strategy, rollback-strategy, rolling-deployment

#### `k8s-hpa` — HPA: 공식 한 줄과 브레이크 셋

- 요약: TARGETS가 unknown으로 남는 HPA에서 출발해 desired = ceil(현재 × 현재값/목표) 공식과 10% 허용 오차, 줄일 때만 걸리는 5분 안정화 창, behavior 정책, requests가 없으면 계산이 안 되는 이유, 0개까지 줄이기의 현재 상태를 metrics-server가 붙은 실습 클러스터에서 재현한다.
- 태그: Kubernetes, DevOps, Performance, Scalability
- 키워드: HPA, Horizontal Pod Autoscaler, metrics-server, 안정화 창
- 길이: 450줄
- 소제목: 15초마다 재고 replicas를 고친다 / 메트릭이 오는 길 / 공식은 한 줄이다 / 부하를 올려 보면 / 줄일 때는 5분을 기다린다 / behavior로 속도를 정한다 / requests가 없으면 계산할 수 없다 / 갓 뜬 Pod와 준비 안 된 Pod는 어떻게 세나 / 메트릭 여러 개와 앱이 내는 메트릭 / 0개까지 줄일 수 있나 / 함께 쓰면 부딪히는 것들 / HPA가 안 움직일 때 보는 순서 / 공식 하나, 브레이크 셋 / 면접에서 나올 만한 질문
- 직접 링크 →: k8s-deployment, k8s-namespace, k8s-pod-resources, k8s-pod-multicontainer, eks-cluster-basics
- 키워드 백링크 →: k8s-pod-basics, cron-jobs, helm-basics, kafka-basics
- 이 글로 오는 글 ←: autoscaling, eks-cluster-basics, grpc, helm-release-lifecycle, k8s-deploy-pipeline-eks, k8s-deployment, k8s-project-structure

#### `k8s-namespace` — 네임스페이스: 이름을 나누는 칸과 그 위에 거는 정책

- 요약: 네임스페이스는 이름만 나누고 네트워크와 노드는 그대로 공유한다는 데서 출발해, 클러스터 단위 리소스, 다른 네임스페이스를 부르는 DNS 이름, RBAC·ResourceQuota·Pod Security를 네임스페이스에 거는 법, Terminating에서 멈춘 네임스페이스를 푸는 법을 실습 클러스터에서 따라간다.
- 태그: Kubernetes, DevOps, Security, Troubleshooting
- 키워드: 쿠버네티스 네임스페이스, Terminating 네임스페이스
- 길이: 587줄
- 소제목: 이름을 나누는 칸, 벽은 아니다 / 처음부터 있는 네 개 / 네임스페이스에 들어가는 것과 안 들어가는 것 / 이름을 지을 때 걸리는 규칙 / kubectl이 어느 칸을 보고 있나 / 다른 네임스페이스의 Service를 부르는 이름 / 네트워크는 기본으로 열려 있다 / 권한, 한도, 보안 수준은 네임스페이스에 건다 / 지웠는데 Terminating에서 멈출 때 / 네임스페이스를 어떻게 나누나 / 칸을 나누는 것과 벽을 세우는 것 / 면접에서 나올 만한 질문
- 직접 링크 →: k8s-pod-basics, k8s-secret, k8s-project-structure, k8s-coredns, k8s-network-policy, k8s-pod-resources, eks-cluster-basics, k8s-deployment
- 키워드 백링크 →: k8s-pv-pvc, k8s-pod-scheduling, terraform-modules-tfvars, kubernetes-ingress, iptables-nat, terraform-basics, k8s-service-types, k8s-configmap, helm-dependencies-oci-gitops, docker-container-basics, leader-election, k8s-cni-pod-network, helm-basics, db-type-key-value, dns, webhooks
- 이 글로 오는 글 ←: k8s-configmap, k8s-hpa, k8s-project-structure, k8s-secret

### Programming › Server/Infra › Nginx (`programming/server-infra/nginx`)

#### `nginx-basics` — Nginx 기본: 설정 파일을 읽는 법

- 요약: 설치했는데 기본 페이지나 403만 보이는 상황에서 출발해 master·worker 구조, Ubuntu의 sites-enabled 배치, server와 location이 골라지는 순서, root와 alias, try_files를 따라간다. nginx -t와 reload로 안전하게 바꾸고 로그로 원인을 찾는 법까지 정리한다.
- 태그: Nginx, Linux, HTTP, DevOps
- 키워드: nginx.conf, server_name, try_files, sites-enabled, location 블록
- 길이: 792줄
- 소제목: 설치하고 떠 있는지 확인하기 / master 하나와 worker 몇 개 / Ubuntu의 설정 파일 배치 / 블록은 안쪽으로 상속된다 / 요청 하나를 받을 server 고르기 / location은 이 순서로 고른다 / root와 alias는 경로를 다르게 만든다 / index와 try_files / 403이 나는 이유 / 바꾸기 전에 -t, 적용은 reload / 로그를 읽는 법 / 설정은 nginx가 읽는 순서대로 읽는다 / 면접에서 나올 만한 질문
- 직접 링크 →: nginx-reverse-proxy, nginx-https-performance
- 키워드 백링크 →: blue-green-deployment, linux-systemd-systemctl, realtime-communication, proxy-reverse-proxy, linux-processes-signals, event-loop, linux-files-permissions, http-status-codes, what-happens-google-com, ipv6-basics, db-modeling-normalization
- 이 글로 오는 글 ←: docker-network-volume, encryption-in-transit, https-tls, local-custom-domain, nginx-https-performance, nginx-reverse-proxy, rendering-csr-spa, what-happens-google-com

#### `nginx-https-performance` — Nginx HTTPS·성능·보안 설정

- 요약: certbot으로 인증서를 받아 자동 갱신하고 HTTPS 리다이렉트, TLS와 HTTP/2, HSTS를 붙인다. gzip과 정적 파일 캐시 헤더, proxy_cache, limit_req 속도 제한, 보안 헤더를 설정한 뒤 curl과 openssl로 바깥에서 확인한다.
- 태그: Nginx, HTTPS, TLS, Performance, Security
- 키워드: certbot, proxy_cache, limit_req, gzip_types
- 길이: 864줄
- 소제목: 인증서는 certbot에게 맡긴다 / HTTP는 HTTPS로 돌려보낸다 / TLS 버전과 암호, HTTP2 켜기 / 압축은 텍스트에만 / 정적 파일 캐시 헤더 / 업스트림 응답을 nginx에 저장하기 / 요청 수를 제한한다 / 보안 헤더와 숨길 것 / 바깥에서 확인하기 / HTTPS를 붙인 뒤에 걸려 오는 전화 / 앞단에서 한 번에 처리한다 / 면접에서 나올 만한 질문
- 직접 링크 →: nginx-reverse-proxy, https-tls, http-caching-cdn, nginx-basics, http-versions, iptables-basics, network-troubleshooting-by-layer
- 키워드 백링크 →: cookie-session-login, security-groups-nacl, what-happens-google-com, udp-and-quic, dns
- 이 글로 오는 글 ←: https-tls, nginx-basics, nginx-reverse-proxy, rate-limiting-algorithms, rate-limiting-in-practice

#### `nginx-reverse-proxy` — Nginx 리버스 프록시와 로드 밸런싱

- 요약: proxy_pass의 끝 슬래시 규칙, 앱에 넘겨야 할 Host·X-Forwarded-* 헤더, upstream과 로드 밸런싱 방식, 실패한 서버를 빼는 법과 keepalive를 설정으로 따라간다. 502와 504가 생기는 자리, WebSocket, 버퍼링, 413까지 로그와 함께 본다.
- 태그: Nginx, HTTP, Network, DevOps
- 키워드: proxy_pass, upstream 블록, least_conn, proxy_set_header
- 길이: 621줄
- 소제목: proxy_pass 한 줄로 넘기기 / 끝 슬래시 하나가 경로를 바꾼다 / 앱에게 진짜 손님 정보를 넘긴다 / upstream으로 서버 여럿에 나누기 / 502와 504가 나는 자리 / WebSocket은 연결을 바꿔 달라고 요청한다 / 버퍼링은 켜 두고, 흘려보낼 때만 끈다 / 업로드는 1MB에서 막힌다 / 앞에 서서 대신 받아 주는 자리 / 면접에서 나올 만한 질문
- 직접 링크 →: proxy-reverse-proxy, nginx-basics, load-balancing-algorithms, http-status-codes, realtime-communication, nginx-https-performance, gateway
- 키워드 백링크 →: retries, rolling-deployment, tcp-connection-lifecycle, browser-fetch, load-balancer-basics, consistent-hashing, race-conditions, osi-in-practice, redis-basics, resilience-patterns, what-happens-google-com, http-methods
- 이 글로 오는 글 ←: encryption-in-transit, html-form-http, http-methods, http-status-codes, http-versions, load-balancer-basics, load-balancing-algorithms, network-layers-overview, nginx-basics, nginx-https-performance, osi-in-practice, packet-capture-tcpdump, proxy-reverse-proxy, realtime-communication, rendering-ssr, rest-api-design, server-sent-events, streaming-ssr-suspense, timeouts

### Programming › Server/Infra › Observability (`programming/server-infra/observability`)

#### `distributed-tracing` — 분산 추적: 요청 하나를 서비스 셋에 걸쳐 따라가기

- 요약: Node.js 서비스 셋에 OpenTelemetry를 붙이고 Jaeger에 모인 trace에서 느린 구간을 찾아 고친다. traceparent 헤더로 문맥을 잇는 법, 전파가 조용히 끊기는 자리, 헤드와 꼬리 샘플링의 차이, 로그와 trace를 trace_id로 잇는 법까지 다룬다.
- 태그: Observability, Distributed Systems, MSA, Node.js, PostgreSQL, Performance
- 키워드: 분산 추적, traceparent, 꼬리 샘플링, W3C Trace Context
- 길이: 617줄
- 소제목: trace는 나무, span은 가지 하나 / traceparent 한 줄 뜯어보기 / 세 서비스에 OpenTelemetry 붙이기 / 폭포 그림에서 느린 칸 찾기 / 병렬로 바꿔도 느린 칸은 그대로였다 / 헤더가 한 번 끊기면 추적도 끊긴다 / 다 저장할 수 없어서 고른다 / 로그와 trace를 trace_id로 잇는다 / 추적을 들일 때 정할 것 / 다시 주문 버튼으로 / 면접에서 나올 만한 질문
- 직접 링크 →: observability-basics, structured-logging, db-index, event-driven-architecture, service-mesh, network-flow-logs, network-monitoring, timeouts
- 키워드 백링크 →: gateway, rabbitmq-basics, tcp-connection-lifecycle, event-loop, kafka-basics, http-status-codes
- 이 글로 오는 글 ←: db-architecture-by-scale, event-driven-architecture, feature-flags, microservices, n-plus-one-queries, network-flow-logs, observability-basics, saga-pattern, structured-logging

#### `metrics-types` — 지표 타입: 카운터, 게이지, 히스토그램, 서머리

- 요약: 같은 요청도 어떤 그릇에 담느냐에 따라 다른 숫자가 된다. rate와 increase가 카운터 리셋을 이어 붙이는 방식과 처음 나타난 시계열이 잃는 값, 히스토그램 칸 경계가 p90을 23% 틀리게 만든 측정, 서머리를 합칠 수 없는 이유, 평균이 숨기는 것, 레이블 하나로 scrape가 35배 커진 실험까지 다룬다.
- 태그: Observability, Performance, DevOps, Node.js
- 키워드: histogram_quantile, 카운터 리셋, 히스토그램 버킷, 서머리 지표
- 길이: 448줄
- 소제목: 그릇은 넷, 고르는 기준은 하나 / rate는 카운터를 어떻게 읽나 / 히스토그램은 칸으로 센다 / 서머리는 정확하지만 더할 수 없다 / 평균은 왜 거짓말을 하나 / 레이블 하나가 scrape를 서른 배로 / 처음 질문으로 돌아가면 / 면접에서 나올 만한 질문
- 직접 링크 →: monitoring-basics, observability-basics, db-type-time-series, network-monitoring, structured-logging
- 키워드 백링크 →: latency-bandwidth-throughput
- 이 글로 오는 글 ←: db-type-time-series, monitoring-basics, network-monitoring, observability-basics, structured-logging

#### `monitoring-basics` — 모니터링 기본: 무엇을 지켜보고 어떻게 모으나

- 요약: 네 가지 황금 신호, 서비스를 보는 RED와 자원을 보는 USE로 무엇을 잴지 정하고 Prometheus 쿼리로 직접 뽑는다. 프로세스가 멈췄을 때 앱 지표는 비고 바깥 탐침만 실패를 잡는 장면, Prometheus의 pull 방식과 Pushgateway, 질문 하나에 패널 하나인 대시보드 설계까지 다룬다.
- 태그: Observability, DevOps, Linux, Troubleshooting, Performance
- 키워드: 황금 신호, RED 방법, USE 방법, 블랙박스 모니터링
- 길이: 394줄
- 소제목: 사용자 쪽에서 보는 네 가지 숫자 / 요청을 받는 쪽은 RED로 / 자원은 USE로 / 안에서 세기와 밖에서 두드리기 / Prometheus는 가지러 간다 / 대시보드는 질문 하나에 패널 하나 / 모니터링을 들일 때 자주 하는 실수 / 다시 조용한 그래프 앞에서 / 면접에서 나올 만한 질문
- 직접 링크 →: observability-basics, metrics-types, structured-logging, network-monitoring
- 키워드 백링크 →: service-discovery, microservices, event-loop, sql-batch-timeout-pool, vpc-basics, dns
- 이 글로 오는 글 ←: metrics-types, observability-basics, structured-logging

#### `network-flow-logs` — 흐름 로그: 누가 누구와 이야기하는지 남기기

- 요약: 5-튜플로 패킷을 묶어 대화마다 한 줄을 남기는 흐름 레코드를 softflowd와 conntrack으로 직접 만들고, VPC 흐름 로그 한 줄을 필드별로 읽는다. NAT 뒤의 원래 출발지 찾기, 많이 통신하는 쌍과 스캔 찾기, 샘플링이 무엇을 잃는지와 비용 조절까지 다룬다.
- 태그: Observability, Network, AWS, Security, Linux, Troubleshooting
- 키워드: VPC 흐름 로그, 흐름 로그, NetFlow, 5-튜플
- 길이: 457줄
- 소제목: 패킷 대신 대화의 요약을 남긴다 / 리눅스에서 흐름 레코드 만들어 보기 / VPC 흐름 로그 한 줄 읽기 / NAT 게이트웨이 뒤에서는 주소가 바뀐다 / 누가 누구와 이야기하나 / 다 기록하면 비싸고, 덜 기록하면 놓친다 / 흐름 로그를 들고 현장에 갈 때 / 다시 보안 그룹 앞에서 / 면접에서 나올 만한 질문
- 직접 링크 →: security-groups-nacl, network-monitoring, iptables-basics, vpc-subnets-route-tables, k8s-cni-pod-network, ids-ips, zero-trust-architecture, packet-capture-tcpdump, distributed-tracing
- 키워드 백링크 →: vpc-basics, osi-in-practice, tcp-connection-lifecycle, k8s-service-types, db-type-key-value, eks-cluster-basics, ports-and-sockets, local-custom-domain, layer-ip-routing-icmp, udp-and-quic, dns
- 이 글로 오는 글 ←: distributed-tracing, eks-cluster-basics, ids-ips, k8s-cni-pod-network, network-monitoring, security-groups-nacl, terraform-network-iac, vpc-basics, vpc-peering-transit-privatelink, zero-trust-architecture

#### `network-monitoring` — 네트워크 모니터링: 바이트 그래프 뒤에서 무엇을 볼까

- 요약: 대역폭 그래프에 드러나지 않는 손실과 대기를 인터페이스·qdisc 카운터, 재전송 비율, accept 큐 넘침, conntrack, DNS 지연으로 직접 읽는다. node_exporter와 blackbox_exporter를 Prometheus로 모아 rate로 바꾸고 알림을 걸며, SNMP로 장비 카운터를 묻는 법까지 다룬다.
- 태그: Observability, Network, Linux, DevOps, Troubleshooting, TCP/IP
- 키워드: node_exporter, blackbox_exporter, ListenOverflows, SNMP, 재전송 비율
- 길이: 660줄
- 소제목: 바이트 그래프 뒤에 숨은 숫자들 / 인터페이스 카운터는 부팅 후 누적값이다 / 인터페이스가 0이어도 큐에서 버려진다 / 재전송은 잃어버린 패킷의 영수증 / accept 큐가 넘치면 SYN이 소리 없이 사라진다 / TIME_WAIT와 conntrack은 개수를 한도와 같이 본다 / DNS 지연은 요청 시간 속에 숨는다 / node_exporter는 안을, blackbox_exporter는 밖을 본다 / 누적값을 속도로 바꾸는 rate / 알림은 손실과 실패에 건다 / 스위치와 라우터는 SNMP로 묻는다 / 현장에서 그래프를 펼치는 순서 / 처음 장면을 다시 보면 / 면접에서 나올 만한 질문
- 직접 링크 →: observability-basics, metrics-types, network-troubleshooting-by-layer, traffic-shaping-qos, tcp-reliability-congestion, tcp-connection-lifecycle, connection-pool, iptables-basics, k8s-coredns, packet-capture-tcpdump, network-flow-logs, db-type-time-series
- 키워드 백링크 →: what-happens-google-com, local-custom-domain, event-loop, ports-and-sockets, http-status-codes, layer-ip-routing-icmp, udp-and-quic, dns
- 이 글로 오는 글 ←: clock-skew, distributed-tracing, metrics-types, monitoring-basics, network-flow-logs, udp-and-quic

#### `observability-basics` — 관측 가능성: 대시보드가 답하지 못하는 질문에 답하기

- 요약: 미리 정한 질문에 답하는 모니터링과 처음 보는 질문에 답하는 관측 가능성의 차이를, 쿠폰 주문만 느린 장면으로 따라간다. 지표·로그·trace가 각자 잘하는 일과 비용, exemplar와 trace_id로 셋을 잇는 법, 레이블로 둘 것과 필드로 둘 것, OpenTelemetry와 Collector가 맡는 역할까지 다룬다.
- 태그: Observability, DevOps, Distributed Systems, Node.js, Performance
- 키워드: 관측 가능성, OpenTelemetry, exemplar, OTel Collector
- 길이: 454줄
- 소제목: 아는 질문과 모르는 질문 / 세 가지 신호는 서로 다른 질문에 답한다 / 쿠폰 하나가 p99를 끌어올렸다 / 지표의 튄 점에서 trace와 로그로 건너가기 / 무엇이든 레이블로 만들 수는 없다 / OpenTelemetry는 계측과 저장소 사이의 약속 / 어디서부터 들일까 / "가끔 느리다"는 문의를 받았을 때 / 다시 쿠폰 문의 앞에서 / 면접에서 나올 만한 질문
- 직접 링크 →: monitoring-basics, metrics-types, structured-logging, distributed-tracing, db-type-time-series
- 키워드 백링크 →: http-status-codes, grpc
- 이 글로 오는 글 ←: distributed-tracing, feature-flags, metrics-types, microservices, monitoring-basics, network-monitoring, pattern-bridge, structured-logging

#### `structured-logging` — 구조화 로그: JSON 한 줄로 남기고 묻기

- 요약: 로그를 문장이 아니라 필드가 있는 JSON 한 줄로 남기고, pino로 레벨·trace_id·개인정보 가리기를 다룬다. redact를 해 뒀는데 URL로 이메일이 샌 사례, 오류는 지키고 나머지만 trace_id로 고르는 샘플링, 갑자기 죽을 때 사라지는 버퍼, jq와 Loki LogQL로 묻는 법까지 따라간다.
- 태그: Observability, Node.js, Security, DevOps, Troubleshooting
- 키워드: 구조화 로그, LogQL, pino, 로그 샘플링
- 길이: 468줄
- 소제목: 한 줄에 담을 것 / 레벨은 누가 깨어나야 하는지로 정한다 / 요청 하나에서 나온 줄을 모두 찾는다 / 개인정보는 남기기 전에 가린다 / 다 남길 수 없을 때 고르는 법 / 로그가 저장소까지 가는 길 / jq와 LogQL로 묻기 / 로그를 다듬을 때 자주 하는 실수 / 처음 그 줄을 다시 쓰면 / 면접에서 나올 만한 질문
- 직접 링크 →: observability-basics, distributed-tracing, monitoring-basics, metrics-types
- 키워드 백링크 →: elasticsearch-inverted-index, docker-container-basics, event-loop, linux-grep-awk-sed
- 이 글로 오는 글 ←: dead-letter-queue, distributed-tracing, metrics-types, monitoring-basics, observability-basics, pattern-adapter

### Programming › System Design (`programming/system-design`)

#### `autoscaling` — 오토스케일링: 언제, 무엇을 보고, 얼마나 빨리 늘리나

- 요약: 새 인스턴스가 요청을 받기까지의 반응 시간에서 출발해 반응형·예약형·예측형의 차이, CPU·요청 수·큐 깊이 중 무엇을 볼지, 쿨다운으로 플래핑을 막는 법을 시뮬레이션으로 비교한다. AWS Auto Scaling 그룹 정책과 쿠버네티스에서 Pod와 노드가 따로 늘어나는 구조도 정리한다.
- 태그: Scalability, System Design, DevOps, AWS, Cloud
- 키워드: 오토스케일링, 대상 추적 정책, 예측 스케일링, 웜 풀
- 길이: 351줄
- 소제목: 늘리는 데 걸리는 시간이 먼저다 / 반응형, 예약형, 예측형 / 스파이크와 늘어나는 속도의 경주 / 무엇을 보고 늘리나 / 줄일 때는 천천히 / AWS Auto Scaling 그룹에 걸어 보면 / 쿠버네티스에서는 두 층이 따로 늘어난다 / 0까지 줄이면 첫 요청이 기다린다 / 오토스케일링이 도와주지 못할 때 / 정책보다 반응 시간 / 면접에서 나올 만한 질문
- 직접 링크 →: scaling-horizontal-vertical, k8s-hpa, garbage-collection, db-replication-sharding, db-sharding, rate-limiting-in-practice, backpressure
- 키워드 백링크 →: k8s-pod-lifecycle, event-loop, vpc-basics, osi-in-practice, sql-batch-timeout-pool, message-queue-basics
- 이 글로 오는 글 ←: backpressure, blue-green-deployment, connection-pool, cron-jobs, eks-cluster-basics, feature-flags, message-queue-basics, rendering-ssg-isr, rolling-deployment, scaling-horizontal-vertical, service-discovery

#### `caching-strategies` — 캐시 전략: 언제 넣고 언제 지우나

- 요약: cache-aside부터 write-behind까지 캐시를 채우고 지우는 패턴을 비교하고, DB와 캐시 사이의 경쟁, 스탬피드, 관통, 눈사태, 핫 키를 막는 방법을 정리한다.
- 태그: Cache, Redis, System Design, Performance
- 키워드: cache-aside, write-through, write-behind, 캐시 관통, 핫 키
- 길이: 657줄
- 소제목: 캐시를 먼저 보고 없으면 DB에서: cache-aside / 캐시가 대신 읽어 오는 read-through / 쓰기는 어디로 먼저 보내나 / TTL은 얼마나 낡아도 되는지로 정한다 / 고칠 때 캐시를 지울까, 같이 고칠까 / 지웠는데 옛 값이 다시 들어가는 경우 / 만료 순간 같은 키로 몰리는 요청 / 키 하나에만 몰리는 트래픽 / 없는 데이터를 계속 물어볼 때 / 여러 키가 한꺼번에 만료될 때 / 로컬 캐시와 Redis를 겹쳐 쓰기 / LRU 캐시를 직접 짜 보기 / 캐시가 일하는지 숫자로 본다 / 고친 값이 안 바뀐다는 문의가 오면 / 캐시는 지우는 일까지가 설계다 / 면접에서 나올 만한 질문
- 직접 링크 →: redis-basics, resilience-patterns, http-caching-cdn, redis-persistence-ha, redis-memory-eviction, osi-in-practice
- 키워드 백링크 →: exponential-backoff-jitter, redis-cluster, bloom-filter, db-type-columnar-olap, db-replication-sharding, dns
- 이 글로 오는 글 ←: bloom-filter, consistent-hashing, db-architecture-by-scale, db-replication-sharding, db-type-key-value, db-type-relational, eventual-consistency, exponential-backoff-jitter, frontend-browser-cache, load-balancing-algorithms, n-plus-one-queries, pattern-flyweight, pattern-proxy, postgres-reporting-sql, redis-basics, redis-memory-eviction, scaling-horizontal-vertical

#### `circuit-breaker` — 서킷 브레이커 안쪽: 창, 느린 호출, 반열림, 그리고 재시도와의 순서

- 요약: 서킷 브레이커가 무엇을 세고 언제 판정하는지 직접 짠 상태 기계를 망가지는 서버 앞에 세워 따라간다. 건수 창과 시간 창, 느린 호출 비율, 반열림 시험 수, 의존성별 배치, 아웃라이어 감지·재시도와의 관계를 Resilience4j와 opossum 기본값과 함께 본다.
- 태그: Resilience, Distributed Systems, System Design, Node.js
- 키워드: 반열림, 느린 호출 비율, 아웃라이어 감지, 건수 기반 창
- 길이: 536줄
- 소제목: 세 상태와 두 개의 질문 / 몇 건 중의 실패율인가: 건수 창과 시간 창 / 실패보다 느림을 먼저 센다 / 반열림에서는 몇 개를 보내 보나 / 일부러 망가지는 서버 앞에 세워 보기 / 브레이커는 의존성마다 따로 둔다 / 헬스 체크, 아웃라이어 감지와 무엇이 다른가 / 재시도와 타임아웃 사이 어디에 끼우나 / 폴백은 무엇을 돌려주나 / 열린 회로를 현장에서 알아채는 법 / 상태 기계를 직접 짜 보기 / 숫자를 고르기 전에 트래픽부터 본다 / 면접에서 나올 만한 질문
- 직접 링크 →: resilience-patterns, load-balancer-basics, service-mesh, idempotency-key, connection-pool, rate-limiting-in-practice
- 키워드 백링크 →: retries, osi-in-practice, sql-batch-timeout-pool, redis-basics, dns
- 이 글로 오는 글 ←: connection-pool, pattern-proxy, pattern-state, resilience-patterns, service-mesh

#### `clock-skew` — 시계 어긋남: 벽시계, 단조 시계, 그리고 시계 없이 순서 정하기

- 요약: 발급 서버 시계가 40초 빠르면 방금 받은 JWT가 거절되고, 벽시계가 2초 되돌아가면 Date.now()로 잰 시간이 음수가 된다. NTP와 chrony의 스텝·슬루, 윤초와 번지기, 램포트 시계와 벡터 시계, HLC까지 직접 재현하며 어떤 시계를 언제 쓰는지 정리한다.
- 태그: System Design, Distributed Systems, Linux, Node.js, Authentication, Troubleshooting
- 키워드: 시계 어긋남, 단조 시계, 램포트 시계, 벡터 시계, 윤초
- 길이: 393줄
- 소제목: 서버마다 시계가 다르게 가는 이유 / chrony가 시계를 맞추는 두 가지 방법 / 시간을 잴 때는 단조 시계로 / 토큰이 일찍 죽고 늦게 산다 / 윤초와 번지기 / 시계 없이 순서를 정한다 / 시계가 의심될 때 보는 순서 / 시계는 순서를 증명하지 못한다 / 면접에서 나올 만한 질문
- 직접 링크 →: db-consistency-cap, distributed-lock, eventual-consistency, network-partitions, event-driven-architecture, crdt, db-type-newsql
- 키워드 백링크 →: network-monitoring, ipv6-basics, security-groups-nacl, redis-basics, udp-and-quic, dns, token-login
- 이 글로 오는 글 ←: crdt, eventual-consistency, webhooks

#### `consistent-hashing` — 일관된 해싱: 가상 노드, 점프 해시, 랑데부

- 요약: 서버를 늘릴 때 옮기는 키를 최소로 만드는 방법들을 직접 재서 비교한다. 가상 노드 수에 따른 편차, 점프 해시와 랑데부 해싱, Nginx의 hash consistent, 운영에서 링이 어긋나는 경우를 다룬다.
- 태그: System Design, Distributed Systems, Scalability, Cache, Algorithm, Nginx
- 키워드: 점프 해시, 랑데부 해싱, ketama
- 길이: 367줄
- 소제목: 나머지 연산이 키를 흩어 버린다 / 가상 노드는 몇 개를 찍나 / 복제본은 링을 따라 다음 서버에 둔다 / 링 말고 다른 방법들 / 로드 밸런서에서 같은 요청을 같은 서버로 / 해시가 고르게 나눠도 남는 문제 / 옮길 키를 최소로 / 면접에서 나올 만한 질문
- 직접 링크 →: db-sharding, load-balancing-algorithms, redis-cluster
- 키워드 백링크 →: rolling-deployment, osi-in-practice, db-type-wide-column, vpc-basics, redis-basics, caching-strategies
- 이 글로 오는 글 ←: kafka-basics, load-balancing-algorithms, nginx-reverse-proxy, scaling-horizontal-vertical

#### `db-architecture-by-scale` — 서비스 규모별 DB 설계: 한 대에서 여러 저장소까지

- 요약: 새 서비스는 PostgreSQL 한 대에서 시작해, 연결 수, CPU, p99, 복제 지연 같은 숫자가 보일 때 캐시와 복제본, 분석과 검색 저장소, 서비스별 DB로 넘어간다. 아웃박스, 무중단 스키마 변경, 권한 분리처럼 각 단계에서 필요한 실무 장치도 SQL로 함께 본다.
- 태그: Database, PostgreSQL, System Design, Architecture, Scalability
- 키워드: 폴리글랏 퍼시스턴스, database per service, expand/contract, SKIP LOCKED, PgBouncer
- 길이: 727줄
- 소제목: 처음엔 PostgreSQL 한 대면 된다 / 연결은 풀로 묶어서 쓴다 / 백업은 복원해 봐야 안다 / 읽기가 몰리면 캐시와 복제본 / 분석 쿼리는 다른 곳에서 돌린다 / 검색과 작업 큐도 따로 떼어 낸다 / 서비스마다 DB를 따로 둔다 / DB에 쓰고 이벤트를 보내는 사이 / 저장소는 접근 패턴으로 고른다 / 열 이름 하나를 다섯 단계로 바꾼다 / 앱 계정에는 필요한 권한만 준다 / 매일 볼 숫자들 / 단계를 넘어가는 신호 / 자주 보는 실수 / 규모보다 읽는 방식이 먼저다 / 면접에서 나올 만한 질문
- 직접 링크 →: db-replication-sharding, db-modeling-normalization, db-transaction-isolation, db-index, caching-strategies, redis-basics, elasticsearch-inverted-index, microservices, event-driven-architecture, mongodb-document-model, vector-db, zero-downtime-migrations
- 키워드 백링크 →: pessimistic-locking, db-type-time-series, postgres-advanced-sql, db-type-columnar-olap, postgres-mvcc-vacuum, db-migration-tools, db-sharding, db-type-wide-column, rabbitmq-basics, db-type-key-value, message-delivery-semantics, db-type-relational, db-type-graph, http-caching-cdn, distributed-tracing, kafka-basics, sql-batch-timeout-pool, postgres-operations, postgres-jsonb-search, db-partitioning, sql-basics
- 이 글로 오는 글 ←: batch-processing, connection-pool, db-migration-tools, db-replication-sharding, db-sharding, db-type-columnar-olap, db-type-relational, db-types-overview, event-driven-architecture, message-queue-basics, microservices, n-plus-one-queries, pessimistic-locking, postgres-architecture, postgres-connections-pg-hba, postgres-functions-triggers, postgres-operations, postgres-roles-security, saga-pattern, schema-versioning, sql-batch-timeout-pool, zero-downtime-migrations

#### `distributed-lock` — 분산 락: 만료되는 락과 펜싱 토큰

- 요약: 만료 시간이 있는 분산 락이 프로세스 멈춤과 장애 조치로 둘이 되는 장면을 재현하고, 펜싱 토큰으로 저장소가 늦은 쓰기를 거절하게 만든다. Redlock 논쟁과 etcd, ZooKeeper 락까지 비교한다.
- 태그: System Design, Distributed Systems, Redis, Concurrency, PostgreSQL
- 키워드: 펜싱 토큰, Redlock, 락 임대
- 길이: 382줄
- 소제목: 락을 쥔 줄 알았던 워커 / 락이 지키려는 것이 효율인가 정확성인가 / 만료 시간은 짧아도 길어도 문제다 / 늦게 온 쓰기를 저장소가 거절하게 / 장애 조치 한 번에 락이 사라진다 / 다수결로 잡는 Redlock과 그 논쟁 / 합의 시스템 위의 락 / 무엇으로 락을 잡을까 / 현장에서 중복 실행을 추적하는 법 / 락은 시간을 빌리는 것이다 / 면접에서 나올 만한 질문
- 직접 링크 →: redis-basics, idempotency-key, optimistic-locking, pessimistic-locking, leader-election
- 키워드 백링크 →: redis-cluster, browser-fetch, k8s-pod-resources, iptables-basics, db-locking-deadlock, resilience-patterns, db-type-key-value, http-methods, dns
- 이 글로 오는 글 ←: clock-skew, connection-pool, cron-jobs, idempotency-key, leader-election, network-partitions, pessimistic-locking, race-conditions, redis-basics, scaling-horizontal-vertical, service-discovery, terraform-basics

#### `distributed-transactions-2pc` — 분산 트랜잭션과 2단계 커밋: 준비하고 기다리는 대가

- 요약: DB가 두 대가 되면 커밋 두 번 사이에 틈이 생긴다. PostgreSQL 두 대로 PREPARE TRANSACTION과 COMMIT PREPARED를 직접 돌려 보고, 코디네이터가 결정 직전에 죽었을 때 잠금과 VACUUM이 묶이는 모습, 결정 기록과 추정 롤백으로 복구하는 법, XA와 3PC, 마이크로서비스가 2PC를 피하는 이유를 다룬다.
- 태그: System Design, Distributed Systems, Transaction, PostgreSQL, MSA
- 키워드: 2단계 커밋, PREPARE TRANSACTION, pg_prepared_xacts, 추정 롤백
- 길이: 516줄
- 소제목: 커밋 두 번 사이에 생기는 틈 / 먼저 묻고, 모두 된다고 하면 그때 커밋한다 / PostgreSQL 두 대로 직접 해 보기 / 한 곳이 아니라고 답하면 / 결정 직전에 코디네이터가 죽으면 / 결정을 먼저 적어 두는 코디네이터 / XA는 이 약속을 표준으로 만든 것 / 3PC가 블로킹을 풀지 못하는 이유 / 마이크로서비스가 2PC를 피하는 이유 / 준비된 채 버려진 트랜잭션을 만났을 때 / 2PC가 남기는 것 / 면접에서 나올 만한 질문
- 직접 링크 →: microservices, saga-pattern, db-type-newsql, raft-consensus, idempotency-key, leader-election
- 키워드 백링크 →: zero-downtime-migrations, network-partitions, kafka-basics, db-types-overview, postgres-getting-started
- 이 글로 오는 글 ←: db-locking-deadlock, db-sharding, db-type-newsql, leader-election, microservices, mongodb-document-model, postgres-mvcc-vacuum, saga-pattern

#### `event-driven-architecture` — 이벤트 기반 아키텍처: 명령과 이벤트, 이벤트에 담을 것, 아웃박스의 틈

- 요약: 명령과 이벤트를 가르고, 이벤트에 ID만 담을지 상태를 실을지, 이벤트 소싱은 언제 쓰는지, 흐름을 코레오그래피와 오케스트레이션 중 누가 쥘지 정한다. 아웃박스를 id 순서로 읽으면 늦게 커밋된 이벤트가 빠지는 문제와 WAL을 읽는 CDC, 슬롯이 디스크를 채우는 장면을 PostgreSQL 16으로 재현한다.
- 태그: Messaging, System Design, Distributed Systems, PostgreSQL, Architecture
- 키워드: 이벤트 기반 아키텍처, 이벤트 소싱, Event-Carried State Transfer, 논리 디코딩, 코레오그래피
- 길이: 608줄
- 소제목: 주문 API가 알림 서버를 기다리는 이유 / 명령은 부탁하고 이벤트는 알린다 / 이벤트 하나에 무엇을 담을까 / 상태 대신 사건을 저장하는 이벤트 소싱 / 흐름을 누가 쥐나 / 아웃박스를 id 순서로 읽으면 이벤트가 빠진다 / WAL에서 바로 읽는 아웃박스 / 잠깐 어긋나는 데이터를 받아 내는 법 / 이벤트가 어디서 사라졌는지 따라가기 / 이벤트로 가지 않는 편이 나을 때 / 처음의 주문 API로 돌아가면 / 면접에서 나올 만한 질문
- 직접 링크 →: microservices, db-architecture-by-scale, message-queue-basics, pub-sub, saga-pattern, optimistic-locking, db-replication-sharding, message-delivery-semantics, schema-versioning, kafka-basics, rabbitmq-basics, dead-letter-queue, distributed-tracing
- 키워드 백링크 →: api-versioning, postgres-architecture
- 이 글로 오는 글 ←: batch-processing, clock-skew, db-architecture-by-scale, db-locking-deadlock, distributed-tracing, kafka-basics, message-delivery-semantics, microservices, pattern-mediator, pub-sub, rabbitmq-basics, saga-pattern, schema-versioning

#### `eventual-consistency` — 최종 일관성과 세션 보장: 방금 바꾼 닉네임이 왜 다시 옛 이름으로 보이나

- 요약: PostgreSQL 16 복제본 하나를 일부러 3초 늦춰 놓고, 내 쓰기 읽기와 단조 읽기가 깨지는 장면을 재현한 뒤 커밋 뒤 LSN을 세션 토큰으로 들고 다녀 막는다. 리더 없는 저장소의 R·W와 옛 값 확률, 힌트 핸드오프, 읽기 복구, 안티 엔트로피까지 결국 같아지게 만드는 장치를 따라간다.
- 태그: System Design, Distributed Systems, Database, PostgreSQL, Node.js
- 키워드: 세션 보장, writes-follow-reads, 읽기 복구, 힌트 핸드오프, 안티 엔트로피
- 길이: 485줄
- 소제목: 언젠가는 얼마나 걸리나 / 복제본 하나를 일부러 3초 늦춰 보기 / 사용자 한 명이 기대하는 네 가지 / 세션에 위치를 들고 다니게 한다 / 여러 대가 쓰기를 받는 저장소에서는 / 결국 같아지게 만드는 장치 / 화면이 먼저 덜 헷갈리게 / 가끔 옛 값이 보인다는 문의가 오면 / 결국이 오기 전까지를 설계한다 / 면접에서 나올 만한 질문
- 직접 링크 →: db-consistency-cap, db-replication-sharding, network-partitions, clock-skew, merkle-tree, crdt, caching-strategies
- 키워드 백링크 →: cookie-session-login, db-type-wide-column, db-type-key-value, mongodb-document-model, sql-batch-timeout-pool, postgres-architecture, dns
- 이 글로 오는 글 ←: clock-skew, crdt, db-consistency-cap, merkle-tree, network-partitions, operational-transform

#### `exponential-backoff-jitter` — 지수 백오프와 지터: 같은 순간 실패한 클라이언트를 흩어 보내기

- 요약: 지터 없는 지수 백오프가 같은 순간 실패한 클라이언트들을 같은 박자로 되돌려 보내는 thundering herd를 클라이언트 1000개 시뮬레이션으로 재 보고, full, equal, decorrelated jitter를 비교한다. Retry-After를 따르는 법과 cron, 캐시 만료, 재시작처럼 같은 시각에 몰리는 다른 경우도 다룬다.
- 태그: Resilience, Distributed Systems, System Design, Algorithm
- 키워드: full jitter, equal jitter, decorrelated jitter, thundering herd
- 길이: 355줄
- 소제목: 두 배씩 늘리고 상한에서 멈춘다 / 같은 순간 실패하면 같은 순간 돌아온다 / 무작위를 섞는 세 가지 방법 / 클라이언트 천 개로 재 본다 / 서버가 기다릴 시간을 알려 줄 때: Retry-After / 재시도 말고도 같은 시각에 몰리는 것들 / 지터와 Retry-After를 함께 다루는 재시도 함수 / 값 고르기와 흔한 실수 / 빗살 모양 그래프를 만났을 때 / 면접에서 나올 만한 질문
- 직접 링크 →: resilience-patterns, retries, timeouts, rate-limiting-in-practice, caching-strategies
- 키워드 백링크 →: k8s-pod-lifecycle, client-data-cache, redis-basics, dns
- 이 글로 오는 글 ←: caching-strategies, dead-letter-queue, deadlocks, long-polling, message-queue-basics, resilience-patterns, retries, timeouts, webhooks, websocket-deep-dive

#### `leader-election` — 리더 선출: 임대, 스플릿 브레인, 쿠버네티스 Lease

- 요약: 여러 대 중 한 대만 일하게 하는 리더 선출을 etcd의 임대와 쿠버네티스 Lease로 직접 돌려 본다. 멈췄던 옛 리더가 깨어나 새 리더와 함께 쓰는 스플릿 브레인을 재현하고, 조건부 쓰기와 펜싱으로 막는 법, Raft 임기와 과반, 타이밍 값 고르기, 불리·링 알고리즘의 한계를 다룬다.
- 태그: System Design, Distributed Systems, Kubernetes, Concurrency, Resilience
- 키워드: 리더 선출, 스플릿 브레인, Lease 객체, etcdctl elect
- 길이: 476줄
- 소제목: 리더가 하나여야 하는 일 / 임대를 쥔 쪽이 리더다 / 잠깐 멈춘 리더가 깨어나면 / 리더 자격을 쓰기와 함께 검사한다 / etcd 자신은 어떻게 리더를 뽑나 / 쿠버네티스에서는 Lease 객체로 / 세 숫자 사이의 관계 / 합의 저장소 없이 뽑는 고전적인 방법 / 리더가 자꾸 바뀌거나 아예 없을 때 / 리더는 시간을 빌린 사람이다 / 면접에서 나올 만한 질문
- 직접 링크 →: distributed-lock, raft-consensus, distributed-transactions-2pc
- 키워드 백링크 →: browser-fetch, network-partitions, rolling-deployment, kafka-basics, db-type-key-value, dns
- 이 글로 오는 글 ←: cron-jobs, db-consistency-cap, db-type-key-value, distributed-lock, distributed-transactions-2pc, k8s-namespace, network-partitions, pattern-singleton, raft-consensus, redis-replication-sentinel, scaling-horizontal-vertical

#### `microservices` — 모놀리스에서 마이크로서비스로

- 요약: 서비스를 쪼개면 독립 배포와 팀 자율성을 얻는 대신 네트워크 호출, 분산 트랜잭션, 데이터 소유권 문제가 생긴다. 바운디드 컨텍스트로 경계를 긋는 법, 동기와 비동기 통신, 사가와 아웃박스, 모듈러 모놀리스와 스트랭글러 피그 이전까지 다룬다.
- 태그: coupang, MSA, Distributed Systems, System Design · 회사: coupang
- 키워드: 마이크로서비스, 모놀리스, 사가 패턴, 트랜잭셔널 아웃박스, 스트랭글러 피그
- 길이: 388줄
- 소제목: 한 덩어리가 버거워지는 순간 / 쪼개면 공짜가 아닌 것들 / 어디서 자를 것인가 / 데이터베이스도 서비스마다 / 부를 것인가, 알릴 것인가 / 트랜잭션이 서비스 경계를 넘을 때 / 결국에는 맞춰지는 데이터 / 입구는 게이트웨이와 BFF에 맡긴다 / 쪼개지 않는 편이 나은 경우 / 조금씩 옮기기, 스트랭글러 피그 / 쪼갠 뒤 처음 받는 장애 문의 / 쪼개는 건 결국 경계를 정하는 일 / 면접에서 나올 만한 질문
- 직접 링크 →: resilience-patterns, distributed-tracing, distributed-transactions-2pc, saga-pattern, gateway
- 키워드 백링크 →: db-architecture-by-scale, grpc, observability-basics, db-type-columnar-olap, rabbitmq-basics, client-data-cache, event-driven-architecture, pub-sub, db-index-design, http-versions, js-memory-leak, kafka-basics, http-methods
- 이 글로 오는 글 ←: db-architecture-by-scale, db-locking-deadlock, db-sharding, distributed-transactions-2pc, event-driven-architecture, message-queue-basics, micro-frontends, monitoring-basics, pattern-command, pattern-facade, rest-api-design, saga-pattern

#### `network-partitions` — 네트워크 분할: 끊긴 회선이 두 프라이머리를 만드는 과정

- 요약: 네트워크 네임스페이스와 iptables DROP으로 분할을 직접 만들고, PostgreSQL 16 두 대 위에서 순진한 장애 조치 스크립트가 스플릿 브레인을 만들고 pg_rewind로 쓰기를 잃는 과정을 재현한다. 죽음과 끊김을 구별할 수 없는 이유, 과반 쿼럼, 홀수 노드, 임대와 펜싱, 동기 복제의 한계, Jepsen이 남긴 교훈을 다룬다.
- 태그: System Design, Distributed Systems, Network, PostgreSQL, Linux, Troubleshooting
- 키워드: 네트워크 분할, 부분 분할, pg_rewind, 과반 쿼럼
- 길이: 508줄
- 소제목: 끊긴 회선은 어떻게 생겼나 / 응답이 없다는 것만 안다 / 세 번 실패하면 승격하는 스크립트 / 과반만 쓸 수 있게 한다 / 과반이 뽑아도 옛 리더는 계속 쓴다 / 분할 실험이 남긴 교훈 / 현장에서 분할을 의심하는 순간 / 끊겼다는 판단을 믿지 않는 설계 / 면접에서 나올 만한 질문
- 직접 링크 →: db-consistency-cap, eventual-consistency, leader-election, distributed-lock, iptables-basics, timeouts, raft-consensus, db-replication-sharding
- 키워드 백링크 →: sql-batch-timeout-pool, elasticsearch-inverted-index, db-type-wide-column, browser-fetch, mongodb-document-model, security-groups-nacl, postgres-architecture, redis-basics, db-type-key-value, postgres-getting-started, dns
- 이 글로 오는 글 ←: clock-skew, crdt, db-consistency-cap, distributed-transactions-2pc, eventual-consistency, leader-election, scaling-horizontal-vertical

#### `rate-limiting-algorithms` — 요청 수 제한 알고리즘: 고정 윈도부터 토큰 버킷까지

- 요약: 같은 요청 기록을 고정 윈도, 슬라이딩 로그, 슬라이딩 윈도 카운터, 토큰 버킷, 리키 버킷에 흘려 보며 무엇이 통과하고 왜 다른지 비교한다. 서버가 여러 대일 때 Redis Lua로 원자적으로 세는 방법도 직접 돌려 본다.
- 태그: System Design, Redis, Distributed Systems, Algorithm, API
- 키워드: 슬라이딩 윈도 카운터, 슬라이딩 로그, 고정 윈도, GCRA
- 길이: 417줄
- 소제목: 한도를 거는 이유부터 / 같은 요청 열다섯 개를 다섯 방식에 흘려 본다 / 창을 고정하면 경계에서 두 배가 샌다 / 요청 시각을 다 적어 두는 슬라이딩 로그 / 두 칸을 섞어 어림하는 슬라이딩 윈도 카운터 / 토큰 버킷은 몰림을 얼마나 봐줄지 정한다 / 새는 양동이는 내보내는 속도를 고르게 만든다 / 다섯 가지를 놓고 고르기 / 서버가 여러 대면 세는 일이 경쟁이 된다 / 직접 짜 보는 토큰 버킷 / 숫자를 고를 때 자주 하는 실수 / 다섯 가지는 결국 두 질문이다 / 면접에서 나올 만한 질문
- 직접 링크 →: rate-limiting-in-practice, resilience-patterns, nginx-https-performance, traffic-shaping-qos
- 키워드 백링크 →: redis-cluster, backpressure, redis-basics
- 이 글로 오는 글 ←: count-min-sketch, rate-limiting-in-practice, rest-api-design, traffic-shaping-qos

#### `resilience-patterns` — 장애가 번지지 않게: 타임아웃, 재시도, 서킷 브레이커

- 요약: 느린 의존성 하나가 스레드 풀을 바닥내며 번지는 연쇄 장애를 따라가고, 타임아웃과 데드라인 전파, 지터 섞인 백오프와 재시도 예산, 멱등성 키, 서킷 브레이커, 벌크헤드, 폴백, 부하 차단으로 막는 법을 정리한다. 프런트엔드의 AbortSignal 타임아웃과 기능 축소 화면도 다룬다.
- 태그: coupang, Resilience, Distributed Systems, System Design · 회사: coupang
- 키워드: 서킷 브레이커, 지수 백오프, 멱등성 키, 벌크헤드, 연쇄 장애
- 길이: 414줄
- 소제목: 느린 서비스 하나가 전부를 멈추는 과정 / 기다림에 끝을 정한다: 타임아웃 / 다시 보내기: 지수 백오프와 지터 / 두 번 보내도 한 번만 처리되게 / 회로를 끊어 두는 서킷 브레이커 / 칸막이로 피해를 가두기 / 안 되면 덜 보여 주기 / 들어오는 양 자체를 줄이기 / 프런트엔드에서 본 장애 대응 / 실패를 예상하고 짜는 코드 / 면접에서 나올 만한 질문
- 직접 링크 →: timeouts, retries, exponential-backoff-jitter, idempotency-key, circuit-breaker, gateway
- 키워드 백링크 →: client-data-cache, service-mesh, latency-bandwidth-throughput, backpressure, osi-in-practice, sql-batch-timeout-pool, grpc, http-methods
- 이 글로 오는 글 ←: batch-processing, browser-fetch, caching-strategies, circuit-breaker, dead-letter-queue, design-patterns-overview, distributed-lock, exponential-backoff-jitter, gateway, html-form-http, http-methods, http-status-codes, https-tls, idempotency-key, json-crud-http, k8s-pod-probes, message-delivery-semantics, message-queue-basics, microservices, nginx-reverse-proxy, optimistic-locking, osi-in-practice, pattern-builder, pattern-decorator, pattern-proxy, race-conditions, rate-limiting-algorithms, rate-limiting-in-practice, realtime-communication, rest-api-design, retries, service-mesh, timeouts, webhooks

#### `retries` — 재시도는 공짜가 아니다: 무엇을, 몇 번, 어디서 다시 보내나

- 요약: 다시 보내도 되는 실패와 안 되는 실패를 가르고, 계층마다 세 번씩 재시도하면 맨 아래가 27번 맞는 증폭을 직접 잰다. 재시도 예산, nginx proxy_next_upstream이 POST를 넘기지 않는 이유, 꼬리 지연을 자르는 요청 헤징까지 다룬다.
- 태그: Resilience, Distributed Systems, System Design, HTTP, Nginx
- 키워드: 재시도 증폭, 재시도 예산, 요청 헤징, proxy_next_upstream
- 길이: 368줄
- 소제목: 실패했다는 말에는 세 가지 뜻이 있다 / 다시 보내도 되는 실패 고르기 / 타임아웃 난 POST를 다시 보내면 / 계층마다 세 번이면 맨 아래는 스물일곱 번 / 재시도 예산으로 폭주를 막는다 / 프록시가 대신 다시 보낼 때 / 느린 요청 하나를 두 번 보내는 헤징 / 재시도 설정을 한 줄씩 읽기 / 재시도가 장애를 키우고 있다는 신호 / 면접에서 나올 만한 질문
- 직접 링크 →: resilience-patterns, timeouts, exponential-backoff-jitter, http-methods, idempotency-key
- 키워드 백링크 →: service-mesh, backpressure, grpc
- 이 글로 오는 글 ←: backpressure, circuit-breaker, dead-letter-queue, exponential-backoff-jitter, grpc, nginx-reverse-proxy, pattern-decorator, pattern-proxy, resilience-patterns, rolling-deployment, service-mesh, timeouts, webhooks

#### `saga-pattern` — 사가 패턴 안쪽: 보상, 피벗, 재시작, 그리고 아웃박스

- 요약: 사가는 단계마다 로컬 트랜잭션을 커밋하고 실패하면 반대 작업으로 상쇄한다. DB 세 개를 서비스 셋으로 두고 Node로 짠 오케스트레이터를 보상 도중에 죽여 보며 멱등한 보상, 피벗 단계 배치, 코레오그래피와의 차이, 의미상 잠금, 아웃박스 릴레이의 중복까지 따라간다.
- 태그: System Design, Distributed Systems, MSA, Transaction, PostgreSQL, Node.js
- 키워드: 보상 트랜잭션, 피벗 단계, 의미상 잠금
- 길이: 437줄
- 소제목: 되돌리지 않고 반대로 한다 / 단계는 세 종류로 나뉜다 / 지휘하는 쪽이 순서를 쥐는 오케스트레이션 / 보상 도중에 오케스트레이터가 죽으면 / 지휘자 없이 이벤트로 잇는 코레오그래피 / 중간 상태가 남에게 보인다 / 상태를 바꾸고 알리는 일을 한 번에: 아웃박스 / 워크플로 엔진에 맡길 때 / 사가가 꼬였을 때 현장에서 보는 것 / 사가가 약속하는 것과 하지 않는 것 / 면접에서 나올 만한 질문
- 직접 링크 →: microservices, distributed-transactions-2pc, event-driven-architecture, optimistic-locking, message-delivery-semantics, idempotency-key
- 키워드 백링크 →: postgres-advanced-sql, db-architecture-by-scale, db-type-columnar-olap, db-locking-deadlock, distributed-tracing, kafka-basics, db-transaction-isolation, db-replication-sharding, dead-letter-queue
- 이 글로 오는 글 ←: db-locking-deadlock, distributed-transactions-2pc, event-driven-architecture, microservices, pattern-command, pattern-mediator

#### `scaling-horizontal-vertical` — 수평 확장과 수직 확장: 더 큰 서버냐, 더 많은 서버냐

- 요약: 서버를 키워도 앱이 늘어난 코어를 못 쓰는 경우와, 서버를 늘리면 메모리 세션 때문에 로그인이 풀리는 경우를 직접 재현한다. 늘린 만큼 빨라지지 않는 이유를 암달의 법칙과 보편 확장성 법칙으로 계산하고, 언제 무엇을 고를지 정리한다.
- 태그: Scalability, System Design, Architecture, Performance, Session
- 키워드: 수평 확장, 수직 확장, 암달의 법칙, 보편 확장성 법칙
- 길이: 351줄
- 소제목: 키우기와 늘리기 / 키워도 쓰지 못하는 자원 / 늘리려면 상태를 밖으로 빼야 한다 / 늘린 만큼 빨라지지 않는다: 암달의 법칙 / 맞추는 비용까지 세면: 보편 확장성 법칙 / 층마다 늘리기 쉬운 정도가 다르다 / 언제 무엇을 고르나 / 더 큰 서버의 끝, 더 많은 서버의 조건 / 면접에서 나올 만한 질문
- 직접 링크 →: autoscaling, db-replication-sharding, db-sharding, garbage-collection, cookie-session-login, caching-strategies, distributed-lock, leader-election, load-balancer-basics, consistent-hashing
- 키워드 백링크 →: linux-processes-signals, network-partitions, sql-batch-timeout-pool, redis-basics, dns
- 이 글로 오는 글 ←: autoscaling, db-replication-sharding, db-sharding, db-type-newsql, db-type-relational, db-types-overview

#### `schema-versioning` — 스키마 버전 관리: Avro, 스키마 레지스트리, 옛 이벤트 읽기

- 요약: 로그에 남는 이벤트는 코드보다 오래 산다. Avro가 쓴 쪽과 읽는 쪽 스키마를 맞춰 읽는 방식, 스키마 레지스트리와 호환성 규칙, TRANSITIVE가 필요한 이유, protobuf와 JSON Schema에서 조용히 깨지는 변경, 옛 이벤트를 올리는 업캐스터를 직접 돌려 본다.
- 태그: System Design, Messaging, Architecture, Distributed Systems, API
- 키워드: 스키마 레지스트리, Avro, 업캐스터, BACKWARD_TRANSITIVE
- 길이: 361줄
- 소제목: 석 달 전 이벤트를 다시 읽는 날 / Avro는 스키마 없이는 한 바이트도 못 읽는다 / 메시지에는 스키마 번호만 붙는다 / 레지스트리가 거절하는 변경 / 최신 버전 하나와만 비교하면 놓치는 것 / 배포 순서가 규칙을 정한다 / Protobuf와 JSON Schema에서 조용히 깨지는 것 / 이미 저장된 이벤트는 읽을 때 올린다 / 현장에서 스키마 문제를 만나는 순간 / 데이터가 코드보다 오래 산다 / 면접에서 나올 만한 질문
- 직접 링크 →: api-versioning, grpc, kafka-basics, event-driven-architecture, db-migration-tools, zero-downtime-migrations, message-delivery-semantics
- 키워드 백링크 →: db-architecture-by-scale, rest-api-design, dead-letter-queue
- 이 글로 오는 글 ←: api-versioning, db-migration-tools, event-driven-architecture

#### `service-discovery` — 서비스 디스커버리: 목록은 누가 쓰고, 어디서 낡아지나

- 요약: 클라이언트 측과 서버 측 디스커버리, 임대와 헬스 체크로 하는 등록을 etcd와 Consul로 돌려 본다. 레지스트리는 바뀌었는데 JVM DNS 캐시와 연결 풀 때문에 옛 주소로 가는 이유도 짚는다.
- 태그: System Design, Distributed Systems, DNS, Kubernetes, Network
- 키워드: 서비스 디스커버리, 서비스 레지스트리, 클라이언트 측 디스커버리, networkaddress.cache.ttl
- 길이: 392줄
- 소제목: 목록을 누가 들고 있나 / 등록은 누가 하나 / 살아 있는 동안만 남는 등록 / 살아 있다는 것과 일할 수 있다는 것 / DNS로 찾으면 캐시가 끼어든다 / 목록에서 고르는 규칙 짜 보기 / 목록이 틀렸을 때 생기는 증상 / 어떤 방식을 고를까 / 면접에서 나올 만한 질문
- 직접 링크 →: k8s-service-types, k8s-coredns, dns, service-mesh, distributed-lock, k8s-pod-lifecycle, load-balancer-basics
- 키워드 백링크 →: iptables-nat, browser-fetch, iptables-basics, hosts-file, autoscaling, osi-in-practice, sql-batch-timeout-pool, grpc, db-type-key-value, redis-basics, udp-and-quic
- 이 글로 오는 글 ←: monitoring-basics, service-mesh

#### `timeouts` — 타임아웃은 계층마다 따로 있다: connect부터 데드라인까지

- 요약: 요청 하나가 지나는 DNS, 연결, TLS, 첫 바이트, 본문 구간과 LB·nginx·앱·풀·DB마다 걸린 타임아웃을 직접 재 본다. 유휴 한도와 전체 한도의 차이, 바깥이 포기해도 안쪽이 계속 일하는 문제, 데드라인 전파로 모든 계층을 같은 시각에 정리하는 법을 다룬다.
- 태그: Resilience, Distributed Systems, System Design, Network, Nginx, PostgreSQL
- 키워드: 데드라인 전파, connect 타임아웃, client_connection_check_interval
- 길이: 610줄
- 소제목: 요청 하나에 기다림이 여섯 번 있다 / 연결이 안 될 때는 커널이 2분 넘게 기다린다 / 읽기 타임아웃은 전체 시간이 아니다 / 계층마다 걸려 있는 한도 / 앞에서 포기해도 뒤에서는 계속 일한다 / 바깥이 안쪽보다 길어야 한다 / 남은 시간을 넘겨주는 데드라인 전파 / keep-alive 유휴 시간이 어긋나면 생기는 502 / 값을 고르는 순서 / 504와 끝나지 않는 요청을 만났을 때 / 면접에서 나올 만한 질문
- 직접 링크 →: resilience-patterns, retries, exponential-backoff-jitter, nginx-reverse-proxy, sql-batch-timeout-pool
- 키워드 백링크 →: browser-fetch, packet-capture-tcpdump, deadlocks, what-happens-google-com, grpc, postgres-getting-started, dns
- 이 글로 오는 글 ←: deadlocks, distributed-tracing, exponential-backoff-jitter, grpc, long-polling, network-partitions, osi-in-practice, pattern-decorator, pattern-proxy, resilience-patterns, retries, tcp-connection-lifecycle, webhooks, websocket-deep-dive

### Programming › UI/UX (`programming/ui-ux`)

#### `loading-patterns` — 로딩 패턴: 기다리는 화면을 고르는 법

- 요약: 스피너, 스켈레톤, 프로그레스 바, 낙관적 UI, 무한 스크롤까지 로딩 패턴 열두 가지를 기다리는 시간, 진행률을 아는지, 모양을 아는지, 누가 시작했는지에 따라 고른다. 스피너 깜빡임, 가짜 진행률, 접근성 같은 실수도 짚는다.
- 태그: UX, Frontend, Performance, React, Accessibility
- 키워드: 스켈레톤 UI, 무한 스크롤, 지연 로딩, Optimistic UI
- 길이: 412줄
- 소제목: 기다리는 시간이 표시를 정한다 / 얼마나 남았는지 아는가 / 무엇이 올지 모양을 아는가 / 스피너가 깜빡이면 더 느려 보인다 / 버튼을 누른 사람에게 먼저 답한다 / 내용이 조각으로 도착할 때 / 손가락으로 당겨서 새로고침 / 모든 로딩 표시에 같이 챙길 것 / 이름을 알면 부탁이 짧아진다 / 면접에서 나올 만한 질문
- 직접 링크 →: core-web-vitals, streaming-ssr-suspense, rendering-strategies, client-data-cache, realtime-communication, rest-api-design, code-splitting
- 키워드 백링크 →: pattern-proxy
- 이 글로 오는 글 ←: client-data-cache, core-web-vitals, design-patterns-overview, elasticsearch-inverted-index, frontend-browser-cache, http-caching-cdn, json-crud-http, mvc-pattern, n-plus-one-queries, pattern-proxy, react-server-components, rest-api-design, server-sent-events, sql-query-rewrite

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
- --max-old-space-size → `garbage-collection`
- --reuse-values → `helm-values-secrets`
- .gitignore → `git-ignore-config`
- @Version → `optimistic-locking`
- /etc/hosts → `hosts-file`
- 2단계 커밋 → `distributed-transactions-2pc`
- 3-way 병합 → `git-branch-merge`
- 3-way handshake → `what-happens-google-com`
- 308 Permanent Redirect → `http-status-codes`
- 3값 논리 → `sql-select-where-null`
- 3단계 스키마 → `sqld-data-modeling`
- 415 Unsupported Media Type → `json-crud-http`
- 429 Too Many Requests → `rate-limiting-in-practice`
- 5-튜플 → `network-flow-logs`
- 5-tuple → `ports-and-sockets`
- 802.1Q → `vlan-basics`
- 가비지 컬렉션 → `js-memory-leak`
- 가상 패치 → `waf`
- 가시성 타임아웃 → `message-queue-basics`
- 가용 영역 → `vpc-basics`
- 가중 라운드 로빈 → `load-balancing-algorithms`
- 감는 수 → `ray-casting`
- 같은 출처 정책 → `cors`
- 개념적 모델링 → `sqld-data-modeling`
- 갱신 손실 → `db-transaction-isolation`
- 거짓 양성 → `bloom-filter`
- 건수 기반 창 → `circuit-breaker`
- 게이트웨이 엔드포인트 → `vpc-subnets-route-tables`
- 격리 수준 → `db-transaction-isolation`
- 경쟁 상태 → `race-conditions`
- 경쟁하는 컨슈머 → `message-queue-basics`
- 계층형 쿼리 → `sqld-top-n-hierarchical-pivot`
- 고아 프로세스 → `linux-processes-signals`
- 고정 윈도 → `rate-limiting-algorithms`
- 고차 컴포넌트 → `pattern-decorator`
- 공간 복잡도 → `big-o-notation`
- 과반 쿼럼 → `network-partitions`
- 관계형 DB → `db-type-relational`
- 관측 가능성 → `observability-basics`
- 교차 엔터티 → `sqld-entity-attribute-relationship`
- 교착 상태 → `db-locking-deadlock`
- 구조화 로그 → `structured-logging`
- 굴리는 체크섬 → `rsync-algorithm`
- 권한 있는 네임서버 → `dns`
- 그래프 DB → `db-type-graph`
- 기본 거부 정책 → `k8s-network-policy`
- 깊은 복사 → `pattern-prototype`
- 깨는 변경 → `api-versioning`
- 꼬리 샘플링 → `distributed-tracing`
- 낙관적 업데이트 → `client-data-cache`
- 낙관적 잠금 → `db-locking-deadlock`
- 내부 CA → `encryption-in-transit`
- 내용 주소 지정 → `git-internals-basics`
- 네이티브 사이드카 → `k8s-pod-multicontainer`
- 네이티브 VLAN → `vlan-basics`
- 네트워크 분할 → `network-partitions`
- 네트워크 ACL → `security-groups-nacl`
- 논리 디코딩 → `event-driven-architecture`
- 논리적 실행 순서 → `sqld-group-by-having`
- 느린 호출 비율 → `circuit-breaker`
- 능동 헬스 체크 → `load-balancer-basics`
- 다운샘플링 → `db-type-time-series`
- 단방향 데이터 흐름 → `mvc-pattern`
- 단일 테이블 설계 → `db-type-key-value`
- 단일행 함수 → `sqld-single-row-functions`
- 단조 시계 → `clock-skew`
- 단편화 → `layer-mtu-fragmentation`
- 대리 키 → `db-keys-denormalization`
- 대상 추적 정책 → `autoscaling`
- 대역폭 지연 곱 → `tcp-reliability-congestion`
- 더블 디스패치 → `pattern-visitor`
- 데드 레터 익스체인지 → `rabbitmq-basics`
- 데드 레터 큐 → `dead-letter-queue`
- 데드라인 전파 → `timeouts`
- 데이터 경합 → `thread-safety`
- 데이터 독립성 → `sqld-data-modeling`
- 데이터 모델 비교 → `db-types-overview`
- 데코레이터 패턴 → `pattern-decorator`
- 델타 전송 → `rsync-algorithm`
- 도메인 샤딩 → `http-versions`
- 독이 든 메시지 → `dead-letter-queue`
- 동적 렌더링 → `nextjs-static-dynamic-rendering`
- 동적 import → `code-splitting`
- 동점 처리 열 → `api-pagination-sorting`
- 되돌리기 스택 → `pattern-command`
- 디자인 패턴 → `design-patterns-overview`
- 라우팅 테이블 → `layer-ip-routing-icmp`
- 라이브락 → `deadlocks`
- 락 순서 → `deadlocks`
- 락 임대 → `distributed-lock`
- 랑데부 해싱 → `consistent-hashing`
- 램포트 시계 → `clock-skew`
- 레이 캐스팅 → `ray-casting`
- 레이아웃 스래싱 → `core-web-vitals`
- 레이캐스터 → `ray-casting`
- 렌더링 파이프라인 → `what-happens-google-com`
- 로그 복제 → `raft-consensus`
- 로그 샘플링 → `structured-logging`
- 로그 컴팩션 → `kafka-basics`
- 로컬 도메인 → `local-custom-domain`
- 롤 포워드 → `rollback-strategy`
- 롤링 배포 → `rolling-deployment`
- 롱 폴링 → `realtime-communication`
- 롱 폴링 커서 → `long-polling`
- 리더 선출 → `leader-election`
- 리렌더링 → `react-rerender`
- 리밸런싱 → `kafka-basics`
- 리버스 프록시 → `proxy-reverse-proxy`
- 리틀의 법칙 → `latency-bandwidth-throughput`
- 리프레시 토큰 → `token-login`
- 릴리스 리비전 → `helm-basics`
- 링크 로컬 주소 → `ipv6-basics`
- 마이그레이션 도구 → `db-migration-tools`
- 마이크로 프런트엔드 → `micro-frontends`
- 마이크로 프론트엔드 → `micro-frontends`
- 마이크로서비스 → `microservices`
- 마이크로세그멘테이션 → `zero-trust-architecture`
- 마이크로태스크 → `event-loop`
- 머클 트리 → `merkle-tree`
- 머티리얼라이즈드 뷰 → `postgres-reporting-sql`
- 멀티 스테이지 빌드 → `dockerfile-image-layers`
- 멀티 존 → `micro-frontends`
- 멀티 컨테이너 Pod → `k8s-pod-basics`
- 멀티플렉싱 → `http-versions`
- 메멘토 패턴 → `pattern-memento`
- 메모리 가시성 → `thread-safety`
- 메모리 누수 → `js-memory-leak`
- 메모리 단편화 → `redis-memory-eviction`
- 멱등 프로듀서 → `message-delivery-semantics`
- 멱등성 → `http-methods`
- 멱등성 키 → `resilience-patterns`
- 멱등성 키 저장소 → `idempotency-key`
- 모놀리스 → `microservices`
- 무중단 스키마 변경 → `zero-downtime-migrations`
- 무한 스크롤 → `loading-patterns`
- 문자 인코딩 → `upper-layers-session-presentation-app`
- 문자열 인터닝 → `pattern-flyweight`
- 미들웨어 체인 → `pattern-chain-of-responsibility`
- 반열림 → `circuit-breaker`
- 반정규화 → `db-keys-denormalization`
- 배관 명령 → `pattern-facade`
- 배럴 파일 → `code-splitting`
- 배제 제약 → `postgres-data-types`
- 배치 처리 → `batch-processing`
- 배치 체크포인트 → `batch-processing`
- 배치 INSERT → `sql-batch-timeout-pool`
- 배포 파이프라인 → `k8s-deploy-pipeline-eks`
- 백프레셔 → `backpressure`
- 백필 → `zero-downtime-migrations`
- 버전 컬럼 → `optimistic-locking`
- 벌크헤드 → `resilience-patterns`
- 벡터 시계 → `clock-skew`
- 벡터 DB → `vector-db`
- 변경 데이터 캡처 → `db-type-columnar-olap`
- 변경 창 → `network-config-cicd`
- 병합 충돌 → `git-merge-conflict`
- 보상 트랜잭션 → `saga-pattern`
- 보수적 갱신 → `count-min-sketch`
- 보안 그룹 → `security-groups-nacl`
- 보편 확장성 법칙 → `scaling-horizontal-vertical`
- 복제 슬롯 → `db-replication-sharding`
- 복제 지연 → `db-replication-sharding`
- 복합 인덱스 → `db-index-design`
- 봉투 암호화 → `encryption-at-rest`
- 부분 동기화 → `redis-replication-sentinel`
- 부분 분할 → `network-partitions`
- 부분 유니크 인덱스 → `db-keys-denormalization`
- 부분 인덱스 → `db-index-design`
- 부분 clone → `git-remote-collaboration`
- 부패 방지 계층 → `pattern-adapter`
- 부하 차단 → `backpressure`
- 분산 락 → `redis-basics`
- 분산 추적 → `distributed-tracing`
- 분산 SQL → `db-type-newsql`
- 분할 상환 → `big-o-notation`
- 브리지 패턴 → `pattern-bridge`
- 블라인드 인덱스 → `encryption-at-rest`
- 블랙박스 모니터링 → `monitoring-basics`
- 블루그린 배포 → `blue-green-deployment`
- 블룸 필터 → `bloom-filter`
- 비관적 잠금 → `db-locking-deadlock`
- 비동기 이터레이터 → `pattern-iterator`
- 비식별 관계 → `sqld-entity-attribute-relationship`
- 비지터 패턴 → `pattern-visitor`
- 빈약한 도메인 모델 → `mvc-pattern`
- 빌더 패턴 → `pattern-builder`
- 빌드 캐시 → `dockerfile-image-layers`
- 사가 패턴 → `microservices`
- 사설 대역 → `layer-ip-addressing`
- 사용자 정의 브리지 → `docker-network-volume`
- 사이드카 컨테이너 → `k8s-pod-multicontainer`
- 상관 서브쿼리 → `sqld-correlated-subquery`
- 상속보다 합성 → `design-patterns-overview`
- 상태 코드 → `http-status-codes`
- 상태 패턴 → `pattern-state`
- 샤드 키 → `mongodb-document-model`
- 서머리 지표 → `metrics-types`
- 서버 상태 → `client-data-cache`
- 서버 액션 → `react-server-components`
- 서버 컴포넌트 → `rendering-strategies`
- 서브넷 마스크 → `layer-ip-addressing`
- 서비스 디스커버리 → `service-discovery`
- 서비스 레지스트리 → `service-discovery`
- 서비스 메시 → `service-mesh`
- 서킷 브레이커 → `resilience-patterns`
- 선택적 하이드레이션 → `hydration`
- 선형화 가능성 → `db-consistency-cap`
- 세대별 가설 → `garbage-collection`
- 세션 계층 → `upper-layers-session-presentation-app`
- 세션 보장 → `eventual-consistency`
- 세션 쿠키 → `cookie-session-login`
- 세션 ID → `cookie-session-login`
- 소비자 그룹 → `pub-sub`
- 소비자 주도 계약 → `api-versioning`
- 수직 확장 → `scaling-horizontal-vertical`
- 수평 확장 → `scaling-horizontal-vertical`
- 스레드 덤프 → `deadlocks`
- 스레드 안전 → `thread-safety`
- 스칼라 서브쿼리 → `sqld-correlated-subquery`
- 스캐빈지 → `garbage-collection`
- 스켈레톤 UI → `loading-patterns`
- 스키마 레지스트리 → `schema-versioning`
- 스테이징 영역 → `git-staging-area`
- 스트랭글러 피그 → `microservices`
- 스트리밍 복제 → `db-replication-sharding`
- 스트리밍 SSR → `rendering-strategies`
- 스플릿 브레인 → `leader-election`
- 슬라이딩 로그 → `rate-limiting-algorithms`
- 슬라이딩 윈도 카운터 → `rate-limiting-algorithms`
- 시간 복잡도 → `big-o-notation`
- 시계 어긋남 → `clock-skew`
- 시계열 DB → `db-type-time-series`
- 시그니처 기반 탐지 → `ids-ips`
- 시점 복구 → `postgres-operations`
- 식 인덱스 → `db-index-design`
- 싱글턴 패턴 → `pattern-singleton`
- 쓰기 왜곡 → `db-transaction-isolation`
- 쓰기 증폭 → `db-index-pitfalls`
- 쓰기 CTE → `postgres-advanced-sql`
- 아웃라이어 감지 → `circuit-breaker`
- 아일랜드 아키텍처 → `islands-resumability`
- 안전한 메서드 → `http-methods`
- 안정화 창 → `k8s-hpa`
- 안티 엔트로피 → `eventual-consistency`
- 암달의 법칙 → `scaling-horizontal-vertical`
- 암시적 형 변환 → `sqld-type-conversion`
- 애니캐스트 → `cdn-edge-anycast`
- 액세스 토큰 → `token-login`
- 얕은 clone → `git-remote-collaboration`
- 어댑터 패턴 → `pattern-adapter`
- 언더레이 → `sdn-vxlan-overlay`
- 업캐스터 → `schema-versioning`
- 엣지 PoP → `cdn-edge-anycast`
- 역색인 → `elasticsearch-inverted-index`
- 연쇄 장애 → `resilience-patterns`
- 예측 스케일링 → `autoscaling`
- 오리진 실드 → `cdn-edge-anycast`
- 오토스케일링 → `autoscaling`
- 옵서버 패턴 → `pattern-observer`
- 와이드 컬럼 → `db-type-wide-column`
- 요청 스머글링 → `http-message`
- 요청 헤징 → `retries`
- 원격 추적 브랜치 → `git-remote-collaboration`
- 원격 캐시 → `build-caching`
- 원본과 사본 → `db-types-overview`
- 웜 풀 → `autoscaling`
- 웹 애플리케이션 방화벽 → `waf`
- 웹훅 → `webhooks`
- 웹훅 서명 → `webhooks`
- 윈도우 프레임 → `sqld-window-functions`
- 윈도우 함수 → `sqld-window-functions`
- 유닛 파일 → `linux-systemd-systemctl`
- 유클리드 거리 → `pythagorean-theorem`
- 유한 상태 기계 → `pattern-state`
- 윤초 → `clock-skew`
- 의미상 잠금 → `saga-pattern`
- 이더넷 프레임 → `layer-link-ethernet-arp`
- 이벤트 기반 아키텍처 → `event-driven-architecture`
- 이벤트 루프 → `event-loop`
- 이벤트 소싱 → `event-driven-architecture`
- 이상 점수 → `waf`
- 이전 페이지 커서 → `api-pagination-sorting`
- 이터레이터 패턴 → `pattern-iterator`
- 이터레이터 헬퍼 → `pattern-iterator`
- 익스체인지 → `rabbitmq-basics`
- 인가 코드 → `oauth`
- 인기 검색어 → `lossy-counting`
- 인라인 뷰 → `sqld-subquery-set-operators`
- 인박스 테이블 → `message-delivery-semantics`
- 인증서 자동 갱신 → `encryption-in-transit`
- 인증서 체인 → `https-tls`
- 인터넷 게이트웨이 → `vpc-basics`
- 인터페이스 엔드포인트 → `vpc-peering-transit-privatelink`
- 인터프리터 패턴 → `pattern-interpreter`
- 일관된 해싱 → `db-sharding`
- 읽기 복구 → `eventual-consistency`
- 읽기 복제본 → `db-replication-sharding`
- 임베디드 DB → `db-type-embedded`
- 임베딩 → `vector-db`
- 임시 컨테이너 → `k8s-pod-troubleshooting`
- 임시 포트 → `ports-and-sockets`
- 자동 롤백 → `rollback-strategy`
- 자동 배칭 → `react-rerender`
- 자연 키 → `db-keys-denormalization`
- 작업 트리 → `git-staging-area`
- 장애 좁히기 → `network-troubleshooting-by-layer`
- 재개 가능성 → `islands-resumability`
- 재귀 리졸버 → `dns`
- 재귀 하강 파서 → `pattern-interpreter`
- 재귀 CTE → `sqld-top-n-hierarchical-pivot`
- 재시도 예산 → `retries`
- 재시도 증폭 → `retries`
- 재암호화 → `encryption-in-transit`
- 재전송 공격 → `webhooks`
- 재전송 비율 → `network-monitoring`
- 재조정 → `react-rerender`
- 저장 데이터 암호화 → `encryption-at-rest`
- 전략 패턴 → `pattern-strategy`
- 전방향 안전성 → `https-tls`
- 전송 구간 암호화 → `encryption-in-transit`
- 전이 테이블 → `postgres-functions-triggers`
- 전파 지연 → `latency-bandwidth-throughput`
- 점프 해시 → `consistent-hashing`
- 접속 URI → `postgres-connections-pg-hba`
- 정규화 → `db-modeling-normalization`
- 정적 렌더링 → `nextjs-static-dynamic-rendering`
- 정적 팩토리 메서드 → `pattern-factory-method`
- 정확히 한 번 → `message-delivery-semantics`
- 제로 트러스트 → `zero-trust-architecture`
- 제품군 → `pattern-abstract-factory`
- 좀비 프로세스 → `linux-processes-signals`
- 주식별자 → `sqld-entity-attribute-relationship`
- 중간 인증서 → `https-tls`
- 중재자 패턴 → `pattern-mediator`
- 중첩 서브쿼리 → `sqld-subquery-set-operators`
- 즉시 로딩 → `n-plus-one-queries`
- 증폭 공격 → `udp-and-quic`
- 지속적 전달 → `ci-cd-basics`
- 지속적 통합 → `ci-cd-basics`
- 지수 백오프 → `resilience-patterns`
- 지연 로딩 → `pattern-proxy`
- 지연 로딩 → `loading-patterns`
- 지오펜싱 → `ray-casting`
- 지오해시 → `geohash`
- 직렬화 지연 → `latency-bandwidth-throughput`
- 집계 파이프라인 → `mongodb-document-model`
- 집계 함수 → `sqld-group-by-having`
- 집합 연산자 → `sqld-set-operators`
- 참조 무결성 → `sql-basics`
- 참조 카운팅 → `garbage-collection`
- 책임 연쇄 패턴 → `pattern-chain-of-responsibility`
- 청크 단위 처리 → `batch-processing`
- 체크포인트 → `postgres-architecture`
- 최장 접두사 일치 → `layer-ip-routing-icmp`
- 최종 일관성 → `db-consistency-cap`
- 추상 팩토리 → `pattern-abstract-factory`
- 추정 롤백 → `distributed-transactions-2pc`
- 축출 정책 → `redis-memory-eviction`
- 침입 방지 시스템 → `ids-ips`
- 침입 탐지 시스템 → `ids-ips`
- 카나리 릴리스 → `canary-release`
- 카디널리티 추정 → `hyperloglog`
- 카디널리티 폭발 → `db-type-time-series`
- 카운터 리셋 → `metrics-types`
- 카티션 곱 → `sqld-joins`
- 캐시 관통 → `caching-strategies`
- 캐시 무효화 → `http-caching-cdn`
- 캐시 스탬피드 → `http-caching-cdn`
- 커넥션 누수 → `connection-pool`
- 커넥션 드레이닝 → `load-balancer-basics`
- 커넥션 풀 → `sql-batch-timeout-pool`
- 커맨드 패턴 → `pattern-command`
- 커버링 인덱스 → `db-index-design`
- 커서 서명 → `api-pagination-sorting`
- 커서 페이지네이션 → `rest-api-design`
- 컨슈머 랙 → `kafka-basics`
- 컨테이너 이미지 → `docker-container-basics`
- 컬럼형 저장 → `db-type-columnar-olap`
- 컴포지트 패턴 → `pattern-composite`
- 코드 스플리팅 → `code-splitting`
- 코레오그래피 → `event-driven-architecture`
- 콘텐츠 협상 → `http-message`
- 쿠버네티스 네임스페이스 → `k8s-namespace`
- 쿠쿠 필터 → `bloom-filter`
- 쿠키 세션 → `cookie-session-login`
- 쿼드트리 → `quadtree`
- 쿼럼 큐 → `rabbitmq-basics`
- 큐 깊이 → `message-queue-basics`
- 크론 표현식 → `cron-jobs`
- 클라이언트 라우팅 → `rendering-csr-spa`
- 클라이언트 측 디스커버리 → `service-discovery`
- 클러스터드 인덱스 → `db-index`
- 키 선점 → `idempotency-key`
- 키-값 저장소 → `db-type-key-value`
- 키셋 페이지네이션 → `sql-query-rewrite`
- 킬 스위치 → `ab-testing`
- 타기팅 규칙 → `feature-flags`
- 태스크 큐 → `event-loop`
- 테스트 데이터 빌더 → `pattern-builder`
- 템플릿 메서드 → `pattern-template-method`
- 툼스톤 → `db-type-wide-column`
- 트래픽 셰이핑 → `traffic-shaping-qos`
- 트랜잭셔널 아웃박스 → `microservices`
- 트랜잭셔널 프로듀서 → `message-delivery-semantics`
- 트렁크 기반 개발 → `git-branching-strategy`
- 트렁크 포트 → `vlan-basics`
- 트리 셰이킹 → `code-splitting`
- 파일 권한 → `linux-files-permissions`
- 파티셔닝 → `db-partitioning`
- 파티션 가지치기 → `db-partitioning`
- 패킷 캡처 → `packet-capture-tcpdump`
- 팩토리 메서드 → `pattern-factory-method`
- 팬아웃 → `pub-sub`
- 퍼블릭 서브넷 → `vpc-subnets-route-tables`
- 퍼사드 패턴 → `pattern-facade`
- 펜싱 토큰 → `distributed-lock`
- 포워드 프록시 → `proxy-reverse-proxy`
- 포트 포워딩 → `iptables-nat`
- 포함 증명 → `merkle-tree`
- 폭발 반경 → `network-config-cicd`
- 폴리글랏 퍼시스턴스 → `db-architecture-by-scale`
- 폴리싱 → `traffic-shaping-qos`
- 표본 비율 불일치 → `ab-testing`
- 표현 계층 → `upper-layers-session-presentation-app`
- 표현 문제 → `pattern-visitor`
- 풀 고갈 → `connection-pool`
- 프라이빗 서브넷 → `vpc-subnets-route-tables`
- 프로젝트 폴더 구조 → `k8s-project-structure`
- 프로토타입 패턴 → `pattern-prototype`
- 프록시 패턴 → `pattern-proxy`
- 프론트 컨트롤러 → `mvc-pattern`
- 플라이웨이트 패턴 → `pattern-flyweight`
- 플래그 평가 → `feature-flags`
- 플레이북 → `ansible-network-automation`
- 플레이키 테스트 → `ci-cd-basics`
- 플루언트 인터페이스 → `pattern-builder`
- 피벗 단계 → `saga-pattern`
- 피처 플래그 → `ab-testing`
- 피타고라스 수 → `pythagorean-theorem`
- 피타고라스 정리 → `pythagorean-theorem`
- 필터 정책 → `pub-sub`
- 하위 호환 → `api-versioning`
- 하이드레이션 → `rendering-strategies`
- 하이드레이션 불일치 → `hydration`
- 할리우드 원칙 → `pattern-template-method`
- 함수 기반 인덱스 → `sqld-type-conversion`
- 함수 종속 → `db-modeling-normalization`
- 핫 키 → `caching-strategies`
- 핫 파티션 → `db-type-key-value`
- 해시 슬롯 → `redis-cluster`
- 해시 조인 → `db-type-relational`
- 해시 트리 → `merkle-tree`
- 행 단위 보안 → `postgres-roles-security`
- 헬스 체크 → `osi-in-practice`
- 형태소 분석기 → `elasticsearch-inverted-index`
- 혼잡 제어 → `tcp-reliability-congestion`
- 황금 신호 → `monitoring-basics`
- 흐름 로그 → `network-flow-logs`
- 흐름 제어 → `tcp-reliability-congestion`
- 히스토그램 버킷 → `metrics-types`
- 힌트 핸드오프 → `eventual-consistency`
- 힙 스냅샷 → `js-memory-leak`
- A/B 테스트 → `ab-testing`
- AbortController → `browser-fetch`
- AbortSignal → `browser-fetch`
- Abstract Factory → `pattern-abstract-factory`
- accept 큐 → `tcp-connection-lifecycle`
- Accept-Encoding → `http-message`
- access entry → `eks-cluster-basics`
- Access-Control-Allow-Origin → `cors`
- actionlint → `github-actions-docker-ecr`
- ADD_MONTHS → `sqld-single-row-functions`
- Address already in use → `ports-and-sockets`
- AdminNetworkPolicy → `k8s-network-policy`
- advisory lock → `pessimistic-locking`
- allkeys-lru → `redis-memory-eviction`
- allowedDevOrigins → `local-custom-domain`
- AllowedIPs → `vpn-ipsec-wireguard`
- ALTER DEFAULT PRIVILEGES → `postgres-roles-security`
- ambient 모드 → `service-mesh`
- AnalysisTemplate → `canary-release`
- annotated tag → `git-internals-basics`
- Ansible → `ansible-network-automation`
- Anycast → `cdn-edge-anycast`
- AOF → `redis-persistence-ha`
- API 게이트웨이 → `gateway`
- API 버전 관리 → `rest-api-design`
- AppendEntries → `raft-consensus`
- appendfsync → `redis-persistence-ha`
- application/x-www-form-urlencoded → `html-form-http`
- Argo Rollouts → `canary-release`
- ARP → `layer-link-ethernet-arp`
- Astro → `islands-resumability`
- AsyncLocalStorage → `rendering-ssr`
- autosquash → `git-rebase`
- autovacuum → `postgres-mvcc-vacuum`
- Avro → `schema-versioning`
- awk → `linux-grep-awk-sed`
- B-tree 인덱스 → `db-index`
- BACKWARD_TRANSITIVE → `schema-versioning`
- Base64 → `base64`
- base64url → `base64`
- Basic 인증 → `base64`
- BBR → `tcp-reliability-congestion`
- BCNF → `db-modeling-normalization`
- BeyondCorp → `zero-trust-architecture`
- bfcache → `frontend-browser-cache`
- BFF → `gateway`
- Big O → `big-o-notation`
- bind mount → `docker-network-volume`
- Bitmap Heap Scan → `db-index`
- blackbox_exporter → `network-monitoring`
- BLMOVE → `message-queue-basics`
- blob 객체 → `git-internals-basics`
- Bloom filter → `bloom-filter`
- blue-green → `blue-green-deployment`
- BM25 → `elasticsearch-inverted-index`
- BRIN → `db-index-design`
- bufferbloat → `traffic-shaping-qos`
- bufferedAmount → `websocket-deep-dive`
- BuildKit → `dockerfile-image-layers`
- Cache Components → `nextjs-static-dynamic-rendering`
- Cache Storage → `frontend-browser-cache`
- cache-aside → `caching-strategies`
- Cache-Control → `http-caching-cdn`
- cannot lock ref → `git-repo-errors`
- CAP 정리 → `db-consistency-cap`
- Cassandra → `db-type-wide-column`
- cert-manager → `kubernetes-ingress`
- certbot → `nginx-https-performance`
- cgroups → `docker-container-basics`
- Chain of Responsibility → `pattern-chain-of-responsibility`
- check-then-act → `race-conditions`
- cherry-pick → `git-tips-advanced`
- CI 캐시 → `build-caching`
- CIDR → `layer-ip-addressing`
- cidrsubnets → `terraform-network-iac`
- ClickHouse → `db-type-columnar-olap`
- client_connection_check_interval → `timeouts`
- client-output-buffer-limit → `pub-sub`
- CLOSE_WAIT → `tcp-connection-lifecycle`
- CLS → `core-web-vitals`
- ClusterIP → `k8s-service-types`
- CMS → `count-min-sketch`
- CNAME → `dns`
- CNI 플러그인 → `k8s-cni-pod-network`
- COALESCE → `sqld-null-functions`
- CockroachDB → `db-type-newsql`
- Coffman 조건 → `deadlocks`
- Comet → `long-polling`
- Command 패턴 → `pattern-command`
- commit-msg 훅 → `git-tips-advanced`
- compose.yaml → `docker-compose`
- Composite 패턴 → `pattern-composite`
- concurrencyPolicy → `cron-jobs`
- ConfigMap → `k8s-configmap`
- configMapGenerator → `k8s-configmap`
- conftest → `terraform-network-iac`
- connect 타임아웃 → `timeouts`
- CONNECT 터널 → `proxy-reverse-proxy`
- CONNECT BY → `sqld-top-n-hierarchical-pivot`
- conntrack → `iptables-basics`
- Conventional Commits → `git-branching-strategy`
- Core Web Vitals → `core-web-vitals`
- core.autocrlf → `git-ignore-config`
- CoreDNS → `k8s-coredns`
- CORS → `cors`
- Count-Min Sketch → `count-min-sketch`
- CPU 스로틀링 → `k8s-pod-resources`
- CrashLoopBackOff → `k8s-pod-lifecycle`
- CRDT → `crdt`
- CREATE INDEX CONCURRENTLY → `db-index-pitfalls`
- create_before_destroy → `terraform-network-iac`
- CreateContainerConfigError → `k8s-pod-troubleshooting`
- CronJob → `cron-jobs`
- CSRF → `cookie-session-login`
- CSWSH → `websocket-deep-dive`
- Cypher → `db-type-graph`
- daemon-reload → `linux-systemd-systemctl`
- data URL → `base64`
- database per service → `db-architecture-by-scale`
- DataLoader → `n-plus-one-queries`
- DB 종류 → `db-types-overview`
- DDL → `sql-basics`
- dead man's switch → `cron-jobs`
- DECODE → `sqld-null-functions`
- Decorator 패턴 → `pattern-decorator`
- decorrelated jitter → `exponential-backoff-jitter`
- default 파티션 → `db-partitioning`
- default-address-pools → `docker-network-drivers`
- DENSE_RANK → `sqld-window-functions`
- depends_on → `docker-compose`
- detached DOM → `js-memory-leak`
- detached HEAD → `git-branch-merge`
- Direct Server Return → `load-balancer-basics`
- DISTINCT ON → `postgres-reporting-sql`
- distroless → `dockerfile-image-layers`
- divergent branches → `git-troubleshooting`
- DLQ → `dead-letter-queue`
- DNAT → `iptables-nat`
- DNS → `dns`
- DNS 전환 → `blue-green-deployment`
- dnsmasq → `local-custom-domain`
- dnsPolicy → `k8s-coredns`
- DNSSEC → `dns`
- Docker Compose → `docker-compose`
- Docker Engine → `docker-container-basics`
- DOCKER-ISOLATION → `docker-network-drivers`
- DOCKER-USER → `iptables-nat`
- Dockerfile → `dockerfile-image-layers`
- DoH → `dns`
- DORA 지표 → `ci-cd-basics`
- Draft Mode → `rendering-ssg-isr`
- drain 이벤트 → `backpressure`
- drift 감지 → `network-config-cicd`
- dry-run=server → `k8s-project-structure`
- DSCP → `traffic-shaping-qos`
- dual package hazard → `pattern-singleton`
- dubious ownership → `git-repo-errors`
- DuckDB → `db-type-columnar-olap`
- DynamoDB → `db-type-key-value`
- eager loading → `n-plus-one-queries`
- ECR → `github-actions-docker-ecr`
- EKS → `eks-cluster-basics`
- EKS Pod Identity → `eks-cluster-basics`
- Elasticsearch → `elasticsearch-inverted-index`
- EncryptionConfiguration → `k8s-secret`
- EndpointSlice → `k8s-service-types`
- equal jitter → `exponential-backoff-jitter`
- ERD → `sqld-data-modeling`
- ESR 규칙 → `mongodb-document-model`
- ETag → `http-caching-cdn`
- etcd → `db-type-key-value`
- etcdctl elect → `leader-election`
- Event-Carried State Transfer → `event-driven-architecture`
- EventSource → `realtime-communication`
- exemplar → `observability-basics`
- expand/contract → `db-architecture-by-scale`
- EXPLAIN ANALYZE → `sql-query-tuning`
- externalTrafficPolicy → `k8s-service-types`
- Facade 패턴 → `pattern-facade`
- Factory Method → `pattern-factory-method`
- fail open → `rate-limiting-in-practice`
- fail_timeout → `rolling-deployment`
- fast-forward → `git-branch-merge`
- fetch first → `git-troubleshooting`
- first-parent → `git-branch-merge`
- Flannel → `k8s-cni-pod-network`
- Flyway → `db-migration-tools`
- flyway_schema_history → `db-migration-tools`
- Flyweight 패턴 → `pattern-flyweight`
- FOR NO KEY UPDATE → `pessimistic-locking`
- for_each → `terraform-modules-tfvars`
- force-static → `nextjs-static-dynamic-rendering`
- force-unlock → `terraform-basics`
- force-with-lease → `git-remote-collaboration`
- FormData → `html-form-http`
- full jitter → `exponential-backoff-jitter`
- full_page_writes → `postgres-architecture`
- G-Counter → `crdt`
- Gateway API → `gateway`
- GCRA → `rate-limiting-algorithms`
- gcTime → `client-data-cache`
- generate_series → `postgres-reporting-sql`
- generateStaticParams → `rendering-ssg-isr`
- Geohash → `geohash`
- GEOSEARCH → `geohash`
- git add -p → `git-staging-area`
- git bisect → `git-tips-advanced`
- git blame → `git-tips-advanced`
- git clean → `git-undo`
- Git Flow → `git-branching-strategy`
- git fsck → `git-stash-reflog`
- Git LFS → `git-large-files-secrets`
- git rebase → `git-rebase`
- git reset → `git-undo`
- git restore → `git-undo`
- git revert → `git-undo`
- git stash → `git-stash-reflog`
- git-filter-repo → `git-large-files-secrets`
- GitHub Actions → `github-actions-docker-ecr`
- GitHub Flow → `git-branching-strategy`
- GoF → `design-patterns-overview`
- GOMEMLIMIT → `garbage-collection`
- goodput → `latency-bandwidth-throughput`
- Gratuitous ARP → `layer-link-ethernet-arp`
- GROUP BY → `sqld-group-by-having`
- group_vars → `ansible-network-automation`
- GROUPING SETS → `sqld-rollup-cube-grouping-sets`
- GROUPING_ID → `sqld-rollup-cube-grouping-sets`
- gRPC → `grpc`
- gzip_types → `nginx-https-performance`
- hanging GET → `long-polling`
- happens-before → `thread-safety`
- Hash Join → `sql-query-tuning`
- HATEOAS → `rest-api-design`
- HAVING → `sqld-group-by-having`
- headless Service → `k8s-service-types`
- heavy hitter → `lossy-counting`
- Helm 차트 → `helm-basics`
- Helm 훅 → `helm-release-lifecycle`
- helm diff → `helm-release-lifecycle`
- helm install → `helm-basics`
- helm rollback → `helm-release-lifecycle`
- helm template → `helm-chart-templates`
- helmfile → `helm-dependencies-oci-gitops`
- highWaterMark → `backpressure`
- histogram_quantile → `metrics-types`
- History API → `rendering-csr-spa`
- HNSW → `vector-db`
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
- HTTP/2 → `http-versions`
- HTTP/3 → `http-versions`
- HTTPRoute → `gateway`
- HTTPS → `what-happens-google-com`
- HyperLogLog → `hyperloglog`
- I/O 다중화 → `redis-basics`
- ICMP → `layer-ip-routing-icmp`
- Idempotent-Replayed → `idempotency-key`
- identity 컬럼 → `postgres-data-types`
- identity-aware proxy → `zero-trust-architecture`
- If-Match → `optimistic-locking`
- IKEv2 → `vpn-ipsec-wireguard`
- ImagePullBackOff → `k8s-pod-troubleshooting`
- imagePullSecrets → `k8s-secret`
- immutable ConfigMap → `k8s-configmap`
- includeIf → `git-ignore-config`
- Index Only Scan → `db-index`
- index-free adjacency → `db-type-graph`
- index.lock → `git-repo-errors`
- Ingress → `kubernetes-ingress`
- Ingress Controller → `kubernetes-ingress`
- ingress-nginx → `kubernetes-ingress`
- IngressClass → `kubernetes-ingress`
- init 컨테이너 → `k8s-pod-multicontainer`
- INP → `core-web-vitals`
- interactive rebase → `git-rebase`
- Interpreter 패턴 → `pattern-interpreter`
- Intl.Collator → `pattern-strategy`
- INVALID 인덱스 → `db-index-pitfalls`
- ip6tables → `iptables-basics`
- IPsec → `vpn-ipsec-wireguard`
- iptables → `iptables-basics`
- iptables-persistent → `iptables-basics`
- IPv6 → `ipv6-basics`
- ipvlan → `docker-network-drivers`
- IRSA → `eks-cluster-basics`
- IS DISTINCT FROM → `sql-select-where-null`
- ISR → `rendering-strategies`
- Iterator 패턴 → `pattern-iterator`
- journalctl → `linux-systemd-systemctl`
- JSON Merge Patch → `http-methods`
- JSON Patch → `http-methods`
- JSON.parse → `json-crud-http`
- JSON.stringify → `json-crud-http`
- JSONB → `postgres-jsonb-search`
- jsonb_path_ops → `postgres-jsonb-search`
- JWT → `token-login`
- Kafka → `kafka-basics`
- keepalive → `browser-fetch`
- ketama → `consistent-hashing`
- kube-proxy → `iptables-nat`
- kubeconform → `k8s-project-structure`
- kubectl debug → `k8s-pod-troubleshooting`
- Kubernetes Secret → `k8s-secret`
- Kustomize → `helm-dependencies-oci-gitops`
- L4 로드 밸런서 → `osi-in-practice`
- L7 로드 밸런서 → `osi-in-practice`
- Last-Event-ID → `server-sent-events`
- LATERAL → `postgres-reporting-sql`
- LCP → `core-web-vitals`
- Lease 객체 → `leader-election`
- least request → `load-balancing-algorithms`
- least_conn → `nginx-reverse-proxy`
- library 차트 → `helm-dependencies-oci-gitops`
- limit_req → `nginx-https-performance`
- LimitRange → `k8s-pod-resources`
- listen_addresses → `postgres-connections-pg-hba`
- LISTEN/NOTIFY → `postgres-functions-triggers`
- ListenOverflows → `network-monitoring`
- liveness probe → `k8s-pod-probes`
- load average → `linux-processes-signals`
- location 블록 → `nginx-basics`
- lock_timeout → `zero-downtime-migrations`
- LogQL → `structured-logging`
- Lossy Counting → `lossy-counting`
- LSM 트리 → `db-type-wide-column`
- LSN → `postgres-architecture`
- LUKS → `encryption-at-rest`
- MAC 주소 → `layer-link-ethernet-arp`
- macvlan → `docker-network-drivers`
- MASQUERADE → `iptables-nat`
- max_fails → `rolling-deployment`
- max_prepared_statements → `connection-pool`
- MaxListenersExceededWarning → `pattern-observer`
- maxmemory → `redis-memory-eviction`
- maxReceiveCount → `dead-letter-queue`
- maxSurge → `k8s-deployment`
- maxUnavailable → `k8s-deployment`
- Mediator 패턴 → `pattern-mediator`
- Memcached → `redis-basics`
- Memento 패턴 → `pattern-memento`
- merge base → `git-branch-merge`
- Merkle tree → `merkle-tree`
- metrics-server → `k8s-hpa`
- min.insync.replicas → `kafka-basics`
- minReadySeconds → `k8s-deployment`
- MINUS → `sqld-set-operators`
- mkcert → `local-custom-domain`
- ModSecurity → `waf`
- Module Federation → `micro-frontends`
- MongoDB → `mongodb-document-model`
- MOVED → `redis-cluster`
- MSS 클램핑 → `layer-mtu-fragmentation`
- mTLS → `https-tls`
- mtr → `network-troubleshooting-by-layer`
- MTU → `layer-mtu-fragmentation`
- multipart/form-data → `http-message`
- MVC 패턴 → `mvc-pattern`
- MVCC → `db-transaction-isolation`
- MVVM → `mvc-pattern`
- N+1 → `sql-query-rewrite`
- NACL → `security-groups-nacl`
- Nagle 알고리즘 → `tcp-reliability-congestion`
- named volume → `docker-network-volume`
- namei → `linux-files-permissions`
- namespace → `docker-container-basics`
- namespaceSelector → `k8s-network-policy`
- NAT 게이트웨이 → `vpc-subnets-route-tables`
- NAT64 → `ipv6-basics`
- NATURAL JOIN → `sqld-joins`
- ndots → `k8s-coredns`
- NDP → `ipv6-basics`
- Neo4j → `db-type-graph`
- Nested Loop → `sql-query-tuning`
- netfilter → `iptables-basics`
- NetFlow → `network-flow-logs`
- networkaddress.cache.ttl → `service-discovery`
- NetworkPolicy → `k8s-network-policy`
- NewSQL → `db-type-newsql`
- nginx -s reload → `blue-green-deployment`
- nginx.conf → `nginx-basics`
- nindent → `helm-chart-templates`
- node affinity → `k8s-pod-scheduling`
- node_exporter → `network-monitoring`
- NodeLocal DNSCache → `k8s-coredns`
- NodePort → `k8s-service-types`
- Non-EQUI JOIN → `sqld-joins`
- NOT EXISTS → `sqld-subquery-set-operators`
- NOT VALID → `zero-downtime-migrations`
- nsswitch.conf → `hosts-file`
- NULLIF → `sqld-null-functions`
- NULLS FIRST → `sql-select-where-null`
- NULLS LAST → `api-pagination-sorting`
- NVL → `sqld-null-functions`
- OAuth → `oauth`
- Observer 패턴 → `pattern-observer`
- OCI 레지스트리 → `helm-dependencies-oci-gitops`
- OIDC 신뢰 정책 → `github-actions-docker-ecr`
- OLAP → `db-type-columnar-olap`
- ON CONFLICT → `postgres-advanced-sql`
- onShellReady → `streaming-ssr-suspense`
- OOMKilled → `k8s-pod-resources`
- OpenFeature → `feature-flags`
- openssl s_client → `network-troubleshooting-by-layer`
- OpenTelemetry → `observability-basics`
- Operational Transformation → `operational-transform`
- Optimistic UI → `loading-patterns`
- OR-Set → `crdt`
- OSI 7계층 → `network-layers-overview`
- OSI 모델 → `network-layers-overview`
- OTel Collector → `observability-basics`
- OUTER JOIN → `sqld-joins`
- OWASP CRS → `waf`
- P2C → `load-balancing-algorithms`
- PACELC → `db-consistency-cap`
- packfile → `git-internals-basics`
- pause 컨테이너 → `k8s-pod-basics`
- pcap → `packet-capture-tcpdump`
- peer 인증 → `postgres-getting-started`
- pending-upgrade → `helm-release-lifecycle`
- PersistentVolume → `k8s-pv-pvc`
- PersistentVolumeClaim → `k8s-pv-pvc`
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
- pimpl → `pattern-bridge`
- pino → `structured-logging`
- PITR → `postgres-operations`
- PIVOT → `sqld-top-n-hierarchical-pivot`
- PKCE → `oauth`
- PL/pgSQL → `postgres-functions-triggers`
- PMTUD → `layer-mtu-fragmentation`
- PNPOLY → `ray-casting`
- Pod phase → `k8s-pod-lifecycle`
- podCIDR → `k8s-cni-pod-network`
- poison record → `batch-processing`
- Power of Two Choices → `load-balancing-algorithms`
- Pre-Vote → `raft-consensus`
- preflight → `cors`
- PREPARE TRANSACTION → `distributed-transactions-2pc`
- preStop → `k8s-pod-lifecycle`
- PRG 패턴 → `http-status-codes`
- PriorityClass → `k8s-pod-scheduling`
- PrivateLink → `vpc-peering-transit-privatelink`
- Problem Details → `http-status-codes`
- process.nextTick → `event-loop`
- ProgressDeadlineExceeded → `k8s-deploy-pipeline-eks`
- protobuf → `grpc`
- Protocol Buffers → `grpc`
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
- push protection → `git-large-files-secrets`
- pushState → `rendering-csr-spa`
- PUT과 PATCH → `http-methods`
- QoS 클래스 → `k8s-pod-resources`
- Quadtree → `quadtree`
- QUIC → `http-versions`
- Qwik → `islands-resumability`
- R-tree → `quadtree`
- RabbitMQ → `rabbitmq-basics`
- Raft 합의 → `raft-consensus`
- RAG → `vector-db`
- RateLimit-Policy → `rate-limiting-in-practice`
- RDB 스냅샷 → `redis-persistence-ha`
- RDBMS → `db-type-relational`
- React.memo → `react-rerender`
- read-modify-write → `race-conditions`
- read-your-writes → `db-consistency-cap`
- readiness probe → `k8s-pod-probes`
- ReadWriteOnce → `k8s-pv-pvc`
- RED 방법 → `monitoring-basics`
- Redis → `redis-basics`
- Redis Cluster → `redis-cluster`
- Redis Sentinel → `redis-replication-sentinel`
- Redlock → `distributed-lock`
- redrive → `dead-letter-queue`
- ReferenceGrant → `gateway`
- Reflect → `pattern-proxy`
- reflog → `git-stash-reflog`
- renderToString → `rendering-ssr`
- repl-backlog-size → `redis-replication-sentinel`
- ReplicaSet → `k8s-pod-basics`
- rerere → `git-merge-conflict`
- ResourceQuota → `k8s-pod-resources`
- REST API → `rest-api-design`
- restore-keys → `build-caching`
- RETURNING → `postgres-advanced-sql`
- revalidatePath → `rendering-ssg-isr`
- revalidateTag → `rendering-ssg-isr`
- reviver → `json-crud-http`
- RFC 1918 → `layer-ip-addressing`
- RocksDB → `db-type-embedded`
- rolling checksum → `rsync-algorithm`
- rolling deployment → `rolling-deployment`
- rollout undo → `k8s-deployment`
- ROLLUP → `sqld-rollup-cube-grouping-sets`
- Row Level Security → `postgres-roles-security`
- ROW_NUMBER → `sqld-window-functions`
- ROWNUM → `sqld-top-n-hierarchical-pivot`
- RSC payload → `react-server-components`
- rsync 알고리즘 → `rsync-algorithm`
- Same-Origin Policy → `cors`
- sargable → `sql-query-rewrite`
- SAVEPOINT → `sql-insert-update-delete`
- schema_migrations → `db-migration-tools`
- scram-sha-256 → `postgres-roles-security`
- SDN → `sdn-vxlan-overlay`
- search_after → `elasticsearch-inverted-index`
- search_path → `postgres-getting-started`
- Sec-WebSocket-Accept → `websocket-deep-dive`
- Secrets Store CSI Driver → `k8s-secret`
- SECURITY DEFINER → `postgres-functions-triggers`
- sed -i → `linux-grep-awk-sed`
- SELF JOIN → `sqld-joins`
- sendBeacon → `browser-fetch`
- server_name → `nginx-basics`
- server-only → `react-server-components`
- Server-Sent Events → `realtime-communication`
- Server-Timing → `rendering-ssr`
- Service Worker → `frontend-browser-cache`
- SET ROLE → `postgres-roles-security`
- Set-Cookie → `cookie-session-login`
- setImmediate → `event-loop`
- setuid → `linux-files-permissions`
- shared_buffers → `postgres-architecture`
- ShareDB → `operational-transform`
- SIGHUP → `linux-processes-signals`
- Singleton 패턴 → `pattern-singleton`
- sites-enabled → `nginx-basics`
- SKIP LOCKED → `db-architecture-by-scale`
- skipWaiting → `frontend-browser-cache`
- SLAAC → `ipv6-basics`
- SNMP → `network-monitoring`
- Snowflake → `db-sharding`
- SO_REUSEADDR → `ports-and-sockets`
- SO_REUSEPORT → `ports-and-sockets`
- SOPS → `helm-values-secrets`
- SP-GiST → `quadtree`
- SPA 폴백 → `rendering-csr-spa`
- Space-Saving → `lossy-counting`
- Speculation Rules → `frontend-browser-cache`
- SPIFFE → `service-mesh`
- split_clients → `canary-release`
- SQLite → `db-type-embedded`
- SQLSTATE → `sql-basics`
- squash 머지 → `git-branching-strategy`
- SSG → `rendering-strategies`
- sslmode → `encryption-in-transit`
- SSTable → `db-type-wide-column`
- stale-while-revalidate → `http-caching-cdn`
- staleTime → `client-data-cache`
- startupProbe → `k8s-pod-probes`
- state 파일 → `terraform-basics`
- State 패턴 → `pattern-state`
- statement_timeout → `sql-batch-timeout-pool`
- sticky bit → `linux-files-permissions`
- sticky session → `load-balancer-basics`
- Strategy 패턴 → `pattern-strategy`
- structuredClone → `pattern-prototype`
- subPath → `k8s-configmap`
- SUBSTR → `sqld-single-row-functions`
- Sunset 헤더 → `api-versioning`
- suppressHydrationWarning → `hydration`
- Suricata → `ids-ips`
- Suspense 경계 → `streaming-ssr-suspense`
- SYN flood → `tcp-connection-lifecycle`
- systemctl → `linux-systemd-systemctl`
- systemd timer → `linux-systemd-systemctl`
- taint → `k8s-pod-scheduling`
- TanStack Query → `client-data-cache`
- TCP/IP 4계층 → `network-layers-overview`
- tcpdump → `packet-capture-tcpdump`
- Template Method → `pattern-template-method`
- Terminating 네임스페이스 → `k8s-namespace`
- terminationGracePeriodSeconds → `k8s-pod-lifecycle`
- Terraform → `terraform-basics`
- Terraform 모듈 → `terraform-modules-tfvars`
- terraform plan → `terraform-basics`
- terraform workspace → `terraform-modules-tfvars`
- text/event-stream → `server-sent-events`
- tfvars → `terraform-modules-tfvars`
- thundering herd → `exponential-backoff-jitter`
- TiDB → `db-type-newsql`
- TIME_WAIT → `tcp-connection-lifecycle`
- TimescaleDB → `db-type-time-series`
- timestamptz → `postgres-data-types`
- tini → `linux-processes-signals`
- TLS 1.3 → `https-tls`
- TLS 핸드셰이크 → `https-tls`
- TO_CHAR → `sqld-type-conversion`
- TOAST → `postgres-architecture`
- TOCTOU → `race-conditions`
- toleration → `k8s-pod-scheduling`
- topologySpreadConstraints → `k8s-pod-scheduling`
- TP2 → `operational-transform`
- traceparent → `distributed-tracing`
- tracepath → `network-troubleshooting-by-layer`
- traceroute → `layer-ip-routing-icmp`
- Transfer-Encoding → `http-message`
- Transfer-Encoding: chunked → `streaming-ssr-suspense`
- Transit Gateway → `vpc-peering-transit-privatelink`
- TrueTime → `db-type-newsql`
- TRUNCATE → `sql-insert-update-delete`
- try_files → `nginx-basics`
- tstzrange → `postgres-data-types`
- tsvector → `postgres-jsonb-search`
- TTL → `dns`
- Turborepo → `build-caching`
- UDP → `udp-and-quic`
- UdpRcvbufErrors → `udp-and-quic`
- umask → `linux-files-permissions`
- UNION ALL → `sqld-set-operators`
- uniq -c → `linux-grep-awk-sed`
- unrelated histories → `git-troubleshooting`
- UPSERT → `sql-insert-update-delete`
- upstream 블록 → `nginx-reverse-proxy`
- URLSearchParams → `html-form-http`
- USE 방법 → `monitoring-basics`
- use client → `react-server-components`
- useDeferredValue → `react-rerender`
- UUID v7 → `postgres-data-types`
- UUIDv7 → `db-sharding`
- VACUUM FULL → `postgres-mvcc-vacuum`
- values.schema.json → `helm-values-secrets`
- visibility map → `postgres-mvcc-vacuum`
- Visitor 패턴 → `pattern-visitor`
- VLAN → `vlan-basics`
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
- WireGuard → `vpn-ipsec-wireguard`
- Wireshark → `packet-capture-tcpdump`
- WITH CHECK OPTION → `sqld-correlated-subquery`
- worktree → `git-tips-advanced`
- write concern → `mongodb-document-model`
- write-behind → `caching-strategies`
- write-through → `caching-strategies`
- writes-follow-reads → `eventual-consistency`
- wrong version number → `upper-layers-session-presentation-app`
- X-Accel-Buffering → `server-sent-events`
- X-Forwarded-For → `proxy-reverse-proxy`
- XAUTOCLAIM → `pub-sub`
- xDS → `service-mesh`
- XID 랩어라운드 → `postgres-mvcc-vacuum`
- XState → `pattern-state`
- Yjs → `crdt`
- Z-순서 곡선 → `geohash`
- zdiff3 → `git-merge-conflict`

## 겹칠 수 있는 글 (자동 추정)

제목·소제목·태그 단어가 많이 겹치는 쌍이다. 새 글이 이 주제를 다루면 둘 중 어느 글에 넣을지, 서로 링크로 나눌지 먼저 정한다.

- `k8s-pod-basics` ↔ `docker-container-basics` (26%: run, 줄이, 지나가는, 띄우고, 들여다보고, 지우기, container)
- `db-index-pitfalls` ↔ `db-index-design` (24%: 100만, 인덱스, 인덱스는, 인덱스를, index)
- `db-index-pitfalls` ↔ `db-index` (24%: 100만, 인덱스, 인덱스가, 인덱스를, index)
- `redis-cluster` ↔ `db-sharding` (22%: 키를, 데이터를, 나누는, 해시)
- `server-sent-events` ↔ `long-polling` (21%: 붙잡는, 장애를, 만났을, 가장, 깊게, 재연결)
- `sqld-null-functions` ↔ `sqld-single-row-functions` (21%: 글에서, 사원, 테이블, 함수, oracle)
- `streaming-ssr-suspense` ↔ `rendering-strategies` (20%: ssr, next.js, rendering, 스트리밍, ssr과, 준비된, 부분부터)
- `count-min-sketch` ↔ `lossy-counting` (19%: lossy, 데이터로, 세는, data, structure, probabilistic)
- `postgres-operations` ↔ `redis-persistence-ha` (19%: 백업과, 복원, 백업은, 복원해, 봐야, 백업이다)
- `ci-cd-basics` ↔ `github-actions-docker-ecr` (18%: 커밋, 가는, 빌드하고, 배포가, ci, cd, 뼈대)
- `ansible-network-automation` ↔ `git-ignore-config` (18%: diff, 파일은, 전체를)
- `network-config-cicd` ↔ `terraform-basics` (18%: plan은, 코드로, 막히는, terraform, iac, plan, apply)
- `nextjs-static-dynamic-rendering` ↔ `rendering-strategies` (17%: 밖에서, 확인하기, 요청마다, next.js, rendering, ssr)
- `consistent-hashing` ↔ `redis-cluster` (17%: 키를, 노드, 해시)
- `db-type-key-value` ↔ `db-type-graph` (16%: 맞는, 곳과, 아닌, 관계형, nosql)
- `sqld-null-functions` ↔ `sql-select-where-null` (16%: null은, 값이, null, 다루기)
- `db-partitioning` ↔ `db-type-time-series` (16%: 오래된, 통째로, 키가)
- `db-partitioning` ↔ `db-type-key-value` (16%: 맞는, 파티션, scalability)
- `db-partitioning` ↔ `db-modeling-normalization` (16%: 테이블을, 떼어, 키가)
- `db-partitioning` ↔ `db-architecture-by-scale` (16%: 떼어, 낸다, scalability)
- `lossy-counting` ↔ `hyperloglog` (16%: 낸다, 세는, data, structure, probabilistic)
- `message-delivery-semantics` ↔ `db-locking-deadlock` (16%: 트랜잭션, 막는, 테이블, 오래, transaction)
- `frontend-browser-cache` ↔ `client-data-cache` (15%: 미리, 쓰면, 받기, 캐시, 돌아가서, cache, frontend)
- `quadtree` ↔ `db-type-time-series` (15%: 통째로, 버린다, 개로, 고르지, postgresql에, 그대로)
- `security-groups-nacl` ↔ `iptables-basics` (15%: 연결을, firewall, 기억하는, 방화벽)
- `db-types-overview` ↔ `redis-basics` (15%: 빠른, 이유는, 하나씩, nosql)
- `git-branch-merge` ↔ `git-remote-collaboration` (15%: 브랜치는, 브랜치를, 지운다, 원격)
- `nextjs-static-dynamic-rendering` ↔ `rendering-ssr` (15%: 요청이, cache, 요청마다, rendering, ssr)
- `rolling-deployment` ↔ `load-balancer-basics` (15%: 빼고, 서버를, 헬스, 의심하는, load, balancer)
- `feature-flags` ↔ `ab-testing` (15%: 플래그는, 플래그, 스위치, feature, flag, 피처)
- `load-balancing-algorithms` ↔ `load-balancer-basics` (14%: 서버로, 서버를, load, balancer, 로드)
- `rendering-ssg-isr` ↔ `rendering-strategies` (14%: 나가는지, next.js, rendering, isr, 미리)
- `sql-query-rewrite` ↔ `db-index-pitfalls` (14%: 100만, 건과, 인덱스)
- `db-index-pitfalls` ↔ `db-type-wide-column` (14%: 쓰기를, 것도, 대가)
- `count-min-sketch` ↔ `hyperloglog` (14%: redis에서, 코드로, 세는, data, structure, probabilistic)
- `nginx-reverse-proxy` ↔ `proxy-reverse-proxy` (14%: proxy, 진짜, 리버스, 프록시와, 로드)
- `structured-logging` ↔ `network-flow-logs` (14%: 남기기, 로그를, observability, 로그)
- `webhooks` ↔ `rsync-algorithm` (14%: 확인한다, 보내는, 쪽이, 이상할)
- `network-flow-logs` ↔ `vpc-subnets-route-tables` (14%: vpc, nat, 주소가, 바뀐다)
- `k8s-network-policy` ↔ `k8s-service-types` (14%: 정책은, 목록이다, 따져, 정책을)

## 서로 이어진 글

양쪽이 서로를 링크하거나 키워드로 가리키는 쌍이다. 내용 경계가 맞닿아 있으니 한쪽 글을 고칠 때 다른 쪽과 겹치지 않는지 본다.

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
- `pattern-proxy` ↔ `loading-patterns`
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

