import { useEffect, useState } from "react"
import Food from "./food"
import PropTypes from 'prop-types';


const Foods = ({ handleCookedFood }) => {
    
    const [foods, setFoods] = useState([])

    useEffect(() => {
        fetch('food.json')
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [])


    return (
        <div className="lg:grid lg:grid-cols-2 gap-8">

            {
                foods.map(food => <Food
                    key={food.recipe_id}
                    food={food}
                    handleCookedFood={handleCookedFood}
                ></Food>)
            }
        </div>
    )

}

Foods.propTypes = {
    handleCookedFood: PropTypes.func
}

export default Foods;