import { ClownuiTheme } from '../components/Clownui/ClownuiTheme'

export const DefaultTheme: ClownuiTheme = {
  alert: {
    base: 'bg-white dark:bg-slate-900 text-gray-400 flex flex-col gap-1 p-4 text-sm h-full',
    title: 'font-semibold text-base',
    rounded: 'rounded-lg',
    shadow: 'drop-shadow-md',
    icon: {
      base: 'inline flex-shrink-0 mr-3',
      iconSize: {
        sm: 'w-5 h-5',
        md: 'w-7 h-7',
        lg: 'w-10 h-10',
      },
    },
    border: {
      border: {
        top: 'border-t-[6px]',
        right: 'border-r-[6px]',
        bottom: 'border-b-[6px]',
        left: 'border-l-[6px]',
      },
      color: {
        info: 'border-blue-500 dark:border-blue-700',
        success: 'border-emerald-500 dark:border-emerald-700',
        error: 'border-rose-500 dark:border-rose-700',
        warning: 'border-amber-300 dark:border-amber-300',
      },
    },
    closeButton:
      'mx-2 -my-1.5 ml-auto inline-flex h-8 w-8 rounded-lg p-1.5 focus:ring-5 dark:bg-slate-900 text-gray-400 hover:text-gray-500',
    color: {
      info: 'text-blue-400 dark:text-blue-600',
      success: 'text-emerald-400 dark:text-emerald-600',
      warning: 'text-amber-400 dark:text-amber-500',
      error: 'text-rose-400 dark:text-rose-600',
    },
  },
  themeToggle: {
    base: 'rounded-lg p-2.5 bg-white dark:bg-slate-900 focus:outline-none hover:bg-gray-100',
    icon: 'w-5 h-5 dark:text-white',
  },
  spinner: {
    base: 'inline',
    size: {
      xs: 'w-3 h-3',
      sm: 'w-4 h-4',
      md: 'w-6 h-6',
      lg: 'w-8 h-8',
      xl: 'w-10 h-10',
    },
  },
  image: {
    base: '',
    rounded: 'rounded-lg',
  },
  tag: {
    base: 'inline-flex items-center gap-1 w-max p-0.5 px-2 text-neutral',
    rounded: 'rounded',
    shadow: 'drop-shadow',
    close:
      'cursor-pointer text-neutral hover:text-gray-600 hover:transition-all',
  },
}
