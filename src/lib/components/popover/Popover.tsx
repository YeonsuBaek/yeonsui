import React from 'react'
import { Portal } from '../portal'
import { Backdrop } from '../backdrop'
import { Button } from '../button'

const Popover = () => {
  return (
    <Portal>
      <Backdrop onClose={() => {}}></Backdrop>
      <div className="ui-popover">
        <header className="ui-popover-header">Basic Modal</header>
        <main className="ui-popover-main">Main</main>
        <footer className="ui-popover-footer">
          <Button>OK</Button>
        </footer>
      </div>
    </Portal>
  )
}

export default Popover
