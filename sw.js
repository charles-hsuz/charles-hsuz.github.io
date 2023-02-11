/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","abd9c329c2e3017f8b3ab9149af330d8"],["/about/index.html","7983099a5eb92669e39117e3119f6a0c"],["/archives/2022/12/index.html","3869aa89fd0c7ad6b459f38a5ce0fd29"],["/archives/2022/12/page/2/index.html","c5a4813945d1a05f75db435d80f3ee6d"],["/archives/2022/12/page/3/index.html","71b1652956389304acbb1b30e5bf4c27"],["/archives/2022/12/page/4/index.html","d979e6286125769cba18270ca6ca99a1"],["/archives/2022/12/page/5/index.html","c9a22b4ad79b061cc3004c4ec6fb2720"],["/archives/2022/12/page/6/index.html","924d62f1fcd9faa78b5e621823c368e0"],["/archives/2022/12/page/7/index.html","3d67854ff3887617e0e82832628d01be"],["/archives/2022/index.html","f766cf5f9c98a0bc3b86c6d8e2ef6328"],["/archives/2022/page/2/index.html","7cb4ec11600253f90d5c855dc793f387"],["/archives/2022/page/3/index.html","c1bb10a511cc42063d614810ac1c35c2"],["/archives/2022/page/4/index.html","21176a1fd2b7ae2a7c5d2cfdfbceea68"],["/archives/2022/page/5/index.html","594e703d9cc5395bc7ae1ee75426eda5"],["/archives/2022/page/6/index.html","14446f0814f09278167de5a0e4b51061"],["/archives/2022/page/7/index.html","52a00ef82880e63659213c48512b965e"],["/archives/2023/01/index.html","790ff79e26de4ec2555009f002eb0913"],["/archives/2023/01/page/2/index.html","2be943c65cc1e502858b86c490ce4996"],["/archives/2023/02/index.html","dcff4ec266308415de370be0139f1eee"],["/archives/2023/index.html","fce2b52236e20c1d6a4579a99132f086"],["/archives/2023/page/2/index.html","f2e559a94629087f8ba6c8c106d491fb"],["/archives/index.html","e08daf6d6ae17924d9d24a831ae76f1b"],["/archives/page/2/index.html","3cabcbe6b57ca6f697df7b7456ab1318"],["/archives/page/3/index.html","7474e4f78252189c3b4eba9166e8545f"],["/archives/page/4/index.html","89df81cccbcf655e1de2103fd2d49fba"],["/archives/page/5/index.html","dadf6420227f1cccaef6731cd795c5ec"],["/archives/page/6/index.html","c852cd265e8e3c2c3d44fa51f0470d87"],["/archives/page/7/index.html","4a2a8e5af71d2b2e6a7dddfcb6f1347d"],["/archives/page/8/index.html","de4b5e28b57f06133461920ded64632a"],["/archives/page/9/index.html","705f1ceae53f2ef322fc8163adb47cc5"],["/bb/index.html","f1bf29561458b25b10dbf943f8c7144b"],["/categories/help/index.html","3799ebbb797c018c367f732a5c1a468c"],["/categories/index.html","45728f876596ee0e7a7e9cb7c5f486ee"],["/categories/刷题笔记/index.html","2067e9bae164450d06ece79bc7a17246"],["/categories/刷题笔记/page/2/index.html","770f05a7cf1f3c727da0a7646699ec70"],["/categories/刷题笔记/page/3/index.html","1d95f25c23b17e1de1f21773c161a2d1"],["/categories/刷题笔记/page/4/index.html","b40b10fa15b3566216fa1618e3cc0192"],["/categories/刷题笔记/page/5/index.html","5ed64da3026d581c86a469f69c229504"],["/categories/刷题笔记/page/6/index.html","2d01b0f843ec8c393d502cee42759e36"],["/categories/博客美化/index.html","b8c32e9e2626d9b61fa69283c356a13f"],["/categories/博客魔改/index.html","6daf53d0ef04d2388014ce163364a181"],["/categories/技巧/index.html","5156f8ba8496f4f9bf2a1839297a27b1"],["/categories/教程/index.html","11b439874ea3e92ea5316c48767ce020"],["/categories/杂谈/index.html","abb20d62b9d4e295e0e45ef9a500d449"],["/categories/算法教程/index.html","1dc60d3830d5a944ff936f022762fd6c"],["/categories/语法教程/index.html","e151b125437fd27c337d32a327aa5db2"],["/categories/软件分享/index.html","c857706245d6418bff88f9a54dec5505"],["/cc/index.html","017a559c18e5ca1b8117fd4bad8c1895"],["/charts/index.html","5ec3002ec8aa38f5754969ad4b8c0a45"],["/cookies/index.html","e1cadeaaf567fd59218c69f120bfd8a1"],["/css/essay.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/fire/css.css","0c43f62bfdd01b94f50260002c184f98"],["/css/fire/reset.min.css","e24aadcaa4dbda8f24b04392fb7ac784"],["/css/fire/style.css","b21970d7d342c03047516175cd64717a"],["/css/index.css","b936f87850ddb33001969a75579299c5"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fire.html","71c6162ad37c007f092c4b17ead1e461"],["/fonts/iconfont.eot","8d33e59818fb81f8c2067f662bdd8471"],["/fonts/iconfont.svg","db1a1a7226bee0e78542d5d97aeb6f68"],["/fonts/iconfont.ttf","c87c81f8ca9cc0110c487c1334cee217"],["/fonts/iconfont.woff","673fbe412307d14f6c5d26c774ab5e1f"],["/help/index.html","008bc1d7145f57baeea1255415b8f068"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/INTP.png","67391b367ecd96266f8784d10caf2536"],["/img/INTP.svg","bfd5a1fdb289a27d984eedb7e9ffcd08"],["/img/MC.jpg","c28172a126fb8bd578ec4895a87ad972"],["/img/backgroung.jpg","53960c6f38bd456e4a6b6e5083477094"],["/img/banner.jpg","15e8e8013100c198d7ae202ba6509533"],["/img/default_cover/cover (1).png","75d091b601d591be2963974dc5e6777c"],["/img/default_cover/cover (2).png","ca0a29edb756224d2b25ba45b433fb79"],["/img/default_cover/cover (3).png","78251dd15e0d5e05ad9d09545f15ed1f"],["/img/default_cover/cover (5).png","91cf2df02a422e7be32801c0d9615cf5"],["/img/default_cover/cover (7).png","3c6032a2c2db69aefc975ec84001038e"],["/img/default_cover/cover (8).jpg","66d77f65a9fc880d287ee7ad5892408b"],["/img/default_cover/cover (9).jpg","4f6747719ab350bd195e88214f21cd80"],["/img/edu.jpg","84689d7570770385fbf6ab9a4717ae32"],["/img/edu.png","dd8d0e6ce3334d89b6532c2599435218"],["/img/favicon.png","91299506dd20edc5fb2ba4f82f7f18e1"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/head.png","d4131daedc501e87c87367c9ddcaf3c8"],["/img/index.html","73d6a37f29ccdf82503f753c71574bbc"],["/img/logo-minecraft.svg","e31a1564996c886a1945c9e1f294cde9"],["/img/map.jpg","d559bcbdad05a1b1f6e4bcc1cc0e451e"],["/img/myself.jpg","b0e717b70883da452dd3e76825ecd9b3"],["/img/pwa/pwaicons/144.png","74543a328791d5a145d457c726a1ae02"],["/img/pwa/pwaicons/16.jpg","a7d9440f053665af7bd81016358c398b"],["/img/pwa/pwaicons/192.jpg","70909dd6286bd32d354181acf4de25e5"],["/img/pwa/pwaicons/192.png","9013916051d96b513f3e15ac39e9f867"],["/img/pwa/pwaicons/32.jpg","e0cc2baafa0111c71abe55be9da9e301"],["/img/pwa/pwaicons/36.png","d3077a5c5fc0da986a3dd895f1dde186"],["/img/pwa/pwaicons/48.png","31a5a73fcd3b224aa31994e0160a1ebf"],["/img/pwa/pwaicons/512.png","64c09fba74a4c55c580c50dc34e51751"],["/img/pwa/pwaicons/72.png","9712e1caea86d8a34de0788111a3bcf1"],["/img/pwa/pwaicons/96.png","59e9511a6181b8f9c622103e25efdca6"],["/img/uparrow.png","7263ecc5f42d7cfea8c5e66ce23a743c"],["/index.html","d66e23fa01ab03cd8798a905fcd33b55"],["/js/continue-aplayer.js","96e029e2b6929a2ce6932dcb779a0ed5"],["/js/custom.js","a3578a633f6b5bc168844bfb77ba23c2"],["/js/custom/ascii.js","9bb2715bed11a52d9ae3903d18506045"],["/js/custom/ex-search.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/custom/fire.js","20710cfedf535a04638bfebae7c14f7f"],["/js/custom/installPWA.js","744019152a4e90bf3694c45195ee336f"],["/js/custom/md.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/custom/music.js","3f278a3707417615e062cff244a55b23"],["/js/custom/rightmenu.js","810a556d38a38f80c1a88118103058de"],["/js/fire/21012315.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/fire/MyMath.js","0424d086a2a0411818fb6fbf8471dfec"],["/js/fire/Stage@0.1.4.js","849c05f044e81f1a1bcf7a0e353fcfb6"],["/js/fire/fscreen@1.0.1.js","ba44160f9adb04fcc353b77c4751523a"],["/js/fire/script.js","4fc063b667b48d4e8a5907fb11682f5c"],["/js/hsu.js","893be29f19b7c13d3b7a680829fea5c4"],["/js/jquery.js","30792621ca010e3c5d5f98162629439f"],["/js/load.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/main.js","88aced9e00713346dbf5f92453a349b2"],["/js/search/algolia.js","01e3eecda2d6a3bfb970844a29d61198"],["/js/search/local-search.js","aea55acb22a3b51ad16057b0ea52c0a9"],["/js/tw_cn.js","bc064917c366036544975274bb20a01d"],["/js/utils.js","e95ad73d5170f72ae1596b3d9abb7ed3"],["/link/index.html","637e222e6ffd2ac3c319c23769df1c1a"],["/mouse/mouse.css","d75680ce4603d3812aee12994f6c96fa"],["/music/index.html","058db0b6c38fd23e9b94bb27f6c6eac8"],["/page/2/index.html","f7f951fdc5d8e650b986717e14142350"],["/page/3/index.html","fe89efd078aa726308251db6d4188a96"],["/page/4/index.html","24ba00eeb249d018a8831940c9ca9b4a"],["/page/5/index.html","0626354b2524df69cc27190daed1f27a"],["/page/6/index.html","13e1b1c04bd1ba4d0d2ac8171794945d"],["/page/7/index.html","3ec5a719f7a769e96efed209a69612a5"],["/page/8/index.html","83fcc893288c4c452cc2f07dcf72e6cd"],["/page/9/index.html","350c50016c258c8803c2017d399de2a5"],["/posts/130da42f.html","8d4fceeec912126f2798a259917e7310"],["/posts/16518a5d.html","bcdaa11c0ec5bdec7a0c5bd49ab87db0"],["/posts/19cf8ae9.html","0c4a624a11c5e12a146031371bb69a90"],["/posts/1d63791b.html","53b6c064026e883df5e2be152237f64b"],["/posts/1f186d6f.html","dae6eb8540af39a949cbf92fa0e5fb77"],["/posts/20c47d09.html","7061390b483266a61653094f68873a8b"],["/posts/25df28d4.html","ae9a2693a72e78fb740d35cb1996b4c0"],["/posts/2981d3e8.html","656727024c141e9f84f5d63b51995a60"],["/posts/29ce1390.html","e863f00afd9938fdaef4636be0fecc5b"],["/posts/2bf30a8f.html","2cc050c5c30f593f8783a3e40176d196"],["/posts/2cd2b7cf.html","7ad71decd4c8797ad71349d0cddb91f9"],["/posts/2dd8bc82.html","59c26623e8308d84f9850c589f826c14"],["/posts/3012010d.html","7cccf2b61866da4080cc01e3aedf2999"],["/posts/30226dd9.html","f5283354206273b1ae6b319adfc1069a"],["/posts/3179ac2a.html","8f4ed03086fbc636243def0d9543702a"],["/posts/386b32f2.html","09e60fd6e5a656185ff0b9042a18359e"],["/posts/3a6de62a.html","85074a3eb76cd9fc5566a6f814038138"],["/posts/3b9a0bd5.html","d04a50d33d29396e302f2c8354cdc336"],["/posts/3dd7ffa7.html","3505f8a40109f53038da102e7ff5e6c8"],["/posts/3e6df65f.html","2833017217d8049dbe69e50e97e052e9"],["/posts/418342b5.html","09fb43dcef798390ca367768381feed5"],["/posts/43ef268c.html","90590086173f9aefbcd759c8dc66ea8f"],["/posts/4699cb3f.html","39cf7161c4c45a7bc4ab63bc75bc8a6f"],["/posts/47b007d5.html","f08430f0f4ed065d283f0adb7d480848"],["/posts/48946740.html","df4a28664600a9c444473872b8e004c2"],["/posts/48b938d1.html","a06f00e87f49607691f223991b6171e7"],["/posts/4ad0cf31.html","09abc301188ceb005804ab61bebf4bff"],["/posts/4d006364.html","f859016c6ea15e469c3c8a30c17b2c2b"],["/posts/4dc77c26.html","8fe7a907eaedddf86cf3fa36601cf0c3"],["/posts/542f557.html","2a8a234ef1978cc332a39b0693e3a9af"],["/posts/5487c88e.html","165f7d187a8efb2b1c78534bb5ee18b6"],["/posts/579c41ee.html","0de332db1af639a0d83e1fa0784833f7"],["/posts/5a42efcf.html","9fc63da840709bffae5e36ee6d0f143a"],["/posts/5a8b87c.html","9e053770f9b9683a89894b9ec8d9cbe8"],["/posts/5e641f58.html","dccbebd4a6140637a57482c069d5f2d9"],["/posts/5f6267a3.html","22581701d2ab1897f216d166563ec062"],["/posts/5f82cc62.html","a5bdab760050d5fe4bef281c36472ee4"],["/posts/6109666d.html","035429e99f82904180a78ae95e58653b"],["/posts/6287ead9.html","9a44c9bccc7706247a94c7a248c69a72"],["/posts/637681ac.html","295793a3a13d809661f4f0078ccb7025"],["/posts/67ad6f26.html","f73edf1ff7ca34732b73373b2f24dd96"],["/posts/69f92217.html","8f84d793a41327db351e3b2771a3024e"],["/posts/6abe8772.html","78b8fb59ecfba0f96282a36225195470"],["/posts/6e818316.html","610402d3c06d79a0934f48047a68524e"],["/posts/735e5788.html","9ea51b363890865f66d0d6b50e087ee7"],["/posts/751ac048.html","6a4e21e098e24828d27d21270a4f6d2f"],["/posts/7e751aa7.html","8bfa474717e0047877c794c93f3b56d3"],["/posts/81d10c29.html","4ebbe6cfa55558bcf50f608a50947c98"],["/posts/90563067.html","df4afef476997bca7264e2c72ef944cb"],["/posts/909735e5.html","a623490e3d38864a39a55d759664e0dc"],["/posts/928e25c5.html","c8f134a1a29068d279fc2e2c231fe82a"],["/posts/934999f6.html","0b513359b735f90136f74e14a5a4838c"],["/posts/9561cdd8.html","0e3c6e378775531283248453f5baa94e"],["/posts/9b999461.html","f4099839cb7bdd35cb5de787db4b52d7"],["/posts/9bb1d67d.html","fe4a731f57f4284ab56d0ce57326237a"],["/posts/a3266abe.html","ac8e32dfd63343cbcb11009afb1bfca5"],["/posts/a50b380c.html","a5439f306f25f3e3ed07aa2ca773f394"],["/posts/a721148.html","c1d33ad832d392c9b82bc91294b49b56"],["/posts/ad2b397f.html","f2baa6adddfcfcd751f61b23b5eab426"],["/posts/afa15b69.html","cfc9232613c030695cac27eabb19b318"],["/posts/b3688e01.html","7c52315d41c870c95cdbe05c8788c15f"],["/posts/b4290629.html","da527f63f3b69fff26892495fbd6c2ed"],["/posts/b433e5f.html","b26ace4cb1b3da2fcf9b36daf6c0fad0"],["/posts/bbfc710f.html","89939e41238dfa3c85e09317385908ca"],["/posts/bda68703.html","5df43c9dae9b314ceb06046a1f423dbe"],["/posts/c39add7d.html","2d714f90d012a85cb8f434175b095554"],["/posts/c822e518.html","7e458fa931591f14b06e4d6803d2e264"],["/posts/cb4f1b09.html","177770fd1698ce2d3efe673ac6d95a44"],["/posts/cbadfe7e.html","1e8c10d8f2e63751aaf4de7d9342fdeb"],["/posts/cc8c02bc.html","822133059f5fc836d1a7b17f24477315"],["/posts/d04a651.html","bac0d10237ca45ef22dfefd7c9fcfb2d"],["/posts/d5db6e3c.html","47c0c10bba444cb20beaef644413df2a"],["/posts/d87f7e0c.html","0ce3b14fc010fefe2bf3463751acab46"],["/posts/ddf8c7c8.html","d2e03b170a9c5e459a0ad620c0151efc"],["/posts/de5f9fb2.html","9f562fdf6394ea54bbd836e676932c0c"],["/posts/ed21676f.html","afeb03996c579eea51e9609f383e952f"],["/posts/ee8bf801.html","0ef1b08de33dc5c6d0e7b90f1679fbfc"],["/posts/ef225e31.html","7bddc1e118470dedd72ba614f0769ddc"],["/posts/f216fabe.html","72976fa3cc3539e4839b416b3c72dd63"],["/posts/f28215f8.html","f2d1c518745dab69de3a495e24143c8a"],["/posts/f5bb7e27.html","4544aea833902eba620e4bfb9570eabd"],["/posts/f80f092e.html","182beabee63e23a950f29ef6306cad07"],["/posts/f8c980c0.html","3c5e62fd6e0c3e42b830de787e13345a"],["/posts/fbf212fd.html","789b7eb5ea94455ed86caf945ebf7da8"],["/posts/ffec4f13.html","23743bc51aa53fd57447ecaa42072332"],["/preloader/center-atom.css","e34a27f3e075d8251f9fbe5ba323e2ce"],["/privacy/index.html","ea0e2cbbe6137161f3d25830ebf8b467"],["/random/index.html","2337f61649a7bec77148039e998b8d52"],["/static/css/css.css","0c43f62bfdd01b94f50260002c184f98"],["/static/css/reset.min.css","e24aadcaa4dbda8f24b04392fb7ac784"],["/static/css/style.css","b21970d7d342c03047516175cd64717a"],["/static/js/21012315.js","d41d8cd98f00b204e9800998ecf8427e"],["/static/js/MyMath.js","0424d086a2a0411818fb6fbf8471dfec"],["/static/js/Stage@0.1.4.js","849c05f044e81f1a1bcf7a0e353fcfb6"],["/static/js/fscreen@1.0.1.js","ba44160f9adb04fcc353b77c4751523a"],["/static/js/script.js","4fc063b667b48d4e8a5907fb11682f5c"],["/sw-register.js","009e39167f7e5d2b844331c9bec5bb88"],["/tags/ACM-集训/index.html","86a927921296d40267f828691576943b"],["/tags/STL/index.html","32b561b7ee78df745e44ef06d22ef9f3"],["/tags/USACO/index.html","7f3e7dab34cccd77613bdaa489586268"],["/tags/hexo-github/index.html","32f34068824c789fd58cbe2a65e6c8eb"],["/tags/index.html","9b880b8a20f99dcbcc9617d541a94d56"],["/tags/tool/index.html","b0bd3b78f9467b1b028bc2d597e5fccf"],["/tags/乐学/index.html","0acbfc0f4a18919911b16a14cf3e305f"],["/tags/乐学/page/2/index.html","3d74fadceb0996c414cc7fc50e4f95e7"],["/tags/乐学/page/3/index.html","0bfd203ac3d3a2d92748a61805671a06"],["/tags/乐学/page/4/index.html","ca94fca0fd297bce95776e485353ed41"],["/tags/乐学/page/5/index.html","f436c6a7d50ef1757de54da93f2c9aca"],["/tags/乐学/page/6/index.html","a56ca6e062e15ed87f433690df19b411"],["/tags/插件/index.html","a2135b18a8d1c7098609ad4887cd0390"],["/tags/算法/index.html","2bf975f4506f76e2aa901d02825b1b20"],["/tags/计算机基础/index.html","65a46c2194ecf0fb7b42a7a44fe37144"],["/tags/资源/index.html","96351ad4686e7f507938067895ec3dc8"],["/tags/转载/index.html","cfcd2ec0636fcf5b0cbfbb65eff59afc"],["/tags/魔改/index.html","7aa1786d6ed7d1bf34de7c383b4cb1e4"],["/tools/index.html","2d3c6de987508c3820d8dd139436f13d"],["/update/index.html","2a2113f50a99336c5faad266f2ffaf67"]];
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
