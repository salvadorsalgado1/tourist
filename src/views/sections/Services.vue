<template>
  <section class="services">
      <div class="services-body">
            <h2 class="lead display-4 services-heading">Services</h2>
          <div class="container">
           <div class="row mt-4">
               <div class="col-md-4 col-sm-12">
                    <ServiceCard text="Find your tour guide in your favorite locations!" image="map"/>
               </div>
               <div class="col-md-4 col-sm-12">
                    <ServiceCard text="Find only the best recommended food spots in the area." image="food"/>
               </div>
               <div class="col-md-4 col-sm-12">
                    <ServiceCard text="Only the best locations are found when you're with a tour guide." image="umbrella"/>
               </div>
           </div>
       </div>
      </div>
  </section>
</template>

<script>
import ServiceCard from '../../components/ServiceCard'
export default {
components:{ServiceCard}
}
</script>

<style>
.services
{   
    flex:1;
  display:flex;
  padding:90px 20px;
  align-items:center;
  flex-direction:column;
    background-image: linear-gradient(to top, bisque 5%, rgb(238, 250, 255));
    background-color:bisque;
    min-height:100%;
}
.services-heading{
    color:gray;
}
</style>