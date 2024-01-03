import Button from "./Button"

export interface ButtonProps {
  children: string
  variant?: "primary" | "secondary" | "link" | "text"
  size?: "small" | "medium" | "large"
  disabled?: boolean
}

export { Button }
