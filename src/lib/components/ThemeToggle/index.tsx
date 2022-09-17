import type { ComponentProps, FC } from 'react'
import { useContext } from 'react'
import { ThemeContext, useTheme } from '../Clownui/ThemeContext'
import {
  MdWbSunny,
  MdOutlineWbSunny,
  MdModeNight,
  MdOutlineModeNight,
} from 'react-icons/md'

export interface ThemeToggleProps
  extends Omit<ComponentProps<'button'>, 'className'> {
  iconOutline?: boolean
}

/**
 * ## Usage
 *
 * ```jsx
 * <ThemeToggle>
 * </ThemeToggle>
 *
 * ```
 *
 * @returns
 */
export const ThemeToggle: FC<ThemeToggleProps> = (props) => {
  const { mode, toggleMode } = useContext(ThemeContext)
  const theme = useTheme().theme.themeToggle
  return (
    <>
      <button className={theme.base} onClick={toggleMode}>
        {mode === 'dark' ? (
          props.iconOutline ? (
            <MdOutlineModeNight
              aria-label="Currently dark mode"
              className={theme.icon}
            ></MdOutlineModeNight>
          ) : (
            <MdModeNight
              aria-label="Currently dark mode"
              className={theme.icon}
            ></MdModeNight>
          )
        ) : props.iconOutline ? (
          <MdOutlineWbSunny className={theme.icon}></MdOutlineWbSunny>
        ) : (
          <MdWbSunny className={theme.icon}></MdWbSunny>
        )}
      </button>
    </>
  )
}
