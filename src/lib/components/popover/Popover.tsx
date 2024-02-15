import React from 'react'
import { Portal } from '../portal'
import { Backdrop } from '../backdrop'
import { PopoverProps } from '.'

const Popover = ({ children, onClose, isOpen }: PopoverProps) => {
  return isOpen ? (
    <Portal>
      <Backdrop onClose={onClose}></Backdrop>
      <div className="ui-popover">{children}</div>
    </Portal>
  ) : null
}

export default Popover
