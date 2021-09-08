<template>
  <div id="app">
      <div>
        <h1>Web Controller</h1>
      </div>
      <div>
        Temperture: {{temperture}}
      </div>
      <!--<div>-->
      <!--  Acc: {{acc}}-->
      <!--</div>-->
  </div>
</template>

<script>
// import awsconfig from './aws-exports'
// Amplify.configure(awsconfig)

import Amplify, { API } from 'aws-amplify';
import { onCreateData } from './graphql/subscriptions';

Amplify.configure({
  aws_appsync_region: "ap-northeast-1",
  aws_appsync_graphqlEndpoint: process.env.VUE_APP_APPSYNC_GRAPHQLENDPOINT,
  aws_appsync_authenticationType: "API_KEY",
  aws_appsync_apiKey: process.env.VUE_APP_APPSYNC_APIKEY,
});

export default {
  name: 'App',
  created(){
    this.subscribe()
  },
  data: () => {
    return {
      temperture: "value",
      // acc: "value"
    }
  },
  methods: {
    // other methods
    subscribe() {
      API.graphql({ query: onCreateData })
        .subscribe({
          next: (eventData) => {
            let sensor_data = eventData.value.data.onCreateData;
            this.temperture = sensor_data.value;
          }
        });
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
</style>
