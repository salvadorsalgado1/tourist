<template>
  <div class="reservation-modal">
    <!-- Button trigger modal -->
    <button  
      type="button" 
      class="createReservationButton btn" 
      data-bs-toggle="modal" data-bs-target="#tourScheduleModal">
      Schedule A Tour
    </button>

<!-- Modal -->
<div class="modal fade" id="tourScheduleModal" tabindex="-1" aria-labelledby="tourScheduleLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <!-- <h5 class="modal-title" id="tourScheduleLabel">Tour Scheduler</h5> -->
        <h5>Tour Scheduler</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
            <label>Your Guide: {{tourGuideName}} </label>
            <!-- <input type="text" id="tourGuideName" value="name base on profile's name" class="input" readOnly> -->
            <br><br>
            <div class="date-picker-container">
               <Datepicker v-model="date" placeholder="Start Typing ..." :enableTimePicker="false"/>
            </div>
            <div class="date-picker-container">
                <Datepicker minutesIncrement="30"  :is24="false"  v-model="starttime" timePicker  />
                <Datepicker minutesIncrement="30"  :is24="false"   v-model="endtime" timePicker  />
            </div>
            <p>Tour scheduled for  {{formattedDate.start.hours}}:{{formattedDate.start.minutes}} {{formattedDate.end.hours}}:{{formattedDate.end.minutes}}.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button @click="submitReservation" type="button" class="btn btn-primary">Schedule Reservation</button>
      </div>
    </div>
  </div>
</div>
  </div>
</template>
<script>
import { ref } from 'vue';
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
    submitReservation(){
      //Format--->   2022-09-23 008:00:11
      console.log(`${this.formattedDate.day.getMonth()+1} ${this.formattedDate.start.hours}:${this.formattedDate.start.minutes} ${this.formattedDate.end.hours}:${this.formattedDate.end.minutes}`)
      let start = `${this.formattedDate.day.getFullYear()}-${this.formattedDate.day.getMonth()+1}-${this.formattedDate.day.getDate()} ${this.formattedDate.start.hours}:${this.formattedDate.start.minutes}:00`;
      let end = `${this.formattedDate.day.getFullYear()}-${this.formattedDate.day.getMonth()+1}-${this.formattedDate.day.getDate()} ${this.formattedDate.end.hours}:${this.formattedDate.end.minutes}:00`;
      console.log(`start: ${start}`, `end: ${end}`);
      let reservation = {start:start, end:end, tourist:this.getUsers.touristID, guide:this.getUsers.guideID, fullName:this.getUsers.fullName}
      console.log(reservation)
      //this.$store.dispatch('submitReservation', reservation);
    },
    showModal(){
      var myModal = document.getElementById('myModal')
      var myInput = document.getElementById('myInput')
      myModal.addEventListener('tourScheduleModal', function () {
      myInput.focus()})
    },
 },
 computed:{
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
    selectStartTime(){
       
      
    },
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
.createReservationButton{
    border-color:orange;
    background-image:linear-gradient(120deg, rgb(245, 198, 167) , rgb(255, 143, 14),rgb(255, 145, 0));
}
.modal-header{
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