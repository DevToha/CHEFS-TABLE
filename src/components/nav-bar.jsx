import profile from '../Image/profile.png'


export default function Navbar() {
    return (
        <div className="lg:mt-2 lg:w-auto w-[360px]">
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 text-base rounded-box w-52 font-medium">
                            <li><a>Home</a></li>
                            <li><a>Recipes</a></li>
                            <li><a>About</a></li>
                            <li><a>Search</a></li>

                        </ul>
                    </div>
                    <a className=" text-black font-extrabold text-xl lg:text-4xl cursor-pointer">Recipe Calories</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal text-base lg:pr-[290px] px-1 font-medium">
                        <li><a>Home</a></li>
                        <li><a>Recipes</a></li>
                        <li><a>About</a></li>
                        <li><a>Search</a></li>

                    </ul>
                </div>
                <div>
                    <div>
                        <label className="input bg-gray-100 flex items-center gap-5 rounded-3xl">

                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-6 h-6 opacity-70 cursor-pointer"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>

                            <div className="lg:inline hidden"><input type="text" className="grow font-bold text-green-400" placeholder="Search" /></div>

                        </label>
                    </div>
                    <div className=" bg-green-500 w-12 h-12 rounded-full ml-5 cursor-pointer">
                        <img className=' mx-[8px] my-[9px] w-[32px]' src={profile} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}