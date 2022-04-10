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
              <ReservationModal :tourGuideName="fullName">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ReservationModal from './modals/ReservationModal';
export default {
components:{ReservationModal},
props:[  'description', 'fullName'],
  mounted(){
  },
  methods:{
    reserve(user){
        console.log(user)
    }
  },
  computed:{
    Person(){
      let person = this.$store.state.user;
      return person;
    },
    userData(){
        console.log("computed")
        let user = this.$store.state.profile
         console.log(user)
        return user;
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
/* #create-reservation{
    border-color:orange;
    background-image:linear-gradient(120deg, rgb(255, 102, 0) , rgb(255, 143, 14),rgb(255, 145, 0));
} */
</style>
