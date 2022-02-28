<template>
  <div class="social-media container">
      <h2>I'm Social</h2>
      <div class=" social-icons">
        <a v-if="instagram" :href="`https://instagram.com/${instagram}`" title="Instagram"><img class="social-icon-instagram" src="../assets/icons/social/instagram.png" alt=""/></a>          
       <a v-if="twitter" :href="`https://twitter.com/${twitter}`" title="Twitter"><img class="social-icon-twitter" src="../assets/icons/social/twitter.png" alt=""/></a>
        <a v-if="tiktok" :href="`https://tiktok.com/@${tiktok}`" title="TikTok"><img class="social-icon-tiktok" src="../assets/icons/social/tiktok.png" alt=""/></a>
        <a v-if="facebook" :href="`https://facebook.com/${facebook}/`" title="Facebook"><img class="social-icon-facebook" src="../assets/icons/social/facebook.png" alt=""/></a>
        <a v-if="mail" :href="`mailto:${mail}`" title="mail"><img class="social-icon-mail" src="../assets/icons/social/mail.png" alt=""/></a>
        <a v-if="youtube" :href="`https://youtube.com/c/${youtube}`" title="Youtube"><img class="social-icon-youtube" src="../assets/icons/social/youtube.png" alt=""/></a>
      </div>
  </div>
</template>

<script>
export default {
props:['youtube', 'tiktok', 'mail', 'facebook', 'twitter', 'instagram']
}
</script>

<style>
.social-icons img
{
    width:25%;
}
.social-icons img{
    margin: 10px;
}
.social-icons a img:hover{
    border-radius:100px 100px;
    border:2px rgb(116, 212, 236) solid;
}
</style>