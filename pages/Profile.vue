<template>
  <div>
    <div v-if="Userobject">
      <Navbar />
      <div class="profile-nav toppos" >
        <div class="profile">
          <b-avatar size="7rem"></b-avatar>
          <p class="name-text">{{ this.Userobject.authUser.displayName }}</p>
        </div>
        <div class="customnav">
          <b-card no-body>
            <b-tabs content-class="mt-3" card justified>
              <b-tab title="Profile" active
                ><p class="name-text">
                  <label>Phone number:</label> {{ this.Userobject.Phone }}
                </p></b-tab
              >
              <b-tab title="Orders"
                ><p class="name-text">You have not placed any orders!</p></b-tab
              >
              <b-tab title="Saved Address">
                <div v-if="!addaddress" class="plus-address" @click="AddAddressToggle"><span style="font-size:1.5rem"><b-icon icon="plus"></b-icon></span>Add new Address</div>
                <b-card title="Address" v-if="addaddress" class="text-center">
                  <b-form>
                    <b-form-group
                      id="input-group-1"
                      label="Full Name:"
                      label-for="input-1"
                    >
                      <b-form-input
                        id="input-1"
                        type="text"
                        placeholder="Full Name"
                        required
                      ></b-form-input>
                    </b-form-group>
                    <b-form-group
                      id="input-group-2"
                      label="Address Line 1:"
                      label-for="input-2"
                    >
                      <b-form-input
                        id="input-2"
                        type="text"
                        placeholder="Address Line 1"
                        required
                      ></b-form-input>
                    </b-form-group>
                    <b-form-group
                      id="input-group-3"
                      label="Address Line 2:"
                      label-for="input-3"
                    >
                      <b-form-input
                        id="input-3"
                        type="text"
                        placeholder="Address Line 2"
                      ></b-form-input>
                    </b-form-group>
                    <b-form-group
                      id="input-group-4"
                      label="City/Town:"
                      label-for="input-4"
                    >
                      <b-form-input
                        id="input-4"
                        type="text"
                        placeholder="City/Town"
                      ></b-form-input>
                    </b-form-group>
                    <b-form-group>
                      <label for="state-list">State</label>
                      <b-form-input
                        list="input-list"
                        id="state-list"
                      ></b-form-input>
                      <b-form-datalist
                        id="input-list"
                        :options="Statelist"
                      ></b-form-datalist>
                    </b-form-group>
                    <b-form-group
                      id="input-group-6"
                      label="Postal Code:"
                      label-for="input-6"
                    >
                      <b-form-input
                        id="input-6"
                        type="text"
                        placeholder="Postal Code"
                      ></b-form-input>
                    </b-form-group>
                    <b-form-group>
                      <label for="Country-list">Country</label>
                      <b-form-input
                        list="c-list"
                        id="Country-list"
                      ></b-form-input>
                      <b-form-datalist
                        id="c-list"
                        :options="Countrylist"
                      ></b-form-datalist>
                    </b-form-group>
                    <b-form-group
                      id="input-group-7"
                      label="Phone number:"
                      label-for="input-7"
                    >
                      <b-form-input
                        id="input-7"
                        type="text"
                        placeholder="Phone number"
                        required
                      ></b-form-input>
                    </b-form-group>
                    <b-button type="submit" @click="AddAddressToDB" variant="primary">Save</b-button>
                    <b-button variant="danger" @click="AddAddressToggle">Cancel</b-button>
                  </b-form>
                </b-card>
                <div class="address">
                  <b-list-group v-if="this.Userobject.Address.length!=0">
                      <b-list-group-item class="addresslist" href="#">
                        {{this.Userobject.Address[0].FirstName}}
                      </b-list-group-item>
                  </b-list-group>
                  <span v-if="this.Userobject.Address.length==0">You haven't saved any address</span>
                </div>
              </b-tab>
              <b-tab title="Settings"><p>Its cooking wait......</p></b-tab>
              <b-tab title="Logout" @click="logout"></b-tab>
            </b-tabs>
          </b-card>
        </div>
      </div>
      <!-- <div>
        <b-tabs pills card vertical class="mycol-auto">
          <b-tab title="Profile" active
            ><b-card-text>
              <b-card header-tag="header" footer-tag="footer">
                <template #header>
                  <h6 class="mb-0">Profile</h6>
                </template>
                <b-card-text
                  >Name {{ this.Userobject.authUser.displayName }}</b-card-text
                >
                <b-button href="#" variant="primary">Go somewhere</b-button>
                <template #footer>
                  <em>Footer Slot</em>
                </template>
              </b-card>
            </b-card-text></b-tab
          >
          <b-tab title="Address"
            ><b-card-text>Tab contents 2</b-card-text></b-tab
          >
          <b-tab title="Tab 3"><b-card-text>Tab contents 3</b-card-text></b-tab>
        </b-tabs>
      </div> -->
      <!-- <div class="parent">
        <div class="sidebar">
          <b-list-group>
            <b-list-group-item>Cras justo odio</b-list-group-item>
            <b-list-group-item>Dapibus ac facilisis in</b-list-group-item>
            <b-list-group-item>Morbi leo risus</b-list-group-item>
            <b-list-group-item>Porta ac consectetur ac</b-list-group-item>
            <b-list-group-item>Vestibulum at eros</b-list-group-item>
          </b-list-group>
        </div>
        <p class="flex-item content">
          <b-card header-tag="header" footer-tag="footer">
            <template #header>
              <h6 class="mb-0">Profile</h6>
            </template>
            <b-card-text
              >Name {{ this.Userobject.authUser.displayName }}</b-card-text
            >
            <b-button href="#" variant="primary">Go somewhere</b-button>
            <template #footer>
              <em>Footer Slot</em>
            </template>
          </b-card>
        </p>
      </div> -->
    </div>

    <div v-if="!Userobject">
      <div class="text-center" style="margin-top: 200px">
        <b-spinner variant="primary" label="Text Centered"></b-spinner>
      </div>
    </div>
  </div>
