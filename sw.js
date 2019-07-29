importScripts('/CV/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/CV/_nuxt/3b7d2d45fca773ff4b84.js",
    "revision": "9da43558c8ac093ad1bdbe683d0d9b4c"
  },
  {
    "url": "/CV/_nuxt/8b4fba5966e8e1afa8b2.js",
    "revision": "276271a36cfbe858f7f930659cf388f4"
  },
  {
    "url": "/CV/_nuxt/95e85074d40adf79400b.js",
    "revision": "c34a75e9e1449230cbe8002537557795"
  },
  {
    "url": "/CV/_nuxt/e298d945715aca4c34db.js",
    "revision": "1caa89819aca1955b1b7707865f6b5f1"
  },
  {
    "url": "/CV/_nuxt/edfd43ef9f063a04fd96.js",
    "revision": "8cd3525af74cb43c4c99609584137993"
  }
], {
  "cacheId": "MyCV",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/CV/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/CV/.*'), workbox.strategies.networkFirst({}), 'GET')
