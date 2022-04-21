<template>
  <div class="inbox_people">
    <div class="inbox_chat list-group" id="list-tab" role="tablist">
      <a v-for="message in history" :key="message.id" class="chat_list active_chat list-group-item list-group-item-action" :id="`list-${message.id}-list`" data-bs-toggle="list" :href="`#list-${message.id}`" role="tab" :aria-controls="`list-${message.id}`">
        <div class="chat_people">
          <div class="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" class="img-mes" alt="sunil"> </div>
          <div class="chat_ib">
            <h5>{{message.name}} <span class="chat_date">{{message.date}}</span></h5>
            <p>{{message.preview}}</p>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
data(){
  return{
    history:[
      {
        id:'1',
        name:'Peter Jackson', 
        date:'April 16, 2022', 
        preview:'Apples are grown in such quantities as to entitle the county.'
      }, 
      {
        id:'2',
        name:'Maria Jens', 
        date:'April 19, 2022', 
        preview:'Apples are grown in such quantities as to entitle the county.'
      }, 
      {
        id:'3',
        name:'Lauren Jackson', 
        date:'April 13, 2022', 
        preview:'Apples are grown in such quantities as to entitle the county.'
      }, ]
  }
}
}
</script>

<style>

</style>