'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "8b9479c17c06fb88844e361632b85505",
"assets/AssetManifest.bin.json": "07241ec8ba3cbbffa571fb782a672161",
"assets/AssetManifest.json": "ef0cbce6e8ad73bab8607ede8377fe69",
"assets/assets/animacao/splash.json": "cf495e6becca2cae1d98e443a6d4a57d",
"assets/assets/images/AcessoriosMateriaisApoio.webp": "d9068529495f59a1c93a3bf46974cbcb",
"assets/assets/images/AlisamentosTransformacoes.webp": "221a3e8e9bb732887a330369e9bc413a",
"assets/assets/images/Ampolas.webp": "abdb5c219e66a6b1d3c511d9f605ce8b",
"assets/assets/images/AmpolasReconstrutoras.webp": "9f33c508f5bbf13c0b621c69208442c6",
"assets/assets/images/ColoracaoClareamento.webp": "9cc501443a5e7f52d4775ff649eae732",
"assets/assets/images/Condicionadores.webp": "41f20d148a025dafcabf1d8a4e29d9ce",
"assets/assets/images/CremesPentear.webp": "b797b62bd3ee572ec2ca45b69005b2e1",
"assets/assets/images/descart%25C3%25A1veis.webp": "8eb91c009f1becb13bda81327b726974",
"assets/assets/images/desinfetantes.webp": "1abae80110ba86a25ad986a5f732dfd8",
"assets/assets/images/FinalizacaoModelagem.webp": "aa31ea1120e16e8da417cf62653f9f3e",
"assets/assets/images/FluidoBrilho.webp": "af4817eefaf45e4e5171f555c49d23c1",
"assets/assets/images/fundo.png": "a312fc7b03d75386ee9947fbeefbc31e",
"assets/assets/images/HigieneEsterilizacao.webp": "cde09995b7995c15493b466664c8d61f",
"assets/assets/images/LavagemPreparacao.webp": "900fc99eb53e4fe8ff3f62f287d4aa87",
"assets/assets/images/limpezaequipamentos.webp": "af5374a4cdd962d9e686427e2a804ed3",
"assets/assets/images/logo.png": "ecf82490eaf913d6159bc4569d6071e2",
"assets/assets/images/LuvasCapas.webp": "a1c7e66dbd2383b00ec23db2234355c1",
"assets/assets/images/LuvasMascarasAventais.webp": "8c705801557875fb99a4ffab46190c5d",
"assets/assets/images/MaquinasTesourasNavalhas.webp": "18c5255b9c6ebc68136732a811f88618",
"assets/assets/images/MascarasHidratacao.webp": "99440d678509bc72f50f6ae06f594808",
"assets/assets/images/MascarasPos.webp": "5b5547ecf8d4df4f8778c5c721eb170a",
"assets/assets/images/MascarasTratamento.webp": "459ebd0a3362d42aab68233aea10c743",
"assets/assets/images/MoussesAtivadoresCachos.webp": "fef96df0ddb9edae3f4235b3386d01b9",
"assets/assets/images/NeutralizantesEstabilizadores.webp": "bd59f4364d715ce467b036c96fa25a4c",
"assets/assets/images/Oleos.webp": "b2a667a9646ad87866aabcee0dd6752f",
"assets/assets/images/Oxidantes.webp": "7b7701fbc1c316b225c5cfcddc456159",
"assets/assets/images/PentesEscovasPranchas.webp": "59e60c1f6964ac2d6a3c23e9be81ac74",
"assets/assets/images/PinceisPotes.webp": "9c13f0347c6c3349e62b6c24445ff7bd",
"assets/assets/images/PoDescolorante.webp": "02a98c9dfa3e1058cd2ca16faf4e6393",
"assets/assets/images/PrendedoresBorrifadoresPotes.webp": "e57200f56bf1534f15432f85b9feb066",
"assets/assets/images/ProgressivasBotox.webp": "01f1478db5b7ac508e434441c12e5d49",
"assets/assets/images/ProtetoresTermicos.webp": "f7a1729b500a8beec2135227e0fd0bfc",
"assets/assets/images/RelaxantesPermanentes.webp": "194d4770beb027931b5af32231bf4af1",
"assets/assets/images/RemovedoresColoracao.webp": "4ca359ad218b16e59de8b7b959e1563f",
"assets/assets/images/ReparadoresPontas.webp": "3a718cc800d832cfb8132b8a5e05bbfb",
"assets/assets/images/ReveladoresAtivadores.webp": "f02ca5755804debf4cc977bcde28130c",
"assets/assets/images/SecadoresModeladoresCachos.webp": "7559f5f301a6de6c341ba9f4979f1eb9",
"assets/assets/images/SerumFinalizadores.webp": "4ef4c246f9e9ac394ae61ec571ab649c",
"assets/assets/images/Sprays.webp": "d5d2ac50929df94ef5bcd077c92721ac",
"assets/assets/images/SpraysFixadores.webp": "59a2b4eefe4d5abe0bc58a8e9344a07e",
"assets/assets/images/TinturasTonalizantes.webp": "9e599f97f0bc154f0cc4157e663dbd50",
"assets/assets/images/ToalhasCapas.webp": "31a7ea0f0c55052aefd03756ea6ea231",
"assets/assets/images/TratamentosReconstrutores.webp": "61846d7841b12cbf9acea27e84398a66",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "687af51ea004c28033d045001f1662ed",
"assets/NOTICES": "ef9a03ecfd8164d700fdb80706e2ef74",
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
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "6abd8a6f3dfd13b4a83e4fd9ae76b239",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "02487baf5c497112f3d808eb28cc43d9",
"/": "02487baf5c497112f3d808eb28cc43d9",
"main.dart.js": "1d845fe42a56c9ba6ea11a6d0fbbaf71",
"manifest.json": "2b8397fa59b6e61371809989e1a18d89",
"version.json": "c61c347859697207f17945ee4ed72697"};
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
