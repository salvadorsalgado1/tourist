<template>
  <div class="requests-card">
    <div class="card">
        <div class="card-body">
            <div class="row">
                <div class="col-6"><img class="reservation-img rounded-circle" :src="image" :alt="fullName"/></div>
                <div class="col-6"> 
                    
            <p><router-link :to='`/profile/${slug}`'>{{fullName}}</router-link></p>
             <p>{{start}}, {{end}}</p>
             
            <button type="button" class="btn btn-success btn-circle"><i class="fa fa-check"></i></button>
            <button type="button" class="btn btn-danger btn-circle"><i class="fa fa-close"></i></button></div>
                
            </div>
           
        </div>
    </div>
  </div>
</template>

<script>
export default {
props:['start', 'end', 'fullName', 'image', 'slug']
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