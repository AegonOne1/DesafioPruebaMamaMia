import { useContext } from "react"
import { AppContext } from "../context/ContextApp"

const PizzaCard = (props) => {

    const c = useContext(AppContext)
    const {desc, img, name, price, ingredients, count} = props

    return(
        <article>
        <img src={img} alt={name}></img>
        <h2> {name} </h2>
        <p>{desc}</p>
        <div>
            <p>Ingredientes:</p>
            <ul>
                {ingredients.map((ingredient, index) => (
                    <li key={index}> 🍕 {ingredient}</li>
                ))}
            </ul>
        </div>
        <h1>{price}</h1>
        <button>Ver Mas 👀</button>
        <button>Añadir 🛒</button>
        </article>
    )
}



export default PizzaCard