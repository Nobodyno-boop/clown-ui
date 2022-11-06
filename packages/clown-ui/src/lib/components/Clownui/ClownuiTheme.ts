import { DeepPartial } from '../../helpers/DeedPartial'
import { AlertTheme } from '../Alert'
import { SpinnerTheme } from '../Spinner'
import { ThemeToggleTheme } from '../ThemeToggle'

export type CustomTheme = DeepPartial<ClownuiTheme>

export interface ClownuiTheme extends Record<string, unknown> {
  alert: AlertTheme
  themeToggle: ThemeToggleTheme
  spinner: SpinnerTheme
}

export interface ClownuiStateColors {
  info: string
  error: string
  success: string
  warning: string
}

export interface ClownuiSizes {
  sm: string
  md: string
  lg: string
}

export interface ClownuiFullSizes {
  xs: string
  sm: string
  md: string
  lg: string
  xl: string
}
