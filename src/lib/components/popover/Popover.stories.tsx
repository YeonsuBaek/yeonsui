import type { ComponentStory, Meta } from '@storybook/react'
import { Popover } from '.'

const meta: Meta<typeof Popover> = {
  title: 'Component/Popover',
  component: Popover,
  argTypes: {},
}

export default meta

const InteractionTemplate: ComponentStory<typeof Popover> = (args) => (
  <Popover onClose={() => {}} isOpen>
    Content
  </Popover>
)

export const Interactive = InteractionTemplate.bind({})
Interactive.args = {}
