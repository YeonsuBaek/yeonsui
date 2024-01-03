import React from "react"
import { ButtonProps } from "."

const Button = ({
  children,
  variant = "primary",
  size = "medium",
  disabled = false,
}: ButtonProps) => {
  return (
    <button
      type='button'
      className={`ui-button ${variant} ${size}`}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button
