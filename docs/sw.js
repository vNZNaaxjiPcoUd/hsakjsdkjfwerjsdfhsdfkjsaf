const CACHE_NAME = 'maze-game-v1';
const urlsToCache = [
  './maze.html',
  './mazemanifest.json',
  // 如果你有加入圖片，請取消下方註解並替換檔名
  // './icon-192.png',
  // './icon-512.png'
];

// 安裝時快取檔案
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

// 攔截請求，優先從快取讀取
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // 如果快取裡有，就回傳快取；沒有就透過網路發出請求
        return response || fetch(event.request);
      })
  );
});