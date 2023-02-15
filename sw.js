/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","a0727c1dace54c8810cfc76858470192"],["/about/index.html","db4c54f6388e7fddd605c9f0e1842af9"],["/archives/2022/12/index.html","b601d38f10de674734e7609764766c92"],["/archives/2022/12/page/2/index.html","4b1b73292bf71706b681a0114ca5212c"],["/archives/2022/12/page/3/index.html","befc27e57519469d4c843666d07cb909"],["/archives/2022/12/page/4/index.html","c047a4d4282a84ab634b4618e4e612cf"],["/archives/2022/12/page/5/index.html","b152b0a021a3074ad2378a1c1bd7f8fb"],["/archives/2022/12/page/6/index.html","85c8aca59a31c16e98e498da73150760"],["/archives/2022/12/page/7/index.html","23435b0607cdb798fdc64d8eae6b971f"],["/archives/2022/index.html","b6fb8d9ef270b2cbf5e698b5466051c0"],["/archives/2022/page/2/index.html","4461389746ca644e49a83381a83a37f0"],["/archives/2022/page/3/index.html","b40e016252a1be72bb0fff61a8bb70d0"],["/archives/2022/page/4/index.html","4f4f6cda5dfd6b44f41e2fb7bd270f73"],["/archives/2022/page/5/index.html","ccee37d24ee0f3a25e4893455a3a058d"],["/archives/2022/page/6/index.html","c71719d9de88c9c63c89513bb261577f"],["/archives/2022/page/7/index.html","9250ad0c86a4a60c769a2d468ff1d381"],["/archives/2023/01/index.html","89e3fb5be00d8bc184df786eaa20013a"],["/archives/2023/01/page/2/index.html","5ac37daafe128709ef3bcf4855047d88"],["/archives/2023/02/index.html","6648000d08f419ca1ba39016aff62609"],["/archives/2023/index.html","dc8cccecb1d87bef40c47983c7ae6cf5"],["/archives/2023/page/2/index.html","f90b7b77a204b7edc9b8ce1a473e019a"],["/archives/index.html","efc9c7b6cb1c761060e5e656e311c48e"],["/archives/page/2/index.html","301019c6079ee6de63ebde778fc34979"],["/archives/page/3/index.html","90ab7d6b87646556a7b7d08bd3d813b2"],["/archives/page/4/index.html","5177f7f081b5158848b44de26fcfd42f"],["/archives/page/5/index.html","7605e32f77ad7de9c2fa8b0e35a7addd"],["/archives/page/6/index.html","8e65261d57a0ebfab356861ac2eae78a"],["/archives/page/7/index.html","db5b1bc10d7044bf4916ec2e80250d34"],["/archives/page/8/index.html","06055242c8f8b4ce0f2e4e28e234391e"],["/archives/page/9/index.html","e2ff61c467b2bf02076f744ded823717"],["/bb/index.html","ef870fc9df8a7bda6bd35817318a08e0"],["/categories/help/index.html","6e46c5cd83f5f769afee65b8a0669fc9"],["/categories/index.html","8acb21115c13c3ae96fd805b8055d23e"],["/categories/刷题笔记/index.html","030c029f0b116da23920c9c77c8ec9ce"],["/categories/刷题笔记/page/2/index.html","da19e43544af0954512350af7cdf1ff5"],["/categories/刷题笔记/page/3/index.html","f5271f0cbef950d18b43a61f96fa0d37"],["/categories/刷题笔记/page/4/index.html","f5a29b302cddc29dcc303b0a81980644"],["/categories/刷题笔记/page/5/index.html","bc0cfb2176095475e1f9605ffe3e0e46"],["/categories/刷题笔记/page/6/index.html","e856c9eef6659f0f755fe40d9c7ae6dd"],["/categories/博客美化/index.html","ad608b17602f9c1621b6487e51b90d85"],["/categories/博客魔改/index.html","efdfc4079510d7dba0c0d7371da48d4d"],["/categories/技巧/index.html","18a4d2d1d3a4a714a0b0ba7a0322cde5"],["/categories/教程/index.html","2ada75d2fa1e08a86d746257a20ee819"],["/categories/杂谈/index.html","fee24e59a6ab4cbf62123009df470ff4"],["/categories/算法教程/index.html","bce702dcdd67403ed4e303a2b34e1183"],["/categories/语法教程/index.html","3ab0b86dd84372729a0bc6fcd458d593"],["/categories/软件分享/index.html","f567c6c667e26a7cae4c1da28a964ad5"],["/cc/index.html","859f2be6384a61929b9405b4946709b9"],["/charts/index.html","ec4d0d9989840dc6094bac989f84cf38"],["/cookies/index.html","8709ca4230e81999315fb327940564e7"],["/css/essay.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/fire/css.css","0c43f62bfdd01b94f50260002c184f98"],["/css/fire/reset.min.css","e24aadcaa4dbda8f24b04392fb7ac784"],["/css/fire/style.css","b21970d7d342c03047516175cd64717a"],["/css/index.css","66d725b94020fd8a1bab1e4b353fb21b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fire.html","71c6162ad37c007f092c4b17ead1e461"],["/fonts/iconfont.eot","8d33e59818fb81f8c2067f662bdd8471"],["/fonts/iconfont.svg","db1a1a7226bee0e78542d5d97aeb6f68"],["/fonts/iconfont.ttf","c87c81f8ca9cc0110c487c1334cee217"],["/fonts/iconfont.woff","673fbe412307d14f6c5d26c774ab5e1f"],["/help/index.html","11cc8bc4bca4626c8681ebb6d0a4538c"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/INTP.png","67391b367ecd96266f8784d10caf2536"],["/img/INTP.svg","bfd5a1fdb289a27d984eedb7e9ffcd08"],["/img/MC.jpg","c28172a126fb8bd578ec4895a87ad972"],["/img/backgroung.jpg","53960c6f38bd456e4a6b6e5083477094"],["/img/banner.jpg","15e8e8013100c198d7ae202ba6509533"],["/img/default_cover/cover (1).png","75d091b601d591be2963974dc5e6777c"],["/img/default_cover/cover (2).png","ca0a29edb756224d2b25ba45b433fb79"],["/img/default_cover/cover (3).png","78251dd15e0d5e05ad9d09545f15ed1f"],["/img/default_cover/cover (5).png","91cf2df02a422e7be32801c0d9615cf5"],["/img/default_cover/cover (7).png","3c6032a2c2db69aefc975ec84001038e"],["/img/default_cover/cover (8).jpg","66d77f65a9fc880d287ee7ad5892408b"],["/img/default_cover/cover (9).jpg","4f6747719ab350bd195e88214f21cd80"],["/img/edu.jpg","84689d7570770385fbf6ab9a4717ae32"],["/img/edu.png","dd8d0e6ce3334d89b6532c2599435218"],["/img/favicon.png","91299506dd20edc5fb2ba4f82f7f18e1"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/head.png","d4131daedc501e87c87367c9ddcaf3c8"],["/img/index.html","5e65e649d6800b917f21a649ec71856a"],["/img/logo-minecraft.svg","e31a1564996c886a1945c9e1f294cde9"],["/img/map.jpg","d559bcbdad05a1b1f6e4bcc1cc0e451e"],["/img/myself.jpg","b0e717b70883da452dd3e76825ecd9b3"],["/img/pwa/pwaicons/144.png","74543a328791d5a145d457c726a1ae02"],["/img/pwa/pwaicons/16.jpg","a7d9440f053665af7bd81016358c398b"],["/img/pwa/pwaicons/192.jpg","70909dd6286bd32d354181acf4de25e5"],["/img/pwa/pwaicons/192.png","9013916051d96b513f3e15ac39e9f867"],["/img/pwa/pwaicons/32.jpg","e0cc2baafa0111c71abe55be9da9e301"],["/img/pwa/pwaicons/36.png","d3077a5c5fc0da986a3dd895f1dde186"],["/img/pwa/pwaicons/48.png","31a5a73fcd3b224aa31994e0160a1ebf"],["/img/pwa/pwaicons/512.png","64c09fba74a4c55c580c50dc34e51751"],["/img/pwa/pwaicons/72.png","9712e1caea86d8a34de0788111a3bcf1"],["/img/pwa/pwaicons/96.png","59e9511a6181b8f9c622103e25efdca6"],["/img/uparrow.png","7263ecc5f42d7cfea8c5e66ce23a743c"],["/index.html","7716e83e2551fa2fb3650c15580cec9b"],["/js/continue-aplayer.js","96e029e2b6929a2ce6932dcb779a0ed5"],["/js/custom.js","e423294c52c1344a82d9ee8075d5fc74"],["/js/custom/PublicSacrificeDay.js","3337622648819ebb05d17f96617f9a37"],["/js/custom/ascii.js","9bb2715bed11a52d9ae3903d18506045"],["/js/custom/ex-search.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/custom/fire.js","20710cfedf535a04638bfebae7c14f7f"],["/js/custom/installPWA.js","744019152a4e90bf3694c45195ee336f"],["/js/custom/music.js","3f278a3707417615e062cff244a55b23"],["/js/custom/rightmenu.js","810a556d38a38f80c1a88118103058de"],["/js/fire/21012315.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/fire/MyMath.js","0424d086a2a0411818fb6fbf8471dfec"],["/js/fire/Stage@0.1.4.js","849c05f044e81f1a1bcf7a0e353fcfb6"],["/js/fire/fscreen@1.0.1.js","ba44160f9adb04fcc353b77c4751523a"],["/js/fire/script.js","4fc063b667b48d4e8a5907fb11682f5c"],["/js/hsu.js","893be29f19b7c13d3b7a680829fea5c4"],["/js/jquery.js","30792621ca010e3c5d5f98162629439f"],["/js/load.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/main.js","88aced9e00713346dbf5f92453a349b2"],["/js/search/algolia.js","01e3eecda2d6a3bfb970844a29d61198"],["/js/search/local-search.js","aea55acb22a3b51ad16057b0ea52c0a9"],["/js/tw_cn.js","bc064917c366036544975274bb20a01d"],["/js/utils.js","e95ad73d5170f72ae1596b3d9abb7ed3"],["/link/index.html","909e76d40909526ac91531289e35fe77"],["/mouse/mouse.css","d75680ce4603d3812aee12994f6c96fa"],["/music/index.html","75a2d08ff2bba79508352e325b754b4c"],["/page/2/index.html","8870091f5acb2b00b06427264286fdef"],["/page/3/index.html","c7feb05b68ac5cf9fadd75bf34bab5a5"],["/page/4/index.html","64ac8bf35d903f8500088a00d7201797"],["/page/5/index.html","1c3a28ac6952fbf38810ef1c14074a0e"],["/page/6/index.html","79a79cacdf825f3f738463f17975c43d"],["/page/7/index.html","66446a0dd27ed2a3d12f32d697907b44"],["/page/8/index.html","e64d679f4eadd883b98bdf927d6dcc49"],["/page/9/index.html","6887e911252cefb9f17acb0f29ca78e0"],["/posts/130da42f.html","de4850859bfcd3b236d2d0cfa02a348b"],["/posts/16518a5d.html","d290f9a9879c04c5f5b11c77b96551c8"],["/posts/19cf8ae9.html","3a43a43e547602e4e1627a954f89f1af"],["/posts/1d63791b.html","a54107afc5125217e6971e1571625d05"],["/posts/1f186d6f.html","3a752ca5374760dc219c91f7125b94a7"],["/posts/20c47d09.html","7b75f0ff0772860736f894a81a741b2f"],["/posts/25df28d4.html","f6e686f7835ba784c7f5e62479ecf664"],["/posts/2981d3e8.html","139b757462bc78158fa61192eb7ea899"],["/posts/29ce1390.html","2b9df8b7c4f8cc5be48e1afcf041fe61"],["/posts/2bf30a8f.html","bc4d38e4ffa0bf842501d308507f1afd"],["/posts/2cd2b7cf.html","4c8497158516fa2b7ef7a6d07f083aa0"],["/posts/2dd8bc82.html","a36647382ebe3dc62badf679b00ad736"],["/posts/3012010d.html","c042bab6e10b06f8377da39c60271678"],["/posts/30226dd9.html","c23a4e80552772badcc79d72dadac141"],["/posts/3179ac2a.html","08bcda43b9da81ae3fb10240d6f7c66c"],["/posts/386b32f2.html","e6eebf4dbeb5ba623880824a6d8144db"],["/posts/3a6de62a.html","3ecd3c263d6899193a762a9ff3c58668"],["/posts/3b9a0bd5.html","10930a092453a1b46d52cdb165b48f6d"],["/posts/3dd7ffa7.html","12ab46cb2d0e4f1b65817e53b0c93567"],["/posts/3e6df65f.html","db69067782986c83d0017eb0e8a6de22"],["/posts/418342b5.html","de814d732982d6ce3b11288ed67e5ade"],["/posts/43ef268c.html","cb582708b030677d3ae67c3df73d9875"],["/posts/4699cb3f.html","836995ee4ee03e0a135619ed1800d928"],["/posts/47b007d5.html","36918f795eb535e027448beaff1df533"],["/posts/48946740.html","63a957b6e1475fb77e7e232bddd12c89"],["/posts/48b938d1.html","cd08952e223dc02391b2086221d189a2"],["/posts/4ad0cf31.html","a547c7e7fb1189dab0743342f67c6508"],["/posts/4d006364.html","555bad8cdeef39b9c4646845bb448296"],["/posts/4dc77c26.html","4a67acecb09b3ad447067e6f7a82d7b5"],["/posts/542f557.html","9cbf0cec4327e2bb60bcdd628d2e446d"],["/posts/5487c88e.html","bc254090cc669733b64340e8d1d23cca"],["/posts/579c41ee.html","495ba463c73545c767b53f3ee79159b6"],["/posts/5a42efcf.html","8513c0635e6e41467d30a48083812cad"],["/posts/5a8b87c.html","f651c146895c1c57ec9c757f33621cd7"],["/posts/5e641f58.html","76d9a3a2aa5bac415d3b254fb77f4af8"],["/posts/5f6267a3.html","e1e6bf5509d17ccde833d39d0e31ec7c"],["/posts/5f82cc62.html","e3a2d78a170ab880a3ccd7c7d7c925f5"],["/posts/6109666d.html","89a772ba9a5e1089178989ca978ebbb0"],["/posts/6287ead9.html","6a8a2ffb4a55258b1c5086b19c027330"],["/posts/637681ac.html","39ee3afd88cb8043ace822de63a8edce"],["/posts/67ad6f26.html","4be60c5af56e2eeceaeec4dc17adeb99"],["/posts/69f92217.html","e4333c1e2e3ab38b42e366a2e599a1dd"],["/posts/6abe8772.html","d15bcec9f2e679fb2c17bdb845a37c89"],["/posts/6e818316.html","32f7f7bf01731845f9834d7dece38c19"],["/posts/735e5788.html","be6a638259adb0060ab200ed9d026337"],["/posts/751ac048.html","f3441d25b7c309c565f97b9381cc0bac"],["/posts/7e751aa7.html","87fc090172bba594ef1579e04748620a"],["/posts/81d10c29.html","86f76723b869435a819b4a3dc3110cbe"],["/posts/90563067.html","261e8f9d9dd4a491912053a8ba15ceaf"],["/posts/909735e5.html","c1579d6b4cc3d9ff437f75305643792f"],["/posts/928e25c5.html","8b864a8ee35b8b576f2406a7bd5add98"],["/posts/934999f6.html","be96f6d1bf41c7dc3de6908a525b2990"],["/posts/9561cdd8.html","d5f249491c0b120d1bba88384ce96b77"],["/posts/9b999461.html","2eae2d76e918089be855cc7d1812b174"],["/posts/9bb1d67d.html","1134747e28ed5c0feaae8eef9e50b800"],["/posts/a3266abe.html","cd55ee6ccbc05d2dfc7213916d1a9052"],["/posts/a50b380c.html","21871cc17fb29642005990bef1e7eb81"],["/posts/a721148.html","6b7d50d210e1996e60976d8ca55d3a86"],["/posts/ad2b397f.html","ea89ded84b297bd9489980cef170e61d"],["/posts/afa15b69.html","639447db105123394283af108b44f17e"],["/posts/b3688e01.html","f098d8bf24e2271cd9cb22da539fde6c"],["/posts/b4290629.html","fea9c80685ed424cad33ae758e445805"],["/posts/b433e5f.html","5db2fc752cbbc7850b7e8d69d11eb066"],["/posts/bbfc710f.html","57d3ce6954c1f969791033127bbda8e8"],["/posts/bda68703.html","222cf0b54a1bc48035abe4fb3d4b9441"],["/posts/c39add7d.html","bddba65f7e96da01897586311a321906"],["/posts/c822e518.html","8085203c3fad53e80534e07feb80397b"],["/posts/cb4f1b09.html","32f02eace7fef83c14a19fd0a362dece"],["/posts/cbadfe7e.html","984ef48ee0a428d1a245e052d6b4a53c"],["/posts/cc8c02bc.html","570eef49a2852e07826a74abab58caff"],["/posts/d04a651.html","e96c2edabbd55935bc9e7a9be0b1941e"],["/posts/d5db6e3c.html","642a12c0b2c8685c86f37292e06b7535"],["/posts/d87f7e0c.html","53b4c73ac1e18d6a24d12fc847732875"],["/posts/ddf8c7c8.html","be5b1ef2e5a459f16ea79939ec98459a"],["/posts/de5f9fb2.html","61d65f24b9f1079fe51a4bbeba6afd10"],["/posts/ed21676f.html","4d1d54ab63d7ac5b35f9396f1de7bde8"],["/posts/ee8bf801.html","9900398a9e41b46d898e2c5c77cc0e46"],["/posts/ef225e31.html","3bc1b33f05b9c50d0ba232694123af18"],["/posts/f216fabe.html","c99d44291000695cd294462fe3715020"],["/posts/f28215f8.html","5c19b113357721461c9a030a42eec339"],["/posts/f5bb7e27.html","f1503dd9169d1286efff09a203ee2b06"],["/posts/f80f092e.html","7b11e2e5ff63d8eae69f595d8b0d42b6"],["/posts/f8c980c0.html","498b81e49f49fc4a65adf49599bcd324"],["/posts/fbf212fd.html","9d42a12c0a93786658df788dd420f30e"],["/posts/ffec4f13.html","a78c686252b9714909a164a4a5104b9e"],["/preloader/center-atom.css","e34a27f3e075d8251f9fbe5ba323e2ce"],["/privacy/index.html","67813879a37493558533ff5b8c8bdfbe"],["/random/index.html","55793c12968f14fdda7c7a1b99f97498"],["/static/css/css.css","0c43f62bfdd01b94f50260002c184f98"],["/static/css/reset.min.css","e24aadcaa4dbda8f24b04392fb7ac784"],["/static/css/style.css","b21970d7d342c03047516175cd64717a"],["/static/js/21012315.js","d41d8cd98f00b204e9800998ecf8427e"],["/static/js/MyMath.js","0424d086a2a0411818fb6fbf8471dfec"],["/static/js/Stage@0.1.4.js","849c05f044e81f1a1bcf7a0e353fcfb6"],["/static/js/fscreen@1.0.1.js","ba44160f9adb04fcc353b77c4751523a"],["/static/js/script.js","4fc063b667b48d4e8a5907fb11682f5c"],["/sw-register.js","546542bdc191664271929a0c63ab5c83"],["/tags/ACM-集训/index.html","ab1f5bd7050f65acde1921d0d97319c5"],["/tags/STL/index.html","fba2716515a022edd83ce254414e657b"],["/tags/USACO/index.html","25e71944b52c3a882da913dde5e6889b"],["/tags/hexo-github/index.html","6df7a6f5525ab9d8d898b0dca48d2e56"],["/tags/index.html","3f98dac11d48b195aba614bc2d766cb5"],["/tags/tool/index.html","409992b370a8a7df2c1ba9e84992836a"],["/tags/乐学/index.html","bfaf2edbfd16d4a073e4a14a4f26ffb9"],["/tags/乐学/page/2/index.html","d55cad8a9cc49e06181d54329b3a35bc"],["/tags/乐学/page/3/index.html","21ec33d3252ef192238438b2e9a38739"],["/tags/乐学/page/4/index.html","5fd94195f1471772214028984f5359ee"],["/tags/乐学/page/5/index.html","5c141ae56e5448518641ec2b8a819d83"],["/tags/乐学/page/6/index.html","1dadf28f64d1caa631017196569e64f2"],["/tags/插件/index.html","3058082e5de7e6a8fc8b9243efa1417e"],["/tags/算法/index.html","a7610bd29f18147a4f6d8bf5c27bf5e7"],["/tags/计算机基础/index.html","56e59b371c27bf95db61f88c4235b865"],["/tags/资源/index.html","e3e979eda9e98ca7f9e48aa57e5f6cd0"],["/tags/转载/index.html","3886d86e726d138a842034151ed8c5ad"],["/tags/魔改/index.html","db964bcfb834b5be750fa912d200ede7"],["/tools/index.html","84fd00c7db05cb64090c33ca26c893b7"],["/update/index.html","121af98e76e246a8bec2a976912d9d14"]];
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
