(function(n){function e(e){for(var o,r,s=e[0],c=e[1],u=e[2],g=0,f=[];g<s.length;g++)r=s[g],a[r]&&f.push(a[r][0]),a[r]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(n[o]=c[o]);p&&p(e);while(f.length)f.shift()();return i.push.apply(i,u||[]),t()}function t(){for(var n,e=0;e<i.length;e++){for(var t=i[e],o=!0,r=1;r<t.length;r++){var c=t[r];0!==a[c]&&(o=!1)}o&&(i.splice(e--,1),n=s(s.s=t[0]))}return n}var o={},a={index:0},i=[];function r(n){return s.p+"static/js/"+({"pages-carts-carts":"pages-carts-carts","pages-contact-contact":"pages-contact-contact","pages-goodsContent-goodsContent":"pages-goodsContent-goodsContent","pages-index-index~pages-shops-shops":"pages-index-index~pages-shops-shops","pages-index-index":"pages-index-index","pages-shops-shops":"pages-shops-shops","pages-my-my":"pages-my-my","pages-news-content-news-content":"pages-news-content-news-content","pages-news-news":"pages-news-news","pages-pics-pics":"pages-pics-pics"}[n]||n)+"."+{"pages-carts-carts":"b666db59","pages-contact-contact":"954fbef5","pages-goodsContent-goodsContent":"943b590f","pages-index-index~pages-shops-shops":"4b8ff587","pages-index-index":"460cf2b8","pages-shops-shops":"8e49e5e6","pages-my-my":"34cdec32","pages-news-content-news-content":"586052ec","pages-news-news":"c4c07d33","pages-pics-pics":"2a9a7522"}[n]+".js"}function s(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.e=function(n){var e=[],t=a[n];if(0!==t)if(t)e.push(t[2]);else{var o=new Promise((function(e,o){t=a[n]=[e,o]}));e.push(t[2]=o);var i,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=r(n),i=function(e){c.onerror=c.onload=null,clearTimeout(u);var t=a[n];if(0!==t){if(t){var o=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src,r=new Error("Loading chunk "+n+" failed.\n("+o+": "+i+")");r.type=o,r.request=i,t[1](r)}a[n]=void 0}};var u=setTimeout((function(){i({type:"timeout",target:c})}),12e4);c.onerror=c.onload=i,document.head.appendChild(c)}return Promise.all(e)},s.m=n,s.c=o,s.d=function(n,e,t){s.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},s.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},s.t=function(n,e){if(1&e&&(n=s(n)),8&e)return n;if(4&e&&"object"===typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)s.d(t,o,function(e){return n[e]}.bind(null,o));return t},s.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return s.d(e,"a",e),e},s.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},s.p="/",s.oe=function(n){throw console.error(n),n};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var g=0;g<c.length;g++)e(c[g]);var p=u;i.push([0,"chunk-vendors"]),t()})({0:function(n,e,t){n.exports=t("dea6")},"065c":function(n,e,t){var o=t("cb00");"string"===typeof o&&(o=[[n.i,o,""]]),o.locals&&(n.exports=o.locals);var a=t("4f06").default;a("0716d94a",o,!0,{sourceMap:!1,shadowMode:!1})},"0f69":function(n,e,t){"use strict";t.r(e);var o=t("fb6d"),a=t.n(o);for(var i in o)"default"!==i&&function(n){t.d(e,n,(function(){return o[n]}))}(i);e["default"]=a.a},"609c":function(n,e,t){"use strict";(function(n){var e=t("ee27"),o=e(t("e143"));n["____8997853____"]=!0,delete n["____8997853____"],n.__uniConfig={globalStyle:{navigationBarTextStyle:"white",navigationBarTitleText:"迅梦商城",navigationBarBackgroundColor:"#b50e02",backgroundColor:"#F8F8F8"},tabBar:{selectedColor:"#b50e02",color:"#ccc",list:[{text:"首页",pagePath:"pages/index/index",iconPath:"static/icon/home.png",selectedIconPath:"static/icon/home-active.png",redDot:!1,badge:""},{text:"资讯",pagePath:"pages/news/news",iconPath:"static/icon/news.png",selectedIconPath:"static/icon/news-active.png",redDot:!1,badge:""},{text:"购物车",pagePath:"pages/carts/carts",iconPath:"static/icon/cart.png",selectedIconPath:"static/icon/cart-active.png",redDot:!1,badge:""},{text:"会员",pagePath:"pages/my/my",iconPath:"static/icon/member.png",selectedIconPath:"static/icon/member-active.png",redDot:!1,badge:""}],backgroundColor:"#f7f7fa",borderStyle:"black"}},n.__uniConfig.compilerVersion="2.8.8",n.__uniConfig.router={mode:"hash",base:"/"},n.__uniConfig.publicPath="/",n.__uniConfig["async"]={loading:"AsyncLoading",error:"AsyncError",delay:200,timeout:6e4},n.__uniConfig.debug=!1,n.__uniConfig.networkTimeout={request:6e4,connectSocket:6e4,uploadFile:6e4,downloadFile:6e4},n.__uniConfig.sdkConfigs={},n.__uniConfig.qqMapKey="XVXBZ-NDMC4-JOGUS-XGIEE-QVHDZ-AMFV2",n.__uniConfig.nvue={"flex-direction":"column"},n.__uniConfig.__webpack_chunk_load__=t.e,o.default.component("pages-index-index",(function(n){var e={component:Promise.all([t.e("pages-index-index~pages-shops-shops"),t.e("pages-index-index")]).then(function(){return n(t("bd36"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(n){return n(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(n){return n(__uniConfig["async"]["error"])}}),e})),o.default.component("pages-news-news",(function(n){var e={component:t.e("pages-news-news").then(function(){return n(t("fa4d"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(n){return n(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(n){return n(__uniConfig["async"]["error"])}}),e})),o.default.component("pages-carts-carts",(function(n){var e={component:t.e("pages-carts-carts").then(function(){return n(t("9b27"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(n){return n(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(n){return n(__uniConfig["async"]["error"])}}),e})),o.default.component("pages-my-my",(function(n){var e={component:t.e("pages-my-my").then(function(){return n(t("a2fc"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(n){return n(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(n){return n(__uniConfig["async"]["error"])}}),e})),o.default.component("pages-shops-shops",(function(n){var e={component:Promise.all([t.e("pages-index-index~pages-shops-shops"),t.e("pages-shops-shops")]).then(function(){return n(t("1b12"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(n){return n(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(n){return n(__uniConfig["async"]["error"])}}),e})),o.default.component("pages-contact-contact",(function(n){var e={component:t.e("pages-contact-contact").then(function(){return n(t("6a55"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(n){return n(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(n){return n(__uniConfig["async"]["error"])}}),e})),o.default.component("pages-pics-pics",(function(n){var e={component:t.e("pages-pics-pics").then(function(){return n(t("be02"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(n){return n(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(n){return n(__uniConfig["async"]["error"])}}),e})),o.default.component("pages-news-content-news-content",(function(n){var e={component:t.e("pages-news-content-news-content").then(function(){return n(t("4537"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(n){return n(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(n){return n(__uniConfig["async"]["error"])}}),e})),o.default.component("pages-goodsContent-goodsContent",(function(n){var e={component:t.e("pages-goodsContent-goodsContent").then(function(){return n(t("b005"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(n){return n(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(n){return n(__uniConfig["async"]["error"])}}),e})),n.__uniRoutes=[{path:"/",alias:"/pages/index/index",component:{render:function(n){return n("Page",{props:Object.assign({isQuit:!0,isEntry:!0,isTabBar:!0,tabBarIndex:0},__uniConfig.globalStyle,{})},[n("pages-index-index",{slot:"page"})])}},meta:{id:1,name:"pages-index-index",isNVue:!1,pagePath:"pages/index/index",isQuit:!0,isEntry:!0,isTabBar:!0,tabBarIndex:0,windowTop:44}},{path:"/pages/news/news",component:{render:function(n){return n("Page",{props:Object.assign({isQuit:!0,isTabBar:!0,tabBarIndex:1},__uniConfig.globalStyle,{navigationBarTitleText:"资讯"})},[n("pages-news-news",{slot:"page"})])}},meta:{id:2,name:"pages-news-news",isNVue:!1,pagePath:"pages/news/news",isQuit:!0,isTabBar:!0,tabBarIndex:1,windowTop:44}},{path:"/pages/carts/carts",component:{render:function(n){return n("Page",{props:Object.assign({isQuit:!0,isTabBar:!0,tabBarIndex:2},__uniConfig.globalStyle,{})},[n("pages-carts-carts",{slot:"page"})])}},meta:{id:3,name:"pages-carts-carts",isNVue:!1,pagePath:"pages/carts/carts",isQuit:!0,isTabBar:!0,tabBarIndex:2,windowTop:44}},{path:"/pages/my/my",component:{render:function(n){return n("Page",{props:Object.assign({isQuit:!0,isTabBar:!0,tabBarIndex:3},__uniConfig.globalStyle,{})},[n("pages-my-my",{slot:"page"})])}},meta:{id:4,name:"pages-my-my",isNVue:!1,pagePath:"pages/my/my",isQuit:!0,isTabBar:!0,tabBarIndex:3,windowTop:44}},{path:"/pages/shops/shops",component:{render:function(n){return n("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"迅梦超市",enablePullDownRefresh:!0})},[n("pages-shops-shops",{slot:"page"})])}},meta:{name:"pages-shops-shops",isNVue:!1,pagePath:"pages/shops/shops",windowTop:44}},{path:"/pages/contact/contact",component:{render:function(n){return n("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"联系我们"})},[n("pages-contact-contact",{slot:"page"})])}},meta:{name:"pages-contact-contact",isNVue:!1,pagePath:"pages/contact/contact",windowTop:44}},{path:"/pages/pics/pics",component:{render:function(n){return n("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"社区图片"})},[n("pages-pics-pics",{slot:"page"})])}},meta:{name:"pages-pics-pics",isNVue:!1,pagePath:"pages/pics/pics",windowTop:44}},{path:"/pages/news-content/news-content",component:{render:function(n){return n("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"资讯内容"})},[n("pages-news-content-news-content",{slot:"page"})])}},meta:{name:"pages-news-content-news-content",isNVue:!1,pagePath:"pages/news-content/news-content",windowTop:44}},{path:"/pages/goodsContent/goodsContent",component:{render:function(n){return n("Page",{props:Object.assign({},__uniConfig.globalStyle,{})},[n("pages-goodsContent-goodsContent",{slot:"page"})])}},meta:{name:"pages-goodsContent-goodsContent",isNVue:!1,pagePath:"pages/goodsContent/goodsContent",windowTop:44}},{path:"/preview-image",component:{render:function(n){return n("Page",{props:{navigationStyle:"custom"}},[n("system-preview-image",{slot:"page"})])}},meta:{name:"preview-image",pagePath:"/preview-image"}},{path:"/choose-location",component:{render:function(n){return n("Page",{props:{navigationStyle:"custom"}},[n("system-choose-location",{slot:"page"})])}},meta:{name:"choose-location",pagePath:"/choose-location"}},{path:"/open-location",component:{render:function(n){return n("Page",{props:{navigationStyle:"custom"}},[n("system-open-location",{slot:"page"})])}},meta:{name:"open-location",pagePath:"/open-location"}}],n.UniApp&&new n.UniApp}).call(this,t("c8ba"))},"6cc9":function(n,e,t){"use strict";t.r(e);var o=t("f632"),a=t("0f69");for(var i in a)"default"!==i&&function(n){t.d(e,n,(function(){return a[n]}))}(i);t("a5e9");var r,s=t("f0c5"),c=Object(s["a"])(a["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],r);e["default"]=c.exports},a5e9:function(n,e,t){"use strict";var o=t("065c"),a=t.n(o);a.a},cb00:function(n,e,t){var o=t("24fb");e=o(!1),e.push([n.i,'\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/*每个页面公共css */@font-face{font-family:iconfont;src:url(https://gitee.com/destiny001/iconfont/iconfont.eot?t=1576844226174); /* IE9 */src:url(https://gitee.com/destiny001/iconfont/iconfont.eot?t=1576844226174#iefix) format("embedded-opentype"),url("data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAVMAAsAAAAAChwAAAT9AAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDKAqHQIYhATYCJAMUCwwABCAFhG0HUBurCFGUTk6f7Edh3LaEI5xY7HYeoWNK7zwLfd/7ZDz8/37f9rny/h3XpE711SdNQq1REh4bhEQoLLJn8v/facvNLUze6duSsZbv+GnTlb7095Zi+lMOtlEU4UA4hIXh39Neujkz1HYC0ju3M1Ac9Uf+ce/0z/PA5qOyXP5orGFznpcFmGBAY2xsawEOyhL0FvEsLiQTuJ7AoFUtsVtbBxckq4BugXjNDYVkbRYlhBOavvMZW7ZjpmrpbfpEfFY/H/8MIktSM+h78XRTJys/2///CaSPuC0jpPm5cJtExh6iEM99PQ8l9NiehMFPZtIVRMNXEj+zb0beXPT/M1lbNI395ZEVieiAZpiR1+KFn1lRTOZnifXTnlARyZg1+Tgxt7EMYgmJIyQ+AMNyCeqKWeO9ZOlV6Y7jtTFeKQ8tRm5qIlYcXy1Oyh9fVuuJ2tZ0WWdWhKmbl3MZu/sBgAGj+GXDAAynUbHQsuY1Dsowei8GE4agxGp8LQRRQbg6AndIDcIVej0Mm8c2vQ46ZEObfY4iStdK1oEgH8wh0cirf1tGHWjmFZSXw4Zt2pNGH1AssUPk+XIpFCyZjCESvUgkNAQRBpB+/CBuCIaSjsmCTRSFWSIXVzWoOeKt6wNErxaK51q3r1fPWtfq7nL7SgSFApHfYIivvEiv0cyEvqZGntCM6OxoqkToIdUN3Gg6mJUAqBFGFjxEg0tgwvcDFDIAM9f+WFS4weC6ob6egYZ6rhYSgSJa29jWNzPQ0s81TiSSNXpHI5jwtbi6eBNqkGrdc99fbMfQL+iYTR2oapkiByLYs93k3fbd5NwOxF9mAwy7HK58wdfBl+66BEADufaQOdvl2CPZJU7RbEv0wAzQL7Oh+dqs2fBRb9OgvjwoANaSyP+OIkUtxdT2/+sOGgpaCg6mGwDnsoN8fi5XyfIDVG5suj4+Wyg4oRIcmX6AAKfWSfHOS/m4NOO8XH5k+R2VQ1y+jbobtzlAYyAzQskq82saBgPMgBl9GDMAjnmOlY4Uj5SOuQGIffIeFR6dJps6HYW4RPbdpn6ypgHJMwmlMmTWBPBKrUlpRVBZrqfp21Wmy+v6P7OwsZ4Iob4vJnZfUlJTK/V9U/VkftSxuvWZbpn658+yjBSnJdacFWDXa2k6qDLvZgWQk8gTocUryiH3Y+6vPMc8KiXuu13obDbdSKNYV79vro61UN9/WHR+JpWlwfQNDrDNB6SVgC5daU02/IT7CSz3kQX4CPo9+Sub/UPsukQZ4Uhctmlu59ts8OXe2ML/Bhfwvfljk8rjW9m+pB/phmgqUQjyp/jKwVrLWy3UnASibDH6qsslHUkYxCB9AIFJP/kYZpZvIjQzJiQ9K5A1a2gh96Aacgad5ioM2rU9ecgUKSHKAHY8EAjjHiEZ9RWycRFayG+oZv1CZzwSMOgyGnMO2QieX5egIOhUnVCuCY8JdsxrxWdghI4irXKVewUy4EHa7/ScyW3wQOYxIBgaA0RGmRQu3SKbgeMI6kthgYYdE9Gf63aZ35k6mnBJ3k0SUCCgo1QTFKcRPEyujvKu958BhpBDIUNKfiSvACnAa6f6Onox0G2NF6tkXRoHhgwDCDHeiZEEF7VFXcDBmED5/q0sQIM6zBQR35wuq8Tiajrl69xpLD0VysKcNVLkKFGj070xuc+9NIZyWPEKRig1moQj4YKXnvKJzUwIAAAA") format("woff2"),url(https://gitee.com/destiny001/iconfont/iconfont.woff?t=1576844226174) format("woff"),url(https://gitee.com/destiny001/iconfont/iconfont.ttf?t=1576844226174) format("truetype"),url(https://gitee.com/destiny001/iconfont/iconfont.svg?t=1576844226174#iconfont) format("svg") /* iOS 4.1- */}.iconfont{font-family:iconfont!important;font-size:16px;font-style:normal;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.icon-shipin:before{content:"\\f0024"}.icon-tupian:before{content:"\\e650"}.icon-guanyuwomen:before{content:"\\e608"}.icon-ziyuan:before{content:"\\e60d"}.gomeImgLoad{width:%?750?%;height:auto}',""]),n.exports=e},ccb7:function(n,e,t){"use strict";t("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.myRequest=void 0;var o="https://hmapi.xmint.cn",a=function(n){return new Promise((function(e,t){uni.request({url:o+n.url,method:n.method||"GET",data:n.data||{},success:function(n){if(0!=n.data.status)return uni.showToast({title:"数据获取失败",icon:"none"});e(n)},fail:function(n){uni.showToast({title:"数据获取失败",icon:"none"}),t(n)}})}))};e.myRequest=a},dea6:function(n,e,t){"use strict";var o=t("ee27");t("99af"),t("4de4"),t("4d90");var a=o(t("f3f3"));t("e260"),t("e6cf"),t("cca6"),t("a79d"),t("609c"),t("1c31");var i=o(t("e143")),r=o(t("6cc9")),s=t("ccb7");i.default.config.productionTip=!1,r.default.mpType="app",i.default.prototype.$myRequest=s.myRequest,i.default.filter("dateFromat",(function(n){var e=new Date(n),t=e.getFullYear(),o=(e.getMonth()+1+"").padStart(2,"0"),a=(e.getDate()+"").padStart(2,"0");return"".concat(t,"-").concat(o,"-").concat(a)}));var c=new i.default((0,a.default)({},r.default));c.$mount()},f632:function(n,e,t){"use strict";var o,a=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("App",{attrs:{keepAliveInclude:n.keepAliveInclude}})},i=[];t.d(e,"b",(function(){return a})),t.d(e,"c",(function(){return i})),t.d(e,"a",(function(){return o}))},fb6d:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={onLaunch:function(){console.log("App Launch")},onShow:function(){console.log("App Show")},onHide:function(){console.log("App Hide")}};e.default=o}});