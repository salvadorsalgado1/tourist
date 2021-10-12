<template>
  <div class="profile-reviews">
      <div class="card shadow">
          <div class="card-body">
              <h2>Check Out What Others Have to Say</h2>
              <ul class="list-group list-group-flush text-start">
                <li v-for="rev in getReviews" :key="rev" class="list-group-item mt-3">
                 <Reviews  :name="rev.name"
                            :review="rev.review" 
                            :stars="rev.stars" 
                            :image="rev.image"/> 
                 </li>
            </ul>
          </div>
      </div>
  </div>
</template>

<script>

import Reviews from '../components/Reviews';
export default {
components:{ Reviews},
data(){
  return{
    
  }
},
computed:{
  getReviews(){
    let review = this.$store.state.reviews.reviews;
    return review;
  }
},
mounted(){
 this.$store.dispatch('dispatchReviews');
}
}
</script>

<style>

.review-card-body{
    
}
 
</style>