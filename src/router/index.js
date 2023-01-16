import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    meta: {layout:'start-layout'},
    component: HomeView
  },
  {
    path: '/application',
    name: 'application',
    meta: {layout:'main-layout'},
    component: () => import('../views/ApplicationPage.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'login',
    meta: {layout:'main-layout'},
    component: () => import ('../views/LoginPage.vue') 
  },
  {
    path: '/register',
    name: 'register',
    meta: {layout:'main-layout'},
    component: () => import ('../views/RegisterPage.vue') 
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
