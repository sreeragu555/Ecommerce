
<template>
<div>
<Navbar/>
  <ul class="toppos">
          <li v-for="item in getAllProducts" :key="item.index" >
             <ProductCard :name="item.Product_name" :existInCart="item.existInCart" :imageurl="item.image" :amount="item.amount" :prodid="item.id"/>
          </li>
      </ul>
          <div v-if="noproductshow">
            No Product found
          </div>
</div>
</template>
<script>
export default {
  name:"Home",
  data(){
    return{
        noproductshow:false
          }
  },
computed:{
 getAllProducts(){
   if(this.$store.state.Product.products.length!=0)
   {
    this.noproductshow=false; 
    return {...this.$store.getters['Product/getProduct']};
   }
   else
    this.noproductshow=true;
 }
},
}
</script>
<style>
.toppos{
  margin-top: 70px!important;
}

</style>