import Vue from 'vue'
import App from './App.vue'
import './plugins/elements'
import BudgetItem from './components/BudgetItem'

Vue.config.productionTip = false

Vue.component('itemList', BudgetItem);

new Vue({
  render: h => h(App),
}).$mount('#app')
