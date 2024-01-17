import { ReactPortal } from "react"
import ReactDOM from "react-dom"
import { PortalProps } from "."

const Portal = ({ children }: PortalProps): ReactPortal =>
  ReactDOM.createPortal(children, document.body)

export default Portal
