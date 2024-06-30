import { FaStar } from "react-icons/fa"
import PropTypes from 'prop-types'
import CarData from "./CarData"


const TopProducts = ({handleOrderPopup}) => {
  return (
    <div>
      <div className="container mb-40">
            {/* Header section */}
            <div className="text-center mb-24">
                  <p data-aos="fade-up" className="text-sm text-primary">Top Rated Cars for You</p>
                  <h1 data-aos="fade-up"className="text-3xl font-bold">Cars </h1>
                  <p data-aos="fade-up" className="text-xs text-gray-400">Countless satisfied customers have shared their feedback, making these items stand out as favorites.
                  </p>
            </div>
            {/* Body section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-5 place-items-center">
            {
            CarData.map((data) => (
                  <div data-aos="zoom-in" key={data.id} className=" rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[400px]">
                        {/* image section */}
                        <div className="max-h-[180px]">
                              <img src={data.img} alt=""
                              className="max-w-[300px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
                              />
                        </div>
                        {/* details section  */}
                        <div className="p-4 text-center items-center justify-center gap-1 dark:text-white">
                             <div className="w-full flex hover:text-yellow-400">
                              <FaStar className="text-yellow-500"/>
                              <FaStar className="text-yellow-500"/>
                              <FaStar className="text-yellow-500"/>
                              <FaStar className="text-yellow-500"/>
                             </div>
                              <h1 className="text-left font-bold">{data.title}</h1>
                              <p className="text-gray-500 max-h-[200px] py-4 group-hover:text-white duration-300 text-sm line-clamp-2">{data.description}</p>
                              <button className="bg-gradient-to-r from-primary to-gray-800 hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary" 
                              onClick={handleOrderPopup}
                              >Order Now</button>
                        </div>
                  </div>
            ))
            }
            </div>

      </div>
    </div>
  )
}
TopProducts.propTypes = {
      handleOrderPopup: PropTypes.func.isRequired,
    };
export default TopProducts