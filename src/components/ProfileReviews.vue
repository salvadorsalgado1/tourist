<template>
  <div class="profile-reviews">
      <div class="card shadow">
          <div class="card-body">
              <h2>Check Out What Others Have to Say</h2>
              <ul class="list-group list-group-flush text-start">
                    <li class="list-group-item d-flex justify-content-between align-items-start">
                        <div class="review">
                            <div class="review-card-1">
                                <img class="review-img rounded-circle" src="../assets/portraits/review-portrait-four.jpg" alt=""/>
                            </div>
                            <div class="review-card-2">
                                <Stars v-for="index in 4" :key="index"/>
                            </div>
                            <div class="review-card-3">
                                <p>This is the review of the service.</p>
                            </div>
                        </div>
                     </li>
                    <li class="list-group-item"><img class="review-img rounded-circle" src="../assets/portraits/review-portrait-four.jpg" alt=""/> This is the review of the service.</li>
                    <li class="list-group-item"><img class="review-img rounded-circle" src="../assets/portraits/review-portrait-four.jpg" alt=""/> This is the review of the service.</li>
                    <li class="list-group-item"><img class="review-img rounded-circle" src="../assets/portraits/review-portrait-four.jpg" alt=""/> This is the review of the service.</li>
                    <li class="list-group-item"><img class="review-img rounded-circle" src="../assets/portraits/review-portrait-four.jpg" alt=""/> This is the review of the service.</li>
                </ul>
          </div>
      </div>
  </div>
</template>

<script>
import Stars from '../components/Stars'

export default {
components:{Stars},
}
</script>

<style>
.review-img{
    width:20%;
}
.review{
    display: flex;
    -webkit-box-align:center;
    align-items: center;
}
 
</style>