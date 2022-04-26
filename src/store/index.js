import { createStore, storeKey } from 'vuex'
import axios from 'axios'
import firebase from '../firebase/init.js'
import router from '../router'
export default createStore({
  state: {
    current_session:'',
    sessions:[],
    messages:null,
    reviews:[],
    profile:[],
    loggedIn:false,
    image:null,
    user:{profile:{}, socials:{}},
    userID:null,
    socials:[],
    fullName:'',
    slug:'',
    loggedIn:false,
    reviews:[],
    person:[],
    details:[],
    password:'',
    feedback:'',
    userList:'',
    successLogin:false,
    errorLogin:false,
    profileImage:null,
    returnEmail:null,
    returnUserName:null,
    test:'testing',
    details:null,
    discover:[],
    reservations:{pending:'', accepted:'', rejected:''},
    emailSent:false
  },
  mutations: {
    setUser(state, payload){
      console.log(payload)
      state.fullName = payload[0].fullName;
      state.user = payload[0]
      state.userID = payload[0].userID;
      state.slug = payload[0].slug;
      state.details = payload[0].details_completed
      //let slug = state.user.slug;
      state.loggedIn = true;
     // router.push({path:`/profile/${slug}`})
    },
    setAcceptReservations(state, payload){
      state.reservations.rejected.splice(payload,1);
    },
    setReservations(state, payload){
      state.reservations.pending = payload[0]
      state.reservations.rejected = payload[1]
      state.reservations.accepted = payload[2]
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
    },
    setProfileImage(state,payload){
      state.user.imageURL = payload
    },
    setCheckEmail(state, payload){
      state.returnEmail = payload
    },
    setCheckUserName(state, payload){
      state.returnUserName = payload
    },
    setRoute(state, payload){
      state.routes = payload;
    },
    setDiscover(state, payload){
      state.discover = payload
    },
    successfullySent(state){
      state.emailSent = true;
    },
    setMessages(state, payload){
     
   
     console.log(payload)
     state.messages = payload
       
    },
    setNewMessages(state, payload){
       console.log(payload)
      state.messages=payload;
    },
    setUserSessions(state, payload){
      state.sessions = payload
    },
    setSession(state, payload){
      state.current_session = payload
    },
    addSession(state, payload){
      state.sessions.unshift(payload)
    }
  },
  actions:{
    createSession({commit}, payload){
      axios.get(`/api/messages/check/${payload.convo}`)
        .then((response)=>{
          console.log(response.data)
          let retrieveSession = response.data[0].session_name;
          if(retrieveSession == payload.convo){
           
            console.log("Match")
            //TODO
            //payload.session_id

          }
        }).catch(()=>{
          console.log("Catch")
          axios.post(`/api/messages/send`, {
            convo:payload.convo,
            //--Profile---
            profile_userID:payload.profile.userID,
            profile_FullName:payload.profile.fullName,
            profile_image:payload.profile.image,
            //----End of Profile
            //----User----
            user_userID:payload.user.userID,
            user_FullName:payload.user.fullName,
            user_image:payload.user.image
            //----End of User----
          }).catch(error=>{
            console.log(error)
          })
        })
    },
    getNewMessages({commit}, payload){
      console.log(payload)
      //commit('setNewMessages', payload)
    },
    getUserSessions({commit}, payload){
       axios.get(`/api/messages/${payload}`)
       .then((response)=>{
         commit('setUserSessions', response.data)
       })
    }, 
    retrievePassword({commit}, payload){
      axios.get(`/api/email/${payload}`)
      .then((response)=>{
        commit('successfullySent')
        console.log(response.data[0].userPassword)
      })
      .catch(error=>{
        console.log("Error sending email:", error);
      })
    },
    acceptReservation({commit}, payload){
      axios.post(`/api/reservation/accept`, {id:payload}).then(()=>{
        commit('setAcceptReservations', payload)
      })
    },
    rejectReservation({commit}, payload){
      axios.post(`/api/reservation/reject`, {id:payload})
    },
    submitReservation({commit}, payload){
      axios.post('/api/reservation/submit', {reservation:payload})
      .catch((error)=>{
        console.log(error)
      })
    },
    getReservations({commit}, payload){
      console.log(payload)
      axios.get(`/api/reservation/${payload}`)
      .then((response)=>{
        
        commit('setReservations', response.data)
      }) 
    },
    submitProfileImage({commit}, payload){
      console.log(payload)
      axios.post('/api/profile/upload/image', {user:payload})
      .then(()=>{
         commit('setProfileImage', payload.userImage)
      })
      .catch((err)=>{
        console.log("Invalid url");
      })
    },
    discoverUsers({commit}){
      axios.get('/api/users/list/discover')
      .then(response=>{
        commit('setDiscover', response.data)
      })
    },
    submitDescription({commit}, payload){
      axios.post('/api/profile/description', {description:payload})
      .catch(err=>{console.log(err)})
    },
    submitReview({commit}, payload){
      axios.post('/api/reviews/submit', {review:payload})
       .catch(err=>{
         console.log(err)
       })
    },
    getProfile({commit}, payload){
      console.log(payload)
      axios.get(`/api/profile/${payload}`)
      .then(response=>{
        console.log(response.data)
        console.log(response.data[0][0].userID);
        let userID = response.data[0][0].userID;
        console.log('Finding: ', userID)
        commit('setProfileImage', response.data[0][0].imageURL)

        console.log(response.data)
        commit('setProfile', response.data)
      }) 
    },
    getListUsers({commit}, payload){
      console.log(payload);
      axios.get(`/api/users/list/${payload}`)
      .then(response=>{
        commit('setUserList', response.data);
      })
    },
    getReviews({commit}, payload){
      axios.get(`/api/reviews/${payload}`)
      .then(response=>{
        console.log(response.data);
        commit('setReviews', response.data);
      })
    },
    acceptLogin({commit, state}, payload){
      console.log("accept login ", payload);
      axios.get(`/api/login/success/${payload}`)
      .then(response=>{
        console.log(response.data)
        commit('setUser', response.data);
        if(state.details){console.log("Going to Home route", state.details);router.push({name:'Home'})}
        else{console.log("Going to Details route", state.details);router.push({name:'Details'})}
        this.dispatch('getReservations', payload)
      })
    },
    loginUser({commit, state}, payload){
      axios.get(`/api/login/user/${payload.email}`)
      .then(response=>{
        if(response.data.length == 0){
          console.log("Login User, If Statement");
        }else{
            
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
      axios.post(`/api/profile/image`, {image:payload})
      .then(()=>{
      commit('setProfileImage', payload);
    }).catch(error => {
      this.errorMessage = error.message;
      console.error("There was an error!", error);
    });
    },
     
    createUser({commit}, payload){
      console.log(payload.email)
      console.log(payload.slug)
       
      axios.get(`/api/register/check/email/${payload.email}`)
      .then(response=>{
        console.log(response.data)
        if(payload.email === response.data[0].email){
          console.log('Email already exists.')
        } 
       }).catch(()=>{
        console.log("Email is unique")
        axios.get(`/api/register/check/username/${payload.slug}`)
          .then(response=>{
            console.log(response.data[0].slug)
            if(payload.slug == response.data[0].slug){
              console.log("Username already exists")
            } 
           }).catch(()=>{
             console.log("Username is unique");
             axios.post('/api/register', {
                fullName:payload.fullName,
                userName:payload.userName,
                email:payload.email,
                password:payload.password,
                slug:payload.slug
              }).then(()=>{
                this.dispatch('loginUser', payload)
               //router.push({name:'Home'})
              }).catch(error=>{
                console.log(error)
              })
           }) 
      }) 
    },
    submitDetails({commit, state}, payload){ /*.then(()=>{
        const db = firebase.firestore()
        db.collection('profile').doc(state.user.slug).set({
          userID:payload.id,
          image:'https://firebasestorage.googleapis.com/v0/b/tourist-f5057.appspot.com/o/images%2Fdefault-profile-picture1.jpg?alt=media&token=a4443b3f-5584-469a-9399-e9e6dde2727a',
          slug: state.user.slug,
          timestamp:Date.now() })*/

      console.log("Payload", payload)
      axios.post('/api/register/details', {details:payload})
      .then(()=>{
          axios.post('/api/register/details/true', {id:payload.id}).then(()=>{
            console.log("Succeessful Post: ", payload)
            router.push({name:'Home'})
          })
          .catch((err)=>{console.log(err)})
      }).catch(err=>{
          console.log(err)
      })
    },
    checkUserEmailExists({commit}, payload){
      axios.get(`/api/register/check/email/${payload}`)
      .then(response=>{
        commit('setCheckEmail', response.data[0].email)
      })
    },
    checkUserNameExists({commit}, payload){
      axios.get(`/api/register/check/username/${payload}`)
      .then(response=>{
        console.log(response.data[0].slug)
        commit('setCheckUserName', response.data[0].slug)
      })
    }
    
  },
  modules: {
    
  }
})
