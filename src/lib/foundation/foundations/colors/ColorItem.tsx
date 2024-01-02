import React from "react"

interface ColorItemProps {
  color: any
}

const ColorItem = ({ color }: ColorItemProps) => {
  return (
    <li
      key={color.name}
      className='ui-colors-item light'
      style={{ background: color.light }}
    >
      <span>{color.name}</span>
      <span>{color.light}</span>
    </li>
  )
}

export default ColorItem
