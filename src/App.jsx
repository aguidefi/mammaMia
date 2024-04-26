import './App.css'
import { Navigate } from './components/Navigate'
import { PizzaProvider } from './context/PizzaProvider'
import { Details } from './pages/Details'
import { Home } from './pages/Home'
import { Routes, Route} from 'react-router-dom'

function App() {

  return (
    <>
      <PizzaProvider>
        <Navigate/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/pizza/:id' element = {<Details/>} />
        </Routes>
      </PizzaProvider>
    </>
  )
}

export default App
