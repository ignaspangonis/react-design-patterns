import { FormControlLabel } from '@mui/material'
import Switch from '@mui/material/Switch'
import { CommonProps } from '../types'

export type Props = CommonProps &
  CommonProps & {
    label: string
  }

const SwitchComponent = (props: Props) => {
  return <FormControlLabel control={<Switch />} label={props.label} />
}

export default SwitchComponent
