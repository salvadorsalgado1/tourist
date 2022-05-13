<template>
  <div class="profile">
      <div class="container mb-4">
          <div class="row mt-4">
              <div class="col-md-8 mb-4">
                <ProfileHeader 
                    :fullName="userData.fullName" 
                    :description="userData.intro"
                    :imageProfile="userData.imageURL"/>
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
                    <div class="col-md-7 mb-4" v-if="userData.twitter || userData.facebook || userData.instagram || userData.mail || userData.tiktok || userData.youtube">
                        <SocialMedia 
                            :twitter="userData.twitter"
                            :facebook="userData.facebook"
                            :instagram="userData.instagram"
                            :mail="userData.mail"
                            :tiktok="userData.tiktok"
                            :youtube="userData.youtube"/>
                        </div>
                </div>
                <div class="col-md-6 col-sm-12">
                    <div class="col-md-12 mb-4">
                        <ProfileReviews/>
                    </div>
                </div>
          </div> 
          
      </div>
  </div><Toast/>
</template>

<script>
import Toast from '../components/Toast'
import ProfileHeader from '../components/ProfileHeader'
import Ratings from '../components/Ratings'
import ProfileReviews from '../components/ProfileReviews'
import Details from '../components/Details'
import SocialMedia from '../components/SocialMedia'
import Contact from '../components/Contact'
export default {
    name:'Profile',
components:{
    ProfileReviews, Ratings, Details, ProfileHeader, Contact, SocialMedia, Toast
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
        let user = this.$store.state.profile
        return user;
    },
},
created(){
    console.log("Created")
 //Retrieve user data based on profile endpoint
    //      app.com/profile/(slug)
    //Where slug is a username
    
    let slug = this.$route.params.slug
    // let slug = "one-wish"
    this.$store.dispatch('getProfile', slug);
},
mounted(){
   console.log("mounted")
}
 
}
</script>

<style>
 
.heading-name{
    font-size:1.8em;
}
</style>