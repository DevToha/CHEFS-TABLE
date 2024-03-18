export default function Banner() {
    return (
        <div className=" mt-5">
            <div className="hero lg:h-[500px] h-[700px] lg:w-[1410px] lg:ml-[20px] rounded-3xl" style={{ backgroundImage: 'url(https://i.ibb.co/0BZqsR8/cooking.jpg' }}>
                
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <h1 className="mb-5 text-5xl font-bold text-white">Discover an exceptional cooking <br /> class tailored for you!</h1>
                        <p className="mb-5 text-white">Embark on a culinary journey like no other with our bespoke cooking classes, meticulously tailored to suit your skills and preferences, <br /> ensuring an exceptional and personalized experience from start to finish.</p>
                        <button className=" btn bg-[#10B981] w-[150px] h-[55px] rounded-md text-black font-semibold text-lg">Explore Now</button>

                        <button className="btn btn-outline border-2 border-[#797DFC] text-lg  ml-5 rounded-md font-semibold w-[150px] h-[55px] text-white ">Our Feedback</button>

                    </div>
                </div>
            </div>
        </div>
    )
}