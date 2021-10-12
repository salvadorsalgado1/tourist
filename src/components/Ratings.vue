<template>
    <div class="my-ratings">
        <div class="card shadow">
            <div class="card-body">
                <h2>Achievements and Ratings</h2>
                <p>Ratings: <!--TODO-->4.7</p>
                <p>Reviews: <!--TODO-->5</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
computed:{
    getRatings(){
        let rating = this.$store.state.reviews.reviews;
        //TODO






        return rating
    }
}
}
</script>

<style>

</style>