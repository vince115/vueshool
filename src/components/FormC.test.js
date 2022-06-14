/**
 * @vitest-environment happy-dom
 */
 import { describe, it, expect } from 'vitest'
 import { mount } from '@vue/test-utils'
 import FormC from '../components/FormC.vue'

 describe('FormC', () => {
    it('submits a form' , async() => {  
        const wrapper = mount(FormC)
        const email = 'name@mail.com'
        await wrapper.find('input[type=email]').setValue(email)
        await wrapper.find('textarea').setValue('Lorem ipsum dolor sit amet')
        await wrapper.find('select').setValue('moscow')
        await wrapper.find('input[type=checkbox]').setValue()
        await wrapper.find('input[type=radio]').setValue()
        await wrapper.find("input[type=radio][value='monthly']").setValue()
      })
  })