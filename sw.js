const CACHE_VERSION = 'v1'

// self.addEventListener('install', event => {
//   event.waitUntil(precache())
// })

// self.addEventListener('fetch', event => {
//   const request = event.request
//   // get
//   if (request.method !== 'GET') {
//     return
//   }

//   // buscar en cache
//   event.respondWith(cachedResponse(request))

//   // actualizar el cache
//   event.waitUntil(updateCache(request))
// })

async function precache() {
  const cache = await caches.open(CACHE_VERSION) // Nos da una seccion del cache en el navegador
  return cache.addAll([
    // '/',
    // '/index.html',
    // '/index.js',
    // '/src/MediaPlayer.js',
    // '/src/plugins/AutoPlay.js',
    // '/src/plugins/AutoPause.js',
    // '/src/assets/styles/index.css',
    // '/src/assets/video_example.mp4',
  ])
}

async function cachedResponse(request) {
  const cache = await caches.open(CACHE_VERSION)
  const response = await cache.match(request)
  return response || fetch(request)
}

async function updateCache(request) {
  const cache = await caches.open(CACHE_VERSION)
  const response = await fetch(request)
  return cache.put(request, response)
}
