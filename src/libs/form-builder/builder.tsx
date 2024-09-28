import { ReactNode } from 'react'

import Checkbox, { Props as CheckboxProps } from '../../components/common/Checkbox'
import DropdownInput, { Props as DropdownInputProps } from '../../components/common/DropdownInput'
import InputDefault, { Props as InputDefaultProps } from '../../components/common/InputDefault'
import Switch, { Props as SwitchProps } from '../../components/common/Switch'

export class FormBuilder {
  private components: ReactNode[]

  constructor() {
    this.components = []
  }

  inputDefault(props: InputDefaultProps): FormBuilder {
    this.components.push(<InputDefault {...props} />)
    return this
  }

  dropdownInput(props: DropdownInputProps): FormBuilder {
    this.components.push(<DropdownInput {...props} />)
    return this
  }

  switch(props: SwitchProps): FormBuilder {
    this.components.push(<Switch {...props} />)
    return this
  }

  checkbox(props: CheckboxProps): FormBuilder {
    this.components.push(<Checkbox {...props} />)
    return this
  }

  build(): ReactNode[] {
    return this.components
  }
}
