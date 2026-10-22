import type { QuizQuestion } from "../types";

export const KAFKA_TO_LAKE_PIPELINE: QuizQuestion[] = [
  {
    id: "kafka-to-lake-pipeline-1",
    post: "kafka-to-lake-pipeline",
    question: "Structured Streaming의 마이크로배치에서 체크포인트의 offsets/N을 데이터 처리보다 먼저 적는 이유는?",
    choices: [
      "Kafka 소비자 그룹에 오프셋을 커밋하기 위해서",
      "중간에 죽어도 다시 시작할 때 같은 범위를 다시 읽게 하려고",
      "처리가 끝난 배치를 Kafka에서 지우기 위해서",
      "다음 배치의 크기를 미리 늘리기 위해서",
    ],
    answer: 1,
    explanation:
      "offsets는 실행 전에 범위를 적는 write-ahead log다. 죽은 뒤 commits에 N이 없으면 Spark는 offsets/N에 적힌 같은 범위로 그 배치를 다시 실행한다. Structured Streaming은 소비자 그룹에 오프셋을 커밋하지 않는다.",
    anchor: "마이크로배치-하나가-커밋되는-순서",
  },
  {
    id: "kafka-to-lake-pipeline-2",
    post: "kafka-to-lake-pipeline",
    question: "6번 배치가 _spark_metadata/6까지 적고 commits/6을 남기기 전에 kill -9로 죽었다. 다시 시작하면?",
    choices: [
      "6번을 건너뛰고 7번부터 시작해 6번 데이터가 빠진다",
      "6번 데이터 파일이 한 번 더 테이블에 추가되어 중복이 생긴다",
      "6번을 같은 범위로 다시 실행하지만, 싱크가 로그에 6이 있는 걸 보고 쓰기를 건너뛴다",
      "체크포인트가 깨져 처음부터 다시 읽는다",
    ],
    answer: 2,
    explanation:
      "commits의 마지막이 5라서 6번을 다시 실행한다. 파일 싱크는 자기 커밋 로그에 이미 있는 배치의 쓰기를 건너뛰므로 실행은 두 번이어도 결과는 한 번이다. 실험에서 다시 시작한 뒤 루트로 세면 5만 건, 중복 0이었다.",
    anchor: "실행-중에-kill--9를-날려-봤다",
  },
  {
    id: "kafka-to-lake-pipeline-3",
    post: "kafka-to-lake-pipeline",
    question: "같은 스트림 싱크 테이블을 루트 경로로 읽으면 80,000건, dt=2026-10-21 폴더를 직접 읽으면 84,998건이다. 원인은?",
    choices: [
      "폴더를 직접 읽으면 _spark_metadata를 보지 않아 죽은 배치가 남긴 파일까지 읽기 때문에",
      "루트로 읽으면 Spark가 샘플링을 하기 때문에",
      "폴더 직접 읽기는 압축을 풀지 않아 행 수가 다르게 나오기 때문에",
      "Kafka가 같은 메시지를 두 번 보냈기 때문에",
    ],
    answer: 0,
    explanation:
      "파일 싱크의 정확히 한 번은 싱크 로그를 읽는 리더가 루트로 읽을 때만 통한다. 하위 폴더에는 로그가 없어서 목록에 오르지 못한 파일과 재실행이 다시 쓴 파일이 함께 읽혀 4,998건이 중복됐다. 여러 엔진이 읽을 레이크라면 테이블 포맷으로 쓰는 편이 안전하다.",
    anchor: "폴더를-직접-읽으면-중복이-보인다",
  },
  {
    id: "kafka-to-lake-pipeline-4",
    post: "kafka-to-lake-pipeline",
    question: "Structured Streaming 작업의 랙을 보려고 kafka-consumer-groups.sh --list를 쳤더니 아무것도 안 나온다. 왜인가?",
    choices: [
      "작업이 멈춰 있어서",
      "Kafka 4에서는 소비자 그룹 명령이 없어져서",
      "랙이 0이면 그룹이 목록에서 숨겨져서",
      "Structured Streaming은 진행 위치를 소비자 그룹이 아니라 체크포인트에 적어서",
    ],
    answer: 3,
    explanation:
      "Structured Streaming은 파티션을 직접 배정받아 읽고 오프셋을 체크포인트에 적는다. 그래서 랙은 토픽 끝 오프셋과 체크포인트의 마지막 offsets 범위를 비교하거나, 쿼리 진행 정보를 지표로 내보내 본다. Kafka Connect 싱크는 반대로 소비자 그룹 오프셋을 쓴다.",
    anchor: "폴더를-직접-읽으면-중복이-보인다",
  },
  {
    id: "kafka-to-lake-pipeline-5",
    post: "kafka-to-lake-pipeline",
    question: "일일 배치가 21일 파티션만 갈아 끼우려고 mode(\"overwrite\").partitionBy(\"dt\")로 썼는데 다른 날짜가 다 사라졌다. 빠진 설정은?",
    choices: [
      "spark.sql.shuffle.partitions",
      "spark.sql.sources.partitionOverwriteMode=dynamic",
      "maxOffsetsPerTrigger",
      "spark.sql.adaptive.enabled",
    ],
    answer: 1,
    explanation:
      "기본 overwrite는 대상 테이블 전체를 지우고 쓴다. partitionOverwriteMode를 dynamic으로 두면 이번에 쓰는 파티션만 바꾸고 나머지는 건드리지 않는다. 그래야 Airflow 백필로 하루씩 다시 돌려도 안전하다.",
    anchor: "5초마다-파일이-생긴다",
  },
  {
    id: "kafka-to-lake-pipeline-6",
    post: "kafka-to-lake-pipeline",
    question: "이벤트 시각 20일 23:58인 클릭이 21일에 늦게 도착했다. 이벤트 시각으로 dt를 정하는 상태 없는 파일 적재 스트림에서 이 클릭은?",
    choices: [
      "워터마크가 0이라 버려진다",
      "21일 폴더로 들어간다",
      "이미 닫힌 20일 폴더에 추가되어, 20일 숫자를 다시 계산해야 한다",
      "스트림이 실패한다",
    ],
    answer: 2,
    explanation:
      "상태 없는 적재에서 워터마크는 아무것도 버리지 않는다. 실험에서도 100건이 dt=2026-10-20 폴더에 새로 생겼다. 그래서 하루 배치를 자정 뒤 몇 시간 기다렸다 돌리고, 그 뒤에 열린 날짜는 멱등한 배치로 다시 계산한다.",
    anchor: "늦게-온-클릭은-이미-닫힌-날로-간다",
  },
  {
    id: "kafka-to-lake-pipeline-7",
    post: "kafka-to-lake-pipeline",
    question: "생산자가 cost를 숫자 대신 문자열 \"100\"으로 보내기 시작했다. from_json(기본 PERMISSIVE)으로 푸는 스트림에서 일어나는 일은?",
    choices: [
      "작업은 계속 돌고 그 레코드의 cost만 NULL이 되어 합계가 조용히 모자란다",
      "작업이 형 변환 오류로 바로 멈춘다",
      "Spark가 문자열을 자동으로 숫자로 바꿔 넣는다",
      "그 레코드 전체가 버려지고 경고 로그가 남는다",
    ],
    answer: 0,
    explanation:
      "PERMISSIVE 모드는 맞지 않는 필드만 비우고 레코드는 살린다. 실험에서 100건의 cost가 NULL로 들어갔다. 스키마 레지스트리로 호환되지 않는 변경을 막고, 필수 필드의 NULL 비율을 지표로 지켜보는 이유다.",
    anchor: "형식이-바뀐-날은-조용히-틀린다",
  },
];
