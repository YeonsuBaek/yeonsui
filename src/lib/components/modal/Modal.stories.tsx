import type { ComponentStory, Meta } from '@storybook/react'
import { Modal } from '.'
import { useState } from 'react'
import { Button } from '../button'

const meta: Meta<typeof Modal> = {
  title: 'Component/Modal',
  component: Modal,
  argTypes: {},
}
export default meta

const InteractionTemplate: ComponentStory<typeof Modal> = (args) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <Modal {...args} onClose={() => setIsOpen(false)} isOpen={isOpen}>
        contents
      </Modal>
    </>
  )
}

export const Interactive = InteractionTemplate.bind({})
Interactive.args = {
  title: 'Title',
  labelSave: '저장',
}

export const StandardModal = () => (
  <Modal title="Title" onClose={() => {}} isOpen>
    Some contents...
  </Modal>
)

export const ModalWithAlert = () => (
  <Modal
    title="Are you sure delete this task?"
    icon="warning"
    onClose={() => {}}
    isOpen
    labelClose="No"
    labelSave="Yes"
    onSave={() => {}}
  >
    Some contents...
  </Modal>
)

export const UntitledModal = () => (
  <Modal onClose={() => {}} isOpen>
    Some contents...
  </Modal>
)
