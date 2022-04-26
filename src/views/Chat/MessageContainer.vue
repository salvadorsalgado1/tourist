<template>
  <div class="messages-container">
    <div class="container mt-2">
      <div class="card">
        <div class="card-body">
          <div class="inbox_msg">
            <MessagesSearch/>
            <MessageHistory/>
            <SubmitMessages/>
          </div>         
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import MessageHistory from './Messaging/MessageHistory'
import SubmitMessages from './Messaging/SubmitMessage'
import MessagesSearch from './Messaging/MessageSearch'
import firebase from '../../firebase/init'
export default {
  components:{MessageHistory, SubmitMessages, MessagesSearch},
  computed:{
    chat(){
      return this.$store.state.messages
    }
  },
  data(){ 
    return{
      messages:[]
    }
  },
  methods:{
    
  },
 created(){



    // let messages=[];
    // const db = firebase.firestore()
    // db.collection('---13adeehilnnnnoooswy').get().then((snapshot) => {
    // // console.log(snapshot.data().conversations)
      
    //   snapshot.docs.map(doc=>{
    //     messages.push(doc.data())
    //     console.log(doc.data())}

    //     )
    //     this.$store.dispatch("getMessages", messages)
      
    // }).catch((e) => console.log(e))
  },
  mounted(){
   
      //this.messages=message
      // const db = firebase.firestore()
      // db.collection('---13adeehilnnnnoooswy').where('convo', "==", '---13adeehilnnnnoooswy').get()
      // .then((snapshot) => {
      //    console.log(snapshot.val())
      // }).catch((e) => console.log(e))
          

      //-------------Start of time conversion----------
        //  console.log(typeof doc.data().timestamp)
        //   let temp = parseInt(doc.data().timestamp) 
        //   temp = new Date(temp)
        //   console.log(temp)
        //   let day = temp.getDay()
        //   let month = temp.getMonth()
        //   let monthYear = months[month]
        //   let year = temp.getFullYear();
        //   let hours = temp.getHours();
        //   let meridian;
        //   (hours <= 12) ? meridian = 'a.m.' : meridian = "p.m.";
        //   hours = ((hours + 11) % 12 + 1);
        //   let minutes = temp.getMinutes();
        //   if(minutes < 10){minutes = `0${minutes}`}
        //   if(hours < 10){hours = `0${hours}`}  
        //   let date = `${hours}:${minutes} ${meridian}| ${monthYear} ${day}`
        //   console.log(doc.data().timestamp)
        //   console.log("Date: ", date)
        //   doc.data().timestamp = date;
           
          
          
        //-------------end of time conversion----------
          
    //      console.log(this.messages)
    
    
       
        
 
  }
}
</script>

<style>

</style>