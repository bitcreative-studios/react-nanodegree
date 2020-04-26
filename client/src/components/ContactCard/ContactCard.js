import React from 'react'
import PropTypes from 'prop-types'

const ContactCard = ({ id, name, avatar, twitterHandle, onDelete }) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center">
        <div className="p-4 border-r-2 border-gray-200">
          <div
            className="h-12 w-12 rounded-full
                  bg-center bg-cover"
            style={{ backgroundImage: `url(${avatar})` }}
          />
        </div>
        <div className="ml-2 flex flex-col">
          <span className="">{name}</span>
          <span className="italic text-lg text-gray-500">{`@${twitterHandle}`}</span>
        </div>
      </div>
      <button
        className="text-red-200 hover:text-red-500 transition duration-150"
        onClick={() => onDelete(id)}
      >
        <span className="icon icon-trash" />
      </button>
    </div>
  )
}

ContactCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  twitterHandle: PropTypes.string,
  onDelete: PropTypes.func,
}

export default ContactCard
