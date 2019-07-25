import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import List from '../src/components/List.vue'
import Blog from '../src/components/Blog.vue'
import Category from '../src/components/Category.vue'
import CategoryList from '../src/components/CategoryList.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children:[
        {path:'/',name:'blog_list',component:List},
        {path:'/about',name:'about',component:About},
        {path:'/categories',name:'categories',component:Category},
        {path:'/categories/:id',name:'categorylist',component:CategoryList,props:true},
        {path:'/blog/:id',name:'blog',component:Blog,props:true}
      ]
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
