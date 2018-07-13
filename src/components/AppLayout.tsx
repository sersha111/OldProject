import React from 'react'
import Header from './Header'
import ListLayout from './ListLayout'
import ItemLayout from './ItemLayout'
// import { Breadcrumb } from 'antd'

// import Sidebar from './Sidebar'
// import PostList from './PostList'
// import TagList from './TagList'
// import Welcome from './Welcome'
import { Route } from 'react-router-dom'

class AppLayout extends React.Component {
  render() {
    return (
      <div className="AppLayout">
        <Header />
        <Route name="home" breadcrumbName="Home" exact={true} path="/" component={ListLayout} />
        <Route path="/posts" component={ListLayout} />
        <Route path="/post/:id" component={ItemLayout} />
        <Route path="/tags" component={ListLayout} />
        <Route path="/tag/:id" component={ItemLayout} />
        {/* <Route path="/post/:id/edit" component={ItemLayout} /> */}
        {/* <Route path="/tag/:id/edit" component={ItemLayout} /> */}
        {/* <Fragment> */}

        {/* <Sidebar /> */}
        {/* <main> */}
        {/* <Route exact={true} path="/" component={Welcome} />
          <Route path="/tags" component={TagList} />
          <Route path="/posts" component={PostList} /> */}
        {/* </main> */}
      </div>
    )
  }
}

export default AppLayout
