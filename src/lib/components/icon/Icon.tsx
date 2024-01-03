import { IconProps, SvgPathType } from "."
import { icons } from "./Icons"

const Icon = ({ icon }: IconProps) => {
  const { width, height, viewBox, fill, svgdata } = icons[icon]

  const contents = svgdata.paths.map((path: SvgPathType) => {
    return <path d={path.d} fill={path.fill} fillOpacity={path.fillOpacity} />
  })

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox={viewBox}
      fill={fill}
    >
      {contents}
    </svg>
  )
}

export default Icon
