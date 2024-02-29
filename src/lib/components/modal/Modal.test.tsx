import React, { useState } from 'react'
import { Modal } from '.'
import { fireEvent, render } from '@testing-library/react'
import { Button } from '../button'

describe('Modal Test', () => {
  test('Modal isOpen click event', () => {
    const TestModalComponent = () => {
      const [isOpen, setIsOpen] = useState(false)
      const handleCloseClick = () => setIsOpen(false)

      return (
        <>
          <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
          <Modal isOpen={isOpen} onClose={handleCloseClick}>
            Some contents...
          </Modal>
        </>
      )
    }

    const { getByText } = render(<TestModalComponent />)

    const openModalButton = getByText('Open Modal')
    fireEvent.click(openModalButton)

    const modalContent = getByText('Some contents...')
    expect(modalContent).toBeTruthy()
  })

  type IconType = 'info' | 'warning' | 'success' | 'error' | 'question' | undefined
  test.each<IconType>(['info', 'warning', 'success', 'error', 'question', undefined])('Modal with Icon', (icon) => {
    const handleClick = jest.fn()
    render(
      <Modal isOpen onClose={handleClick} title="Title" icon={icon}>
        Some contents...
      </Modal>
    )

    const iconElement = document.querySelector(`.ui-modal-icon.${icon}`)

    expect(iconElement).toBeTruthy()
  })

  test('Modal onSave click event', () => {
    const handleCloseClick = jest.fn()
    const handleSaveClick = jest.fn()
    const { getByText } = render(
      <Modal isOpen onClose={handleCloseClick} onSave={handleSaveClick}>
        Some contents...
      </Modal>
    )

    const saveButton = getByText('Save')
    expect(saveButton).toBeTruthy()
  })
})
