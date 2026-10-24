import type { QuizQuestion } from "../types";

export const NODEJS_FS_STREAMS: QuizQuestion[] = [
  {
    id: "nodejs-fs-streams-1",
    post: "nodejs-fs-streams",
    question:
      "252MB 로그를 readFile로 읽어 split(\"\\n\")으로 세었더니 최대 메모리가 732MB였다. 파일 크기의 세 배쯤 드는 이유로 가장 알맞은 것은?",
    choices: [
      "readFile이 파일을 세 번 읽기 때문이다",
      "Buffer, 디코딩한 문자열, split이 만든 줄 문자열들이 동시에 살아 있기 때문이다",
      "스레드 풀 네 칸이 각자 파일 사본을 들고 있기 때문이다",
      "UTF-8 문자열은 항상 바이트 수의 세 배 메모리를 쓰기 때문이다",
    ],
    answer: 1,
    explanation:
      "통째로 읽으면 원본 바이트, 그걸 바꾼 문자열, 줄마다 만든 문자열이 한꺼번에 메모리에 있다. 스트림은 64KiB 조각 하나와 그 안의 줄만 들고 있어서 84MB에서 멈췄다.",
    anchor: "파일을-다-읽으면-메모리가-몇-배로-든다",
  },
  {
    id: "nodejs-fs-streams-2",
    post: "nodejs-fs-streams",
    question:
      "Buffer 조각을 for await로 받아 s += chunk로 이어 붙였더니 한글 일부가 깨진 문자로 나왔다. 왜 그런가?",
    choices: [
      "for await는 바이트 순서를 뒤집어 넘기기 때문이다",
      "Node의 기본 인코딩이 latin1이라 한글을 모르기 때문이다",
      "조각마다 따로 toString()되어 두 조각에 걸친 글자가 반 토막으로 디코딩됐기 때문이다",
      "highWaterMark가 한글 한 글자보다 작기 때문이다",
    ],
    answer: 2,
    explanation:
      "스트림은 글자 경계와 상관없이 바이트를 자른다. 문자열에 더하는 순간 조각마다 디코딩돼서 3바이트 글자의 앞부분만 있는 조각이 깨진다. setEncoding이나 StringDecoder는 남은 바이트를 들고 있다가 이어 준다.",
    anchor: "바이트와-글자-사이-buffer와-인코딩",
  },
  {
    id: "nodejs-fs-streams-3",
    post: "nodejs-fs-streams",
    question:
      "없는 파일의 ReadStream을 .pipe()로 WriteStream에 이었고, 읽기 쪽에만 error 리스너를 달았다. 결과는?",
    choices: [
      "쓰기 스트림이 열린 채 남아 0바이트 파일과 파일 디스크립터가 새어 나간다",
      "pipe가 에러를 쓰기 스트림으로 넘겨 둘 다 닫힌다",
      "쓰기 스트림이 자동으로 finish 이벤트를 낸다",
      "Node가 프로세스를 종료 코드 1로 끝낸다",
    ],
    answer: 0,
    explanation:
      ".pipe()는 에러를 다음 스트림에 전하지 않는다. 그래서 읽기만 실패하고 쓰기는 destroyed가 false인 채 남는다. pipeline은 하나가 실패하면 모두 destroy하고 그 에러로 거부한다.",
    anchor: "for-await로-읽고-pipeline으로-잇는다",
  },
  {
    id: "nodejs-fs-streams-4",
    post: "nodejs-fs-streams",
    question:
      "pipeline(src, transform, dst)가 2만 번째 줄에서 실패했다. 출력 파일을 다음 단계가 바로 읽으면 생기는 문제와 대책으로 맞는 것은?",
    choices: [
      "pipeline이 실패하면 출력 파일을 자동으로 지우니 문제가 없다",
      "출력 파일이 잠겨 다음 단계가 읽지 못한다. 잠금을 풀어 주면 된다",
      "출력은 메모리에만 있어 파일이 비어 있다. flush를 부르면 된다",
      "이미 쓴 반쪽 결과가 남는다. 임시 파일에 쓰고 성공했을 때만 rename한다",
    ],
    answer: 3,
    explanation:
      "pipeline은 스트림을 닫을 뿐 이미 쓴 바이트를 지우지 않는다. 실제로 885490바이트가 남았다. 같은 파일 시스템의 rename은 원자적이라 읽는 쪽은 완성된 파일만 본다.",
    anchor: "transform을-직접-만든다",
  },
  {
    id: "nodejs-fs-streams-5",
    post: "nodejs-fs-streams",
    question:
      "object mode Transform에서 1MB짜리 행 객체를 흘렸더니 메모리가 예상보다 크게 잡혔다. 먼저 확인할 것은?",
    choices: [
      "object mode의 highWaterMark는 바이트가 아니라 객체 개수(기본 16개)라 큰 객체가 여러 개 쌓일 수 있다",
      "object mode는 백프레셔가 없어서 무한히 쌓인다",
      "object mode의 highWaterMark 기본값이 64MiB이기 때문이다",
      "object mode는 객체를 JSON으로 직렬화해 두 배로 저장하기 때문이다",
    ],
    answer: 0,
    explanation:
      "object mode에서도 백프레셔는 동작하지만 단위가 객체 개수다. 기본 16개라 1MB 객체면 16MB까지 쌓인다. 큰 행을 흘린다면 highWaterMark를 줄인다.",
    anchor: "스트림-네-종류",
  },
  {
    id: "nodejs-fs-streams-6",
    post: "nodejs-fs-streams",
    question:
      "ES 모듈 파일에서 path.resolve(\"config.json\")으로 설정을 읽었는데, 다른 디렉터리에서 실행하자 파일을 못 찾는다. 바른 고침은?",
    choices: [
      "__dirname을 쓴다. ES 모듈에서도 전역으로 있다",
      "path.join(\"config.json\")으로 바꾼다",
      "import.meta.dirname(Node 20.11+)을 기준으로 path.join한다",
      "process.cwd()를 기준으로 resolve한다",
    ],
    answer: 2,
    explanation:
      "resolve는 끝까지 절대 경로가 안 되면 실행한 디렉터리를 붙인다. 스크립트 위치 기준이 필요하면 ES 모듈에서는 import.meta.dirname을 쓴다. ES 모듈에는 __dirname이 없어서 typeof가 undefined였다.",
    anchor: "경로는-문자열로-이어-붙이지-않는다",
  },
  {
    id: "nodejs-fs-streams-7",
    post: "nodejs-fs-streams",
    question:
      "fs.watch 콜백에서 파일이 바뀔 때마다 설정을 다시 읽게 했더니, 저장 한 번에 두세 번씩 다시 읽는다. 알맞은 대응은?",
    choices: [
      "recursive 옵션을 끄면 이벤트가 한 번만 온다",
      "짧게 모았다가 한 번 처리하고, stat으로 실제 상태를 다시 확인한다",
      "이벤트 type이 rename일 때만 처리하면 된다",
      "inotify 감시 한도를 올리면 중복 이벤트가 사라진다",
    ],
    answer: 1,
    explanation:
      "저장 방식에 따라 비우기, 쓰기, 이름 바꾸기가 따로 잡혀 이벤트가 여러 번 온다. 이벤트 종류도 운영체제마다 달라서 믿기 어렵다. 디바운스와 stat 재확인이 기본 대응이고, 감시 한도는 ENOSPC와 관련된 다른 문제다.",
    anchor: "폴더를-지켜보고-파일을-패턴으로-찾는다",
  },
];
