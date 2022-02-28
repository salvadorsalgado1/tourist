<template>
    <div class="alert alert-success" role="alert">
        <p>{{text}} <Loading start="true"/></p>
    </div>
   
</template>
<script>
import Loading from '../Spinner.vue'
export default {
props:['text'],
components:{Loading}
}
</script>