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

type InputConfigWithId = { id: string; config: InputConfig }

const BuilderForm = ({ setNewInputs }: Props) => {
  const [inputs, setInputs] = useState<InputConfigWithId[]>([])

  const [selectedInput, setSelectedInput] = useState<ComponentType>()
  const [label, setLabel] = useState<string>('')
  // const [classname, setClassname] = useState<string>()

  const handleSelectInput = (event: SelectChangeEvent) => {
    setSelectedInput(event.target.value as ComponentType)
  }

  const handleInputChange = (newInputs: InputConfigWithId[]) => {
    setInputs(newInputs)
    setNewInputs(newInputs.map(input => input.config))
  }

  const handleAdd = () => {
    if (!selectedInput) return

    const id = String(Number(inputs[inputs.length - 1]?.id || 0) + 1)
    const newInput = {
      id,
      config: createProps(selectedInput, label),
    }

    const newInputs = [...inputs, newInput]
    handleInputChange(newInputs)
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
            value={selectedInput}
            label="Select an input"
            onChange={handleSelectInput}
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
        Add
      </Button>
      <InputList inputs={inputs} setInputs={handleInputChange} />
    </>
  )
}

export default BuilderForm
