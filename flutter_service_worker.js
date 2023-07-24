'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "980547175e325fe622a3362b84d55b6a",
"index.html": "d2f3525ba0447bc64f386609753004de",
"/": "d2f3525ba0447bc64f386609753004de",
"CNAME": "2a8e3685c342b57810f80c780dc60bbf",
"main.dart.js": "4d5f60407e1f8f2e91f09049ef650ee2",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "90c454c29b48f08bc06627d125f70466",
".git/config": "38881ccff4dc4e249623736f3cd97a15",
".git/objects/50/498b13188721b6096c68b5c762bba8bfb98fbb": "2d69eb5e11256b778861a8ee23449be0",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/9e/d85a41b55fc3c323d19447c4c8a1b40dc862ea": "588c29c5eb560c9cffca9bc9360e6e4a",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/35/a3b065f658ceb37ff5af4fd5a684ab4b7c8867": "c17462c141eff13fb977cd35792c2752",
".git/objects/69/b374dfe4136fa00ddcd70b7c27c9e496605cff": "a26e2ff233c8862614ce7dd433b96c3e",
".git/objects/56/1c461aa0991da77c988b2cc8e061b5c061e7c4": "6328478999d78c1f2509e0eea1596397",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/51/63421e7183fed9181cad6ee0132c55a8023a82": "92025387746742d7d2b4b1b26cb45e51",
".git/objects/0b/2ff81274a3f3c35d64eda7d7216bd941f6b39e": "5689d036d7ff4556c3dea6d48980f148",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/d7/bcc6b5704e1b325e6d6c4ba2e30080b0d13bd1": "43d0c4b3e5d57d9730daf38c25af8853",
".git/objects/d0/df906c9b81d5cfbada43d03e82a8042cc18a43": "57cc6bfabfe236c0eaa00312bf0a3993",
".git/objects/be/77751438c7f227015e4074516f286c720da5eb": "3d6486449bd8f684dad5cf2e7ad0f337",
".git/objects/b3/fca0e2ff3b77a5a7a46835949b5cc1faa77791": "fcdd7811ae6e5a8cbfc9f0840f5c5e3f",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/e5/80366956ce4cb8f6130b36ee1e7fd35f8cacf9": "5db0ada2ccbf7dd6ffdbcdb639933023",
".git/objects/f3/9d9f95deb9f1d94e55b08d825486b6a5947b04": "cac53d5a7ede3cd1a1d67b82571e16d9",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/e4/768f35482ebd2d87f2e86d5f60d81b5f533f2e": "04c75a1e1fe1b86a964af621503277b0",
".git/objects/29/26a0d35ecd93842f3d4b19570c623f02afa3e6": "ad88ad7c2834451432d289cfc05536d2",
".git/objects/89/05b3386d0880e03ae2b40e5260258249479e3e": "672252831bea083195f8e246cab831ec",
".git/objects/28/c8ee779f305c31204307178f18d9c85a9fcb28": "9d546ae020c942f7d448909ab66c6ac4",
".git/objects/28/62be3abbb21768a7831a29d969c9aefabda208": "fd54e87ee4eb31117fe9336960eef64e",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/f11aa17d05a6b8cec75720bbaff682060cec76": "0e0df6ce9340eb525577e924675bd3b2",
".git/objects/19/6817c3c68a9336564d35a440ec24e543a4fbc6": "49d4b11883f9531cb0c8253f7e4f0ba1",
".git/objects/88/d0bbb96db2eaece90083fb6a5e88c9d8302a76": "a63cafe58b4223ebdc08237b492a8929",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/8d56d4a4c54018d19e255c21c99d71b0048fdd": "b3a583b0906833588366db54b67812ce",
".git/objects/07/8da54b2ad39e1dfb2c37645bb190890dc10377": "d1b0d78c8ba18df9cd321d8283985306",
".git/objects/07/2b425a1ab785ee7143f0f0fba305f55bfb9678": "c37688ca77804ce6fb647961494a28c6",
".git/objects/00/fd896127ce219cb6e68fb468b84f8ed9ef6e9d": "8b1b815d11de09c3b9ce368bb4c1aa69",
".git/objects/6e/a6baf71899f6097f6bef1c679392f322e28b11": "69b38cb8123a4440d1a24e2c1aedba0b",
".git/objects/36/59a790505c379827645b1a875d3be0a9ee0ccb": "683028c6ee25c9b4c6aa7b7fa9a5bd30",
".git/objects/31/bbd3c0f95dcc8d8d7a443014101010f6ec8cac": "7117bd017d7602a71ccc79a64da24eb1",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/3a/fbc9f954dff7d51b5d493689150e11bb7e2380": "4c3d92c2b5d8640c44d7603c537c8741",
".git/objects/54/d352b5f2c4c225563f888c73d92e2d48b3765a": "f7d083987ca5204051d1f636fc0605d2",
".git/objects/3f/9cd143b00e730a02a304c179ec85f666219845": "6b4a3f79040923b005b4d9a19f04175e",
".git/objects/30/ce385188b7fb96dc6985c5b35a969c1026ae94": "9222323eb7665bb21e23210ad5f92f26",
".git/objects/37/21ee810575efa953971575163fa9f6fe73c811": "4544f16368cfc3bde6f3581f15f38c2a",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/39/f9429ecf75c36c291843a50e229141e26ab47f": "66e5368ed5545a2ae7ad81450a8fd1be",
".git/objects/52/e9df86bd5f064d3a6fc0f9a176cee9f5811254": "a9ce29295d39b429c0b148b57e4b187b",
".git/objects/97/04c8ff6a5a92f43034b03f5f14250446e16aa5": "4fe1d2bbcb79260e3dcbcbe0bcce0e23",
".git/objects/0f/41d141083363e3b9a389582efcb514a177cc47": "1cc874460bfe6005c83057e46c35e43a",
".git/objects/0a/556f41fc804aa22c6f8833a8925a05b63e7b48": "05bfb591ee2fa2dffa6e96a156de3420",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/a9/c15a55627756ebe1c2ebf253132a6033449924": "d9c8d5268f3a2cf3b39a0e343b3f6241",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/92093ae4dc185041da2f59677820f20a546cd1": "4840da5b08ec4095f76ba6d2441061cf",
".git/objects/de/f34ba217a199a7d2f531f2b472430d40fc5c91": "7c354ed1ade029e0c42a18e9efa84f4e",
".git/objects/b0/e938acd6c11f684e8085661b28c5c0fa69dac5": "a72b330bbb1d964059145d0a3af87beb",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ef/d305541bd5fc4f99872d0b11897aef7da38fff": "2d130655622ee7d055538f1c60fe19f8",
".git/objects/ea/f9b0a9882792f78cc18ffc554c291e1c9c5e29": "a53af0bf46cbcac06da624f45014b2bc",
".git/objects/e6/9899853793df50740d00600e69910c4b94fc8c": "709b5019011d28ff6d5b2e97da1b5f26",
".git/objects/f1/d21d8d6fd7085512ce8002f0762e081db0fa27": "e2c285ab1d051b4a7033ad22b557820d",
".git/objects/f1/ddefb19dbebbae7c5ada19fbb44353c9436de2": "b63e8994e71b1a91aae38c9a7b744a98",
".git/objects/e7/bf17ec810a2a1706f2cd62384cd860e22d1ac8": "65bac484ac180bbe7fff493de99581fe",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/cb/90f21a83735c9b5887fc40d90264d95a85ad7b": "03cbdf472c5269336f1528fbaf4a5137",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2c/6c013ba4c94ce70162c04c0bb91095119d6b8c": "b202c51b82ad7e50071f9491b1248f48",
".git/objects/77/994057bc051b0eec4794baffb364f7f05bf4f8": "483155db50bcd8ad2d40a4cf33721969",
".git/objects/1e/ceb15a9693df7ef39fa8c849e391f2311e1e7a": "0e67baeb4c7fd8b47c0d955e0c3d9115",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/24/133151233ce9fde892245913ac5cb0c1039c11": "58846924b7dbec71a306f26cca66720f",
".git/objects/15/b3ed2cf77f8103c82ae9bc8de9a99553fc6a13": "227ce3c3091e35a1b5d9a8e684b9b512",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/40/56a9cc5ff3ea04a44d574cc2fbb0fe55c8d4ca": "ff3cbf53e5a1ecd5184989c71f89acd4",
".git/objects/78/4b73d9893d0f2ddbf188f32ee5d6569e7e5a5c": "e81f184b05a7316d53b414308f9271ca",
".git/objects/13/1f3acaa252a863c3b694d0f522ea750aebd81c": "eed35917566bae72d1c532b2464680d3",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/22/fc32f67d8524165bd7b5f2d563d4af1f233caa": "d64d73538b74ad9bf55cf10da746be79",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "17536f83461c33ab9db79c06ccf4b277",
".git/logs/refs/heads/main": "cc54a347b8994f973400593a08dbf040",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "ea636186e3f19c44f56c82e3028acd07",
".git/index": "b54a1b859f4cb96e0dc9d4e9875e4aab",
".git/COMMIT_EDITMSG": "7d7dceb4aeab6b928eb271120b5315b8",
"assets/AssetManifest.json": "1f9ee0177adc4a2687820269e59ba4e8",
"assets/NOTICES": "abc3d7660d7249e2c8eb0312667e8422",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "acdc8d96e331823bb4bdf7db9aa30e37",
"assets/fonts/MaterialIcons-Regular.otf": "c85dd75a74f65e09f82cdca973c74033",
"assets/assets/images/me_and_monkey_arc.png": "079a9d72809874f1d91699f17416beed",
"assets/assets/images/my_work/buck_the_critics/sl1-2_quick_review.png": "eb49cf936ae0590ead2dc93b5d78a0fa",
"assets/assets/images/my_work/buck_the_critics/sl4_calculated_result.png": "051a70332da6ba45a0706605214f6b0f",
"assets/assets/images/my_work/buck_the_critics/sl4_friends_list.png": "30adf8584c3ca299d9944de03c74c809",
"assets/assets/images/my_work/buck_the_critics/sl3_best_rating.png": "d8ce82e962e38a57f935b71848883d11",
"assets/assets/images/my_work/buck_the_critics/sl2_long_review.png": "3cfa481860bdb1dd4c5e4e5493333a85",
"assets/assets/images/my_work/buck_the_critics/sl3_good_rating.png": "a947a41e99244cad3c557433f10bdf41",
"assets/assets/images/my_work/buck_the_critics/sl2_search.png": "c632aa9d4f8f01730661dff019551de8",
"assets/assets/images/my_work/buck_the_critics/promo_graphic.png": "e479c4712df0ed869f022a411c74b795",
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
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
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
