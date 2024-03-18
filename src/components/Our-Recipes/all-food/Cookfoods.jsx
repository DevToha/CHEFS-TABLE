import PropTypes from 'prop-types';
import Cookfood from './Cookfood/Cookfood';


const Cooked = ({ cookedFood,handleCookingFood }) => {


    return (
        <div>


            <div>
                <div className=" text-center my-5 px-14">
                    <h5 className=" mb-3 font-semibold text-2xl">Want to cook: {cookedFood.length}</h5>
                    <hr />
                </div>
                

                {
                    cookedFood.map(cookfood => <Cookfood key={cookfood.recipe_id} handleCookingFood={handleCookingFood} cookfood={cookfood}></Cookfood>)
                }

            </div>


          
        </div>
    )
}

Cooked.propTypes = {
    cookedFood: PropTypes.array,
    handleCookingFood : PropTypes.func
}

export default Cooked