import { useState } from "react"
import { Link } from "react-router-dom"

const PizzaCard = (props) => {
    const { desc, img, name, price, ingredients, showButton } = props
    const [descripcion] = useState(false)

    return (
        <article>
            <img src={img} alt={name} />
            <h2>{name}</h2>
            <p>
                {desc && (descripcion ? desc : desc.slice(0, 1000))}
            </p>
            <div>
                <p>Ingredientes:</p>
                <ul>
                    {ingredients.map((ingredient, index) => (
                        <li key={index}> 🍕 {ingredient}</li>
                    ))}
                </ul>
            </div>
            <h1>$ {price}</h1>
            {showButton && (
                <button>
                    <Link to={`/Pizza/${name}`}>
                        Ver Más 👀
                    </Link>
                </button>
            )}
            <button>Añadir 🛒</button>
        </article>
    )
}

export default PizzaCard

