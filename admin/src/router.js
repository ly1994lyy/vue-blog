import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import CategoryCreate from '../src/components/Category/CategoryCreate.vue'
import CatogoryList from '../src/components/Category/CatogoryList.vue'
import PostList from '../src/components/Post/PostList.vue'
import PostCreate from '../src/components/Post/PostCreate.vue'
import Login from '../src/components/User/Login.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect:'/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children:[
        {path:'/categories/lists',name:'categoryLists',component:CatogoryList},
        {path:'/categories/create',name:'categoryCreate',component:CategoryCreate},
        {path:'/categories/edit/:id',name:'categoryEdit',component:CategoryCreate,props:true},
        {path:'/posts/lists',name:'postLists',component:PostList},
        {path:'/posts/create',name:'postCreate',component:PostCreate},
        {path:'/posts/edit/:id',name:'postEdit',component:PostCreate,props:true},
      ]
    },
    {
      path:'/admin/login',
      name:'adminlogin',
      component:Login
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
