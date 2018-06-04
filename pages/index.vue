<template lang="pug">
  div.container
    p.
      #[button(@click="showLoginError") Notif me!]
    p.
     Home - 
     #[nuxt-link(to="/about") About]
</template>

<script>
let miniToastr
if (process.browser) {
  miniToastr = require('mini-toastr').default
}

export default {
  mounted() {
    miniToastr.init()
  },
  notifications: {
    showLoginError: {
      title: 'Welcome!',
      message: 'Hello from nuxt.js',
      type: 'info'
    }
  }
}
</script>

<style lang="sass">
.container 
  text-align: center;
  padding-top: 100px;
  font-family: sans-serif;
</style>
