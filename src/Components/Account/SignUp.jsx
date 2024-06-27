
const SignUp = () => {
  return (
    <div>
      <div className='flex items-center mx-auto w-[35vw] h-[80vh] px-4 mb-14 py-6 bg-primary/20 rounded-md'>
            <div data-aos="zoom-in"  className="w-[40vw] h-[80vh] mx-auto ">
                  <h1 className="text-center text-black font-bold text-3xl sm:text-2xl my-6">Welcome to <span className="bg-gradient-to-l from-primary to-gray-800 px-2"> DeBlack Market</span></h1>
                  <h2 className="text-center text-xl">Please enter your details</h2>
                  <div className="flex flex-col py-6 gap-4 translate-x-1">
                        <input type="text" placeholder="Username" className="w-full rounded-md py-2 px-4" />
                        <input type="text" placeholder="Name" className="w-full rounded-md py-2 px-4" />
                        <input type="email" placeholder="Email" className="w-full rounded-md py-2 px-4" />
                        <input type="text" placeholder="Mobile" className="w-full rounded-md py-2 px-4" />
                        <input type="text" placeholder="Address" className="w-full rounded-md py-2 px-4" />
                        <input type="password" placeholder="Password" className="w-full rounded-md py-2 px-4" />
                        <button className="bg-gradient-to-r from-primary to-gray-800 max-w-28 text-lg rounded-full mx-auto px-6 py-2 hover:text-white">Sign Up</button>
                  </div>
                  
                  <div className="flex items-center justify-between px-6">
                        <h2>Already have account?</h2>
                        <a href={"/login"} className="text-blue-500">Login</a>
                  </div>
            </div>

      </div>
    </div>
  )
}

export default SignUp