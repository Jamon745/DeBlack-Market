
const Login = () => {
  return (
    <>
      <div className='flex items-center mx-auto w-[35vw] h-[80vh] px-4 mb-14 py-6 bg-primary/20 rounded-lg'>
            <div data-aos="zoom-in"  className=" mx-auto ">
                  <h1 className="text-center text-black font-bold text-3xl sm:text-2xl my-6">Welcome to <span className="text-3xl px-2"> DeBlack Market</span></h1>
                  <div className="flex flex-col py-6 gap-4 translate-x-1">
                        <input type="text" placeholder="Username" className="w-full rounded-md py-2 px-4" />
                        <input type="email" placeholder="Email" className="w-full rounded-md py-2 px-4" />
                        <input type="text" placeholder="Mobile" className="w-full rounded-md py-2 px-4" />
                        <input type="password" placeholder="Password" className="w-full rounded-md py-2 px-4" />
                        <button className="bg-gradient-to-r from-primary to-gray-800 max-w-28 text-xl rounded-full mx-auto px-6 py-2 hover:text-white">Login</button>
                  </div>
                  <div className="flex items-center gap-3 mb-4 px-6">
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="">Remember my details?</label>
                  </div>
                  
                  <div className="flex items-center justify-between px-6">
                        <h2>Don&apos;t have account?</h2>
                        <a href={"/signUp"} className="text-blue-500">Register</a>
                  </div>
            </div>

      </div>
    </>
  )
}

export default Login