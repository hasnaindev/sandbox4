import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import AppCounter from '../AppCounter.vue'

describe('AppCounter', () => {
  it('renders properly', () => {
    const initialCount = 10

    const wrapper = mount(AppCounter, { props: { initialCount } })
    expect(wrapper.text()).toContain(`Clicks: ${initialCount}`)
  })
})
