// Matt's Blog service worker.
// - 빌드 산출물(/_next/static), 아이콘, 폰트: 캐시 우선 (파일 이름에 해시가 있어 바뀌지 않는다)
// - 페이지: 네트워크 우선, 실패하면(오프라인) 캐시에 남은 페이지를 보여 준다
// 캐시 구조를 바꾸면 VERSION을 올린다. 이전 캐시는 activate에서 지운다.
const VERSION = "v1";
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
