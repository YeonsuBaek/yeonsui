import React, { useMemo, useState } from 'react'
import { DefaultTextFieldProps } from '.'
import { IconButton } from '../button'

const PasswordTextField = ({ size = 'medium', disabled, id, value, onChange, placeholder }: DefaultTextFieldProps) => {
  const [isShow, setIsShow] = useState(false)
  const iconSize = useMemo(() => (size === 'large' ? 'medium' : 'small'), [size])

  return (
    <div className={`ui-textfield ${size} ${disabled ? 'disabled' : ''}`}>
      <input
        className="ui-textfield-input"
        type={isShow ? 'text' : 'password'}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
      />
      <IconButton
        icon={isShow ? 'EyeInvisible' : 'Eye'}
        variant="secondary"
        onClick={() => setIsShow((prev) => !prev)}
        size={iconSize}
        disabled={disabled}
      />
    </div>
  )
}

export default PasswordTextField
