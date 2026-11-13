'use strict';

// Incrementa CACHE_VERSION cada vez que publiques cambios en preguntas, estilos o lógica
const CACHE_VERSION = 'v3.2.0';
const CACHE_NAME = `dilemma-pwa-${CACHE_VERSION}`;

const CORE_ASSETS = [
  './',
  './index.html',
  './style.css',
  './questions.js',
  './script.js',
  './manifest.json',
  './favicon.svg',
  './icon-192.png',
  './icon-512.png',
  './icon-maskable-192.png',
  './icon-maskable-512.png',
  './apple-touch-icon.png'
];

// INSTALACIÓN: Descarga atómica evitando la caché HTTP del navegador para no mezclar archivos antiguos y nuevos
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async cache => {
      const requests = CORE_ASSETS.map(url => new Request(url, { cache: 'reload' }));
      await cache.addAll(requests);
    })
  );
});

// ACTIVACIÓN: Elimina cualquier caché de versiones anteriores antes de tomar el control
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(oldKey => caches.delete(oldKey))
      )
    ).then(() => self.clients.claim())
  );
});

// COMUNICACIÓN CON EL CLIENTE: Permite activar la nueva versión de forma coordinada
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// INTERCEPCIÓN DE PETICIONES: Sirve desde la caché activa (CACHE_NAME) y protege recargas offline
self.addEventListener('fetch', event => {
  const { request } = event;

  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  // Navegación a documento HTML (recargas o apertura directa en modo standalone)
  if (request.mode === 'navigate') {
    event.respondWith(
      caches.open(CACHE_NAME).then(async cache => {
        const cachedPage =
          (await cache.match(request, { ignoreSearch: true })) ||
          (await cache.match('./index.html')) ||
          (await cache.match('./'));

        if (cachedPage) {
          return cachedPage;
        }

        try {
          const networkResponse = await fetch(request);
          if (networkResponse && networkResponse.ok) {
            cache.put('./index.html', networkResponse.clone());
          }
          return networkResponse;
        } catch (err) {
          return cache.match('./index.html');
        }
      })
    );
    return;
  }

  // Recursos estáticos del proyecto (CSS, JS, JSON, iconos) servidos exclusivamente desde CACHE_NAME
  event.respondWith(
    caches.open(CACHE_NAME).then(async cache => {
      const cachedResponse = await cache.match(request, { ignoreSearch: true });
      if (cachedResponse) {
        return cachedResponse;
      }

      try {
        const networkResponse = await fetch(request);
        if (networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
          cache.put(request, networkResponse.clone());
        }
        return networkResponse;
      } catch (err) {
        return Response.error();
      }
    })
  );
});
