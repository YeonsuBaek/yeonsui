import React from "react"
import { fireEvent, render } from "@testing-library/react"
import Button from "./Button"

describe("Button test", () => {
  test("Button onClick event", () => {
    const handleClick = jest.fn()
    const { getByText } = render(<Button onClick={handleClick}>Button</Button>)

    const btn = getByText("Button")
    expect(btn).toBeTruthy()

    fireEvent.click(btn)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
