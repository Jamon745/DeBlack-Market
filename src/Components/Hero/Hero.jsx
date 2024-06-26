import Slider from 'react-slick';
import ImageCollection from '../../Components/Hero/ImageCollection'
import PropTypes from 'prop-types'


const Hero = ({handleOrderPopup}) => {
  
     const settings = {
        dots: true,
        arrows:false,
        infinity: true,
        speed:800,
        slidesToScroll:1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        pauseOnFocus: true,
     };
  return (
    <div>
      <div className="relative overflow-hidden min-h-[550px] -mt-6 sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200">
        <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 rounded-3xl rotate-45 -z-9"></div>
        <div  className='container mt-6 md:mt-12 pb-8 sm:pb-0'>
          <Slider {...settings}>
              {ImageCollection.map((data)=>(
                <div key={data.id}>
                <div  className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
                <div className='flex flex-col justify-center pt-12 -mt-16 sm:pt-0 text-center sm:text-left order-2 sm:order-1 gap-2 relative z-10'>
                  <h1 className='text-5xl sm:text-6xl md:text-5xl lg:text-7xl px-2 font-bold'>{data.title}</h1>
                  <p className='text-sm sm:text-xl z-10 relative'>{data.description}</p>
                  <div>
                    <button onClick={handleOrderPopup} className='bg-gradient-to-r from-primary to-gray-800 text-white rounded-full py-2 px-4 hover:scale-105 duration-200'>Order Now</button>
                  </div>
                </div>
                
                <div className='order-1 sm:order-2 gap-6 mx-4'>
                    <div className='relative z-10'>
                      <img src={data.img} className='-mt-20 md:mt-12 w-[250px] h-[500px] sm:w-[500px] sm:h-[400px] sm:scale-105 object-contain mx-auto' alt="" />
                    </div>
                </div>
              </div>
          </div>
              ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};
Hero.propTypes = {
  handleOrderPopup: PropTypes.func.isRequired,
};
export default Hero;
