<template>
 <div class="messaging">
     <div class="container">
         <div class="card">
             <div class="card-body">
                 <div class="inbox_msg">
                    <MessageContainer/>
                </div>
             </div>
         </div>
     </div>
 </div>
</template>

<script>
import MessageContainer from './MessageContainer'
export default {
components:{MessageContainer}
}
</script>

<style>

</style>