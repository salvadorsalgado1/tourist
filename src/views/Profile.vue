<template>
  <div class="profile">
      <div class="container">
          <div class="row mt-4">
              <div class="col-md-8 mb-4">
                <ProfileHeader/>
              </div>
            </div>
            <div class="row">
                <div class="col-md-6 col-sm-12 mb-4">
                    <div class="col-md-12 mb-4">
                        <Details/>
                    </div>
                    <div class="col-md-12 mb-4">
                        <Ratings/>
                    </div>
                    <div class="col-md-12 mb-4">
                        <Contact/>
                    </div>
                </div>
                <div class="col-md-6 col-sm-12">
                    <ProfileReviews/>    
                </div>
          </div> 
      </div>
  </div>
</template>

<script>
import ProfileHeader from '../components/ProfileHeader'
import Ratings from '../components/Ratings'
import ProfileReviews from '../components/ProfileReviews'
import Details from '../components/Details'
import Contact from '../components/Contact'
export default {
components:{
    ProfileReviews, Ratings, Details, ProfileHeader, Contact
}
}
</script>

<style>
.heading-name{
    font-size:1.8em;
}
.profile-img{
    width:45%;
}
</style>