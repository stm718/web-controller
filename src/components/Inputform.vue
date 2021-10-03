<template>
  <div>
    <div>
      <h2>Angle</h2>
      <input
        v-model.number="angle"
        type="number"
        :min="0"
        :max="180">
      <button @click="publish('angle')">Send command</button>
    </div>
    <div>
      <h2>HVAC Status</h2>
        <button @click="publish('standby')">Stand by</button>
        <button @click="publish('heating')">Heat</button>
        <button @click="publish('cooling')">Cool</button>
    </div>
  </div>
</template>

<script>
import { Iot } from 'aws-sdk'
import Amplify, { Auth, PubSub } from 'aws-amplify'
import { AWSIoTProvider } from '@aws-amplify/pubsub/lib/Providers'

// IoTプロバイダーの設定
Amplify.addPluggable(new AWSIoTProvider({
  aws_pubsub_region: 'ap-northeast-1',
  aws_pubsub_endpoint: `wss://${process.env.VUE_APP_AWS_PUBSUB_ENDPOINT}/mqtt`,
}));

export default {
  data: () => {
    return {
      angle: 0,       // 角度
      message: null,  // エラーメッセージ
    }
  },
  created: async () => {
    // ログインしているユーザの認証情報を取得
    const credentials = await Auth.currentCredentials();
    const iot = new Iot({
      region: 'ap-northeast-1',
      credentials: Auth.essentialCredentials(credentials)
    });
    
    // ポリシーをアタッチ
    const policyName = 'myIoTPolicy';
    const target = credentials.identityId;
    const { policies } = await iot.listAttachedPolicies({ target }).promise();
    if (policies && !policies.find(policy => policy.policyName === policyName)) {
      await iot.attachPolicy({ policyName, target }).promise();
    }
  },
  watch: {
    // 入力フォームから角度の取得
    angle: function(newNum, oldVal) {
      if ( newNum < 0 || newNum >= 360  ) {  // 0〜360度の範囲内になければ入力フォームをもとに戻す
        alert('Illegal angle')
        this.angle = oldVal
      }
    }
  },
  methods: {
    // コマンドをパブリッシュ
    publish(arg) {
      let topic = ''
      let payload = ''
      switch(arg) {
        case 'angle':
          topic = '$aws/things/01239e5f3763f4c901/shadow/update'
          payload = {
            state: {
              desired: {
                angle: this.angle
              }
            }
          }
          break;
        case 'standby':
          topic = '$aws/things/01239e5f3763f4c901/shadow/update'
          payload = {
            state: {
              desired: {
                hvacStatus: "STANDBY"
              }
            }
          }
          break;
        case 'heating':
          topic = '$aws/things/01239e5f3763f4c901/shadow/update'
          payload = {
            state: {
              desired: {
                hvacStatus: "HEATING"
              }
            }
          }
          break;
        case 'cooling':
          topic = '$aws/things/01239e5f3763f4c901/shadow/update'
          payload = {
            state: {
              desired: {
                hvacStatus: "COOLING"
              }
            }
          }
          break;
      }
      PubSub.publish(topic, payload)
    }
  }
}
</script>

<style>
  h2 {
    color: black
  }
</style>