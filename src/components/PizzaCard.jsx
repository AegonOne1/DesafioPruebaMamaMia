import { useState } from "react";
import { Link } from "react-router-dom";

const PizzaCard = (props) => {
  const { desc, img, name, price, ingredients, showButton, addToCart } = props;
  const [descripcion] = useState(false);

  return (
    <article className="LayoutCard">
      <img src={img} alt={name} />
      <div className="desc">
        <h2>{name}</h2>
        <p>{desc && (descripcion ? desc : desc.slice(0, 1000))}</p>
        <div className="list">
          <p>Ingredientes:</p>
          <ul>
            {ingredients.map((ingredient, index) => (
              <li key={index}> 🍕 {ingredient}</li>
            ))}
          </ul>
        </div>
        <div className="orden">
          <h1>$ {price}</h1>
          <div className="buttons">
            {showButton && (
              <button className="buttonMore">
                <Link to={`/Pizza/${name}`}>Ver Más 👀</Link>
              </button>
            )}
            <button
              className="buttonAdd"
              onClick={() => addToCart({ name, price })}
            >
              Añadir 🛒
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default PizzaCard;
