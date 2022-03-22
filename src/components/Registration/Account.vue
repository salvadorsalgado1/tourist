<template>
  <div class="account">
     
        <form @submit.prevent="submitRegistration">
             
            <div class="row">
              <div class="col-sm-12 col-lg-6"><div class="form-group">
                <label>Full Name</label>
                <input v-model="fullName" type="text" minlength="6" maxlength="40" class="form-control form-control-lg"/>
            </div></div>
              <div class="col-sm-12 col-lg-6"><div class="form-group">
                <label>Username</label>
                <input v-model="userName" type="text" minlength="6" maxlength="20" class="form-control form-control-lg"/>
            </div></div>
            </div>
            <div class="row">
              <div class="col-12"><div class="form-group">
                <label>Email</label>
                <input v-model="email" type="email" minlength="6" maxlength="40" class="form-control form-control-lg" />
            </div></div>
              <div class="col-12"><div class="form-group">
                <label>Password</label>
                <input v-model="password" minlength="6" type="password" class="form-control form-control-lg" />
            </div></div>
            </div> 
            <button type="submit" class="btn btn-dark btn-lg btn-block mt-3">Sign Up</button>
        </form>
    <SignUpModal v-if="alert" class="mt-2" :text="this.feedback"/>
  </div>
</template>
<script>
import SignUpModal from '../SignUpModal'
export default {
  components:{SignUpModal},
data(){
  return{
    fullName:'',
    userName:'',
    email:'',
    password:'',
    feedback:'',
    alert:false
  }
},
methods:{
  clearData(){
    this.fullName='';
    this.userName='';
    this.email='';
    this.password='';
  },
  error(feedback){
    this.alert=true;
    this.feedback=`${feedback}`;
    this.clearData()
  },
  submitRegistration(){
    let slug = this.userName.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
    console.log(this.fullName, this.userName, this.email, this.password)
    
    if(this.fullName == '' || this.userName == '' 
    || this.email == '' || this.password == ''){ 
      this.error('Fields cannot be blank.')
    }else{
      //create User
      let user = {
        fullName:this.fullName,
        userName:this.userName,
        email:this.email,
        password:this.password
      }
      this.$store.dispatch('createUser', user)
    }
  }
}
}
</script>

<style>

</style>