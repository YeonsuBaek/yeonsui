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
}

export const DefaultTextField = () => {
  return (
    <div style={{ width: "300px" }}>
      <TextField id="storybook-textfield-1" value="" onChange={() => {}} />
      <br />
      <br />
      <TextField
        id="storybook-textfield-2"
        value=""
        onChange={() => {}}
        disabled
      />
      <br />
      <br />
      <TextField
        id="storybook-textfield-3"
        value=""
        onChange={() => {}}
        placeholder="placeholder"
      />
      <br />
      <br />
      <TextField
        id="storybook-textfield-4"
        value=""
        onChange={() => {}}
        placeholder="placeholder"
        disabled
      />
      <br />
      <br />
      <TextField
        id="storybook-textfield-5"
        value="example"
        onChange={() => {}}
      />
      <br />
      <br />
      <TextField
        id="storybook-textfield-6"
        value="example"
        onChange={() => {}}
        disabled
      />
    </div>
  )
}

export const TextFieldWithSuffix = () => {
  return (
    <div style={{ width: "300px" }}>
      <TextField
        id="storybook-textfield-suffix-1"
        value=""
        onChange={() => {}}
        placeholder="Enter a size"
        suffix="px"
      />
      <br />
      <br />
      <TextField
        id="storybook-textfield-suffix-2"
        value="100"
        onChange={() => {}}
        placeholder="Enter a size"
        suffix="px"
      />
      <br />
      <br />
      <TextField
        id="storybook-textfield-suffix-3"
        value="100"
        onChange={() => {}}
        placeholder="Enter a size"
        suffix="px"
        disabled
      />
    </div>
  )
}

export const TextFieldWithIcon = () => {
  return (
    <div style={{ width: "300px" }}>
      <TextField
        id="storybook-textfield-icon-1"
        value=""
        onChange={() => {}}
        placeholder="Enter your email"
        icon="Mail"
      />
      <br />
      <br />
      <TextField
        id="storybook-textfield-icon-2"
        value="email@gmail.com"
        onChange={() => {}}
        placeholder="Enter a size"
        icon="Mail"
      />
      <br />
      <br />
      <TextField
        id="storybook-textfield-icon-3"
        value="email@gmail.com"
        onChange={() => {}}
        placeholder="Enter a size"
        icon="Mail"
        disabled
      />
    </div>
  )
}
