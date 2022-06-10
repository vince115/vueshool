/**
 * @vitest-environment happy-dom
 */
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Input from '../components/Input.vue'

describe('Input', () => {
    it('sets the value', async() => {
        const wrapper = mount(Input)
        const input = wrapper.find('input')
        await input.setValue('my@mail.com')
        expect(input.element.value).toBe('my@mail.com')
     }) 
    it('emits an event when clicked',async ()=>{
        const wrapper = mount(Input)
        await wrapper.find('button').trigger('click')
        expect(wrapper.emitted()).toHaveProperty('text-submit')
    })
    it('emits the input to its parent', async () => {
        const wrapper = mount(Input)
        await wrapper.find('input').setValue('my@mail.com')
        await wrapper.find('button').trigger('click')
        //expect(wrapper.emitted('handleSubmit')[0][0]).toBe('my@mail.com')
        expect(wrapper.find('label').text()).toBe('my@mail.com')
      })
  })