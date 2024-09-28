import { Props as CheckboxProps } from '../../components/common/Checkbox'
import { Props as DropdownInputProps } from '../../components/common/DropdownInput'
import { Props as InputDefaultProps } from '../../components/common/InputDefault'
import { Props as SwitchProps } from '../../components/common/Switch'

export type ComponentType = 'dropdownInput' | 'checkbox' | 'inputDefault' | 'switch'

export type InputConfig =
  | { id: string; className?: string } & (
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
    )

export type InputConfigs = InputConfig[]

export type Label = 'Checkbox' | 'Select Input' | 'Input' | 'Switch'
