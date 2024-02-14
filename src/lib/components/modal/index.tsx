import { ReactNode } from 'react'
import Modal from './Modal'

export interface ModalProps {
  children: ReactNode | ReactNode[]
  title: string
  labelSave?: string
  labelClose?: string
  onSave?: () => void
  onClose: () => void
  icon?: 'info' | 'warning' | 'success' | 'error' | 'question'
}

export { Modal }
