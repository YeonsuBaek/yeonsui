import { useEffect, useMemo, useRef, useState } from 'react'
import { TextFieldProps } from '.'
import { Icon } from '../icon'

const TextField = ({
  id,
  value,
  onChange,
  placeholder = '',
  size = 'medium',
  label = '',
  required = false,
  disabled = false,
  suffix,
  icon,
  type = 'text',
  autoFocus = false,
  isError = false,
  helperText = '',
}: TextFieldProps) => {
  const DEFAULT_RIGHT_PADDING = {
    small: 7,
    medium: 11,
    large: 11,
  }
  const ICON_RIGHT_PADDING = 4
  const ICON_SIZE = {
    small: 16,
    medium: 16,
    large: 20,
  }

  const inputRef = useRef(null)
  const suffixRef = useRef(null)
  const [iconWidth, setIconWidth] = useState<number>(0)
  const [suffixWidth, setSuffixWidth] = useState<number>(0)
  const iconSize = useMemo(() => (size === 'large' ? 'small' : 'xsmall'), [size])

  useEffect(() => {
    if (icon) {
      setIconWidth(ICON_RIGHT_PADDING + ICON_SIZE[size])
    }
    if (suffix && suffixRef && suffixRef.current) {
      const suffixElem = suffixRef.current as HTMLElement
      const rect = suffixElem.getBoundingClientRect()
      setSuffixWidth(rect.width + 4)
    }
  }, [size, icon, suffix])

  useEffect(() => {
    if (autoFocus && inputRef?.current) {
      const current = inputRef.current as HTMLElement
      current.focus()
    }
  }, [autoFocus])

  return (
    <>
      <div
        className={`ui-textfield ${size} ${placeholder ? 'placeholder' : ''} ${
          label && size === 'large' ? 'label' : ''
        } ${disabled ? 'disabled' : ''} ${isError ? 'isError' : ''} ${value ? 'hasValue' : ''}`}
      >
        <input
          className="ui-textfield-input"
          type={type}
          id={id}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          style={{
            paddingLeft: `${DEFAULT_RIGHT_PADDING[size] + iconWidth}px`,
            paddingRight: `${DEFAULT_RIGHT_PADDING[size] + suffixWidth}px`,
          }}
          ref={inputRef}
        />
        {label && size === 'large' && (
          <label htmlFor={id} className={`ui-textfield-label ${required ? 'required' : ''}`}>
            {label}
          </label>
        )}
        {suffix && (
          <span className="ui-textfield-suffix" ref={suffixRef}>
            {suffix}
          </span>
        )}
        {icon && <Icon className="ui-textfield-icon" size={iconSize} icon={icon} />}
      </div>
      {helperText && <p className={`ui-textfield-helper-text ${isError ? 'isError' : ''}`}>{helperText}</p>}
    </>
  )
}

export default TextField
