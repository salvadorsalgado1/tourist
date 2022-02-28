<template>
    <div class="my-ratings">
        <div class="card shadow">
            <div class="card-body">
                <h2>Achievements and Ratings</h2>
                <p>Ratings: <!--TODO--4.7--> {{ getRating }} </p>
                <p>Reviews: <!--TODO--5--> {{ getReviews }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
computed:{
    getRatings(){
        let rating = this.$store.state.reviews.reviews; //what is this code do????????
        //TODO
        var avg;  //hold sum and result after compute avg
        var i=0;
            for(i; i<userReviews.reviews.length; i++) {
            avg += userReviews.reviews[i].stars;
        };
        rating = avg/i;
        return rating
    },
    getReviews(){
       
        return userReviews.reviews.length;
    }
}
}
</script>

<style>

</style>