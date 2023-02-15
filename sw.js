/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","2bce7cf4779b2fa317b1266164698f60"],["/about/index.html","f14815f833c23424fe4a8e94b2872ab1"],["/archives/2022/12/index.html","e91f2376de20f47316f1c1788911cd3d"],["/archives/2022/12/page/2/index.html","0c1ad614f047ba3d951dd6b431277970"],["/archives/2022/12/page/3/index.html","2c1774e538b34bc5a180b8060358aa50"],["/archives/2022/12/page/4/index.html","3661fdf790dcfaba094211a0075ee2a4"],["/archives/2022/12/page/5/index.html","c9e14520407f41db0283fc1a34b1e761"],["/archives/2022/12/page/6/index.html","2bbc550996e888245a72f6ffe83fdc1b"],["/archives/2022/12/page/7/index.html","8a4c43912e85b23723e6acd7911fb131"],["/archives/2022/index.html","3aaf5a2933554ff7a0750b0eca370b9d"],["/archives/2022/page/2/index.html","36d9814d4a50bda22555e8b3397d1d63"],["/archives/2022/page/3/index.html","1559c1ad6ea030023df94e97d70595ee"],["/archives/2022/page/4/index.html","4567db4b3bbf2f206a1cf560d8992edf"],["/archives/2022/page/5/index.html","66ab96240bebb2125202b6de546e3f6a"],["/archives/2022/page/6/index.html","5ad0314367ddad5b0d3f4437ce2c9d43"],["/archives/2022/page/7/index.html","86d683ee32cb31d73a36b9ea06973043"],["/archives/2023/01/index.html","7486c760623e5a31029b67c3c7a33afb"],["/archives/2023/01/page/2/index.html","1f512a98aa8101044b550cbdaee72f20"],["/archives/2023/02/index.html","d05078ed723bcdce049b2f2725c42ee1"],["/archives/2023/index.html","21aa18b61887134edef4908ad500da9d"],["/archives/2023/page/2/index.html","f230c47845e68fd1ef8f37890fd78a94"],["/archives/index.html","83cfb15f2e047ba0105f08f28aea760b"],["/archives/page/2/index.html","a160d390e40f53f40f0ba6d5c69ae3e3"],["/archives/page/3/index.html","aa2865288f24c76bd0468cced651f957"],["/archives/page/4/index.html","bd4dc7946f29a1688926088b5649f973"],["/archives/page/5/index.html","d4be59b403b53963bc6defbdacc65350"],["/archives/page/6/index.html","2bf1965953bb818423c8811268004fee"],["/archives/page/7/index.html","f1392a3175e2626cab88c2d50eb349b6"],["/archives/page/8/index.html","52d0e5223f860a8423c263ea10e1a813"],["/archives/page/9/index.html","467055b5f9f6b1c62592cfdf4861af47"],["/bb/index.html","1ab4d3982cb1c3201ce629194ad49f9a"],["/categories/help/index.html","802770808d8ccecdb7c9dc5f75aa50d7"],["/categories/index.html","76c15865d48f206d0250d0a096df9d45"],["/categories/刷题笔记/index.html","ca0d3ba996c03951c47892971e6ce3c4"],["/categories/刷题笔记/page/2/index.html","7a07a670f55b358a63c7089d7557c16b"],["/categories/刷题笔记/page/3/index.html","f4b2f93371fac7141a831a81c3cb0da9"],["/categories/刷题笔记/page/4/index.html","5aa1f0c7dc828d6c4b6c0db294917c6a"],["/categories/刷题笔记/page/5/index.html","f092681b5fb32801566a1f4065b1b3f7"],["/categories/刷题笔记/page/6/index.html","975a4ab7cdc723c478aa6d44905fc099"],["/categories/博客美化/index.html","2863cfd76e5bf8f20f44e909acf57aa1"],["/categories/博客魔改/index.html","29e7cde404c334cf2a6e3b0cde784438"],["/categories/技巧/index.html","0967367ee3c03ec065b195b722d84d30"],["/categories/教程/index.html","84881b72083dee1ec29f55979f293559"],["/categories/杂谈/index.html","fa32900b0b440c2834b0f4aabf1ef633"],["/categories/算法教程/index.html","8d5b2074a7e5ca4bc0f8d843b60c00fc"],["/categories/语法教程/index.html","e071b4ca19bf00954b238cedf969cf99"],["/categories/软件分享/index.html","f525aea40d2400a48d076da76c056836"],["/cc/index.html","9969d1e7d68f461a80f35fbd69cdd8c6"],["/charts/index.html","258834f672ac6a743a7a162a4349039a"],["/cookies/index.html","d27f0d8a613da24499b19697883986c7"],["/css/essay.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/fire/css.css","0c43f62bfdd01b94f50260002c184f98"],["/css/fire/reset.min.css","e24aadcaa4dbda8f24b04392fb7ac784"],["/css/fire/style.css","b21970d7d342c03047516175cd64717a"],["/css/index.css","66d725b94020fd8a1bab1e4b353fb21b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fire.html","28af85c45948c6d22644c9497375a879"],["/fonts/iconfont.eot","8d33e59818fb81f8c2067f662bdd8471"],["/fonts/iconfont.svg","db1a1a7226bee0e78542d5d97aeb6f68"],["/fonts/iconfont.ttf","c87c81f8ca9cc0110c487c1334cee217"],["/fonts/iconfont.woff","673fbe412307d14f6c5d26c774ab5e1f"],["/help/index.html","0afa5b09b5e9fb6f56cc8690b83eaeef"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/INTP.png","67391b367ecd96266f8784d10caf2536"],["/img/INTP.svg","bfd5a1fdb289a27d984eedb7e9ffcd08"],["/img/MC.jpg","c28172a126fb8bd578ec4895a87ad972"],["/img/backgroung.jpg","53960c6f38bd456e4a6b6e5083477094"],["/img/banner.jpg","15e8e8013100c198d7ae202ba6509533"],["/img/default_cover/cover (1).png","75d091b601d591be2963974dc5e6777c"],["/img/default_cover/cover (2).png","ca0a29edb756224d2b25ba45b433fb79"],["/img/default_cover/cover (3).png","78251dd15e0d5e05ad9d09545f15ed1f"],["/img/default_cover/cover (5).png","91cf2df02a422e7be32801c0d9615cf5"],["/img/default_cover/cover (7).png","3c6032a2c2db69aefc975ec84001038e"],["/img/default_cover/cover (8).jpg","66d77f65a9fc880d287ee7ad5892408b"],["/img/default_cover/cover (9).jpg","4f6747719ab350bd195e88214f21cd80"],["/img/edu.jpg","84689d7570770385fbf6ab9a4717ae32"],["/img/edu.png","dd8d0e6ce3334d89b6532c2599435218"],["/img/favicon.png","91299506dd20edc5fb2ba4f82f7f18e1"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/head.png","d4131daedc501e87c87367c9ddcaf3c8"],["/img/index.html","912f9cdd0fc7e3a4cbdcc2b0f587beaf"],["/img/logo-minecraft.svg","e31a1564996c886a1945c9e1f294cde9"],["/img/map.jpg","d559bcbdad05a1b1f6e4bcc1cc0e451e"],["/img/myself.jpg","b0e717b70883da452dd3e76825ecd9b3"],["/img/pwa/pwaicons/144.png","74543a328791d5a145d457c726a1ae02"],["/img/pwa/pwaicons/16.jpg","a7d9440f053665af7bd81016358c398b"],["/img/pwa/pwaicons/192.jpg","70909dd6286bd32d354181acf4de25e5"],["/img/pwa/pwaicons/192.png","9013916051d96b513f3e15ac39e9f867"],["/img/pwa/pwaicons/32.jpg","e0cc2baafa0111c71abe55be9da9e301"],["/img/pwa/pwaicons/36.png","d3077a5c5fc0da986a3dd895f1dde186"],["/img/pwa/pwaicons/48.png","31a5a73fcd3b224aa31994e0160a1ebf"],["/img/pwa/pwaicons/512.png","64c09fba74a4c55c580c50dc34e51751"],["/img/pwa/pwaicons/72.png","9712e1caea86d8a34de0788111a3bcf1"],["/img/pwa/pwaicons/96.png","59e9511a6181b8f9c622103e25efdca6"],["/img/uparrow.png","7263ecc5f42d7cfea8c5e66ce23a743c"],["/index.html","2ab8fd11847e39f776d17a813488810b"],["/js/continue-aplayer.js","96e029e2b6929a2ce6932dcb779a0ed5"],["/js/custom.js","e423294c52c1344a82d9ee8075d5fc74"],["/js/custom/PublicSacrificeDay.js","3337622648819ebb05d17f96617f9a37"],["/js/custom/ascii.js","9bb2715bed11a52d9ae3903d18506045"],["/js/custom/ex-search.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/custom/fire.js","20710cfedf535a04638bfebae7c14f7f"],["/js/custom/installPWA.js","744019152a4e90bf3694c45195ee336f"],["/js/custom/music.js","3f278a3707417615e062cff244a55b23"],["/js/custom/rightmenu.js","810a556d38a38f80c1a88118103058de"],["/js/fire/21012315.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/fire/MyMath.js","0424d086a2a0411818fb6fbf8471dfec"],["/js/fire/Stage@0.1.4.js","849c05f044e81f1a1bcf7a0e353fcfb6"],["/js/fire/fscreen@1.0.1.js","ba44160f9adb04fcc353b77c4751523a"],["/js/fire/script.js","4fc063b667b48d4e8a5907fb11682f5c"],["/js/hsu.js","893be29f19b7c13d3b7a680829fea5c4"],["/js/jquery.js","30792621ca010e3c5d5f98162629439f"],["/js/load.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/main.js","88aced9e00713346dbf5f92453a349b2"],["/js/search/algolia.js","01e3eecda2d6a3bfb970844a29d61198"],["/js/search/local-search.js","aea55acb22a3b51ad16057b0ea52c0a9"],["/js/tw_cn.js","bc064917c366036544975274bb20a01d"],["/js/utils.js","e95ad73d5170f72ae1596b3d9abb7ed3"],["/link/index.html","032df65bfc824945f6028299e6a5f636"],["/mouse/mouse.css","d75680ce4603d3812aee12994f6c96fa"],["/music/index.html","ba35dd4d80f19f213ae43549b91c4314"],["/page/2/index.html","32ea7d96bfd0919254820db1c1df8558"],["/page/3/index.html","e7a3a8c355fd0b31fbb5caa33ae39f8b"],["/page/4/index.html","7c64016ea4837bc8ca68d0c96855114a"],["/page/5/index.html","6ac05bd72a3af29ca6c2e4b796214802"],["/page/6/index.html","30929e58dc94a5d321dd7446121462b3"],["/page/7/index.html","cc7bcb0fd7d91a1437030c76fc4a7123"],["/page/8/index.html","3c724a141b7a7e431400c5052926973f"],["/page/9/index.html","ccd3a2a76610f6db02c142537e47ed93"],["/posts/130da42f.html","7abf23e346a6c48b6eb24c9158d66c57"],["/posts/16518a5d.html","7d68adb6e4bd97a7644bd8981c739857"],["/posts/19cf8ae9.html","11010dd683c958dde38cb0e90f330c3b"],["/posts/1d63791b.html","53c465cfd42b2b07d5e9147cefec1bfa"],["/posts/1f186d6f.html","afa1537fe16cb52d3ff82957f379eb83"],["/posts/20c47d09.html","56213e3b6436f321babdd6bc5b58c374"],["/posts/25df28d4.html","e4f5a8aedc8ed9c509e8dc1ff997ddc4"],["/posts/2981d3e8.html","b3dd9ac19b6ccab3481d36a2edeb9546"],["/posts/29ce1390.html","6e742363deb7c549a6025fe7764e6391"],["/posts/2bf30a8f.html","bf3c593301f792bc113234df93b2f34d"],["/posts/2cd2b7cf.html","c287ea8d1ae0453971d1a6675f558187"],["/posts/2dd8bc82.html","d3fa133d63d163631fcba96d007741c7"],["/posts/3012010d.html","b0ca31ca64d63c48a6d658716f25f152"],["/posts/30226dd9.html","238d95f2e0af21d1410da622533ce33a"],["/posts/3179ac2a.html","500c65961f6f06b78877e3a559581cd7"],["/posts/386b32f2.html","6b9d248ff004339a5b95a4a424c84646"],["/posts/3a6de62a.html","53759577463fd88f7c015cce596ccf56"],["/posts/3b9a0bd5.html","910fadebfff0adb4323e2aeb1757c4dd"],["/posts/3dd7ffa7.html","a9e0262bfd47be58afb45cd8ddf0e953"],["/posts/3e6df65f.html","f5bc61c1bb10cbc5bc8f60d083e3f09f"],["/posts/418342b5.html","67aeb65271ad33d4a841b4673c22eafb"],["/posts/43ef268c.html","91812645ced444fab982df961cdefc22"],["/posts/4699cb3f.html","99875626334892f0ba366d933789f1a8"],["/posts/47b007d5.html","3722dd38f84c53e90dfd4068af95277f"],["/posts/48946740.html","30bb7f8d7e2a6a75a7ece30c08dee80c"],["/posts/48b938d1.html","bfdb710e7b3aa2d9db0489d76ad43608"],["/posts/4ad0cf31.html","0b7d2f9a3445fff4f8252c4a23788c6d"],["/posts/4d006364.html","c7e394311e69a46795f3b3735e1986ac"],["/posts/4dc77c26.html","2e9fa361088ee0519524499306cb9db8"],["/posts/542f557.html","fb1f7332d9e3da046b80ee1746754df2"],["/posts/5487c88e.html","006d007bcae522f8775975b0216d24a7"],["/posts/579c41ee.html","51a63045d12b85c45b07ed90fdd476b1"],["/posts/5a42efcf.html","5ec52ef9d2440ecd0fe34bd1df1e1c47"],["/posts/5a8b87c.html","ac0c876c975a46460f3a81f11f247a17"],["/posts/5e641f58.html","80613ca8852b99a909038f82ab72e4bd"],["/posts/5f6267a3.html","caa87372c4e0cd22d95152b2fdacad3c"],["/posts/5f82cc62.html","a2d19a4f402d0a29784e034b70e66d3a"],["/posts/6109666d.html","0fca7071185fca4dbe041a72255bb93f"],["/posts/6287ead9.html","fe5a5fcede14a57242753f76ba3bcfe8"],["/posts/637681ac.html","fe1fca07f497886c06106706e52607b6"],["/posts/67ad6f26.html","4f2811543dcfce80d42b5469148c90b0"],["/posts/69f92217.html","98bf89646f3fc5413c1e6a367d134682"],["/posts/6abe8772.html","8b417d43029a4a5c6ca5dfdd902b54dc"],["/posts/6e818316.html","9900de35b49a71bd59a44573df5a0f62"],["/posts/735e5788.html","8ae6a8283b02d27496fe6ed1d3224efa"],["/posts/751ac048.html","9b5ea118d2f01df086828419d3ac2cef"],["/posts/7e751aa7.html","c8bcdcdcb76423c7722f8ca9ce90a37f"],["/posts/81d10c29.html","5b91ce416e04900549156a3ba49c9b5e"],["/posts/90563067.html","051d8c21313c74414432e8222284d61c"],["/posts/909735e5.html","13e2825a4d95bfe613a2ba3116493a36"],["/posts/928e25c5.html","3a1f478728561f6444eab63f2e2951c4"],["/posts/934999f6.html","f72bb1e066c22fa63892f41926b9ce0f"],["/posts/9561cdd8.html","fa75aaf6b0e6bd6aac58fcb6552f1554"],["/posts/9b999461.html","03c79c60d97992ddf69c74021930d402"],["/posts/9bb1d67d.html","f525d99da8ea59e4e1b659a38c955244"],["/posts/a3266abe.html","b4ac4efa346cc0f629df38ebf855d27d"],["/posts/a50b380c.html","30964673082b6c5617b3ce72307d48e7"],["/posts/a721148.html","780978d0253d268571995cca0785ea38"],["/posts/ad2b397f.html","41853b67bbee49d7242acbbc906f2e91"],["/posts/afa15b69.html","c5987c5e965ffad5a7dd326e165ab646"],["/posts/b3688e01.html","faff5e14908951c50e27eb9d412f8a20"],["/posts/b4290629.html","e01c061c72acd68c1c51e20388fd1a66"],["/posts/b433e5f.html","b9fdadff456f47ee5c2428faa77c3fec"],["/posts/bbfc710f.html","33387c3aa8bcf7c13c6295b617471135"],["/posts/bda68703.html","918a948074cec89d80f77814d093ad0e"],["/posts/c39add7d.html","d2af425f73579d1cd3eb3771e3623267"],["/posts/c822e518.html","80cf902911b8ade32303eed2b8c5a479"],["/posts/cb4f1b09.html","b415ba67510c57113e4e453201bfc7c4"],["/posts/cbadfe7e.html","c9b9721a7f5d811d55c4fcf7dad76537"],["/posts/cc8c02bc.html","93d787bf05cfbb34a0f781d8b77b781f"],["/posts/d04a651.html","e005d6eddda1a6cb27e4988ee07865e0"],["/posts/d5db6e3c.html","7d3378d4407185ea243d8fa27ba97aec"],["/posts/d87f7e0c.html","ea956175a12e9e629b9fe739ec7273fd"],["/posts/ddf8c7c8.html","372fbc01e7d2d3a4fbe47b48682365b3"],["/posts/de5f9fb2.html","b19ead651b5843c835ad6374a639306a"],["/posts/ed21676f.html","3464ebaffa82ff5f07c37d0baf517ccb"],["/posts/ee8bf801.html","c5b43c1e54d653dedb119c4dca5b3c94"],["/posts/ef225e31.html","26dce63a5c3bb78a6bcfa2ecd6e1084c"],["/posts/f216fabe.html","470359af05a12cb4600b44aa25e6e20e"],["/posts/f28215f8.html","6e46fb75dad42f65a12a93a6a49331b9"],["/posts/f5bb7e27.html","b77b3c108b598cc5337e235be3b20a9e"],["/posts/f80f092e.html","d6204c94859eb71281c4a99a0ed851ed"],["/posts/f8c980c0.html","280c277d7535be7625442d305bcff02b"],["/posts/fbf212fd.html","4a6aed8a5a5db3a6d61d9f79e837b0fc"],["/posts/ffec4f13.html","77de20ddf288ed288f4895629c4c9927"],["/preloader/center-atom.css","e34a27f3e075d8251f9fbe5ba323e2ce"],["/privacy/index.html","e32f64e4e42b07457db54369b5bd5e19"],["/random/index.html","9b5015ddee1f69510fd4323fdc814bd4"],["/static/css/css.css","0c43f62bfdd01b94f50260002c184f98"],["/static/css/reset.min.css","e24aadcaa4dbda8f24b04392fb7ac784"],["/static/css/style.css","b21970d7d342c03047516175cd64717a"],["/static/js/21012315.js","d41d8cd98f00b204e9800998ecf8427e"],["/static/js/MyMath.js","0424d086a2a0411818fb6fbf8471dfec"],["/static/js/Stage@0.1.4.js","849c05f044e81f1a1bcf7a0e353fcfb6"],["/static/js/fscreen@1.0.1.js","ba44160f9adb04fcc353b77c4751523a"],["/static/js/script.js","4fc063b667b48d4e8a5907fb11682f5c"],["/sw-register.js","763bb9060cdb781d274cb31d4dd1dd4a"],["/tags/ACM-集训/index.html","1f03a4aff289d0cdd524887b544d7508"],["/tags/STL/index.html","a4bab253a7fec7753cb4a48d667c31e6"],["/tags/USACO/index.html","1095d4acc3bc07ed82a09add9f8ace8c"],["/tags/hexo-github/index.html","94601d1e241c1f54eab2e1b37153af58"],["/tags/index.html","2f801f2e38f74b23f0c9150fa645910e"],["/tags/tool/index.html","99318ebf4a50eb60e871fddd265411d5"],["/tags/乐学/index.html","87f38495f27eb5c9f7df369ab317e767"],["/tags/乐学/page/2/index.html","2f05b2437ea559caa1500ec0e19d0869"],["/tags/乐学/page/3/index.html","f513142f1d03f9e83891105217ca6ff7"],["/tags/乐学/page/4/index.html","d5e88fe224cd8dd3afbce39584b8cbf3"],["/tags/乐学/page/5/index.html","a1e58639f9f6e82157b7331ba7e1f11b"],["/tags/乐学/page/6/index.html","f4ea067edcb2c50f61731a969665b7ea"],["/tags/插件/index.html","59c25c4a86b693b556361fc6b246fb85"],["/tags/算法/index.html","9e7e7d0c3aafebeaf9f675924c44df7d"],["/tags/计算机基础/index.html","0a277ceee178bab754d8ad7269b2e6d2"],["/tags/资源/index.html","d4924dba4ee1d504917c6ff21923d488"],["/tags/转载/index.html","266cf85a1a957d13ebddfd6002b08849"],["/tags/魔改/index.html","8be27d17a66a05b73d62aab9fea17829"],["/tools/index.html","bf4e4d28091055ad5b1a746875fc56a3"],["/update/index.html","67ebf13004e64ba8e5fe4eae7d612f1b"]];
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
