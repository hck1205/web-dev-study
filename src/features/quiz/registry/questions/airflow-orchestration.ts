import type { QuizQuestion } from "../types";

export const AIRFLOW_ORCHESTRATION: QuizQuestion[] = [
  {
    id: "airflow-orchestration-1",
    post: "airflow-orchestration",
    question: "CronDataIntervalTimetable(\"0 0 * * *\")인 DAG에서 logical_date가 10월 21일인 스케줄 실행은 언제 돌고 무엇을 처리하나?",
    choices: [
      "21일 0시에 돌고 20일 하루치를 처리한다",
      "21일 0시에 돌고 21일 하루치를 처리한다",
      "22일 0시 이후에 돌고 21일 하루치를 처리한다",
      "22일 0시 이후에 돌고 22일 하루치를 처리한다",
    ],
    answer: 2,
    explanation:
      "실행 하나는 [21일, 22일) 구간을 맡고, 구간이 닫힌 22일 0시 이후(run_after)에 돈다. logical_date는 구간 시작인 21일이다. 실험에서도 22일 03:24에 켠 DAG의 실행이 logical_date 21일로 생겼다.",
    anchor: "10월-21일-작업은-22일에-돈다",
  },
  {
    id: "airflow-orchestration-2",
    post: "airflow-orchestration",
    question: "Airflow 3에서 schedule=\"@daily\"로 쓴 DAG의 태스크가 data_interval_start로 \"어제 하루\"를 고르면 어떻게 되나?",
    choices: [
      "Airflow 2와 똑같이 어제 0시가 나온다",
      "기본 timetable이 구간 없는 CronTriggerTimetable이라 시작과 끝이 같아서 한 칸 밀린 날짜가 나온다",
      "data_interval_start가 None이라 오류가 난다",
      "catchup이 켜져 있어야만 값이 채워진다",
    ],
    answer: 1,
    explanation:
      "Airflow 3는 create_cron_data_intervals 기본값이 False라서 크론 문자열만 주면 CronTriggerTimetable을 쓴다. 실험 출력에서 @daily의 data_interval_start와 data_interval_end가 모두 25일 0시였다. 구간이 필요하면 CronDataIntervalTimetable을 명시한다.",
    anchor: "10월-21일-작업은-22일에-돈다",
  },
  {
    id: "airflow-orchestration-3",
    post: "airflow-orchestration",
    question: "원본이 몇 시간씩 늦는 날이 많다. 센서 수십 개가 기다리는 동안 다른 태스크가 queued에 멈추지 않게 하려면?",
    choices: [
      "poke_interval을 1초로 줄인다",
      "센서의 timeout을 없앤다",
      "retries를 늘린다",
      "mode=\"reschedule\"이나 deferrable 센서로 기다리는 동안 슬롯을 내려놓게 한다",
    ],
    answer: 3,
    explanation:
      "기본 poke 모드는 기다리는 내내 워커 슬롯을 잡는다. reschedule은 확인할 때만 슬롯을 쓰고, deferrable은 기다림을 triggerer의 비동기 루프에 넘긴다. timeout을 없애면 기본 7일을 기다리게 되어 오히려 나쁘다.",
    anchor: "원본이-오기-전에-시작하지-않게",
  },
  {
    id: "airflow-orchestration-4",
    post: "airflow-orchestration",
    question: "20일 실행의 aggregate 태스크를 clear해서 다시 돌렸더니 덧붙이는 DAG만 광고비가 113950에서 227900이 됐다. 올바른 고침은?",
    choices: [
      "그 구간의 행을 지우고 다시 넣는 일을 한 트랜잭션으로 해서 다시 돌려도 결과가 같게 만든다",
      "clear를 금지하고 재시도도 끈다",
      "XCom에 결과를 저장해 다음 실행이 확인하게 한다",
      "max_active_runs를 1로 줄인다",
    ],
    answer: 0,
    explanation:
      "재시도, clear, 백필이 모두 같은 태스크를 다시 돌리므로 태스크가 멱등해야 한다. 그날 행을 지우고 다시 쓰는 clicks_daily는 다시 돌려도 그대로였다. 파티션 갈아 끼우기나 키로 upsert하는 방법도 같은 목적이다.",
    anchor: "실패하면-다시-단-같은-결과로",
  },
  {
    id: "airflow-orchestration-5",
    post: "airflow-orchestration",
    question: "15일부터 21일까지 백필을 요청했는데 dry run에 15~20일 여섯 개만 나왔다. 이유는?",
    choices: [
      "to-date는 범위에 포함되지 않기 때문에",
      "catchup이 False라서 마지막 날을 빼기 때문에",
      "21일은 이미 성공한 실행이 있고 reprocess-behavior 기본값 none은 있는 날짜를 건드리지 않기 때문에",
      "21일 구간이 아직 닫히지 않았기 때문에",
    ],
    answer: 2,
    explanation:
      "--reprocess-behavior의 기본값 none은 실행이 이미 있는 날짜를 다시 만들지 않는다. failed는 실패한 날짜만, completed는 성공한 날짜까지 다시 돌린다. to-date는 포함되는 경계다.",
    anchor: "지난-일주일을-다시-계산해-달라는-요청",
  },
  {
    id: "airflow-orchestration-6",
    post: "airflow-orchestration",
    question: "집계 태스크가 수백 MB짜리 결과 목록을 return해서 다음 태스크에 넘기고 있다. 무엇이 문제이고 어떻게 바꾸나?",
    choices: [
      "반환값은 워커 메모리에만 있어 다음 태스크가 못 받는다. 전역 변수로 바꾼다",
      "기본 XCom은 메타데이터 DB의 행이라 DB와 스케줄러가 느려진다. 결과는 저장소에 쓰고 경로만 넘긴다",
      "XCom은 문자열만 받으므로 JSON으로 바꾼다",
      "문제없다. XCom은 자동으로 객체 저장소에 쓴다",
    ],
    answer: 1,
    explanation:
      "실험에서 aggregate의 반환값은 메타데이터 DB의 xcom 테이블에 한 줄로 들어갔다. 큰 값을 넣으면 DB가 무거워지니 레이크나 객체 저장소에 쓰고 XCom에는 경로와 행 수만 넘긴다. 꼭 필요하면 객체 저장소 XCom 백엔드로 바꾼다.",
    anchor: "태스크-사이에-넘기는-것은-이름표만",
  },
  {
    id: "airflow-orchestration-7",
    post: "airflow-orchestration",
    question: "DAG 파일 맨 위에서 DB의 테이블 목록을 읽어 태스크를 만들었더니, DB가 느린 날 DAG가 UI에서 사라졌다. 왜 그런가?",
    choices: [
      "스케줄러가 DB 연결을 하나만 허용해서",
      "DAG 파일은 실행될 때 한 번만 읽히는데 그때 실패해서",
      "XCom 테이블이 잠겨서",
      "dag-processor가 파일을 주기적으로(기본 30초) 다시 실행하고, 그 조회가 느려 파싱이 시간 초과로 실패해서",
    ],
    answer: 3,
    explanation:
      "DAG 파일의 최상위 코드는 파싱할 때마다 돈다. 바깥 시스템이 느리면 파싱이 실패하고 가져오기 오류가 되어 DAG가 목록에서 빠진다. 실행마다 달라지는 값은 태스크 안에서 읽고, 태스크 수가 달라지면 동적 태스크 매핑을 쓴다.",
    anchor: "dag-파일은-30초마다-다시-읽힌다",
  },
];
