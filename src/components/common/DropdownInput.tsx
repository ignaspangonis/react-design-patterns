import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { CommonProps } from '@mui/material/OverridableComponent'

export type Props = CommonProps & {
  label: string
  values: string[]
}

const DropdownInput = (props: Props) => {
  return (
    <div>
      <FormControl
        variant="standard"
        sx={{ m: 1, minWidth: 120 }}
        fullWidth
        className={props.className}
      >
        <InputLabel id="demo-simple-select-standard-label">{props.label}</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={10}
          label={props.label}
        >
          {props.values.map(value => (
            <MenuItem key={value} value={value}>
              {value}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  )
}

export default DropdownInput