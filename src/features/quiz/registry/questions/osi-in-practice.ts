import type { QuizQuestion } from "../types";

export const OSI_IN_PRACTICE: QuizQuestion[] = [
  {
    id: "osi-in-practice-1",
    post: "osi-in-practice",
    question: "curl이 `certificate has expired` 오류를 냈다. 이 메시지로 알 수 있는 것은?",
    choices: [
      "DNS 서버가 응답하지 않았다",
      "서버 방화벽이 443번을 막았다",
      "이름 풀이와 TCP 연결은 이미 성공했고 TLS 단계에서 실패했다",
      "nginx가 뒤쪽 앱에서 응답을 받지 못했다",
    ],
    answer: 2,
    explanation:
      "TLS 오류는 TCP 연결 위에서 TLS 라이브러리가 만드는 메시지라, 그 아래의 DNS와 TCP 연결은 이미 정상이라는 뜻이다. 방화벽이 막았다면 TLS까지 가지 못하고 연결 단계에서 timeout이 났을 것이다.",
    anchor: "에러-메시지는-어느-층이-말했는지-알려-준다",
  },
  {
    id: "osi-in-practice-2",
    post: "osi-in-practice",
    question: "서버에서 `ss -ltnp`로 9000번이 `0.0.0.0:9000` LISTEN인데, 클라이언트는 `Connection refused`를 받는다. 가장 먼저 의심할 것은?",
    choices: [
      "서버 방화벽의 REJECT 규칙",
      "DNS 레코드 오타",
      "MTU 블랙홀",
      "클라이언트의 ARP 캐시",
    ],
    answer: 0,
    explanation:
      "REJECT는 ICMP port unreachable을 돌려주고, 리눅스는 이걸 RST와 같은 ECONNREFUSED로 앱에 알린다. 그래서 앱이 떠 있어도 refused가 나온다. DROP이었다면 refused가 아니라 timeout이 났을 것이다.",
    anchor: "같은-메시지가-다른-층에서-나오기도-한다",
  },
  {
    id: "osi-in-practice-3",
    post: "osi-in-practice",
    question: "트래픽이 적은 시간대에만 가끔 502가 나고 앱 로그에는 그 요청이 없다. 앱의 keep-alive는 5초, L7 로드 밸런서의 idle timeout은 60초다. 어떻게 고치나?",
    choices: [
      "로드 밸런서의 idle timeout을 5초보다 짧게 줄인다",
      "앱의 keep-alive를 로드 밸런서 idle timeout보다 길게 늘린다",
      "헬스 체크를 TCP로 바꾼다",
      "로드 밸런서를 L4로 바꾼다",
    ],
    answer: 1,
    explanation:
      "앱이 먼저 닫은 연결에 로드 밸런서가 새 요청을 실으면 RST가 돌아오고, 로드 밸런서가 502를 만든다. 재사용하는 쪽인 로드 밸런서가 먼저 닫도록 앱의 keep-alive를 65초처럼 더 길게 두는 게 보통의 처방이다.",
    anchor: "로드-밸런서는-어느-층에서-나누느냐로-고른다",
  },
  {
    id: "osi-in-practice-4",
    post: "osi-in-practice",
    question: "gRPC 서비스를 L4 로드 밸런서(쿠버네티스 기본 Service) 뒤에 두었더니 Pod 하나만 CPU가 치솟는다. 이유는?",
    choices: [
      "L4 로드 밸런서는 UDP만 분산한다",
      "gRPC는 TLS를 쓰지 않아 분산되지 않는다",
      "L4는 연결 단위로 나누는데 gRPC는 연결 하나로 요청을 계속 보낸다",
      "Pod의 readiness probe가 실패했다",
    ],
    answer: 2,
    explanation:
      "L4 로드 밸런서는 새 연결이 올 때만 대상을 고르고 그 연결의 바이트는 끝까지 같은 곳으로 보낸다. HTTP/2 기반 gRPC는 연결 하나에 요청을 몰아 보내니 처음 붙은 Pod로 모두 간다. 요청 단위로 나누는 L7이나 클라이언트 쪽 분산이 필요하다.",
    anchor: "로드-밸런서는-어느-층에서-나누느냐로-고른다",
  },
  {
    id: "osi-in-practice-5",
    post: "osi-in-practice",
    question: "보안 그룹 규칙은 맞는데 서브넷의 NACL에서 들어오는 443만 열었다. 어떤 증상이 나오나?",
    choices: [
      "WAF 차단 페이지와 함께 403이 온다",
      "요청은 들어가지만 응답이 나가지 못해 timeout이 난다",
      "Connection refused가 바로 온다",
      "TLS 인증서 오류가 난다",
    ],
    answer: 1,
    explanation:
      "NACL은 상태를 기억하지 않아서 응답이 나가는 임시 포트도 따로 열어야 한다. 응답 패킷이 조용히 버려지니 클라이언트는 기다리다 timeout을 받는다. 403은 L7에서 요청 내용을 읽는 WAF가 막을 때의 모양이다.",
    anchor: "방화벽도-층마다-따로-있다",
  },
  {
    id: "osi-in-practice-6",
    post: "osi-in-practice",
    question: "로드 밸런서 헬스 체크를 TCP 연결 확인(L4)으로만 하면 생기는 문제는?",
    choices: [
      "헬스 체크 요청이 너무 무거워 서버에 부하가 간다",
      "TLS 인증서가 없으면 체크가 항상 실패한다",
      "DB가 잠깐 느려지면 모든 서버가 한꺼번에 빠진다",
      "앱이 멈춰도 커널이 연결을 맺어 주므로 건강하다고 판단할 수 있다",
    ],
    answer: 3,
    explanation:
      "TCP 연결은 앱이 아니라 커널이 맺어 주기 때문에 프로세스만 살아 있으면 앱 스레드가 멈춰도 통과한다. 그래서 HTTP로 실제 처리 여부를 묻는 게 낫다. 모든 서버가 한꺼번에 빠지는 건 반대로 헬스 체크에 DB 같은 공유 의존성까지 넣었을 때의 문제다.",
    anchor: "헬스-체크는-어느-층까지-물어보나",
  },
];
