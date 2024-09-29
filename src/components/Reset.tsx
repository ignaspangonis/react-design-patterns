import { Button, ButtonProps } from './Button'

type Props = {
  component: Button
  formRef: React.RefObject<HTMLFormElement>
} & Omit<ButtonProps, 'onClick'>

const Reset = ({ component: Component, formRef, ...commonProps }: Props) => {
  return <Component {...commonProps} onClick={() => formRef.current?.reset()} />
}

export default Reset
