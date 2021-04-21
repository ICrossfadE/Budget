<template>
  <div id="app">
    <Form @submitForm="onFormSubmit" />
    <TotalBalance :total="totalBalance" :class="totalClass" />
    <BudgetList :list="list" />
  </div>
</template>

<script>
import BudgetList from '@/components/BudgetList';
import TotalBalance from '@/components/TotalBalance';
import Form from '@/components/Form';

export default {
  name: 'App',
  components: {
    BudgetList,
    TotalBalance,
    Form
  },
  data: () => ({
    // Список росходів\доходів
    list: {
      1: {
        type: 'INCOME',
        value: 100,
        comment: 'My work',
        classIco: 'el-icon-top grean',
        id: 1
      },
      2: {
        type: 'OUTCOME',
        value: -50,
        comment: 'Food',
        classIco: 'el-icon-bottom red',
        id: 2
      }
    }
  }),
  computed: {
    totalBalance() {
      return Object.values(this.list).reduce(
        (acc, item) => acc + item.value,
        0
      );
    },
    totalClass() {

      let activeClass = ''

      if(this.totalBalance > 0) activeClass = 'grean';
      if (this.totalBalance < 0) activeClass = 'red';

      return activeClass
    }
  },
  methods: {
    onFormSubmit(data) {
      const newObj = {
        ...data,
        id: String(Math.random()),
      };

      if(newObj.type === 'OUTCOME'){
        newObj.classIco = 'el-icon-bottom red'
        newObj.value = Number('-' + newObj.value);
        console.log(newObj);
      } else {
        newObj.classIco = 'el-icon-top grean'
      }

      this.$set(this.list, newObj.id, newObj);
      console.log(this.$set(this.list, newObj.id, newObj));
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.grean {
    color:chartreuse
  }
.red {
  color: brown;
}
</style>
