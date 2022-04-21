<template>
  <h2>Discover</h2>
  <div class="container">
    <div class="row">
    <div class="col-md-6 col-lg-4" v-for="(user, index) in allUsers" :key="index">
      <DiscoverCard 
        :imageURL="user.imageURL"
        :name="user.fullName" 
        :userURL="user.slug" 
        :location="user.location" 
        :age="user.age" 
        :language="user.language_spoken" />
  </div>
  </div>
  </div>
  
 
</template>

<script>
import DiscoverCard from '../components/DiscoverCard'
export default {
  components:{DiscoverCard},
data(){
  return{

  }
},
mounted(){
  this.$store.dispatch('discoverUsers');
},
computed:{
  allUsers(){
    return this.$store.state.discover
  }
}
}
</script>

<style>

</style>