import Vue from 'vue'
import App from './App'
import { myRequest } from "./util/api"
Vue.config.productionTip = false

App.mpType = 'app'

//原型对象挂载请求方法
Vue.prototype.$myRequest = myRequest;

//时间过滤器
Vue.filter('dateFromat', function (val) {
    const dt = new Date(val);
    const y = dt.getFullYear()
    const m = (dt.getMonth() + 1 + '').padStart(2, '0')
    const d = (dt.getDate() + '').padStart(2, '0')
    return `${y}-${m}-${d}`
})

const app = new Vue({
    ...App
})
app.$mount()
