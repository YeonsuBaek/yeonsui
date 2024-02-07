import { ChangeEvent } from 'react'
import TextField from './TextField'
import { IconType } from '../icon/Icons'

export interface DefaultTextFieldProps {
  id: string
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  size?: 'small' | 'medium' | 'large'
  disabled?: boolean
}

export interface TextFieldProps extends DefaultTextFieldProps {
  suffix?: string
  icon?: IconType
  type?: 'text' | 'password' | 'file'
}

export { TextField }
