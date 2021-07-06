/*
 * @Author: XiaozhenChen
 * @Date: 2021-07-06 11:58:37
 * @LastEditTime: 2021-07-06 12:18:02
 * @LastEditors: Please set LastEditors
 * @Description: 默认路由
 * @FilePath: \project\src\routers\default.js
 */

//  引入组件
import Index from '../components/Index.vue'

// 定义路由对象数组
const routers = [
  {
    path: '/',
    component: Index
  }
]

export default routers