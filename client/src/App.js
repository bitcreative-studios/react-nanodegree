import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { create, getAll, remove } from './utils/ContactsAPI'
import ListContacts from './components/ListContacts'
import CreateContactForm from './components/Form'
import AppBar from './components/AppBar'

class App extends Component {
  state = {
    contacts: [],
  }

  componentDidMount() {
    getAll().then(contacts => {
      if (!contacts.length) {
        const sampleData = [
          {
            id: Math.random().toString(36).substr(-11),
            name: 'Patrick Mahomes',
            handle: 'knight_king_chiefsKingdom',
            avatarURL: 'http://localhost:5001/pat.jpg',
          },
          {
            id: Math.random().toString(36).substr(-11),
            name: 'Jane Jackson',
            handle: 'jj_black.majick',
            avatarURL: 'http://localhost:5001/jane.jpg',
          },
          {
            id: Math.random().toString(36).substr(-11),
            name: 'Jill Scott',
            handle: 'beautifulCoder',
            avatarURL: 'http://localhost:5001/jill.jpg',
          },
        ]
        this.setState({ contacts: sampleData })
      } else {
        this.setState({ contacts })
      }
    })
  }

  handleRemoveContact = id => {
    remove(id).catch(e => console.error(e))
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }))
  }

  handleSubmit = payload => {
    console.log('----- DEBUG [@handleSubmit] -----')
    create(payload).catch(e => console.error(e))
    this.setState(prevState => ({ contacts: [...prevState.contacts, payload] }))
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
