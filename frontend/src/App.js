import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Title from './components/Title'
import Stats from './components/Stats'
import TabbedNavigation from './components/TabbedNavigation'
import Recommendations from './views/Recommendations'
import UserLibrary from './views/UserLibrary'

function App() {
  return (
    <div className="bg-gray-100">
      <Layout>
        <Title />
        <Stats />
        <TabbedNavigation />
        <Switch>
          <Route path="/recommendations">
            <Recommendations />
          </Route>
          <Route path="/stats">
            <Stats />
          </Route>
          <Route path="/" exact>
            <UserLibrary />
          </Route>
        </Switch>
      </Layout>
    </div>
  )
}

export default App
