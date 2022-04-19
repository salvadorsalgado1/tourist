<template>
  <div aria-live="polite" aria-atomic="true" class="bg-dark position-relative bd-example-toasts">
  <div class="toast-container position-absolute p-3 bottom-0 end-0" id="toastPlacement" data-original-class="toast-container position-absolute p-3">
    <div class="toast fade show">
      <div class="toast-header">
        <svg class="bd-placeholder-img rounded me-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#007aff"></rect></svg>
        <strong class="me-auto">Profile Image</strong>
        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
      <div class="toast-body">
        This will check if an intro or social media links exist
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
mounted(){
    var toastElList = [].slice.call(document.querySelectorAll('.toast'))
    var toastList = toastElList.map(function (toastEl) {
  return new bootstrap.Toast(toastEl, {options:{animation:true}})
})
toastList.forEach(toast => toast.show())
  }
}
</script>

<style>

</style>