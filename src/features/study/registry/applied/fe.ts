import type { AppliedQuestion } from "./types";

export const FE_APPLIED: AppliedQuestion[] = [
  {
    id: "fe-01",
    posts: ["js-var-let-const", "js-closures", "js-timers-accuracy"],
    prompt:
      "인증번호 3분 카운트다운을 setInterval과 useState로 짰다. 화면의 숫자가 1초에 한 번씩 줄다가 어느 순간 1에서 멈추고, 탭을 다른 데 두고 돌아오면 남은 시간이 실제보다 한참 많다. 두 증상의 원인은 각각 무엇이고 어떻게 고치나.",
    points: [
      "1에서 멈추는 건 클로저가 값이 아니라 변수를 잡기 때문이고, effect 안의 콜백이 첫 렌더의 const를 보고 있어서 setRemaining(remaining - 1)이 매번 같은 값을 만든다. 업데이터 함수로 바꾸거나 의존성을 맞춘다.",
      "React 컴포넌트 안의 const는 렌더마다 새로 생기므로 setInterval이 처음 잡은 상자와 다음 렌더의 상자는 다른 변수다.",
      "탭을 떠나면 브라우저가 타이머를 일부러 늦추고 setInterval은 밀린 호출을 몰아서 주지 않으므로, 1초마다 1을 빼는 방식은 틀어진다. 끝나는 시각을 정해 두고 매 틱마다 시각 차이로 남은 시간을 계산한다.",
      "setTimeout의 지연은 하한일 뿐이라 정확한 간격을 약속하지 않는다. 시간이 중요한 표시는 타임스탬프로 잰다.",
    ],
  },
  {
    id: "fe-02",
    posts: ["js-hoisting-tdz", "js-es-modules", "js-scope-lexical"],
    prompt:
      "유틸 파일의 function 선언을 const 화살표 함수로 바꾸고 배포했더니 일부 화면에서 Cannot access 'formatPrice' before initialization이 난다. 로컬에서는 재현이 안 되고, 에러가 나는 화면은 모두 다른 진입점으로 들어온 경우다. 어디를 의심하고 어떻게 확인하나.",
    points: [
      "function 선언은 등록 단계에서 함수까지 만들어지지만 const는 TDZ에 있어서, 선언보다 먼저 실행되는 코드가 있으면 터진다. 오류 문구가 is not defined가 아니라 before initialization인 것으로 TDZ임을 가른다.",
      "진입점마다 증상이 다르면 순환 import를 본다. ESM은 파싱과 링크를 먼저 하고 평가는 의존 순서대로 하므로, 순환 고리에서 먼저 평가되는 모듈이 아직 초기화되지 않은 바인딩을 읽는다.",
      "ESM의 import는 값 복사가 아니라 변수를 연결하는 라이브 바인딩이라, CommonJS처럼 undefined가 조용히 들어오는 대신 TDZ 에러로 드러난다.",
      "TDZ는 위치가 아니라 시간 기준이고 바깥 스코프에 같은 이름이 있어도 안쪽 TDZ가 이긴다. 번들러 출력에서 모듈 평가 순서를 보거나 ESLint의 import/no-cycle로 미리 잡는다.",
    ],
  },
  {
    id: "fe-03",
    posts: ["js-primitive-vs-reference", "js-shallow-deep-copy", "js-immutability-react"],
    prompt:
      "상품 편집 폼에서 취소를 눌렀는데 목록의 원본 가격이 이미 바뀌어 있다. 초안은 {...product}로 복사했고, 저장 뒤에는 memo로 감싼 옵션 행 컴포넌트가 옛 값을 계속 보여 준다. 두 버그가 같은 뿌리에서 나오는 이유와 고치는 순서를 말해 보라.",
    points: [
      "객체 전개는 첫 층만 새로 만들고 안쪽 options 배열은 같은 참조를 공유하므로, 초안의 중첩 값을 고치면 원본도 바뀐다. 변수 칸에 든 것은 참조이고 대입과 함수 인자 전달은 그 참조를 복사한다.",
      "memo 자식이 옛 값을 보이는 건 바깥 객체만 새로 만들고 안쪽 옵션 객체는 그대로 두어 props 참조가 같기 때문이다. 바뀐 길만 새로 만드는 구조 공유로 고친다.",
      "반대로 전부 깊게 복사하면 바뀌지 않은 가지까지 새 참조가 되어 memo가 전부 무력화된다. 중첩이 깊으면 상태를 평평하게 정규화하거나 Immer로 바뀐 경로만 새로 만든다.",
      "structuredClone은 getter·심볼·설명자를 잃고 함수가 있으면 실패하므로 React 상태 복사에 기본으로 쓰지 않는다.",
    ],
  },
  {
    id: "fe-04",
    posts: ["js-truthy-falsy-typeof", "js-short-circuit", "js-optional-chaining-nullish"],
    prompt:
      "장바구니 화면에 수량 0인 상품 옆에 숫자 0이 그대로 찍히고, 할인율 0%인 상품에는 기본값 10%가 들어간다. 그리고 주문 옵션을 order.options ?? []로 받는 effect가 멈추지 않고 계속 돈다. 세 증상을 한 번에 설명하고 고쳐 보라.",
    points: [
      "JSX의 count && <Badge/>는 count가 0이면 0을 돌려주고 React는 0을 글자로 그린다. &&는 불리언이 아니라 피연산자를 그대로 돌려준다.",
      "discount || 10은 0도 falsy로 보고 기본값을 넣는다. null과 undefined만 없는 값으로 보는 ??로 바꾼다.",
      "?? []는 options가 없을 때마다 렌더마다 새 배열을 만들어 의존성이 매번 달라지므로 effect가 계속 불린다. 모듈 상수 EMPTY를 쓰거나 길이 같은 원시값을 의존성으로 둔다.",
      "falsy는 여덟 개뿐이고 typeof null은 object이므로, 값의 종류를 가릴 때는 === null, Array.isArray, Number.isNaN 조합을 쓴다.",
    ],
  },
  {
    id: "fe-05",
    posts: ["js-equality-coercion", "js-destructuring", "ts-type-system-basics"],
    prompt:
      "select에서 고른 상품 id로 products.find(p => p.id === selected)를 했더니 항상 undefined다. 동료는 ==로 바꾸자고 하고, 다른 동료는 TypeScript를 썼는데 왜 못 잡았냐고 묻는다. 어떻게 답하고 어디서 고치나.",
    points: [
      "DOM의 value는 항상 문자열이라 '3' === 3이 거짓이다. ==는 숫자로 변환해 통과시키지만 변환 규칙이 값을 바꾸는 순서를 외워야 하고, 느슨한 비교를 써도 되는 자리는 == null 하나뿐이다.",
      "값이 경계를 넘을 때마다 문자열이 되므로 경계(이벤트 핸들러, URL, 저장소)에서 Number로 바꾸고 안쪽은 엄격 비교만 쓴다.",
      "TypeScript가 못 잡은 건 e.target.value가 string인데 selected를 any나 string으로 두었기 때문이고, 타입은 컴파일 뒤 사라져 런타임 값은 검사하지 않는다. 경계에서는 값을 직접 확인해야 한다.",
      "구조 분해로 const { value } = e.target을 꺼낼 때 기본값은 undefined에만 들어가므로 빈 문자열은 그대로 남는다. 정규화 함수에서 한 번에 처리한다.",
      "같은 모양의 string 두 개(userId, orderId)가 뒤바뀌어도 구조적 타이핑은 통과시키니, 섞이면 안 되는 id는 브랜드 타입으로 구분한다.",
    ],
  },
  {
    id: "fe-06",
    posts: ["js-template-literals", "xss", "browser-storage"],
    prompt:
      "댓글 목록을 innerHTML = `<li>${comment.body}</li>`로 그리고, 액세스 토큰은 localStorage에 둔다. 보안 점검에서 둘 다 지적받았다. 공격이 실제로 어떤 순서로 성립하는지와, 어느 쪽부터 어떻게 고칠지 말해 보라.",
    points: [
      "백틱 안의 값은 그대로 문자열이 되어 HTML에 끼워지므로 댓글에 든 script나 onerror 속성이 남의 브라우저에서 코드가 된다. 조각은 믿고 값은 의심한다는 원칙대로 태그 함수나 textContent로 값을 이스케이프한다.",
      "XSS 하나가 성립하면 같은 출처의 localStorage는 통째로 읽히므로 토큰이 그대로 새 나간다. 저장소는 출처마다 칸이 나뉘지만 같은 출처 안의 스크립트에는 열려 있다.",
      "토큰은 HttpOnly 쿠키로 옮기면 스크립트가 못 읽는다. 대신 쿠키는 요청 헤더이기도 해서 CSRF 대비가 따로 필요하다.",
      "고치는 순서는 출력 이스케이프와 CSP로 XSS 자체를 막는 게 먼저고, 저장 위치 변경은 피해 범위를 줄이는 두 번째 장치다.",
    ],
  },
  {
    id: "fe-07",
    posts: ["js-function-forms", "js-this-binding", "js-call-apply-bind"],
    prompt:
      "린트 규칙에 맞추려고 파일의 function을 모두 화살표 함수로 바꿨더니 new Modal()이 TypeError를 내고, 메서드를 setTimeout에 넘긴 곳은 this가 undefined다. 급하게 bind로 막았는데 이번엔 keydown 리스너가 떼어지지 않는다. 각 단계에서 무엇이 깨졌나.",
    points: [
      "화살표 함수는 this, arguments, prototype이 없어서 생성자로 부를 수 없고 메서드로 쓰면 바깥 this를 그대로 쓴다. 기계적 변환이 깨뜨리는 자리가 생성자와 메서드다.",
      "this는 함수가 아니라 호출에 붙는다. setTimeout(obj.method)는 점이 사라진 채 호출되므로 엄격 모드에서 undefined가 된다.",
      "bind는 매번 새 바운드 함수를 돌려주므로 addEventListener(this.onKey.bind(this))와 removeEventListener(this.onKey.bind(this))는 다른 참조를 넘긴 것이다. 바운드 함수를 한 번 만들어 필드에 저장해 두고 같은 참조로 뗀다.",
      "한 번 bind한 함수는 다시 bind해도 this가 바뀌지 않으며, 네 가지 바인딩 규칙에서 new가 명시 바인딩보다 우선한다.",
    ],
  },
  {
    id: "fe-08",
    posts: ["js-first-class-callbacks", "js-currying-partial", "react-rerender"],
    prompt:
      "Express 에러 처리기를 로깅 래퍼로 감쌌더니 불리지 않고, React 목록에서 onClick={handle(item.id)}처럼 커링한 핸들러를 memo 컴포넌트에 넘겼더니 매번 전부 다시 그려진다. 두 문제의 공통점은 무엇이고 각각 어떻게 고치나.",
    points: [
      "받는 쪽은 함수의 length, name, this, 참조를 본다. Express는 인자 4개짜리 함수만 에러 처리기로 인정하는데 (...args) 래퍼는 length가 0이라 일반 미들웨어로 취급된다.",
      "커링은 호출마다 새 함수를 돌려주므로 렌더마다 onClick 참조가 바뀌고 memo의 얕은 비교가 실패한다. 내용이 같아도 다른 객체이기 때문이다.",
      "고치려면 data 속성으로 id를 넘기고 핸들러 하나를 useCallback으로 고정하거나, 부모 하나에서 이벤트를 받는다. memo는 props 참조가 유지될 때만 듣는다.",
      "범용 curry는 fn.length에 기대므로 기본값 매개변수나 나머지 매개변수가 있으면 length가 줄어 깨진다.",
    ],
  },
  {
    id: "fe-09",
    posts: ["js-iife-module-pattern", "rendering-ssr", "js-strict-mode"],
    prompt:
      "SSR 서버에서 가끔 다른 사람의 이름이 찍힌다. 옛 코드를 보니 IIFE로 감싼 모듈 패턴 안의 currentUser 변수에 요청마다 대입하고, 일부 파일은 'use strict' 없이 oldTotal = 0처럼 선언 없는 대입도 있다. 왜 섞이고 어떻게 찾나.",
    points: [
      "모듈 변수든 IIFE 안의 변수든 프로세스에 하나뿐이라 모든 요청이 같은 상자를 쓴다. 동시에 들어온 요청이 await 사이에 서로의 값을 덮는다.",
      "SSR은 요청 하나가 HTML이 되는 동안 Node.js 한 줄로 일하므로, 사용자별 값은 요청 컨텍스트(인자, AsyncLocalStorage)로 넘기고 모듈 스코프에 두지 않는다.",
      "선언 없는 대입은 비엄격 모드에서 전역을 만들어 요청 사이에 새고, 엄격 모드면 ReferenceError로 바로 드러난다. ESM은 기본 엄격이지만 CommonJS나 이어 붙인 스크립트는 아니다.",
      "찾는 순서는 모듈 스코프에서 대입되는 변수를 grep하고, 동시 요청을 보내 재현한 뒤, 상태 코드와 캐시 키에 사용자 값이 섞이지 않는지 본다.",
    ],
  },
  {
    id: "fe-10",
    posts: ["js-pure-functions", "js-memoization", "client-data-cache"],
    prompt:
      "배송비 계산 함수를 memoize로 감쌌더니 쿠폰을 바꿔도 예전 배송비가 나온다. 비슷하게 TanStack Query에서 staleTime을 길게 줬더니 뮤테이션 뒤에도 목록이 옛값이다. 두 캐시가 틀린 답을 내는 이유를 같은 원리로 설명하고 고쳐 보라.",
    points: [
      "메모이제이션은 같은 입력이면 같은 답이라는 약속 위에 선다. 쿠폰을 모듈 변수에서 읽는 숨은 입력이 있으면 인자가 같아도 결과가 달라야 하는데 캐시 키에 없으니 옛 답을 돌려준다.",
      "고치려면 숨은 입력을 인자로 끌어내 순수하게 만들고 캐시 키에 넣는다. 계산은 안쪽, 입출력은 바깥쪽으로 나누는 습관이 캐시 가능성을 만든다.",
      "쿼리 캐시의 키도 같은 역할이라 staleTime 동안은 다시 받지 않는다. 뮤테이션 뒤에는 invalidateQueries로 신선하지 않다고 표시하거나 setQueryData로 캐시를 직접 맞춘다.",
      "버리지 않는 memoize는 메모리 누수이므로 LRU나 WeakMap을 쓰고, 쿼리 캐시는 gcTime으로 구독이 끊긴 뒤 버릴 시점을 정한다.",
    ],
  },
  {
    id: "fe-11",
    posts: ["functional-programming-basics", "fp-composition-pipe", "js-array-transform"],
    prompt:
      "검색어 정규화를 pipe(trim, lower, removeStopWords, translate)로 묶었는데 결과가 [object Promise]로 나온다. 같은 PR에서 리포트 합계가 빈 배열에서 터지기도 한다. 리뷰어로서 무엇을 지적하고 어떻게 다시 짜게 하나.",
    points: [
      "pipe는 앞 함수의 반환값을 다음 함수의 입력으로 넘기므로 translate처럼 비동기 단계가 끼면 그 뒤로는 값 대신 Promise가 흐른다. 비동기용 pipe로 await를 끼우거나 동기 단계와 분리한다.",
      "이어 붙일 함수는 인자 하나에 반환 하나여야 하고 tap으로 중간값을 엿보면 어느 단계에서 모양이 깨지는지 바로 보인다.",
      "시작값 없는 reduce는 빈 배열에서 TypeError를 던진다. 누산기의 초기값을 항상 준다.",
      "반복문 하나에 합계와 개수와 필터를 몰아넣으면 변수가 얽혀 버그가 생기니, map과 filter와 reduce로 무엇을 하는지만 적는다. 체인이 길면 중간 배열 비용이 드니 큰 데이터는 한 번의 reduce나 이터레이터 헬퍼를 고려한다.",
    ],
  },
  {
    id: "fe-12",
    posts: ["fp-functors-monads-js", "js-promises", "browser-fetch"],
    prompt:
      "상품 페이지가 가끔 빈 화면이다. 로그에는 에러가 없고 fetch 체인 끝에서 가격이 NaN이다. 서버는 500을 주기도 한다. 왜 에러 없이 빈 화면이 되고, 실패를 어디서 어떤 모양으로 드러내야 하나.",
    points: [
      "fetch는 500에서도 resolve되므로 res.ok를 보지 않으면 에러 본문을 JSON으로 파싱해 이상한 값이 체인을 타고 내려간다. 여기서 NaN이 생기면 조용히 퍼진다.",
      "then 체인에서 실패는 다음 catch까지 미끄러지는데 거부가 없으면 catch는 불리지 않는다. 상태 코드를 보고 직접 throw해야 체인이 실패 경로로 들어간다.",
      "값이 없을 수 있는 단계는 Maybe나 Result 상자로 감싸 map과 flatMap으로 잇는다. 그러면 실패가 타입과 값에 드러나고 마지막에 한 번만 꺼낸다.",
      "예외는 예상 못 한 실패에, Result는 예상되는 실패(없는 상품, 검증 실패)에 쓴다. 본문은 한 번만 읽히니 res.json() 실패 뒤 다시 읽으려면 clone이 필요하다.",
    ],
  },
  {
    id: "fe-13",
    posts: ["fp-in-react", "frontend-state-architecture", "js-array-mutation"],
    prompt:
      "프로필 폼이 서버 값과 어긋나고, 셀렉터로 정렬한 목록을 쓰는 컴포넌트가 Maximum update depth를 낸다. 코드를 보니 props를 useState 초기값에 복사했고, 셀렉터 안에서 items.sort()를 부른다. 원인과 상태 배치 원칙을 말해 보라.",
    points: [
      "props를 state에 복사하면 같은 값이 두 곳에 살아 부모가 바뀌어도 자식 초안은 그대로다. 서버 상태는 쿼리 캐시가 원본이고 폼은 제출 전까지의 초안이라 역할을 나눠야 한다.",
      "sort는 원본을 고치고 그 배열을 돌려준다. 셀렉터가 스토어의 배열을 제자리에서 정렬하면 스토어가 바뀐 것으로 보여 다시 렌더링되고, 또 정렬되어 루프가 된다.",
      "셀렉터는 같은 입력에 같은 참조를 돌려줘야 한다. toSorted나 복사 뒤 정렬을 메모 셀렉터 안에서 하고, 계산할 수 있는 값은 상태로 두지 않는다.",
      "필터처럼 뒤로 가기에 살아야 하는 값은 URL에, 화면 임시 값은 컴포넌트에, 여러 화면이 공유하는 값만 전역에 둔다.",
    ],
  },
  {
    id: "fe-14",
    posts: ["js-object-methods", "js-prototype-chain", "js-classes"],
    prompt:
      "서버가 보낸 순서대로 탭을 그리는데 Object.keys가 순서를 바꾼다. 같은 화면의 단어 세기 함수는 'constructor'라는 단어에서 깨진다. 그리고 상속한 클래스의 부모 생성자에서 render()를 부르자 하위 필드가 undefined다. 세 가지를 각각 설명하라.",
    points: [
      "정수처럼 생긴 키는 오름차순으로 먼저 서고 그다음 문자열 키가 삽입 순서다. 순서가 중요하면 배열이나 Map으로 받는다.",
      "counts[word]는 없는 속성을 프로토타입 체인 위로 물어보므로 'constructor'는 Object.prototype의 함수를 돌려준다. 사전으로 쓸 객체는 Object.create(null)로 체인을 끊거나 Map을 쓰고, 내 것인지는 Object.hasOwn으로 본다.",
      "하위 클래스는 부모 생성자가 먼저 돌고 그 뒤에 하위 필드가 초기화된다. 부모 생성자에서 가상 메서드를 부르면 아직 없는 필드를 본다.",
      "읽기는 체인을 올라가지만 쓰기는 제자리에 만든다. 프로토타입에 둔 배열은 모든 인스턴스가 공유하니 필드는 인스턴스에 둔다.",
    ],
  },
  {
    id: "fe-15",
    posts: ["js-spread-rest", "js-execution-context", "js-array-transform"],
    prompt:
      "최고가를 Math.max(...prices)로 구하던 코드가 13만 개 상품에서 RangeError: Maximum call stack size exceeded를 냈다. 같은 날 댓글 트리 2만 개를 재귀로 펼치는 함수도 같은 에러를 냈다. 원인과 고치는 방법이 왜 다른지 말해 보라.",
    points: [
      "전개는 배열 원소를 함수 인자로 펼쳐 모두 스택 프레임의 인자 자리에 올리므로 인자 수 한계를 넘으면 스택이 넘친다. 넘치는 곳은 재귀만이 아니다.",
      "최고가는 reduce로 한 번 훑으면 되고, 전개를 reduce 안에서 반복하면 n² 비용이 된다.",
      "재귀는 호출마다 실행 컨텍스트가 스택에 쌓이고 깊이가 수천이면 넘친다. 깊이를 힙으로 옮기기 위해 명시적 스택 배열을 두고 반복문으로 바꾼다.",
      "스택 트레이스는 콜 스택의 사진이라 어느 함수가 반복해서 쌓였는지로 재귀인지 전개인지 가른다.",
    ],
  },
  {
    id: "fe-16",
    posts: ["js-callback-hell", "js-async-await", "js-promise-combinators"],
    prompt:
      "대시보드가 위젯 하나의 API 실패로 전부 비고, 다른 화면은 forEach 안의 await 때문에 저장 완료 전에 다음 페이지로 넘어간다. 그리고 옛 콜백 코드는 응답을 두 번 보낸다. 세 코드를 어떻게 고치고, 동시 요청이 30개가 넘으면 무엇을 더 하나.",
    points: [
      "Promise.all은 하나가 거부되면 바로 거부된다. 부분 실패를 받아들일 대시보드는 allSettled로 바꾸고 위젯마다 결과를 나눠 그린다.",
      "forEach는 콜백의 반환값을 버리므로 await가 기다려지지 않는다. for...of로 차례대로 하거나 map으로 Promise 배열을 만들어 Promise.all로 기다린다.",
      "콜백은 제어권을 넘기는 것이라 어떤 때는 동기로 어떤 때는 비동기로 불리거나 두 번 불릴 수 있다. Promise는 상태를 한 번만 정하므로 util.promisify로 옮기면 응답 두 번 문제가 사라진다.",
      "한꺼번에 너무 많이 넣으면 연결과 서버가 밀리니 동시성 제한 풀로 묶음 처리한다. 미리 시작해 둔 Promise가 먼저 실패하면 처리되지 않은 거부가 되니 catch를 붙여 둔다.",
    ],
  },
  {
    id: "fe-17",
    posts: ["event-loop", "js-microtask-macrotask", "core-web-vitals"],
    prompt:
      "필터 버튼을 누르면 화면이 300ms 멈춘다는 제보가 있다. CrUX의 INP가 400ms를 넘겼다. 핸들러를 살펴보니 큰 배열을 가공한 뒤 결과를 Promise.then 체인으로 여러 번 나눠 처리한다. 왜 then으로 쪼개도 화면이 안 그려지는지와 고치는 법을 말해 보라.",
    points: [
      "화면은 태스크 사이에서만 그려진다. 50ms를 넘는 작업이 한 태스크 안에 있으면 입력 처리부터 다음 페인트까지가 INP에 그대로 잡힌다.",
      "마이크로태스크 큐는 끝까지 비운 뒤에야 렌더링으로 넘어가므로 then으로 나눠도 같은 틱 안에서 전부 실행된다. 양보하려면 setTimeout, scheduler.yield, requestIdleCallback 같은 태스크 경계가 필요하다.",
      "INP는 입력 지연, 처리 시간, 표시 지연 세 구간으로 나눠 재고 Performance 패널의 긴 작업에서 어느 핸들러인지 찾는다. 실험실 점수는 사용자 기기와 다르니 현장 값을 본다.",
      "출력 순서가 헷갈리면 장부를 적는다. await 하나가 한 틱이고 nextTick이 Promise보다 먼저다.",
    ],
  },
  {
    id: "fe-18",
    posts: ["debounce-throttle", "scroll-triggered-intersection-observer", "js-timers-accuracy"],
    prompt:
      "스크롤할 때마다 카드 300개의 getBoundingClientRect를 재서 나타나는 애니메이션을 켜는 코드가 있다. 스로틀 100ms를 걸었는데도 저사양 폰에서 버벅이고, 백그라운드 탭에서 돌아오면 카드가 한꺼번에 튀어나온다. 무엇으로 바꾸고 왜인가.",
    points: [
      "스크롤에는 프레임이라는 기준이 이미 있어서 타이머 스로틀은 프레임과 어긋나고, 리스너 안의 크기 읽기는 레이아웃을 강제한다.",
      "IntersectionObserver는 브라우저가 프레임마다 합성 단계에서 계산해 콜백을 부르니 메인 스레드에서 300개를 재지 않는다. 처음 한 번은 무조건 불리고 threshold는 넘어간 다음에 알려 준다.",
      "백그라운드 탭에서는 타이머가 일부러 늦춰져 밀린 스로틀 호출이 돌아올 때 몰리지 않고 어긋난다. 관찰자는 보이는 순간을 기준으로 하니 한꺼번에 튀어나오는 문제가 준다.",
      "디바운스는 멈춘 뒤 한 번, 스로틀은 움직이는 동안 일정하게이고, 둘 다 React에서 렌더마다 새로 만들면 타이머가 초기화되어 안 먹는다.",
    ],
  },
  {
    id: "fe-19",
    posts: ["dom-basics", "event-propagation", "event-delegation"],
    prompt:
      "할 일 목록에서 나중에 추가한 항목의 삭제 버튼만 클릭이 안 된다. 버튼 안의 아이콘을 누르면 더 안 된다. 그리고 목록을 다시 그릴 때마다 각 항목 높이를 읽어 애니메이션을 주는 코드가 1만 개에서 2초 걸린다. 어디서부터 보고 어떻게 고치나.",
    points: [
      "querySelectorAll은 찍어 둔 목록이라 나중에 붙은 요소에는 리스너가 없다. 부모 하나에 리스너를 달고 버블링된 이벤트를 받는 위임으로 바꾸면 새 요소도 저절로 동작한다.",
      "아이콘을 누르면 target이 아이콘이라 target.matches('button')이 실패한다. closest로 버튼까지 올라가서 찾는다.",
      "클릭이 안 먹으면 중간에서 stopPropagation을 부르는 리스너가 있는지, 버블링하지 않는 이벤트인지, 겹친 요소가 가로채는지 순서로 본다.",
      "DOM을 바꾼 직후 크기를 읽으면 강제 레이아웃이 반복된다. 읽기를 먼저 모으고 쓰기를 나중에 묶거나 requestAnimationFrame으로 나눈다.",
    ],
  },
  {
    id: "fe-20",
    posts: ["browser-fetch", "abort-controller", "frontend-system-design-interview"],
    prompt:
      "자동완성에서 '사과'를 치면 '사'의 결과가 늦게 와서 화면을 덮는다. abort()를 넣었는데도 가끔 그렇고, 한글 입력 중에는 요청이 글자마다 여러 번 나간다. 면접관이 45분짜리 설계 문제로 이걸 냈다면 어떤 순서로 답하나.",
    points: [
      "늦게 온 응답이 화면을 덮는 건 응답 순서 문제라 디바운스만으로는 안 풀린다. 요청마다 AbortController를 만들고 다음 요청 전에 이전 것을 abort하거나, 응답에 시퀀스를 붙여 최신만 받아들인다.",
      "abort가 안 먹는 건 신호를 fetch까지 넘기지 않았거나 취소된 뒤의 then에서 상태를 갱신하기 때문이다. AbortError를 catch에서 구분하고 신호를 끝까지 넘긴다.",
      "한글은 조합 중 input 이벤트가 여러 번 오니 compositionstart·end를 보고 조합이 끝났을 때만 요청한다.",
      "설계 순서는 요구 사항, 컴포넌트와 요청 경로, API 응답 모양, 디바운스·취소·캐시, 접근성(콤보박스 역할), 지표와 관측으로 간다.",
      "fetch는 500에서도 성공이고 본문은 한 번만 읽히므로 res.ok 확인과 에러 처리를 한 곳에 둔다.",
    ],
  },
  {
    id: "fe-21",
    posts: ["browser-storage", "cookie-session-login", "csrf"],
    prompt:
      "로그인 토큰을 어디에 둘지 팀이 갈렸다. 한쪽은 localStorage, 다른 쪽은 쿠키다. 각 선택이 틀리는 순간은 언제고, 쿠키로 간다면 어떤 속성과 추가 방어가 따라와야 하나. 다중 탭 로그아웃은 어떻게 맞추나.",
    points: [
      "localStorage는 같은 출처의 스크립트가 모두 읽으니 XSS 한 번에 토큰이 통째로 나간다. 동기 API라 큰 값을 쓰면 메인 스레드를 잡고 5MB 한도는 글자 수 기준이다.",
      "쿠키는 저장소이면서 요청 헤더라 브라우저가 알아서 붙인다. HttpOnly로 스크립트 접근을 막고 Secure와 SameSite를 함께 둔다.",
      "브라우저가 알아서 붙이는 성질 때문에 CSRF가 생긴다. SameSite=Lax 기본값에 기대지 말고 상태를 바꾸는 요청에는 CSRF 토큰이나 Origin 검사를 둔다.",
      "쿠키 도메인은 출처 구분과 다르게 서브도메인을 공유하므로 범위를 좁게 잡는다. 로그아웃은 storage 이벤트로 다른 탭에 알리면 탭마다 따로인 sessionStorage와 달리 동기화된다.",
    ],
  },
  {
    id: "fe-22",
    posts: ["js-memory-leak", "rendering-ssr", "js-closures"],
    prompt:
      "SSR 서버의 RSS가 하루에 1GB씩 늘다가 재시작된다. 코드에는 요청별 렌더 결과를 모듈 스코프 Map에 캐시하고, 이벤트 이미터에 요청마다 리스너를 붙이는 부분이 있다. 범인을 어떤 순서로 좁히고 무엇으로 바꾸나.",
    points: [
      "GC의 기준은 닿을 수 있느냐다. 모듈 스코프 Map은 루트에서 닿으니 넣기만 하고 빼지 않으면 끝없이 자라는 캐시가 된다. 크기 제한이나 TTL을 두거나 키를 객체로 하면 WeakMap을 쓴다.",
      "요청마다 붙인 리스너는 요청 컨텍스트 전체를 클로저로 잡는다. 클로저는 생각보다 많이 잡으니 응답 뒤 반드시 떼거나 once를 쓴다.",
      "SSR 서버는 요청이 쌓일수록 무거워지고 렌더링이 CPU를 쓰므로, 힙 스냅샷을 간격을 두고 두 번 떠서 비교하고 Retainers 경로로 누가 잡고 있는지 본다.",
      "SSR 결과 캐시는 사용자별 값이 섞이지 않게 키를 설계하고 캐시 위치를 프로세스 밖(CDN, Redis)으로 옮기는 편이 메모리와 다중 인스턴스 모두에 낫다.",
    ],
  },
  {
    id: "fe-23",
    posts: ["ts-narrowing", "ts-utility-mapped-types", "typescript-in-react"],
    prompt:
      "결제 상태에 'refunded'를 추가했더니 화면 한 곳에 undefined가 찍혔는데 tsc는 통과했다. 폼 타입은 Omit<User, 'passwrod'>처럼 오타가 있어도 조용하다. 다음 추가 때 컴파일러가 막아 주게 하려면 무엇을 바꾸나.",
    points: [
      "switch의 default가 없거나 문자열을 돌려주면 빠진 갈래를 검사기가 모른다. 판별 유니온으로 갈래를 나누고 default에서 never에 대입하는 완전성 검사를 두면 새 상태가 컴파일 에러로 드러난다.",
      "Omit의 두 번째 인자는 keyof 제약이 없어 오타를 잡지 못한다. keyof T로 제약한 StrictOmit을 만들거나 Pick으로 뒤집는다.",
      "손으로 베낀 폼 타입은 원본과 어긋나니 Partial·Pick·Record 같은 매핑된 타입으로 원본 하나에서 뽑아낸다.",
      "useReducer의 액션도 판별 유니온으로 두고, useState(null)은 제네릭이나 as로 초기 타입을 넓혀야 setState에 객체를 넣을 수 있다.",
      "콜백 안이나 재할당 뒤에는 좁힌 타입이 풀리니 const로 받아 두고 쓴다.",
    ],
  },
  {
    id: "fe-24",
    posts: ["ts-generics", "ts-type-system-basics", "tsconfig-strict"],
    prompt:
      "타입을 다 붙였는데 운영에서 users[0].name과 list.find(...).id가 undefined로 터졌다. 팀원은 API 응답 타입을 as로 붙였고 first 함수는 any[]를 받는다. 어떤 tsconfig와 타입 설계가 이걸 미리 잡나.",
    points: [
      "strict만으로는 인덱스 접근의 undefined를 잡지 못한다. noUncheckedIndexedAccess를 켜면 users[0]이 User | undefined가 되고, find는 원래 undefined를 포함하니 strictNullChecks가 꺼져 있었던 것이다.",
      "as로 붙인 응답 타입은 런타임 검사가 아니라 선언일 뿐이라 컴파일 뒤 사라진다. 경계에서는 unknown으로 받아 스키마 검증으로 좁힌다.",
      "반환에만 쓰인 제네릭은 as와 같다. first<T>(arr: T[]): T처럼 입력과 출력을 타입 매개변수로 이어야 호출 시점에 타입이 정해진다.",
      "기존 코드에 strict를 켤 때는 파일 단위로 나누고, skipLibCheck가 무엇을 숨기는지와 moduleResolution이 실행 환경과 맞는지 확인한다.",
    ],
  },
  {
    id: "fe-25",
    posts: ["typescript-roadmap", "javascript-roadmap", "tsconfig-strict"],
    prompt:
      "자바스크립트로 된 5년 된 저장소를 TypeScript로 옮기자는 결정이 났다. 신입 둘이 합류하는데 무엇부터 읽게 하고, 전환은 어떤 순서로 하며, tsc 에러 번호만 보고 어느 글을 펼지 어떻게 안내하나.",
    points: [
      "전환은 allowJs와 checkJs로 기존 파일을 그대로 둔 채 검사만 켜고, strict는 한 번에 켜지 말고 플래그별로 파일 단위로 올린다. 타입은 컴파일 뒤 사라지니 런타임 동작은 바뀌지 않는다.",
      "신입은 자바스크립트 로드맵의 열두 장 순서(변수·스코프 → 함수 → 비동기 → 실행 방식 → 브라우저)로 바탕을 잡고, 그 위에 TypeScript 로드맵의 모양 비교 → 제네릭 → 좁히기 → 타입 조립 순서로 간다.",
      "에러 번호로 글을 찾는다. TS2322·TS2345는 구조적 타이핑, TS2339는 좁히기, TS2589는 너무 영리한 타입, TS2775는 단언 함수다.",
      "증상 문장(setTimeout이 3만 찍힌다, this가 undefined다)에서 첫 글을 고르는 표를 팀 위키에 두면 질문이 줄어든다.",
    ],
  },
  {
    id: "fe-26",
    posts: ["browser-rendering-pipeline", "css-performance", "resource-hints-loading"],
    prompt:
      "LTE 조건에서 하얀 화면이 2.4초 간다. HTML은 300ms에 도착했고, head에는 CSS 세 장(그중 하나는 @import)과 동기 script 하나가 있다. 어디서 시간이 새는지 트레이스에서 무엇을 보고 어떤 순서로 줄이나.",
    points: [
      "브라우저는 CSS가 올 때까지 일부러 그리지 않고, 평범한 script를 만나면 파서가 서며 그 앞의 CSS까지 기다린다. 하얀 화면은 렌더링 차단 리소스의 합이다.",
      "@import는 요청을 한 줄로 세워 계단이 생긴다. link 태그로 펴고, 첫 화면에 필요한 규칙만 인라인하고 나머지는 media나 비동기로 미룬다.",
      "스크립트는 defer로 파서를 세우지 않게 하고, 프리로드 스캐너가 발견 못 하는 리소스(CSS 안의 폰트, JS가 만드는 요청)는 preload로 출발을 당긴다.",
      "다른 출처면 preconnect로 연결 비용을 미리 치르고, 순서를 바꾸는 힌트는 바이트를 줄이지 않으니 크리티컬 경로의 요청 수와 크기를 먼저 줄인다.",
    ],
  },
  {
    id: "fe-27",
    posts: ["rendering-strategies", "rendering-csr-spa", "rendering-ssg-isr", "http-caching-cdn"],
    prompt:
      "쇼핑몰을 새로 만든다. 상품 상세는 하루 수십만 뷰에 가격이 가끔 바뀌고, 장바구니는 사용자마다 다르며, 이벤트 페이지는 1분마다 재고가 바뀐다. 페이지마다 렌더링 전략을 고르고, CDN 캐시 헤더는 어떻게 두며, 새로고침 404는 왜 생기나.",
    points: [
      "상품 상세는 SSG + ISR로 두어 CDN이 HTML을 주고 가격이 바뀌면 revalidateTag로 갱신한다. 만료 뒤 첫 요청은 옛 페이지를 받고 뒤에서 재생성되니 즉시성이 필요하면 온디맨드 갱신을 건다.",
      "장바구니는 사용자별이라 SSR이나 CSR로 가고 Cache-Control은 private, no-store다. 공용 CDN 캐시에 사용자별 HTML이 들어가면 다른 사람의 장바구니가 보인다.",
      "1분마다 바뀌는 재고는 ISR이 맞지 않는다. 껍데기는 정적으로 두고 재고만 클라이언트에서 받거나 짧은 s-maxage와 stale-while-revalidate로 둔다.",
      "CSR 라우트의 새로고침 404는 서버가 그 주소를 몰라서 나며 SPA 폴백을 두되 폴백이 JS 요청 실패까지 index.html로 삼켜 MIME 오류를 숨기는 걸 조심한다.",
      "고른 전략대로 나가는지는 응답 헤더(age, x-cache, s-maxage)로 밖에서 확인한다.",
    ],
  },
  {
    id: "fe-28",
    posts: ["rendering-ssr", "hydration", "streaming-ssr-suspense"],
    prompt:
      "운영에서 React #418이 하루 수천 건 찍히고, 없는 상품 주소가 200으로 내려가며, 로컬에서는 되던 스트리밍이 운영에서는 응답이 한 번에 온다. 세 문제를 어디서부터 보고 어떻게 고치나.",
    points: [
      "#418은 하이드레이션 불일치다. 운영 메시지는 축약되니 원인을 재현하려면 시간·난수·브라우저 전용 값·확장 프로그램 중 무엇인지 나누고, 클라이언트 전용 값은 useSyncExternalStore나 effect 뒤에 그린다.",
      "스트리밍에서는 상태 줄이 첫 조각과 함께 떠나므로 Suspense 경계 안에서 notFound를 불러도 이미 200이다. 존재 여부와 권한처럼 응답을 결정하는 데이터는 경계 밖에서 기다린다.",
      "운영에서 한 번에 오면 경로 위에서 응답을 모으는 곳(nginx proxy_buffering, CDN, 압축 변환 스트림)을 찾는다. 애플리케이션 직접 주소와 운영 주소의 첫 바이트와 끝 시간을 비교한다.",
      "renderToString은 다 만든 뒤 보내고 renderToPipeableStream은 셸부터 보낸다. 렌더링은 CPU를 쓰고 Node.js는 한 줄이라 무거운 페이지는 이벤트 루프를 막는다.",
    ],
  },
  {
    id: "fe-29",
    posts: ["react-server-components", "nextjs-static-dynamic-rendering", "js-prototype-chain"],
    prompt:
      "Next.js App Router에서 빌드 표의 글 페이지가 전부 ○에서 ƒ로 바뀌었고, 서버 컴포넌트에서 Date와 클래스 인스턴스를 클라이언트 컴포넌트 props로 넘기자 빌드 에러가 난다. 둘의 원인과 고치는 법은.",
    points: [
      "Next는 빌드 때 라우트를 실제로 렌더링해 보고 cookies, headers, searchParams 같은 요청 시점 값에 손을 대면 동적으로 넘긴다. 페이지가 받은 searchParams를 클라이언트 컴포넌트에 펼쳐 넘긴 것만으로 payload에 적어야 해서 ƒ가 된다.",
      "고치려면 children만 넘기는 서버 래퍼를 두고, 정적이어야 하는 라우트에 dynamic = 'error'를 걸어 배포 전에 빌드가 멈추게 한다.",
      "RSC payload는 HTML이 아니라 직렬화된 트리라 경계를 넘을 수 있는 값은 JSON으로 적을 수 있는 것뿐이다. 클래스 인스턴스는 프로토타입 체인이 직렬화되지 않아 메서드가 사라지니 평범한 객체로 바꿔 넘긴다.",
      "배포 뒤 정적 페이지가 동적으로 바뀐 건 응답 헤더에서 x-nextjs-prerender와 s-maxage가 사라지고 private, no-store가 붙는 것으로 알아챈다.",
    ],
  },
  {
    id: "fe-30",
    posts: ["islands-resumability", "hydration", "lazy-loading-strategies"],
    prompt:
      "블로그 글 페이지인데 상호작용은 댓글창과 공유 버튼뿐이다. 그런데 JS가 1MB이고 LCP 뒤 1.5초 동안 버튼이 눌리지 않는다. React를 유지하는 선택과 Astro·Qwik으로 가는 선택을 비교하고, 각각 무엇을 아끼고 무엇을 내주나.",
    points: [
      "보이는데 안 눌리는 시간은 하이드레이션 비용이다. 정적인 문단도 hydrateRoot가 트리를 다시 만들어 짝을 맞추니 JS 크기만큼 비용을 치른다.",
      "React를 유지하면 Suspense로 선택적 하이드레이션을 하고 서버 컴포넌트로 정적 부분의 JS를 아예 보내지 않으며, 댓글창은 보일 때나 누를 때 받는 지연 로딩으로 미룬다.",
      "아일랜드는 상호작용 조각만 섬으로 살리고 지시어로 언제 살릴지 고르지만 섬끼리 상태 공유가 어렵다. 재개 가능성은 하이드레이션 없이 서버가 멈춘 자리에서 이어 가지만 생태계와 디버깅 비용을 치른다.",
      "첫 화면에 있는 것은 미루지 않는다. LCP 요소를 지연 로딩하면 지표가 되레 나빠진다.",
    ],
  },
  {
    id: "fe-31",
    posts: ["react-rerender", "rendering-performance-optimization", "fe-sd-news-feed"],
    prompt:
      "피드에 글 5,000개를 그렸더니 첫 프레임이 4초이고, 검색창에 글자 하나 칠 때마다 목록 전체가 다시 그려지며, 클래스 하나 토글하면 스타일 재계산이 수만 요소로 번진다. 세 병목을 각각 무엇으로 좁히고 어떤 순서로 고치나.",
    points: [
      "5,000개는 DOM을 다 만들지 않는 가상화로 푼다. 보이는 창 만큼만 그리고 바닥에 닿기 전 다음 페이지를 부른다.",
      "글자마다 전체 렌더링은 상태를 검색창으로 내리거나 memo로 행을 고정하고, 급하지 않은 목록 갱신은 transition으로 미룬다. 고치기 전에 Profiler로 어느 컴포넌트가 왜 렌더링됐는지 잰다.",
      "스타일 재계산이 번지는 건 무효화 범위 문제다. 루트 클래스 대신 가까운 요소에 붙이고 contain과 content-visibility로 화면 밖은 계산하지 않게 한다.",
      "렌더와 커밋은 다른 일이라 React 렌더링 횟수를 줄여도 브라우저 쪽 레이아웃·페인트가 남을 수 있으니 Performance 패널로 두 층을 따로 본다.",
    ],
  },
  {
    id: "fe-32",
    posts: ["core-web-vitals", "performance-metrics-measurement", "lighthouse-explained"],
    prompt:
      "Lighthouse는 92점인데 Search Console의 Core Web Vitals는 '개선 필요'다. PM은 점수를 믿고 개발자는 사용자 데이터를 믿는다. 왜 다르고, 어느 숫자로 무엇을 결정하며, PR마다 Lighthouse를 돌릴 때의 함정은 무엇인가.",
    points: [
      "실험실 점수는 정해진 기기와 망을 흉내 내 한 번 재고, 현장 값은 실제 사용자 기기에서 모은 p75다. 전체 평균은 느린 사용자를 가리니 분포와 구간으로 본다.",
      "Lighthouse 점수는 다섯 지표를 가중치와 로그 정규 곡선으로 접은 값이라 같은 페이지도 회차마다 흔들린다. INP는 실험실에서 재기 어렵고 TBT로 대신 본다.",
      "결정은 현장 p75로 하고 실험실은 원인 쪼개기에 쓴다. LCP는 네 조각, INP는 세 구간, CLS는 세션 창으로 나눠 어느 조각이 큰지 찾는다.",
      "PR 단언은 점수가 아니라 지표 값에 걸고, 여러 번 돌린 중앙값을 쓰며, simulate와 devtools 스로틀링 차이를 안다.",
      "web-vitals 라이브러리로 사용자 값을 보내 집계하고 TTFB, FCP가 어떤 브라우저 엔트리에서 오는지 알아야 지표가 거짓말하는 순간을 가린다.",
    ],
  },
  {
    id: "fe-33",
    posts: ["bundler-basics", "code-splitting", "frontend-browser-cache"],
    prompt:
      "배포 직후 ChunkLoadError가 쏟아지고, 어떤 사용자는 며칠째 옛 버전을 본다. 그리고 아이콘 하나를 import했는데 번들이 400KB 늘었다. 세 문제가 번들러와 캐시의 어느 규칙에서 나오는지 설명하고 고쳐 보라.",
    points: [
      "청크 파일 이름에는 내용 해시가 들어 배포마다 바뀐다. 옛 탭이 옛 index.html로 옛 청크를 찾는데 서버에서 지워졌으니 실패한다. 옛 정적 파일을 한동안 남기고 실패 시 한 번 새로고침한다.",
      "옛 버전이 남는 건 Service Worker가 HTML을 캐시 우선으로 주거나 새 워커가 waiting에 머물기 때문이다. HTML은 네트워크 우선, 해시 파일은 캐시 우선으로 나누고 skipWaiting은 사용자에게 알리고 한다.",
      "배럴 파일(index.ts)을 거치면 트리 셰이킹이 되어도 sideEffects 표시가 없거나 CommonJS 모듈이면 전부 끌려온다. 직접 경로로 import하거나 sideEffects: false를 둔다.",
      "번들러는 import 경로를 찾고 모듈 그래프를 펼쳐 묶으므로 번들 분석기로 어느 모듈이 들어왔는지 보고, 동적 import로 청크를 가른다.",
    ],
  },
  {
    id: "fe-34",
    posts: ["lazy-loading-strategies", "image-optimization", "web-font-optimization"],
    prompt:
      "상품 상세의 LCP가 4.1초다. 히어로 이미지에 loading=lazy가 붙어 있고, 2MB 한글 폰트가 CSS를 읽은 뒤에야 요청되며, 이미지 자리가 없어 글이 밀린다. 고치는 순서와 각 조치가 어느 지표를 움직이는지 말해 보라.",
    points: [
      "첫 화면의 LCP 이미지에 lazy를 붙이면 브라우저가 우선순위를 낮춰 늦게 받는다. lazy를 떼고 fetchpriority=high나 preload로 당긴다.",
      "포맷을 AVIF·WebP로 바꾸고 srcset과 sizes로 화면 폭에 맞는 파일을 고르게 하면 바이트가 준다. width·height를 적어 자리를 잡으면 CLS가 내려간다.",
      "폰트는 CSS를 읽은 뒤에 발견되니 preload에 crossorigin을 붙여 당기고, font-display와 size-adjust로 대체 폰트를 맞춰 글자 밀림을 막는다. 한글은 unicode-range 서브셋으로 크기를 줄인다.",
      "후기나 지도처럼 보이지 않는 것은 보일 때나 누를 때 받아 대역폭을 첫 화면에 몰아 준다. 미룬 뒤 새로 생기는 문제(깜빡임, 자리 이동)를 다시 잰다.",
    ],
  },
  {
    id: "fe-35",
    posts: ["data-fetching-optimization", "resource-hints-loading", "latency-bandwidth-throughput"],
    prompt:
      "주문 내역 화면이 API는 모두 50ms 안에 답하는데 2.2초 걸린다. 네트워크 탭을 보니 요청 아홉 개가 줄지어 있고 목록 줄마다 요청이 하나씩 나간다. HTTP/1.1 환경이다. 무엇이 시간을 먹고 어떤 순서로 줄이나.",
    points: [
      "폭포는 컴포넌트 트리를 따라 생긴다. 부모가 받아야 자식이 요청하니 주소만 보고 알 수 있는 요청은 라우트 진입 시 함께 출발시킨다.",
      "빠르다는 말의 숫자는 지연, 대역폭, 처리량 셋이다. 요청마다 왕복 지연이 들므로 응답이 빨라도 줄지어 보내면 지연의 합이 된다.",
      "HTTP/1.1은 출처당 연결 여섯 개라 줄마다 요청이 나가면 줄을 선다. 목록 요청은 묶음 요청이나 BFF로 하나로 합친다.",
      "같은 요청이 두 번 나가면 캐시로 합치고, 다른 출처 API는 preconnect로 연결을 미리 연다. 급하지 않은 데이터는 첫 화면을 기다리게 하지 않는다.",
    ],
  },
  {
    id: "fe-36",
    posts: ["client-data-cache", "frontend-as-distributed-system", "idempotency-key"],
    prompt:
      "좋아요를 눌렀다 바로 취소하면 화면은 좋아요, 서버는 취소로 남는다. 지하철에서 주문을 누르면 두 건이 생긴 사례도 있다. 낙관적 업데이트와 재시도를 안전하게 만들려면 클라이언트와 서버가 각각 무엇을 해야 하나.",
    points: [
      "낙관적 업데이트는 누르자마자 캐시를 바꾸고 실패하면 되돌리는데, 응답 순서가 뒤바뀌면 늦게 온 낡은 응답이 화면을 덮는다. 서버가 버전을 내려 주고 더 높은 버전만 받아들이거나 같은 항목의 변경을 한 줄로 세운다.",
      "응답이 사라졌다고 처리되지 않은 건 아니다. 브라우저가 재사용 연결 실패 뒤 POST를 다시 보내기도 하므로 두 번 일어나면 안 되는 요청에는 클라이언트가 멱등성 키를 만들어 싣고 재시도에 같은 키를 쓴다.",
      "서버는 키와 처음 응답을 저장해 같은 키면 저장된 응답을 돌려주고, 동시에 온 중복은 잠금이나 유니크 제약으로 하나만 처리하며 보존 기간을 정한다.",
      "뮤테이션 성공 뒤에는 invalidateQueries로 캐시를 서버와 맞춘다. 오프라인이면 outbox에 키와 함께 쌓아 두고 online 때 비운다.",
    ],
  },
  {
    id: "fe-37",
    posts: ["frontend-performance-map", "animation-performance", "spring-animation"],
    prompt:
      "노트북에서는 매끈한 메뉴 애니메이션이 중저가 폰에서 끊기고, 열다가 바로 닫으면 툭 끊긴다. 성능 지도의 다섯 손잡이 중 무엇을 당기고, 속성은 무엇으로 바꾸며, 끊김 없이 되돌리려면 애니메이션 모델을 어떻게 바꾸나.",
    points: [
      "고치기 전에 CPU 4배 느리게와 망 제한을 켜서 재고 지표가 무엇에 묶였는지 가른다. 애니메이션 끊김은 덜 그리기와 덜 실행하기 손잡이다.",
      "한 프레임은 16.7ms이고 left·top은 레이아웃부터 깨우지만 transform·opacity는 합성 단계에서 끝난다. will-change로 층을 미리 만들되 남발하면 메모리를 먹는다.",
      "시간표(duration + easing) 애니메이션은 중간에 목표가 바뀌면 속도가 0에서 다시 시작해 끊긴다. 스프링은 매 프레임 힘을 다시 계산하니 현재 속도를 이어받아 자연스럽게 되돌아간다.",
      "stiffness, damping, mass는 감쇠비 하나로 성격이 묶이고 넘침이 싫으면 임계 감쇠 근처로 둔다. prefers-reduced-motion이면 움직임을 거두고 최종 상태만 보여 준다.",
    ],
  },
  {
    id: "fe-38",
    posts: ["loading-patterns", "animation-patterns", "view-transitions-shared-element"],
    prompt:
      "목록 카드를 누르면 상세로 가는데 스피너가 0.2초 깜빡이고 화면이 뚝 바뀐다. 디자이너가 '카드가 커지면서 상세가 되게' 해 달라고 한다. 어떤 패턴 이름으로 합의하고, 구현은 무엇으로 하며, 전환이 안 보일 때 무엇을 보나.",
    points: [
      "0.2초짜리 기다림에 스피너를 띄우면 깜빡임이 더 느려 보인다. 짧은 지연은 표시하지 않거나 모양을 아는 내용이면 스켈레톤으로 자리를 잡는다.",
      "요청은 shared element 전환이다. 두 화면에 같은 물체가 있다는 착각을 주는 연속성 패턴이라 이름을 정하면 부탁이 짧아진다.",
      "FLIP은 처음과 끝만 재고 사이를 transform으로 메우고, View Transitions API는 브라우저가 찍어서 이어 준다. view-transition-name이 겹치면 전환이 통째로 건너뛰므로 목록에서는 누른 카드에만 이름을 붙인다.",
      "안 보이면 이름 중복, 지원 범위, 문서 간 전환의 opt-in 여부, 움직임 줄이기 설정 순서로 본다. 줄이기 설정은 저절로 반영되지 않으니 직접 거둔다.",
    ],
  },
  {
    id: "fe-39",
    posts: ["scroll-patterns-overview", "css-sticky-scroll-snap", "scroll-driven-animations", "parallax-scrollytelling"],
    prompt:
      "기획서에 '머리글 고정, 읽기 진행 막대, 배경이 느리게 따라오는 소개 섹션'이 한 줄로 적혀 있다. 머리글은 가로 스크롤 상자 안에서 안 붙고, 진행 막대는 처음부터 꽉 차 있고, 패럴랙스는 폰에서 버벅인다. 각각 무엇이 틀렸나.",
    points: [
      "스크롤이 시키는 일은 자리 정하기, 경계 넘는 순간, 위치를 시계로 쓰기 셋이고 패턴마다 도구가 다르다. 머리글은 레이아웃(sticky), 진행 막대와 패럴랙스는 스크롤 타임라인이다.",
      "sticky는 가장 가까운 스크롤 컨테이너와 포함 블록 사이에서만 움직인다. overflow를 준 상자가 컨테이너가 되어 바깥 스크롤에는 붙지 않으니 붙을 기준을 거슬러 올라가 찾는다.",
      "막대가 꽉 찬 건 animation-timeline: scroll()을 지원하지 않는 브라우저에서 키프레임의 끝값이 적용된 것이다. @supports로 바닥을 깔고, overflow: hidden은 타임라인을 꺼 버리니 clip을 쓴다.",
      "패럴랙스를 top으로 밀면 프레임마다 레이아웃을 하고, transform으로 밀면 합성만 한다. sticky 무대 위에서 transform을 쓰고 모바일 100vh 흔들림은 svh로 받는다.",
    ],
  },
  {
    id: "fe-40",
    posts: ["frontend-monorepo", "monorepo-build-cache", "micro-frontends"],
    prompt:
      "팀 넷이 저장소 셋을 쓰다가 버튼 하나 바꾸는 데 PR이 셋 나와서 모노레포로 합쳤다. 그런데 관리자 앱을 열자 useState가 null이고, CI는 한 줄 바꿔도 14개 작업을 다 돌린다. 팀장이 마이크로 프런트엔드로 가자고 한다. 어떻게 판단하나.",
    points: [
      "useState null은 React가 두 벌 들어간 것이다. 공용 패키지가 React를 peer가 아닌 dependency로 가져 링크된 폴더마다 다른 사본이 뜨니 카탈로그로 버전을 하나로 묶고 peerDependencies로 둔다.",
      "CI는 패키지 의존성에서 작업 그래프를 만들어 바뀐 것과 그 위쪽만 돌리고 지난 결과를 원격 캐시에서 꺼낸다. 기준 커밋을 잘못 잡거나 얕은 clone이면 전부 돌거나 테스트가 빠진다.",
      "마이크로 프런트엔드는 팀이 서로의 배포를 기다리는 문제를 푸는 것이지 빌드 시간을 푸는 게 아니다. React 싱글턴, 버전 스큐, 셸 장애 같은 비용이 따르니 독립 배포가 정말 필요한지 먼저 묻는다.",
      "대부분은 모노레포에 CODEOWNERS와 Changesets로 충분하다. 쪼갠 만큼 무거워진다.",
    ],
  },
  {
    id: "fe-41",
    posts: ["module-federation-deep-dive", "micro-frontend-integration-patterns", "frontend-error-tracking"],
    prompt:
      "결제 리모트 서버가 응답 없이 매달리자 셸 전체가 120초 동안 비었고, 수집기에는 'Script error.'만 쌓였다. 왜 셸까지 죽고, 에러는 왜 내용이 없으며, 리모트별로 따로 실패하게 만들려면 어떻게 바꾸나.",
    points: [
      "정적으로 적은 리모트는 공유 스코프 초기화에서 진입 파일을 받으므로 모든 리모트의 init이 끝나야 셸이 실행된다. 연결 거부는 바로 넘어가지만 매달리면 chunkLoadTimeout 기본 120초를 기다린다.",
      "리모트를 런타임에 불러 그 영역만 기다리게 하고 타임아웃과 예비 주소를 두면 한 리모트 장애가 셸을 막지 않는다. Error Boundary로 그 영역만 대체 화면으로 바꾼다.",
      "다른 출처 스크립트의 에러는 브라우저가 내용을 가려 'Script error.'만 남긴다. script 태그에 crossorigin을 붙이고 서버가 CORS 헤더를 주어야 스택이 온다.",
      "리모트마다 릴리스 이름과 소스맵을 따로 올려 압축된 위치를 되돌리고, 리소스 타이밍으로 리모트별 로딩 시간을 따로 재서 어느 조각이 느린지 본다.",
    ],
  },
  {
    id: "fe-42",
    posts: ["ab-testing", "frontend-state-architecture", "rendering-ssg-isr"],
    prompt:
      "ISR로 굽는 상품 상세에서 구매 버튼 색 A/B 테스트를 한다. 배정을 클라이언트에서 하니 첫 화면이 깜빡이고, 결과는 A 5.1% B 5.3%인데 유입 비율이 48:52다. 깜빡임을 없애면서 캐시를 지키는 방법과 이 결과를 믿어도 되는지 말해 보라.",
    points: [
      "클라이언트 배정은 기존 화면이 먼저 그려진 뒤 바뀌어 깜빡이고 B 사용자가 겪는 화면이 설계와 달라진다. 서버나 엣지에서 HTML을 만들기 전에 배정하면 풀리지만 사람마다 응답이 달라진다.",
      "정적 페이지를 지키려면 변형별로 캐시 키를 나누거나, 페이지는 공용으로 두고 플래그 값만 최상단 한 곳에서 읽어 설정 데이터로 아래에 내린다. 플래그는 전역 상태가 아니라 서버에서 온 설정이라 원본이 사는 곳에 맞게 둔다.",
      "48:52는 SRM 의심 상황이다. 카이제곱으로 확인하고 나오면 효과를 해석하지 않고 노출 기록, 리다이렉트 손실, 캐시, id 정규화 불일치부터 찾는다.",
      "같은 사람에게 항상 같은 쪽을 주려면 실험 이름과 사용자 id를 해시해 버킷을 정하고, 노출은 실험 영역이 실제로 보인 순간에만 찍는다.",
    ],
  },
];
