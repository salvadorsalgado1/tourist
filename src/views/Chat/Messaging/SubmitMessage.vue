<template>
  <div class="mesgs tab-content" id="nav-tabContent"> 
    <!-- <div class="msg_history tab-pane fade show active" id="list-1" role="tabpanel" aria-labelledby="list-1-list">
      <Message/>
    </div> -->
    <div class="type_msg">
      <form >
      <div class="input_msg_write">
          <!--adding function message-->
        <input v-model="message" type="text" class="write_msg" placeholder="Type a message" />
        <button @click="submitMessage(message)" class="msg_send_btn" type="button"><i class="fa fa-paper-plane-o" aria-hidden="true"></i></button>
      </div>
      </form>
    </div>
  </div>
</template>

<script>
import firebase from '../../../firebase/init'
export default {
data(){
  return{
    message:'',
  }
},
computed:{
  getParamsUser(){
     let user = {
        userID:this.$route.params.userID, 
        slug:this.$route.params.slug, 
        user_session:this.messagesQuery
      }

    return user
  },
  User(){
    return this.$store.state.userID
  },
  Session(){
    return this.$store.state.current_session
  },
  messagesQuery(){
    let user1 = this.getParamsUser
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
mounted(){
   
},
methods:{
  submitMessage(){
    console.log("submitted")
    if(this.message == ''){
      console.log("Cannot Submit Empty Message");
    }else{
      
      this.submitWithFirebase();
    }
    
    this.message= ''
  },
  submitWithFirebase(){
      const db = firebase.firestore()
      //---13adeehilnnnnoooswy 
      db.collection(`messages/${this.Session}/${this.Session}`).add({
      userID:this.User,
      message:this.message,
      timestamp:Date.now(),
      convo:`${this.Session}`},
      ).then(()=>{
        let chatWindow = document.getElementById('list-1'); 
        var xH = chatWindow.scrollHeight; 
        chatWindow.scrollTo(0, xH);
      })
      this.message=''
  }
}
}
</script>

<style>

</style>