(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/news-content/news-content"],{4537:function(t,n,e){"use strict";e.r(n);var r=e("b45c"),u=e("9439");for(var o in u)"default"!==o&&function(t){e.d(n,t,(function(){return u[t]}))}(o);e("e369");var a,i=e("f0c5"),c=Object(i["a"])(u["default"],r["b"],r["c"],!1,null,"198fb685",null,!1,r["a"],a);n["default"]=c.exports},"506a":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=u(e("4795"));function u(t){return t&&t.__esModule?t:{default:t}}function o(t,n,e,r,u,o,a){try{var i=t[o](a),c=i.value}catch(f){return void e(f)}i.done?n(c):Promise.resolve(c).then(r,u)}function a(t){return function(){var n=this,e=arguments;return new Promise((function(r,u){var a=t.apply(n,e);function i(t){o(a,r,u,i,c,"next",t)}function c(t){o(a,r,u,i,c,"throw",t)}i(void 0)}))}}var i={data:function(){return{id:0,contentList:[]}},onLoad:function(t){this.id=t.id,this.getContentList()},methods:{getContentList:function(){var t=this;return a(r.default.mark((function n(){var e,u;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.$myRequest({url:"/api/getnew/"+t.id});case 2:e=n.sent,u=e.data,t.contentList=u.message,console.log(t.contentList);case 6:case"end":return n.stop()}}),n)})))()}}};n.default=i},9439:function(t,n,e){"use strict";e.r(n);var r=e("506a"),u=e.n(r);for(var o in r)"default"!==o&&function(t){e.d(n,t,(function(){return r[t]}))}(o);n["default"]=u.a},b45c:function(t,n,e){"use strict";var r,u=function(){var t=this,n=t.$createElement,e=(t._self._c,t.__map(t.contentList,(function(n,e){var r=t.__get_orig(n),u=t._f("dateFromat")(n.add_time);return{$orig:r,f0:u}})));t.$mp.data=Object.assign({},{$root:{l0:e}})},o=[];e.d(n,"b",(function(){return u})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return r}))},e369:function(t,n,e){"use strict";var r=e("f2d7"),u=e.n(r);u.a},f2d7:function(t,n,e){},f3f2:function(t,n,e){"use strict";(function(t){e("609c");r(e("66fd"));var n=r(e("4537"));function r(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])}},[["f3f2","common/runtime","common/vendor"]]]);