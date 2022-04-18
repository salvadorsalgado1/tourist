<template>
  <div class="requests-card">
    <div class="card">
        <div class="card-body">
            <div class="row">
                <div class="col-4">
                    <img class="reservation-img rounded-circle" :src="image" :alt="fullName"/>
                    </div>
                <div class="col-8"> 
                    <p><router-link :to='`/profile/${slug}`'>{{fullName}}</router-link></p>
                    <p>{{getdates.start}} {{getdates.end}}</p>
                    <button @click="acceptReservation(id)" type="button" class="btn btn-success btn-circle"><i class="fa fa-check"></i></button>
                    <button @click="rejectReservation(id)" type="button" class="btn btn-danger btn-circle"><i class="fa fa-close"></i></button>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    props:['start', 'end', 'fullName', 'image', 'slug', 'id'],
    data(){
        return{
            weekDays:['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        }
    },
    methods:{
        rejectReservation(id){
            console.log(id)
            this.$store.dispatch('rejectReservation', id)
        },
        acceptReservation(id){
            console.log(id)
            this.$store.dispatch('acceptReservation', id)
        }
    },
    computed:{
        getdates(){
            let startTime = this.start
            let endTime = this.end
            let startdate = new Date(startTime);
            let enddate = new Date(endTime);

            let startweek = this.weekDays[startdate.getDay()]
            let starthours = startdate.getHours()
            let startminutes = startdate.getMinutes()
            let startseconds = startdate.getSeconds()
            let startmonth = startdate.getMonth()
            let startday = startdate.getDate()
            let startyear = startdate.getFullYear()
            if(startminutes <= 9){startminutes = `0${startminutes}`}
            let meridian;
            if(starthours < 12){
                meridian='a.m.'
            }else{
                meridian='p.m.'
            }
            let startDate = `${startweek} ${startmonth}/${startday}/${startyear} ${starthours}:${startminutes} ${meridian}`;

            let endmeridian;
            if(endhours < 12){
                endmeridian='a.m.'
            }else{
                endmeridian='p.m.'
            }
            let endweek = this.weekDays[enddate.getDay()]
            let endhours = enddate.getHours()
            let endminutes = enddate.getMinutes()
            let endseconds = enddate.getSeconds()
            let endmonth = enddate.getMonth()
            let endday = enddate.getDate()
            let endyear = enddate.getFullYear()
            if(endminutes <= 9){endminutes = `0${endminutes}`}
            let endDate = `${endweek} ${endmonth}/${endday}/${endyear} ${endhours}:${endminutes} ${endmeridian}`;
            let output = {start:startDate, end:endDate}
            return output
        }
    }
}
</script>

<style>
.reservation-img{
    width:70%;
}
.btn-circle{
    margin:5px;
}
</style>