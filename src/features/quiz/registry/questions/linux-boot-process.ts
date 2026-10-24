import type { QuizQuestion } from "../types";

export const LINUX_BOOT_PROCESS: QuizQuestion[] = [
  {
    id: "linux-boot-process-1",
    post: "linux-boot-process",
    question: "배포판 커널이 initramfs를 함께 싣는 이유로 가장 알맞은 것은?",
    choices: [
      "부팅 화면의 로고와 글꼴을 담기 위해서",
      "루트 파일 시스템을 열 드라이버와 도구(NVMe, LVM, LUKS 등)가 루트 안에 있는 문제를 풀기 위해서",
      "GRUB 설정을 커널에 전달하기 위해서",
      "systemd 유닛 파일을 미리 읽어 두어 부팅을 빠르게 하기 위해서",
    ],
    answer: 1,
    explanation:
      "배포판 커널은 드라이버 대부분을 모듈로 두는데, 그 모듈이 루트 파일 시스템 안에 있으면 루트를 열 수 없다. 그래서 필요한 모듈과 작은 셸, /init을 담은 임시 루트를 같이 싣고, 진짜 루트를 마운트한 뒤 switch_root로 갈아탄다.",
    anchor: "initramfs는-진짜-루트를-찾기-전의-임시-루트다",
  },
  {
    id: "linux-boot-process-2",
    post: "linux-boot-process",
    question: "커널 업데이트 후 `Kernel panic - not syncing: VFS: Unable to mount root fs on unknown-block(0,0)`로 멈췄다. 가장 먼저 의심할 것은?",
    choices: [
      "fstab의 데이터 디스크 줄에 nofail이 빠졌다",
      "sshd 설정 파일 문법 오류",
      "systemd의 default.target이 graphical.target으로 바뀌었다",
      "새 커널의 initramfs가 없거나 깨졌다. 꽉 찬 /boot 때문일 수 있다",
    ],
    answer: 3,
    explanation:
      "이 메시지는 커널이 루트를 마운트할 수단을 받지 못했을 때 나온다. /boot가 작아 update-initramfs가 실패한 채 재부팅하면 흔히 생긴다. fstab 문제는 systemd 단계라 emergency 모드로 나타난다.",
    anchor: "initramfs는-진짜-루트를-찾기-전의-임시-루트다",
  },
  {
    id: "linux-boot-process-3",
    post: "linux-boot-process",
    question: "fstab에 nofail 없이 적은 데이터 디스크를 떼어 냈더니 서버가 emergency 모드에 빠졌다. 그 경로로 맞는 것은?",
    choices: [
      "커널이 fstab을 읽다가 패닉을 낸다",
      "GRUB이 fstab의 UUID를 확인하고 부팅을 멈춘다",
      "fstab-generator가 그 줄을 local-fs.target의 Requires로 걸고, 마운트가 실패하자 local-fs.target의 OnFailure=emergency.target이 동작한다",
      "initramfs가 모든 fstab 줄을 마운트하다 실패해 (initramfs) 셸로 떨어진다",
    ],
    answer: 2,
    explanation:
      "systemd는 fstab의 줄마다 .mount 유닛을 만들고, nofail이 없으면 local-fs.target.requires에, 있으면 wants에 건다. 장치를 90초 동안 못 찾아 Requires가 실패하면 local-fs.target이 실패하고 OnFailure로 emergency.target이 시작된다.",
    anchor: "fstab-한-줄이-부팅을-멈추는-길",
  },
  {
    id: "linux-boot-process-4",
    post: "linux-boot-process",
    question: "root 계정이 잠긴 Ubuntu 클라우드 서버가 emergency 모드에서 `the root account is locked`를 띄우며 셸을 주지 않는다. 콘솔에서 쓸 수 있는 방법은?",
    choices: [
      "GRUB 메뉴에서 e를 눌러 linux 줄 끝에 init=/bin/bash를 붙여 부팅한다",
      "Ctrl+Alt+Del로 재부팅하면 자동으로 이전 커널로 부팅된다",
      "emergency 프롬프트에서 sudo -i를 친다",
      "systemctl default를 입력해 그냥 이어서 부팅한다",
    ],
    answer: 0,
    explanation:
      "init=/bin/bash는 systemd 대신 bash를 PID 1로 띄워 비밀번호 없이 루트 셸을 준다. 거기서 mount -o remount,rw /로 쓰기를 열고 fstab을 고친다. emergency 셸 자체를 못 얻었으니 그 안의 명령은 칠 수 없고, 콘솔도 막혔다면 루트 볼륨을 다른 인스턴스에 붙여 고친다.",
    anchor: "fstab-한-줄이-부팅을-멈추는-길",
  },
  {
    id: "linux-boot-process-5",
    post: "linux-boot-process",
    question: "/etc/default/grub의 GRUB_CMDLINE_LINUX_DEFAULT를 고쳤는데 다음 부팅에 반영되지 않았다. 왜인가?",
    choices: [
      "GRUB은 /etc/default/grub을 부팅 때 직접 읽지 않고, update-grub이 만든 /boot/grub/grub.cfg를 읽기 때문이다",
      "GRUB_CMDLINE_LINUX_DEFAULT는 복구 모드 항목에만 적용되기 때문이다",
      "커널 파라미터는 grubenv에 저장해야 하기 때문이다",
      "systemd가 부팅 때 커널 파라미터를 지우기 때문이다",
    ],
    answer: 0,
    explanation:
      "grub.cfg는 update-grub(grub-mkconfig)이 /etc/default/grub과 /etc/grub.d를 읽어 만들어 내는 파일이다. 고친 뒤 update-grub을 돌려야 반영된다. _DEFAULT 쪽은 오히려 복구 모드 항목에서 빠지는 파라미터다.",
    anchor: "grub은-메뉴를-그리고-커널을-고른다",
  },
  {
    id: "linux-boot-process-6",
    post: "linux-boot-process",
    question: "부팅이 느려 `systemd-analyze blame`을 보니 apt-daily.service가 맨 위에 있다. 이걸 바로 범인으로 보면 안 되는 이유는?",
    choices: [
      "blame은 커널 단계 시간만 보여 주기 때문이다",
      "유닛은 병렬로 뜨므로 오래 걸렸어도 타깃 도달을 막지 않았을 수 있다. critical-chain으로 실제로 기다린 사슬을 봐야 한다",
      "apt-daily.service는 부팅 때 실행되지 않기 때문이다",
      "blame의 시간은 초가 아니라 밀리초 단위의 누적값이기 때문이다",
    ],
    answer: 1,
    explanation:
      "blame은 유닛마다 시작에 걸린 시간을 보여 줄 뿐, 그 유닛이 다른 유닛을 기다리게 했는지는 말해 주지 않는다. 백그라운드 작업은 오래 걸려도 부팅을 늦추지 않는다. critical-chain이 기본 타깃까지 실제로 기다린 줄을 보여 준다.",
    anchor: "부팅이-느릴-때-systemd-analyze",
  },
];
