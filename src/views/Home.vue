<template>
  <div class="home">
     <Header/>
     <Services/>
     <About/>
     <Reviews/>
  </div>
</template>
<script>
 
 import Header from './sections/Header'
 import About from './sections/About'
 import Services from './sections/Services'
 import Reviews from './sections/Reviews'
export default {
  name: 'Home',
  components: {Header, About, Services, Reviews},
   
}
</script>
