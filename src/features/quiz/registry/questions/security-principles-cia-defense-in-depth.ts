import type { QuizQuestion } from "../types";

export const SECURITY_PRINCIPLES_CIA_DEFENSE_IN_DEPTH: QuizQuestion[] = [
  {
    id: "security-principles-cia-defense-in-depth-1",
    post: "security-principles-cia-defense-in-depth",
    question: "공격자가 배포 파이프라인에 코드를 끼워 넣고, 나가면서 백업을 지웠다. 각각 CIA의 어느 축이 깨진 것인가?",
    choices: [
      "둘 다 기밀성",
      "코드 삽입은 무결성, 백업 삭제는 가용성",
      "코드 삽입은 가용성, 백업 삭제는 무결성",
      "둘 다 무결성",
    ],
    answer: 1,
    explanation:
      "바뀌면 안 되는 배포 산출물이 몰래 바뀐 것은 무결성, 필요할 때 복구할 수단을 쓸 수 없게 된 것은 가용성이다. 축을 나누면 막는 수단도 달라져서 무결성은 서명 검증, 가용성은 다른 계정의 지울 수 없는 백업이 맡는다.",
    anchor: "무엇을-지키는지부터-나눈다",
  },
  {
    id: "security-principles-cia-defense-in-depth-2",
    post: "security-principles-cia-defense-in-depth",
    question: "배포 서버에 `app.tar`와 `SHA256SUMS`를 함께 두었다. 이 해시가 막지 못하는 것은?",
    choices: [
      "전송 중에 실수로 깨진 파일",
      "디스크 오류로 바뀐 바이트",
      "배포 서버를 차지한 공격자가 파일을 바꾸고 해시 목록도 새로 만들어 덮어쓴 경우",
      "다운로드가 중간에 끊긴 파일",
    ],
    answer: 2,
    explanation:
      "검증 수단이 검증받는 대상과 같은 손에 있으면 일부러 바꾼 것은 잡지 못한다. 해시 목록에 서명하고 서명 키를 배포 서버 밖에 두면, 공격자는 바뀐 목록에 맞는 서명을 만들 수 없다.",
    anchor: "무결성-바뀌면-안-되는-것이-바뀐다",
  },
  {
    id: "security-principles-cia-defense-in-depth-3",
    post: "security-principles-cia-defense-in-depth",
    question: "로그인 실패 5번이면 계정을 잠그는 정책이 가용성을 해치는 이유는?",
    choices: [
      "공격자가 남의 아이디로 일부러 틀려 진짜 사용자를 못 들어오게 만들 수 있어서다",
      "잠금 기록이 DB를 가득 채워서다",
      "비밀번호 해시 계산이 느려져서다",
      "잠긴 계정의 데이터가 외부로 새어서다",
    ],
    answer: 0,
    explanation:
      "계정 잠금은 대입 공격을 막아 기밀성을 지키지만, 잠그는 행위 자체가 공격 수단이 된다. 그래서 점점 늘어나는 지연, IP별 속도 제한, 다단계 인증을 함께 쓴다. 세 축이 서로 당기는 대표적인 예다.",
    anchor: "세-축은-서로-당긴다",
  },
  {
    id: "security-principles-cia-defense-in-depth-4",
    post: "security-principles-cia-defense-in-depth",
    question: "WAF, API 게이트웨이, 앱이 모두 같은 정규식으로 입력을 검사한다. 심층 방어 관점에서 문제는?",
    choices: [
      "검사가 세 번이라 지연이 늘어나는 것뿐이다",
      "문제없다. 겹이 셋이니 충분히 안전하다",
      "정규식은 WAF에서만 동작한다",
      "셋이 같은 이유로 실패하니, 그 정규식을 우회하는 입력 하나가 세 겹을 동시에 지나간다",
    ],
    answer: 3,
    explanation:
      "겹의 수보다 겹이 서로 다른 이유로 실패하는지가 중요하다. 엣지의 패턴 검사와 앱의 파라미터 바인딩처럼 다른 메커니즘을 섞어야 한 겹이 뚫려도 다음 겹이 막는다.",
    anchor: "겹은-서로-다른-종류여야-한다",
  },
  {
    id: "security-principles-cia-defense-in-depth-5",
    post: "security-principles-cia-defense-in-depth",
    question: "운영자가 1년에 두 번 쓰는 DB 관리자 권한을 늘 들고 다닌다. 최소 권한의 어느 방향으로 줄이는 게 맞나?",
    choices: [
      "무엇을: 관리자 권한에서 SELECT만 남긴다",
      "언제까지: 필요할 때 승인을 받아 짧게 쓰는 임시 권한으로 바꾼다",
      "누구에게: 팀 공용 계정 하나로 모은다",
      "줄일 필요 없다. 쓰는 날이 적으니 위험도 작다",
    ],
    answer: 1,
    explanation:
      "상시 권한은 계정이 털리는 날이 언제든 같은 피해를 낸다. 필요할 때만 받는 임시 권한이면 나머지 시간의 피해 반경이 줄어든다. 공용 계정은 누가 무엇을 했는지 가릴 수 없어 오히려 거꾸로 가는 길이다.",
    anchor: "최소-권한-필요한-만큼-필요한-동안만",
  },
  {
    id: "security-principles-cia-defense-in-depth-6",
    post: "security-principles-cia-defense-in-depth",
    question: "권한을 모두 줄인 뒤에도 넓은 권한을 가진 break-glass 계정을 따로 두는 이유는?",
    choices: [
      "감사 로그를 남기지 않고 작업하기 위해서다",
      "평소 배포를 빠르게 하기 위해서다",
      "장애 때 고칠 권한이 없으면 사람들이 평소 계정에 넓은 권한을 다시 붙이기 때문에, 경보가 걸린 비상 통로를 따로 두는 것이다",
      "최소 권한 정책은 계정 하나가 넓은 권한을 꼭 가져야 동작하기 때문이다",
    ],
    answer: 2,
    explanation:
      "비상 통로가 없으면 결국 우회가 생긴다. 비상 계정은 평소에 쓰지 않고, 쓰면 즉시 경보가 울리고, 쓴 뒤 자격 증명을 바꾼다. 피해 반경 그래프에도 남으니 별도 승인을 걸어야 한다.",
    anchor: "최소-권한은-한-번에-정해지지-않는다",
  },
  {
    id: "security-principles-cia-defense-in-depth-7",
    post: "security-principles-cia-defense-in-depth",
    question: "운영 데이터의 백업이 운영과 같은 클라우드 계정에 있다. 계정 탈취에 약한 이유와 고치는 방향은?",
    choices: [
      "운영 계정을 쥔 사람이 백업도 지울 수 있어서다. 다른 계정에 지울 수 없게 두고 운영에는 쓰기만 준다",
      "백업 파일이 암호화되지 않아서다. 암호화만 켜면 된다",
      "같은 계정이면 백업 속도가 느려서다. 리전을 바꾸면 된다",
      "같은 계정이어도 문제없다. 백업은 항상 읽기 전용이다",
    ],
    answer: 0,
    explanation:
      "같은 손이 운영과 백업을 모두 쥐면 공격자가 운영을 쥐는 순간 백업도 쥔다. 계정 경계는 클라우드에서 가장 단단한 칸막이라서, 백업을 다른 계정에 객체 잠금과 함께 두면 따로 뚫어야 한다. 암호화는 삭제를 막지 못한다.",
    anchor: "격리-칸막이가-피해-반경을-정한다",
  },
];
