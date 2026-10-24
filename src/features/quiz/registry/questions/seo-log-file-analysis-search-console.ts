import type { QuizQuestion } from "../types";

export const SEO_LOG_FILE_ANALYSIS_SEARCH_CONSOLE: QuizQuestion[] = [
  {
    id: "seo-log-file-analysis-search-console-1",
    post: "seo-log-file-analysis-search-console",
    question: "접근 로그에서 UA가 Googlebot인 요청을 진짜 구글봇으로 확인하려면 어떻게 해야 하나?",
    choices: [
      "UA 문자열에 +http://www.google.com/bot.html 이 들어 있는지 본다",
      "역방향 DNS로 구글 도메인인지 보고, 그 이름을 정방향으로 다시 조회해 같은 IP가 나오는지 본다",
      "역방향 DNS 결과가 googlebot.com으로 끝나는지만 본다",
      "요청에 Referer가 비어 있는지 본다",
    ],
    answer: 1,
    explanation:
      "UA는 누구나 같은 문자열을 보낼 수 있다. PTR 레코드는 IP 대역 주인이 마음대로 적을 수 있어서 역방향만 보면 위조를 못 막고, 구글만 고칠 수 있는 googlebot.com 존의 정방향 조회까지 맞아야 진짜다.",
    anchor: "이름표는-누구나-붙일-수-있다",
  },
  {
    id: "seo-log-file-analysis-search-console-2",
    post: "seo-log-file-analysis-search-console",
    question: "구역별로 크롤 수를 세었더니 검증된 구글봇 요청의 절반 이상이 필터 파라미터 주소와 내부 검색 결과에 갔다. 무엇을 의심해야 하나?",
    choices: [
      "구글이 필터 주소를 더 중요하게 보니 그대로 두면 된다",
      "가짜 구글봇이 섞였으니 그 요청은 무시하면 된다",
      "한정된 크롤이 색인 가치가 낮은 주소에 쓰여 새 상세 페이지가 늦게 크롤될 수 있다",
      "sitemap에 필터 주소를 더 넣어야 한다",
    ],
    answer: 2,
    explanation:
      "구글봇이 한 사이트에 쓰는 요청은 한정되어 있어서 파라미터 조합에 많이 쓰면 정작 중요한 주소는 대기열 뒤로 밀린다. 이미 검증된 요청만 셌으니 가짜 봇 탓으로 돌릴 수도 없다.",
    anchor: "구글봇은-어디에-시간을-쓰나",
  },
  {
    id: "seo-log-file-analysis-search-console-3",
    post: "seo-log-file-analysis-search-console",
    question: "로그에 원인 모를 503과 느린 응답이 며칠째 섞여 있다. 구글봇은 어떻게 반응하나?",
    choices: [
      "크롤 속도를 낮춰서 새 페이지를 발견하는 속도도 함께 늦어진다",
      "503은 일시적 오류라 크롤 속도에는 아무 영향이 없다",
      "더 자주 다시 시도해서 크롤 수가 늘어난다",
      "그 사이트를 곧바로 색인에서 통째로 뺀다",
    ],
    answer: 0,
    explanation:
      "구글봇은 500, 503, 429가 늘거나 응답이 느려지면 서버를 보호하려고 크롤 속도를 낮춘다. 그래서 오류가 오래가면 새 주소의 발견과 반영이 늦어지고, 503이 길어지면 주소가 색인에서 빠지기 시작할 수도 있다.",
    anchor: "상태-코드와-응답-시간이-크롤-속도를-바꾼다",
  },
  {
    id: "seo-log-file-analysis-search-console-4",
    post: "seo-log-file-analysis-search-console",
    question: "새 글이 로그에는 한 번도 나오지 않고 페이지 색인 보고서에서는 '발견됨 - 현재 색인이 생성되지 않음'이다. 먼저 고칠 곳은?",
    choices: [
      "글 본문을 더 길고 독창적으로 고친다",
      "URL 검사에서 색인 생성 요청을 매일 누른다",
      "sitemap을 처음 제출한다",
      "사이트 속도, 5xx, 크롤을 먹는 낭비 주소, 새 글로 가는 내부 링크처럼 사이트 쪽을 본다",
    ],
    answer: 3,
    explanation:
      "발견됨은 구글이 주소를 알지만 아직 가져가지 않은 상태라 페이지 내용이 원인이 아니다. 내용 문제는 가져간 뒤 넣지 않은 '크롤링됨' 쪽이고, 이미 발견됐으니 sitemap을 처음 제출하는 문제도 아니다.",
    anchor: "발견됨과-크롤링됨은-다른-단계다",
  },
  {
    id: "seo-log-file-analysis-search-console-5",
    post: "seo-log-file-analysis-search-console",
    question: "robots.txt 요청이 5xx를 돌려줄 때와 404를 돌려줄 때 구글의 반응을 바르게 짝지은 것은?",
    choices: [
      "둘 다 전부 허용으로 보고 계속 크롤한다",
      "5xx는 사이트 크롤을 잠시 멈추고, 404는 전부 허용으로 본다",
      "5xx는 전부 허용, 404는 전부 차단으로 본다",
      "둘 다 사이트를 색인에서 뺀다",
    ],
    answer: 1,
    explanation:
      "파일이 없는 404는 막은 게 없다는 뜻이라 전부 허용으로 본다. 5xx는 무엇을 막았는지 알 수 없으니 구글이 조심스럽게 크롤을 멈춘다. 그래서 robots.txt는 앱이 동적으로 만들지 말고 정적 파일로 두는 편이 안전하다.",
    anchor: "크롤링-통계는-서버-쪽-건강검진이다",
  },
  {
    id: "seo-log-file-analysis-search-console-6",
    post: "seo-log-file-analysis-search-console",
    question: "Search Console 화면 대신 BigQuery 대량 내보내기를 켜 두는 이유로 맞는 것은?",
    choices: [
      "설정하면 지난 16개월치 데이터를 한 번에 채워 준다",
      "URL 검사 결과를 하루 무제한으로 받을 수 있다",
      "설정한 날부터 매일 쌓여 16개월 제한 없이 보관되고, 접근 로그와 주소 단위로 조인할 수 있다",
      "익명화된 쿼리까지 원문으로 볼 수 있다",
    ],
    answer: 2,
    explanation:
      "대량 내보내기는 과거를 채워 주지 않고 설정한 날부터 쌓이니 일찍 켜 두는 게 좋다. 화면의 1,000행, 16개월 한계를 벗어나 장기 추세를 보고 다른 데이터와 조인하는 게 장점이다. URL 검사 한도는 별개의 API 이야기다.",
    anchor: "화면에-안-보이는-행은-api로-꺼낸다",
  },
];
