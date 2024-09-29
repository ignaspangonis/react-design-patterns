import { FormControl, InputLabel, Select, MenuItem, TextField } from '@mui/material'
import { useRef, useState } from 'react'

import ReorderList from './ReorderList'
import { ComponentType, InputConfig } from '../libs/form-builder/types'
import { COMPONENT_TYPES, componentTypeToLabel } from '../libs/form-builder/constants'
import { createConfig } from '../libs/form-builder/utils'
import { RoundButton } from './Button'

type Props = {
  inputs: InputConfig[]
  onChange: (inputs: InputConfig[]) => void
}

const BuilderForm = ({ inputs, onChange }: Props) => {
  const formRef = useRef<HTMLFormElement>(null)
  const [selectedType, setSelectedType] = useState<ComponentType>(COMPONENT_TYPES[0])
  const [label, setLabel] = useState<string>('')

  const handleAdd = () => {
    if (!selectedType) return

    const key = String(Number(inputs[inputs.length - 1]?.props.key || 0) + 1)
    const newInput = createConfig({ key, type: selectedType, label })

    onChange([...inputs, newInput])
  }

  return (
    <form className="form" ref={formRef}>
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
            value={selectedType}
            label="Select an input field"
            onChange={event => setSelectedType(event.target.value as ComponentType)}
          >
            {COMPONENT_TYPES.map(type => (
              <MenuItem key={type} value={type}>
                {componentTypeToLabel[type]}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      <RoundButton onClick={handleAdd}>Add</RoundButton>

      <ReorderList inputs={inputs} setInputs={onChange} />
    </form>
  )
}

export default BuilderForm
