import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import CategoryCreate from '../src/components/Category/CategoryCreate.vue'
import CatogoryList from '../src/components/Category/CatogoryList.vue'
import PostList from '../src/components/Post/PostList.vue'
import PostCreate from '../src/components/Post/PostCreate.vue'
import Login from '../src/components/User/Login.vue'
import UserList from '../src/components/User/UserList.vue'
import UserCreate from '../src/components/User/UserCreate.vue'

Vue.use(Router)

const router = new Router({
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
        {path:'/users/lists',name:'UserList',component:UserList},
        {path:'/users/create',name:'UserCreate',component:UserCreate},
        {path:'/users/edit/:id',name:'UserEdit',component:UserCreate,props:true},
      ]
    },
    {
      path:'/login',
      name:'adminlogin',
      component:Login,
      meta:{isPablic:true}
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})

router.beforeEach((to,from,next)=>{
  if(!to.meta.isPablic && !localStorage.token){
    return next('/login')
  }
  next()
})

export default router