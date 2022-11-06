import { ComponentMeta, ComponentStory } from '@storybook/react'

import { ThemeToggle } from './index'
import { ClownUI } from '../Clownui'

export default {
  title: 'Components/ThemeToggle',
  component: ThemeToggle,
} as ComponentMeta<typeof ThemeToggle>

const Template: ComponentStory<typeof ThemeToggle> = (args) => (
  <ClownUI>
    <ThemeToggle {...args}></ThemeToggle>
  </ClownUI>
)

export const DefaultThemeToggle = Template.bind({})
DefaultThemeToggle.storyName = 'Default'
DefaultThemeToggle.args = {
  iconOutline: false,
}
