<template>
  <div class="image-upload">
      <div class="container mt-4">
        <h3 class="text-start">Profile Image Details</h3>
        <div class="row">
          <div class="col-12">
            <img :src="require(`../../assets/profile/${getProfileImage}.jpg`)" alt="" class="rounded-circle settings-img "/>
          </div>
          <div class="col-12">
            <p>Update your profile image by uploading an image about 500x500</p>
            
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Profile Image Upload</label>
                <div class="input-group">
                <input @change="onFileSelected" type="file" ref="file" class="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload">
                <button @click="uploadFileSelected" type="submit" class="btn btn-primary">Submit</button>
                </div>          
              </div>
            
          </div>
        </div>
      </div>
  </div>
</template>

<script>
 
export default {
  data(){
    return{
      selectedFile:null
    }
  },
  methods:{
    onFileSelected(event){
      this.selectedFile = event.target.files[0]
    },
    async uploadFileSelected(){


    const formData = new FormData();
       formData.append('image', this.selectedFile);
      formData.append('name', this.selectedFile.name);
      console.log(this.selectedFile)
      try{
              await this.$store.dispatch('uploadImage', formData); 
      } catch(err){
        console.log(err)
      }
        
        
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