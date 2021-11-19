<template>
<div>
    <b-list-group-item  v-if="!editaddress"
                        href="#"
                        class="flex-column align-items-start"
                      >
                        <div class="d-flex w-100 justify-content-between">
                          <h5 class="mb-1">
                            {{ Name }}&nbsp;&nbsp;&nbsp;&nbsp;{{
                              Mobilenumber
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
                                @click="editaddress = true"
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
                          {{ AddressLine1 }}
                          {{ AddressLine2 }}
                          {{ State }} -
                          {{ PostalCode }}
                        </p>
                      </b-list-group-item>
                      <EditAddress
                        v-if="editaddress"
                        :Name="Name"
                        :AddressLine1="AddressLine1"
                        :AddressLine2="AddressLine2"
                        :City="City"
                        :State="State"
                        :PostalCode="PostalCode"
                        :Country="Country"
                        :Mobilenumber="Mobilenumber"
                        :UserObject="UserObject"
                        :indexvalue="indexvalue"
                        @ToggleEditAddress="Toggleedit"
                      />
                      </div>
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
    UserObject:{type: Object},
    indexvalue:{type:Number},
    Updateaddress:{ type: Function }
  },
  data(){
      return{
          editaddress:false,
      }
  },
  methods:{
      Toggleedit(isUpdated){
        if(isUpdated){
          this.$emit('Updateaddress',this.UserObject.authUser);
        }
          this.editaddress = !this.editaddress;
      }
  }

}
</script>