import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import contacts from 'components/contacts/contacts'
import notice from 'components/notice/notice'
import life from 'components/life/life'
import me from 'components/me/me'

import invite from 'components/me/invite'
import register from 'components/me/register'
import carDetail from 'components/detail/car-detail'
import socialDetail from 'components/detail/social-detail'
import tradeDetail from 'components/detail/trade-detail'
import storeDetail from 'components/detail/store-detail'
import storeInside from 'components/detail/store-inside'
import storeInfo from 'components/detail/store-info'
import areaDetail from 'components/detail/area-detail'

export default new Router({
  // mode: 'history',
  routes: [
    // {
    //   path: '/',
    //   redirect: '/contacts'
    // },
    {
      path: '/contacts',
      component: contacts
    },
    {
      path: '/notice',
      component: notice
    },
    {
      path: '/life',
      component: life,
      childred: [
        {
          path: '/car-detail',
          component: carDetail
        }
      ]
    },
    {
      path: '/me',
      component: me
    },
    {
      path: '/invite',
      component: invite
    },
    {
      path: '/register',
      component: register
    },
    {
      path: '/trade-detail',
      component: tradeDetail
    },
    {
      path: '/store-detail',
      component: storeDetail
    },
    {
      path: '/store-inside',
      name: 'store-inside',
      component: storeInside
    },
    {
      path: '/store-info',
      component: storeInfo
    },
    {
      path: '/social-detail',
      component: socialDetail
    },
    {
      path: '/car-detail',
      component: carDetail
    },
    {
      path:'/area-detail',
      component: areaDetail
    }
  ]
})
