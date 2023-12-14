import { BrowserRouter as Router } from 'react-router-dom'
import { DataProvider } from './GlobalState'

import './App.css'
import Navbar from './Components/HomeComponents/Navbar'
import Pages from './pages/Pages'
import ResponsiveNavbar from './Components/HomeComponents/ResponsiveNavbar'

function App() {
  return (
    <DataProvider>
      <Router>
        <div className='App'>
          <Navbar />
          <div className='eight-five-vw'>
            <Pages />
          </div>
        </div>
      </Router>
    </DataProvider>
  )
}

export default App
