<template>
  <div>
    <h1>Temperture</h1>
    <Chart :chartData="chartItems" :options="chartOptions"/>
  </div>
</template>

<script>
import { API } from 'aws-amplify';
import { onCreateData } from '@/graphql/subscriptions';
import Chart from '@/components/Chart';
  
export default {
  name: 'Body',
  components: {
    Chart
  },
  created() {
    this.subscribe()
  },
  data() {
    return {
      temperture: "value",
      chartItems: null,
      chartOptions: {
        maintainAspectRatio: false,
        scales: {
          xAxes: [{
            display: true,
            gridLines: {
              display: false
            }
          }],
          yAxes: [{
            display: true,
            position: "right",
            ticks: {
              beginAtZero: true,
              maxTicksLimit: 5,
            },
          }]
        }
      }
    }
  },
  methods: {
    fillData() {
      this.chartItems = {
        labels: ["sensor1"],
        datasets: [{
          label: "Temperture",
          data: [ this.temperture ],
          backgroundColor: "lightblue"
        }]
      }
    },
    subscribe() {
      API.graphql({ query: onCreateData })
        .subscribe({
          next: (eventData) => {
            let sensor_data = eventData.value.data.onCreateData;
            this.temperture=sensor_data.value;
            this.fillData()
          }
        });
    }
  }
}
</script>