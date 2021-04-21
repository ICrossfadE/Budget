<template>
  <div class="total-value"> Balance : <span>{{total}}</span></div>
</template>

<script>
export default {
  name: "TotalBalance",

  props: {
    total: {
      type: Number,
      default: 0
    },
    totalInfo: {
      type: String
    }
  },

};

</script>

<style scoped>
  .total-value {
    font-weight: bold;
    text-transform: uppercase;
    padding-bottom: 20px;
    text-align: center;
  }
  .grean {
    color:chartreuse
  }

  .red {
    color: brown;
  }
</style>