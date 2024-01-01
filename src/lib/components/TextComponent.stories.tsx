import type { ComponentStory, Meta } from "@storybook/react"
import { TextComponent } from "./TextComponent"

const meta: Meta<typeof TextComponent> = {
  title: "Components/TextComponent",
  component: TextComponent,
}

export default meta
type Story = ComponentStory<typeof TextComponent>

const TextComponentTemplate: Story = () => {
  return <TextComponent />
}

export const Interactive = TextComponentTemplate.bind({})
