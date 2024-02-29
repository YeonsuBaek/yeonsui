import React from 'react'
import { ModalContentsProps } from '.'

const ModalContents = ({ children }: ModalContentsProps) => {
  return <main className="ui-modal-main">{children}</main>
}

export default ModalContents
