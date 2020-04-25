import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

class ListContacts extends Component {
  // Describe the UI of component
  render() {
    const { contacts, action } = this.props
    console.log(contacts)
    return (
      <ul className="contact-list">
        <TransitionGroup>
          {contacts.map(contact => (
            <CSSTransition key={contact.id} timeout={500} classNames="user">
              <li
                key={contact.id}
                className="contact-card py-2 px-3  bg-white rounded shadow"
              >
                <div className="flex justify-between items-center">
                  <div className="flex">
                    <div
                      className=""
                      style={{ backgroundImage: `url(${contact.avatarURL})` }}
                    />
                    <div className="flex flex-col">
                      <span className="">{contact.name}</span>
                      <span className="italic text-lg text-gray-500">{`@${contact.handle}`}</span>
                    </div>
                  </div>
                  <button
                    className="text-red-200 hover:text-red-500 transition duration-150"
                    onClick={() => action(contact.id)}
                  >
                    <span className="icon icon-trash" />
                  </button>
                </div>
              </li>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ul>
    )
  }
}

ListContacts.propTypes = {}

export default ListContacts
