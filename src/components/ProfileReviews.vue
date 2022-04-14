<template>
  <div class="profile-reviews">
      <div class="card shadow">
          <div class="card-body">
              <h2>Check out my Reviews!</h2>
                <Ratings/>
               <SubmitReview/>
              <hr/>
              <ul class="list-group list-group-flush text-start">
                <li v-for="rev in getReviews" :key="rev" class="list-group-item mt-3">
                 <Reviews :name="rev.fullName"
                          :review="rev.review" 
                          :stars="rev.rating"
                          :dates="rev.reviewDate"
                          :image="rev.imageURL"/> 
                 </li>
            </ul>
          </div>
      </div>
  </div>
</template>

<script>

import Reviews from '../components/Reviews';
import SubmitReview from '../components/SubmitReview'
import Ratings from '../components/Ratings'
export default {
components:{Reviews, SubmitReview, Ratings},
data(){
  return{
    
  }
},
computed:{
  getReviews(){
    let review = this.$store.state.reviews;
    return review;
  }
},
methods:{
  
},
mounted(){
 }
}
</script>

<style>
 
 
</style>