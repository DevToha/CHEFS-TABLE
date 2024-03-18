
import { useState } from 'react'
import './App.css'
import Recipe from './components/Our-Recipes/Recipes'
import Cooked from './components/Our-Recipes/all-food/Cookfoods'
import Foods from './components/Our-Recipes/all-food/foods'
import Banner from './components/banner'
import Footer from './components/footer'
import Navbar from './components/nav-bar'
import Cookingfood from './components/Our-Recipes/all-food/Cookingfoods'

function App() {

  const [cookedFood, setCookedFood] = useState([])

  const [cookingfoods, setCookingfood] = useState([])

  const handleCookedFood = food => {
    const newCookFood = [...cookedFood, food]
    setCookedFood(newCookFood)

  }

  const handleCookingFood = cooking => {
    const newCookigfood = [...cookingfoods, cooking]
    setCookingfood(newCookigfood)
  }

  return (
    <>

      <div className='mx-w-[1075px] m-auto px-10'>
        <Navbar></Navbar>
        <Banner></Banner>
        <Recipe></Recipe>
        <div className=' lg:flex gap-20'>
          <div >
            <Foods handleCookedFood={handleCookedFood} ></Foods>

          </div>
          <div className=" border-2 border-[#28282833] lg:w-[525px] lg:pr-2 h-full pb-5 rounded-2xl ">
            <Cooked handleCookingFood={handleCookingFood} cookedFood={cookedFood}></Cooked>
            <Cookingfood cookingfoods={cookingfoods} ></Cookingfood>
          </div>
        </div>
        <Footer></Footer>
      </div>

    </>
  )
}

export default App
