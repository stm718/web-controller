<template>
  <div id="app">
      <Header></Header>
      <Body></Body>
  </div>
</template>

<script>
// import awsconfig from './aws-exports'
// Amplify.configure(awsconfig)
import Amplify from 'aws-amplify';
import Header from '@/components/Header'
import Body from '@/components/Body'

// Amplify.configure({
//   aws_appsync_region: "ap-northeast-1",
//   aws_appsync_graphqlEndpoint: process.env.VUE_APP_APPSYNC_GRAPHQLENDPOINT,
//   aws_appsync_authenticationType: "API_KEY",
//   aws_appsync_apiKey: process.env.VUE_APP_APPSYNC_APIKEY,
// });
  
Amplify.configure({
  aws_appsync_region: "ap-northeast-1",
  aws_appsync_graphqlEndpoint: "https://gpmgegxbizgo3drrf5n6gaq63q.appsync-api.ap-northeast-1.amazonaws.com/graphql",
  aws_appsync_authenticationType: "API_KEY",
  aws_appsync_apiKey: "da2-7famvuv6qjedxn6zg3kbphhaqe",
});

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
