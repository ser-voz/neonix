import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FrensView from '../views/FrensView.vue'
import EarnView from '../views/EarnView.vue'
import BoostsView from '../views/BoostsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/frens',
      name: 'frens',
      component: FrensView,
    },
    {
      path: '/earn',
      name: 'earn',
      component: EarnView
    },
    {
      path: '/boosts',
      name: 'boosts',
      component: BoostsView
    }
  ]
})

export default router
