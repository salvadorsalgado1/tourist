<template>
    <div class="search-card shadow-lg mb-4">
        <div class="card search-card-cont">
            <div class="card-body search-body-cont ">
                <div class="row  ">
                    <div class="col-sm-12 col-md-12 col-lg-12">
                        <img class="img-search rounded-circle mb-3" :src="image" :alt="name"/>
                    </div>
                    <div class="col-sm-12 col-md-12 col-lg-12">
                        <p class="user-fullname">
                            <router-link :to='`/profile/${userURL}`'>{{name}}</router-link>
                         <br/>
                        <span class="user-fullname-sub">{{location}} <br/>{{language}}</span> </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
props:['name', 'userURL', 'location', 'age', 'language', 'image']
}
</script>

<style>
@media screen and (max-width: 1000px) {
  .img-search{
     width:90%;
     max-width:300px;
    }
}
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