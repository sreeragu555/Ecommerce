<template>
  <div>
    <Navbar />
    <div class="mycenter">
      <b-card title="SignUp" class="text-center">
        <b-form>
          <b-form-group
            id="input-group-2"
            label="Your Name:"
            label-for="input-3"
          >
            <b-form-input
              id="input-3"
              type="text"
              placeholder="Enter Name"
              v-model="auth.name"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-2"
            label="Your Username:"
            label-for="input-1"
          >
            <b-form-input
              id="input-1"
              type="email"
              placeholder="Enter Username"
              v-model="auth.email"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-2"
            label="Your Phone number:"
            label-for="input-4"
          >
            <b-form-input
              id="input-4"
              type="text"
              placeholder="Enter Phone number"
              v-model="auth.phone"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-2"
            label="Your Password:"
            label-for="input-2"
          >
            <b-form-input
              id="input-2"
              type="password"
              placeholder="Enter password"
              v-model="auth.password"
              required
            ></b-form-input>
          </b-form-group>
          <b-overlay
      :show="busy"
      rounded
      opacity="0.6"
      spinner-small
      spinner-variant="primary"
      class="d-inline-block"
    >
          <b-button type="submit" @click="login" variant="primary"
            >Submit</b-button>
          </b-overlay>
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
      auth: {
        name:'',
        phone:'',
        email: '',
        password: ''
      },
      busy:false,
      errorcontent:''
    }
    },
  methods: {
    login(event) {
      this.busy = true;
       event.preventDefault();
      this.$fire.auth.createUserWithEmailAndPassword(this.auth.email, this.auth.password)
      .then((cred) => {
        //we are signed in
       // console.log("first in");
              this.$fire.firestore.collection('Users').doc(cred.user.uid).set({
                Name:this.auth.name,
                Phone:this.auth.phone
              }).then((docRef) =>{
                    //console.log("second in");
                this.busy=false;
              this.$router.push({path: "/"})
            }).catch((error)=>{
                  //console.log("third in");
              this.busy=false;
                console.log(error)
            })
      })
      .catch((error) => {
        this.busy=false;
        this.errorcontent = error.message;
      })
    },

}
}
</script>
<style scoped>
.card {
  width: 800px;
  max-width: 800px !important;
}
.mycenter {
  display: grid;
  place-items: center;
}
.mycenter > * {
  margin-top: 150px;
}
</style>