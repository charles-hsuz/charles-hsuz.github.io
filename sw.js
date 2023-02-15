/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","81e21a4ee2ba8026c7cc4274e8291012"],["/about/index.html","db4c54f6388e7fddd605c9f0e1842af9"],["/archives/2022/12/index.html","c93aa993ee6a2a2e04b412d58955d812"],["/archives/2022/12/page/2/index.html","a56142d9dc8220cd9ca8aec3f2342645"],["/archives/2022/12/page/3/index.html","c35683fc0db79a2272479c34a5259f36"],["/archives/2022/12/page/4/index.html","a64a628e916cbc840d5d99793d8bed2c"],["/archives/2022/12/page/5/index.html","c589cc3ce93aeebbcb1c79b5b4760d9e"],["/archives/2022/12/page/6/index.html","3d6df45e6f95d409397dd5b890895ab0"],["/archives/2022/12/page/7/index.html","aaa47ddace48facadbd7381d2d9fac2e"],["/archives/2022/index.html","76cb9116494115f189dbd84daa2d8a3c"],["/archives/2022/page/2/index.html","667d09808eaa0b4d04154b88fbab918c"],["/archives/2022/page/3/index.html","66bda9dde36036ef44341167beb3451b"],["/archives/2022/page/4/index.html","06529b7aab598892e463bd8e83f8277a"],["/archives/2022/page/5/index.html","4e49b17eca3b4ffa01eb515951432d1c"],["/archives/2022/page/6/index.html","ed5a77f46d10934a75b9e7c05815e3f7"],["/archives/2022/page/7/index.html","8aefea5b2f4ef9be925a5d397b97d054"],["/archives/2023/01/index.html","281fc53c47c778d7f07e8157ed2ca151"],["/archives/2023/01/page/2/index.html","6a0aaad7ba20245af80cb1057bf1ae71"],["/archives/2023/02/index.html","ed94833d56c1dacbc7b9310fb5eacf3f"],["/archives/2023/index.html","db19f3bbb2ae6096582372d954614f27"],["/archives/2023/page/2/index.html","2399033c9ec1671cb27925b6cf101a4a"],["/archives/index.html","99d010854af449ff9a307a594b432412"],["/archives/page/2/index.html","122e215ca3025be12d341823492c913e"],["/archives/page/3/index.html","0aa8d9306e93a460be4bc4ffd4238310"],["/archives/page/4/index.html","ceb9f9953da35a56f6a3f7254262d324"],["/archives/page/5/index.html","7828f2e21e15cdf0f8bccd26d1feae06"],["/archives/page/6/index.html","d3d5b7affcf45b156d63d5003fca0b08"],["/archives/page/7/index.html","d4781ff10dcf9a3a39f3364252499a4d"],["/archives/page/8/index.html","ff3ae88e49b9dfcb71bae9b23c376f2c"],["/archives/page/9/index.html","652c25ed06a22fef153c62d90a9f69d9"],["/bb/index.html","ef870fc9df8a7bda6bd35817318a08e0"],["/categories/help/index.html","fcf23e89049c7bd9f205f2b204ef3e42"],["/categories/index.html","12063a68935747ffd9f537eaadfe9155"],["/categories/刷题笔记/index.html","d20104d667b0f058b2caef7a6b05c3ba"],["/categories/刷题笔记/page/2/index.html","948f4991624a1e778996d4052e9d8d4f"],["/categories/刷题笔记/page/3/index.html","c0c6ca9838ce3143d1e5557d5ae95f04"],["/categories/刷题笔记/page/4/index.html","8a30665d9723510633f713be03d2de2a"],["/categories/刷题笔记/page/5/index.html","492625b6a9320ed76a8bdd64a85c7c70"],["/categories/刷题笔记/page/6/index.html","8876f24743a767fe17498f74e630be9f"],["/categories/博客美化/index.html","2c0d2ca13b30ab842acd6647e756ba53"],["/categories/博客魔改/index.html","f07524f64218df5dd4e92efa1ce36030"],["/categories/技巧/index.html","b00b44203c108dc25275845fac39d8f0"],["/categories/教程/index.html","0f2d5491b63c9147632be90c96b9db1b"],["/categories/杂谈/index.html","f7636f2a559bef55b63ca1d0ba13390a"],["/categories/算法教程/index.html","28002f270a84479fcd30f6ce764604a4"],["/categories/语法教程/index.html","4fad7a54a4356af6c7115235eeea04a7"],["/categories/软件分享/index.html","d819238c4750379e396ee2577021dc3f"],["/cc/index.html","942786b1fcc8bd8fbd400057bd12fcea"],["/charts/index.html","223ea376180cc4f42a2b503b6573aaa3"],["/cookies/index.html","a04801518a9147b2cb1191fc507997f4"],["/css/essay.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/fire/css.css","0c43f62bfdd01b94f50260002c184f98"],["/css/fire/reset.min.css","e24aadcaa4dbda8f24b04392fb7ac784"],["/css/fire/style.css","b21970d7d342c03047516175cd64717a"],["/css/index.css","66d725b94020fd8a1bab1e4b353fb21b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fire.html","71c6162ad37c007f092c4b17ead1e461"],["/fonts/iconfont.eot","8d33e59818fb81f8c2067f662bdd8471"],["/fonts/iconfont.svg","db1a1a7226bee0e78542d5d97aeb6f68"],["/fonts/iconfont.ttf","c87c81f8ca9cc0110c487c1334cee217"],["/fonts/iconfont.woff","673fbe412307d14f6c5d26c774ab5e1f"],["/help/index.html","35ff4631298b05808e477c548373f8e6"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/INTP.png","67391b367ecd96266f8784d10caf2536"],["/img/INTP.svg","bfd5a1fdb289a27d984eedb7e9ffcd08"],["/img/MC.jpg","c28172a126fb8bd578ec4895a87ad972"],["/img/backgroung.jpg","53960c6f38bd456e4a6b6e5083477094"],["/img/banner.jpg","15e8e8013100c198d7ae202ba6509533"],["/img/default_cover/cover (1).png","75d091b601d591be2963974dc5e6777c"],["/img/default_cover/cover (2).png","ca0a29edb756224d2b25ba45b433fb79"],["/img/default_cover/cover (3).png","78251dd15e0d5e05ad9d09545f15ed1f"],["/img/default_cover/cover (5).png","91cf2df02a422e7be32801c0d9615cf5"],["/img/default_cover/cover (7).png","3c6032a2c2db69aefc975ec84001038e"],["/img/default_cover/cover (8).jpg","66d77f65a9fc880d287ee7ad5892408b"],["/img/default_cover/cover (9).jpg","4f6747719ab350bd195e88214f21cd80"],["/img/edu.jpg","84689d7570770385fbf6ab9a4717ae32"],["/img/edu.png","dd8d0e6ce3334d89b6532c2599435218"],["/img/favicon.png","91299506dd20edc5fb2ba4f82f7f18e1"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/head.png","d4131daedc501e87c87367c9ddcaf3c8"],["/img/index.html","1ad9ef069a4bd9e80d8df64e6b2e740d"],["/img/logo-minecraft.svg","e31a1564996c886a1945c9e1f294cde9"],["/img/map.jpg","d559bcbdad05a1b1f6e4bcc1cc0e451e"],["/img/myself.jpg","b0e717b70883da452dd3e76825ecd9b3"],["/img/pwa/pwaicons/144.png","74543a328791d5a145d457c726a1ae02"],["/img/pwa/pwaicons/16.jpg","a7d9440f053665af7bd81016358c398b"],["/img/pwa/pwaicons/192.jpg","70909dd6286bd32d354181acf4de25e5"],["/img/pwa/pwaicons/192.png","9013916051d96b513f3e15ac39e9f867"],["/img/pwa/pwaicons/32.jpg","e0cc2baafa0111c71abe55be9da9e301"],["/img/pwa/pwaicons/36.png","d3077a5c5fc0da986a3dd895f1dde186"],["/img/pwa/pwaicons/48.png","31a5a73fcd3b224aa31994e0160a1ebf"],["/img/pwa/pwaicons/512.png","64c09fba74a4c55c580c50dc34e51751"],["/img/pwa/pwaicons/72.png","9712e1caea86d8a34de0788111a3bcf1"],["/img/pwa/pwaicons/96.png","59e9511a6181b8f9c622103e25efdca6"],["/img/uparrow.png","7263ecc5f42d7cfea8c5e66ce23a743c"],["/index.html","c67b3f25f9c67c775ee2185ad27001f8"],["/js/continue-aplayer.js","96e029e2b6929a2ce6932dcb779a0ed5"],["/js/custom.js","e423294c52c1344a82d9ee8075d5fc74"],["/js/custom/PublicSacrificeDay.js","3337622648819ebb05d17f96617f9a37"],["/js/custom/ascii.js","9bb2715bed11a52d9ae3903d18506045"],["/js/custom/ex-search.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/custom/fire.js","20710cfedf535a04638bfebae7c14f7f"],["/js/custom/installPWA.js","744019152a4e90bf3694c45195ee336f"],["/js/custom/music.js","3f278a3707417615e062cff244a55b23"],["/js/custom/rightmenu.js","810a556d38a38f80c1a88118103058de"],["/js/fire/21012315.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/fire/MyMath.js","0424d086a2a0411818fb6fbf8471dfec"],["/js/fire/Stage@0.1.4.js","849c05f044e81f1a1bcf7a0e353fcfb6"],["/js/fire/fscreen@1.0.1.js","ba44160f9adb04fcc353b77c4751523a"],["/js/fire/script.js","4fc063b667b48d4e8a5907fb11682f5c"],["/js/hsu.js","893be29f19b7c13d3b7a680829fea5c4"],["/js/jquery.js","30792621ca010e3c5d5f98162629439f"],["/js/load.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/main.js","88aced9e00713346dbf5f92453a349b2"],["/js/search/algolia.js","01e3eecda2d6a3bfb970844a29d61198"],["/js/search/local-search.js","aea55acb22a3b51ad16057b0ea52c0a9"],["/js/tw_cn.js","bc064917c366036544975274bb20a01d"],["/js/utils.js","e95ad73d5170f72ae1596b3d9abb7ed3"],["/link/index.html","dae8bae5fa53ad911ee193ce0d004993"],["/mouse/mouse.css","d75680ce4603d3812aee12994f6c96fa"],["/music/index.html","a46148b7cb6b8b9eaf84f3dc98f17743"],["/page/2/index.html","e8ea4e1b34ed3254f552e43f52061883"],["/page/3/index.html","4f305de5803e9d957033953e662af761"],["/page/4/index.html","238e606cb648722b5eede781a4be5f7b"],["/page/5/index.html","7561cf843c3070b3ab8f00255ada2c66"],["/page/6/index.html","8809f59953761ae45e8792f34276ac7c"],["/page/7/index.html","9aced3b5b737c049d13ba876cc0737ad"],["/page/8/index.html","b5da3ee957aa7e7e8125ddd42e5b6d0e"],["/page/9/index.html","ca1030b8822f6e467f911ed5b6b2ae91"],["/posts/130da42f.html","de4850859bfcd3b236d2d0cfa02a348b"],["/posts/16518a5d.html","d290f9a9879c04c5f5b11c77b96551c8"],["/posts/19cf8ae9.html","3a43a43e547602e4e1627a954f89f1af"],["/posts/1d63791b.html","a54107afc5125217e6971e1571625d05"],["/posts/1f186d6f.html","638d62904afcd270082e71ab5fda0571"],["/posts/20c47d09.html","7b75f0ff0772860736f894a81a741b2f"],["/posts/25df28d4.html","f6e686f7835ba784c7f5e62479ecf664"],["/posts/2981d3e8.html","139b757462bc78158fa61192eb7ea899"],["/posts/29ce1390.html","2b9df8b7c4f8cc5be48e1afcf041fe61"],["/posts/2bf30a8f.html","bc4d38e4ffa0bf842501d308507f1afd"],["/posts/2cd2b7cf.html","4c8497158516fa2b7ef7a6d07f083aa0"],["/posts/2dd8bc82.html","a36647382ebe3dc62badf679b00ad736"],["/posts/3012010d.html","c042bab6e10b06f8377da39c60271678"],["/posts/30226dd9.html","c23a4e80552772badcc79d72dadac141"],["/posts/3179ac2a.html","08bcda43b9da81ae3fb10240d6f7c66c"],["/posts/386b32f2.html","e6eebf4dbeb5ba623880824a6d8144db"],["/posts/3a6de62a.html","3ecd3c263d6899193a762a9ff3c58668"],["/posts/3b9a0bd5.html","10930a092453a1b46d52cdb165b48f6d"],["/posts/3dd7ffa7.html","d181d99d53b8009543fbad06b0656c68"],["/posts/3e6df65f.html","db69067782986c83d0017eb0e8a6de22"],["/posts/418342b5.html","de814d732982d6ce3b11288ed67e5ade"],["/posts/43ef268c.html","cb582708b030677d3ae67c3df73d9875"],["/posts/4699cb3f.html","836995ee4ee03e0a135619ed1800d928"],["/posts/47b007d5.html","36918f795eb535e027448beaff1df533"],["/posts/48946740.html","63a957b6e1475fb77e7e232bddd12c89"],["/posts/48b938d1.html","cd08952e223dc02391b2086221d189a2"],["/posts/4ad0cf31.html","171e0a0eef5b501f311b0c2f71c62e5b"],["/posts/4d006364.html","555bad8cdeef39b9c4646845bb448296"],["/posts/4dc77c26.html","4a67acecb09b3ad447067e6f7a82d7b5"],["/posts/542f557.html","9cbf0cec4327e2bb60bcdd628d2e446d"],["/posts/5487c88e.html","bc254090cc669733b64340e8d1d23cca"],["/posts/579c41ee.html","495ba463c73545c767b53f3ee79159b6"],["/posts/5a42efcf.html","8513c0635e6e41467d30a48083812cad"],["/posts/5a8b87c.html","f651c146895c1c57ec9c757f33621cd7"],["/posts/5e641f58.html","76d9a3a2aa5bac415d3b254fb77f4af8"],["/posts/5f6267a3.html","e1e6bf5509d17ccde833d39d0e31ec7c"],["/posts/5f82cc62.html","e3a2d78a170ab880a3ccd7c7d7c925f5"],["/posts/6109666d.html","89a772ba9a5e1089178989ca978ebbb0"],["/posts/6287ead9.html","6a8a2ffb4a55258b1c5086b19c027330"],["/posts/637681ac.html","39ee3afd88cb8043ace822de63a8edce"],["/posts/67ad6f26.html","4be60c5af56e2eeceaeec4dc17adeb99"],["/posts/69f92217.html","e4333c1e2e3ab38b42e366a2e599a1dd"],["/posts/6abe8772.html","d15bcec9f2e679fb2c17bdb845a37c89"],["/posts/6e818316.html","32f7f7bf01731845f9834d7dece38c19"],["/posts/735e5788.html","be6a638259adb0060ab200ed9d026337"],["/posts/751ac048.html","f3441d25b7c309c565f97b9381cc0bac"],["/posts/7e751aa7.html","87fc090172bba594ef1579e04748620a"],["/posts/81d10c29.html","86f76723b869435a819b4a3dc3110cbe"],["/posts/90563067.html","261e8f9d9dd4a491912053a8ba15ceaf"],["/posts/909735e5.html","11841c4fe271d6d8f0542fdf6f192d2f"],["/posts/928e25c5.html","8b864a8ee35b8b576f2406a7bd5add98"],["/posts/934999f6.html","be96f6d1bf41c7dc3de6908a525b2990"],["/posts/9561cdd8.html","d5f249491c0b120d1bba88384ce96b77"],["/posts/9b999461.html","2eae2d76e918089be855cc7d1812b174"],["/posts/9bb1d67d.html","1134747e28ed5c0feaae8eef9e50b800"],["/posts/a3266abe.html","cd55ee6ccbc05d2dfc7213916d1a9052"],["/posts/a50b380c.html","21871cc17fb29642005990bef1e7eb81"],["/posts/a721148.html","6b7d50d210e1996e60976d8ca55d3a86"],["/posts/ad2b397f.html","ea89ded84b297bd9489980cef170e61d"],["/posts/afa15b69.html","639447db105123394283af108b44f17e"],["/posts/b3688e01.html","f098d8bf24e2271cd9cb22da539fde6c"],["/posts/b4290629.html","fea9c80685ed424cad33ae758e445805"],["/posts/b433e5f.html","5db2fc752cbbc7850b7e8d69d11eb066"],["/posts/bbfc710f.html","57d3ce6954c1f969791033127bbda8e8"],["/posts/bda68703.html","222cf0b54a1bc48035abe4fb3d4b9441"],["/posts/c39add7d.html","bddba65f7e96da01897586311a321906"],["/posts/c822e518.html","8085203c3fad53e80534e07feb80397b"],["/posts/cb4f1b09.html","32f02eace7fef83c14a19fd0a362dece"],["/posts/cbadfe7e.html","984ef48ee0a428d1a245e052d6b4a53c"],["/posts/cc8c02bc.html","570eef49a2852e07826a74abab58caff"],["/posts/d04a651.html","e96c2edabbd55935bc9e7a9be0b1941e"],["/posts/d5db6e3c.html","642a12c0b2c8685c86f37292e06b7535"],["/posts/d87f7e0c.html","53b4c73ac1e18d6a24d12fc847732875"],["/posts/ddf8c7c8.html","c71d3171f40335af650f8edee4ebc85b"],["/posts/de5f9fb2.html","61d65f24b9f1079fe51a4bbeba6afd10"],["/posts/ed21676f.html","4d1d54ab63d7ac5b35f9396f1de7bde8"],["/posts/ee8bf801.html","044d8c1adb7f12093267a08c250afed0"],["/posts/ef225e31.html","3bc1b33f05b9c50d0ba232694123af18"],["/posts/f216fabe.html","c99d44291000695cd294462fe3715020"],["/posts/f28215f8.html","5c19b113357721461c9a030a42eec339"],["/posts/f5bb7e27.html","f1503dd9169d1286efff09a203ee2b06"],["/posts/f80f092e.html","7b11e2e5ff63d8eae69f595d8b0d42b6"],["/posts/f8c980c0.html","498b81e49f49fc4a65adf49599bcd324"],["/posts/fbf212fd.html","9d42a12c0a93786658df788dd420f30e"],["/posts/ffec4f13.html","a78c686252b9714909a164a4a5104b9e"],["/preloader/center-atom.css","e34a27f3e075d8251f9fbe5ba323e2ce"],["/privacy/index.html","2481b65a8892721e398b52e689109f63"],["/random/index.html","fc1330189a4af7a106c46cd4b9b39f1a"],["/static/css/css.css","0c43f62bfdd01b94f50260002c184f98"],["/static/css/reset.min.css","e24aadcaa4dbda8f24b04392fb7ac784"],["/static/css/style.css","b21970d7d342c03047516175cd64717a"],["/static/js/21012315.js","d41d8cd98f00b204e9800998ecf8427e"],["/static/js/MyMath.js","0424d086a2a0411818fb6fbf8471dfec"],["/static/js/Stage@0.1.4.js","849c05f044e81f1a1bcf7a0e353fcfb6"],["/static/js/fscreen@1.0.1.js","ba44160f9adb04fcc353b77c4751523a"],["/static/js/script.js","4fc063b667b48d4e8a5907fb11682f5c"],["/sw-register.js","dbd448bf661dc9f332025b5ad0d1a45e"],["/tags/ACM-集训/index.html","f028994276cf9b8b874286eef21f0e8b"],["/tags/STL/index.html","7c5d8db9eaef36ef02d47ead2b26fe5e"],["/tags/USACO/index.html","35b81db60113978520cbd6a9b31b5b11"],["/tags/hexo-github/index.html","54ad57f2a62c9e035e5b7b63c1257003"],["/tags/index.html","f3e4d2c1ba3fac14ffb13d69e6bd4ad6"],["/tags/tool/index.html","a9238b881156df08de169dd7e679c006"],["/tags/乐学/index.html","c2238124e47f9d570c1e283cc0ee7933"],["/tags/乐学/page/2/index.html","521c8422a3e13d097c93560e44cdef46"],["/tags/乐学/page/3/index.html","9aeb471f03e2c0061fd2ef19552599e2"],["/tags/乐学/page/4/index.html","74bb59c506b100348c59a79120b228b7"],["/tags/乐学/page/5/index.html","2e0fdbf9c2aa8e7a8b58253ef9457082"],["/tags/乐学/page/6/index.html","2e6cbb302c9d79925f29dce0c5038e91"],["/tags/插件/index.html","dab6a80367f157eca04690abea153c6b"],["/tags/算法/index.html","5e1885bacd5a8ffe4cfa31a0e61b683e"],["/tags/计算机基础/index.html","522076299d775b7bd8196516710289ce"],["/tags/资源/index.html","76d3134d8579278af972ef39b4de1177"],["/tags/转载/index.html","1794182690133e987e20bff5ea403ea1"],["/tags/魔改/index.html","631bbaaa1976d3fe9082b3e0a3e58279"],["/tools/index.html","9806632a201f3a8b1ff80556aea293f7"],["/update/index.html","776552aeaa29f5432d00676c2fa98ee5"]];
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
