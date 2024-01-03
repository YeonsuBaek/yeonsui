import { useState, useEffect } from "react"
import { IconProps, SvgPathType } from "."
import { icons } from "./Icons"

const Icon = ({ icon, size }: IconProps) => {
  const {
    width: defWidth,
    height: defHeight,
    viewBox,
    fill,
    svgdata,
  } = icons[icon]
  const [width, setWidth] = useState<string>(defWidth)
  const [height, setHeight] = useState<string>(defHeight)

  const contents = svgdata.paths.map((path: SvgPathType) => {
    return <path d={path.d} fill={path.fill} fillOpacity={path.fillOpacity} />
  })

  useEffect(() => {
    if (size) {
      switch (size) {
        case "small":
          setWidth("20")
          setHeight("20")
          break
        case "medium":
          setWidth("28")
          setHeight("28")
          break
        case "medium":
          setWidth("32")
          setHeight("32")
          break
        default:
          break
      }
    }
  }, [size])

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
