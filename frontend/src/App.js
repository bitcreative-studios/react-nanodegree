import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Title from './components/Title'
import Stats from './components/Stats'
import TabbedNavigation from './components/TabbedNavigation'
import Recommendations from './views/Recommendations'
import UserLibrary from './views/UserLibrary'
import { getAll } from './utils/booksAPI'

class App extends Component {
  state = { books: [] }

  componentDidMount() {
    getAll().then(books => {
      console.log(books[0])
      this.setState({ books })
    })
  }

  render() {
    const { books } = this.state
    return (
      <div className="bg-gray-100 text-gray-800">
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
              <UserLibrary books={books} />
            </Route>
          </Switch>
        </Layout>
      </div>
    )
  }
}

export default App
