<template lang="pug">
  div.user
    h2 {{ name }}
    h4 @{{ username }}
    p Email: {{ email }}
    p
      nuxt-link(to="/") List of users
</template>

<script>
import axios from 'axios'

export default {
  validate({ params }) {
    return !isNaN(+params.id)
  },
  async asyncData({ params, error }) {
    try {
      const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${+params.id}`)
      return data
    } catch (e) {
      error({ message: 'User not found', statusCode: 404 })
    }
  }
}
</script>

<style lang="sass">
.user 
  text-align: center;
  margin-top: 100px;
  font-family: sans-serif;
</style>
