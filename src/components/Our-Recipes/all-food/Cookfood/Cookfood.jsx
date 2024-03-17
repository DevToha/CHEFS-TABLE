import PropTypes from 'prop-types';

const Cookfood = ({ cookfood, handleCookingFood }) => {

    const { recipe_name, preparing_time, calories, recipe_id } = cookfood
    return (
        <div>

            {/* <div>
                <h1>{recipe_name}</h1>
                <p>{short_description}</p>
            </div> */}

            <div>
                <div className="overflow-x-auto">
                    <table className="table">

                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Time</th>
                                <th>Calories</th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr className="hover">
                                <th className=' font-bold '>{recipe_id}</th>
                                <td className=' font-semibold'>{recipe_name}</td>
                                <td>{preparing_time}</td>
                                <td>{calories}</td>
                                <button onClick={() => handleCookingFood(cookfood)} className="btn btn-outline mt-2 rounded-3xl bg-green-400 w-[105px] border-white">Preparing</button>
                            </tr>


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

Cookfood.propTypes = {
    cookfood: PropTypes.object,
    handleCookingFood: PropTypes.func.isRequired
}

export default Cookfood;