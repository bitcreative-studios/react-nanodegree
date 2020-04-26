import React from 'react'
import PropTypes from 'prop-types'

const FormField = ({
  label,
  name,
  type = 'text',
  isRequired = false,
  placeholder,
  errorMessage,
}) => {
  return (
    <div className="mb-6">
      <label className="block font-bold mb-2" htmlFor="twitter-handle">
        {label}
      </label>
      <input
        className="shadow appearance-none border border-red-500 rounded
         w-full py-2 px-3  mb-3 leading-tight
         focus:outline-none focus:shadow-outline"
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={isRequired}
      />
      <p className="text-red-500 text-xs italic">{errorMessage}</p>
    </div>
  )
}

FormField.propTypes = {
  errorMessage: PropTypes.string,
  isRequired: PropTypes.bool,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
}

export default FormField
