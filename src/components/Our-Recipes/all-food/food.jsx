
import PropTypes from 'prop-types';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Food = ({ food, handleCookedFood }) => {
    const { recipe_name, recipe_image, short_description, ingredients, clock_image, calories_image, preparing_time, calories } = food;

    const [clicked, setClicked] = useState(false)

    const handleButtonClick = () => {
        if (clicked) {
            toast('Already added');
        } else {
            setClicked(true);
            handleCookedFood(food);
        }
    };

    return (
        <div className=' border-2 px-7 border-[#28282833] lg:w-[400px] h-[725px] rounded-2xl mb-3 lg:pb-0 pb-3'>
            <img className='w-[360px] h-[250px] rounded-xl  my-5' src={recipe_image} alt="" />
            <h1 className=' font-bold text-xl'>{recipe_name}</h1>
            <p className=' my-5'>{short_description}</p>
            <span className=''><hr /></span>
            <h4 className=' mt-3  font-bold text-xl'>Ingredients : {ingredients.length}</h4>
            <div className=' my-5'>
                {ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </div>
            <hr />
            <div className=' flex justify-between my-5'>
                <div className=' flex gap-4 items-center'>
                    <img className='w-[20px]' src={clock_image} alt="" />
                    <p>{preparing_time}</p>
                </div>
                <div className=' flex gap-4 items-center'>
                    <img className='w-[20px]' src={calories_image} alt="" />
                    <p>{calories}</p>
                </div>
            </div>
            <button onClick={handleButtonClick} className="btn rounded-3xl bg-green-400 w-[190px] h-[]">
                {clicked ? "Already Added" : "Want to Cook"}
            </button>
            <ToastContainer />
        </div>
    );
};

Food.propTypes = {
    food: PropTypes.object.isRequired,
    handleCookedFood: PropTypes.func.isRequired
};

export default Food;