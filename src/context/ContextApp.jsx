import { createContext, useState } from 'react';

export const AppContext = createContext()


const AppProvider = ({ children }) => {
  const [data, setData] = useState([])
  const [carrito, setCarrito] =useState([])

  const addToCart = (pizza) => {
    setCarrito([...carrito,pizza])
  }

  
  const updateData = newData => {
    setData(newData)
  }

  return (
    <AppContext.Provider value={{ data, updateData, carrito, addToCart }}>
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider 
