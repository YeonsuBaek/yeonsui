import React from 'react'
import { Button } from '../button'
import { ModalFooterProps } from '.'

const ModalFooter = ({ labelSave = 'Save', labelClose = 'Close', onSave, onClose }: ModalFooterProps) => {
  return (
    <footer className="ui-modal-footer">
      <Button variant="secondary" onClick={onClose}>
        {labelClose}
      </Button>
      {onSave && <Button onClick={onSave}>{labelSave}</Button>}
    </footer>
  )
}

export default ModalFooter
