<template>
  <div class="password-forget">
      <!--
            we.travel.around.solutions@gmail.com
            WeTravel101!
          -->
      <div class="password-card container mt-3">
          <div class="card">
              <div class="card-body">
                <h2>Forgot Password?</h2>
                <form @submit.prevent="submitEmail">
                <div class="mb-3">
                <label for="InputEmail" class="form-label">Email address</label>
                <input v-model="email" type="email" class="form-control" id="InputEmail" aria-describedby="emailHelp">
                </div>
                <p v-if="emailSuccess" class="success-email">Success! Email has been sent.</p>
                <button type="submit" class="btn btn-dark btn-block">Send Password</button>
                </form>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import SuccessAlert from '../components/Alerts/SuccessAlert'
export default {
    components:{SuccessAlert},
    data(){
        return{
            email:''
        }
    },
    computed:{
        emailSuccess(){
            return this.$store.state.emailSent
        }
    },
    methods:{
        submitEmail(){
            this.$store.dispatch('retrievePassword', this.email);
            setTimeout(()=>{
                this.$router.push({name:'SignIn'})
            }, 3000)
        }
    }
}
</script>

<style>
.success-email{
    color:green
}
.password-card{
    max-width:25em;
}
</style>