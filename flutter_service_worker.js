'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "36274f55fb807a932e1aaebba2cdd12f",
"assets/AssetManifest.bin.json": "c06a9f8fc0a56e5162c08215f7b67591",
"assets/AssetManifest.json": "6328f4ce9cf9861163ef18e9e382e71e",
"assets/assets/fonts/Lato-Black.ttf": "1233fdf19c04333c7f58af4eb8698452",
"assets/assets/fonts/Lato-Bold.ttf": "24b516c266d7341c954cb2918f1c8f38",
"assets/assets/fonts/Lato-Medium.ttf": "863b7dcd5ec2c3923122af25ce0f7e4c",
"assets/assets/fonts/Lato-Regular.ttf": "122dd68d69fe9587e062d20d9ff5de2a",
"assets/assets/fonts/Lato-Semibold.ttf": "3c6cfb1aebd888a0eb4c8fba94140fa6",
"assets/assets/icons/app-development.png": "41ad4b7b66ca99810de6bca12b21a678",
"assets/assets/icons/github.png": "b05e7c39077991c960e8392d4e98dfb7",
"assets/assets/icons/logo.png": "59f9aa8743e2512ca6f4fb6336b42f84",
"assets/assets/icons/maintenance.png": "19cce6be28e39fdc1675b7ea7b73e7ff",
"assets/assets/icons/menu.svg": "b280cffaf1280844345a8fbff6f8638b",
"assets/assets/icons/seo.png": "d7f9cd52eaa7963c989542b3419badfb",
"assets/assets/icons/upwork.png": "747ca0fe09496d662e862c69f84aa41d",
"assets/assets/icons/ux.png": "a5573d74210aee456a0a073e110b49d2",
"assets/assets/icons/web-development.png": "ef247263861261690ac6958d39695e08",
"assets/assets/images/bgstar.svg": "86e74575f2a2f80d282e4ffee28c75d7",
"assets/assets/images/circlebg.svg": "dd005854a2288a7b3e13864e5bd5d8ca",
"assets/assets/images/downloadIcon.svg": "3d880d362b7b35bc1966e837b584d2b1",
"assets/assets/images/extracttext.png": "61b577a90899026588712957b3c3ecc5",
"assets/assets/images/imagetotext.png": "585d6a34261be262c0894df6e2df1399",
"assets/assets/images/instaIcon.svg": "210914433ed9f36d5bed20d7295e49d4",
"assets/assets/images/linkedinIcon.svg": "4d00b0426c12f2b4b50a77fc9a21d88a",
"assets/assets/images/logo.png": "dd7fa541ef84caeda716b9d79f7d5c85",
"assets/assets/images/notepad.png": "b63e0904b5a6b3f97e974036bd802c66",
"assets/assets/images/paraphraser.png": "e5cdd6dfa9af57b84de07365a8589422",
"assets/assets/images/Pic.png": "1cc7a9f656400a34935eb122a1d113a8",
"assets/assets/images/pic2.png": "2eda84483498984f1bb2fef8eac32c63",
"assets/assets/images/profile.png": "68a61e4bd5f64f977d22af966719e676",
"assets/assets/images/profile.svg": "93439e37fa691b103f8c6a68a6d2d44a",
"assets/assets/images/profile1.png": "7797a6cf6dcb9b2c3cc22057dc801994",
"assets/assets/images/summarizer.png": "9cbb31277eb63164c9e45260813928d9",
"assets/assets/images/tdee.png": "d4dcf994ae60cb31fae6134723344358",
"assets/assets/images/translator.png": "d60fb29f4820da559016d3c0761c97b2",
"assets/assets/images/trueconvos.png": "a074833913c3fbc4781c1b52fe5f6228",
"assets/FontManifest.json": "f48406dee376c0c21d383e6b23fce472",
"assets/fonts/MaterialIcons-Regular.otf": "efd247fe77bae2452ac083195a5edad2",
"assets/NOTICES": "24ee6bd2b80f11e48990f58f5af6afb9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "d0f8ba93a27d2b5212f0895388f4d64b",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "5b9ec50c45cf5b0e90dd89158c18a63e",
"icons/Icon-192.png": "f0af6c853468c33ae8dac0e6adb7a0a5",
"icons/Icon-512.png": "d0f8ba93a27d2b5212f0895388f4d64b",
"icons/Icon-maskable-192.png": "f0af6c853468c33ae8dac0e6adb7a0a5",
"icons/Icon-maskable-512.png": "d0f8ba93a27d2b5212f0895388f4d64b",
"index.html": "44bc1f9cdd8e20ac1cd8683a5a0f2931",
"/": "44bc1f9cdd8e20ac1cd8683a5a0f2931",
"main.dart.js": "2ed5ab43aa3b6d1ded067e20700337c6",
"manifest.json": "d8fe34f7ae4c072a77b924e01dac8a50",
"version.json": "9b818ca9511483c901bed1545384376c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
