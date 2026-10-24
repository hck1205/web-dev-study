import type { QuizQuestion } from "../types";

export const MEMORY_SAFETY_BUFFER_OVERFLOW: QuizQuestion[] = [
  {
    id: "memory-safety-buffer-overflow-1",
    post: "memory-safety-buffer-overflow",
    question: "16바이트 지역 배열에 40바이트를 복사하면 스택에서 리턴 주소가 덮일 수 있는 이유는?",
    choices: [
      "스택은 낮은 주소에서 높은 주소로 자라고 배열 쓰기도 같은 방향이기 때문",
      "x86-64에서 스택은 높은 주소에서 낮은 주소로 자라는데 배열 쓰기는 반대 방향이라, 넘치면 리턴 주소가 있는 높은 주소 쪽을 덮기 때문",
      "리턴 주소가 배열보다 낮은 주소에 있기 때문",
      "컴파일러가 리턴 주소를 배열 안에 넣기 때문",
    ],
    answer: 1,
    explanation:
      "x86-64에서 스택은 높은 주소에서 낮은 주소로 자라지만 배열에 쓰는 방향은 반대라, 지역 배열을 넘쳐 쓰면 더 높은 주소에 있는 저장된 레지스터와 리턴 주소를 덮는다. 리턴 주소가 바뀌면 ret 명령이 공격자가 고른 주소로 실행을 넘긴다.",
    anchor: "스택-프레임에-돌아갈-주소가-적혀-있다",
  },
  {
    id: "memory-safety-buffer-overflow-2",
    post: "memory-safety-buffer-overflow",
    question: "use-after-free가 특히 위험하게 여겨지는 이유로 가장 알맞은 것은?",
    choices: [
      "항상 즉시 프로그램을 죽여 복구가 불가능하다",
      "컴파일 자체가 되지 않는다",
      "해제한 메모리가 운 좋게 멀쩡해 보이기도 해 버그가 눈에 안 띄고, 그 칸이 재사용되면 함수 포인터 같은 남의 데이터를 덮을 수 있다",
      "스택에서만 발생해 리턴 주소를 직접 덮는다",
    ],
    answer: 2,
    explanation:
      "free 뒤에도 그 칸을 읽으면 옛 값이 남아 멀쩡해 보일 수 있어 버그가 숨는다. 그 칸이 다른 할당에 재사용된 뒤 옛 포인터로 쓰면 함수 포인터나 타입 정보 같은 남의 데이터를 덮어 흐름 탈취로 이어진다. 브라우저·커널 취약점의 큰 몫이 이것이다.",
    anchor: "힙에서도-비슷한-일이-다만-다른-모양으로",
  },
  {
    id: "memory-safety-buffer-overflow-3",
    post: "memory-safety-buffer-overflow",
    question: "스택 카나리의 한계로 맞는 것은?",
    choices: [
      "리턴 주소가 덮였는지 함수가 끝나는 순간에만 확인해, 함수 중간에 함수 포인터를 덮어 바로 쓰면 막지 못한다",
      "힙 오버플로만 잡고 스택은 못 잡는다",
      "컴파일러가 더 이상 지원하지 않는다",
      "NX가 켜져 있으면 작동하지 않는다",
    ],
    answer: 0,
    explanation:
      "카나리는 지역 변수와 리턴 주소 사이의 임의 값을 함수 종료 시점에만 확인한다. 함수 중간에 함수 포인터를 덮어 즉시 호출하거나 카나리를 안 건드리고 정보를 읽어 내면 소용이 없다. 그래서 단독 방어가 아니라 다른 층과 겹쳐 쓴다.",
    anchor: "봉인을-붙인다-스택-카나리",
  },
  {
    id: "memory-safety-buffer-overflow-4",
    post: "memory-safety-buffer-overflow",
    question: "NX(실행 금지) 비트가 켜졌는데도 ROP 공격이 통하는 이유는?",
    choices: [
      "ROP는 스택이 아니라 힙에서만 돌아 NX를 피한다",
      "NX는 데이터 영역에 심은 코드의 실행만 막고, ROP는 이미 프로그램·라이브러리 안에 있는 코드 조각(가젯)을 재활용하기 때문",
      "NX는 32비트에서만 동작하기 때문",
      "ROP는 카나리를 먼저 끄기 때문",
    ],
    answer: 1,
    explanation:
      "NX는 스택·힙 같은 데이터 영역에서 코드 실행을 막는다. ROP는 새 코드를 심지 않고 라이브러리 곳곳의 'ret으로 끝나는 짧은 명령 조각'을 리턴 주소로 연결해 동작을 꿰맞춘다. 실행 가능한 기존 코드만 쓰므로 NX에 걸리지 않는다.",
    anchor: "데이터에서는-실행하지-않는다-nx",
  },
  {
    id: "memory-safety-buffer-overflow-5",
    post: "memory-safety-buffer-overflow",
    question: "ASLR이 무력화되는 대표적인 상황은?",
    choices: [
      "프로그램을 두 번 이상 실행했을 때",
      "주소 하나가 정보 유출 버그로 새어 나가 라이브러리 전체의 상대 위치가 드러났을 때",
      "NX 비트가 함께 켜졌을 때",
      "스택 카나리가 함께 켜졌을 때",
    ],
    answer: 1,
    explanation:
      "ASLR은 주소를 무작위로 바꿔 가젯 위치를 숨긴다. 무작위 비트가 적으면(특히 32비트) 반복 시도로 맞힐 수 있고, 주소 하나가 정보 유출로 새면 상대 위치를 역산해 전체가 드러난다. 그래서 카나리·NX와 겹쳐 두는 방어다.",
    anchor: "주소를-숨긴다-aslr과-pie",
  },
  {
    id: "memory-safety-buffer-overflow-6",
    post: "memory-safety-buffer-overflow",
    question: "Rust·Go·자바스크립트 같은 메모리 안전 언어를 써도 메모리 버그가 생길 수 있는 자리로 가장 알맞은 것은?",
    choices: [
      "일반적인 배열 접근",
      "가비지 컬렉션이 도는 동안",
      "unsafe 블록·네이티브(C) 모듈 같은 FFI 경계와, 작게 접힌 할당 크기를 만드는 정수 오버플로",
      "표준 라이브러리의 문자열 처리",
    ],
    answer: 2,
    explanation:
      "안전 보장을 벗어나는 경계에서 구멍이 다시 생긴다. Rust의 unsafe, Go의 unsafe.Pointer, JNI, 네이티브 C 모듈의 실수는 C와 같은 사고를 내고, 정수 오버플로로 작게 계산된 할당 크기는 버퍼 오버플로를 부른다. allocUnsafe 같은 비초기화 API는 정보 유출을 낸다.",
    anchor: "안전-언어에도-구멍이-다시-생기는-자리",
  },
  {
    id: "memory-safety-buffer-overflow-7",
    post: "memory-safety-buffer-overflow",
    question: "할당 크기를 count * size로 구할 때 오버플로를 '곱하기 전에' count > MAX / size로 판단해야 하는 이유는?",
    choices: [
      "나눗셈이 곱셈보다 빠르기 때문",
      "곱한 뒤에 비교하면 이미 넘쳐 작아진 값으로 판단하게 되어 검사가 통과해 버리기 때문",
      "MAX / size가 항상 0이기 때문",
      "size가 음수일 때만 의미가 있기 때문",
    ],
    answer: 1,
    explanation:
      "곱이 정수 범위를 넘치면 작은 값으로 접힌다. 곱한 뒤에 그 접힌 값을 MAX와 비교하면 넘침을 놓치고 작은 버퍼를 받아 버린다. 넘치기 전에 count > MAX / size로 판단해야 안전하며, C의 __builtin_mul_overflow나 Rust의 checked_mul이 같은 일을 한다.",
    anchor: "안전-언어에도-구멍이-다시-생기는-자리",
  },
];
