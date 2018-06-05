<template lang="pug">
  div
    h1 {{ $route.params.slug || 'Home'}}
    pre {{ userAgent }}
    ul
      li
        nuxt-link(to='/') Home
      li
</template>
