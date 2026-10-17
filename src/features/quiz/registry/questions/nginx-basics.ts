import type { QuizQuestion } from "../types";

export const NGINX_BASICS: QuizQuestion[] = [
  {
    id: "nginx-basics-1",
    post: "nginx-basics",
    question: "Ubuntu에서 /etc/nginx/sites-available/mysite를 만들고 reload했는데도 기본 페이지만 나온다. 가장 먼저 의심할 것은?",
    choices: [
      "worker_processes 값이 너무 작다",
      "sites-enabled에 그 파일로 가는 링크가 없어서 읽히지 않는다",
      "mime.types에 html이 빠져 있다",
      "reload 대신 restart를 해야 새 사이트가 켜진다",
    ],
    answer: 1,
    explanation:
      "nginx.conf는 sites-enabled/*만 include하고, sites-available은 보관 장소일 뿐이다. ln -s로 링크를 걸어야 읽히고, nginx -T 출력의 파일 목록으로 실제로 읽혔는지 확인할 수 있다.",
    anchor: "ubuntu의-설정-파일-배치",
  },
  {
    id: "nginx-basics-2",
    post: "nginx-basics",
    question: "server_name이 example.com인 사이트를 켰는데 브라우저에 서버 IP를 쳐서 접속하면 다른 사이트가 나온다. 이유는?",
    choices: [
      "Host 헤더가 IP라서 어떤 server_name과도 맞지 않아 그 포트의 기본 server가 받았다",
      "IP로 접속하면 nginx가 정규식 server_name을 먼저 검사한다",
      "server_name은 HTTPS에서만 쓰인다",
      "IP 접속은 항상 설정 파일의 마지막 server가 받는다",
    ],
    answer: 0,
    explanation:
      "nginx는 listen으로 후보를 좁힌 뒤 Host 헤더를 server_name과 맞춘다. 아무것도 맞지 않으면 default_server, 표시가 없으면 그 포트에서 처음 나온 server가 받는다. 마지막 server가 받는다는 보기는 틀렸다.",
    anchor: "요청-하나를-받을-server-고르기",
  },
  {
    id: "nginx-basics-3",
    post: "nginx-basics",
    question: "location /static/ { expires 1h; }와 location ~* \\.(css|js)$ { expires 7d; }가 있을 때 /static/app.js 요청에 붙는 설정은?",
    choices: [
      "더 긴 접두사인 /static/의 expires 1h",
      "두 블록이 합쳐져 둘 다 적용된다",
      "정규식 블록의 expires 7d",
      "설정 파일에 먼저 적힌 블록의 값",
    ],
    answer: 2,
    explanation:
      "가장 긴 접두사를 기억해 두더라도 그게 ^~가 아니면 정규식을 순서대로 검사하고, 맞는 정규식이 이긴다. location은 하나만 골라지므로 /static/의 설정은 전혀 적용되지 않는다.",
    anchor: "location은-이-순서로-고른다",
  },
  {
    id: "nginx-basics-4",
    post: "nginx-basics",
    question: "location /static/ { root /var/www/example/static; }일 때 /static/logo.png 요청에 nginx가 찾는 파일은?",
    choices: [
      "/var/www/example/static/logo.png",
      "/var/www/example/logo.png",
      "/var/www/static/logo.png",
      "/var/www/example/static/static/logo.png",
    ],
    answer: 3,
    explanation:
      "root는 요청 경로 전체를 디렉터리 뒤에 붙이므로 static이 두 번 들어간다. location이 맞춘 부분을 잘라 내는 건 alias이고, 여기서는 root를 /var/www/example로 올리면 된다.",
    anchor: "root와-alias는-경로를-다르게-만든다",
  },
  {
    id: "nginx-basics-5",
    post: "nginx-basics",
    question: "/home/matt/site/index.html을 root로 잡았더니 403과 함께 Permission denied가 로그에 찍힌다. 파일 권한은 644다. 원인으로 가장 그럴듯한 것은?",
    choices: [
      "index 지시어에 index.html이 없다",
      "www-data가 상위 디렉터리(/home/matt)에 들어갈 실행 권한이 없다",
      "nginx master가 root가 아니라서 파일을 못 연다",
      "autoindex가 꺼져 있다",
    ],
    answer: 1,
    explanation:
      "파일을 읽으려면 파일의 읽기 권한과 함께 경로상의 모든 디렉터리에 실행 권한이 필요하다. Ubuntu 21.04부터 홈 디렉터리는 750이라 www-data가 들어갈 수 없다. index 파일이 없으면 Permission denied가 아니라 directory index is forbidden이 찍힌다.",
    anchor: "403이-나는-이유",
  },
  {
    id: "nginx-basics-6",
    post: "nginx-basics",
    question: "SPA에서 try_files $uri $uri/ /index.html;을 쓰면서 /assets/는 try_files $uri =404;로 따로 둔 이유는?",
    choices: [
      "배포 후 사라진 옛 JS를 index.html로 주면 HTML을 JS로 실행하다 원인 모를 오류가 나기 때문",
      "/assets/에서는 try_files가 내부 리다이렉트를 할 수 없기 때문",
      "=404가 index.html보다 빠르게 응답하기 때문",
      "정적 파일은 try_files 없이는 서비스되지 않기 때문",
    ],
    answer: 0,
    explanation:
      "없는 경로를 모두 index.html로 돌리면 사라진 해시 파일 요청에도 200과 HTML이 간다. 브라우저는 그걸 스크립트로 실행하려다 Unexpected token 같은 오류를 낸다. 없는 정적 파일은 404로 끝내야 원인이 보인다.",
    anchor: "index와-try_files",
  },
  {
    id: "nginx-basics-7",
    post: "nginx-basics",
    question: "설정이 틀린 상태에서 reload와 restart를 했을 때의 차이로 맞는 것은?",
    choices: [
      "둘 다 nginx가 내려가고 다시 뜨지 않는다",
      "reload는 틀린 줄만 건너뛰고 나머지를 적용한다",
      "reload는 옛 설정으로 계속 돌고, restart는 꺼진 뒤 다시 뜨지 못해 사이트가 내려간다",
      "restart는 옛 설정으로 계속 돌고, reload는 worker가 모두 종료된다",
    ],
    answer: 2,
    explanation:
      "reload에서는 master가 새 설정을 검사하고 실패하면 옛 설정을 유지한다. restart는 프로세스를 먼저 내리니 새 설정이 틀리면 다시 뜨지 못한다. 그래서 nginx -t && systemctl reload nginx를 한 묶음으로 쓴다.",
    anchor: "바꾸기-전에--t-적용은-reload",
  },
];
