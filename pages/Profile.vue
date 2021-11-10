<template>
    <div @load="getUserdetails">
        <Navbar/>
        <div style="display:grid;place-items:center">
            <b-card header-tag="header" footer-tag="footer">
      <template #header>
        <h6 class="mb-0">Profile</h6>
      </template>
      <b-card-text>Name {{UserObj.Name}}</b-card-text>
      <b-button href="#" variant="primary">Go somewhere</b-button>
      <template #footer>
        <em>Footer Slot</em>
      </template>
    </b-card>

        </div>
    </div>
</template>
<script>
import global from '~/mixins/global.js'
export default {
  mixins:[global],
    data(){
      return{
      //  Userobj:{}
      }
    },
    // created(){
    //   this.Userobj=this.$store.getters["Auth/getUser"]
    // },
    // computed:{
    //  getAuth(){
      
    // }
    // }
}
</script>

<style scoped>

</style>