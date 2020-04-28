import React from 'react'
import PropTypes from 'prop-types'
import Tab from './Tab'

// FIXME: this is actually a navigation component
const TabbedNavigation = props => {
  return (
    <div
      className="px-6 md:px-0 flex items-baseline justify-between
      border-b-2 border-gray-300 mt-6 order-0 lg:order-1"
    >
      <h4 className="hidden md:inline-block text-gray-600">Books</h4>
      {/* Tabs */}
      <div>
        <Tab
          to="/stats"
          text="Stats"
          className="inline-block
          md:hidden focus:outline-none"
        />
        <Tab to="/" text="Library" alerts={4} className="focus:outline-none" />
        <Tab
          text="Picks for you"
          to="/recommendations"
          className="focus:outline-none"
        />
      </div>
    </div>
  )
}

TabbedNavigation.propTypes = {}

export default TabbedNavigation
