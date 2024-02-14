import React, { useMemo } from 'react'
import { Button } from '../button'
import { ModalProps } from '.'
import { Popover } from '../popover'
import { Icon } from '../icon'

const Modal = ({ children, title, labelSave = 'Save', labelClose = 'Close', onSave, onClose, icon }: ModalProps) => {
  const iconType = useMemo(() => {
    if (icon) {
      if (icon === 'info') return 'ExclamationCircle'
      if (icon === 'warning') return 'Warning'
      if (icon === 'error') return 'CloseCircle'
      if (icon === 'success') return 'CheckCircle'
      if (icon === 'question') return 'QuestionCircle'
    }
    return
  }, [icon])

  return (
    <Popover onClose={onClose}>
      <header className="ui-modal-header">
        <div className="ui-modal-title-wrapper">
          {iconType && <Icon size="xlarge" className={`ui-modal-icon ${icon}`} icon={iconType} />}
          <h2 className="ui-modal-title">{title}</h2>
        </div>
      </header>
      <main className="ui-modal-main">{children}</main>
      <footer className="ui-modal-footer">
        <Button variant="secondary" onClick={onClose}>
          {labelClose}
        </Button>
        {onSave && <Button onClick={onSave}>{labelSave}</Button>}
      </footer>
    </Popover>
  )
}

export default Modal
