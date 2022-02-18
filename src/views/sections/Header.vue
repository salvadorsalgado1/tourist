<template>
<section class="header-section">
    <div class="header-body">
        <div class="container">
            <div class="row mb-4">
                <div class="col">
                    <h1 class="display-4">Try Giving The World A Search</h1>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <form @submit.prevent="searchResult()">
                    <div class="input-group input-group-lg mb-3">
                    <span class="input-group-text" id="basic-addon1"><i class="fas fa-search"></i></span>
                    <input v-model="search" type="text" class="form-control" placeholder="Search" aria-label="Username" aria-describedby="basic-addon1">
                    </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<script>
import Testing from '../Testing'
export default {
    components:{Testing},
    data(){
        return{
            search:'',
         }
    },
    methods:{
        searchResult(){
            console.log(this.search);
            this.$router.push({name:'Search', params:{search:this.search}});
        }
    },
}
</script>

<style>
.header-section{
    background:url('../../assets/backgrounds/postcards.jpg') no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
 }
.header-body{
    color:white;
    background-color:rgba(0, 0, 0, 0.349);
    height:80vh;
    display:flex;
    align-items:center;
    justify-content: center;
}
</style>