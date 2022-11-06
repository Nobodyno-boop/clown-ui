import { Alert, ClownUI, ThemeToggle } from '@poulpi/clown-ui'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Components/ThemeToggle',
  component: ThemeToggle,
} as ComponentMeta<typeof ThemeToggle>

const Template: ComponentStory<typeof ThemeToggle> = (args) => (
  <ClownUI>
    <ThemeToggle {...args}></ThemeToggle>

    <Alert>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio expedita
      cumque nobis voluptate obcaecati nesciunt saepe quisquam delectus officiis
      asperiores quia deserunt blanditiis eligendi illum corporis totam, dolorum
      eius. Quasi.
    </Alert>
  </ClownUI>
)

export const DefaultThemeToggle = Template.bind({})
DefaultThemeToggle.storyName = 'Default'
DefaultThemeToggle.args = {
  iconOutline: false,
}
