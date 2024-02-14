import React from 'react'
import { ModalProps } from '.'
import { Popover } from '../popover'
import ModalHeader from './ModalHeader'
import ModalFooter from './ModalFooter'
import ModalContents from './ModalContents'

const Modal = ({ title, icon, children, labelSave, labelClose, onSave, onClose }: ModalProps) => {
  return (
    <Popover onClose={onClose}>
      <ModalHeader title={title} icon={icon} />
      <ModalContents>{children}</ModalContents>
      <ModalFooter labelSave={labelSave} labelClose={labelClose} onSave={onSave} onClose={onClose} />
    </Popover>
  )
}

export default Modal
