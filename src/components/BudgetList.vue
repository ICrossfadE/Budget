<template>
  <div class="budget-list-wrap">
    <el-card :header='header'>
      <template v-if="!isEmpty">
        <budget-item :list="list" @deleteElement="onDeleteItem" />
      </template>
      <el-alert v-else :title="alertTitle" type="info" :closable="false" center show-icon/>
    </el-card>
  </div>
</template>

<script>
import BudgetItem from './BudgetItem'

export default {
  name: 'BudgetList',
  components: {
    BudgetItem
  },
  props: {
    list: {
      type: Object,
      default: () => ({})
    }
  },
  data: () => ({
    header: 'Budget List',
    alertTitle: "Empty info"
  }),
  computed: {
    //Умова для v-if
    isEmpty() {
      return !Object.keys(this.list).length;
    },
  },
  methods: {
    onDeleteItem(id) {
      this.$delete(this.list, id)
    },
  }
  // methods: {
  //   deleteElement(id) {
  //     this.$emit('deleteElement', id)
  //     console.log(this.$emit('deleteElement', id));
  //   }
  // },
}
</script>

<style scoped>
  .budget-list-wrap {
    max-width: 500px;
    margin: auto;
    margin-bottom: 25px;
  }
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
</style>