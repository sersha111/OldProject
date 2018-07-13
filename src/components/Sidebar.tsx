import React from 'react'
import { Link } from 'react-router-dom'

// import Tags from './../Tags/Tags'

class Sidebar extends React.Component {
  render() {
    return (
      <aside>
        <ul>
          <li>
            <Link to="/posts">Posts</Link>
          </li>
          <li>
            <Link to="/tags">Tags</Link>
          </li>
        </ul>
      </aside>
    )
  }
}

export default Sidebar
