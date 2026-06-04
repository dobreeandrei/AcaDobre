'use strict';

/* ============================================================
   AcaDobre service worker
   Offline support for the hosted (GitHub Pages) PWA.

   Strategy:
   - Navigations (HTML): network-first, falling back to the cached
     app shell when offline. Keeps the shell fresh when online.
   - Everything else (CSS, JS, question scripts, images): stale-
     while-revalidate. Served instantly from cache, refreshed in
     the background. The `?v=` cache-busting query strings in
     index.html naturally produce new cache entries on a version
     bump, so a changed file is picked up on the next load.

   Note: a service worker only runs in a secure context (https or
   localhost). The offline `file://` mode described in the README
   does not use this file.

   VERSIONING: bump CACHE below whenever shell assets change, in
   lockstep with the `?v=` query params on style.css / script.js in
   index.html. Activating a new version purges all older caches.
   ============================================================ */

const CACHE = 'acadobre-v5.1';

// Only verified-present files go here — cache.add on a 404 would
// reject. Question scripts and images are NOT precached; they are
// fetched on the first online visit (index.html loads every question
// script) and cached on demand by the stale-while-revalidate handler.
const CORE_ASSETS = [
  './',
  './index.html',
  './style.css?v=6.1',
  './script.js?v=6.1',
  './manifest.json',
  './icons/logo.png',
];

function _put(request, response) {
  // Store a clone; only same-origin OK responses reach here.
  return caches.open(CACHE).then(cache => cache.put(request, response));
}

// ── Install: precache the core shell, then take over immediately.
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE)
      // allSettled so one missing/renamed asset never aborts the whole install.
      .then(cache => Promise.allSettled(CORE_ASSETS.map(url => cache.add(url))))
      .then(() => self.skipWaiting())
  );
});

// ── Activate: drop stale caches from previous versions, claim clients.
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys
          .filter(k => k.startsWith('acadobre-') && k !== CACHE)
          .map(k => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

// ── Fetch: route by request type.
self.addEventListener('fetch', event => {
  const { request } = event;

  // Only same-origin GETs are handled; everything else hits the network as normal.
  if (request.method !== 'GET') return;
  if (new URL(request.url).origin !== self.location.origin) return;

  // Navigations → network-first, fall back to the cached shell offline.
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then(response => {
          if (response && response.ok) _put(request, response.clone());
          return response;
        })
        .catch(() => caches.match(request).then(c => c || caches.match('./index.html')))
    );
    return;
  }

  // Assets → stale-while-revalidate.
  event.respondWith(
    caches.match(request).then(cached => {
      const network = fetch(request)
        .then(response => {
          if (response && response.ok) _put(request, response.clone());
          return response;
        })
        .catch(() => cached); // offline and uncached → resolves to undefined
      return cached || network;
    })
  );
});
