const Home = (props) => {
  return (
    <div>
      <header className="LayoutHeader">
        <h1>Pizzeria Mamma Mia!</h1>
        <p>Tenemos las mejores pizzas que podras encontrar</p>
      </header>
      {props.children}
    </div>
  )
}

export default Home