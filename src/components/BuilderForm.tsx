import { FormControl, InputLabel, Select, MenuItem, TextField } from '@mui/material'
import { useRef, useState } from 'react'

import ManageInputs from './ManageInputs'
import { ComponentType, InputConfig } from '../libs/form-builder/types'
import { COMPONENT_TYPES, componentTypeToLabel } from '../libs/form-builder/constants'
import { createConfig } from '../libs/form-builder/utils'
import { RoundButton } from './Button'
import { generateUUID } from '../libs/utils/uuid'

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
    if (!label) return

    const key = generateUUID()
    const newInput = createConfig({ key, type: selectedType, label })

    onChange([...inputs, newInput])
    setLabel('')
  }

  const handleRemove = (key: string) => {
    const newInputs = inputs.filter(input => input.props.key !== key)
    onChange(newInputs)
  }

  return (
    <form className="form" ref={formRef}>
      <div className="form-group">
        <TextField
          id="standard-basic"
          label="Enter the component label"
          variant="standard"
          fullWidth
          value={label}
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

      <RoundButton onClick={handleAdd} disabled={!label}>
        Add
      </RoundButton>

      <ManageInputs inputs={inputs} setInputs={onChange} onRemove={handleRemove} />
    </form>
  )
}

export default BuilderForm
