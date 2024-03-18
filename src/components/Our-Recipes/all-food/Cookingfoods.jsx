
import PropTypes from 'prop-types';
import Cookingfoods from './Cookingfood/Cookingfood';

const Cookingfood = ({ cookingfoods }) => {
    return (
        <div>
            <div>
                <div className=" text-center my-5 px-14">
                    <h5 className=" mb-3 font-semibold text-2xl mt-10">Currently cooking: {cookingfoods.length}</h5>
                    <hr />

                    {cookingfoods.map(cookingfood => (
                        <Cookingfoods key={cookingfood.recipe_id} cookingfood={cookingfood} />
                    ))}
                </div>
            </div>
        </div>
    );
};

Cookingfood.propTypes = {
    cookingfoods: PropTypes.arrayOf(PropTypes.object)
}

export default Cookingfood;
