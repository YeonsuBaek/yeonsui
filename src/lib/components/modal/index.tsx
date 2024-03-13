import { ReactNode } from 'react'
import Modal from './Modal'
import { OutlinedIconType } from '../icon/OutlinedIcons'
import { FilledIconType } from '../icon/FilledIcons'

export interface ModalHeaderProps {
  title?: string
  icon?: 'info' | 'warning' | 'success' | 'error' | 'question'
  headerButton?: OutlinedIconType | FilledIconType
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
