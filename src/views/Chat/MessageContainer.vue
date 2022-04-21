<template>
  <div class="messages-container">
      <MessagesSearch/>
      <MessageHistory/>
      <Messages/>
      <p>{{this.messages}}</p>
  </div>         
</template>

<script>
import MessageHistory from './MessageHistory'
import Messages from './Messages'
import MessagesSearch from './MessageSearch'
export default {
components:{MessageHistory, Messages, MessagesSearch},
data(){


  //messages / apskdjf;lapouipe / 
  return{
    messages:{
      id:1, 
    conversations:[
      { 
        id:1, 
        otherID:2,
        message:'This is a message by me' , 
        timestamp:'4/19/2022'},
      {
        id:2, 
        message:'Im replying to your message delilah', 
        timestamp:'4/19/2022'},
      {
        id:1, 
        message:"I'm replying to your reply Jason", 
        timestamp:'4/20/2022'}
        ,]}
  }
},

}
</script>

<style>

</style>