import { useState, useEffect } from "react"

const MiApi = () => {
    const [dataPizzas, setDataPizzas] = useState([])

    const getPizza = async () => {
        const data = await fetch('/pizzas.json')
        // console.log(data)
        const res = await data.json()
        const adaptedPizzas = []
        res.forEach((pizza => {
            adaptedPizzas.push({...pizza, count: 0})
        }))
        setDataPizzas(adaptedPizzas)
        console.log(adaptedPizzas)
    }
    
    useEffect(() =>{
        getPizza()
    }, [])
    
    return dataPizzas
}

export default MiApi