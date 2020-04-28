import React from 'react'
import PropTypes from 'prop-types'

const SideNav = props => {
  return (
    <nav
      className="absolute lg:relative lg:flex lg:text-sm bg-indigo-900
      lg:bg-transparent pin-l right-0 py-4 px-6 lg:pt-10 lg:pl-12 lg:pr-6 -mt-1
      lg:mt-0 overflow-y-auto lg:w-1/5 lg:border-r z-40 hidden"
    >
      <ul className="list-reset mb-8 w-full">
        <li className="ml-2 mb-4 flex">
          <img
            src="./images/home-default.svg"
            alt="home-icon"
            className="w-4 h-4 mr-2"
          />
          <div
            className="hover:cursor-pointer text-white lg:text-indigo-800
            no-underline font-medium mobile-home-trigger"
          >
            Home
          </div>
        </li>
        <li className="ml-2 mb-4">
          <div className="flex" id="sidenav-categories-trigger">
            <img
              src="./images/category-default.svg"
              alt="home-icon"
              className="w-4 h-4 mr-2"
            />
            <div
              className="hover:cursor-pointer text-white lg:text-indigo-800
              no-underline font-medium w-full relative"
            >
              Categories
              <div
                className="pointer-events-none absolute inset-y-0 right-0
                  flex items-center px-1 text-gray-600"
                id="sidenav-icon"
              >
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          <ul
            className="text-gray-600 lg:text-gray-dark
              list-reset leading-loose mt-2"
            id="sidenav-categories"
          >
            <li
              className="hover:text-indigo-600 hover:cursor-pointer
              transition duration-150 ml-1 border-l border-grey-dark pl-4"
            >
              Fiction
            </li>
            <li
              className="hover:text-indigo-600 hover:cursor-pointer
              transition duration-150 ml-1 border-l border-grey-dark pl-4"
            >
              Nonfiction
            </li>
            <li
              className="hover:text-indigo-600 hover:cursor-pointer
              transition duration-150 ml-1 border-l border-grey-dark pl-4"
            >
              Lifestyle
            </li>
            <li
              className="hover:text-indigo-600 hover:cursor-pointer
              transition duration-150 ml-1 border-l border-grey-dark pl-4"
            >
              Health &amp; Fitness
            </li>
            <li
              className="text-indigo-300 lg:text-indigo-800 font-medium flex
              justify-between items-center hover:cursor-pointer transition
              duration-150 ml-1 border-l border-grey-dark pl-4 mobile-home-trigger"
            >
              <span>Art & Design</span>
              <span className="bg-indigo-700 text-white text-xs rounded-full px-2 leading-normal">
                7
              </span>
            </li>
            <li
              className="hover:text-indigo-600 hover:cursor-pointer
              transition duration-150 ml-1 border-l border-grey-dark pl-4"
            >
              Music
            </li>
          </ul>
        </li>
        <li className="ml-2 mb-4 flex">
          <img
            src="./images/wishlist-default.svg"
            alt="wishlist-icon"
            className="w-4 h-4 mr-2"
          />
          <div
            className="hover:cursor-pointer text-white lg:text-indigo-800
            no-underline font-medium mobile-home-trigger"
          >
            Wishlist
          </div>
        </li>
        <li className="ml-2 mb-4 flex lg:hidden">
          <img
            src="./images/profile-default.svg"
            alt="profile-icon"
            className="w-4 h-4 mr-2"
          />
          <div
            className="hover:cursor-pointer text-white
              lg:text-indigo-800 no-underline font-medium"
            id="mobile-profile-trigger"
          >
            Profile
          </div>
        </li>
      </ul>
    </nav>
  )
}

SideNav.propTypes = {}

export default SideNav
