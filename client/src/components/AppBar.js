import React from 'react'
import PropTypes from 'prop-types'
import { Link, withRouter } from 'react-router-dom'

const BackArrow = () => (
  <span
    id="add-user"
    className="cursor-pointer text-4xl
     icon icon-cheveron-left text-gray-300
     hover:text-teal-500 transition duration-150"
  />
)

const AddNewContact = () => (
  <span
    id="add-user"
    className="cursor-pointer text-4xl
     icon icon-user-plus text-gray-300
     hover:text-teal-500 transition duration-150"
  />
)

const SearchInput = () => (
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
)

const AppBar = ({ location }) => {
  const { pathname } = location
  return (
    <div
      id="app-bar"
      className="bg-white flex justify-between items-center px-8 mb-4"
    >
      {(pathname === '/' && (
        <>
          <SearchInput />
          <Link to="/create" className="focus:outline-none">
            <AddNewContact />
          </Link>
        </>
      )) || (
        <Link to="/">
          <BackArrow />
        </Link>
      )}
    </div>
  )
}

AppBar.propTypes = {
  location: PropTypes.shape({
    hash: PropTypes.string,
    key: PropTypes.string,
    pathname: PropTypes.string,
    search: PropTypes.string,
    state: PropTypes.object,
  }),
}

export default withRouter(AppBar)
