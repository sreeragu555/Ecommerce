<template>
  <div>
    <b-row>
      <b-col>
          <b-img thumbnail fluid :src="imageurl" alt="Image 1"></b-img>
      </b-col>
      <b-col>2 of 2</b-col>
    </b-row>
  </div>
</template>
<script>
export default {
  props: {
    name: { type: String },
    imageurl: { type: String },
    amount: { type: String },
    prodid: { type: String },
    existInCart: { type: Boolean },
  },  
}
</script>
