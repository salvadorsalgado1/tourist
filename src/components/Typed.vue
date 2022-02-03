<template>
  <div class="typed">
    <img class="we-travel-logo mb-1" src="../assets/logos/we-travel/logo-we-travel-sm-transparent-sm-sm.png" alt=""/>
    <p class = "display-4 type-it" id="element"></p>
    <router-link class="btn btn-outline-primary" :to="{name:'Home'}" >Get Started</router-link>
    <Spinner :start="!spin" />
  </div>
</template>

<script>
import TypeIt from 'typeit'
import Spinner from '../components/Spinner'

export default {
     components:{Spinner},
    data: () => ({
        spin: false
    }),
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
.we-travel-logo{
    width:50%;
}
</style>