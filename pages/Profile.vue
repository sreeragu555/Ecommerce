<template>
    <div>
        <Navbar/>
        <div style="display:grid;place-items:center">
            <b-card header-tag="header" footer-tag="footer">
      <template #header>
        <h6 class="mb-0">Profile</h6>
      </template>
      <b-card-text>Name {{this.UserObj.Name}}</b-card-text>
      <b-button href="#" variant="primary">Go somewhere</b-button>
      <template #footer>
        <em>Footer Slot</em>
      </template>
    </b-card>

        </div>
    </div>
</template>
<script>
export default {
    data(){
      return{
        Userobj:{}
      }
    },
    beforeCreate(){
      this.Userobj=this.$store.getters["Auth/getUser"]
    }
}
</script>

<style scoped>

</style>