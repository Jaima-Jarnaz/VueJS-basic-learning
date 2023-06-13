import { createRouter, createWebHistory } from 'vue-router'
import Main from '../pages/Main.vue'
import ProductCreate from '../pages/admin/ProductCreate.vue'
import ProductView from '../pages/admin/ProductView.vue'
import Admin from '../pages/admin/Admin.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: Main
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin,
      children: [
        {
          path: 'products/create',
          component: ProductCreate,
          name: 'product_create'
        },
        {
          path: 'products/view',
          component: ProductView,
          name: 'product_view'
        }
      ]
    }
  ]
})

export default router
