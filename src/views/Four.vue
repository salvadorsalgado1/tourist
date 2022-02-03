<template>
  <div class="four-page">
    <div>
      <img class="img-four" src="../assets/backgrounds/page404.png" alt="404">
      <h1>404 - Page Not Found</h1>
      <p>Sorry, we could not find the page that you were looking for.</p>
      <router-link class="btn btn-outline-primary" :to="{name:'Home'}">Back Home</router-link>
    </div>
  </div>
</template>

<script>
export default {
name:'Four'
}
</script>

<style>
.img-four{
  width:100%;
  max-width:1000px;
}
.four-page {
  background-color: rgb(245, 211, 196);
  height:90vh;
  justify-content: center;
  align-items: center;
  display:flex;
}
</style>