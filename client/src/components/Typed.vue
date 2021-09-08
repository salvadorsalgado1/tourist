<template>
  <div class="typed">
      <p class="display-4 type-it" id="element"></p>
        <router-link class="btn btn-outline-primary" :to="{name:'Home'}">Get Started</router-link>
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
            strings: ["Let me show you around the city."],
            speed: 60,
        }).pause(2000).break().type("Let's Rendezvous!").go();
    }
}
</script>

<style>

</style>