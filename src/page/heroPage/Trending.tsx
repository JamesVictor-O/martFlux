import BusinessMan from "/public/Businessman.png";
import SelectIndustry from "../../components/SelectIndustry";

const Trending = () => {
  return (
    <div className="w-full px-3  mb-9">
      <div className=" w-full px-10 h-[8rem] flex flex-col md:flex-row items-center align-middle justify-center  ">
        <h2 className="md:text-xl  font-semibold  mb-2  font-wix w-[26rem] mr-4 text-center">
          Buy and list on marketplace
        </h2>
        <span className="hidden md:block mx-4 h-[6rem] border-r border-black"></span>
        <p className="text-base font-normal text-gray-500 font-wix text-left w-[20rem] ml-6 text-center">
          With ease find the latest products missing in your homes, office and
          workshops.{" "}
        </p>
      </div>
      <div className="w-full md:h-[30rem] relative  bg-[#FFF5CB]">
        {/* <Image src={"/trending2.jpg"} alt=""/> */}

        <div className="md:absolute md:w-[40rem] md:ml-[20rem] mt-[2rem] ">
          <SelectIndustry />
        </div>

        <img
          src={BusinessMan}
          alt=""
          className="hidden md:flex w-[28rem]  rounded-md absolute right-0 bottom-0"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Trending;
