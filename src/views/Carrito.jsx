import { useState } from "react"

const Carrito = () => {
  const [carrito, setCarrito] = useState([])

  const agregarAlCarrito = (item) => {
    const existeEnCarrito = carrito.find((elemento) => elemento.name === item.name)

    if (existeEnCarrito) {
      const nuevoCarrito = carrito.map((elemento) =>
        elemento.name === item.name ? { ...elemento, cantidad: elemento.cantidad + 1 } : elemento
      )
      setCarrito(nuevoCarrito)
    } else {
      setCarrito([...carrito, { ...item, cantidad: 1 }])
    }
  }

  return (
    <div>
      <h2>Carrito de Compras</h2>
      <ul>
        {carrito.map((item, index) => (
          <li key={index}>
            {item.name} - Cantidad: {item.cantidad}
          </li>
        ))}
      </ul>
      <p>Total: ${
        carrito.reduce((total, item) => total + item.price * item.cantidad, 0)
      }</p>
    </div>
  )
}

export default Carrito;