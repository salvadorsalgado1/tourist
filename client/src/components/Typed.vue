<template>
  <div class="typed">
       
      <div class="type-it" id="element"></div>
  </div>
</template>

<script>
import TypeIt from 'typeit'
export default {
    props:['sentence'],
    data(){
        return{
            string:this.sentence
        }
    },
    mounted(){
        new TypeIt("#element", {
            strings: ["Come explore the city us,", "Let's Rendezvous"],
            speed: 75,
            loop: true,
        }).go();
    }
}
</script>

<style>

</style>