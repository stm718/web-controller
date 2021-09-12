import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as AmplifyModules from 'aws-amplify'
import { AmplifyPlugin } from 'aws-amplify-vue'
import { components } from 'aws-amplify-vue'

Vue.config.productionTip = false

console.log("[Start]")

Vue.use(AmplifyPlugin, AmplifyModules)

new Vue({
  router: router,
  store: store,
  components: {
    App,
    ...components
  },
  render: h => h(App),
}).$mount('#app')
