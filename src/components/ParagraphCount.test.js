/**
 * @vitest-environment happy-dom
 */
 import { describe, it, expect } from 'vitest'
 import { mount } from '@vue/test-utils'
 import ParagraphCount from './paragraphCount.vue'


it('counter text updates', async () => {
    const wrapper = mount(ParagraphCount)
    const paragraph = wrapper.find('.paragraph')

    expect(paragraph.text()).toBe('Times clicked: 0')
    // await wrapper.setData({ count: 2 })
    // expect(paragraph.text()).toBe('Times clicked: 2') 
})
it('text updates on clicking', async () => {
      const wrapper = mount(ParagraphCount)

      expect(wrapper.text()).toContain('Times clicked: 0')
  
      const button = wrapper.find('button')
      await button.trigger('click')
      await button.trigger('click')
  
     expect(wrapper.text()).toContain('Times clicked: 2')
})   
