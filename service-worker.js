// service-worker.js

// キャッシュの名前（バージョンアップ時はここを変える）
const CACHE_NAME = 'vocsphere-v1';

// キャッシュするファイル一覧
// ※ここにあるファイルはオフラインでも開けるようになります
const urlsToCache = [
  '/',
  '/index.html',
  '/list.html',
  '/about.html',
  '/legal.html',
  '/cockpit.html',
  '/js/app.js',
  '/data/word_data.js',
  '/games/spell.html',
  '/games/rhythm.html',
  '/games/synonym.html',
  '/games/meaning.html',
  '/games/context.html',
  '/images/icon-192.png',
  '/images/icon-512.png',
  '/images/apple-touch-icon.png',
  '/images/context.png',
  '/images/hero_cockpit.png',
  '/images/icon-192.png',
  '/images/icon-512.png',
  '/images/meaning.png',
  '/images/ogp_card.png',
  '/images/rhythm.png',
  '/images/spelling.png',
  '/images/synonyms.png',
  '/css/style.css',
  '/audio/bgm.mp3'
];

// 1. インストール時：キャッシュにお店の商品（ファイル）を並べる
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// 2. リクエスト時：ネットが繋がってなくてもキャッシュから出す
self.addEventListener('fetch', (event) => {
  // FirestoreやStripeへの通信はキャッシュしない（除外）
  if (event.request.url.includes('firestore') || 
      event.request.url.includes('googleapis') ||
      event.request.url.includes('stripe')) {
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // キャッシュにあればそれを返す、なければネットに取りに行く
        return response || fetch(event.request);
      })
  );
});

// 3. 更新時：古いキャッシュを捨てる
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});