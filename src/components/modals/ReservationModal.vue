<template>
  <div class="reservation-modal" v-if="this.$store.state.userID">
    <div class="button--group">
      <!-- Button trigger modal -->
    <button 
      type="button" 
      class="createReservationButton btn" 
      data-bs-toggle="modal" data-bs-target="#tourScheduleModal">
      Schedule A Tour
    </button>
    <!-- class="btn btn-message-user -->
    <button 
      type="button" 
      class="btn btn-message-user"
      data-bs-toggle="modal" data-bs-target="#message-user">
        Message
    </button>
    </div>
<!--Schedule Tour Modal -->
<div class="modal fade" id="tourScheduleModal" tabindex="-1" aria-labelledby="tourScheduleLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header schedule-modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Create a Reservation!</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
            <label>Your Guide: {{tourGuideName}} </label>
            <!-- <input type="text" id="tourGuideName" value="name base on profile's name" class="input" readOnly> -->
            <br><br>
            <div class="date-picker-container">
               <Datepicker v-model="date" placeholder="Start Typing ..." :enableTimePicker="false"/>
            </div>
            <div class="date-picker-container mt-2">
                <Datepicker minutesIncrement="30"  :is24="false"  v-model="starttime" timePicker  />
                
            </div>
            <div class="date-picker-container mt-2">
              <Datepicker minutesIncrement="30"  :is24="false"   v-model="endtime" timePicker  />
            </div>
            <p>Tour scheduled for  {{formattedDate.start.hours}}:{{formattedDate.start.minutes}} {{formattedDate.end.hours}}:{{formattedDate.end.minutes}}.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button @click="submitReservation" type="button" data-bs-dismiss="modal" class="btn btn-primary">Schedule Reservation</button>
      </div>
    </div>
  </div>
</div>

<!-------------->
<div class="modal fade" id="message-user" tabindex="-1" aria-labelledby="message-modal-label" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header message-modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Send a message to {{this.$store.state.profile.fullName}}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="mb-3">
        <label for="input-message" class="form-label">Message</label>
        <input v-model="message" type="text" class="form-control" id="input-message" aria-describedby="inpute-message">
        </div>
       </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button @click="submitMessage" type="button" class="btn btn-primary">Submit Message</button>
      </div>
    </div>
  </div>
</div>
  </div>
