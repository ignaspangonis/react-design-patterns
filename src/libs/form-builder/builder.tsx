import { ReactNode } from 'react'

import Checkbox, { Props as CheckboxProps } from './components/Checkbox'
import DropdownInput, { Props as DropdownInputProps } from './components/DropdownInput'
import InputDefault, { Props as InputDefaultProps } from './components/InputDefault'
import Switch, { Props as SwitchProps } from './components/Switch'

export class FormBuilder {
  private components: ReactNode[]

  constructor() {
    this.components = []
  }

  inputDefault(props: InputDefaultProps): FormBuilder {
    this.components.push(<InputDefault {...props} key={props.key} />)
    return this
  }

  dropdownInput(props: DropdownInputProps): FormBuilder {
    this.components.push(<DropdownInput {...props} key={props.key} />)
    return this
  }

  switch(props: SwitchProps): FormBuilder {
    this.components.push(<Switch {...props} key={props.key} />)
    return this
  }

  checkbox(props: CheckboxProps): FormBuilder {
    this.components.push(<Checkbox {...props} key={props.key} />)
    return this
  }

  build(): ReactNode[] {
    return this.components
  }
}
