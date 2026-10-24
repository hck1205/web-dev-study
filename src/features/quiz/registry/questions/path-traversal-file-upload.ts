import type { QuizQuestion } from "../types";

export const PATH_TRAVERSAL_FILE_UPLOAD: QuizQuestion[] = [
  {
    id: "path-traversal-file-upload-1",
    post: "path-traversal-file-upload",
    question: "다운로드 API가 /download?file=../../etc/passwd 로 시스템 파일을 내주는 근본 원인은?",
    choices: [
      "서버의 파일 권한이 잘못 설정되어서",
      "사용자가 준 이름을 기준 디렉터리에 그대로 이어 붙여 읽기 때문",
      "HTTPS를 쓰지 않아서",
      "파일 캐시가 오염되어서",
    ],
    answer: 1,
    explanation:
      "files/ + ../../etc/passwd 를 그대로 합치면 기준 밖 /etc/passwd 를 가리킨다. 사용자 입력이 그대로 경로가 되는 것이 경로 순회의 근본 원인이다.",
    anchor: "파일-이름-자리를-뜯어본다",
  },
  {
    id: "path-traversal-file-upload-2",
    post: "path-traversal-file-upload",
    question: "'..' 문자열을 차단하는 방어가 %252e%252e%252f 에 뚫린 이유는?",
    choices: [
      "서버가 느려서 검사를 건너뛰어서",
      "검사하는 시점과 디코딩하는 시점이 어긋나, %252e가 두 번 풀려 ..가 검사 뒤에 되살아나기 때문",
      "정규식이 틀려서",
      "브라우저가 자동으로 디코딩해서",
    ],
    answer: 1,
    explanation:
      "%252e는 한 번 풀면 %2e, 또 풀면 . 이 된다. 차단 검사가 끝난 뒤 어딘가에서 두 번 디코딩되면 ..가 되살아난다. 그래서 글자 차단은 인코딩 우회에 계속 샌다.",
    anchor: "글자를-막으면-다른-글자로-샌다",
  },
  {
    id: "path-traversal-file-upload-3",
    post: "path-traversal-file-upload",
    question: "안전한 경로 검사에서 startsWith(base) 대신 base + \"/\" 로 시작하는지 봐야 하는 이유는?",
    choices: [
      "성능이 더 빨라서",
      "기준이 /srv/files 일 때 /srv/files-backup 도 /srv/files 로 시작해 통과하는 함정이 있기 때문",
      "슬래시가 있어야 URL이 유효해서",
      "윈도 호환을 위해",
    ],
    answer: 1,
    explanation:
      "구분자를 붙이지 않으면 /srv/files-backup/db.sql 같은 형제 폴더가 prefix 검사를 통과한다. 반드시 base + 구분자로 시작하는지 확인해야 한다.",
    anchor: "정규화한-뒤-기준-폴더-안인지-확인한다",
  },
  {
    id: "path-traversal-file-upload-4",
    post: "path-traversal-file-upload",
    question: "경로 문자열 검사를 통과했는데도 심볼릭 링크로 기준 밖 파일이 읽히는 상황을 막는 방법은?",
    choices: [
      "파일 이름을 더 길게 만든다",
      "realpath로 실체 경로를 풀어 다시 확인하거나, 한 번 연 파일 디스크립터로만 작업한다",
      "확장자를 검사한다",
      "MIME 타입을 확인한다",
    ],
    answer: 1,
    explanation:
      "심링크는 이름은 기준 안이지만 실체는 밖을 가리킨다. resolve로 본 경로는 통과해도 realpath로 풀면 기준 밖이다. realpath 재확인이나 열린 핸들로의 작업으로 막고, TOCTOU 틈도 같은 방식으로 닫는다.",
    anchor: "심볼릭-링크와-toctou",
  },
  {
    id: "path-traversal-file-upload-5",
    post: "path-traversal-file-upload",
    question: "업로드 파일 타입 검사에서 확장자와 Content-Type 헤더를 믿으면 안 되는 이유는?",
    choices: [
      "둘 다 서버가 생성하는 값이라 느려서",
      "둘 다 공격자가 임의로 정하는 값이라, 이름과 헤더만으로는 실제 내용을 보장하지 못하기 때문",
      "브라우저마다 값이 달라서",
      "대소문자를 구분하지 않아서",
    ],
    answer: 1,
    explanation:
      "파일 이름 끝의 확장자도, 브라우저가 보낸 Content-Type도 공격자가 정한다. 그나마 매직 바이트(내용 앞부분)가 믿을 만하므로, 세 가지를 허용 목록으로 함께 보고 서버가 새 이름을 붙여 저장한다.",
    anchor: "올리는-쪽-확장자mime매직-바이트",
  },
  {
    id: "path-traversal-file-upload-6",
    post: "path-traversal-file-upload",
    question: "GIF89a로 시작하면서 자바스크립트로도 실행되는 폴리글랏 파일 업로드를 막는 방법으로 가장 적절한 것은?",
    choices: [
      "매직 바이트만 더 엄격히 검사한다",
      "업로드 파일을 앱과 다른 출처에서 서빙하고 nosniff·Content-Disposition attachment를 붙이며 이미지를 재인코딩한다",
      "파일 크기를 제한한다",
      "확장자를 .gif 로만 허용한다",
    ],
    answer: 1,
    explanation:
      "폴리글랏은 매직 바이트 검사를 통과하므로 타입 검사만으로는 부족하다. 다른 출처 서빙으로 세션 격리, nosniff로 타입 추측 차단, 이미지 재인코딩으로 숨은 바이트 제거가 함께 필요하다.",
    anchor: "이미지인데-스크립트다-폴리글랏",
  },
  {
    id: "path-traversal-file-upload-7",
    post: "path-traversal-file-upload",
    question: "오브젝트 스토리지 + presigned URL 설계가 경로 순회를 없애는 원리는?",
    choices: [
      "스토리지가 자동으로 ..를 차단해서",
      "앱 서버에 파일 시스템 경로 개념 자체가 없어져, 특정 키를 짧게 접근하는 서명 URL만 발급하므로 올라갈 대상이 없기 때문",
      "URL이 암호화되어서",
      "스토리지가 더 빨라서",
    ],
    answer: 1,
    explanation:
      "파일을 앱 디스크가 아니라 오브젝트 스토리지에 두고 전송은 스토리지가 맡으면, 앱에는 경로라는 개념이 없어 ..로 올라갈 곳이 없다. 저장 키를 서버가 만든 UUID로 두면 사용자가 경로에 영향을 줄 여지도 사라진다.",
    anchor: "큰-설계-서버를-거치지-않게-한다",
  },
];
