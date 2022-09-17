import { DeepPartial } from '../../helpers/DeedPartial'
import { AlertTheme } from '../Alert'

export type CustomTheme = DeepPartial<ClownuiTheme>

export interface ClownuiTheme extends Record<string, unknown> {
  alert: AlertTheme
  themeToggle: {
    base: string
    icon: string
  }
}

export interface ClownuiStateColors {
  info: string
  error: string
  success: string
  warning: string
}
