// 如果未來你有大幅修改 index.html 或 CSS，可以把這裡的 v3 改成 v4，強制使用者設備更新畫面
const CACHE_NAME = 'xq-v1.0.0'; 

// 這裡列出需要被快取到手機/電腦裡的靜態檔案
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

// 1. 安裝階段：將靜態檔案存入快取
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
  // 安裝後強制立即接管，不等待舊版 SW 關閉
  self.skipWaiting(); 
});

// 2. 攔截請求階段：決定要給使用者快取還是發送網路請求
self.addEventListener('fetch', event => {
  // ⚠️ 重要防呆：絕對不要快取 Google Apps Script 的 API 請求，否則對戰狀態會卡在過去
  if (event.request.url.includes('script.google.com')) {
    return; 
  }

  event.respondWith(
    caches.match(event.request).then(response => {
      // 如果快取裡有這個檔案，就直接給快取；沒有的話才透過網路抓取
      return response || fetch(event.request);
    }).catch(() => {
      console.log('網路請求失敗，且無快取可供使用。');
    })
  );
});

// 3. 啟動階段：清理舊版本的快取，避免佔用設備空間
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('刪除舊快取:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  // 立即取得所有開啟中頁面的控制權
  self.clients.claim(); 
});