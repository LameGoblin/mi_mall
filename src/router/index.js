import Vue from 'vue'
import Router from 'vue-router'
import HomeContainer from '@/components/HomeContainer.vue'
import TopBarContainer from '@/components/tabbar/TopBarContainer.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: HomeContainer
    },
    {
      path: '/topbar',
      component: TopBarContainer
    }
  ]
})
