<template>
  <div class="profile-header">
    <div class="card shadow">
      <div class="card-body">
        <div class="row">
          <div v-if="userWithImage" class="col-6 d-flex align-items-center justify-content-center">
            
            <img  :src="userWithImage" alt="" class="rounded-circle profile-img "/>
        <!--<img :src="require(`../assets/profile/${userWithImage}.jpg`)" alt="" class="rounded-circle profile-img "/>-->
          </div>
          <div class="col-6 text-start">
            <h1 class="heading-name">{{fullName}}</h1>
            <p v-if="description" class="left-text">
              {{description}}
            </p>
            <p v-else class="left-text">
              {{this.defaultIntro}}
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
  data(){
    return{
      default:null,
      defaultIntro:"Hello! I don't have a bio yet, but I'll update it shortly."
    }
  },
  mounted(){
  

  },
  computed:{
    Person(){
      let person = this.$store.state.user;
      return person;
    },
    userWithImage(){
      //let image = './test-images/'+ this.$store.state.person.image + '.jpg'

      let image = this.$store.state.profileImage
      if(image == null){
        
      }else{
        console.log('else')
       // this.default = false
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
