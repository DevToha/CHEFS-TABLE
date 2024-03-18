
import PropTypes from 'prop-types';

const Cookingfoods = ({ cookingfood }) => {

    const { recipe_name, preparing_time, calories, recipe_id } = cookingfood;

    return (
        <div>
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

                            </tr>


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

Cookingfoods.propTypes = {
    cookingfood: PropTypes.object.isRequired,
};

export default Cookingfoods;
