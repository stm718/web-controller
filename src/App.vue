<template>
  <div id="app">
      <Header></Header>
      <Body></Body>
  </div>
</template>

<script>
import Amplify from 'aws-amplify';
import Header from '@/components/Header'
import Body from '@/components/Body'

if( process.env.VUE_APP_ENVIRONMENT === 'staging') {
  Amplify.configure({
    aws_appsync_region: "ap-northeast-1",
    aws_appsync_graphqlEndpoint: process.env.VUE_APP_APPSYNC_GRAPHQLENDPOINT,
    aws_appsync_authenticationType: "API_KEY",
    aws_appsync_apiKey: process.env.VUE_APP_APPSYNC_APIKEY,
  });
} else if (process.env.VUE_APP_ENVIRONMENT === 'development'){
  console.warn("Local mode")
  Amplify.configure({
    aws_appsync_region: "ap-northeast-1",
    aws_appsync_graphqlEndpoint: process.env.VUE_APP_APPSYNC_GRAPHQLENDPOINT,
    aws_appsync_authenticationType: "API_KEY",
    aws_appsync_apiKey: process.env.VUE_APP_APPSYNC_APIKEY,
  });
}

export default {
  name: 'App',
  components: {
    Header,
    Body
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
</style>
