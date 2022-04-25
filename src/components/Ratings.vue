<template>
    <div class="my-ratings"> 
        <p>Average Rating {{ getRatings.toFixed(1) }} /5</p>
        <p> {{ getReviewsQuant }} Reviews</p> 
    </div>
</template>

<script>
export default {
computed:{
    getRatings(){
        let reviews = this.$store.state.reviews;  
        let rating = 0;

        if(reviews.length == 0){
            return rating
        }else{
        //TODO
        var avg=0;  //hold sum and result after compute avg
        var i=0;
            for(i; i<reviews.length; i++) {
            avg += reviews[i].rating;
        };
        rating = avg/reviews.length;
        return rating;
        }
    },
    getReviewsQuant(){
       
        return this.$store.state.reviews.length;
    }
}
}
</script>

<style>

</style>