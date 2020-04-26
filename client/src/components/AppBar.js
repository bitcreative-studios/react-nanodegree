import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const AppBar = ({ route }) => {
  return (
    <div
      id="app-bar"
      className="bg-white flex justify-between items-center px-8 mb-4"
    >
      <div className="flex items-center">
        <label className="mr-1" htmlFor="search">
          <span className="cursor-pointer text-4xl icon icon-search" />
        </label>
        <input
          type="text"
          className="px-2 py-1"
          placeholder="Search contacts"
          name="search"
          id="search"
        />
      </div>
      <Link to="/create" className="focus:outline-none">
        <span
          id="add-user"
          className="cursor-pointer text-4xl
           icon icon-user-plus text-gray-300
           hover:text-teal-500 transition duration-150"
        />
      </Link>
    </div>
  )
}

AppBar.propTypes = {}

export default AppBar
