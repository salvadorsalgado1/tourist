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

    let date = new Date('2020-11-05 18:37:42')
    console.log(date)
    console.log(date.getDate())
 


    /*
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
    axios.get('http://localhost:5000/api/register/%27)
    .then(response=>{
      console.log(response.data);
    })*/

    // const db = firebase.firestore()
    // console.log(db)

    // const snapshot = db.collection('messages').where('userID', '==', 1).get()
    // .then(response=>{
    //    response.docs.map(doc=>{console.log(doc.data())})
    // })
    // console.log(snapshot)

    const db = firebase.firestore()
    console.log(db)

    const snapshot = db.collection('messages').get()
    .then(response=>{
       response.docs.map(doc=>{console.log(doc.data())})
    })
    console.log(snapshot)
  }
}
</script>
<style>

</style>