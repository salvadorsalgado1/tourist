<template>
  <div class="services">
      <div class="services-body mt-4">
          <div class="container">
              <h2 class="lead display-4 services-heading">Services</h2>
           <div class="row mt-4">
               <div class="col">
                    <ServiceCard text="Find your tour guide in your favorite locations!" image="map"/>
               </div>
               <div class="col">
                    <ServiceCard text="Find only the best recommended food spots in the area." image="food"/>
               </div>
               <div class="col">
                   <ServiceCard text="Only the best locations are found when you're with a tour guide." image="umbrella"/>
               </div>
           </div>
       </div>
      </div>
  </div>
</template>

<script>
import ServiceCard from '../ServiceCard'
export default {
components:{ServiceCard}
}
</script>

<style>
.services-heading{
    color:gray;
}
</style>