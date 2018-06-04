<template lang="pug">
  div.container
    h2 Users
    ul.users
      li(v-for="user in users")(:key="user.id")
        nuxt-link(:to="'/users/'+user.id") {{ user.name }}
</template>

<script>
import axios from "axios";

export default {
  async asyncData() {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    return { users: data };
  }
};
</script>

<style lang="sass" scoped>
.container 
  text-align: center;
  margin-top: 100px;
  font-family: sans-serif;


.users 
  list-style-type: none;

  li 

    a 
      display: inline-block;
      width: 200px;
      border: 1px #ddd solid;
      padding: 10px;
      text-align: left;
      color: #222;
      text-decoration: none;
    

    a:hover 
      color: orange;
</style>

