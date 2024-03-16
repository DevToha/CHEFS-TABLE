export default function Cooked() {
    return (
        <div className=" border-2 border-[#28282833] w-[525px] pr-2 h-[950px] rounded-2xl ">

            {/* Want to cook */}
            <div>
                <div className=" text-center my-5 px-14">
                    <h5 className=" mb-3 font-semibold text-2xl">Want to cook: 00</h5>
                    <hr />
                </div>

                {/* table  */}
                <div>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Time</th>
                                    <th>Calories</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                <tr className="hover">
                                    <th>1</th>
                                    <td>Spicy Chicken Stir Fry</td>
                                    <td>30 minutes</td>
                                    <td>320 calories</td>
                                    <button className="btn btn-outline mt-2 rounded-3xl bg-green-400 w-[105px] border-white">Preparing</button>
                                </tr>
                                {/* row 2 */}
                                <tr className="hover">
                                    <th>2</th>
                                    <td>Creamy Garlic Shrimp Pasta</td>
                                    <td>25 minutes</td>
                                    <td>420 calories</td>
                                    <button className="btn btn-outline mt-2 rounded-3xl bg-green-400 w-[105px] border-white">Preparing</button>
                                </tr>
                                {/* row 3 */}
                                <tr className="hover">
                                    <th>3</th>
                                    <td>Mushroom Risotto
                                    </td>
                                    <td>40 minutes</td>
                                    <td>380 calories</td>
                                    <button className="btn btn-outline mt-2 rounded-3xl bg-green-400 w-[105px] border-white">Preparing</button>
                                </tr>
                                {/* row 4 */}
                                <tr className="hover">
                                    <th>4</th>
                                    <td>Caprese Salad
                                    </td>
                                    <td>15 minutes</td>
                                    <td>180 calories</td>
                                    <button className="btn btn-outline mt-2 rounded-3xl bg-green-400 w-[105px] border-white">Preparing</button>
                                </tr>
                                {/* row 5 */}
                                <tr className="hover">
                                    <th>5</th>
                                    <td>Vegetable Stir Fry
                                    </td>
                                    <td>20 minutes</td>
                                    <td>250 calories</td>
                                    <button className="btn btn-outline mt-2 rounded-3xl bg-green-400 w-[105px] border-white">Preparing</button>
                                </tr>
                                {/* row 6 */}
                                <tr className="hover">
                                    <th>6</th>
                                    <td>Chocolate Banana Smoothie
                                    </td>
                                    <td>10 minutes</td>
                                    <td>200 calories</td>
                                    <button className="btn btn-outline mt-2 rounded-3xl bg-green-400 w-[105px] border-white">Preparing</button>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Currently cooking */}
            <div>
                <div className=" text-center my-5 px-14">
                    <h5 className=" mb-3 font-semibold text-2xl mt-10">Currently cooking: 00</h5>
                    <hr />
                </div>

                {/* table  */}
                <div>
                <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Time</th>
                                    <th>Calories</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                <tr className="hover">
                                    <th>1</th>
                                    <td>Spicy Chicken Stir Fry</td>
                                    <td>30 minutes</td>
                                    <td>320 calories</td>
                                    
                                </tr>
                                {/* row 2 */}
                                <tr className="hover">
                                    <th>2</th>
                                    <td>Creamy Garlic Shrimp Pasta</td>
                                    <td>25 minutes</td>
                                    <td>420 calories</td>
                                    
                                </tr>
                                {/* row 3 */}
                                <tr className="hover">
                                    <th>3</th>
                                    <td>Mushroom Risotto
                                    </td>
                                    <td>40 minutes</td>
                                    <td>380 calories</td>
                                   
                                </tr>
                                {/* row 4 */}
                                <tr className="hover">
                                    <th>4</th>
                                    <td>Caprese Salad
                                    </td>
                                    <td>15 minutes</td>
                                    <td>180 calories</td>
                                </tr>
                                {/* row 5 */}
                                <tr className="hover">
                                    <th>5</th>
                                    <td>Vegetable Stir Fry
                                    </td>
                                    <td>20 minutes</td>
                                    <td>250 calories</td>
                                </tr>
                                {/* row 6 */}
                                <tr className="hover">
                                    <th>6</th>
                                    <td>Chocolate Banana Smoothie
                                    </td>
                                    <td>10 minutes</td>
                                    <td>200 calories</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}