import React from 'react'
import { Route } from 'react-router-dom'
import Sidebar from './Sidebar'
import Welcome from './Welcome'
import PostList from './PostList'
import TagList from './TagList'

class ListLayout extends React.Component {
  render() {
    return (
      <div className="ListLayout">
        <Sidebar />
        <main>
          <Route exact={true} path="/" component={Welcome} />
          <Route path="/posts" component={PostList} />
          <Route path="/tags" component={TagList} />
        </main>
      </div>
    )
  }
}

export default ListLayout
