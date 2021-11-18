<template>
  <b-card class="text-center">
    <b-form>
      <b-form-group id="input-group-1" label="Full Name:" label-for="input-1">
        <b-form-input
          id="input-1"
          type="text"
          v-model="Name"
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
          v-model="AddressLine1"
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
          v-model="AddressLine2"
          placeholder="Address Line 2"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-4" label="City/Town:" label-for="input-4">
        <b-form-input
          id="input-4"
          type="text"
          v-model="City"
          placeholder="City/Town"
        ></b-form-input>
      </b-form-group>
      <b-form-group>
        <label for="state-list">State</label>
        <b-form-input
          list="input-list"
          v-model="State"
          id="state-list"
        ></b-form-input>
        <b-form-datalist id="input-list" :options="Statelist"></b-form-datalist>
      </b-form-group>
      <b-form-group id="input-group-6" label="Postal Code:" label-for="input-6">
        <b-form-input
          id="input-6"
          type="text"
          v-model="PostalCode"
          placeholder="Postal Code"
        ></b-form-input>
      </b-form-group>
      <b-form-group>
        <label for="Country-list">Country</label>
        <b-form-input
          list="c-list"
          v-model="Country"
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
          v-model="Mobilenumber"
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
        <b-button type="submit" variant="primary">Save</b-button>
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
  },
  data() {
    return {
      busy: false,
      Statelist: ['Kerala', 'TamilNadu', 'Karnataka'],
      Countrylist: ['India', 'USA', 'UK', 'UAE'],
    }
  },
  methods:{
      Toggler(){
          this.$emit('ToggleEditAddress');
      }
  }
}
</script>