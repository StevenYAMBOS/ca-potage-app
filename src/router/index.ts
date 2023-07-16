import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/HomeScreen.vue')
    },
    {
      path: '/signin',
      name: 'SignIn',
      component: () => import('../views/SignIn.vue')
    },
    {
      path: '/login',
      name: 'Log-in',
      component: () => import('../views/Log-in.vue')
    },
    {
      path: '/roles',
      name: 'ChooseARole',
      component: () => import('../views/ChooseARole.vue')
    },
    {
      path: '/search',
      name: 'SearchBar',
      component: () => import('../components/SearchBar.vue')
    }
  ]
})

export default router
