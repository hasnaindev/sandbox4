import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Counter from '../Counter.vue'

describe('Counter', () => {
  it('renders properly', () => {
    const initialCount = 10

    const wrapper = mount(Counter, { props: { initialCount } })
    expect(wrapper.text()).toContain(`Clicks: ${initialCount}`)
  })
})
