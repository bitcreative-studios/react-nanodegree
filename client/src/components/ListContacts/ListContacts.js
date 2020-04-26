import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import transitionStyles from './ListContacts-TransitionStyles.module.css'
import ContactCard from '../ContactCard'

class ListContacts extends Component {
  // Describe the UI of component
  render() {
    const { contacts, action } = this.props
    return (
      <ul className="contact-list">
        <TransitionGroup>
          {contacts.map(contact => (
            <CSSTransition
              key={contact.id}
              timeout={500}
              classNames={{ ...transitionStyles }}
            >
              <li
                key={contact.id}
                className="contact-card py-2 px-3  bg-white rounded shadow"
              >
                <ContactCard
                  avatar={contact.avatarURL}
                  id={contact.id}
                  name={contact.name}
                  twitterHandle={contact.handle}
                  onDelete={action}
                />
              </li>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ul>
    )
  }
}

ListContacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      handle: PropTypes.string.isRequired,
      avatarURL: PropTypes.string,
    })
  ).isRequired,
  action: PropTypes.func.isRequired,
}

export default ListContacts
