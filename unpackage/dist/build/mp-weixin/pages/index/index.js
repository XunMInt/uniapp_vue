(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"1aec":function(n,t,e){"use strict";e.r(t);var o=e("6f3e"),a=e.n(o);for(var i in o)"default"!==i&&function(n){e.d(t,n,(function(){return o[n]}))}(i);t["default"]=a.a},"571c":function(n,t,e){"use strict";(function(n){e("609c");o(e("66fd"));var t=o(e("bd36"));function o(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("543d")["createPage"])},"5edd":function(n,t,e){},"6f3e":function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(e("4795"));function a(n){return n&&n.__esModule?n:{default:n}}function i(n,t,e,o,a,i,u){try{var c=n[i](u),r=c.value}catch(s){return void e(s)}c.done?t(r):Promise.resolve(r).then(o,a)}function u(n){return function(){var t=this,e=arguments;return new Promise((function(o,a){var u=n.apply(t,e);function c(n){i(u,o,a,c,r,"next",n)}function r(n){i(u,o,a,c,r,"throw",n)}c(void 0)}))}}var c=function(){e.e("components/goodsList").then(function(){return resolve(e("aa72"))}.bind(null,e)).catch(e.oe)},r={data:function(){return{swiperList:[],goodsList:[],navList:[{name:"迅梦超市",icon:"iconfont icon-ziyuan",path:"../../pages/shops/shops"},{name:"社区图片",icon:"iconfont icon-tupian",path:"../../pages/pics/pics"},{name:"学习视频",icon:"iconfont icon-shipin",path:"../../pages/videos/videos"},{name:"联系我们",icon:"iconfont icon-guanyuwomen",path:"../../pages/contact/contact"}]}},onLoad:function(){this.getSwipers(),this.getGoodsList()},components:{"goods-list":c},methods:{getSwipers:function(){var n=this;return u(o.default.mark((function t(){var e,a;return o.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,n.$myRequest({url:"/api/getlunbo"});case 2:e=t.sent,a=e.data,n.swiperList=a.message;case 5:case"end":return t.stop()}}),t)})))()},getGoodsList:function(){var n=this;return u(o.default.mark((function t(){var e,a;return o.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,n.$myRequest({url:"/api/getgoods?pageindex=1"});case 2:e=t.sent,a=e.data,n.goodsList=a.message;case 5:case"end":return t.stop()}}),t)})))()},goto:function(t){n.navigateTo({url:t})},goToContent:function(t){n.navigateTo({url:"../../pages/goodsContent/goodsContent?id="+t})}}};t.default=r}).call(this,e("543d")["default"])},"7a77":function(n,t,e){"use strict";var o,a=function(){var n=this,t=n.$createElement;n._self._c},i=[];e.d(t,"b",(function(){return a})),e.d(t,"c",(function(){return i})),e.d(t,"a",(function(){return o}))},"7e00":function(n,t,e){"use strict";var o=e("5edd"),a=e.n(o);a.a},bd36:function(n,t,e){"use strict";e.r(t);var o=e("7a77"),a=e("1aec");for(var i in a)"default"!==i&&function(n){e.d(t,n,(function(){return a[n]}))}(i);e("7e00");var u,c=e("f0c5"),r=Object(c["a"])(a["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],u);t["default"]=r.exports}},[["571c","common/runtime","common/vendor"]]]);