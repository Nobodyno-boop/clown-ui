import { Alert, IconNames, Spinner } from '@poulpi/clown-ui'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Components/Alert',
  component: Alert,
  args: {
    color: 'info',
    title: 'News title',
    rounded: false,
    onDismiss: false,
    shadow: false,
  },
  argTypes: {
    icon: { control: 'select', options: [...IconNames()] },
    border: { control: 'select', options: ['top', 'right', 'bottom', 'left'] },
    color: {
      control: 'select',
      options: ['info', 'success', 'warning', 'error'],
    },
    iconSize: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
} as ComponentMeta<typeof Alert>

const Template: ComponentStory<typeof Alert> = (args) => (
  <Alert title="News Title" {...args}></Alert>
)

const TemplateAllColors: ComponentStory<typeof Alert> = (args) => (
  <div className="flex flex-col gap-2">
    <Alert {...args} color="info"></Alert>
    <Alert {...args} color="success"></Alert>
    <Alert {...args} color="warning"></Alert>
    <Alert {...args} color="error"></Alert>
  </div>
)

export const DefaultAlert = Template.bind({})
DefaultAlert.storyName = 'Default'
DefaultAlert.args = {
  children: (
    <>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta minima
      rerum veritatis optio atque impedit, enim quisquam, excepturi consectetur
      quaerat odio hic, natus aspernatur ex architecto quas dolor nemo alias.
    </>
  ),
}

export const AllColors = TemplateAllColors.bind({})
AllColors.storyName = 'All colors'
AllColors.args = {
  children: (
    <>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta minima
      rerum veritatis optio atque impedit, enim quisquam, excepturi consectetur
      quaerat odio hic, natus aspernatur ex architecto quas dolor nemo alias.
    </>
  ),
}

export const AlertWithIcon = Template.bind({})
AlertWithIcon.storyName = 'With Icons'
AlertWithIcon.args = {
  icon: 'MdError',
  children: (
    <>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta minima
      rerum veritatis optio atque impedit, enim quisquam, excepturi consectetur
      quaerat odio hic, natus aspernatur ex architecto quas dolor nemo alias.
    </>
  ),
}

export const AlertWithBorder = Template.bind({})
AlertWithBorder.storyName = 'With Border'
AlertWithBorder.args = {
  icon: 'MdError',
  border: 'top',
  children: (
    <>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta minima
      rerum veritatis optio atque impedit, enim quisquam, excepturi consectetur
      quaerat odio hic, natus aspernatur ex architecto quas dolor nemo alias.
    </>
  ),
}

export const AlertWithBorderLeft = Template.bind({})
AlertWithBorderLeft.storyName = 'With Border left'
AlertWithBorderLeft.args = {
  icon: 'MdError',
  border: 'left',
  children: (
    <>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta minima
      rerum veritatis optio atque impedit, enim quisquam, excepturi consectetur
      quaerat odio hic, natus aspernatur ex architecto quas dolor nemo alias.
    </>
  ),
}

export const AlertWithClose = Template.bind({})
AlertWithClose.storyName = 'With Border close'
AlertWithClose.args = {
  icon: 'MdError',
  border: 'left',
  onDismiss: () => alert('Dissmiss'),
  children: (
    <>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta minima
      rerum veritatis optio atque impedit, enim quisquam, excepturi consectetur
      quaerat odio hic, natus aspernatur ex architecto quas dolor nemo alias.
    </>
  ),
}

export const AlertWithChildren = Template.bind({})
AlertWithChildren.storyName = 'With children'
AlertWithChildren.args = {
  border: '',
  title: '',
  children: (
    <div className="inline-flex items-center gap-2">
      <Spinner size="lg" type="normal" />
      Loading...
    </div>
  ),
}
