import type { ComponentStory, Meta } from '@storybook/react'
import { Modal } from '.'

const meta: Meta<typeof Modal> = {
  title: 'Component/Modal',
  component: Modal,
  argTypes: {},
}

export default meta

const InteractionTemplate: ComponentStory<typeof Modal> = (args) => (
  <Modal title="title" labelSave="저장" labelClose="닫기" onSave={() => {}} onClose={() => {}}>
    Content
  </Modal>
)

export const Interactive = InteractionTemplate.bind({})
Interactive.args = {}

export const StandardPopover = () => {
  return (
    <Modal title="Title" onClose={() => {}}>
      Content
    </Modal>
  )
}
