<template>
  <div class="reservation-modal">
      <!-- <div class="modal-content modal" id="exampleModal">

       
        <div class="modal-header">
            <span class="closeBtn">&times;</span>
            <h2>TOUR SCHEDULER</h2>
        </div>
        <div class="modal-body">
            <p>Hello.....I am a modal</p>
            <p>More information comming up.....</p>

            <label>Tour Guide: </label>
            <input type="text" id="tour-guide-name" value="name base on profile's name" class="input" readOnly>
            <br><br>
            <label>Tourist: </label>
            <input type="text" id="tourist-name" value="name base on tourist name" class="input">
            <br><br>
            <div class="date-picker-container">
                <label>From:</label>
                <input type="date" min="" id="fromDate" class="date-box">
                
                <label>To:</label>
                <input type="date" name="" max="" id="toDate" class="date-box">
            </div>
        

       
        <div class="modal-footer">
            
            <button id="submitBtn" class="button">Submit</button>
        </div>
        </div>
    </div>            -->

    <!-- Button trigger modal -->
<button type="button" class="createReservationButton" data-bs-toggle="modal" data-bs-target="#tourScheduleModal">
  Schedule A Tour
</button>

<!-- <div class="button-for-profile"> -->
    <!-- <button @click="reserve(userData.userID)" class="btn btn-primary" id="create-reservation">Schedule Tour</button> -->
<!-- </div> -->

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
            <label>Tour Guide: </label>
            <input type="text" id="tourGuideName" value="name base on profile's name" class="input" readOnly>
            <br><br>
            <label>Tourist: </label>
            <!-- <input type="text" id="touristName" value="name base on tourist name" class="input"> -->
            userData.fullName
            <br><br>
            <div class="date-picker-container">
                <label>Date:</label>
                <input type="date" min="" id="fromDate" class="date-box">
            </div>
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
export default {
props:[ 'tourGuideName'],

    
 methods:{
      showModal(){
      var myModal = document.getElementById('myModal')
      var myInput = document.getElementById('myInput')

      myModal.addEventListener('tourScheduleModal', function () {
      myInput.focus()})
  }
 },
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
.date-box, .input{
    font-size: 18px;
    font-family: Arial, Helvetica, sans-serif;
}

</style>