import { NavLink } from "react-router-dom"

const NavBar = () => {
    return(
        <nav>
            <NavLink className={({isActive}) => isActive ? 'active' : '' } to="/" >🍕 Pizzeria Mamma Mia!</NavLink>
            <NavLink className={({isActive}) => isActive ? 'active' : '' } to="/carrito" >🛒 agregar precio</NavLink>
        </nav>
    )
}

export default NavBar