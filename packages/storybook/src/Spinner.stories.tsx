import { Spinner, toHex } from '@poulpi/clown-ui'
import { ClownuiFullSizes } from '@poulpi/clown-ui/types/lib/components/Clownui/ClownuiTheme'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Components/Spinner',
  component: Spinner,
  args: {
    color: toHex('cblue-100'),
    size: 'md',
    type: 'normal',
  },
  argTypes: {
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl'] },
    type: { control: 'select', options: ['normal', 'puff', 'tail'] },
  },
} as ComponentMeta<typeof Spinner>

const Template: ComponentStory<typeof Spinner> = (args) => (
  <Spinner {...args}></Spinner>
)

const TemplateMulti: ComponentStory<typeof Spinner> = (args) => (
  <div className="flex flex-row gap-2">
    {['xs', 'sm', 'md', 'lg', 'xl'].map((s, i) => (
      <Spinner
        {...args}
        key={i}
        size={s as unknown as keyof ClownuiFullSizes}
      ></Spinner>
    ))}
  </div>
)

export const DefaultSpinner = Template.bind({})
DefaultSpinner.storyName = 'Default'
DefaultSpinner.args = {}

export const DefaultAllSizes = TemplateMulti.bind({})
DefaultAllSizes.storyName = 'All sizes'
DefaultAllSizes.args = {}
