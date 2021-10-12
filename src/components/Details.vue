<template>
  <div class="details">
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
</template>

<script>
export default {
  mounted(){
    this.$store.dispatch('dispatchDetails');
  },
  computed:{

  }
};
</script>

<style></style>
