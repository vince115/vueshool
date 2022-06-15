/**
 * @vitest-environment happy-dom
 */
 import { describe, it, expect } from 'vitest'
 import { mount } from '@vue/test-utils'
 import Form from '../components/FormE.vue'

 describe('Form', () => {
    it('emits an event only if you lose focus to a button' , async() => {  
        const wrapper = mount(Form)
        const componentToGetFocus = wrapper.find('button')

        // 滑鼠懸停事件
        wrapper.find('input').trigger('blur', {
          relatedTarget: componentToGetFocus.element
        })
        //toBeTruthy()  真實的
        //* Matcher 函數執行測試：!!actual
        //* 句法：expect(flag).toBeTruthy()
        expect(wrapper.emitted('focus-lost')).toBeTruthy()

    })
})