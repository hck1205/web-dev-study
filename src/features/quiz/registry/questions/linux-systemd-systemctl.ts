import type { QuizQuestion } from "../types";

export const LINUX_SYSTEMD_SYSTEMCTL: QuizQuestion[] = [
  {
    id: "linux-systemd-systemctl-1",
    post: "linux-systemd-systemctl",
    question: "systemctl start orders-api만 하고 enable은 하지 않았다. 서버가 재부팅되면?",
    choices: [
      "start한 서비스는 자동으로 기억되어 다시 뜬다",
      "multi-user.target.wants에 링크가 없어서 부팅 때 뜨지 않는다",
      "Restart=on-failure가 있으면 부팅 때 뜬다",
      "daemon-reload를 했다면 다시 뜬다",
    ],
    answer: 1,
    explanation:
      "start는 지금 띄우는 것뿐이고, 부팅 때 띄우는 건 enable이 만든 wants 디렉터리의 링크다. Restart=는 떠 있던 서비스가 죽었을 때의 정책이라 부팅과 상관없다.",
    anchor: "enable과-start는-다른-일이다",
  },
  {
    id: "linux-systemd-systemctl-2",
    post: "linux-systemd-systemctl",
    question: "유닛 파일의 ExecStart를 고치고 systemctl restart를 했는데 옛 명령으로 뜬다. 빠뜨린 것은?",
    choices: [
      "systemctl reload",
      "systemctl daemon-reload",
      "systemctl enable",
      "systemctl reset-failed",
    ],
    answer: 1,
    explanation:
      "systemd는 유닛 파일을 메모리에 읽어 두고 쓰므로 파일을 고친 뒤 daemon-reload로 다시 읽혀야 한다. systemctl reload는 유닛과 무관하게 앱에 ExecReload 신호를 보내는 것이라 다르다.",
    anchor: "daemon-reload를-잊으면",
  },
  {
    id: "linux-systemd-systemctl-3",
    post: "linux-systemd-systemctl",
    question:
      "설정 오류로 뜨자마자 죽는 앱에 Restart=always를 걸었는데 몇 초 뒤 failed (Result: start-limit-hit)로 멈췄다. 왜인가?",
    choices: [
      "Restart=always는 비정상 종료에는 동작하지 않는다",
      "기본 시작 한도(10초에 5번)를 넘겨서 systemd가 더 띄우지 않았다",
      "TimeoutStopSec이 짧아서",
      "WantedBy가 없어서",
    ],
    answer: 1,
    explanation:
      "기본 RestartSec이 100ms라 금방 10초 안에 5번을 넘긴다. 원인을 고친 뒤 reset-failed로 카운터를 비우고, [Unit]의 StartLimitIntervalSec·StartLimitBurst와 RestartSec을 조정한다.",
    anchor: "죽으면-다시-띄운다-한도까지",
  },
  {
    id: "linux-systemd-systemctl-4",
    post: "linux-systemd-systemctl",
    question:
      "배포 때마다 systemctl restart가 정확히 TimeoutStopSec만큼 걸리고 로그에 State 'stop-sigterm' timed out. Killing.이 남는다. 고쳐야 할 곳은?",
    choices: [
      "TimeoutStopSec을 1초로 줄인다",
      "앱이 SIGTERM을 받으면 정리하고 끝나도록 처리를 넣는다",
      "KillMode=none으로 바꾼다",
      "Restart=no로 바꾼다",
    ],
    answer: 1,
    explanation:
      "앱이 SIGTERM을 무시해서 systemd가 기다리다 SIGKILL을 보내는 것이다. 시간을 줄이면 정리할 기회만 사라진다. KillMode=none은 남은 프로세스를 방치하게 만든다.",
    anchor: "멈출-때는-cgroup-전체를-정리한다",
  },
  {
    id: "linux-systemd-systemctl-5",
    post: "linux-systemd-systemctl",
    question:
      "drop-in에 ExecStart=/usr/bin/python3 app.py --workers 4 한 줄만 썼더니 서비스가 뜨지 않는다. 이유는?",
    choices: [
      "drop-in에서는 ExecStart를 바꿀 수 없다",
      "ExecStart는 쌓이는 설정이라 원본과 합쳐 두 개가 되었고, simple 서비스는 하나만 허용한다",
      "drop-in 파일 이름이 override.conf가 아니어서",
      "systemctl edit은 daemon-reload를 하지 않아서",
    ],
    answer: 1,
    explanation:
      "목록형 설정은 덮어쓰지 않고 쌓인다. 먼저 빈 ExecStart=로 원본을 지우고 새 값을 써야 한다. 그대로 두면 more than one ExecStart= setting 오류로 거부된다.",
    anchor: "남의-유닛은-drop-in으로-고친다",
  },
  {
    id: "linux-systemd-systemctl-6",
    post: "linux-systemd-systemctl",
    question: "cron 대신 systemd timer를 쓸 때 Persistent=true가 해 주는 일은?",
    choices: [
      "타이머 설정을 재부팅 뒤에도 남긴다",
      "서버가 꺼져 있던 동안 놓친 실행을 켜진 뒤 한 번 해 준다",
      "작업이 실패하면 성공할 때까지 반복한다",
      "작업 출력을 파일로 저장한다",
    ],
    answer: 1,
    explanation:
      "Persistent=true면 마지막 실행 시각을 기록해 두고, 그사이 놓친 실행이 있으면 부팅 직후 한 번 돌린다. 타이머가 재부팅 뒤에도 켜져 있는 건 enable이 하는 일이다.",
    anchor: "cron-대신-timer",
  },
  {
    id: "linux-systemd-systemctl-7",
    post: "linux-systemd-systemctl",
    question: "systemctl status에 Main PID: 5120 (code=exited, status=217/USER)가 보인다. 무엇을 확인하나?",
    choices: [
      "앱의 traceback",
      "User=에 적은 사용자가 시스템에 있는지 (id orders)",
      "ExecStart의 실행 권한",
      "디스크 공간",
    ],
    answer: 1,
    explanation:
      "200번대 종료 코드는 systemd가 앱을 띄우기 전 준비 단계에서 실패했다는 뜻이고, 217은 사용자를 찾지 못했다는 뜻이다. 실행 파일 문제는 203/EXEC로 나온다.",
    anchor: "서비스가-안-뜰-때-따라가는-순서",
  },
];
