import type { QuizQuestion } from "../types";

export const SD_OBJECT_STORAGE_ARCHITECTURE: QuizQuestion[] = [
  {
    id: "sd-object-storage-architecture-1",
    post: "sd-object-storage-architecture",
    question: "객체를 올릴 때 본문을 데이터 저장소에 먼저 쓰고 메타데이터를 나중에 쓰는 이유는?",
    choices: [
      "메타데이터 저장소가 본문보다 느려서 뒤로 미룬다",
      "실패해도 아무도 가리키지 않는 본문만 남고, 장부에 있는데 본문이 없는 객체는 생기지 않아서",
      "본문의 크기를 알아야 메타데이터 샤드를 고를 수 있어서",
      "IAM 확인이 데이터 저장소 안에서 이루어져서",
    ],
    answer: 1,
    explanation:
      "장부를 먼저 쓰면 그 사이 GET이 장부를 보고 없는 본문을 찾으러 가서 실패한다. 본문을 먼저 쓰면 최악의 경우가 고아 본문이고, 사용자에게 보이지 않으니 가비지 컬렉터가 나중에 치우면 된다.",
    anchor: "사진-한-장을-올리는-길",
  },
  {
    id: "sd-object-storage-architecture-2",
    post: "sd-object-storage-architecture",
    question: "300바이트짜리 객체 2,000개를 파일 하나씩 ext4에 썼더니 내용은 586K인데 디스크는 7.9M을 차지했다. 가장 큰 이유는?",
    choices: [
      "파일 이름이 내용보다 길어서",
      "ext4가 작은 파일을 자동으로 압축하지 않아서",
      "파일 하나가 아무리 작아도 4KiB 블록 하나를 통째로 잡아서",
      "디렉터리 하나에 파일이 너무 많으면 복사본이 생겨서",
    ],
    answer: 2,
    explanation:
      "파일 시스템은 블록 단위로 공간을 나눠 주니 300바이트 파일도 4,096바이트를 쓴다. 그래서 작은 객체는 큰 볼륨 파일에 이어 쓰고 위치표에 오프셋과 크기를 적는다.",
    anchor: "사진-한-장을-파일-하나로-두면",
  },
  {
    id: "sd-object-storage-architecture-3",
    post: "sd-object-storage-architecture",
    question: "데이터 노드의 객체 위치표(object_id → 파일, 오프셋, 크기)를 노드마다 SQLite로 두는 이유로 맞는 것은?",
    choices: [
      "노드는 자기 디스크의 객체만 알면 되고, 중앙 DB에 두면 읽기마다 네트워크를 한 번 더 타고 병목이 되어서",
      "SQLite만 오프셋을 저장할 수 있어서",
      "위치표가 메타데이터 저장소보다 커서 한 곳에 모을 수 없어서",
      "SQLite가 자동으로 다른 노드에 복제해 주어서",
    ],
    answer: 0,
    explanation:
      "위치표는 그 노드의 볼륨 파일에만 의미가 있으니 노드 안에 두는 게 자연스럽다. 모든 노드가 하나의 DB 클러스터를 보면 GET마다 왕복이 늘고 그 클러스터를 계속 키워야 한다.",
    anchor: "큰-파일에-이어-쓰고-위치를-적는다",
  },
  {
    id: "sd-object-storage-architecture-4",
    post: "sd-object-storage-architecture",
    question: "객체 메타데이터 표를 bucket_name으로 샤딩하면 생기는 문제는?",
    choices: [
      "이름으로 object_id를 찾을 수 없다",
      "접두사 목록을 볼 때 모든 샤드에 물어야 한다",
      "버킷 이름이 전 세계에서 겹칠 수 있다",
      "객체가 수십억 개인 버킷 하나가 샤드 하나에 몰린다",
    ],
    answer: 3,
    explanation:
      "로그를 쌓는 버킷처럼 객체가 아주 많은 버킷이 흔해서 버킷 단위로 나누면 한 샤드가 터진다. 그래서 hash(bucket_name, object_name)으로 나누고, 대신 목록 보기를 여러 샤드에서 모으는 비용을 받아들인다.",
    anchor: "장부는-무엇을-담고-어떻게-나누나",
  },
  {
    id: "sd-object-storage-architecture-5",
    post: "sd-object-storage-architecture",
    question: "해시로 샤딩한 객체 표에서 목록을 페이지로 넘길 때 OFFSET 대신 마지막 키를 토큰으로 넘기는 이유는?",
    choices: [
      "토큰을 쓰면 샤드에 질문을 하나만 보내도 된다",
      "OFFSET은 샤드마다 몇 개를 건너뛸지 알 수 없어 앞쪽 행을 모두 읽어 와야 하지만, 토큰이면 각 샤드가 그 키 뒤부터 limit개만 읽으면 된다",
      "OFFSET은 SQL 표준이 아니어서",
      "토큰을 쓰면 결과가 해시 순서로 나와 정렬이 필요 없다",
    ],
    answer: 1,
    explanation:
      "샤드마다 해당 접두사의 키가 몇 개씩 있는지 모르니 OFFSET 1000을 나눠 줄 방법이 없다. 마지막으로 본 키를 넘기면 각 샤드가 그 뒤 limit개만 보내고, API가 합쳐 정렬한 뒤 잘라 낸다. 샤드 수만큼 질문이 나가는 건 그대로다.",
    anchor: "폴더-안-보기가-느려지는-이유",
  },
  {
    id: "sd-object-storage-architecture-6",
    post: "sd-object-storage-architecture",
    question: "같은 용량 50PB를 쓰는데 객체가 모두 200KB 썸네일이라면 평균 24MB 객체가 섞인 경우와 비교해 무엇이 가장 크게 달라지나?",
    choices: [
      "본문을 저장하는 디스크 수가 100배 넘게 늘어난다",
      "버킷 수가 늘어난다",
      "객체 수와 메타데이터 크기가 100배 넘게 커져 장부 쪽이 무거워진다",
      "아무것도 달라지지 않는다",
    ],
    answer: 2,
    explanation:
      "본문 총량은 같으니 디스크 수는 비슷하다. 객체 수가 10억에서 1,250억으로 늘어 메타데이터도 1TB에서 128TB로 커진다. 작은 객체가 많을수록 장부와 IOPS가 먼저 병목이 된다.",
    anchor: "무엇을-얼마나-담을지-숫자로-정한다",
  },
];
