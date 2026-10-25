import type { QuizQuestion } from "../types";

export const PYTHON_ESSENTIALS_FOR_BACKEND: QuizQuestion[] = [
  {
    id: "python-essentials-for-backend-1",
    post: "python-essentials-for-backend",
    question: "Ubuntu 24.04에서 시스템 파이썬에 pip install을 하면 externally-managed-environment 오류가 난다. 가장 알맞은 대응은?",
    choices: [
      "--break-system-packages를 붙여 설치한다",
      "sudo pip install로 권한을 높여 다시 설치한다",
      "프로젝트 폴더에 가상 환경을 만들고 그 안에 설치한다",
      "apt로 pip를 최신 버전으로 올린 뒤 다시 설치한다",
    ],
    answer: 2,
    explanation:
      "시스템 파이썬은 apt와 운영체제 도구가 쓰는 곳이라 PEP 668에 따라 배포판이 pip 설치를 막는다. 프로젝트마다 가상 환경을 만들면 시스템 패키지를 건드리지 않는다. sudo는 권한 문제가 아니라서 소용이 없고, --break-system-packages는 이름 그대로 시스템을 깨뜨릴 수 있다.",
    anchor: "pip-install-한-줄이-거절당했다",
  },
  {
    id: "python-essentials-for-backend-2",
    post: "python-essentials-for-backend",
    question: "CI에서 uv sync --locked를 쓰는 이유로 가장 알맞은 것은?",
    choices: [
      "pyproject.toml과 lock 파일이 어긋나면 실패하게 해서 빌드마다 같은 버전이 깔리게 하려고",
      "dev 의존성을 자동으로 빼서 이미지 크기를 줄이려고",
      "lock 파일을 최신 버전으로 자동 갱신하려고",
      "가상 환경 없이 시스템 파이썬에 바로 설치하려고",
    ],
    answer: 0,
    explanation:
      "--locked는 lock 파일 그대로만 설치하고, pyproject.toml을 고친 뒤 lock을 다시 만들지 않았다면 오류로 멈춘다. 그래서 같은 커밋이면 언제 빌드해도 같은 버전이 들어간다. dev 의존성을 빼는 건 --no-dev가 하는 일이다.",
    anchor: "pyprojecttoml과-lock-파일-그리고-uv",
  },
  {
    id: "python-essentials-for-backend-3",
    post: "python-essentials-for-backend",
    question: "app/services/orders.py 안에 from ..db import connect가 있다. python3 app/services/orders.py로 실행하면 ImportError가 나는 이유는?",
    choices: [
      "app 폴더에 __init__.py가 없어서",
      "파일 경로로 실행하면 그 파일이 부모 패키지 없는 __main__ 모듈이 되어서",
      "상대 import는 파이썬 3에서 지원하지 않아서",
      "db.py가 site-packages에 설치되어 있지 않아서",
    ],
    answer: 1,
    explanation:
      "파일 경로로 실행하면 그 파일은 패키지에 속하지 않은 __main__이 되어 ..으로 올라갈 부모가 없다. 프로젝트 루트에서 python3 -m app.services.orders처럼 모듈 이름으로 실행하면 패키지를 먼저 불러와서 상대 import가 풀린다.",
    anchor: "import는-syspath를-순서대로-뒤진다",
  },
  {
    id: "python-essentials-for-backend-4",
    post: "python-essentials-for-backend",
    question: "qty: int로 힌트를 단 dataclass에 qty=\"3\"을 넣고 실행했다. 어떻게 되나?",
    choices: [
      "생성자에서 TypeError가 난다",
      "파이썬이 \"3\"을 자동으로 정수 3으로 바꾼다",
      "아무 오류 없이 문자열이 그대로 들어가 돈다",
      "모듈을 import하는 순간 SyntaxError가 난다",
    ],
    answer: 2,
    explanation:
      "인터프리터는 타입 힌트를 기록만 하고 검사하지 않는다. 그래서 문자열이 그대로 들어가고 곱셈은 문자열 반복이 된다. 실행 전에 잡으려면 mypy 같은 정적 검사기를, 실행 중 검증이 필요하면 Pydantic 같은 라이브러리를 쓴다.",
    anchor: "타입을-적고-실행-전에-검사한다",
  },
  {
    id: "python-essentials-for-backend-5",
    post: "python-essentials-for-backend",
    question: "기본 CPython에서 순수 파이썬 계산 4개를 스레드 4개로 나눴더니 순서대로 돌린 것과 시간이 같았다. 반면 0.2초씩 기다리는 I/O 10개는 스레드로 10배 빨라졌다. 차이의 이유는?",
    choices: [
      "스레드 풀의 기본 크기가 CPU 작업에는 1개로 제한되어서",
      "GIL 때문에 바이트코드는 한 번에 한 스레드만 돌지만, I/O를 기다리는 동안에는 GIL을 내려놓아서",
      "I/O 작업은 운영체제가 자동으로 별도 프로세스로 옮겨서",
      "CPU 작업은 스레드끼리 메모리를 복사하느라 시간이 들어서",
    ],
    answer: 1,
    explanation:
      "GIL은 한 프로세스에서 파이썬 바이트코드를 한 번에 한 스레드만 실행하게 한다. 계산만 하는 스레드는 번갈아 돌 뿐이라 합친 시간이 줄지 않는다. I/O 시스템 호출에 들어가면 GIL을 놓으니 기다림끼리 겹친다.",
    anchor: "gil-한-번에-한-스레드만-파이썬을-돈다",
  },
  {
    id: "python-essentials-for-backend-6",
    post: "python-essentials-for-backend",
    question: "FastAPI의 async def 핸들러 안에서 바꿀 수 없는 동기 라이브러리 함수를 불러야 한다. 가장 알맞은 방법은?",
    choices: [
      "그대로 호출하고 uvicorn 워커 수만 늘린다",
      "함수 앞에 await를 붙여 호출한다",
      "await asyncio.to_thread(함수)로 스레드에 보낸다",
      "asyncio.create_task로 감싸고 결과를 기다리지 않는다",
    ],
    answer: 2,
    explanation:
      "코루틴은 await에서만 양보하므로 동기 함수가 오래 걸리면 이벤트 루프 전체가 멈춘다. asyncio.to_thread로 스레드 풀에서 돌리면 그동안 루프가 다른 요청을 본다. 동기 함수에 await를 붙일 수는 없고, 워커를 늘려도 각 워커 안의 루프는 여전히 막힌다.",
    anchor: "기다리는-일과-계산하는-일을-다르게-맡긴다",
  },
  {
    id: "python-essentials-for-backend-7",
    post: "python-essentials-for-backend",
    question: "운영 스크립트에서 subprocess.run(\"git log \" + branch, shell=True)를 쓰면 생기는 문제로 가장 알맞은 것은?",
    choices: [
      "branch 값에 셸 명령이 섞이면 그대로 실행될 수 있다",
      "git 명령의 출력이 항상 버려진다",
      "종료 코드가 항상 0으로 바뀐다",
      "파이썬 3.13부터 shell=True는 제거되어 오류가 난다",
    ],
    answer: 0,
    explanation:
      "문자열을 셸에 넘기면 branch에 ; rm -rf ~ 같은 값이 들어올 때 셸이 그대로 해석한다. 인자를 리스트로 넘기고 셸을 거치지 않으면 값은 인자 하나로만 전달된다. 실패 확인은 returncode나 check=True로 따로 해야 한다.",
    anchor: "운영-스크립트는-종료-코드로-말한다",
  },
];
