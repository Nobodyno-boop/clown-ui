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
        info: 'bg-cblue-100 hover:bg-cblue-200 focus:ring-cblue-400 dark:text-white text-cblue-800 border-cblue-500',
        success:
          'bg-cgreen-200 dark:text-white text-cgreen-800 border-cgreen-500',
        warning:
          'bg-cyellow-200 dark:text-white text-cyellow-800 border-cyellow-500',
        error: 'bg-rose-600 dark:text-white text-slate-900 border-rose-900',
      },
    },
    color: {
      info: 'bg-cblue-100 dark:text-white text-cblue-800 border-cblue-500',
      success:
        'bg-cgreen-200 dark:text-white text-cgreen-800 border-cgreen-500',
      warning:
        'bg-cyellow-200 dark:text-white text-cyellow-800 border-cyellow-500',
      error: 'bg-rose-600 dark:text-white text-slate-900 border-rose-900',
    },
  },
  themeToggle: {
    base: 'rounded-lg p-2.5 bg-white dark:bg-cdark focus:outline-none hover:bg-gray-100',
    icon: 'w-5 h-5 dark:text-white',
  },
}
