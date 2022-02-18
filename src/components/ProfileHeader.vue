<template>
  <div class="profile-header">
    <div class="card shadow">
      <div class="card-body">
        <div class="row">
          <div class="col-6 d-flex align-items-center justify-content-center">
            <img :src="require(`../assets/profile/${userWithImage}.jpg`)" alt="" class="rounded-circle profile-img "/>
          </div>
          <div class="col-6 text-start">
            <h1 class="heading-name">{{fullName}}</h1>
            <p class="left-text">
              {{description}}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:[  'description', 'fullName'],
  mounted(){
  },
  computed:{
    Person(){
      let person = this.$store.state.user;
      return person;
    },
    userWithImage(){
      //let image = './test-images/'+ this.$store.state.person.image + '.jpg'

      let image = this.$store.state.image
      if(image == null){
        image = 'default-profile-picture1'
      }
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
