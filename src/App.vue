<template>
  <div v-if="this.$route.name !='Landing' && this.$route.name !='Details'">
    <div v-if="!isLogged"><Navbar/></div>
    <div v-if="isLogged"><NavbarLogged/></div>
  </div>
  <router-view/>
</template> 
<script>
import Navbar from './components/Navbar'
import NavbarLogged from './components/NavbarLogged'
export default {
components:{Navbar, NavbarLogged},
mounted(){
  //When refresh, or user is not logged, route to Sign In page.
  if(this.$store.state.userID==null){
    this.$router.push({name:'Home'})
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
section{
  display:block;
}
 body{
   background-color:rgb(238, 250, 255);
   height:100%;
 }
.gray-text{
  color:gray;
}
.white-text{
  color:white;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}


</style>
