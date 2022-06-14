/**
 * @vitest-environment happy-dom
 */
 import { describe, it, expect } from 'vitest'
 import { mount } from '@vue/test-utils'
 import Email from '../components/EmailSubmit.vue'

 describe('Email', () => {
    it('trigger', async () => {
         const wrapper = mount(Email)

        // // trigger the element
         await wrapper.find('button').trigger('click')

        // // assert some action has been performed, like an emitted event.
        expect(wrapper.emitted()).toHaveProperty('submit')
    })
    it('emits the input to its parent', async () => {
         const wrapper = mount(Email)
      
        // // set the value
        await wrapper.find('input').setValue('my@mail.com')
      
        // // trigger the element
        await wrapper.find('button').trigger('click')
      
        // // assert the `submit` event is emitted,
        expect(wrapper.emitted('submit')[0][0]).toBe('my@mail.com')
    })
})