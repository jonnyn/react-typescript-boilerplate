import { css, cx } from '@emotion/css'
import rem from './rem'

const styler = (styles: any) => {
  const wrappedStyles: any = {}
  const names = Object.keys(styles)
  const count = names.length
  for (let i = 0; i < count; i += 1) {
    const name = names[i]
    const value = styles[name]
    const remVal = rem(value)
    if (typeof value === 'function') {
      wrappedStyles[name] = (props: any) =>
        css`
          ${value(props)}
        `
    } else {
      wrappedStyles[name] = css`
        ${remVal}
      `
    }
  }
  return wrappedStyles
}

export { cx }

export default styler
