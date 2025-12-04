import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import HomeView from '@/view/HomeView.vue'
import AboutView from '@/view/AboutView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router