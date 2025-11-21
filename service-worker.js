
const CACHE_NAME = 'safe-sphere-cache-v1';
const URLS_TO_CACHE = [
  './',
  './index.html',
  './styles.css',
  './manifest.json'
];

self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(clients.claim());
});


