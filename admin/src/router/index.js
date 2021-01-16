import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../components/Main'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Main,
    children: [
      {
        path: '/',
        name: 'Home',
        type:'home',
        title:'主页',
        component: () => import(/* webpackChunkName: "about" */ '../views/Home')
      },
      {
        path: '/cateList',
        name: 'cateList',
        type:'appstore',
        title:'分类',
        component: () => import(/* webpackChunkName: "about" */ '../views/category/list')
      },
      {
        path: '/article',
        name: 'article',
        type:'highlight',
        title:'博客',
        component: () => import(/* webpackChunkName: "about" */ '../views/blog/list.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login')
  }
]

const router = new VueRouter({
  routes
})

export default router
