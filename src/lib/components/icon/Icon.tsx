import { useState, useEffect } from 'react'
import { IconProps, SvgPathType } from '.'
import { filledIcons } from './FilledIcons'
import { outlinedIcons } from './OutlinedIcons'

const Icon = ({ icon, size, color, className = '' }: IconProps) => {
  const { width: defWidth, height: defHeight, viewBox, fill, svgdata } = { ...filledIcons, ...outlinedIcons }[icon]

  const [width, setWidth] = useState<string>(defWidth)
  const [height, setHeight] = useState<string>(defHeight)

  const contents = svgdata.paths.map((path: SvgPathType) => {
    return <path key={path.d} d={path.d} fill={color ? color : path.fill} fillOpacity={path.fillOpacity} />
  })

  useEffect(() => {
    if (size) {
      switch (size) {
        case 'xsmall':
          setWidth('16')
          setHeight('16')
          break
        case 'small':
          setWidth('20')
          setHeight('20')
          break
        case 'medium':
          setWidth('24')
          setHeight('24')
          break
        case 'large':
          setWidth('28')
          setHeight('28')
          break
        case 'xlarge':
          setWidth('32')
          setHeight('32')
          break
        default:
          break
      }
    }
  }, [size])

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={viewBox}
      fill={fill}
      className={className}
    >
      {contents}
    </svg>
  )
}

export default Icon
