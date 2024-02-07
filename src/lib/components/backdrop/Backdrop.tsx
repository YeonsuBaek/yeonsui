import { MouseEvent } from "react"
import { BackdropProps } from "."

const Backdrop = ({ onClose, color = "dark" }: BackdropProps) => {
  return (
    <div
      className={`ui-backdrop ${color}`}
      role="presentation"
      onClick={(e: MouseEvent<HTMLDivElement>) => onClose(e)}
    />
  )
}

export default Backdrop
