<template lang="pug">
  div
    p Hi from {{name}}
    nuxt-link(to="/") Home page
</template>

<script>
export default {
  layout: 'dark',
  asyncData({ req }) {
    return {
      name: req ? 'server' : 'client'
    }
  }
}
</script>