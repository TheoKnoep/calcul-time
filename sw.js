/**
 * Last update: 202211131800
 */

const CACHE_NAME = "calcul-machine"; 

self.addEventListener("install", function (event) {
    caches.open(CACHE_NAME).then(function(cache) {
        return cache.addAll([
            './', 
            'index.html',
            'logo-512.png', 
            'machine.svg', 
            'manifest.webmanifest', 
            'style-css.css', 
            'Time.js'
        ]);
    });
});



self.addEventListener('fetch', event => {
    // console.log(event.request.url); 
    event.respondWith(
        fetch(event.request)
            .catch(() => {
                return caches.match(event.request)
                    .then(cachedResponse => {
                        return cachedResponse; 
                    }); 
            })
    )
})