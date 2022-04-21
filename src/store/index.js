import { createStore, storeKey } from 'vuex'
import axios from 'axios'
import firebase from '../firebase/init.js'
import router from '../router'
export default createStore({
  state: {
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
      state.fullName = payload[0].fullName;
      state.user = payload[0]
      state.userID = payload[0].userID;
      state.slug = payload[0].slug;
      state.details = payload[0].details_completed
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
    setReservations(state, payload){
      state.reservations.pending = payload[0]
      state.reservations.rejected = payload[1]
      state.reservations.accepted = payload[2]
    },
    successfullySent(state){
      state.emailSent = true;
    }
  },
  actions:{
    retrievePassword({commit}, payload){
      axios.get(`http://localhost:5000/api/email/${payload}`)
      .then((response)=>{
        commit('successfullySent')
        console.log(response.data[0].userPassword)
      })
      .catch(error=>{
        console.log("Error sending email:", error);
      })
    },
    acceptReservation({commit}, payload){
      axios.post(`http://localhost:5000/api/reservation/accept`, {id:payload})
    },
    rejectReservation({commit}, payload){
      axios.post(`http://localhost:5000/api/reservation/reject`, {id:payload})
    },
    submitReservation({commit}, payload){
      axios.post('http://localhost:5000/api/reservation/submit', {reservation:payload})
      .catch((error)=>{
        console.log(error)
      })
    },
    getReservations({commit}, payload){
      console.log(payload)
      axios.get(`http://localhost:5000/api/reservation/${payload}`)
      .then((response)=>{
        console.log(response.data);
        commit('setReservations', response.data)
      }) 
    },
    submitProfileImage({commit}, payload){
      console.log(payload)
      axios.post('http://localhost:5000/api/profile/upload/image', {user:payload})
      .then(()=>{
         commit('setProfileImage', payload.userImage)
      })
      .catch((err)=>{
        console.log("Invalid url");
      })
    },
    discoverUsers({commit}){
      axios.get('http://localhost:5000/api/users/list/discover')
      .then(response=>{
        commit('setDiscover', response.data)
      })
    },
    submitDescription({commit}, payload){
      axios.post('http://localhost:5000/api/profile/description', {description:payload})
      .catch(err=>{console.log(err)})
    },
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
        console.log(response.data[0][0].userID);
        let userID = response.data[0][0].userID;
        console.log('Finding: ', userID)
       // const db = firebase.firestore()
       // console.log(db)
       // const snapshot = db.collection('profile').where('userID', '==', userID).get()
        //.then(response=>{
          //response.docs.map(doc=>{
          commit('setProfileImage', response.data[0][0].imageURL)
            ///console.log(doc.data().image)
        //  })
     //   })
        //console.log(snapshot) 
        console.log(response.data)
        commit('setProfile', response.data)
      }) 
    },
    getListUsers({commit}, payload){
      console.log(payload);
      axios.get(`http://localhost:5000/api/users/list/${payload}`)
      .then(response=>{
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
    acceptLogin({commit, state}, payload){
      console.log("accept login ", payload);
      axios.get(`http://localhost:5000/api/login/success/${payload}`)
      .then(response=>{
        console.log(response.data);
        commit('setUser', response.data);
        if(state.details){console.log("Going to Home route", state.details);router.push({name:'Home'})}
        else{console.log("Going to Details route", state.details);router.push({name:'Details'})}
        this.dispatch('getReservations', payload)
      })
    },
    loginUser({commit, state}, payload){
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
            
         //   const db = firebase.firestore()
            //console.log(db)
          //  const snapshot = db.collection('profile').where('userID', '==', ID).get()
            //.then(response=>{
             // response.docs.map(doc=>{
            //  commit('setProfileImage', response.data)
                //console.log(doc.data())
              //})
         //  })
          //  console.log(snapshot)
           
          }else{
            console.log("cannot login")
          }
        }
      })
    },
    uploadImage({commit}, payload){
      console.log(payload)
      axios.post(`http://localhost:5000/api/profile/image`, {image:payload})
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
       
      axios.get(`http://localhost:5000/api/register/check/email/${payload.email}`)
      .then(response=>{
        console.log(response.data)
        if(payload.email === response.data[0].email){
          console.log('Email already exists.')
        } 
       }).catch(()=>{
        console.log("Email is unique")
        axios.get(`http://localhost:5000/api/register/check/username/${payload.slug}`)
          .then(response=>{
            console.log(response.data[0].slug)
            if(payload.slug == response.data[0].slug){
              console.log("Username already exists")
            } 
           }).catch(()=>{
             console.log("Username is unique");
             axios.post('http://localhost:5000/api/register', {
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
      axios.post('http://localhost:5000/api/register/details', {details:payload})
      .then(()=>{
          axios.post('http://localhost:5000/api/register/details/true', {id:payload.id}).then(()=>{
            console.log("Succeessful Post: ", payload)
            router.push({name:'Home'})
          })
          .catch((err)=>{console.log(err)})
      }).catch(err=>{
          console.log(err)
      })
    },
    checkUserEmailExists({commit}, payload){
      axios.get(`http://localhost:5000/api/register/check/email/${payload}`)
      .then(response=>{
        commit('setCheckEmail', response.data[0].email)
      })
    },
    checkUserNameExists({commit}, payload){
      axios.get(`http://localhost:5000/api/register/check/username/${payload}`)
      .then(response=>{
        console.log(response.data[0].slug)
        commit('setCheckUserName', response.data[0].slug)
      })
    }
    
  },
  modules: {
    
  }
})
