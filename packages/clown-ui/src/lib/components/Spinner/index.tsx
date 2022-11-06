import { FC } from 'react'
import { classname } from '../../helpers/ClassName'
import colors from 'tailwindcss/colors'
import { ClownuiFullSizes } from '../Clownui/ClownuiTheme'
import { useTheme } from '../Clownui/ThemeContext'
import { toHex } from '../../helpers/Colors'

export interface SpinnerProps {
  color?: string
  size?: keyof ClownuiFullSizes
  type: SpinnerType
}

export type SpinnerType = 'normal' | 'puff' | 'tail'

export interface SpinnerSizes
  extends Pick<ClownuiFullSizes, 'xs' | 'sm' | 'md' | 'lg' | 'xl'> {
  [key: string]: string
}

export interface SpinnerTheme {
  base: string
  size: SpinnerSizes
}

export const Spinner: FC<SpinnerProps> = ({
  color = 'cblue-100',
  size = 'md',
  type = 'normal',
}) => {
  const theme = useTheme().theme.spinner

  const hex = toHex(color)
  return (
    <span role="status" className={theme.base}>
      {/*All Spinner SVG made by Sam Herbert (@sherb), for everyone. More @ http://goo.gl/7AJzbL */}
      {type === 'normal' && (
        <svg
          className={classname(theme.size[size])}
          stroke={hex}
          viewBox="0 0 38 38"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" fillRule="evenodd">
            <g transform="translate(1 1)" strokeWidth="2">
              <circle strokeOpacity=".5" cx="18" cy="18" r="18" />
              <path d="M36 18c0-9.94-8.06-18-18-18">
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="0 18 18"
                  to="360 18 18"
                  dur="1s"
                  repeatCount="indefinite"
                />
              </path>
            </g>
          </g>
        </svg>
      )}
      {type === 'puff' && (
        <svg
          className={classname(theme.size[size])}
          stroke={hex}
          viewBox="0 0 44 44"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" fillRule="evenodd" strokeWidth="2">
            <circle cx="22" cy="22" r="1">
              <animate
                attributeName="r"
                begin="0s"
                dur="1.8s"
                values="1; 20"
                calcMode="spline"
                keyTimes="0; 1"
                keySplines="0.165, 0.84, 0.44, 1"
                repeatCount="indefinite"
              />
              <animate
                attributeName="stroke-opacity"
                begin="0s"
                dur="1.8s"
                values="1; 0"
                calcMode="spline"
                keyTimes="0; 1"
                keySplines="0.3, 0.61, 0.355, 1"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="22" cy="22" r="1">
              <animate
                attributeName="r"
                begin="-0.9s"
                dur="1.8s"
                values="1; 20"
                calcMode="spline"
                keyTimes="0; 1"
                keySplines="0.165, 0.84, 0.44, 1"
                repeatCount="indefinite"
              />
              <animate
                attributeName="stroke-opacity"
                begin="-0.9s"
                dur="1.8s"
                values="1; 0"
                calcMode="spline"
                keyTimes="0; 1"
                keySplines="0.3, 0.61, 0.355, 1"
                repeatCount="indefinite"
              />
            </circle>
          </g>
        </svg>
      )}

      {type === 'tail' && (
        <svg
          className={classname(theme.size[size])}
          viewBox="0 0 38 38"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              x1="8.042%"
              y1="0%"
              x2="65.682%"
              y2="23.865%"
              id="a"
            >
              <stop stopColor={hex} stopOpacity="0" offset="0%" />
              <stop stopColor={hex} stopOpacity=".631" offset="63.146%" />
              <stop stopColor={hex} offset="100%" />
            </linearGradient>
          </defs>
          <g fill="none" fillRule="evenodd">
            <g transform="translate(1 1)">
              <path
                d="M36 18c0-9.94-8.06-18-18-18"
                id="Oval-2"
                stroke="url(#a)"
                strokeWidth="2"
              >
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="0 18 18"
                  to="360 18 18"
                  dur="0.9s"
                  repeatCount="indefinite"
                />
              </path>
              <circle fill={hex} cx="36" cy="18" r="1">
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="0 18 18"
                  to="360 18 18"
                  dur="0.9s"
                  repeatCount="indefinite"
                />
              </circle>
            </g>
          </g>
        </svg>
      )}
    </span>
  )
}
