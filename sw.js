const STATIC_CACHE_NAME = 'static-cache-v1';
const APP_CACHE_NAME = 'app-cache-#3.22';

const CACHE_APP = [
        "/",
        "/manifest.json",
        "/index.html",
        "/style.css",
        "/script.js",
        "/load.js",
        "/modal/modal.css",
        "/modal/modal.js",
        "/modal/phonemodal.css",
        "/modal/phonemodal.js",
        "/scripts/calendar.js",
        "/scripts/colordate.js",
        "/scripts/files.js",
        "/scripts/hanzi.js",
        "/scripts/holiday.js",
        "/scripts/kb.js",
        "/scripts/newevent.js",
        "/scripts/notes.js",
        "/scripts/onload.js",
        "/scripts/prototype.js",
        "/scripts/search.js",
        "/scripts/delete.js",
        "/mmah.json",
        "/orig.json",
        'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.4/utils/Draggable.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.4/TweenMax.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/Sortable/1.15.1/Sortable.min.js',
        '/hanzilookup.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/normalize/4.1.1/normalize.min.css',
        'https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000',
  'https://cdn.glitch.global/fb543d73-d6d8-481e-8fd2-9b1eb07c0940/calendar.gif?v=1703206952280',
  'https://cdn.glitch.global/fb543d73-d6d8-481e-8fd2-9b1eb07c0940/bc3f3694-f365-4712-ba9d-73ec0866736f.image.png?v=1705624205679',
  
]
const CACHE_STATIC = [
    
]

const channel = new BroadcastChannel('sw-messages');


self.addEventListener('install',function(e){
    console.log(e)
    e.waitUntil(
        Promise.all([caches.open(STATIC_CACHE_NAME),caches.open(APP_CACHE_NAME),self.skipWaiting()]).then(function(storage){
          channel.postMessage({title: 'NU'});
          console.log('NEW UPDATE')
          
          console.log(storage[0],storage[1])
            var static_cache = storage[0];
            var app_cache = storage[1];
            return Promise.all([static_cache.addAll(CACHE_STATIC),app_cache.addAll(CACHE_APP)]);
        })
    );
});

self.addEventListener('activate', function(e) {

  console.log(e)
    e.waitUntil(
        Promise.all([
            self.clients.claim(),
            caches.keys().then(function(cacheNames) {
                return Promise.all(
                    cacheNames.map(function(cacheName) {
                        if (cacheName !== APP_CACHE_NAME && cacheName !== STATIC_CACHE_NAME) {
                          console.log('there is new update blud')
                            console.log('deleting',cacheName);
                            channel.postMessage({title: 'EU'})
                            return caches.delete(cacheName);
                        }
                    })
                );
            })
        ])
    );
});
self.addEventListener('fetch',function(e){
  
  console.log(e)
    const url = new URL(e.request.url);
    if (url.hostname === 'static.mysite.co' || url.hostname === 'cdnjs.cloudflare.com' || url.hostname === 'fonts.googleapis.com'){
        e.respondWith(
            caches.match(e.request).then(function(response){
                if (response) {
                    return response;
                }
                var fetchRequest = e.request.clone();

                return fetch(fetchRequest).then(function(response) {
                    if (!response || response.status !== 200 || response.type !== 'basic') {
                        return response;
                    }
                    var responseToCache = response.clone();
                    caches.open(STATIC_CACHE_NAME).then(function(cache) {
                        cache.put(e.request, responseToCache);
                    });
                    return response;
                });
            })
        );
    } else if (CACHE_APP.indexOf(url.pathname) !== -1){
        e.respondWith(caches.match(e.request));
    }
});