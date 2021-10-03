<template>
  <div id="app">
    <div id="nav">
      <Header></Header>
      <router-link to="/">Dashboard</router-link> |
      <router-link to="/auth">Sign In</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import Amplify from 'aws-amplify';
import Header from '@/components/Header'
import awsmobile from './aws-exports'

if (process.env.VUE_APP_ENVIRONMENT === 'development'){
  console.warn("Local mode")
}
Amplify.configure(awsmobile);

export default {
  name: 'App',
  components: {
    Header
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

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
