<template>
  <div class="details">
    <div class="card shadow">
      <div class="card-body">
        <h2>About Me</h2>
        <table class="table table-bordered table-striped">
          <tbody>
            <tr>
              <th>Location</th>
              <td>{{location}}</td>
            </tr>
            <tr>
              <th>Age</th>
              <td>{{age}}</td>
            </tr>
            <tr>
              <th>Languages Spoken</th>
              <td>{{languageSpoken}}</td>
            </tr>
            <tr>
              <th>Favorite Food</th>
              <td>{{food}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:['location', 'age', 'languageSpoken', 'food'],
  mounted(){
   },
  computed:{

  }
};
</script>

<style>

</style>
