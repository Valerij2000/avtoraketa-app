import {
  createRouter,
  createWebHistory
} from 'vue-router'
import HomeView from '../pages/Home.vue'
// import { getAuth } from 'firebase/auth'

// router.beforeEach((to) => {
//   const user = getAuth().currentUser
//   if (to.meta.requiresAuth && !user) return '/login'
// })

const router = createRouter({
  history: createWebHistory(
    import.meta.env.BASE_URL),
  routes: [{
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../pages/About.vue'),
    },
    {
      path: '/apply',
      name: 'Apply',
      component: () => import('../pages/Apply.vue')
    },
    {
      path: '/success',
      name: 'Success',
      component: () => import('../pages/Success.vue')
    },
    {
      path: "/profile",
      name: "Profile",
      component: () => import("../pages/Profile.vue"),
    }
  ],
})

export default router