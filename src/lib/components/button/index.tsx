import { ButtonHTMLAttributes } from 'react'
import { IconType } from '../icon/FilledIcons'
import Button from './Button'
import IconButton from './IconButton'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string
  variant?: 'primary' | 'secondary' | 'link' | 'text'
  size?: 'small' | 'medium' | 'large'
  disabled?: boolean
  startIcon?: IconType
  endIcon?: IconType
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  color?: 'error' | 'warning' | 'success'
}

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
  size?: 'small' | 'medium' | 'large'
  shape?: 'default' | 'circle' | 'square'
  disabled?: boolean
  icon: IconType
  onClick?: () => void
  color?: 'error' | 'warning' | 'success'
}

export { Button, IconButton }
