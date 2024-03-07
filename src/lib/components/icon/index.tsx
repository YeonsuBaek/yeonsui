import Icon from './Icon'
import { IconType } from './Icons'
import { OutlinedIconType } from './OutlinedIcons'

export interface IconProps {
  icon: IconType | OutlinedIconType
  size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge'
  color?: string
  className?: string
}

export interface SvgPathType {
  d: string
  fill: string
  fillOpacity?: string
}

export { Icon }
