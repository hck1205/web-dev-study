import type { QuizQuestion } from "../types";

export const BLOCK_FILE_OBJECT_STORAGE: QuizQuestion[] = [
  {
    id: "block-file-object-storage-1",
    post: "block-file-object-storage",
    question: "io2 Multi-Attach로 한 볼륨을 웹 서버 두 대에 붙이고 둘 다 ext4로 마운트했다. 무슨 일이 생기나?",
    choices: [
      "AWS가 쓰기를 자동으로 직렬화해서 문제없이 공유된다",
      "두 번째 서버는 읽기 전용으로만 마운트된다",
      "각 서버가 빈 블록 지도와 메타데이터를 따로 캐시해 같은 블록에 서로 덮어쓰고 파일 시스템이 깨진다",
      "쓰기 성능만 절반으로 줄고 데이터는 안전하다",
    ],
    answer: 2,
    explanation:
      "ext4와 XFS는 디스크를 혼자 쓴다고 가정한다. 다른 서버의 변경을 알 방법이 없어서 같은 빈칸을 골라 덮어쓴다. Multi-Attach는 클러스터 파일 시스템이나 스스로 조율하는 앱을 위한 기능이다.",
    anchor: "한-볼륨을-두-서버에-붙이면-생기는-일",
  },
  {
    id: "block-file-object-storage-2",
    post: "block-file-object-storage",
    question: "gp3 볼륨의 IOPS를 16,000으로 올렸는데 처리량은 250MiB/s로 두었다. 128KiB 순차 읽기에서 초당 I/O는 대략 몇 번인가?",
    choices: ["16,000번", "8,000번", "2,000번", "125번"],
    answer: 2,
    explanation:
      "250MiB/s를 128KiB로 나누면 초당 2,000번이다. 큰 I/O는 IOPS보다 처리량 상한에 먼저 닿으므로, IOPS만 올려서는 풀 스캔이나 백업이 빨라지지 않는다.",
    anchor: "gp3-io2-인스턴스-스토어-고르기",
  },
  {
    id: "block-file-object-storage-3",
    post: "block-file-object-storage",
    question: "fio에서 iodepth=32, 평균 지연 0.6ms가 나왔다. 같은 장치에서 앱이 요청을 하나씩 기다리며 보내면 IOPS는 어떻게 되나?",
    choices: [
      "큐 깊이와 상관없이 같은 IOPS가 나온다",
      "동시에 떠 있는 요청이 하나라 IOPS가 크게 줄어든다",
      "요청이 적어 지연이 0이 되므로 IOPS가 무한히 커진다",
      "페이지 캐시가 대신 처리해 IOPS가 두 배가 된다",
    ],
    answer: 1,
    explanation:
      "IOPS는 동시에 떠 있는 요청 수를 평균 지연으로 나눈 값이다(리틀의 법칙). 큐 깊이가 1이면 지연이 조금 줄어도 동시성이 32분의 1이 되어 IOPS가 크게 떨어진다.",
    anchor: "fio로-iops를-직접-잰다",
  },
  {
    id: "block-file-object-storage-4",
    post: "block-file-object-storage",
    question: "콘솔에서 EBS 볼륨을 100GB에서 200GB로 늘렸는데 df는 여전히 100GB다. 빠진 단계는?",
    choices: [
      "인스턴스를 재부팅해야 한다",
      "스냅샷을 찍고 새 볼륨으로 바꿔야 한다",
      "fstab의 UUID를 새로 적어야 한다",
      "growpart로 파티션을 늘리고 resize2fs나 xfs_growfs로 파일 시스템을 늘려야 한다",
    ],
    answer: 3,
    explanation:
      "디스크, 파티션, 파일 시스템은 크기를 따로 갖는다. 볼륨을 늘린 뒤 파티션과 파일 시스템을 차례로 늘려야 df에 보인다. ext4와 XFS 모두 마운트된 채로 늘릴 수 있어 재부팅은 필요 없다.",
    anchor: "디스크가-찼을-때는-세-층을-차례로-늘린다",
  },
  {
    id: "block-file-object-storage-5",
    post: "block-file-object-storage",
    question: "서버 A가 EFS의 파일을 쓰고 닫았다. 서버 B가 이미 열어 둔 같은 파일을 계속 읽고 있을 때 생길 수 있는 일은?",
    choices: [
      "B는 즉시 새 내용을 본다",
      "B의 읽기가 에러로 끝난다",
      "B는 속성 캐시 시간 동안 옛 크기와 내용을 볼 수 있다",
      "A의 쓰기가 B가 닫을 때까지 막힌다",
    ],
    answer: 2,
    explanation:
      "NFS는 닫을 때 밀어 넣고 열 때 다시 묻는 close-to-open 일관성을 약속한다. 새로 연 파일은 새 내용을 보지만, 이미 열려 있는 파일은 캐시된 속성 때문에 한동안 옛 상태로 보일 수 있다.",
    anchor: "파일-스토리지는-여러-서버가-같은-폴더를-본다",
  },
  {
    id: "block-file-object-storage-6",
    post: "block-file-object-storage",
    question: "PostgreSQL 데이터 디렉터리를 여러 AZ에 복제되는 EFS에 두자는 제안이 나왔다. 가장 큰 문제는?",
    choices: [
      "EFS는 8KiB보다 작은 파일을 저장하지 못한다",
      "커밋마다 하는 fsync가 네트워크 왕복이 되어 커밋 처리량이 떨어지고, 장애 때 NFS 동작에 따라 데이터가 위험해진다",
      "EFS는 리눅스에서 마운트할 수 없다",
      "PostgreSQL은 NFS 경로를 인식하지 못한다",
    ],
    answer: 1,
    explanation:
      "fsync는 NFS에서 서버 COMMIT까지 기다리는 왕복이 되고, 여러 AZ 복제면 더 길다. DB는 블록 스토리지에 두고 가용성은 DB 자체의 복제로 해결하는 게 정석이다.",
    anchor: "db-데이터-디렉터리를-nfs에-두면",
  },
  {
    id: "block-file-object-storage-7",
    post: "block-file-object-storage",
    question: "1GB 로그 파일의 끝에 한 줄을 덧붙이는 작업을 S3 Standard 객체로 하려면?",
    choices: [
      "Range 헤더로 끝 위치를 지정해 PUT한다",
      "APPEND 요청을 보낸다",
      "객체 전체를 새로 PUT해야 한다",
      "LIST로 마지막 바이트를 찾아 덮어쓴다",
    ],
    answer: 2,
    explanation:
      "객체 스토리지는 키 단위로 통째로 넣고 꺼낸다. 이미 있는 객체의 일부만 고치거나 덧붙이는 동작이 기본으로 없어서 다시 올려야 한다. 그래서 자주 조금씩 고치는 데이터에는 맞지 않는다.",
    anchor: "객체-스토리지는-이름으로-통째로-넣고-꺼낸다",
  },
];
