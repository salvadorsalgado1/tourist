import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Landing from '../views/Landing'
import Profile from '../views/Profile'
 
import Registration from '../views/Registration'

 
import Account from '../views/Account'
 const routes = [
 
  {
    path: '/',
    name: 'Landing',
    component: Landing,
    props:true
  }, 
  //New paths go below this line -------
  {
    path: '/home',
    name: 'Home',
    component: Home,
    props:true
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    props:true
  },
  {
    path: '/account',
    name: 'Account',
    component: Account,
    props:true
  },
 
  {
    path: '/signup',
    name: 'Registration',
    component: Registration,
    props:true
  },
 
   
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
