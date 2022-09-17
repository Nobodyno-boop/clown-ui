import { FC, ReactNode, useMemo, useEffect } from 'react'
import { DeepPartial } from '../../helpers/DeedPartial'
import { deepMerge } from '../../helpers/DeepMerge'
import { DefaultTheme } from '../../themes/default'
import { ClownuiTheme } from './ClownuiTheme'
import { ThemeContext, useThemeMode } from './ThemeContext'

export interface ThemeProps {
  dark?: boolean
  theme: DeepPartial<ClownuiTheme>
}

interface ClownUIProps {
  children: ReactNode
  theme?: ThemeProps
}

export const ClownUI: FC<ClownUIProps> = ({ children, theme = {} }) => {
  const { theme: custom = {}, dark } = theme
  const [mode, setMode, toggleMode] = useThemeMode()

  const finalTheme = deepMerge<ClownuiTheme>(DefaultTheme, custom)

  useEffect(() => {
    if (dark) {
      if (setMode != null) {
        setMode('dark')
      }
      document.documentElement.classList.add('dark')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode, setMode])

  const ThemeContextValue = useMemo(
    () => ({
      theme: finalTheme,
      mode,
      toggleMode,
    }),
    [mode, toggleMode, finalTheme]
  )

  return (
    <ThemeContext.Provider value={ThemeContextValue}>
      {children}
    </ThemeContext.Provider>
  )
}
