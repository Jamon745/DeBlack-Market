import { FaStar } from "react-icons/fa"
import ProductData from "./ProductData"


const Products = () => {
  return (
    <div className="mt-14 mb-12">
      <div className="container">
            {/* header section */}
            <div className="text-center mb-10 max-w-[600px] mx-auto">
                  <p data-aos="fade-up" className="text-sm text-primary">Top Selling Products for You</p>
                  <h1 data-aos="fade-up"className="text-3xl font-bold">Products</h1>
                  <p data-aos="fade-up" className="text-xs text-gray-400">Discover a wide selection of products ranging from sleek brand new electronics to stylish clothing for the whole family, including both new and gently used items. Whether you&apos;re upgrading your mobile device, refreshing your wardrobe, or searching for the perfect family vehicle, we have something for everyone. Explore our collection of women&apos;s, men&apos;s, and kids&apos; apparel, showcasing trendy designs, comfortable fabrics, and affordable prices.
                  </p>
            </div>
            {/* body section */}
            <div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 md-grid-cols-3 lg:grid-cols-3 place-items-center gap-5">
                   { ProductData.map((data) => (
                      <div data-aos="fade-up"
                      data-aos-delay={data.aosDelay}
                       key={data.id} 
                       className="space-y-3">
                        <img src={data.img} alt=""className="h-[300px] w-[400px] object-cover rounded-md" />
                        <div>
                          <h3 className="font-semibold">{data.title}</h3>
                          <p className="flex items-center justify-between text-sm text-gray-600">Color: <span>{data.color}</span></p>
                          <p className="flex items-center justify-between">Price: <span>{data.price}</span></p>
                          <div className="flex items-center justify-between">
                            <FaStar className="text-yellow-400" />
                            <span>{data.rating}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div data-aos="zoom-in" className="flex items-center text-center">
                    <button className="bg-gradient-to-r from-primary to-gray-800 text-center text-white px-2 py-1 mt-10n rounded-md dark:text-white hover:text-white cursor-pointer">View All</button>
                  </div>
            </div>
      </div>
    </div>
  )
}

export default Products