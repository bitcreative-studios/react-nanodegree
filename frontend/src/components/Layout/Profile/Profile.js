import React from 'react'
import PropTypes from 'prop-types'
import Avatar from '../../Avatar'

const Profile = props => {
  return (
    <div
      className="hidden absolute pin-b z-10 lg:relative lg:block w-full lg:w-1/5 bg-gray-200 px-6 pt-10"
      id="profile"
    >
      <div className="flex items-center mb-6">
        <Avatar />
        <div className="ml-3">
          <p>Amie Chen</p>
          <p className="text-gray-dark mt-1 text-sm">Joined since 2017</p>
        </div>
      </div>
      <div className="my-4 border-t pt-4">
        <h3 className="text-green-600">
          You have read <strong>4 of 30 books</strong> in 2018
        </h3>
        <div className="flex flex-wrap -ml-2 justify-start items-center">
          <img
            src="./images/read-01.jpg"
            alt="read"
            className="w-1/6 lg:w-1/5 max-w-tiny shadow-md block m-2 transition duration-150 hover:brighter"
          />
          <img
            src="./images/read-02.jpg"
            alt="read"
            className="w-1/6 lg:w-1/5 max-w-tiny shadow-md block m-2 transition duration-150 hover:brighter"
          />
          <img
            src="./images/read-03.jpg"
            alt="read"
            className="w-1/6 lg:w-1/5 max-w-tiny shadow-md block m-2 transition duration-150 hover:brighter"
          />
          <img
            src="./images/read-04.jpg"
            alt="read"
            className="w-1/6 lg:w-1/5 max-w-tiny shadow-md block m-2 transition duration-150 hover:brighter"
          />
        </div>
      </div>
      <div className="mt-6">
        <p className="text-gray-dark mt-1 text-sm">Currently Reading</p>
        <div className="flex items-start mt-2">
          <img
            src="./images/read-04.jpg"
            alt="read"
            className="w-1/6 lg:w-1/5 max-w-tiny shadow-md block transition duration-150 hover:brighter"
          />
          <div className="ml-3">
            <p className="mt-1 leading-normal">
              Popular Lies* About Graphic Design
            </p>
            <p className="text-green-500 text-sm mt-1">15/250 pages</p>
          </div>
        </div>
      </div>
    </div>
  )
}

Profile.propTypes = {}

export default Profile
