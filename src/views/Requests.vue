<template>
<div class="requests container">


  <h1>Requests</h1>
  <p>{{reservations}}</p>
  <div v-for="reservation in reservations" :key="reservation.id" class="card">
      <div class="card-body">
           <p>{{reservation.start_time}}</p>
            <button type="button" class="btn-circular btn btn-primary">Test</button>
            <button type="button" class="btn btn-default btn-circle"><i class="fa fa-check"></i>
                            </button>
                            <button type="button" class="btn btn-primary btn-circle"><i class="fa fa-list"></i>
                            </button>
                            <button type="button" class="btn btn-success btn-circle"><i class="fa fa-link"></i>
                            </button>
                            <button type="button" class="btn btn-info btn-circle"><i class="fa fa-check"></i>
                            </button>
                            <button type="button" class="btn btn-warning btn-circle"><i class="fa fa-times"></i>
                            </button>
            <button type="button" class="btn btn-default btn-circle btn-xl"><i class="fa fa-check"></i>
            </button>
            <button type="button" class="btn btn-primary btn-circle btn-xl"><i class="fa fa-list"></i>
            </button>
            <button type="button" class="btn btn-success btn-circle btn-xl"><i class="fa fa-link"></i>
            </button>
            <button type="button" class="btn btn-info btn-circle btn-xl"><i class="fa fa-check"></i>
            </button>
            <button type="button" class="btn btn-warning btn-circle btn-xl"><i class="fa fa-times"></i>
            </button>
            <button type="button" class="btn btn-danger btn-circle btn-xl"><i class="fa fa-heart"></i>
            </button>
      </div>
  </div>
  </div>
</template>

<script>
export default {
name:'Requests',
data(){
    return{

    }
},
 computed:{
     reservations(){
         return this.$store.state.reservations
     }
 }
}
</script>

<style>
.btn-circular{
    border-radius:50%;
    padding:20px 20px;
}
.btn-circle.btn-xl {
    width: 50px;
    height: 50px;
    padding: 8px 4px;
    border-radius: 35px;
    font-size: 24px;
    line-height: 1.33;
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