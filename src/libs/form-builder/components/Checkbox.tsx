import { FormControlLabel, FormGroup } from '@mui/material'
import Checkbox from '@mui/material/Checkbox'

import { CommonProps } from '../types'

export type Props = CommonProps & {
  label: string
}

const CheckboxComponent = ({ label }: Props) => {
  return (
    <FormGroup>
      <FormControlLabel control={<Checkbox />} label={label} />
    </FormGroup>
  )
}

export default CheckboxComponent
