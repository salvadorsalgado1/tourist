<template>
<div class="requests container">
  <h1>Requests</h1>
  <div class="row">
      <div class="col-sm-12 col-md-3">
        <div class="btn-container nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
        <button class="btn btn-primary mb-1">Refresh</button>
        <hr/>
        <button class="nav-link active" id="v-pills-pending-tab" data-bs-toggle="pill" data-bs-target="#v-pills-pending" type="button" role="tab" aria-controls="v-pills-pending" aria-selected="true">Pending</button>
        <button class="nav-link" id="v-pills-accepted-tab" data-bs-toggle="pill" data-bs-target="#v-pills-accepted" type="button" role="tab" aria-controls="v-pills-accepted" aria-selected="false">Accepted</button>
        <button class="nav-link" id="v-pills-rejected-tab" data-bs-toggle="pill" data-bs-target="#v-pills-rejected" type="button" role="tab" aria-controls="v-pills-rejected" aria-selected="false">Rejected</button>
        </div>
    </div>
    <div class="col-sm-12 col-md-9">
      <div class="tab-content" id="v-pills-tabContent">
        <div class="tab-pane fade show active" id="v-pills-pending" role="tabpanel" aria-labelledby="v-pills-pending-tab">
          <div v-for="(reservation, reservationID) in pending" :key="reservationID">
            <RequestsCard class="mt-3"
            :start="reservation.start_time" 
            :end="reservation.end_time" 
            :fullName="reservation.fullName" 
            :image="reservation.imageURL" 
            :slug="reservation.slug"
            :id="reservation.reservationID"/>
          </div>
        </div>
        <div class="tab-pane fade" id="v-pills-accepted" role="tabpanel" aria-labelledby="v-pills-accepted-tab">
          <div v-for="(reservation, reservationID) in accepted" :key="reservationID">
            <RequestsCard class="mt-3"
            :start="reservation.start_time" 
            :end="reservation.end_time" 
            :fullName="reservation.fullName" 
            :image="reservation.imageURL" 
            :slug="reservation.slug"
            :id="reservation.reservationID"/>
          </div>
        </div>
        <div class="tab-pane fade" id="v-pills-rejected" role="tabpanel" aria-labelledby="v-pills-rejected-tab">
          <div v-for="(reservation, reservationID) in rejected" :key="reservationID">
            <RequestsCard class="mt-3"
            :start="reservation.start_time" 
            :end="reservation.end_time" 
            :fullName="reservation.fullName" 
            :image="reservation.imageURL" 
            :slug="reservation.slug"
            :id="reservation.reservationID"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import RequestsCard from './RequestsCard'
export default {
    components:{RequestsCard},
    name:'Requests',
    data(){
        return{

        }
    },
    computed:{
      pending(){return this.$store.state.reservations.pending;},
      rejected(){return this.$store.state.reservations.rejected;},
      accepted(){return this.$store.state.reservations.accepted;}
    }
}
</script>

<style>
.btn-container{
  background-color:rgb(224, 224, 224);
  padding:20px;
  border-radius:10px 10px 10px;
}
.btn-circular{
    border-radius:50%;
    padding:20px 20px;
}
.btn-circle {
    width: 30px;
    height: 30px;
    padding: 6px 0px;
    border-radius: 15px;
    text-align: center;
    font-size: 12px;
    line-height: 1.42857;
}
</style>