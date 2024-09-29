import { useState } from 'react'
import './App.css'
import DynamicForm from './components/DynamicForm'
import BuilderForm from './components/BuilderForm'
import { InputConfig } from './libs/form-builder/types'
import { FormBuilder } from './libs/form-builder/builder'

function App() {
  const [inputs, setInputs] = useState<InputConfig[]>([])

  const formInputs = inputs
    .reduce(
      (formBuilder, value) =>
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        formBuilder[value.type](value.props as any),
      new FormBuilder(),
    )
    .build()

  return (
    <main className="main">
      <div className="form-container">
        <h2>Build your form</h2>
        <BuilderForm setNewInputs={setInputs} />
      </div>
      <div className="form-container">
        <h2>New Form</h2>
        <DynamicForm inputs={formInputs} />
      </div>
    </main>
  )
}

export default App
