
import './App.css'
import Recipe from './components/Our-Recipes/Recipes'
import Cooked from './components/Our-Recipes/all-food/cooked'
import Foods from './components/Our-Recipes/all-food/foods'
import Banner from './components/banner'
import Footer from './components/footer'
import Navbar from './components/nav-bar'

function App() {

  return (
    <>

      <div className='mx-w-[1075px] m-auto px-10'>
        <Navbar></Navbar>
        <Banner></Banner>
        <Recipe></Recipe>
        <div className=' lg:flex gap-20'>
          <Foods></Foods>
          <Cooked></Cooked>
        </div>
        <Footer></Footer>
      </div>

    </>
  )
}

export default App
