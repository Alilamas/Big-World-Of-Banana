import { createRouter, createWebHistory } from 'vue-router'
import routes from './router' //引用路由的详细配置文件


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
