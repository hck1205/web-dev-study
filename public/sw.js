// Matt's Blog service worker.
// - 빌드 산출물(/_next/static), 아이콘, 폰트: 캐시 우선 (파일 이름에 해시가 있어 바뀌지 않는다)
// - 페이지: 네트워크 우선, 실패하면(오프라인) 캐시에 남은 페이지를 보여 준다
// VERSION은 등록할 때 붙이는 ?v=<빌드 ID>에서 온다. 배포마다 값이 바뀌어 새 워커가 설치되고,
// activate에서 이전 배포의 캐시를 지운다. 그래서 지난 배포의 빌드 산출물이 브라우저에 쌓이지 않는다.
const VERSION = new URL(self.location.href).searchParams.get("v") || "dev";
const STATIC_CACHE = `static-${VERSION}`;
const PAGE_CACHE = `pages-${VERSION}`;

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(PAGE_CACHE).then((cache) => cache.add("/")).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((key) => ![STATIC_CACHE, PAGE_CACHE].includes(key)).map((key) => caches.delete(key))))
      .then(() => self.clients.claim()),
  );
});

const isStatic = (url) =>
  url.pathname.startsWith("/_next/static/") || url.pathname.startsWith("/icons/") || /\.(woff2?|png|svg|ico)$/.test(url.pathname);

self.addEventListener("fetch", (event) => {
  const { request } = event;
  const url = new URL(request.url);
  if (request.method !== "GET" || url.origin !== self.location.origin) return;

  if (isStatic(url)) {
    event.respondWith(
      caches.match(request).then(
        (cached) =>
          cached ||
          fetch(request).then((response) => {
            if (response.ok) caches.open(STATIC_CACHE).then((cache) => cache.put(request, response.clone()));
            return response;
          }),
      ),
    );
    return;
  }

  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (response.ok) caches.open(PAGE_CACHE).then((cache) => cache.put(request, response.clone()));
          return response;
        })
        .catch(() => caches.match(request).then((cached) => cached || caches.match("/"))),
    );
  }
});
