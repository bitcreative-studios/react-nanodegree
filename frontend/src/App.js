import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Title from './components/Title'
import Stats from './components/Stats'
import TabNavigation from './components/TabNavigation'
import Recommendations from './views/Recommendations'
import UserLibrary from './views/UserLibrary'

function App() {
  return (
    <div className="bg-gray-100">
      <Layout>
        <Title />
        <Stats />
        <TabNavigation />
        <Switch>
          <Route path="/recommendations">
            <Recommendations />
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
