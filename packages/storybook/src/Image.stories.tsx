import { Image } from '@poulpi/clown-ui'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Components/Image',
  component: Image,
  args: {
    rounded: false,
  },
} as ComponentMeta<typeof Image>

const Template: ComponentStory<typeof Image> = (args) => (
  <>
    <Image {...args} src="https://picsum.photos/200" alt="" />
  </>
)

export const DefaultThemeToggle = Template.bind({})
DefaultThemeToggle.storyName = 'Default'
DefaultThemeToggle.args = {}
