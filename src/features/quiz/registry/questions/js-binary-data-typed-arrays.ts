import type { QuizQuestion } from "../types";

export const JS_BINARY_DATA_TYPED_ARRAYS: QuizQuestion[] = [
  {
    id: "js-binary-data-typed-arrays-1",
    post: "js-binary-data-typed-arrays",
    question: "PNG 헤더의 너비 칸(00 00 02 80)을 new Uint32Array(buf)로 읽었더니 640이 아니라 2147614720이 나왔다. 왜 그럴까?",
    choices: [
      "Uint32Array는 부호 있는 정수로 읽어서 값이 커졌다",
      "PNG는 압축되어 있어서 먼저 풀어야 한다",
      "PNG는 빅 엔디언인데 TypedArray는 기기의 순서(대부분 리틀 엔디언)로 읽기 때문에",
      "ArrayBuffer는 4바이트마다 패딩이 들어가서 위치가 밀렸다",
    ],
    answer: 2,
    explanation:
      "TypedArray는 플랫폼의 바이트 순서를 쓰고, x86과 대부분의 ARM은 리틀 엔디언이라 마지막 바이트 80을 가장 큰 자리로 본다. 외부 형식은 DataView.getUint32(16)처럼 순서를 명시해 읽는다. getUint32의 기본값은 빅 엔디언이다.",
    anchor: "엔디언-바이트를-놓는-순서",
  },
  {
    id: "js-binary-data-typed-arrays-2",
    post: "js-binary-data-typed-arrays",
    question: "bytes.subarray(2, 4)로 얻은 part의 값을 고쳤다. 어떤 일이 생기나?",
    choices: [
      "원본 bytes의 해당 칸도 함께 바뀐다",
      "part만 바뀌고 원본은 그대로다",
      "subarray 결과는 읽기 전용이라 TypeError가 난다",
      "원본 버퍼가 detached 상태가 된다",
    ],
    answer: 0,
    explanation:
      "subarray는 같은 버퍼의 일부를 보는 새 뷰라서 고치면 원본도 바뀐다. 사본이 필요하면 slice를 쓴다. 일반 배열의 slice 습관으로 subarray를 쓰면 원본을 망가뜨린다.",
    anchor: "같은-버퍼를-보는-뷰는-서로를-바꾼다",
  },
  {
    id: "js-binary-data-typed-arrays-3",
    post: "js-binary-data-typed-arrays",
    question: "Node에서 Buffer.from('hello')의 .buffer로 new Uint8Array(b.buffer)를 만들면 길이가 8192가 된다. 올바르게 고친 것은?",
    choices: [
      "new Uint8Array(b.buffer.slice(0, 5))",
      "new Uint8Array(b.buffer, b.byteOffset, b.byteLength)",
      "new Uint8Array(b.buffer).subarray(0, 5)",
      "Uint8Array.from(b.buffer)",
    ],
    answer: 1,
    explanation:
      "작은 Buffer는 8KB 공용 풀에서 잘라 쓰므로 데이터가 버퍼의 처음이 아니라 byteOffset 위치에 있다. 앞에서 5바이트를 자르면 다른 데이터를 읽게 된다. 뷰의 .buffer를 넘길 때는 byteOffset과 byteLength를 함께 넘긴다.",
    anchor: "같은-버퍼를-보는-뷰는-서로를-바꾼다",
  },
  {
    id: "js-binary-data-typed-arrays-4",
    post: "js-binary-data-typed-arrays",
    question: "캔버스 픽셀 밝기를 더하다 255를 넘긴 곳이 검게 변했다. 어떤 타입을 썼을 가능성이 높나?",
    choices: [
      "Uint8ClampedArray",
      "Float32Array",
      "Int16Array",
      "Uint8Array",
    ],
    answer: 3,
    explanation:
      "Uint8Array는 넘친 비트를 잘라 256이 0이 되므로 흰색이 검은색으로 뒤집힌다. Uint8ClampedArray는 범위를 넘으면 255에 붙여 두고, ImageData.data가 이 타입이다. 어느 쪽도 에러는 내지 않는다.",
    anchor: "숫자가-칸에-안-맞으면-조용히-잘린다",
  },
  {
    id: "js-binary-data-typed-arrays-5",
    post: "js-binary-data-typed-arrays",
    question: "postMessage(bytes, [bytes.buffer])로 워커에 넘긴 뒤 메인 스레드에서 bytes로 미리보기를 그리면 빈 화면이 나온다. 이유는?",
    choices: [
      "워커가 버퍼를 다 읽을 때까지 메인 스레드는 잠긴다",
      "transfer로 소유권이 옮겨져 메인 쪽 버퍼가 길이 0의 detached 상태가 됐다",
      "postMessage는 버퍼를 문자열로 바꿔 보내서 원본이 초기화된다",
      "Transferable은 SharedArrayBuffer에서만 쓸 수 있다",
    ],
    answer: 1,
    explanation:
      "transfer 목록에 넣은 버퍼는 복사되지 않고 옮겨지며, 보낸 쪽은 byteLength 0의 detached 버퍼만 남는다. 다시 쓰려면 미리 slice로 사본을 만들거나 워커에서 돌려받는다. 뷰 하나만 보내도 아래 버퍼 전체가 함께 간다.",
    anchor: "워커로-넘길-때는-복사하거나-옮긴다",
  },
  {
    id: "js-binary-data-typed-arrays-6",
    post: "js-binary-data-typed-arrays",
    question: "SharedArrayBuffer를 쓰려면 페이지가 COOP·COEP 헤더로 교차 출처 격리돼야 한다. 그 이유는?",
    choices: [
      "공유 메모리로 정밀한 타이머를 만들 수 있어 Spectre 같은 캐시 타이밍 공격에 쓰일 수 있기 때문에",
      "다른 출처의 워커가 공유 메모리에 쓰는 것을 CORS로 허락해야 하기 때문에",
      "공유 메모리는 HTTPS에서만 할당되므로 헤더로 HTTPS를 증명해야 하기 때문에",
      "SharedArrayBuffer는 서비스 워커에서만 만들 수 있기 때문에",
    ],
    answer: 0,
    explanation:
      "공유 메모리에 카운터를 계속 올리는 워커로 고해상도 타이머를 만들면 CPU 캐시 타이밍을 재서 같은 프로세스의 다른 출처 데이터를 추측할 수 있다. 그래서 다른 출처의 창과 리소스를 떼어 낸 crossOriginIsolated 페이지에서만 허용한다. 대가로 CORP·CORS 없는 외부 리소스와 팝업 통신이 막힌다.",
    anchor: "sharedarraybuffer는-왜-헤더가-있어야-켜지나",
  },
  {
    id: "js-binary-data-typed-arrays-7",
    post: "js-binary-data-typed-arrays",
    question: "V8(Node 22)에서 실수 100만 개를 담은 일반 배열과 Float64Array의 메모리를 쟀더니 둘 다 약 7.6MB였다. 이 결과로 가장 알맞은 판단은?",
    choices: [
      "Float64Array는 힙 밖에 있어서 실제로는 메모리를 쓰지 않는다",
      "TypedArray는 메모리 이득이 없으니 쓸 이유가 없다",
      "일반 배열은 항상 TypedArray보다 메모리를 적게 쓴다",
      "같은 종류 숫자만 든 일반 배열은 V8이 촘촘히 저장하므로, TypedArray의 이득은 작은 칸 타입과 바이트 그대로 주고받기·옮기기에서 나온다",
    ],
    answer: 3,
    explanation:
      "V8은 실수만 든 배열을 내부적으로 촘촘한 실수 배열로 저장해 Float64Array와 비슷하다. 값이 섞이면 두 배로 늘었고, Uint8Array는 1MB였다. TypedArray는 작은 칸, 고정 타입, 파일·소켓·워커와 바이트 그대로 오가는 점이 장점이다.",
    anchor: "일반-배열-대신-typedarray를-쓸-때",
  },
];
