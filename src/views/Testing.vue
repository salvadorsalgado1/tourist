<template>
<div class="test container">
  <h2>testing route: {{this.$route.params.slug}}</h2>
  <p class="lead">This is what is returned from "fetch". Fetch is a built in Javascript method somewhat like Axios <br/>{{this.sampleData}}</p>
  <hr/>
  <p><strong>ID:</strong>{{this.sampleData.id}}</p>
  <p><strong>Title:</strong> {{this.sampleData.title}}</p>
  <p><strong>Body:</strong> {{this.sampleData.body}}</p>
</div>
 
</template>

<script>
export default {
  data(){
    return{
      sampleData:''
    }
  },
mounted(){
   
console.log("Current Slug: ", this.$route.params.slug)

/*  
 fetch(`https://jsonplaceholder.typicode.com/posts/${this.$route.params.slug}`)
  .then(response => response.json())
  .then(json => console.log(json))
*/
  fetch(`https://jsonplaceholder.typicode.com/posts/${this.$route.params.slug}`)
  .then(response => response.json())
  .then(json => {
    this.sampleData = json;
    console.log(json)
  })

  
 
}
}
</script>

<style>

</style>