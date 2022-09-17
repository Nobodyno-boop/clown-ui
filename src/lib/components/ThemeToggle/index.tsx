import type { FC } from 'react'
import { useContext } from 'react'
import { ThemeContext, useTheme } from '../Clownui/ThemeContext'
import { MdWbSunny, MdModeNight } from 'react-icons/md'

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
export const ThemeToggle: FC = () => {
  const { mode, toggleMode } = useContext(ThemeContext)
  const theme = useTheme().theme.themeToggle
  return (
    <>
      <button className={theme.base} onClick={toggleMode}>
        {mode === 'dark' ? (
          <MdModeNight
            aria-label="Currently dark mode"
            className={theme.icon}
          ></MdModeNight>
        ) : (
          <MdWbSunny className={theme.icon}></MdWbSunny>
        )}
      </button>
    </>
  )
}
