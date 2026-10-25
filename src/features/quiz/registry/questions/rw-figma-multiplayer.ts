import type { QuizQuestion } from "../types";

export const RW_FIGMA_MULTIPLAYER: QuizQuestion[] = [
  {
    id: "rw-figma-multiplayer-1",
    post: "rw-figma-multiplayer",
    question: "Figma의 충돌 규칙이 LWW 레지스터와 비슷한데도 타임스탬프가 필요 없는 이유는?",
    choices: [
      "모든 클라이언트의 시계를 NTP로 맞춰서",
      "서버가 중앙 권위라 서버에 도착한 순서가 곧 순서여서",
      "클라이언트 ID가 시간 정보를 담고 있어서",
      "같은 속성은 동시에 고칠 수 없게 잠가서",
    ],
    answer: 1,
    explanation:
      "CRDT의 LWW 레지스터는 중앙 권위가 없어 타임스탬프와 피어 ID로 승자를 가린다. Figma는 서버가 순서를 정하므로 서버에 마지막으로 도착한 값이 이긴다. 그래서 시계 오차 문제도 함께 사라진다.",
    anchor: "crdt에서-빌려-오되-중앙-서버를-둔다",
  },
  {
    id: "rw-figma-multiplayer-2",
    post: "rw-figma-multiplayer",
    question: "텍스트가 B일 때 두 사람이 동시에 AB와 BC로 바꿨다. Figma에서 최종 값은?",
    choices: [
      "ABC",
      "B (충돌이라 둘 다 버린다)",
      "AB 또는 BC 중 서버에 마지막으로 도착한 값",
      "먼저 입력을 시작한 사람의 값",
    ],
    answer: 2,
    explanation:
      "변경은 속성 값 단위로 원자적이라 최종 값은 항상 어느 한 클라이언트가 보낸 값이다. 그래서 두 수정을 합친 ABC는 나오지 않는다. Figma는 텍스트 편집기가 아니라서 이 한계를 받아들였다.",
    anchor: "속성-하나를-단위로-마지막-값이-이긴다",
  },
  {
    id: "rw-figma-multiplayer-3",
    post: "rw-figma-multiplayer",
    question: "클라이언트가 확인 안 된 자기 변경과 같은 속성에 대한 서버 변경을 받으면 버리는 이유는?",
    choices: [
      "서버 변경이 위조됐을 수 있어서",
      "서버 변경은 항상 더 오래된 시각을 가져서",
      "버리지 않으면 서버가 다시 보내 주지 않아서",
      "확인된 옛 값이 아직 확인 안 된 새 값을 잠깐 덮어 화면이 깜빡이는 걸 막으려고",
    ],
    answer: 3,
    explanation:
      "서버에서 온 변경은 모두 확인된 것이고, 내가 방금 보낸 변경은 서버 도착 순서로 가장 최근일 가능성이 크다. 그래서 내 변경이 최종 값의 가장 좋은 예측이다. 서버 값을 그대로 적용하면 값이 잠깐 되돌아갔다가 다시 바뀌며 깜빡인다.",
    anchor: "속성-하나를-단위로-마지막-값이-이긴다",
  },
  {
    id: "rw-figma-multiplayer-4",
    post: "rw-figma-multiplayer",
    question: "Figma가 새 객체의 ID를 서버가 아니라 클라이언트에서 만드는 이유는?",
    choices: [
      "객체 만들기가 오프라인에서도 돼야 해서",
      "서버의 ID 생성이 느려서",
      "ID가 충돌해도 LWW로 해결되어서",
      "서버가 객체를 저장하지 않아서",
    ],
    answer: 0,
    explanation:
      "글은 서버가 ID를 주면 오프라인에서 객체를 만들 수 없다고 적는다. 대신 클라이언트마다 고유한 클라이언트 ID를 주고 객체 ID에 넣어 두 클라이언트가 같은 ID를 만들지 않게 한다.",
    anchor: "만들기와-지우기-그리고-지운-것의-무게",
  },
  {
    id: "rw-figma-multiplayer-5",
    post: "rw-figma-multiplayer",
    question: "부모를 옮기는 연산을 \"지우고 새 ID로 다시 만들기\"로 표현하지 않은 이유는?",
    choices: [
      "새 ID를 만들 수 없어서",
      "객체의 ID가 바뀌면 그 객체에 대한 동시 수정(예: 색 변경)이 사라져서",
      "트리에 고리가 생겨서",
      "undo 버퍼가 커져서",
    ],
    answer: 1,
    explanation:
      "목표 중 하나는 부모를 옮기는 동안 다른 사람이 같은 객체의 색을 바꿔도 둘 다 성공하는 것이었다. ID가 바뀌면 옛 ID에 대한 수정이 갈 곳을 잃는다. 그래서 자식에 부모 링크를 속성으로 두어 ID를 유지했다.",
    anchor: "트리에서-부모를-바꾸는-일이-가장-어렵다",
  },
  {
    id: "rw-figma-multiplayer-6",
    post: "rw-figma-multiplayer",
    question: "fractional indexing에서 위치를 0과 1 사이로 두되 양 끝을 제외하는 이유는?",
    choices: [
      "부동소수점 오차를 피하려고",
      "정렬을 빠르게 하려고",
      "0이나 1과 평균을 내 언제나 맨 앞이나 맨 뒤에 새 위치를 만들 수 있게 하려고",
      "95진법 문자열에서 0과 1을 표현할 수 없어서",
    ],
    answer: 2,
    explanation:
      "양 끝이 비어 있으니 첫 원소보다 앞은 0과의 평균, 마지막보다 뒤는 1과의 평균으로 언제나 만들 수 있다. 정밀도는 임의 정밀도 문자열로 따로 해결한다.",
    anchor: "순서는-0과-1-사이의-분수로-정한다",
  },
  {
    id: "rw-figma-multiplayer-7",
    post: "rw-figma-multiplayer",
    question: "체크포인트가 순번 7인데 저널 항목이 [5~9]로 묶여 있다. 이 항목을 그대로 적용해도 되는 이유는?",
    choices: [
      "저널이 항상 체크포인트보다 정확해서",
      "DynamoDB가 중복 적용을 막아서",
      "마지막에 쓴 값이 이기는 방식이라 같은 변경을 다시 적용해도 결과가 같아서",
      "순번 5~7은 자동으로 건너뛰어서",
    ],
    answer: 2,
    explanation:
      "Figma는 클라이언트가 33ms마다 보내는 변경을 묶어 시작·끝 순번이 있는 항목으로 쓴다. 겹친 부분을 다시 적용해도 LWW라 순번 9의 올바른 파일이 된다. 2019년의 속성 단위 LWW가 복구 설계를 단순하게 만든 대목이다.",
    anchor: "메모리에-든-문서가-사라지지-않게-2022년의-저널",
  },
  {
    id: "rw-figma-multiplayer-8",
    post: "rw-figma-multiplayer",
    question: "Figma가 Postgres를 수평 샤딩할 때 샤드 키를 그대로 쓰지 않고 해시로 라우팅한 이유와 그 대가는?",
    choices: [
      "보안 때문에, 대신 조인을 할 수 없다",
      "Vitess와 호환하려고, 대신 트랜잭션이 느려진다",
      "뷰를 쓰기 위해서, 대신 쓰기가 10% 느려진다",
      "자동 증가·시간 앞머리 ID가 한 샤드에 몰리는 걸 막으려고, 대신 샤드 키 범위 스캔이 비효율적이 된다",
    ],
    answer: 3,
    explanation:
      "많은 샤드 키가 자동 증가나 Snowflake식 시간 앞머리 ID라 그대로 나누면 핫스팟이 생긴다. ID를 바꾸는 이관은 비싸서 해시로 라우팅했다. 연속된 키가 여러 샤드로 흩어져 범위 스캔이 비효율적이 되지만 그런 질의가 흔하지 않아 받아들였다.",
    anchor: "멀티플레이어-밖의-데이터-2024년의-postgres-수평-샤딩",
  },
];
