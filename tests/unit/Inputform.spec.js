import {  shallowMount } from '@vue/test-utils'
import Inputform from '@/components/Inputform'

describe( 'Inputform', () => {
  it( 'Check if an input form exists', () => {
    const wrapper = shallowMount(Inputform)
    expect(wrapper.find('input').exists()).toBe(true)
  } )
})