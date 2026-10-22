import type { QuizQuestion } from "../types";

export const SPARK_BASICS: QuizQuestion[] = [
  {
    id: "spark-basics-1",
    post: "spark-basics",
    question: "df.filter(...).groupBy(...).agg(...)까지만 실행했다. Spark에서 실제로 일어난 일은?",
    choices: [
      "익스큐터가 데이터를 읽어 집계 결과를 메모리에 올려 둔다",
      "계획에 연산이 쌓였을 뿐 데이터를 읽는 잡은 돌지 않았다",
      "필터까지만 실행되고 집계는 액션을 기다린다",
      "셔플 파일만 미리 써 둔다",
    ],
    answer: 1,
    explanation:
      "filter, groupBy, agg는 모두 변환이라 계획만 쌓는다. 실험에서도 다섯 줄을 지나는 동안 잡 수가 늘지 않았다. collect, count, write 같은 액션을 불러야 Catalyst가 계획을 고쳐 실행한다.",
    anchor: "변환은-계획만-쌓고-액션이-실행한다",
  },
  {
    id: "spark-basics-2",
    post: "spark-basics",
    question: "같은 DataFrame으로 count()를 하고 이어서 write를 했다. 무엇을 조심해야 하나?",
    choices: [
      "count() 결과가 캐시되어 write가 옛 데이터를 쓴다",
      "count()가 DataFrame을 비워서 write가 빈 파일을 쓴다",
      "액션마다 계획이 다시 실행되어 원본을 두 번 읽을 수 있다",
      "두 액션이 동시에 돌아 파일이 깨진다",
    ],
    answer: 2,
    explanation:
      "지연 평가에서는 액션마다 계획이 실행된다. 여러 번 쓸 DataFrame은 cache()나 persist()로 붙잡고, 다 쓰면 unpersist()로 놓는다. 한 번만 쓰는 데이터를 습관처럼 캐시하면 메모리만 차지한다.",
    anchor: "변환은-계획만-쌓고-액션이-실행한다",
  },
  {
    id: "spark-basics-3",
    post: "spark-basics",
    question: "물리 계획에서 stage가 나뉘는 자리를 알려 주는 연산은?",
    choices: [
      "Exchange",
      "Project",
      "Filter",
      "ColumnarToRow",
    ],
    answer: 0,
    explanation:
      "Exchange는 셔플, 즉 키에 따라 데이터를 다른 익스큐터로 다시 나눠 보내는 지점이다. 앞 stage가 셔플 파일을 다 써야 뒤 stage가 시작하므로 여기서 stage가 잘린다. Project와 Filter는 좁은 변환이라 같은 태스크 안에서 이어진다.",
    anchor: "셔플이-stage를-자른다",
  },
  {
    id: "spark-basics-4",
    post: "spark-basics",
    question: "500바이트짜리 JSON 파일 1만 개를 읽었더니 파티션이 313개가 됐다. 이유는?",
    choices: [
      "파일 32개마다 Spark가 디렉터리 하나를 만들어서",
      "spark.sql.shuffle.partitions 기본값 200에 AQE가 113을 더해서",
      "코어 4개 × 78로 나눠서",
      "파일 하나를 열 때마다 4MB를 쓴 것으로 쳐서 128MB 파티션 하나에 약 32개씩 담아서",
    ],
    answer: 3,
    explanation:
      "파일 읽기 파티션은 maxPartitionBytes(128MB)까지 채우는데, 파일마다 openCostInBytes(4MB)를 더해 계산한다. 그래서 파티션 하나에 약 32개가 들어가 10,000 ÷ 32 ≈ 313이 된다. 묶어도 파일마다 열고 닫는 비용은 남아서 한 파일보다 40배 넘게 느렸다.",
    anchor: "파티션-수가-태스크-수다",
  },
  {
    id: "spark-basics-5",
    post: "spark-basics",
    question: "클릭 2000만 줄을 광고 표와 조인하는데 태스크 하나가 1224만 줄을 읽고 나머지는 24만 줄 남짓이다. 먼저 시도할 만한 것은?",
    choices: [
      "익스큐터 코어 수를 두 배로 늘린다",
      "AQE의 skew join이 켜져 있는지 보고, 안 되면 뜨거운 키에 소금을 쳐서 흩는다",
      "spark.sql.shuffle.partitions를 200에서 2000으로 늘린다",
      "결과를 coalesce(1)로 모은다",
    ],
    answer: 1,
    explanation:
      "같은 키는 반드시 같은 조각으로 가므로 조각 수나 코어 수를 늘려도 그 키는 태스크 하나에 남는다. AQE skew join은 큰 조각을 쪼개고 상대편을 복제하며, 실험에서 최대 행 수가 421만으로 줄었다. 소금 치기는 키 자체를 여러 개로 흩어 176만까지 낮췄다.",
    anchor: "키-하나에-몰리면-태스크-하나가-끝나지-않는다",
  },
  {
    id: "spark-basics-6",
    post: "spark-basics",
    question: "광고 표 500줄과 클릭 표를 조인했더니 계획에 BroadcastHashJoin이 나왔다. 이것이 빠른 이유는?",
    choices: [
      "작은 표를 익스큐터마다 복사해 두고 큰 표는 셔플 없이 제자리에서 찾기 때문에",
      "양쪽을 모두 정렬해서 병합하기 때문에",
      "드라이버가 조인을 혼자 처리하기 때문에",
      "결과를 디스크에 쓰지 않기 때문에",
    ],
    answer: 0,
    explanation:
      "브로드캐스트 해시 조인은 큰 쪽의 셔플을 통째로 없앤다. 자동 기준은 autoBroadcastJoinThreshold 10MB다. 양쪽을 셔플하고 정렬해 맞추는 것은 SortMergeJoin이고, 큰 표를 억지로 브로드캐스트하면 메모리가 터진다.",
    anchor: "작은-표는-통째로-보낸다",
  },
  {
    id: "spark-basics-7",
    post: "spark-basics",
    question: "광고비로 paid/free를 나누는 Python UDF를 F.when으로 바꿨더니 8배 빨라졌다. 가장 큰 이유는?",
    choices: [
      "F.when은 결과를 캐시하기 때문에",
      "Python UDF는 드라이버에서만 돌기 때문에",
      "UDF는 Spark가 안을 모르는 블랙박스라 최적화를 못 하고, 행을 JVM과 Python 사이로 오가게 하기 때문에",
      "Python UDF는 ANSI 모드에서 행마다 오류 검사를 하기 때문에",
    ],
    answer: 2,
    explanation:
      "계획의 BatchEvalPython이 JVM에서 Python 프로세스로 행을 직렬화해 보내는 자리다. 내장 함수는 코드 생성 덩어리 안에서 JVM이 바로 계산한다. Python이 꼭 필요하면 Arrow로 묶음째 넘기는 pandas_udf를 먼저 검토한다.",
    anchor: "rdd를-직접-쓰지-않게-된-이유",
  },
];
