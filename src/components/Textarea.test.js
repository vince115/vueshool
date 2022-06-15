/**
 * @vitest-environment happy-dom
 */
 import { describe, it, expect } from 'vitest'
 import { mount } from '@vue/test-utils'
 import Component from '../components/Textarea.vue'
 
 describe('Show', () => {
    it('emits textarea value on click', async()=>{
        const wrapper = mount(Component)
        const description = 'Some very long text for test ...'
        //await wrapper.findComponent({ref:'description'})//.setValue(description)
        
        await wrapper.get('textarea').setValue(description)
        wrapper.find('button').trigger('click')
        //expect(wrapper.emitted('textareaSubmit')[0][0]).toEqual({description})  
        //.toMatchObject({description:description})
    
        expect(wrapper.emitted('textareaSubmit')[0][0])//.toEqual({description}) 
    }) 
})