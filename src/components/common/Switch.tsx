import { FormControlLabel } from '@mui/material'
import Switch from '@mui/material/Switch'
import { CommonProps } from '../../utils/type'

export type Props = CommonProps &
  CommonProps & {
    label: string
  }

const SwitchComponent = (props: Props) => {
  return (
    <div>
      <FormControlLabel control={<Switch />} label={props.label} />
    </div>
  )
}

export default SwitchComponent
