import { IconNames, Tag } from '@poulpi/clown-ui'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { useState } from 'react'
import { FaTwitter } from 'react-icons/fa'

export default {
  title: 'Components/Tag',
  component: Tag,
  args: {
    rounded: false,
    shadow: false,
  },
  argTypes: {
    icon: { control: 'select', options: [...IconNames()] },
  },
} as ComponentMeta<typeof Tag>

const Template: ComponentStory<typeof Tag> = (args) => (
  <>
    <Tag {...args}>Tag</Tag>
  </>
)

export const DefaultTag = Template.bind({})
DefaultTag.storyName = 'Default'
DefaultTag.args = {}

const TemplateClose: ComponentStory<typeof Tag> = (args) => (
  <>
    <Tag {...args}>Tag</Tag>
  </>
)

export const DefaultTagClose = TemplateClose.bind({})
DefaultTagClose.storyName = 'Tag close'
DefaultTagClose.args = {
  closable: true,
}

const TemplateIcon: ComponentStory<typeof Tag> = (args) => (
  <>
    <Tag {...args}>Twitter</Tag>
  </>
)

export const DefaultTagIcon = TemplateIcon.bind({})
DefaultTagIcon.storyName = 'Tag icon'
DefaultTagIcon.args = {
  closable: true,
  shadow: true,
  color: 'indigo-400',
  icon: FaTwitter,
}

const TemplateEdit: ComponentStory<typeof Tag> = (args) => {
  const [tags, setTags] = useState<string[]>(['Tag 1', 'Tag 2', 'Tag 3'])

  const HandleClose = (removedTag: any) => {
    const newTags = tags.filter((tag) => tag !== removedTag)
    console.log(newTags)

    setTags(newTags)
  }

  return (
    <div className="inline-flex gap-3">
      {tags.map((t, i) => (
        <Tag {...args} key={i} onClose={HandleClose}>
          {t}
        </Tag>
      ))}
    </div>
  )
}

export const DefaultTagEdit = TemplateEdit.bind({})
DefaultTagEdit.storyName = 'Tag edits'
DefaultTagEdit.args = {
  closable: true,
  shadow: true,
}
