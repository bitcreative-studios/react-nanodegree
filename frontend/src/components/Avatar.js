import React, { useEffect, useRef } from 'react'
import Anime from 'react-anime'
import PropTypes from 'prop-types'

const Avatar = props => {
  return (
    <Anime>
      <svg
        onMouseEnter={() => {}}
        onMouseLeave={() => {}}
        width="60px"
        height="60px"
        viewBox="0 0 60 60"
        version="1.1"
        id="avatar"
      >
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g transform="translate(-1178.000000, -87.000000)">
            <g transform="translate(1159.000000, 0.000000)">
              <g transform="translate(0.000000, 87.000000)">
                <g transform="translate(19.000000, 0.000000)">
                  <circle
                    id="small-circle"
                    fill="#5661B3"
                    cx="30"
                    cy="30"
                    r="30"
                  />

                  <path
                    id="moon"
                    d="M30.5,49.7304688 C40.7172679,49.7304688 30.5,43.266096 30.5,33.0488281 C30.5,22.8315603 40.7172679,12 30.5,12 C20.2827321,12 11.0390625,20.6479665 11.0390625,30.8652344 C11.0390625,41.0825022 20.2827321,49.7304688 30.5,49.7304688 Z"
                    fill="#F4E1E0"
                  />
                  <circle
                    id="big-circle"
                    fill="#070707"
                    cx="31"
                    cy="31"
                    r="11"
                  />
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
    </Anime>
  )
}

Avatar.propTypes = {}

export default Avatar
