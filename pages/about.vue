<template>
  <div>
    <p>Hi from {{ name }}</p>
    <nuxt-link to="/">Home page</nuxt-link>
  </div>
</template>

<script>
export default {
  layout: 'aqua',
  asyncData({ req }) {
    return {
      name: req ? 'server' : 'client'
    }
  }
  // name: 'Cat'
}
</script>