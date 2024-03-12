import { ReactNode } from 'react'
import Modal from './Modal'
import { IconType } from '../icon/Icons'

export interface ModalHeaderProps {
  title?: string
  icon?: 'info' | 'warning' | 'success' | 'error' | 'question'
  headerButton?: IconType
  onClick?: () => void
}

export interface ModalContentsProps {
  children: ReactNode | ReactNode[]
}

export interface ModalFooterProps {
  labelSave?: string
  labelClose?: string
  onSave?: () => void
  onClose: () => void
}

export interface ModalProps extends ModalHeaderProps, ModalContentsProps, ModalFooterProps {
  isOpen: boolean
}

export { Modal }
