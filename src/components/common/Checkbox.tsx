import { FormControlLabel, FormGroup } from '@mui/material'
import Checkbox from '@mui/material/Checkbox'
import { CommonProps } from '../../utils/type'

export type Props = CommonProps & {
  label: string
}

const CheckboxComponent = ({ label }: Props) => {
  return (
    <div>
      <FormGroup>
        <FormControlLabel control={<Checkbox />} label={label} />
      </FormGroup>
    </div>
  )
}

export default CheckboxComponent
