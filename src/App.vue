<template>
  <div id="app">
    <div id="nav">
      <Header></Header>
      <router-link to="/">Dashboard</router-link> |
      <router-link to="/auth">Sign In</router-link> |
      <router-link to="/device">Device</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import Amplify from 'aws-amplify';
import Header from '@/components/Header'

if (process.env.VUE_APP_ENVIRONMENT === 'development'){
  console.warn("Local mode")
}
Amplify.configure({
    aws_project_region: "ap-northeast-1",
    aws_cognito_identity_pool_id: process.env.VUE_APP_COGNITO_IDENTITY_POOL_ID,
    aws_cognito_region: "ap-northeast-1",
    aws_user_pools_id: process.env.VUE_APP_USER_POOLS_ID,
    aws_user_pools_web_client_id: process.env.VUE_APP_USER_POOLS_WEB_CLIENT_ID,
    oauth: {},
    aws_cognito_login_mechanisms: [
        "EMAIL"
    ],
    aws_cognito_signup_attributes: [
        "EMAIL"
    ],
    aws_cognito_mfa_configuration: "OFF",
    "aws_cognito_mfa_types": [
        "SMS"
    ],
    aws_cognito_password_protection_settings: {
        "passwordPolicyMinLength": 8,
        "passwordPolicyCharacters": []
    },
    aws_appsync_graphqlEndpoint: process.env.VUE_APP_APPSYNC_GRAPHQLENDPOINT,
    aws_appsync_region: "ap-northeast-1",
    aws_appsync_authenticationType: "API_KEY",
    aws_appsync_apiKey: process.env.VUE_APP_APPSYNC_APIKEY
});

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
