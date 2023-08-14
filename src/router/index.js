import { createRouter, createWebHistory } from 'vue-router'
import nomena from '@/components/nomena.vue'

const routes = [
  {
    path: '/',
    name: 'nomena',
    component: nomena
  },
  {
    path: '/sign-up',
    name: 'signup',
    component : () => import('@/components/signup')
  },
  {
    path : '/delete',
    name : 'del',
    component : () => import('@/components/delete')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
