import Icon from './Icon'
import { FilledIconType } from './FilledIcons'
import { OutlinedIconType } from './OutlinedIcons'

export interface IconProps {
  icon: FilledIconType | OutlinedIconType
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
