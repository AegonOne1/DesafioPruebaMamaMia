import PizzaCard from "../components/PizzaCard"
import { useParams } from "react-router-dom"
import MiApi from "../components/MiApi"
import "../assets/Pizza.css"

const Pizza = () => {
  const { nameId } = useParams()
  const pizzas = MiApi()

  const selectedPizza = pizzas.find((pizza) => pizza.name === nameId)

  return (
    <div className="PizzaPage">
      {selectedPizza && (
        <PizzaCard
          desc={selectedPizza.desc}
          img={selectedPizza.img}
          name={selectedPizza.name}
          price={selectedPizza.price}
          ingredients={selectedPizza.ingredients}
          showButton={false}
        />
      )}
    </div>
  )
}

export default Pizza
