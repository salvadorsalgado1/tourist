<template>
  <div class="review-card shadow-lg mb-4">
      <div class="card">
         <div class="card-body">
             <h3>{{name}}</h3>
             <img loading="lazy" class="" :src="require(`../assets/profile/${image}.png`)" alt=""/>
             <div class="row">
                <span><Stars v-for="index in this.getRating.rating" :key="index"/></span> 
             </div>
            <p class="mt-5 lead reviews-text"><em>"{{review}}"</em></p>
        </div>
    </div>
  </div>
</template>

<script>
import Stars from '../components/Stars'
export default {
    components:{Stars},
    props:['name', 'review', 'stars', 'image'],
    computed:{
        getRating(){
            let reviewStars = parseInt(this.stars);
            let starRating = {rating:reviewStars};
            return starRating;
        }
    }
}
</script>

<style>
.review-card .card{
    border:0px;
    height:100%;
    color:gray;
}
.reviews-text{
    
    font-size:1.4em;
}
</style>