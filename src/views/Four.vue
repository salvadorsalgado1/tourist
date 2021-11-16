<template>
  <div class="404page">
    <img src="../assets/backgrounds/page404.png" alt="Page404Image">
      <h1>404 - Page Not Found</h1>
      <p>Sorry, we could not find the page that you were looking for.</p>
      <router-link class="btn btn-outline-primary" :to="{name:'Home'}">Back Home</router-link>
  </div>
</template>

<script>
export default {
name:'Four'
}
</script>

<style>
body {
  background-color: rgb(245, 211, 196);
  color: rgb(0, 0, 0)
}
/* img {
   display: block;
   margin-left: auto;
   margin-right: auto;
   margin-top: 50px;
   width:50%;
   height: auto; 
} */

</style>