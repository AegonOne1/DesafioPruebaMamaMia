import {Routes, Route} from 'react-router'
import { NavLink } from 'react-router-dom'
import MiApi from './components/MiApi'
import NotFound from './views/NotFound'
import Cart from './views/Carrito'
import Pizza from './views/Pizza'
import Home from './views/Home'
import './App.css'

function App() {
  
  const datosApi = MiApi()

  return (
    <>
      <Routes>
        <Route path='/' element={
          <Home>
            <Pizza from='home' data={datosApi} />
            <NavLink to='/pizza'>Ir al catalogo Completo</NavLink>
          </Home>
        }/>
        <Route path='/pizza' element={<Pizza data={datosApi}/>}/>
        <Route path='/pizza/:selectedId' element={<Pizza data={datosApi}/>}/>
        <Route path='/carrito' element={<Cart/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App
