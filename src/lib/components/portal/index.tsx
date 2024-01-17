import { ReactElement } from "react"
import Portal from "./Portal"

export type PortalChildrenType = ReactElement | ReactElement[]

export interface PortalProps {
  children: PortalChildrenType
}

export { Portal }
