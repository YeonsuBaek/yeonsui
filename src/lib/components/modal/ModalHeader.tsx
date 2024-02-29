import React, { useMemo } from 'react'
import { ModalHeaderProps } from '.'
import { Icon } from '../icon'

const ModalHeader = ({ title, icon }: ModalHeaderProps) => {
  const iconType = useMemo(() => {
    if (icon) {
      if (icon === 'info') return 'ExclamationCircle'
      if (icon === 'warning') return 'Warning'
      if (icon === 'error') return 'CloseCircle'
      if (icon === 'success') return 'CheckCircle'
      if (icon === 'question') return 'QuestionCircle'
    }
    return null
  }, [icon])

  return (
    <header className="ui-modal-header">
      <div className="ui-modal-title-wrapper">
        {iconType && <Icon size="large" className={`ui-modal-icon ${icon}`} icon={iconType} />}
        <h2 className="ui-modal-title">{title}</h2>
      </div>
    </header>
  )
}

export default ModalHeader
