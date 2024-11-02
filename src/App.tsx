import './App.css'
import { MuiButton, RoundButton } from './components/Button'
import OpenInNewTab from './components/OpenInNewTab'
import Alert from './components/Alert'
import Forms from './components/Forms'

function App() {
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
        <Forms />
      </main>
    </>
  )
}

export default App
