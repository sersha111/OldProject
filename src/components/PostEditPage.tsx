import React, { Component } from 'react'
import { Row, Col } from 'antd'
import idx from 'idx'
// import _ from 'lodash'
import PostEditForm from './PostEditForm'

// import { GridAutoColumnsProperty } from 'csstype'

interface IntitialStateType {
  title: string
  description: any
  photographer: string
  color: 'blue' | 'red' | 'yellow'
  isLoaded: boolean
}

const initialState: IntitialStateType = {
  title: '',
  description: '',
  photographer: '',
  color: 'blue',
  isLoaded: false,
}

class PostEditPage extends Component<{ match: any }, {}> {
  state = initialState

  // color: 'blue' | 'red' | 'yellow'
  handleChangeColor = (color: {}) => {
    this.setState({ color })
  }

  handleChangePhotographer = (event: any) => {
    this.setState({ photographer: event.target.value })
  }

  handleChangeTitle = (event: any) => {
    this.setState({ title: event.target.value })
  }

  handleChangeDescription = (event: any) => {
    this.setState({ description: event.target.value })
  }

  handleSubmit = (event: any) => {
    const id: any = idx(this.props, entry => entry.match.params.id)
    console.log('handle submit functnion: ', { id })
  }

  getPostData: any = (id: any) => {
    setTimeout(() => {
      const data = require('./../data/db.json')
      const postToEdit = data.posts.find((item: any) => item.id === id)
      if (postToEdit) {
        this.setState({ title: postToEdit.title, isLoaded: true })
      } else {
        this.setState({ isLoaded: true })
      }
    }, 500)
  }

  componentDidMount() {
    const id: any = idx(this.props, entry => entry.match.params.id)
    if (id === 'new') {
      this.setState({ isLoaded: true })
    } else {
      this.getPostData(id)
    }
  }

  render() {
    const { title, description, photographer, color, isLoaded } = this.state
    const sColor: any = color
    return (
      <div className="gutter-example">
        {isLoaded && (
          <Row gutter={6}>
            <Col className="gutter-row" span={12}>
              <div className="gutter-box">
                <PostEditForm
                  title={title}
                  description={description}
                  photographer={photographer}
                  color={color}
                  onChangeColor={this.handleChangeColor}
                  onChangePhotographer={this.handleChangePhotographer}
                  onChangeDescription={this.handleChangeDescription}
                  onChangeTitle={this.handleChangeTitle}
                  onSubmit={this.handleSubmit}
                />
              </div>
            </Col>
            <Col className="gutter-row" span={12}>
              <div className="gutter-box">
                <div>
                  <strong>Title: </strong> {title}
                </div>
                <div>
                  <strong>Description: </strong> {description}
                </div>
                <strong>Photographer: </strong> {photographer || 'None'} <br />
                <div>
                  <strong>Color: </strong> <span style={sColor && { color: sColor }}> {color} </span>
                </div>
              </div>
            </Col>
          </Row>
        )}
        {isLoaded || <div>loading...</div>}
      </div>
    )
  }

  // <div className="PostEdit">{`PostEditFrom + PostPreview ${id}`}</div>
}

export default PostEditPage
