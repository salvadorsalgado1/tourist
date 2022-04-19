<template>
  <div class="search-card shadow-lg mb-4">
        <div class="card search-card-cont">
            <div class="card-body search-body-cont">
                <div class="row">
                    <div class="col-sm-12 col-md-6">
                        <img class="img-search rounded-circle" src= "../assets/portraits/review-portrait-three.jpg" alt=""/>
                    </div>
                    <div class="col-sm-12 col-md-6">
                        <p class="user-fullname">
                            <router-link :to='`/profile/${this.userURL}`'>{{name}}</router-link>
                         <br/>
                        <span class="user-fullname-sub">{{location}} {{language}}</span></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
props:['name', 'userURL', 'location', 'age', 'language']

}
</script>

<style>
.user-fullname-sub{
    font-size:.7em;
}
.user-fullname{
    font-size:1em;
    font-weight:500;
    color:gray;
}
.user-fullname a{
    color:gray;
    font-weight:600;
}
.user-fullname a:link {
  text-decoration: none;
}

.user-fullname a:visited {
  text-decoration: none;
}

.user-fullname a:hover {
  text-decoration: underline;
}
.search-card-cont{
    height:100%;
    max-height:100%;

}
.img-search{
     width:80%;
     max-width:250px;
}
</style>