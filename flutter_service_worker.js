'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "9ae8489dfa23b3ac7edbc1b2a6804d9e",
".git/config": "05915ef5a2b198bee6067c1d3186c34f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "bda4f34f6f3504bd47f1252638fd904a",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0e2490cb113f6d463113cf856fbe8e07",
".git/logs/refs/heads/main": "b58e0df20575f34c3e02293195cf41a0",
".git/logs/refs/remotes/origin/main": "1eae37dc790606b4b346f5fe33c68a00",
".git/objects/01/0282cd6a543fe262f887e37d297c4a1ae02ef7": "d6c50c55060fa7f4e64f5ded5cf8d485",
".git/objects/01/bcca7d1c23955f7aeda6a269b1b7f540802096": "635a6822e2a56f7f333d54c66b0234db",
".git/objects/07/d1b454a44e6dbe35514d05695f02617fb86038": "bacb667a0a57e91450ecd1b09e8de1ad",
".git/objects/08/5b77a0c08ac6cde47ab709f89655f693f73095": "7d7d8134cb2a766091c030efb95cb9f5",
".git/objects/0d/d68f360843dd0e01085e0a0bcddcf373b557f8": "e140a4b707e03c183f98e00cefdfc064",
".git/objects/16/8c5c83964adba80266b42444f27ce324bc59e0": "c61ea6b9b11a90ab5513a5184f4f34b6",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/26/798da4dd3feb04090f2db4b3693b4360329d71": "dc8d7d89a75d301189cd4b2ea318d55e",
".git/objects/29/fd086a0d5643a9d03ed7632f84757baa0d8bc2": "2cba1b28108ea4ab065024ca8856bf57",
".git/objects/2e/198729752554e3ab44176e3a7a20240207f570": "f75b687ec7a66842e9707b0ed6752df6",
".git/objects/30/6dac5ed8d40c1a67b51105b2c459a386061bc3": "0a17491a92c8dee602194b7eabdb73a1",
".git/objects/33/160f9ea430ff7ba6477df9b7dc959872ede131": "edb1144be5ef7c0d0628105f2327fbb6",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/35/fad6132cbd50508a8adec7cc64899736ebd94b": "cd1977114fb3e37b9de718202d989937",
".git/objects/38/e940c7012874b145ef9d9fc6fe3c9274c2fcbd": "6e964da06d472969fde6644f0d2c51ec",
".git/objects/44/077ac36be37ddd29abfa85c0c929f891cbbddf": "803f9b4fac94e9afcf4940f93ffac272",
".git/objects/46/1a44e04a0d7dc40abc5f4ff0a5939a1465b4ee": "2088304d468d75adaf5cf2a824d4047a",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/d868505e2057c8979c28455e83d45151faba3b": "38022a4ec46555940bd030043106f580",
".git/objects/4c/a2a7c226d2c3e26f0b9dde74214486d0baa896": "734657b1f27c72d07dd9e52a25c020c1",
".git/objects/4e/7af8ad82563702df3606fca73a99864c9442ad": "e0575691a64ab7779cfdea7baf9df7d5",
".git/objects/6c/2d492227708e839850e500670f583e4ddf8af4": "043720689510e0a7ba11434c9cc31bb6",
".git/objects/6d/30e46097da838e339288c1b30c312084433e68": "3e52b7d88937e7982307003f1563f189",
".git/objects/71/c6c313504ca412e7abf5c9eaf2001311a94c21": "ed581cd9447c9dc7d401256bc5d495fa",
".git/objects/78/d2953a4695b8148951ee9c51c64ee548c7c78e": "981c480402ccafacf2cce60d61099b07",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/87/531de5aefb7e130ab3b9ff07a5fa286aa92621": "903893161d770b1db4942daef50a1419",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/d41123112dcc05e645c65693277074ac106233": "3de645de309caa9346a728f03e403fdd",
".git/objects/8c/fd3abc737fa1d88c355d546646de045b3d6110": "876b01e4c27e779952a0d7908c6ad023",
".git/objects/95/cf5ef7b7a4de6532ca261970b2d9a72719da0e": "e5525d0319dc8e4f8d587de9dbe7f262",
".git/objects/96/5f268e91b7f468ea4ded85a8f2abcddfe1f5a9": "6cde620475753acf951a3fbb6b42aca1",
".git/objects/a2/6f8aa23c777c1e47c95806df1fdf8d61b97649": "7892f23c38a4400fdf5a6db32402fceb",
".git/objects/a4/8a365e6249c51b2e61cb4b77a471daf6e88ff4": "23daccabeff4b4f48e136dfb24662b42",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/a8/d49e4d7c05adfd9394ff57dfe0f0d3f8f13426": "ac8e7d17beb87be17787f1b5cbbcdd94",
".git/objects/af/40074d2c93aaed41c6dcbb997c1c13636347a6": "a3df3749dee081f70713e3abd1716693",
".git/objects/b5/79726182152166180e9c1d785d1ed5bf4f0dd8": "fa3b8a509ef367bcb94629722a4dc6f3",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bc/e47243091b1da8020deff84a80842bc822ab3a": "380e91dd6d109bca45eefa4003b185f5",
".git/objects/c2/6b27c4e7cf067bc8bb1ef4865b73b4623f2d1c": "19bfd7b1d64b4bb613c0c7a64189668d",
".git/objects/cb/658de24e096a4ccc71a05dfd559a5cb4f09829": "f0bb416e1c4c984cd7b1bedd19cd63b0",
".git/objects/cc/bf85cf610f725924e131d7351236ba0262118d": "30a2fcd8713e93958dc5041ccde42741",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dc/e5357d349f63918bc3102456690d5bf4cadc97": "df30c3e11586100078ba5ed62820b9db",
".git/objects/df/28fec69a3beb2e844b60f27b9c5bb1ac8a7d5c": "e62cc2e211e605b1d9d103f46733aedf",
".git/objects/e4/746b25d700dcf28615d479dec1806cfe7ed811": "89ddb6d1de25e8747ee8f18225255a95",
".git/objects/e8/45c8a9808635084f913abc89c7d022e9b1e143": "b1a32831ed67c12bdca6bf4cc3b41717",
".git/objects/e8/55dc987b0db3ccd24a8869a087233a0e124f27": "9b242467f4dfe05ce7d2727a68a1ea66",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/9e546fb5138b660d062a0f85f0b6fb849748a1": "23ee8652eae0368cb674836da41a5c0f",
".git/objects/fa/81d0cc454e3cb76ad2b16e97d09d6e390c48ba": "9190dbcf22d3f0b88a877e19fbdd02ae",
".git/objects/fb/7d2c1643e385213fa4fea0c0f12bbf7c47a005": "141079a093cde5f21fe1e7e21306a27d",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/refs/heads/main": "9678dcff54f83943cee35909052a4bdf",
".git/refs/remotes/origin/main": "9678dcff54f83943cee35909052a4bdf",
"assets/AssetManifest.bin": "bbed94b21588d2816db932deed24a04c",
"assets/AssetManifest.json": "6e7e00861ed000293802db5b629ed2df",
"assets/assets/arabic_logo.png": "3be89019a1dd4a4bfe7af22a0c2a25bc",
"assets/assets/codes_text.png": "10a39fc9c9332a2fd16f2414d9df1dd2",
"assets/assets/codey_logo.png": "7d776e99152bd4623bb25c48f9c17ced",
"assets/assets/insta_logo.png": "17d420e1e68ed809c5a8eed3a0a2d14b",
"assets/assets/small_logo.png": "7a55afc998341afe6085eea5cf0cf6ac",
"assets/assets/tiktok_logo.png": "da080ce28a7927045dadebb94aa2ffa3",
"assets/assets/tik_logo.png": "8afddbfd061698e88a306cdf5a129568",
"assets/assets/tik_logo2.png": "540f0a04283e267d5d58f99ccf1ee129",
"assets/assets/x_logo.png": "b22e736b69e2a1fbe91a18b53c0ca376",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/NOTICES": "1a1274a45c4da46d3966b08bbf23657c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "92d1cb2c6abce04b73545fde3bc1f054",
"/": "92d1cb2c6abce04b73545fde3bc1f054",
"main.dart.js": "9f6f9f3f3f9cf2d18a7fb8f51abb169e",
"manifest.json": "7edc86f2f75728deb0f8b5753342d21e",
"version.json": "dfd21fad20dd5b878a6c070740faaf57"};
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
