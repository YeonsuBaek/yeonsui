import React from "react"
import { render } from "@testing-library/react"
import Icon from "./Icon"

describe("Icon test", () => {
  test("Icon render", () => {
    render(
      <>
        <Icon icon='Star' />
      </>
    )
  })

  test("Icon size", () => {
    render(
      <>
        <Icon icon='Star' />
        <Icon icon='Star' size='small' />
        <Icon icon='Star' size='medium' />
        <Icon icon='Star' size='large' />,
      </>
    )
  })

  test("Icon color", () => {
    render(<Icon icon='Star' color='#fff' />)
  })
})
