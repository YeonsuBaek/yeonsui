import React, { useMemo } from 'react'
import { ButtonProps } from '.'
import { Icon } from '../icon'

const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  startIcon,
  endIcon,
  onClick,
  type = 'button',
}: ButtonProps) => {
  const iconSize = useMemo(() => (size === 'large' ? 'small' : 'xsmall'), [size])

  return (
    <button type={type} className={`ui-button ${variant} ${size}`} disabled={disabled} onClick={onClick}>
      {startIcon && <Icon className="ui-button-icon" icon={startIcon} size={iconSize} />}
      <span>{children}</span>
      {endIcon && <Icon className="ui-button-icon" icon={endIcon} size={iconSize} />}
    </button>
  )
}

export default Button
