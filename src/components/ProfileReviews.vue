<template>
  <div class="profile-reviews">
      <div class="card shadow">
          <div class="card-body">
              <h2>Check out my Reviews!</h2>
              <ul class="list-group list-group-flush text-start">
                <li v-for="rev in getReviews" :key="rev" class="list-group-item mt-3">
                 <Reviews name="Cynthia Tayllor"
                          :review="rev.review" 
                          :stars="rev.rating" 
                          image="review-portrait-four"/> 
                 </li>
            </ul>
          </div>
      </div>
  </div>
</template>

<script>

import Reviews from '../components/Reviews';
export default {
components:{Reviews},
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
mounted(){
 }
}
</script>

<style>
 
 
</style>