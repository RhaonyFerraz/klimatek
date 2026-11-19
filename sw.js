/* KLIMATEK Pro — Service Worker (Exclusivo Equipe Técnica & Gerência) */
const CACHE_NAME = 'klimatek-pro-v2';
const APP_SHELL = [
  './',
  './index.html',
  './site.webmanifest',
  './img/favicon-klimatek.svg',
  './img/favicon-klimatek-32.png',
  './img/favicon-klimatek-192.png',
  './img/favicon-klimatek-512.png',
  './img/apple-touch-icon.png',
  './img/Logo%203D%20KlimaTek%20com%20Swooshes%20Azuis.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL)).catch(() => {})
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Network-First com fallback para cache (funciona offline em campo e sempre pega a versão nova online)
self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  // Nunca interceptar chamadas ao Firebase / APIs externas de QR Code
  const url = req.url;
  if (url.includes('firebaseio.com') || url.includes('firebasedatabase.app') || url.includes('api.qrserver.com')) {
    return;
  }

  event.respondWith(
    fetch(req)
      .then((res) => {
        if (res && res.status === 200 && req.url.startsWith(self.location.origin)) {
          const clone = res.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(req, clone)).catch(() => {});
        }
        return res;
      })
      .catch(() => caches.match(req).then((cached) => cached || caches.match('./index.html')))
  );
});
