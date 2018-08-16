import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/login/login'
import BrandList from '@/pages/brand/list'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login/login',
      name: 'login',
      component: Login
    },
    {
      path: '/brand/list',
      name: 'brandList',
      component: BrandList
    }
  ]
})

