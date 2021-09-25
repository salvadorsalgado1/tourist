<template>
  <div class="landing">

    <div class="background-video">

          <Typed />
      <video playsinline autoplay muted loop poster="polina.jpg" id="bgvid">
         <source src="../assets/video/tour-opt.mp4" type="video/mp4">
      </video> 
    </div>
 
  </div>
</template>

<script>
import Typed from '../components/Typed'
export default {
components:{Typed}
}
</script>

<style>
 
 .background-video  {
   color:white;
   display:flex;
   align-items: center;
   justify-content: center;
    background-color:rgba(56, 56, 56, 0.418);
    height:100vh;
    width:100vw;
    object-fit: cover;
    top:0;
    left:0;
    z-index:1;
 }
video{
  z-index: -1;
  object-fit: cover;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
}
</style>