import type { QuizQuestion } from "../types";

export const REDIS_CLUSTER: QuizQuestion[] = [
  {
    id: "redis-cluster-1",
    post: "redis-cluster",
    question: "Redis Cluster에서 MSET cart:42 a session:42 b가 CROSSSLOT 에러를 냈다. 두 키를 한 명령으로 다루려면?",
    choices: [
      "SELECT로 같은 DB 번호를 고른다",
      "키를 {user:42}:cart, {user:42}:session처럼 해시 태그로 짓는다",
      "redis-cli에 -c 옵션을 준다",
      "모든 키를 {shop} 태그 하나로 묶는다",
    ],
    answer: 1,
    explanation:
      "Cluster는 CRC16(키) mod 16384로 슬롯을 정하고, 여러 키 명령은 같은 슬롯일 때만 된다. 해시 태그를 넣으면 중괄호 안만 해시해서 같은 슬롯에 모인다. 태그 하나로 전부 묶으면 한 노드에 쏠리고, Cluster에서는 DB 0만 쓸 수 있다.",
    anchor: "cluster는-키를-16384개-슬롯으로-나눈다",
  },
  {
    id: "redis-cluster-2",
    post: "redis-cluster",
    question: "슬롯을 옮기는 중에 노드 C가 ASK 15749 127.0.0.1:7001을 돌려줬다. 클라이언트가 할 일은?",
    choices: [
      "슬롯 지도를 고치고 앞으로 15749는 A로 보낸다",
      "지도는 그대로 두고 이번 요청만 A에 ASKING을 붙여 보낸다",
      "C에 같은 요청을 다시 보낸다",
      "CLUSTER SLOTS로 지도를 받을 때까지 기다린다",
    ],
    answer: 1,
    explanation:
      "ASK는 슬롯 담당은 아직 C이지만 그 키가 이미 A로 옮겨졌다는 일시적인 안내다. 이번 한 번만 ASKING을 붙여 A에 묻는다. 담당이 바뀌었다는 영구적인 안내는 MOVED이고, 그때 지도를 고친다.",
    anchor: "moved와-ask",
  },
  {
    id: "redis-cluster-3",
    post: "redis-cluster",
    question: "레플리카 없는 3노드 클러스터에서 한 노드가 죽었다. 기본 설정에서 살아 있는 노드에 있는 키를 읽으면?",
    choices: [
      "정상적으로 읽힌다",
      "MOVED로 다른 노드를 안내받는다",
      "죽은 노드의 키만 실패하고 나머지는 된다",
      "CLUSTERDOWN 에러로 거절된다",
    ],
    answer: 3,
    explanation:
      "기본값 cluster-require-full-coverage yes는 담당 노드 없는 슬롯이 하나라도 있으면 클러스터 전체가 요청을 받지 않는다. 예제에서 살아 있는 7001의 session:42도 CLUSTERDOWN이었다. no로 바꾸면 살아 있는 슬롯은 응답하지만, 근본 대책은 프라이머리마다 레플리카를 두는 것이다.",
    anchor: "현장에서-노드-하나가-죽었을-때",
  },
  {
    id: "redis-cluster-4",
    post: "redis-cluster",
    question: "Redis Cluster의 해시 슬롯이 16384개인 이유로 설명된 것은?",
    choices: [
      "CRC16의 출력이 정확히 16384가지라서",
      "한 노드가 맡을 수 있는 키의 최대 개수라서",
      "노드 하트비트에 슬롯 비트맵을 실을 때 2KB로 작게 유지하려고",
      "DB 번호 16개와 맞추려고",
    ],
    answer: 2,
    explanation:
      "노드들은 하트비트에 자기가 맡은 슬롯을 비트맵으로 실어 보내는데, 16384비트는 2KB다. 65536개면 8KB가 되어 무거워진다. CRC16 자체는 65536가지 값을 내고, 그걸 16384로 나눈 나머지를 쓴다.",
    anchor: "cluster는-키를-16384개-슬롯으로-나눈다",
  },
  {
    id: "redis-cluster-5",
    post: "redis-cluster",
    question: "데이터는 8GB로 한 서버에 넉넉히 들어가지만 읽기 요청이 너무 많다. 가장 먼저 고려할 구성은?",
    choices: [
      "레플리카를 늘려 읽기를 나눈다",
      "Redis Cluster로 샤딩한다",
      "appendfsync always로 바꾼다",
      "해시 태그로 키를 한 슬롯에 모은다",
    ],
    answer: 0,
    explanation:
      "Cluster는 데이터가 한 서버 메모리를 넘거나 쓰기가 한 대로 모자랄 때 쓰는 구성이다. 읽기만 많다면 레플리카를 늘려 읽기를 나누는 게 먼저이고, Cluster는 여러 키 명령 제약과 운영 노드 증가라는 대가가 있다.",
    anchor: "단일-서버부터-관리형-서비스까지",
  },
];
