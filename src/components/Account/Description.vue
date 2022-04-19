<template>
  <h2>Change Description</h2>
  <form @submit.prevent="submitDescription">
    <div class="mb-3">
      <label for="exampleFormControlTextarea1" class="form-label">Enter your Description</label>
      <textarea placeholder="Description" v-model="description" class="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
      <button class="mt-3 btn btn-primary">Submit</button>
    </div>
  </form>
  <DangerAlert v-if="this.alertStatus" class="mt-2" :text="this.feedback"/>
  <SuccessAlert v-if="this.successStatus" class="mt-2" :text="this.feedback"/>
</template>

<script>
import DangerAlert from '../Alerts/DangerAlert'
import SuccessAlert from '../Alerts/SuccessAlert'
export default {
  components:{DangerAlert, SuccessAlert},
data(){
  return{
    description:null,
    alertStatus:false,
    feedback:'',
    successStatus:false
  }
},
methods:{
  clearData(){
    this.description=null;
  },
  error(feedback){
    this.alert=true;
    this.feedback=`${feedback}`;
    this.clearData()
  },
 success(feedback){
    this.successStatus=true;
    this.feedback=`${feedback}`;
    this.clearData();
    setTimeout(()=>{
      this.successStatus=false;
    }, 3000)
  },
  submitDescription(){
    console.log(this.description)
    let user = {id:this.getUserID, description:this.description};
    console.log(user)
     if(this.description == null){
      this.error("Description area can't be blank.")
    }else{
      this.$store.dispatch("submitDescription", user);
      this.success("Success! Visit your profile to view your changes.");
    } 
  },
   
},
computed:{
  getUserID(){
    return this.$store.state.user.userID;
  }
}

}
</script>

<style>

</style>