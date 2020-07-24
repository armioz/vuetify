<template
  ><div>
    <v-navigation-drawer v-model="drawer" :clipped="true" app>
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />

      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn @click="logout">
        logout
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      clipped: true,
      fixed: false,

      right: true,
      rightDrawer: false,
    }
  },
  computed: {
    ...mapState({
      //   drawer: (state) => state.mainlayout.drawer,
      title: (state) => state.mainlayout.title,
      items: (state) => state.mainlayout.items,
    }),
    // ...mapMutations({ setDrawer: 'mainlayout/set_drawer' }),
    drawer: {
      get() {
        return this.$nuxt.$store.state.mainlayout.drawer
      },
      set(val) {
        // console.log(this.$nuxt.$store.state.mainlayout.drawer)

        // console.log('new layout', val)
        this.$store.commit('mainlayout/set_drawer', val)
        // console.log(this.$nuxt.$store.state.mainlayout.drawer)
      },
    },
  },
  mounted() {
    // console.log('state', this.$nuxt.$store.state.mainlayout.drawer)
    // console.log(this.$nuxt.$store.state.mainlayout)
  },
  methods: {
    register() {
      //   console.log(this.drawer)
      //   return console.log('register')
    },
    async logout() {
      console.log('logout')
      await this.$nuxt.$auth.logout()
      this.$router.push('/login')
    },
  },
}
</script>

<style></style>
