<template>
  <div class="reviews">
          <h2 class="display-4 white-text testimonial-text">Testimonials</h2>
          <div class="container">
              <div class="reviews-body">
              <div class="row">
                  
                  <div class="col-md-6 col-sm-12">
                      <ReviewCard name="Mary" 
                      review="First time doing this tour thing with Rendezvous, and I could not have been happier. 
                      Allie was awesome for showing us the way to the best bars in North Hollywood. " 
                      stars="5" 
                      image="female-profile"/>
                  </div>
                  <div class="col-md-6 col-sm-12">
                      <ReviewCard name="Jose" 
                      review="We had to cut our tour short because of a sudden thunderstorm. 
                      Luckily our tour guide found this really nice restaurant for us in the meantime." 
                      stars="4" 
                      image="male-profile"/>
                  </div>
              </div>
              <div class="row">
                  <div class="col-md-6 col-sm-12">
                      <ReviewCard name="Joseph" 
                      review="Anthony was an awesome tour guide! He took my family to the best view of 
                      the eiffel tower without going through the crowd! Thanks again!!!" 
                      stars="5" 
                      image="male-profile"/>
                  </div>
                  <div class="col-md-6 col-sm-12">
                      <ReviewCard name="Laura" 
                      review="I finally managed to get a picture of the golden gate bridge. This was only a 10 minute walk!! How could I have not seen this on the maps. Luckily we had Maddy show us a quicker way to get to it." 
                      stars="5" 
                      image="female-profile"/>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import ReviewCard from '../../components/ReviewCard'
export default {
    components:{ReviewCard},
    data(){
        return{
            
        }
        
    },

}
</script>

<style>
.reviews{
    background-color:rgb(245, 80, 80);
}
</style>