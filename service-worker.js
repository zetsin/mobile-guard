"use strict";var precacheConfig=[["/mobile-guard/index.html","d3bd73cb8e65f4fcab7683bcfc9820cb"],["/mobile-guard/static/css/main.2e8e29e7.css","5799847bf2bc5ae2626a242b02e93256"],["/mobile-guard/static/js/main.710ef300.js","1801238e0acce9f0bfb506d66171562e"],["/mobile-guard/static/media/answer1.56aa5a36.png","56aa5a3638078aaea31bbf096dcaf693"],["/mobile-guard/static/media/answer1.cf792b5b.png","cf792b5b1e066d75ff236986b1a6f936"],["/mobile-guard/static/media/answer1.d3d11732.png","d3d1173274f4da7000717f928959b465"],["/mobile-guard/static/media/answer1.ea8cf3da.png","ea8cf3da31a60339fcb1aa8f178c3ed9"],["/mobile-guard/static/media/answer2.0552c1fc.png","0552c1fc8ddf45334aab9dbca9b4090e"],["/mobile-guard/static/media/answer2.5c3413d6.png","5c3413d62cef8f70cac710a16afa59ec"],["/mobile-guard/static/media/answer2.ab160ab4.png","ab160ab485d8563861d39424bddabc27"],["/mobile-guard/static/media/answer2.b26e7b35.png","b26e7b35f3faaea1596d3858be12c7da"],["/mobile-guard/static/media/answer3.459e7782.png","459e77823dfde457312559611d8d6f86"],["/mobile-guard/static/media/answer3.5bcedf26.png","5bcedf266dcd698111249996ca9e8877"],["/mobile-guard/static/media/answer3.6f603823.png","6f6038234e93db27af2defc8c3ee6a30"],["/mobile-guard/static/media/answer3.b0622269.png","b06222693c022db5b293b7d415beef48"],["/mobile-guard/static/media/background.c9459dfb.png","c9459dfb195358b7df2e8eabc79c15cb"],["/mobile-guard/static/media/bgm.a4368706.mp3","a4368706fb3e3ecf6b36f9c198132900"],["/mobile-guard/static/media/black.c8a1ec41.png","c8a1ec418e56abeb3593eb9c98160d6b"],["/mobile-guard/static/media/corner.b4f7414d.png","b4f7414da3b741241898a5948864bea3"],["/mobile-guard/static/media/desc.45a7d0ae.png","45a7d0ae3725cd5ce4fe63124b4f84c0"],["/mobile-guard/static/media/desc.7875775a.png","7875775a7b4d23f3311729c23b929d5f"],["/mobile-guard/static/media/desc.78d7836b.png","78d7836b002afa5be037d38618f1954a"],["/mobile-guard/static/media/desc.b3150b17.png","b3150b170cac7784397e8bbf831499ca"],["/mobile-guard/static/media/desc.c3c754a9.png","c3c754a9b8ea93366fa968c8fcb750f0"],["/mobile-guard/static/media/door.51efeba7.png","51efeba7d32e498a169ad26b1b8c9e63"],["/mobile-guard/static/media/light.13bf0640.png","13bf06407ce79fdc37600eb60eeb9117"],["/mobile-guard/static/media/logo.440bc190.png","440bc19029c2a6ef694bc6b6a1d75461"],["/mobile-guard/static/media/main.8d4d2a67.png","8d4d2a672682b7def869ee1cecc0165c"],["/mobile-guard/static/media/me.4036b70b.png","4036b70b752f1edddf40354c070c2920"],["/mobile-guard/static/media/me.82c49f0e.png","82c49f0e865c571333f776367f80739b"],["/mobile-guard/static/media/me.a8ec3ae3.png","a8ec3ae3fec7a951f330496463065c6b"],["/mobile-guard/static/media/me.c91caba8.png","c91caba8e36e1999c547d34e833e9db5"],["/mobile-guard/static/media/me.e7273da7.png","e7273da7d5de488524d958d3f6ec7bf6"],["/mobile-guard/static/media/parents.c500e3bf.png","c500e3bf46a900522c05fbfa0ee96e98"],["/mobile-guard/static/media/phone.78b14f20.png","78b14f208be25919562bcf704e0d3afe"],["/mobile-guard/static/media/photo1.24918b4e.png","24918b4eb8a1ded59108825af01694ac"],["/mobile-guard/static/media/photo2.8f0dedf2.png","8f0dedf26879cbdf952098a288108675"],["/mobile-guard/static/media/photo3.04ca08ee.png","04ca08ee1f225b62a32842ff76911e67"],["/mobile-guard/static/media/photo4.ebe21ee8.png","ebe21ee836d85336e0500ca739aa54a9"],["/mobile-guard/static/media/question.599ce79b.png","599ce79b7c7e2e8b585417fce615b2e8"],["/mobile-guard/static/media/question.62305559.png","62305559729a0f3923a833cdc3766625"],["/mobile-guard/static/media/result1.c91df00e.png","c91df00e2728f9d4175db8e550cf56e9"],["/mobile-guard/static/media/result2.017eea5a.png","017eea5ade516a92235e6b7de2321129"],["/mobile-guard/static/media/result3.a393d479.png","a393d4792f01ffa7b9e21166d5143c0b"],["/mobile-guard/static/media/result4.96a10f0e.png","96a10f0ed7a6384a7f822831ee5c5f21"],["/mobile-guard/static/media/robber.7684bad3.png","7684bad3929de4bf930f286b1a04554d"],["/mobile-guard/static/media/roboto-latin-100.987b8457.woff2","987b84570ea69ee660455b8d5e91f5f1"],["/mobile-guard/static/media/roboto-latin-100.e9dbbe8a.woff","e9dbbe8a693dd275c16d32feb101f1c1"],["/mobile-guard/static/media/roboto-latin-100italic.6232f43d.woff2","6232f43d15b0e7a0bf0fe82e295bdd06"],["/mobile-guard/static/media/roboto-latin-100italic.d704bb3d.woff","d704bb3d579b7d5e40880c75705c8a71"],["/mobile-guard/static/media/roboto-latin-300.55536c8e.woff2","55536c8e9e9a532651e3cf374f290ea3"],["/mobile-guard/static/media/roboto-latin-300.a1471d1d.woff","a1471d1d6431c893582a5f6a250db3f9"],["/mobile-guard/static/media/roboto-latin-300italic.210a7c78.woff","210a7c781f5a354a0e4985656ab456d9"],["/mobile-guard/static/media/roboto-latin-300italic.d69924b9.woff2","d69924b98acd849cdeba9fbff3f88ea6"],["/mobile-guard/static/media/roboto-latin-400.5d4aeb4e.woff2","5d4aeb4e5f5ef754e307d7ffaef688bd"],["/mobile-guard/static/media/roboto-latin-400.bafb105b.woff","bafb105baeb22d965c70fe52ba6b49d9"],["/mobile-guard/static/media/roboto-latin-400italic.9680d5a0.woff","9680d5a0c32d2fd084e07bbc4c8b2923"],["/mobile-guard/static/media/roboto-latin-400italic.d8bcbe72.woff2","d8bcbe724fd6f4ba44d0ee6a2675890f"],["/mobile-guard/static/media/roboto-latin-500.28546717.woff2","285467176f7fe6bb6a9c6873b3dad2cc"],["/mobile-guard/static/media/roboto-latin-500.de8b7431.woff","de8b7431b74642e830af4d4f4b513ec9"],["/mobile-guard/static/media/roboto-latin-500italic.510dec37.woff2","510dec37fa69fba39593e01a469ee018"],["/mobile-guard/static/media/roboto-latin-500italic.ffcc050b.woff","ffcc050b2d92d4b14a4fcb527ee0bcc8"],["/mobile-guard/static/media/roboto-latin-700.037d8304.woff2","037d830416495def72b7881024c14b7b"],["/mobile-guard/static/media/roboto-latin-700.cf6613d1.woff","cf6613d1adf490972c557a8e318e0868"],["/mobile-guard/static/media/roboto-latin-700italic.010c1aee.woff2","010c1aeee3c6d1cbb1d5761d80353823"],["/mobile-guard/static/media/roboto-latin-700italic.846d1890.woff","846d1890aee87fde5d8ced8eba360c3a"],["/mobile-guard/static/media/roboto-latin-900.19b7a0ad.woff2","19b7a0adfdd4f808b53af7e2ce2ad4e5"],["/mobile-guard/static/media/roboto-latin-900.8c2ade50.woff","8c2ade503b34e31430d6c98aa29a52a3"],["/mobile-guard/static/media/roboto-latin-900italic.7b770d6c.woff2","7b770d6c53423deb1a8e49d3c9175184"],["/mobile-guard/static/media/roboto-latin-900italic.bc833e72.woff","bc833e725c137257c2c42a789845d82f"],["/mobile-guard/static/media/shadow.d2d8a9c7.png","d2d8a9c75882be89047c8d9a3fe158ba"],["/mobile-guard/static/media/story.78845f5c.png","78845f5cc1531fa3effe85fac3565423"],["/mobile-guard/static/media/talking.5f3f870f.png","5f3f870fc9deac900dfab60e1beee550"],["/mobile-guard/static/media/talking.cfda3af8.png","cfda3af8a0be73f930879f171334bcf2"],["/mobile-guard/static/media/wall.66d7c346.png","66d7c346fd54f9711ef01f3385d39bed"],["/mobile-guard/static/media/win.d3664690.png","d366469011002565a551b4af618b22d7"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,i){var d=new URL(e);return i&&d.pathname.match(i)||(d.search+=(d.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),d.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],i=new URL(a,self.location),d=createCacheKey(i,hashParamName,t,/\.\w{8}\./);return[i.toString(),d]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(i){return setOfCachedUrls(i).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return i.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),i="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,i),e=urlsToCacheKeys.has(t));var d="/mobile-guard/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(d,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});