import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'antd'
// import { Redirect } from 'react-router'
// import nanoid from 'nanoid'

const data = require('./../data/db.json')
const sAlignRigth: {} = { float: 'right' }

class PostList extends React.Component<{ history: any }, {}> {
  handleStartNewPost = () => {
    // this.setState({ redirect: true, id: +new Date() })
    // const id = nanoid()
    // this.setState({ redirect: true })
    // console.log(this.props)
    // const { history } =
    this.props.history.push('/post/new')
  }

  render() {
    // if (this.state.redirect) {
    //   return <Redirect push={true} to={`/post/new`} />
    // }
    return (
      <Fragment>
        <Button style={sAlignRigth} type="primary" onClick={this.handleStartNewPost}>
          New Post
        </Button>

        {data.posts.map(({ id, title }: { id: any; title: string }) => (
          <div key={id}>
            <Link to={`/post/${id}`}>{title}</Link>
          </div>
        ))}
      </Fragment>
    )
  }
}

export default PostList

// fetch('./../../data/data.json')
// .then((res) => res.json())
// .then((data) => {
//   console.log('data:', data);
// })
// .catch( alert );
