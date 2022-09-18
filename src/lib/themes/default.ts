import { ClownuiTheme } from '../components/Clownui/ClownuiTheme'

export const DefaultTheme: ClownuiTheme = {
  alert: {
    base: 'flex flex-col gap-1 p-4 text-sm',
    rounded: 'rounded-lg',
    icon: 'w-5 h-5 inline flex-shrink-0 mr-3',
    border: {
      top: 'border-t-4',
      right: 'border-r-4',
      bottom: 'border-b-4',
      left: 'border-l-4',
    },
    closeButton: {
      base: '-mx-1.5 -my-1.5 ml-auto inline-flex h-8 w-8 rounded-lg p-1.5 focus:ring-5',
      color: {
        info: 'bg-cblue-50 hover:bg-cblue-50 focus:ring-cblue-400 text-slate-900',
        success:
          'bg-cgreen-200 hover:bg-cgreen-300 text-slate-900  border-cgreen-500',
        warning:
          'bg-cyellow-100 hover:bg-cyellow-200 text-slate-900 border-cyellow-500',
        error: 'bg-rose-400 hover:bg-rose-500 text-slate-900  border-rose-900',
      },
    },
    color: {
      info: 'bg-cblue-50 text-neutral-900 border-cblue-500',
      success: 'bg-cgreen-200 text-neutral-800 border-cgreen-500',
      warning: 'bg-cyellow-100 text-neutral-800 border-cyellow-500',
      error: 'bg-rose-400  text-neutral-800 border-rose-900',
    },
  },
  themeToggle: {
    base: 'rounded-lg p-2.5 bg-white dark:bg-cdark focus:outline-none hover:bg-gray-100',
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
