import type { Meta } from '@storybook/react'
import { Icon } from '.'
import { filledIcons, FilledIconType } from './FilledIcons'
import { OutlinedIconType, outlinedIcons } from './OutlinedIcons'

const meta: Meta<typeof Icon> = {
  title: 'Component/Icon',
  component: Icon,
}

export default meta

export const FilledIconRender = () => {
  const iconList: string[] = Object.keys(filledIcons)
  const renderIcons = iconList.map((icon: string) => (
    <div
      key={`icon-${icon}`}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px',
        width: '84px',
      }}
    >
      <Icon icon={icon as FilledIconType} />
      <span style={{ fontSize: '14px', width: '100%', textAlign: 'center', wordBreak: 'break-word' }}>{icon}</span>
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
        gap: '8px',
        width: '84px',
      }}
    >
      <Icon icon={icon as OutlinedIconType} />
      <span style={{ fontSize: '14px', width: '100%', textAlign: 'center', wordBreak: 'break-word' }}>{icon}</span>
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
