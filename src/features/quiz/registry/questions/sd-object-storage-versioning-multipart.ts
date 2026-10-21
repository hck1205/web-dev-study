import type { QuizQuestion } from "../types";

export const SD_OBJECT_STORAGE_VERSIONING_MULTIPART: QuizQuestion[] = [
  {
    id: "sd-object-storage-versioning-multipart-1",
    post: "sd-object-storage-versioning-multipart",
    question: "버전 관리를 켠 버킷에서 버전 ID 없이 DELETE한 뒤 GET하면 404가 나온다. 이때 옛 본문은 어떻게 되어 있나?",
    choices: [
      "모든 사본에서 즉시 지워졌다",
      "그대로 남아 있고, 최신 버전이 삭제 마커라서 404로 보일 뿐이다",
      "휴지통 버킷으로 옮겨졌다",
      "30일 뒤 자동으로 복구된다",
    ],
    answer: 1,
    explanation:
      "버전 없는 DELETE는 본문을 지우지 않고 삭제 마커라는 빈 버전을 하나 쌓는다. 버전 ID를 지정하면 옛 버전을 읽을 수 있고, 마커를 지우면 아래 버전이 다시 최신이 된다.",
    anchor: "지우기도-새-버전-하나다",
  },
  {
    id: "sd-object-storage-versioning-multipart-2",
    post: "sd-object-storage-versioning-multipart",
    question: "삭제 마커의 버전 ID를 직접 지정해 GET하면 S3는 무엇을 돌려주나?",
    choices: ["200과 빈 본문", "404 NoSuchKey", "405 Method Not Allowed", "409 Conflict"],
    answer: 2,
    explanation:
      "삭제 마커는 본문이 없는 버전이라 읽을 수 없고, S3는 이 경우 405로 답한다. 버전을 지정하지 않은 GET에서 최신이 마커일 때는 404다. 둘을 구분해 두면 되살리기 도구를 짤 때 헷갈리지 않는다.",
    anchor: "지우기도-새-버전-하나다",
  },
  {
    id: "sd-object-storage-versioning-multipart-3",
    post: "sd-object-storage-versioning-multipart",
    question: "버전 ID로 무작위 UUIDv4를 쓰면 생기는 문제는?",
    choices: [
      "ID가 겹쳐서 버전이 덮어써진다",
      "ID 길이가 길어 장부에 들어가지 않는다",
      "삭제 마커를 표시할 수 없다",
      "정렬 순서가 만든 순서와 달라서 '가장 큰 버전 = 최신'을 쓸 수 없다",
    ],
    answer: 3,
    explanation:
      "최신 버전을 따로 적지 않고 version_id가 가장 큰 행으로 찾으려면 ID가 시간순으로 정렬되어야 한다. 시각이 앞에 오는 UUIDv7이나 Snowflake 같은 ID가 맞다. UUIDv1도 문자열 그대로는 시간순으로 정렬되지 않는다.",
    anchor: "덮어쓰면-옛-본문은-어디로-가나",
  },
  {
    id: "sd-object-storage-versioning-multipart-4",
    post: "sd-object-storage-versioning-multipart",
    question: "11MiB 파일을 5MiB, 5MiB, 1MiB 조각으로 올렸더니 ETag가 '1d2d…-3'이었다. 이 값에 대한 설명으로 맞는 것은?",
    choices: [
      "조각 MD5 세 개를 이어 붙인 값의 MD5에 조각 수를 붙인 것이라 파일 전체 MD5와 다르다",
      "파일 전체의 MD5에 조각 수를 붙인 것이다",
      "마지막 조각의 MD5다",
      "조각 크기와 상관없이 같은 파일이면 늘 같은 값이 나온다",
    ],
    answer: 0,
    explanation:
      "저장소는 이미 계산한 조각 MD5 48바이트만 해시하면 되니 큰 파일을 다시 읽지 않는다. 대신 조각 크기가 바뀌면 ETag도 바뀌어서, ETag를 파일 MD5와 비교하는 무결성 검사는 큰 파일에서 늘 실패한다.",
    anchor: "조각-etag와-합친-etag",
  },
  {
    id: "sd-object-storage-versioning-multipart-5",
    post: "sd-object-storage-versioning-multipart",
    question: "멀티파트 마무리 요청에 1MiB 조각 둘을 넣었더니 거절됐다. 이유는?",
    choices: [
      "조각 번호가 오름차순이 아니어서",
      "마지막을 뺀 조각이 최소 크기 5MiB보다 작아서",
      "ETag가 조각과 맞지 않아서",
      "조각이 두 개뿐이면 멀티파트를 쓸 수 없어서",
    ],
    answer: 1,
    explanation:
      "S3 규칙은 마지막 조각만 작아도 되고 나머지는 5MiB 이상이어야 한다. 실험에서도 첫 조각 1,048,576바이트 때문에 EntityTooSmall이 났다. 순서가 틀리면 InvalidPartOrder, ETag가 틀리면 InvalidPart가 난다.",
    anchor: "조각-etag와-합친-etag",
  },
  {
    id: "sd-object-storage-versioning-multipart-6",
    post: "sd-object-storage-versioning-multipart",
    question: "버킷의 객체 수는 그대로인데 저장 용량만 계속 늘어난다. 먼저 의심할 것으로 가장 알맞은 묶음은?",
    choices: [
      "체크섬 오류와 비트 부패",
      "메타데이터 샤드 불균형",
      "끝나지 않은 멀티파트 업로드와 최신이 아닌 옛 버전",
      "CDN 캐시 만료",
    ],
    answer: 2,
    explanation:
      "미완료 업로드의 조각과 옛 버전은 일반 객체 목록에 보이지 않지만 공간을 차지한다. list-multipart-uploads로 업로드를 보고, 수명 주기 규칙으로 옛 버전과 미완료 업로드를 정리한다.",
    anchor: "끝나지-않은-업로드가-남기는-것",
  },
  {
    id: "sd-object-storage-versioning-multipart-7",
    post: "sd-object-storage-versioning-multipart",
    question: "컴팩션에서 위치표를 새 볼륨으로 바꾼 직후 옛 볼륨 파일을 바로 지우면 어떤 문제가 생기나?",
    choices: [
      "직전에 옛 위치표를 읽은 GET이 사라진 파일의 옛 오프셋을 읽으러 가서 실패한다",
      "새 볼륨의 체크섬이 바뀐다",
      "진행 중인 업로드의 조각이 새 볼륨으로 옮겨지지 않는다",
      "아무 문제가 없다",
    ],
    answer: 0,
    explanation:
      "위치표 변경과 읽기는 동시에 일어난다. 진행 중인 읽기가 끝날 만큼 기다렸다 옛 볼륨을 지워야 한다. 새 볼륨을 fsync한 뒤 위치표를 한 트랜잭션으로 바꾸는 것과 함께, 살아 있는 데이터를 잃지 않는 장치다.",
    anchor: "청소하다-살아-있는-것을-버리지-않으려면",
  },
];
