import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../components/Main'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    children: [
      {
        path: '/cateList',
        name: 'cateList',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/category/list')
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
