import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Landing from '../views/Landing'

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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
