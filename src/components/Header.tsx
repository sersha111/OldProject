import React from 'react'
import { Link } from 'react-router-dom'
// import { Breadcrumb } from 'antd'

class Header extends React.Component<any, any> {
  render() {
    return (
      <header>
        <Link to="/"> Home </Link>|
        {/* <a href="#Content"> Content </a>|
        <a href="#Media"> Media </a> */}
        {/* <Breadcrumb routes={this.props.routes} params={this.props.params} /> */}
      </header>
    )
  }
}
export default Header
