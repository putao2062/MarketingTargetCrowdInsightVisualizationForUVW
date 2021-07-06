/*
 * @Author: XiaozhenChen
 * @Date: 2021-07-06 11:50:20
 * @LastEditTime: 2021-07-06 12:02:37
 * @LastEditors: Please set LastEditors
 * @Description: 路由的配置文件
 * @FilePath: \project\src\routers\index.js
 */

import VueRouter from 'vue-router' 
import routers from'./default.js'

//实例化路由对象 
const router = new VueRouter({
  mode: 'history',
  routes: routers
})

export default router