
import { createPinia } from 'pinia';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../pages/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../pages/about/Index.vue'),
    children: [
      {
        path: '/about/overview',
        name: 'Company Overview',
        meta: {
          title: 'Company Overview',
          banner: '/slide-1.jpg'
        },
        component: () => import('../pages/about/OverView.vue')
      },{
        path: '/about/milestone',
        name: 'Milestone',
        meta: {
          title: 'Milestone',
          banner: 'https://images.unsplash.com/photo-1584907600929-06a5fcdff2ca?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        component: () => import('../pages/about/Milestone.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  }
})

export default router