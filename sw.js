/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","bd294ee3fd5cb393d1c05e8423a374bd"],["/about/index.html","db4c54f6388e7fddd605c9f0e1842af9"],["/archives/2022/12/index.html","799cb179257f127a5bc6073e8e0c70a4"],["/archives/2022/12/page/2/index.html","1cf78fbd880bc70bd9a91d409c03f7fa"],["/archives/2022/12/page/3/index.html","d091ee68f448186e135a3a17767ac5bd"],["/archives/2022/12/page/4/index.html","9f7f4d1771b2872c192a50a753a3ff42"],["/archives/2022/12/page/5/index.html","b22c71f390adfadeed5e69e753098020"],["/archives/2022/12/page/6/index.html","97e3e2ded67bf5dcbc34c874c3597353"],["/archives/2022/12/page/7/index.html","4b1a089b813a036b65895afcc3339e93"],["/archives/2022/index.html","db09bcfbde224bbcf252e0d33cb097d0"],["/archives/2022/page/2/index.html","1b7b7e97374900f6762aa4a50ebc6214"],["/archives/2022/page/3/index.html","0def6d89181e7f149cd439d43447615a"],["/archives/2022/page/4/index.html","6b39d735f6c449fcc40938c8106daa72"],["/archives/2022/page/5/index.html","6414e23dc39898a2d0d022daad5833dd"],["/archives/2022/page/6/index.html","f8f6d70d05280a6b5ce74d18a078aecf"],["/archives/2022/page/7/index.html","c8751f21ead9ad320b635e7901a5749e"],["/archives/2023/01/index.html","04d8424d6de07d22fa90c6c2a2b86f8b"],["/archives/2023/01/page/2/index.html","003694693cf4fc3c91c5f2bb56cfbdab"],["/archives/2023/02/index.html","25246313c5f729080068d8472b49b8dd"],["/archives/2023/index.html","5f80d493af76ba075d491a3e25134433"],["/archives/2023/page/2/index.html","15d4c2cb795480bcab45b1673dde1159"],["/archives/index.html","91fa1ce5342f0a0a1524b49272e239af"],["/archives/page/2/index.html","d18f6edcab660ad348d2dc701391239f"],["/archives/page/3/index.html","46349a5babb0a7df89818e24e9b64cb5"],["/archives/page/4/index.html","4dc4ca475912fea522707f3ac9ccc5d5"],["/archives/page/5/index.html","4f8b41619b70438afb74ef0b7d529914"],["/archives/page/6/index.html","44acc51c143b07e91b650a3ee96827f4"],["/archives/page/7/index.html","9e4685d38fed3727559dd19fefa1b383"],["/archives/page/8/index.html","259b6c54026647a675771c088ac09fee"],["/archives/page/9/index.html","69799630a0a2f7299b4c15542fda431e"],["/bb/index.html","ef870fc9df8a7bda6bd35817318a08e0"],["/categories/help/index.html","84ee15e4b10ee34783e332294ec67f62"],["/categories/index.html","f0a918712b06d9992f5acd9f2b53052c"],["/categories/刷题笔记/index.html","89e4982bd393d8b8dda2b5b5359e096b"],["/categories/刷题笔记/page/2/index.html","c2ed6c8bd20ea4e81ba5a1d723fc2b16"],["/categories/刷题笔记/page/3/index.html","0464094c52f01c8a243f7825ecd01e15"],["/categories/刷题笔记/page/4/index.html","6d4f7b9c56f630beb5d24aaa5721d5a7"],["/categories/刷题笔记/page/5/index.html","2d2508542baf3eadba9c129d403190b3"],["/categories/刷题笔记/page/6/index.html","315ebcdba7e1d07bfd4ec34a5547d355"],["/categories/博客美化/index.html","fdeb3858287f4226e6097f4c4b271083"],["/categories/博客魔改/index.html","fe76dd3560140929c84b9291d77e6fdd"],["/categories/技巧/index.html","71edd277a71134dfd58285502e3deaf1"],["/categories/教程/index.html","4b45690edac9b2d30e3941eb14eca5ec"],["/categories/杂谈/index.html","fd0341172780c95f2652106a678c5e39"],["/categories/算法教程/index.html","7fab3ea6de9ecd81668cb9e3169af4bf"],["/categories/语法教程/index.html","60603597104422581c31589249ba7db3"],["/categories/软件分享/index.html","f44e75cb05a3ce33fb5a69360c1cd37c"],["/cc/index.html","94be2fcfa8910d3740f5be68a756af2a"],["/charts/index.html","7f1b01375b8a0fc55e70c982d8e4bb68"],["/cookies/index.html","7f2c08babb2932dc95c5cf490525f177"],["/css/essay.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/fire/css.css","0c43f62bfdd01b94f50260002c184f98"],["/css/fire/reset.min.css","e24aadcaa4dbda8f24b04392fb7ac784"],["/css/fire/style.css","b21970d7d342c03047516175cd64717a"],["/css/index.css","66d725b94020fd8a1bab1e4b353fb21b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fire.html","71c6162ad37c007f092c4b17ead1e461"],["/fonts/iconfont.eot","8d33e59818fb81f8c2067f662bdd8471"],["/fonts/iconfont.svg","db1a1a7226bee0e78542d5d97aeb6f68"],["/fonts/iconfont.ttf","c87c81f8ca9cc0110c487c1334cee217"],["/fonts/iconfont.woff","673fbe412307d14f6c5d26c774ab5e1f"],["/help/index.html","be381275932ad6651643af40ab467fa8"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/INTP.png","67391b367ecd96266f8784d10caf2536"],["/img/INTP.svg","bfd5a1fdb289a27d984eedb7e9ffcd08"],["/img/MC.jpg","c28172a126fb8bd578ec4895a87ad972"],["/img/backgroung.jpg","53960c6f38bd456e4a6b6e5083477094"],["/img/banner.jpg","15e8e8013100c198d7ae202ba6509533"],["/img/default_cover/cover (1).png","75d091b601d591be2963974dc5e6777c"],["/img/default_cover/cover (2).png","ca0a29edb756224d2b25ba45b433fb79"],["/img/default_cover/cover (3).png","78251dd15e0d5e05ad9d09545f15ed1f"],["/img/default_cover/cover (5).png","91cf2df02a422e7be32801c0d9615cf5"],["/img/default_cover/cover (7).png","3c6032a2c2db69aefc975ec84001038e"],["/img/default_cover/cover (8).jpg","66d77f65a9fc880d287ee7ad5892408b"],["/img/default_cover/cover (9).jpg","4f6747719ab350bd195e88214f21cd80"],["/img/edu.jpg","84689d7570770385fbf6ab9a4717ae32"],["/img/edu.png","dd8d0e6ce3334d89b6532c2599435218"],["/img/favicon.png","91299506dd20edc5fb2ba4f82f7f18e1"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/head.png","d4131daedc501e87c87367c9ddcaf3c8"],["/img/index.html","40889d858b22ca74cf752e1cde744c7e"],["/img/logo-minecraft.svg","e31a1564996c886a1945c9e1f294cde9"],["/img/map.jpg","d559bcbdad05a1b1f6e4bcc1cc0e451e"],["/img/myself.jpg","b0e717b70883da452dd3e76825ecd9b3"],["/img/pwa/pwaicons/144.png","74543a328791d5a145d457c726a1ae02"],["/img/pwa/pwaicons/16.jpg","a7d9440f053665af7bd81016358c398b"],["/img/pwa/pwaicons/192.jpg","70909dd6286bd32d354181acf4de25e5"],["/img/pwa/pwaicons/192.png","9013916051d96b513f3e15ac39e9f867"],["/img/pwa/pwaicons/32.jpg","e0cc2baafa0111c71abe55be9da9e301"],["/img/pwa/pwaicons/36.png","d3077a5c5fc0da986a3dd895f1dde186"],["/img/pwa/pwaicons/48.png","31a5a73fcd3b224aa31994e0160a1ebf"],["/img/pwa/pwaicons/512.png","64c09fba74a4c55c580c50dc34e51751"],["/img/pwa/pwaicons/72.png","9712e1caea86d8a34de0788111a3bcf1"],["/img/pwa/pwaicons/96.png","59e9511a6181b8f9c622103e25efdca6"],["/img/uparrow.png","7263ecc5f42d7cfea8c5e66ce23a743c"],["/index.html","575b80a3a6370b54435ca73f500c9429"],["/js/continue-aplayer.js","96e029e2b6929a2ce6932dcb779a0ed5"],["/js/custom.js","e423294c52c1344a82d9ee8075d5fc74"],["/js/custom/PublicSacrificeDay.js","3337622648819ebb05d17f96617f9a37"],["/js/custom/ascii.js","9bb2715bed11a52d9ae3903d18506045"],["/js/custom/ex-search.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/custom/fire.js","20710cfedf535a04638bfebae7c14f7f"],["/js/custom/installPWA.js","744019152a4e90bf3694c45195ee336f"],["/js/custom/music.js","3f278a3707417615e062cff244a55b23"],["/js/custom/rightmenu.js","810a556d38a38f80c1a88118103058de"],["/js/fire/21012315.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/fire/MyMath.js","0424d086a2a0411818fb6fbf8471dfec"],["/js/fire/Stage@0.1.4.js","849c05f044e81f1a1bcf7a0e353fcfb6"],["/js/fire/fscreen@1.0.1.js","ba44160f9adb04fcc353b77c4751523a"],["/js/fire/script.js","4fc063b667b48d4e8a5907fb11682f5c"],["/js/hsu.js","893be29f19b7c13d3b7a680829fea5c4"],["/js/jquery.js","30792621ca010e3c5d5f98162629439f"],["/js/load.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/main.js","88aced9e00713346dbf5f92453a349b2"],["/js/search/algolia.js","01e3eecda2d6a3bfb970844a29d61198"],["/js/search/local-search.js","aea55acb22a3b51ad16057b0ea52c0a9"],["/js/tw_cn.js","bc064917c366036544975274bb20a01d"],["/js/utils.js","e95ad73d5170f72ae1596b3d9abb7ed3"],["/link/index.html","f9d4c2cf25cc933766b16d1ea747b8e8"],["/mouse/mouse.css","d75680ce4603d3812aee12994f6c96fa"],["/music/index.html","f5cff1d30fb5b82b62c4ab03a579c313"],["/page/2/index.html","2aed2a6a76dfd53380f058c17381ccd4"],["/page/3/index.html","2a9d575697541b3c7722b83069b5ad5a"],["/page/4/index.html","aa250c27d4d33a80d684bfa04030dc2c"],["/page/5/index.html","15f5755da78481697fee34ee95ca178f"],["/page/6/index.html","57ec452560a14d46eff736ae21efce1c"],["/page/7/index.html","3bd36d0cfcab5f2a551778e0e277cabc"],["/page/8/index.html","836316eedc9147e39a20b6a83016aea9"],["/page/9/index.html","41661e0068b451a3249358168233f9a6"],["/posts/130da42f.html","de4850859bfcd3b236d2d0cfa02a348b"],["/posts/16518a5d.html","d290f9a9879c04c5f5b11c77b96551c8"],["/posts/19cf8ae9.html","aa39c874420c1c240845b9bcc6908f25"],["/posts/1d63791b.html","ab7584d47feb377eccc7ff6328929ba2"],["/posts/1f186d6f.html","638d62904afcd270082e71ab5fda0571"],["/posts/20c47d09.html","7b75f0ff0772860736f894a81a741b2f"],["/posts/25df28d4.html","22803eadc9522a7b4182dfcf6ca3b6cf"],["/posts/2981d3e8.html","139b757462bc78158fa61192eb7ea899"],["/posts/29ce1390.html","922a5fdc75b7f27a3b9b2d3b1cdce2cf"],["/posts/2bf30a8f.html","b79faff441dbb1ea48375e1be0c79219"],["/posts/2cd2b7cf.html","4c8497158516fa2b7ef7a6d07f083aa0"],["/posts/2dd8bc82.html","6eab01b544275407ec27d7402e89a176"],["/posts/3012010d.html","c042bab6e10b06f8377da39c60271678"],["/posts/30226dd9.html","c23a4e80552772badcc79d72dadac141"],["/posts/3179ac2a.html","c0d0024c207167f132ae6408c718aa4a"],["/posts/386b32f2.html","e6eebf4dbeb5ba623880824a6d8144db"],["/posts/3a6de62a.html","a6b55b3024a0ce8481d7c3f6e83d4cbe"],["/posts/3b9a0bd5.html","10930a092453a1b46d52cdb165b48f6d"],["/posts/3dd7ffa7.html","58c818b7d7120d6b9b19c814487399a9"],["/posts/3e6df65f.html","db69067782986c83d0017eb0e8a6de22"],["/posts/418342b5.html","3f475523fd0d1d08ff612ba0b87d5e97"],["/posts/43ef268c.html","19e5021c0b8b4e84cac9d8ea59574da8"],["/posts/4699cb3f.html","836995ee4ee03e0a135619ed1800d928"],["/posts/47b007d5.html","36918f795eb535e027448beaff1df533"],["/posts/48946740.html","63a957b6e1475fb77e7e232bddd12c89"],["/posts/48b938d1.html","cd08952e223dc02391b2086221d189a2"],["/posts/4ad0cf31.html","b363874bb1b20d389f28e0b4b8828cc7"],["/posts/4d006364.html","70943c061ea887a6609e33faa73af173"],["/posts/4dc77c26.html","bd682b78ee596c6a5c49c99a815f97bb"],["/posts/542f557.html","9cbf0cec4327e2bb60bcdd628d2e446d"],["/posts/5487c88e.html","0358a433db2f2051c174d2b9ad0bca8c"],["/posts/579c41ee.html","3bc608c01e70eeab9d6add5b4da9bd9d"],["/posts/5a42efcf.html","b70fd160cd4a00ced2bb685af26bf6e8"],["/posts/5a8b87c.html","e65d58d2acfb06892d2b1d5231b8d5c5"],["/posts/5e641f58.html","cecad14a256d3765cdc5d2a33d603b68"],["/posts/5f6267a3.html","af6ba140940c2ab50f223c4d0a268e29"],["/posts/5f82cc62.html","8106525488908ead96a67a6357cb314b"],["/posts/6109666d.html","89a772ba9a5e1089178989ca978ebbb0"],["/posts/6287ead9.html","6a8a2ffb4a55258b1c5086b19c027330"],["/posts/637681ac.html","39ee3afd88cb8043ace822de63a8edce"],["/posts/67ad6f26.html","4be60c5af56e2eeceaeec4dc17adeb99"],["/posts/69f92217.html","8e199157ce7497ba3361e3fde7de827e"],["/posts/6abe8772.html","8ca61da929736b5abb1eca58c6b622b1"],["/posts/6e818316.html","32f7f7bf01731845f9834d7dece38c19"],["/posts/735e5788.html","be6a638259adb0060ab200ed9d026337"],["/posts/751ac048.html","f3441d25b7c309c565f97b9381cc0bac"],["/posts/7e751aa7.html","87fc090172bba594ef1579e04748620a"],["/posts/81d10c29.html","9cd6de0f15e1a5eb41c017263c980aa2"],["/posts/90563067.html","4d3e7eb49a8d0dff7785277c67cd77a6"],["/posts/909735e5.html","3735c7423d9da43e040534e75db26d64"],["/posts/928e25c5.html","0339ed1d3ac12314fb043b8079183b8d"],["/posts/934999f6.html","ce7fd0c43cdc4015b5335510fa6f3e8a"],["/posts/9561cdd8.html","d5f249491c0b120d1bba88384ce96b77"],["/posts/9b999461.html","4d6d8c2c11f9d04104df03eb2585146a"],["/posts/9bb1d67d.html","5d60f880d64de0c99ef6642a1e739132"],["/posts/a3266abe.html","dc0e9b5390b8b784bd0e532c1467bf66"],["/posts/a50b380c.html","07a5b6a18c585edc91e07f8873d33575"],["/posts/a721148.html","6b7d50d210e1996e60976d8ca55d3a86"],["/posts/ad2b397f.html","51465019fbe9a9003bcc155b7ab4dd79"],["/posts/afa15b69.html","39a7c508a8d7b53430f12f0d794d1bbc"],["/posts/b3688e01.html","99ebd55d347e46821884ee0ee00f681f"],["/posts/b4290629.html","2518a0ffbd82f074414328fb6a27b646"],["/posts/b433e5f.html","128f1d89e61147dd0d0f8af8565d02e4"],["/posts/bbfc710f.html","57d3ce6954c1f969791033127bbda8e8"],["/posts/bda68703.html","2636c040591038ebceec54cd752ea119"],["/posts/c39add7d.html","e2ac325f69f5ed09dcf6ef743ae5aa3f"],["/posts/c822e518.html","8085203c3fad53e80534e07feb80397b"],["/posts/cb4f1b09.html","32f02eace7fef83c14a19fd0a362dece"],["/posts/cbadfe7e.html","984ef48ee0a428d1a245e052d6b4a53c"],["/posts/cc8c02bc.html","de0f17c5c680e303e647cf90802d2a2f"],["/posts/d04a651.html","e96c2edabbd55935bc9e7a9be0b1941e"],["/posts/d5db6e3c.html","eb4d8c0bada9a530db26d83ee254c15a"],["/posts/d87f7e0c.html","53b4c73ac1e18d6a24d12fc847732875"],["/posts/ddf8c7c8.html","4542f489af8b226cae1c5de4debbe8be"],["/posts/de5f9fb2.html","b10ba693de1d4630036f282d1ef65370"],["/posts/ed21676f.html","23022d68bbb740747f9f30d9cff16ca4"],["/posts/ee8bf801.html","75be50fa990ff69df22a18dd3670fbbf"],["/posts/ef225e31.html","d0f30fba1ec3e4bfc2207efc52beba1b"],["/posts/f216fabe.html","c99d44291000695cd294462fe3715020"],["/posts/f28215f8.html","1e054e5da51ce03e37007e65a88511e3"],["/posts/f5bb7e27.html","64d7ce1170d7bd1d964719ca42de700c"],["/posts/f80f092e.html","31f70228d9d958e81095f435c2bcff11"],["/posts/f8c980c0.html","55c02e3b610039275d1a86a2f981da37"],["/posts/fbf212fd.html","9d42a12c0a93786658df788dd420f30e"],["/posts/ffec4f13.html","c96009b823aa01a9b554008ff65a840b"],["/preloader/center-atom.css","e34a27f3e075d8251f9fbe5ba323e2ce"],["/privacy/index.html","d9c06476df2da5e6e6f33f8b97e8a7bb"],["/random/index.html","9b5015ddee1f69510fd4323fdc814bd4"],["/static/css/css.css","0c43f62bfdd01b94f50260002c184f98"],["/static/css/reset.min.css","e24aadcaa4dbda8f24b04392fb7ac784"],["/static/css/style.css","b21970d7d342c03047516175cd64717a"],["/static/js/21012315.js","d41d8cd98f00b204e9800998ecf8427e"],["/static/js/MyMath.js","0424d086a2a0411818fb6fbf8471dfec"],["/static/js/Stage@0.1.4.js","849c05f044e81f1a1bcf7a0e353fcfb6"],["/static/js/fscreen@1.0.1.js","ba44160f9adb04fcc353b77c4751523a"],["/static/js/script.js","4fc063b667b48d4e8a5907fb11682f5c"],["/sw-register.js","db89c0b865e489f32dfe788d5330a68c"],["/tags/ACM-集训/index.html","4a53ab4fb75aca563ffc06d72ae98af2"],["/tags/STL/index.html","48a84063a8dbb6075ac738a429a9b93c"],["/tags/USACO/index.html","1c766a889cdb5f411e0412a8d9ec071f"],["/tags/hexo-github/index.html","d47379179f99c678560489801fab7fc9"],["/tags/index.html","bbd78fb602effb1128e6ac967f5d3c57"],["/tags/tool/index.html","955841126b83fe16159b97df0a0e1c99"],["/tags/乐学/index.html","54b2f3d0fade85670b47cf2c53a9f7c5"],["/tags/乐学/page/2/index.html","ef95d21f8057776bf6ac755544aa83db"],["/tags/乐学/page/3/index.html","b7dcfb3f5fc3ae62fc4e6856174deae4"],["/tags/乐学/page/4/index.html","1930ef916145d2e849c8501a90caf380"],["/tags/乐学/page/5/index.html","45aa51263cecce396583854a8f4c6043"],["/tags/乐学/page/6/index.html","0d37164e22b46dd1be5a634f8bcbfdd3"],["/tags/插件/index.html","5960f6f6776ddc7dd75ed85fac94ac57"],["/tags/算法/index.html","0f6991a1106c5567e066fa95c7cb96c2"],["/tags/计算机基础/index.html","37981af6596c22595f95c334e386cff7"],["/tags/资源/index.html","f2dca72c962b623ba668f4044eca83d3"],["/tags/转载/index.html","973f314679fd147395ce097db7c6c8fb"],["/tags/魔改/index.html","9132a215a6eec1366618405b5382eec8"],["/tools/index.html","ac7e0389522dd06c6d91789eab187a09"],["/update/index.html","33431909fa946b4580e3d1f86c3ff702"]];
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
