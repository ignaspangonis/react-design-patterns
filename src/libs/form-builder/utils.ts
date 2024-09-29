import { ComponentType, InputConfig } from './types'

type Props = {
  key: string
  type: ComponentType
  label: string
}

export const createConfig = ({ key, type, label }: Props): InputConfig => {
  switch (type) {
    case 'checkbox':
      return {
        type,
        props: { label, key },
      }
    case 'dropdownInput':
      return {
        type,
        props: {
          key,
          label,
          values: ['example 1', 'example 2', 'example 3'],
        },
      }
    case 'inputDefault':
      return {
        type,
        props: {
          key,
          label,
        },
      }
    case 'switch':
      return {
        type,
        props: {
          key,
          label,
        },
      }
    default:
      throw new Error('Unspecified input selected')
  }
}
