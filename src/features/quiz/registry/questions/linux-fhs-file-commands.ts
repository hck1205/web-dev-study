import type { QuizQuestion } from "../types";

export const LINUX_FHS_FILE_COMMANDS: QuizQuestion[] = [
  {
    id: "linux-fhs-file-commands-1",
    post: "linux-fhs-file-commands",
    question: "디스크가 찼다는 경보가 왔다. FHS 기준으로 가장 먼저 의심할 디렉터리와 그 이유로 맞는 것은?",
    choices: [
      "/usr, 패키지가 업데이트될 때마다 옛 버전을 쌓아 두기 때문이다",
      "/var, 로그·DB 데이터·캐시처럼 운영 중에 계속 바뀌고 커지는 데이터를 두는 곳이기 때문이다",
      "/etc, 설정 파일이 바뀔 때마다 백업 사본이 자동으로 생기기 때문이다",
      "/proc, 프로세스가 늘어날수록 디스크에 상태 파일이 쌓이기 때문이다",
    ],
    answer: 1,
    explanation:
      "/var는 /var/log, /var/lib, /var/cache처럼 운영 중에 커지는 데이터를 담는다. /proc는 커널이 보여 주는 가상 파일 시스템이라 디스크를 쓰지 않고, /etc의 설정 파일은 대개 작다.",
    anchor: "디렉터리마다-맡은-일이-있다",
  },
  {
    id: "linux-fhs-file-commands-2",
    post: "linux-fhs-file-commands",
    question: "서버 메모리 여유를 판단할 때 /proc/meminfo에서 MemFree보다 MemAvailable을 보는 이유는?",
    choices: [
      "MemFree는 스왑까지 더한 값이라 실제보다 크게 나온다",
      "MemAvailable은 root만 읽을 수 있어서 더 정확하다",
      "MemAvailable은 페이지 캐시처럼 필요하면 비울 수 있는 메모리까지 셈한 값이다",
      "MemFree는 부팅 직후 값으로 고정되어 갱신되지 않는다",
    ],
    answer: 2,
    explanation:
      "리눅스는 남는 메모리를 페이지 캐시로 쓰기 때문에 MemFree는 작게 보인다. MemAvailable은 그 캐시처럼 바로 돌려받을 수 있는 몫까지 더해 새 프로그램이 쓸 수 있는 양을 추정한다.",
    anchor: "proc와-sys는-디스크에-없다",
  },
  {
    id: "linux-fhs-file-commands-3",
    post: "linux-fhs-file-commands",
    question: "Ubuntu 24.04의 tmp.conf에 `D /tmp 1777 root root 30d`가 있고 /var/tmp 줄은 주석 처리돼 있다. 맞는 설명은?",
    choices: [
      "/tmp는 부팅할 때 비워지고, 재부팅하지 않아도 30일 넘게 안 쓴 파일은 정리된다. /var/tmp는 기본으로 남는다",
      "/tmp는 재부팅해야만 비워지고, 30d는 권한 유지 기간이다",
      "/tmp와 /var/tmp 모두 30일마다 통째로 비워진다",
      "/tmp는 메모리 위에 있어서 30일 설정과 상관없이 전원이 꺼지면 사라진다",
    ],
    answer: 0,
    explanation:
      "D는 부팅 때 디렉터리 안을 비우라는 뜻이고 마지막 칸 30d는 정리 타이머가 쓰는 나이 기준이다. Ubuntu 24.04의 /tmp는 기본적으로 디스크 위에 있고, /var/tmp는 줄이 주석이라 재부팅에도 남는다.",
    anchor: "tmp는-언제-비워지나",
  },
  {
    id: "linux-fhs-file-commands-4",
    post: "linux-fhs-file-commands",
    question: "200MB 파일을 같은 파일 시스템 안에서 mv하면 즉시 끝나지만 /dev/shm(tmpfs)으로 옮기면 시간이 걸린다. 왜인가?",
    choices: [
      "tmpfs는 쓰기 속도가 디스크보다 느리기 때문이다",
      "다른 파일 시스템으로는 rename이 EXDEV로 거절되어 mv가 내용을 복사한 뒤 원본을 지우기 때문이다",
      "같은 파일 시스템에서는 mv가 내용을 압축해서 옮기기 때문이다",
      "/dev/shm으로 옮길 때는 커널이 파일을 암호화하기 때문이다",
    ],
    answer: 1,
    explanation:
      "같은 파일 시스템이면 rename 한 번으로 디렉터리 항목만 바꾸고 inode는 그대로다. inode는 파일 시스템마다 따로 매기므로 다른 쪽으로는 이름만 넘길 수 없어, mv가 복사와 삭제로 처리한다.",
    anchor: "같은-디스크-안에서-mv는-이름만-바꾼다",
  },
  {
    id: "linux-fhs-file-commands-5",
    post: "linux-fhs-file-commands",
    question: "`find logs -mtime +30 | xargs rm`이 위험한 이유로 가장 정확한 것은?",
    choices: [
      "xargs는 파일을 한 번에 하나씩만 지워서 너무 느리다",
      "-mtime +30은 30일보다 새 파일도 포함한다",
      "xargs가 공백과 줄바꿈에서 인자를 끊어서, 공백이 든 파일 이름이 엉뚱한 여러 이름으로 쪼개진다",
      "find의 출력은 상대 경로라서 rm이 항상 실패한다",
    ],
    answer: 2,
    explanation:
      "파일 이름에는 공백과 줄바꿈도 들어갈 수 있어서 안전한 구분자는 NUL뿐이다. 그래서 `-print0 | xargs -0`을 쓰거나 find의 `-exec ... +`, `-delete`로 처리한다.",
    anchor: "-exec-xargs-그리고-공백이-든-파일-이름",
  },
  {
    id: "linux-fhs-file-commands-6",
    post: "linux-fhs-file-commands",
    question: "`rm -rf \"$BUILD_DIR/\"*`에서 BUILD_DIR이 비었을 때 --preserve-root가 사고를 막지 못하는 이유는?",
    choices: [
      "--preserve-root는 root 사용자가 실행할 때만 켜지기 때문이다",
      "따옴표 안의 빈 변수는 bash가 자동으로 현재 디렉터리로 바꾸기 때문이다",
      "-f 옵션이 --preserve-root를 끄기 때문이다",
      "/*가 글롭으로 펼쳐져 rm이 / 자체가 아니라 /bin, /etc 같은 개별 경로를 받기 때문이다",
    ],
    answer: 3,
    explanation:
      "--preserve-root는 인자가 정확히 /일 때만 거절한다. 글롭이 먼저 펼쳐지면 rm은 루트 아래 디렉터리들을 하나씩 받으므로, 변수 단계에서 set -u와 ${VAR:?}로 멈추게 해야 한다.",
    anchor: "rm--rf에-빈-변수가-들어가면",
  },
];
