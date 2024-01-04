import React from "react"
import { ButtonProps } from "."

const Button = ({
  children,
  variant = "primary",
  size = "medium",
  disabled = false,
  onClick,
}: ButtonProps) => {
  return (
    <button
      type='button'
      className={`ui-button ${variant} ${size}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
