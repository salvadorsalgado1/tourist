<template>
  <div class="about-us">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data(){
    return{

    }
  },
  mounted(){
    console.log("Mounted");
    axios.get('http://localhost:5000/api/register/')
    .then(response=>{
      console.log(response.data);
    })
  }
}
</script>
<style>

</style>