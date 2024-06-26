import BannerImg from '../../assets/Banner/Chef.jpg'
import { GrSecure } from 'react-icons/gr'
import { IoFastFood } from 'react-icons/io5'
import { GiFoodTruck } from 'react-icons/gi'


const Banner = () => {
  return (
    <div className="min-h-[550px] flex justify-center items-center py-10 sm:py-0">
      <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
                  <div data-aos='zoom-in'>
                        <img src={BannerImg} alt="" 
                        className='max-w-[400px] h-[350px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover'
                        />
                  </div>
                  <div className='flex flex-col justify-center gap-6 sm:pt-0'>
                        <h1
                        data-aos="fade-up"
                        className='text-3xl sm:text-4xl font-bold'
                        >Holiday Sale Up to 50% Off</h1>
                        <p data-aos="fade-up" className='text-sm text-gray-500 tracking-wide leading-5'>Celebrate the season with our spectacular Holiday Sale, where you can enjoy up to 50% off on our delectable dishes and other products. Whether you&apos;re craving savory delights or indulgent treats, now is the perfect time to savor our culinary creations at unbeatable prices.</p>
                        <div>
                              <div data-aos="fade-up" className='flex items-center gap-4'>
                                    <GrSecure className='h-12 w-12 text-4xl shadow-sm rounded-full bg-violet-100 p-4 dark:bg-violet-400'/>
                                    <p>Quality Products</p>
                              </div>
                              <div data-aos="fade-up" className='flex items-center gap-4'>
                                    <IoFastFood className='h-12 w-12 text-4xl shadow-sm rounded-full bg-orange-100 p-4 dark:bg-violet-400'/>
                                    <p>Fast Delivery</p>
                              </div>
                              <div data-aos="fade-up" className='flex items-center gap-4'>
                                    <GiFoodTruck className='h-12 w-12 text-4xl shadow-sm rounded-full bg-violet-100 p-4 dark:bg-violet-400'/>
                                    <p>Easy Payment Methods</p>
                              </div>
                              <div data-aos="fade-up" className='flex items-center gap-4'>
                                    <GiFoodTruck className='h-12 w-12 text-4xl shadow-sm rounded-full bg-orange-100 p-4 dark:bg-violet-400'/>
                                    <p>Get Offers</p>
                              </div>
                        </div>
                  </div>
            </div>
      </div>
    </div>
  )
}

export default Banner