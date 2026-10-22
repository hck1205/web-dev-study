import type { QuizQuestion } from "../types";

export const DATA_LAKE_HDFS: QuizQuestion[] = [
  {
    id: "data-lake-hdfs-1",
    post: "data-lake-hdfs",
    question: "HDFS 클라이언트가 300MB 파일을 읽을 때 파일의 바이트는 어디를 거쳐 오나?",
    choices: [
      "NameNode가 DataNode에서 모아 클라이언트에 보낸다",
      "클라이언트가 NameNode에 위치만 묻고 DataNode에서 직접 받는다",
      "Standby NameNode가 읽기를 대신 맡아 보낸다",
      "JournalNode에 적힌 사본을 읽는다",
    ],
    answer: 1,
    explanation:
      "NameNode는 경로, 블록 목록, 블록 위치 같은 메타데이터만 메모리에 든다. 바이트는 클라이언트와 DataNode가 직접 주고받기 때문에 NameNode는 데이터 양보다 파일과 블록 개수에 부담을 받는다.",
    anchor: "큰-파일을-블록으로-잘라-여러-서버에-나눈다",
  },
  {
    id: "data-lake-hdfs-2",
    post: "data-lake-hdfs",
    question: "복제 수 3으로 블록을 쓸 때 클라이언트가 실제로 데이터를 보내는 곳은?",
    choices: [
      "DataNode 세 대에 동시에 하나씩 보낸다",
      "NameNode에 보내면 NameNode가 세 곳에 나눠 준다",
      "첫 DataNode에만 보내고, DataNode끼리 다음으로 넘긴다",
      "아무 DataNode에나 보내고 나중에 NameNode가 복제를 시킨다",
    ],
    answer: 2,
    explanation:
      "쓰기는 파이프라인이다. 첫 DataNode가 받는 대로 둘째에, 둘째가 셋째에 넘기고 ack는 거꾸로 돌아온다. 클라이언트 쪽 네트워크는 한 번만 쓰고 복제 전송은 DataNode 사이 링크가 맡는다.",
    anchor: "쓰기는-datanode끼리-줄을-서서-넘긴다",
  },
  {
    id: "data-lake-hdfs-3",
    post: "data-lake-hdfs",
    question: "DataNode 한 대를 kill -9로 죽였다. 기본 설정에서 HDFS는 어떻게 움직이나?",
    choices: [
      "하트비트가 한 번만 끊겨도 바로 죽었다고 보고 복제를 시작한다",
      "관리자가 decommission을 걸기 전까지 아무것도 하지 않는다",
      "그 노드에 있던 파일을 읽기 전용으로 바꾼다",
      "약 10분 30초 뒤 죽었다고 판정하고, 남은 복제본을 가진 DataNode끼리 복사해 복제 수를 채운다",
    ],
    answer: 3,
    explanation:
      "죽음 판정은 재확인 간격 5분의 두 배에 하트비트 3초 열 번을 더한 10분 30초가 기본이다. 판정되면 NameNode가 모자란 블록을 계산하고 살아 있는 복제본 주인에게 다른 노드로 복사하라고 시킨다. 실험에서는 판정 뒤 2초 안에 다시 셋이 됐다.",
    anchor: "datanode-하나를-죽여-봤다",
  },
  {
    id: "data-lake-hdfs-4",
    post: "data-lake-hdfs",
    question: "498바이트짜리 파일 1만 개를 HDFS에 올렸을 때 가장 크게 낭비되는 것은?",
    choices: [
      "NameNode 메모리와 파일마다 반복되는 생성·위치 조회·파이프라인 왕복",
      "파일마다 128MB씩 잡히는 DataNode 디스크",
      "DataNode의 체크섬 계산 CPU",
      "클라이언트와 DataNode 사이의 대역폭",
    ],
    answer: 0,
    explanation:
      "블록 파일은 실제 크기만큼만 디스크를 쓴다. 대신 파일과 블록 하나하나가 NameNode 힙의 객체가 되고, 파일마다 만들기·블록 받기·파이프라인 열고 닫기가 반복돼서 같은 5MB가 백 배 넘게 느렸다.",
    anchor: "작은-파일-1만-개가-느린-이유",
  },
  {
    id: "data-lake-hdfs-5",
    post: "data-lake-hdfs",
    question: "HDFS에서 쓰던 \"임시 폴더에 쓰고 이름을 바꿔 커밋\" 방식이 S3 위에서 문제가 되는 이유는?",
    choices: [
      "S3는 폴더 이름에 = 기호를 쓸 수 없어서",
      "S3는 지금도 방금 쓴 객체가 목록에 늦게 보이기 때문에",
      "S3에는 진짜 폴더가 없어서 이름 바꾸기가 객체마다 복사와 삭제로 이뤄지고 원자적이지 않아서",
      "S3는 같은 이름의 객체를 덮어쓸 수 없어서",
    ],
    answer: 2,
    explanation:
      "객체 저장소의 폴더는 키 앞부분이 같을 뿐이라 이름 바꾸기는 객체 수만큼의 복사와 삭제다. 느리고, 중간에 죽으면 반쯤 옮겨진 상태가 남는다. 일관성은 2020년 12월부터 강한 일관성이라 목록 지연은 이유가 아니다.",
    anchor: "계산과-저장을-떼어-놓게-된-이유",
  },
  {
    id: "data-lake-hdfs-6",
    post: "data-lake-hdfs",
    question: "Delta 테이블에서 하루치를 다시 계산해 갈아 끼운 뒤, 같은 폴더를 일반 Parquet 리더로 폴더째 읽었다. 결과는?",
    choices: [
      "커밋 로그를 자동으로 읽어서 새 값만 나온다",
      "remove로 표시만 되고 아직 지워지지 않은 옛 파일까지 읽어 그날 숫자가 부푼다",
      "_delta_log 폴더 때문에 읽기 오류가 난다",
      "옛 파일은 덮어쓰기 순간 지워졌으므로 새 값만 나온다",
    ],
    answer: 1,
    explanation:
      "테이블 포맷은 옛 파일을 바로 지우지 않고 커밋 로그에 remove라고만 적는다. 그래서 포맷을 모르는 리더로 폴더를 읽으면 300과 500이 더해져 800이 나왔다. 옛 파일은 보관 기간이 지난 뒤 VACUUM이 지운다.",
    anchor: "파일-더미-위에-커밋-로그를-얹는다",
  },
  {
    id: "data-lake-hdfs-7",
    post: "data-lake-hdfs",
    question: "Hive 방식으로 dt 열로 파티션한 테이블에서 파티션 가지치기가 되는 쿼리는?",
    choices: [
      "WHERE dt = '2026-10-25'",
      "WHERE ts >= '2026-10-25' AND ts < '2026-10-26' (ts는 클릭 시각 열)",
      "WHERE user_id = 42",
      "ORDER BY dt LIMIT 10",
    ],
    answer: 0,
    explanation:
      "Hive 방식은 폴더 이름의 dt 값과 쿼리 조건을 맞춰 보고 다른 폴더를 열지 않는다. 실험에서는 Scanning Files: 1/3으로 나왔다. ts 열에만 조건을 걸면 dt 폴더 전부를 연다. ts 조건만으로 가지치기가 되게 하는 것이 Iceberg의 숨은 파티셔닝이다.",
    anchor: "경로를-읽으면-테이블-구조가-보인다",
  },
];
