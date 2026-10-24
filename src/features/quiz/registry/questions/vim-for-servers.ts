import type { QuizQuestion } from "../types";

export const VIM_FOR_SERVERS: QuizQuestion[] = [
  {
    id: "vim-for-servers-1",
    post: "vim-for-servers",
    question: "vi로 파일을 열고 바로 타자를 쳤더니 글자는 안 써지고 커서가 튄다. 왜인가?",
    choices: [
      "파일이 읽기 전용으로 열렸기 때문이다",
      "vim은 일반 모드로 시작해서 키가 글자가 아니라 명령으로 해석되기 때문이다",
      "터미널 인코딩이 맞지 않기 때문이다",
      "SSH 연결이 느려 입력이 밀렸기 때문이다",
    ],
    answer: 1,
    explanation:
      "vim은 키 자체를 명령으로 쓰는 일반 모드에서 시작한다. 글자를 쓰려면 i, a, o로 입력 모드에 들어가야 하고, 끝나면 Esc로 돌아온다. 읽기 전용이어도 입력은 되고 저장에서 막힌다.",
    anchor: "리모컨을-든-상태로-시작한다",
  },
  {
    id: "vim-for-servers-2",
    post: "vim-for-servers",
    question: "`:q`를 쳤더니 E37: No write since last change가 떴다. 바꾼 내용을 버리고 나가려면?",
    choices: [":wq", ":x", ":q!", "ZZ"],
    answer: 2,
    explanation:
      ":q는 바꾼 내용이 있으면 거부하고, !를 붙이면 버리고 나간다. :wq, :x, ZZ는 모두 저장하고 나가는 명령이다. 저장하기 전까지 디스크의 파일은 바뀌지 않는다.",
    anchor: "저장하고-나오는-다섯-가지",
  },
  {
    id: "vim-for-servers-3",
    post: "vim-for-servers",
    question: "커서가 `old.example.com;`의 o에 있다. cw로 지우고 new.example.com; 을 치면 어떻게 되나?",
    choices: [
      "server_name new.example.com;",
      "server_name new.example.com;.example.com;",
      "server_name new.example.com;old.example.com;",
      "줄 전체가 new.example.com; 으로 바뀐다",
    ],
    answer: 1,
    explanation:
      "소문자 w의 단어는 점에서 끊겨서 cw는 old만 지운다. 공백 앞까지 한 덩어리를 지우는 것은 대문자 cW다. 직접 돌려 보면 cw는 .example.com; 이 뒤에 남는다.",
    anchor: "설정-한-줄을-고치는-데-필요한-만큼",
  },
  {
    id: "vim-for-servers-4",
    post: "vim-for-servers",
    question: "`:%s/old.example.com/new.example.com/g`의 문제점으로 맞는 것은?",
    choices: [
      "% 때문에 지금 줄만 바뀐다",
      "g가 없어야 파일 전체가 바뀐다",
      "찾을 말의 점이 아무 글자 하나라서 의도하지 않은 줄까지 바뀔 수 있다",
      "바꿀 말의 점도 정규식이라 글자가 사라진다",
    ],
    answer: 2,
    explanation:
      "찾을 말은 정규식이라 점은 아무 글자 하나다. 점 자체를 찾으려면 \\. 으로 쓴다. 바꿀 말 쪽의 점은 그냥 점이다. %는 파일 전체, g는 한 줄의 모든 일치다.",
    anchor: "찾고-한꺼번에-바꾼다",
  },
  {
    id: "vim-for-servers-5",
    post: "vim-for-servers",
    question: "`:w !sudo tee % > /dev/null`이 권한 없는 파일을 저장할 수 있는 이유는?",
    choices: [
      "vim이 잠깐 root 권한으로 바뀌어 직접 쓰기 때문이다",
      "버퍼 내용을 root 권한으로 도는 tee의 표준 입력으로 보내 tee가 파일에 쓰기 때문이다",
      "파일 권한을 잠시 777로 바꿨다가 되돌리기 때문이다",
      "스왑 파일을 원본 자리에 옮기기 때문이다",
    ],
    answer: 1,
    explanation:
      ":w !명령은 버퍼를 파일이 아니라 명령의 표준 입력으로 보낸다. %는 지금 파일 이름이라 sudo tee가 그 파일에 쓴다. vim 자체는 권한이 바뀌지 않아서 저장 뒤 파일이 바깥에서 바뀌었다는 W12 경고가 뜬다.",
    anchor: "권한이-없는-파일을-열어-버렸을-때",
  },
  {
    id: "vim-for-servers-6",
    post: "vim-for-servers",
    question: "sudoers에서 특정 설정 파일 편집만 허용할 때 `sudo vim` 대신 `sudoedit`를 쓰는 이유는?",
    choices: [
      "sudoedit가 더 빠르기 때문이다",
      "sudo vim은 편집기 전체가 root로 돌아 그 안에서 root 셸을 열 수 있기 때문이다",
      "sudoedit만 스왑 파일을 만들기 때문이다",
      "sudo vim은 E212 오류로 항상 저장에 실패하기 때문이다",
    ],
    answer: 1,
    explanation:
      "sudoedit는 사본을 내 권한의 편집기로 열고 저장할 때만 root가 원본에 덮어쓴다. sudo vim은 편집기가 root라 :!sh 같은 명령으로 root 셸을 얻을 수 있다. 권한을 좁게 주려던 의도가 깨진다.",
    anchor: "권한이-없는-파일을-열어-버렸을-때",
  },
  {
    id: "vim-for-servers-7",
    post: "vim-for-servers",
    question: "파일을 열자 E325 경고가 뜨고 `process ID: 10585 (STILL RUNNING)`이 보인다. 맞는 대응은?",
    choices: [
      "지난 편집이 비정상 종료된 것이니 바로 D로 스왑 파일을 지운다",
      "다른 세션이 지금 편집 중이니 같이 고치지 말고 나가거나 읽기 전용으로 연다",
      "R로 복구하면 두 사람의 변경이 자동으로 합쳐진다",
      "E로 열고 고친 뒤 먼저 저장하면 안전하다",
    ],
    answer: 1,
    explanation:
      "STILL RUNNING은 그 PID의 vim이 살아 있다는 뜻이다. 같이 고치면 나중에 저장한 쪽이 앞사람의 변경을 덮어쓴다. 프로세스가 없으면 비정상 종료라 이때 D(지우기) 선택지가 생긴다.",
    anchor: "스왑-파일-경고를-읽는다",
  },
];
