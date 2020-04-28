import React from 'react'
import PropTypes from 'prop-types'
import BookPreview from '../components/BookPreview'

const UserLibrary = ({ books }) => {
  return (
    <div
      className="px-2 pt-2 md:px-0 flex flex-wrap
      order-2 pb-8 js-tab-pane active id='section-library'"
    >
      {books.map(book => (
        <BookPreview
          status="loaded"
          thumbnail={book.imageLinks.thumbnail}
          title={book.title}
        />
      ))}
    </div>
  )
}

UserLibrary.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default UserLibrary
