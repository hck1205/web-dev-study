import type { QuizQuestion } from "../types";

export const FALCO_RUNTIME_SECURITY: QuizQuestion[] = [
  {
    id: "falco-runtime-security-1",
    post: "falco-runtime-security",
    question:
      "기본 seccomp 프로필이 걸린 컨테이너에서 셸을 띄우고 /etc/shadow를 읽는 일이 모두 성공했다. 이것을 알아채려면 무엇이 필요한가?",
    choices: [
      "더 엄격한 RuntimeDefault 프로필",
      "이미지 서명 검증",
      "허용된 시스템 콜 안의 이상 행동을 규칙으로 탐지하는 Falco 같은 런타임 탐지",
      "NetworkPolicy",
    ],
    answer: 2,
    explanation:
      "execve, openat, write는 모든 프로그램이 쓰는 시스템 콜이라 seccomp가 일괄로 막지 않는다. 이런 행동은 맥락으로 판단해야 해서, 시스템 콜 이벤트를 보고 규칙으로 알림을 내는 런타임 탐지가 맡는다. 서명과 NetworkPolicy는 다른 단계를 지킨다.",
    anchor: "막는-장치와-알아채는-장치",
  },
  {
    id: "falco-runtime-security-2",
    post: "falco-runtime-security",
    question: "Falco의 modern_ebpf 드라이버가 kmod보다 운영하기 쉬운 이유는?",
    choices: [
      "BTF와 CO-RE로 한 번 빌드한 프로브를 여러 커널에서 쓰므로 노드마다 커널 모듈을 빌드하지 않아도 돼서",
      "커널 권한 없이 사용자 공간에서만 돌아서",
      "이벤트를 버리지 않는다는 보장이 있어서",
      "모든 커널 버전을 지원해서",
    ],
    answer: 0,
    explanation:
      "modern eBPF는 커널의 BTF 정보를 써서 같은 프로브가 여러 커널에 맞춰 붙는다. 대신 BTF가 있는 비교적 최신 커널이 필요하고, 권한이 부족하면 시작하지 못한다. 링 버퍼가 넘치면 이벤트가 버려지는 것은 어떤 드라이버든 같다.",
    anchor: "커널에서-규칙까지-이벤트가-가는-길",
  },
  {
    id: "falco-runtime-security-3",
    post: "falco-runtime-security",
    question:
      "Terminal shell in container 규칙에서 디버그용 이미지의 셸만 알림에서 빼려면 어떻게 하는 게 맞나?",
    choices: [
      "기본 falco_rules.yaml의 condition을 직접 고친다",
      "별도 파일에서 user_expected_terminal_shell_in_container_conditions 매크로를 override로 바꿔 그 이미지를 넣는다",
      "규칙의 priority를 DEBUG로 낮춘다",
      "shell_binaries 목록에서 sh를 뺀다",
    ],
    answer: 1,
    explanation:
      "기본 규칙은 이 예외 매크로를 never_true로 비워 두고 사용자가 덮어쓰게 해 두었다. 기본 파일을 고치면 판이 오를 때 덮어써지고, sh를 목록에서 빼면 모든 컨테이너의 셸 탐지가 꺼진다.",
    anchor: "내-규칙을-쓰고-검증하기",
  },
  {
    id: "falco-runtime-security-4",
    post: "falco-runtime-security",
    question:
      "예외를 fields: [proc.name], values: [[restic]]로만 걸었다. 어떤 문제가 생기나?",
    choices: [
      "restic이 읽는 모든 파일이 알림에서 빠져서 성능이 떨어진다",
      "예외는 필드가 하나면 동작하지 않는다",
      "공격자가 자기 도구 이름을 restic으로 바꾸면 탐지를 우회한다",
      "restic 이벤트가 두 번 알림으로 나온다",
    ],
    answer: 2,
    explanation:
      "프로세스 이름은 공격자가 쉽게 바꿀 수 있는 값이다. 예외에는 파일 경로, 이미지 저장소, 실행 경로, 네임스페이스처럼 바꾸기 어려운 필드를 함께 넣어 좁게 잡는다.",
    anchor: "시끄러운-알림-줄이기",
  },
  {
    id: "falco-runtime-security-5",
    post: "falco-runtime-security",
    question:
      "새로 쓴 규칙이 falco -V로는 Ok인데 실제 이벤트에서 알림이 나오지 않는다. 기본 설정에서 먼저 의심할 것은?",
    choices: [
      "rule_matching이 first라서 같은 이벤트에 먼저 정의된 다른 규칙이 맞으면 내 규칙은 알림을 내지 않는다",
      "falco -V는 문법을 검사하지 않는다",
      "사용자 규칙은 기본적으로 꺼져 있다",
      "priority가 ERROR인 규칙은 stdout으로 나가지 않는다",
    ],
    answer: 0,
    explanation:
      "기본값 first는 규칙 파일에 정의된 순서대로 평가하다 처음 맞는 규칙에서 멈춘다. 그래서 뒤에 읽힌 사용자 규칙이 가려질 수 있다. all로 바꾸면 모두 내보내지만 평가 비용이 늘어난다.",
    anchor: "시끄러운-알림-줄이기",
  },
  {
    id: "falco-runtime-security-6",
    post: "falco-runtime-security",
    question:
      "예제에서 가져온 규칙에 append: true를 썼더니 LOAD_ERR_VALIDATE와 LOAD_DEPRECATED_ITEM이 함께 나왔다. 맞는 해석은?",
    choices: [
      "Falco 판이 너무 오래되어 append를 모른다",
      "덧붙일 매크로가 지금 규칙 파일에 없고, append 키는 override 아래로 옮겨 가서 옛 문법이다",
      "YAML 들여쓰기가 틀렸다",
      "append는 rule에만 쓸 수 있다",
    ],
    answer: 1,
    explanation:
      "append나 override로 덧붙이려면 같은 이름의 대상이 앞에서 정의돼 있어야 한다. stable 규칙 파일에 없는 매크로라 오류가 났고, append: true는 override 아래의 condition: append로 쓰라는 경고가 같이 나왔다.",
    anchor: "내-규칙을-쓰고-검증하기",
  },
  {
    id: "falco-runtime-security-7",
    post: "falco-runtime-security",
    question: "운영 Pod에서 Terminal shell in container 알림이 왔다. 가장 나은 첫 대응은?",
    choices: [
      "자동화로 즉시 Pod를 삭제한다",
      "Falco 규칙을 꺼서 알림을 멈춘다",
      "노드를 바로 재부팅한다",
      "사람에게 알리고, 감사 로그로 운영자의 exec였는지 확인하면서 네트워크 격리와 증거 확보 후 정리한다",
    ],
    answer: 3,
    explanation:
      "바로 지우면 메모리와 연결 같은 증거가 사라지고, 운영자의 kubectl exec였다면 오탐으로 장애를 만든다. 감사 로그와 맞춰 보고, 격리와 증거 확보를 먼저 한 뒤 정리하는 순서가 낫다.",
    anchor: "알림을-받은-다음",
  },
];
