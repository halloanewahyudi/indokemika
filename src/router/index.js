
import { createRouter, createWebHistory } from 'vue-router';
const routes = [
  { path: '/',
    name:'Home',
     component: () => import('../pages/Home.vue') },
  { path: '/alt',
    name:'Home 2',
    component: () => import('../pages/HomeTwo.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router