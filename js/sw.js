const CACHE_NAME = 'portfolio-cache-v2';

const urlsToCache = [

    '/',

    '/index.html',

    '/css/styles.css',

    '/js/main.js',

    '/css/responsive.css',
    '/js/portfolio.js',
    '/js/hero.js',
    '/js/aaa.js'
];

self.addEventListener('install', event => {

    event.waitUntil(

        caches.open(CACHE_NAME)

        .then(cache => {

            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener('fetch', event => {

    event.respondWith(

        caches.match(event.request)

        .then(response => {

            return response || fetch(event.request);
        })
    );
});