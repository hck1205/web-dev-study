import type { QuizQuestion } from "../types";

export const RABBITMQ_BASICS: QuizQuestion[] = [
  {
    id: "rabbitmq-basics-1",
    post: "rabbitmq-basics",
    question: "프로듀서 로그엔 발행 성공이 찍히는데 큐가 비어 있고 에러도 없다. 가장 먼저 확인할 것은?",
    choices: [
      "컨슈머의 prefetch 값",
      "쿼럼 큐의 배달 한도",
      "익스체인지에 그 라우팅 키로 묶인 바인딩이 있는지",
      "브로커의 메모리 경보",
    ],
    answer: 2,
    explanation:
      "RabbitMQ는 맞는 바인딩이 없는 메시지를 기본으로 조용히 버린다. list_bindings로 키를 확인하고, mandatory 플래그를 켜면 312 NO_ROUTE 반환으로 이런 메시지를 알 수 있다.",
    anchor: "갈-곳-없는-메시지를-잡는-법",
  },
  {
    id: "rabbitmq-basics-2",
    post: "rabbitmq-basics",
    question: "topic 익스체인지에 order.# 로 묶인 큐는 라우팅 키 order 인 메시지를 받나?",
    choices: [
      "받는다. # 는 0개 이상의 단어에 맞기 때문이다",
      "받지 않는다. # 뒤에 단어가 하나 이상 있어야 한다",
      "받지 않는다. topic은 점이 있는 키만 처리한다",
      "fanout으로 바꿔야 받는다",
    ],
    answer: 0,
    explanation:
      "# 는 0개 이상의 단어, * 는 정확히 한 단어다. 실제로 order.# 바인딩은 order 자체도 받았고, order.* 는 order.created는 받지만 order.created.kr는 받지 않았다.",
    anchor: "익스체인지-네-종류",
  },
  {
    id: "rabbitmq-basics-3",
    post: "rabbitmq-basics",
    question: "prefetch를 제한 없음(0)으로 둔 컨슈머 하나가 붙은 뒤 두 번째 컨슈머를 띄웠는데 아무것도 받지 못한다. 왜인가?",
    choices: [
      "두 번째 컨슈머의 큐 이름이 다르다",
      "첫 컨슈머가 큐의 메시지를 모두 unacked로 받아 가서 남은 게 없다",
      "쿼럼 큐는 컨슈머를 하나만 허용한다",
      "발행 확인을 켜지 않았기 때문이다",
    ],
    answer: 1,
    explanation:
      "제한이 없으면 브로커가 큐의 메시지를 첫 컨슈머에게 다 보낸다. 실험에서도 100개가 모두 unacked가 되고 ready는 0이었다. 그 컨슈머가 멈추면 연결이 끊길 때까지 아무도 처리하지 못한다.",
    anchor: "ack와-prefetch-컨슈머가-몇-개를-쥐고-있나",
  },
  {
    id: "rabbitmq-basics-4",
    post: "rabbitmq-basics",
    question: "channel.publish()만 쓰고 있다. 브로커가 그 순간 죽으면 무슨 일이 생길 수 있고, 무엇으로 막나?",
    choices: [
      "메시지가 자동으로 다른 노드에 저장되니 문제없다",
      "mandatory 플래그를 켜면 저장까지 보장된다",
      "메시지가 사라져도 프로듀서는 모른다. durable 큐, persistent 메시지, 발행 확인을 함께 쓴다",
      "컨슈머가 ack를 빨리 보내면 된다",
    ],
    answer: 2,
    explanation:
      "publish는 기본으로 응답을 기다리지 않으니 브로커가 받기 전에 죽으면 메시지를 잃는다. 확인 채널로 basic.ack를 받아야 브로커가 저장했다는 걸 안다. mandatory는 큐까지 라우팅됐는지만 알려 준다.",
    anchor: "브로커가-받았는지-확인하는-발행-확인",
  },
  {
    id: "rabbitmq-basics-5",
    post: "rabbitmq-basics",
    question: "RabbitMQ 3.12에서 4.0으로 올렸더니, 데드 레터 설정이 없던 쿼럼 큐에서 계속 실패하던 메시지가 사라졌다. 왜인가?",
    choices: [
      "4.0에서 쿼럼 큐가 클래식 큐로 바뀌었다",
      "4.0부터 쿼럼 큐에 배달 한도 20이 기본으로 걸려, 넘은 메시지가 버려졌다",
      "4.0에서 메시지 TTL 기본값이 생겼다",
      "4.0에서 nack가 없어졌다",
    ],
    answer: 1,
    explanation:
      "3.12에서는 x-delivery-limit을 직접 걸지 않으면 한도가 없다. 4.0부터는 기본 한도가 20이라 데드 레터 익스체인지가 없으면 한도를 넘은 메시지가 버려진다. 업그레이드 전에 DLX를 연결해 둔다.",
    anchor: "클래식-큐와-쿼럼-큐",
  },
  {
    id: "rabbitmq-basics-6",
    post: "rabbitmq-basics",
    question: "DLQ에 온 메시지의 x-death 헤더 reason이 expired다. 무엇을 뜻하나?",
    choices: [
      "컨슈머가 requeue=false로 거절했다",
      "큐 길이 한도를 넘어 밀려났다",
      "메시지 TTL이 지나 큐에서 빠졌다",
      "배달 한도를 넘었다",
    ],
    answer: 2,
    explanation:
      "reason은 rejected, expired, maxlen, delivery_limit 중 하나다. expired는 처리가 TTL보다 늦었다는 뜻이라 컨슈머 처리량이나 TTL 값을 본다. 지연 재시도용 대기 큐에서 원래 큐로 돌아갈 때도 같은 이유가 찍힌다.",
    anchor: "실패한-메시지를-보내는-데드-레터-익스체인지",
  },
  {
    id: "rabbitmq-basics-7",
    post: "rabbitmq-basics",
    question: "list_queues에서 messages_unacknowledged가 크고 줄지 않는다. 컨슈머 수는 정상이다. 가장 그럴듯한 원인은?",
    choices: [
      "컨슈머가 메시지를 받고 ack하지 않고 있다(멈춤, ack 누락, 큰 prefetch)",
      "프로듀서가 발행 확인을 기다리고 있다",
      "바인딩이 없다",
      "디스크 경보가 켜졌다",
    ],
    answer: 0,
    explanation:
      "unacked는 컨슈머에게 간 뒤 아직 ack가 오지 않은 메시지다. 컨슈머가 처리 중 멈췄거나 ack를 빼먹었거나 prefetch가 너무 크다. ack를 빼먹으면 재배포로 연결이 끊길 때마다 전부 다시 배달된다.",
    anchor: "큐가-쌓이거나-비었을-때-보는-순서",
  },
];
