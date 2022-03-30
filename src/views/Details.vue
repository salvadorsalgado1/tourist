<template>
  <div class="details-registration">
    <div class="container"> 
        <h2>Welcome!</h2>
        <p>Lets get to know you a bit. Let's start off with a cool introduction to your profile!</p>         
        <div class="row">
        <div class="col-12">
          <div class="card card-sign-in mt-4">
        <div class="card-body">
          <h1 class="h1-card">Sign In</h1>
         <div class="mb-3">
              <label for="InputLanuage1" class="form-label">My Favorite food is:</label>
              <input v-model="suggested" type="text" class="form-control" id="InputLanuage1">
            </div>
          
          <form @submit.prevent="submitSignIn" class="form-group">
            
              
              <div class="mb-3  ">
                <label for="customRange3" class="form-label">I am {{this.age}} years of age.</label>
                <input v-model="age" type="range" class="form-range" min="18" max="70" step="1" id="customRange3">
              </div>
             
            <div class="mb-3">
              <label for="InputLanuage1" class="form-label">My Favorite food is:</label>
              <input v-model="password" type="text" class="form-control" id="InputLanuage1">
            </div>
            <div class="mb-3">
              <label for="languagesspoken1" class="form-label">Languages Spoken are:</label>
              <input v-model="password" type="text" class="form-control" id="languagesspoken1">
            </div>
            <button type="submit" class="btn btn-dark btn-block">Sign In</button>
          </form> 
        </div>
      </div></div>
      </div>
        
     </div>
  </div>
</template>

<script>
export default {
name:'Details',
data(){
  return{
    age:18,
    data:null,
    suggested:null
  }
},
mounted(){
  fetch('./csvjson.json')
  .then(response=>response.json())
  .then(data=>{
    this.data = data;
  })
}
}
</script>

<style>

</style>