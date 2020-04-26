// because we have a proxy in our package.json file, we don't need this
// const api = process.env.REACT_APP_CONTACTS_API_URL || 'http://localhost:5001';

let token = localStorage['RND-CONTACT-APP-TOKEN']

if (!token)
  // Nice little hack to generate random string (/[0-9a-z]{8}/)
  token = localStorage['RND-CONTACT-APP-TOKEN'] =
    process.env.REACT_APP_CONTACT_API_TOKEN

const headers = {
  Accept: 'application/json',
  Authorization: token,
}

export const getAll = () =>
  fetch(`/contacts`, { headers })
    .then(res => res.json())
    .then(data => data.contacts)

export const remove = contact =>
  fetch(`/contacts/${contact.id}`, { method: 'DELETE', headers })
    .then(res => res.json())
    .then(data => data.contacts)

export const create = body =>
  fetch(`/contacts`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  }).then(res => res.json())
