import { createStore } from 'vuex'
import router from "../router"
import axios from 'axios'
export default createStore({
  state: {
    user:null,
    userID:null,
    slug:'',
    reviews:[],
    loggedIn:false,
    reviews:[],
    person:[],
    details:[],
    password:'',
    feedback:'',
    successLogin:false
  },
  mutations: {
    setUser(state, payload){
      state.user = payload[0]
      state.userID = payload[0].userID;
      state.slug = payload[0].slug;
      
      //let slug = state.user.slug;
      state.loggedIn = true;
     // router.push({path:`/profile/${slug}`})
      
    },
    setReviews(state, payload){
      state.reviews = payload;
    },
    logoutUser(state){
       state.loggedIn=false;
    },
    getDetails(state, payload){
      state.reviews = payload;
    },
    getReviews(state, payload){
      state.reviews = payload;
    },
    getPerson(state, payload){
      state.person = payload;
    },
    successLoginState(state){
      state.successLogin = true;
    }
  },
  actions: {
    getProfile({commit}, payload){
      console.log(payload)
    },
    getReviews({commit}, payload){
      axios.get(`http://localhost:5000/api/reviews/${payload}`)
      .then(response=>{
        console.log(response.data);
        commit('setReviews', response.data);
      })
    },
    acceptLogin({commit}, payload){
      console.log("accept login ", payload);
      axios.get(`http://localhost:5000/api/login/success/${payload}`)
      .then(response=>{
        console.log(response.data);
        commit('setUser', response.data);
        this.dispatch('getReviews', payload)
      })
    },
    loginUser({commit}, payload){
      axios.get(`http://localhost:5000/api/login/user/${payload.email}`)
      .then(response=>{
        let userPassword = response.data[0].userPassword;
        let ID = response.data[0].userID;
        console.log(response.data[0].userPassword);
        if(userPassword == payload.password){
          console.log(ID);
          commit('successLoginState');
          this.dispatch('acceptLogin', ID);
        }else{
          console.log("cannot login")
        }
      }) 
    },
    dispatchUser({commit}){
      fetch("./testData/person.json")
      .then((res)=>{
        return res.json();
      }).then((data)=>{
         
        commit('getPerson', data);
       })
    },
    
  },
  modules: {
  }
})
