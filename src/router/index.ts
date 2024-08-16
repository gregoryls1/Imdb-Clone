import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home/Home.vue'
import MediaDetails from '../views/MediaDetails/MediaDetails.vue'
import ListSearch from '../views/ListSearch/ListSearch.vue'

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/movie/:id',
      name: 'movieDetails',
      component: MediaDetails,
    },
    {
      path: '/tv/:id',
      name: 'tvDetails',
      component: MediaDetails,
    },
    {
      path: '/search',
      name: 'listSearch',
      component: ListSearch,
    },
  ],
})

export default router
