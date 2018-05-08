import Vue from 'vue'
import Router from 'vue-router'
import musicLibrary from '@/components/tab/music-library'
import lrc from '@/components/tab/lrc'
import musicList from '@/components/tab/music-list/music-list'
import search from '@/components/search'
import musicListDetail from '@/components/tab/music-list/musicListdetail'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/musicLibrary'
    },
    {
      path: '/search',
      name: '/search',
      component: search
    },
    {
      path: '/musicLibrary',
      name: '/musicLibrary',
      component: musicLibrary
    },
    {
      path: '/musicList',
      name: '/musicList',
      component: musicList
    },
    {
      path: '/musicList/musicListDetail',
      name: '/musicList/musicListDetail/:id',
      component: musicListDetail
    },
    {
      path: '/lrc',
      name: '/lrc',
      component: lrc
    }
  ]
})
