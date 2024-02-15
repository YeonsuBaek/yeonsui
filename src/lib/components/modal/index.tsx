import { ReactNode } from 'react'
import Modal from './Modal'

export interface ModalHeaderProps {
  title: string
  icon?: 'info' | 'warning' | 'success' | 'error' | 'question'
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
  children: ReactNode | ReactNode[]
  onClose: () => void
}

export { Modal }
