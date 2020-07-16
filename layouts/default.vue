<template>
  <v-app dark>
    <mainlayout />
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
// import { mapState } from 'vuex'
export default {
  middleware: ['auth'],
  name: 'Default',
  // computed: {
  // ...mapState[('mainlayout', ['set_drawer'])],
  // },
  async beforeDestroy() {
    await this.$auth.logout()
  },
}
</script>
