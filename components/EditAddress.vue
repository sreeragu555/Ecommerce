<template>
  <b-card class="text-center">
    <b-form>
      <b-form-group id="input-group-1" label="Full Name:" label-for="input-1">
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
      <b-form-group id="input-group-4" label="City/Town:" label-for="input-4">
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
        <b-form-datalist id="input-list" :options="Statelist"></b-form-datalist>
      </b-form-group>
      <b-form-group id="input-group-6" label="Postal Code:" label-for="input-6">
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
        <b-form-datalist id="c-list" :options="Countrylist"></b-form-datalist>
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
        <b-button type="submit" @click="SaveAddressToDB" variant="primary">Save</b-button>
      </b-overlay>
      <b-button variant="danger" @click="Toggler">Cancel</b-button>
    </b-form>
  </b-card>
</template>
<script>
export default {
  props: {
    Name: { type: String },
    AddressLine1: { type: String },
    AddressLine2: { type: String },
    City: { type: String },
    State: { type: String },
    PostalCode: { type: String },
    Country: { type: String },
    Mobilenumber: { type: String },
    ToggleEditAddress:{ type: Function },
    UserObject:{type:Object},
    indexvalue:{type:Number}
  },
  data() {
    return {
      busy: false,
      Statelist: ['Kerala', 'TamilNadu', 'Karnataka'],
      Countrylist: ['India', 'USA', 'UK', 'UAE'],
      isUpdated:false,
       Address: {
        Name:this.Name,
        AddressLine1: this.AddressLine1,
        AddressLine2: this.AddressLine2,
        City: this.City,
        State: this.State,
        PostalCode: this.PostalCode,
        Country: this.Country,
        Mobilenumber: this.Mobilenumber,
      },
    }
  },
  methods:{
      Toggler(){
        console.log(this.isUpdated);
          this.$emit('ToggleEditAddress',this.isUpdated);
      },
      SaveAddressToDB(event){
        event.preventDefault();
        this.busy=true;
        let uid=this.UserObject.authUser.uid;
        this.UserObject.Address[this.indexvalue]={
        Name: this.Address.Name,
        AddressLine1: this.Address.AddressLine1,
        AddressLine2: this.Address.AddressLine2,
        City: this.Address.City,
        State: this.Address.State,
        PostalCode: this.Address.PostalCode,
        Country: this.Address.Country,
        Mobilenumber: this.Address.Mobilenumber,
        }
        this.$fire.firestore
        .collection('Users')
        .doc(uid)
        .update({
          Address: this.UserObject.Address,
        })
        .then((users) => { 
          console.log('success');
          this.isUpdated=true;
          this.busy = false;
          this.Toggler();
        })
        .catch((error) => {
          console.log(error)
        })
      }
  }
}
</script>