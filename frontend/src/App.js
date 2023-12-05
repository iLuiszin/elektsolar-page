import { BrowserRouter as Router } from 'react-router-dom'
import { DataProvider } from './GlobalState'
import Home from './Components/Home'
import About from './Components/About'
import Work from './Components/Work'
import './App.css'

function App() {
  return (
    <DataProvider>
      <Router>
        <div className='App'>
          <Home />
          <About />
          <Work />
        </div>
      </Router>
    </DataProvider>
  )
}

export default App
