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