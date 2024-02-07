import React from "react"
import { fireEvent, render } from "@testing-library/react"
import { Backdrop } from "."

describe("Backdrop Test", () => {
  test("Backdrop onClick Event", () => {
    const handleClose = jest.fn()
    render(<Backdrop onClose={handleClose} />)

    const backdrop = document.querySelector(".ui-backdrop")
    expect(backdrop).toBeTruthy()

    fireEvent.click(backdrop)
    expect(handleClose).toHaveBeenCalledTimes(1)
  })

  type ColorType = "dark" | "transparent"
  test.each<ColorType>(["dark", "transparent"])("Backdrop Colors", (color) => {
    const handleClose = jest.fn()
    render(<Backdrop onClose={handleClose} color={color} />)

    const backdrop = document.querySelector(".ui-backdrop")

    expect(backdrop).toBeTruthy()
    expect(backdrop?.classList.contains(color)).toBeTruthy()
  })
})
