import { IconType } from '../icon/Icons'
import Button from './Button'
import IconButton from './IconButton'

export interface ButtonProps {
  children: string
  variant?: 'primary' | 'secondary' | 'link' | 'text'
  size?: 'small' | 'medium' | 'large'
  disabled?: boolean
  startIcon?: IconType
  endIcon?: IconType
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
}

export interface IconButtonProps {
  variant?: 'primary' | 'secondary'
  size?: 'small' | 'medium' | 'large'
  shape?: 'default' | 'circle' | 'square'
  disabled?: boolean
  icon: IconType
  onClick?: () => void
}

export { Button, IconButton }
