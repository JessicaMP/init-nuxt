<template lang="pug">
  div.container
    h1 Welcome!
    nuxt-link(to="/about") Go to
</template>

<script>
export default {
  asyncData() {
    return new Promise((resolve) => {
      setTimeout(function () {
        resolve({})
      }, 1000)
    })
  }
}
</script>

<style lang="sass" scoped>
.container
  font-size: 20px;
  text-align: center;
  padding-top: 100px;

</style>

