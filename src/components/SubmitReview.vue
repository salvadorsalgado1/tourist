<template>
  <div class="submit-review">
    <button type="button" 
              class="btn btn-primary" 
              data-bs-toggle="modal" 
              
              data-bs-target="#reviewModal">Submit A Review!</button>


              
    <div class="modal" tabindex="-1" id="reviewModal">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Submit a Review! Share your experience.</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <form @submit.prevent="submitReview(rating, review)">
            <div class="modal-body">
              <label for="customRange3" class="form-label">{{this.rating}} stars</label>
              <input type="range" class="form-range" min="1" max="5" step="1" id="customRange3" v-model="rating" @change="stars">
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Review</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="review" required></textarea>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
              <button type="submit" class="btn btn-primary">Submit Review</button>
              <!-- <button @click="submitReview(rating, review)" type="button" class="btn btn-primary">Submit Review</button> -->
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
      
    data(){
      return{
        rating:5,
        review:'', 
      }
    },
    methods:{
      showModal(){
        var myModal = document.getElementById('myModal')
        var myInput = document.getElementById('myInput')

        myModal.addEventListener('exampleModal', function () {
        myInput.focus()})
      },
      submitReview(rating, description){
      
        let profileID = this.$store.state.profile.userID
        let reviewerID = this.$store.state.userID
        let fullName = this.$store.state.fullName
        let date = new Date()
        let year = date.getFullYear()
        let day = date.getDate()
        let month = date.getMonth()
        let dateSubmit = `${month}/${day}/${year}`
        let slug = this.$store.state.profile.slug;
        
        let review = {
          profileID:profileID, 
          reviewerID:reviewerID, 
          rating:rating, review:description, 
          dateSubmit:dateSubmit, 
          slug:slug, 
          fullName:fullName
        }
  
        this.$store.dispatch('submitReview', review)
        
        
      }
    }
      
  }
</script>

<style>

</style>