import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import serialize from 'form-serialize'
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
    name: '',
    handle: '',
  }

  handleFormInput = evt => {
    const {
      target: { value, name },
    } = evt
    this.setState({ [name]: value })
  }
  handleSubmit = evt => {
    evt.preventDefault()
    const values = serialize(evt.target, { hash: true })
    console.log(values)
    const { onSubmit } = this.props
    onSubmit(values)
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
            name="name"
            isRequired
            placeholder="Jane Doe"
            value={this.state.name}
            onChange={handleFormInput}
          />
        </div>
        <div className="mb-6">
          <FormField
            label="Twitter Handle"
            name="handle"
            errorMessage="You have to enter a full name"
            placeholder="@jane_doey-eyes"
            value={this.state.handle}
            onChange={handleFormInput}
          />
        </div>
        <input type="hidden" name="avatarUrl" value="fake" />
        <input
          type="hidden"
          name="id"
          value={Math.random().toString(36).substr(-11)}
        />
        <div className="flex items-center justify-between">
          <input
            type="submit"
            className={classNames(submitBaseClasses)}
            value="Add Contact"
          />
        </div>
      </form>
    )
  }
}

CreateContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default CreateContactForm
