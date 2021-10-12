<template>
    
        <div class="review container">
            <div class="row">
                <div class="col-md-5 col-sm-12">
                  <img class="review-img rounded-circle" :src="require(`../assets/portraits/${image}.jpg`)" :alt="name"/>
                </div>
                <div class="col-md-7 col-sm-12 review-card-body">
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
.review-img{
    width:100px;
     
    
}
</style>