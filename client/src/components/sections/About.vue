<template>
<div class="about">
    <div class="about-body">
       <div class="container">
           <div class="row">
               <div class="col-md-6 col-sm-8">
                   <h2 class="about-heading display-4 mt-5">Who We Are</h2>
                   <img class="img-thumbnail about-image-g" src="../../assets/camera.jpg" alt=""/>
               </div>
               <div class="col-md-6 col-sm-4 mt-5">
                   <p class="about-description mt-5"><em>Rendezvous</em>, can be trusted to cater to your traveling needs. 
                   We have a set of trusted tour guides from around the world that only know the best locations. 
                   Skip the boring parts and head straight to the best restaurants, bars, tourist spots and views. Once you call yourself a local, why not also become
                   part of the action and be a tour guide as well! Meet awesome tourists from around the world that want to know all about your favorite places.</p>
               </div>
           </div>
       </div>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style>
.about-body{
    display:flex;
    align-items: center;
}
.about{
    background-color:rgb(102, 173, 132);
    color:white;
    height:100%;
}
.about-description{
    font-size:1.8em;
}
.about-image-g{
    height:70%;
}
</style>