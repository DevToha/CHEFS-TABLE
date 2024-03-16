import PropTypes from 'prop-types';
// import clock from './'

const Food = ({ food }) => {

    const { recipe_name, recipe_image, short_description, ingredients, clock_image, calories_image, preparing_time, calories } = food;

    // const buttonClickFunction = `handleButtonClick${index + 1}()`;

    const buttonClicked = document.getElementById('buttonClicked')
    console.log(buttonClicked,'clicked')


    return (
        <div className=' border-2 px-7 border-[#28282833] w-[400px] h-[715px] mb-5 rounded-2xl ]'>
            <img className='w-[360px] h-[250px] rounded-xl  my-5' src={recipe_image} alt="" />
            <h1 className=' text-base'>{recipe_name}</h1>
            <p className=' my-5'>{short_description}</p>
            <span className=''><hr /></span>
            <h4 className=' mt-3'>Ingredients : {ingredients.length}</h4>
            <div className=' my-5'>
                <li>{ingredients[0]}</li>
                <li>{ingredients[1]}</li>
                <li>{ingredients[2]}</li>
                <li>{ingredients[3]}</li>
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

            <button onClick={buttonClicked} className="btn rounded-3xl bg-green-400 w-[190px] h-[]">Want to Cook</button>
        </div>
    );
};

Food.propTypes = {
    food: PropTypes.object.isRequired
}

export default Food;