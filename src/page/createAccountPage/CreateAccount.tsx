import createImage from "/public/createImage.png"
const CreateAccount = () => {
  return (
    <div className="w-full h-screen md:h-svh p-5 flex flex-row items-center">
         {/* account creation section */}
         <div className="w-full md:w-[50%] h-full flex md:items-center justify-center  align-middle ">
            <div className="w-[30rem] h-[40rem] rounded-3xl border border-[#B5B1B1] p-10">
                <div className="h-20 flex flex-col justify-between">
                   <h2 className="text-[#0634D8] font-semibold leading-10 text-3xl">Create an account</h2>
                   <p className="text-base font-normal leading-7">Set an account up for free. and enjoy free delivery</p>
                   {/* forms */}
                   <div className="w-full h-full mt-3">
                    <form className="border-b pb-4 border-[#BBBBBB]">
                        <div className="w-full h-20 flex flex-col items-start mb-2" >
                            <label className="text-[#172248] text-base font-normal leading-6">Your Name</label>
                            <input type="text" placeholder="input your name" className="w-full border border-[#ADADAD] outline-none h-11 px-2 rounded-md mt-2 shadow"/>
                        </div>
                        <div className="w-full h-20 flex flex-col items-start mb-2" >
                            <label className="text-[#172248] text-base font-normal leading-6">Your Email</label>
                            <input type="text" placeholder="enter your email" className="w-full border border-[#ADADAD] outline-none h-11 px-2 rounded-md mt-2 shadow"/>
                        </div>
                        <div className="w-full h-20 flex flex-col items-start mb-2" >
                            <label className="text-[#172248] text-base font-normal leading-6">Password</label>
                            <input type="text" placeholder="At least 10 characters" className="w-full border border-[#ADADAD] outline-none h-11 px-2 rounded-md mt-2 shadow"/>
                        </div>
                        <div className="w-full h-20 flex flex-col items-start mb-2" >
                            <label className="text-[#172248] text-lg font-normal leading-6">Re-enter Password</label>
                            <input type="text" placeholder="At least 10 characters" className="w-full border border-[#ADADAD] outline-none h-11 px-2 rounded-md mt-2 shadow"/>
                        </div>
                        <div className="w-full h-11 flex flex-col items-start mb-2 rounded-lg overflow-hidden" >
                            <button className="w-full h-full bg-[#141B34] text-white">continue</button>
                        </div>
                        <div className="w-80  h-10 mt-1 ">
                          <p className="text-sm text-[#2C3249] leading-5 font-normal">By creating an account, you agree to Martflux’s account <a className="text-blue-400">condition of Use</a> and <a className="text-blue-500">privacy notice</a> </p>
                        </div>
                    </form>
                    <p className="text-sm font-medium leading-5 mt-2">Already have an account? <span className="text-blue-600">Sign In</span></p>
                   </div>
                </div>
                 

            </div>
         </div>
         {/* image */}
         <div className="hidden md:flex w-[50%] h-full bg-white rounded-md overflow-hidden">
           <img src={createImage} alt="" className="w-full h-full object-cover" />
         </div>
    </div>
  )
}

export default CreateAccount
