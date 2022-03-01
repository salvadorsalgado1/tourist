<template>
  <div class="account">
      <div class="mt-4">
        <h2>Account Settings</h2>
        <div class="card account-card">
          <div class="card-body">
             <div class="d-flex align-items-start ">
            <div class="menu-pill-items nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
            <button class="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Profile Image</button>
            <button class="nav-link" id="v-pills-description-tab" data-bs-toggle="pill" data-bs-target="#v-pills-description" type="button" role="tab" aria-controls="v-pills-description" aria-selected="false">Description</button>
            <button class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Details</button>
            <button class="nav-link" id="v-pills-socials-tab" data-bs-toggle="pill" data-bs-target="#v-pills-socials" type="button" role="tab" aria-controls="v-pills-socials" aria-selected="false">Edit Socials</button>
            </div>
            <div class="tab-content" id="v-pills-tabContent">
            <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
              <ImageUpload/>
            </div>
            <div class="tab-pane fade" id="v-pills-description" role="tabpanel" aria-labelledby="v-pills-description-tab">
              <Description/>
            </div>
            <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messagess-tab">
              <Details/>
            </div>
            <div class="tab-pane fade" id="v-pills-socials" role="tabpanel" aria-labelledby="v-pills-socials-tab">
              <Socials/>
            </div>
            </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import ImageUpload from '../components/Account/ImageUpload'
import Description from '../components/Account/Description'
import Details from '../components/Account/Details'
import Socials from '../components/Account/Socials'
export default {
  name:'Account',
  components:{ImageUpload, Description, Details, Socials},
  computed:{
    profile(){
      return this.$store.state.profile
    }
  }
}
</script>

<style>
#v-pills-profile-tab,
.menu-pill-items{
  background-color:rgb(155, 207, 255);
  padding:20px;
  border-radius:20px;
  color:white;
}
 .account{
   margin: 20px 20px; 
 }
 .account-card{
   border-radius:20px 20px;
 }
</style>