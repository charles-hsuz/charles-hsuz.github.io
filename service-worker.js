if(!self.define){let e,i={};const c=(c,a)=>(c=new URL(c+".js",a).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(a,d)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let r={};const f=e=>c(e,s),b={module:{uri:s},exports:r,require:f};i[s]=Promise.all(a.map((e=>b[e]||f(e)))).then((e=>(d(...e),r)))}}define(["./workbox-f2efd100"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"9ac8b92c5d00ae919e703ab02e27c6ad"},{url:"about/index.html",revision:"8c692667959a5e6c33f9a256c7159c34"},{url:"archives/2022/12/index.html",revision:"ae1d3930df9ea24f1df490074c7d542a"},{url:"archives/2022/12/page/2/index.html",revision:"d096262eea637aa1aaabf08a4fc750d7"},{url:"archives/2022/12/page/3/index.html",revision:"38828e11d7a1f4e13c2ab53cb75b65d1"},{url:"archives/2022/12/page/4/index.html",revision:"19ccf378ad50c0bb22ad092997c8eb75"},{url:"archives/2022/12/page/5/index.html",revision:"76774a978359c8f27442c70bb08ca523"},{url:"archives/2022/12/page/6/index.html",revision:"6dde0dba85d9d33aeb3a5213bdf9fa2c"},{url:"archives/2022/12/page/7/index.html",revision:"012ad151ebcf7f44433ff7e56447dd4b"},{url:"archives/2022/index.html",revision:"f851e4be7c09aa21022c711a34392e89"},{url:"archives/2022/page/2/index.html",revision:"b5298fd8e68e17e1ea0f8c4fb0ca65c6"},{url:"archives/2022/page/3/index.html",revision:"dc842dc39908946190681374c0ebda87"},{url:"archives/2022/page/4/index.html",revision:"60a92a6cce2ec904adfed291f9eab7ab"},{url:"archives/2022/page/5/index.html",revision:"44b7b75f1f959259b8287877380965b5"},{url:"archives/2022/page/6/index.html",revision:"d1e30e8ada47873afe3925e64b0a2e8a"},{url:"archives/2022/page/7/index.html",revision:"702233cae4d8f0d600348c673cfaf95d"},{url:"archives/2023/01/index.html",revision:"17b9a3ecb958d4e2c4f003b5e5b6935a"},{url:"archives/2023/01/page/2/index.html",revision:"3eef473d576b26d4f0be329330b480b2"},{url:"archives/2023/02/index.html",revision:"9c4d5734dff6b35fbeefc8c5164fbd87"},{url:"archives/2023/index.html",revision:"0dae5f8dc3777f229fae52106bf07abb"},{url:"archives/2023/page/2/index.html",revision:"98548a3f8eaa3bede89d345240ac5c3e"},{url:"archives/index.html",revision:"d3e1120f3e0a4c1c29593c3a765a2c18"},{url:"archives/page/2/index.html",revision:"05c9249715b2b9f4874095f13709dd1a"},{url:"archives/page/3/index.html",revision:"3c0f7622cdb1d15a5b0d286a8f79600a"},{url:"archives/page/4/index.html",revision:"bf7a77f494228419b4f2fb9bcccd6079"},{url:"archives/page/5/index.html",revision:"a056f5cb115bf07e3765f9a74c1ae2a3"},{url:"archives/page/6/index.html",revision:"70897f6ecdfc8ac314219e4605373131"},{url:"archives/page/7/index.html",revision:"68dfd0833e90b617eab8235a251add9f"},{url:"archives/page/8/index.html",revision:"5904853b4a938ebd81280fb072cf34bb"},{url:"bb/index.html",revision:"42f813cdb5c0da23f9e7e28625bacf70"},{url:"categories/help/index.html",revision:"81f7e9fd76d7b85bda243695fb9b8897"},{url:"categories/index.html",revision:"aa6a20787a8fa9f6959f041f3373cf9c"},{url:"categories/刷题笔记/index.html",revision:"8852a77c6b0562d8847e4d2b5c62f4bc"},{url:"categories/刷题笔记/page/2/index.html",revision:"98ca50554a1eccb536b9fe9f1962557d"},{url:"categories/刷题笔记/page/3/index.html",revision:"56598c43ffcb6e3112cef288dbd50fb1"},{url:"categories/刷题笔记/page/4/index.html",revision:"246ac4461a2b78dd1d4fb53b183b33f9"},{url:"categories/刷题笔记/page/5/index.html",revision:"0cb13f87611c760e7553610bfc70cd80"},{url:"categories/刷题笔记/page/6/index.html",revision:"fc4827cccce9be316dadd358cc165efc"},{url:"categories/博客美化/index.html",revision:"c8f9a5edd767ec076d2acd6407aa9d7c"},{url:"categories/技巧/index.html",revision:"73079f79e8a26554285ddaba05cc86ca"},{url:"categories/教程/index.html",revision:"7478399b602e69a5df1e5a8e64449af8"},{url:"categories/杂谈/index.html",revision:"f57c28200b4b53b82f52a597119adb1b"},{url:"categories/算法教程/index.html",revision:"a862b260934fb2400f1316b74ac73433"},{url:"categories/语法教程/index.html",revision:"f54bcb211621df35e4f5115e2cd57d9a"},{url:"categories/软件分享/index.html",revision:"bf670d109c801b9ca744ca753419833a"},{url:"cc/index.html",revision:"ca82a2f57f6000da7c2bb2f6a06958f7"},{url:"charts/index.html",revision:"9c36b0a2c370141e02ea7e5a060fcb12"},{url:"cookies/index.html",revision:"3fccd6ed32197c585c5a90bb1b74ac71"},{url:"css/essay.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"css/fire/css.css",revision:"0c43f62bfdd01b94f50260002c184f98"},{url:"css/fire/reset.min.css",revision:"e24aadcaa4dbda8f24b04392fb7ac784"},{url:"css/fire/style.css",revision:"b21970d7d342c03047516175cd64717a"},{url:"css/index.css",revision:"0b2e068c8b2e185c4ec3d51dc72323e5"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"fire.html",revision:"71c6162ad37c007f092c4b17ead1e461"},{url:"fonts/iconfont.eot",revision:"8d33e59818fb81f8c2067f662bdd8471"},{url:"fonts/iconfont.svg",revision:"db1a1a7226bee0e78542d5d97aeb6f68"},{url:"fonts/iconfont.ttf",revision:"c87c81f8ca9cc0110c487c1334cee217"},{url:"fonts/iconfont.woff",revision:"673fbe412307d14f6c5d26c774ab5e1f"},{url:"fonts/iconfont.woff2",revision:"5620df603c7a8fe5dd00d44cdf040bbb"},{url:"help/index.html",revision:"f8ba100ac64c484af5ffb4a54aacec42"},{url:"img/[2996]上陸スナハマ港-65189178.jpg",revision:"324889dd63a8e4461a649cb9dfff9ea4"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/AI.webp",revision:"a0f76ea8f77d57e5498dd9902c67a18f"},{url:"img/archive.png",revision:"e309fab77ea77743f03a5935e58710b5"},{url:"img/backgroung.jpg",revision:"53960c6f38bd456e4a6b6e5083477094"},{url:"img/banner_defalut.jpg",revision:"324889dd63a8e4461a649cb9dfff9ea4"},{url:"img/banner.jpg",revision:"15e8e8013100c198d7ae202ba6509533"},{url:"img/cpp.webp",revision:"72fc0b5f2aedb198deafde6d229c21ec"},{url:"img/default_cover/cover1.png",revision:"0c7a0bbb6284ec2eb3131758cd6b0588"},{url:"img/default_cover/cover2.png",revision:"64c57bba569ff3a19a08b882a6fb405e"},{url:"img/default_cover/cover3.png",revision:"91cf2df02a422e7be32801c0d9615cf5"},{url:"img/default_cover/cover4.png",revision:"be894735f420c71f4d3a2104dc281203"},{url:"img/default_cover/cover5.png",revision:"7a9f2463d61352f8ca16966847bda296"},{url:"img/default_cover/cover6.jpg",revision:"4f6747719ab350bd195e88214f21cd80"},{url:"img/default_cover/cover7.png",revision:"ca0a29edb756224d2b25ba45b433fb79"},{url:"img/default_cover/cover8.png",revision:"75d091b601d591be2963974dc5e6777c"},{url:"img/default_cover/cover9.jpg",revision:"66d77f65a9fc880d287ee7ad5892408b"},{url:"img/edu.jpg",revision:"84689d7570770385fbf6ab9a4717ae32"},{url:"img/edu.png",revision:"dd8d0e6ce3334d89b6532c2599435218"},{url:"img/favicon.png",revision:"91299506dd20edc5fb2ba4f82f7f18e1"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/head.png",revision:"d4131daedc501e87c87367c9ddcaf3c8"},{url:"img/index.html",revision:"daa96fa1d6dfc4aa165da5c4ddaeb13f"},{url:"img/INTP.png",revision:"67391b367ecd96266f8784d10caf2536"},{url:"img/INTP.svg",revision:"bfd5a1fdb289a27d984eedb7e9ffcd08"},{url:"img/logo-minecraft.svg",revision:"e31a1564996c886a1945c9e1f294cde9"},{url:"img/map.jpg",revision:"d559bcbdad05a1b1f6e4bcc1cc0e451e"},{url:"img/MC.jpg",revision:"c28172a126fb8bd578ec4895a87ad972"},{url:"img/myself.jpg",revision:"b0e717b70883da452dd3e76825ecd9b3"},{url:"img/pwa/128.png",revision:"98b3d2c5ce8f6bfc759b6199155d160e"},{url:"img/pwa/16.png",revision:"88777cfea241867923bdd69ab4181ad5"},{url:"img/pwa/256.png",revision:"9d9842878816ebd39fcba39e58c84a25"},{url:"img/pwa/32.png",revision:"49bdcc895228d41deb9337a7df16679a"},{url:"img/pwa/512.png",revision:"64c09fba74a4c55c580c50dc34e51751"},{url:"img/pwa/64.png",revision:"e2b9a45b8f32c1897dc2a447f8a401a5"},{url:"img/pwa/favicon.png",revision:"64c09fba74a4c55c580c50dc34e51751"},{url:"img/pwa/pwaicons/144.png",revision:"74543a328791d5a145d457c726a1ae02"},{url:"img/pwa/pwaicons/192.png",revision:"9013916051d96b513f3e15ac39e9f867"},{url:"img/pwa/pwaicons/36.png",revision:"d3077a5c5fc0da986a3dd895f1dde186"},{url:"img/pwa/pwaicons/48.png",revision:"31a5a73fcd3b224aa31994e0160a1ebf"},{url:"img/pwa/pwaicons/72.png",revision:"9712e1caea86d8a34de0788111a3bcf1"},{url:"img/pwa/pwaicons/96.png",revision:"59e9511a6181b8f9c622103e25efdca6"},{url:"img/uparrow.png",revision:"7263ecc5f42d7cfea8c5e66ce23a743c"},{url:"index.html",revision:"bb1087ee95bbee749ef83f53371cd4be"},{url:"js/continue-aplayer.js",revision:"96e029e2b6929a2ce6932dcb779a0ed5"},{url:"js/custom.js",revision:"97bb9a502afd11e8ac220775016a2860"},{url:"js/custom/ascii.js",revision:"9bb2715bed11a52d9ae3903d18506045"},{url:"js/custom/ex-search.js",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"js/custom/fire.js",revision:"20710cfedf535a04638bfebae7c14f7f"},{url:"js/custom/hsu.js",revision:"4d9e8022419fb378477736c6c6bccbdf"},{url:"js/custom/installPWA.js",revision:"23685d6dac2d96057b71cc4869b855e8"},{url:"js/custom/rightmenu.js",revision:"810a556d38a38f80c1a88118103058de"},{url:"js/fire/21012315.js",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"js/fire/fscreen@1.0.1.js",revision:"ba44160f9adb04fcc353b77c4751523a"},{url:"js/fire/MyMath.js",revision:"0424d086a2a0411818fb6fbf8471dfec"},{url:"js/fire/script.js",revision:"4fc063b667b48d4e8a5907fb11682f5c"},{url:"js/fire/Stage@0.1.4.js",revision:"849c05f044e81f1a1bcf7a0e353fcfb6"},{url:"js/jquery.js",revision:"30792621ca010e3c5d5f98162629439f"},{url:"js/load.js",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"js/main.js",revision:"88aced9e00713346dbf5f92453a349b2"},{url:"js/search/algolia.js",revision:"af00464ac55e585d3e3ea2d579bde752"},{url:"js/search/local-search.js",revision:"aea55acb22a3b51ad16057b0ea52c0a9"},{url:"js/tw_cn.js",revision:"bc064917c366036544975274bb20a01d"},{url:"js/utils.js",revision:"e95ad73d5170f72ae1596b3d9abb7ed3"},{url:"link/index.html",revision:"2143175c52e8ed0af0e588b2b30920e2"},{url:"mouse/mouse.css",revision:"d75680ce4603d3812aee12994f6c96fa"},{url:"music/index.html",revision:"a08bbbbdf30c3e078f72283d101fcab4"},{url:"page/2/index.html",revision:"16d7614753ab313ef9ca25fee831d52e"},{url:"page/3/index.html",revision:"791acaa06433f8d2d32e370dd741a08a"},{url:"page/4/index.html",revision:"a9a9dbe7495b408ab06e9f613d7ef94a"},{url:"page/5/index.html",revision:"e2e3cc43e36eefd46aa3f589612b1129"},{url:"page/6/index.html",revision:"dba6a9b2bac0254120dd33e7123c51c5"},{url:"page/7/index.html",revision:"ff733bbe0175a096d7ed4ef3a38d7554"},{url:"page/8/index.html",revision:"d325a45b2b1fbdfb1f0cce92eaf6e4e9"},{url:"posts/130da42f.html",revision:"f7ba6afe88ffbfc766a417b130f2f2bb"},{url:"posts/16518a5d.html",revision:"0894f308f1cf545706eca55b7e15ed76"},{url:"posts/19cf8ae9.html",revision:"957f9443747bf274b42449cf10293178"},{url:"posts/1d63791b.html",revision:"e240ffc98fa708774a0c608809f05bc1"},{url:"posts/1f186d6f.html",revision:"d99e7cef65645f5f706ea81faa436775"},{url:"posts/20c47d09.html",revision:"bd24a3625a07ae0e23312641949225f4"},{url:"posts/25df28d4.html",revision:"9f996e7e810549f1b6e8cc822fd326c2"},{url:"posts/2981d3e8.html",revision:"08fb21661e75e7945ec1031f0be2d0cb"},{url:"posts/29ce1390.html",revision:"76c37e3ed1413de048949eced56102a5"},{url:"posts/2bf30a8f.html",revision:"885839f4fdc2fd9f2361056efb0f52e3"},{url:"posts/2cd2b7cf.html",revision:"169920db1121786df2c11c3d8b832db2"},{url:"posts/2dd8bc82.html",revision:"b00ff8295a59a120866e091342bb4139"},{url:"posts/3012010d.html",revision:"4998d859131d78499794bc1a9904f38c"},{url:"posts/30226dd9.html",revision:"63333ccd075fe05305454edc418fc733"},{url:"posts/3179ac2a.html",revision:"d73ec811a54437776b73f894c700b4f3"},{url:"posts/386b32f2.html",revision:"54af78a41746c56ae4d3821da14edbd4"},{url:"posts/3a6de62a.html",revision:"d68ed3f4d3f6991616f18407b6caddf2"},{url:"posts/3b9a0bd5.html",revision:"e8c5c0680f930f1cc5341e296cd44256"},{url:"posts/3dd7ffa7.html",revision:"f164335221f6648e2b5fc9c73743a59c"},{url:"posts/3e6df65f.html",revision:"778142c2e025bbf8848effff426694de"},{url:"posts/418342b5.html",revision:"2dac20ffc77a9656dc2dd5652957855b"},{url:"posts/43ef268c.html",revision:"6557d5313be60246897d1d40a4a51a8a"},{url:"posts/4699cb3f.html",revision:"300c83cdbefe7e39374b467d08c0cc76"},{url:"posts/47b007d5.html",revision:"68ea4622f03f44adac945bb7f4319e2d"},{url:"posts/48946740.html",revision:"889cb9e7460d2e47d8d1cd61853ef1c7"},{url:"posts/48b938d1.html",revision:"245183aac09369240cf596d6e468ee4d"},{url:"posts/4ad0cf31.html",revision:"9e32d49e9cd842ee2125b5a96e17b62d"},{url:"posts/4d006364.html",revision:"0d4ecbd4420d49ee4fc7f7fc3491ed55"},{url:"posts/4dc77c26.html",revision:"ddda0bae017a37d356c01a00f5738ba9"},{url:"posts/542f557.html",revision:"8041c296b483210ec4415ff0723eb3c3"},{url:"posts/5487c88e.html",revision:"44d39e7ce34459e8bb5ffec2e6ceecc9"},{url:"posts/579c41ee.html",revision:"d18c193fb9638f3e80c0694e33179fca"},{url:"posts/5a42efcf.html",revision:"16803940285b2c91bde423da6e914338"},{url:"posts/5a8b87c.html",revision:"d50d65c3b8d58cb60cac924baebef403"},{url:"posts/5e641f58.html",revision:"718d563e76a75d87c5cf58aa0e9ae20f"},{url:"posts/5f6267a3.html",revision:"6d0b5ac8f93b20bfa1bb4a465d78a0b1"},{url:"posts/5f82cc62.html",revision:"b01369da4a6260d38929fb3cf8e83110"},{url:"posts/6109666d.html",revision:"8c4650f6c42f1a8cb1c208d4f7f71917"},{url:"posts/6287ead9.html",revision:"de0d45da9e18e2e74a021db99a7f7d42"},{url:"posts/67ad6f26.html",revision:"ccb626d49d16bfde16607ce511bc9492"},{url:"posts/69f92217.html",revision:"54eba6a4ebb259bf38632e63374bed12"},{url:"posts/6abe8772.html",revision:"7cb38d9f79b733beb99a98106361cbaa"},{url:"posts/735e5788.html",revision:"144487ddd2b7974011112ed9611dee00"},{url:"posts/751ac048.html",revision:"d9594eb7d2fd80ac2bc5a08731ebee54"},{url:"posts/7e751aa7.html",revision:"ba0610d5aaab8bc342a5b4023a010123"},{url:"posts/81d10c29.html",revision:"50657f8ba13290ecdd41e7ebc752a716"},{url:"posts/90563067.html",revision:"fd5fb1621a2fbe8dde00e57b5e433784"},{url:"posts/909735e5.html",revision:"84a59ac85b6df83ef6685c1c1c84a852"},{url:"posts/928e25c5.html",revision:"a40a064f021c774ab22d917af439155e"},{url:"posts/934999f6.html",revision:"6d55e7818ff33dde7f576b4b0bc9354d"},{url:"posts/9561cdd8.html",revision:"9e5950f5b54c1be2ec519b1842e5590c"},{url:"posts/9b999461.html",revision:"e7cbfdd38eed2365ff47135e65b909e6"},{url:"posts/9bb1d67d.html",revision:"0dcef2d77b17585bef2db948e87e9bc1"},{url:"posts/a3266abe.html",revision:"217f587fbbfb5160ff9d5e77909785e7"},{url:"posts/a50b380c.html",revision:"100275389137feca39343962bafc6b05"},{url:"posts/a721148.html",revision:"cb32f2bca553ea1980b4bbaf23ad3b3d"},{url:"posts/ad2b397f.html",revision:"ced06f33d8a34ada87be1e56ea70122a"},{url:"posts/afa15b69.html",revision:"df718005a20e3d2195d4cfb088291078"},{url:"posts/b3688e01.html",revision:"1ee5cd5a74f8f7930339b5b12281ed0c"},{url:"posts/b4290629.html",revision:"f9ea5492f3d11bfa10d696d168d5efe8"},{url:"posts/b433e5f.html",revision:"590e261edbe233901147389c57d14e8a"},{url:"posts/bbfc710f.html",revision:"375c51bd7e5032f16c6bd518497a1823"},{url:"posts/bda68703.html",revision:"915b69d231b5a24dda58e800e893cbdb"},{url:"posts/c39add7d.html",revision:"c89e022487161e93dc294422ffcb491a"},{url:"posts/c822e518.html",revision:"b8eb3c2a2189bd6939071b06b68f484a"},{url:"posts/cb4f1b09.html",revision:"8d59d04b9a860387fb11edd02f525e98"},{url:"posts/cbadfe7e.html",revision:"911108c8bdf940381bf3abfac158739f"},{url:"posts/cc8c02bc.html",revision:"19607ee019c84308413e955109b00896"},{url:"posts/d04a651.html",revision:"4ad89318c3ae7bc35dd26e74d66b836d"},{url:"posts/d5db6e3c.html",revision:"fd0127e51322f8fdf630811d930b28ff"},{url:"posts/ddf8c7c8.html",revision:"ea80b7b25f6638acc60b00bf58b6f02b"},{url:"posts/de5f9fb2.html",revision:"74faca1ab3df19b73ea00ccf62d18361"},{url:"posts/ed21676f.html",revision:"61a4b60f43eccc1911764534167f0172"},{url:"posts/ee8bf801.html",revision:"9e36450c9c3425666acca9b1d3f44e56"},{url:"posts/ef225e31.html",revision:"a042dd519a8c4439663f6c794843d372"},{url:"posts/f216fabe.html",revision:"ffdc46f4291fd28ae3fd06ba2187fdaf"},{url:"posts/f28215f8.html",revision:"51be57c55a09bc7c83864941ae45c2dd"},{url:"posts/f5bb7e27.html",revision:"d2cc680af0e4a84ae7b05fb78552e04a"},{url:"posts/f80f092e.html",revision:"1047211694c85bf4b4cfdd1cd358c4ae"},{url:"posts/f8c980c0.html",revision:"8bb5d09a141ed13562f542cd3401c16b"},{url:"posts/fbf212fd.html",revision:"44287cc4eca00e66c448c2649e61fda6"},{url:"posts/ffec4f13.html",revision:"6477cbe1374f68e14616f4f963c43e97"},{url:"preloader/center-atom.css",revision:"e34a27f3e075d8251f9fbe5ba323e2ce"},{url:"privacy/index.html",revision:"5437b90bb0fa6b483e1bc5892f6c6fc6"},{url:"random/index.html",revision:"0f1e49ac4f24e9a4e6f904c4089ea33e"},{url:"static/css/css.css",revision:"0c43f62bfdd01b94f50260002c184f98"},{url:"static/css/reset.min.css",revision:"e24aadcaa4dbda8f24b04392fb7ac784"},{url:"static/css/style.css",revision:"b21970d7d342c03047516175cd64717a"},{url:"static/js/21012315.js",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"static/js/fscreen@1.0.1.js",revision:"ba44160f9adb04fcc353b77c4751523a"},{url:"static/js/MyMath.js",revision:"0424d086a2a0411818fb6fbf8471dfec"},{url:"static/js/script.js",revision:"4fc063b667b48d4e8a5907fb11682f5c"},{url:"static/js/Stage@0.1.4.js",revision:"849c05f044e81f1a1bcf7a0e353fcfb6"},{url:"sw-register.js",revision:"d0dad5dfb9aff737e1cd473070755209"},{url:"sw.js",revision:"24ccc13d4460a439fa61ad272894ca7b"},{url:"tags/ACM-集训/index.html",revision:"93692e92f63c490c5ac22ff2b1f0f81a"},{url:"tags/hexo-github/index.html",revision:"b178f4aa1663caef47c2e4c590a4d320"},{url:"tags/index.html",revision:"4dac9ef61a954300d20821bc3c08c94f"},{url:"tags/STL/index.html",revision:"0fa670d2a8cdef736fdcb3e9639ecbda"},{url:"tags/tool/index.html",revision:"d0e5e926e62a16b2353b7bea92ff43f4"},{url:"tags/USACO/index.html",revision:"5d67390c9eea2010be93990827a3113a"},{url:"tags/乐学/index.html",revision:"d66149052c98301fbe4332f280620c27"},{url:"tags/乐学/page/2/index.html",revision:"43b93ea6db0e504886f8537c02c4caec"},{url:"tags/乐学/page/3/index.html",revision:"ef7f76a484282574126d222991499f8a"},{url:"tags/乐学/page/4/index.html",revision:"7e8bd8e6bbf9820cae11173bd2c09244"},{url:"tags/乐学/page/5/index.html",revision:"e0659ee7aa4904eb65bbd268c718a698"},{url:"tags/乐学/page/6/index.html",revision:"993cd4660b038c5ccc5bb281469367c0"},{url:"tags/算法/index.html",revision:"9059f1b56d2e2e11b1ecb969b682fd9d"},{url:"tags/计算机基础/index.html",revision:"de5a7957b781294509152f1f6cc63926"},{url:"tags/资源/index.html",revision:"a9307e53d95289c0a90c08aebf2d5e8c"},{url:"tags/转载/index.html",revision:"efb2d5e7d3c3fbeed9c01bce9694b048"},{url:"tools/index.html",revision:"62a74c180a35f9b4b6475c7032d535e6"},{url:"update/index.html",revision:"e980a667cab14809b718e86af6893394"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map