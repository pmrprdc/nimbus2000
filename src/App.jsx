import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AgePannel from './components/AgePannel'

function App() {
 const [decaAge, setDecaAge] = useState(null)

  return (
    <div className="App">
      <h1>How old are u?</h1>
      <AgePannel decaAge={decaAge} setDecaAge={setDecaAge} />
    </div>
  )
}

export default App
