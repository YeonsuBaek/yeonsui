import React from 'react'
import { Portal } from '../portal'
import { Backdrop } from '../backdrop'
import { PopoverProps } from '.'

const Popover = ({ children, onClose }: PopoverProps) => {
  return (
    <Portal>
      <Backdrop onClose={onClose}></Backdrop>
      <div className="ui-popover">{children}</div>
    </Portal>
  )
}

export default Popover
