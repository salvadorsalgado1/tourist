import { createStore } from 'vuex'
 
import axios from 'axios'
export default createStore({
  state: {
    loggedIn:true,
    reviews:[],
    person:[],
    details:[]
  },
  mutations: {
    getDetails(state, payload){
      state.reviews = payload;
    },
    getReviews(state, payload){
      state.reviews = payload;
    },
    getPerson(state, payload){
      state.person = payload;
    }
  },
  actions: {
    dispatchDetails({commit}){
      fetch("./testData/details.json")
      .then((res)=>{
        return res.json();
      }).then((data)=>{
        console.log(data);
        commit('getDetails', data);
       })
      },
    dispatchUser({commit}){
      fetch("./testData/person.json")
      .then((res)=>{
        return res.json();
      }).then((data)=>{
        console.log(data);
        commit('getPerson', data);
       })
    },
    dispatchReviews({commit}){
       
      fetch("./testData/reviews.json")
      .then(function(res){
        return res.json();
      }).then(function(data){
        console.log(data);
        commit('getReviews', data);
       })
    }
  },
  modules: {
  }
})
