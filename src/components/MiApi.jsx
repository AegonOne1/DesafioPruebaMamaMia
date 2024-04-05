import { useState, useEffect } from "react"

const MiApi = () => {
    const [dataPizzas, setDataPizzas] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/pizzas.json')
                if (!response.ok) {
                    throw new Error('Error de conexion!')
                }
                const data = await response.json()
                const adaptedPizzas = data.map(pizza => ({ ...pizza, count: 0 }))
                setDataPizzas(adaptedPizzas)
            } catch (error) {
                console.error('Error de fetching data:', error)
            }
        };

        fetchData()
    }, [])

    return dataPizzas
}

export default MiApi
