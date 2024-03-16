export default function Cooked() {

    // remove hidden part start

    function row1() {
        const hidden1 = document.getElementById('hidden1')
        hidden1.classList.remove('hidden')
        const addHidden1 = document.getElementById('add-hidden1')
        addHidden1.classList.add('hidden')
    }
    function row2() {
        const hidden2 = document.getElementById('hidden2')
        hidden2.classList.remove('hidden')
        const addHidden2 = document.getElementById('add-hidden2')
        addHidden2.classList.add('hidden')
    }
    function row3() {
        const hidden3 = document.getElementById('hidden3')
        hidden3.classList.remove('hidden')
        const addHidden3 = document.getElementById('add-hidden3')
        addHidden3.classList.add('hidden')
    }
    function row4() {
        const hidden4 = document.getElementById('hidden4')
        hidden4.classList.remove('hidden')
        const addHidden4 = document.getElementById('add-hidden4')
        addHidden4.classList.add('hidden')
    }
    function row5() {
        const hidden5 = document.getElementById('hidden5')
        hidden5.classList.remove('hidden')
        const addHidden5 = document.getElementById('add-hidden5')
        addHidden5.classList.add('hidden')
    }
    function row6() {
        const hidden6 = document.getElementById('hidden6')
        hidden6.classList.remove('hidden')
        const addHidden6 = document.getElementById('add-hidden6')
        addHidden6.classList.add('hidden')
    }

    // remove hidden part close 

    return (
        <div className=" border-2 border-[#28282833] w-[525px] pr-2 h-full pb-5 rounded-2xl ">

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
                                <tr id="add-hidden1" className="hover">
                                    <th>1</th>
                                    <td>Spicy Chicken Stir Fry</td>
                                    <td>30 minutes</td>
                                    <td>320 calories</td>
                                    <button onClick={row1} className="btn btn-outline mt-2 rounded-3xl bg-green-400 w-[105px] border-white">Preparing</button>
                                </tr>
                                {/* row 2 */}
                                <tr id="add-hidden2" className="hover">
                                    <th>2</th>
                                    <td>Creamy Garlic Shrimp Pasta</td>
                                    <td>25 minutes</td>
                                    <td>420 calories</td>
                                    <button onClick={row2} className="btn btn-outline mt-2 rounded-3xl bg-green-400 w-[105px] border-white">Preparing</button>
                                </tr>
                                {/* row 3 */}
                                <tr id="add-hidden3" className="hover">
                                    <th>3</th>
                                    <td>Mushroom Risotto
                                    </td>
                                    <td>40 minutes</td>
                                    <td>380 calories</td>
                                    <button onClick={row3} className="btn btn-outline mt-2 rounded-3xl bg-green-400 w-[105px] border-white">Preparing</button>
                                </tr>
                                {/* row 4 */}
                                <tr id="add-hidden4" className="hover">
                                    <th>4</th>
                                    <td>Caprese Salad
                                    </td>
                                    <td>15 minutes</td>
                                    <td>180 calories</td>
                                    <button onClick={row4} className="btn btn-outline mt-2 rounded-3xl bg-green-400 w-[105px] border-white">Preparing</button>
                                </tr>
                                {/* row 5 */}
                                <tr id="add-hidden5" className="hover">
                                    <th>5</th>
                                    <td>Vegetable Stir Fry
                                    </td>
                                    <td>20 minutes</td>
                                    <td>250 calories</td>
                                    <button onClick={row5} className="btn btn-outline mt-2 rounded-3xl bg-green-400 w-[105px] border-white">Preparing</button>
                                </tr>
                                {/* row 6 */}
                                <tr id="add-hidden6" className="hover">
                                    <th>6</th>
                                    <td>Chocolate Banana Smoothie
                                    </td>
                                    <td>10 minutes</td>
                                    <td>200 calories</td>
                                    <button onClick={row6} className="btn btn-outline mt-2 rounded-3xl bg-green-400 w-[105px] border-white">Preparing</button>
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
                                <tr id="hidden1" className="hover hidden">
                                    <th>1</th>
                                    <td>Spicy Chicken Stir Fry</td>
                                    <td>30 minutes</td>
                                    <td>320 calories</td>

                                </tr>
                                {/* row 2 */}
                                <tr id="hidden2" className="hover hidden">
                                    <th>2</th>
                                    <td>Creamy Garlic Shrimp Pasta</td>
                                    <td>25 minutes</td>
                                    <td>420 calories</td>

                                </tr>
                                {/* row 3 */}
                                <tr id="hidden3" className="hover hidden">
                                    <th>3</th>
                                    <td>Mushroom Risotto
                                    </td>
                                    <td>40 minutes</td>
                                    <td>380 calories</td>

                                </tr>
                                {/* row 4 */}
                                <tr id="hidden4" className="hover hidden">
                                    <th>4</th>
                                    <td>Caprese Salad
                                    </td>
                                    <td>15 minutes</td>
                                    <td>180 calories</td>
                                </tr>
                                {/* row 5 */}
                                <tr id="hidden5" className="hover hidden">
                                    <th>5</th>
                                    <td>Vegetable Stir Fry
                                    </td>
                                    <td>20 minutes</td>
                                    <td>250 calories</td>
                                </tr>
                                {/* row 6 */}
                                <tr id="hidden6" className="hover hidden">
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