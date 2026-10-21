import type { QuizQuestion } from "../types";

export const SD_EMAIL_STORAGE_SEARCH: QuizQuestion[] = [
  {
    id: "sd-email-storage-search-1",
    post: "sd-email-storage-search",
    question: "메일의 메타데이터와 본문·첨부를 다른 저장소에 두는 가장 큰 이유는?",
    choices: [
      "본문은 암호화할 수 없어서",
      "SMTP가 둘을 따로 보내서",
      "메타데이터는 작고 자주 읽히고 바뀌지만, 본문과 첨부는 크고 쓴 뒤 바뀌지 않으며 열 때만 읽혀서",
      "검색 색인이 본문을 직접 읽어야 해서",
    ],
    answer: 2,
    explanation:
      "목록 화면은 보낸 사람, 제목, 읽음 여부만 있으면 되는데, 같은 곳에 큰 본문이 있으면 목록을 띄울 때마다 그것까지 끌어온다. 그래서 메타데이터는 빠른 DB에, 본문과 첨부는 객체 저장소에 두고 키만 적는다.",
    anchor: "메일-한-통을-성격대로-나눠-담는다",
  },
  {
    id: "sd-email-storage-search-2",
    post: "sd-email-storage-search",
    question:
      "기본 키가 (user_id, folder, email_id)이고 user_id로 해시 파티션한 테이블에서 '받은편지함 최신 20통'이 빠른 이유로 맞는 것은?",
    choices: [
      "모든 파티션을 병렬로 읽어서",
      "한 파티션만 읽고, 시간순으로 커지는 email_id를 인덱스에서 거꾸로 따라가 정렬 없이 20통에서 멈춰서",
      "folder 열에 별도 인덱스가 있어서",
      "random() 덕분에 데이터가 고르게 퍼져서",
    ],
    answer: 1,
    explanation:
      "실행 계획에 emails_p2 하나와 Index Scan Backward만 나왔고 Sort 단계가 없었다. email_id가 무작위 UUID였다면 받은 시각 열과 인덱스를 따로 둬야 한다.",
    anchor: "사용자-한-명의-메일은-한곳에",
  },
  {
    id: "sd-email-storage-search-3",
    post: "sd-email-storage-search",
    question:
      "'안 읽은 메일만' 쿼리의 실행 계획에 Rows Removed by Filter: 439가 나왔다. 무엇을 뜻하고 어떻게 고치나?",
    choices: [
      "폴더 전체를 읽은 뒤 읽은 메일을 버렸다는 뜻이고, WHERE NOT is_read 부분 인덱스로 안 읽은 메일만 따로 색인한다",
      "인덱스가 깨졌다는 뜻이고, REINDEX로 고친다",
      "파티션이 너무 많다는 뜻이고, 파티션을 합친다",
      "통계가 오래됐다는 뜻이고, ANALYZE만 돌리면 된다",
    ],
    answer: 0,
    explanation:
      "오래 쓴 메일함은 대부분이 읽은 메일이라, 몇 통을 찾으려고 거의 다 읽는다. 부분 인덱스를 만들자 읽은 블록이 450개에서 11개로, 실행 시간이 3.8ms에서 0.085ms로 줄었다.",
    anchor: "안-읽은-메일만-보여-달라",
  },
  {
    id: "sd-email-storage-search-4",
    post: "sd-email-storage-search",
    question: "답장들을 한 대화로 묶을 때 제목의 'Re:' 대신 헤더를 쓰는 이유는?",
    choices: [
      "제목은 암호화되어 있어서",
      "Re:는 SMTP에서 지워져서",
      "헤더가 더 짧아서",
      "제목이 같은 다른 대화가 섞이고 답장하며 제목을 바꾸면 끊기지만, References의 첫 값은 대화의 뿌리를 가리켜서",
    ],
    answer: 3,
    explanation:
      "모든 메일에는 고유한 Message-ID가 있고, 답장은 In-Reply-To와 References로 앞 메일을 가리킨다. References의 첫 값을 thread_id로 저장해 두면 대화 보기가 한 번의 조회가 된다.",
    anchor: "답장끼리-대화로-묶는다",
  },
  {
    id: "sd-email-storage-search-5",
    post: "sd-email-storage-search",
    question: "첨부 파일을 내용의 SHA-256 해시로 한 번만 저장할 때 조심할 점은?",
    choices: [
      "해시가 같아도 파일 내용이 다를 수 있으니 매번 비교해야 한다",
      "사용자 사이의 중복 제거가 바깥에 드러나면 다른 사람이 같은 파일을 가졌는지 알아낼 수 있다",
      "한 바이트만 달라도 같은 키가 나와 파일이 섞인다",
      "참조 수를 세면 객체 저장소가 느려진다",
    ],
    answer: 1,
    explanation:
      "업로드가 즉시 끝나는 식의 반응으로 파일 존재 여부가 새어 나갈 수 있어서, 중복 제거는 서버 안에서만 일어나게 한다. 실험에서 한 바이트만 바꿔도 다른 키가 나왔으니 내용이 다른 파일이 섞이는 일은 없다.",
    anchor: "첨부-파일은-객체-저장소로",
  },
  {
    id: "sd-email-storage-search-6",
    post: "sd-email-storage-search",
    question: "띄어쓰기로만 낱말을 잘라 색인했더니 '요금'으로 '사용 요금은'이 든 메일이 나오지 않았다. 해결책과 그 대가로 맞는 것은?",
    choices: [
      "LIKE 검색으로 바꾼다. 대가는 없다",
      "검색어를 영어로 번역한다. 대가는 정확도다",
      "두 글자씩 겹쳐 자른 조각도 색인한다. 색인이 커지고 '회의'로 '회의실'이 걸리는 오탐이 생긴다",
      "메일을 날짜순으로 정렬한다. 대가는 저장 공간이다",
    ],
    answer: 2,
    explanation:
      "'요금은'을 '요금', '금은'으로도 넣으면 '요금' 검색에 걸린다. 실험에서 색인 줄이 58개에서 110개로 늘었고, 조각은 뜻을 모르니 오탐이 생겨서 형태소 분석과 함께 쓰고 정확히 맞은 결과를 위로 올린다.",
    anchor: "내-메일함-안에서-찾기",
  },
  {
    id: "sd-email-storage-search-7",
    post: "sd-email-storage-search",
    question: "메일 검색 색인을 메일 받기와 같은 요청 안에서 바로 고치지 않고 큐로 비동기 처리하는 이유는?",
    choices: [
      "색인 갱신은 쓰기 비용이 크고, 색인 서버가 멈춰도 메일 받기가 멈추지 않게 하려고",
      "검색 결과를 일부러 늦게 보여 주려고",
      "큐가 낱말을 대신 잘라 주어서",
      "SMTP가 비동기 처리를 요구해서",
    ],
    answer: 0,
    explanation:
      "실험에서 검색은 0.1ms였지만 20만 통 색인에 8초가 걸렸다. 받기 경로와 떼어 놓으면 색인 작업자만 늘려 대응할 수 있고, 대가로 새 메일이 1초 안팎 늦게 검색되는 것을 받아들인다.",
    anchor: "색인은-쓰기-때-비용을-낸다",
  },
];
