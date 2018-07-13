import React, { Fragment } from 'react'
import { Button } from 'antd'
// import { Redirect } from 'react-router'

let data = require('./../data/db.json')
const sAlignRigth: {} = { float: 'right' }

interface TagsTypes {
  id: any
  title: string
}

class TagList extends React.Component<{ history: any }, {}> {
  state = { redirect: false, id: '' }

  onStartNewTag = () => {
    // let newId: any = Math.max(...data.tags.map((item: any) => item.id)) + 1
    // this.setState({ redirect: true, id: newId })
    this.props.history.push('/tag/new')
  }

  render() {
    // if (this.state.redirect) {
    //   return <Redirect push={true} to={`/tag/${this.state.id}`} />
    // }

    return (
      <Fragment>
        <Button style={sAlignRigth} type="primary" onClick={this.onStartNewTag}>
          New Tag
        </Button>
        {data.tags.map(({ id, title }: TagsTypes) => (
          <div className="names" key={id}>
            <a href={`tag/${id}`}>{title}</a>{' '}
          </div>
        ))}
      </Fragment>
    )
  }
}

export default TagList
