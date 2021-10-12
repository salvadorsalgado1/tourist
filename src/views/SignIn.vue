<template>
  <div class="sign-in">
    <div class="container">
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <form>
            <h3>Sign In</h3>
            <div class="form-group">
              <label>Email address</label>
              <input type="email" class="form-control form-control-lg" />
            </div>
            <div class="form-group">
              <label>Password</label>
                <input type="password" class="form-control form-control-lg" />
            </div>
            <button type="submit" class="btn btn-dark btn-lg btn-block">Sign In</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name:'SignIn'
}
</script>

<style>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
.card {
  margin: 0 auto;
  float: none; 
  margin-bottom: 10px;
}
</style>