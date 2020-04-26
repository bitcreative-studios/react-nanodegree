import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ImageInput from './ImageInput'

class CreateContactForm extends Component {
  render() {
    const { onSubmit: handleSubmit } = this.props
    return (
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 text-lg"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label className="block   font-bold mb-2" htmlFor="full-name">
            Full Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2
              px-3  leading-tight focus:outline-none
              focus:shadow-outline"
            id="full-name"
            type="text"
            placeholder="Jane Doe"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block   font-bold mb-2" htmlFor="twitter-handle">
            Twitter Handle
          </label>
          <input
            className="shadow appearance-none border border-red-500 rounded
              w-full py-2 px-3  mb-3 leading-tight
              focus:outline-none focus:shadow-outline"
            id="twitter-handle"
            type="text"
            placeholder="@jane_doey-eyes"
          />
          <p className="text-red-500 text-xs italic">
            Please choose a password.
          </p>
        </div>
        <div className="flex items-center justify-between">
          <input
            type="submit"
            className="cursor-pointer bg-transparent hover:bg-teal-500
              text-teal-700 font-semibold hover:text-white py-2 px-4 border
              border-teal-500 focus:outline-none hover:border-transparent rounded"
            value="Add Contact"
          />
        </div>
        <ImageInput />
      </form>
    )
  }
}

CreateContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default CreateContactForm
