<template>
  <div class="registration ">
    <div class="container">
      <div class="card mt-5">
      <div class="card-body">
        <div class="row">
          
          <div class="col-4">
            
            <img class="rounded-circle sign-up-img" src="@/assets/backgrounds/mountain.jpg" alt=""/>
            <ul class="mt-5 nav nav-pills mb-3 justify-content-center" id="pills-tab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Home</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Profile</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Contact</button>
          </li>
        </ul>
          </div>
          <div class="col-8">
            <h1>Sign Up</h1>
        <div class="tab-content" id="pills-tabContent">
          <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab"><Account/></div>
          <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab"><Details/></div>
          <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">...</div>
        </div>
        </div>
        </div> 
      </div>
    </div>
    </div>
    
  </div>
</template>

<script>
import Account from '../components/Registration/Account'
import Details from '../components/Registration/Details'
export default {
components:{Account, Details},
name:'Registration',
data(){
  return{
     
  }
},

}
</script>

<style>
.registration{
  height:100%;
}
 
.sign-up-img{
  width:80%;
}
 
</style>