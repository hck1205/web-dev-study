import type { QuizQuestion } from "../types";

export const LINUX_DISKS_FILESYSTEMS: QuizQuestion[] = [
  {
    id: "linux-disks-filesystems-1",
    post: "linux-disks-filesystems",
    question: "EC2에 새 EBS 볼륨을 붙였는데 `df -h`에 보이지 않는다. 가장 가능성 높은 이유는?",
    choices: [
      "볼륨이 다른 가용 영역에 붙어 커널이 장치를 못 봤다",
      "df는 마운트된 파일 시스템만 보여 주는데, 새 볼륨에는 아직 파일 시스템도 마운트도 없다",
      "NVMe 볼륨은 재부팅해야 df에 나타난다",
      "df는 루트 볼륨만 보여 주고 추가 볼륨은 lsblk로만 보인다",
    ],
    answer: 1,
    explanation:
      "df는 맨 위층인 마운트된 파일 시스템을 센다. 새 볼륨은 lsblk에는 블록 장치로 보이지만, 파티션과 mkfs, mount를 거쳐야 df에 나온다. 추가 볼륨도 마운트하면 df에 그대로 보인다.",
    anchor: "디스크가-파일을-담기까지-네-층",
  },
  {
    id: "linux-disks-filesystems-2",
    post: "linux-disks-filesystems",
    question: "fstab의 데이터 디스크 줄에 장치 이름 대신 UUID를 쓰고 nofail을 붙이는 이유로 맞는 것은?",
    choices: [
      "UUID가 더 짧아서 부팅 때 파싱이 빠르고, nofail은 fsck를 건너뛰게 한다",
      "UUID를 쓰면 마운트 옵션 오타를 findmnt가 잡아 주고, nofail은 읽기 전용으로 붙인다",
      "UUID는 파티션 표에 저장되어 mkfs를 다시 해도 바뀌지 않고, nofail은 쓰기 오류를 무시한다",
      "NVMe 장치 번호는 바뀔 수 있어 UUID로 같은 파일 시스템을 가리키고, nofail은 그 디스크가 없어도 부팅이 멈추지 않게 한다",
    ],
    answer: 3,
    explanation:
      "Nitro 인스턴스의 nvme 번호는 붙인 순서나 재부팅에 따라 달라질 수 있지만 파일 시스템 UUID는 그대로다. nofail이 없으면 장치를 못 찾을 때 부팅이 emergency 모드에서 멈춘다. UUID는 mkfs 때 생기므로 다시 만들면 바뀐다.",
    anchor: "마운트는-fstab에-uuid로-적는다",
  },
  {
    id: "linux-disks-filesystems-3",
    post: "linux-disks-filesystems",
    question: "EBS 볼륨을 100GiB에서 200GiB로 키운 뒤 `resize2fs /dev/nvme1n1p1`을 쳤는데 df가 그대로다. 빠진 단계는?",
    choices: [
      "파일 시스템을 언마운트하지 않았다",
      "e2fsck -f를 먼저 돌리지 않았다",
      "growpart로 파티션 끝을 디스크 끝까지 옮기지 않았다",
      "서버를 재부팅해 커널이 새 크기를 읽게 하지 않았다",
    ],
    answer: 2,
    explanation:
      "볼륨을 키우면 블록 장치만 커지고 파티션은 옛 크기 그대로다. 파일 시스템은 파티션보다 커질 수 없으니 growpart로 파티션을 먼저 늘려야 resize2fs가 일을 한다. ext4는 마운트한 채로 늘릴 수 있고 재부팅도 필요 없다.",
    anchor: "볼륨을-키우면-세-층을-차례로-키운다",
  },
  {
    id: "linux-disks-filesystems-4",
    post: "linux-disks-filesystems",
    question: "`df -h`는 1%만 썼다고 나오는데 새 파일을 만들면 No space left on device가 난다. 먼저 확인할 명령은?",
    choices: [
      "df -i",
      "du -sh /",
      "lsblk -f",
      "free -h",
    ],
    answer: 0,
    explanation:
      "ext4는 inode 수가 mkfs 때 고정되어, 작은 파일이 많이 쌓이면 용량이 남아도 inode가 바닥난다. df -i의 IUse%가 100%면 이 경우이고, du --inodes로 파일이 몰린 디렉터리를 찾는다. 용량 부족과 같은 오류 번호를 써서 메시지로는 구분되지 않는다.",
    anchor: "공간이-남았는데-no-space-left-on-device",
  },
  {
    id: "linux-disks-filesystems-5",
    post: "linux-disks-filesystems",
    question: "150MiB 로그를 rm으로 지웠는데 df의 사용량이 줄지 않고 du 합계와 크게 다르다. 원인과 대처로 맞는 것은?",
    choices: [
      "저널에 지운 내용이 남아 있어서다. sync를 치면 풀린다",
      "예약 블록 5%에 들어가서다. tune2fs -m 0으로 푼다",
      "프로세스가 그 파일을 열어 두고 있어서 블록이 풀리지 않았다. lsof +L1로 찾아 재시작하거나 /proc/PID/fd/N을 비운다",
      "휴지통으로 옮겨졌을 뿐이다. ~/.local/share/Trash를 비운다",
    ],
    answer: 2,
    explanation:
      "rm은 디렉터리 표에서 이름만 지우고 링크 수를 0으로 만든다. 열린 fd가 남아 있으면 커널은 블록을 풀지 않아 df는 계속 사용 중으로 센다. du는 이름이 사라진 파일을 보지 못하니 둘이 갈린다.",
    anchor: "df와-du가-다른-이유",
  },
  {
    id: "linux-disks-filesystems-6",
    post: "linux-disks-filesystems",
    question: "config.yml에 하드 링크 hard.yml과 심볼릭 링크 soft.yml을 만든 뒤 config.yml을 config.old로 이름을 바꿨다. 결과는?",
    choices: [
      "둘 다 끊긴다",
      "hard.yml은 그대로 읽히고 soft.yml은 끊긴다",
      "soft.yml은 config.old를 따라가고 hard.yml은 끊긴다",
      "둘 다 그대로 읽힌다",
    ],
    answer: 1,
    explanation:
      "하드 링크는 같은 inode에 붙은 또 하나의 이름이라 원래 이름이 바뀌어도 같은 내용을 읽는다. 심볼릭 링크는 config.yml이라는 경로 글자를 담고 있어서 그 이름이 사라지면 끊긴다. 대신 심볼릭 링크는 다른 파일 시스템이나 디렉터리에도 걸 수 있다.",
    anchor: "하드-링크와-심볼릭-링크",
  },
];
