import type { QuizQuestion } from "../types";

export const K8S_ETCD_BACKUP: QuizQuestion[] = [
  {
    id: "k8s-etcd-backup-1",
    post: "k8s-etcd-backup",
    question: "etcd 스냅숏만 가지고 새 컨트롤 플레인에 복원했더니 Secret을 하나도 읽지 못한다. 가장 그럴듯한 원인은?",
    choices: [
      "스냅숏이 Secret을 담지 않기 때문",
      "저장 시 암호화를 켜 둔 클러스터인데 EncryptionConfiguration의 키 파일을 따로 백업하지 않았기 때문",
      "복원할 때 --bump-revision을 주지 않았기 때문",
      "etcdctl 버전이 달라서",
    ],
    answer: 1,
    explanation:
      "스냅숏에는 Secret이 들어 있지만, 저장 시 암호화를 켰다면 암호문이라 그 키가 있어야 읽힌다. 키 파일은 노드의 파일이라 스냅숏에 없으니 따로 챙겨야 한다.",
    anchor: "클러스터의-기억은-전부-한곳에-있다",
  },
  {
    id: "k8s-etcd-backup-2",
    post: "k8s-etcd-backup",
    question: "etcdutl snapshot status가 HASH와 REVISION을 정상으로 보여 줬다. 이 스냅숏을 믿어도 되나?",
    choices: [
      "그렇다. status가 파일 전체의 sha256을 검사한다",
      "그렇다. TOTAL KEYS가 0이 아니면 온전하다",
      "아니다. status는 키를 읽어 보여 줄 뿐이고, 파일 끝 sha256 검사는 복원할 때 일어나므로 복원을 해 봐야 안다",
      "아니다. status는 etcd 서버가 떠 있을 때만 정확하다",
    ],
    answer: 2,
    explanation:
      "실습에서 빈 페이지를 망가뜨린 파일도 status는 원본과 같은 표를 보였고, restore에서 sha256 불일치로 거절됐다. 그래서 백업 직후 임시 디렉터리에 복원해 보는 단계를 넣는다.",
    anchor: "status가-괜찮다고-해도-믿지-않는다",
  },
  {
    id: "k8s-etcd-backup-3",
    post: "k8s-etcd-backup",
    question: "저장 시 암호화를 켜지 않은 클러스터의 스냅숏 파일이 유출되면 무엇이 노출되나?",
    choices: [
      "모든 Secret 값이 평문으로 노출된다",
      "Secret은 base64로만 들어 있어 디코딩하기 전엔 안전하다",
      "Secret은 스냅숏에 들어가지 않는다",
      "Secret 이름만 노출되고 값은 해시로 저장된다",
    ],
    answer: 0,
    explanation:
      "실습에서 strings로 찾자 비밀번호가 평문 그대로 나왔다. 그래서 스냅숏 파일 자체를 age 같은 도구로 암호화해 내보내고, 개인 키는 복원 담당자만 갖게 한다.",
    anchor: "스냅숏에는-secret이-그대로-들어-있다",
  },
  {
    id: "k8s-etcd-backup-4",
    post: "k8s-etcd-backup",
    question: "스냅숏 복원 후, 복원 전에 resourceVersion 2049까지 봤던 클라이언트가 2049부터 watch를 다시 걸었다. 무슨 일이 생기나?",
    choices: [
      "410 Gone을 받고 자동으로 다시 list한다",
      "API 서버가 연결을 거부한다",
      "복원된 모든 객체를 ADDED 이벤트로 다시 받는다",
      "2049 이후의 변경만 받아, 되살아나거나 사라진 객체를 끝내 알지 못한다",
    ],
    answer: 3,
    explanation:
      "revision이 스냅숏 시점으로 되감겨 그 사이 번호가 다른 변경에 다시 쓰이니, 옛 기억을 가진 클라이언트는 조용히 틀린다. 410은 --bump-revision과 --mark-compacted로 복원했을 때 받는 응답이다.",
    anchor: "되살린-클러스터는-과거로-돌아간다",
  },
  {
    id: "k8s-etcd-backup-5",
    post: "k8s-etcd-backup",
    question: "etcdutl snapshot restore에 --bump-revision과 --mark-compacted를 함께 주는 목적은?",
    choices: [
      "복원 속도를 높이려고",
      "옛 resourceVersion으로 온 watch가 410 Expired를 받아 처음부터 다시 list하게 하려고",
      "스냅숏의 sha256 검사를 건너뛰려고",
      "Raft 로그를 옛 클러스터와 이어 붙이려고",
    ],
    answer: 1,
    explanation:
      "revision을 크게 밀고 그 아래를 압축된 것으로 표시하면 옛 번호는 너무 오래된 것이 된다. client-go informer는 410을 받으면 기억을 버리고 다시 list하므로 조용히 틀리던 클라이언트가 스스로 맞춰진다.",
    anchor: "revision을-앞으로-밀어-두기",
  },
  {
    id: "k8s-etcd-backup-6",
    post: "k8s-etcd-backup",
    question: "etcd 3개 중 1개의 디스크가 망가졌다. 올바른 대응은?",
    choices: [
      "모든 멤버를 최신 스냅숏으로 복원한다",
      "남은 둘을 멈추고 망가진 멤버부터 복원한다",
      "망가진 멤버를 member remove로 빼고 새 멤버를 member add로 넣어 나머지에게서 데이터를 받게 한다",
      "API 서버를 재시작한다",
    ],
    answer: 2,
    explanation:
      "3개 중 2개가 살아 있으면 과반이라 쓰기가 계속된다. 이때 스냅숏으로 복원하면 마지막 스냅숏 이후의 변경을 괜히 잃는다. 복원은 과반을 잃었을 때 쓴다.",
    anchor: "멤버가-셋일-때의-복원-순서",
  },
  {
    id: "k8s-etcd-backup-7",
    post: "k8s-etcd-backup",
    question: "실수로 Deployment 하나를 지웠다. 그 뒤로 다른 팀의 배포도 여러 번 있었다. etcd 스냅숏 복원이 좋은 선택이 아닌 이유는?",
    choices: [
      "복원은 클러스터 전체를 스냅숏 시점으로 되돌려 그 뒤의 다른 변경까지 모두 사라지기 때문",
      "스냅숏에는 Deployment가 들어 있지 않기 때문",
      "복원하려면 클러스터를 새로 만들어야 하기 때문",
      "Deployment는 resourceVersion이 없어 복원되지 않기 때문",
    ],
    answer: 0,
    explanation:
      "etcd 복원은 객체 하나가 아니라 키공간 전체를 되돌린다. 한두 객체의 실수는 Git의 매니페스트나 Velero의 네임스페이스·리소스 단위 복원이 맞다.",
    anchor: "스냅숏이-맞는-사고와-아닌-사고",
  },
];
