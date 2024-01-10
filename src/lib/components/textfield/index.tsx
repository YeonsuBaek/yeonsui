import { ChangeEvent } from "react"
import TextField from "./TextField"

export interface TextFieldProps {
  id: string
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  size?: "small" | "medium" | "large"
  disabled?: boolean
}

export { TextField }
