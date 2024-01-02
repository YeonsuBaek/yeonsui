import type { ComponentStory, Meta } from "@storybook/react"
import { Colors } from "./ColorSetList"

const meta: Meta<typeof Colors> = {
  title: "Foundation/Colors",
  component: Colors,
}

export default meta
type Story = ComponentStory<typeof Colors>

const ColorsTemplate: Story = () => {
  return <Colors />
}

export const ColorSet = ColorsTemplate.bind({})
