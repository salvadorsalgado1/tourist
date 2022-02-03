<template>
    <div class="search-card shadow-lg mb-4">
        <div class="card search-card-cont">
            <div class="card-body search-body-cont">
                <div class="row">
                    <div class="col-sm-12 col-md-6">
                        <img class="img-search rounded-circle" src= "../assets/portraits/review-portrait-three.jpg" alt=""/>
                    </div>
                    <div class="col-sm-12 col-md-6">
                        <p class="user-fullname"><br/>
                            <router-link :to='`/profile/${this.userURL}`'>{{name}}</router-link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
props:['name', 'userURL']
}
</script>

<style>
.user-fullname{
    font-size:1em;
    font-weight:500;
}
.search-card-cont{
    height:100%;
    min-height:100%;

}
.img-search{
     width:80%;
     max-width:250px;
}
</style>