<template>
  <section class="about">
    <div class="container about-body">
      <div class="row">
        <div class="col-sm-12 col-md-6">
        <img loading="lazy" class="img-thumbnail about-image-g" src="../../assets/misc/camera.jpg" alt=""/> 
      </div>
      <div class="col-sm-12 col-md-6 mt-3">
        <h2 class="about-heading ">Who We Are</h2>
         
<p class="about-description">
              <em>Rendezvous</em>, can be trusted to cater to your traveling
              needs. We have a set of trusted tour guides from around the world
              that only know the best locations. Take a break from planning your
              itinerary. Just let us know what kind of day you're looking for, and
              we definitely know what to do for a few hours. Skip the boring parts
              and head straight to the best restaurants, bars, tourist spots and
              views.</p> 
         
          
      </div> 
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
.about-heading {
  font-size: 1.4em;
  color:gray
}
.about {
  background-image: linear-gradient(to bottom, bisque 1%, rgb(238, 250, 255) 80%);
  color: white;
  flex:1;
  display:flex;
  padding:90px 20px;
  align-items:center;
  flex-direction:column;
}
.about-description {
  font-size: 1.2em;
  color:gray
}
.about-image-g {
  width: 80%;
}
</style>
