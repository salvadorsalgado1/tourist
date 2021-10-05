<template>
  <div class="profile">
      <div class="container">
          <div class="row mt-4">
              <div class="col-md-8 mb-4">
                <div class="card shadow">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-6">
                                    <img src="../assets/test-images/philip.jpg" alt="" class="rounded-circle profile-img " />
                                    <br/><button class="btn-primary btn mt-3">Edit Profile</button>
                                </div>
                                <div class="col-6 text-start">
                                    <h1 class="heading-name">Stan Martin</h1>
                                    <p class="left-text">Hello! My name is Stan! I'm from New York or where others may say, the <em>Red Apple</em>. I've lived in NY since I was 3 years old
                                    and have enjoyed every minute of it. I speak English and Portuguese and I definitely LOVE pizza. I can show you the best places around NY and it's glory.</p>
                                </div>
                            </div> 
                        </div>
                </div>
              </div> 
              </div>
              <div class="row">
                  <div class="col-md-6 col-sm-12 mb-4">
                    <div class="card shadow">
                        <div class="card-body">
                            <h2>Details About Me</h2>
                            <table class="table table-bordered table-striped">
                                    <tbody>
                                        <tr>
                                            <th>Location</th>
                                            <td>New York, New York</td>
                                        </tr>
                                        <tr>
                                            <th>Age</th>
                                            <td>45</td>
                                        </tr>
                                        <tr>
                                            <th>Languages Spoken</th>
                                            <td>English, Portuguese</td>
                                        </tr>
                                        <tr>
                                            <th>Favorite Food</th>
                                            <td>Pizza</td>
                                        </tr>
                                    </tbody>
                                </table>
                        </div>
                    </div>
              </div>
              <div class="col-md-6 col-sm-12">
                    <ProfileReviews/>    
              </div>
          </div> 
      </div>
  </div>
</template>

<script>
import ProfileReviews from '../components/ProfileReviews'
export default {
components:{
    ProfileReviews
}
}
</script>

<style>
.heading-name{
    font-size:1.8em;
}
.profile-img{
    width:45%;
}
</style>