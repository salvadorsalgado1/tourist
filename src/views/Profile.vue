<template>
  <div class="profile">
      <div class="container mb-4">
          <div class="row mt-4">
              <div class="col-md-8 mb-4">
                <ProfileHeader :fullName="userData.fullName" :description="userData.introText"/>
              </div>
              <div class="button-for-profile">
                  <button @click="reserve(userData.userID)" class="btn btn-primary">Schedule Tour</button>
              </div>
              <div class="col-md-4 col-sm-8 mb-4">
                        <SocialMedia 
                            :twitter="userData.twitter"
                            :facebook="userData.facebook"
                            :instagram="userData.instagram"
                            :mail="userData.mail"
                            :tiktok="userData.tiktok"
                            :youtube="userData.youtube"
                        />
                </div>
            </div>
            <div class="row">
                <div class="col-md-6 col-sm-12 mb-4">
                    <div class="col-md-12 mb-4">
              <Details 
                    :location="userData.location" 
                    :age="userData.age" 
                    :languageSpoken="userData.language_spoken"
                    :food="userData.favorite_food" />
                    </div>
                    <div class="col-md-12 mb-4">
                        <Ratings />
                    </div>
                    <div class="col-md-12 mb-4">
                        <Contact/>
                    </div>
                </div>
                <div class="col-md-6 col-sm-12">
                    
                    <div class="col-md-12 mb-4">
                        <ProfileReviews/>
                    </div>
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
import SocialMedia from '../components/SocialMedia'
import Contact from '../components/Contact'
export default {
    name:'Profile',
components:{
    ProfileReviews, Ratings, Details, ProfileHeader, Contact, SocialMedia
},
data(){
    return{
        profileImage:null
    }
},
methods:{
    reserve(user){
        console.log(user)
    }
},
computed:{
    userData(){
        console.log("computed")
        let user = this.$store.state.profile
         console.log(user)
        return user;
    },
},
mounted(){
    //get profile detail
    console.log("mounted")
    let slug = this.$route.params.slug
    this.$store.dispatch('getProfile', slug);
}
 
}
</script>

<style>
.heading-name{
    font-size:1.8em;
}
</style>