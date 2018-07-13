import React, { Component } from 'react'
import { Row, Col } from 'antd'
// import idx from 'idx'
// import _ from 'lodash'
import TagEditForm from './TagEditForm'
import { EnumColor } from '../index'

// import { GridAutoColumnsProperty } from 'csstype'

interface IntitialStateType {
  title: string
  description: any
  keywords: string
  priority: number
  slidesPerView: number
  rows: number
  color: EnumColor
  isLoaded: boolean
}

const initialState: IntitialStateType = {
  title: '',
  description: '',
  keywords: '',
  priority: 1,
  slidesPerView: 3,
  rows: 1,
  color: 'blue',
  isLoaded: false,
}

class TagEditPage extends Component<{ match: any }, {}> {
  state = initialState

  handleChangeTitle = (event: any) => {
    this.setState({ ...this.state, title: event.target.value })
  }

  handleChangeDescription = (event: any) => {
    this.setState({ ...this.state, description: event.target.value })
  }

  handleChangeKeywords = (event: any) => {
    this.setState({ ...this.state, keywords: event.target.value })
  }
  handleChangePriority = (priority: number) => {
    this.setState({ ...this.state, priority })
  }

  handleChangeSlidesPerView = (slidesPerView: any) => {
    this.setState({ ...this.state, slidesPerView })
  }

  handleChangeRows = (rows: any) => {
    this.setState({ ...this.state, rows })
  }

  handleChangeColor = (color: {}) => {
    this.setState({ ...this.state, color })
  }

  handleSubmit = (event: any) => {
    const id: any = this.props.match.params.id
    console.log('handle submit functnion: ', { id })
  }

  getTagData: any = (id: any) => {
    setTimeout(() => {
      const data = require('./../data/db.json')
      const tagToEdit = data.tags.find((item: any) => item.id === id)
      if (tagToEdit) {
        this.setState({ ...this.state, title: tagToEdit.title, isLoaded: true })
      } else {
        this.setState({ ...this.state, isLoaded: true })
      }
    }, 500)
    this.setState({ ...this.state, isLoaded: true })
  }

  componentDidMount() {
    // const id: any = idx(this.props, entry => entry.match.params.id)
    const id: any = this.props.match.params.id
    if (!this.state.isLoaded) {
      this.getTagData(id)
    }
  }

  render() {
    const { title, description, keywords, priority, slidesPerView, rows, color, isLoaded } = this.state
    const sColor: any = color
    return (
      <div className="gutter-example">
        {isLoaded && (
          <Row gutter={6}>
            <Col className="gutter-row" span={12}>
              <div className="gutter-box">
                <TagEditForm
                  title={title}
                  description={description}
                  keywords={keywords}
                  priority={priority}
                  slidesPerView={slidesPerView}
                  rows={rows}
                  color={color}
                  onChangeTitle={this.handleChangeTitle}
                  onChangeDescription={this.handleChangeDescription}
                  onChangeKeywords={this.handleChangeKeywords}
                  onChangePriority={this.handleChangePriority}
                  onChangeSlidesPerView={this.handleChangeSlidesPerView}
                  onChangeRows={this.handleChangeRows}
                  onChangeColor={this.handleChangeColor}
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
                <div>
                  <strong>Keywords: </strong> {keywords}
                </div>
                <div>
                  <strong>Priority: </strong> {priority || 'None'}
                </div>
                <div>
                  <strong>Slides per view: </strong> {slidesPerView || 'None'}
                </div>
                <div>
                  <strong>Rows: </strong> {rows || 'None'}
                </div>
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
}

export default TagEditPage
