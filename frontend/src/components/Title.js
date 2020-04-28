import React from 'react'
import PropTypes from 'prop-types'

const Title = props => {
  return (
    <div
      className="px-6 md:px-0 flex justify-between
          items-center -order-1"
    >
      <div>
        <h2 className="text-2xl">Art &amp; Design</h2>
        <p className="text-gray-600 mt-2">Interesting Stats</p>
      </div>
      <button
        className="bg-indigo-700 hover:bg-indigo-900 text-white
            text-sm py-2 px-4 rounded-full transition duration-150
            hover:shadow hover:translate-y-1 active:translate-y-1
            focus:outline-none"
      >
        Add New Book
      </button>
    </div>
  )
}

Title.propTypes = {}

export default Title
