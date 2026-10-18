# 글 지도 (콘텐츠 색인)

> 자동 생성 문서다. 직접 고치지 말고 `pnpm content:index`로 다시 만든다.
> 새 글을 쓰기 전에 이 문서를 먼저 읽는다: 같은 주제의 글이 있는지, 어느 토픽에 둘지, 어떤 글로 링크할지, 어떤 키워드가 이미 쓰였는지 확인한다.

글 134편 · 토픽 42개 · 생성 기준: posts.ts + src/app/posts/*/page.mdx

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

### Programming › Backend (`programming/backend`)

#### `mvc-pattern` — MVC 패턴: 웹 애플리케이션을 나누는 방법

- 요약: MVC는 화면과 입력 처리에서 업무 규칙을 떼어 내자는 약속이다. Smalltalk에서 웹 MVC, MVP·MVVM, Flux의 단방향 흐름까지 그 약속이 어떻게 바뀌었는지 따라간다.
- 태그: coupang, Architecture, MVC, Backend, Frontend · 회사: coupang
- 키워드: MVC 패턴, MVVM, 프론트 컨트롤러, 빈약한 도메인 모델, 단방향 데이터 흐름
- 길이: 384줄
- 소제목: 요청 하나가 지나가는 길 / 원래 MVC는 웹을 위한 게 아니었다 / HTTP 위로 옮기면서 생긴 변화 / 컨트롤러가 뚱뚱해지는 이유 / 업무 규칙은 서비스와 모델에 둔다 / MVP와 MVVM은 무엇을 바꿨나 / 브라우저로 옮겨 온 MVC와 양방향 바인딩의 한계 / 서비스가 커지면 계층보다 기능으로 나눈다 / 경계가 무너진 코드는 장애 문의로 돌아온다 / 다시 쿠폰 입력칸으로 / 면접에서 나올 만한 질문
- 직접 링크 →: db-locking-deadlock
- 키워드 백링크 →: client-data-cache, http-status-codes, gateway

#### `rest-api-design` — REST API를 설계할 때 정할 것들

- 요약: 자원 이름, 메서드와 상태 코드, 필터와 페이지, 에러 형식, 버전과 하위 호환처럼 REST API를 공개하기 전에 정해야 할 것들을 짚는다. 무한 스크롤에서 offset이 글을 중복시키는 이유와 커서 페이지네이션도 직접 따라가 본다.
- 태그: HTTP, REST, API, Backend
- 키워드: REST API, 커서 페이지네이션, API 버전 관리, HATEOAS
- 길이: 580줄
- 소제목: 주소는 자원의 이름이다 / CRUD로 안 떨어지는 동작 / 메서드와 상태 코드를 제대로 쓴다 / 목록을 거르고 줄 세우기 / 같은 글이 두 번 나온 이유 / 다음 페이지 주소를 알려 주는 방법 / 에러 응답도 모양을 정한다 / 필요한 만큼만 받기 / 버전을 올리지 않고 바꾸는 법 / 그래도 버전을 나눠야 할 때 / POST를 두 번 받아도 괜찮게 / 너무 많이 부르는 클라이언트 / 이름과 값의 모양을 통일한다 / 링크를 따라가는 API / REST가 맞지 않는 곳 / 운영 로그에서 설계 실수가 드러날 때 / 다시 무한 스크롤로 / 면접에서 나올 만한 질문
- 직접 링크 →: http-methods, http-status-codes, http-caching-cdn, resilience-patterns, gateway, microservices, nginx-reverse-proxy, network-troubleshooting-by-layer
- 키워드 백링크 →: base64, db-locking-deadlock, db-index-design, http-message, http-versions, redis-basics, sql-query-rewrite
- 이 글로 오는 글 ←: browser-fetch, client-data-cache, docker-container-basics, html-form-http, http-status-codes, json-crud-http, sql-query-rewrite

### Programming › Backend › Auth (`programming/backend/auth`)

#### `cookie-session-login` — 쿠키와 세션으로 로그인 상태 유지하기

- 요약: HTTP는 방금 누가 왔는지 기억하지 못한다. 서버가 세션을 보관하고 쿠키로 번호표를 돌려주는 흐름과 쿠키 옵션, CSRF까지 정리했다.
- 태그: Authentication, Cookie, Session, Security
- 키워드: 쿠키 세션, 세션 쿠키, 세션 ID, Set-Cookie, CSRF
- 길이: 333줄
- 소제목: 외투 보관소 번호표 / 로그인부터 로그아웃까지 / 쿠키에 붙는 옵션들 / 자동으로 붙는다는 것의 함정, CSRF / 세션을 노리는 공격들 / 서버가 여러 대가 되면 / 배포하고 나니 로그인이 자꾸 풀릴 때 / 정리 / 면접에서 나올 만한 질문
- 직접 링크 →: proxy-reverse-proxy, cors, token-login
- 키워드 백링크 →: html-form-http, kubernetes-ingress, redis-basics, what-happens-google-com
- 이 글로 오는 글 ←: browser-fetch, cors, html-form-http, http-caching-cdn, http-message, http-methods, local-custom-domain, nginx-https-performance, oauth, token-login, upper-layers-session-presentation-app

#### `oauth` — OAuth 2.0, 비밀번호 대신 열쇠를 빌려주는 규칙

- 요약: '구글로 계속하기' 버튼 뒤에서 오가는 요청을 한 단계씩 따라가 봤다. 인가 코드 흐름과 PKCE까지.
- 태그: OAuth, Security, HTTP, Authorization
- 키워드: OAuth, PKCE, 인가 코드
- 길이: 359줄
- 소제목: 비밀번호를 넘기면 안 되는 이유 / 등장하는 네 주체 / 버튼을 누르면 일어나는 일 / 인가 요청 주소 뜯어보기 / 토큰은 두 개가 온다 / 비밀을 숨길 수 없는 앱: PKCE / 구현하면서 놓치기 쉬운 것 / 인가 코드 말고 다른 방식들 / 로그인까지 하려면: OpenID Connect / 콜백에서 막히는 세 가지 / 정리 / 면접에서 나올 만한 질문
- 키워드 백링크 →: token-login, cookie-session-login
- 이 글로 오는 글 ←: local-custom-domain, token-login

#### `token-login` — 토큰으로 로그인하기: JWT와 리프레시 토큰

- 요약: 서버가 아무것도 기억하지 않고 서명된 토큰만 확인하는 방식. JWT를 뜯어보고, 변조가 막히는 이유와 리프레시 토큰, 쿠키 세션과의 차이를 따라가 봤다.
- 태그: Authentication, JWT, Token, Security
- 키워드: JWT, 리프레시 토큰, 액세스 토큰
- 길이: 360줄
- 소제목: 명단 대신 손목 팔찌 / 로그인하고 API를 부르기까지 / JWT 뜯어보기 / 내용을 바꾸면 어떻게 될까 / 비밀 키 하나냐, 열쇠 한 쌍이냐 / JWT에서 자주 나오는 구멍 / 한 번 준 토큰은 되돌리기 어렵다 / 토큰은 어디에 둘까 / 쿠키 세션과 나란히 놓고 보면 / 401이 쏟아지면 토큰부터 뜯어 본다 / 정리 / 면접에서 나올 만한 질문
- 직접 링크 →: cookie-session-login, oauth
- 키워드 백링크 →: base64
- 이 글로 오는 글 ←: base64, cookie-session-login, gateway, git-remote-collaboration, http-message, http-status-codes, oauth

### Programming › Common (`programming/common`)

#### `local-custom-domain` — localhost 대신 내 도메인으로 개발하기

- 요약: app.matt.test, api.matt.test처럼 배포와 같은 모양의 주소로 로컬 개발 환경을 만든다. hosts·dnsmasq로 이름을 돌리고, 리버스 프록시로 나누고, mkcert로 브라우저가 믿는 HTTPS를 붙인다.
- 태그: DNS, HTTPS, Local Dev, Browser
- 키워드: mkcert, dnsmasq, 로컬 도메인, allowedDevOrigins
- 길이: 355줄
- 소제목: localhost가 감춰 주는 것들 / 어떤 도메인을 쓸까 / 이름을 127.0.0.1로 돌리기 / 포트 대신 Host 헤더로 나누기 / 브라우저가 믿는 인증서 만들기 / 브라우저 요청이 서비스에 닿기까지 / 개발 서버가 낯선 호스트를 막는다 / 잘 연결됐는지 확인하기 / 안 될 때 의심할 곳 / 배포와 같은 모양으로 / 면접에서 나올 만한 질문
- 직접 링크 →: cors, hosts-file
- 키워드 백링크 →: proxy-reverse-proxy, nginx-basics, http-versions, what-happens-google-com, cookie-session-login, oauth, dns
- 이 글로 오는 글 ←: cors, hosts-file, https-tls, proxy-reverse-proxy

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
- 키워드 백링크 →: ab-testing
- 이 글로 오는 글 ←: git-branch-merge, git-internals-basics, git-rebase, git-remote-collaboration, git-tips-advanced

#### `git-ignore-config` — .gitignore와 git config: 무시 규칙, 세 겹 설정, 줄바꿈

- 요약: .gitignore가 이미 추적 중인 파일에 듣지 않는 이유와 패턴 규칙, system·global·local로 쌓이는 설정과 includeIf, core.autocrlf와 .gitattributes로 줄바꿈을 고정하는 법을 실제 출력으로 정리한다.
- 태그: Git, DevOps
- 키워드: .gitignore, includeIf, core.autocrlf
- 길이: 424줄
- 소제목: 올리지 않을 파일은 .gitignore로 / 설정은 세 겹으로 쌓인다 / 줄바꿈 문자가 diff 전체를 바꿀 때 / 현장에서 이 규칙들이 문제가 되는 순간 / 다시 정리하면 / 면접에서 나올 만한 질문
- 직접 링크 →: git-staging-area, git-undo, git-troubleshooting, git-branch-merge
- 키워드 백링크 →: db-modeling-normalization
- 이 글로 오는 글 ←: git-internals-basics, git-large-files-secrets, git-repo-errors, git-staging-area, git-troubleshooting

#### `git-internals-basics` — Git은 무엇을 저장하나: 스냅샷과 객체

- 요약: squash 머지한 브랜치가 왜 안 합쳐졌다고 나오는지에서 시작해 blob·tree·commit·tag 객체를 직접 열어 보고, 해시가 내용에서 나오는 방식과 .git 폴더의 구성을 본다. tree 해시 비교, CI 캐시 키, git describe처럼 해시로 같은지 확인하는 실무 방법도 정리한다.
- 태그: Git, DevOps
- 키워드: blob 객체, 내용 주소 지정, packfile, annotated tag
- 길이: 575줄
- 소제목: 서버 하나에 모든 걸 맡기지 않으려고 / 변경분이 아니라 스냅샷을 찍는다 / 객체 네 가지를 직접 열어 본다 / 해시는 내용에서 나온다 / .git 폴더가 저장소의 전부다 / 현장에서 해시로 "같은가"를 확인하는 순간 / 다시 정리하면 / 면접에서 나올 만한 질문
- 직접 링크 →: git-staging-area, git-ignore-config, git-branch-merge, git-troubleshooting, git-stash-reflog
- 키워드 백링크 →: git-tips-advanced, git-branching-strategy, git-large-files-secrets
- 이 글로 오는 글 ←: git-branch-merge, git-large-files-secrets, git-remote-collaboration, git-repo-errors, git-staging-area

#### `git-large-files-secrets` — 커밋에 들어가면 안 되는 것: 큰 파일, 비밀 값, 줄바꿈, 권한

- 요약: 지운 덤프 파일 때문에 푸시가 계속 거절되는 이유에서 시작해 git-filter-repo로 히스토리에서 빼는 법, 비밀 값이 올라갔을 때의 대응 순서, 계속 추적되는 파일, CRLF, 실행 권한, 대소문자만 바꾼 파일 이름을 증상별로 고친다.
- 태그: Git, DevOps
- 키워드: git-filter-repo, Git LFS, push protection
- 길이: 459줄
- 소제목: 큰 파일을 커밋해서 푸시가 안 된다 / 비밀 값이 든 .env를 커밋했다 / .gitignore에 적었는데 계속 추적된다 / 줄바꿈 때문에 파일 전체가 바뀌었다고 나온다 / 권한만 바뀐 파일이 diff에 나온다 / 대소문자만 바꾼 파일 이름이 반영되지 않는다 / 들어간 뒤보다 들어가기 전에 막는 편이 싸다 / 면접에서 나올 만한 질문
- 직접 링크 →: git-internals-basics, git-troubleshooting, git-undo, git-ignore-config
- 키워드 백링크 →: git-staging-area, db-modeling-normalization
- 이 글로 오는 글 ←: git-internals-basics, git-troubleshooting, git-undo

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
- 키워드 백링크 →: git-stash-reflog, token-login, what-happens-google-com
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
- 이 글로 오는 글 ←: git-branch-merge, git-ignore-config, git-internals-basics, git-large-files-secrets, git-merge-conflict, git-rebase, git-stash-reflog, git-troubleshooting, git-undo

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
- 이 글로 오는 글 ←: git-ignore-config, git-large-files-secrets, git-rebase, git-stash-reflog, git-troubleshooting

### Programming › Computer Science (`programming/computer-science`)

#### `base64` — Base64는 왜 쓰고 어떻게 바뀌나

- 요약: 바이트를 3개씩 묶어 6비트 글자 4개로 바꾸는 Base64의 규칙과 패딩, base64url, 33% 늘어나는 크기를 직접 계산하며 본다. 암호화가 아니라서 Basic 인증과 JWT 페이로드가 누구에게나 읽힌다는 점도 짚는다.
- 태그: Encoding, HTTP, Browser, Security
- 키워드: Base64, base64url, data URL, Basic 인증
- 길이: 471줄
- 소제목: 글자만 다니는 길에 바이트를 실으려면 / 3바이트가 4글자가 되는 과정 / 모자란 바이트는 등호로 채운다 / 한글은 UTF-8 바이트부터 만든다 / 인코더를 직접 짜 보기 / 3분의 4만큼 커진다 / URL에 넣으면 더하기와 슬래시가 말썽이다 / 인코딩은 자물쇠가 아니다 / 브라우저의 btoa는 한글을 받지 못한다 / 터미널에서 base64 다루기 / data URL은 요청 하나를 아끼는 대신 / 다시 JSON 속 긴 문자열로 / 면접에서 나올 만한 질문
- 직접 링크 →: token-login, https-tls
- 키워드 백링크 →: upper-layers-session-presentation-app, http-versions, what-happens-google-com
- 이 글로 오는 글 ←: html-form-http, http-message, realtime-communication, rest-api-design, token-login, upper-layers-session-presentation-app

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
- 키워드 백링크 →: db-consistency-cap, db-architecture-by-scale, sql-batch-timeout-pool, db-type-key-value, postgres-architecture, dns
- 이 글로 오는 글 ←: caching-strategies, db-architecture-by-scale, db-consistency-cap, db-index-pitfalls, db-partitioning, db-sharding, db-type-columnar-olap, db-type-newsql, db-type-relational, db-type-time-series, db-type-wide-column, mongodb-document-model, postgres-architecture, postgres-mvcc-vacuum, postgres-operations

#### `db-sharding` — 샤딩: 데이터를 서버 여러 대에 나눠 담기

- 요약: 쓰기와 데이터가 서버 한 대를 넘을 때 샤드 키를 고르고, 일관된 해싱과 가상 노드로 샤드를 늘려도 조금만 옮기는 법을 직접 계산해 본다. 샤드를 넘는 쿼리와 트랜잭션, 전역 ID(UUIDv7, Snowflake), 재분배, 지금 데이터로 샤드 키 분포를 미리 재 보는 방법도 정리한다.
- 태그: Database, Distributed Systems, Scalability, System Design
- 키워드: 일관된 해싱, Snowflake, UUIDv7
- 길이: 312줄
- 소제목: 서버 여러 대에 나눠 담는다 / 샤드를 늘려도 조금만 옮기는 해시 / 샤드를 넘나드는 쿼리는 비싸다 / 주문 번호는 누가 만드나 / 샤드를 다시 나누는 일 / 읽기 모양을 따로 만들어 두기 / 샤드 키를 정하기 전에 지금 데이터로 재 본다 / 샤딩은 마지막 카드다 / 면접에서 나올 만한 질문
- 직접 링크 →: db-replication-sharding, db-partitioning, microservices, mongodb-document-model, db-architecture-by-scale, db-index
- 키워드 백링크 →: redis-cluster, db-type-newsql, db-type-wide-column, db-type-key-value, redis-basics
- 이 글로 오는 글 ←: db-architecture-by-scale, db-index, db-keys-denormalization, db-partitioning, db-replication-sharding, db-type-columnar-olap, db-type-wide-column

#### `elasticsearch-inverted-index` — 검색 엔진은 왜 빠른가: Elasticsearch와 역색인

- 요약: LIKE 검색이 느린 이유에서 출발해 분석기, 역색인, BM25 점수, refresh와 세그먼트, 샤드 구성을 따라간다. 쇼핑몰 검색에서 부딪히는 동의어·오타·패싯·깊은 페이지와 DB 동기화도 다룬다.
- 태그: coupang, Elasticsearch, Search, Database · 회사: coupang
- 키워드: Elasticsearch, 역색인, BM25, 형태소 분석기, search_after
- 길이: 485줄
- 소제목: LIKE가 느린 이유 / 찾아보기에 올릴 단어 고르기: 분석기 / 찾아보기를 만드는 과정 / 무엇을 먼저 보여 줄까: BM25 / 점수가 필요 없는 조건은 filter로 / text와 keyword는 다른 필드다 / 방금 넣은 상품이 검색에 안 나온다 / 샤드와 레플리카 / 쇼핑몰 검색에서 부딪히는 것들 / 깊은 페이지는 from으로 가지 않는다 / 원본은 DB에, 검색은 Elasticsearch에 / 클러스터가 yellow나 red로 바뀌면 / 다시 찾아보기로 / 면접에서 나올 만한 질문
- 직접 링크 →: vector-db
- 키워드 백링크 →: db-index, mongodb-document-model, db-modeling-normalization
- 이 글로 오는 글 ←: db-architecture-by-scale, db-types-overview, http-methods, ports-and-sockets, postgres-jsonb-search

#### `mongodb-document-model` — MongoDB 문서 모델: 넣을까, 가리킬까

- 요약: 주문 하나를 문서 하나로 저장하는 문서 모델에서 내장과 참조를 고르는 기준을 정리했다. 스키마 검증, ESR 인덱스, 트랜잭션, write concern, 샤드 키, 집계 파이프라인까지 다룬다.
- 태그: coupang, MongoDB, NoSQL, Database · 회사: coupang
- 키워드: MongoDB, ESR 규칙, 샤드 키, write concern, 집계 파이프라인
- 길이: 471줄
- 소제목: 주문 하나가 문서 하나 / 넣을까, 가리킬까 / 스키마가 없다는 건 검사도 내가 한다는 뜻 / 인덱스 필드 순서는 ESR / 문서 하나는 원자적이다 / 쓰기가 끝났다는 건 어디까지인가 / 샤드 키 하나가 클러스터 모양을 정한다 / 모아서 계산하기: 집계 파이프라인 / 느린 쿼리 로그에 COLLSCAN이 보이면 / 결국 읽는 모양에서 출발한다 / 면접에서 나올 만한 질문
- 키워드 백링크 →: db-index-design, db-type-relational, db-replication-sharding, db-modeling-normalization
- 이 글로 오는 글 ←: db-architecture-by-scale, db-consistency-cap, db-sharding, db-type-relational, db-types-overview, elasticsearch-inverted-index

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
- 직접 링크 →: db-types-overview, db-transaction-isolation, db-type-newsql, db-replication-sharding, db-type-wide-column, redis-replication-sentinel
- 키워드 백링크 →: db-type-key-value, mongodb-document-model, redis-basics
- 이 글로 오는 글 ←: db-replication-sharding, db-type-embedded, db-type-key-value, db-type-newsql, db-type-wide-column, db-types-overview

#### `db-type-columnar-olap` — 컬럼형 분석 DB: OLTP와 OLAP을 나누는 이유

- 요약: 같은 주문 500만 건의 매출 쿼리가 PostgreSQL과 DuckDB에서 열 배 넘게 차이 나는 이유를 컬럼 저장, 압축, 벡터화 실행, 건너뛰기로 따라간다. ClickHouse와 BigQuery의 쓰임새, 운영 DB에서 CDC로 옮기는 길도 다룬다.
- 태그: Database, Performance, System Design, PostgreSQL
- 키워드: 컬럼형 저장, OLAP, ClickHouse, DuckDB, 변경 데이터 캡처
- 길이: 485줄
- 소제목: 주문을 받는 질문과 매출을 보는 질문 / 실험에 쓸 주문 500만 건 / 행으로 저장하면 안 쓰는 컬럼도 읽는다 / 같은 컬럼끼리 모이면 잘 눌린다 / 한 번에 값 하나가 아니라 묶음으로 계산한다 / 건너뛸 수 있는 덩어리는 아예 열지 않는다 / ClickHouse 테이블은 정렬 키부터 정한다 / 분석 DB가 잘 못 하는 것 / 클라우드 데이터 웨어하우스와 DuckDB / 운영 DB에서 분석 DB로 옮기는 길 / 컬럼형을 고르기 전에 / 읽는 방향에 맞춰 놓는다 / 면접에서 나올 만한 질문
- 직접 링크 →: db-types-overview, db-type-relational, db-type-time-series, db-type-embedded, db-architecture-by-scale, db-type-newsql
- 키워드 백링크 →: postgres-reporting-sql, db-sharding, db-replication-sharding, db-index-design
- 이 글로 오는 글 ←: caching-strategies, db-architecture-by-scale, db-type-embedded, db-type-newsql, db-type-relational, db-type-time-series, db-type-wide-column, db-types-overview, microservices

#### `db-type-embedded` — 임베디드 DB: SQLite, RocksDB처럼 앱 안에 들어가는 DB

- 요약: 서버 없이 앱 프로세스 안에서 파일을 직접 읽고 쓰는 임베디드 DB를 SQLite로 직접 돌려 본다. 타입과 외래 키의 함정, 쓰기 하나뿐인 규칙과 WAL 모드, 커밋 묶기, RocksDB가 다른 DB 밑에서 하는 일까지 다룬다.
- 태그: Database, SQL, Performance
- 키워드: 임베디드 DB, SQLite, RocksDB, WAL 모드
- 길이: 424줄
- 소제목: 서버 없이 라이브러리로 돈다 / 장바구니를 SQLite에 담아 보기 / 타입을 적어도 검사하지 않는다 / 쓰는 사람은 한 번에 하나 / WAL 모드에서는 변경을 옆 파일에 쌓는다 / 커밋은 모아서 한다 / 연결을 열 때마다 거는 설정 / SQLite가 들어가 있는 곳 / RocksDB는 다른 DB 밑에 들어간다 / 서버 DB와 나눠 맡기 / 서버를 빼고 남는 것 / 면접에서 나올 만한 질문
- 직접 링크 →: db-types-overview, db-type-wide-column, db-type-newsql, db-type-columnar-olap, db-consistency-cap
- 키워드 백링크 →: sql-insert-update-delete, sqld-window-functions, db-index-pitfalls, postgres-architecture
- 이 글로 오는 글 ←: db-type-columnar-olap, db-type-key-value, db-types-overview

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
- 키워드 백링크 →: dns
- 이 글로 오는 글 ←: db-architecture-by-scale, db-consistency-cap, db-replication-sharding, db-sharding, db-type-newsql, db-type-relational, db-type-wide-column, db-types-overview

#### `db-type-newsql` — 분산 SQL(NewSQL): SQL을 지키며 수평 확장

- 요약: 샤드를 넘는 트랜잭션을 DB가 대신 처리하는 Spanner, CockroachDB, TiDB의 구조를 따라간다. 키 범위 구간과 Raft 복제, 분산 트랜잭션과 시계, 재시도와 핫스팟처럼 수평 확장의 대가도 정리한다.
- 태그: Database, Distributed Systems, Scalability, SQL
- 키워드: NewSQL, 분산 SQL, CockroachDB, TrueTime, TiDB
- 길이: 404줄
- 소제목: SQL은 그대로, 저장은 여러 대에 / 행 하나가 키 하나가 된다 / 구간이 커지면 둘로 쪼갠다 / 구간마다 Raft로 과반에 적는다 / 구간 두 개에 걸친 트랜잭션 / 시계가 다르면 순서도 다르다 / 충돌하면 다시 하라고 돌려보낸다 / 멀리 있는 사용자의 데이터는 가까이 둔다 / 호환된다는 말의 범위 / 분산 SQL을 고르기 전에 / 샤딩을 DB 안으로 옮긴 값 / 면접에서 나올 만한 질문
- 직접 링크 →: db-replication-sharding, db-types-overview, db-transaction-isolation, db-consistency-cap, db-type-columnar-olap, db-type-key-value, db-type-wide-column
- 키워드 백링크 →: sql-basics, postgres-getting-started
- 이 글로 오는 글 ←: db-consistency-cap, db-sharding, db-type-columnar-olap, db-type-embedded, db-type-key-value, db-type-relational, db-types-overview

#### `db-type-relational` — 관계형 DB: 왜 여전히 기본값인가

- 요약: 미리 몰랐던 질문에 SQL 한 문장으로 답할 수 있는 이유를 제약 조건, 옵티마이저, WAL, 트랜잭션으로 따라간다. PostgreSQL·MySQL·Oracle·SQL Server의 자리와 한 대를 넘을 때 생기는 한계도 PostgreSQL 16 실행 계획과 함께 본다.
- 태그: Database, SQL, PostgreSQL, Transaction, Performance
- 키워드: 관계형 DB, RDBMS, 해시 조인
- 길이: 481줄
- 소제목: 미리 몰랐던 질문에 답하기 / 표와 키로 나눠 담는 이유 / 잘못된 데이터를 DB가 막는다 / 무엇을 원하는지만 쓰면 방법은 DB가 고른다 / 해시 조인을 손으로 따라가기 / 커밋이 끝났다는 건 로그가 디스크에 닿았다는 뜻 / 표 여러 개를 한 번에 바꾸는 트랜잭션 / PostgreSQL, MySQL, Oracle, SQL Server / 한 대를 넘어서면 어려워지는 것 / 다른 DB를 붙여도 원본은 여기에 둔다 / 기본값인 이유와 그 값 / 면접에서 나올 만한 질문
- 직접 링크 →: db-types-overview, db-modeling-normalization, sql-query-tuning, db-index, db-replication-sharding, db-transaction-isolation, sql-basics, db-type-newsql, db-type-columnar-olap, db-type-graph, db-type-wide-column, mongodb-document-model, caching-strategies, db-architecture-by-scale
- 키워드 백링크 →: db-type-time-series, db-type-key-value, sqld-top-n-hierarchical-pivot, postgres-architecture, postgres-jsonb-search, db-partitioning, postgres-getting-started
- 이 글로 오는 글 ←: db-architecture-by-scale, db-type-columnar-olap, db-type-graph, db-type-key-value, db-type-time-series, db-type-wide-column, db-types-overview, mongodb-document-model, postgres-architecture, postgres-getting-started, postgres-operations, redis-basics, sqld-data-modeling

#### `db-type-time-series` — 시계열 DB: 시간 순서로 쌓이는 데이터

- 요약: 페이지 조회와 서버 지표처럼 끝에만 붙는 데이터를 PostgreSQL 16에 쌓아 보며 BRIN, 시간 단위 파티션, 다운샘플링, 압축을 따라간다. TimescaleDB와 Prometheus가 같은 문제를 어떻게 자동화하는지, 카디널리티 폭발을 어떻게 막는지도 정리한다.
- 태그: Database, PostgreSQL, Performance, System Design
- 키워드: 시계열 DB, TimescaleDB, 다운샘플링, 카디널리티 폭발
- 길이: 598줄
- 소제목: 시간이 키가 되는 데이터 / 측정값 하나를 이루는 조각 / PostgreSQL에 그대로 쌓아 보기 / 시간 순서로 쌓이면 범위만 적어 둬도 된다 / 구간으로 묶어 읽기 / 오래된 데이터는 요약으로 바꾼다 / 기간 통째로 버리기 / 같은 시계열끼리 붙이면 잘 눌린다 / TimescaleDB는 PostgreSQL 안에서 같은 일을 한다 / Prometheus는 최근 몇 시간을 메모리에 둔다 / 레이블 하나가 시계열을 수백만 개로 만든다 / 어떤 시계열 저장소를 고를까 / 시계열 DB를 고르지 않아도 되는 경우 / 끝에 붙이고, 덩어리로 버린다 / 면접에서 나올 만한 질문
- 직접 링크 →: db-types-overview, db-index, db-type-columnar-olap, db-type-relational
- 키워드 백링크 →: db-partitioning, sqld-group-by-having, db-replication-sharding, http-status-codes, db-index-design
- 이 글로 오는 글 ←: db-architecture-by-scale, db-type-columnar-olap, db-type-graph, db-type-relational, db-type-wide-column, db-types-overview

#### `db-type-wide-column` — 와이드 컬럼 DB: Cassandra와 쿼리 먼저 설계하기

- 요약: 쓰기가 서버 한 대를 넘는 조회 이벤트를 Cassandra에 담으며 파티션 키와 클러스터링 키, LSM 트리와 컴팩션, QUORUM 일관성, 툼스톤을 따라간다. 질문마다 테이블을 따로 만드는 이유와 맞지 않는 질문도 정리한다.
- 태그: Database, NoSQL, Distributed Systems, Scalability, Performance
- 키워드: 와이드 컬럼, Cassandra, LSM 트리, SSTable, 툼스톤
- 길이: 410줄
- 소제목: 쓰기가 한 대를 넘을 때 / 테이블보다 쿼리를 먼저 정한다 / 파티션 키는 노드를, 클러스터링 키는 순서를 / 쓰기는 덧붙이기만 한다 / 파일을 합쳐 읽기를 되찾는 컴팩션 / 몇 대가 대답해야 성공인가 / 지우는 것도 쓰기다 / Cassandra가 힘들어하는 질문 / 어디에 쓰이나 / 관계형 DB와 나눠 맡기 / 쓰기를 싸게 하고, 질문을 고정한다 / 면접에서 나올 만한 질문
- 직접 링크 →: db-type-key-value, db-type-columnar-olap, db-replication-sharding, db-consistency-cap, db-type-time-series, db-type-graph
- 키워드 백링크 →: db-sharding, db-type-relational, db-index-pitfalls, db-partitioning, dns
- 이 글로 오는 글 ←: db-architecture-by-scale, db-consistency-cap, db-sharding, db-type-embedded, db-type-graph, db-type-key-value, db-type-newsql, db-type-relational, db-types-overview

#### `db-types-overview` — DB 종류 한눈에: 데이터 모양과 읽는 방식으로 고르기

- 요약: 같은 주문 하나를 관계형, 키-값, 문서, 와이드 컬럼, 그래프, 시계열, 컬럼형으로 저장해 보면 DB마다 빠르게 답하는 질문이 다르다. 접근 패턴으로 종류를 고르는 법과 원본과 사본을 나누는 법을 정리하고 종류별 글로 이어 준다.
- 태그: Database, NoSQL, System Design, Architecture
- 키워드: DB 종류, 데이터 모델 비교, 원본과 사본
- 길이: 262줄
- 소제목: 같은 주문을 여러 모양으로 저장하기 / 무엇으로 찾는지가 먼저다 / 빠른 이유는 저마다 하나씩 / 질문 여섯 개로 서점의 저장소 고르기 / 원본에서 사본으로 흘러가는 길 / 시리즈 지도 / 모양과 질문을 먼저 적는다 / 면접에서 나올 만한 질문
- 직접 링크 →: db-architecture-by-scale, db-consistency-cap, db-type-relational, db-type-key-value, db-type-wide-column, db-type-graph, db-type-time-series, db-type-columnar-olap, db-type-newsql, db-type-embedded, mongodb-document-model, elasticsearch-inverted-index, vector-db, redis-basics, postgres-getting-started
- 키워드 백링크 →: db-index
- 이 글로 오는 글 ←: db-consistency-cap, db-keys-denormalization, db-type-columnar-olap, db-type-embedded, db-type-key-value, db-type-newsql, db-type-relational, db-type-time-series

### Programming › Database › PostgreSQL (`programming/database/postgresql`)

#### `postgres-advanced-sql` — PostgreSQL다운 SQL: RETURNING, ON CONFLICT, MERGE, CTE

- 요약: 넣고 다시 조회하던 왕복과 조회 후 삽입의 경쟁을 RETURNING과 ON CONFLICT로 없애고, MERGE, 쓰기 CTE, CTE 인라인과 MATERIALIZED의 실행 계획 차이를 본다. 중복이 쌓인 테이블에 유니크 인덱스를 붙여 upsert로 바꾸는 과정도 따라간다.
- 태그: Database, PostgreSQL, SQL, Performance
- 키워드: ON CONFLICT, 쓰기 CTE, RETURNING
- 길이: 613줄
- 소제목: 예제로 쓸 작은 서점 / 넣은 행을 바로 돌려받는 RETURNING / 있으면 더하고 없으면 넣기 / 조회하고 넣으면 생기는 틈 / 원본 데이터와 맞춰 놓는 MERGE / WITH로 긴 쿼리를 문단처럼 나누기 / 한 문장으로 행을 옮기는 쓰기 CTE / CTE가 최적화를 막던 시절 / 유니크 인덱스 없이 쌓인 중복을 정리할 때 / 문장 하나로 끝내는 습관 / 면접에서 나올 만한 질문
- 직접 링크 →: postgres-reporting-sql, sql-basics, postgres-roles-security, db-transaction-isolation, sqld-top-n-hierarchical-pivot, postgres-functions-triggers
- 키워드 백링크 →: postgres-data-types, postgres-getting-started
- 이 글로 오는 글 ←: db-architecture-by-scale, postgres-functions-triggers, postgres-reporting-sql, sql-insert-update-delete

#### `postgres-architecture` — PostgreSQL 내부 구조: 프로세스, 공유 메모리, 페이지, WAL, 체크포인트

- 요약: 연결마다 생기는 backend 프로세스, shared_buffers와 OS 페이지 캐시, 8KB 페이지와 튜플 머리말, WAL과 체크포인트, 크래시 복구를 실제로 돌려 보며 따라간다. 램 64GB 서버에 shared_buffers 128MB가 왜 생각만큼 느리지 않은지도 숫자로 본다.
- 태그: Database, PostgreSQL, Performance, Linux
- 키워드: shared_buffers, full_page_writes, 체크포인트, TOAST, LSN
- 길이: 816줄
- 소제목: 연결 하나에 프로세스 하나 / 백그라운드에서 도는 프로세스들 / 함께 쓰는 메모리와 혼자 쓰는 메모리 / 같은 페이지가 두 번 캐시된다 / 데이터 디렉터리 들여다보기 / 8KB 페이지 한 장의 구조 / 페이지에 빈자리를 남기는 fillfactor / 큰 값은 TOAST로 따로 둔다 / 먼저 로그에 쓰고 나중에 파일에 쓴다 / LSN은 WAL 안의 바이트 주소다 / 체크포인트 직후의 첫 수정은 페이지 통째로 / 체크포인트가 하는 일 / 서버가 죽었다 다시 뜰 때 / fsync와 synchronous_commit / 다시 64GB 서버로 / 면접에서 나올 만한 질문
- 직접 링크 →: postgres-getting-started, postgres-jsonb-search, sql-query-tuning, postgres-operations, postgres-mvcc-vacuum, db-index, db-transaction-isolation, db-replication-sharding
- 키워드 백링크 →: postgres-connections-pg-hba, db-architecture-by-scale, db-type-relational
- 이 글로 오는 글 ←: db-keys-denormalization, db-replication-sharding, db-type-embedded, db-type-relational, postgres-data-types, postgres-jsonb-search, postgres-mvcc-vacuum, postgres-operations, sql-query-rewrite

#### `postgres-connections-pg-hba` — PostgreSQL 접속 설정: 접속 URI, .pgpass, pg_hba.conf, 원격 접속

- 요약: 앱 서버에서 붙자 Connection refused, no pg_hba.conf entry, password authentication failed로 바뀌는 에러를 따라가며 접속 URI와 환경 변수, .pgpass, pg_hba.conf의 첫 줄 규칙, 원격 접속을 여는 순서를 정리한다. 접속 자리가 다 찼을 때 pg_stat_activity로 원인을 찾는 법도 본다.
- 태그: Database, PostgreSQL, Linux, Network, Security
- 키워드: pg_hba.conf, listen_addresses, 접속 URI
- 길이: 445줄
- 소제목: 접속 정보는 문자열 하나로 줄 수 있다 / pg_hba.conf는 위에서부터 첫 줄만 본다 / 에러 문구가 끊긴 단계를 알려 준다 / 들어오는 길은 맞는데 자리가 없을 때 / 접속 URI를 직접 나눠 보기 / 접속 하나가 지나는 문 세 개 / 면접에서 나올 만한 질문
- 직접 링크 →: postgres-getting-started, postgres-roles-security
- 키워드 백링크 →: db-architecture-by-scale, postgres-operations, sql-batch-timeout-pool, layer-ip-addressing
- 이 글로 오는 글 ←: postgres-architecture, postgres-getting-started, postgres-roles-security

#### `postgres-data-types` — 타입을 잘 고르면 절반은 끝난다: 숫자, 문자열, 시간, UUID, 배열, enum, range

- 요약: 돈을 float로 저장해 생긴 오차와 9시간 밀린 주문 시각에서 시작해, PostgreSQL 타입을 언제 무엇으로 고르는지 정리한다. identity와 serial, timestamptz, UUID v7, enum, 범위 타입과 배제 제약까지 다룬다.
- 태그: Database, PostgreSQL, SQL, Performance
- 키워드: timestamptz, UUID v7, 배제 제약, identity 컬럼, tstzrange
- 길이: 780줄
- 소제목: 0.1을 열 번 더하면 1이 아니다 / 정수는 범위를 넘으면 에러가 난다 / varchar(n)이 text보다 빠르지 않다 / 오전 9시 주문이 오후 6시로 보인다 / UUID 키는 순서가 있어야 인덱스가 편하다 / 배열은 편하지만 관계를 대신하지 않는다 / 주문 상태를 담는 세 가지 방법 / 같은 방을 두 번 예약하지 못하게 / 도메인, NULL, 기본값, 형 변환 / 타입마다 몇 바이트를 쓰나 / 컬럼을 만들 때 묻는 것들 / 면접에서 나올 만한 질문
- 직접 링크 →: postgres-getting-started, db-index, postgres-jsonb-search, sql-basics
- 키워드 백링크 →: sql-select-where-null, postgres-architecture
- 이 글로 오는 글 ←: postgres-advanced-sql, postgres-functions-triggers, postgres-getting-started, postgres-roles-security, sqld-data-modeling

#### `postgres-functions-triggers` — 함수, 프로시저, 트리거: PL/pgSQL로 DB 안에 로직 두기

- 요약: 서비스 하나가 updated_at을 빠뜨린 일에서 출발해 SQL 함수와 PL/pgSQL, 변동성이 실행 계획에 주는 영향, 예외 처리, 커밋하는 프로시저, 트리거 순서와 감사 로그, 전이 테이블, SECURITY DEFINER의 search_path 함정, LISTEN/NOTIFY까지 실제로 돌려 본다.
- 태그: Database, PostgreSQL, SQL, Security, Performance
- 키워드: PL/pgSQL, SECURITY DEFINER, LISTEN/NOTIFY, 전이 테이블
- 길이: 852줄
- 소제목: updated_at이 멈춰 있는 책 / SQL로 쓰는 함수와 plpgsql로 쓰는 함수 / 함수에 붙이는 약속, 변동성 / 실패를 붙잡는 EXCEPTION 블록 / 트랜잭션을 나눠 커밋하는 프로시저 / 테이블이 바뀔 때 끼어드는 트리거 / 누가 무엇을 바꿨는지 남기는 감사 로그 / 트리거가 실행되는 순서 / 행 20만 개를 고칠 때 트리거가 치르는 값 / 커밋할 때 검사하는 제약 트리거 / 트리거가 만드는 함정 / 만든 사람 권한으로 도는 SECURITY DEFINER / 바뀌었다고 알려 주는 LISTEN과 NOTIFY / 로직을 DB에 둘까 애플리케이션에 둘까 / DB 안에 둔 코드도 코드다 / 면접에서 나올 만한 질문
- 직접 링크 →: postgres-advanced-sql, db-transaction-isolation, postgres-roles-security, db-architecture-by-scale, postgres-jsonb-search
- 키워드 백링크 →: sql-select-where-null, db-index, json-crud-http, postgres-getting-started, sql-basics, db-locking-deadlock, db-index-design, postgres-data-types
- 이 글로 오는 글 ←: postgres-advanced-sql, postgres-jsonb-search, postgres-reporting-sql, postgres-roles-security

#### `postgres-getting-started` — PostgreSQL 설치하고 접속하기: psql, 데이터베이스, 스키마

- 요약: Ubuntu에 설치한 직후 만나는 role does not exist 에러에서 시작해 peer 인증, 클러스터·데이터베이스·스키마 구조, search_path, psql 사용법을 정리한다. 시리즈 내내 쓸 서점 DB도 이 글에서 만든다.
- 태그: Database, PostgreSQL, SQL, Linux
- 키워드: psql, search_path, peer 인증
- 길이: 624줄
- 소제목: PostgreSQL을 고르는 이유 / apt로 설치하고 서버가 떴는지 확인하기 / psql이 내 리눅스 이름을 들고 가는 이유 / 내 이름으로 역할과 데이터베이스 만들기 / 클러스터, 데이터베이스, 스키마, 테이블 / 시리즈에서 계속 쓸 서점 DB / psql에서 매일 쓰는 명령 / 현장에서 relation does not exist를 만나는 순간 / 처음 에러를 다시 읽으면 / 면접에서 나올 만한 질문
- 직접 링크 →: postgres-connections-pg-hba, sql-basics, postgres-data-types, postgres-roles-security
- 키워드 백링크 →: db-type-relational
- 이 글로 오는 글 ←: db-locking-deadlock, db-transaction-isolation, db-type-newsql, db-type-relational, db-types-overview, ports-and-sockets, postgres-advanced-sql, postgres-architecture, postgres-connections-pg-hba, postgres-data-types, postgres-functions-triggers, postgres-operations, postgres-reporting-sql, postgres-roles-security, sql-basics, sql-batch-timeout-pool, sql-insert-update-delete, sql-select-where-null, sqld-null-functions, sqld-single-row-functions

#### `postgres-jsonb-search` — JSONB와 전문 검색: GIN, tsvector, pg_trgm

- 요약: 카테고리마다 다른 상품 속성을 jsonb에 담고 GIN과 식 인덱스로 찾은 뒤, LIKE 검색을 tsvector 전문 검색과 pg_trgm으로 바꾼다. 한국어에서 막히는 지점과 검색 엔진으로 넘어갈 신호도 짚는다.
- 태그: Database, PostgreSQL, SQL, Search, Performance
- 키워드: JSONB, pg_trgm, tsvector, jsonb_path_ops
- 길이: 818줄
- 소제목: 카테고리마다 속성이 다른 상품 / json과 jsonb는 저장 방식이 다르다 / 화살표로 꺼내고 포함 연산자로 찾기 / 일부만 고치는 jsonb_set과 JSON 경로 / 10만 개에서 포함 검색을 빠르게 하는 GIN / jsonb_ops와 jsonb_path_ops / 자주 찾는 키는 식 인덱스로 / jsonb에 넣을 것과 컬럼으로 뺄 것 / LIKE 대신 전문 검색 / 한국어는 어디서 막히나 / 세 글자씩 잘라 비교하는 pg_trgm / 오타도 찾는 similarity / 무엇으로 찾을지 고르기 / 조각을 쪼개 두는 방식이 결국 같다 / 면접에서 나올 만한 질문
- 직접 링크 →: postgres-functions-triggers, db-index, elasticsearch-inverted-index, postgres-architecture
- 키워드 백링크 →: db-index-design
- 이 글로 오는 글 ←: db-architecture-by-scale, db-type-key-value, db-type-relational, postgres-architecture, postgres-data-types, postgres-functions-triggers

#### `postgres-mvcc-vacuum` — VACUUM과 autovacuum: 죽은 튜플, 부풀림, XID 랩어라운드

- 요약: 100만 건 UPDATE 뒤 테이블이 두 배가 되는 이유부터 VACUUM과 VACUUM FULL의 잠금 차이, HOT 업데이트, autovacuum 기준식, VACUUM을 막는 트랜잭션과 슬롯, XID 랩어라운드와 얼리기까지 실제 출력으로 본다.
- 태그: Database, PostgreSQL, Performance, SQL
- 키워드: autovacuum, VACUUM FULL, HOT 업데이트, XID 랩어라운드, visibility map
- 길이: 852줄
- 소제목: UPDATE 한 번이 남기는 것 / 읽기만 했는데 페이지를 고친다 / VACUUM은 자리를 비울 뿐 파일을 줄이지 않는다 / VACUUM FULL은 테이블을 잠근다 / 잠그지 않고 줄이는 방법 / visibility map이 하는 일 / 인덱스를 건드리지 않는 HOT 업데이트 / autovacuum은 언제 도는가 / 테이블마다 기준을 다르게 / VACUUM을 막는 것들 / 얼마나 부풀었는지 재기 / 32비트 트랜잭션 번호가 한 바퀴 돌면 / 얼리기와 랩어라운드 방지 VACUUM / 통계가 낡으면 계획이 틀린다 / 다시 처음 장면으로 / 면접에서 나올 만한 질문
- 직접 링크 →: db-transaction-isolation, postgres-architecture, db-replication-sharding, db-index, sql-query-tuning, postgres-operations
- 키워드 백링크 →: db-index-design
- 이 글로 오는 글 ←: db-architecture-by-scale, db-index, db-index-pitfalls, db-transaction-isolation, postgres-architecture, postgres-operations, sql-batch-timeout-pool

#### `postgres-operations` — PostgreSQL 운영: 설정 튜닝, 연결 풀, 모니터링, 백업과 PITR, 버전 업그레이드

- 요약: 처음 운영에 올리기 전에 정할 설정과 적용 시점, work_mem 예산 계산, 연결 풀, 매일 볼 지표, pg_dump와 pg_basebackup, WAL 보관으로 실수 직전 시점까지 되돌리는 PITR, 메이저 버전 업그레이드 방법을 직접 해 보며 정리한다.
- 태그: Database, PostgreSQL, Performance, Linux
- 키워드: pg_basebackup, 시점 복구, PITR, pg_upgrade, pg_dump
- 길이: 799줄
- 소제목: 설정은 어디에 쓰고 언제 적용되나 / 메모리 설정 정하기 / work_mem은 곱하기로 계산한다 / SSD라면 random_page_cost를 낮춘다 / max_connections를 올리는 대신 연결 풀 / 매일 보는 숫자들 / 느린 쿼리를 로그로 잡기 / 논리 백업과 복원 / 물리 백업과 WAL 보관 / WHERE 없는 DELETE 3초 전으로 / 백업은 복원해 봐야 백업이다 / 백업 도구와 PostgreSQL 17의 증분 백업 / 메이저 버전 올리기 / 마이너 업데이트 / 관리형 서비스를 쓴다면 / 운영에 올리기 전 점검 / 면접에서 나올 만한 질문
- 직접 링크 →: postgres-architecture, postgres-mvcc-vacuum, sql-query-tuning, db-transaction-isolation, db-replication-sharding
- 키워드 백링크 →: db-index, db-architecture-by-scale, db-type-relational, postgres-getting-started, sql-query-rewrite, sql-basics
- 이 글로 오는 글 ←: db-architecture-by-scale, docker-network-volume, postgres-architecture, postgres-connections-pg-hba, postgres-mvcc-vacuum, sql-insert-update-delete

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
- 키워드 백링크 →: postgres-data-types, db-architecture-by-scale, sql-insert-update-delete, db-index-design, sql-batch-timeout-pool, layer-ip-addressing, dns
- 이 글로 오는 글 ←: postgres-advanced-sql, postgres-connections-pg-hba, postgres-functions-triggers, postgres-getting-started

### Programming › Database › Redis (`programming/database/redis`)

#### `redis-basics` — Redis는 왜 빠른가: 메모리, 단일 스레드, 자료구조

- 요약: Redis가 빠른 이유와 느린 명령 하나가 서버 전체를 멈추는 이유는 같은 곳에 있다. 메모리와 단일 스레드 이벤트 루프 구조를 보고, Ubuntu에 설치해 자료구조별 명령을 직접 실행해 본다.
- 태그: Redis, Database, NoSQL, Cache, Performance
- 키워드: Redis, Memcached, I/O 다중화, 분산 락
- 길이: 881줄
- 소제목: 80ms와 1ms 사이에 있는 것 / 명령은 한 줄로 서서 하나씩 실행된다 / 느린 명령 하나가 모두를 세운다 / Redis 6의 I/O 스레드는 무엇을 나눠 맡나 / Ubuntu에 설치하고 접속하기 / 밖에서 접속하게 열 때 막아야 할 것 / 키 이름은 콜론으로 나눈다 / 문자열: 값, 카운터, 락 / 해시: 객체 하나를 필드로 나눠 담기 / 리스트: 들어온 순서대로 꺼내는 큐 / 셋과 정렬된 셋: 중복 없는 모음과 순위표 / 놓치지 않는 스트림, 흘려보내는 채널 / 만료 시간을 다루는 명령 / KEYS 대신 SCAN / 여러 명령을 묶는 세 가지 방법 / 응용 로그에 Redis 타임아웃이 찍히면 / Memcached와 무엇이 다른가 / 주 저장소로 쓰기 전에 따져 볼 것 / 라이선스가 바뀐 이야기 / 빠른 이유와 멈추는 이유는 같은 곳에 있다 / 면접에서 나올 만한 질문
- 직접 링크 →: redis-memory-eviction, network-troubleshooting-by-layer, event-loop, redis-persistence-ha, caching-strategies
- 키워드 백링크 →: redis-cluster, db-type-relational, db-transaction-isolation, dns
- 이 글로 오는 글 ←: caching-strategies, cookie-session-login, db-architecture-by-scale, db-consistency-cap, db-sharding, db-type-key-value, db-types-overview, docker-compose, docker-network-volume, gateway, http-caching-cdn, nginx-reverse-proxy, ports-and-sockets, realtime-communication, redis-cluster, redis-memory-eviction, redis-persistence-ha, redis-replication-sentinel, rest-api-design, tcp-reliability-congestion

#### `redis-cluster` — Redis Cluster: 해시 슬롯, MOVED와 ASK

- 요약: 데이터가 한 서버 메모리를 넘어서는 순간에서 시작해 키가 16384개 슬롯으로 나뉘는 규칙과 해시 태그, MOVED와 ASK, 구성 고르는 기준을 보고, 레플리카 없는 클러스터의 노드 하나를 죽여 CLUSTERDOWN이 나는 과정을 확인한다.
- 태그: Redis, Database, Distributed Systems
- 키워드: Redis Cluster, 해시 슬롯, MOVED
- 길이: 358줄
- 소제목: Cluster는 키를 16384개 슬롯으로 나눈다 / MOVED와 ASK / 단일 서버부터 관리형 서비스까지 / 현장에서 노드 하나가 죽었을 때 / 데이터를 나누는 대가 / 면접에서 나올 만한 질문
- 직접 링크 →: redis-replication-sentinel, redis-basics
- 이 글로 오는 글 ←: caching-strategies, db-sharding, redis-basics, redis-persistence-ha, redis-replication-sentinel

#### `redis-memory-eviction` — Redis 메모리가 가득 차면: maxmemory와 축출 정책

- 요약: maxmemory를 정하지 않으면 OOM 킬러에게 죽고, 기본 noeviction이면 가득 찬 순간 쓰기가 실패한다. INFO memory를 읽는 법부터 축출 정책 고르기, 근사 LRU와 LFU의 동작, 만료와 단편화, 리눅스 설정과 여유 메모리 계산까지 정리한다.
- 태그: Redis, Database, Cache, Performance, Linux
- 키워드: maxmemory, 축출 정책, allkeys-lru, 메모리 단편화
- 길이: 752줄
- 소제목: 키 하나가 실제로 차지하는 크기 / 작은 컬렉션은 압축된 모양으로 산다 / INFO memory를 한 줄씩 읽기 / 어떤 키가 메모리를 먹고 있나 / maxmemory를 정하지 않으면 생기는 일 / 가득 찼을 때 지울 키를 고르는 정책 / LRU를 정확하게 하지 않는 이유 / LFU 카운터는 로그로 오르고 시간이 지나면 내려간다 / 만료된 키가 바로 사라지지 않는 이유 / 단편화와 activedefrag / 리눅스 쪽에서 챙길 설정 / 서버 메모리의 몇 퍼센트를 maxmemory로 줄까 / 가득 차기 전에 정해 둘 것 / 면접에서 나올 만한 질문
- 직접 링크 →: redis-basics, caching-strategies, redis-persistence-ha
- 키워드 백링크 →: layer-mtu-fragmentation, dns
- 이 글로 오는 글 ←: caching-strategies, db-type-key-value, js-memory-leak, redis-basics, redis-persistence-ha, redis-replication-sentinel

#### `redis-persistence-ha` — Redis 영속성: RDB, AOF, 백업과 복원

- 요약: 재부팅 한 번에 세션이 사라진 서버에서 시작해 RDB와 AOF가 각각 무엇을 지키고 무엇을 잃는지, fork와 copy-on-write, AOF 재작성, 둘을 함께 켤 때를 직접 돌려 보고, 백업 파일로 정말 복원되는지 확인하는 법까지 정리한다.
- 태그: Redis, Database, Linux
- 키워드: RDB 스냅샷, AOF, appendfsync
- 길이: 415줄
- 소제목: 재시작하면 무엇을 읽어 오나 / RDB는 특정 순간의 사진이다 / fork와 copy-on-write / AOF는 쓰기 명령을 한 줄씩 적는다 / AOF가 커지면 다시 쓴다 / RDB와 AOF를 함께 켜면 / 백업은 복원해 봐야 백업이다 / 무엇을 잃어도 되는지부터 정한다 / 면접에서 나올 만한 질문
- 직접 링크 →: redis-replication-sentinel, redis-cluster, redis-basics, redis-memory-eviction
- 키워드 백링크 →: dns
- 이 글로 오는 글 ←: caching-strategies, db-type-key-value, docker-compose, redis-basics, redis-memory-eviction, redis-replication-sentinel

#### `redis-replication-sentinel` — Redis 복제와 Sentinel: 비동기 복제와 자동 장애 조치

- 요약: 디스크는 살아 있는데 서버가 꺼져 40분 동안 로그인이 안 된 장면에서 시작해 전체·부분 동기화, 레플리카 읽기와 WAIT, Sentinel의 쿼럼과 리더 선출을 따라가고, backlog가 작아 전체 동기화가 반복되는 상황을 직접 재현한다.
- 태그: Redis, Database, Distributed Systems
- 키워드: Redis Sentinel, 부분 동기화, repl-backlog-size
- 길이: 345줄
- 소제목: 복제는 비동기다 / 레플리카에서 읽으면 생기는 일 / Sentinel이 장애를 판단하고 넘기는 과정 / 현장에서 레플리카가 전체 동기화를 반복하는 순간 / 얼마나 멈춰도 되는지부터 정한다 / 면접에서 나올 만한 질문
- 직접 링크 →: redis-persistence-ha, redis-basics, redis-cluster, redis-memory-eviction
- 이 글로 오는 글 ←: db-consistency-cap, redis-cluster, redis-persistence-ha

### Programming › Database › SQL (`programming/database/sql`)

#### `db-index` — 인덱스: 책 뒤의 찾아보기

- 요약: 주문 100만 건에서 느려진 조회를 PostgreSQL 16의 실행 계획으로 따라가며 B-tree 인덱스가 어떻게 찾는지, Index Scan·Bitmap Heap Scan·Index Only Scan이 언제 갈리는지, MySQL InnoDB의 클러스터드 인덱스는 무엇이 다른지 본다. 현장에서 인덱스가 필요한 테이블을 찾는 순서도 정리한다.
- 태그: Database, SQL, PostgreSQL, Index, Performance
- 키워드: Index Only Scan, B-tree 인덱스, Bitmap Heap Scan, 클러스터드 인덱스
- 길이: 615줄
- 소제목: 실험에 쓸 작은 쇼핑몰 / 100만 줄을 처음부터 끝까지 읽는 계획 / 찾아보기를 하나 만들면 / B-tree는 세 번 만에 잎에 닿는다 / 같은 인덱스를 읽는 네 가지 방법 / MySQL 8은 표 자체가 인덱스다 / 현장에서 인덱스가 필요한 곳을 찾는 순서 / 찾아보기는 정렬된 사본이다 / 면접에서 나올 만한 질문
- 직접 링크 →: db-index-pitfalls, sql-query-tuning, db-index-design
- 키워드 백링크 →: postgres-mvcc-vacuum, db-sharding, db-transaction-isolation, sql-basics
- 이 글로 오는 글 ←: db-architecture-by-scale, db-index-design, db-index-pitfalls, db-keys-denormalization, db-modeling-normalization, db-replication-sharding, db-sharding, db-type-graph, db-type-relational, db-type-time-series, db-types-overview, elasticsearch-inverted-index, postgres-architecture, postgres-data-types, postgres-functions-triggers, postgres-jsonb-search, postgres-mvcc-vacuum, postgres-operations, postgres-reporting-sql, sql-basics, sql-batch-timeout-pool, sql-query-rewrite, sql-query-tuning, sql-select-where-null, sqld-correlated-subquery, sqld-data-modeling, sqld-top-n-hierarchical-pivot, sqld-type-conversion

#### `db-index-design` — 인덱스 고르기: 복합, 커버링, 부분, 식 인덱스와 GIN·BRIN

- 요약: 쿼리 모양에 맞는 인덱스를 고른다. 복합 인덱스의 컬럼 순서, INCLUDE로 힙을 건너뛰는 커버링 인덱스, 일부 행만 담는 부분 인덱스, lower(email) 식 인덱스, GIN과 BRIN을 실행 계획 전후로 비교하고, 겹치는 인덱스와 값 분포를 확인하는 리뷰 순서도 정리한다.
- 태그: Database, SQL, PostgreSQL, Index, Performance
- 키워드: 복합 인덱스, 커버링 인덱스, 부분 인덱스, 식 인덱스, BRIN
- 길이: 593줄
- 소제목: 앞 글의 주문 100만 건 그대로 / 여러 컬럼 인덱스는 순서가 결과를 바꾼다 / 표까지 가지 않는 커버링 인덱스 / 일부 줄만 담는 부분 인덱스 / 함수를 씌운 컬럼과 유니크 인덱스 / B-tree가 아닌 인덱스들 / 인덱스를 하나 더 만들자는 리뷰를 받았을 때 / 쿼리 모양에 맞춰 고른다 / 면접에서 나올 만한 질문
- 직접 링크 →: db-index, db-index-pitfalls
- 이 글로 오는 글 ←: db-index, db-index-pitfalls, db-keys-denormalization, db-modeling-normalization, db-type-columnar-olap, db-type-time-series, microservices, mongodb-document-model, postgres-functions-triggers, postgres-jsonb-search, postgres-mvcc-vacuum, postgres-roles-security, rest-api-design, sql-query-rewrite, vector-db

#### `db-index-pitfalls` — 인덱스가 안 타는 이유와 인덱스의 대가

- 요약: 인덱스가 있는데도 Seq Scan이 나오는 여섯 가지 경우(함수, 형 변환, 앞이 열린 LIKE, 너무 많은 결과, OR, 낡은 통계)를 실행 계획으로 확인한다. 쓰기 증폭과 HOT 업데이트, 안 쓰는 인덱스 찾기, 운영 중 CREATE INDEX CONCURRENTLY와 INVALID 인덱스 처리도 다룬다.
- 태그: Database, SQL, PostgreSQL, Index, Performance
- 키워드: CREATE INDEX CONCURRENTLY, 쓰기 증폭, INVALID 인덱스
- 길이: 467줄
- 소제목: 주문 100만 건과 인덱스 셋 / 인덱스가 있는데 안 타는 경우 / 인덱스는 쓰기를 느리게 한다 / 운영 중인 테이블에 인덱스 추가하기 / 인덱스를 지우고 만드는 것도 배포다 / 면접에서 나올 만한 질문
- 직접 링크 →: db-index, db-index-design, sql-query-tuning
- 키워드 백링크 →: postgres-mvcc-vacuum, db-replication-sharding, sql-basics
- 이 글로 오는 글 ←: db-index, db-index-design, db-type-embedded, db-type-wide-column, sql-basics

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
- 직접 링크 →: db-transaction-isolation, microservices
- 키워드 백링크 →: sql-basics, postgres-getting-started
- 이 글로 오는 글 ←: db-transaction-isolation, http-status-codes, mvc-pattern, postgres-functions-triggers, rest-api-design

#### `db-modeling-normalization` — 테이블을 어떻게 나누나: 정규화

- 요약: 전화번호 하나 바꾸는 데 300줄을 고쳐야 하는 테이블에서 시작해, 함수 종속을 기준으로 1NF부터 BCNF까지 나눠 보고, 나눈 테이블을 제약 조건으로 지키는 법을 실제 SQL로 따라간다.
- 태그: Database, SQL, PostgreSQL, SQLD
- 키워드: 정규화, 함수 종속, BCNF
- 길이: 683줄
- 소제목: 한 테이블에 다 넣었을 때 생기는 일 / 무엇이 무엇을 정하나 (함수 종속) / 행을 하나로 집어내는 열 (키) / 제1정규형: 칸 하나에 값 하나 / 제2정규형: 키의 일부에만 기대는 열 떼어 내기 / 제3정규형: 키가 아닌 열을 거쳐 정해지는 열 / 제약 조건이 대신 막아 주는 것 / BCNF: 결정자가 모두 후보키여야 한다 / 제4정규형과 제5정규형은 짧게 / SQLD에서 묻는 정규화 / 무엇이 무엇을 정하나만 따라가면 된다 / 면접에서 나올 만한 질문
- 직접 링크 →: db-keys-denormalization, db-index, db-transaction-isolation
- 키워드 백링크 →: json-crud-http, db-index-design, sqld-entity-attribute-relationship
- 이 글로 오는 글 ←: ab-testing, db-architecture-by-scale, db-keys-denormalization, db-type-relational, elasticsearch-inverted-index, git-ignore-config, git-large-files-secrets, http-message, mongodb-document-model, nginx-basics, sqld-data-modeling, sqld-entity-attribute-relationship, vector-db

#### `db-transaction-isolation` — 트랜잭션과 격리 수준: 동시에 고치면 생기는 일

- 요약: 마지막 재고 1개를 두 사람이 동시에 사서 재고가 -1이 되는 장면을 두 세션으로 재현하고, ACID와 다섯 가지 동시성 현상, 격리 수준이 실제로 무엇을 막는지, MVCC가 버전을 어떻게 고르는지를 PostgreSQL과 MySQL을 나란히 놓고 본다.
- 태그: Database, SQL, PostgreSQL, SQLD, Transaction, Concurrency
- 키워드: 격리 수준, MVCC, 갱신 손실, 쓰기 왜곡
- 길이: 679줄
- 소제목: 마지막 1개를 둘이 샀다 / 트랜잭션이 약속하는 네 가지 / BEGIN, COMMIT, ROLLBACK, SAVEPOINT / 동시에 고치면 생기는 다섯 가지 일 / 격리 수준 네 단계와 실제 동작 / 버전을 남겨서 읽기와 쓰기를 떼어 놓기 (MVCC) / MySQL InnoDB는 어떻게 다른가 / SQLD에서 묻는 트랜잭션과 격리 수준 / 격리 수준은 무엇을 허용하느냐의 문제다 / 면접에서 나올 만한 질문
- 직접 링크 →: db-locking-deadlock
- 키워드 백링크 →: postgres-mvcc-vacuum, sql-basics, postgres-getting-started
- 이 글로 오는 글 ←: db-architecture-by-scale, db-consistency-cap, db-index, db-keys-denormalization, db-locking-deadlock, db-modeling-normalization, db-type-newsql, db-type-relational, postgres-advanced-sql, postgres-architecture, postgres-functions-triggers, postgres-mvcc-vacuum, postgres-operations, redis-basics, sql-insert-update-delete, sql-query-rewrite

#### `sql-basics` — SQL 기본 명령어: 테이블과 제약 조건 만들기

- 요약: 빈 DB에서 테이블 세 개를 만들고 타입과 제약 조건으로 들어올 값을 정한 뒤, ALTER로 고치고 GRANT로 권한을 나눈다. 운영에서 SQLSTATE로 에러를 구분하고, 외래 키 인덱스를 점검하고, NOT VALID로 제약을 거는 법까지 실제 출력으로 본다.
- 태그: Database, SQL, PostgreSQL
- 키워드: DDL, 참조 무결성, SQLSTATE
- 길이: 665줄
- 소제목: 명령어는 네 묶음으로 나뉜다 / 빈 DB에 테이블 세 개 만들기 / 칸마다 담을 값의 종류 정하기 / 잘못된 값을 DB가 막아 주는 제약 조건 / 만든 테이블 고치기 (ALTER와 RENAME) / 권한 주고 뺏기 (GRANT와 REVOKE) / 현장에서 테이블 정의를 다시 꺼내 보는 순간 / 테이블 모양이 곧 규칙이다 / 면접에서 나올 만한 질문
- 직접 링크 →: sql-select-where-null, sql-insert-update-delete, db-index, db-index-pitfalls, sqld-data-modeling
- 키워드 백링크 →: postgres-getting-started
- 이 글로 오는 글 ←: db-architecture-by-scale, db-index, db-index-pitfalls, db-locking-deadlock, db-transaction-isolation, db-type-newsql, db-type-relational, postgres-advanced-sql, postgres-data-types, postgres-functions-triggers, postgres-getting-started, postgres-operations, sql-insert-update-delete, sql-select-where-null, sqld-data-modeling, sqld-entity-attribute-relationship

#### `sql-batch-timeout-pool` — 쿼리 밖의 비용: 쓰기 묶기, 시간 한도, 커넥션 풀

- 요약: 쿼리 하나는 빨라도 커밋 수, 문장 수, 트랜잭션 길이, 연결 수에서 시간이 샌다. 배치 INSERT와 COPY, 큰 DELETE 나누기, VACUUM을 막는 열린 트랜잭션, statement_timeout과 lock_timeout, PgBouncer transaction 모드의 주의점을 실제 출력으로 본다.
- 태그: Database, SQL, PostgreSQL, Performance
- 키워드: statement_timeout, 배치 INSERT, 커넥션 풀
- 길이: 265줄
- 소제목: 한 줄씩 넣지 말고 묶어서 넣는다 / 오래 열린 트랜잭션은 청소를 막는다 / 끝나지 않는 쿼리에 한도를 건다 / 연결은 풀로 나눠 쓴다 / 쿼리 바깥에서 새는 시간 / 면접에서 나올 만한 질문
- 직접 링크 →: sql-query-tuning, sql-query-rewrite, db-index, sql-insert-update-delete
- 키워드 백링크 →: postgres-mvcc-vacuum, db-architecture-by-scale, postgres-getting-started
- 이 글로 오는 글 ←: db-architecture-by-scale, db-replication-sharding, dns, iptables-nat, ports-and-sockets, postgres-connections-pg-hba, postgres-roles-security, resilience-patterns, sql-query-rewrite, sql-query-tuning, tcp-connection-lifecycle

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
- 직접 링크 →: sql-query-tuning, db-index, sql-batch-timeout-pool
- 키워드 백링크 →: rest-api-design, db-index-design, postgres-architecture, db-transaction-isolation
- 이 글로 오는 글 ←: big-o-notation, postgres-operations, postgres-reporting-sql, rest-api-design, sql-batch-timeout-pool, sql-query-tuning

#### `sql-query-tuning` — 느린 쿼리 찾기: pg_stat_statements와 실행 계획 읽기

- 요약: pg_stat_statements와 느린 쿼리 로그로 범인을 찾고, EXPLAIN (ANALYZE, BUFFERS)를 안쪽부터 읽으며 틀린 예상 행 수가 조인 방법을 어떻게 틀어지게 하는지 본다. Nested Loop, Hash Join, Merge Join이 언제 나오는지도 실제 계획으로 비교한다.
- 태그: Database, SQL, PostgreSQL, Performance
- 키워드: EXPLAIN ANALYZE, pg_stat_statements, Hash Join, Nested Loop
- 길이: 364줄
- 소제목: 어떤 쿼리가 시간을 먹는지부터 찾는다 / 느린 쿼리를 로그에 남긴다 / 실행 계획은 안쪽부터 읽는다 / 조인을 처리하는 세 가지 방법 / 찾았으면 고칠 차례 / 면접에서 나올 만한 질문
- 직접 링크 →: sql-query-rewrite, sql-batch-timeout-pool, db-index
- 이 글로 오는 글 ←: db-index, db-index-pitfalls, db-replication-sharding, db-type-relational, postgres-architecture, postgres-mvcc-vacuum, postgres-operations, sql-batch-timeout-pool, sql-query-rewrite, sql-select-where-null, sqld-joins

#### `sql-select-where-null` — SELECT와 NULL: 원하는 행만 골라 읽기

- 요약: SELECT의 처리 순서, WHERE와 AND·OR 우선순위, NULL과 3값 논리, NOT IN 함정, 정렬과 DISTINCT와 LIMIT를 실제 출력으로 따라간다. 리포트 숫자가 안 맞을 때 NULL부터 보는 방법도 정리한다.
- 태그: Database, SQL, PostgreSQL
- 키워드: 3값 논리, IS DISTINCT FROM, NULLS FIRST
- 길이: 624줄
- 소제목: 회원 넷, 상품 셋, 주문 다섯 / SELECT 한 문장을 조각으로 읽기 / 원하는 행만 고르는 WHERE / NULL은 값이 아니라 모른다는 표시 / 정렬하고, 겹친 것 빼고, 잘라서 보기 / 리포트 숫자가 안 맞을 때 먼저 보는 것 / 모름을 모름으로 다루기 / 면접에서 나올 만한 질문
- 직접 링크 →: sql-basics, sql-query-tuning, sql-insert-update-delete
- 키워드 백링크 →: db-index, sqld-group-by-having, postgres-getting-started
- 이 글로 오는 글 ←: postgres-data-types, postgres-functions-triggers, sql-basics, sql-insert-update-delete, sqld-null-functions, sqld-subquery-set-operators

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

### Programming › Frontend (`programming/frontend`)

#### `html-form-http` — HTML form은 어떻게 HTTP 요청이 되나

- 요약: 브라우저가 폼 입력값을 골라 urlencoded 쿼리나 multipart 본문으로 바꾸는 규칙을 따라간다. FormData와 fetch, PRG, CSRF 토큰, 서버 검증까지 폼을 보낸 뒤 생기는 문제도 함께 본다.
- 태그: HTTP, Browser, Frontend, Encoding, Security
- 키워드: HTML 폼, FormData, application/x-www-form-urlencoded, URLSearchParams
- 길이: 548줄
- 소제목: form 태그의 속성 세 개가 요청을 정한다 / 입력값이 쿼리 문자열이 되기까지 / 공백은 더하기, 나머지는 퍼센트로 / 주소에 실리면 남는다 / POST 본문의 세 가지 모양 / 파일을 올릴 때 챙길 것 / fetch로 보낼 때는 FormData를 쓴다 / 폼은 GET과 POST만 보낸다 / 새로고침하면 두 번 주문된다 / 다른 사이트도 내 서버로 폼을 보낼 수 있다 / 브라우저 검증은 친절일 뿐이다 / 자바스크립트가 없어도 폼은 동작한다 / 보낸 값과 받은 값이 다를 때 / 다시 검색창과 로그인 폼으로 / 면접에서 나올 만한 질문
- 직접 링크 →: http-methods, http-message, browser-fetch, http-status-codes, cors, cookie-session-login, nginx-reverse-proxy
- 키워드 백링크 →: rest-api-design, base64, http-versions, rendering-strategies, client-data-cache, resilience-patterns, what-happens-google-com
- 이 글로 오는 글 ←: browser-fetch, cookie-session-login, http-message, http-status-codes, json-crud-http

### Programming › Frontend › Architecture (`programming/frontend/architecture`)

#### `ab-testing` — A/B 테스트와 피처 플래그

- 요약: 사용자를 해시로 일관되게 나누고, 화면을 본 사람만 세고, 정해 둔 표본을 모은 뒤 판정해야 숫자 차이를 변경의 효과라고 말할 수 있다. 플래그 종류, 깜빡임, 노출 로깅, 표본 크기와 엿보기, SRM, 실험이 싸지는 화면 설계까지 정리했다.
- 태그: coupang, Experimentation, Feature Flag, Frontend, Architecture · 회사: coupang
- 키워드: A/B 테스트, 피처 플래그, 킬 스위치, 표본 비율 불일치
- 길이: 468줄
- 소제목: 지난주와 비교하면 안 되는 이유 / 배포와 공개를 떼어 놓는 스위치 / 같은 사람에게는 항상 같은 쪽을 / 직접 버킷을 계산해 보기 / 어디서 나누느냐에 따라 화면이 깜빡인다 / 보여 준 사람만 센다 / 무엇이 나아져야 이긴 건가 / 몇 명이 필요한가 / 중간에 들여다보면 거짓 승리가 늘어난다 / 처음에만 반짝하는 효과 / 반반으로 나눴는데 반반이 아니다 / 실험이 싸지려면 화면이 설정을 받아야 한다 / 끝난 플래그는 빚이 된다 / 실험 숫자가 이상할 때 먼저 보는 곳 / 다시 4.8%와 5.3%로 / 면접에서 나올 만한 질문
- 직접 링크 →: http-caching-cdn
- 키워드 백링크 →: rendering-strategies, db-modeling-normalization, core-web-vitals
- 이 글로 오는 글 ←: core-web-vitals, git-branching-strategy

#### `micro-frontends` — 마이크로 프런트엔드: 큰 웹 앱을 팀별로 나눠 배포하기

- 요약: 여러 팀이 하나의 웹 앱에 묶여 서로의 배포를 기다리는 문제를 셸과 리모트 구조로 푸는 방법을 정리했다. 합치는 방식, React 싱글턴과 버전 스큐, 독립 배포와 롤백, 그리고 모노레포로 충분한 경우까지 다룬다.
- 태그: coupang, Architecture, Frontend, React, Micro Frontends · 회사: coupang
- 키워드: 마이크로 프런트엔드, 마이크로 프론트엔드, Module Federation, 멀티 존
- 길이: 403줄
- 소제목: 같은 배포 열차에 모두 타고 있다 / 껍데기 앱과 조각 앱 / 언제 합치느냐가 갈림길이다 / 런타임에 리모트를 불러오는 과정 / 설정 한 덩어리 뜯어보기 / React가 두 개 뜨면 생기는 일 / 주소창은 셸이 쥔다 / 버튼이 팀마다 달라 보이지 않게 / 앱끼리 말을 거는 방법 / 따로 배포하면 따로 되돌린다 / 배포 다음 날 결제 영역만 비어 있을 때 / 쪼갠 만큼 무거워진다 / 대부분은 모노레포로 충분하다 / 다시 목요일 배포로 / 면접에서 나올 만한 질문
- 키워드 백링크 →: microservices, cors

### Programming › Frontend › JavaScript (`programming/frontend/javascript`)

#### `browser-fetch` — 브라우저에서 HTTP 요청 보내기: fetch 제대로 쓰기

- 요약: fetch가 500에서도 성공하는 이유와 res.ok 확인, 한 번만 읽히는 본문, credentials·keepalive 같은 옵션을 짚는다. AbortController로 늦게 온 응답과 타임아웃을 다루고, XHR·axios와 무엇이 다른지 비교한다.
- 태그: HTTP, JavaScript, Browser, Frontend
- 키워드: AbortController, AbortSignal, sendBeacon, keepalive
- 길이: 553줄
- 소제목: 500이 와도 fetch는 성공한다 / 본문은 한 번만 읽힌다 / fetch 옵션 하나씩 / 페이지를 닫을 때 보내는 요청 / 늦게 온 응답이 화면을 덮는다 / 지난 요청은 취소한다 / 실패하면 다시 보낼까 / 에러를 한 곳에서 다룬다 / XHR, fetch, axios / 같은 요청을 두 번 보내지 않으려면 / 에러 수집기에 Failed to fetch만 쌓일 때 / 다시 처음 코드로 / 면접에서 나올 만한 질문
- 직접 링크 →: http-status-codes, cors, cookie-session-login, http-methods, resilience-patterns, rest-api-design, http-caching-cdn, network-troubleshooting-by-layer
- 키워드 백링크 →: html-form-http, client-data-cache, json-crud-http, frontend-browser-cache, dns
- 이 글로 오는 글 ←: client-data-cache, html-form-http, http-versions, json-crud-http, nginx-reverse-proxy, tcp-connection-lifecycle

#### `event-loop` — 자바스크립트 이벤트 루프: 브라우저와 Node.js

- 요약: 콜 스택, 태스크 큐, 마이크로태스크 큐가 어떤 순서로 돌고 렌더링이 어디에 끼어드는지 출력 순서 퍼즐로 따라간다. 긴 작업이 INP를 망치는 이유와 작업을 쪼개는 방법, Node.js의 단계와 process.nextTick까지 다룬다.
- 태그: coupang, JavaScript, Browser, Performance, Node.js · 회사: coupang
- 키워드: 이벤트 루프, 마이크로태스크, 태스크 큐, process.nextTick, setImmediate
- 길이: 567줄
- 소제목: 콜 스택은 하나뿐이다 / 기다리는 일은 브라우저가 대신 한다 / 출력 순서 퍼즐 풀기 / 마이크로태스크는 끝까지 비운다 / await 뒤는 then 안으로 들어간다 / 화면은 태스크 사이에서만 그려진다 / 50ms가 넘으면 긴 작업이다 / 긴 작업을 쪼개는 방법들 / 이벤트 루프를 직접 흉내 내 보기 / Node.js는 단계를 돈다 / nextTick은 Promise보다 먼저다 / 누가 메인 스레드를 붙잡았는지 운영에서 찾기 / 다시 멈춘 스피너로 / 면접에서 나올 만한 질문
- 직접 링크 →: core-web-vitals
- 키워드 백링크 →: osi-in-practice
- 이 글로 오는 글 ←: big-o-notation, core-web-vitals, js-memory-leak, nginx-basics, redis-basics

#### `js-memory-leak` — 자바스크립트 메모리 누수 찾기

- 요약: GC가 무엇을 쓰레기로 보는지에서 출발해 SPA에서 참조가 새는 자리와 WeakMap·WeakRef의 쓰임을 정리한다. 크롬 힙 스냅샷 비교와 Retainers 경로로 범인을 찾는 순서, Node.js 서버의 메모리 문제를 다루는 방법도 담았다.
- 태그: coupang, JavaScript, Browser, Performance, Node.js · 회사: coupang
- 키워드: 메모리 누수, 힙 스냅샷, 가비지 컬렉션, WeakMap, detached DOM
- 길이: 436줄
- 소제목: 쓰레기의 기준은 닿을 수 있느냐다 / 루트에서 출발해 표시하고 치운다 / 대부분의 객체는 금방 죽는다 / 누수는 잊어버린 참조다 / 페이지를 떠나도 남는 리스너 / 문서에서 떨어진 DOM / 클로저는 생각보다 많이 잡는다 / 끝없이 자라는 캐시 / 약하게 잡아 두는 방법 / 크롬 개발자 도구로 범인 찾기 / Node.js 서버가 점점 무거워질 때 / 다시 느려지는 탭으로 / 면접에서 나올 만한 질문
- 키워드 백링크 →: client-data-cache, redis-memory-eviction, event-loop, layer-mtu-fragmentation, dns
- 이 글로 오는 글 ←: client-data-cache, microservices

### Programming › Frontend › Performance (`programming/frontend/performance`)

#### `client-data-cache` — 화면 데이터 캐시: TanStack Query와 SWR로 같은 요청 줄이기

- 요약: 같은 API를 여러 컴포넌트가 부를 때 요청을 하나로 합치고, staleTime과 gcTime으로 언제 다시 받고 언제 버릴지 정하는 방법을 다룬다. 뮤테이션 뒤 캐시 맞추기, 낙관적 업데이트, 흔한 실수와 LRU 메모이제이션까지 이어 간다.
- 태그: Cache, React, Performance, Frontend
- 키워드: TanStack Query, staleTime, gcTime, 낙관적 업데이트, 서버 상태
- 길이: 579줄
- 소제목: 서버에서 빌려 온 상태 / 쿼리 키 하나가 캐시 한 칸이다 / 신선한 시간과 남겨 두는 시간 / 언제 다시 받아 오나 / 옛 데이터를 먼저 보여 주고 뒤에서 바꾼다 / 바꾼 뒤에는 캐시도 바꾼다 / 누르자마자 바뀌는 화면 / 들어가기 전에 미리 받기 / 처음 값을 미리 넣어 두기 / 페이지가 여러 장인 목록 / 서버가 받아 둔 데이터를 넘겨받기 / SWR로 쓰면 / 이 블로그에서 쿼리를 두는 자리 / 캐시가 틀린 값을 보여 주는 경우 / 계산 결과를 기억하기 / 처음 세 컴포넌트로 돌아가서 / 면접에서 나올 만한 질문
- 직접 링크 →: frontend-browser-cache, browser-fetch, react-rerender, rest-api-design, rendering-strategies, js-memory-leak
- 키워드 백링크 →: http-caching-cdn
- 이 글로 오는 글 ←: browser-fetch, frontend-browser-cache, html-form-http, http-methods, http-status-codes, js-memory-leak, json-crud-http, microservices, mvc-pattern, react-rerender, resilience-patterns

#### `code-splitting` — 번들 쪼개기: 코드 스플리팅과 트리 셰이킹

- 요약: 큰 번들이 모바일에서 왜 다운로드보다 실행에서 더 비싼지 보고, 동적 import로 청크를 나누는 법과 트리 셰이킹이 안 쓰는 코드를 빼는 원리를 따라간다. sideEffects, CommonJS, 배럴 파일의 함정과 prefetch, 내용 해시 캐시, 과도한 분할로 생기는 워터폴까지 다룬다.
- 태그: coupang, Performance, JavaScript, Webpack, Bundler · 회사: coupang
- 키워드: 코드 스플리팅, 트리 셰이킹, 배럴 파일, 동적 import
- 길이: 491줄
- 소제목: 다운로드보다 비싼 것 / import()가 번들을 가르는 자리 / 라우트로 자를까, 컴포넌트로 자를까 / 청크 그래프와 공통 청크 / 안 쓰는 export를 털어 내기 / 사이드 이펙트가 있으면 지우지 못한다 / CommonJS는 흔들어도 안 떨어진다 / 배럴 파일이 끌고 오는 것들 / 번들 안을 들여다보기 / 미리 받을까, 필요할 때 받을까 / 파일 이름에 내용의 지문을 넣는다 / 너무 잘게 쪼개면 생기는 일 / 배포 직후 쏟아지는 청크 에러, 한 줄에 불어난 번들 / 덜 보내는 게 가장 빠르다 / 면접에서 나올 만한 질문
- 직접 링크 →: core-web-vitals
- 키워드 백링크 →: http-versions, rendering-strategies
- 이 글로 오는 글 ←: core-web-vitals, frontend-browser-cache, http-versions

#### `core-web-vitals` — Core Web Vitals: LCP, INP, CLS

- 요약: LCP, INP, CLS가 각각 무엇을 재는지, Lighthouse 점수와 실제 사용자 수치가 왜 다르게 나오는지 따라간다. LCP 네 조각과 INP 세 구간, CLS 세션 창으로 원인을 쪼개 찾고 고치는 방법까지 다룬다.
- 태그: coupang, Performance, Browser, JavaScript, Core Web Vitals · 회사: coupang
- 키워드: Core Web Vitals, LCP, INP, CLS, 레이아웃 스래싱
- 길이: 514줄
- 소제목: 세 숫자가 각각 재는 것 / 실험실 점수와 사용자 점수가 다른 이유 / 가장 큰 그림이 늦게 뜨는 과정 / LCP를 네 조각으로 나눠 보기 / 히어로 이미지를 빨리 받는 법 / 눌렀는데 화면이 늦게 바뀐다 / 긴 작업을 쪼개서 양보하기 / 화면이 밀리는 양을 재는 법 / 밀림을 세션 창으로 묶어 센다 / 실제 사용자 기기에서 모으기 / 나빠진 지표를 브라우저에서 직접 재 보기 / 점수보다 분포를 본다 / 면접에서 나올 만한 질문
- 직접 링크 →: what-happens-google-com, code-splitting, event-loop
- 키워드 백링크 →: ab-testing, cors, dns
- 이 글로 오는 글 ←: ab-testing, code-splitting, event-loop, frontend-browser-cache, react-rerender, rendering-strategies

#### `frontend-browser-cache` — 프런트엔드에서 쓰는 캐시: 브라우저 캐시부터 Service Worker까지

- 요약: 요청 하나가 메모리 캐시, Service Worker, HTTP 캐시를 차례로 거치는 과정과 bfcache, Cache Storage 전략, 새 Service Worker가 기다리는 이유를 이 블로그의 sw.js로 따라간다. 데이터 저장소의 용량과 지워지는 규칙, 미리 받기 힌트까지 정리한다.
- 태그: Cache, Browser, Performance, Frontend
- 키워드: Service Worker, bfcache, Cache Storage, skipWaiting, Speculation Rules
- 길이: 645줄
- 소제목: 요청 하나가 거치는 캐시들 / HTTP 캐시는 서버가 정한 기한을 따른다 / 뒤로 가기가 즉시 뜨는 bfcache / 페이지 앞에 선 프록시, Service Worker / 설치, 활성화, 가로채기 / 캐시를 먼저 볼까 네트워크를 먼저 볼까 / 미리 담기와 쓰면서 담기 / 이 블로그의 sw.js 읽기 / 버전을 올리고 옛 캐시를 지운다 / 새 Service Worker는 기다린다 / Workbox를 쓰면 / 데이터는 어디에 저장하나 / 용량과 지워지는 순서 / 다음에 필요한 것을 미리 받기 / 개발자 도구에서 확인하기 / 사용자 브라우저의 캐시 상태를 숫자로 받기 / 처음 장면으로 돌아가서 / 면접에서 나올 만한 질문
- 직접 링크 →: http-caching-cdn, caching-strategies, client-data-cache, core-web-vitals, code-splitting
- 키워드 백링크 →: realtime-communication, what-happens-google-com, cors
- 이 글로 오는 글 ←: browser-fetch, client-data-cache, http-caching-cdn

### Programming › Frontend › React (`programming/frontend/react`)

#### `react-rerender` — React는 언제 다시 그리나

- 요약: 검색창 글자 하나에 목록 전체가 다시 렌더링되는 장면에서 출발해 렌더와 커밋, 리렌더링이 일어나는 이유, key와 재조정, memo·useCallback이 듣는 경우와 안 듣는 경우를 따라간다. context 분리, 상태 위치 옮기기, 자동 배칭, transition, Profiler로 원인 찾기까지 다룬다.
- 태그: coupang, React, Performance, Rendering · 회사: coupang
- 키워드: 리렌더링, 재조정, React.memo, 자동 배칭, useDeferredValue
- 길이: 642줄
- 소제목: 렌더와 커밋은 다른 일이다 / 다시 렌더링되는 이유는 따로 있다 / 이전 트리와 짝을 맞추는 규칙 / 내용이 같아도 다른 객체 / memo와 useMemo, useCallback이 듣는 경우 / 상태는 내리고 내용은 올린다 / context는 값이 바뀌면 구독자를 전부 깨운다 / 여러 번 바꿔도 렌더링은 한 번 / 급한 업데이트와 미뤄도 되는 업데이트 / 고치기 전에 잰다 / React Compiler가 대신해 주는 것 / 렌더링이 멈추지 않을 때 남는 흔적 / 처음 검색창으로 돌아가서 / 면접에서 나올 만한 질문
- 직접 링크 →: client-data-cache, rendering-strategies
- 키워드 백링크 →: core-web-vitals
- 이 글로 오는 글 ←: client-data-cache, rendering-strategies

#### `rendering-strategies` — CSR, SSR, SSG, ISR, 스트리밍: HTML은 어디서 만들어지나

- 요약: 같은 상품 페이지의 HTML을 브라우저, 요청 시 서버, 빌드, 뒤늦은 재생성, 조각 전송 중 어디서 만드느냐에 따라 TTFB·LCP·서버 비용·신선도가 어떻게 달라지는지 비교한다. 하이드레이션과 불일치, ISR 갱신 방식, 스트리밍의 제약, 서버 컴포넌트, 쇼핑몰 페이지별 선택까지 다룬다.
- 태그: coupang, React, SSR, Next.js, Performance, Rendering · 회사: coupang
- 키워드: 하이드레이션, ISR, 스트리밍 SSR, 서버 컴포넌트, SSG
- 길이: 539줄
- 소제목: HTML은 어디서 언제 만들어지나 / CSR: 빈 HTML과 큰 JS / SSR: 요청마다 서버가 HTML을 만든다 / 하이드레이션은 공짜가 아니다 / SSG: 빌드할 때 미리 만든다 / ISR: 정적 페이지를 뒤에서 다시 만든다 / 스트리밍: 준비된 부분부터 보낸다 / 서버 컴포넌트는 SSR과 다른 이야기다 / 큰 쇼핑몰에서 페이지마다 고르기 / 고른 전략대로 나가는지 밖에서 확인하기 / 다시 미리보기 카드로 / 면접에서 나올 만한 질문
- 직접 링크 →: proxy-reverse-proxy, react-rerender
- 키워드 백링크 →: http-caching-cdn, http-status-codes, core-web-vitals
- 이 글로 오는 글 ←: ab-testing, client-data-cache, code-splitting, html-form-http, react-rerender

### Programming › In Practice (`programming/in-practice`)

#### `network-troubleshooting-by-layer` — 계층별로 장애 좁히기: 아래에서 위로

- 요약: 접속이 안 된다는 한 줄을 curl -v로 좁힌 뒤 링크, 경로, 이웃, 경로 끝, 이름, 포트, TLS, HTTP 순서로 확인한다. 칸마다 칠 명령과 출력에서 볼 곳, 흔한 오해를 실제 출력으로 정리한다.
- 태그: Network, Linux, Troubleshooting, TCP/IP
- 키워드: 장애 좁히기, mtr, tracepath, openssl s_client
- 길이: 696줄
- 소제목: 명령을 어디서 치는지부터 정한다 / 먼저 curl 한 번으로 어디서 멈췄는지 본다 / 링크가 살아 있는지 / 내 주소와 나갈 길 / 다음 칸의 MAC을 얻었는지 / 목적지까지 닿는지 / 이름이 맞는 주소로 풀리는지 / 포트가 열려 있는지 / TLS가 맺어지는지 / HTTP가 기대한 답을 주는지 / 갈림길을 한 장으로 / 확인하다가 흔히 하는 실수 / 처음 실패한 칸이 답이다 / 면접에서 나올 만한 질문
- 직접 링크 →: osi-in-practice, docker-network-volume, layer-link-ethernet-arp, layer-ip-addressing, layer-ip-routing-icmp, layer-mtu-fragmentation, hosts-file, ports-and-sockets, packet-capture-tcpdump, iptables-basics, https-tls, proxy-reverse-proxy
- 키워드 백링크 →: what-happens-google-com, docker-container-basics, http-status-codes, dns
- 이 글로 오는 글 ←: browser-fetch, http-message, http-status-codes, kubernetes-ingress, layer-mtu-fragmentation, network-layers-overview, nginx-https-performance, osi-in-practice, packet-capture-tcpdump, ports-and-sockets, redis-basics, rest-api-design, tcp-reliability-congestion, upper-layers-session-presentation-app, what-happens-google-com

#### `osi-in-practice` — OSI 7계층을 알면 현장에서 무엇이 달라지나

- 요약: 에러 메시지가 어느 층에서 나왔는지 읽는 법과, 같은 메시지가 다른 층에서 나오는 함정을 실습 망의 실제 출력으로 본다. 로드 밸런서, 방화벽, 헬스 체크, TLS 종단, 타임아웃을 층으로 나눠 고르는 법도 다룬다.
- 태그: Network, TCP/IP, Troubleshooting, DevOps
- 키워드: L4 로드 밸런서, L7 로드 밸런서, 헬스 체크
- 길이: 499줄
- 소제목: 에러 메시지는 어느 층이 말했는지 알려 준다 / 같은 메시지가 다른 층에서 나오기도 한다 / 로드 밸런서는 어느 층에서 나누느냐로 고른다 / 방화벽도 층마다 따로 있다 / 헬스 체크는 어느 층까지 물어보나 / TLS를 어디서 풀지 정한다 / 타임아웃은 안쪽으로 갈수록 짧게 / 클라우드 제품 이름을 층으로 읽는다 / 네트워크 탓이라고 말하기 전에 모을 것 / 층 번호는 질문을 좁히는 말이다 / 면접에서 나올 만한 질문
- 직접 링크 →: network-layers-overview, http-status-codes, nginx-reverse-proxy, iptables-basics, dns, layer-link-ethernet-arp, proxy-reverse-proxy, tcp-connection-lifecycle, ports-and-sockets, resilience-patterns, https-tls, upper-layers-session-presentation-app, iptables-nat, kubernetes-ingress, gateway, network-troubleshooting-by-layer, packet-capture-tcpdump
- 키워드 백링크 →: docker-container-basics, realtime-communication, http-versions, what-happens-google-com, layer-ip-routing-icmp, udp-and-quic
- 이 글로 오는 글 ←: caching-strategies, event-loop, gateway, http-status-codes, iptables-nat, kubernetes-ingress, network-layers-overview, network-troubleshooting-by-layer, nginx-reverse-proxy, packet-capture-tcpdump, proxy-reverse-proxy, resilience-patterns, upper-layers-session-presentation-app, what-happens-google-com

#### `packet-capture-tcpdump` — tcpdump로 계층을 눈으로 보기

- 요약: curl 한 번을 찍어 ARP, DNS, TCP, HTTP가 층별로 지나가는 것을 보고, 필터와 -A·-X·-w 옵션, Wireshark, 컨테이너 안 캡처까지 다룬다. refused, timeout, reset, 502를 패킷 모양으로 가르는 법과 캡처할 때의 개인정보 주의점도 짚는다.
- 태그: Network, Linux, Troubleshooting, TCP/IP
- 키워드: tcpdump, 패킷 캡처, Wireshark, pcap
- 길이: 556줄
- 소제목: 어디서 찍을지부터 정한다 / curl 한 번을 처음부터 끝까지 / 한 줄을 읽는 법 / 필요한 패킷만 거른다 / 내용까지 본다 / 파일로 남기고 Wireshark로 연다 / 장애 장면을 패킷으로 가른다 / 컨테이너와 Pod 안에서 찍는다 / TLS 안은 보이지 않는다, 이름만 빼고 / 찍기 전에 정해 둘 것 / 패킷은 각자의 로그보다 정직하다 / 면접에서 나올 만한 질문
- 직접 링크 →: network-troubleshooting-by-layer, layer-link-ethernet-arp, tcp-connection-lifecycle, network-layers-overview, iptables-nat, https-tls, osi-in-practice
- 키워드 백링크 →: nginx-reverse-proxy, docker-container-basics, ports-and-sockets, what-happens-google-com, udp-and-quic, dns
- 이 글로 오는 글 ←: http-message, iptables-nat, kubernetes-ingress, layer-mtu-fragmentation, network-layers-overview, network-troubleshooting-by-layer, osi-in-practice, tcp-connection-lifecycle, tcp-reliability-congestion, udp-and-quic, upper-layers-session-presentation-app

### Programming › Network (`programming/network`)

#### `dns` — DNS는 어떻게 이름을 IP로 바꾸나

- 요약: 도메인 이름이 루트, TLD, 권한 있는 네임서버를 거쳐 IP가 되는 과정과 TTL 캐시가 만드는 시차를 따라간다. 레코드 종류, apex CNAME 제약, UDP와 TCP, DoH와 DNSSEC, dig로 장애를 찾는 법까지 다룬다.
- 태그: DNS, Network, Security
- 키워드: DNS, 재귀 리졸버, 권한 있는 네임서버, DNSSEC, CNAME, DoH, TTL
- 길이: 451줄
- 소제목: 전화번호부 한 권으로는 버틸 수 없었다 / 도메인 이름은 오른쪽부터 읽는다 / 이름 하나를 찾기까지 / 캐시와 TTL이 만드는 시차 / 레코드는 이름에 붙은 꼬리표다 / 도메인 꼭대기에는 CNAME을 걸 수 없다 / UDP로 묻다가 TCP로 넘어갈 때 / 질의를 감추는 DoT와 DoH / 답이 진짜인지 확인하는 DNSSEC / 전파된다는 말의 오해 / dig로 직접 확인하기 / 자주 만나는 장애 / 처음 질문으로 돌아가면 / 면접에서 나올 만한 질문
- 직접 링크 →: what-happens-google-com, hosts-file
- 키워드 백링크 →: http-versions, sql-batch-timeout-pool, udp-and-quic
- 이 글로 오는 글 ←: browser-fetch, caching-strategies, core-web-vitals, db-replication-sharding, db-type-key-value, db-type-wide-column, docker-compose, docker-network-volume, dockerfile-image-layers, gateway, hosts-file, http-caching-cdn, http-status-codes, http-versions, https-tls, iptables-basics, iptables-nat, js-memory-leak, kubernetes-ingress, layer-ip-addressing, layer-ip-routing-icmp, layer-mtu-fragmentation, local-custom-domain, network-layers-overview, network-troubleshooting-by-layer, nginx-https-performance, osi-in-practice, packet-capture-tcpdump, ports-and-sockets, postgres-roles-security, proxy-reverse-proxy, redis-basics, redis-memory-eviction, redis-persistence-ha, udp-and-quic, upper-layers-session-presentation-app, what-happens-google-com

#### `hosts-file` — hosts 파일: DNS보다 먼저 보는 한 줄

- 요약: 운영체제가 DNS보다 먼저 확인하는 hosts 파일의 형식과 조회 순서, 로컬 개발과 서버 이전 테스트에 쓰는 법을 정리한다. 고쳤는데 반영되지 않는 이유와 포트·와일드카드가 안 되는 이유, 보안 위험도 다룬다.
- 태그: DNS, Network, Browser, Security
- 키워드: hosts 파일, /etc/hosts, nsswitch.conf
- 길이: 338줄
- 소제목: DNS보다 먼저 보는 파일 / 한 줄 뜯어보기 / 이름을 찾는 순서 / 어디에 쓰나 / 고쳤는데 그대로인 이유 / 포트도, 와일드카드도 안 된다 / 악성코드가 노리는 파일 / 가장 앞에 있는 한 줄짜리 DNS / 면접에서 나올 만한 질문
- 직접 링크 →: dns
- 키워드 백링크 →: proxy-reverse-proxy, local-custom-domain, http-versions, what-happens-google-com
- 이 글로 오는 글 ←: dns, local-custom-domain, network-troubleshooting-by-layer, what-happens-google-com

#### `http-caching-cdn` — HTTP 캐시와 CDN

- 요약: 배포했는데 옛 화면이 보이거나 흰 화면이 뜨는 이유를 HTTP 캐시 규칙으로 푼다. Cache-Control, ETag와 304, 캐시 키와 Vary, CDN 엣지와 무효화, 개인화 페이지를 캐시하면 안 되는 이유까지 다룬다.
- 태그: coupang, HTTP, Cache, CDN, Performance, Browser · 회사: coupang
- 키워드: Cache-Control, ETag, 캐시 무효화, 캐시 스탬피드, stale-while-revalidate
- 길이: 401줄
- 소제목: 응답은 여러 곳에 복사된다 / 신선한 동안은 묻지도 않는다 / Cache-Control 한 줄 뜯어 보기 / 상한 사본이 아직 맞는지 묻기 / 무엇을 같은 요청으로 보나 / 이름에 해시를 넣으면 영원히 캐시할 수 있다 / 엣지에서 기한을 정하는 쪽은 누구인가 / 한꺼번에 만료되면 오리진이 몰린다 / 지우는 데도 시간이 걸린다 / 사람마다 다른 페이지를 공유 캐시에 두면 / 응답 헤더로 확인한다 / 처음 장면을 다시 보면 / 면접에서 나올 만한 질문
- 직접 링크 →: what-happens-google-com
- 키워드 백링크 →: http-message, frontend-browser-cache, http-versions, redis-basics, cookie-session-login, cors, dns
- 이 글로 오는 글 ←: ab-testing, browser-fetch, caching-strategies, client-data-cache, cors, db-architecture-by-scale, frontend-browser-cache, http-message, http-methods, http-status-codes, json-crud-http, nginx-https-performance, proxy-reverse-proxy, rendering-strategies, rest-api-design, upper-layers-session-presentation-app, what-happens-google-com

#### `proxy-reverse-proxy` — 프록시와 리버스 프록시: 누구를 대신하나

- 요약: 사내망에서 curl이 막히는 이유와 앱 로그에 로드 밸런서 IP만 찍히는 이유를 프록시가 누구 편에 서 있는지로 푼다. CONNECT 터널과 TLS 가로채기, Ubuntu 프록시 설정, X-Forwarded-For를 오른쪽부터 읽는 법과 PROXY protocol까지 다룬다.
- 태그: Network, HTTP, Security, Proxy, TLS, Linux
- 키워드: 포워드 프록시, 리버스 프록시, X-Forwarded-For, CONNECT 터널, PROXY protocol
- 길이: 649줄
- 소제목: 프록시는 누구를 대신하나 / 프록시에게 보내는 HTTP 요청은 모양이 다르다 / HTTPS는 CONNECT로 터널을 판다 / 회사 프록시가 TLS를 열어 볼 때 / 설정 없이 지나가는 프록시와 PAC 파일 / HTTP를 모르는 프록시, SOCKS5 / Ubuntu에서 프록시 쓰게 하기 / 서버 앞을 지키는 리버스 프록시 / 앱에는 로드 밸런서 주소만 보인다 / X-Forwarded-For 한 줄 뜯어보기 / 진짜 클라이언트 IP 고르기 / 표준 헤더 Forwarded / 헤더를 못 붙이는 L4 로드 밸런서와 PROXY protocol / CDN에서 앱까지, 헤더가 붙는 자리 / 리버스 프록시, 로드 밸런서, API 게이트웨이 / 다시 두 장면으로 / 면접에서 나올 만한 질문
- 직접 링크 →: https-tls, nginx-reverse-proxy, http-caching-cdn, local-custom-domain, gateway
- 키워드 백링크 →: docker-container-basics, osi-in-practice, iptables-basics, http-versions, ports-and-sockets, layer-ip-addressing, http-status-codes, what-happens-google-com, udp-and-quic, dns
- 이 글로 오는 글 ←: cookie-session-login, docker-compose, docker-network-volume, gateway, hosts-file, http-status-codes, iptables-nat, kubernetes-ingress, layer-ip-addressing, local-custom-domain, network-layers-overview, network-troubleshooting-by-layer, nginx-basics, nginx-reverse-proxy, osi-in-practice, realtime-communication, rendering-strategies

#### `realtime-communication` — 서버가 먼저 말하게 하기: 폴링, 롱 폴링, SSE, WebSocket

- 요약: 요청-응답뿐인 HTTP에서 서버가 먼저 소식을 보내는 네 가지 방법을 비교했다. 롱 폴링의 타임아웃, SSE의 재연결과 Last-Event-ID, WebSocket 업그레이드와 프레임, 여러 서버로 늘릴 때의 문제까지 다룬다.
- 태그: WebSocket, HTTP, Network
- 키워드: WebSocket, Server-Sent Events, 롱 폴링, EventSource
- 길이: 594줄
- 소제목: 몇 초마다 다시 묻기: 짧은 폴링 / 대답할 게 생길 때까지 붙잡아 두기: 롱 폴링 / 응답을 끝내지 않고 계속 보내기: SSE / 이벤트 스트림 한 덩어리 뜯어보기 / SSE가 걸려 넘어지는 곳 / HTTP를 벗어나 양방향으로: WebSocket / 업그레이드 요청 뜯어보기 / 서버가 여러 대가 되면 / 로컬에선 되는데 서버에 올리면 멈출 때 / 무엇을 고를까 / 다시 주문 화면으로 / 면접에서 나올 만한 질문
- 직접 링크 →: http-versions, cors, resilience-patterns, nginx-reverse-proxy
- 키워드 백링크 →: json-crud-http, proxy-reverse-proxy, base64, redis-basics, http-status-codes
- 이 글로 오는 글 ←: frontend-browser-cache, nginx-basics, nginx-reverse-proxy, osi-in-practice

#### `what-happens-google-com` — 주소창에 google.com을 치면 일어나는 일

- 요약: 엔터를 누른 순간부터 화면이 뜰 때까지. URL 해석과 HSTS, DNS 조회, TCP·TLS 핸드셰이크, HTTP/2 요청과 리다이렉트, 렌더링 파이프라인을 순서대로 따라갔다.
- 태그: DNS, TCP, TLS, HTTP, Browser
- 키워드: HTTPS, 3-way handshake, HSTS, 렌더링 파이프라인
- 길이: 404줄
- 소제목: 검색어인가, 주소인가 / 이름을 IP로 바꾸기: DNS / 서버와 연결 맺기: TCP와 TLS / 페이지를 요청하고 받기: HTTP / 받은 HTML을 화면에 그리기 / 캐시가 단계를 건너뛰게 해 준다 / 페이지가 안 뜰 때 몇 번째 단계인지 고르기 / 정리 / 면접에서 나올 만한 질문
- 직접 링크 →: network-troubleshooting-by-layer, osi-in-practice
- 키워드 백링크 →: http-caching-cdn, nginx-basics, dns, https-tls, hosts-file, http-versions, http-status-codes, udp-and-quic
- 이 글로 오는 글 ←: base64, cookie-session-login, core-web-vitals, dns, frontend-browser-cache, gateway, git-remote-collaboration, hosts-file, html-form-http, http-caching-cdn, http-message, http-methods, http-status-codes, http-versions, https-tls, iptables-basics, iptables-nat, kubernetes-ingress, layer-link-ethernet-arp, local-custom-domain, network-layers-overview, network-troubleshooting-by-layer, nginx-basics, nginx-https-performance, nginx-reverse-proxy, osi-in-practice, packet-capture-tcpdump, ports-and-sockets, proxy-reverse-proxy, tcp-connection-lifecycle, upper-layers-session-presentation-app

### Programming › Network › HTTP (`programming/network/http`)

#### `http-message` — HTTP 메시지는 어떻게 생겼나

- 요약: HTTP 메시지는 첫 줄, 헤더, 빈 줄, 본문으로 된 텍스트다. Host, Content-Type, Content-Length와 chunked, 콘텐츠 협상과 압축, 본문 형식까지 헤더 한 줄이 무엇을 결정하는지 curl로 뜯어본다.
- 태그: HTTP, Network, Browser
- 키워드: 콘텐츠 협상, Transfer-Encoding, Accept-Encoding, multipart/form-data, 요청 스머글링
- 길이: 564줄
- 소제목: curl로 날것의 메시지를 본다 / 텍스트 몇 줄이 전부다 / 응답도 같은 모양이다 / Host가 없으면 400이다 / 본문이 어디서 끝나는지 알려 주기 / 연결을 끊을지 말지 / 같은 주소, 다른 표현 / 압축은 Accept-Encoding으로 고른다 / 본문 형식은 Content-Type이 말한다 / 헤더 이름과 크기에 관한 규칙 / HTTP/2에서는 모양이 바뀐다 / 헤더 한 줄이 장애가 되는 순간 / 다시 415로 돌아가서 / 면접에서 나올 만한 질문
- 직접 링크 →: what-happens-google-com, http-status-codes, http-methods, http-caching-cdn, cookie-session-login, token-login, http-versions, packet-capture-tcpdump, network-troubleshooting-by-layer
- 키워드 백링크 →: https-tls, html-form-http, kubernetes-ingress, base64, db-modeling-normalization
- 이 글로 오는 글 ←: html-form-http, http-caching-cdn, http-methods, http-status-codes, http-versions, json-crud-http, rest-api-design, upper-layers-session-presentation-app

#### `http-methods` — HTTP 메서드와 안전성·멱등성

- 요약: GET, POST, PUT, PATCH, DELETE는 서버와 맺는 약속이다. 안전과 멱등의 정확한 뜻, PUT과 PATCH의 차이, POST를 다시 보내면 생기는 일과 GET으로 상태를 바꾸면 안 되는 이유를 정리한다.
- 태그: HTTP, REST, Network
- 키워드: 멱등성, 안전한 메서드, JSON Merge Patch, JSON Patch, PUT과 PATCH
- 길이: 522줄
- 소제목: 메서드는 서버와 맺는 약속이다 / 안전, 멱등, 캐시 가능 / 같은 요청을 두 번 보내면 / PUT은 통째로, PATCH는 일부만 / POST를 다시 보내면 주문이 두 개 / GET에 본문을 싣지 않는 이유 / HEAD와 OPTIONS는 묻기만 한다 / 405와 Allow, 대소문자 / 폼은 GET과 POST만 안다 / CONNECT와 TRACE / 스펙대로 하지 않는 서버들 / 프록시는 멱등성을 보고 재시도를 고른다 / 다시 메일 링크로 / 면접에서 나올 만한 질문
- 직접 링크 →: http-message, http-caching-cdn, resilience-patterns, cors, cookie-session-login, http-status-codes, nginx-reverse-proxy
- 키워드 백링크 →: json-crud-http, elasticsearch-inverted-index, gateway, client-data-cache, what-happens-google-com
- 이 글로 오는 글 ←: browser-fetch, gateway, html-form-http, http-message, http-status-codes, http-versions, https-tls, json-crud-http, microservices, nginx-reverse-proxy, resilience-patterns, rest-api-design

#### `http-status-codes` — HTTP 상태 코드 제대로 쓰기

- 요약: 상태 코드는 본문을 열어 보지 않는 캐시, 프록시, 모니터링, 재시도 로직이 읽는 유일한 신호다. 리다이렉트 다섯 종류의 차이, 401과 403, 502와 504를 누가 만드는지, 어떤 실패를 재시도할지, Problem Details로 에러 본문을 쓰는 법을 정리했다.
- 태그: HTTP, Network, Backend, API
- 키워드: 상태 코드, Problem Details, PRG 패턴, 308 Permanent Redirect
- 길이: 421줄
- 소제목: 첫 자리 숫자가 먼저다 / 최종 응답 전에 오는 1xx / 성공에도 종류가 있다 / 리다이렉트는 두 가지를 정한다 / POST 다음에는 303 / 리다이렉트가 이어지면 왕복이 쌓인다 / 4xx는 다시 보내도 같다 / 502와 504는 앱이 만들지 않는다 / access.log에서 5xx를 갈라 보기 / 다시 보내도 되는 실패 / 에러 본문은 Problem Details로 / 실패를 200으로 감싸면 / 면접에서 나올 만한 질문
- 직접 링크 →: http-message, http-methods, http-caching-cdn, gateway, nginx-reverse-proxy, network-troubleshooting-by-layer, resilience-patterns
- 키워드 백링크 →: html-form-http, client-data-cache, https-tls, rest-api-design, proxy-reverse-proxy, token-login, db-locking-deadlock, http-versions, osi-in-practice, what-happens-google-com, dns
- 이 글로 오는 글 ←: browser-fetch, cors, db-type-time-series, html-form-http, http-message, http-methods, http-versions, json-crud-http, kubernetes-ingress, layer-mtu-fragmentation, mvc-pattern, network-layers-overview, network-troubleshooting-by-layer, nginx-basics, nginx-reverse-proxy, osi-in-practice, proxy-reverse-proxy, realtime-communication, rendering-strategies, rest-api-design, sqld-entity-attribute-relationship, what-happens-google-com

#### `http-versions` — HTTP/1.1에서 HTTP/2, HTTP/3까지

- 요약: HTTP는 버전마다 앞 버전이 남긴 기다림을 하나씩 없앴다. 파이프라이닝이 꺼진 이유부터 HTTP/2의 프레임과 HPACK, TCP 수준의 줄 막힘, QUIC의 0-RTT와 연결 이전, 개발자가 버려야 할 HTTP/1.1 시절 꼼수까지 따라간다.
- 태그: HTTP, Network, Performance, TLS
- 키워드: HTTP/2, HTTP/3, QUIC, 멀티플렉싱, HPACK, 도메인 샤딩
- 길이: 436줄
- 소제목: 요청마다 연결을 새로 맺던 HTTP/1.0 / 연결을 재사용하는 HTTP/1.1 / 텍스트를 프레임으로 쪼갠 HTTP/2 / TCP 아래에서 다시 막히는 줄 / UDP 위에 새로 만든 QUIC / 브라우저는 HTTP/3를 어떻게 알아내나 / 설정한 버전과 실제로 쓰는 버전이 다를 때 / 개발자가 바꿀 것 / 면접에서 나올 만한 질문
- 직접 링크 →: what-happens-google-com, http-message, http-status-codes, tcp-connection-lifecycle, nginx-reverse-proxy, code-splitting
- 키워드 백링크 →: https-tls, browser-fetch, http-methods, tcp-reliability-congestion, ports-and-sockets, udp-and-quic, dns
- 이 글로 오는 글 ←: base64, code-splitting, dns, hosts-file, html-form-http, http-caching-cdn, http-message, http-status-codes, https-tls, iptables-nat, layer-mtu-fragmentation, local-custom-domain, microservices, network-layers-overview, nginx-https-performance, osi-in-practice, proxy-reverse-proxy, realtime-communication, rest-api-design, tcp-reliability-congestion, udp-and-quic, upper-layers-session-presentation-app, what-happens-google-com

#### `json-crud-http` — JSON으로 데이터 주고받기: 조회·생성·수정·삭제 끝까지

- 요약: 할 일 자원 하나를 curl과 fetch로 만들고 읽고 고치고 지우면서 실제 요청과 응답을 본다. JSON.stringify가 바꾸는 값, 큰 정수 ID, 201과 Location, PUT과 Merge Patch, 415·422·412, 204에서 터지는 res.json()까지 다룬다.
- 태그: HTTP, REST, API, JSON, JavaScript
- 키워드: JSON.stringify, JSON.parse, reviver, 415 Unsupported Media Type
- 길이: 804줄
- 소제목: JSON은 자바스크립트 객체가 아니다 / stringify가 조용히 바꾸는 값 / 날짜는 문자열로 와서 문자열로 남는다 / 큰 숫자 ID는 문자열로 보낸다 / 할 일 하나의 일생 / 목록은 감싸서 준다 / 하나를 달라고 했는데 없으면 404 / 만들 때는 201과 Location / PUT은 빠진 필드를 기본값으로 만든다 / PATCH에서 null은 지우라는 뜻이다 / 지운 걸 또 지우면 / 형식이 다르면 415 / 문법은 400, 내용은 422 / 동시에 고치면 412 / res.json()이 터지는 응답들 / 폼으로 보낼 때와 무엇이 다른가 / 다시 빈 req.body로 / 면접에서 나올 만한 질문
- 직접 링크 →: http-methods, http-message, browser-fetch, rest-api-design, http-status-codes, html-form-http
- 키워드 백링크 →: cors, upper-layers-session-presentation-app, client-data-cache, resilience-patterns, http-caching-cdn
- 이 글로 오는 글 ←: browser-fetch, cors, db-modeling-normalization, http-methods, postgres-functions-triggers, realtime-communication, sqld-entity-attribute-relationship, sqld-rollup-cube-grouping-sets, upper-layers-session-presentation-app

### Programming › Network › OSI · TCP/IP (`programming/network/layers`)

#### `layer-ip-addressing` — IP 주소와 서브넷: CIDR, 사설 대역, 게이트웨이

- 요약: IP 주소를 비트로 쪼개 서브넷 마스크와 CIDR을 읽고, 같은 망인지 게이트웨이로 보낼지 정하는 계산을 해 본다. 사설·특수 대역, 서브네팅, Docker·쿠버네티스·VPC 대역이 겹칠 때 생기는 일과 IPv6 주소까지 다룬다.
- 태그: Network, TCP/IP, Docker, Kubernetes
- 키워드: CIDR, 서브넷 마스크, 사설 대역, RFC 1918
- 길이: 387줄
- 소제목: 주소 하나에 망 번호와 기기 번호가 들어 있다 / 서브넷 마스크를 비트로 보기 / 망 하나에 몇 대를 붙일 수 있나 / 같은 망이면 직접, 아니면 게이트웨이로 / 사설 대역과 특수한 주소들 / 큰 대역을 작게 나누기 / 대역이 겹치면 길이 사라진다 / IPv6 주소 읽기 / 현장에서 주소와 마주치는 순간 / 동네와 번지 / 면접에서 나올 만한 질문
- 직접 링크 →: network-layers-overview, layer-link-ethernet-arp, layer-ip-routing-icmp, iptables-nat, ports-and-sockets, proxy-reverse-proxy
- 키워드 백링크 →: docker-container-basics, dns
- 이 글로 오는 글 ←: layer-ip-routing-icmp, layer-link-ethernet-arp, network-layers-overview, network-troubleshooting-by-layer, postgres-connections-pg-hba, postgres-roles-security, proxy-reverse-proxy

#### `layer-ip-routing-icmp` — 라우팅과 ICMP: 패킷이 길을 찾는 법

- 요약: 라우팅 테이블을 읽고 가장 긴 프리픽스가 이기는 규칙을 직접 계산해 본다. TTL과 ICMP, traceroute와 ping이 실제로 재는 것, 별표를 읽는 법, 비대칭 경로와 ip_forward 같은 현장의 함정까지 다룬다.
- 태그: Network, TCP/IP, Linux, Troubleshooting
- 키워드: 라우팅 테이블, 최장 접두사 일치, traceroute, ICMP
- 길이: 623줄
- 소제목: 실습 망 만들기 / 라우터는 다음 한 칸만 안다 / 가장 길게 맞는 경로가 이긴다 / 패킷 하나가 두 라우터를 건너는 길 / 라우터를 켜는 스위치, ip_forward / TTL은 길을 잃은 패킷을 끝낸다 / ICMP: IP가 보내는 오류 보고서 / traceroute는 TTL을 하나씩 늘린다 / 별표를 읽는 법 / ping이 말해 주는 것과 말해 주지 않는 것 / 현장에서 경로를 의심하는 순간 / 한 칸씩 넘기는 일 / 면접에서 나올 만한 질문
- 직접 링크 →: layer-ip-addressing, network-layers-overview, layer-mtu-fragmentation, iptables-basics, dns
- 키워드 백링크 →: docker-container-basics, layer-link-ethernet-arp, iptables-nat, udp-and-quic
- 이 글로 오는 글 ←: iptables-basics, layer-ip-addressing, layer-link-ethernet-arp, layer-mtu-fragmentation, network-layers-overview, network-troubleshooting-by-layer, osi-in-practice, ports-and-sockets, tcp-reliability-congestion, udp-and-quic

#### `layer-link-ethernet-arp` — 데이터 링크 계층: 이더넷 프레임, MAC 주소, 스위치, ARP

- 요약: 같은 망 안에서 프레임을 건네는 L2를 캡처로 따라간다. 이더넷 프레임과 MAC 주소 읽기, 스위치가 포트를 배우는 법, ARP와 이웃 캐시 상태, Gratuitous ARP, VLAN과 물리 계층까지 다룬다.
- 태그: Network, TCP/IP, Linux
- 키워드: ARP, MAC 주소, 이더넷 프레임, Gratuitous ARP
- 길이: 491줄
- 소제목: 선과 전파 위의 일: 물리 계층 / 이더넷 프레임 한 장 / MAC 주소 읽기 / 스위치는 보낸 주소로 길을 배운다 / IP는 아는데 MAC을 모를 때: ARP / 다른 망으로 갈 때는 게이트웨이의 MAC을 묻는다 / ARP 캐시와 이웃의 상태 / 주인이 바뀌었다고 알리는 Gratuitous ARP / VLAN: 스위치 하나를 여러 망으로 / IPv6에는 ARP가 없다 / 현장에서 L2를 만나는 순간 / 한 구간을 맡는 층 / 면접에서 나올 만한 질문
- 직접 링크 →: network-layers-overview, layer-mtu-fragmentation, docker-network-volume, layer-ip-routing-icmp, layer-ip-addressing, iptables-basics
- 키워드 백링크 →: docker-container-basics, what-happens-google-com
- 이 글로 오는 글 ←: docker-network-volume, iptables-basics, layer-ip-addressing, layer-ip-routing-icmp, layer-mtu-fragmentation, network-layers-overview, network-troubleshooting-by-layer, osi-in-practice, packet-capture-tcpdump

#### `layer-mtu-fragmentation` — MTU와 단편화: 큰 패킷이 사라질 때

- 요약: 작은 요청은 되고 큰 응답만 멈추는 장애를 MTU로 푼다. MTU와 MSS, IP 단편화, DF와 PMTUD, ICMP가 막힐 때 생기는 블랙홀을 재현하고 MSS 클램핑과 터널·컨테이너의 MTU 설정으로 고친다.
- 태그: Network, TCP/IP, Linux, Docker, Troubleshooting
- 키워드: MTU, MSS 클램핑, PMTUD, 단편화
- 길이: 495줄
- 소제목: 한 번에 실을 수 있는 크기, MTU / MSS는 MTU에서 헤더를 뺀 값 / 큰 패킷을 쪼개는 단편화 / DF 비트와 Path MTU Discovery / ICMP가 막히면 블랙홀이 된다 / MSS 클램핑으로 돌아가기 / 터널과 컨테이너가 MTU를 깎는다 / 현장에서 MTU를 의심하는 순간 / 작은 건 되고 큰 것만 안 될 때 / 면접에서 나올 만한 질문
- 직접 링크 →: layer-ip-routing-icmp, network-layers-overview, iptables-basics, packet-capture-tcpdump, network-troubleshooting-by-layer, tcp-connection-lifecycle
- 키워드 백링크 →: https-tls, layer-link-ethernet-arp, http-versions, http-status-codes, udp-and-quic, dns
- 이 글로 오는 글 ←: iptables-basics, js-memory-leak, layer-ip-routing-icmp, layer-link-ethernet-arp, network-layers-overview, network-troubleshooting-by-layer, redis-memory-eviction, tcp-connection-lifecycle, tcp-reliability-congestion, udp-and-quic

#### `network-layers-overview` — OSI 7계층과 TCP/IP 4계층: 왜 나눠서 보나

- 요약: 통신을 층으로 나누는 이유와 데이터가 헤더를 입고 벗는 과정을 실제 프레임 한 장으로 확인한다. OSI와 TCP/IP의 대응, 장비가 읽는 깊이, 실무에서 말하는 L4와 L7의 뜻까지 정리한다.
- 태그: Network, TCP/IP
- 키워드: OSI 7계층, TCP/IP 4계층, OSI 모델
- 길이: 425줄
- 소제목: 한 덩어리로 만들면 아무것도 못 바꾼다 / 봉투 안에 봉투 / 실제 프레임 한 장을 벗겨 보면 / 층마다 데이터를 부르는 이름 / 일곱 층과 네 층 / 장비는 자기 층까지만 뜯어 본다 / L4, L7이라고 부를 때 / 현장에서 계층 번호가 쓰이는 순간 / 층이 깔끔하게 나뉘지 않는 곳 / 이 시리즈에서 이어서 볼 것 / 층을 나눠 보는 이유 / 면접에서 나올 만한 질문
- 직접 링크 →: layer-ip-routing-icmp, layer-link-ethernet-arp, layer-ip-addressing, ports-and-sockets, upper-layers-session-presentation-app, iptables-nat, osi-in-practice, http-status-codes, nginx-reverse-proxy, network-troubleshooting-by-layer, packet-capture-tcpdump, layer-mtu-fragmentation, tcp-connection-lifecycle, tcp-reliability-congestion, udp-and-quic, what-happens-google-com
- 키워드 백링크 →: proxy-reverse-proxy, docker-container-basics, gateway, iptables-basics, http-versions, dns
- 이 글로 오는 글 ←: layer-ip-addressing, layer-ip-routing-icmp, layer-link-ethernet-arp, layer-mtu-fragmentation, osi-in-practice, packet-capture-tcpdump, tcp-connection-lifecycle, upper-layers-session-presentation-app

#### `ports-and-sockets` — 포트와 소켓: 프로세스까지 찾아가는 마지막 주소

- 요약: 연결을 가르는 다섯 값, 듣는 소켓과 연결된 소켓, 커널이 패킷을 소켓에 넘기는 순서를 본다. 0.0.0.0과 127.0.0.1의 차이로 생기는 '로컬에선 되는데 Docker에선 안 되는' 문제, Address already in use와 SO_REUSEADDR, 임시 포트 고갈까지 다룬다.
- 태그: Network, TCP/IP, Linux, Docker, Troubleshooting
- 키워드: 5-tuple, 임시 포트, SO_REUSEADDR, SO_REUSEPORT, Address already in use
- 길이: 494줄
- 소제목: IP가 건물 주소라면 포트는 호수다 / 연결 하나를 가르는 다섯 값 / 듣는 소켓과 연결된 소켓 / 커널이 패킷을 소켓에 넘기는 순서 / 어느 주소에서 들을 것인가 / 이미 쓰는 중인 포트 / 임시 포트가 바닥나는 순간 / 소켓도 파일이다 / 현장에서 포트를 확인하는 순서 / 마지막 주소까지 찾아가는 길 / 면접에서 나올 만한 질문
- 직접 링크 →: tcp-connection-lifecycle, docker-network-volume, iptables-nat, udp-and-quic, network-troubleshooting-by-layer, upper-layers-session-presentation-app
- 키워드 백링크 →: elasticsearch-inverted-index, iptables-basics, postgres-getting-started, sql-batch-timeout-pool, redis-basics, what-happens-google-com, layer-ip-routing-icmp, dns
- 이 글로 오는 글 ←: http-versions, layer-ip-addressing, network-layers-overview, network-troubleshooting-by-layer, osi-in-practice, packet-capture-tcpdump, proxy-reverse-proxy, tcp-connection-lifecycle, udp-and-quic

#### `tcp-connection-lifecycle` — TCP 연결의 일생: 3-way handshake부터 TIME_WAIT까지

- 요약: TCP 연결이 맺어지고 끊기기까지 지나는 상태를 실제 캡처로 따라간다. accept 큐, TIME_WAIT가 남는 이유, CLOSE_WAIT가 쌓이는 버그, RST와 keepalive, ss로 상태를 읽어 장애를 좁히는 법까지 다룬다.
- 태그: Network, TCP, TCP/IP, Linux, Troubleshooting
- 키워드: TIME_WAIT, CLOSE_WAIT, accept 큐, SYN flood
- 길이: 589줄
- 소제목: 연결은 양쪽 커널의 메모에만 있다 / 번호를 맞추는 세 번의 인사 / 커널 안의 두 대기열 / 대답이 없을 때와 거절당할 때 / 상태 열한 개를 따라가기 / 끊을 때는 네 번 인사한다 / TIME_WAIT가 60초나 남는 이유 / CLOSE_WAIT가 쌓이면 내 코드를 본다 / RST는 대화를 끊는 비상 버튼 / 조용히 죽은 연결을 찾는 keepalive / 현장에서 상태 열을 읽는 법 / 상태 전이를 직접 따라가 보기 / 연결의 일생을 한 번에 / 면접에서 나올 만한 질문
- 직접 링크 →: network-layers-overview, ports-and-sockets, layer-mtu-fragmentation, tcp-reliability-congestion, packet-capture-tcpdump
- 키워드 백링크 →: what-happens-google-com, browser-fetch, iptables-basics, sql-batch-timeout-pool
- 이 글로 오는 글 ←: http-versions, iptables-basics, layer-mtu-fragmentation, network-layers-overview, nginx-reverse-proxy, osi-in-practice, packet-capture-tcpdump, ports-and-sockets, tcp-reliability-congestion, udp-and-quic

#### `tcp-reliability-congestion` — TCP는 어떻게 믿을 만한가: 재전송, 흐름 제어, 혼잡 제어

- 요약: 시퀀스 번호와 ACK, RTO 재전송과 빠른 재전송, 수신 윈도와 혼잡 윈도가 어떻게 빠짐없이, 넘치지 않게 보내는지 본다. 먼 곳일수록 느린 이유를 대역폭 지연 곱으로 계산하고, 40ms 지연을 만드는 Nagle과 지연 ACK, ss -ti로 느린 연결을 읽는 법까지 다룬다.
- 태그: Network, TCP, TCP/IP, Performance, Linux
- 키워드: 혼잡 제어, 흐름 제어, 대역폭 지연 곱, Nagle 알고리즘, BBR
- 길이: 404줄
- 소제목: 번호는 바이트마다, 확인은 다음 번호로 / 확인이 안 오면 기다렸다가 다시 보낸다 / 같은 ACK가 세 번 오면 기다리지 않는다 / 받는 쪽이 넘치지 않게 하는 흐름 제어 / 길이 넘치지 않게 하는 혼잡 제어 / CUBIC과 BBR / 멀리 갈수록 느린 이유는 대역폭과 지연의 곱이다 / 작은 패킷 두 개가 40ms를 만든다 / 현장에서 느린 연결을 들여다보기 / 믿을 만하다는 것의 값 / 면접에서 나올 만한 질문
- 직접 링크 →: tcp-connection-lifecycle, http-versions, network-troubleshooting-by-layer, layer-mtu-fragmentation, udp-and-quic
- 키워드 백링크 →: iptables-basics, packet-capture-tcpdump, redis-basics, layer-ip-routing-icmp
- 이 글로 오는 글 ←: http-versions, network-layers-overview, tcp-connection-lifecycle, udp-and-quic

#### `udp-and-quic` — UDP와 QUIC: 연결 없이 빨리 보내기

- 요약: UDP 헤더 8바이트가 무엇을 담고 연결이 없으면 무엇이 달라지는지 본다. 버퍼가 넘칠 때 조용히 사라지는 데이터그램, 반사·증폭 공격, NAT가 UDP를 금방 잊는 이유를 보고, UDP 위에 TCP를 다시 지은 QUIC을 전송 계층의 눈으로 본다.
- 태그: Network, TCP/IP, UDP, Security, Linux
- 키워드: UDP, 증폭 공격, UdpRcvbufErrors
- 길이: 408줄
- 소제목: 주소만 적어 던지는 8바이트 / 연결이 없으면 일어나는 일 / 무엇을 포기하고 무엇을 얻나 / 버퍼가 넘치면 조용히 버린다 / 질문보다 답이 큰 프로토콜은 무기가 된다 / NAT와 방화벽은 UDP를 오래 기억하지 않는다 / UDP 위에 다시 지은 TCP, QUIC / 현장에서 UDP와 QUIC을 다룰 때 / 질문 하나를 패킷 하나로 / 보장을 내려놓은 대가와 보상 / 면접에서 나올 만한 질문
- 직접 링크 →: tcp-reliability-congestion, http-versions, tcp-connection-lifecycle, dns, layer-mtu-fragmentation, iptables-nat, ports-and-sockets
- 키워드 백링크 →: iptables-basics, packet-capture-tcpdump, https-tls, layer-ip-routing-icmp
- 이 글로 오는 글 ←: dns, docker-container-basics, docker-network-volume, gateway, http-versions, https-tls, iptables-basics, iptables-nat, layer-ip-routing-icmp, layer-mtu-fragmentation, network-layers-overview, nginx-https-performance, osi-in-practice, packet-capture-tcpdump, ports-and-sockets, proxy-reverse-proxy, tcp-reliability-congestion, upper-layers-session-presentation-app, what-happens-google-com

#### `upper-layers-session-presentation-app` — 세션·표현·응용 계층은 어디로 갔나

- 요약: OSI의 세션·표현 계층이 TCP/IP에서 응용 계층으로 합쳐진 이유와, 그 일을 지금 누가 하는지 본다. 문자 인코딩·직렬화·압축, TLS가 몇 계층인지, 응용 프로토콜의 지도, wrong version number처럼 위쪽 층에서 나는 에러를 가려내는 법까지 다룬다.
- 태그: Network, TCP/IP, TLS, Encoding, HTTP
- 키워드: 세션 계층, 표현 계층, 문자 인코딩, wrong version number
- 길이: 365줄
- 소제목: 위의 세 층이 한 층이 된 사연 / 세션 계층이 하던 일은 흩어졌다 / 표현 계층이 하던 일은 라이브러리가 한다 / TLS는 몇 계층인가 / 응용 계층의 지도 / 첫 바이트로 프로토콜 알아보기 / 현장에서 위쪽 층을 가르는 법 / 층은 합쳐졌고 일은 남았다 / 면접에서 나올 만한 질문
- 직접 링크 →: network-layers-overview, https-tls, cookie-session-login, json-crud-http, base64, osi-in-practice, http-message, dns, network-troubleshooting-by-layer
- 키워드 백링크 →: packet-capture-tcpdump, http-versions, what-happens-google-com, http-caching-cdn, udp-and-quic
- 이 글로 오는 글 ←: base64, json-crud-http, network-layers-overview, osi-in-practice, ports-and-sockets

### Programming › OS › Linux (`programming/os/linux`)

#### `iptables-basics` — iptables로 리눅스 방화벽 이해하기

- 요약: 패킷이 netfilter의 다섯 검문소를 어떻게 지나고 규칙이 위에서부터 어떻게 맞춰지는지 보고, Ubuntu 서버에서 SSH와 웹만 여는 규칙을 잠기지 않게 만들어 저장하는 데까지 간다.
- 태그: Linux, Network, Security, Firewall
- 키워드: iptables, netfilter, conntrack, ip6tables, iptables-persistent
- 길이: 810줄
- 소제목: 방화벽 상태부터 확인한다 / 커널 안의 다섯 검문소 / 테이블은 검문소에서 하는 일의 종류 / 위에서부터, 처음 맞는 규칙에서 끝난다 / 명령어 한 줄 뜯어보기 / 연결을 기억하는 conntrack / SSH와 웹만 여는 규칙 세트 / 재부팅하면 사라진다 / IPv6는 따로 막아야 한다 / ufw, nftables, iptables는 같은 걸 만진다 / 막힌 패킷을 찾는 법 / SSH 무차별 대입 늦추기 / 결국 위에서부터 읽히는 목록 / 면접에서 나올 만한 질문
- 직접 링크 →: iptables-nat
- 키워드 백링크 →: tcp-connection-lifecycle, layer-mtu-fragmentation, what-happens-google-com, layer-ip-routing-icmp, udp-and-quic, layer-link-ethernet-arp, dns
- 이 글로 오는 글 ←: docker-compose, docker-container-basics, docker-network-volume, iptables-nat, layer-ip-routing-icmp, layer-link-ethernet-arp, layer-mtu-fragmentation, network-layers-overview, network-troubleshooting-by-layer, nginx-https-performance, osi-in-practice, ports-and-sockets, proxy-reverse-proxy, tcp-connection-lifecycle, tcp-reliability-congestion, udp-and-quic

#### `iptables-nat` — iptables NAT와 포트 포워딩: 사설망, Docker, Kubernetes까지

- 요약: SNAT·DNAT·MASQUERADE로 주소를 바꾸고 conntrack이 그 변환을 기억하는 원리를 보고, 게이트웨이와 포트 포워딩을 직접 구성한 뒤 Docker와 kube-proxy가 같은 규칙을 어떻게 쓰는지 따라간다.
- 태그: Linux, Network, Docker, Kubernetes, Firewall
- 키워드: MASQUERADE, 포트 포워딩, DNAT, DOCKER-USER, kube-proxy
- 길이: 663줄
- 소제목: 주소를 바꿔 쓰는 세 가지 방법 / 바꾼 주소는 conntrack이 기억한다 / 먼저 포워딩을 켠다 / 내부망을 인터넷에 내보내는 게이트웨이 / 바깥 포트를 내부 서버로 넘기는 포트 포워딩 / 같은 서버 안에서 포트만 바꾸는 REDIRECT / Docker가 만드는 규칙 / 쿠버네티스 Service는 nat 규칙 묶음이다 / NAT가 안 될 때 따라가는 순서 / 주소를 바꾸고 기억하는 일 / 면접에서 나올 만한 질문
- 직접 링크 →: iptables-basics, kubernetes-ingress
- 키워드 백링크 →: osi-in-practice, packet-capture-tcpdump, proxy-reverse-proxy, http-versions, sql-batch-timeout-pool, what-happens-google-com, udp-and-quic, dns
- 이 글로 오는 글 ←: docker-compose, docker-container-basics, docker-network-volume, iptables-basics, kubernetes-ingress, layer-ip-addressing, layer-ip-routing-icmp, network-layers-overview, osi-in-practice, packet-capture-tcpdump, ports-and-sockets, udp-and-quic

### Programming › Security (`programming/security`)

#### `cors` — CORS: 서버는 응답했는데 브라우저가 막는 이유

- 요약: 다른 출처로 보낸 요청은 서버까지 가는데, 응답을 읽을지는 브라우저가 서버의 허락 헤더를 보고 정한다. 같은 출처 정책, preflight, credentials, 흔한 설정 실수와 CSRF와의 관계까지 정리했다.
- 태그: CORS, Security, HTTP, Browser
- 키워드: CORS, Same-Origin Policy, 같은 출처 정책, preflight, Access-Control-Allow-Origin
- 길이: 513줄
- 소제목: 서버는 응답했는데 콘솔은 빨갛다 / 출처를 가르는 세 가지 / 남의 응답을 읽지 못하게 하는 이유 / 응답 헤더로 허락을 받는다 / 먼저 물어보는 요청 (preflight) / 허락 헤더 하나씩 / 쿠키까지 보내려면 / 열어 두다가 뚫리는 경우 / CORS는 브라우저가 지킨다 / CORS는 CSRF를 막지 못한다 / 개발할 때는 프록시로 돌아간다 / 평소엔 되다가 가끔만 나는 CORS 에러 / 다시 처음 장면으로 / 면접에서 나올 만한 질문
- 직접 링크 →: local-custom-domain, cookie-session-login, http-caching-cdn
- 키워드 백링크 →: json-crud-http, http-status-codes
- 이 글로 오는 글 ←: browser-fetch, cookie-session-login, core-web-vitals, frontend-browser-cache, html-form-http, http-caching-cdn, http-methods, json-crud-http, kubernetes-ingress, local-custom-domain, micro-frontends, realtime-communication

#### `https-tls` — HTTPS는 무엇을 지켜 주나: TLS 1.3

- 요약: 자물쇠가 보장하는 기밀성·무결성·인증과, 그래도 보이는 SNI. 인증서 체인 검증, TLS 1.3 핸드셰이크와 ECDHE, 0-RTT의 재전송 위험, TLS 종료와 mTLS, 자주 만나는 인증서 오류까지 정리했다.
- 태그: TLS, HTTPS, Security, Network
- 키워드: TLS 1.3, TLS 핸드셰이크, 인증서 체인, 중간 인증서, 전방향 안전성, mTLS
- 길이: 476줄
- 소제목: 자물쇠가 약속하는 세 가지 / 암호화해도 보이는 것 / 인증서 한 장 뜯어보기 / 믿음은 루트에서 내려온다 / 브라우저가 인증서를 검사하는 순서 / 인증서를 자동으로 받는 방법: ACME / TLS 1.3 핸드셰이크 한 단계씩 / 키를 보내지 않고 같은 키를 만든다 / 본문은 대칭키로 빠르게 / 다시 올 때는 0-RTT, 대신 재전송을 조심 / TLS를 어디서 끝낼까 / 서버끼리도 서로 확인한다: mTLS / 자주 마주치는 인증서 오류 / 자물쇠 하나에 들어 있는 것 / 면접에서 나올 만한 질문
- 직접 링크 →: dns, local-custom-domain, what-happens-google-com, resilience-patterns, gateway
- 키워드 백링크 →: kubernetes-ingress, nginx-basics, nginx-https-performance, http-versions, udp-and-quic, http-methods
- 이 글로 오는 글 ←: base64, gateway, http-message, http-status-codes, http-versions, kubernetes-ingress, layer-mtu-fragmentation, network-troubleshooting-by-layer, nginx-https-performance, osi-in-practice, packet-capture-tcpdump, proxy-reverse-proxy, udp-and-quic, upper-layers-session-presentation-app, what-happens-google-com

### Programming › Server/Infra › Docker (`programming/server-infra/docker`)

#### `docker-compose` — Docker Compose로 여러 컨테이너 한 번에 띄우기

- 요약: nginx, Node, Postgres, Redis를 compose.yaml 하나로 띄우면서 depends_on과 healthcheck로 정하는 시작 순서, .env 보간, down -v의 위험, 개발·운영 설정 분리까지 정리한다.
- 태그: Docker, DevOps, Linux
- 키워드: Docker Compose, compose.yaml, depends_on
- 길이: 607줄
- 소제목: docker-compose와 docker compose / 서비스 넷을 파일 하나에 / 서비스 블록 하나 뜯어보기 / .env는 컨테이너에 들어가지 않는다 / up 한 번에 일어나는 순서 / 요청 하나가 서비스를 건너가는 길 / 매일 쓰는 명령 / down과 down -v는 한 글자 차이다 / 개발과 운영을 파일로 나누기 / 비밀 값은 어디에 두나 / Compose로 버티는 데까지 / 파일 하나가 구성 전체를 말한다 / 면접에서 나올 만한 질문
- 직접 링크 →: docker-network-volume, docker-container-basics, dockerfile-image-layers, kubernetes-ingress
- 키워드 백링크 →: iptables-basics, proxy-reverse-proxy, redis-basics, iptables-nat, redis-persistence-ha, dns
- 이 글로 오는 글 ←: docker-network-volume, dockerfile-image-layers

#### `docker-container-basics` — 컨테이너는 무엇인가: Docker로 처음 띄워 보기

- 요약: 컨테이너가 VM과 달리 호스트 커널을 함께 쓰는 프로세스이고 namespace와 cgroups로 격리된다는 것을 직접 확인한 뒤, Ubuntu에 Docker를 설치해 컨테이너를 띄우고 들여다보고 멈추고 지우는 데까지 간다.
- 태그: Docker, Container, Linux, DevOps
- 키워드: cgroups, namespace, Docker Engine, 컨테이너 이미지
- 길이: 850줄
- 소제목: 서버마다 환경이 달라서 생기는 일 / 가상 머신은 커널까지, 컨테이너는 그 위만 / 프로세스마다 다른 세상을 보여 주는 namespace / 쓸 수 있는 양을 묶는 cgroups / 이미지는 틀, 컨테이너는 찍어 낸 것 / Ubuntu 24.04에 Docker Engine 설치하기 / docker run 한 줄이 지나가는 길 / docker run 옵션 뜯어보기 / 띄우고, 들여다보고, 멈추고, 지우기 / 재시작 정책과 PID 1 / 자원과 디스크 들여다보기 / 이미지 이름은 레지스트리부터 다이제스트까지 / 컨테이너를 다시 정리하면 / 면접에서 나올 만한 질문
- 직접 링크 →: dockerfile-image-layers, iptables-nat
- 키워드 백링크 →: iptables-basics, rest-api-design, udp-and-quic
- 이 글로 오는 글 ←: docker-compose, docker-network-volume, dockerfile-image-layers, gateway, kubernetes-ingress, layer-ip-addressing, layer-ip-routing-icmp, layer-link-ethernet-arp, network-layers-overview, network-troubleshooting-by-layer, osi-in-practice, packet-capture-tcpdump, proxy-reverse-proxy

#### `docker-network-volume` — Docker 네트워크와 볼륨: 컨테이너끼리 대화하고 데이터 남기기

- 요약: 컨테이너 안의 localhost가 왜 DB에 닿지 않는지, docker rm 한 번에 데이터가 왜 사라지는지에서 출발해 사용자 정의 브리지와 내장 DNS, -p가 만드는 DNAT, named volume과 bind mount, 볼륨 백업까지 따라간다.
- 태그: Docker, Network, Linux, DevOps
- 키워드: named volume, bind mount, 사용자 정의 브리지, host.docker.internal
- 길이: 715줄
- 소제목: 컨테이너 안의 localhost는 컨테이너 자신이다 / 네트워크 드라이버 다섯 가지 / 이름으로 찾아가는 사용자 정의 브리지 / -p 한 줄이 만드는 것 / 컨테이너에서 호스트로 가는 길 / docker rm 하면 데이터가 왜 사라지나 / 데이터를 바깥에 두는 네 가지 방법 / -v와 --mount 읽기 / 볼륨을 만들고 들여다보기 / 볼륨을 tar로 백업하고 되살리기 / 바인드 마운트와 UID / Postgres와 앱을 처음부터 다시 띄우기 / 격리를 얼마나 풀어 줄지 정하는 일 / 면접에서 나올 만한 질문
- 직접 링크 →: docker-container-basics, dockerfile-image-layers, iptables-nat, docker-compose
- 키워드 백링크 →: nginx-basics, iptables-basics, postgres-operations, proxy-reverse-proxy, layer-link-ethernet-arp, redis-basics, udp-and-quic, dns
- 이 글로 오는 글 ←: docker-compose, dockerfile-image-layers, layer-link-ethernet-arp, network-troubleshooting-by-layer, ports-and-sockets

#### `dockerfile-image-layers` — Dockerfile과 이미지 레이어: 빠르고 작은 이미지 만들기

- 요약: Dockerfile 명령이 레이어가 되고 빌드 캐시가 처음 바뀐 줄에서 끊기는 원리를 보고, 의존성 먼저 복사하기, 멀티 스테이지 빌드, 베이스 이미지 선택, BuildKit 캐시 마운트로 빌드를 빠르게, 이미지를 작게 만든다.
- 태그: Docker, Container, DevOps, Performance
- 키워드: Dockerfile, 멀티 스테이지 빌드, 빌드 캐시, BuildKit, distroless
- 길이: 727줄
- 소제목: 문제가 된 Dockerfile / 명령어 한 줄씩 읽기 / ENTRYPOINT와 CMD, exec 형식과 셸 형식 / 명령 하나가 레이어 한 장 / 캐시는 처음 바뀐 줄에서 끊긴다 / 잘 안 바뀌는 것을 위에 둔다 / .dockerignore로 보내는 것부터 줄인다 / 빌드 도구는 두고 결과만 옮기는 멀티 스테이지 빌드 / 베이스 이미지: slim, alpine, distroless / root가 아닌 사용자로, 상태는 HEALTHCHECK로 / BuildKit 캐시 마운트와 여러 아키텍처 빌드 / 태그 붙여 올리고, 올리기 전에 검사하기 / 빌드는 됐는데 서버에서 안 뜰 때 / 처음 문제로 돌아가면 / 면접에서 나올 만한 질문
- 직접 링크 →: docker-container-basics, docker-network-volume
- 키워드 백링크 →: docker-compose, dns
- 이 글로 오는 글 ←: docker-compose, docker-container-basics, docker-network-volume, git-tips-advanced

### Programming › Server/Infra › Kubernetes (`programming/server-infra/kubernetes`)

#### `gateway` — 게이트웨이: API 게이트웨이에서 Kubernetes Gateway API까지

- 요약: 흩어진 서비스 앞에 입구를 하나 세우는 API 게이트웨이를 리버스 프록시·로드 밸런서와 비교하고, Ingress의 뒤를 잇는 Gateway API가 역할을 어떻게 나누는지 정리한다.
- 태그: coupang, Kubernetes, Gateway, Ingress, HTTP · 회사: coupang
- 키워드: API 게이트웨이, Gateway API, HTTPRoute, ReferenceGrant, BFF
- 길이: 485줄
- 소제목: 입구를 하나로 모으기 / 로드 밸런서, 리버스 프록시와 무엇이 다른가 / 게이트웨이가 너무 똑똑해지면 / 쿠버네티스의 입구, Ingress로는 부족했던 것 / 리소스를 역할별로 나눈 Gateway API / HTTPRoute 뜯어보기 / 헤더로 고르고 비율로 나누기 / 네임스페이스를 넘어 참조하기 / Ingress에서 옮겨 갈 때 / 게이트웨이를 사이에 두고 로그가 엇갈릴 때 / 입구 하나, 규칙은 여러 사람이 / 면접에서 나올 만한 질문
- 직접 링크 →: kubernetes-ingress, resilience-patterns
- 키워드 백링크 →: osi-in-practice, docker-container-basics, proxy-reverse-proxy, token-login, redis-basics, what-happens-google-com, https-tls, udp-and-quic, http-methods, dns
- 이 글로 오는 글 ←: http-methods, http-status-codes, https-tls, kubernetes-ingress, microservices, mvc-pattern, network-layers-overview, nginx-reverse-proxy, osi-in-practice, proxy-reverse-proxy, resilience-patterns, rest-api-design

#### `kubernetes-ingress` — Kubernetes Ingress: 로드 밸런서 하나로 여러 서비스 열기

- 요약: 서비스마다 로드 밸런서를 다는 대신 Ingress 규칙과 컨트롤러로 입구를 하나로 합친다. host·path 라우팅, TLS 종료와 cert-manager, 요청이 Pod에 닿는 경로와 흔한 에러까지 따라가 본다.
- 태그: Kubernetes, Ingress, HTTP, TLS
- 키워드: Ingress, Ingress Controller, ingress-nginx, IngressClass, cert-manager
- 길이: 433줄
- 소제목: 서비스마다 로드 밸런서를 달면 / 규칙과 규칙을 실행하는 쪽 / 매니페스트 한 줄씩 읽기 / 경로가 겹치면 누가 이기나 / 요청 하나가 Pod에 닿기까지 / HTTPS는 컨트롤러에서 끝난다 / 어노테이션이 자꾸 늘어난다 / 502, 503, 413을 만났을 때 / Ingress가 하는 일, 다시 / 면접에서 나올 만한 질문
- 직접 링크 →: gateway, network-troubleshooting-by-layer, packet-capture-tcpdump
- 키워드 백링크 →: proxy-reverse-proxy, iptables-nat, osi-in-practice, docker-container-basics, https-tls, http-status-codes, what-happens-google-com, cors, dns
- 이 글로 오는 글 ←: cookie-session-login, docker-compose, gateway, http-message, https-tls, iptables-nat, osi-in-practice

### Programming › Server/Infra › Nginx (`programming/server-infra/nginx`)

#### `nginx-basics` — Nginx 기본: 설정 파일을 읽는 법

- 요약: 설치했는데 기본 페이지나 403만 보이는 상황에서 출발해 master·worker 구조, Ubuntu의 sites-enabled 배치, server와 location이 골라지는 순서, root와 alias, try_files를 따라간다. nginx -t와 reload로 안전하게 바꾸고 로그로 원인을 찾는 법까지 정리한다.
- 태그: Nginx, Linux, HTTP, DevOps
- 키워드: nginx.conf, server_name, try_files, sites-enabled, location 블록
- 길이: 792줄
- 소제목: 설치하고 떠 있는지 확인하기 / master 하나와 worker 몇 개 / Ubuntu의 설정 파일 배치 / 블록은 안쪽으로 상속된다 / 요청 하나를 받을 server 고르기 / location은 이 순서로 고른다 / root와 alias는 경로를 다르게 만든다 / index와 try_files / 403이 나는 이유 / 바꾸기 전에 -t, 적용은 reload / 로그를 읽는 법 / 설정은 nginx가 읽는 순서대로 읽는다 / 면접에서 나올 만한 질문
- 직접 링크 →: nginx-reverse-proxy, nginx-https-performance
- 키워드 백링크 →: realtime-communication, proxy-reverse-proxy, event-loop, http-status-codes, what-happens-google-com, db-modeling-normalization
- 이 글로 오는 글 ←: docker-network-volume, https-tls, local-custom-domain, nginx-https-performance, nginx-reverse-proxy, what-happens-google-com

#### `nginx-https-performance` — Nginx HTTPS·성능·보안 설정

- 요약: certbot으로 인증서를 받아 자동 갱신하고 HTTPS 리다이렉트, TLS와 HTTP/2, HSTS를 붙인다. gzip과 정적 파일 캐시 헤더, proxy_cache, limit_req 속도 제한, 보안 헤더를 설정한 뒤 curl과 openssl로 바깥에서 확인한다.
- 태그: Nginx, HTTPS, TLS, Performance, Security
- 키워드: certbot, proxy_cache, limit_req, gzip_types
- 길이: 864줄
- 소제목: 인증서는 certbot에게 맡긴다 / HTTP는 HTTPS로 돌려보낸다 / TLS 버전과 암호, HTTP2 켜기 / 압축은 텍스트에만 / 정적 파일 캐시 헤더 / 업스트림 응답을 nginx에 저장하기 / 요청 수를 제한한다 / 보안 헤더와 숨길 것 / 바깥에서 확인하기 / HTTPS를 붙인 뒤에 걸려 오는 전화 / 앞단에서 한 번에 처리한다 / 면접에서 나올 만한 질문
- 직접 링크 →: nginx-reverse-proxy, https-tls, http-caching-cdn, nginx-basics, http-versions, iptables-basics, network-troubleshooting-by-layer
- 키워드 백링크 →: cookie-session-login, what-happens-google-com, udp-and-quic, dns
- 이 글로 오는 글 ←: https-tls, nginx-basics, nginx-reverse-proxy

#### `nginx-reverse-proxy` — Nginx 리버스 프록시와 로드 밸런싱

- 요약: proxy_pass의 끝 슬래시 규칙, 앱에 넘겨야 할 Host·X-Forwarded-* 헤더, upstream과 로드 밸런싱 방식, 실패한 서버를 빼는 법과 keepalive를 설정으로 따라간다. 502와 504가 생기는 자리, WebSocket, 버퍼링, 413까지 로그와 함께 본다.
- 태그: Nginx, HTTP, Network, DevOps
- 키워드: proxy_pass, upstream 블록, least_conn, proxy_set_header
- 길이: 621줄
- 소제목: proxy_pass 한 줄로 넘기기 / 끝 슬래시 하나가 경로를 바꾼다 / 앱에게 진짜 손님 정보를 넘긴다 / upstream으로 서버 여럿에 나누기 / 502와 504가 나는 자리 / WebSocket은 연결을 바꿔 달라고 요청한다 / 버퍼링은 켜 두고, 흘려보낼 때만 끈다 / 업로드는 1MB에서 막힌다 / 앞에 서서 대신 받아 주는 자리 / 면접에서 나올 만한 질문
- 직접 링크 →: proxy-reverse-proxy, nginx-basics, http-status-codes, realtime-communication, nginx-https-performance, gateway
- 키워드 백링크 →: tcp-connection-lifecycle, browser-fetch, osi-in-practice, redis-basics, resilience-patterns, what-happens-google-com, http-methods
- 이 글로 오는 글 ←: html-form-http, http-methods, http-status-codes, http-versions, network-layers-overview, nginx-basics, nginx-https-performance, osi-in-practice, packet-capture-tcpdump, proxy-reverse-proxy, realtime-communication, rest-api-design

### Programming › System Design (`programming/system-design`)

#### `caching-strategies` — 캐시 전략: 언제 넣고 언제 지우나

- 요약: cache-aside부터 write-behind까지 캐시를 채우고 지우는 패턴을 비교하고, DB와 캐시 사이의 경쟁, 스탬피드, 관통, 눈사태, 핫 키를 막는 방법을 정리한다.
- 태그: Cache, Redis, System Design, Performance
- 키워드: cache-aside, write-through, write-behind, 캐시 관통, 핫 키
- 길이: 657줄
- 소제목: 캐시를 먼저 보고 없으면 DB에서: cache-aside / 캐시가 대신 읽어 오는 read-through / 쓰기는 어디로 먼저 보내나 / TTL은 얼마나 낡아도 되는지로 정한다 / 고칠 때 캐시를 지울까, 같이 고칠까 / 지웠는데 옛 값이 다시 들어가는 경우 / 만료 순간 같은 키로 몰리는 요청 / 키 하나에만 몰리는 트래픽 / 없는 데이터를 계속 물어볼 때 / 여러 키가 한꺼번에 만료될 때 / 로컬 캐시와 Redis를 겹쳐 쓰기 / LRU 캐시를 직접 짜 보기 / 캐시가 일하는지 숫자로 본다 / 고친 값이 안 바뀐다는 문의가 오면 / 캐시는 지우는 일까지가 설계다 / 면접에서 나올 만한 질문
- 직접 링크 →: redis-basics, resilience-patterns, http-caching-cdn, redis-persistence-ha, redis-memory-eviction, osi-in-practice
- 키워드 백링크 →: redis-cluster, db-type-columnar-olap, db-replication-sharding, dns
- 이 글로 오는 글 ←: db-architecture-by-scale, db-replication-sharding, db-type-key-value, db-type-relational, frontend-browser-cache, postgres-reporting-sql, redis-basics, redis-memory-eviction

#### `db-architecture-by-scale` — 서비스 규모별 DB 설계: 한 대에서 여러 저장소까지

- 요약: 새 서비스는 PostgreSQL 한 대에서 시작해, 연결 수, CPU, p99, 복제 지연 같은 숫자가 보일 때 캐시와 복제본, 분석과 검색 저장소, 서비스별 DB로 넘어간다. 아웃박스, 무중단 스키마 변경, 권한 분리처럼 각 단계에서 필요한 실무 장치도 SQL로 함께 본다.
- 태그: Database, PostgreSQL, System Design, Architecture, Scalability
- 키워드: 폴리글랏 퍼시스턴스, database per service, expand/contract, SKIP LOCKED, PgBouncer
- 길이: 727줄
- 소제목: 처음엔 PostgreSQL 한 대면 된다 / 연결은 풀로 묶어서 쓴다 / 백업은 복원해 봐야 안다 / 읽기가 몰리면 캐시와 복제본 / 분석 쿼리는 다른 곳에서 돌린다 / 검색과 작업 큐도 따로 떼어 낸다 / 서비스마다 DB를 따로 둔다 / DB에 쓰고 이벤트를 보내는 사이 / 저장소는 접근 패턴으로 고른다 / 열 이름 하나를 다섯 단계로 바꾼다 / 앱 계정에는 필요한 권한만 준다 / 매일 볼 숫자들 / 단계를 넘어가는 신호 / 자주 보는 실수 / 규모보다 읽는 방식이 먼저다 / 면접에서 나올 만한 질문
- 직접 링크 →: db-replication-sharding, db-modeling-normalization, db-transaction-isolation, db-index, caching-strategies, redis-basics, elasticsearch-inverted-index, microservices, mongodb-document-model, vector-db
- 키워드 백링크 →: db-type-time-series, postgres-advanced-sql, db-type-columnar-olap, postgres-mvcc-vacuum, db-sharding, db-type-wide-column, db-type-key-value, db-type-relational, db-type-graph, http-caching-cdn, sql-batch-timeout-pool, postgres-operations, postgres-jsonb-search, db-partitioning, sql-basics
- 이 글로 오는 글 ←: db-replication-sharding, db-sharding, db-type-columnar-olap, db-type-relational, db-types-overview, microservices, postgres-architecture, postgres-connections-pg-hba, postgres-functions-triggers, postgres-operations, postgres-roles-security, sql-batch-timeout-pool

#### `microservices` — 모놀리스에서 마이크로서비스로

- 요약: 서비스를 쪼개면 독립 배포와 팀 자율성을 얻는 대신 네트워크 호출, 분산 트랜잭션, 데이터 소유권 문제가 생긴다. 바운디드 컨텍스트로 경계를 긋는 법, 동기와 비동기 통신, 사가와 아웃박스, 모듈러 모놀리스와 스트랭글러 피그 이전까지 다룬다.
- 태그: coupang, MSA, Distributed Systems, System Design · 회사: coupang
- 키워드: 마이크로서비스, 모놀리스, 사가 패턴, 트랜잭셔널 아웃박스, 스트랭글러 피그
- 길이: 388줄
- 소제목: 한 덩어리가 버거워지는 순간 / 쪼개면 공짜가 아닌 것들 / 어디서 자를 것인가 / 데이터베이스도 서비스마다 / 부를 것인가, 알릴 것인가 / 트랜잭션이 서비스 경계를 넘을 때 / 결국에는 맞춰지는 데이터 / 입구는 게이트웨이와 BFF에 맡긴다 / 쪼개지 않는 편이 나은 경우 / 조금씩 옮기기, 스트랭글러 피그 / 쪼갠 뒤 처음 받는 장애 문의 / 쪼개는 건 결국 경계를 정하는 일 / 면접에서 나올 만한 질문
- 직접 링크 →: resilience-patterns, gateway
- 키워드 백링크 →: db-architecture-by-scale, db-type-columnar-olap, client-data-cache, db-index-design, http-versions, js-memory-leak, http-methods
- 이 글로 오는 글 ←: db-architecture-by-scale, db-locking-deadlock, db-sharding, micro-frontends, rest-api-design

#### `resilience-patterns` — 장애가 번지지 않게: 타임아웃, 재시도, 서킷 브레이커

- 요약: 느린 의존성 하나가 스레드 풀을 바닥내며 번지는 연쇄 장애를 따라가고, 타임아웃과 데드라인 전파, 지터 섞인 백오프와 재시도 예산, 멱등성 키, 서킷 브레이커, 벌크헤드, 폴백, 부하 차단으로 막는 법을 정리한다. 프런트엔드의 AbortSignal 타임아웃과 기능 축소 화면도 다룬다.
- 태그: coupang, Resilience, Distributed Systems, System Design · 회사: coupang
- 키워드: 서킷 브레이커, 지수 백오프, 멱등성 키, 벌크헤드, 연쇄 장애
- 길이: 414줄
- 소제목: 느린 서비스 하나가 전부를 멈추는 과정 / 기다림에 끝을 정한다: 타임아웃 / 다시 보내기: 지수 백오프와 지터 / 두 번 보내도 한 번만 처리되게 / 회로를 끊어 두는 서킷 브레이커 / 칸막이로 피해를 가두기 / 안 되면 덜 보여 주기 / 들어오는 양 자체를 줄이기 / 프런트엔드에서 본 장애 대응 / 실패를 예상하고 짜는 코드 / 면접에서 나올 만한 질문
- 직접 링크 →: gateway
- 키워드 백링크 →: client-data-cache, osi-in-practice, sql-batch-timeout-pool, http-methods
- 이 글로 오는 글 ←: browser-fetch, caching-strategies, gateway, html-form-http, http-methods, http-status-codes, https-tls, json-crud-http, microservices, nginx-reverse-proxy, osi-in-practice, realtime-communication, rest-api-design

### 자기개발 › 수학 (`self-development/math`)

#### `pythagorean-theorem` — 피타고라스 정리, 삼각형 네 개를 옮겨 보면

- 요약: 거리 계산 코드마다 들어 있는 a² + b² = c². 삼각형 네 개의 자리만 바꾸는 증명과 피타고라스 수, 역, 그리고 n차원 거리 공식까지 이어 봤다.
- 태그: Math, Geometry, Algorithm
- 키워드: 피타고라스 정리, 유클리드 거리, 피타고라스 수
- 길이: 267줄
- 소제목: 직각삼각형의 세 변 사이에 있는 규칙 / 삼각형 네 개를 옮겨 보면 / 3, 4, 5 같은 숫자들 / 거꾸로도 성립한다 / 거리 공식이 되기까지 / 이름은 피타고라스지만 / 정리 / 면접에서 나올 만한 질문
- 키워드 백링크 →: vector-db
- 이 글로 오는 글 ←: vector-db

## 키워드 소유 (백링크 대상)

같은 키워드를 두 글이 가지면 긴 키워드·먼저 찾은 글로만 링크된다. 새 글의 키워드는 여기 없는 말로 고른다.

- .gitignore → `git-ignore-config`
- /etc/hosts → `hosts-file`
- 3-way 병합 → `git-branch-merge`
- 3-way handshake → `what-happens-google-com`
- 308 Permanent Redirect → `http-status-codes`
- 3값 논리 → `sql-select-where-null`
- 3단계 스키마 → `sqld-data-modeling`
- 415 Unsupported Media Type → `json-crud-http`
- 5-tuple → `ports-and-sockets`
- 가비지 컬렉션 → `js-memory-leak`
- 같은 출처 정책 → `cors`
- 개념적 모델링 → `sqld-data-modeling`
- 갱신 손실 → `db-transaction-isolation`
- 격리 수준 → `db-transaction-isolation`
- 계층형 쿼리 → `sqld-top-n-hierarchical-pivot`
- 공간 복잡도 → `big-o-notation`
- 관계형 DB → `db-type-relational`
- 교차 엔터티 → `sqld-entity-attribute-relationship`
- 교착 상태 → `db-locking-deadlock`
- 권한 있는 네임서버 → `dns`
- 그래프 DB → `db-type-graph`
- 낙관적 업데이트 → `client-data-cache`
- 낙관적 잠금 → `db-locking-deadlock`
- 내용 주소 지정 → `git-internals-basics`
- 논리적 실행 순서 → `sqld-group-by-having`
- 다운샘플링 → `db-type-time-series`
- 단방향 데이터 흐름 → `mvc-pattern`
- 단일 테이블 설계 → `db-type-key-value`
- 단일행 함수 → `sqld-single-row-functions`
- 단편화 → `layer-mtu-fragmentation`
- 대리 키 → `db-keys-denormalization`
- 대역폭 지연 곱 → `tcp-reliability-congestion`
- 데이터 독립성 → `sqld-data-modeling`
- 데이터 모델 비교 → `db-types-overview`
- 도메인 샤딩 → `http-versions`
- 동적 import → `code-splitting`
- 라우팅 테이블 → `layer-ip-routing-icmp`
- 레이아웃 스래싱 → `core-web-vitals`
- 렌더링 파이프라인 → `what-happens-google-com`
- 로컬 도메인 → `local-custom-domain`
- 롱 폴링 → `realtime-communication`
- 리렌더링 → `react-rerender`
- 리버스 프록시 → `proxy-reverse-proxy`
- 리프레시 토큰 → `token-login`
- 마이크로 프런트엔드 → `micro-frontends`
- 마이크로 프론트엔드 → `micro-frontends`
- 마이크로서비스 → `microservices`
- 마이크로태스크 → `event-loop`
- 머티리얼라이즈드 뷰 → `postgres-reporting-sql`
- 멀티 스테이지 빌드 → `dockerfile-image-layers`
- 멀티 존 → `micro-frontends`
- 멀티플렉싱 → `http-versions`
- 메모리 누수 → `js-memory-leak`
- 메모리 단편화 → `redis-memory-eviction`
- 멱등성 → `http-methods`
- 멱등성 키 → `resilience-patterns`
- 모놀리스 → `microservices`
- 문자 인코딩 → `upper-layers-session-presentation-app`
- 반정규화 → `db-keys-denormalization`
- 배럴 파일 → `code-splitting`
- 배제 제약 → `postgres-data-types`
- 배치 INSERT → `sql-batch-timeout-pool`
- 벌크헤드 → `resilience-patterns`
- 벡터 DB → `vector-db`
- 변경 데이터 캡처 → `db-type-columnar-olap`
- 병합 충돌 → `git-merge-conflict`
- 복제 슬롯 → `db-replication-sharding`
- 복제 지연 → `db-replication-sharding`
- 복합 인덱스 → `db-index-design`
- 부분 동기화 → `redis-replication-sentinel`
- 부분 유니크 인덱스 → `db-keys-denormalization`
- 부분 인덱스 → `db-index-design`
- 부분 clone → `git-remote-collaboration`
- 분산 락 → `redis-basics`
- 분산 SQL → `db-type-newsql`
- 분할 상환 → `big-o-notation`
- 비관적 잠금 → `db-locking-deadlock`
- 비식별 관계 → `sqld-entity-attribute-relationship`
- 빈약한 도메인 모델 → `mvc-pattern`
- 빌드 캐시 → `dockerfile-image-layers`
- 사가 패턴 → `microservices`
- 사설 대역 → `layer-ip-addressing`
- 사용자 정의 브리지 → `docker-network-volume`
- 상관 서브쿼리 → `sqld-correlated-subquery`
- 상태 코드 → `http-status-codes`
- 샤드 키 → `mongodb-document-model`
- 서버 상태 → `client-data-cache`
- 서버 컴포넌트 → `rendering-strategies`
- 서브넷 마스크 → `layer-ip-addressing`
- 서킷 브레이커 → `resilience-patterns`
- 선형화 가능성 → `db-consistency-cap`
- 세션 계층 → `upper-layers-session-presentation-app`
- 세션 쿠키 → `cookie-session-login`
- 세션 ID → `cookie-session-login`
- 스칼라 서브쿼리 → `sqld-correlated-subquery`
- 스테이징 영역 → `git-staging-area`
- 스트랭글러 피그 → `microservices`
- 스트리밍 복제 → `db-replication-sharding`
- 스트리밍 SSR → `rendering-strategies`
- 시간 복잡도 → `big-o-notation`
- 시계열 DB → `db-type-time-series`
- 시점 복구 → `postgres-operations`
- 식 인덱스 → `db-index-design`
- 쓰기 왜곡 → `db-transaction-isolation`
- 쓰기 증폭 → `db-index-pitfalls`
- 쓰기 CTE → `postgres-advanced-sql`
- 안전한 메서드 → `http-methods`
- 암시적 형 변환 → `sqld-type-conversion`
- 액세스 토큰 → `token-login`
- 얕은 clone → `git-remote-collaboration`
- 역색인 → `elasticsearch-inverted-index`
- 연쇄 장애 → `resilience-patterns`
- 와이드 컬럼 → `db-type-wide-column`
- 요청 스머글링 → `http-message`
- 원격 추적 브랜치 → `git-remote-collaboration`
- 원본과 사본 → `db-types-overview`
- 윈도우 프레임 → `sqld-window-functions`
- 윈도우 함수 → `sqld-window-functions`
- 유클리드 거리 → `pythagorean-theorem`
- 이더넷 프레임 → `layer-link-ethernet-arp`
- 이벤트 루프 → `event-loop`
- 인가 코드 → `oauth`
- 인라인 뷰 → `sqld-subquery-set-operators`
- 인증서 체인 → `https-tls`
- 일관된 해싱 → `db-sharding`
- 읽기 복제본 → `db-replication-sharding`
- 임베디드 DB → `db-type-embedded`
- 임베딩 → `vector-db`
- 임시 포트 → `ports-and-sockets`
- 자동 배칭 → `react-rerender`
- 자연 키 → `db-keys-denormalization`
- 작업 트리 → `git-staging-area`
- 장애 좁히기 → `network-troubleshooting-by-layer`
- 재귀 리졸버 → `dns`
- 재귀 CTE → `sqld-top-n-hierarchical-pivot`
- 재조정 → `react-rerender`
- 전방향 안전성 → `https-tls`
- 전이 테이블 → `postgres-functions-triggers`
- 접속 URI → `postgres-connections-pg-hba`
- 정규화 → `db-modeling-normalization`
- 주식별자 → `sqld-entity-attribute-relationship`
- 중간 인증서 → `https-tls`
- 중첩 서브쿼리 → `sqld-subquery-set-operators`
- 증폭 공격 → `udp-and-quic`
- 지수 백오프 → `resilience-patterns`
- 집계 파이프라인 → `mongodb-document-model`
- 집계 함수 → `sqld-group-by-having`
- 집합 연산자 → `sqld-set-operators`
- 참조 무결성 → `sql-basics`
- 체크포인트 → `postgres-architecture`
- 최장 접두사 일치 → `layer-ip-routing-icmp`
- 최종 일관성 → `db-consistency-cap`
- 축출 정책 → `redis-memory-eviction`
- 카디널리티 폭발 → `db-type-time-series`
- 카티션 곱 → `sqld-joins`
- 캐시 관통 → `caching-strategies`
- 캐시 무효화 → `http-caching-cdn`
- 캐시 스탬피드 → `http-caching-cdn`
- 커넥션 풀 → `sql-batch-timeout-pool`
- 커버링 인덱스 → `db-index-design`
- 커서 페이지네이션 → `rest-api-design`
- 컨테이너 이미지 → `docker-container-basics`
- 컬럼형 저장 → `db-type-columnar-olap`
- 코드 스플리팅 → `code-splitting`
- 콘텐츠 협상 → `http-message`
- 쿠키 세션 → `cookie-session-login`
- 클러스터드 인덱스 → `db-index`
- 키-값 저장소 → `db-type-key-value`
- 키셋 페이지네이션 → `sql-query-rewrite`
- 킬 스위치 → `ab-testing`
- 태스크 큐 → `event-loop`
- 툼스톤 → `db-type-wide-column`
- 트랜잭셔널 아웃박스 → `microservices`
- 트렁크 기반 개발 → `git-branching-strategy`
- 트리 셰이킹 → `code-splitting`
- 파티셔닝 → `db-partitioning`
- 파티션 가지치기 → `db-partitioning`
- 패킷 캡처 → `packet-capture-tcpdump`
- 포워드 프록시 → `proxy-reverse-proxy`
- 포트 포워딩 → `iptables-nat`
- 폴리글랏 퍼시스턴스 → `db-architecture-by-scale`
- 표본 비율 불일치 → `ab-testing`
- 표현 계층 → `upper-layers-session-presentation-app`
- 프론트 컨트롤러 → `mvc-pattern`
- 피처 플래그 → `ab-testing`
- 피타고라스 수 → `pythagorean-theorem`
- 피타고라스 정리 → `pythagorean-theorem`
- 하이드레이션 → `rendering-strategies`
- 함수 기반 인덱스 → `sqld-type-conversion`
- 함수 종속 → `db-modeling-normalization`
- 핫 키 → `caching-strategies`
- 핫 파티션 → `db-type-key-value`
- 해시 슬롯 → `redis-cluster`
- 해시 조인 → `db-type-relational`
- 행 단위 보안 → `postgres-roles-security`
- 헬스 체크 → `osi-in-practice`
- 형태소 분석기 → `elasticsearch-inverted-index`
- 혼잡 제어 → `tcp-reliability-congestion`
- 흐름 제어 → `tcp-reliability-congestion`
- 힙 스냅샷 → `js-memory-leak`
- A/B 테스트 → `ab-testing`
- AbortController → `browser-fetch`
- AbortSignal → `browser-fetch`
- accept 큐 → `tcp-connection-lifecycle`
- Accept-Encoding → `http-message`
- Access-Control-Allow-Origin → `cors`
- ADD_MONTHS → `sqld-single-row-functions`
- Address already in use → `ports-and-sockets`
- allkeys-lru → `redis-memory-eviction`
- allowedDevOrigins → `local-custom-domain`
- ALTER DEFAULT PRIVILEGES → `postgres-roles-security`
- annotated tag → `git-internals-basics`
- AOF → `redis-persistence-ha`
- API 게이트웨이 → `gateway`
- API 버전 관리 → `rest-api-design`
- appendfsync → `redis-persistence-ha`
- application/x-www-form-urlencoded → `html-form-http`
- ARP → `layer-link-ethernet-arp`
- autosquash → `git-rebase`
- autovacuum → `postgres-mvcc-vacuum`
- B-tree 인덱스 → `db-index`
- Base64 → `base64`
- base64url → `base64`
- Basic 인증 → `base64`
- BBR → `tcp-reliability-congestion`
- BCNF → `db-modeling-normalization`
- bfcache → `frontend-browser-cache`
- BFF → `gateway`
- Big O → `big-o-notation`
- bind mount → `docker-network-volume`
- Bitmap Heap Scan → `db-index`
- blob 객체 → `git-internals-basics`
- BM25 → `elasticsearch-inverted-index`
- BRIN → `db-index-design`
- BuildKit → `dockerfile-image-layers`
- Cache Storage → `frontend-browser-cache`
- cache-aside → `caching-strategies`
- Cache-Control → `http-caching-cdn`
- cannot lock ref → `git-repo-errors`
- CAP 정리 → `db-consistency-cap`
- Cassandra → `db-type-wide-column`
- cert-manager → `kubernetes-ingress`
- certbot → `nginx-https-performance`
- cgroups → `docker-container-basics`
- cherry-pick → `git-tips-advanced`
- CIDR → `layer-ip-addressing`
- ClickHouse → `db-type-columnar-olap`
- CLOSE_WAIT → `tcp-connection-lifecycle`
- CLS → `core-web-vitals`
- CNAME → `dns`
- COALESCE → `sqld-null-functions`
- CockroachDB → `db-type-newsql`
- commit-msg 훅 → `git-tips-advanced`
- compose.yaml → `docker-compose`
- CONNECT 터널 → `proxy-reverse-proxy`
- CONNECT BY → `sqld-top-n-hierarchical-pivot`
- conntrack → `iptables-basics`
- Conventional Commits → `git-branching-strategy`
- Core Web Vitals → `core-web-vitals`
- core.autocrlf → `git-ignore-config`
- CORS → `cors`
- CREATE INDEX CONCURRENTLY → `db-index-pitfalls`
- CSRF → `cookie-session-login`
- Cypher → `db-type-graph`
- data URL → `base64`
- database per service → `db-architecture-by-scale`
- DB 종류 → `db-types-overview`
- DDL → `sql-basics`
- DECODE → `sqld-null-functions`
- default 파티션 → `db-partitioning`
- DENSE_RANK → `sqld-window-functions`
- depends_on → `docker-compose`
- detached DOM → `js-memory-leak`
- detached HEAD → `git-branch-merge`
- DISTINCT ON → `postgres-reporting-sql`
- distroless → `dockerfile-image-layers`
- divergent branches → `git-troubleshooting`
- DNAT → `iptables-nat`
- DNS → `dns`
- dnsmasq → `local-custom-domain`
- DNSSEC → `dns`
- Docker Compose → `docker-compose`
- Docker Engine → `docker-container-basics`
- DOCKER-USER → `iptables-nat`
- Dockerfile → `dockerfile-image-layers`
- DoH → `dns`
- dubious ownership → `git-repo-errors`
- DuckDB → `db-type-columnar-olap`
- DynamoDB → `db-type-key-value`
- Elasticsearch → `elasticsearch-inverted-index`
- ERD → `sqld-data-modeling`
- ESR 규칙 → `mongodb-document-model`
- ETag → `http-caching-cdn`
- etcd → `db-type-key-value`
- EventSource → `realtime-communication`
- expand/contract → `db-architecture-by-scale`
- EXPLAIN ANALYZE → `sql-query-tuning`
- fast-forward → `git-branch-merge`
- fetch first → `git-troubleshooting`
- first-parent → `git-branch-merge`
- force-with-lease → `git-remote-collaboration`
- FormData → `html-form-http`
- full_page_writes → `postgres-architecture`
- Gateway API → `gateway`
- gcTime → `client-data-cache`
- generate_series → `postgres-reporting-sql`
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
- GitHub Flow → `git-branching-strategy`
- Gratuitous ARP → `layer-link-ethernet-arp`
- GROUP BY → `sqld-group-by-having`
- GROUPING SETS → `sqld-rollup-cube-grouping-sets`
- GROUPING_ID → `sqld-rollup-cube-grouping-sets`
- gzip_types → `nginx-https-performance`
- Hash Join → `sql-query-tuning`
- HATEOAS → `rest-api-design`
- HAVING → `sqld-group-by-having`
- HNSW → `vector-db`
- host.docker.internal → `docker-network-volume`
- hosts 파일 → `hosts-file`
- HOT 업데이트 → `postgres-mvcc-vacuum`
- HPACK → `http-versions`
- HSTS → `what-happens-google-com`
- HTML 폼 → `html-form-http`
- HTTP/2 → `http-versions`
- HTTP/3 → `http-versions`
- HTTPRoute → `gateway`
- HTTPS → `what-happens-google-com`
- I/O 다중화 → `redis-basics`
- ICMP → `layer-ip-routing-icmp`
- identity 컬럼 → `postgres-data-types`
- includeIf → `git-ignore-config`
- Index Only Scan → `db-index`
- index-free adjacency → `db-type-graph`
- index.lock → `git-repo-errors`
- Ingress → `kubernetes-ingress`
- Ingress Controller → `kubernetes-ingress`
- ingress-nginx → `kubernetes-ingress`
- IngressClass → `kubernetes-ingress`
- INP → `core-web-vitals`
- interactive rebase → `git-rebase`
- INVALID 인덱스 → `db-index-pitfalls`
- ip6tables → `iptables-basics`
- iptables → `iptables-basics`
- iptables-persistent → `iptables-basics`
- IS DISTINCT FROM → `sql-select-where-null`
- ISR → `rendering-strategies`
- JSON Merge Patch → `http-methods`
- JSON Patch → `http-methods`
- JSON.parse → `json-crud-http`
- JSON.stringify → `json-crud-http`
- JSONB → `postgres-jsonb-search`
- jsonb_path_ops → `postgres-jsonb-search`
- JWT → `token-login`
- keepalive → `browser-fetch`
- kube-proxy → `iptables-nat`
- L4 로드 밸런서 → `osi-in-practice`
- L7 로드 밸런서 → `osi-in-practice`
- LATERAL → `postgres-reporting-sql`
- LCP → `core-web-vitals`
- least_conn → `nginx-reverse-proxy`
- limit_req → `nginx-https-performance`
- listen_addresses → `postgres-connections-pg-hba`
- LISTEN/NOTIFY → `postgres-functions-triggers`
- location 블록 → `nginx-basics`
- LSM 트리 → `db-type-wide-column`
- LSN → `postgres-architecture`
- MAC 주소 → `layer-link-ethernet-arp`
- MASQUERADE → `iptables-nat`
- maxmemory → `redis-memory-eviction`
- Memcached → `redis-basics`
- merge base → `git-branch-merge`
- MINUS → `sqld-set-operators`
- mkcert → `local-custom-domain`
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
- Nagle 알고리즘 → `tcp-reliability-congestion`
- named volume → `docker-network-volume`
- namespace → `docker-container-basics`
- NATURAL JOIN → `sqld-joins`
- Neo4j → `db-type-graph`
- Nested Loop → `sql-query-tuning`
- netfilter → `iptables-basics`
- NewSQL → `db-type-newsql`
- nginx.conf → `nginx-basics`
- Non-EQUI JOIN → `sqld-joins`
- NOT EXISTS → `sqld-subquery-set-operators`
- nsswitch.conf → `hosts-file`
- NULLIF → `sqld-null-functions`
- NULLS FIRST → `sql-select-where-null`
- NVL → `sqld-null-functions`
- OAuth → `oauth`
- OLAP → `db-type-columnar-olap`
- ON CONFLICT → `postgres-advanced-sql`
- openssl s_client → `network-troubleshooting-by-layer`
- OSI 7계층 → `network-layers-overview`
- OSI 모델 → `network-layers-overview`
- OUTER JOIN → `sqld-joins`
- PACELC → `db-consistency-cap`
- packfile → `git-internals-basics`
- pcap → `packet-capture-tcpdump`
- peer 인증 → `postgres-getting-started`
- pg_basebackup → `postgres-operations`
- pg_dump → `postgres-operations`
- pg_hba.conf → `postgres-connections-pg-hba`
- pg_stat_statements → `sql-query-tuning`
- pg_trgm → `postgres-jsonb-search`
- pg_upgrade → `postgres-operations`
- PgBouncer → `db-architecture-by-scale`
- PITR → `postgres-operations`
- PIVOT → `sqld-top-n-hierarchical-pivot`
- PKCE → `oauth`
- PL/pgSQL → `postgres-functions-triggers`
- PMTUD → `layer-mtu-fragmentation`
- preflight → `cors`
- PRG 패턴 → `http-status-codes`
- Problem Details → `http-status-codes`
- process.nextTick → `event-loop`
- PROXY protocol → `proxy-reverse-proxy`
- proxy_cache → `nginx-https-performance`
- proxy_pass → `nginx-reverse-proxy`
- proxy_set_header → `nginx-reverse-proxy`
- psql → `postgres-getting-started`
- pull.rebase → `git-rebase`
- push protection → `git-large-files-secrets`
- PUT과 PATCH → `http-methods`
- QUIC → `http-versions`
- RAG → `vector-db`
- RDB 스냅샷 → `redis-persistence-ha`
- RDBMS → `db-type-relational`
- React.memo → `react-rerender`
- read-your-writes → `db-consistency-cap`
- Redis → `redis-basics`
- Redis Cluster → `redis-cluster`
- Redis Sentinel → `redis-replication-sentinel`
- ReferenceGrant → `gateway`
- reflog → `git-stash-reflog`
- repl-backlog-size → `redis-replication-sentinel`
- rerere → `git-merge-conflict`
- REST API → `rest-api-design`
- RETURNING → `postgres-advanced-sql`
- reviver → `json-crud-http`
- RFC 1918 → `layer-ip-addressing`
- RocksDB → `db-type-embedded`
- ROLLUP → `sqld-rollup-cube-grouping-sets`
- Row Level Security → `postgres-roles-security`
- ROW_NUMBER → `sqld-window-functions`
- ROWNUM → `sqld-top-n-hierarchical-pivot`
- Same-Origin Policy → `cors`
- sargable → `sql-query-rewrite`
- SAVEPOINT → `sql-insert-update-delete`
- scram-sha-256 → `postgres-roles-security`
- search_after → `elasticsearch-inverted-index`
- search_path → `postgres-getting-started`
- SECURITY DEFINER → `postgres-functions-triggers`
- SELF JOIN → `sqld-joins`
- sendBeacon → `browser-fetch`
- server_name → `nginx-basics`
- Server-Sent Events → `realtime-communication`
- Service Worker → `frontend-browser-cache`
- SET ROLE → `postgres-roles-security`
- Set-Cookie → `cookie-session-login`
- setImmediate → `event-loop`
- shared_buffers → `postgres-architecture`
- sites-enabled → `nginx-basics`
- SKIP LOCKED → `db-architecture-by-scale`
- skipWaiting → `frontend-browser-cache`
- Snowflake → `db-sharding`
- SO_REUSEADDR → `ports-and-sockets`
- SO_REUSEPORT → `ports-and-sockets`
- Speculation Rules → `frontend-browser-cache`
- SQLite → `db-type-embedded`
- SQLSTATE → `sql-basics`
- squash 머지 → `git-branching-strategy`
- SSG → `rendering-strategies`
- SSTable → `db-type-wide-column`
- stale-while-revalidate → `http-caching-cdn`
- staleTime → `client-data-cache`
- statement_timeout → `sql-batch-timeout-pool`
- SUBSTR → `sqld-single-row-functions`
- SYN flood → `tcp-connection-lifecycle`
- TanStack Query → `client-data-cache`
- TCP/IP 4계층 → `network-layers-overview`
- tcpdump → `packet-capture-tcpdump`
- TiDB → `db-type-newsql`
- TIME_WAIT → `tcp-connection-lifecycle`
- TimescaleDB → `db-type-time-series`
- timestamptz → `postgres-data-types`
- TLS 1.3 → `https-tls`
- TLS 핸드셰이크 → `https-tls`
- TO_CHAR → `sqld-type-conversion`
- TOAST → `postgres-architecture`
- tracepath → `network-troubleshooting-by-layer`
- traceroute → `layer-ip-routing-icmp`
- Transfer-Encoding → `http-message`
- TrueTime → `db-type-newsql`
- TRUNCATE → `sql-insert-update-delete`
- try_files → `nginx-basics`
- tstzrange → `postgres-data-types`
- tsvector → `postgres-jsonb-search`
- TTL → `dns`
- UDP → `udp-and-quic`
- UdpRcvbufErrors → `udp-and-quic`
- UNION ALL → `sqld-set-operators`
- unrelated histories → `git-troubleshooting`
- UPSERT → `sql-insert-update-delete`
- upstream 블록 → `nginx-reverse-proxy`
- URLSearchParams → `html-form-http`
- useDeferredValue → `react-rerender`
- UUID v7 → `postgres-data-types`
- UUIDv7 → `db-sharding`
- VACUUM FULL → `postgres-mvcc-vacuum`
- visibility map → `postgres-mvcc-vacuum`
- WAL 모드 → `db-type-embedded`
- WeakMap → `js-memory-leak`
- WebSocket → `realtime-communication`
- Wireshark → `packet-capture-tcpdump`
- WITH CHECK OPTION → `sqld-correlated-subquery`
- worktree → `git-tips-advanced`
- write concern → `mongodb-document-model`
- write-behind → `caching-strategies`
- write-through → `caching-strategies`
- wrong version number → `upper-layers-session-presentation-app`
- X-Forwarded-For → `proxy-reverse-proxy`
- XID 랩어라운드 → `postgres-mvcc-vacuum`
- zdiff3 → `git-merge-conflict`

## 겹칠 수 있는 글 (자동 추정)

제목·소제목·태그 단어가 많이 겹치는 쌍이다. 새 글이 이 주제를 다루면 둘 중 어느 글에 넣을지, 서로 링크로 나눌지 먼저 정한다.

- `postgres-operations` ↔ `redis-persistence-ha` (19%: 백업과, 복원, 백업은, 복원해, 봐야, 백업이다)
- `db-partitioning` ↔ `db-type-time-series` (18%: 오래된, 통째로, 키가)
- `db-partitioning` ↔ `db-modeling-normalization` (18%: 테이블을, 떼어, 키가)
- `redis-cluster` ↔ `db-sharding` (17%: 키를, 나누는, 해시)
- `redis-cluster` ↔ `redis-basics` (17%: 나눈다, 단일, 해시)
- `db-index-pitfalls` ↔ `db-index-design` (16%: 100만, 인덱스는, index)
- `db-index-pitfalls` ↔ `db-type-wide-column` (16%: 쓰기를, 것도, 대가)
- `db-index-pitfalls` ↔ `db-index` (16%: 100만, 인덱스가, index)
- `db-locking-deadlock` ↔ `db-transaction-isolation` (16%: 트랜잭션이, sqld에서, 묻는, transaction, concurrency)
- `sqld-single-row-functions` ↔ `json-crud-http` (15%: 날짜는, 조용히, 숫자)
- `proxy-reverse-proxy` ↔ `gateway` (15%: 프록시와, 리버스, 로드, 밸런서, api, 게이트웨이)
- `sqld-null-functions` ↔ `sql-select-where-null` (14%: null은, null, 다루기)
- `nginx-reverse-proxy` ↔ `proxy-reverse-proxy` (14%: proxy, 진짜, 리버스, 프록시와, 로드)
- `kubernetes-ingress` ↔ `gateway` (14%: 로드, kubernetes, ingress, 밸런서)
- `postgres-connections-pg-hba` ↔ `postgres-roles-security` (14%: pg, 들어오는, 지나는)
- `db-locking-deadlock` ↔ `postgres-mvcc-vacuum` (13%: 막는, 남기는, 트랜잭션, update)
- `sql-batch-timeout-pool` ↔ `db-architecture-by-scale` (13%: 묶어서, 연결은, 풀로)
- `client-data-cache` ↔ `what-happens-google-com` (13%: 받기, 페이지가, 캐시가)
- `postgres-operations` ↔ `db-architecture-by-scale` (12%: 쓰고, 매일, 숫자들, 백업은, 복원해, 봐야)
- `sql-insert-update-delete` ↔ `db-transaction-isolation` (12%: commit, rollback, 트랜잭션이, transaction)
- `packet-capture-tcpdump` ↔ `db-index` (12%: 처음부터, 끝까지, 줄을)

## 서로 이어진 글

양쪽이 서로를 링크하거나 키워드로 가리키는 쌍이다. 내용 경계가 맞닿아 있으니 한쪽 글을 고칠 때 다른 쪽과 겹치지 않는지 본다.

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

