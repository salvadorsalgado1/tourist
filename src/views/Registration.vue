<template>
  <div class="registration">
      <div class="card" style="width: 22rem;margin:0 auto;">
        <div class="card-body">
          <form>
            <h3>Sign Up</h3>
             <div class="form-group">
                <label>Last Name</label>
                <input type="text" class="form-control form-control-lg"/>
            </div>

            <div class="form-group">
                <label>First Name</label>
                <input type="text" class="form-control form-control-lg"/>
            </div>

             <div class="form-group">
                <label>Email</label>
                <input type="email" class="form-control form-control-lg" />
            </div>

            <div class="form-group">
                <label>Password</label>
                <input type="password" class="form-control form-control-lg" />
            </div>

            <button type="submit" class="btn btn-dark btn-lg btn-block mt-3">Sign Up</button>
        </form>

        </div>
      </div>
  </div>
</template>

<script>
export default {
name:'Registration'
}
</script>

<style>
.registration{
  height:100vh;
  display:flex;
  justify-content: center;
  align-items:center;
}
</style>