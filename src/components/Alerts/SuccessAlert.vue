<template>
    <div class="alert alert-success" role="alert">
        <p>{{text}}</p>
    </div>
</template>
<script>
import Loading from '../Spinner.vue'
export default {
props:['text'],
components:{Loading}
}
</script>