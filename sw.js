/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","a701979248a4e8057c3cfa95ad056607"],["/about/index.html","29560d955756dcd9b4150646f34feeea"],["/archives/2022/12/index.html","843044ed35901efcfb66b1e9c53bf6a8"],["/archives/2022/12/page/2/index.html","e3dbb5746bace728757a5e391950f7aa"],["/archives/2022/12/page/3/index.html","3e55ae27c56e2738fba05e22c24ef515"],["/archives/2022/12/page/4/index.html","86952e539358675a01ffad1b1ef595eb"],["/archives/2022/12/page/5/index.html","249b3e67b9194f0c492218c90de1bdef"],["/archives/2022/12/page/6/index.html","b15914bda931a49a4204a7e30c88d662"],["/archives/2022/12/page/7/index.html","980cac15e3f77c8f5e2e7e80be3e07bf"],["/archives/2022/index.html","538958b5bf967271de48835cb0a0212c"],["/archives/2022/page/2/index.html","a0fa3fc425c5cc34b01d49b0c736ce40"],["/archives/2022/page/3/index.html","1cc1ce5e1d63ed8a16ca1b27d564d4d7"],["/archives/2022/page/4/index.html","d2afaf8c5bd55a69b44e3905227b9152"],["/archives/2022/page/5/index.html","85ea1150787c79bcbd1615c12c8c6889"],["/archives/2022/page/6/index.html","365a03154525ee9897fcc096035fb329"],["/archives/2022/page/7/index.html","deb68e2b9e72fe532ff0e56aa6455651"],["/archives/2023/01/index.html","0c8a9478a5846b7da950cf5011133d7d"],["/archives/2023/01/page/2/index.html","04ca070169c9f94c66a4a9a91f198a6b"],["/archives/2023/02/index.html","d562641676785e040aba4e8d3be86108"],["/archives/2023/index.html","e3a259bad4429ae80a81613131a9b7f8"],["/archives/2023/page/2/index.html","da3359b24021ca4c7836a381bafd989f"],["/archives/index.html","12557ffec5795e2902edac497c8b32d0"],["/archives/page/2/index.html","f6eb8d12adbd1e942ca424747839b800"],["/archives/page/3/index.html","d6838551306e21efe0f48b770972d6b0"],["/archives/page/4/index.html","8e1fe2ef54ac24ec735739815daa527f"],["/archives/page/5/index.html","e8b3efc018b3cacb52d7e3246fdf12cb"],["/archives/page/6/index.html","5b1020026e99ca31a30c8cebae3acbd3"],["/archives/page/7/index.html","d4abaeb0bc3a4d228e2f46649a9e7fdb"],["/archives/page/8/index.html","4e6ecf1f1c7bf1deecb33b03196eb4f6"],["/bb/index.html","7c21d3b06f9926dc652ef0d7c5f49dff"],["/categories/help/index.html","65001f2e0c0d5bf3a48525be3cd45bfa"],["/categories/index.html","47014fba82656fba2c8fc74a9fe935c0"],["/categories/刷题笔记/index.html","37f6a5c8c20ec07440f8977f415ed85e"],["/categories/刷题笔记/page/2/index.html","051bee125d5d0e540269a0ae99c8640a"],["/categories/刷题笔记/page/3/index.html","ca9cf89f20bcbe7a4ae73bdc23af653e"],["/categories/刷题笔记/page/4/index.html","9ccaa09c695cf88c50a484810e97ee82"],["/categories/刷题笔记/page/5/index.html","82521f1a32272593527a6881bef82a97"],["/categories/刷题笔记/page/6/index.html","f673b9cd848722afa6d27e904ab25c17"],["/categories/博客美化/index.html","dd9db60b053cfc6258cd3f1c1b4569e7"],["/categories/技巧/index.html","f85840b56b7a0de6cd839b7e9d91defd"],["/categories/教程/index.html","b9a4ff04143668fbaf35b517ce5fbf5a"],["/categories/杂谈/index.html","1bfa95524b02cb54d116c0b89ea6ccc8"],["/categories/算法教程/index.html","afce784fbc738cdf9cfdaab82fe8fd65"],["/categories/语法教程/index.html","9b8b60cecd83b8776bec3edb3cd4ba08"],["/categories/软件分享/index.html","eeb0ddd21c434fe21687c03071d340c6"],["/cc/index.html","99f3720172662b02499bea7d1b78adad"],["/charts/index.html","51a10feffaa40bf9174544f1efeb02bf"],["/cookies/index.html","b1c859c0200b1d6c131926062c7301b7"],["/css/essay.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/fire/css.css","0c43f62bfdd01b94f50260002c184f98"],["/css/fire/reset.min.css","e24aadcaa4dbda8f24b04392fb7ac784"],["/css/fire/style.css","b21970d7d342c03047516175cd64717a"],["/css/index.css","45bdf92d680afb8a55744e48e96d63e7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fire.html","71c6162ad37c007f092c4b17ead1e461"],["/fonts/iconfont.eot","8d33e59818fb81f8c2067f662bdd8471"],["/fonts/iconfont.svg","db1a1a7226bee0e78542d5d97aeb6f68"],["/fonts/iconfont.ttf","c87c81f8ca9cc0110c487c1334cee217"],["/fonts/iconfont.woff","673fbe412307d14f6c5d26c774ab5e1f"],["/fonts/iconfont.woff2","5620df603c7a8fe5dd00d44cdf040bbb"],["/help/index.html","0c90961482a970e29ee78bfcb5eaba11"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/INTP.png","67391b367ecd96266f8784d10caf2536"],["/img/INTP.svg","bfd5a1fdb289a27d984eedb7e9ffcd08"],["/img/MC.jpg","c28172a126fb8bd578ec4895a87ad972"],["/img/[2996]上陸スナハマ港-65189178.jpg","324889dd63a8e4461a649cb9dfff9ea4"],["/img/archive.png","e309fab77ea77743f03a5935e58710b5"],["/img/backgroung.jpg","53960c6f38bd456e4a6b6e5083477094"],["/img/banner.jpg","15e8e8013100c198d7ae202ba6509533"],["/img/banner_defalut.jpg","324889dd63a8e4461a649cb9dfff9ea4"],["/img/default_cover/cover1.png","0c7a0bbb6284ec2eb3131758cd6b0588"],["/img/default_cover/cover2.png","64c57bba569ff3a19a08b882a6fb405e"],["/img/default_cover/cover3.png","91cf2df02a422e7be32801c0d9615cf5"],["/img/default_cover/cover4.png","be894735f420c71f4d3a2104dc281203"],["/img/default_cover/cover5.png","7a9f2463d61352f8ca16966847bda296"],["/img/default_cover/cover6.jpg","4f6747719ab350bd195e88214f21cd80"],["/img/default_cover/cover7.png","ca0a29edb756224d2b25ba45b433fb79"],["/img/default_cover/cover8.png","75d091b601d591be2963974dc5e6777c"],["/img/default_cover/cover9.jpg","66d77f65a9fc880d287ee7ad5892408b"],["/img/edu.jpg","84689d7570770385fbf6ab9a4717ae32"],["/img/edu.png","dd8d0e6ce3334d89b6532c2599435218"],["/img/favicon.png","91299506dd20edc5fb2ba4f82f7f18e1"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/head.png","d4131daedc501e87c87367c9ddcaf3c8"],["/img/index.html","966c8999f766cbdf603e1f099cae7ac4"],["/img/logo-minecraft.svg","e31a1564996c886a1945c9e1f294cde9"],["/img/map.jpg","d559bcbdad05a1b1f6e4bcc1cc0e451e"],["/img/myself.jpg","b0e717b70883da452dd3e76825ecd9b3"],["/img/pwa/16.png","008d05798265676ba90cb52a1db8ba6e"],["/img/pwa/32.png","b0018d25c866d11dbff2086d8d0e6cc0"],["/img/pwa/favicon.png","91299506dd20edc5fb2ba4f82f7f18e1"],["/img/pwa/favicon.svg","ff8341c41cd5cabddaedd07a30212ed3"],["/img/pwa/pwaicons/144.png","7b5fd22263fdc89dda7e43d0a81604ad"],["/img/pwa/pwaicons/192.png","f18b96144ed2cc32ddbe8df8cb1552e8"],["/img/pwa/pwaicons/36.png","8ea4178cb559feb54bd63662c94f52ac"],["/img/pwa/pwaicons/48.png","dd61b9fe3380e5dce3a75103d83a9e96"],["/img/pwa/pwaicons/72.png","a9852f15d763a8fb7e0e375328162cf0"],["/img/pwa/pwaicons/96.png","b029af9c35ba9b5bb4cb7507368977a7"],["/img/uparrow.png","7263ecc5f42d7cfea8c5e66ce23a743c"],["/index.html","6319fba3deca2211a97877b23beb39e0"],["/js/continue-aplayer.js","96e029e2b6929a2ce6932dcb779a0ed5"],["/js/custom.js","a2d14cb048ae1e6c8fbfb9f497d1216e"],["/js/custom/ascii.js","9bb2715bed11a52d9ae3903d18506045"],["/js/custom/ex-search.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/custom/fire.js","20710cfedf535a04638bfebae7c14f7f"],["/js/custom/installPWA.js","881ee973e0cbfc8b3f0ef579d768d9e6"],["/js/custom/rightmenu.js","810a556d38a38f80c1a88118103058de"],["/js/custom/shortcut.js","9ac25dc1825573b87783b7b4ad0e6b4d"],["/js/fire/21012315.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/fire/MyMath.js","0424d086a2a0411818fb6fbf8471dfec"],["/js/fire/Stage@0.1.4.js","849c05f044e81f1a1bcf7a0e353fcfb6"],["/js/fire/fscreen@1.0.1.js","ba44160f9adb04fcc353b77c4751523a"],["/js/fire/script.js","4fc063b667b48d4e8a5907fb11682f5c"],["/js/jquery.js","30792621ca010e3c5d5f98162629439f"],["/js/load.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/main.js","88aced9e00713346dbf5f92453a349b2"],["/js/search/algolia.js","8b05f81874b9408d5764fca152c96988"],["/js/search/local-search.js","aea55acb22a3b51ad16057b0ea52c0a9"],["/js/tw_cn.js","bc064917c366036544975274bb20a01d"],["/js/utils.js","e95ad73d5170f72ae1596b3d9abb7ed3"],["/link/index.html","d196d337623d94aeaa9138908e602db7"],["/mouse/mouse.css","d75680ce4603d3812aee12994f6c96fa"],["/music/index.html","3fae893e746cd8d8271d42a9113b5717"],["/page/2/index.html","d80643044419e18fad5b99f0c34a08fe"],["/page/3/index.html","665859094289cf523aaa433dff6ce586"],["/page/4/index.html","80f110221f90ee3a025e887270d6d490"],["/page/5/index.html","f423d01303321b526dfcc23facc9e7b6"],["/page/6/index.html","6218663b0c71a1537d1a570b2c8ee5b4"],["/page/7/index.html","6288d7e8f03ea44392777439c2a223a3"],["/page/8/index.html","98f6e27cfe3d8adb48e93023fbf18a5f"],["/posts/130da42f.html","aca7866bc76427cfbea36a47c63cddb8"],["/posts/16518a5d.html","71a171b84813064c3740287e13111365"],["/posts/19cf8ae9.html","6670fa1f5028aa16ed042052cb4651d4"],["/posts/1d63791b.html","9a617ecd7329bd6ab82ce8648f652da2"],["/posts/1f186d6f.html","05e2e52f804aade87e4809cb44437afd"],["/posts/20c47d09.html","1e93533825884589b5304677b298b5e5"],["/posts/25df28d4.html","8ffa326e6a1217a362a6ff90e12dffad"],["/posts/2981d3e8.html","d0c3f7edf05e6307067ba0a7ffcb5139"],["/posts/29ce1390.html","ac195b000e7ce7a49cd82694ea28c2de"],["/posts/2bf30a8f.html","bacf719dde88acf1b634be183deeebec"],["/posts/2cd2b7cf.html","e16b274db999d420aa127ae2086ef9fa"],["/posts/2dd8bc82.html","b4bd7ba25aebce33ca0b01c25db6b053"],["/posts/3012010d.html","52360d0423a0baa4caee60ed6e7db188"],["/posts/30226dd9.html","10444605d8236236494fde6b053b4d42"],["/posts/3179ac2a.html","e315cd88299393cb2d88e78c9793a85b"],["/posts/386b32f2.html","e03ade183d2dc62c7867aad36085de6c"],["/posts/3a6de62a.html","8b81beb952c2acbb3ea0e5ef35e792e1"],["/posts/3b9a0bd5.html","f6070c3dd9a8442b2c3bbd4b501c82e0"],["/posts/3dd7ffa7.html","8a8a6648fe9bb6521508bd7dce589155"],["/posts/3e6df65f.html","b728082b1ab1f1b29944a4d81a6380b9"],["/posts/418342b5.html","4c75cdd76dfb03c7af77e50969e26e94"],["/posts/43ef268c.html","f24804fd8bdcfce6001a7746c1c5f6bf"],["/posts/4699cb3f.html","6accc58b7e202460db58a351a4dc10f8"],["/posts/47b007d5.html","72722eaf494ae60904e6c81608c5f243"],["/posts/48946740.html","3d72d6f7cf7ad9e4c758c4ae59f2365b"],["/posts/48b938d1.html","60f45ab48cc72189f465dde216c2f577"],["/posts/4ad0cf31.html","e64d129351aa3280051e87c1f4ee6e20"],["/posts/4d006364.html","0d5077b328dceb7a00522ea3c136f455"],["/posts/4dc77c26.html","8ab202314d34c94b98e24f1647fd0b7a"],["/posts/542f557.html","aed45a0978d8d39d29fbccefc587f432"],["/posts/5487c88e.html","12b29dda0eeb96332bada7bffbe4aba9"],["/posts/579c41ee.html","00755a40a32981680c00c66a53921c5c"],["/posts/5a42efcf.html","134620bae8dd29bc9ad83fec43590979"],["/posts/5a8b87c.html","49518effbef4bdd03812080c1edfe91a"],["/posts/5e641f58.html","38bb5cc81625bd6ff10dc258ec6f6240"],["/posts/5f6267a3.html","2dd048caa96757975506aa5aa888e7d2"],["/posts/5f82cc62.html","d67b25ac9c15dceccedd7e85fc20368f"],["/posts/6109666d.html","5625df9efcc2759da14368592f59bbea"],["/posts/6287ead9.html","062d029dc2c40b97ce43788044bacf1b"],["/posts/67ad6f26.html","912f106066d59ef5dc9fb76ab762569d"],["/posts/69f92217.html","a0fd754149459d46c42ad8599f51851e"],["/posts/6abe8772.html","46df43e6d532cf7aabba7e8545f630a5"],["/posts/735e5788.html","9eb8696b4ccc4934020a814406102ee6"],["/posts/751ac048.html","1810f3347798e52eb341891e57960bd9"],["/posts/7e751aa7.html","948091c8f6b4059085c17ea389c817c8"],["/posts/81d10c29.html","c325a0c8a01ca29776705152e87618fb"],["/posts/90563067.html","1ca73a6ffbef311f42544dee553bf513"],["/posts/909735e5.html","e9b0813871e317707b08c7d85685ed31"],["/posts/928e25c5.html","078a2520c87379728961a6cf8f3269ac"],["/posts/934999f6.html","533f314d7f99aca6ea768810e8db6dd8"],["/posts/9561cdd8.html","772aa20f848799087ae4778805d54e10"],["/posts/9b999461.html","b029d157de93271a4aa12577d3d8a4f2"],["/posts/9bb1d67d.html","2cab9109526c4e5843d4d520accb01d1"],["/posts/a3266abe.html","8556e19c127707445213e5fdf117f2b6"],["/posts/a50b380c.html","6959273f50d857950363a30ecceb9900"],["/posts/a721148.html","2d61c0d94ebc554f4372ba333048df3d"],["/posts/ad2b397f.html","1b13b61a5c564cf9f8bf2a0669a6980d"],["/posts/afa15b69.html","c350de9cbaf369ebeb39c12f733e0fa1"],["/posts/b3688e01.html","8223e1e09bd86c32a3d38c4389462379"],["/posts/b4290629.html","3f5cd0f61af871c18a8836cfbb483253"],["/posts/b433e5f.html","13a786612ae77ed28a20732eb47233a7"],["/posts/bbfc710f.html","a7a66f1229608fdb0097c9ef94986345"],["/posts/bda68703.html","51e7faea3f94ccc43077f3a8b3e78519"],["/posts/c39add7d.html","996bf6e0b65761fa96181c3c07269b30"],["/posts/c822e518.html","e4775e506895130c0396aa24c4438211"],["/posts/cb4f1b09.html","db1f9a5b07a91f004ea87e9e8b1442fd"],["/posts/cbadfe7e.html","b275d5d3392570532b60ebf51aaf2752"],["/posts/cc8c02bc.html","6dccc3bc83ecb4ea725c4fcb059d32d8"],["/posts/d04a651.html","56b7665f623d5e117164e79722c16b67"],["/posts/d5db6e3c.html","6b814f7cda0083347442171dac76ad69"],["/posts/ddf8c7c8.html","c6c677e5861f08fc05ce05282346ea29"],["/posts/de5f9fb2.html","44b613f54083c298ad2811535625d0a4"],["/posts/ed21676f.html","ad208cb72d853ef232bdead45df55026"],["/posts/ee8bf801.html","ecc731b1865d5e9fda0b0468c9922e61"],["/posts/ef225e31.html","c60e6eef973559ea2b06d64b87f9e432"],["/posts/f216fabe.html","8b2b68577fdd790ac46226fb72463a3f"],["/posts/f28215f8.html","5e08fc62fde0de35b2b390fb865f0000"],["/posts/f5bb7e27.html","219946fadc4a9e06832b070fd8760ae9"],["/posts/f80f092e.html","8aa8cd58709963ea59b8233341528998"],["/posts/f8c980c0.html","7bd041eb973fe03ad36bfa1a253e97ea"],["/posts/fbf212fd.html","33b2f9d544ab8d030493e69699ce1857"],["/posts/ffec4f13.html","b8f390491def5f8eb8d3a8fb310f2eeb"],["/preloader/center-atom.css","e34a27f3e075d8251f9fbe5ba323e2ce"],["/privacy/index.html","71ae4443737e5b6e8e2877b8750e849d"],["/random/index.html","faa8c9c96828947329c218cb7b4ce5e4"],["/service-worker.js","1d0db5acd07d3cdfc8a40fefdc3c32f2"],["/static/css/css.css","0c43f62bfdd01b94f50260002c184f98"],["/static/css/reset.min.css","e24aadcaa4dbda8f24b04392fb7ac784"],["/static/css/style.css","b21970d7d342c03047516175cd64717a"],["/static/js/21012315.js","d41d8cd98f00b204e9800998ecf8427e"],["/static/js/MyMath.js","0424d086a2a0411818fb6fbf8471dfec"],["/static/js/Stage@0.1.4.js","849c05f044e81f1a1bcf7a0e353fcfb6"],["/static/js/fscreen@1.0.1.js","ba44160f9adb04fcc353b77c4751523a"],["/static/js/script.js","4fc063b667b48d4e8a5907fb11682f5c"],["/sw-register.js","0953dd042c8cc698cd3df70d4c694364"],["/tags/ACM-集训/index.html","31d69da73e73ce7fdd03a9571fd503c5"],["/tags/STL/index.html","3b2170ab0c63ab264a232431be636527"],["/tags/USACO/index.html","a0431525d952e6978dbcf47b77798004"],["/tags/hexo-github/index.html","a5723c1e4d5cc770da1bc83ae474c6b0"],["/tags/index.html","30d05696e6c60f8bcdb74a7b39d8449a"],["/tags/tool/index.html","b4949e9b09f60ffc5e522d77499006f9"],["/tags/乐学/index.html","85c80a895d09333785d470809671dc54"],["/tags/乐学/page/2/index.html","3882533bfa2162696a63fc1dcfdbaa88"],["/tags/乐学/page/3/index.html","04c850d22fda5073b37599710ff882a4"],["/tags/乐学/page/4/index.html","5b5acf058e9ed0296d8f37624369542c"],["/tags/乐学/page/5/index.html","88a537e9dfa4232e5ee5887901bdf580"],["/tags/乐学/page/6/index.html","d53dcfebf740c43853d964453169c962"],["/tags/算法/index.html","4d58f4512162b08a30a3d789f3617a5e"],["/tags/计算机基础/index.html","2bb3dfac45b3e3a0bfe2fbc78fceb528"],["/tags/资源/index.html","1b436204509e0be23aca4f0105489f73"],["/tags/转载/index.html","335e648c555602b5b5512b74202d1f92"],["/tools/index.html","9ed8efd7ac561c8d17859c6b530d7334"],["/update/index.html","c1bdaaa75dad3cfeb5263fa4aaf18692"],["/workbox-f2efd100.js","ee31e345bae88b23622150c1b801d69b"]];
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
