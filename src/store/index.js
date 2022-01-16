import { createStore } from 'vuex'
 
import axios from 'axios'
export default createStore({
  state: {
 
    loggedIn:false,
    reviews:[],
    person:[]
    
 
  },
  mutations: {
    getReviews(state, payload){
      state.reviews = payload;
    },
    getPerson(state, payload){
      state.person = payload;
    }
  },
  actions: {
    dispatchUser({commit}){
      fetch("./testData/person.json")
      .then(function(res){
        return res.json();
      }).then(function(data){
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
