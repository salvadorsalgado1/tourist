<template>
  <div class="profile-reviews">
      <div class="card shadow">
          <div class="card-body">
              <h2>Check out my Reviews!</h2>
               <SubmitReview/>
              <hr/>
              <ul class="list-group list-group-flush text-start">
                <li v-for="rev in getReviews" :key="rev" class="list-group-item mt-3">
                 <Reviews :name="rev.fullName"
                          :review="rev.review" 
                          :stars="rev.rating"
                          :dates="rev.reviewDate"
                          image="review-portrait-four"/> 
                 </li>
            </ul>
          </div>
      </div>
  </div>
</template>

<script>

import Reviews from '../components/Reviews';
import SubmitReview from '../components/SubmitReview'
export default {
components:{Reviews, SubmitReview},
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