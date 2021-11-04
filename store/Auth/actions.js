export default {
  async onAuthStateChangedAction(state, { authUser, claims }) {
    if (!authUser) {
      // remove state
      state.commit('SET_USER', null)

      //redirect from here
      this.$router.push({
        path: '/login',
      })
    } else {
      const { uid, email } = authUser
      //console.log(claims);
      state.commit('SET_USER', {
        uid,
        email,
        claims
      })
    }
  },
    }    