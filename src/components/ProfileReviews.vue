<template>
  <div class="profile-reviews">
      <div class="card shadow">
          <div class="card-body">
              <h2>Check Out What Others Have to Say</h2>
              <ul class="list-group list-group-flush text-start">
                <Reviews    name="Jessica"
                            review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget aliquam felis. Donec porta sollicitudin facilisis. Sed facilisis, 
                            dui a gravida interdum, odio neque lacinia enim, ac iaculis ante felis in quam. Donec mattis suscipit purus, quis pellentesque libero. 
                            In et velit in felis lacinia blandit et nec purus. In fringilla nisl quis magna suscipit varius. Aliquam pretium mattis enim non euismod. 
                            eget porttitor lobortis." 
                            stars="5" 
                            image="review-portrait-four"/> 
                <Reviews    name="Mariee"
                            review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget aliquam felis. Donec porta sollicitudin facilisis. Sed facilisis, 
                            dui a gravida." 
                            stars="4" 
                            image="review-portrait-four"/>  
            </ul>
          </div>
      </div>
  </div>
</template>

<script>

import Reviews from '../components/Reviews';
export default {
components:{ Reviews},
}
</script>

<style>

.review-card-body{
    
}
 
</style>