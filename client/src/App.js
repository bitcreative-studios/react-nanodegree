import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { create, getAll } from './utils/ContactsAPI'
import ListContacts from './components/ListContacts'
import CreateContactForm from './components/Form'
import AppBar from './components/AppBar'

class App extends Component {
  state = {
    contacts: [],
  }

  componentDidMount() {
    // const contacts = []
    // getAll().then(contacts => this.setState({ contacts }))
  }

  handleRemoveContact = id => {
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
    console.log(process.env.REACT_APP_CONTACT_API_TOKEN)
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
