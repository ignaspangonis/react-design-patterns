import { ComponentType } from './types'

export const COMPONENT_TYPES = [
  'dropdownInput',
  'checkbox',
  'inputDefault',
  'switch',
] as const satisfies Array<ComponentType>
