<template>
  <div class="details-registration">
    <div class="container"> 
        <h2>Welcome!</h2>
        <p>Lets get to know you a bit. Let's start off with a cool introduction to your profile!</p>         
        <div class="row">
        <div class="col-12">
          <div class="card card-sign-in mt-4">
        <div class="card-body">
          <h1 class="h1-card">More About You</h1>
           <form @submit.prevent="submitDetails" class="form-group">
             <div class="mb-3">
              <label for="InputCity" class="form-label">City</label>
              <input v-model="city" type="text" class="form-control" id="InputCity">
            </div>
            <div class="mb-3">
                <label for="InputState" class="form-label">State/Province</label>
              <input v-model="state" type="text" class="form-control" id="InputState">
            </div>
            <div class="mb-3">
              <label for="InputCountry" class="form-label">Country</label>
              <input v-model="country" type="text" class="form-control" id="InputCountry">
            </div>
             <div class="mb-3">
                <label for="customRange3" class="form-label">I am <span class="curr-age">{{this.age}}</span> years of age.</label>
                <input v-model="age" type="range" class="form-range" min="18" max="70" step="1" id="customRange3">
              </div>
          
          <div class="mb-3">
              <label for="languagesspoken1" class="form-label">Languages Spoken</label>
              <input v-model="languages" type="text" class="form-control" id="languagesspoken1">
            </div> 
            <div class="mb-3">
              <label for="InputLanuage1" class="form-label">My Favorite food is:</label>
              <input v-model="foods" type="text" class="form-control" id="InputLanuage1">
            </div>
            <button type="submit" class="btn btn-dark btn-block">Finish Registration</button>
          </form>
              <SignUpModal v-if="alert" class="mt-2" :text="this.feedback"/>
        </div>
      </div></div>
      </div>
     </div>
  </div>
</template>

<script>
import SignUpModal from '../components/SignUpModal'
export default {
components:{SignUpModal},
name:'Details',
data(){
  return{
    city:null,
    country:null,
    age:18,
    foods:null,
    feedback:'',
    languages:null,
    data:null,
    alert:false,
    state:null
  }
},
methods:{
  clearData(){
    this.city=null;
    this.country=null;
    this.age=null;
    this.foods=null;
    this.languages=null;
    this.state=null;
  },
  error(feedback){
    this.alert=true;
    this.feedback=`${feedback}`;
    this.clearData()
  },
  submitDetails(){
    let location = `${this.city}, ${this.state},${this.country}`;
    console.log("------Start--------");
    console.log("City, Country", location);
    console.log("Age: ", this.age);
    console.log("Languages: ", this.languages);
    console.log("Foods: ", this.foods);
    console.log("------End--------");
    if(this.city == null || this.country == null || this.age == null || this.languages == null || this.foods == null){
      this.error('Fields cannot be blank!')
    }else{
      let details = {id:this.$store.state.userID, location:location, age:this.age, food:this.foods, language:this.languages}
      this.$store.dispatch("submitDetails", details)
    }

  }
},
mounted(){
  /*
  fetch('./csvjson.json')
  .then(response=>response.json())
  .then(data=>{
    this.data = data;
  })*/
}
}
</script>

<style>
.curr-age{
  font-size:1.4em;
}
</style>