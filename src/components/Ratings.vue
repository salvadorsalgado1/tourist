<template>
    <div class="my-ratings">
        <div class="card shadow">
            <div class="card-body">
                <h2>Achievements and Ratings</h2>
                <p>Ratings: <!--TODO--4.7--> {{ getRatings.toFixed(1) }} </p>
                <p>Reviews: <!--TODO--5--> {{ getReviewsQuant }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
computed:{
    getRatings(){
        let reviews = this.$store.state.reviews; //what is this code do????????
        let rating = 0;
        //TODO
        var avg=0;  //hold sum and result after compute avg
        var i=0;
            for(i; i<reviews.length; i++) {
            avg += reviews[i].rating;
        };
        rating = avg/reviews.length;
        return rating;
    },
    getReviewsQuant(){
       
        return this.$store.state.reviews.length;
    }
}
}
</script>

<style>

</style>