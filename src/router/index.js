import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/all-posts',
      name: 'all-posts',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/config-service',
      name: 'config-service',
      component: () => import('../views/configuration/ServiceConfiguration.vue')
    },
    {
      path: '/categories',
      name: 'categories',
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
