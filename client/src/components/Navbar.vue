<template>
  <div class="navigation ">
      <nav class="navbar navbar-expand-lg navbar-dark" style="background-color:rgb(235, 141, 134)">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img src="../assets/logos/logo_transparent-sm.png" alt="" class="d-inline-block align-text-top brand-img-nav">
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
      </ul>
      <span class="navbar-text">
        Navbar text with an inline element
      </span>
    </div>
  </div>
</nav>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.brand-img-nav{
    height:60px !important;
    width:auto;
}
</style>