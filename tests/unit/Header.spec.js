import { mount } from '@vue/test-utils'
import Header from '@/components/Header'

describe('Header Test', () => {
  test('There exists a title', () => {
    const wrapper = mount(Header)
    expect(wrapper.find('h1').exists()).toBe(true)
  })
})