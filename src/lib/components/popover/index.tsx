import { ReactNode } from 'react'
import Popover from './Popover'

export interface PopoverProps {
  children: ReactNode | ReactNode[]
  onClose: () => void
}

export { Popover }
