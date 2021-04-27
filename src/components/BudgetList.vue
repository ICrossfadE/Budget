<template>
  <div class="budget-list-wrap">
    <el-card :header='header'>
      <div class="buttons">
        <el-button type="warning" @click="log('OUTCOME')">ALL OUTCOME</el-button>
        <el-button type="info" @click="log('OK')"> ALL FINANCE</el-button>
        <el-button type="success" @click="log('INCOME')">ALL INCOME</el-button>
      </div>
      <template v-if="!isEmpty">
        <budget-item :filterObj="filterObj" @deleteElement="onDeleteItem" />
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
    },
    filterObj: {
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
      this.$delete(this.filterObj, id)
    },
    log(value){
      console.log(value);
      this.$emit('filter', value)
    }
  }
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
  .buttons {
    padding-bottom: 10px;
  }
</style>