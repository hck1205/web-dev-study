import type { QuizQuestion } from "../types";

export const LINUX_GREP_AWK_SED: QuizQuestion[] = [
  {
    id: "linux-grep-awk-sed-1",
    post: "linux-grep-awk-sed",
    question: "접근 로그에서 grep -c '502'는 43, 실제 502 응답은 31건이었다. 차이가 난 이유는?",
    choices: [
      "grep이 압축된 줄을 두 번 셌다",
      "grep은 칸을 모르고 글자를 찾아서 응답 크기 2502, 4502 같은 값도 맞았다",
      "-c는 줄 수가 아니라 맞은 횟수를 센다",
      "502 응답 일부가 에러 로그에만 남았다",
    ],
    answer: 1,
    explanation:
      "grep은 줄 안의 어느 위치든 글자가 맞으면 그 줄을 고른다. 상태 칸만 보려면 awk '$9 == 502'처럼 칸으로 고르거나 따옴표와 공백까지 패턴에 넣는다.",
    anchor: "grep은-줄을-고른다",
  },
  {
    id: "linux-grep-awk-sed-2",
    post: "linux-grep-awk-sed",
    question: "awk '{print $12}'로 User-Agent를 세었더니 \"Mozilla/5.0만 4192건 나왔다. 왜 그런가?",
    choices: [
      "awk가 따옴표 안을 한 칸으로 본다",
      "기본 구분자가 공백이라 UA가 여러 칸으로 쪼개지고 $12는 첫 단어뿐이다",
      "mawk는 12번째 칸까지만 읽는다",
      "UA는 $NF에 있다",
    ],
    answer: 1,
    explanation:
      "UA 안의 공백 때문에 칸이 쪼개지고, 그 뒤 칸 번호도 줄마다 달라진다. -F'\"'로 따옴표를 구분자로 쓰면 UA가 통째로 $6이 되고, 마지막 칸은 $NF로 부른다.",
    anchor: "로그-한-줄을-칸으로-나눠-본다",
  },
  {
    id: "linux-grep-awk-sed-3",
    post: "linux-grep-awk-sed",
    question: "awk '{print $1}' log | uniq -c | sort -rn 의 결과에서 같은 IP가 여러 줄 나온다. 무엇이 빠졌나?",
    choices: [
      "uniq 앞의 sort",
      "uniq의 -d 옵션",
      "sort의 -u 옵션",
      "awk의 END 블록",
    ],
    answer: 0,
    explanation:
      "uniq는 바로 붙어 있는 같은 줄만 합친다. 앞에서 sort로 같은 값을 붙여 놓아야 IP마다 한 줄로 정확히 센다.",
    anchor: "파이프로-이어-붙인다",
  },
  {
    id: "linux-grep-awk-sed-4",
    post: "linux-grep-awk-sed",
    question:
      "접근 로그의 502가 14:21~14:23에 몰렸고 같은 시각 전체 요청 수는 평소와 같았다. 에러 로그에 connect() failed (111: Connection refused)가 같은 수로 있다. 가장 그럴듯한 해석은?",
    choices: [
      "트래픽 폭주로 nginx가 버티지 못했다",
      "업스트림 주소에서 듣는 프로세스가 없었다. 앱이 죽었거나 재시작 중이었다",
      "클라이언트가 연결을 먼저 끊었다",
      "업스트림이 느려서 타임아웃이 났다",
    ],
    answer: 1,
    explanation:
      "Connection refused는 그 포트에서 아무도 듣고 있지 않을 때 나온다. 느린 업스트림이면 upstream timed out이 남는다. 요청 수가 평소와 같으니 트래픽 탓도 아니다.",
    anchor: "awk는-칸을-세고-더한다",
  },
  {
    id: "linux-grep-awk-sed-5",
    post: "linux-grep-awk-sed",
    question: "앱이 쓰고 있는 app.log에 sed -i로 비밀번호를 가렸더니 그 뒤 로그가 파일에 쌓이지 않는다. 왜인가?",
    choices: [
      "sed -i가 파일을 읽기 전용으로 바꿨다",
      "sed -i가 새 파일로 이름을 덮어 inode가 바뀌었고, 앱은 지워진 옛 inode에 계속 쓴다",
      "sed가 파일 잠금을 걸어 앱이 쓰지 못한다",
      "앱이 SIGHUP을 받고 멈췄다",
    ],
    answer: 1,
    explanation:
      "sed -i는 임시 파일에 쓰고 rename으로 원래 이름을 덮는다. 열린 파일 디스크립터는 옛 inode를 가리키므로 이후 로그는 /proc/<PID>/fd에 (deleted)로 보이는 곳에 쌓인다.",
    anchor: "sed--i가-파일을-바꾸는-방식",
  },
  {
    id: "linux-grep-awk-sed-6",
    post: "linux-grep-awk-sed",
    question: "sites-enabled/site.conf는 심볼릭 링크다. 여기에 sed -i 's/80/8080/'을 하면?",
    choices: [
      "링크를 따라가 원본이 바뀐다",
      "링크 자리에 일반 파일이 생기고 원본은 그대로 남는다",
      "링크라서 sed가 거부한다",
      "링크와 원본이 모두 바뀐다",
    ],
    answer: 1,
    explanation:
      "GNU sed의 -i는 기본으로 링크를 따라가지 않고 그 자리에 새 일반 파일을 만든다. 원본을 고치려면 --follow-symlinks를 주거나 원본 경로를 직접 지정한다.",
    anchor: "sed--i가-파일을-바꾸는-방식",
  },
  {
    id: "linux-grep-awk-sed-7",
    post: "linux-grep-awk-sed",
    question: "echo '\"GET / HTTP/1.1\" 200 \"-\"' | sed 's/\".*\"/Q/' 의 결과는?",
    choices: ["Q 200 Q", "Q", "\"GET / HTTP/1.1\" 200 Q", "Q 200 \"-\""],
    answer: 1,
    explanation:
      "정규식의 .*는 가장 길게 맞으려 해서 첫 따옴표부터 마지막 따옴표까지 한 덩어리가 된다. 따옴표 덩어리마다 바꾸려면 \"[^\"]*\"와 g 플래그를 쓴다.",
    anchor: "sed는-줄을-고쳐-쓴다",
  },
];
