import facebook from '../Image/icons8-facebook-30.png'
import twitter from '../Image/icons8-twitter-30.png'
// import github from '../Image/icons8-github-30.png'
import instagram from '../Image/icons8-instagram-30.png'


export default function Footer() {
    return (
        <div className="mt-10">

            <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded mt-20 md:container md:mx-auto">
                <nav>
                    <h3 className="font-black text-4xl">Recipe Calories</h3>
                </nav>
                <nav>
                    <p className="text-gray-500">Explore our online restaurant where every dishs calorie count is meticulously <br /> provided for guilt-free indulgence.
                    </p>
                </nav>
                <nav>
                    <div className="grid grid-flow-col gap-4">
                        <img className=' cursor-pointer' src={facebook} alt="" />
                        <img className=' cursor-pointer' src={twitter} alt="" />
                        <img className=' cursor-pointer' src={instagram} alt="" />
                        {/* <img className=' cursor-pointer' src={github} alt="" /> */}
                    </div>
                </nav>
                <aside>
                    <div className="lg:w-[825px] w-[215px] h-1 bg-[#1313181A]"></div>
                    <p className="text-gray-500 mt-7">2017, All Rights Reserved.</p>
                </aside>
            </footer>

        </div>
    )
}