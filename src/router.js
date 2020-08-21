import VueRouter from 'vue-router'

const router = new VueRouter({
  mode: 'history', // history模式没有 # 号
  routes:[  // 路由
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: () => import('./components/tarbar/HomeContainer.vue')
    },
    {
      path: '/member',
      component: () => import('./components/tarbar/MemberContainer.vue')
    },
    {
      path: '/shoppingcar',
      component: () => import('./components/tarbar/ShoppingCarContainer.vue')
    },
    {
      path: '/search',
      component: () => import('./components/tarbar/SearchContainer.vue')
    }
  ],
  linkActiveClass: 'mui-active'  // 覆盖了默认高亮路由的类，默认的类叫做router-link-active
})

// 把路由对象暴露出去
// 这行代码必须要写，不写main.js无法访问到router
export default router
