import { ClownuiTheme } from '../components/Clownui/ClownuiTheme'

export const DefaultTheme: ClownuiTheme = {
  alert: {
    base: 'flex flex-col gap-1 p-4 text-sm font-semibold h-full',
    rounded: 'rounded-lg',
    icon: {
      base: 'inline flex-shrink-0 mr-3',
      iconSize: {
        sm: 'w-5 h-5',
        md: 'w-7 h-7',
        lg: 'w-10 h-10',
      },
    },
    border: {
      top: 'border-t-[6px]',
      right: 'border-r-[6px]',
      bottom: 'border-b-[6px]',
      left: 'border-l-[6px]',
    },
    closeButton: {
      base: 'mx-2 -my-1.5 ml-auto inline-flex h-8 w-8 rounded-lg p-1.5 focus:ring-5',
      color: {
        info: 'hover:bg-blue-500 dark:hover:bg-blue-700 focus:ring-blue-500 text-slate-900 dark:text-white',
        success:
          'hover:bg-emerald-500 dark:hover:bg-emerald-700 text-slate-900 dark:text-white border-emerald-500',
        warning:
          'hover:bg-yellow-400 dark:hover:bg-yellow-600 text-slate-900 dark:text-white border-yellow-500',
        error:
          'hover:bg-rose-500 dark:hover:bg-rose-700 text-slate-900 dark:text-white border-rose-900',
      },
    },
    color: {
      info: 'bg-blue-400 dark:bg-blue-600 text-neutral-800 dark:text-white border-blue-500 dark:border-blue-700',
      success:
        'bg-emerald-400 dark:bg-emerald-600 text-neutral-800 dark:text-white border-emerald-500 dark:border-emerald-700',
      warning:
        'bg-amber-300 dark:bg-amber-500 text-neutral-800 dark:text-white border-yellow-500 dark:border-yellow-700',
      error:
        'bg-rose-400 dark:bg-rose-600 text-neutral-800 dark:text-white border-rose-500 dark:border-rose-700',
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
}
