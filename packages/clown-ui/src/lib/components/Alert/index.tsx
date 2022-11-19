import { ComponentProps, FC, PropsWithChildren, ReactNode } from 'react'
import { classname } from '../../helpers/ClassName'
import { ChooseIcon, iconList } from '../../helpers/iconList'
import { ClownuiSizes, ClownuiStateColors } from '../Clownui/ClownuiTheme'
import { useTheme } from '../Clownui/ThemeContext'

export interface AlertProps
  extends PropsWithChildren<Omit<ComponentProps<'div'>, 'color'>> {
  rounded?: boolean
  border?: keyof AlertBorder | string
  shadow?: boolean
  icon?: ChooseIcon | FC<ComponentProps<'svg'>>
  iconSize?: keyof ClownuiSizes
  children?: ReactNode
  color?: 'info' | 'success' | 'warning' | 'error'
  title?: string
  onDismiss?: boolean | (() => void) | undefined
  closeIcon?: ChooseIcon | FC<ComponentProps<'svg'>>
}

export interface AlertBorder {
  top: string
  right: string
  bottom: string
  left: string
}

export interface AlertTheme {
  base: string
  title: string
  rounded: string
  shadow: string
  icon: {
    base: string
    iconSize: ClownuiSizes
  }
  border: {
    border: AlertBorder
    color: AlertColors
  }
  color: AlertColors
  closeButton: string
}

export interface AlertColors
  extends Pick<ClownuiStateColors, 'info' | 'success' | 'warning' | 'error'> {
  [key: string]: string
}
/**
 * ## Alert
 *
 * ```jsx
 * <Alert>
 *    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta minima
 *    rerum veritatis optio atque impedit, enim quisquam, excepturi consectetur
 *    quaerat odio hic, natus aspernatur ex architecto quas dolor nemo alias.
 * </Alert>
 *
 * ```
 *
 * @returns
 */
export const Alert: FC<AlertProps> = ({
  rounded,
  icon,
  iconSize = 'md',
  border,
  shadow = false,
  color = 'info',
  onDismiss,
  closeIcon = 'MdClose',
  title,
  children,
}) => {
  const theme = useTheme().theme.alert
  let IconI = typeof icon === 'string' ? iconList()[icon] : icon
  let IconClose =
    typeof closeIcon === 'string' ? iconList()[closeIcon] : closeIcon

  return (
    <div
      className={classname(
        theme.base,
        rounded && theme.rounded,
        theme.border.color[color],
        border && (theme.border.border as any)[border],
        shadow && theme.shadow
      )}
      role="alert"
    >
      <div className="flex items-center gap-2">
        {IconI && (
          <IconI
            className={classname(
              theme.icon.base,
              theme.color[color],
              theme.icon.iconSize[iconSize]
            )}
          />
        )}

        <div>
          {title ? (
            <div className={classname(theme.title, theme.color[color])}>
              {title}
            </div>
          ) : null}
          {children}
        </div>
        {typeof onDismiss === 'function' && (
          <button
            className={classname(theme.closeButton)}
            onClick={onDismiss}
            type="button"
            aria-label="Close alert"
          >
            <IconClose className="h-5 w-5" />
          </button>
        )}
      </div>
    </div>
  )
}
