import React from 'react'
import SearchBar from './SearchBar/SearchBar'
import Profile from './Profile/Profile'
import SideNav from './SideNav/SideNav'

const Layout = ({ children }) => {
  return (
    <>
      <SearchBar />
      <main className="flex">
        <SideNav />
        <div className="flex flex-1 flex-col md:px-6 pt-10" id="content">
          {children}
        </div>
        <Profile />
      </main>
    </>
  )
}

export default Layout
