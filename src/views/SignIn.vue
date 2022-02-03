<template>
  <div class="sign-in">
    <div class="container container-sign-in">
      <div class="card card-sign-in" style="width: 18rem;">
        <div class="card-body">
          <form @submit.prevent="submitSignIn">
            <h1 class="h1-card">Sign In</h1>
             <div class="mb-3">
              <label for="InputEmail" class="form-label">Email address</label>
              <input v-model="email" type="email" class="form-control" id="InputEmail" aria-describedby="emailHelp">
             </div>
            <div class="mb-3">
              <label for="InputPassword1" class="form-label">Password</label>
              <input v-model="password" type="password" class="form-control" id="InputPassword1">
            </div>
             
            <button type="submit" class="btn btn-dark btn-block">Sign In</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name:'SignIn',
data(){
  return{
    email:'',
    password:''
  }
},
methods:{
  submitSignIn(){
    //console.log(this.email, this.password)
    let login = {email: this.email, password: this.password}
    this.$store.dispatch('loginUser', login);
     
    this.$router.push({name:'Home'});
    
      //console.log("unsuccessful login");
     
  },
  computed:{
    getUser(){
      let user = this.$store.state.user;
      return user;
    }
  }
}
 
}
</script>

<style>
.h1-card{
  font-size:1.2em;
}
.container-sign-in {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
.card-sign-in{
   
  margin: 0 auto;
  float: none; 
  margin-bottom: 10px;
}
</style>