const Home = (props) => {
    return(
        <div>
            <header>
                <h1>Pizzeria Mamma Mia!</h1>
                <p>Tenemos las mejores pizzas que podras encontrar</p>
            </header>
        {props.children}
        </div>
    )   
}


export default Home