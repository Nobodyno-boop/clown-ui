import {
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'
import { DefaultTheme } from '../../themes/default'
import { ClownuiTheme } from './ClownuiTheme'

export type Mode = string | 'light' | 'dark'

interface ThemeProps {
  theme: ClownuiTheme
  mode?: Mode
  toggleMode?: () => void | null
}

export const ThemeContext = createContext<ThemeProps>({
  theme: DefaultTheme,
})

interface ThemeProviderProps {
  children: ReactNode
  value: ThemeProps
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children, value }) => {
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme(): ThemeProps {
  return useContext(ThemeContext)
}
/** @ts-lint-ignore */
export const useThemeMode = (): [
  Mode,
  React.Dispatch<React.SetStateAction<Mode>>,
  () => void
] => {
  const [mode, setMode] = useState<Mode>('light')

  const save = (m: string) => localStorage.setItem('theme', m)

  const toggleMode = () => {
    if (!mode) {
      return
    }

    if (typeof window !== 'undefined') {
      document.documentElement.classList.toggle('dark')
    }
    save(mode)
    setMode(mode === 'dark' ? 'light' : 'dark')
  }
  useEffect(() => {
    const userPreference =
      typeof window !== 'undefined' &&
      !!window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    const userMode =
      localStorage.getItem('theme') || (userPreference ? 'dark' : 'light')

    if (userMode) {
      setMode(userMode)
    }
  }, [])

  useEffect(() => {
    if (!mode) {
      return
    }

    save(mode)

    if (!(typeof window !== 'undefined')) {
      return
    }

    if (mode !== 'dark') {
      document.documentElement.classList.remove('dark')
    } else {
      document.documentElement.classList.add('dark')
    }
  }, [mode])

  return [mode, setMode, toggleMode]
}
