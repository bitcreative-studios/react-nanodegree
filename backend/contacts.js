const clone = require('clone')
const config = require('./config')

const db = {}

const defaultData = {
  contacts: [
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
  ],
}

const get = token => {
  let data = db[token]

  if (data == null) {
    data = db[token] = clone(defaultData)
  }

  return data
}

const add = (token, contact) => {
  if (!contact.id) {
    contact.id = Math.random().toString(36).substr(-8)
  }

  get(token).contacts.push(contact)

  return contact
}

const remove = (token, id) => {
  const data = get(token)
  const contact = data.contacts.find(c => c.id === id)

  if (contact) {
    data.contacts = data.contacts.filter(c => c !== contact)
  }

  return { contact }
}

module.exports = {
  get,
  add,
  remove,
}
