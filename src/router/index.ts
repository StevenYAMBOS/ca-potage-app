import { createRouter, createWebHistory } from 'vue-router'
import LogInVue from '../views/Log-in.vue';
import SignInVue from '../views/SignIn.vue';
import UserProfileVue from '../views/UserProfile.vue';
import ChooseARoleVue from '../views/ChooseARole.vue';
import SearchBarVue from '../components/SearchBar.vue';
import HomeScreenVue from '../views/HomeScreen.vue';
import { getAuth,  onAuthStateChanged} from 'firebase/auth';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeScreenVue,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/signin',
      name: 'SignIn',
      component: SignInVue
    },
    {
      path: '/login',
      name: 'Log-in',
      component: LogInVue
    },
    {
      path: '/roles',
      name: 'ChooseARole',
      component: ChooseARoleVue
    },
    {
      path: '/search',
      name: 'SearchBar',
      component: SearchBarVue
    },
    {
      path: '/profile',
      name: 'UserProfile',
      component: UserProfileVue
    }
  ]
})

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener();
        resolve(user)
      },
      reject
    )
  })
}

router.beforeEach(async(to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (await getCurrentUser()) {
      next();
    } else {
      alert("Vous n'avez pas accès à cette page, créez un compte !");
      next("/signin");
    }
  } else {
    next()
  }
})

export default router
