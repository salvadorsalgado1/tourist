<template>
  <div class="about-us">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
import axios from 'axios'
import firebase from '../firebase/init.js'
export default {
  data(){
    return{

    }
  },
  mounted(){
    const db = firebase.firestore()
    console.log(db)
     
    db.collection('messages').add({
      content:'another message',
      name:'ayooooo',
      timestamp:Date.now()
    }).catch(err=>{
      console.log(err)
    })

 

    console.log("Mounted");
    axios.get('http://localhost:5000/api/register/')
    .then(response=>{
      console.log(response.data);
    })
  }
}
</script>
<style>

</style>