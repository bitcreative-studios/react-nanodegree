import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

const Tab = ({ to, text, alerts, ...props }) => {
  return (
    <NavLink to={to} {...props}>
      <div
        className="no-underline inline-block border-indigo pb-2 px-2
        text-sm text-indigo-800 hover:cursor-pointer js-tab active relative"
        data-tab="section-library"
      >
        {text}
        {alerts && (
          <span className="ml-1 text-indigo-500 text-xs">({alerts})</span>
        )}
      </div>
    </NavLink>
  )
}

Tab.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  alerts: PropTypes.number,
}

export default Tab
