import type { ComponentStory, Meta } from "@storybook/react"
import { Button } from "."
import { action } from "@storybook/addon-actions"

const meta: Meta<typeof Button> = {
  title: "Component/Button",
  component: Button,
  argTypes: {
    variant: ["primary", "secondary", "link", "text"],
    size: ["small", "medium", "large"],
    disabled: [true, false],
  },
}

export default meta

const InteractionTemplate: ComponentStory<typeof Button> = (args) => (
  <Button onClick={action("clicked")} {...args}>
    Button
  </Button>
)

export const Interactive = InteractionTemplate.bind({})
Interactive.args = {
  variant: "primary",
  size: "medium",
}

export const StandardButton = () => {
  return (
    <table>
      <tr>
        <td>
          <Button variant='primary' size='small'>
            Button Title
          </Button>
        </td>
        <td>
          <Button variant='secondary' size='small'>
            Button Title
          </Button>
        </td>
        <td>
          <Button variant='link' size='small'>
            Button Title
          </Button>
        </td>
        <td>
          <Button variant='text' size='small'>
            Button Title
          </Button>
        </td>
      </tr>
      <tr>
        <td>
          <Button variant='primary' size='medium'>
            Button Title
          </Button>
        </td>
        <td>
          <Button variant='secondary' size='medium'>
            Button Title
          </Button>
        </td>
        <td>
          <Button variant='link' size='medium'>
            Button Title
          </Button>
        </td>
        <td>
          <Button variant='text' size='medium'>
            Button Title
          </Button>
        </td>
      </tr>
      <tr>
        <td>
          <Button variant='primary' size='large'>
            Button Title
          </Button>
        </td>
        <td>
          <Button variant='secondary' size='large'>
            Button Title
          </Button>
        </td>
        <td>
          <Button variant='link' size='large'>
            Button Title
          </Button>
        </td>
        <td>
          <Button variant='text' size='large'>
            Button Title
          </Button>
        </td>
      </tr>
    </table>
  )
}

export const DisabledButton = () => {
  return (
    <table>
      <tr>
        <td>
          <Button variant='primary' size='small' disabled>
            Button Title
          </Button>
        </td>
        <td>
          <Button variant='secondary' size='small' disabled>
            Button Title
          </Button>
        </td>
        <td>
          <Button variant='link' size='small' disabled>
            Button Title
          </Button>
        </td>
        <td>
          <Button variant='text' size='small' disabled>
            Button Title
          </Button>
        </td>
      </tr>
      <tr>
        <td>
          <Button variant='primary' size='medium' disabled>
            Button Title
          </Button>
        </td>
        <td>
          <Button variant='secondary' size='medium' disabled>
            Button Title
          </Button>
        </td>
        <td>
          <Button variant='link' size='medium' disabled>
            Button Title
          </Button>
        </td>
        <td>
          <Button variant='text' size='medium' disabled>
            Button Title
          </Button>
        </td>
      </tr>
      <tr>
        <td>
          <Button variant='primary' size='large' disabled>
            Button Title
          </Button>
        </td>
        <td>
          <Button variant='secondary' size='large' disabled>
            Button Title
          </Button>
        </td>
        <td>
          <Button variant='link' size='large' disabled>
            Button Title
          </Button>
        </td>
        <td>
          <Button variant='text' size='large' disabled>
            Button Title
          </Button>
        </td>
      </tr>
    </table>
  )
}

export const ButtonWithIcon = () => {
  return (
    <table>
      <tr>
        <td>
          <Button variant='primary' size='small' startIcon='Setting'>
            Button Title
          </Button>
        </td>
        <td>
          <Button variant='secondary' size='small' startIcon='Setting'>
            Button Title
          </Button>
        </td>
        <td>
          <Button variant='link' size='small' startIcon='Setting'>
            Button Title
          </Button>
        </td>
        <td>
          <Button variant='text' size='small' startIcon='Setting'>
            Button Title
          </Button>
        </td>
      </tr>
      <tr>
        <td>
          <Button variant='primary' size='medium' startIcon='Setting'>
            Button Title
          </Button>
        </td>
        <td>
          <Button variant='secondary' size='medium' startIcon='Setting'>
            Button Title
          </Button>
        </td>
        <td>
          <Button variant='link' size='medium' startIcon='Setting'>
            Button Title
          </Button>
        </td>
        <td>
          <Button variant='text' size='medium' startIcon='Setting'>
            Button Title
          </Button>
        </td>
      </tr>
      <tr>
        <td>
          <Button variant='primary' size='large' startIcon='Setting'>
            Button Title
          </Button>
        </td>
        <td>
          <Button variant='secondary' size='large' startIcon='Setting'>
            Button Title
          </Button>
        </td>
        <td>
          <Button variant='link' size='large' startIcon='Setting'>
            Button Title
          </Button>
        </td>
        <td>
          <Button variant='text' size='large' startIcon='Setting'>
            Button Title
          </Button>
        </td>
      </tr>
    </table>
  )
}
