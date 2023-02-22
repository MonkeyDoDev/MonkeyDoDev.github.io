'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "980547175e325fe622a3362b84d55b6a",
"index.html": "6252fb30ccbf30fcf803956973981286",
"/": "6252fb30ccbf30fcf803956973981286",
"main.dart.js": "55ba4b0c2acdf1e0216c7ac7660cdc2c",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "90c454c29b48f08bc06627d125f70466",
"assets/AssetManifest.json": "b09143ff80acd43dfd6de91c2e1d3d27",
"assets/NOTICES": "ace3d6c7885c2ab9dc60ed067f886fa8",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/images/my_work/buck_the_critics/sl1-2_quick_review.png": "eb49cf936ae0590ead2dc93b5d78a0fa",
"assets/assets/images/my_work/buck_the_critics/sl4_calculated_result.png": "051a70332da6ba45a0706605214f6b0f",
"assets/assets/images/my_work/buck_the_critics/sl4_friends_list.png": "30adf8584c3ca299d9944de03c74c809",
"assets/assets/images/my_work/buck_the_critics/sl3_best_rating.png": "d8ce82e962e38a57f935b71848883d11",
"assets/assets/images/my_work/buck_the_critics/sl2_long_review.png": "3cfa481860bdb1dd4c5e4e5493333a85",
"assets/assets/images/my_work/buck_the_critics/sl3_good_rating.png": "a947a41e99244cad3c557433f10bdf41",
"assets/assets/images/my_work/buck_the_critics/sl2_search.png": "c632aa9d4f8f01730661dff019551de8",
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
"assets/assets/images/ShowcaseBackground.png": "6c483686a70f0ae3a19a3e8f98a3a649",
"assets/assets/images/BottomNoGradient.png": "f80f53d882fd78a7cb2dc9c2f7d8d182",
"assets/assets/images/monkey_right_print.png": "1f5eb5647b11ede1c160f024dc1ac548",
"assets/assets/images/monkey_left_print.png": "a8c68cb0e49924b8684aeee2c2cc8f87",
"assets/assets/images/avatar_color.png": "b068ba6505f1f4e8b30f296637a7762f",
"assets/assets/images/TopNoGradient.png": "cf90596a67d59d36e3870ead1377f0f0",
"assets/assets/images/Phoenix.png": "5d74bfa1a9c834306e75ccf99e907666",
"assets/assets/images/giant_striding.png": "36a7259bb711b4ea4860bc95594b82f1",
"assets/assets/animations/black_animated_arrow.json": "ab3b0b12a510278293a8a6a19eb659ec",
"assets/assets/animations/white_animated_arrow.json": "4dea28a9306fc7875d1ec401b3e771f6",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
