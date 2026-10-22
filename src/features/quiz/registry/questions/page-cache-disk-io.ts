import type { QuizQuestion } from "../types";

export const PAGE_CACHE_DISK_IO: QuizQuestion[] = [
  {
    id: "page-cache-disk-io-1",
    post: "page-cache-disk-io",
    question: "dd로 512MiB를 쓰니 4.5GB/s, 같은 명령에 conv=fsync를 붙이니 1.1GB/s가 나왔다. 첫 번째 숫자는 무엇을 잰 것인가?",
    choices: [
      "디스크의 순차 쓰기 성능",
      "디스크 쓰기 캐시의 속도",
      "페이지 캐시에 복사하는 속도",
      "/dev/zero를 읽는 속도",
    ],
    answer: 2,
    explanation:
      "write()는 데이터를 페이지 캐시에 복사하고 dirty 표시를 붙인 뒤 바로 돌아온다. 실제 디스크 쓰기는 나중에 flusher가 하니 첫 숫자는 메모리 복사 속도에 가깝다. conv=fsync는 끝에 디스크까지 내리는 시간을 포함한다.",
    anchor: "쓰기는-메모리에-복사하면-끝난다",
  },
  {
    id: "page-cache-disk-io-2",
    post: "page-cache-disk-io",
    question: "기본 설정에서 512MiB를 쓰고 아무것도 하지 않으면 Dirty가 언제 줄어드나?",
    choices: [
      "dd가 끝나는 즉시",
      "약 30초가 지나 flusher가 오래된 페이지를 내릴 때",
      "dirty_ratio 20%에 닿을 때까지 줄지 않는다",
      "다음 재부팅 때",
    ],
    answer: 1,
    explanation:
      "512MiB는 백그라운드 문턱(이 머신에서 1.23GiB)에 닿지 않아서 시간 기준만 적용된다. flusher는 5초마다 깨어나 dirty_expire_centisecs(3000, 30초)보다 오래된 페이지를 내리고, 실험에서도 25초와 30초 사이에 한 번에 내려갔다.",
    anchor: "더러운-페이지는-30초-뒤에-내려간다",
  },
  {
    id: "page-cache-disk-io-3",
    post: "page-cache-disk-io",
    question: "큰 배치가 로그를 쏟아 내는 동안 웹 서버 프로세스가 D 상태로 멈췄고 wchan에 balance_dirty_pages가 보인다. 무슨 일인가?",
    choices: [
      "더러운 페이지가 dirty 문턱을 넘어 write()가 디스크 속도에 맞춰 멈췄다",
      "메모리가 부족해 OOM killer를 기다리고 있다",
      "NFS 서버가 응답하지 않는다",
      "fsync 오류가 나서 커널이 재시도하고 있다",
    ],
    answer: 0,
    explanation:
      "dirty_ratio를 넘으면 쓰는 프로세스가 write() 안의 balance_dirty_pages()에서 잠들며 디스크가 따라올 때까지 기다린다. 같은 디스크를 쓰는 다른 프로세스도 함께 느려진다. 큰 서버에서는 dirty_bytes 같은 절대값으로 문턱을 낮춰 이런 몰림을 줄인다.",
    anchor: "더러운-페이지는-30초-뒤에-내려간다",
  },
  {
    id: "page-cache-disk-io-4",
    post: "page-cache-disk-io",
    question: "4KiB 쓰기마다 fsync하는 fio 부하가 초당 7,250번에서 멈췄다. write() 자체는 평균 3.5µs였다. 커밋 처리량을 올리는 DB의 대표적인 방법은?",
    choices: [
      "write() 버퍼 크기를 4KiB보다 작게 줄인다",
      "fsync 대신 sync()를 부른다",
      "O_DIRECT로 열면 fsync가 필요 없어진다",
      "여러 트랜잭션의 커밋을 모아 fsync 한 번으로 처리한다(그룹 커밋)",
    ],
    answer: 3,
    explanation:
      "시간 대부분이 fsync 대기(평균 133µs)라서 fsync 횟수를 줄이는 그룹 커밋이 효과가 크다. sync()는 시스템 전체를 내려서 더 무겁고, O_DIRECT는 장치 캐시를 비우지 않으니 지속성에는 여전히 fsync나 O_DSYNC가 필요하다.",
    anchor: "fsync가-돌려주는-약속",
  },
  {
    id: "page-cache-disk-io-5",
    post: "page-cache-disk-io",
    question: "임시 파일에 쓰고 fsync한 뒤 rename까지 했다. 디렉터리를 fsync하지 않으면 전원 장애 뒤 어떤 일이 생길 수 있나?",
    choices: [
      "config.json이 0바이트가 된다",
      "옛 내용과 새 내용이 섞인 파일이 된다",
      "이름 바뀜이 디스크에 없어서 옛 파일이 돌아올 수 있다",
      "임시 파일과 원래 파일이 모두 사라진다",
    ],
    answer: 2,
    explanation:
      "rename은 원자적이라 섞인 상태는 없고, 새 내용은 이미 fsync로 디스크에 있다. 남은 건 디렉터리 항목의 변경인데, 이걸 내리지 않으면 재부팅 뒤 이름이 옛 파일을 가리킬 수 있다. 저장했다고 응답하기 전에 디렉터리도 fsync한다.",
    anchor: "파일을-안전하게-바꿔-쓰는-순서",
  },
  {
    id: "page-cache-disk-io-6",
    post: "page-cache-disk-io",
    question: "dd bs=1000 oflag=direct가 Invalid argument로 실패했다. 이유는?",
    choices: [
      "O_DIRECT는 root만 쓸 수 있어서",
      "O_DIRECT는 오프셋·길이·버퍼를 논리 블록 크기 배수로 맞춰야 해서",
      "디스크가 가득 차서",
      "ext4는 O_DIRECT를 지원하지 않아서",
    ],
    answer: 1,
    explanation:
      "O_DIRECT는 페이지 캐시를 거치지 않고 앱 버퍼에서 바로 장치로 가기 때문에 장치의 정렬 규칙을 지켜야 한다. 이 디스크의 논리 블록은 512바이트라 1000바이트 쓰기는 EINVAL이고, 4096바이트 쓰기는 성공했다.",
    anchor: "캐시를-건너뛰는-o_direct",
  },
  {
    id: "page-cache-disk-io-7",
    post: "page-cache-disk-io",
    question: "큐 깊이 1의 무작위 읽기에서 iostat %util이 70%였다. 큐 깊이를 32로 올리면 어떻게 될 가능성이 큰가?",
    choices: [
      "%util이 70%라 IOPS는 거의 그대로다",
      "IOPS가 크게 오른다. SSD·클라우드 디스크는 요청을 병렬로 처리해서 %util이 포화를 말해 주지 못한다",
      "%util이 100%를 넘어 요청이 실패한다",
      "r_await가 0으로 떨어진다",
    ],
    answer: 1,
    explanation:
      "%util은 요청이 하나라도 걸려 있던 시간의 비율이라 병렬 장치에서는 여유를 숨긴다. 실험에서 큐 깊이 32로 올리자 25k에서 137k IOPS가 됐다. 포화는 await와 aqu-sz가 함께 오르는지, 한도에 붙었는지로 본다.",
    anchor: "iostat--x-한-줄-읽기",
  },
];
