import { DeepPartial } from '../../helpers/DeedPartial'
import { AlertTheme } from '../Alert'
import { ImageTheme } from '../Image'
import { SpinnerTheme } from '../Spinner'
import { TagTheme } from '../Tag'
import { ThemeToggleTheme } from '../ThemeToggle'

export type CustomTheme = DeepPartial<ClownuiTheme>

export interface ClownuiTheme extends Record<string, unknown> {
  alert: AlertTheme
  themeToggle: ThemeToggleTheme
  spinner: SpinnerTheme
  image: ImageTheme
  tag: TagTheme
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
