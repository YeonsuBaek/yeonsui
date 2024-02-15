import { ReactNode } from 'react'
import Popover from './Popover'

export interface PopoverProps {
  children: ReactNode | ReactNode[]
  onClose: () => void
  isOpen: boolean
}

export { Popover }
