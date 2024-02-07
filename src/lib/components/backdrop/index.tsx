import { MouseEvent } from "react"
import Backdrop from "./Backdrop"

export interface BackdropProps {
  onClose: (e: MouseEvent<HTMLDivElement>) => void
  color?: "dark" | "transparent"
}

export { Backdrop }
