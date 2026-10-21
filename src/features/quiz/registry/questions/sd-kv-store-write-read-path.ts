import type { QuizQuestion } from "../types";

export const SD_KV_STORE_WRITE_READ_PATH: QuizQuestion[] = [
  {
    id: "sd-kv-store-write-read-path-1",
    post: "sd-kv-store-write-read-path",
    question: "LSM 트리 저장소가 쓰기를 받을 때 성공을 답하기 전까지 하는 일은?",
    choices: [
      "키의 자리를 SSTable에서 찾아 그 자리를 고친다",
      "커밋 로그 끝에 덧붙이고 멤테이블에 넣는다",
      "모든 SSTable을 합쳐 새 파일을 쓴다",
      "블룸 필터를 다시 계산해 디스크에 쓴다",
    ],
    answer: 1,
    explanation:
      "디스크에는 로그 끝에 덧붙이기만 하고 정렬은 메모리의 멤테이블이 맡는다. SSTable은 한 번 쓰면 고치지 않고, 멤테이블이 찰 때 flush로 따로 만든다.",
    anchor: "가득-차면-정렬된-파일로-내린다-sstable",
  },
  {
    id: "sd-kv-store-write-read-path-2",
    post: "sd-kv-store-write-read-path",
    question: "write()만 하고 fsync 없이 성공을 답하면 어떤 위험이 있나?",
    choices: [
      "같은 키의 값이 정렬되지 않는다",
      "블룸 필터가 거짓 음성을 낸다",
      "페이지 캐시에만 있던 쓰기가 전원 장애 때 사라질 수 있다",
      "커밋 로그를 다시 읽을 수 없게 된다",
    ],
    answer: 2,
    explanation:
      "운영체제는 쓰기를 페이지 캐시에 모았다가 나중에 디스크로 보낸다. fsync를 기다려야 디스크에 닿았다고 말할 수 있다. 비용이 커서 여러 쓰기를 모아 한 번에 fsync하는 그룹 커밋을 쓴다.",
    anchor: "먼저-로그-끝에-한-줄-적는다",
  },
  {
    id: "sd-kv-store-write-read-path-3",
    post: "sd-kv-store-write-read-path",
    question: "Cassandra 기본 설정(periodic, 10초)이 한 노드의 최근 몇 초치 쓰기를 잃을 수 있는데도 받아들여지는 이유는?",
    choices: [
      "같은 쓰기가 다른 복제본에도 있어서 여러 대가 같은 순간 함께 전원을 잃지 않는 한 남는다",
      "멤테이블이 전원이 나가도 유지되기 때문이다",
      "SSTable이 쓰기마다 바로 만들어지기 때문이다",
      "블룸 필터가 잃은 쓰기를 기억하기 때문이다",
    ],
    answer: 0,
    explanation:
      "한 대의 디스크 대신 여러 대의 복제로 안전을 산다. 노드 한 대 단위로도 잃으면 안 되면 batch나 group 모드로 바꿔 fsync를 기다린 뒤 답하게 한다.",
    anchor: "먼저-로그-끝에-한-줄-적는다",
  },
  {
    id: "sd-kv-store-write-read-path-4",
    post: "sd-kv-store-write-read-path",
    question: "k07이 새 SSTable에는 툼스톤으로, 옛 SSTable에는 값 b로 있다. get k07은 무엇을 돌려주나?",
    choices: [
      "옛 파일의 b",
      "두 값을 모두",
      "툼스톤은 무시하고 옛 파일까지 내려가 b",
      "새 파일의 툼스톤을 만나 거기서 없음",
    ],
    answer: 3,
    explanation:
      "읽기는 새 파일부터 보고 처음 만난 것이 최신이다. 툼스톤을 만나면 옛 파일로 내려가지 않고 없음으로 끝낸다. 툼스톤을 건너뛰면 지운 값이 되살아난다.",
    anchor: "읽기는-새것부터-뒤진다",
  },
  {
    id: "sd-kv-store-write-read-path-5",
    post: "sd-kv-store-write-read-path",
    question: "SSTable의 블룸 필터가 거짓 양성을 내면 어떻게 되나?",
    choices: [
      "그 파일을 쓸데없이 한 번 열고, 못 찾으면 다음 파일로 간다",
      "다른 키의 값을 잘못 돌려준다",
      "읽기가 실패한다",
      "그 키가 없다고 잘못 답한다",
    ],
    answer: 0,
    explanation:
      "블룸 필터는 있는 키를 없다고 하지 않는다. 틀리는 경우는 없는 키를 있을지도 모른다고 해서 파일을 하나 더 여는 것뿐이라, 정확성이 아니라 읽기 비용이 늘어난다.",
    anchor: "읽기는-새것부터-뒤진다",
  },
  {
    id: "sd-kv-store-write-read-path-6",
    post: "sd-kv-store-write-read-path",
    question: "쓰기 성공을 받은 직후 프로세스가 SIGKILL로 죽었다. flush 전이던 그 쓰기는 어떻게 되나?",
    choices: [
      "멤테이블과 함께 사라진다",
      "다른 노드가 힌트로 넘겨줄 때까지 없다",
      "재시작할 때 커밋 로그를 다시 적용해 멤테이블로 되살린다",
      "다음 컴팩션 때 SSTable에서 복구된다",
    ],
    answer: 2,
    explanation:
      "fsync를 기다린 뒤 답했으니 쓰기는 커밋 로그에 남아 있다. 실험에서도 k10이 SSTable에 들어간 적이 없는데 재시작 뒤 로그 재생으로 살아났다.",
    anchor: "프로세스가-죽어도-로그가-남는다",
  },
  {
    id: "sd-kv-store-write-read-path-7",
    post: "sd-kv-store-write-read-path",
    question: "읽기 지연이 서서히 오르고 compactionstats의 밀린 작업이 계속 늘어난다. 가장 그럴듯한 원인은?",
    choices: [
      "커밋 로그가 너무 작다",
      "컴팩션이 쓰기를 못 따라가 읽기 하나가 여는 SSTable 수가 늘었다",
      "벡터 시계가 너무 길어졌다",
      "가십 메시지가 너무 많다",
    ],
    answer: 1,
    explanation:
      "SSTable이 쌓이면 블룸 필터를 거쳐도 열어 볼 파일이 늘어 읽기 증폭이 커진다. tablehistograms의 SSTables 열로 확인하고, 처리량 제한을 풀거나 읽기가 많으면 레벨 방식을 검토한다.",
    anchor: "읽기가-느려졌다는-신고가-오면",
  },
];
