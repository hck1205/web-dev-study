import type { QuizQuestion } from "../types";

export const CLAUDE_CODE_PLUGINS_AND_CHANNELS: QuizQuestion[] = [
  {
    id: "claude-code-plugins-and-channels-1",
    post: "claude-code-plugins-and-channels",
    question: "플러그인 훅의 스크립트 경로를 \"${CLAUDE_PLUGIN_ROOT}\"/hooks/format.sh로 쓰는 이유는?",
    choices: [
      "상대 경로는 훅에서 문법 오류가 나기 때문이다",
      "CLAUDE_PLUGIN_ROOT를 쓰면 스크립트가 샌드박스 안에서 돌기 때문이다",
      "설치된 플러그인은 캐시 등 다른 위치에서 읽히므로 내 컴퓨터 경로를 쓰면 남의 컴퓨터에서 깨지기 때문이다",
      "훅은 CLAUDE_PLUGIN_ROOT 아래 파일만 실행할 수 있기 때문이다",
    ],
    answer: 2,
    explanation:
      "플러그인은 설치될 때 다른 위치로 복사되거나 그 자리에서 읽히니, 절대 경로나 상대 경로는 사람마다 어긋난다. CLAUDE_PLUGIN_ROOT가 설치된 위치를 가리킨다. 상태를 남길 곳은 업데이트에도 남는 CLAUDE_PLUGIN_DATA다.",
    anchor: "플러그인-한-개를-뜯어보면",
  },
  {
    id: "claude-code-plugins-and-channels-2",
    post: "claude-code-plugins-and-channels",
    question: "claude plugin details에서 훅이 \"no model context cost\"로 나오고 스킬에는 always-on 토큰이 붙는 이유는?",
    choices: [
      "스킬의 이름과 설명은 Claude가 고를 수 있게 매 세션 실리지만, 훅은 Claude Code가 실행만 하고 모델에 싣지 않기 때문이다",
      "훅은 플러그인에서 비활성화되어 있기 때문이다",
      "스킬 본문 전체가 항상 컨텍스트에 실리기 때문이다",
      "훅 비용은 MCP 서버 쪽으로 계산되기 때문이다",
    ],
    answer: 0,
    explanation:
      "스스로 부를 수 있는 스킬과 서브에이전트는 존재를 알리려고 이름과 설명이 늘 실리고, 본문은 불릴 때 더해진다. 훅은 사건이 일어나면 클라이언트가 돌리는 프로그램이라 컨텍스트를 먹지 않는다. 대신 실행 시간을 더한다.",
    anchor: "마켓플레이스에서-설치하고-업데이트하기",
  },
  {
    id: "claude-code-plugins-and-channels-3",
    post: "claude-code-plugins-and-channels",
    question: "claude plugin update로 1.1.0으로 올렸는데 열려 있던 세션은 그대로다. 왜인가?",
    choices: [
      "마켓플레이스 목록을 먼저 지워야 하기 때문이다",
      "업데이트는 다음 세션부터 적용되고, 열린 세션은 재시작이나 /reload-plugins가 필요하기 때문이다",
      "project 범위 플러그인은 업데이트되지 않기 때문이다",
      "버전 번호는 표시용이고 내용은 바뀌지 않기 때문이다",
    ],
    answer: 1,
    explanation:
      "업데이트 출력의 마지막 줄이 Restart to apply changes다. 플러그인은 시작할 때 실린다. 대화형 세션에서는 /reload-plugins로 다시 읽을 수 있다.",
    anchor: "마켓플레이스에서-설치하고-업데이트하기",
  },
  {
    id: "claude-code-plugins-and-channels-4",
    post: "claude-code-plugins-and-channels",
    question: "코드 인텔리전스 플러그인을 설치했는데 편집 뒤 진단 줄이 뜨지 않는다. 가장 먼저 볼 곳은?",
    choices: [
      "CLAUDE.md에 LSP를 쓰라고 적었는지",
      "출력 스타일이 Concise인지",
      "/plugin의 Errors 탭에서 언어 서버 바이너리가 PATH에 없다는 줄이 있는지",
      "프롬프트 캐시가 데워졌는지",
    ],
    answer: 2,
    explanation:
      "플러그인은 어떤 명령으로 서버를 띄울지만 적고 바이너리는 따로 설치한다. claude를 띄운 셸의 PATH에 바이너리가 없으면 Executable not found 줄이 Errors 탭에 남는다. 클라우드 세션이라면 애초에 언어 서버를 띄우지 않는다.",
    anchor: "코드-인텔리전스-grep-대신-언어-서버로-찾기",
  },
  {
    id: "claude-code-plugins-and-channels-5",
    post: "claude-code-plugins-and-channels",
    question: "커스텀 출력 스타일에서 keep-coding-instructions를 빼면 어떻게 되나?",
    choices: [
      "스타일이 로드되지 않고 오류가 난다",
      "Claude Code의 소프트웨어 엔지니어링 지시가 빠져, 코딩과 상관없는 용도에 맞는 스타일이 된다",
      "CLAUDE.md가 무시된다",
      "도구 사용이 모두 막힌다",
    ],
    answer: 1,
    explanation:
      "출력 스타일은 기본 시스템 프롬프트의 엔지니어링 지시 부분을 바꿔 끼우고, 이 필드의 기본값은 false다. 말투만 바꾸고 코딩은 그대로 하려면 true로 둔다.",
    anchor: "출력-스타일-말투와-응답의-틀을-바꾸기",
  },
  {
    id: "claude-code-plugins-and-channels-6",
    post: "claude-code-plugins-and-channels",
    question: "상태 줄 스크립트에서 5시간 창 사용률을 if (five)로 검사했더니 어떤 경우에 줄이 사라지나?",
    choices: [
      "사용률이 100%일 때",
      "API 키로 로그인했을 때만",
      "모델을 바꾼 직후",
      "사용률이 정확히 0%일 때",
    ],
    answer: 3,
    explanation:
      "0은 거짓으로 평가돼 값이 있어도 없는 것처럼 처리된다. 값이 없는 경우(API 세션 등)와 0인 경우를 undefined 검사나 jq의 // empty로 구분해야 한다.",
    anchor: "상태-줄을-내-계기판으로",
  },
  {
    id: "claude-code-plugins-and-channels-7",
    post: "claude-code-plugins-and-channels",
    question: "웹훅 채널 서버를 .mcp.json에 등록했는데 POST를 보내도 세션에 메시지가 들어오지 않는다. 가장 그럴듯한 이유는?",
    choices: [
      "세션을 --channels(개발 중이면 --dangerously-load-development-channels)에 그 서버 이름을 주고 띄우지 않았다",
      "채널은 클라우드 세션에서만 동작한다",
      "POST 본문이 JSON이 아니면 버려진다",
      "채널은 Claude가 도구로 불러야만 메시지를 받는다",
    ],
    answer: 0,
    explanation:
      ".mcp.json에 있는 것만으로는 도구만 쓸 수 있고 메시지를 밀어 넣지 못한다. 세션마다 채널 플래그에 이름을 줘야 하고, Team·Enterprise는 관리자가 channelsEnabled도 켜야 한다.",
    anchor: "채널-밖에서-열린-세션으로-메시지-밀어-넣기",
  },
];
