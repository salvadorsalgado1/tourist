import { createStore } from 'vuex'
import axios from 'axios'
export default createStore({
  state: {
    loggedIn:false,
    image:null,
    test:5,
    user:{profile:{}, socials:{}},
    userID:null,
    profile:[],
    socials:[],
    fullName:'',
    slug:'',
    reviews:[],
    loggedIn:false,
    reviews:[],
    person:[],
    details:[],
    password:'',
    feedback:'',
    userList:'',
    successLogin:false,
    errorLogin:false,
    profileImage:'default-profile-picture1'
  },
  mutations: {
    setUser(state, payload){
      state.fullName = payload[0].fullName;
      state.user = payload[0]
      state.userID = payload[0].userID;
      state.slug = payload[0].slug;
      //let slug = state.user.slug;
      state.loggedIn = true;
     // router.push({path:`/profile/${slug}`})
    },
    logoutUser(state){
       state.loggedIn=false;
    },
    getPerson(state, payload){
      state.person = payload;
    },
    successLoginState(state){
      state.successLogin = true;
    },
    failedLoginState(state){
      console.log("Setting Login State to true");
      state.errorLogin=true;
    },
    setUserList(state, payload){
      state.userList = payload;
    },
    setProfile(state, payload){
      state.profile = payload[0][0]
      state.reviews = payload[1] 
    }
  },
  actions: {
    submitReview({commit}, payload){
      axios.post('http://localhost:5000/api/reviews/submit', {review:payload})
       .catch(err=>{
         console.log(err)
       })
    },
    getProfile({commit}, payload){
      console.log(payload)
      axios.get(`http://localhost:5000/api/profile/${payload}`)
      .then(response=>{
        console.log(response.data)
        commit('setProfile', response.data)
      }) 
    },
    getListUsers({commit}, payload){
      console.log(payload);
      axios.get(`http://localhost:5000/api/users/list/${payload}`)
      .then(response=>{
        console.log(response.data);
        commit('setUserList', response.data);
      })
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
        //this.dispatch('getReviews', payload)
      })
    },
    loginUser({commit}, payload){
      axios.get(`http://localhost:5000/api/login/user/${payload.email}`)
      .then(response=>{
        if(response.data.length == 0){
          console.log("Login User, If Statement");
        }else{
            console.log(response.data);
            let userPassword = response.data[0].userPassword;
          if(userPassword == payload.password){
            let ID = response.data[0].userID;
            commit('successLoginState');
            this.dispatch('acceptLogin', ID);
          }else{
            console.log("cannot login")
          }
        }
      })
    },
    uploadImage({commit}, payload){
      console.log(payload)
      axios.post(`http://localhost:5000/api/profile/image`, {     
        image:payload
    }).then(response=>{
      console.log(response)
    }).catch(error => {
      this.errorMessage = error.message;
      console.error("There was an error!", error);
    });
    }
    
  },
  modules: {
    
  }
})
