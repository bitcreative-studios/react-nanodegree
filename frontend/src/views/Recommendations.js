import React from 'react'
import PropTypes from 'prop-types'

const Recommendations = props => {
  return (
    <div
      className="flex flex-wrap order-2 pt-0 md:pt-6 md:pb-8 js-tab-pane"
      id="section-picks"
    >
      <div
        className="flex justify-start items-center p-5 px-6 w-full sm:w-1/2"
        style={{ backgroundColor: '#fbc164' }}
      >
        <img src="./images/pick-1.jpg" alt="pick" className="shadow-md w-1/3" />
        <div className="ml-4 mt-1 w-2/3">
          <p className="font-medium">Popeye Jul 2018</p>
          <p className="mt-3 text-sm">
            Eu quo donec pellentesque, urna velit. Ultrices ante iaculis ligula
            praesent
          </p>
          <button className="shadow-md mt-3 bg-gray-100 hover:bg-white text-indigo-500-700 text-xs py-2 px-4 rounded-full transition duration-150 hover:shadow hover:translate-y-1 active:translate-y-1 focus:outline-none">
            Add to Wishlist
          </button>
        </div>
      </div>
      <div
        className="flex justify-start items-center p-5 px-6 w-full sm:w-1/2"
        style={{ backgroundColor: '#f1cecd' }}
      >
        <img src="./images/pick-2.jpg" alt="pick" className="shadow-md w-1/3" />
        <div className="ml-4 mt-1 w-2/3">
          <p className="font-medium">Brutus Aug 2018</p>
          <p className="mt-3 text-sm">
            Sapien eget, fermentum curabitur quis ut pharetra odio id, vitae
            eros eget maecenas, ullamcorper vitae.
          </p>
          <button className="shadow-md mt-3 bg-gray-100 hover:bg-white text-indigo-700 text-xs py-2 px-4 rounded-full transition duration-150 hover:shadow hover:translate-y-1 active:translate-y-1 focus:outline-none">
            Add to Wishlist
          </button>
        </div>
      </div>
      <div
        className="flex justify-start items-center p-5 px-6 w-full sm:w-1/2"
        style={{ backgroundColor: '#ece7e9' }}
      >
        <img src="./images/pick-3.jpg" alt="pick" className="shadow-md w-1/3" />
        <div className="ml-4 mt-1 w-2/3">
          <p className="font-medium">Casa Aug 2018</p>
          <p className="mt-3 text-sm">
            Curabitur quis ut pharetra odio id, vitae eros eget tristique
            maecenas, ullamcorper vitae.
          </p>
          <button className="shadow-md mt-3 bg-gray-100 hover:bg-white text-indigo-700 text-xs py-2 px-4 rounded-full transition duration-150 hover:shadow hover:translate-y-1 active:translate-y-1 focus:outline-none">
            Add to Wishlist
          </button>
        </div>
      </div>
      <div
        className="flex justify-start items-center p-5 px-6 w-full sm:w-1/2"
        style={{ backgroundColor: '#d0e3e8' }}
      >
        <img src="./images/pick-4.jpg" alt="pick" className="shadow-md w-1/3" />
        <div className="ml-4 mt-1 w-2/3">
          <p className="font-medium">SUPER: Jul 2018</p>
          <p className="mt-3 text-sm">
            Eu quo donec pellentesque, urna velit. Ultrices ante iaculis ligula
            praesent
          </p>
          <button className="shadow-md mt-3 bg-gray-100 hover:bg-white text-indigo-700 text-xs py-2 px-4 rounded-full transition duration-150 hover:shadow hover:translate-y-1 active:translate-y-1 focus:outline-none">
            Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  )
}

Recommendations.propTypes = {}

export default Recommendations
