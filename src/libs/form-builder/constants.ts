import { ComponentType, Label } from './types'

export const COMPONENT_TYPES = [
  'dropdownInput',
  'checkbox',
  'inputDefault',
  'switch',
] as const satisfies Array<ComponentType>

export const componentTypeToLabel: Record<ComponentType, Label> = {
  checkbox: 'Checkbox',
  dropdownInput: 'Dropdown',
  inputDefault: 'Input',
  switch: 'Switch',
}
