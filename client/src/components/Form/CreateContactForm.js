import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ImageInput from './ImageInput'
import FormField from './FormField'

class CreateContactForm extends Component {
  state = {}
  handleSubmit = evt => {
    evt.preventDefault()
    const { onSubmit } = this.props
    const payload = {}
    onSubmit(payload)
  }
  render() {
    const { handleSubmit } = this
    return (
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 text-lg"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <FormField
            label="Full Name"
            name="full-name"
            isRequired
            placeholder="Jane Doe"
          />
        </div>
        <div className="mb-6">
          <FormField
            label="Twitter Handle"
            name="twitter-handle"
            errorMessage="You have to enter a full name"
            placeholder="@jane_doey-eyes"
          />
        </div>
        <div className="flex items-center justify-between">
          <input
            type="submit"
            className="cursor-pointer bg-transparent hover:bg-teal-500
              text-teal-700 font-semibold hover:text-white py-2 px-4 border
              border-teal-500 focus:outline-none hover:border-transparent rounded
              transition duration-150"
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
