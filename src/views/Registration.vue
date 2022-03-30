<template>
  <div class="registration">
    <section class="container-sign-up">
      <div class="left-half">
        <article>
          <img class="left-half-img" src="@/assets/logos/we-travel/letter-logo-transparent.png" alt=""/>
        </article>
      </div>
      <div class="right-half">
        <article>
          <Account />
        </article>
      </div>
    </section>
  </div>
</template>
<script>
import Account from "../components/Registration/Account";
 export default {
  components: { Account },
  name: "Registration",
  data() {
    return {};
  },
  mounted() {},
};
</script>

<style>
.registration {
  height: 100%;
}
.left-half-img, .right-half-img, .sign-up-img{
  width:40%;
}
/* Pen-specific styles */
.container-sign-up {
  height: 100vh; 
}
article {
  position: relative;
  top: 50%;
  text-align: center;
  transform: translate(0, -50%);
  padding: .25rem;
}
/* Pattern styles */
.container-sign-up {display: grid;}

.left-half {
  background: url("../assets/backgrounds/airline-sign-up.jpg");
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  grid-column: 1;
}

.right-half {
  background: #eeeeee;
  grid-column: 2;
}
@media only screen and (max-width: 1000px) {
  .left-half {
  background: url("../assets/backgrounds/shore.jpg");
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  grid-column: 1;
}
}
@media only screen and (max-width: 600px) {
  .left-half {
    display: none;
  }
}
</style>
