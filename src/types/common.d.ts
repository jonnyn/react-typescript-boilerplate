interface ILabelValue<T = string | number | readonly string[]> {
  label: string
  value: T
}

interface ISelectFilter<TOption> {
  placeholder?: string
  options: TSelectFilterOption<TOption>[]
}

type TSelectFilterOption<T = string | number | ILabelValue> = T

declare module 'react-uuid'
declare module 'react-helmet'

declare module '*.jpeg' {
  const value: any
  export = value
}

declare module '@brainhubeu/react-carousel'
