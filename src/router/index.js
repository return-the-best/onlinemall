import Vue from 'vue'
import VueRouter from 'vue-router'
const home  = () => import('views/home/home')
const shopcart  = () => import('views/shopcart/shopcart')
const category = () => import('views/category/category')
const profile  = () => import('views/profile/profile')
const detail = ()=>import('views/detail/detail')
Vue.use(VueRouter)

const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component:home
  },
  {
    path:'/shopcart',
    component:shopcart
  },
  {
    path:'/category',
    component:category
  },
  {
    path:'/profile',
    component:profile
  },
  {
    path:'/detail',
    component:detail
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
