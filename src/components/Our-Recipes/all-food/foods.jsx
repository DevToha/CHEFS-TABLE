import { useEffect, useState } from "react"
import Food from "./food"


const Foods = () => {
    const [foods, setFoods] = useState([])

    useEffect(() => {
        fetch('food.json')
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [])
    return (
        <div className="grid grid-cols-2 gap-8">

            {
                foods.map(food => <Food key={food.recipe_id} food={food}></Food>)
            }
        </div>
    )

}

export default Foods;