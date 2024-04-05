import {Routes, Route} from 'react-router'
import MiApi from './components/MiApi'
import NotFound from './views/NotFound'
import Cart from './views/Carrito'
import Pizza from './views/Pizza'
import Home from './views/Home'
import NavBar from './components/NavBar'
import PizzaCard from './components/PizzaCard'
import './App.css'

function App() {
  
  const datosApi = MiApi()

  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element={
          <Home>
          {datosApi.map(pizza => (
            <PizzaCard
              key={pizza.id}
              img={pizza.img}
              name={pizza.name}
              price={pizza.price}
              ingredients={pizza.ingredients}
              showButton={true}
            />
          ))}
          </Home>
        }/>
        <Route path='/pizza' element={<Pizza data={datosApi}/>}/>
        <Route path='/pizza/:nameId' element={<Pizza data={datosApi}/>}/>
        <Route path='/carrito' element={<Cart/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App
