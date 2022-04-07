<template>
  <div class="about-us">
    <h1>This is an about page</h1>
    <div class="container">
      <div class="card">
        <div class="card-body">
          <h2>Card</h2>
          <input type="text" class="datepicker">
           <input type="text" class="timepicker">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import firebase from '../firebase/init.js'
import timepicker from '../packages/timepicker/timepicker.js'
export default {
  data(){
    return{

    }
  },
  mounted(){
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.datepicker');
    var instances = M.Datepicker.init(elems, options);
  });

  // Or with jQuery

  
/*   
 const db = firebase.firestore()
    console.log(db)

    const snapshot = db.collection('profile').where('userID', '==', 1).get()
    .then(response=>{
       response.docs.map(doc=>{console.log(doc.data())})
    })
    console.log(snapshot)
    
    
      
    db.collection('profile').doc('one-wish').set({
      userID:1,
      image:'some image that got updated',
      slug:'the-slug',
      timestamp:Date.now()
    }).catch(err=>{
      console.log(err)
    })

 
/*
    console.log("Mounted");
    axios.get('http://localhost:5000/api/register/')
    .then(response=>{
      console.log(response.data);
    })*/
  }
}
</script>
<style>

</style>