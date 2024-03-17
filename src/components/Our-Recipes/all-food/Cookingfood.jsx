// import React from 'react';

const Cookingfood = () => {
    return (
        <div>
            <div>
                <div className=" text-center my-5 px-14">
                    <h5 className=" mb-3 font-semibold text-2xl mt-10">Currently cooking: <span id="selected-seat">00</span></h5>
                    <hr />
                </div>

                {/* table  */}
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
                                    <th>1</th>
                                    <td>Spicy Chicken Stir Fry</td>
                                    <td>30 minutes</td>
                                    <td>320 calories</td>

                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cookingfood;