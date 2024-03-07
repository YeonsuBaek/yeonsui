import type { ComponentStory, Meta } from '@storybook/react'
import { Icon } from '.'
import { icons, IconType } from './Icons'
import { OutlinedIconType, outlinedIcons } from './OutlinedIcons'

const meta: Meta<typeof Icon> = {
  title: 'Component/Icon',
  component: Icon,
}

export default meta

export const IconRender = () => {
  const iconList: string[] = Object.keys(icons)
  const renderIcons = iconList.map((icon: string) => (
    <div
      key={`icon-${icon}`}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Icon icon={icon as IconType} />
      <span>{icon}</span>
    </div>
  ))
  return <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>{renderIcons}</div>
}

export const OutlinedIconsRender = () => {
  const iconList: string[] = Object.keys(outlinedIcons)
  const renderIcons = iconList.map((icon: string) => (
    <div
      key={`icon-${icon}`}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Icon icon={icon as IconType | OutlinedIconType} />
      <span>{icon}</span>
    </div>
  ))
  return <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>{renderIcons}</div>
}

export const iconSizes = () => {
  return (
    <>
      <Icon icon="Heart" size="small" />
      <Icon icon="Heart" size="medium" />
      <Icon icon="Heart" size="large" />
    </>
  )
}

export const iconColors = () => {
  return (
    <>
      <Icon icon="Heart" color="#1890ff" />
      <Icon icon="Heart" color="#722ed1" />
      <Icon icon="Heart" color="#eb2f96" />
    </>
  )
}
