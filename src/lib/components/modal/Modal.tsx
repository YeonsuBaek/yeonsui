import React from 'react'
import { ModalProps } from '.'
import { Popover } from '../popover'
import ModalHeader from './ModalHeader'
import ModalFooter from './ModalFooter'
import ModalContents from './ModalContents'

const Modal = ({
  isOpen,
  title,
  icon,
  children,
  labelSave,
  labelClose,
  onSave,
  onClose,
  headerButton,
  onClick,
}: ModalProps) => {
  return isOpen ? (
    <Popover onClose={onClose} isOpen={isOpen}>
      {title && <ModalHeader title={title} icon={icon} headerButton={headerButton} onClick={onClick} />}
      <ModalContents>{children}</ModalContents>
      <ModalFooter labelSave={labelSave} labelClose={labelClose} onSave={onSave} onClose={onClose} />
    </Popover>
  ) : null
}

export default Modal
