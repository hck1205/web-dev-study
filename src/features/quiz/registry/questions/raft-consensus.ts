import type { QuizQuestion } from "../types";

export const RAFT_CONSENSUS: QuizQuestion[] = [
  {
    id: "raft-consensus-1",
    post: "raft-consensus",
    question: "etcd 세 대 중 두 대가 멈췄다. 남은 한 대는 방금까지 리더였는데 쓰기가 context deadline exceeded로 실패한다. 왜인가?",
    choices: [
      "리더의 디스크가 가득 차서",
      "과반의 응답을 받을 수 없어 커밋할 수 없고, CheckQuorum으로 스스로 물러났기 때문",
      "클라이언트가 팔로워에 접속해서",
      "임기 번호가 너무 커져서",
    ],
    answer: 1,
    explanation:
      "Raft는 과반이 디스크에 가진 항목만 커밋하므로 혼자 남은 리더는 아무것도 확정할 수 없다. etcd 리더는 과반과 연락이 끊기면 'stepped down to follower since quorum is not active'를 남기고 물러난다. 고장이 아니라 설계대로 멈춘 것이다.",
    anchor: "과반이면-왜-충분한가",
  },
  {
    id: "raft-consensus-2",
    post: "raft-consensus",
    question: "5대 클러스터에서 리더가 matchIndex [6, 5, 5, 3, 2]를 알고 있고, 6번까지 모두 현재 임기 항목이다. 커밋 번호는?",
    choices: ["2", "3", "5", "6"],
    answer: 2,
    explanation:
      "과반은 셋이고, 셋 이상이 가진 가장 큰 번호는 5다(6, 5, 5). 모든 멤버를 기다리지 않으니 3번, 2번까지만 받은 느린 멤버가 커밋을 막지 않는다. 6번은 리더 혼자만 가져서 아직 커밋되지 않는다.",
    anchor: "쓰기-하나가-커밋되기까지",
  },
  {
    id: "raft-consensus-3",
    post: "raft-consensus",
    question: "팔로워가 AppendEntries를 거절하는 조건은?",
    choices: [
      "새 항목의 임기가 자기 임기보다 클 때",
      "자기 로그의 prevLogIndex 자리에 prevLogTerm인 항목이 없을 때",
      "leaderCommit이 자기 커밋 번호보다 클 때",
      "새 항목이 두 개 이상일 때",
    ],
    answer: 1,
    explanation:
      "바로 앞 항목의 번호와 임기가 일치할 때만 받는다. 이 검사 덕분에 같은 번호와 임기의 항목이 있으면 그 앞이 모두 같다는 로그 일치 성질이 생긴다. 거절되면 리더가 nextIndex를 줄여 일치 지점을 찾는다.",
    anchor: "어긋난-팔로워의-로그를-고친다",
  },
  {
    id: "raft-consensus-4",
    post: "raft-consensus",
    question: "임기 21로 선거를 연 후보가 표가 남아 있는 두 멤버 모두에게 거절당했다. 로그에는 후보 [logterm: 2, index: 6111], 투표자 [logterm: 3, index: 6112]가 찍혀 있다. 거절 이유는?",
    choices: [
      "후보의 임기가 투표자보다 낮아서",
      "투표자가 이미 다른 후보에게 투표해서",
      "후보 로그의 마지막 항목 임기가 더 낮아 최신이 아니어서",
      "Pre-Vote가 꺼져 있어서",
    ],
    answer: 2,
    explanation:
      "투표자는 후보의 마지막 항목이 자기 것보다 최신일 때만 표를 준다. 임기를 먼저 비교하니 logterm 2인 후보는 logterm 3을 가진 투표자보다 오래됐다. 후보의 선거 임기(21)는 크지만 표와는 상관없다.",
    anchor: "아무나-리더가-될-수는-없다",
  },
  {
    id: "raft-consensus-5",
    post: "raft-consensus",
    question: "etcd 리더를 kill -9로 죽였더니 새 리더가 뽑히면서 RAFT INDEX가 6114에서 6115로 하나 올랐다. 쓰기는 없었다. 이 항목은 무엇인가?",
    choices: [
      "죽은 리더의 마지막 쓰기를 다시 적은 것",
      "새 리더가 임기를 시작하며 붙인 빈 항목",
      "죽은 멤버를 구성에서 뺀 기록",
      "스냅숏 시점 표시",
    ],
    answer: 1,
    explanation:
      "리더는 이전 임기 항목을 과반 복제만으로 커밋하지 않고, 자기 임기 항목이 과반에 닿을 때 앞의 것까지 함께 커밋한다. 그래서 새 리더는 빈 항목을 하나 붙여 이 커밋을 바로 일으킨다. 죽은 멤버는 자동으로 구성에서 빠지지 않는다.",
    anchor: "아무나-리더가-될-수는-없다",
  },
  {
    id: "raft-consensus-6",
    post: "raft-consensus",
    question: "네트워크가 불안정한 멤버 하나가 돌아올 때마다 멀쩡한 리더가 물러나고 몇 초간 쓰기가 멈춘다. etcd 3.4에서 먼저 확인할 설정은?",
    choices: ["--snapshot-count", "--pre-vote", "--heartbeat-interval를 10ms로", "member add --learner"],
    answer: 1,
    explanation:
      "고립된 멤버가 선거를 반복하며 임기만 올렸다가, 돌아와 큰 임기로 리더를 끌어내리는 현상이다. Pre-Vote는 임기를 올리기 전에 과반의 동의를 먼저 구해 이걸 막는다. etcd 3.4는 기본값이 false이고 3.5부터 true다.",
    anchor: "고립된-멤버가-임기를-부풀린다",
  },
  {
    id: "raft-consensus-7",
    post: "raft-consensus",
    question: "3대 etcd 중 한 대가 디스크 고장으로 죽었다. 교체하는 순서로 알맞은 것은?",
    choices: [
      "새 멤버를 투표권자로 먼저 추가하고, 다 따라오면 죽은 멤버를 뺀다",
      "죽은 멤버를 먼저 빼고, 새 멤버를 학습자로 추가한 뒤 따라오면 승격한다",
      "죽은 멤버와 새 멤버를 한 번의 변경으로 동시에 바꾼다",
      "클러스터를 멈추고 새 구성으로 다시 만든다",
    ],
    answer: 1,
    explanation:
      "새 멤버를 먼저 넣으면 구성이 4대가 되어 과반이 셋으로 늘고, 응답할 수 있는 건 둘뿐이라 하나만 흔들려도 쓰기가 멈춘다. 죽은 멤버를 빼서 과반을 둘로 만든 뒤 학습자로 넣으면, 따라오는 동안 과반 계산에 들어가지 않아 안전하다.",
    anchor: "멤버를-바꾸는-일",
  },
];
