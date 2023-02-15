/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","cc69904352cc2d06065ae12221c26755"],["/about/index.html","db4c54f6388e7fddd605c9f0e1842af9"],["/archives/2022/12/index.html","0df40271bdd54f6068c83a111e42d1d7"],["/archives/2022/12/page/2/index.html","ab2cf5dbacdfef28d3f293f364b0b1e3"],["/archives/2022/12/page/3/index.html","f05dd1b0554645f9c8dd8ee3454e1a66"],["/archives/2022/12/page/4/index.html","31cdb3d8c7cea347a363c3589e91f9cd"],["/archives/2022/12/page/5/index.html","0aeb61f4cb989846354dbad39412157b"],["/archives/2022/12/page/6/index.html","e2cd3e1702581a022a3097185c316016"],["/archives/2022/12/page/7/index.html","229a98cf01c7099367d69cf9464e1b8d"],["/archives/2022/index.html","35c46f153aa5760741cc2e87b66b8c9b"],["/archives/2022/page/2/index.html","6c8a5f3dcb0299b9ecd167874695ba07"],["/archives/2022/page/3/index.html","0c8b101ae4908299113983dbfd0bbb34"],["/archives/2022/page/4/index.html","50ef9aa29f8bd580d216b808ba151a99"],["/archives/2022/page/5/index.html","ee5d5f37b5f87eb0ec5d4aee624c336d"],["/archives/2022/page/6/index.html","e4de2933c064578117e5933eec927c28"],["/archives/2022/page/7/index.html","6d1c3c068bb83ce8b950f0bd18bac0f2"],["/archives/2023/01/index.html","696889fa40afb478d5b8037231c2e976"],["/archives/2023/01/page/2/index.html","0ce4e05793776d54ef0e79e4f566a851"],["/archives/2023/02/index.html","760ee57a139fff63836aa0bd497f1b34"],["/archives/2023/index.html","8943f3404244e4f0789b4d48d73edd39"],["/archives/2023/page/2/index.html","6178ea380dca1404cf70e692ed1c8566"],["/archives/index.html","c00a012c124eb577ba6b16d1a3d15082"],["/archives/page/2/index.html","adb92d97169ced9be76facf05e35f0fb"],["/archives/page/3/index.html","f6cc77a0380c1ae248728f16c31400ff"],["/archives/page/4/index.html","47270aa60adf34c47bbd68501d932ed3"],["/archives/page/5/index.html","90dbdfe846d86af328bb33c4204ed766"],["/archives/page/6/index.html","8ff0ad548f656d71220f0b65a704b532"],["/archives/page/7/index.html","d1e2c6b83e8be4cb31c1392f3c541855"],["/archives/page/8/index.html","b1d8dad60cc3748c7ce8d556994f4fea"],["/archives/page/9/index.html","7156008b41f39fb0f76a6178f67e25d1"],["/bb/index.html","ef870fc9df8a7bda6bd35817318a08e0"],["/categories/help/index.html","80b6c5311157c3c7aeceff120471b276"],["/categories/index.html","696903eae088af8d84d578ab7357e98d"],["/categories/刷题笔记/index.html","ded82ad1dafea526d2be42525e3f96a1"],["/categories/刷题笔记/page/2/index.html","46b2816770befcb5fed129b598f1eaa7"],["/categories/刷题笔记/page/3/index.html","6f46b8e1de63b107772ef58544132afb"],["/categories/刷题笔记/page/4/index.html","222dc1220529de9a4251abae79a7cfc3"],["/categories/刷题笔记/page/5/index.html","9035594b398b621718b1974c3dcb45c5"],["/categories/刷题笔记/page/6/index.html","3e70850016d5bb615aea1b1c44939d33"],["/categories/博客美化/index.html","70d059d791df90b67b516e71752392f6"],["/categories/博客魔改/index.html","e10fd4a168db8dc9d4a86ceb6afb8524"],["/categories/技巧/index.html","ff053dbb33a2db20eaae6c5b09b3b9ef"],["/categories/教程/index.html","10889c8840d5a26b73cf71b7cbaca6e9"],["/categories/杂谈/index.html","e0d3c545659e01bedb249f7e591914c5"],["/categories/算法教程/index.html","87c5c4a52137aca6be105fcbbf139422"],["/categories/语法教程/index.html","6c6d473ec08d44f910e25b742d20c467"],["/categories/软件分享/index.html","3988486ba058d5c52282b2124c3b384e"],["/cc/index.html","1a6578b8ebb121870680b5985e517621"],["/charts/index.html","2997d7d41ed38fa4642e62c73ac923b7"],["/cookies/index.html","feb85abd71f65c48ee52ee10c8ded99f"],["/css/essay.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/fire/css.css","0c43f62bfdd01b94f50260002c184f98"],["/css/fire/reset.min.css","e24aadcaa4dbda8f24b04392fb7ac784"],["/css/fire/style.css","b21970d7d342c03047516175cd64717a"],["/css/index.css","66d725b94020fd8a1bab1e4b353fb21b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fire.html","71c6162ad37c007f092c4b17ead1e461"],["/fonts/iconfont.eot","8d33e59818fb81f8c2067f662bdd8471"],["/fonts/iconfont.svg","db1a1a7226bee0e78542d5d97aeb6f68"],["/fonts/iconfont.ttf","c87c81f8ca9cc0110c487c1334cee217"],["/fonts/iconfont.woff","673fbe412307d14f6c5d26c774ab5e1f"],["/help/index.html","62afc5fc12202916f3f04c66c29df28a"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/INTP.png","67391b367ecd96266f8784d10caf2536"],["/img/INTP.svg","bfd5a1fdb289a27d984eedb7e9ffcd08"],["/img/MC.jpg","c28172a126fb8bd578ec4895a87ad972"],["/img/backgroung.jpg","53960c6f38bd456e4a6b6e5083477094"],["/img/banner.jpg","15e8e8013100c198d7ae202ba6509533"],["/img/default_cover/cover (1).png","75d091b601d591be2963974dc5e6777c"],["/img/default_cover/cover (2).png","ca0a29edb756224d2b25ba45b433fb79"],["/img/default_cover/cover (3).png","78251dd15e0d5e05ad9d09545f15ed1f"],["/img/default_cover/cover (5).png","91cf2df02a422e7be32801c0d9615cf5"],["/img/default_cover/cover (7).png","3c6032a2c2db69aefc975ec84001038e"],["/img/default_cover/cover (8).jpg","66d77f65a9fc880d287ee7ad5892408b"],["/img/default_cover/cover (9).jpg","4f6747719ab350bd195e88214f21cd80"],["/img/edu.jpg","84689d7570770385fbf6ab9a4717ae32"],["/img/edu.png","dd8d0e6ce3334d89b6532c2599435218"],["/img/favicon.png","91299506dd20edc5fb2ba4f82f7f18e1"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/head.png","d4131daedc501e87c87367c9ddcaf3c8"],["/img/index.html","d783e30b445b54817148ee456e6d8086"],["/img/logo-minecraft.svg","e31a1564996c886a1945c9e1f294cde9"],["/img/map.jpg","d559bcbdad05a1b1f6e4bcc1cc0e451e"],["/img/myself.jpg","b0e717b70883da452dd3e76825ecd9b3"],["/img/pwa/pwaicons/144.png","74543a328791d5a145d457c726a1ae02"],["/img/pwa/pwaicons/16.jpg","a7d9440f053665af7bd81016358c398b"],["/img/pwa/pwaicons/192.jpg","70909dd6286bd32d354181acf4de25e5"],["/img/pwa/pwaicons/192.png","9013916051d96b513f3e15ac39e9f867"],["/img/pwa/pwaicons/32.jpg","e0cc2baafa0111c71abe55be9da9e301"],["/img/pwa/pwaicons/36.png","d3077a5c5fc0da986a3dd895f1dde186"],["/img/pwa/pwaicons/48.png","31a5a73fcd3b224aa31994e0160a1ebf"],["/img/pwa/pwaicons/512.png","64c09fba74a4c55c580c50dc34e51751"],["/img/pwa/pwaicons/72.png","9712e1caea86d8a34de0788111a3bcf1"],["/img/pwa/pwaicons/96.png","59e9511a6181b8f9c622103e25efdca6"],["/img/uparrow.png","7263ecc5f42d7cfea8c5e66ce23a743c"],["/index.html","6b1ebdc4064681f4a86a3fe5024f0e06"],["/js/continue-aplayer.js","96e029e2b6929a2ce6932dcb779a0ed5"],["/js/custom.js","e423294c52c1344a82d9ee8075d5fc74"],["/js/custom/PublicSacrificeDay.js","3337622648819ebb05d17f96617f9a37"],["/js/custom/ascii.js","9bb2715bed11a52d9ae3903d18506045"],["/js/custom/ex-search.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/custom/fire.js","20710cfedf535a04638bfebae7c14f7f"],["/js/custom/installPWA.js","744019152a4e90bf3694c45195ee336f"],["/js/custom/music.js","3f278a3707417615e062cff244a55b23"],["/js/custom/rightmenu.js","810a556d38a38f80c1a88118103058de"],["/js/fire/21012315.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/fire/MyMath.js","0424d086a2a0411818fb6fbf8471dfec"],["/js/fire/Stage@0.1.4.js","849c05f044e81f1a1bcf7a0e353fcfb6"],["/js/fire/fscreen@1.0.1.js","ba44160f9adb04fcc353b77c4751523a"],["/js/fire/script.js","4fc063b667b48d4e8a5907fb11682f5c"],["/js/hsu.js","893be29f19b7c13d3b7a680829fea5c4"],["/js/jquery.js","30792621ca010e3c5d5f98162629439f"],["/js/load.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/main.js","88aced9e00713346dbf5f92453a349b2"],["/js/search/algolia.js","01e3eecda2d6a3bfb970844a29d61198"],["/js/search/local-search.js","aea55acb22a3b51ad16057b0ea52c0a9"],["/js/tw_cn.js","bc064917c366036544975274bb20a01d"],["/js/utils.js","e95ad73d5170f72ae1596b3d9abb7ed3"],["/link/index.html","ca50d1178c493b5318cf8933f0dc8751"],["/mouse/mouse.css","d75680ce4603d3812aee12994f6c96fa"],["/music/index.html","f5140d1097b0d302ee9c1ea20e262513"],["/page/2/index.html","56d61dbc5d09857aefd9724b0c96fd20"],["/page/3/index.html","e4524750b4394b93f9ac17f12fae4e90"],["/page/4/index.html","296fdbd0233a990dacc24c20c11af761"],["/page/5/index.html","d8e2ed68731c51dfb71d84664ccbb753"],["/page/6/index.html","6ea75ce6113acae41a20ab7ddf7e323d"],["/page/7/index.html","0705cf0f3ab757f545ee6d42fc21740d"],["/page/8/index.html","67d09df7c510ca4d658d55efe9115136"],["/page/9/index.html","f991c3ef0064b5e17e110f051f855e69"],["/posts/130da42f.html","de4850859bfcd3b236d2d0cfa02a348b"],["/posts/16518a5d.html","d290f9a9879c04c5f5b11c77b96551c8"],["/posts/19cf8ae9.html","bfb0fb77a7053b532f054f509d543318"],["/posts/1d63791b.html","7e32713bf63ce400b3b6f5598f45d619"],["/posts/1f186d6f.html","5712e1ee6e6ff514fedceb600e60e44d"],["/posts/20c47d09.html","7b75f0ff0772860736f894a81a741b2f"],["/posts/25df28d4.html","e64219abbf5eab5ed95ca4114442ad51"],["/posts/2981d3e8.html","139b757462bc78158fa61192eb7ea899"],["/posts/29ce1390.html","04b990b8d58c1dfde8e561d86fb22add"],["/posts/2bf30a8f.html","2c05590fb6e71790771a773ea43a71b1"],["/posts/2cd2b7cf.html","4c8497158516fa2b7ef7a6d07f083aa0"],["/posts/2dd8bc82.html","60edfd110e22ac6f445ad1f80247a856"],["/posts/3012010d.html","c042bab6e10b06f8377da39c60271678"],["/posts/30226dd9.html","c23a4e80552772badcc79d72dadac141"],["/posts/3179ac2a.html","32cb1a9fc5e369f3064ed0291ee0b3f0"],["/posts/386b32f2.html","e6eebf4dbeb5ba623880824a6d8144db"],["/posts/3a6de62a.html","e7f08274d9944814072aacc23ec98734"],["/posts/3b9a0bd5.html","10930a092453a1b46d52cdb165b48f6d"],["/posts/3dd7ffa7.html","647b208cffb1f615c4bd5b13d3855630"],["/posts/3e6df65f.html","db69067782986c83d0017eb0e8a6de22"],["/posts/418342b5.html","1f72adf470c898f5dd3ddec2341600a6"],["/posts/43ef268c.html","08dc3d4b6cdcf5ed2e5d0d08c5c2dfbe"],["/posts/4699cb3f.html","836995ee4ee03e0a135619ed1800d928"],["/posts/47b007d5.html","36918f795eb535e027448beaff1df533"],["/posts/48946740.html","596dcd939811bea241d9a23e2908317c"],["/posts/48b938d1.html","cd08952e223dc02391b2086221d189a2"],["/posts/4ad0cf31.html","2cec40cb5610997fa5c1f5bf0b614e95"],["/posts/4d006364.html","ed9897b2b9b29c01c6a1ed19d7930f4e"],["/posts/4dc77c26.html","4ce25f817ba7d4ed08eccffed612755e"],["/posts/542f557.html","9cbf0cec4327e2bb60bcdd628d2e446d"],["/posts/5487c88e.html","b9ad10cc0eb4079fccbd82e987b6dc70"],["/posts/579c41ee.html","a549bb4396788963afdac65740b307cf"],["/posts/5a42efcf.html","91eae9718add26f5a4ffb172548fd300"],["/posts/5a8b87c.html","480cd9765a0e6e41bb6d51bcf181e8a7"],["/posts/5e641f58.html","61470dabcb9c529f5fca27cc509114ab"],["/posts/5f6267a3.html","6c3baa90e8fd967c2a2a0bfd29df8dc8"],["/posts/5f82cc62.html","a429e9efd59cf5c15ef1dcc4363de680"],["/posts/6109666d.html","89a772ba9a5e1089178989ca978ebbb0"],["/posts/6287ead9.html","6a8a2ffb4a55258b1c5086b19c027330"],["/posts/637681ac.html","39ee3afd88cb8043ace822de63a8edce"],["/posts/67ad6f26.html","4be60c5af56e2eeceaeec4dc17adeb99"],["/posts/69f92217.html","002d2b2d100cbba8de9b6d4bdd280dfa"],["/posts/6abe8772.html","c84feae13a0cd2b96e79d370fa44fefc"],["/posts/6e818316.html","32f7f7bf01731845f9834d7dece38c19"],["/posts/735e5788.html","be6a638259adb0060ab200ed9d026337"],["/posts/751ac048.html","f3441d25b7c309c565f97b9381cc0bac"],["/posts/7e751aa7.html","87fc090172bba594ef1579e04748620a"],["/posts/81d10c29.html","f03bcca4fb7e1659501871fb008f0f15"],["/posts/90563067.html","23d4b53a5abe1148c37ece12ef282718"],["/posts/909735e5.html","e077e2a1d976cb6110f0baf8328843f1"],["/posts/928e25c5.html","b1f8ac5bac0ca7e844c2c3647178291c"],["/posts/934999f6.html","0eb07fc91b53b34bcac23e56dc2d7201"],["/posts/9561cdd8.html","d5f249491c0b120d1bba88384ce96b77"],["/posts/9b999461.html","5b64cfdfb65977228180a6541ca52f46"],["/posts/9bb1d67d.html","a6934022438f9aec713bbfb0f976ae99"],["/posts/a3266abe.html","337628499db42c1f4ce3a2150d2f8804"],["/posts/a50b380c.html","eb074836194b526d907db52f323df952"],["/posts/a721148.html","6b7d50d210e1996e60976d8ca55d3a86"],["/posts/ad2b397f.html","33f863063b947b43c0aaaa49b7f01947"],["/posts/afa15b69.html","adbdcabd0899c89245caa0055b3bef53"],["/posts/b3688e01.html","7c5b78fa20f9adeeca354ab755f16275"],["/posts/b4290629.html","9815ab2d746d6c1dec092cd0579b8fc1"],["/posts/b433e5f.html","5db2fc752cbbc7850b7e8d69d11eb066"],["/posts/bbfc710f.html","57d3ce6954c1f969791033127bbda8e8"],["/posts/bda68703.html","4f0af032f7d810c4e8269eeb47b7b81a"],["/posts/c39add7d.html","38aed533da09c67b6d4126d1734dd073"],["/posts/c822e518.html","8085203c3fad53e80534e07feb80397b"],["/posts/cb4f1b09.html","32f02eace7fef83c14a19fd0a362dece"],["/posts/cbadfe7e.html","984ef48ee0a428d1a245e052d6b4a53c"],["/posts/cc8c02bc.html","961fa8b55bf679d0160d6b57843c3ea5"],["/posts/d04a651.html","e96c2edabbd55935bc9e7a9be0b1941e"],["/posts/d5db6e3c.html","c1af0d6a63045d5100e2b07a14249837"],["/posts/d87f7e0c.html","53b4c73ac1e18d6a24d12fc847732875"],["/posts/ddf8c7c8.html","be5b1ef2e5a459f16ea79939ec98459a"],["/posts/de5f9fb2.html","3c9479f17aabc2daa7bf83ae4b28b760"],["/posts/ed21676f.html","1ef13a5acd282b954c35e14702d702b3"],["/posts/ee8bf801.html","dab1bb3f93179b481e10adbddcb69137"],["/posts/ef225e31.html","e1af95c1586e37b9501bcff83b871ba4"],["/posts/f216fabe.html","c99d44291000695cd294462fe3715020"],["/posts/f28215f8.html","cd2c5150213dd189a64f24640acd43bd"],["/posts/f5bb7e27.html","6f050402819368864fe0b922239fff0a"],["/posts/f80f092e.html","3c5f4504fd5eff4a01e1308edf585a9e"],["/posts/f8c980c0.html","f0147f3cddbc2ee6b2983c3f8438fc12"],["/posts/fbf212fd.html","9d42a12c0a93786658df788dd420f30e"],["/posts/ffec4f13.html","754de0bea7edbdf05d7c14edea5b3517"],["/preloader/center-atom.css","e34a27f3e075d8251f9fbe5ba323e2ce"],["/privacy/index.html","ee81c9cab7b2a9ab4483fa5f7e567e13"],["/random/index.html","5a0da722236cdbb128033c20645a732d"],["/static/css/css.css","0c43f62bfdd01b94f50260002c184f98"],["/static/css/reset.min.css","e24aadcaa4dbda8f24b04392fb7ac784"],["/static/css/style.css","b21970d7d342c03047516175cd64717a"],["/static/js/21012315.js","d41d8cd98f00b204e9800998ecf8427e"],["/static/js/MyMath.js","0424d086a2a0411818fb6fbf8471dfec"],["/static/js/Stage@0.1.4.js","849c05f044e81f1a1bcf7a0e353fcfb6"],["/static/js/fscreen@1.0.1.js","ba44160f9adb04fcc353b77c4751523a"],["/static/js/script.js","4fc063b667b48d4e8a5907fb11682f5c"],["/sw-register.js","2a772c32364cd27e2ce45c406945449f"],["/tags/ACM-集训/index.html","52f83fb6649a3a2cbe9080bebca99839"],["/tags/STL/index.html","ec764743de5e47b9549ca8bba4142f05"],["/tags/USACO/index.html","19d07dcca644a2eff2a6da8540f72b26"],["/tags/hexo-github/index.html","638b6711560f28977acf0979268b5e3b"],["/tags/index.html","487383e21ea5eed72e1a3913e7554e00"],["/tags/tool/index.html","b4f61ebb52ef82f5bbb6d75232e8d0ab"],["/tags/乐学/index.html","f3469b243d96d242f0892fc477a28740"],["/tags/乐学/page/2/index.html","1baffba0500a187465338100a988bb1d"],["/tags/乐学/page/3/index.html","c4d67dfb8e9990e40827516fbb9b22f3"],["/tags/乐学/page/4/index.html","ed6501fdb37aadaf4ca2c72b139152fd"],["/tags/乐学/page/5/index.html","4cf94b35f84872328b0bf3809c754df9"],["/tags/乐学/page/6/index.html","e98ef49e03b2d533e97bae100ca5e729"],["/tags/插件/index.html","5857c24f592251b571062d6398ab82d9"],["/tags/算法/index.html","1b9d4619a82844075980cb707359b7cf"],["/tags/计算机基础/index.html","f7e815dfc0b7f5fec1a3bcadc6e613ac"],["/tags/资源/index.html","04b6bd74b916896e4704ae0f7df92112"],["/tags/转载/index.html","8ed5a41ce4208f90b25d45719e27d6cb"],["/tags/魔改/index.html","c59cc2ab36b46b5f90e195658fe4e6ae"],["/tools/index.html","0308003a1579898db93feb999a3cd834"],["/update/index.html","f17fa6a5c411ed5ef93fcaf7e7dca9d7"]];
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
