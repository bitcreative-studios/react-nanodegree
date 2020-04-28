import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

// FIXME: this is actually a navigation component
const TabNavigation = props => {
  return (
    <div
      className="px-6 md:px-0 flex items-baseline justify-between
      border-b-2 border-grey-light mt-6 order-0 lg:order-1"
    >
      <h4 className="hidden md:inline-block text-gray-600">Books</h4>
      <div>
        <div
          className="inline-block md:hidden no-underline border-indigo
            pb-2 px-2 text-sm mr-2 text-indigo-800 hover:cursor-pointer
            js-tab relative"
          data-tab="section-stats"
        >
          Stats
        </div>
        <Link to="/">
          <div
            className="no-underline inline-block border-indigo pb-2 px-2
              text-sm mr-2 text-indigo-800 hover:cursor-pointer js-tab active relative"
            data-tab="section-library"
          >
            Library <span className="text-indigo-500 text-xs">(7)</span>
          </div>
        </Link>
        <Link to="recommendations">
          <div
            className="no-underline inline-block border-indigo pb-2 px-2
              text-sm text-indigo-800 hover:cursor-pointer js-tab relative"
            data-tab="section-picks"
          >
            Picks for you
          </div>
        </Link>
      </div>
    </div>
  )
}

TabNavigation.propTypes = {}

export default TabNavigation
