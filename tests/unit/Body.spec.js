import { mount } from '@vue/test-utils'
import Body from '@/components/Body'
import { nextTick } from "vue"

describe('Body', () => {
  test('Temperture is displayed as a bar', async () => {
    const wrapper = mount(Body);
    await wrapper.setData({
      temperture: 10,
      chartItems: {
        labels: ["sensor1"],
        datasets: [{
          label: "Temperture",
          data: [ 10 ],
          backgroundColor: "lightblue"
        }]
      },
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
    });
    expect(wrapper.find('Chart').exists()).toBe(true);
  })
})