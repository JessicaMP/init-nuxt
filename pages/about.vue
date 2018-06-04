<template lang="pug">
	div
		p Hi from {{ name }}
		nuxt-link(to="/") Home page
</template>

<script>
export default {
  asyncData() {
    return {
      name: process.static ? 'static' : (process.server ? 'server' : 'client')
    }
  },
  head: {
    title: 'About page'
  }
}
</script>
