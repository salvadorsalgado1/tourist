<template>
    <li class="list-group-item mt-3">
        <div class="review container">
            <div class="row">
                <div class="col-md-5 col-sm-12">
                  <img class="review-img rounded-circle" src="../assets/portraits/review-portrait-four.jpg" alt=""/>
                     <!--   <img class="review-img rounded-circle" :src="require(`../assets/portraits/${image}.jpg`)" alt=""/>  
                --></div>
                <div class="col-md-7 col-sm-12 review-card-body">
                    <div class="stars">
                        <p>{{name}}</p>
                         
                        <Stars v-for="index in this.getRating.rating" :key="index"/>
                    </div>
                    <div class="review-card-text mt-2">
                        <!--<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget aliquam felis. Donec porta sollicitudin facilisis. Sed facilisis, 
                            dui a gravida interdum, odio neque lacinia enim, ac iaculis ante felis in quam. Donec mattis suscipit purus, quis pellentesque libero. 
                            In et velit in felis lacinia blandit et nec purus. In fringilla nisl quis magna suscipit varius. Aliquam pretium mattis enim non euismod. 
                            eget porttitor lobortis. Proin laoreet tellus nec consectetur convallis. 
                        </p>-->
                        <p>{{review}}</p>
                    </div>
                </div>
            </div>
        </div>
    </li>
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