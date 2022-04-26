<template>ff
  <div class="message"   v-for="(response, userID) in this.messages" :key="userID">
    <div v-if="response.userID !== this.userID" class="incoming_msg">
        <div class="incoming_msg_img">
            <img class="img-mes" src="https://ptetutorials.com/images/user-profile.png" alt="sunil">
        </div>
        <div class="received_msg">
        
        <div class="received_withd_msg">
            <p><strong>{{response.userID}}ff</strong> testing{{response.message}} </p>
            <span class="time_date"> {{response.timestamp}}</span></div>
        </div>
    </div>
    <div v-else class="outgoing_msg">
        <div class="sent_msg">
        <p><strong>{{response.userID}}ff</strong> testing{{response.message}} </p>
        <span class="time_date">{{response.timestamp}}</span> </div>
    </div>
</div>
</template>

<script>
import moment from 'moment'
import firebase from '../../firebase/init'
export default {
    props:['message'],
    data(){
        return{
            messages:[]
        }
    },
    computed:{
        sessions(){
            return this.$store.state.sessions
        },
        userID(){
            return this.$store.state.userID
        },
        Messages(){


            let messages = this.messages;
             messages.forEach(response=>{
                
                var months = ["Jan", "Feb", "Mar", "Apr", 
            "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];
            let temp = response.timestamp;
            let currentDay = new Date(temp)

            let day = currentDay.getDate()
            let month = currentDay.getMonth()
            let monthYear = months[month]
            let year = currentDay.getFullYear();
            let hours = currentDay.getHours();
            let meridian;
            (hours <= 12) ? meridian = 'a.m.' : meridian = "p.m.";
            hours = ((hours + 11) % 12 + 1);
            let minutes = currentDay.getMinutes();
            if(minutes < 10){minutes = `0${minutes}`}
            if(hours < 10){hours = `0${hours}`}  
            let date = `${hours}:${minutes} ${meridian}| ${monthYear} ${day}`
                 response.timestamp = date;
            })
            return messages
        },
        messagesQuery(){
            let user1 = this.$store.state.profile
            let user2 = this.$store.state.user

            let user1_id = user1.userID;
            let user2_id = user2.userID;

            let user1_slug = user1.slug
            let user2_slug = user2.slug

            let document = (user2_id  + user2_slug + user1_id + user1_slug);
            console.log(document.split('').sort().join(''))
            document = document.split('').sort().join('')
            return document
        }
    },
    methods:{
        
    },
    created(){
    const db = firebase.firestore()
      let ref =  db.collection(`messages/${this.messagesQuery}/${this.messagesQuery}`)
      .orderBy('timestamp')
        ref.onSnapshot(snapshot =>{
            snapshot.docChanges().forEach(change=>{
                if(change.type == 'added'){
                    let doc = change.doc
                    this.messages.push({
                        userID: doc.data().userID,
                        message: doc.data().message,
                        convo:doc.data().convo,
                        timestamp:moment(doc.data().timestamp).format('lll')
                    })
                }
            })
        })
    }
    // created(){
    // const db = firebase.firestore()
    //   let ref =  db.collection('---13adeehilnnnnoooswy').orderBy('timestamp')
    //     ref.onSnapshot(snapshot =>{
    //         snapshot.docChanges().forEach(change=>{
    //             if(change.type == 'added'){
    //                 let doc = change.doc
    //                 this.messages.push({
    //                     userID: doc.data().userID,
    //                     message: doc.data().message,
    //                     convo:doc.data().convo,
    //                     timestamp:moment(doc.data().timestamp).format('lll')
    //                 })
    //             }
    //         })
    //     })
    // }





    // created(){
    //     const db = firebase.firestore()
    
    //   // //Logged in user
    
    //     // db.collection("messages").doc('---13adeehilnnnnoooswy').get().then((snapshot) => {
    //     // // console.log(snapshot.data().conversations)
    //     //   this.$store.dispatch("getMessages", snapshot.data().conversations)
    //     //  this.messages.push(snapshot.data().conversations)
    //     // }).catch((e) => console.log(e))
    
         
    //       db.collection("---13adeehilnnnnoooswy")
          
    //       .orderBy('timestamp')
    //       .onSnapshot(snapshot => {
    //         snapshot.docs.map(doc=>{
      
    //            console.log(doc.data())
    //             this.messages.push(doc.data())
    //       })})
    // }
     
}
</script>

<style>

</style>