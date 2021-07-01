import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Index.vue'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/admin',
    component: () => import('@/views/DashBoard.vue'),
    children: [
      {
        path: 'products',
        component: () => import('@/views/admin/Products.vue')
      },
      {
        path: 'orders',
        component: () => import('@/views/admin/Orders.vue')
      },
      {
        path: 'coupons',
        component: () => import('@/views/admin/Coupons.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
