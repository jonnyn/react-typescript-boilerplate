import './Button.scss'

type Props = {
  label?: string
  className?: string
  style?: object
  children?: JSX.Element
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  disabled?: boolean
}

const Button = (props: Props) => {
  const { label, className, style, onClick, children, disabled } = props
  return (
    <button
      type="button"
      data-testid="button"
      style={style}
      onClick={onClick}
      className={className || 'btn-icon'}
      disabled={disabled}
    >
      {label}
      {children}
    </button>
  )
}

export default Button
