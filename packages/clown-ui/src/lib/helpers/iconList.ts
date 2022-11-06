import * as md from 'react-icons/md'

export type ChooseIcon = keyof typeof md
export const IconNames = () => Object.keys(md)

export const iconList = () => {
  return md
}
