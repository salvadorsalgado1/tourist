<template>
  <div class="profile-header">
    <div class="card shadow">
      <div class="card-body">
        <div class="row">
          <div class="col-6 d-flex align-items-center justify-content-center">
            <img :src="userWithImage" alt="" class="rounded-circle profile-img "/>

          </div>
          <div class="col-6 text-start">
            <h1 class="heading-name">{{Person.name}}</h1>
            <p class="left-text">
              {{Person.intro}}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted(){
  },
  beforeMount(){
    this.$store.dispatch('dispatchUser');

  },
  computed:{
    
    Person(){
      let person = this.$store.state.person;
      return person;
    },
    userWithImage(){
      let image = './test-images/'+ this.$store.state.person.image + '.jpg'
      return image
    }
  }
};
</script>

<style>
.profile-img{
    width:70%;
}
</style>
