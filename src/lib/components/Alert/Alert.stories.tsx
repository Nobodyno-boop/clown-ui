import type { ComponentMeta, ComponentStory } from '@storybook/react'

import { Alert } from '.'
import { IconNames } from '../../helpers/iconList'

export default {
  title: 'Components/Alert',
  component: Alert,
  args: {
    color: 'info',
    rounded: false,
    onDismiss: false,
  },
  argTypes: {
    icon: { control: 'select', options: [...IconNames()] },
    border: { control: 'select', options: ['top', 'right', 'bottom', 'left'] },
  },
} as ComponentMeta<typeof Alert>

const Template: ComponentStory<typeof Alert> = (args) => (
  <Alert {...args}></Alert>
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

export const AlertWithIcon = Template.bind({})
AlertWithIcon.storyName = 'With Icons'
AlertWithIcon.args = {
  icon: 'MdOutlineBusAlert',
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
  icon: 'MdOutlineBusAlert',
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
  icon: 'MdOutlineBusAlert',
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
  icon: 'MdOutlineBusAlert',
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
