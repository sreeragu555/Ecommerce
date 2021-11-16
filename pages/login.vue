<template>
<div>
<Navbar/>
<div class="mycenter toppos">

<b-card title="Login" class="text-center">
    <b-form @submit="login">
      <b-form-group
       id="input-group-2" label="Your Username:" label-for="input-1"
      >
        <b-form-input
          id="input-1"
          type="email"
          placeholder="Enter Username"
          v-model="auth.email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your Password:" label-for="input-2">
        <b-form-input
          id="input-2"
          type="password"
          placeholder="Enter password"
          v-model="auth.password"
          required
        ></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
    <div style="margin-top: 10px" v-if="errorcontent">
          <b-alert show variant="danger" dismissible>
            {{ this.errorcontent }}
          </b-alert>
        </div>
  </b-card>



  </div>
</div>
</template>
<script>
export default {
  data() {
    return {
      errorcontent:'',
      auth: {
        email: '',
        password: ''
      }
    }
    },
  methods: {
    login(event) {
      event.preventDefault();
     // console.log("in")
      this.$fire.auth.signInWithEmailAndPassword(this.auth.email, this.auth.password)
      .then((users) => {
        //we are signed in
      //  console.log(users)
      //  //const {uid,email} = users.user;
      //   //this.$store.commit("Auth/SET_USER",{uid,email});
        this.$router.push({path: "/"})
      })
      .catch((error) => {
        this.errorcontent = error.message; 
      })
    },

}
}
</script>
<style scoped>
.card{
    width: 800px;
    max-width: 800px!important;
}
.mycenter{
    display: grid;
    place-items: center;
}
.mycenter > * {
    margin-top: 250px;
}
</style>