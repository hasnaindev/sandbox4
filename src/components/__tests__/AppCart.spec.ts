import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import AppCart from '../AppCart.vue'

describe('AppCart', () => {
  it('renders properly', () => {
    const products = [
      {
        id: 'abcd1',
        name: 'Skin Hydrator',
        price: 60,
      },
      {
        id: 'wxyz2',
        name: 'Face Mask',
        price: 12,
      },
    ]

    const wrapper = mount(AppCart, { props: { products } })

    const stringTemplate = (name: string, price: number) => `Name: ${name}, Price: ${price}`

    products.forEach(({ name, price }) => {
      expect(wrapper.text()).toContain(stringTemplate(name, price))
    })
  })
})
