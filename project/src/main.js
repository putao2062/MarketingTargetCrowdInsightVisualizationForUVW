/*
 * @Author: XiaozhenChen
 * @Date: 2021-07-06 11:33:58
 * @LastEditTime: 2021-07-06 12:34:58
 * @LastEditors: Please set LastEditors
 * @Description: 
 * @FilePath: \project\src\main.js
 */

// import Vue from 'vue'
// import App from './App.vue'

// Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
// }).$mount('#app')

// 加路由
import Vue from 'vue'
import App from './Index.vue'

// 引入注册vue路由组件
import VueRouter from 'vue-router'
import router from './routers'
Vue.use(VueRouter)

Vue.config.productionTip = false

// 实例化vue对象配置中添加 router
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
