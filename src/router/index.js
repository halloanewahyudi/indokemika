
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
      },{
        path:'/about/vision-mission',
        name:'Vission & Mission ',
        meta:{
          title:'Vission & Mission',
          banner:'https://images.pexels.com/photos/752525/pexels-photo-752525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        component:()=>import('../pages/about/VisionMission.vue')
      },
      {
        path:'/about/code-of-conduct',
        name:'Code of Conduct',
        meta:{
          title:'Code of Conduct',
          banner:'https://images.pexels.com/photos/3825368/pexels-photo-3825368.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        component:()=>import('../pages/about/CodeOfConduct.vue')
      },
      {
        path:'/about/logistic-facility',
        name:'Logistic and Facility',
        meta:{
          title:'Logistic and Facility',
          banner:'https://images.pexels.com/photos/6407587/pexels-photo-6407587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        component:()=>import('../pages/about/LogisticFacility.vue')
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