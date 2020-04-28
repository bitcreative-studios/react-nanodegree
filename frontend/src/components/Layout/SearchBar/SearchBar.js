import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const SearchBar = props => {
  return (
    <div className="bg-green-900 text-center p-4 px-6 flex items-center">
      <Link
        to="/"
        className="hidden lg:block lg:w-1/4 xl:w-1/5 pr-8 focus:outline-none"
      >
        {/*<a href="#" className="flex justify-start pl-6">*/}
        <img src="images/logo.svg" className="" alt="logo" />
        {/*</a>*/}
      </Link>
      <div className="lg:hidden pr-3" id="mobile-nav-trigger">
        <div className="toggle p-2 block">
          <span />
        </div>
      </div>
      <div className="flex flex-grow items-center lg:w-3/4 xl:w-4/5">
        <span className="relative w-full">
          <input
            type="search"
            placeholder="Search"
            className="w-full text-sm text-white transition border border-transparent focus:outline-none focus:border-green placeholder-white rounded bg-green-800 py-1 px-2 pl-10 appearance-none leading-normal ds-input"
          />
          <div
            className="absolute search-icon"
            style={{ top: '0.5rem', left: '0.8rem' }}
          >
            <svg
              className="fill-current pointer-events-none text-white w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
            </svg>
          </div>
        </span>
        <a
          href="https://github.com/bitwhys/react-nanodegree"
          className="text-sm text-right text-white py-2 px-3 hover:text-grey-dark no-underline hidden lg:block lg:w-1/3 px-6"
        >
          Fork On Github
        </a>
      </div>
    </div>
  )
}

SearchBar.propTypes = {}

export default SearchBar
