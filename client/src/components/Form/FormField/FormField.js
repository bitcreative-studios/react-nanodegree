import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

const baseStyles = [
  'shadow',
  'appearance-none',
  'border',
  'rounded',
  'w-full',
  'py-2',
  'px-3',
  'mb-3',
  'leading-tight',
  'focus:outline-none',
  'focus:shadow-outline',
]
const FormField = ({
  value,
  onChange,
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
        className={classNames(baseStyles)}
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={isRequired}
        value={value}
        onChange={onChange}
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
