<template lang="pug">
  div.container
    div.left
      h2 
        nuxt-link(to="/") Players
      ul.players
        li(v-for="user in users")(:key="user.id")
          nuxt-link(:to="'/'+user.id") {{ user.name }}
    div.right
      nuxt-child(:key="$route.params.id")
</template>

<script>
export default {
  asyncData({ env }) {
    return { users: env.users }
  }
}
</script>

<style lang="sass">
.page-enter-active, .page-leave-active 
  transition: opacity .4s, transform .4s;
  transform-style: preserve-3d;
  backface-visibility: hidden;
  opacity: 1;

.page-enter, .page-leave-active 
  opacity: 0.5;
  transform: rotateY(100deg);

.container 
  width: 100%;
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  box-sizing: border-box;

  .left 
    width: 50%;
    position: absolute;
    top: 0;
    left: 0;

    .players 
      list-style-type: none;
      margin: 0;
      padding: 0;

      li

        a 
          display: block;
          border: 1px #ddd solid;
          padding: 10px;
          text-align: left;
          color: #222;
          text-decoration: none;
        
        a:hover 
          color: orange;
        
  
  .right 
    width: 50%;
    position: absolute;
    top: 0;
    right: 0;
</style>
