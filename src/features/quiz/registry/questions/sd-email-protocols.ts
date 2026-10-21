import type { QuizQuestion } from "../types";

export const SD_EMAIL_PROTOCOLS: QuizQuestion[] = [
  {
    id: "sd-email-protocols-1",
    post: "sd-email-protocols",
    question: "보내는 메일 서버가 bob@example.net의 메일을 넘길 서버를 찾는 방법은?",
    choices: [
      "example.net의 A 레코드로 웹 서버에 보낸다",
      "example.net의 MX 레코드를 조회해 우선순위 숫자가 작은 서버부터 시도한다",
      "example.net의 TXT 레코드에서 SPF를 읽는다",
      "IMAP 서버에 받는 사람이 있는지 묻는다",
    ],
    answer: 1,
    explanation:
      "MX 레코드는 이 도메인의 메일을 받는 서버와 우선순위를 적는다. 실험에서도 우선순위 10인 mx1이 연결을 거부하자 20인 mx2로 넘어가 전달했다. A 레코드는 MX가 아예 없을 때만 쓰인다.",
    anchor: "받는-서버는-dns의-mx가-알려-준다",
  },
  {
    id: "sd-email-protocols-2",
    post: "sd-email-protocols",
    question: "SMTP 대화에서 RCPT TO에 451 응답을 받았다. 보내는 쪽은 어떻게 해야 하나?",
    choices: [
      "즉시 반송 메일을 만들고 주소를 목록에서 뺀다",
      "같은 연결에서 곧바로 RCPT TO를 반복한다",
      "큐에 다시 넣고 간격을 늘려 가며 나중에 재시도한다",
      "다른 사용자의 메일함에 넣는다",
    ],
    answer: 2,
    explanation:
      "첫 자리가 4인 응답은 잠시 실패라 나중에 다시 오라는 뜻이다. 즉시 반송은 550 같은 5xx에서 하는 일이고, 4xx를 실패로 버리면 그레이리스팅에 걸린 정상 메일까지 잃는다.",
    anchor: "smtp-대화-한-번",
  },
  {
    id: "sd-email-protocols-3",
    post: "sd-email-protocols",
    question: "숨은 참조(Bcc)가 가능한 이유로 알맞은 것은?",
    choices: [
      "받는 사람을 봉투의 RCPT TO에는 넣고 편지의 헤더에는 쓰지 않을 수 있어서",
      "DKIM이 Bcc 헤더를 서명에서 빼 주어서",
      "IMAP 서버가 Bcc 헤더를 지워서",
      "DMARC 정책이 숨김을 허락해서",
    ],
    answer: 0,
    explanation:
      "서버는 봉투의 MAIL FROM, RCPT TO만 보고 배달하고, 앱은 DATA 안의 From, To 헤더를 보여 준다. 둘이 따로 적히기 때문에 Bcc가 가능하고, 같은 이유로 From을 아무 주소로나 적는 사칭도 가능하다.",
    anchor: "smtp-대화-한-번",
  },
  {
    id: "sd-email-protocols-4",
    post: "sd-email-protocols",
    question: "휴대폰에서 읽은 메일이 노트북에서도 읽음으로 보이는 이유는?",
    choices: [
      "POP3가 읽음 상태를 기기끼리 직접 주고받아서",
      "SMTP가 읽음 확인 메일을 보내서",
      "DNS TTL이 지나면 상태가 동기화되어서",
      "IMAP은 메일과 읽음 표시, 폴더를 서버에 두고 기기는 그 상태를 비춰 보기 때문에",
    ],
    answer: 3,
    explanation:
      "IMAP에서 상태의 원본은 서버 하나다. POP3는 기본적으로 메일을 기기로 내려받고 서버에서 지워서, 다른 기기에서는 그 메일 자체를 볼 수 없을 수 있다.",
    anchor: "꺼내-읽기-pop3-imap-그리고-http",
  },
  {
    id: "sd-email-protocols-5",
    post: "sd-email-protocols",
    question:
      "공격자가 SPF를 통과하는 자기 도메인을 봉투에 적고, 화면의 From에는 bank.example을 적었다. 이것을 막는 장치는?",
    choices: [
      "SPF의 -all",
      "DMARC: 통과한 SPF나 DKIM의 도메인이 From 도메인과 일치하는지 본다",
      "MX 우선순위",
      "STARTTLS",
    ],
    answer: 1,
    explanation:
      "SPF는 봉투의 MAIL FROM 도메인만 보기 때문에 공격자 도메인 기준으로 통과한다. DMARC는 화면에 보이는 From 도메인과 정렬된 인증이 있어야 통과시키고, 없으면 도메인 주인의 정책대로 거절하거나 스팸함으로 보낸다.",
    anchor: "아무나-남의-주소를-적을-수-있다",
  },
  {
    id: "sd-email-protocols-6",
    post: "sd-email-protocols",
    question: "서명한 뒤 중간에서 본문 끝에 한 줄이 붙었는데 DMARC가 pass였다. 왜인가?",
    choices: [
      "DKIM은 본문을 검사하지 않아서",
      "relaxed 정규화가 붙은 줄을 지워서",
      "DKIM은 깨졌지만 SPF가 통과했고 그 도메인이 From과 같아서, 둘 중 하나만 맞으면 되는 DMARC가 통과했다",
      "p=reject가 본문 변경은 허락해서",
    ],
    answer: 2,
    explanation:
      "본문 해시가 달라져 dkim=fail이 됐지만, 허락된 IP에서 보냈고 봉투 도메인이 From과 같아 spf=pass로 정렬됐다. 반대로 전달 과정에서 IP와 본문이 둘 다 바뀌면 두 장치가 모두 깨져 정상 메일이 거절될 수 있다.",
    anchor: "아무나-남의-주소를-적을-수-있다",
  },
  {
    id: "sd-email-protocols-7",
    post: "sd-email-protocols",
    question: "새로 연 서비스가 인증 메일과 마케팅 메일을 보낼 때 권장되는 구성은?",
    choices: [
      "평판을 모으려고 둘을 같은 IP로 보낸다",
      "둘을 다른 IP나 하위 도메인으로 나누고, 새 IP는 적은 양부터 늘린다",
      "첫날부터 전체 목록에 보내 평판을 빨리 쌓는다",
      "DMARC를 바로 p=reject로 시작한다",
    ],
    answer: 1,
    explanation:
      "마케팅 메일의 스팸 신고가 쌓여도 인증 메일까지 막히지 않게 흐름을 나눈다. 평판 없는 IP가 갑자기 몰아 보내면 거절되기 쉬우니 웜업을 하고, DMARC는 p=none 보고서로 발송처를 다 맞춘 뒤 올린다.",
    anchor: "스팸함으로-가지-않으려면",
  },
];
