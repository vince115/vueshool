/**
 * @vitest-environment happy-dom
 */
 import { describe, it, expect } from 'vitest'
 import { mount } from '@vue/test-utils'
 import Counter from '../components/Counter.vue'
 
 // The two tests marked with concurrent will be run in parallel
//  describe('Counter', () => {
//        it('is okay', async () => {
//             expect((1)).toBe(1)
//         })
//      })

 describe('Counter', () => {
   it('is okay', async () => {
        const wrapper = mount(Counter, {
        })
        expect(1).toBe(1)
    })
    it('emits an event when clicked', async()=>{
        const wrapper = mount(Counter)
        await wrapper.find('button').trigger('click')
       expect(wrapper.emitted()).toHaveProperty('increment')
    })
 })
 