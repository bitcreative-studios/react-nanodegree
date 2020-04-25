import React, { Component } from 'react'
import ListContacts from './components/ListContacts'

class App extends Component {
  state = {
    display: false,
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

  remove = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }))
  }
  render() {
    return (
      <div className="min-h-screen bg-gray-100 text-gray-700 text-xl">
        <div className="bg-white flex  justify-between items-center px-8 mb-4">
          <div className="flex items-center">
            <label className="mr-1">
              <span className="text-4xl icon icon-search" />
            </label>
            <input
              type="text"
              className="px-2 py-1"
              placeholder="Search contacts"
              name="search"
              id="search"
            />
          </div>
          <span
            className=" cursor-pointer text-4xl
            icon icon-user-plus"
          />
        </div>
        <div className="container px-8 lg:px-0 mx-auto">
          <ListContacts contacts={this.state.contacts} action={this.remove} />
        </div>
      </div>
    )
  }
}

export default App
