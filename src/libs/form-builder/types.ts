import { Props as CheckboxProps } from './components/Checkbox'
import { Props as DropdownInputProps } from './components/DropdownInput'
import { Props as InputDefaultProps } from './components/InputDefault'
import { Props as SwitchProps } from './components/Switch'

export type ComponentType = 'dropdownInput' | 'checkbox' | 'inputDefault' | 'switch'

export type InputConfig =
  | {
      type: 'checkbox'
      props: CheckboxProps
    }
  | {
      type: 'dropdownInput'
      props: DropdownInputProps
    }
  | {
      type: 'inputDefault'
      props: InputDefaultProps
    }
  | {
      type: 'switch'
      props: SwitchProps
    }

export type Label = 'Checkbox' | 'Dropdown' | 'Input' | 'Switch'

export type CommonProps = {
  key: string
}
