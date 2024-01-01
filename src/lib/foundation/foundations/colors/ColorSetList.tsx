import React from "react"
import ColorItem from "./ColorItem"
import { DUST_RED } from "./ColorSet"

const Colors = () => {
  return (
    <>
      <h2>Dust Red</h2>
      <ul className='ui-colors-list'>
        {DUST_RED.map((color) => (
          <ColorItem color={color} />
        ))}
      </ul>
    </>
  )
}

export { Colors }
