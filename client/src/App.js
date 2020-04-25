import React, { Component } from 'react'
import ListContacts from './components/ListContacts'
import CreateContactForm from './components/CreateContactForm'
import AppBar from './components/AppBar'

class App extends Component {
  state = {
    screen: 'list',
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
  handleNavigation = () => {
    this.setState({ screen: 'create' })
  }

  handleRemoveContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }))
  }
  render() {
    return (
      <div className="min-h-screen bg-gray-100 text-gray-700 text-xl">
        <AppBar onNavigate={this.handleNavigation} />
        <div id="content" className="container px-8 lg:px-0 mx-auto">
          {this.state.screen === 'list' && (
            <ListContacts
              contacts={this.state.contacts}
              action={this.handleRemoveContact}
            />
          )}
          {this.state.screen === 'create' && <CreateContactForm />}
        </div>
      </div>
    )
  }
}

export default App
