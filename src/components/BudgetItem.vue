<template>
  <div>
    <div class="list-item" v-for="(item, prop) in list" :key="prop">
      <span class="budget-coment">{{ item.comment }}</span>
      <span class="budget-value" :class="item.classIco">{{ item.value }}</span>
      <el-button type="danger" size="mini" @click="deleteElement(item.id)">Delete</el-button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'BudgetItem',

  data() {
    },

    props: {
    list: {
      type: Object,
      default: () => ({})
    }
  },

  methods: {
    deleteElement(id) {
      let confirmLog = confirm()

      if(confirmLog == true) {
        this.$emit('deleteElement', id)
        console.log(this.$emit('deleteElement', id));
      } else {
        return
      }
    },
  }
}
</script>

<style scoped>
  .list-item {
    display: flex;
    align-items: center;
    padding: 10px 15px;
  }
  .budget-value {
    font-weight: bold;
    margin-left: auto;
    margin-right: 20px;
  }
  .el-icon-top:before, .el-icon-bottom:before {
    margin-left: auto;
    margin-right: 20px;
  }
</style>