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
      
      await this.$fire.firestore.collection('Users').where("uid","==",uid).get().then(snapshot => {
        snapshot.forEach(prod => {
          state.commit('SET_USER', {
            uid,
            email,
            claims,
            Name:prod.data().Name,
            Phone:prod.data().Phone
          })   
          
        })
      });
      //console.log(userdetails)
      
    }
  },
    }    