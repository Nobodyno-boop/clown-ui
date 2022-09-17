import type { ComponentProps, FC, PropsWithChildren, ReactNode } from 'react'
import { classname } from '../../helpers/ClassName'
import { ChooseIcon, iconList } from '../../helpers/iconList'
import { ClownuiStateColors } from '../Clownui/ClownuiTheme'
import { useTheme } from '../Clownui/ThemeContext'

export interface AlertProps
  extends PropsWithChildren<Omit<ComponentProps<'div'>, 'color'>> {
  rounded?: boolean
  border?: keyof AlertBorder
  icon?: ChooseIcon | FC<ComponentProps<'svg'>>
  children?: ReactNode
  color: 'info' | 'success' | 'warning' | 'error'
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
  rounded: string
  icon: string
  border: AlertBorder
  color: AlertColors
  closeButton: {
    base: string
    color: AlertColors
  }
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
  border,
  color = 'info',
  onDismiss,
  closeIcon = 'MdClose',
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
        theme.color[color],
        rounded && theme.rounded,
        border && theme.border[border]
      )}
      role="alert"
    >
      <div className="flex items-center">
        {IconI && <IconI className={classname(theme.icon)} />}
        <div>{children}</div>
        {typeof onDismiss === 'function' && (
          <button
            className={classname(
              theme.closeButton.base,
              theme.closeButton.color[color]
            )}
            onClick={onDismiss}
            type="button"
          >
            <IconClose className="h-5 w-5" />
          </button>
        )}
      </div>
    </div>
  )
}
