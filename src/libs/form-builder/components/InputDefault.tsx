import TextField from '@mui/material/TextField'
import { CommonProps } from '../types'

export type Props = CommonProps & {
  label: string
}

const InputDefault = ({ label }: Props) => {
  return <TextField id="standard-basic" label={label} variant="standard" fullWidth />
}

export default InputDefault
