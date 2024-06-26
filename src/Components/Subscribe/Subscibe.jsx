import Banner from '../../assets/Subscribe/Sub.png'

const Subscibe = () => {
      const BannerImg = {
            backgroundImage: `Url(${Banner})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height:"100%",
            width:"100%"
      }
  return (
    <div data-aos="zoom-in" style={BannerImg} className='mb-20 bg-gray-100 dark:bg-gray-800 text-white'>
      <div className='container backdrop-blur-sm py-10'>
            <div className='space-y-6 max-w-xl mx-auto'>
                  <h1 className='text-2xl text-center sm:text-left sm:text-4xl font-semibold'>Get Notified About New Products</h1>
                  <input data-aos="fade-up" className='w-full p-3 rounded-md' type="text" placeholder='Enter Your Email' />
            </div>
      </div>
    </div>
  )
}

export default Subscibe