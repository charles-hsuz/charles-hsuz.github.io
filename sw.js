/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","7cd4b56263bc635f3d0d6537ae8162d7"],["/about/index.html","f14815f833c23424fe4a8e94b2872ab1"],["/archives/2022/12/index.html","1feace814b95a181fe454d6baae72189"],["/archives/2022/12/page/2/index.html","76359c37c1b83c3afba9cf61785ad98a"],["/archives/2022/12/page/3/index.html","7323bbd315fa0b4637fa54ae9a5fe298"],["/archives/2022/12/page/4/index.html","3a0f95ca07a6200823f040393ee1787b"],["/archives/2022/12/page/5/index.html","f726010b56e6ceb4aeff00d7a5812c32"],["/archives/2022/12/page/6/index.html","306a31c53ce0021d752cd28bd267f0b8"],["/archives/2022/12/page/7/index.html","684c21c8ba147a148a61c2995265595c"],["/archives/2022/index.html","048fd5e3d9e38eaa37cedb2a800588a0"],["/archives/2022/page/2/index.html","eabf9d31be19aaa9a946694c80055b71"],["/archives/2022/page/3/index.html","ddf5bc041bde1ba7b973dd8902b87847"],["/archives/2022/page/4/index.html","db6b3ba3c429ceb1d24bea69deea5f4b"],["/archives/2022/page/5/index.html","5b1fa46bd27ae90a0ef4d5401efd21f2"],["/archives/2022/page/6/index.html","e63b2c8b48d170d8522e695debff1492"],["/archives/2022/page/7/index.html","88ca116c036b5ef67fbf43260b63d751"],["/archives/2023/01/index.html","f45a4b7742c0cb7656f41d15d75ab829"],["/archives/2023/01/page/2/index.html","bb782c4b8adbed45d9ac7cbc2ecd7834"],["/archives/2023/02/index.html","642b444c1e288b8209f74d5062a81978"],["/archives/2023/index.html","46adf09a1818d0a2e5c9edced2cbd92c"],["/archives/2023/page/2/index.html","5d6958515921d2d6802f9225d708f1a1"],["/archives/index.html","223f8a110505b9c4b5fce06d9fdb32ac"],["/archives/page/2/index.html","6523df1beca6d699231df8a5b5d6d2a1"],["/archives/page/3/index.html","d78b1fb6b1722bd967c556ea1bc3299a"],["/archives/page/4/index.html","0d29a76356c53d3459bf2cbe9dc39fc1"],["/archives/page/5/index.html","8ca8a1d082058d4bf13a9a6ba82fb618"],["/archives/page/6/index.html","ad525d9fc6d2e397426ecbf17e01ab91"],["/archives/page/7/index.html","040c07fe57dbb68936750d65fdbb8bd0"],["/archives/page/8/index.html","ee3138fcd00e8dc2a74392dcd3d91f7b"],["/archives/page/9/index.html","ef051e6547e3f447b5f9506efbecca21"],["/bb/index.html","1ab4d3982cb1c3201ce629194ad49f9a"],["/categories/help/index.html","72b9a5b95ebf8d52ec3c97692e4b65bc"],["/categories/index.html","9416d992cbef9ef3c697ef879fb69906"],["/categories/刷题笔记/index.html","1face6dc6c95720102246addc55b1d67"],["/categories/刷题笔记/page/2/index.html","a896220a8f0c91d1a9f44bf470724867"],["/categories/刷题笔记/page/3/index.html","60f7cfa489d12527003fdb3fb5c9bdb9"],["/categories/刷题笔记/page/4/index.html","2b006e41b91d609be1d1b1dca6be840a"],["/categories/刷题笔记/page/5/index.html","880b95e1fe34c65c5621b84df15f91d1"],["/categories/刷题笔记/page/6/index.html","2ed681b271df220b4b4de69fe8782425"],["/categories/博客美化/index.html","79135e2ed5c5a56d7af499e91b1e0b85"],["/categories/博客魔改/index.html","97b675e341734ad6db484500a005be6c"],["/categories/技巧/index.html","dd8b995da244e9bdd68f3da75c2ac520"],["/categories/教程/index.html","88d3c6f4da22c1603cf4cc850734ab74"],["/categories/杂谈/index.html","d20fa2d23b207683396ed3277e04a8c8"],["/categories/算法教程/index.html","7a96bd39cec1ce325446a0dad52670af"],["/categories/语法教程/index.html","314ccfc6896124d33512d022c1f3c669"],["/categories/软件分享/index.html","57cac16e8d76d5f2f6bf9c0d35bb1667"],["/cc/index.html","734d692b2afeaccc830d8779537aa6ce"],["/charts/index.html","4d755fc01b015a1b750c0e7eacf77d8f"],["/cookies/index.html","b79138ed858f52230426574efb3d4c57"],["/css/essay.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/fire/css.css","0c43f62bfdd01b94f50260002c184f98"],["/css/fire/reset.min.css","e24aadcaa4dbda8f24b04392fb7ac784"],["/css/fire/style.css","b21970d7d342c03047516175cd64717a"],["/css/index.css","66d725b94020fd8a1bab1e4b353fb21b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fire.html","28af85c45948c6d22644c9497375a879"],["/fonts/iconfont.eot","8d33e59818fb81f8c2067f662bdd8471"],["/fonts/iconfont.svg","db1a1a7226bee0e78542d5d97aeb6f68"],["/fonts/iconfont.ttf","c87c81f8ca9cc0110c487c1334cee217"],["/fonts/iconfont.woff","673fbe412307d14f6c5d26c774ab5e1f"],["/help/index.html","5bbd9ca7e47bdf387292f9c7af68fe60"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/INTP.png","67391b367ecd96266f8784d10caf2536"],["/img/INTP.svg","bfd5a1fdb289a27d984eedb7e9ffcd08"],["/img/MC.jpg","c28172a126fb8bd578ec4895a87ad972"],["/img/backgroung.jpg","53960c6f38bd456e4a6b6e5083477094"],["/img/banner.jpg","15e8e8013100c198d7ae202ba6509533"],["/img/default_cover/cover (1).png","75d091b601d591be2963974dc5e6777c"],["/img/default_cover/cover (2).png","ca0a29edb756224d2b25ba45b433fb79"],["/img/default_cover/cover (3).png","78251dd15e0d5e05ad9d09545f15ed1f"],["/img/default_cover/cover (5).png","91cf2df02a422e7be32801c0d9615cf5"],["/img/default_cover/cover (7).png","3c6032a2c2db69aefc975ec84001038e"],["/img/default_cover/cover (8).jpg","66d77f65a9fc880d287ee7ad5892408b"],["/img/default_cover/cover (9).jpg","4f6747719ab350bd195e88214f21cd80"],["/img/edu.jpg","84689d7570770385fbf6ab9a4717ae32"],["/img/edu.png","dd8d0e6ce3334d89b6532c2599435218"],["/img/favicon.png","91299506dd20edc5fb2ba4f82f7f18e1"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/head.png","d4131daedc501e87c87367c9ddcaf3c8"],["/img/index.html","0adba1ffd7dc5a302aae50d7b1462f57"],["/img/logo-minecraft.svg","e31a1564996c886a1945c9e1f294cde9"],["/img/map.jpg","d559bcbdad05a1b1f6e4bcc1cc0e451e"],["/img/myself.jpg","b0e717b70883da452dd3e76825ecd9b3"],["/img/pwa/pwaicons/144.png","74543a328791d5a145d457c726a1ae02"],["/img/pwa/pwaicons/16.jpg","a7d9440f053665af7bd81016358c398b"],["/img/pwa/pwaicons/192.jpg","70909dd6286bd32d354181acf4de25e5"],["/img/pwa/pwaicons/192.png","9013916051d96b513f3e15ac39e9f867"],["/img/pwa/pwaicons/32.jpg","e0cc2baafa0111c71abe55be9da9e301"],["/img/pwa/pwaicons/36.png","d3077a5c5fc0da986a3dd895f1dde186"],["/img/pwa/pwaicons/48.png","31a5a73fcd3b224aa31994e0160a1ebf"],["/img/pwa/pwaicons/512.png","64c09fba74a4c55c580c50dc34e51751"],["/img/pwa/pwaicons/72.png","9712e1caea86d8a34de0788111a3bcf1"],["/img/pwa/pwaicons/96.png","59e9511a6181b8f9c622103e25efdca6"],["/img/uparrow.png","7263ecc5f42d7cfea8c5e66ce23a743c"],["/index.html","595a54dd5412247d020dfbb57f5c0d76"],["/js/continue-aplayer.js","96e029e2b6929a2ce6932dcb779a0ed5"],["/js/custom.js","e423294c52c1344a82d9ee8075d5fc74"],["/js/custom/PublicSacrificeDay.js","3337622648819ebb05d17f96617f9a37"],["/js/custom/ascii.js","9bb2715bed11a52d9ae3903d18506045"],["/js/custom/ex-search.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/custom/fire.js","20710cfedf535a04638bfebae7c14f7f"],["/js/custom/installPWA.js","744019152a4e90bf3694c45195ee336f"],["/js/custom/music.js","3f278a3707417615e062cff244a55b23"],["/js/custom/rightmenu.js","810a556d38a38f80c1a88118103058de"],["/js/fire/21012315.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/fire/MyMath.js","0424d086a2a0411818fb6fbf8471dfec"],["/js/fire/Stage@0.1.4.js","849c05f044e81f1a1bcf7a0e353fcfb6"],["/js/fire/fscreen@1.0.1.js","ba44160f9adb04fcc353b77c4751523a"],["/js/fire/script.js","4fc063b667b48d4e8a5907fb11682f5c"],["/js/hsu.js","893be29f19b7c13d3b7a680829fea5c4"],["/js/jquery.js","30792621ca010e3c5d5f98162629439f"],["/js/load.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/main.js","88aced9e00713346dbf5f92453a349b2"],["/js/search/algolia.js","01e3eecda2d6a3bfb970844a29d61198"],["/js/search/local-search.js","aea55acb22a3b51ad16057b0ea52c0a9"],["/js/tw_cn.js","bc064917c366036544975274bb20a01d"],["/js/utils.js","e95ad73d5170f72ae1596b3d9abb7ed3"],["/link/index.html","25227949cc29f2df6c747046db34ba3f"],["/mouse/mouse.css","d75680ce4603d3812aee12994f6c96fa"],["/music/index.html","239bdcefd380698c62248ed66b95d1c1"],["/page/2/index.html","c5f0e27f6c5571c6f9f07148210b1043"],["/page/3/index.html","655a3ed541f0c1366fc22a77d6627b5f"],["/page/4/index.html","8c8a3cf0e1f2f4777e549c874ffe9a70"],["/page/5/index.html","599de9125e609f54c2ce40cc9ec936df"],["/page/6/index.html","b2492b764fe1ed79537a6a3906c11cb1"],["/page/7/index.html","98ac216dc9e3dfa72cf0f7e518844dea"],["/page/8/index.html","5797edd543c85e43252bac5fa9ef7238"],["/page/9/index.html","fcc1658f716ec53bc8e506e30c323f75"],["/posts/130da42f.html","7abf23e346a6c48b6eb24c9158d66c57"],["/posts/16518a5d.html","7d68adb6e4bd97a7644bd8981c739857"],["/posts/19cf8ae9.html","55a5921a9a337af9abc24f57f581420c"],["/posts/1d63791b.html","a3ecb45ecddd0d341b405a208fd06b5d"],["/posts/1f186d6f.html","cae0eb5069339ce01ef35588583af6d6"],["/posts/20c47d09.html","56213e3b6436f321babdd6bc5b58c374"],["/posts/25df28d4.html","d7292cbe51ea04682202939223ca45ae"],["/posts/2981d3e8.html","b3dd9ac19b6ccab3481d36a2edeb9546"],["/posts/29ce1390.html","04b7897bbf26fed94fd7042968ddb375"],["/posts/2bf30a8f.html","e9ac998c0642036c32227dee593d1232"],["/posts/2cd2b7cf.html","c287ea8d1ae0453971d1a6675f558187"],["/posts/2dd8bc82.html","7fb0535283a87025899b76d8a802054c"],["/posts/3012010d.html","b0ca31ca64d63c48a6d658716f25f152"],["/posts/30226dd9.html","238d95f2e0af21d1410da622533ce33a"],["/posts/3179ac2a.html","e8347c149e458f72677de3b1329fb20d"],["/posts/386b32f2.html","6b9d248ff004339a5b95a4a424c84646"],["/posts/3a6de62a.html","4c0e5946a34f21c23169b2dda52e71e7"],["/posts/3b9a0bd5.html","910fadebfff0adb4323e2aeb1757c4dd"],["/posts/3dd7ffa7.html","adc4adbe634d1b66497c99c00c7c6b94"],["/posts/3e6df65f.html","f5bc61c1bb10cbc5bc8f60d083e3f09f"],["/posts/418342b5.html","29f8eefcb762598aede2994a08e5f728"],["/posts/43ef268c.html","7bb529cf32ee7cbfba69adf5e908fec5"],["/posts/4699cb3f.html","99875626334892f0ba366d933789f1a8"],["/posts/47b007d5.html","3722dd38f84c53e90dfd4068af95277f"],["/posts/48946740.html","f79bddcceeebf517e23c47d3ac37b26a"],["/posts/48b938d1.html","bfdb710e7b3aa2d9db0489d76ad43608"],["/posts/4ad0cf31.html","2838a27c16956f2390ffb21296b397c9"],["/posts/4d006364.html","78cbc97166bf98877c1c30690598ac21"],["/posts/4dc77c26.html","5ed4de87b1760e702b6f2c1487335921"],["/posts/542f557.html","fb1f7332d9e3da046b80ee1746754df2"],["/posts/5487c88e.html","ba1ea083c43c7a85696669ed24ba68f4"],["/posts/579c41ee.html","ad0810f4fc0852b7339189d0c42d4d9d"],["/posts/5a42efcf.html","17bdf12cd02861da631c91c9758d6fc9"],["/posts/5a8b87c.html","93926e2ca318a8ce78dffd6a86d7fd75"],["/posts/5e641f58.html","c18cbc223b13f8200e193e34088822c4"],["/posts/5f6267a3.html","e2d55155de2432568e78dad38b4463d3"],["/posts/5f82cc62.html","525f253d249f4741a6d0729c818219c4"],["/posts/6109666d.html","0fca7071185fca4dbe041a72255bb93f"],["/posts/6287ead9.html","fe5a5fcede14a57242753f76ba3bcfe8"],["/posts/637681ac.html","fe1fca07f497886c06106706e52607b6"],["/posts/67ad6f26.html","4f2811543dcfce80d42b5469148c90b0"],["/posts/69f92217.html","62c3473af8cb7f1a4959bbf91044c93d"],["/posts/6abe8772.html","f37bcbc2929fb96848071f2dadfbb87d"],["/posts/6e818316.html","9900de35b49a71bd59a44573df5a0f62"],["/posts/735e5788.html","8ae6a8283b02d27496fe6ed1d3224efa"],["/posts/751ac048.html","9b5ea118d2f01df086828419d3ac2cef"],["/posts/7e751aa7.html","c8bcdcdcb76423c7722f8ca9ce90a37f"],["/posts/81d10c29.html","d3804428744a43acffedb24524513aeb"],["/posts/90563067.html","36a80f308d28cfb94423e8a9bc751a5b"],["/posts/909735e5.html","89d197aea727e9036c427f85ca70effa"],["/posts/928e25c5.html","f56d30f01d87e9b8de1d200152e0d299"],["/posts/934999f6.html","3ee1c7e5c25dfb603695b0f3d1db2b01"],["/posts/9561cdd8.html","fa75aaf6b0e6bd6aac58fcb6552f1554"],["/posts/9b999461.html","d247842f3d7e28288372573fe147c958"],["/posts/9bb1d67d.html","772571a87d03b44cc618b40bdad7ac5e"],["/posts/a3266abe.html","df4df70e2328322e86cd57ae5ec81c22"],["/posts/a50b380c.html","c291aada2ce16d9e0d2653de564f827d"],["/posts/a721148.html","780978d0253d268571995cca0785ea38"],["/posts/ad2b397f.html","97c721c5b64bbd94d87f67b4f8616f16"],["/posts/afa15b69.html","6eb5a8fffb557db7b04ef6c57f40529f"],["/posts/b3688e01.html","91cc7340d1495b96d7121fba83a1d1ae"],["/posts/b4290629.html","d593a4675c2590df88347d79cc7cac3d"],["/posts/b433e5f.html","01df7fc848edd8bf16c3668097c674c9"],["/posts/bbfc710f.html","33387c3aa8bcf7c13c6295b617471135"],["/posts/bda68703.html","fcb2d778b96f9174dded4dc73bb93e81"],["/posts/c39add7d.html","155a1d8a3c3722e11c082c0f2f611f4e"],["/posts/c822e518.html","80cf902911b8ade32303eed2b8c5a479"],["/posts/cb4f1b09.html","b415ba67510c57113e4e453201bfc7c4"],["/posts/cbadfe7e.html","c9b9721a7f5d811d55c4fcf7dad76537"],["/posts/cc8c02bc.html","ddf5f53ecd879c139b8d9f3b5f0a064f"],["/posts/d04a651.html","e005d6eddda1a6cb27e4988ee07865e0"],["/posts/d5db6e3c.html","c36700a62b95ee142a69f26570310960"],["/posts/d87f7e0c.html","ea956175a12e9e629b9fe739ec7273fd"],["/posts/ddf8c7c8.html","988694288fb17f1c5e7722b6fff2a7b6"],["/posts/de5f9fb2.html","3f66226f39114374b225aec0866013ec"],["/posts/ed21676f.html","13f43fe564faff293145247b503ade6f"],["/posts/ee8bf801.html","340ea740300ca46652ac743e4f1c13c5"],["/posts/ef225e31.html","9efa072e3f86897fb13fc573a1eae4f0"],["/posts/f216fabe.html","470359af05a12cb4600b44aa25e6e20e"],["/posts/f28215f8.html","78be2adeac0688cb52695acdf1227a6a"],["/posts/f5bb7e27.html","e5d356ac20f7a206ba1663f74a77583d"],["/posts/f80f092e.html","9cea8290ec12022385000df9993e1b57"],["/posts/f8c980c0.html","7dbfed75088854c2c24626fc24cd2311"],["/posts/fbf212fd.html","4a6aed8a5a5db3a6d61d9f79e837b0fc"],["/posts/ffec4f13.html","47b5c3e1bf3177616749eba05185d142"],["/preloader/center-atom.css","e34a27f3e075d8251f9fbe5ba323e2ce"],["/privacy/index.html","745cd539f74fe85bae9bcbe38fb53677"],["/random/index.html","5a0da722236cdbb128033c20645a732d"],["/static/css/css.css","0c43f62bfdd01b94f50260002c184f98"],["/static/css/reset.min.css","e24aadcaa4dbda8f24b04392fb7ac784"],["/static/css/style.css","b21970d7d342c03047516175cd64717a"],["/static/js/21012315.js","d41d8cd98f00b204e9800998ecf8427e"],["/static/js/MyMath.js","0424d086a2a0411818fb6fbf8471dfec"],["/static/js/Stage@0.1.4.js","849c05f044e81f1a1bcf7a0e353fcfb6"],["/static/js/fscreen@1.0.1.js","ba44160f9adb04fcc353b77c4751523a"],["/static/js/script.js","4fc063b667b48d4e8a5907fb11682f5c"],["/sw-register.js","5e912ed27d4904a82ee8a77cf2f739b2"],["/tags/ACM-集训/index.html","8ba3a7e4960d5b55b1d57c6ae8bf1ce5"],["/tags/STL/index.html","ffafc6be37a65dc1c07c5d1c39867527"],["/tags/USACO/index.html","1b78cb8de5799403de1561a5e2a8fcee"],["/tags/hexo-github/index.html","738eb6b320da93553b92be63e678c985"],["/tags/index.html","b59b36b6ef6e8e05b5f1ed4454aafbd8"],["/tags/tool/index.html","cc3606c00c059a081ef6a5cb2995673a"],["/tags/乐学/index.html","fbc0e76f9f8147d2de84ff9cca481789"],["/tags/乐学/page/2/index.html","2388a0f3b857e2b395e906a33c8e07b3"],["/tags/乐学/page/3/index.html","5069a6db3011d17e155f0be81e17ff83"],["/tags/乐学/page/4/index.html","5f8212db682e7232a1534d87ffcb9675"],["/tags/乐学/page/5/index.html","a2a7efdcaf2ceaa985a6930070475663"],["/tags/乐学/page/6/index.html","29bec815f73451e9b7481ba0522d8740"],["/tags/插件/index.html","6644e6381093db2f13d1e822b8223dd1"],["/tags/算法/index.html","05853bd208ca82b25556d8b6b5faba26"],["/tags/计算机基础/index.html","aeb99ea3f8de0518f2d66a4e34cf86ac"],["/tags/资源/index.html","e0c236685ff8ecceb2e94dbbb2b80591"],["/tags/转载/index.html","a299f9d6e10de0fe6f2c97ec07c52796"],["/tags/魔改/index.html","c01f1d5155ec4db3494e4962bb8436a5"],["/tools/index.html","d4a7910285ca8efeeaa1ec633e38f0a3"],["/update/index.html","c2b29259eb7a29753df04a0f5ef14fb4"]];
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
