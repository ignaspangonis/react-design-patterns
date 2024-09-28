import { useState } from 'react'
import './App.css'
import DynamicForm from './components/DynamicForm'
import BuilderForm from './components/BuilderForm'
import { InputConfig } from './libs/form-builder/types'

function App() {
  const [inputs, setInputs] = useState<InputConfig[]>([])

  return (
    <main className="main">
      <div className="form-box">
        <h2>Build your form</h2>
        <BuilderForm setNewInputs={setInputs} />
      </div>
      <div className="form-box form-box--left">
        <h2>New Form</h2>
        <DynamicForm currentInputs={inputs} />
      </div>
    </main>
  )
}

export default App
