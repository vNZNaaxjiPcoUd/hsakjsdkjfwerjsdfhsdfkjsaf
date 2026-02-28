// 定義快取版本號與名稱 (每次更新 chat.html 時，請修改這個版本號)
const CACHE_VERSION = 'v1.0.0'; 
const CACHE_NAME = `lite-chat-pwa-${CACHE_VERSION}`;

// 定義需要快取的靜態資源 (確保離線或網路不穩時，仍能載入應用程式外殼)
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png'
];

// 1. 安裝階段 (Install)：下載並快取指定版本的靜態資源
self.addEventListener('install', event => {
  console.log(`[Service Worker] Install Event processing for ${CACHE_NAME}`);
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('[Service Worker] Caching app shell');
        return cache.addAll(urlsToCache);
      })
      // skipWaiting() 會強制等待中的 Service Worker 立即接管，不用等舊網頁關閉
      .then(() => self.skipWaiting()) 
  );
});

// 2. 啟動階段 (Activate)：比對版本號，清除舊版本的快取，釋放使用者空間
self.addEventListener('activate', event => {
  console.log(`[Service Worker] Activate Event processing for ${CACHE_NAME}`);
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          // 如果找到快取名稱開頭是 lite-chat-pwa-，但版本號不符的，就刪除它
          if (cacheName.startsWith('lite-chat-pwa-') && cacheName !== CACHE_NAME) {
            console.log(`[Service Worker] Deleting old cache: ${cacheName}`);
            return caches.delete(cacheName);
          }
        })
      );
    })
    // clients.claim() 讓新的 Service Worker 立即控制所有開啟中的客戶端 (網頁)
    .then(() => self.clients.claim()) 
  );
});

// 3. 攔截請求階段 (Fetch)：決定要從快取拿資料，還是向網路發出請求
self.addEventListener('fetch', event => {
  const requestUrl = new URL(event.request.url);

  // 【重要防護】如果是打向 GAS API 的請求，絕對不快取，直接走網路
  if (requestUrl.hostname.includes('script.google.com')) {
    return; // 放行，不介入
  }

  // 針對我們的靜態網頁資源，採用 Cache-First (快取優先) 策略
  event.respondWith(
    caches.match(event.request)
      .then(cachedResponse => {
        // 如果快取裡有這個檔案，直接秒回快取檔案 (提升 PWA 載入速度)
        if (cachedResponse) {
          return cachedResponse;
        }
        // 如果快取沒有，才去網路抓
        return fetch(event.request).catch(() => {
          console.error('[Service Worker] Fetch failed, and no cache found.');
        });
      })
  );
});