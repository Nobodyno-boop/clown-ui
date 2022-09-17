import type { FC } from 'react'
import { ThemeToggle } from '../lib'

export const Test: FC = () => {
  return (
    <div className="flex h-screen w-full flex-col overflow-hidden">
      <ThemeToggle></ThemeToggle>
    </div>
  )
}
