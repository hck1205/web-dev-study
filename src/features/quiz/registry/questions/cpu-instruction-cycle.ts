import type { QuizQuestion } from "../types";

export const CPU_INSTRUCTION_CYCLE: QuizQuestion[] = [
  {
    id: "cpu-instruction-cycle-1",
    post: "cpu-instruction-cycle",
    question: "점프가 아닌 명령어를 실행한 뒤 x86의 rip(PC)는 어떻게 바뀌나?",
    choices: [
      "항상 4만큼 늘어난다",
      "방금 실행한 명령어의 바이트 길이만큼 늘어난다",
      "스택에서 다음 주소를 꺼낸다",
      "운영체제가 다음 주소를 정해 준다",
    ],
    answer: 1,
    explanation:
      "x86 명령어는 1~15바이트 가변 길이라서 rip는 명령어 길이만큼 늘어난다. gdb로 square를 한 명령씩 넘기면 1, 3, 4, 4, 4, 1바이트씩 늘었다. 고정 4바이트는 ARM64 같은 RISC 쪽 이야기다.",
    anchor: "함수를-부르면-돌아올-주소를-스택에-적는다",
  },
  {
    id: "cpu-instruction-cycle-2",
    post: "cpu-instruction-cycle",
    question: "call 명령이 하는 일로 맞는 것은?",
    choices: [
      "다음 명령어의 주소를 스택에 넣고 함수 주소로 점프한다",
      "함수의 지역 변수를 모두 레지스터에 올린다",
      "rbp를 0으로 초기화한다",
      "인자를 스택에서 rdi로 옮긴다",
    ],
    answer: 0,
    explanation:
      "call은 복귀 주소를 push하고 rip를 함수 시작으로 바꾼다. ret은 그 주소를 pop해 rip에 넣는다. 디버거의 backtrace는 스택에 남은 이 복귀 주소 사슬을 따라간 것이다.",
    anchor: "함수를-부르면-돌아올-주소를-스택에-적는다",
  },
  {
    id: "cpu-instruction-cycle-3",
    post: "cpu-instruction-cycle",
    question: "리눅스 x86-64(System V ABI)에서 f(a, b)를 부를 때 a, b와 반환값이 놓이는 곳은?",
    choices: [
      "a는 rcx, b는 rdx, 반환은 rax",
      "a와 b 모두 스택, 반환은 스택",
      "a는 rdi, b는 rsi, 반환은 rax",
      "a는 rax, b는 rbx, 반환은 rdi",
    ],
    answer: 2,
    explanation:
      "System V는 정수 인자를 rdi, rsi, rdx, rcx, r8, r9 순서로 넘기고 rax로 돌려준다. rcx, rdx부터 시작하는 건 Windows x64 규약이다.",
    anchor: "인자는-어느-레지스터로-넘기나",
  },
  {
    id: "cpu-instruction-cycle-4",
    post: "cpu-instruction-cycle",
    question: "sum_sq가 첫 square 결과를 rbx에 두고 두 번째 square를 부를 수 있는 이유는?",
    choices: [
      "rbx는 CPU가 함수 호출 때 자동으로 저장해서",
      "square가 레지스터를 하나도 쓰지 않아서",
      "rbx는 반환값 전용 레지스터라서",
      "rbx는 callee-saved라서 불린 함수가 쓰더라도 원래 값으로 돌려놓기로 약속되어 있어서",
    ],
    answer: 3,
    explanation:
      "호출 규약에서 rbx, rbp, r12~r15는 불린 쪽이 보존한다. 그래서 sum_sq도 자기를 부른 쪽을 위해 rbx를 push해 두었다가 돌려놓는다. CPU가 자동으로 저장해 주는 레지스터는 없다.",
    anchor: "인자는-어느-레지스터로-넘기나",
  },
  {
    id: "cpu-instruction-cycle-5",
    post: "cpu-instruction-cycle",
    question: "jne의 기계어가 75 f4이고 다음 명령어 주소가 0x1d다. 점프 대상은?",
    choices: [
      "0xf4",
      "0x11",
      "0x29",
      "0x1d에서 0xf4바이트 뒤",
    ],
    answer: 1,
    explanation:
      "f4는 1바이트 2의 보수로 -12이고, 상대 점프는 다음 명령어 주소를 기준으로 한다. 0x1d - 12 = 0x11이다. 상대 거리로 적기 때문에 코드를 어느 주소에 올려도 그대로 돈다.",
    anchor: "명령어도-결국-바이트다",
  },
  {
    id: "cpu-instruction-cycle-6",
    post: "cpu-instruction-cycle",
    question: "커널 로그에 'segfault at 10 ip ... error 4'가 남았다. 가장 먼저 의심할 것은?",
    choices: [
      "널 포인터가 가리키는 구조체의 필드(오프셋 0x10)를 읽었다",
      "스택 한도 8MiB를 넘었다",
      "디스크가 가득 찼다",
      "CPU가 명령어를 해석하지 못했다",
    ],
    answer: 0,
    explanation:
      "segfault at 뒤의 값은 접근하려던 주소이고, 0이나 작은 값이면 널 포인터에 필드 오프셋이 더해진 경우가 많다. error 4는 사용자 모드에서 없는 페이지를 읽었다는 page fault 코드다. ip를 objdump나 addr2line으로 풀면 죽은 명령어와 소스 줄이 나온다.",
    anchor: "크래시-로그에서-죽은-명령어-찾기",
  },
  {
    id: "cpu-instruction-cycle-7",
    post: "cpu-instruction-cycle",
    question: "앞 결과에 이어서 반복할 때 실측 시간이 가장 긴 연산은?",
    choices: [
      "64비트 덧셈(add)",
      "64비트 곱셈(imul)",
      "레지스터 복사(mov)",
      "64비트 나눗셈(idiv)",
    ],
    answer: 3,
    explanation:
      "이 글의 측정에서 add는 약 0.37ns(한 사이클), imul은 약 1.08ns(세 사이클), idiv는 약 5.7ns였다. 그래서 컴파일러는 상수 나눗셈을 곱셈과 시프트로 바꾸고, 해시 테이블은 크기를 2의 거듭제곱으로 잡아 & 연산을 쓰기도 한다.",
    anchor: "명령어마다-걸리는-시간이-다르다",
  },
];
