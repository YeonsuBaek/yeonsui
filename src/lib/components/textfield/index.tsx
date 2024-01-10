import { ChangeEvent } from "react"
import TextField from "./TextField"
import { IconType } from "../icon/Icons"

export interface TextFieldProps {
  id: string
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  size?: "small" | "medium" | "large"
  disabled?: boolean
  suffix?: string
  icon?: IconType
}

export { TextField }
