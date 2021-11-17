<template>
  <div>
    <div v-if="Userobject">
      <Navbar />
      <div class="profile-nav toppos">
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
              <b-tab title="Manage Address">
                <div
                  v-if="!addaddress"
                  class="plus-address"
                  @click="AddAddressToggle"
                >
                  <span style="font-size: 1.5rem"
                    ><b-icon icon="plus"></b-icon></span
                  >Add new Address
                </div>
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
                        v-model="Address.Name"
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
                        v-model="Address.AddressLine1"
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
                        v-model="Address.AddressLine2"
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
                        v-model="Address.City"
                        placeholder="City/Town"
                      ></b-form-input>
                    </b-form-group>
                    <b-form-group>
                      <label for="state-list">State</label>
                      <b-form-input
                        list="input-list"
                        v-model="Address.State"
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
                        v-model="Address.PostalCode"
                        placeholder="Postal Code"
                      ></b-form-input>
                    </b-form-group>
                    <b-form-group>
                      <label for="Country-list">Country</label>
                      <b-form-input
                        list="c-list"
                        v-model="Address.Country"
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
                        v-model="Address.Mobilenumber"
                        placeholder="Phone number"
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
                      <b-button
                        type="submit"
                        @click="AddAddressToDB"
                        variant="primary"
                        >Save</b-button
                      >
                    </b-overlay>
                    <b-button variant="danger" @click="AddAddressToggle"
                      >Cancel</b-button
                    >
                  </b-form>
                </b-card>
                <div class="address">
                  <b-list-group v-if="this.Userobject.Address.length != 0">
                    <div class="addresslists"
                      v-for="item in this.Userobject.Address"
                      :key="item.index"
                    >
                      <b-list-group-item
                        href="#"
                        class="flex-column align-items-start"
                      >
                        <div class="d-flex w-100 justify-content-between">
                          <h5 class="mb-1">
                            {{ item.Name }}&nbsp;&nbsp;&nbsp;&nbsp;{{
                              item.Mobilenumber
                            }}
                          </h5>
                          <small class="text-muted"
                            ><b-dropdown variant="Light" class="dropdownitem">
                              <template #button-content>
                                <b-icon
                                  icon="three-dots-vertical"
                                  aria-hidden="true"
                                ></b-icon>
                              </template>
                              <b-dropdown-item-button
                                class="dropdownitem"
                                aria-describedby="dropdown-header-label"
                              >
                                Edit
                              </b-dropdown-item-button>
                              <b-dropdown-item-button
                                class="dropdownitem"
                                aria-describedby="dropdown-header-label"
                              >
                                Remove
                              </b-dropdown-item-button>
                            </b-dropdown>
                          </small>
                        </div>

                        <p class="addresslist">
                          {{ item.AddressLine1 }}
                          {{ item.AddressLine2 }}
                          {{ item.State }} -
                          {{ item.PostalCode }}
                        </p>
                      </b-list-group-item>
                    </div>
                  </b-list-group>
                  <span v-if="this.Userobject.Address.length == 0"
                    >You haven't saved any address</span
                  >
                </div>
              </b-tab>
              <b-tab title="Settings"><p>Its cooking wait......</p></b-tab>
              <b-tab title="Logout" @click="logout"></b-tab>
            </b-tabs>
          </b-card>
        </div>
      </div>
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
      busy: false,
      Userobject: null,
      Statelist: ['Kerala', 'TamilNadu', 'Karnataka'],
      Countrylist: ['India', 'USA', 'UK', 'UAE'],
      addaddress: false,
      Address: {
        Name: '',
        AddressLine1: '',
        AddressLine2: '',
        City: '',
        State: '',
        PostalCode: '',
        Country: '',
        Mobilenumber: '',
      },
    }
  },
  methods: {
    AddAddressToggle() {
      this.addaddress = !this.addaddress
    },
    logout() {
      this.$fire.auth.signOut()
      //console.log("done");
      this.$store.commit('Auth/SET_USER', null)
      this.$router.push({ path: '/' })
    },
    AddAddressToDB(event) {
      event.preventDefault();
      this.busy=true;
      // let testarray=[];
      // for(let i=0;i<this.Userobject.Address.length;i++)
      // {
      //     testarray = [{...this.Userobject.Address[i]}];
      // }
      // testarray=[{...this.Address}];
      //console.log(testarray);
      let Addfinal = [this.Userobject.Address[0], this.Address]
      this.$fire.firestore
        .collection('Users')
        .doc(this.Userobject.authUser.uid)
        .set({
          Phone: this.Userobject.Phone,
          Address: Addfinal,
        })
        .then((users) => {
          console.log('success')
          this.GetAddressfromDB(this.Userobject.authUser)
          this.busy=false;
          this.AddAddressToggle()
        })
        .catch((error) => {
          console.log(error)
        })
      console.log(Addfinal)
    },
    GetAddressfromDB(authUser) {
      this.$fire.firestore
        .collection('Users')
        .doc(authUser.uid)
        .get()
        .then((snapshot) => {
          this.Userobject = { ...snapshot.data(), authUser }

          //console.log(this.Userobject.Address.length)
        })
    },
  },

  created() {
    this.$fire.auth.onAuthStateChanged((authUser) => {
      this.GetAddressfromDB(authUser)
    })
  },
}
</script>

<style>
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
.plus-address {
  cursor: pointer;
  text-align: left;
  border: 1px solid black;
  padding: 5px;
  text-transform: uppercase;
}
.addresslist {
  text-align: left;
}
.address {
  margin-top: 10px;
}
.dropdown-menu {
  min-width: 0rem !important;
}
.dropdown-item {
  width: 174% !important;
}
.addresslists{
  margin:5px;
}
</style>