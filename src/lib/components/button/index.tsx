import { ButtonHTMLAttributes } from 'react'
import { FilledIconType } from '../icon/FilledIcons'
import Button from './Button'
import IconButton from './IconButton'
import { OutlinedIconType } from '../icon/OutlinedIcons'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string
  variant?: 'primary' | 'secondary' | 'link' | 'text'
  size?: 'small' | 'medium' | 'large'
  disabled?: boolean
  startIcon?: FilledIconType | OutlinedIconType
  endIcon?: FilledIconType | OutlinedIconType
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  color?: 'error' | 'warning' | 'success'
}

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
  size?: 'small' | 'medium' | 'large'
  shape?: 'default' | 'circle' | 'square'
  disabled?: boolean
  icon: FilledIconType | OutlinedIconType
  onClick?: () => void
  color?: 'error' | 'warning' | 'success'
}

export { Button, IconButton }
