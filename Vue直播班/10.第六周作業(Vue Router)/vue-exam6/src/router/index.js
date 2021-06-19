import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Index.vue'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/products',
    component: () => import('@/views/Products.vue')
  },
  {
    path: '/cart',
    component: () => import('@/views/Cart.vue')
  },
  {
    path: '/admin',
    component: () => import('@/views/DashBoard.vue'),
    children: [
      {
        path: 'login',
        component: () => import('@/views/admin/Login.vue')
      },
      {
        path: 'products',
        component: () => import('@/views/admin/Products.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
