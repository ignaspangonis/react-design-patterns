import { useState } from 'react'
import './App.css'
import BuilderForm from './components/BuilderForm'
import { InputConfig } from './libs/form-builder/types'
import { FormBuilder } from './libs/form-builder/builder'
import { MuiButton, RoundButton } from './components/Button'
import OpenInNewTab from './components/OpenInNewTab'
import Alert from './components/Alert'

function App() {
  const [inputs, setInputs] = useState<InputConfig[]>([])

  const formInputs = inputs
    .reduce(
      (formBuilder, config) =>
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        formBuilder[config.type](config.props as any),
      new FormBuilder(),
    )
    .build()

  return (
    <>
      <header className="header">
        <div className="header-content">
          <div className="header-content__heading">
            <h1>Form Builder</h1>
            <p>Exploration of design patterns in React</p>
          </div>
          <OpenInNewTab component={MuiButton} url="https://refactoring.guru/design-patterns">
            Learn design patterns
          </OpenInNewTab>
          <Alert component={RoundButton} text="This is an alert">
            Random alert
          </Alert>
        </div>
      </header>
      <main className="main">
        <div className="form-container">
          <h2>Build your form</h2>
          <BuilderForm onChange={setInputs} inputs={inputs} />
        </div>
        <div className="form-container">
          <h2>Output:</h2>
          <form className="form-group">{formInputs}</form>
        </div>
      </main>
    </>
  )
}

export default App
