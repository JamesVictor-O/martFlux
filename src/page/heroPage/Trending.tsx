import TrendingImag from "/trending2.jpg"

const Trending = () => {
  return (
    <div className="w-full px-3 md:px-10 mb-9">
        <div className="w-full  flex flex-col mb-4 items-center md:items-start "> 
            <h2 className="text-3xl font-bold">Trending </h2>
            <p className="text-xl font-normal leading-7 mt-2 text-center md:text-left" >Get to shop all the latest release of iphone series, that drops at a much lower price and safe delivery</p>
        </div>
        <div className="w-full h-[40rem] relative mt-10">
             <img src={TrendingImag} alt="" className="w-full h-full rounded-md" />
             <div className="absolute bottom-40 bg-blue-300 md:bg-white left-24 md:left-10 py-5 px-10 rounded-md text-white md:text-black">
                <button>Buy Now</button>
             </div>
             <div className="absolute bottom-80 w-[20rem] hidden md:block left-20">
               <h2 className="text-5xl  md:text-white font-bold">Save up to <span className="text-7xl text-blue-500 my-4">20%</span> discount on Trending Purchase</h2>
             </div>
        </div>
    </div>
  )
}

export default Trending