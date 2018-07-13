import React from 'react'
import { Route } from 'react-router-dom'
// import PostView from './PostView'
import PostEditPage from './PostEditPage'
import TagEditPage from './TagEditPage'
// import TagEdit from './TagEdit'
// import TagView from './TagView'

class ItemLayout extends React.Component {
  render() {
    return (
      <main className="ItemLayout">
        <nav>back</nav>
        <div>
          {/* <Route exact={true} path="/post/:id" component={PostView} />
          <Route path="/post/:id/edit" component={PostEdit} /> */}
          <Route path="/post/:id" component={PostEditPage} />
          <Route path="/tag/:id" component={TagEditPage} />
          {/* <Route exact={true} path="/tag/:id" component={TagView} /> */}
          {/* <Route path="/tag/:id/edit" component={TagEdit} /> */}
        </div>
      </main>
    )
  }
}

export default ItemLayout
