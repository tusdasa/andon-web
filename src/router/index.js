import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path:'/user',
      name:"user",
      component: () => import('../views/user/Index.vue'),
      // children:[
      //   {
      //     path:'create',
      //     name:'create',
      //     component: () => import('../views/user/CreateUser.vue')
      //   },
      //   {
      //     path:'update',
      //     name:'update',
      //     component: () => import('../views/user/UpdateUser.vue')
      //   }
      // ]
    },
    {
      path:'/auth/login',
      name:'login',
      component: () => import('../views/auth/Login.vue'),
    }
  ]
})

export default router
