import type { QuizQuestion } from "../types";

export const ELASTICSEARCH_SNAPSHOT_DR: QuizQuestion[] = [
  {
    id: "elasticsearch-snapshot-dr-1",
    post: "elasticsearch-snapshot-dr",
    question: "와일드카드 실수로 운영 인덱스를 지웠다. 레플리카 1이 이 사고를 막지 못한 이유는?",
    choices: [
      "레플리카는 검색 전용이라 데이터를 들고 있지 않아서",
      "레플리카는 프라이머리의 현재 상태를 실시간으로 따라 하므로 삭제도 그대로 따라 해서",
      "레플리카는 다른 노드에 있어서 복구 API로 접근할 수 없어서",
      "레플리카는 하루에 한 번만 동기화되어서",
    ],
    answer: 1,
    explanation:
      "레플리카는 노드 장애에 대비한 실시간 복사본이라 사람의 실수도 똑같이 반영한다. 과거 시점으로 되돌릴 수 있는 건 클러스터 밖 저장소의 스냅숏뿐이다. CCR 팔로워도 같은 이유로 실수 대비가 되지 않는다.",
    anchor: "스냅숏은-세그먼트-파일을-복사한다",
  },
  {
    id: "elasticsearch-snapshot-dr-2",
    post: "elasticsearch-snapshot-dr",
    question: "쓰기가 거의 없던 인덱스에 _forcemerge를 돌린 직후 뜬 스냅숏이 유난히 크다. 왜 그런가?",
    choices: [
      "강제 병합이 만든 새 큰 세그먼트 파일이 저장소에 없는 파일이라 통째로 올라가서",
      "강제 병합 뒤에는 증분 스냅숏이 꺼져서",
      "강제 병합이 레플리카까지 스냅숏에 포함시켜서",
      "스냅숏이 압축을 하지 않게 바뀌어서",
    ],
    answer: 0,
    explanation:
      "스냅숏은 저장소에 없는 세그먼트 파일만 올리는데, 병합은 기존 데이터를 담은 새 파일을 만든다. 데이터는 거의 같아도 파일이 새것이라 거의 전부 다시 올라간다. 증분 동작 자체가 꺼지는 것은 아니다.",
    anchor: "스냅숏은-세그먼트-파일을-복사한다",
  },
  {
    id: "elasticsearch-snapshot-dr-3",
    post: "elasticsearch-snapshot-dr",
    question: "S3 버킷 비용을 줄이려고 90일 지난 객체를 지우는 수명 주기 규칙을 걸었다. 무엇이 문제인가?",
    choices: [
      "아무 문제 없다. 오래된 스냅숏만 지워진다",
      "S3 비용이 오히려 늘어난다",
      "최근 스냅숏이 아직 가리키는 옛 세그먼트 파일까지 지워져 저장소가 깨진다",
      "스냅숏 속도가 느려진다",
    ],
    answer: 2,
    explanation:
      "증분 스냅숏은 오래전에 올린 세그먼트 파일을 최신 스냅숏도 계속 가리킨다. 객체 나이로 지우면 그 파일이 사라져 최신 스냅숏도 복원할 수 없게 된다. 보관 기간은 SLM의 retention이나 스냅숏 삭제 API에 맡긴다.",
    anchor: "클러스터-밖에-저장소를-둔다",
  },
  {
    id: "elasticsearch-snapshot-dr-4",
    post: "elasticsearch-snapshot-dr",
    question: "SLM retention에 min_count: 5를 두는 이유로 가장 알맞은 것은?",
    choices: [
      "스냅숏을 다섯 개씩 묶어 압축하려고",
      "스냅숏이 연속으로 실패해도 expire_after 때문에 성공한 옛 스냅숏이 모두 지워지지 않게 하려고",
      "동시에 다섯 개까지 스냅숏을 뜨려고",
      "다섯 번 실패하면 경보를 보내려고",
    ],
    answer: 1,
    explanation:
      "expire_after만 있으면 새 스냅숏이 계속 실패하는 동안 오래된 성공 스냅숏이 기간에 걸려 지워질 수 있다. min_count는 기간이 지나도 최소 개수를 남겨 되돌릴 지점을 지킨다.",
    anchor: "slm-주기와-보관을-정책으로",
  },
  {
    id: "elasticsearch-snapshot-dr-5",
    post: "elasticsearch-snapshot-dr",
    question: "7.x에서 만들어 8.x로 업그레이드해 쓰던 인덱스를 스냅숏으로 떠서 9.x 클러스터에 복원하려 한다. 어떻게 되나?",
    choices: [
      "8.x에서 뜬 스냅숏이라 문제없이 복원된다",
      "복원은 되지만 레플리카가 만들어지지 않는다",
      "9.x가 자동으로 재색인해 복원한다",
      "인덱스가 처음 만들어진 버전이 7.x라 정상 인덱스로 복원되지 않는다",
    ],
    answer: 3,
    explanation:
      "새 버전은 한 메이저 전에 만들어진 인덱스까지만 읽고, 기준은 스냅숏을 뜬 버전이 아니라 인덱스 생성 버전이다. 그래서 메이저 업그레이드 전에 오래된 인덱스를 재색인해 둔다. 자동 재색인 같은 동작은 없다.",
    anchor: "인덱스-하나만-다른-이름으로-되살리기",
  },
  {
    id: "elasticsearch-snapshot-dr-6",
    post: "elasticsearch-snapshot-dr",
    question: "서울 리전 장애로 도쿄의 CCR 팔로워 인덱스를 운영으로 올리려 한다. 맞는 순서는?",
    choices: [
      "pause_follow → close → unfollow → open → 트래픽 전환",
      "트래픽 전환 → 팔로워에 바로 쓰기",
      "unfollow → pause_follow → 트래픽 전환 → close",
      "팔로워 인덱스를 지우고 스냅숏에서 복원",
    ],
    answer: 0,
    explanation:
      "팔로워는 읽기 전용이라 바로 쓸 수 없다. 따라가기를 멈추고, 닫은 상태에서 unfollow로 팔로워 표시를 뗀 뒤 열어야 쓰기를 받는다. 이 승격은 되돌릴 수 없어서 돌아갈 때는 반대 방향 팔로워를 새로 만든다.",
    anchor: "다른-리전에-읽기-전용-사본-ccr",
  },
  {
    id: "elasticsearch-snapshot-dr-7",
    post: "elasticsearch-snapshot-dr",
    question: "cold 계층에 전체 마운트된 searchable snapshot 인덱스가 레플리카 없이도 버티는 이유는?",
    choices: [
      "cold 노드는 절대 죽지 않아서",
      "검색만 하니 데이터가 없어져도 상관없어서",
      "노드가 죽으면 레플리카 대신 스냅숏 저장소에서 데이터를 다시 받아 오면 되어서",
      "frozen 계층이 레플리카 역할을 해서",
    ],
    answer: 2,
    explanation:
      "마운트된 인덱스의 원본은 스냅숏 저장소에 있으므로, 노드를 잃으면 저장소에서 다시 받는다. 그래서 디스크를 절반으로 줄일 수 있다. 같은 이유로 마운트된 동안 그 스냅숏을 지우면 인덱스가 깨진다.",
    anchor: "오래된-데이터는-스냅숏-위에서-검색한다",
  },
];
