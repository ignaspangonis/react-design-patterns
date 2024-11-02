import { useState } from 'react'
import BuilderForm from './BuilderForm'
import { InputConfig } from '../libs/form-builder/types'
import { FormBuilder } from '../libs/form-builder/builder'

const Forms = () => {
  const [inputs, setInputs] = useState<InputConfig[]>([])

  const formInputs = inputs
    .reduce(
      (formBuilder, input) =>
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        formBuilder[input.type](input.props as any),
      new FormBuilder(),
    )
    .build()

  return (
    <>
      <div className="form-container">
        <h2>Build your form</h2>
        <BuilderForm onChange={setInputs} inputs={inputs} />
      </div>
      <div className="form-container">
        <h2>Output:</h2>
        <form className="form-group">{formInputs}</form>
      </div>
    </>
  )
}

export default Forms
