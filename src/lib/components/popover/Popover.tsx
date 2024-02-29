import React from 'react'
import { Portal } from '../portal'
import { Backdrop } from '../backdrop'
import { PopoverProps } from '.'

const Popover = ({ children, isOpen }: PopoverProps) => {
  return isOpen ? (
    <Portal>
      <Backdrop />
      <div className="ui-popover">{children}</div>
    </Portal>
  ) : null
}

export default Popover
