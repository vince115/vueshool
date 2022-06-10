/**
 * @vitest-environment happy-dom
 */
 import { describe, it, expect } from 'vitest'
 import { mount } from '@vue/test-utils'
 import Show from '../components/Show.vue'
 
 describe('Show', () => {
    it('renders a greeting when show is true',async ()=>{
        const wrapper = mount(Show)
        expect(wrapper.html()).toContain('Hello')
        await wrapper.setProps({ show: false })
      
        expect(wrapper.html()).not.toBe('Hello')
        // expect(wrapper.emitted()).toHaveProperty('text-submit')
    })
})