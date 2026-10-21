import type { QuizQuestion } from "../types";

export const SD_KV_STORE_FAILURE_HANDLING: QuizQuestion[] = [
  {
    id: "sd-kv-store-failure-handling-1",
    post: "sd-kv-store-failure-handling",
    question: "코디네이터 하나가 C의 응답을 못 받았다고 바로 C를 클러스터에서 빼면 안 되는 이유는?",
    choices: [
      "C의 디스크가 아직 가득 차지 않았을 수 있어서",
      "그 코디네이터와 C 사이만 끊겼고 C는 다른 노드들과 멀쩡히 일하고 있을 수 있어서",
      "코디네이터는 C의 위치를 링에서 계산할 수 없어서",
      "C를 빼면 벡터 시계가 초기화되어서",
    ],
    answer: 1,
    explanation:
      "밖에서는 죽음과 끊김을 구별할 수 없다. 한 노드의 관찰만 믿으면 멀쩡한 노드가 빠지고 키가 엉뚱한 곳으로 옮겨진다. 그래서 가십으로 여러 노드의 관찰을 모아 판단한다.",
    anchor: "한-노드의-말만-믿으면-안-된다",
  },
  {
    id: "sd-kv-store-failure-handling-2",
    post: "sd-kv-store-failure-handling",
    question: "가십에서 A가 C와 직접 연락하지 못했는데도 C가 살아 있다고 판단할 수 있는 근거는?",
    choices: [
      "B가 보낸 목록에서 C의 하트비트 카운터가 A가 알던 값보다 올라 있다",
      "B가 C의 IP 주소를 알려 줬다",
      "C의 카운터가 B의 목록에도 같은 값으로 적혀 있다",
      "시드 노드가 C를 목록에 넣어 두었다",
    ],
    answer: 0,
    explanation:
      "C의 카운터는 C만 올릴 수 있다. 그 숫자가 올라 있다면 누군가 최근에 C에게서 직접 들었다는 뜻이다. 같은 숫자를 다시 듣는 건 새 소식이 아니라서 근거가 되지 않는다.",
    anchor: "소문처럼-퍼뜨리는-가십-프로토콜",
  },
  {
    id: "sd-kv-store-failure-handling-3",
    post: "sd-kv-store-failure-handling",
    question: "가십 목록을 합칠 때 카운터가 같은 값이어도 '마지막으로 들은 시각'을 지금으로 갱신하면 어떻게 되나?",
    choices: [
      "죽은 노드를 더 빨리 알아챈다",
      "메시지 수가 줄어든다",
      "이미 죽은 노드의 옛 카운터가 노드 사이를 돌며 계속 살아 있는 것처럼 보인다",
      "아무 차이가 없다",
    ],
    answer: 2,
    explanation:
      "멈춘 노드의 마지막 카운터는 계속 다른 노드들의 목록에 남아 오간다. 같은 숫자를 받을 때마다 시각을 갱신하면 그 노드는 영원히 죽음으로 판정되지 않는다. 카운터가 올라야만 새 소식이다.",
    anchor: "카운터가-멈춘-노드를-표시한다",
  },
  {
    id: "sd-kv-store-failure-handling-4",
    post: "sd-kv-store-failure-handling",
    question: "담당 A, B, C 중 B와 C가 죽었다. N=3, W=2에서 느슨한 쿼럼은 쓰기를 어떻게 성공시키나?",
    choices: [
      "W를 1로 낮춰 A의 확인만으로 성공시킨다",
      "B와 C가 돌아올 때까지 쓰기를 큐에 넣어 둔다",
      "A에 값을 두 번 써서 확인 둘을 만든다",
      "링에서 담당 다음의 건강한 노드 D가 B 몫을 힌트와 함께 대신 받아 확인을 채운다",
    ],
    answer: 3,
    explanation:
      "D는 'B에게 돌려줄 것'이라는 힌트로 값을 보관하고, 그 확인까지 세어 W=2를 채운다. B가 돌아오면 힌트를 넘기고 지운다. 이것이 느슨한 쿼럼과 힌트 핸드오프다.",
    anchor: "담당이-죽었을-때-쓰기를-대신-받아-두기",
  },
  {
    id: "sd-kv-store-failure-handling-5",
    post: "sd-kv-store-failure-handling",
    question: "느슨한 쿼럼을 켠 N=3, W=2, R=2 저장소에서 막 성공한 쓰기를 읽기가 못 볼 수 있는 이유는?",
    choices: [
      "W + R이 N보다 작아서",
      "대신 받은 노드가 담당 N대 밖에 있어서 쓴 집합과 읽은 집합이 안 겹칠 수 있어서",
      "힌트가 읽기를 막아서",
      "벡터 시계가 잘려서",
    ],
    answer: 1,
    explanation:
      "W + R > N의 겹침 계산은 W대와 R대가 모두 같은 담당 N대에서 나온다는 전제 위에 있다. 분할된 한쪽이 C와 D에 쓰고 다른 쪽이 A와 B에서 읽으면 한 대도 겹치지 않는다.",
    anchor: "느슨한-쿼럼이-깨뜨리는-약속",
  },
  {
    id: "sd-kv-store-failure-handling-6",
    post: "sd-kv-store-failure-handling",
    question: "repair를 gc_grace_seconds보다 오래 돌리지 않았을 때 생길 수 있는 사고는?",
    choices: [
      "지운 데이터가 툼스톤이 정리된 뒤 다른 복제본으로 다시 퍼져 되살아난다",
      "힌트가 너무 많이 쌓여 디스크가 찬다",
      "가십이 멈춰 모든 노드가 서로를 죽었다고 본다",
      "머클 트리의 루트 해시가 바뀌지 않는다",
    ],
    answer: 0,
    explanation:
      "삭제를 못 받은 복제본이 있는 채로 툼스톤이 정리되면, 그 복제본의 옛 값이 안티 엔트로피로 다른 복제본에 퍼진다. 그래서 repair는 이 기간보다 짧은 주기로 모든 범위를 돈다.",
    anchor: "오래-죽어-있던-노드-따라잡기",
  },
];
