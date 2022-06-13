/**
 * @vitest-environment happy-dom
 */
 import { describe, it, expect } from 'vitest'
 import { mount } from '@vue/test-utils'
 import Password from '../components/Password.vue'
 
 describe('Password', () => {
     it('sets the value', async() => {
         const wrapper = mount(Password)
         const input = wrapper.find('input')
          await input.setValue('Abcd123456')
         expect(input.element.value).toBe('Abcd123456')
      })
      it('renders an error if length is too short', () => {
        const wrapper = mount(Password, {
          props: {
            minLength: 10
          },
          data() {
            return {
              password: 'short'
            }
          }
        })
        expect(wrapper.html()).toContain('Password must be at least 10 characters.')
      })
})