import React from 'react'
import { Button } from '../button'
import { ModalProps } from '.'
import { Popover } from '../popover'

const Modal = ({ children, title, labelSave = 'Save', labelClose = 'Close', onSave, onClose }: ModalProps) => {
  return (
    <Popover onClose={onClose}>
      <header className="ui-modal-header">
        <span className="ui-modal-title">{title}</span>
      </header>
      <main className="ui-modal-main">{children}</main>
      <footer className="ui-modal-footer">
        <Button variant="secondary" onClick={onClose}>
          {labelClose}
        </Button>
        {onSave && <Button onClick={onSave}>{labelSave}</Button>}
      </footer>
    </Popover>
  )
}

export default Modal
