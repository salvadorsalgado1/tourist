<template>
  <div class="inbox_people">
    <div class="inbox_chat list-group" id="list-tab" role="tablist">
      <a @click="getSessions(session.session_names, session.image)" v-for="session in this.sessions" :key="session.idmessages" class="chat_list active_chat list-group-item list-group-item-action" :id="`list-${session.user_session}-list`" data-bs-toggle="list" :href="`#list-${session.user_session}`" role="tab" :aria-controls="`list-${session.user_session}`">
        <div class="chat_people">
          <div class="chat_img"><img :src="session.image" class="rounded-circle img-mes" :alt="session.fullName"> </div>
          <div class="chat_ib">
            <!-- <p><small>{{session.session_names}}</small></p> -->
             <h5>{{session.fullName}} <!--<span class="chat_date">{{message.date}}</span>--></h5> 
            <!-- <p>{{session.preview}}</p> -->
          </div>
        </div>
      </a>
    </div>
  </div>
  <!----Messaging------->
  <div class="msg_history tab-pane fade show active" id="list-1" role="tabpanel" aria-labelledby="list-1-list">
      <!-- <Message/> -->
      <div class="message" v-for="(response, userID) in this.messages" :key="userID">
    <div v-if="response.userID !== this.userID" class="incoming_msg">
        <div class="incoming_msg_img">
            <img class="rounded-circle img-mes" :src="response.image" alt="user">
        </div>
        <div class="received_msg">
        
        <div class="received_withd_msg">
            <p>{{response.message}} </p>
            <span class="time_date"> {{response.timestamp}}</span></div>
        </div>
    </div>
    <div v-else class="outgoing_msg">
        <div class="sent_msg">
        <p>{{response.message}} </p>
        <span class="time_date">{{response.timestamp}}</span> </div>
    </div>
</div>
  </div>
  
</template>

<script>
import firebase from '../../../firebase/init'
import moment from 'moment'
export default {
  data(){
        return{
            messages:[]
        }
    },
  methods:{
    getSessions(session, image){ // Gets sessions based on userID
      this.messages=[] //Initial empty array, that will contain all messages
      this.$store.commit('setSession', session); // 
      const db = firebase.firestore() // initialize firestore
      let ref =  db.collection(`messages/${session}/${session}`) 
      .orderBy('timestamp')
        ref.onSnapshot(snapshot =>{ // <--Listens for new changes, if changes occur, then
            snapshot.docChanges().forEach(change=>{
                if(change.type == 'added'){//<----Since it's listening for changes, change.type
                    let doc = change.doc  // can either be deleted, updated or added.
                    this.messages.push({  // if true, then add iteration into this.messages
                        userID: doc.data().userID,  // array.
                        message: doc.data().message,
                        convo:doc.data().convo,
                        image:image,
                        timestamp:moment(doc.data().timestamp).format('lll')
                    })
                }
            })
        })
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
//  created(){
//     const db = firebase.firestore()
//       let ref =  db.collection(`messages/${this.messagesQuery}/${this.messagesQuery}`)
//       .orderBy('timestamp')
//         ref.onSnapshot(snapshot =>{
//             snapshot.docChanges().forEach(change=>{
//                 if(change.type == 'added'){
//                     let doc = change.doc
//                     this.messages.push({
//                         userID: doc.data().userID,
//                         message: doc.data().message,
//                         convo:doc.data().convo,
//                         timestamp:moment(doc.data().timestamp).format('lll')
//                     })
//                 }
//             })
//         })
//     }
}
</script>

<style>

</style>