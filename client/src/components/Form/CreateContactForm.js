import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import ImageInput from './ImageInput'
import FormField from './FormField'

const submitBaseClasses = [
  'cursor-pointer',
  'bg-transparent',
  'hover:bg-teal-500',
  'text-teal-700',
  'font-semibold',
  'hover:text-white',
  'py-2',
  'px-4',
  'border',
  'border-teal-500',
  'focus:outline-none',
  'hover:border-transparent',
  'rounded',
  'transition',
  'duration-150',
]
class CreateContactForm extends Component {
  state = {
    fullName: '',
    twitterHandle: '',
  }

  handleFormInput = evt => {
    const {
      target: { value, name },
    } = evt
    this.setState({ [name]: value })
  }
  handleSubmit = evt => {
    evt.preventDefault()
    const { onSubmit } = this.props
    const payload = {}
    payload.name = this.state.fullName
    payload.id = Math.random().toString(36).substr(-11)
    payload.handle = this.state.twitterHandle
    payload.avatarURL = null
    onSubmit(payload)
    this.setState({ fullName: '', twitterHandle: '' })
  }
  render() {
    const { handleSubmit, handleFormInput } = this
    return (
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 text-lg"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <FormField
            label="Full Name"
            name="fullName"
            isRequired
            placeholder="Jane Doe"
            value={this.state.fullName}
            onChange={handleFormInput}
          />
        </div>
        <div className="mb-6">
          <FormField
            label="Twitter Handle"
            name="twitterHandle"
            errorMessage="You have to enter a full name"
            placeholder="@jane_doey-eyes"
            value={this.state.twitterHandle}
            onChange={handleFormInput}
          />
        </div>
        <div className="flex items-center justify-between">
          <input
            type="submit"
            className={classNames(submitBaseClasses)}
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
