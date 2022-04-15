<template>
  <div class="messages-container">
      <MessagesSearch/>
      <MessageHistory/>
      <Messages/>
  </div>         
</template>

<script>
import MessageHistory from './MessageHistory'
import Messages from './Messages'
import MessagesSearch from './MessageSearch'
export default {
components:{MessageHistory, Messages, MessagesSearch}
}
</script>

<style>

</style>