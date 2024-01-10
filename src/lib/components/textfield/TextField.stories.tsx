import type { ComponentStory, Meta } from "@storybook/react"
import { TextField } from "."
import { useState } from "react"

const meta: Meta<typeof TextField> = {
  title: "Component/TextField",
  component: TextField,
  argTypes: {
    size: ["small", "medium", "large"],
    disabled: [true, false],
  },
}

export default meta

const TextFieldTemplate: ComponentStory<typeof TextField> = (args) => {
  const [text, setText] = useState<string>("")

  return (
    <div style={{ width: "200px" }}>
      <TextField
        {...args}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  )
}

export const Interactive = TextFieldTemplate.bind({})
Interactive.args = {
  placeholder: "example",
  size: "medium",
  icon: "Calendar",
}
