<template>
  <div class="typed">
    <img class="we-travel-logo mb-1" src="../assets/logos/we-travel/logo-we-travel-sm-transparent-sm-sm.png" alt=""/>
    <p class = "display-4 type-it" id="element"></p>
    <router-link id="get-started" class="btn btn-primary" :to="{name:'Home'}" >Get Started</router-link>
  </div>
</template>

<script>
import TypeIt from 'typeit'
 

export default {
    data(){
        return{
            string:this.sentence
        }
    },
    mounted(){
        new TypeIt("#element", {
            strings: ["Let me show you around the city..."],
            speed: 60,
        }).pause(2000).break().type("We Travel!").go();
    }
}
</script>

<style>
.we-travel-logo{width:50%;}
#get-started{
    border-color:orange;
    background-image:linear-gradient(120deg, rgb(255, 102, 0) , rgb(255, 143, 14),rgb(255, 145, 0));
}
</style>