export default {
  
  async onAuthStateChangedAction(state, { authUser, claims }) {
    if (!authUser) {
      // remove state
      state.commit('SET_USER', null)

      //redirect from here
      this.$router.push({
        path: '/',
      })
    } else {
      //console.log(authUser);
      const { uid, email } = authUser
      //console.log(claims);
      //getcollectiondata(uid);
      // await this.$fire.firestore.collection('Users').doc(uid).get().then(snapshot => {
      //   console.log(snapshot.data())
      //   snapshot.forEach(prod => {
          // state.commit('SET_USER', {
          //   uid,
          //   email,
          //   claims,
          //   Name:prod.data().Name,
          //   Phone:prod.data().Phone
          // })   
          
      //   })
      // });
      //console.log(userdetails)
      state.commit('SET_USER', {
            uid,
           email,
           claims,
      })
    }
  },
  // getcollectiondata(uid){
  //    this.$fire.firestore.collection('Users').doc(uid).get().then(snapshot => {
  //     console.log(snapshot.data())
  //   });
  // }
    }    