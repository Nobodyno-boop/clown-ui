export const classname = (...args: any): string => {
  let classes = []
  for (let u = 0; u < args.length; u++) {
    const arg = args[u]
    if (!arg) continue
    let argType = typeof arg
    switch (argType) {
      case 'string':
      case 'number':
        classes.push(arg)
        break
      case 'object':
        console.log(arg)
        break

      default:
        console.log(arg)
        break
    }
  }

  return classes.join(' ')
}
