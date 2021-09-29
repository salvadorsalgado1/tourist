<template>
  <div class="service-card shadow mb-4">
      <div class="card">
         <div class="card-body">
             <img class="" :src= "require(`../assets/icons/${image}.png`)" alt=""/>
            <p class="mt-5 lead services-text">{{text}}</p>
        </div>
    </div>
  </div>
</template>

<script>
export default {
props:['text', 'image']
}
</script>

<style>
.service-card .card{
    border:0px;
    min-height:20em;
}
.services-text{
    color:gray;
    font-size:1.4em;
    
}
</style>