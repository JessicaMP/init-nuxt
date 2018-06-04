<template lang="pug">
  div.container
    h1(v-if="(error.statusCode) === 404") Page not found
    h1(v-else) An error occured
    nuxt-link(to="/") Home page
</template>

<script>
export default {
  props: ['error']
}
</script>

<style lang="sass">
.container 
  font-family: sans-serif;
  padding-top: 10%;
  text-align: center;

  h1 
    font-size: 20px;

</style>