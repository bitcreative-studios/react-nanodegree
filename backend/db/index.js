const low = require('lowdb')
const lodashId = require('lodash-id')
const FileSync = require('lowdb/adapters/FileSync')
const clone = require('clone')
const config = require('../config')

// const clients = localStorage['RND-CONTACT-SERVER-CLIENTS']
let db,
  contacts,
  initialized = false
const initialContacts = [
  {
    name: 'Patrick Mahomes',
    handle: 'knight_king_chiefsKingdom',
    avatarURL: 'http://localhost:5001/pat.jpg',
  },
  {
    name: 'Jane Jackson',
    handle: 'jj_black.majick',
    avatarURL: 'http://localhost:5001/jane.jpg',
  },
  {
    name: 'Jill Scott',
    handle: 'beautifulCoder',
    avatarURL: 'http://localhost:5001/jill.jpg',
  },
]

const init = token => {
  if (!initialized) {
    const adapter = new FileSync(`db/data/${token}.json`)
    db = low(adapter)
    db._.mixin(lodashId)
    db.defaults({ contacts: [] }).write()
    initialized = true
  }
  contacts = db.get('contacts')
}
const get = () => {
  return contacts.value()
}
const add = contact => {
  return contacts.insert(contact).write()
}

const remove = id => {
  return contacts.removeById(id).write()
}

module.exports = {
  init,
  get,
  add,
  remove,
}
