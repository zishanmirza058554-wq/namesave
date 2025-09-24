self.addEventListener('install', (event) => {
  console.log('Service Worker Installed');
  self.skipWaiting(); // पुराना service worker bypass करें
});

self.addEventListener('activate', (event) => {
  console.log('Service Worker Activated');
  event.waitUntil(clients.claim()); // नए icons और manifest apply करें
});

self.addEventListener('fetch', (event) => {
  // Simple fetch log
  console.log('Fetching:', event.request.url);
});
