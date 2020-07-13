export const state = () => ({
  drawer: false,
  title: 'Vuetify.js',
})
export const mutations = {
  set_drawer(state, newValx) {
    // console.log(newValx)
    console.log('b', state.drawer)
    state.drawer = newValx
    console.log('a', state.drawer)
  },
}
