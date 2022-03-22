<template>
  <div class="image-upload">
      <div class="container mt-4">
        <h3 class="text-start">Profile Image Details</h3>
        <div class="row">
          
          <div class="col-12">
            <img :src="this.getProfileImage" alt="" class="rounded-circle settings-img "/>
          </div>
          <div class="col-12">
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Profile Image Upload</label>
                <div class="input-group">
                <input @change="onFileSelected" type="file" ref="file" class="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload">
                <button @click="uploadFileSelected" type="submit" class="btn btn-primary">Submit</button>
                </div>          
              </div>
              <div class="progress">
                 <div class="progress-bar progress-bar-striped" role="progressbar" :style="`width: ${this.progress}%`" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">{{this.progress.toFixed(0)}}%</div>
              </div>
          </div>
        </div>
      </div>
  </div>
</template>
<script>
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import firebase from '../../firebase/init.js'
export default {
  data(){
    return{
      selectedFile:null,
      progress:0,
      urlImage:null
    }
  },
  methods:{
    onFileSelected(event){
      this.selectedFile = event.target.files[0]
    }, 
    uploadFileSelected(){
      const formData = new FormData();
      formData.append('image', this.selectedFile);
      formData.append('name', this.selectedFile.name);
      console.log(this.selectedFile)
      /*
      try{
        await this.$store.dispatch('uploadImage', formData); 
      } catch(err){
        console.log(err)
      } 
    }*/

      const metadata = {contentType:'image/jpeg'};
      const storage = getStorage();
      const storageRef = ref(storage, 'images/' + this.selectedFile.name);
      const uploadTask = uploadBytesResumable(storageRef, this.selectedFile, metadata);

      // Listen for state changes, errors, and completion of the upload.
      // Listen for state changes, errors, and completion of the upload.
uploadTask.on('state_changed',
  (snapshot) => {
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    this.progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + this.progress + '% done');
    switch (snapshot.state) {
      case 'paused':
        console.log('Upload is paused');
        break;
      case 'running':
        console.log('Upload is running');
        break;
    }
  }, 
  (error) => {
    // A full list of error codes is available at
    // https://firebase.google.com/docs/storage/web/handle-errors
    switch (error.code) {
      case 'storage/unauthorized':
        // User doesn't have permission to access the object
        break;
      case 'storage/canceled':
        // User canceled the upload
        break;

      // ...

      case 'storage/unknown':
        // Unknown error occurred, inspect error.serverResponse
        break;
    }
  }, 
  () => {
    // Upload completed successfully, now we can get the download URL
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {

      const db = firebase.firestore()
      db.collection('profile').doc('one-wish').set({
      userID:1,
      image:downloadURL,
      slug:'the-slug',
      timestamp:Date.now()
    }).catch(err=>{
      console.log(err)
    })



      this.urlImage = downloadURL;
      this.$store.commit('setProfileImage', this.urlImage)
      console.log('File available at', downloadURL);
    });
  }
);

     /* const uploadFiles = ref(`images/${this.selectedFile.name}`).put(this.selectedFile);
      uploadFiles.on("stage_changed",
      snapshot=>{},
      error=>{
        console.log(error)
      },
      ()=>{
        storage
          .ref("images")
          .child(this.selectedFile.name)
          .getDownloadURL()
          .then(url=>{
            console.log('t')
          });
      }*/
    }
  },
  computed:{
    getProfileImage(){
      return this.$store.state.profileImage
    }
  }
}
</script> 
<style>
.settings-img{
  width:30%;
}
</style>