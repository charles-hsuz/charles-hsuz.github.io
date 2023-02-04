/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","9ac8b92c5d00ae919e703ab02e27c6ad"],["/about/index.html","8c692667959a5e6c33f9a256c7159c34"],["/archives/2022/12/index.html","ae1d3930df9ea24f1df490074c7d542a"],["/archives/2022/12/page/2/index.html","d096262eea637aa1aaabf08a4fc750d7"],["/archives/2022/12/page/3/index.html","38828e11d7a1f4e13c2ab53cb75b65d1"],["/archives/2022/12/page/4/index.html","19ccf378ad50c0bb22ad092997c8eb75"],["/archives/2022/12/page/5/index.html","76774a978359c8f27442c70bb08ca523"],["/archives/2022/12/page/6/index.html","6dde0dba85d9d33aeb3a5213bdf9fa2c"],["/archives/2022/12/page/7/index.html","012ad151ebcf7f44433ff7e56447dd4b"],["/archives/2022/index.html","f851e4be7c09aa21022c711a34392e89"],["/archives/2022/page/2/index.html","b5298fd8e68e17e1ea0f8c4fb0ca65c6"],["/archives/2022/page/3/index.html","dc842dc39908946190681374c0ebda87"],["/archives/2022/page/4/index.html","60a92a6cce2ec904adfed291f9eab7ab"],["/archives/2022/page/5/index.html","44b7b75f1f959259b8287877380965b5"],["/archives/2022/page/6/index.html","d1e30e8ada47873afe3925e64b0a2e8a"],["/archives/2022/page/7/index.html","702233cae4d8f0d600348c673cfaf95d"],["/archives/2023/01/index.html","17b9a3ecb958d4e2c4f003b5e5b6935a"],["/archives/2023/01/page/2/index.html","3eef473d576b26d4f0be329330b480b2"],["/archives/2023/02/index.html","9c4d5734dff6b35fbeefc8c5164fbd87"],["/archives/2023/index.html","0dae5f8dc3777f229fae52106bf07abb"],["/archives/2023/page/2/index.html","98548a3f8eaa3bede89d345240ac5c3e"],["/archives/index.html","d3e1120f3e0a4c1c29593c3a765a2c18"],["/archives/page/2/index.html","05c9249715b2b9f4874095f13709dd1a"],["/archives/page/3/index.html","3c0f7622cdb1d15a5b0d286a8f79600a"],["/archives/page/4/index.html","bf7a77f494228419b4f2fb9bcccd6079"],["/archives/page/5/index.html","a056f5cb115bf07e3765f9a74c1ae2a3"],["/archives/page/6/index.html","70897f6ecdfc8ac314219e4605373131"],["/archives/page/7/index.html","68dfd0833e90b617eab8235a251add9f"],["/archives/page/8/index.html","5904853b4a938ebd81280fb072cf34bb"],["/bb/index.html","42f813cdb5c0da23f9e7e28625bacf70"],["/categories/help/index.html","81f7e9fd76d7b85bda243695fb9b8897"],["/categories/index.html","aa6a20787a8fa9f6959f041f3373cf9c"],["/categories/刷题笔记/index.html","8852a77c6b0562d8847e4d2b5c62f4bc"],["/categories/刷题笔记/page/2/index.html","98ca50554a1eccb536b9fe9f1962557d"],["/categories/刷题笔记/page/3/index.html","56598c43ffcb6e3112cef288dbd50fb1"],["/categories/刷题笔记/page/4/index.html","246ac4461a2b78dd1d4fb53b183b33f9"],["/categories/刷题笔记/page/5/index.html","0cb13f87611c760e7553610bfc70cd80"],["/categories/刷题笔记/page/6/index.html","fc4827cccce9be316dadd358cc165efc"],["/categories/博客美化/index.html","c8f9a5edd767ec076d2acd6407aa9d7c"],["/categories/技巧/index.html","73079f79e8a26554285ddaba05cc86ca"],["/categories/教程/index.html","7478399b602e69a5df1e5a8e64449af8"],["/categories/杂谈/index.html","f57c28200b4b53b82f52a597119adb1b"],["/categories/算法教程/index.html","a862b260934fb2400f1316b74ac73433"],["/categories/语法教程/index.html","f54bcb211621df35e4f5115e2cd57d9a"],["/categories/软件分享/index.html","bf670d109c801b9ca744ca753419833a"],["/cc/index.html","ca82a2f57f6000da7c2bb2f6a06958f7"],["/charts/index.html","9c36b0a2c370141e02ea7e5a060fcb12"],["/cookies/index.html","3fccd6ed32197c585c5a90bb1b74ac71"],["/css/essay.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/fire/css.css","0c43f62bfdd01b94f50260002c184f98"],["/css/fire/reset.min.css","e24aadcaa4dbda8f24b04392fb7ac784"],["/css/fire/style.css","b21970d7d342c03047516175cd64717a"],["/css/index.css","0b2e068c8b2e185c4ec3d51dc72323e5"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fire.html","71c6162ad37c007f092c4b17ead1e461"],["/fonts/iconfont.eot","8d33e59818fb81f8c2067f662bdd8471"],["/fonts/iconfont.svg","db1a1a7226bee0e78542d5d97aeb6f68"],["/fonts/iconfont.ttf","c87c81f8ca9cc0110c487c1334cee217"],["/fonts/iconfont.woff","673fbe412307d14f6c5d26c774ab5e1f"],["/fonts/iconfont.woff2","5620df603c7a8fe5dd00d44cdf040bbb"],["/help/index.html","f8ba100ac64c484af5ffb4a54aacec42"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/INTP.png","67391b367ecd96266f8784d10caf2536"],["/img/INTP.svg","bfd5a1fdb289a27d984eedb7e9ffcd08"],["/img/MC.jpg","c28172a126fb8bd578ec4895a87ad972"],["/img/[2996]上陸スナハマ港-65189178.jpg","324889dd63a8e4461a649cb9dfff9ea4"],["/img/archive.png","e309fab77ea77743f03a5935e58710b5"],["/img/backgroung.jpg","53960c6f38bd456e4a6b6e5083477094"],["/img/banner.jpg","15e8e8013100c198d7ae202ba6509533"],["/img/banner_defalut.jpg","324889dd63a8e4461a649cb9dfff9ea4"],["/img/default_cover/cover1.png","0c7a0bbb6284ec2eb3131758cd6b0588"],["/img/default_cover/cover2.png","64c57bba569ff3a19a08b882a6fb405e"],["/img/default_cover/cover3.png","91cf2df02a422e7be32801c0d9615cf5"],["/img/default_cover/cover4.png","be894735f420c71f4d3a2104dc281203"],["/img/default_cover/cover5.png","7a9f2463d61352f8ca16966847bda296"],["/img/default_cover/cover6.jpg","4f6747719ab350bd195e88214f21cd80"],["/img/default_cover/cover7.png","ca0a29edb756224d2b25ba45b433fb79"],["/img/default_cover/cover8.png","75d091b601d591be2963974dc5e6777c"],["/img/default_cover/cover9.jpg","66d77f65a9fc880d287ee7ad5892408b"],["/img/edu.jpg","84689d7570770385fbf6ab9a4717ae32"],["/img/edu.png","dd8d0e6ce3334d89b6532c2599435218"],["/img/favicon.png","91299506dd20edc5fb2ba4f82f7f18e1"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/head.png","d4131daedc501e87c87367c9ddcaf3c8"],["/img/index.html","daa96fa1d6dfc4aa165da5c4ddaeb13f"],["/img/logo-minecraft.svg","e31a1564996c886a1945c9e1f294cde9"],["/img/map.jpg","d559bcbdad05a1b1f6e4bcc1cc0e451e"],["/img/myself.jpg","b0e717b70883da452dd3e76825ecd9b3"],["/img/pwa/128.png","98b3d2c5ce8f6bfc759b6199155d160e"],["/img/pwa/16.png","88777cfea241867923bdd69ab4181ad5"],["/img/pwa/256.png","9d9842878816ebd39fcba39e58c84a25"],["/img/pwa/32.png","49bdcc895228d41deb9337a7df16679a"],["/img/pwa/512.png","64c09fba74a4c55c580c50dc34e51751"],["/img/pwa/64.png","e2b9a45b8f32c1897dc2a447f8a401a5"],["/img/pwa/favicon.png","64c09fba74a4c55c580c50dc34e51751"],["/img/pwa/pwaicons/144.png","74543a328791d5a145d457c726a1ae02"],["/img/pwa/pwaicons/192.png","9013916051d96b513f3e15ac39e9f867"],["/img/pwa/pwaicons/36.png","d3077a5c5fc0da986a3dd895f1dde186"],["/img/pwa/pwaicons/48.png","31a5a73fcd3b224aa31994e0160a1ebf"],["/img/pwa/pwaicons/72.png","9712e1caea86d8a34de0788111a3bcf1"],["/img/pwa/pwaicons/96.png","59e9511a6181b8f9c622103e25efdca6"],["/img/uparrow.png","7263ecc5f42d7cfea8c5e66ce23a743c"],["/index.html","d6eb15c4b690301005a5b8c4834edbc2"],["/js/continue-aplayer.js","96e029e2b6929a2ce6932dcb779a0ed5"],["/js/custom.js","97bb9a502afd11e8ac220775016a2860"],["/js/custom/ascii.js","9bb2715bed11a52d9ae3903d18506045"],["/js/custom/ex-search.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/custom/fire.js","20710cfedf535a04638bfebae7c14f7f"],["/js/custom/hsu.js","4d9e8022419fb378477736c6c6bccbdf"],["/js/custom/installPWA.js","23685d6dac2d96057b71cc4869b855e8"],["/js/custom/rightmenu.js","810a556d38a38f80c1a88118103058de"],["/js/fire/21012315.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/fire/MyMath.js","0424d086a2a0411818fb6fbf8471dfec"],["/js/fire/Stage@0.1.4.js","849c05f044e81f1a1bcf7a0e353fcfb6"],["/js/fire/fscreen@1.0.1.js","ba44160f9adb04fcc353b77c4751523a"],["/js/fire/script.js","4fc063b667b48d4e8a5907fb11682f5c"],["/js/jquery.js","30792621ca010e3c5d5f98162629439f"],["/js/load.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/main.js","88aced9e00713346dbf5f92453a349b2"],["/js/search/algolia.js","af00464ac55e585d3e3ea2d579bde752"],["/js/search/local-search.js","aea55acb22a3b51ad16057b0ea52c0a9"],["/js/tw_cn.js","bc064917c366036544975274bb20a01d"],["/js/utils.js","e95ad73d5170f72ae1596b3d9abb7ed3"],["/link/index.html","2143175c52e8ed0af0e588b2b30920e2"],["/mouse/mouse.css","d75680ce4603d3812aee12994f6c96fa"],["/music/index.html","a08bbbbdf30c3e078f72283d101fcab4"],["/page/2/index.html","16d7614753ab313ef9ca25fee831d52e"],["/page/3/index.html","791acaa06433f8d2d32e370dd741a08a"],["/page/4/index.html","a9a9dbe7495b408ab06e9f613d7ef94a"],["/page/5/index.html","e2e3cc43e36eefd46aa3f589612b1129"],["/page/6/index.html","dba6a9b2bac0254120dd33e7123c51c5"],["/page/7/index.html","ff733bbe0175a096d7ed4ef3a38d7554"],["/page/8/index.html","d325a45b2b1fbdfb1f0cce92eaf6e4e9"],["/posts/130da42f.html","f7ba6afe88ffbfc766a417b130f2f2bb"],["/posts/16518a5d.html","0894f308f1cf545706eca55b7e15ed76"],["/posts/19cf8ae9.html","957f9443747bf274b42449cf10293178"],["/posts/1d63791b.html","e240ffc98fa708774a0c608809f05bc1"],["/posts/1f186d6f.html","d99e7cef65645f5f706ea81faa436775"],["/posts/20c47d09.html","bd24a3625a07ae0e23312641949225f4"],["/posts/25df28d4.html","9f996e7e810549f1b6e8cc822fd326c2"],["/posts/2981d3e8.html","08fb21661e75e7945ec1031f0be2d0cb"],["/posts/29ce1390.html","76c37e3ed1413de048949eced56102a5"],["/posts/2bf30a8f.html","885839f4fdc2fd9f2361056efb0f52e3"],["/posts/2cd2b7cf.html","169920db1121786df2c11c3d8b832db2"],["/posts/2dd8bc82.html","b00ff8295a59a120866e091342bb4139"],["/posts/3012010d.html","4998d859131d78499794bc1a9904f38c"],["/posts/30226dd9.html","63333ccd075fe05305454edc418fc733"],["/posts/3179ac2a.html","d73ec811a54437776b73f894c700b4f3"],["/posts/386b32f2.html","54af78a41746c56ae4d3821da14edbd4"],["/posts/3a6de62a.html","d68ed3f4d3f6991616f18407b6caddf2"],["/posts/3b9a0bd5.html","e8c5c0680f930f1cc5341e296cd44256"],["/posts/3dd7ffa7.html","f164335221f6648e2b5fc9c73743a59c"],["/posts/3e6df65f.html","778142c2e025bbf8848effff426694de"],["/posts/418342b5.html","2dac20ffc77a9656dc2dd5652957855b"],["/posts/43ef268c.html","6557d5313be60246897d1d40a4a51a8a"],["/posts/4699cb3f.html","300c83cdbefe7e39374b467d08c0cc76"],["/posts/47b007d5.html","68ea4622f03f44adac945bb7f4319e2d"],["/posts/48946740.html","889cb9e7460d2e47d8d1cd61853ef1c7"],["/posts/48b938d1.html","245183aac09369240cf596d6e468ee4d"],["/posts/4ad0cf31.html","9e32d49e9cd842ee2125b5a96e17b62d"],["/posts/4d006364.html","0d4ecbd4420d49ee4fc7f7fc3491ed55"],["/posts/4dc77c26.html","ddda0bae017a37d356c01a00f5738ba9"],["/posts/542f557.html","8041c296b483210ec4415ff0723eb3c3"],["/posts/5487c88e.html","44d39e7ce34459e8bb5ffec2e6ceecc9"],["/posts/579c41ee.html","d18c193fb9638f3e80c0694e33179fca"],["/posts/5a42efcf.html","16803940285b2c91bde423da6e914338"],["/posts/5a8b87c.html","d50d65c3b8d58cb60cac924baebef403"],["/posts/5e641f58.html","718d563e76a75d87c5cf58aa0e9ae20f"],["/posts/5f6267a3.html","6d0b5ac8f93b20bfa1bb4a465d78a0b1"],["/posts/5f82cc62.html","b01369da4a6260d38929fb3cf8e83110"],["/posts/6109666d.html","8c4650f6c42f1a8cb1c208d4f7f71917"],["/posts/6287ead9.html","de0d45da9e18e2e74a021db99a7f7d42"],["/posts/67ad6f26.html","ccb626d49d16bfde16607ce511bc9492"],["/posts/69f92217.html","54eba6a4ebb259bf38632e63374bed12"],["/posts/6abe8772.html","7cb38d9f79b733beb99a98106361cbaa"],["/posts/735e5788.html","144487ddd2b7974011112ed9611dee00"],["/posts/751ac048.html","d9594eb7d2fd80ac2bc5a08731ebee54"],["/posts/7e751aa7.html","ba0610d5aaab8bc342a5b4023a010123"],["/posts/81d10c29.html","50657f8ba13290ecdd41e7ebc752a716"],["/posts/90563067.html","fd5fb1621a2fbe8dde00e57b5e433784"],["/posts/909735e5.html","84a59ac85b6df83ef6685c1c1c84a852"],["/posts/928e25c5.html","a40a064f021c774ab22d917af439155e"],["/posts/934999f6.html","6d55e7818ff33dde7f576b4b0bc9354d"],["/posts/9561cdd8.html","9e5950f5b54c1be2ec519b1842e5590c"],["/posts/9b999461.html","e7cbfdd38eed2365ff47135e65b909e6"],["/posts/9bb1d67d.html","0dcef2d77b17585bef2db948e87e9bc1"],["/posts/a3266abe.html","217f587fbbfb5160ff9d5e77909785e7"],["/posts/a50b380c.html","100275389137feca39343962bafc6b05"],["/posts/a721148.html","cb32f2bca553ea1980b4bbaf23ad3b3d"],["/posts/ad2b397f.html","ced06f33d8a34ada87be1e56ea70122a"],["/posts/afa15b69.html","df718005a20e3d2195d4cfb088291078"],["/posts/b3688e01.html","1ee5cd5a74f8f7930339b5b12281ed0c"],["/posts/b4290629.html","f9ea5492f3d11bfa10d696d168d5efe8"],["/posts/b433e5f.html","590e261edbe233901147389c57d14e8a"],["/posts/bbfc710f.html","375c51bd7e5032f16c6bd518497a1823"],["/posts/bda68703.html","915b69d231b5a24dda58e800e893cbdb"],["/posts/c39add7d.html","c89e022487161e93dc294422ffcb491a"],["/posts/c822e518.html","b8eb3c2a2189bd6939071b06b68f484a"],["/posts/cb4f1b09.html","8d59d04b9a860387fb11edd02f525e98"],["/posts/cbadfe7e.html","911108c8bdf940381bf3abfac158739f"],["/posts/cc8c02bc.html","19607ee019c84308413e955109b00896"],["/posts/d04a651.html","4ad89318c3ae7bc35dd26e74d66b836d"],["/posts/d5db6e3c.html","fd0127e51322f8fdf630811d930b28ff"],["/posts/ddf8c7c8.html","ea80b7b25f6638acc60b00bf58b6f02b"],["/posts/de5f9fb2.html","74faca1ab3df19b73ea00ccf62d18361"],["/posts/ed21676f.html","61a4b60f43eccc1911764534167f0172"],["/posts/ee8bf801.html","9e36450c9c3425666acca9b1d3f44e56"],["/posts/ef225e31.html","a042dd519a8c4439663f6c794843d372"],["/posts/f216fabe.html","ffdc46f4291fd28ae3fd06ba2187fdaf"],["/posts/f28215f8.html","51be57c55a09bc7c83864941ae45c2dd"],["/posts/f5bb7e27.html","d2cc680af0e4a84ae7b05fb78552e04a"],["/posts/f80f092e.html","1047211694c85bf4b4cfdd1cd358c4ae"],["/posts/f8c980c0.html","8bb5d09a141ed13562f542cd3401c16b"],["/posts/fbf212fd.html","44287cc4eca00e66c448c2649e61fda6"],["/posts/ffec4f13.html","6477cbe1374f68e14616f4f963c43e97"],["/preloader/center-atom.css","e34a27f3e075d8251f9fbe5ba323e2ce"],["/privacy/index.html","5437b90bb0fa6b483e1bc5892f6c6fc6"],["/random/index.html","0f1e49ac4f24e9a4e6f904c4089ea33e"],["/service-worker.js","38e78be32398a56b44ac2c0ccb8d2f06"],["/static/css/css.css","0c43f62bfdd01b94f50260002c184f98"],["/static/css/reset.min.css","e24aadcaa4dbda8f24b04392fb7ac784"],["/static/css/style.css","b21970d7d342c03047516175cd64717a"],["/static/js/21012315.js","d41d8cd98f00b204e9800998ecf8427e"],["/static/js/MyMath.js","0424d086a2a0411818fb6fbf8471dfec"],["/static/js/Stage@0.1.4.js","849c05f044e81f1a1bcf7a0e353fcfb6"],["/static/js/fscreen@1.0.1.js","ba44160f9adb04fcc353b77c4751523a"],["/static/js/script.js","4fc063b667b48d4e8a5907fb11682f5c"],["/sw-register.js","d0dad5dfb9aff737e1cd473070755209"],["/tags/ACM-集训/index.html","93692e92f63c490c5ac22ff2b1f0f81a"],["/tags/STL/index.html","0fa670d2a8cdef736fdcb3e9639ecbda"],["/tags/USACO/index.html","5d67390c9eea2010be93990827a3113a"],["/tags/hexo-github/index.html","b178f4aa1663caef47c2e4c590a4d320"],["/tags/index.html","4dac9ef61a954300d20821bc3c08c94f"],["/tags/tool/index.html","d0e5e926e62a16b2353b7bea92ff43f4"],["/tags/乐学/index.html","d66149052c98301fbe4332f280620c27"],["/tags/乐学/page/2/index.html","43b93ea6db0e504886f8537c02c4caec"],["/tags/乐学/page/3/index.html","ef7f76a484282574126d222991499f8a"],["/tags/乐学/page/4/index.html","7e8bd8e6bbf9820cae11173bd2c09244"],["/tags/乐学/page/5/index.html","e0659ee7aa4904eb65bbd268c718a698"],["/tags/乐学/page/6/index.html","993cd4660b038c5ccc5bb281469367c0"],["/tags/算法/index.html","9059f1b56d2e2e11b1ecb969b682fd9d"],["/tags/计算机基础/index.html","de5a7957b781294509152f1f6cc63926"],["/tags/资源/index.html","a9307e53d95289c0a90c08aebf2d5e8c"],["/tags/转载/index.html","efb2d5e7d3c3fbeed9c01bce9694b048"],["/tools/index.html","62a74c180a35f9b4b6475c7032d535e6"],["/update/index.html","e980a667cab14809b718e86af6893394"],["/workbox-f2efd100.js","ee31e345bae88b23622150c1b801d69b"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
