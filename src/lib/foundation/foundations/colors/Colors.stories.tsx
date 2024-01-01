import type { ComponentStory, Meta } from "@storybook/react"
import { Colors } from "./ColorSetList"

const meta: Meta<typeof Colors> = {
  title: "Foundation",
  component: Colors,
}

export default meta
type Story = ComponentStory<typeof Colors>

const ColorsTemplate: Story = () => {
  return <Colors />
}

export const COLORS = ColorsTemplate.bind({})
