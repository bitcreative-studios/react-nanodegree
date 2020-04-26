import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import ListContacts from './components/ListContacts'
import CreateContactForm from './components/CreateContactForm'
import AppBar from './components/AppBar'

class App extends Component {
  state = {
    contacts: [
      {
        id: 'Patrick',
        name: 'Patrick Mahomes',
        handle: 'knight_king_chiefsKingdom',
        avatarURL: 'http://localhost:5001/pat.jpg',
      },
      {
        id: 'jane',
        name: 'Jane Jackson',
        handle: 'jj_black.majick',
        avatarURL: 'http://localhost:5001/jane.jpg',
      },
      {
        id: 'Jill',
        name: 'Jill Scott',
        handle: 'beautifulCoder',
        avatarURL: 'http://localhost:5001/jill.jpg',
      },
    ],
  }

  handleRemoveContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }))
  }

  handleSubmit = evt => {
    evt.preventDefault()
    console.log('----- DEBUG [@handleSubmit] -----')
  }
  render() {
    const { contacts } = this.state
    return (
      <div className="min-h-screen bg-gray-100 text-gray-700 text-xl">
        <AppBar />
        <div id="content" className="container px-8 lg:px-0 mx-auto">
          <Route path="/create">
            <CreateContactForm onSubmit={this.handleSubmit} />
          </Route>
          <Route path="/" exact>
            <ListContacts
              contacts={contacts}
              action={this.handleRemoveContact}
            />
          </Route>
        </div>
      </div>
    )
  }
}

export default App
