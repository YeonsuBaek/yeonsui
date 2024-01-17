import React from "react"
import { render } from "@testing-library/react"
import { Portal } from "."

describe("Portal Test", () => {
  test("Portal in the end of Body.", () => {
    const { container } = render(
      <Portal>
        <div className="test-portal">Portal</div>
      </Portal>
    )

    const portal = container
    expect(portal).toBeTruthy()

    const lastItem = document.querySelector(
      "body > div:last-of-type"
    ) as HTMLElement
    expect(lastItem.classList.contains("test-portal")).toBeTruthy()
  })
})
