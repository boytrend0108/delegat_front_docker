import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TestPage from '../views/TestPage.vue'



const routes = [
  {
    path: '/',
    name: 'home',
    meta: {layout:'start-layout'},
    component: HomeView
  },
  {
    path: '/test',
    name: 'test',
    component: TestPage
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
