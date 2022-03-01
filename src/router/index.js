import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Landing from '../views/Landing'
import Profile from '../views/Profile'
import Registration from '../views/Registration' 
import SignIn from '../views/SignIn'
import Account from '../views/Account'
import Testing from '../views/Testing'
import Four from '../views/Four'
import store from '../store/index'
import Search from '../views/Search'
import Test from '../views/Test'
//import Request from '../views/Request'
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
    props:true,
     
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  /*
  {
    path: '/request',
    name: 'Request',
    component: Request,
    props:true,
  },*/
  {
    path: '/profile/:slug',
    name: 'Profile',
    component: Profile,
    props:true,
  },
  {
    path: '/account',
    name: 'Account',
    component: Account,
    props:true,
    meta:{auth:true}
  },
  {
    path: '/signup',
    name: 'Registration',
    component: Registration,
    props:true
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: SignIn,
    props:true,
    meta:{auth:false}
  },
  {
    path: '/search',
    name: 'Search',
    component: Search 
  },
  {
    path: '/test/:slug',
    name: 'Test',
    component: Test 
  },
  {
    path: '/:catchall(.*)',
    name: 'Four',
    component: Four 
  }
 
]

const router = createRouter({
  mode:'history',
  history: createWebHistory(process.env.BASE_URL),
  routes
})

 
router.beforeEach((to, from, next)=>{
  if(to.meta.auth && !store.state.loggedIn){
    next('/home')
  }else{
    next();
  }
})
 

export default router
