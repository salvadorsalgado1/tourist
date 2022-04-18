<template>
  <div class="reservation-modal">

    <!-- Button trigger modal -->
<button type="button" class="createReservationButton" data-bs-toggle="modal" data-bs-target="#tourScheduleModal">
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
            <label>Tour Guide: {{tourGuideName}} </label>
            <!-- <input type="text" id="tourGuideName" value="name base on profile's name" class="input" readOnly> -->
            <br><br>
            <label>Tourist: </label>
            <input type="text" id="touristName" value=" tourist name " class="input">
            <br><br>
            <div class="date-picker-container">
                <Datepicker v-model="datePicked" :minDate="new Date()" />
            </div>
            <p>Tour scheduled for {{ formatedDate }} at {{ formatedTime }}.</p>


      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
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
    
const date = ref();

export default {
props:[ 'tourGuideName'], 
label: String,
components:{
    Datepicker
},
data() {
    const datePicked = ref(new Date());

    return {
        datePicked,
    };
},

 methods:{
      showModal(){
      var myModal = document.getElementById('myModal')
      var myInput = document.getElementById('myInput')

      myModal.addEventListener('tourScheduleModal', function () {
      myInput.focus()})
    },

     
 },

 computed:{

     formatedDate: function() {
         var date = this.datePicked.getDate();
         var month = this.datePicked.getMonth()+1;
         var year = this.datePicked.getFullYear();
      return `${month}/${date}/${year}`;
    },

    formatedTime: function() {
         var hours = this.datePicked.getHours();
         var minutes = this.datePicked.getMinutes();
      return `${hours}/${minutes}`;
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
    background-image:linear-gradient(120deg, rgb(255, 102, 0) , rgb(255, 143, 14),rgb(255, 145, 0));
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
/* .date-box, .input{
    font-size: 18px;
    font-family: Arial, Helvetica, sans-serif;
} */

</style>