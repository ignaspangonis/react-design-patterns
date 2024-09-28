import { ComponentType, Label } from '../libs/form-builder/types'

export const componentTypeToLabel: Record<ComponentType, Label> = {
  checkbox: 'Checkbox',
  dropdownInput: 'Select Input',
  inputDefault: 'Input',
  switch: 'Switch',
}
