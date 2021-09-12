import Vue from 'vue'
import VueRouter from 'vue-router'
import store from "@/store/index.js"
import Body from '@/components/Body.vue'
import Authenticate from '@/components/Authenticate.vue'

import { AmplifyEventBus } from 'aws-amplify-vue'
import * as AmplifyModules from 'aws-amplify'
import { AmplifyPlugin } from 'aws-amplify-vue'

Vue.use(VueRouter)
Vue.use(AmplifyPlugin, AmplifyModules)

let user;

getUser().then((user) => {
  if (user) {
    router.push({path: '/'})
  }
})

function getUser() {
  return Vue.prototype.$Amplify.Auth.currentAuthenticatedUser()
    .then((data) => {
      if (data && data.signInUserSession) {
        store.commit('setUser', data);
        return data;
      }
    })
    .catch(() => {
      store.commit("setUser", null);
      return null;
    })
}

AmplifyEventBus.$on('authState', async (state) => {
  if (state === 'signedOut'){
    user = null
    store.commit('setUser', null)
    router.push({path: '/auth'}, () => {})
  } else if (state === 'signedIn') {
    user = await getUser();
    router.push({path: '/'})
  }
})

const routes = [
  {
    path: '/',
    name: 'Body',
    component: Body,
    meta: { requireAuth: true }
  },
  {
    path: '/auth',
    name: 'Authenticate',
    component: Authenticate
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeResolve(async (to, from, next) => {
  if (to.matched.some(record => record.meta.requireAuth)) {
    user = await getUser()
    if (!user) {
      return next({
        path: '/auth'
      })
    }
    return next()
  }
  return next()
})

export default router