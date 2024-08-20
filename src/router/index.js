
import { createRouter, createWebHistory } from 'vue-router';
// image
const routes = [
  { path: '/',
    name:'Home',
     component: () => import('../pages/Home.vue') },
  { path: '/about',
    name:'About',
    component:()=>import('../pages/about/Index.vue'),
   children:[
    {
path:'/about/overview',
name:'Company Overview',
meta:{
 title:'Company Overview',
 banner:'/slide-1.jpg'
},
component:()=>import('../pages/about/OverView.vue')
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