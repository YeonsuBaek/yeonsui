import React from 'react'
import { render } from '@testing-library/react'
import { Backdrop } from '.'

describe('Backdrop Test', () => {
  type ColorType = 'dark' | 'transparent'
  test.each<ColorType>(['dark', 'transparent'])('Backdrop Colors', (color) => {
    render(<Backdrop color={color} />)

    const backdrop = document.querySelector('.ui-backdrop')

    expect(backdrop).toBeTruthy()
    expect(backdrop?.classList.contains(color)).toBeTruthy()
  })
})
