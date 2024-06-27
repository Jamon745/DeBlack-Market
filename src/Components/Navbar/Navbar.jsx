import PropTypes from 'prop-types';
import { FaCaretDown, FaShoppingCart } from 'react-icons/fa';
import Logo from '../../assets/logo.png';
import { IoMdSearch } from 'react-icons/io';
import DarkMode from './DarkMode';
import {NavData} from './NavData'; 
import {DropdownLinks} from './DropdownLinks'; 



const Navbar = ({ handleOrderPopup }) => {

  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      <div className="bg-primary-400 py-3 sm:py-0">
        <div className="container flex justify-between items-center">
          <div>
            <a href="/" className="font-bold text-lg sm:text-3xl flex items-center gap-2">
              <img src={Logo} alt="Logo" className="w-12 uppercase" />
              DeBlack <span className='text-primary'>Market</span>
            </a>
          </div>
          {/* Search bar */}
          <div className="flex justify-between items-center gap-4">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="Search"
                className="w-40 sm:w-56 group-hover:w-72 transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-primary dark:border-gray-500 dark:bg-gray-800"
              />
              <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
            </div>
            {/* Order button */}
            <button
              onClick={handleOrderPopup}
              className="bg-gradient-to-r from-primary to-gray-800 transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group"
            >
              <span className="group-hover:block hidden transition-all duration-200">
                Order
              </span>
              <FaShoppingCart className="text-xl drop-shadow-sm cursor-pointer" />
            </button>

            {/* Dark Mode Switch */}
            <DarkMode />
          </div>
        </div>
      </div>
      {/* Lower Navbar */}
      <div className="flex justify-center flex-end">
        <ul className="sm:flex hidden items-center gap-4">
          <li>
            <a className='px-2 hover:translate-x-1 duration-300 hover:text-primary' href="/">Home</a>
          </li>
          <li>
          <a href={"/products"} className="flex items-center hover:text-primary gap-2 py-2">
              Products
            </a>
          </li>
          <li>
          <a href={"/foods"} className="flex items-center hover:text-primary gap-2 py-2">
              Food & Beverages
            </a>
          </li>

          <li className="group relative cursor-pointer">
          <div className="flex items-center gap-2 py-2">
              Categories
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </div>
            <div className="absolute z-10 hidden group-hover:block rounded-md w-48 bg-white p-2 text-black shadow-md">
              {NavData.map((data) => (
                <a key={data.id} href={data.Link} className="block p-2 rounded-md hover:bg-primary hover:text-white hover:text-center">
                  {data.name}
                </a>
              ))}
            </div>
          </li>

          

          {/* Dropdown and some link */}
          <li className="group relative cursor-pointer">
            <a href="#" className="flex items-center gap-2 py-2">
              Trending{" "}
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </a>

            <div className="absolute z-10 hidden group-hover:block rounded-md w-48 bg-white p-2 text-black shadow-md">
              {DropdownLinks.map((data) => (
                <a key={data.id} href={data.Link} className="block p-2 rounded-md hover:bg-primary-200 hover:bg-primary hover:text-white hover:text-center">
                  {data.name}
                </a>
              ))}
            </div>
          </li>

          {/* Login and Register buttons */}
          <li className="flex gap-4">
            <a href='/Login' className="hover:text-primary cursor-pointer rounded-md px-2 bg-gradient-to-r from-primary to-gray-800 transition-all duration-200 text-white ml-20">Login</a>
            <a href='/SignUp' className="hover:text-primary cursor-pointer rounded-md px-2 bg-gradient-to-r from-primary to-gray-800 transition-all duration-200 text-white">Register</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  handleOrderPopup: PropTypes.func.isRequired,
};

export default Navbar;
