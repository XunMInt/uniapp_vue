(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/uni-goods-nav/uni-goods-nav"],{"1b75":function(n,t,o){"use strict";var e={uniIcons:function(){return Promise.all([o.e("common/vendor"),o.e("components/uni-icons/uni-icons")]).then(o.bind(null,"b46a"))}},c=function(){var n=this,t=n.$createElement;n._self._c},u=[];o.d(t,"b",(function(){return c})),o.d(t,"c",(function(){return u})),o.d(t,"a",(function(){return e}))},8219:function(n,t,o){"use strict";var e=o("c898"),c=o.n(e);c.a},"9d9c":function(n,t,o){"use strict";o.r(t);var e=o("1b75"),c=o("b0b5");for(var u in c)"default"!==u&&function(n){o.d(t,n,(function(){return c[n]}))}(u);o("8219");var i,r=o("f0c5"),a=Object(r["a"])(c["default"],e["b"],e["c"],!1,null,"e9c51a1c",null,!1,e["a"],i);t["default"]=a.exports},aa89:function(n,t,o){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e=function(){Promise.all([o.e("common/vendor"),o.e("components/uni-icons/uni-icons")]).then(function(){return resolve(o("b46a"))}.bind(null,o)).catch(o.oe)},c={name:"UniGoodsNav",components:{uniIcons:e},props:{options:{type:Array,default:function(){return[{icon:"shop",text:"店铺"},{icon:"cart",text:"购物车"}]}},buttonGroup:{type:Array,default:function(){return[{text:"加入购物车",backgroundColor:"#ffa200",color:"#fff"},{text:"立即购买",backgroundColor:"#ff0000",color:"#fff"}]}},fill:{type:Boolean,default:!1}},methods:{onClick:function(n,t){this.$emit("click",{index:n,content:t})},buttonClick:function(t,o){n.report&&n.report(o.text,o.text),this.$emit("buttonClick",{index:t,content:o})}}};t.default=c}).call(this,o("543d")["default"])},b0b5:function(n,t,o){"use strict";o.r(t);var e=o("aa89"),c=o.n(e);for(var u in e)"default"!==u&&function(n){o.d(t,n,(function(){return e[n]}))}(u);t["default"]=c.a},c898:function(n,t,o){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/uni-goods-nav/uni-goods-nav-create-component',
    {
        'components/uni-goods-nav/uni-goods-nav-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("9d9c"))
        })
    },
    [['components/uni-goods-nav/uni-goods-nav-create-component']]
]);
