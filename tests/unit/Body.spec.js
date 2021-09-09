import { mount } from '@vue/test-utils'
import Body from '@/components/Body'
import { nextTick } from "vue"

describe('Body', () => {
  test('Body contains an item', () => {
    const wrapper = mount(Body)
    expect(wrapper.findAll('.input-label').exists()).toBe(true)
  })
  
  test('Body displays a float value', async () => {
    const wrapper = mount(Body)
    wrapper.setData({
      temperture: 12.345
    })
    await nextTick()
    expect(wrapper.findAll('.input-label').at(0).text()).toEqual('temperture: 12.345')
  })
})