
/*
"use strict";

// CODELAB: Add list of files to cache here.
const FILES_TO_CACHE = [
  '/offline.html',
];





const CACHE_NAME = "static-cashe-v0";

self.addEventListener("install", evt => {
  console.log("[ServiceWorker] Install");

// CODELAB: Precache static resources here.
evt.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[ServiceWorker] Pre-caching offline page');
      return cache.addAll(FILES_TO_CACHE);
    })
);
self.skipWaiting();
});