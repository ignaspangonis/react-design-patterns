import { Button, ButtonProps } from './Button'

type Props = {
  component: Button
  text: string
} & Omit<ButtonProps, 'onClick'>

const Alert = ({ component: Component, text, ...commonProps }: Props) => {
  return <Component {...commonProps} onClick={() => alert(text)} />
}

export default Alert
