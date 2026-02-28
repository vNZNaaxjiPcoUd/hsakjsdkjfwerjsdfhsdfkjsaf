const CACHE_NAME = 'maze-game-v5.1'; 

const urlsToCache = [
  './',
  './maze.html',
  './mazemanifest.json',
   './icon-192.png',
   './icon-512.png'
];

// 1. 安裝階段：下載新檔案並強制等待中的 Service Worker 立即啟動
self.addEventListener('install', event => {
  self.skipWaiting(); // 強制跳過等待，立刻讓新版接管
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('已快取新版本:', CACHE_NAME);
        return cache.addAll(urlsToCache);
      })
  );
});

// 2. 啟動階段：清除舊版本的快取
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          // 如果快取名稱跟目前的 CACHE_NAME 不同，就把它刪除
          if (cacheName !== CACHE_NAME) {
            console.log('刪除舊快取:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// 3. 攔截請求：優先讀取快取，沒有再抓網路
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});