import { FaStar } from "react-icons/fa";
import FoodsData from "./FoodsData";
import PropTypes from "prop-types";

const Foods = ({ handleOrderPopup }) => {
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            Top Selling Foods for You
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Foods & Beverages
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Discover a wide selection of products ranging from sleek brand new
            electronics to stylish clothing for the whole family, including both
            new and gently used items. Whether you&apos;re upgrading your mobile
            device, refreshing your wardrobe, or searching for the perfect
            family vehicle, we have something for everyone. Explore our
            collection of women&apos;s, men&apos;s, and kids&apos; apparel,
            showcasing trendy designs, comfortable fabrics, and affordable
            prices.
          </p>
        </div>
        {/* body section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md-grid-cols-3 lg:grid-cols-3 place-items-center gap-5">
            {FoodsData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="space-y-3"
              >
                <img
                  src={data.img}
                  alt=""
                  className="h-[300px] w-[400px] object-cover rounded-md"
                />
                <div>
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="flex items-center justify-between text-sm text-gray-600">
                    Color: <span>{data.color}</span>
                  </p>
                  <p className="flex items-center justify-between">
                    Price: <span>{data.price}</span>
                  </p>
                  <div className="flex items-center justify-between">
                    <FaStar className="text-yellow-400" />
                    <span>{data.rating}</span>
                  </div>
                </div>
                {/* details section  */}
                <div className="p-4 text-center items-center justify-center gap-1 dark:text-white">
                  <p className="text-gray-500 max-h-[200px] py-4 group-hover:text-white duration-300 text-sm line-clamp-2">
                    {data.description}
                  </p>
                  <button
                    className="bg-gradient-to-r from-primary to-gray-800 hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
                    onClick={handleOrderPopup}
                  >
                    Order Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
Foods.propTypes = {
  handleOrderPopup: PropTypes.func.isRequired,
};
export default Foods;
