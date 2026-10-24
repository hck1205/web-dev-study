import type { QuizQuestion } from "../types";

export const PHISHING_SOCIAL_ENGINEERING: QuizQuestion[] = [
  {
    id: "phishing-social-engineering-1",
    post: "phishing-social-engineering",
    question: "대표 이름으로 \"오늘 안에 송금해 주세요. 공시 전이라 다른 분께는 말하지 마세요\"라는 메일이 왔다. '말하지 마세요'라는 문장이 노리는 것은?",
    choices: [
      "메일 필터가 본문을 스팸으로 분류하지 못하게 하는 것",
      "다른 사람에게 확인하는 길을 미리 막아 속임수가 드러나지 않게 하는 것",
      "받는 사람이 메일을 보관함으로 옮기게 하는 것",
      "DMARC 검사를 피하는 것",
    ],
    answer: 1,
    explanation:
      "사회 공학은 권위, 긴급함, 비밀 유지, 익숙함을 함께 누른다. 비밀 유지 요구는 동료나 본인에게 다시 확인하는 순간 공격이 드러나기 때문에 그 길을 먼저 막으려는 장치다. 기술 검사와는 관계가 없다.",
    anchor: "사람을-움직이는-버튼은-몇-개-안-된다",
  },
  {
    id: "phishing-social-engineering-2",
    post: "phishing-social-engineering",
    question: "`https://example.com.login-verify.net/account/verify?next=example.com` 링크를 누르면 요청은 누구의 서버로 가나?",
    choices: [
      "example.com, 주소 맨 앞에 있기 때문이다",
      "example.com, 쿼리 문자열의 next 값이 목적지를 정하기 때문이다",
      "login-verify.net, 공개 접미사 바로 앞의 등록 도메인이 주인을 정하기 때문이다",
      "HTTPS 인증서를 발급한 CA의 서버다",
    ],
    answer: 2,
    explanation:
      "도메인 주인은 자기 도메인 앞에 무엇이든 하위 이름으로 붙일 수 있다. 실제 주인은 .net 바로 앞의 login-verify.net이고, 경로와 쿼리에 적힌 example.com은 장식일 뿐이다.",
    anchor: "주소창의-진짜-주인은-오른쪽에-있다",
  },
  {
    id: "phishing-social-engineering-3",
    post: "phishing-social-engineering",
    question: "DMARC를 처음 도입할 때 바로 p=reject를 걸지 않고 p=none부터 시작하는 이유는?",
    choices: [
      "p=reject는 하위 도메인에만 적용되기 때문이다",
      "p=none이어야 SPF 레코드를 읽을 수 있기 때문이다",
      "받는 서버들이 p=reject를 첫 30일 동안 무시하기 때문이다",
      "SPF·DKIM 설정이 빠진 우리 쪽 발송 서비스가 있으면 그 메일이 모두 거절되므로, 보고서로 먼저 찾아 고쳐야 하기 때문이다",
    ],
    answer: 3,
    explanation:
      "마케팅, 고객 지원, 채용 같은 SaaS가 우리 도메인을 From에 쓰는 경우가 많다. p=none으로 보고서(rua)를 받아 정렬에 실패하는 우리 발송처를 고친 뒤 quarantine, reject로 올려야 정상 메일을 잃지 않는다.",
    anchor: "메일-사칭은-dns-레코드로-막는다",
  },
  {
    id: "phishing-social-engineering-4",
    post: "phishing-social-engineering",
    question: "우리 도메인 DMARC가 p=reject인데 ceo@examp1e.com에서 온 사칭 메일이 spf=pass, dkim=pass, dmarc=pass로 들어왔다. 왜인가?",
    choices: [
      "공격자가 유사 도메인을 직접 사서 그 도메인 기준으로 SPF와 DKIM을 제대로 설정했기 때문이다",
      "DMARC 정책은 수신 서버가 하루에 한 번만 갱신하기 때문이다",
      "p=reject는 첨부 파일이 있는 메일에만 적용되기 때문이다",
      "DKIM 서명이 있으면 DMARC 정책과 상관없이 통과하기 때문이다",
    ],
    answer: 0,
    explanation:
      "DMARC는 From에 우리 도메인을 그대로 쓴 메일만 판정한다. examp1e.com은 남의 도메인이라 그 주인이 설정한 대로 모두 통과한다. 유사 도메인 감시·선점, 외부 발신 배너, 송금 절차의 재확인으로 막아야 한다.",
    anchor: "비슷한-도메인은-dmarc가-막지-못한다",
  },
  {
    id: "phishing-social-engineering-5",
    post: "phishing-social-engineering",
    question: "TOTP 2단계 인증을 켠 계정이 실시간 피싱 프록시에 탈취됐다. 패스키였다면 막혔을 이유는?",
    choices: [
      "패스키는 6자리 대신 8자리 코드를 쓰기 때문이다",
      "패스키는 서명에 페이지의 출처가 들어가고 열쇠가 등록한 도메인에만 묶여 있어서 가짜 도메인에서는 열쇠가 나오지 않기 때문이다",
      "패스키는 30초가 아니라 10초만 유효하기 때문이다",
      "패스키는 비밀번호와 함께 써야만 동작하기 때문이다",
    ],
    answer: 1,
    explanation:
      "TOTP 코드는 어느 사이트에 입력됐는지 모르는 숫자라서 프록시가 그대로 진짜 사이트에 넘길 수 있다. 패스키는 rpId와 origin에 묶여 있어 사용자가 속아도 가짜 도메인에서는 인증이 성립하지 않는다.",
    anchor: "숫자-코드는-실시간-피싱에-뚫린다",
  },
  {
    id: "phishing-social-engineering-6",
    post: "phishing-social-engineering",
    question: "진짜 거래처의 메일 계정이 탈취되어 그 계정으로 \"입금 계좌가 바뀌었습니다\"라는 메일이 왔다. 가장 효과적인 방어는?",
    choices: [
      "DMARC 정책을 reject로 올린다",
      "메일 본문의 링크를 모두 재작성한다",
      "새 계좌는 보류하고, 메일에 적힌 번호가 아니라 원래 알던 연락처로 거래처에 다시 확인하는 절차를 둔다",
      "외부 메일에 배너를 붙인다",
    ],
    answer: 2,
    explanation:
      "탈취된 진짜 계정에서 오면 SPF, DKIM, DMARC가 모두 통과하고 링크도 없을 수 있다. 그래서 돈이 움직이는 일은 시스템이 보류와 다른 채널 확인을 강제하는 절차로 막는다.",
    anchor: "돈이-움직이는-일은-다른-길로-한-번-더-확인한다",
  },
  {
    id: "phishing-social-engineering-7",
    post: "phishing-social-engineering",
    question: "우리 사이트가 외부 CDN 주소에서 스크립트를 불러 쓰다가, 그 도메인의 주인이 바뀌며 방문자에게 악성 코드가 전달됐다. 이를 막는 장치로 맞는 것은?",
    choices: [
      "스크립트를 직접 호스팅하거나 SRI 해시로 고정하고, CSP로 스크립트 출처를 좁힌다",
      "사이트에 DMARC 레코드를 추가한다",
      "로그인에 TOTP를 추가한다",
      "외부 링크 경고 화면을 둔다",
    ],
    answer: 0,
    explanation:
      "사이트 코드가 그대로여도 불러 쓰는 외부 스크립트가 바뀌면 사이트가 워터링 홀이 된다. SRI는 파일 해시가 다르면 실행을 막고, CSP는 허락한 출처의 스크립트만 실행하게 한다.",
    anchor: "웹을-거쳐-오는-함정",
  },
];
