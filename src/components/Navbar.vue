<template>
  <div class="navigation">
      <nav class="navbar navbar-expand-lg navbar-dark" style="background-color:rgb(235, 141, 134)">
    <div class="container-fluid">
    <router-link class="navbar-brand" :to="{name:'Landing'}">
      <img src="../assets/logos/we-travel/letter-logo-md.png" alt="" class="d-inline-block align-text-top brand-img-nav">
    </router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link active" aria-current="page" :to="{name:'Home'}">Home</router-link>
         </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{name:'About'}">About</router-link>
         </li>
          <li class="nav-item">
          <router-link class="nav-link" :to="{name:'Discover'}">Discover</router-link>
         </li> 
      </ul>
      <ul class="navbar-nav">
        <router-link class="nav-link" :to="{name:'SignIn'}">Sign In</router-link> 
        <span class="nav-link">|</span> 
        <router-link class="nav-link" :to="{name:'Registration'}">Sign Up</router-link>  
      </ul>
    </div>
  </div>
</nav>
  </div>
</template>

<script>
import NavbarLogged from '../components/NavbarLogged'
 export default {
  components:{NavbarLogged},
  data(){
    return{

    }
  },
  computed:{
    isLogged(){
      let status = this.$store.state.loggedIn;
      return status;
    }
  }
}
</script>

<style>
.navbar-dark .navbar-nav .nav-link{
  font-size:1.6em;
}
.brand-img-nav{
    height:40px !important;
    width:auto;
}
.navigation{
     box-shadow:5px 5px 20px 5px rgba(19, 19, 19, 0.562);
}
</style>