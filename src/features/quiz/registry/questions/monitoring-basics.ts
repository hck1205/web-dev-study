import type { QuizQuestion } from "../types";

export const MONITORING_BASICS: QuizQuestion[] = [
  {
    id: "monitoring-basics-1",
    post: "monitoring-basics",
    question: "DB 연결이 끊긴 뒤 평균 응답 시간 그래프가 오히려 내려갔다. 가장 그럴듯한 이유는?",
    choices: [
      "DB가 끊기면 앱의 CPU가 남아서 빨라진다",
      "아주 빨리 실패하는 500 응답이 섞여 평균을 끌어내렸다",
      "Prometheus가 실패한 요청을 지연 계산에서 빼기 때문이다",
      "히스토그램 칸 경계 때문에 생기는 착시다",
    ],
    answer: 1,
    explanation:
      "연결이 없으면 요청이 1ms 만에 500으로 끝나 평균 지연을 낮춘다. 그래서 지연은 성공과 실패를 나눠 보고, 평균 대신 분포로 본다.",
    anchor: "사용자-쪽에서-보는-네-가지-숫자",
  },
  {
    id: "monitoring-basics-2",
    post: "monitoring-basics",
    question: "주문 서비스 프로세스가 멈춰(kill -STOP) 요청을 처리하지 못하는 동안, 앱 지표로 만든 오류율 쿼리는 어떻게 보이나?",
    choices: ["100%로 치솟는다", "0%로 유지된다", "빈 결과가 되어 '오류율 > 5%' 알림이 울리지 않는다", "직전 값이 그대로 이어진다"],
    answer: 2,
    explanation:
      "scrape가 실패하면 Prometheus가 그 대상의 시계열에 staleness 표시를 찍어 지우니 쿼리 결과가 비어 버린다. 비교할 값이 없으니 오류율 알림도 조용하다. 그래서 up == 0, absent(), 바깥 탐침 실패에 따로 알림을 건다.",
    anchor: "안에서-세기와-밖에서-두드리기",
  },
  {
    id: "monitoring-basics-3",
    post: "monitoring-basics",
    question: "USE 방법에서 CPU의 Saturation을 가장 잘 보여 주는 숫자는?",
    choices: [
      "CPU 사용률 55%",
      "실행을 기다린 시간 비율(PSI)이나 코어당 load",
      "CPU 코어 수",
      "프로세스가 쓴 누적 CPU 시간",
    ],
    answer: 1,
    explanation:
      "Saturation은 자원이 감당 못 해 쌓인 일이다. CPU라면 실행을 기다린 시간(PSI)이나 코어 수보다 큰 load가 그것이다. 사용률은 Utilization 칸에 들어간다.",
    anchor: "자원은-use로",
  },
  {
    id: "monitoring-basics-4",
    post: "monitoring-basics",
    question: "'node_load1 / count(node_cpu_seconds_total{mode=\"idle\"})'가 오류 없이 빈 결과를 냈다. 이유는?",
    choices: [
      "node_load1은 게이지라 나눌 수 없다",
      "두 쪽 레이블이 달라 짝지을 시계열이 없다. on(instance)와 count by (instance)로 맞춰야 한다",
      "count는 정수만 돌려줘서 나눗셈이 버려진다",
      "load는 rate를 씌워야 한다",
    ],
    answer: 1,
    explanation:
      "PromQL의 벡터 연산은 레이블이 같은 것끼리 짝을 짓는다. 왼쪽에는 instance, job이 있고 오른쪽 count 결과에는 레이블이 없어 짝이 없으니 조용히 빈 결과가 된다. 짝지을 레이블을 맞춰 주면 값이 나온다.",
    anchor: "자원은-use로",
  },
  {
    id: "monitoring-basics-5",
    post: "monitoring-basics",
    question: "Prometheus의 pull 방식이 push보다 나은 점으로 가장 알맞은 것은?",
    choices: [
      "짧게 끝나는 배치 작업도 놓치지 않는다",
      "방화벽 안쪽 대상에도 별도 구성 없이 닿는다",
      "읽으러 갔다가 실패하면 그 자체로 대상이 죽었다는 신호(up=0)가 된다",
      "앱이 저장소 주소를 알아야 해서 설정이 명확하다",
    ],
    answer: 2,
    explanation:
      "pull은 scrape 성공 여부가 곧 생존 신호라 대상이 조용한 이유가 죽어서인지 할 일이 없어서인지 구분된다. 짧은 배치를 놓치는 것과 네트워크로 닿아야 하는 것은 오히려 pull의 약점이다.",
    anchor: "prometheus는-가지러-간다",
  },
  {
    id: "monitoring-basics-6",
    post: "monitoring-basics",
    question: "1분 동안 도는 배치 작업을 Pushgateway로 모니터링할 때 가장 안전한 방법은?",
    choices: [
      "처리한 건수만 밀어 넣고 0이 되면 알린다",
      "마지막 성공 시각을 밀어 넣고 time()과의 차이가 너무 크면 알린다",
      "Pushgateway의 up을 작업의 생존으로 본다",
      "작업마다 Prometheus를 하나씩 띄운다",
    ],
    answer: 1,
    explanation:
      "Pushgateway는 받은 값을 지울 때까지 계속 보여 줘서, 작업이 죽어도 마지막 값이 멀쩡해 보인다. 마지막 성공 시각을 밀어 넣으면 작업이 안 돌기 시작한 것을 시간 차이로 잡을 수 있다.",
    anchor: "prometheus는-가지러-간다",
  },
  {
    id: "monitoring-basics-7",
    post: "monitoring-basics",
    question: "가용률이 둘 다 50%인 대상 A(45초 다운 한 번)와 B(1분마다 깜빡임)를 보고 내릴 결론으로 맞는 것은?",
    choices: [
      "가용률이 같으니 같은 문제로 보고 같은 조치를 한다",
      "가용률 숫자 하나로는 장애 모양이 안 보이니 가장 긴 다운 시간과 횟수를 같이 본다",
      "B는 scrape 오류일 뿐이니 무시한다",
      "A가 더 심각하다. 연속 다운이 있기 때문이다",
    ],
    answer: 1,
    explanation:
      "같은 50%라도 한 번의 긴 장애와 잦은 깜빡임은 사용자가 겪는 일도 원인도 다르다. 가장 긴 다운 시간, 재시작 횟수(changes(process_start_time_seconds))를 함께 봐야 무엇을 고칠지 정해진다.",
    anchor: "모니터링을-들일-때-자주-하는-실수",
  },
];
