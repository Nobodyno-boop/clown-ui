import colors from 'tailwindcss/colors'
import { DefaultColors } from 'tailwindcss/types/generated/colors'
import config from '../../../tailwind.config'
import { Rules } from '../rules'
/**
 * For mapping DefaultColors
 */
export interface TailwindsColorMapping extends DefaultColors {
  [key: string]: any
}

export const toHex = (s: string, darkness = 500) => {
  if (s.startsWith('#')) return s

  let split = s.split('-')
  let tcolors = [
    'slate',
    'gray',
    'zinc',
    'neutral',
    'stone',
    'red',
    'orange',
    'amber',
    'yellow',
    'lime',
    'green',
    'emerald',
    'teal',
    'cyan',
    'sky',
    'blue',
    'indigo',
    'violet',
    'purple',
    'fuchsia',
    'pink',
    'rose',
  ]
  let tailcolors = colors as TailwindsColorMapping
  let extendsColor = config.theme?.extend?.colors as any
  let haveExtends = typeof extendsColor !== 'undefined'

  if (split.length === 1) {
    let c: any = split[0] as unknown as DefaultColors
    // if only one word
    if (tcolors.includes(split[0])) {
      return tailcolors[c][darkness]
    } else {
      if (haveExtends) {
        return extendsColor[c][100]
      } else {
        return colors['indigo'][800]
      }
    }
  } else if (split.length >= 2) {
    if (split.length > 3) {
      console.error('Cannot catch color: %o \n' + Rules.style.color, s)

      return colors['indigo'][800]
    }

    let start = 0
    let end = 1
    //Ignore the first args when is 3 args
    // Sample: fill-indigo-500
    // 'fill' will be ignore
    if (split.length === 3) {
      start++
      end++
    }

    let color = split[start]
    let darker = isNaN(Number(split[end])) ? darkness : Number(split[end])

    if (tcolors.includes(color)) {
      return tailcolors[color][darker]
    } else {
      if (haveExtends) {
        return extendsColor[color][darker]
      }
    }
  }
  console.error('Cannot catch color: %o \n' + Rules.style.color, s)
  return colors['indigo'][800]
}
