import type { QuizQuestion } from "../types";

export const SQLD_ENTITY_ATTRIBUTE_RELATIONSHIP: QuizQuestion[] = [
  {
    id: "sqld-entity-attribute-relationship-1",
    post: "sqld-entity-attribute-relationship",
    question: "다음 중 엔터티의 특징으로 옳지 않은 것은?",
    choices: [
      "업무에서 필요하고 관리하려는 정보여야 한다",
      "인스턴스가 하나만 있어도 엔터티가 될 수 있다",
      "유일한 식별자로 인스턴스를 구분할 수 있어야 한다",
      "업무 프로세스가 그 엔터티를 이용해야 한다",
    ],
    answer: 1,
    explanation:
      "엔터티는 인스턴스가 두 개 이상인 집합이어야 한다. '우리 학원'처럼 하나뿐인 것은 엔터티로 두지 않고 설정값으로 충분하다.",
    anchor: "엔터티가-되려면-갖춰야-할-것",
  },
  {
    id: "sqld-entity-attribute-relationship-2",
    post: "sqld-entity-attribute-relationship",
    question: "두 개 이상의 부모 엔터티에서 생기고, 내용이 자주 바뀌거나 계속 늘어나며, 상세 설계 단계에서 주로 도출되는 엔터티는?",
    choices: ["기본 엔터티", "중심 엔터티", "개념 엔터티", "행위 엔터티"],
    answer: 3,
    explanation:
      "행위 엔터티의 정의다. 출석, 주문 목록, 사원 변경 이력이 대표적이다. 중심 엔터티는 기본 엔터티에서 생기는 업무의 중심(주문, 계약)이고, 개념 엔터티는 유무형 기준의 분류라 축이 다르다.",
    anchor: "엔터티를-나누는-두-가지-기준",
  },
  {
    id: "sqld-entity-attribute-relationship-3",
    post: "sqld-entity-attribute-relationship",
    question: "강좌의 '현재 신청 인원'처럼 다른 데이터에서 계산되는 속성을 저장할 때의 문제로 가장 알맞은 것은?",
    choices: [
      "원본이 바뀔 때 함께 고치지 않으면 값이 어긋난다",
      "설계 속성이라 업무 담당자가 이해하지 못한다",
      "기본 키로 쓸 수 없어서 조인이 안 된다",
      "NULL이 들어갈 수 없다",
    ],
    answer: 0,
    explanation:
      "파생 속성은 원본과 따로 저장되니 갱신을 빠뜨리면 실제 인원과 달라진다. 그래서 가급적 적게 두고, 두더라도 같은 트랜잭션이나 트리거로 함께 갱신하고 검증 쿼리를 돌린다.",
    anchor: "속성은-더-쪼갤-수-없는-값-하나",
  },
  {
    id: "sqld-entity-attribute-relationship-4",
    post: "sqld-entity-attribute-relationship",
    question: "학생 연락처는 학생마다 유일하지만 주식별자로 쓰지 않았다. 주로 어떤 조건 때문인가?",
    choices: ["유일성", "최소성", "불변성", "존재성"],
    answer: 2,
    explanation:
      "연락처는 학생이 바꿀 수 있어서, 주식별자로 쓰면 바뀔 때마다 그 값을 외래 키로 가진 모든 자식을 고쳐야 한다. 그래서 보조식별자(UNIQUE)로 두고 바뀌지 않는 학생번호를 주식별자로 쓴다.",
    anchor: "식별자-인스턴스-하나를-집어내는-열쇠",
  },
  {
    id: "sqld-entity-attribute-relationship-5",
    post: "sqld-entity-attribute-relationship",
    question: "(학생, 강좌)만으로 수강신청이 유일할 때, (학생, 강좌, 신청일)을 주식별자로 쓰면 어긋나는 조건은?",
    choices: ["유일성", "최소성", "존재성", "대표성"],
    answer: 1,
    explanation:
      "신청일을 빼도 유일하니 그 속성은 군더더기이고 최소성이 깨진다. 유일하기만 하고 최소가 아닌 묶음은 슈퍼키라고 부른다.",
    anchor: "식별자-인스턴스-하나를-집어내는-열쇠",
  },
  {
    id: "sqld-entity-attribute-relationship-6",
    post: "sqld-entity-attribute-relationship",
    question: "수강신청의 주식별자를 (학생, 강좌)로 하는 식별 관계로 만들었더니 생긴 문제로 알맞은 것은?",
    choices: [
      "학생과 강좌의 외래 키를 걸 수 없다",
      "강좌별 출석을 집계하려면 반드시 조인이 하나 더 필요하다",
      "취소한 학생이 같은 강좌를 다시 신청하면 기본 키 중복으로 막힌다",
      "같은 학생이 진행 중인 신청을 두 번 넣을 수 있다",
    ],
    answer: 2,
    explanation:
      "주식별자가 학생과 강좌 조합이라 취소된 신청과 새 신청을 구분할 수 없다. 비식별 관계로 끊고 enrollment_id를 주면 재신청이 가능하고, 진행 중 신청의 중복은 부분 유니크 인덱스로 막는다. 조인이 늘어나는 쪽은 오히려 비식별 관계다.",
    anchor: "식별-관계와-비식별-관계",
  },
  {
    id: "sqld-entity-attribute-relationship-7",
    post: "sqld-entity-attribute-relationship",
    question: "다음 중 비식별 관계를 고려하기에 가장 알맞은 경우는?",
    choices: [
      "자식이 부모와 생명 주기를 같이하고 부모 없이 존재할 수 없다",
      "부모의 식별자로 자식을 조인 없이 바로 찾고 싶다",
      "1:1 관계에서 자식의 기본 키를 부모를 가리키는 외래 키로 두고 싶다",
      "부모가 삭제되어도 자식 데이터는 남아야 한다",
    ],
    answer: 3,
    explanation:
      "부모가 지워져도 자식이 남아야 하거나, 자식이 부모 없이 생길 수 있거나, 자식이 독립된 식별자를 가져야 하면 비식별 관계를 쓴다. 나머지 셋은 부모의 식별자를 자식이 물려받는 식별 관계가 어울리는 경우다.",
    anchor: "식별-관계와-비식별-관계",
  },
];
