import Icon from "./Icon"
import { IconType } from "./Icons"

export interface IconProps {
  icon: IconType
  size?: "xsmall" | "small" | "medium" | "large" | "xlarge"
  color?: string
  className?: string
}

export interface SvgPathType {
  d: string
  fill: string
  fillOpacity?: string
}

export { Icon }
