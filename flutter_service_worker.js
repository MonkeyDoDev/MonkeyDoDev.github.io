'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "980547175e325fe622a3362b84d55b6a",
"index.html": "9a362fc5712c717ca3eb747e13fc6d09",
"/": "9a362fc5712c717ca3eb747e13fc6d09",
"CNAME": "2a8e3685c342b57810f80c780dc60bbf",
"main.dart.js": "f5617b9819d8e175d0e77ca795ddcf1d",
"404.html": "2897a13906b88e335039f336449d7959",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "90c454c29b48f08bc06627d125f70466",
"assets/AssetManifest.json": "2ea54d6b96a22084bb96df4e4fe16914",
"assets/NOTICES": "39e14e30dcf8cff734a001c3e5e51893",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "cffc249fa4c85507085ec170c3a1eca7",
"assets/fonts/MaterialIcons-Regular.otf": "d2acff02219201fe96ef970905ee73b2",
"assets/assets/images/me_and_monkey_arc.png": "079a9d72809874f1d91699f17416beed",
"assets/assets/images/my_work/buck_the_critics/sl1-2_quick_review.png": "eb49cf936ae0590ead2dc93b5d78a0fa",
"assets/assets/images/my_work/buck_the_critics/sl4_calculated_result.png": "051a70332da6ba45a0706605214f6b0f",
"assets/assets/images/my_work/buck_the_critics/sl4_friends_list.png": "30adf8584c3ca299d9944de03c74c809",
"assets/assets/images/my_work/buck_the_critics/sl3_best_rating.png": "d8ce82e962e38a57f935b71848883d11",
"assets/assets/images/my_work/buck_the_critics/promo_graphic_btc.png": "c123b3642f13463b7a7f9d5e32975fcd",
"assets/assets/images/my_work/buck_the_critics/sl2_long_review.png": "3cfa481860bdb1dd4c5e4e5493333a85",
"assets/assets/images/my_work/buck_the_critics/tmdb_logo.svg": "140d9aa52bcf9b191c7be215cdac2774",
"assets/assets/images/my_work/buck_the_critics/sl3_good_rating.png": "a947a41e99244cad3c557433f10bdf41",
"assets/assets/images/my_work/buck_the_critics/sl2_search.png": "c632aa9d4f8f01730661dff019551de8",
"assets/assets/images/my_work/buck_the_critics/just-watch-logo.png": "368782898ee862498fef9ac10aace7e8",
"assets/assets/images/my_work/buck_the_critics/sl1_manage_friends.png": "6c32d739eb177aab697fef2660c2bc78",
"assets/assets/images/my_work/buck_the_critics/sl4_friend.png": "f1f23822073b53b2b07062d93a781064",
"assets/assets/images/my_work/buck_the_critics/sl3_browse_1.png": "c7c2a3f8c5e694c2a436b29e66538d00",
"assets/assets/images/my_work/buck_the_critics/sl5_home_screen.png": "dd868a9f0f6211fd8d86d68e858380b8",
"assets/assets/images/my_work/buck_the_critics/sl3_browse_2.png": "8f57139a7d75a9aef1dad682a19f8090",
"assets/assets/images/my_work/buck_the_critics/sl3_browse_3.png": "d9570724d5c85c9c2c55dc64f467db64",
"assets/assets/images/my_work/buck_the_critics/sl5_movie_timeline.png": "5f03c58daf9a25013f4d351df41584ed",
"assets/assets/images/my_work/buck_the_critics/sl6_list_view.png": "c200ae5ba2ffade98c1d259aebee4d65",
"assets/assets/images/my_work/buck_the_critics/sl1_movie.png": "0fb79e35d5218ac96b37b74d2361735e",
"assets/assets/images/my_work/buck_the_critics/sl3_better_rating.png": "ae95251b0ad43f3073c668e3dace6b02",
"assets/assets/images/my_work/buck_the_critics/sl1-6_eagle_view.png": "074c2b1a234cdbc292d2c6c2f784655b",
"assets/assets/images/left_arrow.png": "155c7f18ef983f9b109308ed7775ea04",
"assets/assets/images/right_arrow.png": "064ef55aece468095e19837850d77f05",
"assets/assets/images/MonkeyDoDev-500x500.png": "8c4cfd20701bb7d1ebbb0ac210ac8832",
"assets/assets/images/google-play-badge.png": "1e91d02cf5a902f38f2923c006d79281",
"assets/assets/images/Download_on_the_App_Store.svg": "2928664fe1fc6aca88583a6f606d60ba",
"assets/assets/images/ShowcaseBackground.png": "6c483686a70f0ae3a19a3e8f98a3a649",
"assets/assets/images/BottomNoGradient.png": "f80f53d882fd78a7cb2dc9c2f7d8d182",
"assets/assets/images/monkey_right_print.png": "1f5eb5647b11ede1c160f024dc1ac548",
"assets/assets/images/monkey_left_print.png": "a8c68cb0e49924b8684aeee2c2cc8f87",
"assets/assets/images/top_section_background.png": "029966b879d312f7269887b47c66d9b4",
"assets/assets/images/avatar_color.png": "b068ba6505f1f4e8b30f296637a7762f",
"assets/assets/images/TopNoGradient.png": "cf90596a67d59d36e3870ead1377f0f0",
"assets/assets/images/Phoenix.png": "5d74bfa1a9c834306e75ccf99e907666",
"assets/assets/images/giant_striding.png": "36a7259bb711b4ea4860bc95594b82f1",
"assets/assets/animations/black_animated_arrow.json": "ab3b0b12a510278293a8a6a19eb659ec",
"assets/assets/animations/white_animated_arrow.json": "4dea28a9306fc7875d1ec401b3e771f6",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
