import React from "react"
import { ButtonProps } from "."
import { Icon } from "../icon"

const Button = ({
  children,
  variant = "primary",
  size = "medium",
  disabled = false,
  startIcon,
  endIcon,
  onClick,
}: ButtonProps) => {
  return (
    <button
      type='button'
      className={`ui-button ${variant} ${size}`}
      disabled={disabled}
      onClick={onClick}
    >
      {startIcon && (
        <Icon
          className='ui-button-icon'
          icon={startIcon}
          size={size === "large" ? "small" : "xsmall"}
        />
      )}
      <span>{children}</span>
      {endIcon && (
        <Icon
          className='ui-button-icon'
          icon={endIcon}
          size={size === "large" ? "small" : "xsmall"}
        />
      )}
    </button>
  )
}

export default Button
