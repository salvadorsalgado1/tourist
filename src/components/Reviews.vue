<template>
        <div class="review container">
            <div class="row">
                <div class="col-md-5 col-sm-12 col-xs-12 d-flex align-items-center justify-content-start">
                  <img class="review-img rounded-circle" :src="require(`../assets/portraits/${image}.jpg`)" :alt="name"/>
                </div>
                <div class="col-md-7 col-sm-12 col-xs-12 review-card-body">
                    <div class="stars">
                        <p>{{name}}</p>
                        <Stars v-for="index in this.getRating.rating" :key="index"/>
                    </div>
                    <div class="review-card-text mt-2">
                        <p>{{review}}</p>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
import Stars from '../components/Stars'

export default {
    data(){
        return{
             
        }
    },
components:{Stars},
props:['name', 'review', 'stars', 'image'],
mounted(){
    
},
computed:{
    getRating(){
            let reviewStars = parseInt(this.stars);
            let starRating = {rating:reviewStars};
            return starRating;
        },
    getImage(){
        let propImage = this.image;
        return propImage
    }
  
}
}
</script>

<style>
@media only screen and (max-width: 600px) {
  .review-img {
    width:50%;
    max-width:200px;
    
  }
}
.review-img{
    width:75%;
    
    
    margin-bottom:25px;
}
</style>