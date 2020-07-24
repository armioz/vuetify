<template>
  <v-app>
    <nuxt />
  </v-app>
</template>

<script>
export default {
  name: 'Login',
  middleware: ['notAuth'],
}
</script>

<style>
.bg-login {
  background-color: turquoise;
}
</style>