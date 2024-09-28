import TextField from '@mui/material/TextField'
import { CommonProps } from '../../utils/type'

export type Props = CommonProps & {
  label: string
}

const InputDefault = ({ label }: Props) => {
  return (
    <div>
      <TextField id="standard-basic" label={label} variant="standard" fullWidth />
    </div>
  )
}

export default InputDefault
