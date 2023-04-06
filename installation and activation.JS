
 * @fileoverview Event listeners for the installation and activation of the
 * the service worker
 *

const OFFLINE_VERSION = 1;

self.addEventListener('install', event => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  self.clients.claim();
});

self.addEventListener('fetch', event => {});
