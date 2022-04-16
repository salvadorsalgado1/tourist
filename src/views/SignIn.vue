<template>
  <div class="sign-in">
    <div class="container container-sign-in">
      <div class="row">
        <div v-if="this.error" class="col-12">
          <FailedLogin class="mt-4 sign-in-message-danger" text="Sorry, we couldn't find an account with that username. Please try again."/>
        </div>
        <div v-if="this.success" class="col-12">
          <SuccessLogin class="mt-4 sign-in-message-danger" text="Login Success! "/>
        </div>
        <div class="col-12">
          <div class="card card-sign-in mt-4">
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
      </div></div>
      </div>
    </div>
  </div>
</template>

<script>
import FailedLogin from '../components/Alerts/DangerAlert.vue'
import SuccessLogin from '../components/Alerts/SuccessAlert.vue'
export default {
name:'SignIn',
components:{FailedLogin, SuccessLogin},
data(){
  return{
    email:'',
    password:'',
    error:false,
    success:false
  }
},
methods:{
  submitSignIn(){
    //console.log(this.email, this.password)
    let login = {email: this.email, password: this.password}
    let errorLogin = this.$store.state.errorLogin; //initial false, will be true after error
    this.$store.dispatch('loginUser', login);
     
    
    if(!errorLogin){
       
      console.log("ErrorLogin")
      this.status=true;
      console.log(this.status)
      setTimeout(()=>{
        this.status=false;
      },4000)
    }else{
      this.success=true;
      
      setTimeout(()=>{
        this.$router.push({name:'Home'})
      }, 1000)
      
    }
  },
},
computed:{
  getStatus(){
    let status = this.$store.state.errorLogin
    return status
  }
}
 
}
</script>

<style>
.h1-card{
  font-size:1.2em;
}
 .card-sign-in, .sign-in-message-danger{
 max-width:25em;
 }
.card-sign-in, .sign-in-message-danger{
  margin: 0 auto;
  float: none; 
  margin-bottom: 10px;
 
}
</style>