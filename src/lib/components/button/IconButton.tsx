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
}: IconButtonProps) => {
  const iconSize = useMemo(() => (size === 'large' ? 'small' : 'xsmall'), [size])

  return (
    <button
      type="button"
      className={`ui-button ui-icon-button ${variant} ${size} ${shape}`}
      disabled={disabled}
      onClick={onClick}
    >
      <Icon className="ui-button-icon" icon={icon} size={iconSize} />
    </button>
  )
}

export default IconButton