</template>
<script>
import global from '~/mixins/global.js'
export default {
  mixins: [global],
  data() {
    return {
      Userobject: null,
      Statelist: ['Kerala', 'TamilNadu', 'Karnataka'],
      Countrylist: ['India', 'USA', 'UK', 'UAE'],
      addaddress:false
    }
  },
  methods:{
    AddAddressToggle(){
      this.addaddress = !this.addaddress;
    },
    logout(){
      this.$fire.auth.signOut();
      //console.log("done");
      this.$store.commit("Auth/SET_USER",null);
      this.$router.push({path: "/"})
    },
    AddAddressToDB(){
      
    }
  },
  created() {
    this.$fire.auth.onAuthStateChanged((authUser) => {
      this.$fire.firestore
        .collection('Users')
        .doc(authUser.uid)
        .get()
        .then((snapshot) => {
          this.Userobject = { ...snapshot.data(), authUser };
          
          console.log(this.Userobject.Address.length)
        })
    })
  },
}
</script>

<style>
/* .nav-pills .nav-link.active,
.nav-pills .show > .nav-link {
  background: rgb(219, 214, 214);
  border-style: inset;
}
.mycol-auto {
  margin: 50px !important;
} */
.card {
  max-width: 100% !important;
}
.name-text {
  text-align: center;
}
.profile-nav {
  display: grid;
  padding: 20px;
  place-items: center;
}
.profile {
  display: inline;
  border-bottom: 1px solid black;
  padding: 10px;
  margin-bottom: 15px;
}
.customnav {
  width: 100%;
}
.plus-address{
  cursor: pointer;
  text-align: left;
  border:1px solid black; 
  padding:5px;
  text-transform: uppercase;
}
.addresslist{
  text-align: left;
}
.address{
  margin-top: 10px;
}
</style>