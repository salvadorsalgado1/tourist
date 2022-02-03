<template>
    <div class="search">
        <div class="container">
            <div class="row mb-4 mt-4">
                <div class="col">
                    <div class="card shadow-lg">
                        <div class="card-body">
                            <h1>Search</h1>
                            <form @submit.prevent="searchResult()">
                                <div class="input-group input-group-md mb-3">
                                    <span class="input-group-text" id="basic-addon1"><i class="fas fa-search"></i></span>
                                    <input v-model="search" type="text" class="form-control" placeholder="Search" aria-label="Username" aria-describedby="basic-addon1">
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-4" v-for="(user, index) in currentUsers" :key="index">
                    <Users :name="user.fullName" :userURL="user.slug"/>
                </div>
            </div>   
        </div>
    </div>
</template>

<script>
import Users from '../components/Users'
export default {
    name:'Search',
    components:{Users},
    data(){
        return{
            search:''
        }
    },
    computed:{
        currentUsers(){
            let users = this.$store.state.userList;
            return users;
        }
    },
    mounted(){
        if(this.$route.params.search != null){
            this.search = this.$route.params.search;
        }
        if(this.search != ''){
            this.$store.dispatch('getListUsers', this.search)
        }else{
            console.log("empty")
        }
    },
    methods:{
        searchResult(){
            console.log(this.search)
            this.$store.dispatch('getListUsers', this.search)
        }
    }
}
</script>

<style>
 
</style>