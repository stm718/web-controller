<template>
  <div>
    <label class="input-label">temperture: {{temperture}}</label>
  </div>
</template>

<script>
  import { API } from 'aws-amplify';
  import { onCreateData } from '@/graphql/subscriptions';
  export default {
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