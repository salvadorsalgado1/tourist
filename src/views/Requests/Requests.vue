<template>
<div class="requests container">
  <h1>Requests</h1>
  <div class="row">
     <div v-for="(reservation, reservationID) in pending" :key="reservationID">
      <RequestsCard class="col-md-6 col-sm-12 mt-3"
      :start="reservation.start_time" 
      :end="reservation.end_time" 
      :fullName="reservation.fullName" 
      :image="reservation.imageURL" 
      :slug="reservation.slug"/>
    </div>
    <div v-for="(reservation, reservationID) in accepted" :key="reservationID">
      <RequestsCard class="col-md-3 col-sm-12 mt-3"
      :start="reservation.start_time" 
      :end="reservation.end_time" 
      :fullName="reservation.fullName" 
      :image="reservation.imageURL" 
      :slug="reservation.slug"/>
    </div>
    <div v-for="(reservation, reservationID) in rejected" :key="reservationID">
      <RequestsCard class="col-md-3 col-sm-12 mt-3"
      :start="reservation.start_time" 
      :end="reservation.end_time" 
      :fullName="reservation.fullName" 
      :image="reservation.imageURL" 
      :slug="reservation.slug"/>
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
        pending(){
            return this.$store.state.reservations.pending;
        },
        rejected(){
            return this.$store.state.reservations.rejected;
        },
        accepted(){
            return this.$store.state.reservations.accepted;
        }
    }
}
</script>

<style>
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