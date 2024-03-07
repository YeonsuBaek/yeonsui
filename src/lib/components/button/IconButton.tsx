import React, { useMemo } from 'react'
import { IconButtonProps } from '.'
import { Icon } from '../icon'

const IconButton = ({
  variant = 'primary',
  size = 'medium',
  shape = 'default',
  icon,
  disabled = false,
  onClick,
  color,
  ...props
}: IconButtonProps) => {
  const iconSize = useMemo(() => (size === 'large' ? 'small' : 'xsmall'), [size])

  return (
    <button
      type="button"
      className={`ui-button ui-icon-button ${variant} ${size} ${shape} ${color ? color : ''}`}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      <Icon className="ui-button-icon" icon={icon} size={iconSize} />
    </button>
  )
}

export default IconButton
