<template>
  <div class="test">
      <h1>Testing the app</h1>
      <p>Saving pressing save</p>
      <button @click="testingButton" class="btn btn-primary">Button</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
name:'Test',
methods:{
    testingButton(){
        console.log("something")
    }
},
mounted(){
    console.log("Mounted");
    let slugURL = this.$route.params.slug;
    axios.get(`/api/profile/${slugURL}`)
    .then(response=>{
        console.log(response.data);
    })
    console.log(slugURL)
}
}
</script>

<style>

</style>