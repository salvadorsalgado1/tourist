<template>
  <div class="home">
     
     <Header/>
     <About/>
     <Services/>
     <Reviews/>
  </div>
</template>

<script>
// @ is an alias to /src
 import Header from '../components/sections/Header'
 import About from '../components/sections/About'
 import Services from '../components/sections/Services'
 import Reviews from '../components/sections/Reviews'
export default {
  name: 'Home',
  components: {Header, About, Services, Reviews
     
  }
}
</script>