</template>
<script>
import { ref } from 'vue';
import firebase from '../../firebase/init'
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
export default {
  props:[ 'tourGuideName'], 
  label: String,
  components:{Datepicker},
  data(){
      const datePicked = ref(new Date());
     // const date = ref();
      const starttime = ref(new Date());
      const endtime = ref(new Date());
      return {
        message:'',
        date:ref(new Date()),
        starttime:{
          hours: 12, minutes: 0},
        endtime:{
          hours: 13, minutes: 0},
      }
  },
  mounted(){
     
  },
 methods:{
   submitWithFirebase(session){
      const db = firebase.firestore()
    //---13adeehilnnnnoooswy 
      db.collection(`messages/${session}/${session}`).add({
      userID:this.User,
      message:this.message,
      timestamp:Date.now(),
      convo:`${session}`},
      )
  },
   submitMessage(){
     console.log("Sent: ", this.message)
     console.log("Session: ", this.messagesQuery)
     if(this.messages == ''){
      console.log("Empty Message");
     }else{
       
       let session = {
         convo:this.messagesQuery,
         profile:
          { userID:this.UserProfile.userID,
            image:this.UserProfile.imageURL,
            fullName:this.UserProfile.fullName
          },
         user:
          {
            userID:this.CurrentUser.userID,
            fullName:this.CurrentUser.fullName,
            image:this.CurrentUser.imageURL
          },
         }
       console.log(session)
      this.$store.dispatch('createSession', session);
      this.submitWithFirebase(this.messagesQuery)
     }
   },
    submitReservation(){
      //Format--->   2022-09-23 008:00:11
      console.log(`${this.formattedDate.day.getMonth()+1} ${this.formattedDate.start.hours}:${this.formattedDate.start.minutes} ${this.formattedDate.end.hours}:${this.formattedDate.end.minutes}`)
      let start = `${this.formattedDate.day.getFullYear()}-${this.formattedDate.day.getMonth()+1}-${this.formattedDate.day.getDate()} ${this.formattedDate.start.hours}:${this.formattedDate.start.minutes}:00`;
      let end = `${this.formattedDate.day.getFullYear()}-${this.formattedDate.day.getMonth()+1}-${this.formattedDate.day.getDate()} ${this.formattedDate.end.hours}:${this.formattedDate.end.minutes}:00`;
      console.log(`start: ${start}`, `end: ${end}`);
      let reservation = {start:start, end:end, tourist:this.getUsers.touristID, guide:this.getUsers.guideID, fullName:this.getUsers.fullName}
      console.log(reservation)
      this.$store.dispatch('submitReservation', reservation);
    },
    showModal(){
      var myModal = document.getElementById('myModal')
      var myInput = document.getElementById('myInput')
      myModal.addEventListener('tourScheduleModal', function () {
      myInput.focus()})
    },
 },
 computed:{
   UserProfile(){
     return this.$store.state.profile
   },
   CurrentUser(){
     return this.$store.state.user
   },
   User(){
    return this.$store.state.userID
  },
   messagesParam(){
     let profile = this.$store.state.profile
     let user = {userID:profile.userID, slug:profile.slug}
     return user
   },
   //Format--->   2022-09-23 008:00:11
    getUsers(){
      let touristID = this.$store.state.userID;
      let fullName = this.$store.state.fullName;
      let guideID = this.$store.state.profile.userID;
      let user = {touristID: touristID, fullName: fullName, guideID:guideID}
      return user
    },
    formattedDate(){
      if(this.starttime.minutes < 30){
        this.starttime.minutes = `00`
      }
      if(this.endtime.minutes < 30){
        this.endtime.minutes = `00`
      }
      let reservation = {start: this.starttime, end: this.endtime, day: this.date}

      return reservation
    },
    messagesQuery(){
    let user1 = this.$store.state.profile
    let user2 = this.$store.state.user

    let user1_id = user1.userID;
    let user2_id = user2.userID;

    let user1_slug = user1.slug
    let user2_slug = user2.slug

    let document = (user2_id  + user2_slug + user1_id + user1_slug);
    console.log(document.split('').sort().join(''))
    document = document.split('').sort().join('')
    return document
  }
 }

 
//  computed:{
//     userData(){
//         console.log("computed")
//         let user = this.$store.state.profile
//          console.log(user)
//         return user;
//     },
// }
}
</script>

<style>
.reservation-modal{
    font-family: Arial, Helvetica, sans-serif;
    font-size: 17px;
    line-height: 1.6;
}
.btn-message-user{
  color:white;
   margin:10px 10px;
  border-color:lightskyblue;
    background-image:linear-gradient(120deg, rgb(31, 110, 255) , rgb(7, 121, 197),rgb(0, 140, 255));
}
.message-modal-header{
  color:white;
  background-image:linear-gradient(120deg, rgb(137, 218, 255) , rgb(92, 190, 255) ,rgb(166, 215, 255));
}
.createReservationButton{
  color:white;
    border-color:orange;
    background-image:linear-gradient(120deg, rgb(233, 102, 15) , rgb(255, 143, 14),rgb(218, 123, 0));
}
.schedule-modal-header{
    border-color:orange;
    background-image:linear-gradient(120deg, rgb(255, 102, 0) , rgb(255, 143, 14),rgb(255, 145, 0));
}
.date-picker-container{
    margin-top: 5;
    margin-bottom: 5;
    width: 400px;
    text-align: center;
}
</style>