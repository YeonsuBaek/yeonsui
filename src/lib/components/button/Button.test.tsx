import React from "react"
import { fireEvent, render } from "@testing-library/react"
import Button from "./Button"
import IconButton from "./IconButton"

describe("Button test", () => {
  test("Button onClick event", () => {
    const handleClick = jest.fn()
    const { getByText } = render(<Button onClick={handleClick}>Button</Button>)

    const btn = getByText("Button")
    expect(btn).toBeTruthy()

    fireEvent.click(btn)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  test("Button has icons", () => {
    const { container } = render(
      <Button startIcon='Bell' endIcon='CaretDown'>
        Button
      </Button>
    )

    const btn = container as HTMLButtonElement
    expect(btn).toBeTruthy()

    expect(btn.querySelectorAll(".ui-button-icon").length).toBe(2)
  })

  type size = "small" | "medium" | "large"

  test.each<size>(["small", "medium", "large"])("Size of icons", (size) => {
    const { container } = render(
      <Button size={size} startIcon='Bell' endIcon='CaretDown'>
        Button
      </Button>
    )

    const btn = container as HTMLButtonElement
    expect(btn.querySelector(".ui-button-icon")?.getAttribute("width")).toBe(
      size === "large" ? "20" : "16"
    )
  })

  test("IconButton rendering", () => {
    const { container } = render(<IconButton icon='Copy' />)

    const btn = container
    expect(btn).toBeTruthy()
  })

  test.each<size>(["small", "medium", "large"])(
    "Size of icon button",
    (size) => {
      const { container } = render(<IconButton size={size} icon='Cloud' />)

      const btn = container as HTMLButtonElement
      expect(btn.querySelector(".ui-button-icon")?.getAttribute("width")).toBe(
        size === "large" ? "20" : "16"
      )
    }
  )
})
