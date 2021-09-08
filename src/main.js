import { createApp } from 'vue';
import App from './App.vue'

Vue.config.productionTip = false

console.log("[Start]")

new Vue({
  render: h => h(App),
}).$mount('#app')
