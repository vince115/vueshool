/**
 * @vitest-environment happy-dom
 */
 import { describe, it, expect } from 'vitest'
 import { mount } from '@vue/test-utils'
 import Component from '../components/InputLabel.vue'

 describe('fills in the form', () => {

     it('emits an event when clicked', async()=>{
         const wrapper = mount(Component)
         await wrapper.find('.text-input input')//.setValue('text')
        //expect(wrapper.emitted()).toHaveProperty('increment')
     })
  })