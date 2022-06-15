/**
 * @vitest-environment happy-dom
 */
 import { describe, it, expect } from 'vitest'
 import { mount } from '@vue/test-utils'
 import Component from '../components/InputComplex.vue'
 
 describe('Input', () => {
     it('sets the value', async() => {
         const wrapper = mount(Component)
         const input = wrapper.find('input')
         await input.trigger('keydown.meta.c.exact.prevent')
      }) 
   })