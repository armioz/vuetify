export const state = () => ({
  drawer: false,
  title: 'Vuetify.js',
  items: [
    {
      icon: 'mdi-apps',
      title: 'Welcome',
      to: '/',
    },
    {
      icon: 'mdi-chart-bubble',
      title: 'Inspire',
      to: '/inspire',
    },
    {
      icon: 'mdi-chart-bubble',
      title: 'login',
      to: '/login',
    },
  ],
})
export const mutations = {
  set_drawer(state, newValx) {
    // console.log(newValx)
    // console.log('b', state.drawer)
    state.drawer = newValx
    // console.log('a', state.drawer)
  },
  // set_drawer(state, newValx) {
  //   // console.log(newValx)
  //   // console.log('b', state.drawer)
  //   state.drawer = newValx
  //   // console.log('a', state.drawer)
  // },
}
