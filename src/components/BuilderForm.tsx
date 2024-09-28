import Button from '@mui/material/Button'
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
  TextField,
} from '@mui/material'
import { useState } from 'react'

import InputList from './InputList'
import { ComponentType, InputConfig } from '../libs/form-builder/types'
import { componentTypeToLabel } from '../utils/component-type'
import { COMPONENT_TYPES } from '../libs/form-builder/constants'

const createProps = (type: ComponentType, label: string): InputConfig => {
  switch (type) {
    case 'checkbox':
      return {
        type: 'checkbox',
        props: { label },
      }
    case 'dropdownInput':
      return {
        type: 'dropdownInput',
        props: {
          label,
          values: ['example 1', 'example 2', 'example 3'],
        },
      }
    case 'inputDefault':
      return {
        type: 'inputDefault',
        props: {
          label,
        },
      }
    case 'switch':
      return {
        type: 'switch',
        props: {
          label,
        },
      }
    default:
      return {
        type: 'inputDefault',
        props: { label: '' },
      }
  }
}

type Props = {
  setNewInputs: (inputs: InputConfig[]) => void
}

const BuilderForm = ({ setNewInputs }: Props) => {
  const [inputs, setInputs] = useState<{ id: string; config: InputConfig }[]>([])

  const [input, setInput] = useState<ComponentType>()
  const [label, setLabel] = useState<string>('')
  // const [classname, setClassname] = useState<string>()

  const handleChange = (event: SelectChangeEvent) => {
    setInput(event.target.value as ComponentType)
  }

  const handleAdd = () => {
    if (!input) return

    const id = String(Number(inputs[inputs.length - 1]?.id || 0) + 1)
    const newInput = {
      id,
      config: createProps(input, label),
    }

    setInputs([...inputs, newInput])
  }

  const submitInputs = () => {
    setNewInputs(inputs.map(input => input.config))
  }

  return (
    <>
      <div className="form-group">
        <TextField
          id="standard-basic"
          label="Enter the component label"
          variant="standard"
          fullWidth
          onChange={event => setLabel(event.target.value)}
        />
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }} fullWidth>
          <InputLabel id="demo-simple-select-standard-label">Select an input</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={input}
            label="Select an input"
            onChange={handleChange}
          >
            {COMPONENT_TYPES.map(type => (
              <MenuItem key={type} value={type}>
                {componentTypeToLabel[type]}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        {/* <TextField
          id="standard-basic"
          label="Enter the classname"
          variant="standard"
          fullWidth
          onChange={event => setClassname(event.target.value)}
        /> */}
      </div>
      <Button variant="contained" onClick={handleAdd} fullWidth>
        Add +
      </Button>
      <InputList inputs={inputs} setInputs={setInputs} />
      <Button variant="contained" onClick={submitInputs} fullWidth>
        Submit
      </Button>
    </>
  )
}

export default BuilderForm
