import { Button, ButtonProps } from './Button'

type Props = {
  url: string
  component: Button
} & Pick<ButtonProps, 'aria-label' | 'children'>

const OpenInNewTab = ({ url, component: Component, ...commonProps }: Props) => {
  return <Component {...commonProps} onClick={() => window.open(url, '_blank')} />
}

export default OpenInNewTab
